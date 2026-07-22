import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import Modules from '@/components/Modules';
import FitForAI from '@/components/FitForAI';
import Partnership from '@/components/Partnership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function HomePage({
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
        <Hero />
        <Problem />
        <Services />
        <Modules />
        <FitForAI />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
