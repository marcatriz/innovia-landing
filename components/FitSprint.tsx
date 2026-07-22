import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BOOKING_URL } from '@/lib/booking';

const PILLARS = ['operator', 'software', 'fixed'] as const;
const PHASES = ['intake', 'discovery', 'design', 'decide', 'readout'] as const;
const DELIVERABLES = ['memo', 'deck', 'businessCase', 'tom', 'roadmap', 'tenant'] as const;
const TIERS = ['lite', 'standard', 'premium'] as const;
const FAQ_ITEMS = ['who', 'outcome', 'scope', 'data', 'after'] as const;

export default function FitSprint() {
  const t = useTranslations('fitSprint');

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 py-24 text-paper">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-4 text-teal-300">{t('hero.eyebrow')}</p>
              <h1 className="text-h1 text-paper">{t('hero.title')}</h1>
              <p className="mt-6 font-medium text-teal-300">{t('hero.tagline')}</p>
              <p className="mt-6 max-w-3xl text-body-lg text-slate-200">{t('hero.bodyPara1')}</p>
              <p className="mt-4 max-w-3xl text-body text-slate-200">{t('hero.bodyPara2')}</p>
              <p className="mt-4 max-w-3xl text-body text-slate-200">{t('hero.bodyPara3')}</p>
              <div className="mt-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-md bg-teal-500 px-6 py-3 text-body-sm font-semibold text-paper hover:bg-teal-400"
                >
                  {t('hero.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is — 3 pillars */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-teal-700">{t('product.eyebrow')}</p>
              <h2 className="text-h2 text-navy-800">{t('product.title')}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <article
                key={p}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-mist-50 p-8"
              >
                <span className="font-mono text-caption text-teal-700">0{i + 1}</span>
                <h3 className="text-h3 text-navy-800">{t(`product.pillars.${p}.title`)}</h3>
                <p className="text-body text-ink-700">{t(`product.pillars.${p}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 phases */}
      <section className="bg-mist-50 py-24">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-teal-700">{t('phases.eyebrow')}</p>
              <h2 className="text-h2 text-navy-800">{t('phases.title')}</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {PHASES.map((phase, i) => (
              <article
                key={phase}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-paper p-6"
              >
                <span className="font-mono text-caption text-teal-700">{`0${i + 1}`}</span>
                <p className="eyebrow text-teal-700">{t(`phases.items.${phase}.label`)}</p>
                <p className="text-caption font-mono text-ink-500">
                  {t(`phases.items.${phase}.week`)}
                </p>
                <p className="text-body-sm text-ink-700">{t(`phases.items.${phase}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-teal-700">{t('deliverables.eyebrow')}</p>
              <h2 className="text-h2 text-navy-800">{t('deliverables.title')}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <article
                key={d}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-mist-50 p-6"
              >
                <p className="eyebrow text-teal-700">{t(`deliverables.items.${d}.tag`)}</p>
                <h3 className="text-h3 text-navy-800">{t(`deliverables.items.${d}.title`)}</h3>
                <p className="text-body-sm text-ink-700">{t(`deliverables.items.${d}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-mist-50 py-24">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-teal-700">{t('tiers.eyebrow')}</p>
              <h2 className="text-h2 text-navy-800">{t('tiers.title')}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TIERS.map((tier) => {
              const featured = tier === 'lite';
              const includes = t.raw(`tiers.items.${tier}.includes`) as string[];
              return (
                <article
                  key={tier}
                  className={
                    featured
                      ? 'flex flex-col gap-4 rounded-xl border-2 border-navy-800 bg-navy-800 p-8 text-paper'
                      : 'flex flex-col gap-4 rounded-xl border border-slate-200 bg-paper p-8'
                  }
                >
                  <p
                    className={
                      featured ? 'eyebrow text-teal-300' : 'eyebrow text-teal-700'
                    }
                  >
                    {t(`tiers.items.${tier}.tag`)}
                  </p>
                  <h3
                    className={featured ? 'text-h2 text-paper' : 'text-h2 text-navy-800'}
                  >
                    {t(`tiers.items.${tier}.title`)}
                  </h3>
                  <p
                    className={
                      featured
                        ? 'font-mono text-h3 text-teal-300'
                        : 'font-mono text-h3 text-teal-700'
                    }
                  >
                    {t(`tiers.items.${tier}.price`)}
                  </p>
                  <p className={featured ? 'text-body text-slate-200' : 'text-body text-ink-700'}>
                    {t(`tiers.items.${tier}.body`)}
                  </p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {includes.map((item, idx) => (
                      <li
                        key={idx}
                        className={
                          featured
                            ? 'flex gap-2 text-body-sm text-slate-200'
                            : 'flex gap-2 text-body-sm text-ink-700'
                        }
                      >
                        <span className={featured ? 'text-teal-300' : 'text-teal-700'}>
                          {'✓'}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="mt-10 max-w-4xl text-body-sm italic text-ink-500">
            {t('tiers.footnote')}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4 text-teal-700">{t('faq.eyebrow')}</p>
              <h2 className="text-h2 text-navy-800">{t('faq.title')}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <article
                key={item}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-mist-50 p-8"
              >
                <h3 className="text-h3 text-navy-800">{t(`faq.items.${item}.q`)}</h3>
                <p className="text-body text-ink-700">{t(`faq.items.${item}.a`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-24 text-paper">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="text-h2 text-paper">{t('cta.title')}</h2>
              <p className="mt-6 max-w-3xl text-body-lg text-slate-200">{t('cta.body')}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center rounded-md bg-teal-500 px-6 py-3 text-body-sm font-semibold text-paper hover:bg-teal-400"
                >
                  {t('cta.primary')}
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md border border-paper px-6 py-3 text-body-sm font-semibold text-paper hover:bg-paper hover:text-navy-800"
                >
                  {t('cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
