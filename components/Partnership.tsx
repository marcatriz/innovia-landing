import { useTranslations } from 'next-intl';

const PILLARS = ['configured', 'decision', 'operator'] as const;

export default function Partnership() {
  const t = useTranslations('partnership');

  return (
    <section id="partnership" className="bg-navy-800 py-24 text-paper">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4 text-teal-300">{t('eyebrow')}</p>
            <h2 className="text-h2 text-paper">{t('title')}</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-200">{t('body')}</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <article
              key={p}
              className="flex flex-col gap-4 rounded-xl border border-navy-900 bg-navy-900 p-8"
            >
              <span className="font-mono text-caption text-teal-500">0{i + 1}</span>
              <h3 className="text-h3 text-paper">{t(`pillars.${p}.title`)}</h3>
              <p className="text-body text-slate-200">{t(`pillars.${p}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
