import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="bg-paper py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">{t('eyebrow')}</p>
          <h2 className="mb-6 text-h2 text-ink-700">{t('title')}</h2>
          <p className="mb-10 text-body-lg text-slate-500">{t('body')}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:catalin.rizea@innoviasystems.io"
              className="btn-primary"
            >
              {t('email')}
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.linkedin.com/company/innovia-systems/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              {t('linkedin')}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
