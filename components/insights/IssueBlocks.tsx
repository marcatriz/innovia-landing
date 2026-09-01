import type { Block } from '@/content/insights/types';
import IssueChart from './IssueChart';

/**
 * Renders the block types an issue page is made of.
 *
 * Split out of `InsightIssue` so that the booklet reader, which is a client
 * component, can render pages without the whole document living in one file.
 */
export default function IssueBlocks({
  blocks,
  dropCap = false,
}: {
  blocks: Block[];
  dropCap?: boolean;
}) {
  let firstPara = true;

  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'para': {
            const isOpener = dropCap && firstPara;
            firstPara = false;
            return (
              <p
                key={i}
                className={`mb-3 text-body leading-snug print:mb-2 print:text-[9pt] print:leading-[1.32] ${
                  isOpener ? 'issue-dropcap' : ''
                }`}
              >
                {block.text}
              </p>
            );
          }

          case 'subhead':
            return (
              <p
                key={i}
                className="mb-2 mt-4 break-after-avoid border-t-2 border-navy-900 pt-1.5 text-caption uppercase tracking-[0.14em] text-teal-700 print:mb-1 print:mt-2.5 print:pt-1 print:text-[6.5pt]"
              >
                {block.text}
              </p>
            );

          case 'lede':
            return (
              <div
                key={i}
                className="mb-3 break-inside-avoid border-l-[3px] border-teal-500 bg-tint px-4 py-3 print:mb-2 print:px-2.5 print:py-1.5"
              >
                <div className="font-display text-h3 font-bold leading-none text-navy-900 print:text-[15pt]">
                  {block.value}
                  <span className="ml-2 align-middle text-body font-semibold text-teal-700 print:text-[8pt]">
                    {block.unit}
                  </span>
                </div>
                <p className="mt-1.5 text-body-sm leading-snug text-slate-500 print:mt-1 print:text-[7pt] print:leading-snug">
                  {block.caption}
                </p>
              </div>
            );

          case 'quote':
            return (
              <blockquote
                key={i}
                className="my-4 break-inside-avoid border-y-2 border-navy-900 py-3 print:my-2 print:py-1.5"
              >
                <p className="font-display text-h4 leading-tight text-navy-900 print:text-[10pt] print:leading-tight">
                  {block.text}
                </p>
              </blockquote>
            );

          case 'callout':
            return (
              <div
                key={i}
                className="mb-3 break-inside-avoid border border-slate-200 bg-tint px-4 py-3 print:mb-2 print:px-2.5 print:py-1.5"
              >
                <h4 className="mb-1.5 font-display text-body font-semibold text-navy-900 print:mb-1 print:text-[9pt]">
                  {block.title}
                </h4>
                <p className="text-body-sm leading-snug text-ink-700 print:text-[8pt] print:leading-snug">
                  {block.text}
                </p>
              </div>
            );

          case 'items':
            return (
              <dl key={i} className="mb-3 space-y-2.5 print:mb-2 print:space-y-1.5">
                {block.items.map((item) => (
                  <div key={item.term} className="break-inside-avoid">
                    <dt className="font-display text-body font-semibold leading-tight text-navy-900 print:text-[9pt]">
                      {item.term}
                    </dt>
                    <dd className="text-body-sm leading-snug text-ink-700 print:text-[8.5pt] print:leading-[1.3]">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            );

          case 'chart':
            return (
              <div key={i} className="issue-span">
                <IssueChart
                  title={block.title}
                  subtitle={block.subtitle}
                  source={block.source}
                  bars={block.bars}
                />
              </div>
            );

          case 'figures':
            return (
              <figure key={i} className="mb-3 print:mb-2">
                {/* Wide tables scroll in their own box on screen; in print they are set to fit. */}
                <div className="-mx-1 overflow-x-auto print:mx-0 print:overflow-visible">
                  <table className="w-full min-w-[46rem] border-collapse text-left print:min-w-0 print:text-[7pt]">
                    <thead>
                      <tr className="border-b-2 border-navy-900">
                        {['Market', 'Measure', 'Value', 'Period', 'Change', 'Basis'].map((head) => (
                          <th
                            key={head}
                            className="py-2 pr-3 align-bottom text-caption uppercase tracking-wider text-slate-500 print:py-0.5 print:pr-1.5 print:text-[6pt]"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className="border-b border-slate-100 align-top">
                          <td className="py-2 pr-3 text-body-sm font-medium text-navy-900 print:whitespace-nowrap print:py-0.5 print:pr-1.5 print:text-[7pt]">
                            {row.scope}
                          </td>
                          <td className="py-2 pr-3 text-body-sm text-ink-700 print:py-0.5 print:pr-1.5 print:text-[7pt]">
                            {row.metric}
                          </td>
                          <td className="py-2 pr-3 font-mono text-body-sm text-navy-900 print:py-0.5 print:pr-1.5 print:text-[7pt]">
                            {row.value}
                          </td>
                          <td className="py-2 pr-3 text-body-sm text-slate-500 print:py-0.5 print:pr-1.5 print:text-[6.5pt]">
                            {row.period}
                          </td>
                          <td className="py-2 pr-3 font-mono text-body-sm text-ink-700 print:py-0.5 print:pr-1.5 print:text-[7pt]">
                            {row.change ?? 'not comparable'}
                          </td>
                          <td className="py-2 text-body-sm text-slate-500 print:py-0.5 print:text-[6.5pt] print:leading-tight">
                            {row.basis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figcaption className="mt-2 text-body-sm text-slate-500 print:mt-1 print:text-[6.5pt] print:leading-snug">
                  {block.caption}
                </figcaption>
              </figure>
            );

          case 'prediction':
            return (
              <div
                key={i}
                className="mb-3 break-inside-avoid border-2 border-navy-900 px-4 py-3 print:mb-2 print:px-2.5 print:py-1.5"
              >
                <p className="mb-1.5 text-caption uppercase tracking-[0.12em] text-teal-700 print:mb-1 print:text-[6pt]">
                  A hostage to fortune
                </p>
                <p className="mb-1.5 font-display text-body font-semibold leading-tight text-navy-900 print:mb-1 print:text-[9pt] print:leading-snug">
                  {block.claim}
                </p>
                <p className="text-body-sm leading-snug text-ink-700 print:text-[8pt] print:leading-snug">
                  <span className="font-semibold">Wrong if:</span> {block.falsifier}{' '}
                  <span className="text-slate-500">Testable by {block.by}.</span>
                </p>
              </div>
            );

          case 'sources':
            return (
              <p
                key={i}
                className="issue-span mt-2 border-t border-slate-200 pt-2 text-body-sm leading-snug text-slate-500 print:mt-1.5 print:pt-1 print:text-[6pt] print:leading-[1.35]"
              >
                <span className="font-semibold uppercase tracking-wider text-ink-700">Sources. </span>
                {block.sources.map((source, s) => (
                  <span key={source.url}>
                    {s > 0 && ' '}
                    <span className="font-semibold text-ink-700">{source.label}:</span>{' '}
                    {source.publication}, {source.date}, {source.confidence},{' '}
                    <span className="break-all font-mono print:text-[5.5pt]">{source.url}</span>
                    {s < block.sources.length - 1 ? '.' : ''}
                  </span>
                ))}
              </p>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
