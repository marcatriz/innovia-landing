"""
Capture 10 blurred Innovia screenshots for the landing-page "Use Cases" section.

Boots one Playwright browser, opens one context per role, logs each role in,
navigates to assigned routes, screenshots at 1440x900, and writes blurred
versions to public/use-cases/.

NEVER use UCL (port 5279/5273). Innovia trunk only: backend :5179, frontend :5173.
"""

import asyncio
from pathlib import Path
from PIL import Image, ImageFilter
from playwright.async_api import async_playwright, BrowserContext, Page

FRONTEND = "http://localhost:5173"
OUT_DIR = Path(__file__).parent.parent / "public" / "use-cases"  # blurred, shipped
RAW_DIR = Path(__file__).parent / "_captures"                     # unblurred, gitignored
BLUR_RADIUS = 6  # px; soft blur — keeps layout, obscures specific data

# Roles -> credentials. Innovia trunk multi-tenant uses tenantCode "RO".
ROLES = {
    "admin":         {"username": "admin",         "password": "admin123", "tenantCode": "RO"},
    "sales":         {"username": "RLRO_SALES",    "password": "demo123",  "tenantCode": "RO"},
    "risk":          {"username": "RLRO_RISK",     "password": "demo123",  "tenantCode": "RO"},
    "insurance":     {"username": "RLRO_ASIG",     "password": "demo123",  "tenantCode": "RO"},
    "fleet":         {"username": "fleet.manager", "password": "admin123", "tenantCode": "RO"},
    "dealer":        {"username": "TS_Dealer",     "password": "demo123",  "tenantCode": "RO"},
    "client":        {"username": "retail.client", "password": "demo123",  "tenantCode": "RO"},
}

# 10 captures covering all required areas.
# Each: slug | role | route | scroll-to-y | wait-ms after nav
SHOTS = [
    # NOTE: admin captures run sequentially in one context; lighter pages (products,
    # collections) go FIRST while the SPA bundle is still hot in cache, then heavier
    # data pages. Some lazy modules don't render data on second-navigation without
    # a reload — first-touch is most reliable for /products.
    ("06-products",         "admin",     "/products",                           0,   8000),
    ("01-dashboard",        "admin",     "/dashboard",                          0,   7000),
    ("04-contract-detail",  "admin",     "/contracts",                          0,   8000),
    ("05-portfolio",        "admin",     "/collections",                        0,   8000),
    ("02-origination",      "sales",     "/origination/pipeline",               0,   5000),
    ("03-risk-360",         "risk",      "/origination/financial-scoring",      0,   5000),
    ("07-insurance",        "insurance", "/insurance-types",                    0,   5000),
    ("08-fleet",            "fleet",     "/fleet",                              0,   5500),
    ("09-dealer-portal",    "dealer",    "/dealer-portal",                      0,   5000),
    ("10-client-portal",    "client",    "/portal/dashboard",                   0,   5500),
    ("11-accounting",              "admin", "/accounting",              0, 7000),
    ("12-corporate-credit-lines",  "admin", "/corporate-credit-lines",  0, 7000),
    ("13-workflow-orchestration",  "admin", "/workflow-hub",            0, 7000),
    ("14-kyc-onboarding",          "admin", "/partners/onboard",        0, 7000),
    ("15-model-monitoring",        "admin", "/config/model-monitoring", 0, 7000),
]


