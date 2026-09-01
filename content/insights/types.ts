/**
 * Content model for one issue of the monthly asset finance letter.
 *
 * The issue is authored as data, not as JSX, for three reasons that matter at a
 * monthly cadence: the web page and the four-page PDF render from the same
 * source so they can never drift, every figure is forced to carry its period,
 * basis and source url by the type itself, and a new issue is a new data file
 * rather than a new component.
 *
 * Issues are published in English only. The surrounding page chrome is
 * localised in all five site locales; the document is not. See
 * `components/insights/InsightIssue.tsx` for how that is signposted to a
 * non-English reader.
 */

/** A figure that has cleared the sourcing discipline: no bare numbers. */
export type Figure = {
  /** Market or scope the figure describes, e.g. 'Britain', 'Europe'. */
  scope: string;
  /** What is measured, stated with its basis (new business vs outstandings). */
  metric: string;
  /** Rendered as given, so a reader sees the same precision we read. */
  value: string;
  /** Reporting period the value belongs to, never implied as current. */
  period: string;
  /** Change against the comparable prior period, or null where we have none. */
  change: string | null;
  /**
   * Why this number may not be compared naively with the row above it:
   * leasing only vs leasing plus renting, members vs whole market, and so on.
   * Required, because the comparability caveat is the part a reader loses first.
   */
  basis: string;
  /** Public source the value was read from. */
  sourceUrl: string;
};

export type Source = {
  /** Short label used in the text, e.g. 'FLA'. */
  label: string;
  /** Publisher and document, spelled out. */
  publication: string;
  /** Publication or retrieval date, ISO. */
  date: string;
  url: string;
  /**
   * `confirmed` read from the publisher's own release, `secondary` reported
   * elsewhere because the primary is gated, `estimated` derived by us.
   */
  confidence: 'confirmed' | 'secondary' | 'estimated';
};

/**
 * One bar of the diverging chart.
 *
 * Every bar in a chart shares one reporting period. A chart mixing a monthly
 * growth rate with a half-year one commits the exact error this letter exists
 * to point out, so the period is declared once on the chart and there is no
 * room to vary it per bar.
 */
export type ChartBar = {
  /** Asset class or line, as the publisher names it. */
  label: string;
  /** Market the line belongs to, printed beside the label. */
  market: string;
  /** Percentage change. The sign drives both direction and colour. */
  value: number;
};

export type Block =
  | { kind: 'para'; text: string }
  /** Small section label inside a page, for a second run of items. */
  | { kind: 'subhead'; text: string }
  /** The single number the issue turns on, set apart. */
  | { kind: 'lede'; value: string; unit: string; caption: string }
  /** Pull quote. A sentence lifted from the argument, never new material. */
  | { kind: 'quote'; text: string }
  | { kind: 'callout'; title: string; text: string }
  | { kind: 'figures'; caption: string; rows: Figure[] }
  | {
      kind: 'chart';
      title: string;
      /** States the measure and, critically, the one shared period. */
      subtitle: string;
      /** Publishers, plus any line deliberately excluded and why. */
      source: string;
      bars: ChartBar[];
    }
  | { kind: 'items'; items: { term: string; text: string }[] }
  /**
   * A claim stated so that a reader can find out next month whether we were
   * wrong. Without the falsifier this is just an opinion with a date on it.
   */
  | { kind: 'prediction'; claim: string; falsifier: string; by: string }
  | { kind: 'sources'; sources: Source[] };

export type IssuePage = {
  /** Section label, set in small capitals above the head. */
  kicker: string;
  /** Section title printed at the top of the page. */
  heading: string;
  /** One line under the heading, telling the reader what the page is for. */
  standfirst?: string;
  /** Body columns. Tabular pages want one; prose pages want two. */
  columns?: 1 | 2;
  blocks: Block[];
};

/**
 * The cover sheet.
 *
 * Contents are NOT authored here. They are derived from the pages, so a renamed
 * head or a reordered page cannot leave the cover advertising something the
 * issue no longer contains.
 */
export type IssueCover = {
  /**
   * The masthead line. Describes the letter, not the issue, so it repeats
   * unchanged every month and is the one string here that reads as brand.
   *
   * Keep it to a single gesture. Every draft that opposed two things ("the
   * numbers and the basis", "four pages, no figure without its basis") read as
   * a slogan built from a formula, which is the same tic in miniature that the
   * house style bans from the prose.
   *
   * Keep it off the method, too. The sourcing discipline is already stated in
   * the method note and demonstrated in the Basis column, so a masthead line
   * about sources says a third time what the document has twice proved. A
   * masthead line names the beat and the cadence, the way a newspaper's does,
   * and lets the tone do the rest.
   *
   * The line that survived is four nouns and a preposition. It names what the
   * letter is about in words a reader can picture, carries the cadence in its
   * first word, and says nothing about us. Adverbs, verbs about our own
   * diligence, and any second clause that qualifies the first are all things to
   * cut here rather than balance.
   */
  strapline: string;
  /** The single figure the cover leads on. */
  stat: { value: string; unit: string; caption: string };
};

export type Issue = {
  /** URL segment and PDF filename, e.g. '2026-09'. */
  slug: string;
  /** Sequential issue number, printed on the cover. */
  number: number;
  /** Cover month as printed, e.g. 'September 2026'. */
  edition: string;
  /** Publication date, ISO. Drives ordering and the sitemap. */
  published: string;
  /** Cover title. Specific to this issue, never a generic label. */
  title: string;
  /**
   * Kept out of the public index and the sitemap. For a variant that exists to
   * be read and compared rather than published.
   */
  unlisted?: boolean;
  /** One-sentence cover line. Also the meta description. */
  dek: string;
  /**
   * Omit for a variant that leads on its own masthead instead of a cover sheet.
   */
  cover?: IssueCover;
  /**
   * The standard letter runs four pages behind a cover. A variant may run
   * fewer, so the extent is not fixed in the type; it is published by the
   * document in `data-sheets` and asserted against the rendered PDF by
   * `scripts/build_issue_pdf.py`, which keeps the claim and the artefact in
   * step without a constant in either place.
   */
  pages: IssuePage[];
};
