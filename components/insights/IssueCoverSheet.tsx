import { useTranslations } from 'next-intl';
import type { Issue, IssueCover } from '@/content/insights/types';

/**
 * The cover sheet: one full-bleed page in front of the four editorial pages.
 *
 * Full bleed is why `@page` carries no margin and each page paints its own
 * padding instead (see the print rules in `app/globals.css`). A cover framed by
 * 14mm of white would read as a slide, not a cover.
 *
 * The contents list is derived from `issue.pages`, never authored, so a renamed
 * head cannot leave the cover advertising a section that no longer exists.
 */
export default function IssueCoverSheet({
  issue,
  cover,
}: {
  issue: Issue;
  /** Passed in rather than read off the issue, because a variant may have none. */
  cover: IssueCover;
}) {
  const t = useTranslations('insights');

  return (
    <section
      className="issue-page issue-cover relative mx-auto flex max-w-[52rem] flex-col overflow-hidden bg-navy-900 text-paper print:max-w-none"
      aria-label={`${t('masthead')}, ${t('issueLabel')} ${issue.number}, ${issue.edition}`}
    >
      {/* Teal keyline down the spine edge, the one mark that repeats every month. */}
      <div className="absolute inset-y-0 left-0 w-[6px] bg-teal-500 print:w-[4mm]" />

      <div className="flex flex-1 flex-col px-10 py-12 pl-14 print:px-[16mm] print:pb-[14mm] print:pl-[22mm] print:pt-[18mm]">
        <header>
          {/* The name, once, at the size a masthead earns. The publisher credit sits
              in the imprint at the foot rather than repeating "Innovia" twice here. */}
          <p className="font-display text-[2.75rem] font-bold uppercase leading-[0.95] tracking-[0.02em] text-teal-300 print:text-[30pt]">
            {t('masthead')}
          </p>
          <p className="mt-3 max-w-[30rem] text-body-lg italic leading-snug text-slate-300 print:mt-[3mm] print:text-[11pt]">
            {cover.strapline}
          </p>
        </header>

        {/* The issue's own identity, set against the publication's. */}
        <div className="mt-auto pt-12 print:pt-[12mm]">
          <div className="flex items-baseline gap-4 border-t border-slate-300/50 pt-5 print:pt-[4mm]">
            <span className="font-mono text-[3.5rem] font-bold leading-none text-paper print:text-[40pt]">
              {String(issue.number).padStart(2, '0')}
            </span>
            <span className="font-display text-body-lg uppercase tracking-[0.16em] text-slate-300 print:text-[10pt]">
              {issue.edition}
            </span>
          </div>

          <h1 className="mt-6 font-display text-[3.25rem] font-bold leading-[1.02] tracking-[-0.01em] text-paper print:mt-[8mm] print:text-[38pt]">
            {issue.title}
          </h1>
          <p className="mt-4 max-w-[34rem] text-body-lg leading-snug text-slate-300 print:mt-[4mm] print:text-[11.5pt] print:leading-snug">
            {issue.dek}
          </p>
        </div>

        {/* The figure the issue turns on, reversed out of the cover. */}
        <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-4 border-y border-slate-300/50 py-6 print:mt-[10mm] print:py-[5mm]">
          <div>
            <span className="font-mono text-[2.5rem] font-bold leading-none text-teal-300 print:text-[28pt]">
              {cover.stat.value}
            </span>
            <p className="mt-1.5 font-display text-body-sm uppercase tracking-[0.14em] text-paper print:mt-[2mm] print:text-[8pt]">
              {cover.stat.unit}
            </p>
          </div>
          <p className="max-w-[24rem] flex-1 text-body-sm leading-snug text-slate-300 print:text-[8.5pt] print:leading-snug">
            {cover.stat.caption}
          </p>
        </div>

        <div className="mt-10 print:mt-[10mm]">
          <p className="text-caption uppercase tracking-[0.18em] text-teal-300 print:text-[7pt]">
            {t('inThisIssue')}
          </p>
          <ol className="mt-4 space-y-2.5 print:mt-[3mm] print:space-y-[2.5mm]">
            {issue.pages.map((page, index) => (
              <li key={page.heading} className="flex items-baseline gap-4">
                <span className="w-6 shrink-0 font-mono text-body-sm text-teal-300 print:text-[8pt]">
                  {index + 2}
                </span>
                <span className="font-display text-body font-semibold text-paper print:text-[10pt]">
                  {page.heading}
                </span>
                <span className="text-body-sm uppercase tracking-[0.12em] text-slate-300 print:text-[7.5pt]">
                  {page.kicker}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Imprint. */}
        <p className="mt-auto pt-10 text-caption uppercase tracking-wider text-slate-300/70 print:pt-[10mm] print:text-[6.5pt]">
          {t('publishedBy')} Innovia Systems · innoviasystems.io · {t('englishOnlyShort')}
        </p>
      </div>
    </section>
  );
}
