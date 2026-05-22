# Innovia Systems landing page

Next.js 15 (App Router) + Tailwind + next-intl (EN/RO).

## Stack

- Next.js 15 + React 19
- Tailwind 3.4 with Innovia brand tokens in `tailwind.config.ts`
- next-intl 3 for EN/RO with locale-prefixed routes (`/en`, `/ro`)
- Google Fonts: Manrope (display), Inter (body), JetBrains Mono (numbers)

## Run

```bash
cd C:\innovia-landing
npm install
npm run dev
```

Open http://localhost:3000. Middleware redirects `/` to the default locale (`/en`).

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx              # root, ships globals.css + metadata
  [locale]/
    layout.tsx            # locale-aware shell, loads fonts + i18n provider
    page.tsx              # composes all sections
components/
  Header.tsx              # sticky nav + LanguageToggle
  Hero.tsx                # display title + tagline + SVG visual
  Problem.tsx             # the gap mid-tier operators face
  Modules.tsx             # 5 verticals with status pills
  Partnership.tsx         # Innovation Partnership (3 pillars, dark)
  Thesis.tsx              # UI commoditised, core defensible
  Operator.tsx            # nearly two decades track record
  Contact.tsx             # mailto + LinkedIn CTA
  Footer.tsx
  LanguageToggle.tsx      # EN/RO switch
i18n/
  routing.ts              # locale config + navigation helpers
  request.ts              # message loader
messages/
  en.json
  ro.json
public/
  innovia-logo.png        # horizontal on light
  innovia-profile.png     # square on navy (favicon + footer)
  innovia-banner.png      # LinkedIn banner (not used on landing yet)
```

## Brand tokens

Mirrored from the permanent brand memory:

- Navy `#17202A`, Teal `#079A9C`, Blue `#005CFE`, Ink `#2E3942`
- Manrope (display), Inter (body), JetBrains Mono (mono)

## Deploy options

- **Vercel** (zero config): `vercel --prod` from this folder
- **Netlify**: `npm run build` + publish `.next` via Netlify Next plugin
- **GitHub Pages**: requires static export (`next.config.mjs` → `output: 'export'`) and dropping `next-intl` server features in favour of `next-intl/static`

## To do

- Replace `mailto:` target with a contact form if a backend is added
- Generate dark variants of the logo (white wordmark on navy) for footer/dark sections
- Add SEO metadata per locale once domain is decided
- Add favicon ICO + Apple touch icons from `innovia-profile.png`
