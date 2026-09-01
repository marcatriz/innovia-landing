import { useTranslations } from 'next-intl';
import type { Issue } from '@/content/insights/types';
import IssueReader from './IssueReader';

/**
 * One issue: a cover sheet and four editorial pages.
 *
 * The document itself is rendered by `IssueReader`, which offers the same five
 * sheets either as a scroll or as a booklet. The page count is asserted by
 * `scripts/build_issue_pdf.py`, which fails unless the PDF is exactly five
 * pages, and the page-break structure therefore lives in the print rules in
 * `app/globals.css` rather than in hand-placed spacers.
 */
export default function InsightIssue({ issue }: { issue: Issue }) {
  const t = useTranslations('insights');
  const pdfHref = `/insights/innovia-asset-finance-${issue.slug}.pdf`;

  return (
    <article
      className="container-x pb-20 pt-8 print:p-0"
      /* The guard reads this instead of a hard-coded page count. */
      data-sheets={issue.pages.length + (issue.cover ? 1 : 0)}
    >
      {/* Download button and language notice are page furniture, not the document. */}
      <div
        data-print-hide
        className="mx-auto mb-6 flex max-w-[52rem] flex-wrap items-center gap-4 border-b border-slate-100 pb-6"
      >
        <a href={pdfHref} className="btn-secondary text-body-sm" download>
          {t('downloadPdf')}
        </a>
        <p className="text-body-sm text-slate-500">{t('englishOnly')}</p>
      </div>

      <IssueReader issue={issue} />
    </article>
  );
}
