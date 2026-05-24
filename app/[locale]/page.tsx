import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Problem from '@/components/Problem';
import Thesis from '@/components/Thesis';
import Services from '@/components/Services';
import Modules from '@/components/Modules';
import UseCases from '@/components/UseCases';
import Partnership from '@/components/Partnership';
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
        <Stats />
        <Problem />
        <Services />
        <Modules />
        <UseCases />
        <Partnership />
        <Thesis />
        <Operator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