async def login(page: Page, creds: dict, role: str) -> bool:
    """Log a Page into Innovia trunk. Returns True on success."""
    # Vite dev server can be slow on cold compile; use a generous timeout
    # and the lighter "commit" wait_until.
    try:
        await page.goto(f"{FRONTEND}/login", wait_until="commit", timeout=60_000)
    except Exception as e:
        print(f"  [{role}] goto /login failed: {e}")
        return False
    try:
        # Wait for login form; the multi-tenant UI usually exposes tenant chips
        await page.wait_for_selector("input[name='username'], input[type='text']", timeout=10_000)
    except Exception as e:
        print(f"  [{role}] login form not found: {e}")
        return False

    # Tenant chip: click "RO" if present (multi-tenant lobby)
    try:
        chip = page.get_by_role("button", name=creds["tenantCode"], exact=True)
        if await chip.count() > 0:
            await chip.first.click()
            await page.wait_for_timeout(500)
    except Exception:
        pass

    # Fill credentials
    try:
        # username field
        u = page.locator("input[name='username'], input[type='text']").first
        await u.fill(creds["username"])
        p = page.locator("input[name='password'], input[type='password']").first
        await p.fill(creds["password"])
    except Exception as e:
        print(f"  [{role}] couldn't fill credentials: {e}")
        return False

    # Submit
    try:
        btn = page.get_by_role("button", name=lambda n: bool(n) and ("login" in n.lower() or "sign in" in n.lower() or "intra" in n.lower() or "log in" in n.lower()))
    except Exception:
        btn = None
    if btn and await btn.count() > 0:
        await btn.first.click()
    else:
        await page.locator("button[type='submit']").first.click()

    # Wait for redirect away from /login
    try:
        await page.wait_for_url(lambda url: "/login" not in url, timeout=12_000)
    except Exception as e:
        print(f"  [{role}] post-login redirect failed: {e}")
        # Check if token landed anyway
        tok = await page.evaluate("() => localStorage.getItem('erp_token')")
        if not tok:
            return False
    return True


def blur_image(src: Path, dest: Path, radius: int = BLUR_RADIUS):
    img = Image.open(src).convert("RGB")
    img = img.filter(ImageFilter.GaussianBlur(radius=radius))
    img.save(dest, "PNG", optimize=True)


async def capture_with_role(browser, role: str, creds: dict, shots: list, delay_ms: int = 0):
    if delay_ms:
        await asyncio.sleep(delay_ms / 1000)
    ctx: BrowserContext = await browser.new_context(viewport={"width": 1440, "height": 900})
    page = await ctx.new_page()
    print(f"[{role}] logging in as {creds['username']} ...")
    ok = await login(page, creds, role)
    if not ok:
        print(f"[{role}] LOGIN FAILED — skipping {[s[0] for s in shots]}")
        await ctx.close()
        return [(s[0], None) for s in shots]

    results = []
    for slug, _role, route, scroll_y, wait_ms in shots:
        print(f"  [{role}] -> {route}")
        try:
            # Fresh page per shot — avoids SPA stale-state where lazy modules
            # cache empty data on second navigation.
            await page.goto(f"{FRONTEND}{route}", wait_until="commit", timeout=45_000)
            # Then hard-reload to force the lazy chunk to remount with a clean fetch.
            await page.reload(wait_until="commit", timeout=30_000)
            # Wait for network to settle (last API call returns + 500ms quiet) — this
            # guarantees data-fetching components have data even if MUI still animates.
            try:
                await page.wait_for_load_state("networkidle", timeout=15_000)
            except Exception:
                pass  # fall through to fixed wait; some pages have persistent polling
            await page.wait_for_timeout(wait_ms)
            if scroll_y:
                await page.evaluate(f"window.scrollTo(0, {scroll_y})")
                await page.wait_for_timeout(400)
            raw = RAW_DIR / f"{slug}.png"
            blurred = OUT_DIR / f"{slug}.png"
            await page.screenshot(path=str(raw), full_page=False)  # viewport only — 1440x900
            blur_image(raw, blurred)
            print(f"     OK -> {blurred.relative_to(OUT_DIR.parent.parent)}")
            results.append((slug, blurred))
        except Exception as e:
            print(f"     FAIL: {e}")
            results.append((slug, None))
    await ctx.close()
    return results


async def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    RAW_DIR.mkdir(parents=True, exist_ok=True)

    # Group shots by role for parallel execution
    by_role: dict[str, list] = {}
    for s in SHOTS:
        by_role.setdefault(s[1], []).append(s)

    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        # Stagger context starts so Vite's first-compile doesn't get hammered
        tasks = [capture_with_role(browser, role, ROLES[role], shots, delay_ms=i * 1500)
                 for i, (role, shots) in enumerate(by_role.items()) if role in ROLES]
        all_results = await asyncio.gather(*tasks)
        await browser.close()

    print("\n=== SUMMARY ===")
    flat = [r for sub in all_results for r in sub]
    for slug, path in flat:
        status = "OK" if path else "MISS"
        print(f"  {status:5} {slug}")
    misses = [s for s, p in flat if not p]
    if misses:
        print(f"\n{len(misses)} captures failed; investigate before commit.")
    else:
        print(f"\nAll {len(flat)} captures succeeded.")


if __name__ == "__main__":
    asyncio.run(main())
