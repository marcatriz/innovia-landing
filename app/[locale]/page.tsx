import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import Modules from '@/components/Modules';
import FitForAI from '@/components/FitForAI';
import Book from '@/components/Book';
import Partnership from '@/components/Partnership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';
import type { AppLocale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale as AppLocale, 'home', '/');
}

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
        <Book />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
