import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ISSUES } from '@/content/insights';

/**
 * The rubric page: what the letter is, then every issue newest first.
 *
 * The chrome is localised in all five locales; the issue titles and one-liners
 * stay in English because the documents are published in English. That is
 * stated once, in the reader's own language, rather than left to be discovered.
 */
export default function InsightIndex() {
  const t = useTranslations('insights');

  return (
    <div className="container-x pb-24 pt-10 lg:pt-14">
      <div className="max-w-[46rem]">
        <p className="eyebrow">{t('masthead')}</p>
        <h1 className="mt-4 font-display text-h1 text-navy-900">{t('indexTitle')}</h1>
        <p className="mt-5 text-body-lg text-ink-700">{t('indexLead')}</p>
        <p className="mt-4 text-body text-ink-700">{t('indexMethod')}</p>
        <p className="mt-4 text-body-sm text-slate-500">{t('englishOnly')}</p>
      </div>

      <ol className="mt-14 space-y-8 border-t border-slate-100 pt-10">
        {ISSUES.filter((issue) => !issue.unlisted).map((issue) => (
          <li key={issue.slug}>
            <article className="group max-w-[46rem]">
              <p className="text-caption uppercase tracking-wider text-slate-500">
                {t('issueLabel')} {issue.number} · {issue.edition}
              </p>
              <h2 className="mt-2 font-display text-h3 text-navy-900">
                <Link
                  href={`/insights/${issue.slug}`}
                  className="underline decoration-teal-300 decoration-2 underline-offset-4 transition-colors hover:text-teal-700"
                >
                  {issue.title}
                </Link>
              </h2>
              <p className="mt-3 text-body text-ink-700">{issue.dek}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm">
                <Link
                  href={`/insights/${issue.slug}`}
                  className="font-medium text-teal-700 hover:text-teal-900"
                >
                  {t('readIssue')} →
                </Link>
                <a
                  href={`/insights/innovia-asset-finance-${issue.slug}.pdf`}
                  download
                  className="font-medium text-teal-700 hover:text-teal-900"
                >
                  {t('downloadPdf')}
                </a>
                <span className="text-slate-300">{t('extent')}</span>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
