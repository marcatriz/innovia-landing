import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LOCALES, type AppLocale } from '@/i18n/routing';

export const SITE_URL = 'https://innoviasystems.io';

/** Open Graph locale codes for the five locales the site ships in. */
const OG_LOCALE: Record<AppLocale, string> = {
  en: 'en_GB',
  ro: 'ro_RO',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
};

/**
 * Canonical, hreflang, Open Graph and Twitter card for one page in one locale.
 *
 * `path` is the route below the locale segment and must carry the trailing
 * slash that `trailingSlash: true` emits ('/' for the home page). Without it
 * the canonical points at the 308 redirect rather than at the page.
 *
 * Titles and descriptions come from the `meta` namespace in `messages/*.json`,
 * so they translate with the rest of the copy instead of defaulting to English.
 */
export async function buildMetadata(
  locale: AppLocale,
  page: 'home' | 'fitSprint' | 'diagnostic' | 'privacy' | 'legal' | 'insights',
  path = '/'
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);

  const url = `${SITE_URL}/${locale}${path}`;
  const languages: Record<string, string> = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`])
  );
  languages['x-default'] = `${SITE_URL}/en${path}`;

  const image = {
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'Innovia Systems. Fit for Digital. Fit for AI.',
  };

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      siteName: 'Innovia Systems',
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Metadata for one issue of the asset finance letter.
 *
 * Issues are published in English only, so every locale points its canonical at
 * the English URL. Without that, five locale prefixes would serve the same
 * English document and compete with each other in search results. The locale
 * routes still exist and still render, because a reader arriving from a
 * Romanian or German page should get the document rather than a 404.
 */
export function buildIssueMetadata(
  locale: AppLocale,
  issue: { slug: string; number: number; edition: string; title: string; dek: string }
): Metadata {
  const canonical = `${SITE_URL}/en/insights/${issue.slug}/`;
  const title = `${issue.title} | Innovia Asset Finance Letter ${issue.number}`;
  const description = issue.dek;

  const image = {
    url: `${SITE_URL}/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'Innovia Systems. Fit for Digital. Fit for AI.',
  };

  return {
    title,
    description,
    alternates: { canonical, languages: { 'x-default': canonical, en: canonical } },
    openGraph: {
      type: 'article',
      siteName: 'Innovia Systems',
      locale: OG_LOCALE[locale],
      url: `${SITE_URL}/${locale}/insights/${issue.slug}/`,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
