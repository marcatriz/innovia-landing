import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import LegalDoc from '@/components/LegalDoc';
import { buildMetadata } from '@/lib/seo';
import type { AppLocale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale as AppLocale, 'legal', '/legal/');
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <BackLink href="/" labelKey="backToHome" />
        <LegalDoc namespace="legal" />
      </main>
      <Footer />
    </>
  );
}
