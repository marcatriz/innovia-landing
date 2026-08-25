import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Replaces the Cloudflare default robots.txt, which served content-signal
 * boilerplate and no Sitemap line, so nothing pointed crawlers at the sitemap.
 *
 * `output: 'export'` writes this to /robots.txt at build time.
 */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
