/**
 * Fit for Digital. Fit for AI. Diagnostic questionnaire.
 *
 * 7 dimensions, 20 questions, 5 options each. Each option scores 0/25/50/75/100.
 * Dimension score = mean of its questions. Overall = mean of 7 dimensions.
 *
 * The bar is set at operator-grade on purpose: most mid-tier IFNs/captives/fleets
 * will land in 40-65% on first run because that reflects the actual market state,
 * not because the scoring is rigged. Each question is written so the high-score
 * answer corresponds to a capability Innovia can credibly deliver in a partnership.
 *
 * Style rules (enforced):
 *  - No em dashes anywhere. Substitute with comma, colon, parens, sentence split.
 *  - No client, partner, or competitor names.
 *  - First-person singular voice in any prose ("I help...", not "we help...").
 *
 * Languages: EN + RO. The component reads the active locale and picks the right
 * string at render time.
 */

export type AnswerValue = 0 | 25 | 50 | 75 | 100;

export type DimensionId =
  | 'core'
  | 'config'
  | 'data'
  | 'compliance'
  | 'ai'
  | 'customer'
  | 'employee';

export interface Dimension {
  id: DimensionId;
  label: { en: string; ro: string };
  short: { en: string; ro: string };
}

export interface QuestionOption {
  value: AnswerValue;
  label: { en: string; ro: string };
}

export interface Question {
  id: string;
  dimension: DimensionId;
  prompt: { en: string; ro: string };
  options: QuestionOption[];
}

export const DIMENSIONS: Dimension[] = [
  {
    id: 'core',
    label: { en: 'Core platform', ro: 'Platforma de bază' },
    short: { en: 'Core', ro: 'Bază' },
  },
  {
    id: 'config',
    label: { en: 'Configuration and speed', ro: 'Configurație și viteză' },
    short: { en: 'Config', ro: 'Config' },
  },
  {
    id: 'data',
    label: { en: 'Data and decisioning', ro: 'Date și decizionare' },
    short: { en: 'Decisioning', ro: 'Decizionare' },
  },
  {
    id: 'compliance',
    label: { en: 'Compliance and audit', ro: 'Compliance și audit' },
    short: { en: 'Compliance', ro: 'Compliance' },
  },
  {
    id: 'ai',
    label: { en: 'AI readiness', ro: 'Pregătire pentru AI' },
    short: { en: 'AI', ro: 'AI' },
  },
  {
    id: 'customer',
    label: { en: 'Customer experience', ro: 'Experiența clienților' },
    short: { en: 'Customer', ro: 'Clienți' },
  },
  {
    id: 'employee',
    label: { en: 'Employee experience', ro: 'Experiența angajaților' },
    short: { en: 'Employee', ro: 'Angajați' },
  },
];

