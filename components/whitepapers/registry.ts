/**
 * Whitepaper registry: central index used by both the index page and the
 * `[slug]` route. Adding a new paper means:
 *   1. Append an entry below.
 *   2. Create the content component at `components/whitepapers/<Slug>.tsx`.
 *   3. Wire it into the `renderContent()` switch in `app/[locale]/whitepapers/[slug]/page.tsx`.
 *
 * Whitepapers are static, served from the static export (Cloudflare Pages).
 * No CMS. JSX as content keeps the toolchain tiny until the catalog grows
 * past 3-5 papers, at which point switching to MDX is the next step.
 */

export interface WhitepaperMeta {
  slug: string;
  date: string;
  minutes: number;
  en: { title: string; subtitle: string; lede: string };
  ro: { title: string; subtitle: string; lede: string };
}

export const WHITEPAPERS: WhitepaperMeta[] = [
  {
    slug: 'the-compounding-cost-of-waiting',
    date: '2026-05-22',
    minutes: 11,
    en: {
      title: 'The compounding cost of waiting',
      subtitle: 'Why Fit for Digital and Fit for AI is a 2026 conversation, not a 2027 one.',
      lede: 'Most mid-tier lending operators score between 40 and 65 percent on the Fit for Digital. Fit for AI. diagnostic. The spread is not the news. The news is what happens to that score if the operator does nothing for twelve more months. Four clocks tick: regulator, talent, AI-native competitor, customer expectations.',
    },
    ro: {
      title: 'Costul compus al așteptării',
      subtitle: 'De ce Fit for Digital și Fit for AI sunt o conversație de 2026, nu de 2027.',
      lede: 'Majoritatea operatorilor mid-tier de lending obțin între 40 și 65 la sută pe diagnosticul Fit for Digital. Fit for AI. Intervalul nu este știrea. Știrea este ce se întâmplă cu scorul dacă operatorul nu face nimic în următoarele douăsprezece luni. Patru ceasuri ticăie: regulator, talent, concurența AI-native, așteptările clienților.',
    },
  },
  {
    slug: 'after-the-ui-layer-falls',
    date: '2026-05-22',
    minutes: 12,
    en: {
      title: 'After the UI layer falls',
      subtitle: 'Where the moat moves in enterprise lending.',
      lede: 'LLMs and workflow orchestration are eating the most visible layer of every enterprise application. Three things stay defensible: the auditable core, the domain configuration each operator builds on top, and the speed at which both can move together.',
    },
    ro: {
      title: 'După ce stratul de UI cade',
      subtitle: 'Unde se mută moat-ul în lending-ul enterprise.',
      lede: 'LLM-urile și orchestrarea de workflow mănâncă stratul cel mai vizibil al oricărei aplicații enterprise. Trei lucruri rămân defensibile: nucleul auditabil, configurația de domeniu pe care fiecare operator o construiește deasupra, și viteza cu care cele două pot evolua împreună.',
    },
  },
];

export function getWhitepaper(slug: string): WhitepaperMeta | undefined {
  return WHITEPAPERS.find((w) => w.slug === slug);
}
