import { useTranslations } from 'next-intl';
import Image from 'next/image';

const USE_CASES = [
  { key: 'executiveDashboard', image: '/use-cases/01-dashboard.png' },
  { key: 'dealPipeline',       image: '/use-cases/02-origination.png' },
  { key: 'financialScoring',   image: '/use-cases/03-risk-360.png' },
  { key: 'contractManagement', image: '/use-cases/04-contract-detail.png' },
  { key: 'collections',        image: '/use-cases/05-portfolio.png' },
  { key: 'productCatalog',     image: '/use-cases/06-products.png' },
  { key: 'insuranceCatalog',   image: '/use-cases/07-insurance.png' },
  { key: 'fleetOperations',    image: '/use-cases/08-fleet.png' },
  { key: 'dealerPortal',       image: '/use-cases/09-dealer-portal.png' },
  { key: 'clientPortal',       image: '/use-cases/10-client-portal.png' },
] as const;

export default function UseCases() {
  const t = useTranslations('useCases');

  return (
    <section id="use-cases" className="bg-paper py-24">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">{t('eyebrow')}</p>
            <h2 className="text-h2 text-ink-700">{t('title')}</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-500">{t('body')}</p>
            <p className="mt-4 text-caption text-slate-400">{t('note')}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((u) => (
            <article
              key={u.key}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-paper transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-tint">
                <Image
                  src={u.image}
                  alt={t(`items.${u.key}.title`)}
                  fill
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-3 p-8">
                <span className="text-caption font-medium uppercase tracking-wider text-teal-700">
                  {t(`items.${u.key}.area`)}
                </span>
                <h3 className="text-h3 text-ink-700">{t(`items.${u.key}.title`)}</h3>
                <p className="text-body text-slate-500">{t(`items.${u.key}.body`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
