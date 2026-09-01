import type { Issue } from './types';

/**
 * Issue 1, September 2026, in a second register. Two pages, no cover.
 *
 * Same figures as `2026-09.ts`, same refresh, same sourcing. Only the prose
 * changes, and the extent changes with it: stripped of the qualifying clauses
 * and the sub-clauses, the argument fits in two pages, which is the useful
 * finding of the experiment.
 *
 * UNLISTED. It exists to be read next to the standard letter, not published
 * beside it. Two versions of one month on a public index would ask a reader to
 * choose an edition, which is not a question a reader should have to answer.
 *
 * HOUSE STYLE FOR THIS VARIANT, which is not the house style.
 *
 * Short declaratives. Concrete nouns: lorries, tractors, farms, money, days.
 * No adverbs. No semicolons. No abstractions, so no concentration, no
 * redistribution, no perimeter. Clauses joined with "and" rather than
 * subordinated. Repetition where repetition is the point. A paragraph may be
 * one sentence. Nothing is qualified twice, and nothing is explained after it
 * has landed.
 *
 * What this register cannot do, and it is worth knowing before choosing it: it
 * cannot hold a comparability caveat inside a sentence. "Down 38.8% on a base
 * of EUR 187m, too small a line to be describing a market" needs the sub-clause
 * the register forbids. So the caveats move wholesale into the table, and the
 * prose gets shorter and slightly braver than the evidence strictly allows.
 * That is the trade, and it is why the standard letter is the standard one.
 */