export const QUESTIONS: Question[] = [
  // Core platform (3)
  {
    id: 'core-1',
    dimension: 'core',
    prompt: {
      en: 'Where does your core lending platform live, in terms of ownership?',
      ro: 'Unde trăiește platforma de lending de bază, din punct de vedere al ownership-ului?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Built and maintained in-house, with full source code ownership.',
          ro: 'Construită și menținută in-house, cu ownership complet asupra codului sursă.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Vendor base with extensive in-house custom code, we own the deployment.',
          ro: 'Bază de la vendor cu cod custom in-house consistent, deținem deployment-ul.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Vendor platform with substantial configuration we maintain.',
          ro: 'Platformă de la vendor cu configurație substanțială pe care o întreținem.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Off-the-shelf vendor platform, limited customisation.',
          ro: 'Platformă off-the-shelf de la vendor, customizare limitată.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Multiple disconnected systems and spreadsheets stitched together.',
          ro: 'Mai multe sisteme deconectate și spreadsheet-uri lipite între ele.',
        },
      },
    ],
  },
  {
    id: 'core-2',
    dimension: 'core',
    prompt: {
      en: 'How auditable is your contract, ledger, and accounting layer when a regulator requests data?',
      ro: 'Cât de auditabil este stratul tău de contract, registru și contabilitate când regulatorul cere date?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Full event-sourced trail, queryable end to end in real time.',
          ro: 'Trail complet event-sourced, interogabil end-to-end în timp real.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Comprehensive audit log, can reconstruct state on demand.',
          ro: 'Audit log comprehensiv, putem reconstrui starea la cerere.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Audit log exists, reconstruction requires effort and time.',
          ro: 'Există audit log, dar reconstrucția cere efort și timp.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Partial audit, gaps need to be reconstructed from backups.',
          ro: 'Audit parțial, golurile trebuie reconstruite din backup-uri.',
        },
      },
      {
        value: 0,
        label: {
          en: 'We rely on the vendor’s claims with no independent verification.',
          ro: 'Ne bazăm pe ce ne spune vendor-ul, fără verificare independentă.',
        },
      },
    ],
  },
  {
    id: 'core-3',
    dimension: 'core',
    prompt: {
      en: 'If asked why a specific contract is in a specific state, what can you produce?',
      ro: 'Dacă ești întrebat de ce un anumit contract este într-o anumită stare, ce poți produce?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Full decision chain from first event to current state, in minutes.',
          ro: 'Lanțul complet de decizii de la primul eveniment la starea curentă, în minute.',
        },
      },
      {
        value: 75,
        label: {
          en: 'A small team can reconstruct it in hours.',
          ro: 'O echipă mică o poate reconstrui în câteva ore.',
        },
      },
      {
        value: 50,
        label: {
          en: 'A multi-day investigation across systems.',
          ro: 'O investigație de mai multe zile peste mai multe sisteme.',
        },
      },
      {
        value: 25,
        label: {
          en: 'A partial answer with caveats, some information is lost.',
          ro: 'Un răspuns parțial cu precauții, o parte din informație e pierdută.',
        },
      },
      {
        value: 0,
        label: {
          en: 'We could not produce a defensible explanation.',
          ro: 'Nu am putea produce o explicație defensibilă.',
        },
      },
    ],
  },

  // Configuration and speed (3)
  {
    id: 'config-1',
    dimension: 'config',
    prompt: {
      en: 'Where does product configuration live (rates, policies, approval matrix)?',
      ro: 'Unde trăiește configurația de produs (rate, politici, matrice de aprobare)?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'A small, versioned, testable artifact co-owned by business and platform team.',
          ro: 'Un artefact mic, versionat, testabil, co-deținut de business și echipa de platformă.',
        },
      },
      {
        value: 75,
        label: {
          en: 'In a config layer inside our codebase, deployed via our release process.',
          ro: 'Într-un strat de config în codebase-ul nostru, deployat prin procesul nostru de release.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Mostly in the vendor admin UI, replicated to staging by ops.',
          ro: 'Majoritar în UI-ul de admin al vendor-ului, replicat în staging de ops.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Spread across Word, Excel, and vendor screens, hand-replicated.',
          ro: 'Răspândit prin Word, Excel și ecrane de vendor, replicat manual.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Lives mostly in people’s heads.',
          ro: 'Trăiește în mare parte în mintea oamenilor.',
        },
      },
    ],
  },
  {
    id: 'config-2',
    dimension: 'config',
    prompt: {
      en: 'From a commercial decision to add a new product to live in production, how long?',
      ro: 'De la decizia comercială de a adăuga un produs nou până la live în producție, cât durează?',
    },
    options: [
      {
        value: 100,
        label: {
          en: '30 to 60 days end to end, including reporting and audit.',
          ro: '30-60 zile end-to-end, inclusiv raportare și audit.',
        },
      },
      { value: 75, label: { en: '2 to 4 months.', ro: '2-4 luni.' } },
      { value: 50, label: { en: '4 to 9 months.', ro: '4-9 luni.' } },
      { value: 25, label: { en: '9 to 18 months.', ro: '9-18 luni.' } },
      { value: 0, label: { en: '18 months or more, typically a full project.', ro: '18 luni sau mai mult, de regulă proiect.' } },
    ],
  },
  {
    id: 'config-3',
    dimension: 'config',
    prompt: {
      en: 'How often do production releases ship?',
      ro: 'Cât de des intră release-uri în producție?',
    },
    options: [
      { value: 100, label: { en: 'Continuous deployment or weekly.', ro: 'Continuous deployment sau săptămânal.' } },
      { value: 75, label: { en: 'Monthly.', ro: 'Lunar.' } },
      { value: 50, label: { en: 'Quarterly.', ro: 'Trimestrial.' } },
      { value: 25, label: { en: 'A few times a year.', ro: 'De câteva ori pe an.' } },
      { value: 0, label: { en: 'Once a year or on demand only.', ro: 'O dată pe an sau doar la cerere.' } },
    ],
  },

  // Data and decisioning (3)
  {
    id: 'data-1',
    dimension: 'data',
    prompt: {
      en: 'What percentage of credit decisions happen without human touch on the happy path?',
      ro: 'Ce procent din decizii de credit se iau fără intervenție umană pe happy path?',
    },
    options: [
      { value: 100, label: { en: 'Over 80 percent auto-decision.', ro: 'Peste 80% auto-decizie.' } },
      { value: 75, label: { en: '50 to 80 percent auto-decision.', ro: '50-80% auto-decizie.' } },
      { value: 50, label: { en: '25 to 50 percent auto-decision.', ro: '25-50% auto-decizie.' } },
      { value: 25, label: { en: 'Under 25 percent, mostly manual.', ro: 'Sub 25%, majoritar manual.' } },
      { value: 0, label: { en: 'All decisions are touched by an analyst.', ro: 'Toate deciziile sunt atinse de un analist.' } },
    ],
  },
  {
    id: 'data-2',
    dimension: 'data',
    prompt: {
      en: 'Time-to-decision on a clean application, from submission to communicated decision?',
      ro: 'Timp până la decizie pe o aplicație curată, de la submit la comunicarea deciziei?',
    },
    options: [
      { value: 100, label: { en: 'Under 15 minutes.', ro: 'Sub 15 minute.' } },
      { value: 75, label: { en: 'Under an hour.', ro: 'Sub o oră.' } },
      { value: 50, label: { en: 'Same day to 24 hours.', ro: 'Aceeași zi sau până în 24 de ore.' } },
      { value: 25, label: { en: 'One to three business days.', ro: '1-3 zile lucrătoare.' } },
      { value: 0, label: { en: 'A week or more.', ro: 'O săptămână sau mai mult.' } },
    ],
  },
  {
    id: 'data-3',
    dimension: 'data',
    prompt: {
      en: 'Can someone in finance or risk pull lifetime profitability of any contract in minutes?',
      ro: 'Poate cineva din finance sau risk să tragă profitabilitatea pe viață a unui contract în minute?',
    },
    options: [
      { value: 100, label: { en: 'Yes, via self-service dashboard.', ro: 'Da, prin dashboard de self-service.' } },
      { value: 75, label: { en: 'A small team via a few SQL queries.', ro: 'O echipă mică prin câteva interogări SQL.' } },
      { value: 50, label: { en: 'Overnight report.', ro: 'Raport peste noapte.' } },
      { value: 25, label: { en: 'Multi-day analyst exercise.', ro: 'Exercițiu de analist de mai multe zile.' } },
      { value: 0, label: { en: 'Structurally not possible today.', ro: 'Structural imposibil astăzi.' } },
    ],
  },

  // Compliance and audit (2)
  {
    id: 'compliance-1',
    dimension: 'compliance',
    prompt: {
      en: 'How are risk and credit policies represented in the system?',
      ro: 'Cum sunt reprezentate politicile de risc și credit în sistem?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'As versioned, testable code-like artifacts that drive decisions directly.',
          ro: 'Ca artefacte versionate, testabile, gen cod, care conduc deciziile direct.',
        },
      },
      {
        value: 75,
        label: {
          en: 'As structured rules in the platform with versioning.',
          ro: 'Ca reguli structurate în platformă cu versionare.',
        },
      },
      {
        value: 50,
        label: {
          en: 'As parameters in vendor admin, exported to Word for the regulator.',
          ro: 'Ca parametri în adminul vendor-ului, exportați în Word pentru regulator.',
        },
      },
      {
        value: 25,
        label: {
          en: 'As text in policy documents, manually translated into platform settings.',
          ro: 'Ca text în documente de politică, traduse manual în setări de platformă.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Inconsistently between documentation and what the system actually does.',
          ro: 'Inconsistent între documentație și ce face efectiv sistemul.',
        },
      },
    ],
  },
  {
    id: 'compliance-2',
    dimension: 'compliance',
    prompt: {
      en: 'When the regulator requests data for a thematic review, how long to produce it?',
      ro: 'Când regulatorul cere date pentru un thematic review, cât durează să le produci?',
    },
    options: [
      { value: 100, label: { en: 'Hours, via standing queries and exports.', ro: 'Ore, prin interogări și export-uri deja pregătite.' } },
      { value: 75, label: { en: 'Days, with a defined extraction process.', ro: 'Zile, cu proces de extracție definit.' } },
      { value: 50, label: { en: 'A week, requires coordination across teams.', ro: 'O săptămână, cere coordonare cross-echipe.' } },
      { value: 25, label: { en: 'Two to four weeks, ad-hoc analytical work.', ro: '2-4 săptămâni, muncă analitică ad-hoc.' } },
      { value: 0, label: { en: 'A multi-month exercise, often with consultants.', ro: 'Un exercițiu de mai multe luni, adesea cu consultanți.' } },
    ],
  },

  // AI readiness (3)
  {
    id: 'ai-1',
    dimension: 'ai',
    prompt: {
      en: 'How structured is your historical decision and outcome data for ML purposes?',
      ro: 'Cât de structurate sunt datele tale istorice de decizii și outcome pentru ML?',
    },
    options: [
      { value: 100, label: { en: 'Decision features and outcomes are first-class, queryable, joined.', ro: 'Feature-urile de decizie și outcome-urile sunt first-class, interogabile, join-uite.' } },
      { value: 75, label: { en: 'Reconstructable with effort, mostly in one warehouse.', ro: 'Reconstructibile cu efort, majoritar într-un warehouse.' } },
      { value: 50, label: { en: 'Scattered across systems, partially structured.', ro: 'Răspândite prin mai multe sisteme, parțial structurate.' } },
      { value: 25, label: { en: 'Lots of unstructured documents, hard to extract.', ro: 'Multe documente nestructurate, greu de extras.' } },
      { value: 0, label: { en: 'We do not have a usable historical dataset.', ro: 'Nu avem un dataset istoric utilizabil.' } },
    ],
  },
  {
    id: 'ai-2',
    dimension: 'ai',
    prompt: {
      en: 'Do you have any AI or LLM features in production today, with governance?',
      ro: 'Ai vreo funcție de AI sau LLM în producție astăzi, cu governance?',
    },
    options: [
      { value: 100, label: { en: 'Yes, with explainability, guardrails, and audit logging.', ro: 'Da, cu explicabilitate, guardrails și audit logging.' } },
      { value: 75, label: { en: 'Yes, in production but governance is still maturing.', ro: 'Da, în producție, dar governance-ul încă maturizează.' } },
      { value: 50, label: { en: 'In pilot or limited deployment.', ro: 'În pilot sau deployment limitat.' } },
      { value: 25, label: { en: 'Exploring vendor offerings, no production use yet.', ro: 'Explorăm oferte de vendor, fără utilizare în producție încă.' } },
      { value: 0, label: { en: 'Not yet considered.', ro: 'Nu am ajuns încă acolo.' } },
    ],
  },
  {
    id: 'ai-3',
    dimension: 'ai',
    prompt: {
      en: 'Who owns AI risk in your organisation?',
      ro: 'Cine deține riscul de AI în organizația ta?',
    },
    options: [
      { value: 100, label: { en: 'A defined function with mandate, sitting between risk and tech.', ro: 'O funcție definită cu mandat, între risk și tech.' } },
      { value: 75, label: { en: 'Risk function has extended scope to cover AI.', ro: 'Funcția de risk și-a extins scope-ul pentru a acoperi AI.' } },
      { value: 50, label: { en: 'IT has informal ownership.', ro: 'IT are ownership informal.' } },
      { value: 25, label: { en: 'Discussed at committee level, no clear owner.', ro: 'Discutat la nivel de comitet, fără owner clar.' } },
      { value: 0, label: { en: 'Not yet on the agenda.', ro: 'Nu e încă pe agendă.' } },
    ],
  },

  // Customer experience (3)
  {
    id: 'customer-1',
    dimension: 'customer',
    prompt: {
      en: 'What can a customer do end to end via self-service?',
      ro: 'Ce poate face un client end-to-end prin self-service?',
    },
    options: [
      { value: 100, label: { en: 'Origination, contract view, service requests, payments, document download, the full lifecycle.', ro: 'Originare, vizualizare contract, cereri de servicii, plăți, descărcare documente, întregul ciclu de viață.' } },
      { value: 75, label: { en: 'Most operational interactions without contacting us.', ro: 'Majoritatea interacțiunilor operaționale fără să ne contacteze.' } },
      { value: 50, label: { en: 'Basic account view and statement download.', ro: 'Vizualizare cont de bază și descărcare extras.' } },
      { value: 25, label: { en: 'Limited portal, most interactions require us.', ro: 'Portal limitat, majoritatea interacțiunilor ne implică.' } },
      { value: 0, label: { en: 'No customer self-service, everything goes through ops or sales.', ro: 'Fără self-service pentru client, totul trece prin ops sau sales.' } },
    ],
  },
  {
    id: 'customer-2',
    dimension: 'customer',
    prompt: {
      en: 'From application submission to active contract on a typical clean deal, how long?',
      ro: 'De la submit-ul aplicației până la contract activ pe un deal curat, cât durează?',
    },
    options: [
      { value: 100, label: { en: 'Same day, fully online.', ro: 'Aceeași zi, complet online.' } },
      { value: 75, label: { en: 'Two to three days.', ro: '2-3 zile.' } },
      { value: 50, label: { en: 'About a week.', ro: 'Aproximativ o săptămână.' } },
      { value: 25, label: { en: 'Two to three weeks.', ro: '2-3 săptămâni.' } },
      { value: 0, label: { en: 'A month or more.', ro: 'O lună sau mai mult.' } },
    ],
  },
  {
    id: 'customer-3',
    dimension: 'customer',
    prompt: {
      en: 'A customer starts a process on one channel and continues on another. What happens?',
      ro: 'Un client începe un proces pe un canal și continuă pe altul. Ce se întâmplă?',
    },
    options: [
      { value: 100, label: { en: 'Seamless continuation, state is preserved.', ro: 'Continuare fără cusur, starea e prezervată.' } },
      { value: 75, label: { en: 'Mostly works, some friction on handover.', ro: 'Funcționează în mare, ceva fricțiune la handover.' } },
      { value: 50, label: { en: 'Possible but the customer often needs to restart.', ro: 'Posibil, dar clientul deseori e nevoit să o ia de la capăt.' } },
      { value: 25, label: { en: 'Only fully supported on one channel.', ro: 'Suportat complet doar pe un singur canal.' } },
      { value: 0, label: { en: 'Multi-channel is theoretical.', ro: 'Multi-channel e teoretic.' } },
    ],
  },

  // Employee experience (3)
  {
    id: 'employee-1',
    dimension: 'employee',
    prompt: {
      en: 'How many distinct systems does an ops person touch to process a typical end-to-end deal?',
      ro: 'Câte sisteme distincte atinge o persoană din ops pentru a procesa un deal end-to-end tipic?',
    },
    options: [
      { value: 100, label: { en: 'One integrated environment.', ro: 'Un singur mediu integrat.' } },
      { value: 75, label: { en: 'Two or three connected systems.', ro: '2-3 sisteme conectate.' } },
      { value: 50, label: { en: 'Three to five with some integration.', ro: '3-5 cu integrare parțială.' } },
      { value: 25, label: { en: 'Five or more, mostly disconnected.', ro: '5 sau mai multe, majoritar deconectate.' } },
      { value: 0, label: { en: 'Many systems plus spreadsheets and email threads.', ro: 'Multe sisteme plus spreadsheet-uri și thread-uri de email.' } },
    ],
  },
  {
    id: 'employee-2',
    dimension: 'employee',
    prompt: {
      en: 'What share of an ops day is spent on manual data entry, copy-paste, or chasing approvals?',
      ro: 'Ce procent dintr-o zi de ops e cheltuit pe data entry manual, copy-paste sau alergat după aprobări?',
    },
    options: [
      { value: 100, label: { en: 'Under 10 percent, mostly exception handling.', ro: 'Sub 10%, majoritar exception handling.' } },
      { value: 75, label: { en: '10 to 25 percent.', ro: '10-25%.' } },
      { value: 50, label: { en: '25 to 50 percent.', ro: '25-50%.' } },
      { value: 25, label: { en: '50 to 75 percent.', ro: '50-75%.' } },
      { value: 0, label: { en: 'The job is the manual rework.', ro: 'Jobul ESTE rework-ul manual.' } },
    ],
  },
  {
    id: 'employee-3',
    dimension: 'employee',
    prompt: {
      en: 'What does an underwriter get from the system when deciding on a non-trivial deal?',
      ro: 'Ce primește un underwriter de la sistem când decide pe un deal non-trivial?',
    },
    options: [
      { value: 100, label: { en: 'Scoring, peer benchmarks, AI-assisted explanation, automated documentation.', ro: 'Scoring, benchmark-uri peer, explicație asistată de AI, documentație automată.' } },
      { value: 75, label: { en: 'Scoring plus peer benchmarks.', ro: 'Scoring plus benchmark-uri peer.' } },
      { value: 50, label: { en: 'Scoring only, the rest is judgement.', ro: 'Doar scoring, restul e judecată.' } },
      { value: 25, label: { en: 'A standardised template to fill in.', ro: 'Un template standardizat de completat.' } },
      { value: 0, label: { en: 'The underwriter starts from scratch each time.', ro: 'Underwriter-ul pornește de la zero de fiecare dată.' } },
    ],
  },
];
