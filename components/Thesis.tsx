import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const PROPERTIES = [
  { key: 'isolation', slug: 'multi-tenant-isolation-as-a-property' },
  { key: 'codebase', slug: 'single-codebase-as-a-property' },
  { key: 'aiNative', slug: 'after-the-ui-layer-falls' },
] as const;

export default function Thesis() {
  const t = useTranslations('thesis');

  return (
    <section id="thesis" className="bg-navy-800 py-24 text-paper">
      <div className="container-x">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4 text-teal-300">{t('eyebrow')}</p>
            <h2 className="text-h2 text-paper">{t('title')}</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-slate-200">{t('intro')}</p>
          </div>
        </div>

        <div className="border-t border-navy-900">
          {PROPERTIES.map((p, i) => (
            <article
              key={p.key}
              className="grid gap-x-6 gap-y-4 border-b border-navy-900 py-10 md:grid-cols-12 md:items-baseline"
            >
              <span className="font-mono text-h2 text-teal-500 md:col-span-1">
                {`0${i + 1}`}
              </span>
              <h3 className="text-h3 text-paper md:col-span-3">
                {t(`properties.${p.key}.title`)}
              </h3>
              <p className="text-body text-slate-200 md:col-span-6">
                {t(`properties.${p.key}.body`)}
              </p>
              <Link
                href={`/whitepapers/${p.slug}`}
                className="group inline-flex items-center gap-2 font-mono text-caption uppercase tracking-wider text-teal-300 hover:text-teal-200 md:col-span-2 md:justify-end"
              >
                {t('readPaper')}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
