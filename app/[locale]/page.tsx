import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import Modules from '@/components/Modules';
import Partnership from '@/components/Partnership';
import Thesis from '@/components/Thesis';
import Operator from '@/components/Operator';
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
        <Partnership />
        <Thesis />
        <Operator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
