import { useTranslations } from 'next-intl';

export default function Problem() {
  const t = useTranslations('problem');

  return (
    <section className="border-y border-slate-100 bg-paper py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">{t('eyebrow')}</p>
          <h2 className="text-h2 text-ink-700">{t('title')}</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-body-lg text-slate-500">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}
