import { useTranslations } from 'next-intl';
import type { Issue, IssuePage } from '@/content/insights/types';
import IssueBlocks from './IssueBlocks';

/**
 * One editorial page: kicker, head, rubric, body, running foot.
 *
 * Page one keeps the reversed masthead bar and takes the issue title as its
 * head, which is why `pages[0].heading` is not printed there; it names the
 * section for assistive technology instead.
 */
export default function IssuePageSheet({
  issue,
  page,
  index,
  sheet,
  sheets,
}: {
  issue: Issue;
  page: IssuePage;
  index: number;
  /** This page's position in the document, cover included. */
  sheet: number;
  /** Total sheets in the document, so the foot cannot claim a fixed extent. */
  sheets: number;
}) {
  const t = useTranslations('insights');
  const isLeader = index === 0;

  return (
    <section
      className="issue-page mx-auto max-w-[52rem] bg-paper print:max-w-none"
      aria-label={isLeader ? issue.title : page.heading}
    >
      {isLeader ? (
        <header className="mb-4 print:mb-2.5">
          {/* Reversed masthead bar: the one piece of furniture a reader recognises
              before reading a word, so it stays identical every month. */}
          <div className="flex items-baseline justify-between bg-navy-900 px-4 py-2.5 print:px-2.5 print:py-1.5">
            <span className="font-display text-h4 font-bold uppercase tracking-[0.16em] text-paper print:text-[10pt]">
              {t('masthead')}
            </span>
            <span className="font-mono text-body-sm text-teal-300 print:text-[7pt]">
              {t('issueLabel')} {issue.number} · {issue.edition}
            </span>
          </div>
          <p className="mt-4 text-caption uppercase tracking-[0.16em] text-teal-700 print:mt-2 print:text-[6.5pt]">
            {page.kicker}
          </p>
          <h1 className="mt-1.5 font-display text-h1 leading-[1.05] text-navy-900 print:mt-1 print:text-[24pt]">
            {issue.title}
          </h1>
          <p className="mt-2.5 border-b-2 border-navy-900 pb-3 text-body-lg italic leading-snug text-ink-700 print:mt-1.5 print:pb-2 print:text-[10pt] print:leading-snug">
            {issue.dek}
          </p>
        </header>
      ) : (
        <header className="mb-3 border-b-2 border-navy-900 pb-2 print:mb-2 print:pb-1.5">
          <p className="text-caption uppercase tracking-[0.16em] text-teal-700 print:text-[6.5pt]">
            {page.kicker}
          </p>
          <h2 className="mt-1 font-display text-h2 leading-tight text-navy-900 print:mt-0.5 print:text-[15pt]">
            {page.heading}
          </h2>
          {page.standfirst && (
            <p className="mt-1.5 text-body italic leading-snug text-slate-500 print:mt-1 print:text-[8pt] print:leading-snug">
              {page.standfirst}
            </p>
          )}
        </header>
      )}

      <div className={page.columns === 2 ? 'issue-cols' : undefined}>
        <IssueBlocks blocks={page.blocks} dropCap={isLeader} />
      </div>

      {/* Running foot, printed on every page so a loose sheet identifies itself. */}
      <p className="mt-8 flex justify-between border-t border-navy-900 pt-2 text-caption uppercase tracking-wider text-slate-500 print:mt-2 print:pt-1 print:text-[6pt]">
        <span>
          {t('masthead')} · {issue.edition}
        </span>
        <span>
          {t('pageLabel')} {sheet}/{sheets} · innoviasystems.io
        </span>
      </p>
    </section>
  );
}
