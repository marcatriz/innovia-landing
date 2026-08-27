# innovia-landing — Codebase conventions for Claude

This file captures conventions that survive across sessions. Read it whenever you touch this repo.

## Positioning (generic consultancy)

As of 2026-06-09 the site presents Innovia Systems as a **specialist consultancy for organizations that run complex operational and customer workflows** (Fit to Digital / Fit to AI diagnostics, operating-model and process design, software prototyping, co-design, implementation support). It is industry-neutral by design.

Do NOT reintroduce vertical/product framing: no leasing, consumer finance, fleet management, asset finance, lending-platform, or named verticals (Asset Finance / Fleet / Working Capital / Consumer Credit / Secured Microcredit) anywhere in shipped copy. Frame everything in terms of generic operational and customer workflows.

**One deliberate exception, added 2026-08-27: the `book` section (`components/Book.tsx`, section id `#book`).** The founder published *The Price of Knowing: How Asset Data and AI Decide Who Wins in Leasing* in August 2026, and the site links to it. The word "leasing" appears there only inside the book's own subtitle and cover, never as a description of what Innovia does. The surrounding copy is deliberately written one level up, about what an organization knows about the assets it finances and whether the answer arrives in time to change a decision. Keep it that way: this is authorship and evidence of method, not a change of positioning, and it is not a licence to reintroduce vertical framing elsewhere.

The same section carries the founder's background as "nearly two decades operating European leasing platforms" (since 2007). That phrasing is the standing one and it is deliberate on two counts: the former employer and its predecessor products are never named, and the time anchor is attached to a person's career, never to Innovia-the-platform. The sentence that follows it, that the question reaches past any single industry, is what keeps a founder credential from becoming company positioning. Do not drop that bridge.

## Five-locale lockstep

Every site edit ships in `en`, `ro`, `de`, `fr`, `it` in the same commit. Never partial coverage. `en.json` is canonical; keep keys identical and in the same order across all 5 files (`messages/*.json`). Brand line "Fit for Digital. Fit for AI." (period, not comma) stays English in every locale. No em dashes in any copy. Romanian site copy keeps diacritics (formal), unlike chat.

## Homepage structure

`app/[locale]/page.tsx` renders, in order: Header, Hero, Problem, Services, Modules (repurposed as "Areas of focus", section id `#focus`, six items), Partnership, Contact, Footer. Sub-pages: `/diagnostic` (Fit to Digital / Fit to AI questionnaire), `/fit-sprint`, `/legal` and `/privacy`. There are no whitepapers, changelog, use-cases, stats, thesis, foundation, or operator sections (removed in the 2026-06-09 repositioning).

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

---

(Other conventions can be added here as they accumulate. Keep this file under 400 lines so it stays loaded into context.)
