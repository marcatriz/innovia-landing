# innovia-landing — Codebase conventions for Claude

This file captures conventions that survive across sessions. Read it whenever you touch this repo.

## Positioning (generic consultancy)

As of 2026-06-09 the site presents Innovia Systems as a **specialist consultancy for organizations that run complex operational and customer workflows** (Fit to Digital / Fit to AI diagnostics, operating-model and process design, software prototyping, co-design, implementation support). It is industry-neutral by design.

Do NOT reintroduce vertical/product framing: no leasing, consumer finance, fleet management, asset finance, lending-platform, or named verticals (Asset Finance / Fleet / Working Capital / Consumer Credit / Secured Microcredit) anywhere in shipped copy. Frame everything in terms of generic operational and customer workflows.

**One deliberate exception, added 2026-08-27: the `book` section (`components/Book.tsx`, section id `#book`).** The founder published *The Price of Knowing: How Asset Data and AI Decide Who Wins in Leasing* in August 2026, and the site links to it. The word "leasing" appears there only inside the book's own subtitle and cover, never as a description of what Innovia does. The surrounding copy is deliberately written one level up, about what an organization knows about the assets it finances and whether the answer arrives in time to change a decision. Keep it that way: this is authorship and evidence of method, not a change of positioning, and it is not a licence to reintroduce vertical framing elsewhere.

The same section carries the founder's background as "nearly two decades operating European leasing platforms" (since 2007). That phrasing is the standing one and it is deliberate on two counts: the former employer and its predecessor products are never named, and the time anchor is attached to a person's career, never to Innovia-the-platform. The sentence that follows it, that the question reaches past any single industry, is what keeps a founder credential from becoming company positioning. Do not drop that bridge.

**Second deliberate exception, added 2026-09-01: the `/insights` rubric and the Asset Finance Letter.** Innovia publishes a four-page monthly letter on European asset finance at `/insights`, and the nav entry for it is deliberately generic (`Insights` / `Analize` / `Analysen` / `Analyses` / `Analisi`) while the publication itself is unambiguously about leasing and equipment finance. That split is the decision, not an accident: the nav stays industry-neutral, the signed publication carries the vertical. It was taken explicitly by Catalin on 2026-09-01 with the alternative options on the table (a vertical rubric name in the nav, or a separate subdomain), so do not "fix" it in either direction without asking.

The reasoning is the same as for the book: this is evidence of method, published under our own name and sourced, rather than a claim about which industries we serve. It is **not** a licence to reintroduce vertical framing in the hero, services, focus or partnership copy. If someone later asks for asset finance language on the homepage, that is a new decision and a different one.

The `capability` paragraph is the only one in that section that talks about us rather than about the book, which is why it is set apart visually. Two things in it are deliberate and should survive editing: it claims a method, not an outcome, and it names the case where we are not the answer ("sometimes the answer is a process change and no software at all"). Removing that concession to make the paragraph punchier would turn an honest capability claim into a sales line, and it is the sentence a sceptical reader trusts.

## Five-locale lockstep

Every site edit ships in `en`, `ro`, `de`, `fr`, `it` in the same commit. Never partial coverage. `en.json` is canonical; keep keys identical and in the same order across all 5 files (`messages/*.json`). Brand line "Fit for Digital. Fit for AI." (period, not comma) stays English in every locale. No em dashes in any copy. Romanian site copy keeps diacritics (formal), unlike chat.

## Homepage structure

`app/[locale]/page.tsx` renders, in order: Header, Hero, Problem, Services, Modules (repurposed as "Areas of focus", section id `#focus`, six items), Partnership, Contact, Footer. Sub-pages: `/diagnostic` (Fit to Digital / Fit to AI questionnaire), `/fit-sprint`, `/insights` (the Asset Finance Letter index), `/insights/<slug>` (one issue), `/legal` and `/privacy`. There are no whitepapers, changelog, use-cases, stats, thesis, foundation, or operator sections (removed in the 2026-06-09 repositioning).

`components/BackLink.tsx` reuses the `whitepaper` namespace (`backToHome` / `backToList`) for inner-page back links; keep that JSON block even though the whitepapers pages are gone.

## Legal pages

`/legal` and `/privacy` both render through `components/LegalDoc.tsx` from the `legal` and `privacy` message namespaces, so they follow the five-locale lockstep like any other copy. `/legal` carries the ONRC identification a commercial site owes under Romanian and EU rules; if the company data changes (registered office, VAT registration, share capital), it changes in `legal.identity.rows` in all five files.

