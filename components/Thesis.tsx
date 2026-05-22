import { useTranslations } from 'next-intl';

export default function Thesis() {
  const t = useTranslations('thesis');

  return (
    <section id="thesis" className="bg-paper py-24">
      <div className="container-x max-w-4xl">
        <p className="eyebrow mb-4 text-center">{t('eyebrow')}</p>
        <h2 className="mb-8 text-center text-h2 text-ink-700">{t('title')}</h2>
        <p className="text-center text-body-lg text-slate-500">{t('body')}</p>
      </div>
    </section>
  );
}
