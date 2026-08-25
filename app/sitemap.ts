import type { MetadataRoute } from 'next';
import { LOCALES } from '@/i18n/routing';
import { SITE_URL } from '@/lib/seo';

/**
 * Every route in every locale, each entry carrying the hreflang alternates for
 * its siblings. Paths keep the trailing slash that `trailingSlash: true` emits,
 * so the sitemap lists the URLs that actually serve a 200.
 *
 * `output: 'export'` writes this to /sitemap.xml at build time.
 */
const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/fit-sprint/', priority: 0.8 },
  { path: '/diagnostic/', priority: 0.8 },
  { path: '/privacy/', priority: 0.3 },
  { path: '/legal/', priority: 0.3 },
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`])),
          'x-default': `${SITE_URL}/en${path}`,
        },
      },
    }))
  );
}
