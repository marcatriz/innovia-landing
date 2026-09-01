import type { Issue } from './types';

/**
 * Issue 1, September 2026.
 *
 * Sourced from the leasing-radar corpus tier-1 refresh of 2026-09-01
 * (`C:\leasing-radar\refresh-log\2026-09-01-tier1-refresh.diff.md`), which
 * carries the comparability warnings and the negative findings behind every
 * figure below. Where that log records a caveat, the caveat is in the table.
 *
 * HOUSE STYLE, and it is worth reading before editing a word of this file.
 *
 * British spelling. `%` in text. Dates as "August 6th". Figures rounded in
 * prose and exact in the table. No bylines, no first person singular. Companies
 * named where the transaction is public.
 *
 * Heads are short and allusive, two to four words, and they do not all share
 * one rhythm. Rubrics are a single line. Openings are concrete: a place, an
 * actor, a date, never an abstraction. Verbs carry the sentence, so prefer
 * "lorries did the heavy lifting" to "growth was concentrated in heavy
 * transport". Wit comes from putting two facts next to each other, never from
 * an aphorism, and a paragraph ends on a consequence rather than on a maxim.
 *
 * Open the leader on a word whose first letter is WIDE. The drop cap floats the
 * initial, and a narrow one (I, J, l) leaves the rest of the word hanging in
 * mid-air beside a sliver of ink. "AUGUST was a good month" sets; "IT WAS a
 * good August" does not.
 *
 * Three habits to keep out, because they are what makes a draft read as
 * machine-written: the antithesis reflex ("it is not X, it is Y") used more
 * than once or twice in a whole issue; the self-satisfied closing clause
 * ("which is most of the work", "and it is not a rounding error"); and
 * preaching about our own method inside the argument, which belongs in the
 * method note and nowhere else.
 */
