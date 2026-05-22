import { useTranslations } from 'next-intl';

const MODULES = [
  { key: 'assetFinance', ready: true },
  { key: 'fleet', ready: true },
  { key: 'workingCapital', ready: false },
  { key: 'consumerCredit', ready: false },
  { key: 'securedMicrocredit', ready: false },
] as const;

export default function Modules() {
  const t = useTranslations('modules');

  return (
    <section id="modules" className="bg-tint py-24">
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
          {MODULES.map((m) => (
            <article
              key={m.key}
              className="group flex flex-col gap-4 rounded-xl border border-slate-100 bg-paper p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-caption font-medium ${
                    m.ready
                      ? 'bg-teal-100 text-teal-900'
                      : 'bg-brandblue-100 text-brandblue-900'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      m.ready ? 'bg-teal-500' : 'bg-brandblue-500'
                    }`}
                  />
                  {m.ready ? t('statusReady') : t('statusCoDev')}
                </span>
              </div>
              <h3 className="text-h3 text-ink-700">{t(`items.${m.key}.title`)}</h3>
              <p className="text-body text-slate-500">{t(`items.${m.key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
