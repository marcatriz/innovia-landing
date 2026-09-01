import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import InsightIssue from '@/components/insights/InsightIssue';
import { ISSUES, getIssue } from '@/content/insights';
import { buildIssueMetadata } from '@/lib/seo';
import { LOCALES, type AppLocale } from '@/i18n/routing';

/**
 * `output: 'export'` needs every issue URL enumerated at build time, in every
 * locale, so a reader who switches language on an issue page lands on a page
 * that exists rather than on a 404.
 */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => ISSUES.map((issue) => ({ locale, slug: issue.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return {};
  return buildIssueMetadata(locale as AppLocale, issue);
}

export default async function IssuePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const issue = getIssue(slug);
  if (!issue) notFound();

  return (
    <>
      <Header />
      <main>
        <BackLink href="/insights" labelKey="backToIssues" />
        <InsightIssue issue={issue} />
      </main>
      <Footer />
    </>
  );
}
