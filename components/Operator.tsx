import { useTranslations } from 'next-intl';

export default function Operator() {
  const t = useTranslations('operator');

  return (
    <section className="bg-tint py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">{t('eyebrow')}</p>
          <h2 className="text-h2 text-ink-700">{t('title')}</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-body-lg text-slate-500">{t('body')}</p>
        </div>
      </div>
    </section>
  );
}