`/privacy` describes what the site actually does, not a template. Keep it true: it currently states that there are no cookies, no analytics and no backend, that the diagnostic keeps answers in `localStorage` under `innovia-diagnostic-v1`, and that Google Fonts receives the visitor IP. Add an analytics script, a form, or an embed and that page has to change in the same commit.

## Metadata and SEO

Every route gets its metadata from `buildMetadata()` in `lib/seo.ts`: canonical, five `hreflang` alternates plus `x-default`, Open Graph and Twitter card. Adding a route means three things in the same commit:

1. `meta.<page>` (title + description) in all five `messages/*.json`.
2. `generateMetadata` in the page, calling `buildMetadata(locale, '<page>', '<path>/')`.
3. An entry in `ROUTES` in `app/sitemap.ts`.

Paths carry the trailing slash `trailingSlash: true` emits. Without it the canonical points at the 308 instead of the page.

## Security headers

`public/_headers` is the source of the Cloudflare Pages response headers (CSP, HSTS, frame and permissions policy). A header set there overrides the platform default of the same name. The CSP pins scripts and styles to this origin and allows only the Google Fonts origins; loading anything from a new host means editing that file, and the change is verified by serving `out/` with those headers and checking the browser console, not by assuming.

## Icons

`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` are generated from `public/innovia-profile.png` (the brand mark). Regenerate them from that source if the mark changes.

Do not add manual `<link rel="icon">` tags to `app/[locale]/layout.tsx`. Next emits the three above on its own; the manual tag that used to be there pointed at the full-size brand master and made every page fetch it.

## The Asset Finance Letter (`/insights`)

A cover plus four pages, published monthly, in English only. One route, one renderer and one data
file per issue, so the web page and the PDF cannot drift apart.

- `content/insights/types.ts` is the content model. It forces every figure to carry `period`,
  `basis` and `sourceUrl`, and it types `pages` as a tuple of exactly four, because the format is
  part of the product. `cover` carries the strapline and the one figure the issue leads on; the
  contents list is derived from the pages, never authored, so a renamed head cannot leave the cover
  advertising a section that no longer exists.
- `content/insights/<slug>.ts` is one issue, authored as data rather than JSX.
- `content/insights/index.ts` is the registry. Publishing an issue is one import plus one array entry.
- `components/insights/IssueReader.tsx` renders the document and offers two ways to read it: the
  server-rendered scroll, which is what the print rules turn into the PDF, and a booklet that shows
  one sheet at a time and turns it in 3D. Booklet mode is not the default, so nothing waits on
  hydration, and the choice is remembered in `localStorage`. `IssueCoverSheet`, `IssuePageSheet`,
  `IssueBlocks` and `IssueChart` are the pieces; `InsightIndex.tsx` renders the rubric listing.
- `app/globals.css` carries the `@media print` rules. The page break is a CSS rule on `.issue-page`,
  never a hand-placed spacer, because a spacer drifts the first time a paragraph grows.
- `scripts/build_issue_pdf.py` renders the English route to `public/insights/innovia-asset-finance-<slug>.pdf`
  and **exits non-zero unless the PDF is exactly five pages**. It also reports per-page headroom and
  warns under 40px, which is the number to watch when writing next month's issue. The cover is
  exempt from that warning because it is pinned to the full sheet by design.

**Publishing an issue:**

1. Write `content/insights/<slug>.ts`, add it to `ISSUES` in `content/insights/index.ts`.
2. `npx tsc --noEmit`, then `npm run build`.
3. Serve the export and generate the PDF (stop the server before the next build, it locks `out/`):

       cd out && python -m http.server 3100
       python scripts/build_issue_pdf.py <slug> --base-url http://localhost:3100

4. If the assertion fails, the fix is the content or the print rules. Do not relax the check.
   `@page` carries no margin: each page paints its own padding, which is what lets the cover bleed
   to the edge, and the page break sits on `.issue-sheet-wrap` rather than on `.issue-page`.
5. Commit the issue file, the registry entry and the generated PDF together.

**Locale rules for the letter.** The chrome is in the five-locale lockstep like everything else: the
`insights` namespace, `nav.insights` and `meta.insights` all ship in five languages together. The
issues themselves are English, and `buildIssueMetadata` in `lib/seo.ts` points every locale
canonical at the English URL so five prefixes do not compete for one document. The locale routes
still render, because a reader arriving from a Romanian page should get the document, not a 404.
`insights.masthead` stays "Asset Finance Letter" in all five files: it is a publication name, like
the brand line.

