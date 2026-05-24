"""Quick visual smoke test: screenshot EN homepage + EN fit-sprint page."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

OUT = Path(__file__).parent / "_smoke"
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    for url, name in [
        ("http://localhost:3000/en", "en-home"),
        ("http://localhost:3000/en/fit-sprint", "en-fitsprint"),
        ("http://localhost:3000/ro/fit-sprint", "ro-fitsprint"),
    ]:
        print(f"  -> {url}")
        page.goto(url, wait_until="networkidle", timeout=30000)
        page.screenshot(path=str(OUT / f"{name}.png"), full_page=False)  # viewport only, to see nav
        page.screenshot(path=str(OUT / f"{name}-full.png"), full_page=True)
    browser.close()
print("OK")
