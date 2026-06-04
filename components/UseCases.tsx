import { useTranslations } from 'next-intl';
import Image from 'next/image';

const IMAGES: Record<string, string> = {
  executiveDashboard:      '/use-cases/01-dashboard.png',
  dealPipeline:            '/use-cases/02-origination.png',
  financialScoring:        '/use-cases/03-risk-360.png',
  contractManagement:      '/use-cases/04-contract-detail.png',
  collections:             '/use-cases/05-portfolio.png',
  productCatalog:          '/use-cases/06-products.png',
  insuranceCatalog:        '/use-cases/07-insurance.png',
  fleetOperations:         '/use-cases/08-fleet.png',
  dealerPortal:            '/use-cases/09-dealer-portal.png',
  clientPortal:            '/use-cases/10-client-portal.png',
  glPosting:               '/use-cases/11-accounting.png',
  corporateCreditLines:    '/use-cases/12-corporate-credit-lines.png',
  workflowOrchestration:   '/use-cases/13-workflow-orchestration.png',
  kycOnboarding:           '/use-cases/14-kyc-onboarding.png',
  modelMonitoring:         '/use-cases/15-model-monitoring.png',
  obligor360:              '/use-cases/16-obligor-360.png',
};

const GROUPS = [
  { key: 'origination', items: ['dealPipeline', 'financialScoring', 'obligor360', 'kycOnboarding'] },
  { key: 'servicing',   items: ['executiveDashboard', 'contractManagement', 'collections', 'glPosting'] },
  { key: 'catalog',     items: ['productCatalog', 'insuranceCatalog', 'fleetOperations', 'corporateCreditLines'] },
  { key: 'portals',     items: ['dealerPortal', 'clientPortal'] },
  { key: 'platform',    items: ['workflowOrchestration', 'modelMonitoring'] },
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

        <nav aria-label={t('tabsAria')} className="mb-12 flex flex-wrap gap-1 border-b border-slate-200">
          {GROUPS.map((group) => (
            <a
              key={group.key}
              href={`#use-cases-${group.key}`}
              className="-mb-px border-b-2 border-transparent px-5 py-3 text-sm font-medium tracking-wide text-slate-500 transition-colors hover:border-teal-600 hover:text-teal-700"
            >
              {t(`tabs.${group.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-16">
          {GROUPS.map((group) => (
            <div key={group.key} id={`use-cases-${group.key}`} className="scroll-mt-32">
              <div className="mb-6 flex items-baseline gap-4 border-l-4 border-teal-600 pl-4">
                <h3 className="text-h3 text-ink-700">{t(`tabs.${group.key}`)}</h3>
                <span className="text-caption text-slate-400">
                  {group.items.length} {t('cardPlural')}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((key) => (
                  <article
                    key={key}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-paper transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-tint">
                      <Image
                        src={IMAGES[key]}
                        alt={t(`items.${key}.title`)}
                        fill
                        sizes="(min-width: 768px) 48vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-8">
                      <span className="text-caption font-medium uppercase tracking-wider text-teal-700">
                        {t(`items.${key}.area`)}
                      </span>
                      <h4 className="text-h3 text-ink-700">{t(`items.${key}.title`)}</h4>
                      <p className="text-body text-slate-500">{t(`items.${key}.body`)}</p>
                      <div className="mt-2 rounded-lg bg-tint px-4 py-3">
                        <p className="text-caption font-semibold uppercase tracking-wider text-teal-700">
                          {t('uspLabel')}
                        </p>
                        <p className="mt-1 text-body text-ink-700">{t(`items.${key}.usp`)}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
