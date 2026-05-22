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
 *
 * Each whitepaper carries its metadata in all five locales (see
 * landing-five-locales memory note for the quality bar).
 */

import type { AppLocale } from '@/i18n/routing';

export type WhitepaperLocaleMeta = {
  title: string;
  subtitle: string;
  lede: string;
};

export interface WhitepaperMeta {
  slug: string;
  date: string;
  minutes: number;
  en: WhitepaperLocaleMeta;
  ro: WhitepaperLocaleMeta;
  de: WhitepaperLocaleMeta;
  fr: WhitepaperLocaleMeta;
  it: WhitepaperLocaleMeta;
}

export function localeMeta(paper: WhitepaperMeta, locale: AppLocale): WhitepaperLocaleMeta {
  return paper[locale];
}

export const WHITEPAPERS: WhitepaperMeta[] = [
  {
    slug: 'the-compounding-cost-of-waiting',
    date: '2026-05-22',
    minutes: 11,
    en: {
      title: 'The compounding cost of waiting',
      subtitle: 'Why Fit for Digital and Fit for AI is a 2026 conversation, not a 2027 one.',
      lede: 'Most mid-tier lending operators score between 40 and 65 percent on the Fit for Digital, Fit for AI. diagnostic. The spread is not the news. The news is what happens to that score if the operator does nothing for twelve more months. Four clocks tick: regulator, talent, AI-native competitor, customer expectations.',
    },
    ro: {
      title: 'Costul compus al așteptării',
      subtitle: 'De ce Fit for Digital și Fit for AI sunt o conversație de 2026, nu de 2027.',
      lede: 'Majoritatea operatorilor mid-tier de lending obțin între 40 și 65 la sută pe diagnosticul Fit for Digital, Fit for AI. Intervalul nu este știrea. Știrea este ce se întâmplă cu scorul dacă operatorul nu face nimic în următoarele douăsprezece luni. Patru ceasuri ticăie: regulator, talent, concurența AI-native, așteptările clienților.',
    },
    de: {
      title: 'Die kumulierten Kosten des Wartens',
      subtitle: 'Warum Fit for Digital und Fit for AI ein 2026er Gespräch ist, kein 2027er.',
      lede: 'Die meisten Mid-Tier-Lending-Betreiber erzielen zwischen 40 und 65 Prozent im Fit for Digital, Fit for AI. Diagnostik. Die Spanne ist nicht die Nachricht. Die Nachricht ist, was mit diesem Score passiert, wenn der Betreiber zwölf weitere Monate nichts tut. Vier Uhren ticken: Regulator, Talent, KI-nativer Wettbewerber, Kundenerwartungen.',
    },
    fr: {
      title: 'Le coût composé de l\'attente',
      subtitle: 'Pourquoi Fit for Digital et Fit for AI est une conversation de 2026, pas de 2027.',
      lede: 'La plupart des opérateurs mid-tier du lending obtiennent entre 40 et 65 pour cent au diagnostic Fit for Digital, Fit for AI. L\'écart n\'est pas la nouvelle. La nouvelle, c\'est ce qu\'il advient de ce score si l\'opérateur ne fait rien pendant douze mois de plus. Quatre horloges tournent : régulateur, talent, concurrent AI-natif, attentes clients.',
    },
    it: {
      title: 'Il costo composto dell\'attesa',
      subtitle: 'Perché Fit for Digital e Fit for AI è una conversazione del 2026, non del 2027.',
      lede: 'La maggior parte degli operatori mid-tier del lending ottiene tra il 40 e il 65 percento nel diagnostico Fit for Digital, Fit for AI. La forbice non è la notizia. La notizia è cosa succede a quel punteggio se l\'operatore non fa nulla per altri dodici mesi. Quattro orologi ticchettano: regolatore, talento, concorrente AI-nativo, aspettative clienti.',
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
    de: {
      title: 'Nachdem die UI-Schicht fällt',
      subtitle: 'Wohin sich der Burggraben im Enterprise-Lending verschiebt.',
      lede: 'LLMs und Workflow-Orchestrierung fressen die sichtbarste Schicht jeder Enterprise-Anwendung. Drei Dinge bleiben verteidigungsfähig: der auditierbare Kern, die domänenspezifische Konfiguration, die jeder Betreiber darauf aufbaut, und das Tempo, in dem sich beide gemeinsam bewegen können.',
    },
    fr: {
      title: 'Après la chute de la couche UI',
      subtitle: 'Où le moat se déplace dans le lending enterprise.',
      lede: 'Les LLM et l\'orchestration de workflow dévorent la couche la plus visible de chaque application enterprise. Trois choses restent défendables : le cœur auditable, la configuration métier que chaque opérateur construit dessus, et la vitesse à laquelle les deux peuvent évoluer ensemble.',
    },
    it: {
      title: 'Dopo la caduta del livello UI',
      subtitle: 'Dove si sposta il moat nel lending enterprise.',
      lede: 'Gli LLM e l\'orchestrazione di workflow stanno divorando il livello più visibile di ogni applicazione enterprise. Tre cose restano difendibili: il nucleo auditabile, la configurazione di dominio che ogni operatore costruisce sopra, e la velocità con cui i due possono muoversi insieme.',
    },
  },
];

export function getWhitepaper(slug: string): WhitepaperMeta | undefined {
  return WHITEPAPERS.find((w) => w.slug === slug);
}
