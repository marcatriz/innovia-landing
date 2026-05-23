# innovia-landing — Codebase conventions for Claude

This file captures conventions that survive across sessions. Read it whenever you touch this repo.

## Five-locale lockstep

Every site edit ships in `en`, `ro`, `de`, `fr`, `it` in the same commit. Never partial coverage. Brand line "Fit for Digital. Fit for AI." (period, not comma) stays English in every locale. See `messages/*.json` — keep keys identical across all 5 files.

## "Use Cases" section — screenshot policy

The Use Cases section (`components/UseCases.tsx`) renders blurred screenshots of the live Innovia application alongside short workflow descriptions. Hard rules:

1. **Screenshots come from Innovia trunk only, never UCL.** Innovia trunk: `C:\innovia-platform` (backend `:5179`, frontend `:5173`). UCL (`C:\innovia-platform-ucl`, ports `:5279`/`:5273`) is off-limits for landing-page assets — its brand overlay (UniCredit red) and tenant naming would leak demo-client identity.
2. **Blurred before publish.** Capture script applies a Gaussian blur (radius 6px) so layout/structure is legible but specific data and exact text are obscured. The unblurred originals live in `scripts/_captures/` and are gitignored.
3. **Captured as the role that genuinely owns each screen.** Dashboard as admin; origination as sales; financial scoring as risk; collections as admin; products + insurance as admin/insurance handler; fleet as fleet manager; dealer portal as dealer/sales rep; client portal as retail client. Don't switch to admin just because the proper role has sparse data — fix the seed instead.

### Where to find things

- Section component: `components/UseCases.tsx`
- Translations (5 locales): `messages/{en,ro,de,fr,it}.json` under the `useCases.*` key
- Capture script: `scripts/capture-use-cases.py` (Python + Playwright + PIL)
- Blurred output (shipped): `public/use-cases/01..10-*.png`
- Raw output (gitignored, debugging only): `scripts/_captures/`

### Updating the section

To regenerate the screenshots after a UI change in Innovia:

```bash
# Make sure Innovia trunk is running on :5173 / :5179
# Make sure ERPAccountLockout is empty (the script tolerates locked accounts but
# they'll skip — clear via SQL before running):
sqlcmd -S localhost -E -C -Q "USE Innovia; DELETE FROM ERPAccountLockout"

# From C:\innovia-landing:
python scripts/capture-use-cases.py
```

The script logs each role in a separate Playwright context (parallel), hits the assigned route, waits for `networkidle` + a per-shot timeout, screenshots at 1440x900, then writes the blurred PNG. Re-runs are idempotent — they overwrite the public PNGs in place.

### When to edit the section

- **New use case to add**: append to `USE_CASES` in `UseCases.tsx`, add `items.<key>.{area,title,body}` to all 5 locale files in lockstep, add the route to `SHOTS` in the capture script, re-run capture.
- **Image regenerate only**: re-run the capture script; nothing else changes.
- **Copy change only**: edit the 5 locale files; no capture needed.

### Rules of thumb

- A blurred screenshot is publishable when: layout primitives are visible (KPI cards, charts, table grid), but specific numbers and entity names are blurred enough that you can't read them in two seconds at arm's length.
- If a re-capture lands a skeleton/loading state, bump the per-shot wait time in `SHOTS` and re-run. The script already waits for `networkidle` but some MUI pages animate after the API resolves; admin's sequential captures benefit from a `page.reload()` between shots (already wired).

---

(Other conventions can be added here as they accumulate. Keep this file under 400 lines so it stays loaded into context.)
