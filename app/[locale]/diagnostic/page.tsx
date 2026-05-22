import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Diagnostic from '@/components/diagnostic/Diagnostic';

export default async function DiagnosticPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const localeKey = (locale === 'ro' ? 'ro' : 'en') as 'en' | 'ro';

  return (
    <>
      <Header />
      <main>
        <Diagnostic locale={localeKey} />
      </main>
      <Footer />
    </>
  );
}
