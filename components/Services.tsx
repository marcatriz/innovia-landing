import { useTranslations } from 'next-intl';

const SERVICES = ['diagnostics', 'redesign', 'prototype', 'implementation'] as const;

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="bg-paper py-24">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">{t('eyebrow')}</p>
            <h2 className="text-h2 text-ink-700">{t('title')}</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-500">{t('body')}</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s}
              className="relative flex flex-col gap-4 rounded-xl border border-slate-100 bg-tint p-8"
            >
              <span className="absolute left-0 top-0 h-1 w-12 rounded-t-xl bg-teal-500" />
              <span className="font-mono text-caption text-teal-700">0{i + 1}</span>
              <h3 className="text-h3 text-ink-700">{t(`items.${s}.title`)}</h3>
              <p className="flex-1 text-body text-slate-500">{t(`items.${s}.body`)}</p>
              <p className="mt-2 inline-flex items-center gap-2 border-t border-slate-200 pt-3 font-mono text-caption text-slate-500">
                <span aria-hidden>›</span>
                {t(`items.${s}.duration`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
