import type { MetadataRoute } from 'next';
import { LOCALES } from '@/i18n/routing';
import { SITE_URL } from '@/lib/seo';
import { ISSUES } from '@/content/insights';

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
  { path: '/insights/', priority: 0.8 },
  { path: '/privacy/', priority: 0.3 },
  { path: '/legal/', priority: 0.3 },
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /**
   * Issues are listed once, under /en/, because they are published in English
   * only and every locale route canonicalises to the English URL. Listing five
   * prefixes for one English document would ask search engines to index four
   * duplicates of it.
   */
  const issues: MetadataRoute.Sitemap = ISSUES.filter((issue) => !issue.unlisted).map((issue) => ({
    url: `${SITE_URL}/en/insights/${issue.slug}/`,
    lastModified: new Date(issue.published),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const pages: MetadataRoute.Sitemap = ROUTES.flatMap(({ path, priority }) =>
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

  return [...pages, ...issues];
}
