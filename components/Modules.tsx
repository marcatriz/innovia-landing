import { useTranslations } from 'next-intl';

const AREAS = [
  'fitDiagnostics',
  'transformation',
  'operatingModel',
  'prototyping',
  'coDesign',
  'aiReadiness',
] as const;

export default function Modules() {
  const t = useTranslations('modules');

  return (
    <section id="focus" className="bg-tint py-24">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <article
              key={a}
              className="group flex flex-col gap-4 rounded-xl border border-slate-100 bg-paper p-8 transition-shadow hover:shadow-lg"
            >
              <span className="font-mono text-caption text-teal-700">0{i + 1}</span>
              <h3 className="text-h3 text-ink-700">{t(`items.${a}.title`)}</h3>
              <p className="text-body text-slate-500">{t(`items.${a}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
