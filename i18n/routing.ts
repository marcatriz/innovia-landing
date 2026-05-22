import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

/**
 * Locale set is the canonical list referenced by every locale-aware artifact
 * on the site (messages JSON, whitepaper components, diagnostic questions,
 * registry metadata). Keep this list and the JSON files in `messages/` in sync.
 *
 * See feedback_landing_five_locales memory entry for the quality bar and
 * the workflow for keeping translations aligned with EN as canonical.
 */
export const LOCALES = ['en', 'ro', 'de', 'fr', 'it'] as const;
export type AppLocale = (typeof LOCALES)[number];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: 'en',
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