export const issue202609Hemingway: Issue = {
  slug: '2026-09-hemingway',
  number: 1,
  edition: 'September 2026',
  published: '2026-09-01',
  unlisted: true,
  title: 'The lorries and the tractors',
  dek: 'The associations published good numbers in August. Then you read them again.',

  pages: [
    {
      kicker: 'Leader',
      heading: 'The lorries and the tractors',
      columns: 2,
      blocks: [
        {
          kind: 'para',
          text: 'THE associations published their numbers in August and the numbers were good. Britain wrote 15% more business in June than it had a year before. Poland’s first half was up 8.95%. France was up 5.1%. Germany was flat, but the men there said they felt better about it than they had in two years.',
        },
        {
          kind: 'para',
          text: 'Then you read them again.',
        },
        {
          kind: 'para',
          text: 'June had 26 working days in France. The year before it had 24. Two extra days are worth about eight points, and eight points is most of the 5.1%. The association prints this in the same paper as the headline. Over the six months the French market did not grow. It fell a tenth of a point.',
        },
        {
          kind: 'para',
          text: 'In Poland the lorries did the work. Heavy transport was up 25%. Tractor units were up 31%. Machines and equipment, which is the bulk of what a lessor owns, was up 1.7%. Farm machinery was down 17.9%. The quarters ran 10.9, then 7.3, then 6.0 in July.',
        },
        {
          kind: 'quote',
          text: 'It is a line going down and it does not bend.',
        },
        {
          kind: 'para',
          text: 'In Britain the small firms had led the market for nine months. In June they stopped. Big companies borrowed 24% more and small ones borrowed 11% more. Both are growth. Only one of them is a turn.',
        },
        {
          kind: 'para',
          text: 'Spain looked bad and was not. Equipment leasing was up 1.4%. Property leasing was down 38.8%, on a line worth EUR 187m, and it pulled the whole market to minus 1.5%.',
        },
        {
          kind: 'para',
          text: 'So nothing fell. Things moved. They moved to lorries and plant and long contracts and big tickets, and those are the books that were already good. A lessor with a book of small machines and farms will read the same releases and wonder about his own quarter.',
        },
        {
          kind: 'callout',
          title: 'What is not there',
          text: 'Leaseurope has not published its 2025 figures. Its quarterly index has published nothing since the end of 2024. That is fifteen months. There is no European number to settle any of this, so you work from the national ones, and the national ones do not agree.',
        },
        {
          kind: 'chart',
          title: 'What went up and what went down',
          subtitle: 'New leasing volumes by asset class, first half of 2026 against the first half of 2025, % change',
          source:
            'Sources: Zwiazek Polskiego Leasingu (Poland); Asociacion Espanola de Leasing y Renting (Spain), via press wire. Polish property leasing, down by 70% on a base of PLN 109m, is left out as too small to describe a market. Both markets report the same period.',
          bars: [
            { label: 'Heavy transport', market: 'Poland', value: 25.5 },
            { label: 'Light vehicles to 3.5t', market: 'Poland', value: 8.3 },
            { label: 'Machinery and equipment', market: 'Poland', value: 1.7 },
            { label: 'Equipment', market: 'Spain', value: 1.4 },
            { label: 'Farm machinery', market: 'Poland', value: -17.9 },
            { label: 'Property', market: 'Spain', value: -38.8 },
          ],
        },
      ],
    },

    {
      kicker: 'The numbers',
      heading: 'What they printed',
      standfirst: 'Every row carries its period and its basis. Nothing is converted and nothing is added across borders.',
      columns: 1,
      blocks: [
        {
          kind: 'figures',
          caption:
            'Read from the associations’ own releases between August 5th and September 1st 2026. The Spanish rows exist only on a press wire and are marked secondary.',
          rows: [
            {
              scope: 'Britain',
              metric: 'Asset finance new business, month',
              value: 'GBP 3,816m',
              period: 'June 2026',
              change: '+15%',
              basis: 'Finance and Leasing Association members. Published in GBP, not converted.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'Britain',
              metric: 'Growth, smaller firms against larger businesses',
              value: '+11% / +24%',
              period: 'June 2026',
              change: null,
              basis: 'Rates only. No levels are published, so the two cannot be weighted.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'France',
              metric: 'Consumer and vehicle finance production, month',
              value: 'EUR 4,433m',
              period: 'June 2026',
              change: '+5.1%',
              basis: '26 working days against 24. About eight points of that is the calendar. Not an equipment series.',
              sourceUrl: 'https://asf-france.com/wp-content/uploads/2026/08/CitConso06m26.pdf',
            },
            {
              scope: 'France',
              metric: 'The same series, half year',
              value: 'EUR 23,747m',
              period: 'January to June 2026',
              change: '-0.1%',
              basis: 'Six months washes the calendar out. Read the June headline against this.',
              sourceUrl: 'https://asf-france.com/wp-content/uploads/2026/08/CitConso06m26.pdf',
            },
            {
              scope: 'Germany',
              metric: 'ifo business climate, leasing',
              value: '-6.6',
              period: 'August 2026',
              change: 'from -15.9',
              basis: 'A survey of members, not a volume. July was revised from -16.9.',
              sourceUrl: 'https://bdl.leasingverband.de/newsroom/pressemitteilungen',
            },
            {
              scope: 'Poland',
              metric: 'New leasing and leasing-loan financing',
              value: 'PLN 61.87bn',
              period: 'H1 2026',
              change: '+8.95%',
              basis: 'Published in PLN. Includes leasing loan, PLN 10.05bn, up 21.6%. Farm machinery sits inside machinery and equipment and fell 17.94%.',
              sourceUrl: 'https://www.leasing.org.pl/',
            },
            {
              scope: 'Spain',
              metric: 'New leasing investment, equipment',
              value: 'EUR 3,918.3m',
              period: 'January to June 2026',
              change: '+1.4%',
              basis: 'Secondary. Given to a press wire, not to the association’s own site, which stops at May.',
              sourceUrl: 'https://forbes.es/ultima-hora/995517/el-mercado-del-leasing-financiero-negocio-4-100-millones-en-el-primer-semestre-un-15-menos/',
            },
            {
              scope: 'Spain',
              metric: 'New leasing investment, property',
              value: 'EUR 186.8m',
              period: 'January to June 2026',
              change: '-38.8%',
              basis: 'Secondary. Carries the whole -1.5% fall on 4.5% of the volume. Renting is a separate series.',
              sourceUrl: 'https://forbes.es/ultima-hora/995517/el-mercado-del-leasing-financiero-negocio-4-100-millones-en-el-primer-semestre-un-15-menos/',
            },
            {
              scope: 'Europe',
              metric: 'Total new leasing volume granted',
              value: 'EUR 454bn',
              period: 'FY2024',
              change: null,
              basis: 'Leaseurope. The 2025 figures were not published as at September 1st 2026.',
              sourceUrl: 'https://www.leaseurope.org/data-research/annual-statistics',
            },
          ],
        },
        {
          kind: 'prediction',
          claim:
            'The turn holds. When Britain prints July in the second half of September, the big companies will again have grown faster than the small ones.',
          falsifier: 'the small firms match them or beat them, which would make June one odd month.',
          by: 'the end of September 2026',
        },
        {
          kind: 'subhead',
          text: 'What to watch',
        },
        {
          kind: 'items',
          items: [
            {
              term: 'Second half of September',
              text: 'Britain prints July. That settles the claim above.',
            },
            {
              term: 'Late September',
              text: 'France prints the half year. It is the first equipment figure since the first quarter.',
            },
            {
              term: 'October 19th',
              text: 'The amended definition of default applies. Leasing asked to be carved out of it and was not.',
            },
            {
              term: 'Mid-October',
              text: 'Romania prints the second quarter. Count the reporting members before you read the rate. There are eight now. There were ten.',
            },
          ],
        },
        {
          kind: 'para',
          text: 'Method. Public sources only, read between August 5th and September 1st 2026. Fifteen national associations and the two European federations. Every figure carries its period and its basis. Where a figure rests on one source it says so.',
        },
        {
          kind: 'sources',
          sources: [
            {
              label: 'FLA',
              publication: 'Finance and Leasing Association, asset finance new business, June 2026',
              date: '2026-08-27',
              url: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
              confidence: 'confirmed',
            },
            {
              label: 'ASF',
              publication: 'Association francaise des Societes Financieres, monthly express survey, June 2026',
              date: '2026-08-31',
              url: 'https://asf-france.com/wp-content/uploads/2026/08/CitConso06m26.pdf',
              confidence: 'confirmed',
            },
            {
              label: 'BDL',
              publication: 'Bundesverband Deutscher Leasing-Unternehmen, ifo climate for leasing, August 2026',
              date: '2026-08-26',
              url: 'https://bdl.leasingverband.de/newsroom/pressemitteilungen',
              confidence: 'confirmed',
            },
            {
              label: 'ZPL',
              publication: 'Zwiazek Polskiego Leasingu, H1 2026 results and source workbooks',
              date: '2026-08-06',
              url: 'https://www.leasing.org.pl/',
              confidence: 'confirmed',
            },
            {
              label: 'AELR',
              publication: 'Asociacion Espanola de Leasing y Renting, H1 2026, via press wire',
              date: '2026-08-06',
              url: 'https://forbes.es/ultima-hora/995517/el-mercado-del-leasing-financiero-negocio-4-100-millones-en-el-primer-semestre-un-15-menos/',
              confidence: 'secondary',
            },
            {
              label: 'ALCCR',
              publication: 'Romanian financial companies association, quarterly study to 31 March 2026',
              date: '2026-07-15',
              url: 'https://alccr.ro/studii-trimestriale/',
              confidence: 'confirmed',
            },
            {
              label: 'Leaseurope',
              publication: 'Annual statistics; FY2024 is the newest published',
              date: '2026-09-01',
              url: 'https://www.leaseurope.org/data-research/annual-statistics',
              confidence: 'confirmed',
            },
            {
              label: 'EBA',
              publication: 'Amended guidelines on the definition of default, applying 19 October 2026',
              date: '2026-05-07',
              url: 'https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/credit-risk/guidelines-application-definition-default',
              confidence: 'confirmed',
            },
          ],
        },
      ],
    },
  ],
};
