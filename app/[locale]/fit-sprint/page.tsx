import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import FitSprint from '@/components/FitSprint';

export default async function FitSprintPage({
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
        <FitSprint />
      </main>
      <Footer />
    </>
  );
}