**House style.** Newspaper, not website, and the full brief lives in the header comment of
`content/insights/<slug>.ts` because that is where somebody writing an issue will actually read it.
Heads are short and allusive and do not all share one rhythm. Openings are concrete: a place, an
actor, a date. Verbs carry the sentence. Three habits stay out, because they are what made the first
draft read as machine-written: the antithesis reflex used more than once or twice in an issue, the
self-satisfied closing clause, and preaching about our own method inside the argument. Open the
leader on a wide initial letter, since the drop cap floats it. British spelling, `%` in text, dates as "August 6th",
figures rounded in prose and exact in the table, no bylines, no first person singular. Companies are
named where the transaction is public. Every page carries a `kicker` in small capitals over its
head; page one carries the reversed masthead bar and the issue title as its head, so `pages[0].heading`
is not printed and names the section for assistive technology instead. Prose pages set `columns: 2`,
tabular pages `columns: 1`. Two columns are load-bearing: one column of 9pt type at this measure runs
to roughly twice a comfortable line, and halving the column height is what leaves room for the chart.

**Charts.** `components/insights/IssueChart.tsx`, hand-rolled SVG, no chart library (the CSP allows
none and a four-page document does not need one). Two rules that are not negotiable. First, every bar
in one chart shares one reporting period, which is why `ChartBar` has no period field: a chart mixing
a monthly growth rate with a half-year one commits the error the letter exists to point out. Second,
the colours are the brand diverging pair `#079A9C` growth and `#D6443C` contraction, which passed the
palette validator on all six checks; teal-700 fails the chroma floor and reads grey, so do not
substitute it. Colour is never the only carrier: each bar has a signed direct label and its own side
of the zero rule, so the chart survives greyscale and colour vision deficiency.

**Extent, and variants.** The standard letter is a cover plus four pages, but neither number is
hard-coded. The document publishes its own sheet count in `data-sheets` on the `article`, and the PDF
build asserts the rendered PDF matches that claim, so the artefact and the content cannot drift out
of step and there is no constant to remember in two places. `--expect N` remains available as an
optional cross-check and fails loudly if it disagrees with the document.

An issue with `unlisted: true` is kept out of the public index, the sitemap and `LATEST_ISSUE`, while
its route and its PDF still build. That is for a variant meant to be read and compared rather than
published: `2026-09-hemingway.ts` is the same September figures in a plain declarative register, two
pages and no cover. Its header comment records what that register cannot do, which is hold a
comparability caveat inside a sentence, and therefore why the standard letter is the standard one.

**Sourcing.** Figures come from the `leasing-radar` corpus at `C:\leasing-radar\`, and every issue
should be traceable to that month's `refresh-log/` diff, which carries the comparability warnings
and the negative findings. If the refresh log records a caveat, the caveat belongs in the table.

**What the letter does not do.** No signup form, no analytics, no third-party embed. That is what
keeps `/privacy` true when it says the site sets no cookies, has no backend and runs no analytics.
Adding email capture to the letter means editing `/privacy` in the same commit.

---

(Other conventions can be added here as they accumulate. Keep this file under 400 lines so it stays loaded into context.)

## Build, verification and deploy

`next.config` sets `output: export`, so the build writes static HTML to `out/`. **`next start`
does not work here** and says so: it tells you to serve `out/` instead. Two consequences for
anyone verifying a change: serve `out/` (`npx serve out`) or, simpler, grep the built files
directly, because `out/en/index.html` is literally what ships. And never read "zero matches" from
a server you did not confirm is answering; on 2026-09-11 a check reported the new link missing in
all five locales when in fact `next start` had refused to boot.

Deploy is the Cloudflare Pages project **`innovia-landing`** (domains `innovia-landing.pages.dev`,
`innoviasystems.io`, `www.innoviasystems.io`), connected to the GitHub repo. **Pushing to `main`
is the deploy**; there is no workflow file and no manual `wrangler pages deploy` step. Measured on
2026-09-11: about seventy-five seconds from `git push` to the change being live on
`innoviasystems.io`. A change that is meant to reach the site therefore lands on `main`, not on a
branch.

## Editing messages/*.json

The files are CRLF with two-space indent. Prefer a targeted insertion over a `json.load` plus
`json.dump` round trip: reserialising rewrites line endings and key order and turns a two-line
change into a whole-file diff that hides what actually changed.

**Anchor on the object, not on the key name.** `"book"` appears twice in every locale file: once
as a nav label near the top (`"book": "Book"`) and once as the section object (`"book": {`). A
script that searches for `"book"` and then for the next `"cta"` lands in the hero block. This
happened on 2026-09-11 and put a book string next to the "Book a 45-minute working session"
button before it was caught and reverted.
