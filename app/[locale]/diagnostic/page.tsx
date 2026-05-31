import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import Diagnostic from '@/components/diagnostic/Diagnostic';
import type { AppLocale } from '@/i18n/routing';

export default async function DiagnosticPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const localeKey = locale as AppLocale;

  return (
    <>
      <Header />
      <main>
        <BackLink href="/" labelKey="backToHome" />
        <Diagnostic locale={localeKey} />
      </main>
      <Footer />
    </>
  );
}
