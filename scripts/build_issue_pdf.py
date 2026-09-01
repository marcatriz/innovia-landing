"""Render one issue of the Asset Finance Letter to a four-page A4 PDF.

The PDF is not a separate document. It is the same page the web serves, printed
through the print rules in `app/globals.css`, so the two can never drift apart.

The page count is asserted, not hoped for. An issue is a four-page document; if
the rendered PDF is not exactly four pages the content overflowed or a page
break moved, and this script exits non-zero rather than shipping a five-page
"four-page letter". Run it against a server that is serving the site:

    npm run dev                                  # or serve out/ after a build
    python scripts/build_issue_pdf.py 2026-09

Options:
    --base-url http://localhost:3000             # default
    --expect 5                                   # optional cross-check
    --out public/insights/                        # written filename is fixed
"""
import argparse
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright
from pypdf import PdfReader

REPO = Path(__file__).resolve().parent.parent
DEFAULT_OUT = REPO / "public" / "insights"

# A4 is 210x297mm, and `@page` carries no margin: each page paints its own
# padding so the cover can bleed to the edge. The box to measure against is
# therefore the whole sheet, 210x297mm, which at 96 CSS px per inch is 794x1123.
PRINTABLE_W = 794
PRINTABLE_H = 1123
# Headroom below this is reported as tight: it fits now, but one added sentence
# next month will not.
MIN_SPARE = 40


def build(slug: str, base_url: str, out_dir: Path, expect: int | None) -> int:
    out_dir.mkdir(parents=True, exist_ok=True)
    target = out_dir / f"innovia-asset-finance-{slug}.pdf"
    # The issue is published in English; the PDF is rendered from the English route.
    url = f"{base_url.rstrip('/')}/en/insights/{slug}/"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        print(f"  -> {url}")
        response = page.goto(url, wait_until="networkidle", timeout=45000)
        if response is None or response.status != 200:
            status = "no response" if response is None else response.status
            print(f"FAIL: {url} returned {status}")
            browser.close()
            return 2

        # Fonts are webfonts; without this the PDF can print in the fallback stack.
        page.wait_for_timeout(1200)
        page.emulate_media(media="print")

        # Per-section headroom, measured before the PDF is written. The page count
        # alone tells you a page overflowed but not which one or by how much, and
        # at a monthly cadence the useful signal is how much room next month has.
        page.set_viewport_size({"width": PRINTABLE_W, "height": PRINTABLE_H})
        page.wait_for_timeout(300)
        sections = page.evaluate(
            """() => Array.from(document.querySelectorAll('.issue-page')).map((el, i) => ({
                index: i + 1,
                height: Math.round(el.getBoundingClientRect().height),
                heading: (el.querySelector('h2')?.textContent || '').trim().slice(0, 44),
                cover: el.classList.contains('issue-cover'),
            }))"""
        )
        tight = []
        for sec in sections:
            spare = PRINTABLE_H - sec["height"]
            if sec["cover"]:
                # The cover is pinned to the full sheet on purpose, so it always
                # reports zero headroom. Warning about it every month would train
                # the reader to ignore the warning that matters.
                flag = "cover, pinned to the sheet"
            elif spare < 0:
                flag = "OVER"
            elif spare < MIN_SPARE:
                flag = "tight"
            else:
                flag = "ok"
            if flag in ("OVER", "tight"):
                tight.append(sec["index"])
            print(f"  page {sec['index']}: {sec['height']:>5}px of {PRINTABLE_H}px, "
                  f"{spare:>5}px spare  [{flag}]  {sec['heading']}")
        over = [s_["index"] for s_ in sections if not s_["cover"] and PRINTABLE_H - s_["height"] < 0]
        if over:
            print(f"  NOTE: pages {over} do not fit. Cut content or loosen the print rules.")
        near = [i for i in tight if i not in over]
        if near:
            print(f"  NOTE: pages {near} have less than {MIN_SPARE}px of headroom. They fit today; "
                  f"a sentence added next month will push them over.")

        # The document publishes its own extent. Reading it here means the
        # assertion below compares the artefact against the content's own claim
        # rather than against a constant that has to be remembered.
        declared = page.evaluate(
            "() => { const a = document.querySelector('article[data-sheets]');"
            " return a ? Number(a.dataset.sheets) : null; }"
        )

        page.pdf(
            path=str(target),
            format="A4",
            print_background=True,
            prefer_css_page_size=True,
        )
        browser.close()

    pages = len(PdfReader(str(target)).pages)
    size_kb = target.stat().st_size / 1024
    print(f"  {target.relative_to(REPO)}  {pages} pages, {size_kb:.0f} KB")

    if declared is None:
        print("FAIL: the page published no data-sheets attribute, so there is nothing to check against.")
        return 2

    if expect is not None and expect != declared:
        print(
            f"FAIL: --expect says {expect} but the document declares {declared} sheets. "
            f"One of the two is wrong; the document is usually right."
        )
        return 2

    if pages != declared:
        print(
            f"FAIL: the document declares {declared} sheets and the PDF has {pages}. Content "
            f"overflowed or a page break moved. Fix the content or the print rules; do not relax this."
        )
        return 1

    print(f"OK: {pages} pages, matching the {declared} the document declares")
    return 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("slug", help="issue slug, e.g. 2026-09")
    parser.add_argument("--base-url", default="http://localhost:3000")
    parser.add_argument("--out", default=str(DEFAULT_OUT))
    parser.add_argument("--expect", type=int, default=None,
                        help="optional cross-check against the extent the document declares")
    args = parser.parse_args()
    sys.exit(build(args.slug, args.base_url, Path(args.out), args.expect))
