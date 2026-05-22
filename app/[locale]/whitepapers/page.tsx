import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { WHITEPAPERS } from '@/components/whitepapers/registry';

export default async function WhitepapersIndexPage({
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
        <WhitepapersIndex locale={locale} />
      </main>
      <Footer />
    </>
  );
}

function WhitepapersIndex({ locale }: { locale: string }) {
  const t = useTranslations('whitepapersIndex');
  const localeKey = (locale === 'ro' ? 'ro' : 'en') as 'en' | 'ro';

  return (
    <section className="bg-paper py-24">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">{t('eyebrow')}</p>
            <h1 className="text-h1 text-ink-700">{t('title')}</h1>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-500">{t('body')}</p>
          </div>
        </div>
        <ul className="grid gap-6 md:grid-cols-2">
          {WHITEPAPERS.map((w) => {
            const meta = w[localeKey];
            const formatted = new Date(w.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            return (
              <li key={w.slug}>
                <Link
                  href={`/whitepapers/${w.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-xl border border-slate-100 bg-paper p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-caption uppercase tracking-wider text-slate-500">
                    <span>{formatted}</span>
                    <span aria-hidden>·</span>
                    <span>
                      {w.minutes} {t('minutes')}
                    </span>
                  </div>
                  <h2 className="text-h3 text-ink-700 group-hover:text-teal-700">{meta.title}</h2>
                  <p className="text-body text-slate-500">{meta.subtitle}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-body-sm font-medium text-teal-700">
                    {t('readMore')}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
