# innovia-landing — Codebase conventions for Claude

This file captures conventions that survive across sessions. Read it whenever you touch this repo.

## Positioning (generic consultancy)

As of 2026-06-09 the site presents Innovia Systems as a **specialist consultancy for organizations that run complex operational and customer workflows** (Fit to Digital / Fit to AI diagnostics, operating-model and process design, software prototyping, co-design, implementation support). It is industry-neutral by design.

Do NOT reintroduce vertical/product framing: no leasing, consumer finance, fleet management, asset finance, lending-platform, or named verticals (Asset Finance / Fleet / Working Capital / Consumer Credit / Secured Microcredit) anywhere in shipped copy. Frame everything in terms of generic operational and customer workflows.

## Five-locale lockstep

Every site edit ships in `en`, `ro`, `de`, `fr`, `it` in the same commit. Never partial coverage. `en.json` is canonical; keep keys identical and in the same order across all 5 files (`messages/*.json`). Brand line "Fit for Digital. Fit for AI." (period, not comma) stays English in every locale. No em dashes in any copy. Romanian site copy keeps diacritics (formal), unlike chat.

## Homepage structure

`app/[locale]/page.tsx` renders, in order: Header, Hero, Problem, Services, Modules (repurposed as "Areas of focus", section id `#focus`, six items), Partnership, Contact, Footer. Sub-pages: `/diagnostic` (Fit to Digital / Fit to AI questionnaire) and `/fit-sprint`. There are no whitepapers, changelog, use-cases, stats, thesis, foundation, or operator sections (removed in the 2026-06-09 repositioning).

`components/BackLink.tsx` reuses the `whitepaper` namespace (`backToHome` / `backToList`) for inner-page back links; keep that JSON block even though the whitepapers pages are gone.

## Icons

`app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` are generated from `public/innovia-profile.png` (the brand mark). Regenerate them from that source if the mark changes.

---

(Other conventions can be added here as they accumulate. Keep this file under 400 lines so it stays loaded into context.)
