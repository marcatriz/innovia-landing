import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

/**
 * Root metadata is a fallback only. Every page sets its own title, description,
 * canonical and Open Graph tags per locale through `lib/seo.ts`. What has to
 * live here is `metadataBase`, which Next needs to resolve metadata URLs.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Innovia Systems. Fit for Digital. Fit for AI.',
  description:
    'A specialist consultancy for organizations that run complex operational and customer workflows. Fit to Digital and Fit to AI diagnostics, operating-model and process design, software prototyping, co-design, and implementation support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
