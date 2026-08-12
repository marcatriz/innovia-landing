# Innovia Systems landing page

Next.js 15 (App Router) + Tailwind + next-intl, statically exported, in five
locales: English (canonical), Romanian, German, French, Italian.

## Stack

- Next.js 15 + React 19, `output: 'export'` with `trailingSlash: true`
- Tailwind 3.4 with Innovia brand tokens in `tailwind.config.ts`
- next-intl 4 with locale-prefixed routes (`/en/`, `/ro/`, `/de/`, `/fr/`, `/it/`)
- Google Fonts: Manrope (display), Inter (body), JetBrains Mono (mono)

## Run

```bash
cd C:\innovia-landing
npm install
npm run dev
```

Open http://localhost:3000/en/. There is no middleware: the site is a static
export, so `/` is redirected to `/en/` by `public/_redirects`, which Cloudflare
Pages reads. That redirect does not exist under `next dev`, so in development go
to a locale path directly.

## Build

```bash
npm run build
```

Output lands in `out/`. `npm start` is not usable here, `next start` serves a
server build and this project exports static files. To check a build locally,
serve the folder:

```bash
npx serve out -l 4321
```

## Structure

```
app/
  layout.tsx              # root, ships globals.css + site-wide metadata
  [locale]/
    layout.tsx            # locale shell: fonts, i18n provider, BackToTop
    page.tsx              # home, composes the sections below
    diagnostic/page.tsx   # Fit to Digital / Fit to AI questionnaire
    fit-sprint/page.tsx   # Fit Sprint offer page
  globals.css
components/
  Header.tsx              # sticky nav + LanguageToggle + MobileMenu
  MobileMenu.tsx          # hamburger panel below the xl breakpoint
  Hero.tsx                # display title + tagline + SVG visual
  Problem.tsx             # the gap mid-tier operators face
  Services.tsx            # diagnostic, redesign, prototype, implementation
  Modules.tsx             # focus areas with status pills
  FitForAI.tsx            # AI positioning block
  Partnership.tsx         # Innovation Partnership (dark)
  Contact.tsx             # mailto + LinkedIn CTA
  CopyEmail.tsx           # visible address + copy button (mailto fallback)
  FitSprint.tsx           # body of the Fit Sprint page
  Footer.tsx
  BackToTop.tsx           # floating scroll-to-top, explicit smooth scroll
  BackLink.tsx
  LanguageToggle.tsx      # five-locale switch
  diagnostic/             # Diagnostic.tsx + questions.ts + scoring.ts
i18n/
  routing.ts              # LOCALES is the canonical locale list
  request.ts              # message loader
messages/
  en.json  ro.json  de.json  fr.json  it.json
public/
  _redirects              # / -> /en/ (Cloudflare Pages)
  manifest.webmanifest
  innovia-logo.png        # horizontal on light
  innovia-profile.png     # square on navy (footer)
  innovia-banner.png      # LinkedIn banner (not used on landing yet)
  tech/                   # technology logos used on the site
```

## Locales

All five locales are first-class and ship together. Every copy change edits EN
first, then RO, DE, FR and IT in the same commit. `i18n/routing.ts` holds the
canonical list; adding a locale means touching that file, `LanguageToggle.tsx`,
the `messages/` JSON, and any component that narrows the locale prop to a union.

## Brand tokens

Mirrored from the permanent brand memory:

- Navy `#17202A`, Teal `#079A9C`, Blue `#005CFE`, Ink `#2E3942`
- Manrope (display), Inter (body), JetBrains Mono (mono)

## Deploy

Cloudflare Pages, on the `innoviasystems.io` zone. Every push to `main` triggers
a build and publishes; a push has been observed live in about a minute. There is
no Vercel, Netlify or GitHub Pages deployment, and the build output is plain
static files, so no server runtime is involved.

Cache note: page HTML updates immediately, but the CSS bundle is content-hashed
under `/_next/static/css/`, so to verify a style change on the live site fetch
that file rather than grepping the HTML.

## Gotchas

- **Never add `scroll-behavior: smooth` to `html`.** It silently kills every
  in-page anchor under the App Router: the URL hash updates and the page does not
  move. Verified on the live site, identical click, 0px with `smooth` and 4653px
  with `auto`. `BackToTop.tsx` still animates because it calls `window.scrollTo`
  with an explicit behavior and never goes through the router. Section targets
  carry `scroll-margin-top` to clear the 97px sticky header.
- **Keep Cloudflare Scrape Shield email obfuscation OFF for this zone.** It
  rewrites the `mailto:` href to `/cdn-cgi/l/email-protection#...`, which 404s,
  and replaces the visible address with a `[email protected]` placeholder. React
  hydration repairs both, so the damage only shows before hydration. The setting
  lives under Security -> Settings, not in a Scrape Shield section of its own.
- **A `mailto:` link is silent without a mail handler.** Chrome swallows the
  click with no error, which reads as a broken button. That is what `CopyEmail.tsx`
  exists for.

## To do

- Per-locale SEO metadata. `app/layout.tsx` carries one global title and
  description; there is no `generateMetadata`, no `alternates.languages` and no
  Open Graph data per locale.
- Replace the `mailto:` target with a contact form if a backend is ever added.
- Generate dark variants of the logo (white wordmark on navy) for dark sections.