export const issue202609: Issue = {
  slug: '2026-09',
  number: 1,
  edition: 'September 2026',
  published: '2026-09-01',
  cover: {
    strapline: 'The month in machines and money.',
    stat: {
      value: '+25.5%',
      unit: 'Poland, heavy transport',
      caption:
        'In the same half-year, machinery and equipment managed 1.7% and farm machinery fell by 17.9%. One market, one period, three different answers.',
    },
  },
  title: 'Mind the base',
  dek: 'Europe\u2019s leasing headlines are being carried by lorries. Underneath them, the workhorses have stalled.',

  pages: [
    {
      kicker: 'Leader',
      heading: 'Mind the base',
      columns: 2,
      blocks: [
        {
          kind: 'para',
          text: 'AUGUST was a good month for Europe\u2019s leasing associations, and a confusing one for anybody reading them. Britain\u2019s finance houses wrote 15% more asset-finance business in June than a year earlier. Poland\u2019s lessors reported a first half 8.95% ahead. France added 5.1%. Even Germany, where volumes have gone nowhere for two years, produced a leap in sentiment. Read together, the releases describe a continent coming back to life.',
        },
        {
          kind: 'para',
          text: 'Read apart, they describe something narrower. Begin with France, where the arithmetic is doing the talking. June 2026 had 26 working days; June 2025 had 24. That is worth some eight points of growth before a single extra contract is signed, and the Association francaise des Societes Financieres says as much in the same release. On its own quarterly averages the second quarter grew by 0.2% and the first half shrank by 0.1%, to EUR 23.7bn. The month that looks like a recovery is a month that stood still.',
        },
        {
          kind: 'para',
          text: 'Britain\u2019s figures are firmer, and more interesting. The Finance and Leasing Association counted GBP 3.8bn of new business in June and GBP 41.6bn over the rolling year. Plant and machinery rose by 17% and commercial vehicles by 26%; business equipment fell by 15%. Then there is the turn nobody trailed. After nine consecutive months in which small and medium-sized firms led the market, June went the other way: big companies borrowed 24% more, small ones 11%.',
        },
        {
          kind: 'para',
          text: 'Poland is blunter. The half-year figures published by Zwiazek Polskiego Leasingu on August 6th came to PLN 61.9bn. Lorries did the heavy lifting, up by 25%, with tractor units up by 31%. Machinery and equipment, the workhorse of any lessor\u2019s book, managed 1.7%. Farm machinery fell by 17.9%. Quarterly growth has slowed from 10.9% to 7.3%, and to 6.0% in July.',
        },
        {
          kind: 'quote',
          text: 'The month that looks like a recovery is a month that stood still.',
        },
        {
          kind: 'para',
          text: 'Spain reads worse than it is. New leasing investment fell by 1.5% in the first half while equipment leasing rose by 1.4%. The entire decline is property leasing, down by 38.8% on a base of EUR 187m, too small a line to be describing a market. Germany supplied mood rather than money: the ifo climate index for leasing leapt to -6.6 in August from a revised -15.9, and the Bundesverband Deutscher Leasing-Unternehmen, which publishes it, notes that investment has yet to follow.',
        },
        {
          kind: 'para',
          text: 'None of this is a downturn. It is a redistribution, and the winners were already winning. Growth that arrives in lorries, in plant, in bigger tickets and in longer contracts flatters balance sheets already pointed that way. It does little for a lessor whose book is full of small-ticket kit and farms, and such lessors are numerous. They will read the same press releases as everybody else and wonder why their own quarter felt so hard.',
        },
        {
          kind: 'callout',
          title: 'The dog that did not bark',
          text: 'Leaseurope has yet to publish its 2025 annual statistical enquiry, so the best pan-European figure remains 2024\u2019s EUR 454bn. Its quarterly index, which still calls itself quarterly, has printed nothing since the fourth quarter of 2024. Fifteen months without a continental series leaves an argument like this one to be built out of national releases that do not agree on definitions. This one was, and the table overleaf shows where they part company.',
        },
        {
          kind: 'chart',
          title: 'Heavy lifting',
          subtitle:
            'New leasing volumes by asset class, first half of 2026 against the first half of 2025, % change',
          source:
            'Sources: Zwiazek Polskiego Leasingu (Poland); Asociacion Espanola de Leasing y Renting (Spain), via press wire. Polish property leasing, down by 70% on a base of PLN 109m, is left out as too small to describe a market. Both markets report the same period, which is why they can share an axis.',
          bars: [
            { label: 'Heavy transport', market: 'Poland', value: 25.5 },
            { label: 'Light vehicles to 3.5t', market: 'Poland', value: 8.3 },
            { label: 'IT equipment', market: 'Poland', value: 3.8 },
            { label: 'Machinery and equipment', market: 'Poland', value: 1.7 },
            { label: 'Equipment (mobiliario)', market: 'Spain', value: 1.4 },
            { label: 'Farm machinery', market: 'Poland', value: -17.9 },
            { label: 'Property', market: 'Spain', value: -38.8 },
          ],
        },
      ],
    },

    {
      kicker: 'By the numbers',
      heading: 'Caveat lector',
      standfirst:
        'Every row states its period, its basis and the currency it was published in. Nothing has been converted, averaged or added up across borders.',
      columns: 1,
      blocks: [
        {
          kind: 'figures',
          caption:
            'Read from the associations\u2019 own public releases between August 5th and September 1st 2026, bar the Spanish rows, which exist only on a press wire and are marked secondary. Growth rates are as each association published them, against its own comparable prior period.',
          rows: [
            {
              scope: 'Britain',
              metric: 'Asset finance new business, month',
              value: 'GBP 3,816m',
              period: 'June 2026',
              change: '+15%',
              basis: 'Finance and Leasing Association members, all asset types. Published in GBP, not converted.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'Britain',
              metric: 'Asset finance new business, rolling 12 months',
              value: 'GBP 41,612m',
              period: '12 months to June 2026',
              change: '+6%',
              basis: 'Rolling series. Not comparable with any calendar-year figure in this table.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'Britain',
              metric: 'Plant and machinery finance, month',
              value: 'GBP 801m',
              period: 'June 2026',
              change: '+17%',
              basis: 'Subset of the new business line above. The subsets do not sum to it.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'Britain',
              metric: 'Business equipment finance, month',
              value: 'GBP 143m',
              period: 'June 2026',
              change: '-15%',
              basis: 'Subset. One of two classes down across month, quarter and rolling year; the other is aircraft, ships and rolling stock.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'Britain',
              metric: 'Growth, smaller firms against larger businesses',
              value: '+11% / +24%',
              period: 'June 2026',
              change: null,
              basis: 'Growth rates only. No level split is published, so the two cannot be weighted.',
              sourceUrl: 'https://fla.org.uk/news/asset-finance-new-business-grew-by-15-in-june-2026/',
            },
            {
              scope: 'France',
              metric: 'Consumer and vehicle finance production, month',
              value: 'EUR 4,433m',
              period: 'June 2026',
              change: '+5.1%',
              basis: '26 working days against 24 a year earlier, some eight points of mechanical tailwind. Not an equipment finance series.',
              sourceUrl: 'https://asf-france.com/wp-content/uploads/2026/08/CitConso06m26.pdf',
            },
            {
              scope: 'France',
              metric: 'Same series, half-year cumulative',
              value: 'EUR 23,747m',
              period: 'January to June 2026',
              change: '-0.1%',
              basis: 'The calendar effect washes out over six months. This is what the June headline should be read against.',
              sourceUrl: 'https://asf-france.com/wp-content/uploads/2026/08/CitConso06m26.pdf',
            },
            {
              scope: 'France',
              metric: 'Business equipment finance production',
              value: 'EUR 9,373m',
              period: 'Q1 2026',
              change: '+0.7%',
              basis: 'The newest print there is. The series runs Q1, half year, nine months, full year, so no Q2 figure is coming.',
              sourceUrl: 'https://asf-france.com/statistiques/',
            },
            {
              scope: 'Germany',
              metric: 'ifo business climate, leasing (survey balance)',
              value: '-6.6',
              period: 'August 2026',
              change: 'from -15.9',
              basis: 'Member survey sentiment, not volume. July was revised from -16.9, so say which July a comparison uses.',
              sourceUrl: 'https://bdl.leasingverband.de/newsroom/pressemitteilungen',
            },
            {
              scope: 'Germany',
              metric: 'New leasing business volume',
              value: 'EUR 83.12bn',
              period: 'FY2025',
              change: '+3.2%',
              basis: 'The newest hard German figure. No half-year 2026 level is published, only sentiment.',
              sourceUrl: 'https://bdl.leasingverband.de/leasing/marktzahlen',
            },
            {
              scope: 'Spain',
              metric: 'New leasing investment, equipment (mobiliario)',
              value: 'EUR 3,918.3m',
              period: 'January to June 2026',
              change: '+1.4%',
              basis: 'Secondary: released to a press wire, not to the association\u2019s own site, which still stops at May. Reconciles exactly with its own January to May figure.',
              sourceUrl: 'https://forbes.es/ultima-hora/995517/el-mercado-del-leasing-financiero-negocio-4-100-millones-en-el-primer-semestre-un-15-menos/',
            },
            {
              scope: 'Spain',
              metric: 'New leasing investment, property (inmobiliario)',
              value: 'EUR 186.8m',
              period: 'January to June 2026',
              change: '-38.8%',
              basis: 'Secondary. Carries the whole -1.5% aggregate fall on 4.5% of the volume. Spanish renting is a separate series and is never added to this one.',
              sourceUrl: 'https://forbes.es/ultima-hora/995517/el-mercado-del-leasing-financiero-negocio-4-100-millones-en-el-primer-semestre-un-15-menos/',
            },
            {
              scope: 'Poland',
              metric: 'New leasing and leasing-loan financing',
              value: 'PLN 61.87bn',
              period: 'H1 2026',
              change: '+8.95%',
              basis: 'Published in PLN, not converted. Includes leasing loan, PLN 10.05bn of the total, up by 21.6%.',
              sourceUrl: 'https://www.leasing.org.pl/',
            },
            {
              scope: 'Poland',
              metric: 'Machinery and equipment',
              value: 'PLN 12.96bn',
              period: 'H1 2026',
              change: '+1.73%',
              basis: 'Farm machinery sits inside this line and fell by 17.94%.',
              sourceUrl: 'https://www.leasing.org.pl/',
            },
            {
              scope: 'Poland',
              metric: 'Heavy transport',
              value: 'PLN 11.85bn',
              period: 'H1 2026',
              change: '+25.46%',
              basis: 'Tractor units within this line grew by 31.2%. This is where the Polish headline comes from.',
              sourceUrl: 'https://www.leasing.org.pl/',
            },
            {
              scope: 'Italy',
              metric: 'New leasing written (stipulato)',
              value: 'EUR 18.97bn',
              period: 'H1 2026',
              change: '+4.4%',
              basis: 'The newest public Italian print. The monthly series takes an August break; July was due on the first working day of September.',
              sourceUrl: 'https://www.assilea.it/documentazioneAction.do?idCategoria=15',
            },
            {
              scope: 'Romania',
              metric: 'Gross leasing portfolio exposure',
              value: 'RON 24,360.67m',
              period: '31 March 2026',
              change: null,
              basis: 'Eight reporting members, down from ten a year earlier, with prior-year comparatives restated onto the current panel. Published growth rates are not panel-consistent across releases.',
              sourceUrl: 'https://alccr.ro/studii-trimestriale/',
            },
            {
              scope: 'Europe',
              metric: 'Total new leasing volume granted',
              value: 'EUR 454bn',
              period: 'FY2024',
              change: null,
              basis: 'Leaseurope. The 2025 enquiry was unpublished as at September 1st 2026, so this is the newest pan-European leasing aggregate in existence.',
              sourceUrl: 'https://www.leaseurope.org/data-research/annual-statistics',
            },
            {
              scope: 'Europe',
              metric: 'Vehicle finance new lending, finance house members',
              value: 'EUR 141bn',
              period: 'FY2025',
              change: '27% of new lending',
              basis: 'Eurofinas: a different federation, different members, different reporting year from the Leaseurope line above. Neither additive nor comparable.',
              sourceUrl: 'https://www.eurofinas.org/data-research/annual-statistics',
            },
          ],
        },
      ],
    },

    {
      kicker: 'Rules and ownership',
      heading: 'Rules of the road',
      standfirst: 'A summer of regulatory dates, and a quiet transfer of balance sheets.',
      columns: 2,
      blocks: [
        {
          kind: 'items',
          items: [
            {
              term: 'Reprieve, not amnesty',
              text: 'The European Commission\u2019s artificial-intelligence omnibus came into force on July 27th, pushing the compliance date for high-risk creditworthiness assessment and credit scoring from August 2nd 2026 out to December 2nd 2027. Sixteen months of relief for every lessor with a scoring model in production. The rest of the calendar did not move with it. The act\u2019s transparency duties on customer-facing systems took effect on August 2nd as planned, so any assistant or generated letter in origination and servicing needs disclosure wiring now. And on July 31st the European Banking Authority, EIOPA and ESMA set out jointly what they expect of governance and board accountability for frontier models under the operational-resilience regulation. Supervisors, in short, arrived early for a deadline that has been postponed.',
            },
            {
              term: 'No carve-out for lessors',
              text: 'The EBA\u2019s amended guidelines on the definition of default apply from October 19th. They stretch the invoice-level past-due count for non-recourse factoring from 30 days to 90, and they turn down the leasing carve-out Leaseurope asked for in February. Prudential default for a lessor therefore continues to hang on payment mechanics rather than on the economics of the exposure. That makes the fix an operational one: collections timing, dunning sequences and the booking of a payment holiday now belong to the capital conversation as much as to the service one.',
            },
            {
              term: 'Residuals lose their cheapest home',
              text: 'An ECB guideline in force since March 30th treats residual-value risk as a risk in its own right and bars issuers from carrying it if their paper is to stay eligible as Eurosystem collateral. Electric-vehicle residuals are repricing at the same moment, so the hardest number in the industry to forecast is being shown the door by the cheapest source of funding. Public unsecured markets are unbothered. Leasys, the fifty-fifty joint venture of Stellantis and Credit Agricole Personal Finance and Mobility, sold EUR 750m of senior unsecured notes on July 21st at 3.70%, some 70 basis points over mid-swaps, about two and a half times covered and 25 points inside initial guidance. The legal reading above comes from commentary rather than from the instrument.',
            },
            {
              term: 'Carmakers, unburdened',
              text: 'On July 31st Arval, BNP Paribas\u2019s leasing arm, completed its purchase of Athlon from Mercedes-Benz Group, taking the combined fleet to 2.3m vehicles. Three days earlier Stellantis agreed to sell the car-sharing business of Free2move to Mutares. KBC bought Business Lease\u2019s Czech and Slovak operations for EUR 72m and folded them into CSOB Leasing. Honda handed its pan-European financing to Credit Agricole Personal Finance & Mobility across eight countries. Four transactions in eight months, all moving a mobility balance sheet from a manufacturer to a bank. Whoever inherits one of those books will find the price was the easy part; migration and data lineage are what decide whether the deal works.',
            },
            {
              term: 'What the lessors are actually buying',
              text: 'Twenty-two core-system projects at twenty-one named European lessors and captives have been publicly announced since September 2024, and the shape is not the one the market talks about. Fourteen of the twenty-two are British, and the buyers there are specialist and challenger lenders rather than the large books: Paragon Bank replacing legacy systems across its commercial lending, Cynergy Business Finance selecting and going live in a single announcement, Allica Bank migrating its core asset finance platform, DF Capital launching a book on new software, Novuna Business Finance moving off what was described as niche hardware and an outdated operating system. On the continent the buyers are captives and they buy a country at a time: BMW Financial Services adding Germany to Belgium and the Netherlands on one template, Daimler Truck Financial Services going live in Poland before Slovakia and Czechia, BNP Paribas Leasing Solutions putting three modules into Italy with six further countries named as the plan. The institutions replacing whole platforms are the small ones. The large ones are extending. The count excludes two Polish projects that are electronic-signature layers rather than core systems, one German project that is deposits rather than asset finance, one broker, and two announcements whose customer is not named. We name the institutions and not their technology suppliers.',
            },
            {
              term: 'November\u2019s small print',
              text: 'The second consumer-credit directive applies from November 20th, and leases with a purchase option sit inside it. For a lessor running a consumer book beside a business one, the same product can cross from one rulebook to the other depending on whether an option to buy is attached. Both the date and the scope test here come from secondary summaries rather than the text, so treat them as directional until somebody reads the directive.',
            },
            {
              term: 'The information layer is thinning',
              text: 'Three things are true at once, and none of them is about volumes. Leaseurope\u2019s quarterly index has printed nothing for fifteen months while still describing itself as quarterly. Two of the English-language trade titles covering European leasing stopped publishing in January: their sites are live, their articles still load in full, and their newest editorial item is from January. And the finance arms are silent by construction, because neither the bank-owned leasing subsidiaries nor the manufacturer captives run press archives of their own. Anyone trying to read this market has fewer places to look than a year ago, on three channels at once. Not every quiet source is a stalled one, mind. Spain gave its half year to a press wire rather than its own site, Italy takes August off, and France has no second-quarter dashboard by design. Only the pan-European index is genuinely in trouble, and from the outside all four look identical.',
            },
          ],
        },
      ],
    },

    {
      kicker: 'What it means',
      heading: 'Hostages to fortune',
      standfirst: 'Four rules for reading next month\u2019s releases, one claim that can be checked, and the diary.',
      columns: 2,
      blocks: [
        {
          kind: 'items',
          items: [
            {
              term: 'Count the working days',
              text: 'Some eight of the 5.1 points France reported for June are calendar. A monthly report that does not adjust for working days is being held against an association print that has not adjusted either, and the error runs in both directions across a year.',
            },
            {
              term: 'Units up, value down',
              text: 'French business electric and hybrid vehicles financed through leasing rose by 21.3% in number in 2025, to 83,356 units, while the amount financed fell by 1.6% to EUR 3,255m. The ticket changed, not the demand. That belongs on an asset-risk agenda well before it reaches a sales review.',
            },
            {
              term: 'Watch who is replacing, not who is announcing',
              text: 'Twenty-two public core-system projects in two years, and the institutions replacing whole platforms are specialist lenders with small books. If you run a large book and the plan is one programme across several countries at once, your peers are not doing that: they are buying a module or a country at a time, and one of them has named the six countries it will take in sequence. That is about sequencing risk rather than about ambition.',
            },
            {
              term: 'Ask who is in the sample',
              text: 'A panel that loses two contributors and restates its history onto the survivors produces a series that is tidy inside and useless outside. Before benchmarking against any national aggregate, ask how many institutions report into it, and whether that number has changed.',
            },
          ],
        },
        {
          kind: 'prediction',
          claim:
            'The turn holds. When the Finance and Leasing Association publishes July\u2019s asset-finance figures in the second half of September, larger businesses will again have grown faster than smaller ones, making two months in a row after nine the other way.',
          falsifier:
            'growth for smaller firms in July matches or beats growth for larger businesses, which would make June a one-month artefact.',
          by: 'the end of September 2026',
        },
        {
          kind: 'para',
          text: 'Method. Public sources only, read between August 5th and September 1st 2026: the statistical and news pages of fifteen national associations, the two European federations, and the publishing institutions\u2019 own pages for the regulatory items. Every figure carries its period and its basis. Anything resting on one source says so.',
        },
        {
          kind: 'subhead',
          text: 'The diary',
        },
        {
          kind: 'items',
          items: [
            {
              term: 'Early September',
              text: 'Assilea publishes July stipulato for Italy after its August break, possibly with August alongside it.',
            },
            {
              term: 'Mid-September',
              text: 'Austria\u2019s half-year balance falls due on last year\u2019s cadence, and Germany\u2019s Kreditbankenverband is due its half year in the same window.',
            },
            {
              term: 'Second half of September',
              text: 'Britain\u2019s July asset-finance figures. These settle the claim above.',
            },
            {
              term: 'Late September',
              text: 'France\u2019s half-year pack: the first equipment-finance print since the first quarter, and the test of whether a flat half year holds.',
            },
            {
              term: 'October 19th',
              text: 'The amended definition of default applies. Anything not operational by then becomes a capital question.',
            },
            {
              term: 'Mid-October',
              text: 'Romania\u2019s second-quarter study, on an observed lag of about three and a half months. Read the contributor count first.',
            },
            {
              term: 'November 20th',
              text: 'The second consumer-credit directive applies, taking leases with a purchase option with it.',
            },
          ],
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
              label: 'ASF',
              publication: 'Same association, FY2025 energy transition data',
              date: '2026-07-16',
              url: 'https://asf-france.com/wp-content/uploads/2026/07/CP-PUBLICATION-DONNEES-2025-TRANSITION-ENERGETIQUE-1.pdf',
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
              label: 'Assilea',
              publication: 'Associazione Italiana Leasing, monthly summary, June 2026',
              date: '2026-07-15',
              url: 'https://www.assilea.it/documentazioneAction.do?idCategoria=15',
              confidence: 'confirmed',
            },
            {
              label: 'ALCCR',
              publication: 'Romanian financial companies association, quarterly study to 31 March 2026',
              date: '2026-07-15',
              url: 'https://alccr.ro/studii-trimestriale/',
              confidence: 'confirmed',
            },
            {
              label: 'Eurofinas',
              publication: 'Facts and Figures 2025',
              date: '2026-08-14',
              url: 'https://www.eurofinas.org/data-research/annual-statistics',
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
              label: 'EC',
              publication: 'European Commission, artificial-intelligence framework and the omnibus deferral',
              date: '2026-07-27',
              url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
              confidence: 'confirmed',
            },
            {
              label: 'ESAs',
              publication: 'EBA, EIOPA and ESMA joint statement on frontier-model technology risk',
              date: '2026-07-31',
              url: 'https://www.eba.europa.eu/publications-and-media/press-releases',
              confidence: 'confirmed',
            },
            {
              label: 'EBA',
              publication: 'Amended guidelines on the definition of default, applying 19 October 2026',
              date: '2026-05-07',
              url: 'https://www.eba.europa.eu/activities/single-rulebook/regulatory-activities/credit-risk/guidelines-application-definition-default',
              confidence: 'confirmed',
            },
            {
              label: 'RV note',
              publication: 'Legal analysis of the ECB guideline on residual-value risk and collateral eligibility',
              date: '2026-02-01',
              url: 'https://www.jonesday.com/en/insights/2026/02/ecb-redefines-residual-value-risk-threatening-european-auto-loan-securitization-eligibility',
              confidence: 'secondary',
            },
            {
              label: 'Supplier announcements',
              publication: 'Fourteen dated European core-system announcements published by the institutions\u2019 technology suppliers between September 2024 and September 2026. We name the institutions and not the suppliers; our corpus holds both, and every date and scope quoted here is from the supplier\u2019s own release',
              date: '2026-09-01',
              url: 'https://innoviasystems.io/en/insights/',
              confidence: 'confirmed',
            },
            {
              label: 'Leasys',
              publication: 'Leasys press room, seventh issuance under its Euro Medium Term Note programme',
              date: '2026-07-21',
              url: 'https://www.media.stellantis.com/em-en/leasys/press',
              confidence: 'confirmed',
            },
            {
              label: 'Arval',
              publication: 'Reported completion of the Arval acquisition of Athlon, July 31st 2026',
              date: '2026-07-31',
              url: 'https://finance-connect.com/arval-completes-athlon-acquisition-to-create-european-leasing-powerhouse/',
              confidence: 'secondary',
            },
            {
              label: 'Stellantis',
              publication: 'Agreement to sell the Free2move car-sharing business to Mutares',
              date: '2026-07-28',
              url: 'https://www.stellantis.com/en/news/press-releases/2026/july/stellantis-announces-agreement-to-sell-free2move-s-car-sharing-business-to-mutares',
              confidence: 'confirmed',
            },
          ],
        },
      ],
    },
  ],
};
