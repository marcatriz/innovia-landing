import type { ChartBar } from '@/content/insights/types';

/**
 * Diverging bar chart, hand-rolled SVG.
 *
 * Form follows the data's job, which here is polarity: which lines are growing
 * and which are shrinking. Hence diverging bars sorted by value around a zero
 * rule, not a column chart and not a table (the table is on the next page and
 * serves as this chart's data view).
 *
 * Colour is the brand diverging pair, teal-500 for growth and danger for
 * contraction. Those two hex values were run through the palette validator and
 * pass all six checks against a light surface: CVD separation delta E 13.6
 * (deuteranopia), normal vision 28.9, contrast over 3:1, chroma above the floor.
 * Do not substitute teal-700 here, which fails the chroma floor and reads grey.
 *
 * Colour is never the only carrier: each bar sits on a signed direct label and
 * on its own side of the zero rule, so the chart survives greyscale printing and
 * colour vision deficiency.
 *
 * No gridlines and no value axis. With seven bars, direct labels are the axis.
 */

const GROWTH = '#079A9C';
const CONTRACTION = '#D6443C';

const LABEL_W = 176;
const PLOT_W = 392;
/**
 * Value labels sit outside the bar end, so the plot needs a gutter on BOTH
 * sides, not just the right. Without the left one, the longest negative bar
 * reaches the label column and its value label prints on top of the row label.
 */
const GUTTER = 44;
const ROW_H = 13;
const ROW_GAP = 7;
const TOP_PAD = 4;
const RADIUS = 3;

/** Bar path with the data end rounded and the zero end square. */
function barPath(zeroX: number, endX: number, y: number, h: number): string {
  const r = Math.min(RADIUS, Math.abs(endX - zeroX));
  if (endX >= zeroX) {
    return [
      `M ${zeroX} ${y}`,
      `H ${endX - r}`,
      `Q ${endX} ${y} ${endX} ${y + r}`,
      `V ${y + h - r}`,
      `Q ${endX} ${y + h} ${endX - r} ${y + h}`,
      `H ${zeroX}`,
      'Z',
    ].join(' ');
  }
  return [
    `M ${zeroX} ${y}`,
    `H ${endX + r}`,
    `Q ${endX} ${y} ${endX} ${y + r}`,
    `V ${y + h - r}`,
    `Q ${endX} ${y + h} ${endX + r} ${y + h}`,
    `H ${zeroX}`,
    'Z',
  ].join(' ');
}

export default function IssueChart({
  title,
  subtitle,
  source,
  bars,
}: {
  title: string;
  subtitle: string;
  source: string;
  bars: ChartBar[];
}) {
  const sorted = [...bars].sort((a, b) => b.value - a.value);
  const maxPos = Math.max(0, ...sorted.map((b) => b.value));
  const maxNeg = Math.min(0, ...sorted.map((b) => b.value));
  const span = maxPos - maxNeg || 1;
  const perUnit = PLOT_W / span;
  const zeroX = LABEL_W + GUTTER + Math.abs(maxNeg) * perUnit;
  const plotH = sorted.length * (ROW_H + ROW_GAP) - ROW_GAP;
  const height = plotH + TOP_PAD * 2;
  const width = LABEL_W + GUTTER + PLOT_W + GUTTER;

  return (
    <figure className="my-4 border-t-2 border-navy-900 pt-3 print:my-2 print:pt-1.5">
      <figcaption className="mb-2 print:mb-1">
        <p className="font-display text-h4 leading-tight text-navy-900 print:text-[9.5pt]">{title}</p>
        <p className="text-body-sm text-slate-500 print:text-[7pt] print:leading-snug">{subtitle}</p>
      </figcaption>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        role="img"
        aria-label={`${title}. ${subtitle}. ${sorted
          .map((b) => `${b.label}, ${b.market}, ${b.value > 0 ? 'up' : 'down'} ${Math.abs(b.value)} percent`)
          .join('. ')}`}
        className="block"
      >
        {sorted.map((bar, i) => {
          const y = TOP_PAD + i * (ROW_H + ROW_GAP);
          const endX = zeroX + bar.value * perUnit;
          const positive = bar.value >= 0;
          const valueX = positive ? endX + 5 : endX - 5;
          return (
            <g key={`${bar.market}-${bar.label}`}>
              <title>{`${bar.label}, ${bar.market}: ${bar.value > 0 ? '+' : ''}${bar.value}%`}</title>
              <text
                x={LABEL_W - 10}
                y={y + ROW_H - 2.5}
                textAnchor="end"
                fontSize="8"
                fill="#2E3942"
                fontFamily="Inter, Segoe UI, system-ui, sans-serif"
              >
                {bar.label}
                <tspan fill="#5C6975"> {bar.market}</tspan>
              </text>
              <path d={barPath(zeroX, endX, y, ROW_H)} fill={positive ? GROWTH : CONTRACTION} />
              <text
                x={valueX}
                y={y + ROW_H - 2.5}
                textAnchor={positive ? 'start' : 'end'}
                fontSize="8"
                fontWeight="600"
                fill="#17202A"
                fontFamily="JetBrains Mono, Consolas, monospace"
              >
                {bar.value > 0 ? '+' : ''}
                {bar.value}
              </text>
            </g>
          );
        })}
        {/* Zero rule sits above the bars so the baseline stays readable. */}
        <line x1={zeroX} y1={0} x2={zeroX} y2={height} stroke="#5C6975" strokeWidth="1" />
      </svg>

      <p className="mt-2 border-t border-slate-200 pt-1.5 text-body-sm text-slate-500 print:mt-1 print:pt-1 print:text-[6.5pt] print:leading-snug">
        {source}
      </p>
    </figure>
  );
}
