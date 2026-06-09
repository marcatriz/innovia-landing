/**
 * Fit for Digital. Fit for AI. Diagnostic questionnaire.
 *
 * 7 dimensions, 20 questions, 5 options each. Each option scores 0/25/50/75/100.
 * Dimension score = mean of its questions. Overall = mean of 7 dimensions.
 *
 * The bar is set high on purpose: most organizations running complex
 * operational and customer workflows will land in 40-65% on first run because
 * that reflects the actual market state, not because the scoring is rigged.
 * Each question is written so the high-score answer corresponds to a
 * capability Innovia can credibly help deliver in a partnership.
 *
 * Style rules (enforced):
 *  - No em dashes anywhere. Substitute with comma, colon, parens, sentence split.
 *  - No client, partner, or competitor names.
 *  - Website voice: first person plural ("we"), but the diagnostic itself is
 *    addressed to the visitor in second person ("your", "you"), so first-person
 *    forms rarely appear here.
 *
 * Locales: en (canonical), ro, de, fr, it. Adding a locale means extending
 * `LocalizedString` and back-filling every entry. See the
 * `landing-five-locales` memory note for the quality bar.
 */

import type { AppLocale } from '@/i18n/routing';

export type AnswerValue = 0 | 25 | 50 | 75 | 100;

export type LocalizedString = Record<AppLocale, string>;

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
  label: LocalizedString;
  short: LocalizedString;
}

export interface QuestionOption {
  value: AnswerValue;
  label: LocalizedString;
}

export interface Question {
  id: string;
  dimension: DimensionId;
  prompt: LocalizedString;
  options: QuestionOption[];
}

export const DIMENSIONS: Dimension[] = [
  {
    id: 'core',
    label: {
      en: 'Core platform',
      ro: 'Platforma de bază',
      de: 'Kernplattform',
      fr: 'Plateforme cœur',
      it: 'Piattaforma core',
    },
    short: { en: 'Core', ro: 'Bază', de: 'Kern', fr: 'Cœur', it: 'Core' },
  },
  {
    id: 'config',
    label: {
      en: 'Configuration and speed',
      ro: 'Configurație și viteză',
      de: 'Konfiguration und Tempo',
      fr: 'Configuration et vitesse',
      it: 'Configurazione e velocità',
    },
    short: { en: 'Config', ro: 'Config', de: 'Config', fr: 'Config', it: 'Config' },
  },
  {
    id: 'data',
    label: {
      en: 'Data and decisioning',
      ro: 'Date și decizionare',
      de: 'Daten und Decisioning',
      fr: 'Données et decisioning',
      it: 'Dati e decisioning',
    },
    short: {
      en: 'Decisioning',
      ro: 'Decizionare',
      de: 'Decisioning',
      fr: 'Decisioning',
      it: 'Decisioning',
    },
  },
  {
    id: 'compliance',
    label: {
      en: 'Compliance and audit',
      ro: 'Compliance și audit',
      de: 'Compliance und Audit',
      fr: 'Conformité et audit',
      it: 'Conformità e audit',
    },
    short: {
      en: 'Compliance',
      ro: 'Compliance',
      de: 'Compliance',
      fr: 'Conformité',
      it: 'Conformità',
    },
  },
  {
    id: 'ai',
    label: {
      en: 'AI readiness',
      ro: 'Pregătire pentru AI',
      de: 'KI-Reife',
      fr: 'Maturité IA',
      it: 'Maturità AI',
    },
    short: { en: 'AI', ro: 'AI', de: 'KI', fr: 'IA', it: 'AI' },
  },
  {
    id: 'customer',
    label: {
      en: 'Customer experience',
      ro: 'Experiența clienților',
      de: 'Kundenerlebnis',
      fr: 'Expérience client',
      it: 'Esperienza cliente',
    },
    short: {
      en: 'Customer',
      ro: 'Clienți',
      de: 'Kunden',
      fr: 'Client',
      it: 'Cliente',
    },
  },
  {
    id: 'employee',
    label: {
      en: 'Employee experience',
      ro: 'Experiența angajaților',
      de: 'Mitarbeitererlebnis',
      fr: 'Expérience collaborateur',
      it: 'Esperienza dipendente',
    },
    short: {
      en: 'Employee',
      ro: 'Angajați',
      de: 'Team',
      fr: 'Équipe',
      it: 'Team',
    },
  },
];

export const QUESTIONS: Question[] = [
  // Core platform (3)
  {
    id: 'core-1',
    dimension: 'core',
    prompt: {
      en: 'Where does your core operational platform live, in terms of ownership?',
      ro: 'Unde trăiește platforma operațională de bază, din punct de vedere al ownership-ului?',
      de: 'Wo lebt Ihre operative Kernplattform aus Ownership-Sicht?',
      fr: 'Où vit votre plateforme opérationnelle cœur, en termes de propriété ?',
      it: 'Dove vive la vostra piattaforma operativa core, in termini di ownership?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Built and maintained in-house, with full source code ownership.',
          ro: 'Construită și menținută in-house, cu ownership complet asupra codului sursă.',
          de: 'In-house gebaut und gewartet, mit voller Eigentümerschaft am Quellcode.',
          fr: 'Construite et maintenue en interne, avec pleine propriété du code source.',
          it: 'Costruita e mantenuta in-house, con piena proprietà del codice sorgente.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Vendor base with extensive in-house custom code, we own the deployment.',
          ro: 'Bază de la vendor cu cod custom in-house consistent, deținem deployment-ul.',
          de: 'Vendor-Basis mit umfangreichem In-house-Custom-Code, das Deployment besitzen wir.',
          fr: 'Base vendeur avec code custom interne substantiel, nous possédons le déploiement.',
          it: 'Base vendor con codice custom in-house esteso, possediamo il deployment.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Vendor platform with substantial configuration we maintain.',
          ro: 'Platformă de la vendor cu configurație substanțială pe care o întreținem.',
          de: 'Vendor-Plattform mit substantieller Konfiguration, die wir pflegen.',
          fr: 'Plateforme vendeur avec configuration substantielle que nous maintenons.',
          it: 'Piattaforma vendor con configurazione sostanziale che manteniamo.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Off-the-shelf vendor platform, limited customisation.',
          ro: 'Platformă off-the-shelf de la vendor, customizare limitată.',
          de: 'Standard-Vendor-Plattform, begrenzte Anpassung.',
          fr: 'Plateforme vendeur standard, personnalisation limitée.',
          it: 'Piattaforma vendor standard, personalizzazione limitata.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Multiple disconnected systems and spreadsheets stitched together.',
          ro: 'Mai multe sisteme deconectate și spreadsheet-uri lipite între ele.',
          de: 'Mehrere unverbundene Systeme und Spreadsheets, zusammengeflickt.',
          fr: 'Plusieurs systèmes déconnectés et tableurs assemblés à la main.',
          it: 'Diversi sistemi scollegati e fogli di calcolo cuciti insieme.',
        },
      },
    ],
  },
  {
    id: 'core-2',
    dimension: 'core',
    prompt: {
      en: 'How auditable is your records and operational data layer when an auditor or regulator requests data?',
      ro: 'Cât de auditabil este stratul tău de înregistrări și date operaționale când un auditor sau regulator cere date?',
      de: 'Wie auditierbar ist Ihre Datensatz- und Betriebsdaten-Schicht, wenn ein Auditor oder Regulator Daten anfordert?',
      fr: 'À quel point votre couche enregistrements et données opérationnelles est-elle auditable quand un auditeur ou régulateur demande des données ?',
      it: 'Quanto è auditabile il vostro livello record e dati operativi quando un auditor o regolatore richiede dati?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Full event-sourced trail, queryable end to end in real time.',
          ro: 'Trail complet event-sourced, interogabil end-to-end în timp real.',
          de: 'Vollständiger Event-Sourced-Trail, end-to-end in Echtzeit abfragbar.',
          fr: 'Trail event-sourced complet, interrogeable end to end en temps réel.',
          it: 'Trail event-sourced completo, interrogabile end-to-end in tempo reale.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Comprehensive audit log, can reconstruct state on demand.',
          ro: 'Audit log comprehensiv, putem reconstrui starea la cerere.',
          de: 'Umfassendes Audit-Log, Zustand auf Anfrage rekonstruierbar.',
          fr: 'Audit log complet, état reconstructible à la demande.',
          it: 'Audit log completo, stato ricostruibile su richiesta.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Audit log exists, reconstruction requires effort and time.',
          ro: 'Există audit log, dar reconstrucția cere efort și timp.',
          de: 'Audit-Log existiert, Rekonstruktion erfordert Aufwand und Zeit.',
          fr: 'Audit log existe, la reconstruction demande du temps et de l\'effort.',
          it: 'L\'audit log esiste, la ricostruzione richiede tempo e sforzo.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Partial audit, gaps need to be reconstructed from backups.',
          ro: 'Audit parțial, golurile trebuie reconstruite din backup-uri.',
          de: 'Teilweiser Audit, Lücken müssen aus Backups rekonstruiert werden.',
          fr: 'Audit partiel, les lacunes doivent être reconstruites à partir des sauvegardes.',
          it: 'Audit parziale, le lacune devono essere ricostruite dai backup.',
        },
      },
      {
        value: 0,
        label: {
          en: 'We rely on the vendor’s claims with no independent verification.',
          ro: 'Ne bazăm pe ce ne spune vendor-ul, fără verificare independentă.',
          de: 'Wir verlassen uns auf die Aussagen des Vendors, ohne unabhängige Verifizierung.',
          fr: 'Nous nous appuyons sur les déclarations du vendeur, sans vérification indépendante.',
          it: 'Ci affidiamo a quanto dichiarato dal vendor, senza verifica indipendente.',
        },
      },
    ],
  },
  {
    id: 'core-3',
    dimension: 'core',
    prompt: {
      en: 'If asked why a specific case or record is in a specific state, what can you produce?',
      ro: 'Dacă ești întrebat de ce un anumit caz sau înregistrare este într-o anumită stare, ce poți produce?',
      de: 'Wenn gefragt wird, warum ein bestimmter Vorgang in einem bestimmten Zustand ist, was können Sie liefern?',
      fr: 'Si on demande pourquoi un dossier précis est dans un état précis, que pouvez-vous produire ?',
      it: 'Se vi chiedono perché uno specifico caso o record è in uno specifico stato, cosa potete produrre?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Full decision chain from first event to current state, in minutes.',
          ro: 'Lanțul complet de decizii de la primul eveniment la starea curentă, în minute.',
          de: 'Vollständige Entscheidungskette vom ersten Ereignis bis zum aktuellen Zustand, in Minuten.',
          fr: 'Chaîne de décision complète du premier événement à l\'état actuel, en minutes.',
          it: 'Catena di decisioni completa dal primo evento allo stato corrente, in minuti.',
        },
      },
      {
        value: 75,
        label: {
          en: 'A small team can reconstruct it in hours.',
          ro: 'O echipă mică o poate reconstrui în câteva ore.',
          de: 'Ein kleines Team kann sie in Stunden rekonstruieren.',
          fr: 'Une petite équipe peut la reconstruire en quelques heures.',
          it: 'Un piccolo team può ricostruirla in poche ore.',
        },
      },
      {
        value: 50,
        label: {
          en: 'A multi-day investigation across systems.',
          ro: 'O investigație de mai multe zile peste mai multe sisteme.',
          de: 'Eine mehrtägige Untersuchung über mehrere Systeme.',
          fr: 'Une enquête de plusieurs jours sur plusieurs systèmes.',
          it: 'Un\'indagine di più giorni su più sistemi.',
        },
      },
      {
        value: 25,
        label: {
          en: 'A partial answer with caveats, some information is lost.',
          ro: 'Un răspuns parțial cu precauții, o parte din informație e pierdută.',
          de: 'Eine Teilantwort mit Einschränkungen, ein Teil der Information ist verloren.',
          fr: 'Une réponse partielle avec des réserves, une partie de l\'information est perdue.',
          it: 'Una risposta parziale con riserve, una parte dell\'informazione è persa.',
        },
      },
      {
        value: 0,
        label: {
          en: 'We could not produce a defensible explanation.',
          ro: 'Nu am putea produce o explicație defensibilă.',
          de: 'Wir könnten keine verteidigbare Erklärung liefern.',
          fr: 'Nous ne pourrions pas produire d\'explication défendable.',
          it: 'Non potremmo produrre una spiegazione difendibile.',
        },
      },
    ],
  },

  // Configuration and speed (3)
  {
    id: 'config-1',
    dimension: 'config',
    prompt: {
      en: 'Where does product and process configuration live (pricing, policies, approval matrix)?',
      ro: 'Unde trăiește configurația de produs și proces (prețuri, politici, matrice de aprobare)?',
      de: 'Wo lebt die Produkt- und Prozesskonfiguration (Preise, Richtlinien, Genehmigungsmatrix)?',
      fr: 'Où vit la configuration produit et processus (tarification, politiques, matrice d\'approbation) ?',
      it: 'Dove vive la configurazione di prodotto e processo (prezzi, politiche, matrice di approvazione)?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'A small, versioned, testable building block co-owned by business and platform team.',
          ro: 'O componentă mică, versionată, testabilă, co-deținută de business și echipa de platformă.',
          de: 'Ein kleiner, versionierter, testbarer Baustein, co-owned von Business und Plattform-Team.',
          fr: 'Une brique petite, versionnée, testable, co-détenue par le business et l\'équipe plateforme.',
          it: 'Una componente piccola, versionata, testabile, co-posseduta da business e team di piattaforma.',
        },
      },
      {
        value: 75,
        label: {
          en: 'In a config layer inside our codebase, deployed via our release process.',
          ro: 'Într-un strat de config în codebase-ul nostru, deployat prin procesul nostru de release.',
          de: 'In einer Config-Schicht in unserer Codebase, ausgerollt über unseren Release-Prozess.',
          fr: 'Dans une couche config dans notre codebase, déployée via notre processus de release.',
          it: 'In uno strato di config nella nostra codebase, deployato attraverso il nostro processo di release.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Mostly in the vendor admin UI, replicated to staging by ops.',
          ro: 'Majoritar în UI-ul de admin al vendor-ului, replicat în staging de ops.',
          de: 'Hauptsächlich in der Vendor-Admin-UI, von Ops nach Staging repliziert.',
          fr: 'Principalement dans l\'UI admin du vendeur, répliquée en staging par les ops.',
          it: 'Principalmente nella UI admin del vendor, replicata in staging dagli ops.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Spread across Word, Excel, and vendor screens, hand-replicated.',
          ro: 'Răspândit prin Word, Excel și ecrane de vendor, replicat manual.',
          de: 'Verteilt über Word, Excel und Vendor-Screens, manuell repliziert.',
          fr: 'Éparpillée entre Word, Excel et écrans du vendeur, répliquée à la main.',
          it: 'Sparsa tra Word, Excel e schermate del vendor, replicata a mano.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Lives mostly in people’s heads.',
          ro: 'Trăiește în mare parte în mintea oamenilor.',
          de: 'Lebt überwiegend in den Köpfen der Mitarbeitenden.',
          fr: 'Vit principalement dans la tête des gens.',
          it: 'Vive principalmente nella testa delle persone.',
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
      de: 'Von der kommerziellen Entscheidung, ein neues Produkt aufzunehmen, bis zu Live in Produktion: wie lange?',
      fr: 'D\'une décision commerciale d\'ajouter un nouveau produit jusqu\'au passage en production, combien de temps ?',
      it: 'Da una decisione commerciale di aggiungere un nuovo prodotto fino al live in produzione, quanto tempo?',
    },
    options: [
      {
        value: 100,
        label: {
          en: '30 to 60 days end to end, including reporting and audit.',
          ro: '30-60 zile end-to-end, inclusiv raportare și audit.',
          de: '30 bis 60 Tage end-to-end, inklusive Reporting und Audit.',
          fr: '30 à 60 jours end to end, reporting et audit inclus.',
          it: 'Da 30 a 60 giorni end-to-end, reporting e audit inclusi.',
        },
      },
      {
        value: 75,
        label: { en: '2 to 4 months.', ro: '2-4 luni.', de: '2 bis 4 Monate.', fr: '2 à 4 mois.', it: 'Da 2 a 4 mesi.' },
      },
      {
        value: 50,
        label: { en: '4 to 9 months.', ro: '4-9 luni.', de: '4 bis 9 Monate.', fr: '4 à 9 mois.', it: 'Da 4 a 9 mesi.' },
      },
      {
        value: 25,
        label: { en: '9 to 18 months.', ro: '9-18 luni.', de: '9 bis 18 Monate.', fr: '9 à 18 mois.', it: 'Da 9 a 18 mesi.' },
      },
      {
        value: 0,
        label: {
          en: '18 months or more, typically a full project.',
          ro: '18 luni sau mai mult, de regulă proiect.',
          de: '18 Monate oder mehr, typischerweise ein eigenes Projekt.',
          fr: '18 mois ou plus, typiquement un projet à part entière.',
          it: '18 mesi o più, tipicamente un progetto a sé.',
        },
      },
    ],
  },
  {
    id: 'config-3',
    dimension: 'config',
    prompt: {
      en: 'How often do production releases ship?',
      ro: 'Cât de des intră release-uri în producție?',
      de: 'Wie oft gehen Produktions-Releases live?',
      fr: 'À quelle fréquence les releases de production sont-elles livrées ?',
      it: 'Con che frequenza vengono rilasciate release in produzione?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Continuous deployment or weekly.',
          ro: 'Continuous deployment sau săptămânal.',
          de: 'Continuous Deployment oder wöchentlich.',
          fr: 'Continuous deployment ou hebdomadaire.',
          it: 'Continuous deployment o settimanale.',
        },
      },
      { value: 75, label: { en: 'Monthly.', ro: 'Lunar.', de: 'Monatlich.', fr: 'Mensuelle.', it: 'Mensile.' } },
      {
        value: 50,
        label: { en: 'Quarterly.', ro: 'Trimestrial.', de: 'Vierteljährlich.', fr: 'Trimestrielle.', it: 'Trimestrale.' },
      },
      {
        value: 25,
        label: {
          en: 'A few times a year.',
          ro: 'De câteva ori pe an.',
          de: 'Wenige Male pro Jahr.',
          fr: 'Quelques fois par an.',
          it: 'Poche volte all\'anno.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Once a year or on demand only.',
          ro: 'O dată pe an sau doar la cerere.',
          de: 'Einmal pro Jahr oder nur auf Anfrage.',
          fr: 'Une fois par an ou seulement à la demande.',
          it: 'Una volta all\'anno o solo su richiesta.',
        },
      },
    ],
  },

  // Data and decisioning (3)
  {
    id: 'data-1',
    dimension: 'data',
    prompt: {
      en: 'What percentage of key operational decisions happen without human touch on the happy path?',
      ro: 'Ce procent din deciziile operaționale cheie se iau fără intervenție umană pe happy path?',
      de: 'Welcher Prozentsatz der operativen Kernentscheidungen läuft auf dem Happy Path ohne menschliches Eingreifen?',
      fr: 'Quel pourcentage des décisions opérationnelles clés se font sans intervention humaine sur le happy path ?',
      it: 'Quale percentuale di decisioni operative chiave avviene senza intervento umano sull\'happy path?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Over 80 percent auto-decision.',
          ro: 'Peste 80% auto-decizie.',
          de: 'Über 80 Prozent Auto-Decisioning.',
          fr: 'Plus de 80 pour cent en auto-décision.',
          it: 'Oltre l\'80 percento in auto-decisione.',
        },
      },
      {
        value: 75,
        label: {
          en: '50 to 80 percent auto-decision.',
          ro: '50-80% auto-decizie.',
          de: '50 bis 80 Prozent Auto-Decisioning.',
          fr: '50 à 80 pour cent en auto-décision.',
          it: 'Dal 50 all\'80 percento in auto-decisione.',
        },
      },
      {
        value: 50,
        label: {
          en: '25 to 50 percent auto-decision.',
          ro: '25-50% auto-decizie.',
          de: '25 bis 50 Prozent Auto-Decisioning.',
          fr: '25 à 50 pour cent en auto-décision.',
          it: 'Dal 25 al 50 percento in auto-decisione.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Under 25 percent, mostly manual.',
          ro: 'Sub 25%, majoritar manual.',
          de: 'Unter 25 Prozent, hauptsächlich manuell.',
          fr: 'Moins de 25 pour cent, principalement manuel.',
          it: 'Sotto il 25 percento, principalmente manuale.',
        },
      },
      {
        value: 0,
        label: {
          en: 'All decisions are touched by an analyst.',
          ro: 'Toate deciziile sunt atinse de un analist.',
          de: 'Jede Entscheidung wird von einem Analysten angefasst.',
          fr: 'Toutes les décisions passent par un analyste.',
          it: 'Tutte le decisioni passano per un analista.',
        },
      },
    ],
  },
  {
    id: 'data-2',
    dimension: 'data',
    prompt: {
      en: 'Time-to-decision on a clean request, from submission to communicated decision?',
      ro: 'Timp până la decizie pe o cerere curată, de la submit la comunicarea deciziei?',
      de: 'Time-to-Decision auf einer sauberen Anfrage, von Einreichung bis kommunizierter Entscheidung?',
      fr: 'Time-to-decision sur une demande clean, de la soumission à la décision communiquée ?',
      it: 'Time-to-decision su una richiesta pulita, dall\'invio alla decisione comunicata?',
    },
    options: [
      {
        value: 100,
        label: { en: 'Under 15 minutes.', ro: 'Sub 15 minute.', de: 'Unter 15 Minuten.', fr: 'Moins de 15 minutes.', it: 'Sotto i 15 minuti.' },
      },
      { value: 75, label: { en: 'Under an hour.', ro: 'Sub o oră.', de: 'Unter einer Stunde.', fr: 'Moins d\'une heure.', it: 'Sotto un\'ora.' } },
      {
        value: 50,
        label: {
          en: 'Same day to 24 hours.',
          ro: 'Aceeași zi sau până în 24 de ore.',
          de: 'Am selben Tag bis 24 Stunden.',
          fr: 'Le jour même jusqu\'à 24 heures.',
          it: 'Stesso giorno fino a 24 ore.',
        },
      },
      {
        value: 25,
        label: {
          en: 'One to three business days.',
          ro: '1-3 zile lucrătoare.',
          de: 'Ein bis drei Werktage.',
          fr: 'Un à trois jours ouvrés.',
          it: 'Da uno a tre giorni lavorativi.',
        },
      },
      {
        value: 0,
        label: { en: 'A week or more.', ro: 'O săptămână sau mai mult.', de: 'Eine Woche oder mehr.', fr: 'Une semaine ou plus.', it: 'Una settimana o più.' },
      },
    ],
  },
  {
    id: 'data-3',
    dimension: 'data',
    prompt: {
      en: 'Can someone in business or operations pull lifetime profitability of any account in minutes?',
      ro: 'Poate cineva din business sau operațiuni să tragă profitabilitatea pe viață a unui cont în minute?',
      de: 'Kann jemand aus Business oder Operations die Lifetime-Profitabilität eines Kontos in Minuten abrufen?',
      fr: 'Quelqu\'un de business ou opérations peut-il sortir la profitabilité lifetime d\'un compte en quelques minutes ?',
      it: 'Qualcuno di business o operations può estrarre la profittabilità lifetime di un conto in minuti?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Yes, via self-service dashboard.',
          ro: 'Da, prin dashboard de self-service.',
          de: 'Ja, über Self-Service-Dashboard.',
          fr: 'Oui, via un dashboard self-service.',
          it: 'Sì, tramite dashboard self-service.',
        },
      },
      {
        value: 75,
        label: {
          en: 'A small team via a few SQL queries.',
          ro: 'O echipă mică prin câteva interogări SQL.',
          de: 'Ein kleines Team über ein paar SQL-Queries.',
          fr: 'Une petite équipe via quelques requêtes SQL.',
          it: 'Un piccolo team con qualche query SQL.',
        },
      },
      {
        value: 50,
        label: { en: 'Overnight report.', ro: 'Raport peste noapte.', de: 'Über-Nacht-Report.', fr: 'Rapport overnight.', it: 'Report overnight.' },
      },
      {
        value: 25,
        label: {
          en: 'Multi-day analyst exercise.',
          ro: 'Exercițiu de analist de mai multe zile.',
          de: 'Mehrtägige Analystenarbeit.',
          fr: 'Travail analytique de plusieurs jours.',
          it: 'Esercizio di analista di più giorni.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Structurally not possible today.',
          ro: 'Structural imposibil astăzi.',
          de: 'Strukturell heute unmöglich.',
          fr: 'Structurellement impossible aujourd\'hui.',
          it: 'Strutturalmente impossibile oggi.',
        },
      },
    ],
  },

  // Compliance and audit (2)
  {
    id: 'compliance-1',
    dimension: 'compliance',
    prompt: {
      en: 'How are risk and operational policies represented in the system?',
      ro: 'Cum sunt reprezentate politicile de risc și operaționale în sistem?',
      de: 'Wie sind Risiko- und Betriebsrichtlinien im System abgebildet?',
      fr: 'Comment les politiques de risque et opérationnelles sont-elles représentées dans le système ?',
      it: 'Come sono rappresentate le politiche di rischio e operative nel sistema?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'As versioned, testable code-like building blocks that drive decisions directly.',
          ro: 'Ca componente versionate, testabile, gen cod, care conduc deciziile direct.',
          de: 'Als versionierte, testbare, code-ähnliche Bausteine, die Entscheidungen direkt steuern.',
          fr: 'Comme des briques versionnées, testables, façon code, qui pilotent directement les décisions.',
          it: 'Come componenti versionate, testabili, simili a codice, che guidano direttamente le decisioni.',
        },
      },
      {
        value: 75,
        label: {
          en: 'As structured rules in the platform with versioning.',
          ro: 'Ca reguli structurate în platformă cu versionare.',
          de: 'Als strukturierte Regeln in der Plattform mit Versionierung.',
          fr: 'Comme des règles structurées dans la plateforme avec versionnement.',
          it: 'Come regole strutturate nella piattaforma con versionamento.',
        },
      },
      {
        value: 50,
        label: {
          en: 'As parameters in vendor admin, exported to Word for the regulator.',
          ro: 'Ca parametri în adminul vendor-ului, exportați în Word pentru regulator.',
          de: 'Als Parameter im Vendor-Admin, für den Regulator nach Word exportiert.',
          fr: 'Comme paramètres dans l\'admin vendeur, exportés vers Word pour le régulateur.',
          it: 'Come parametri nell\'admin del vendor, esportati in Word per il regolatore.',
        },
      },
      {
        value: 25,
        label: {
          en: 'As text in policy documents, manually translated into platform settings.',
          ro: 'Ca text în documente de politică, traduse manual în setări de platformă.',
          de: 'Als Text in Policy-Dokumenten, manuell in Plattform-Settings übersetzt.',
          fr: 'Comme du texte dans des documents de politique, traduits manuellement en paramètres plateforme.',
          it: 'Come testo in documenti di policy, tradotti manualmente in impostazioni di piattaforma.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Inconsistently between documentation and what the system actually does.',
          ro: 'Inconsistent între documentație și ce face efectiv sistemul.',
          de: 'Inkonsistent zwischen Dokumentation und dem, was das System tatsächlich tut.',
          fr: 'Incohérence entre la documentation et ce que fait réellement le système.',
          it: 'Incoerenza tra la documentazione e ciò che il sistema fa effettivamente.',
        },
      },
    ],
  },
  {
    id: 'compliance-2',
    dimension: 'compliance',
    prompt: {
      en: 'When an auditor or regulator requests data for a review, how long to produce it?',
      ro: 'Când un auditor sau regulator cere date pentru o evaluare, cât durează să le produci?',
      de: 'Wenn ein Auditor oder Regulator Daten für eine Prüfung anfordert, wie lange dauert die Bereitstellung?',
      fr: 'Quand un auditeur ou régulateur demande des données pour une revue, combien de temps pour les produire ?',
      it: 'Quando un auditor o regolatore richiede dati per una revisione, quanto tempo per produrli?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Hours, via standing queries and exports.',
          ro: 'Ore, prin interogări și export-uri deja pregătite.',
          de: 'Stunden, über bestehende Queries und Exports.',
          fr: 'Heures, via des requêtes et exports déjà en place.',
          it: 'Ore, tramite query ed export già pronti.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Days, with a defined extraction process.',
          ro: 'Zile, cu proces de extracție definit.',
          de: 'Tage, mit definiertem Extraktionsprozess.',
          fr: 'Jours, avec un processus d\'extraction défini.',
          it: 'Giorni, con un processo di estrazione definito.',
        },
      },
      {
        value: 50,
        label: {
          en: 'A week, requires coordination across teams.',
          ro: 'O săptămână, cere coordonare cross-echipe.',
          de: 'Eine Woche, erfordert Koordination über Teams hinweg.',
          fr: 'Une semaine, nécessite une coordination entre équipes.',
          it: 'Una settimana, richiede coordinamento tra team.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Two to four weeks, ad-hoc analytical work.',
          ro: '2-4 săptămâni, muncă analitică ad-hoc.',
          de: 'Zwei bis vier Wochen, ad-hoc analytische Arbeit.',
          fr: 'Deux à quatre semaines, travail analytique ad-hoc.',
          it: 'Da due a quattro settimane, lavoro analitico ad-hoc.',
        },
      },
      {
        value: 0,
        label: {
          en: 'A multi-month exercise, often with consultants.',
          ro: 'Un exercițiu de mai multe luni, adesea cu consultanți.',
          de: 'Eine mehrmonatige Übung, oft mit Beratern.',
          fr: 'Un exercice de plusieurs mois, souvent avec des consultants.',
          it: 'Un esercizio di più mesi, spesso con consulenti.',
        },
      },
    ],
  },

  // AI readiness (3)
  {
    id: 'ai-1',
    dimension: 'ai',
    prompt: {
      en: 'How structured is your historical decision and outcome data for ML purposes?',
      ro: 'Cât de structurate sunt datele tale istorice de decizii și outcome pentru ML?',
      de: 'Wie strukturiert sind Ihre historischen Entscheidungs- und Outcome-Daten für ML?',
      fr: 'À quel point vos données historiques de décision et d\'outcome sont-elles structurées pour le ML ?',
      it: 'Quanto sono strutturati i vostri dati storici di decisione e outcome per il ML?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Decision features and outcomes are first-class, queryable, joined.',
          ro: 'Feature-urile de decizie și outcome-urile sunt first-class, interogabile, join-uite.',
          de: 'Decision-Features und Outcomes sind first-class, abfragbar, verknüpft.',
          fr: 'Features de décision et outcomes sont first-class, interrogeables, joints.',
          it: 'Feature di decisione e outcome sono first-class, interrogabili, joinabili.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Reconstructable with effort, mostly in one warehouse.',
          ro: 'Reconstructibile cu efort, majoritar într-un warehouse.',
          de: 'Mit Aufwand rekonstruierbar, größtenteils in einem Warehouse.',
          fr: 'Reconstructibles avec effort, principalement dans un seul warehouse.',
          it: 'Ricostruibili con sforzo, principalmente in un warehouse.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Scattered across systems, partially structured.',
          ro: 'Răspândite prin mai multe sisteme, parțial structurate.',
          de: 'Über Systeme verstreut, teilweise strukturiert.',
          fr: 'Éparpillées entre systèmes, partiellement structurées.',
          it: 'Sparsi tra sistemi, parzialmente strutturati.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Lots of unstructured documents, hard to extract.',
          ro: 'Multe documente nestructurate, greu de extras.',
          de: 'Viele unstrukturierte Dokumente, schwer zu extrahieren.',
          fr: 'Beaucoup de documents non structurés, difficiles à extraire.',
          it: 'Molti documenti non strutturati, difficili da estrarre.',
        },
      },
      {
        value: 0,
        label: {
          en: 'We do not have a usable historical dataset.',
          ro: 'Nu avem un dataset istoric utilizabil.',
          de: 'Wir haben keinen nutzbaren historischen Datensatz.',
          fr: 'Nous n\'avons pas de jeu de données historique exploitable.',
          it: 'Non abbiamo un dataset storico utilizzabile.',
        },
      },
    ],
  },
  {
    id: 'ai-2',
    dimension: 'ai',
    prompt: {
      en: 'Do you have any AI or LLM features in production today, with governance?',
      ro: 'Ai vreo funcție de AI sau LLM în producție astăzi, cu governance?',
      de: 'Haben Sie heute KI- oder LLM-Funktionen in Produktion, mit Governance?',
      fr: 'Avez-vous des fonctionnalités IA ou LLM en production aujourd\'hui, avec gouvernance ?',
      it: 'Avete funzionalità AI o LLM in produzione oggi, con governance?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Yes, with explainability, guardrails, and audit logging.',
          ro: 'Da, cu explicabilitate, guardrails și audit logging.',
          de: 'Ja, mit Erklärbarkeit, Guardrails und Audit-Logging.',
          fr: 'Oui, avec explicabilité, guardrails et audit logging.',
          it: 'Sì, con spiegabilità, guardrails e audit logging.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Yes, in production but governance is still maturing.',
          ro: 'Da, în producție, dar governance-ul încă maturizează.',
          de: 'Ja, in Produktion, aber Governance reift noch.',
          fr: 'Oui, en production mais la gouvernance mûrit encore.',
          it: 'Sì, in produzione ma la governance sta ancora maturando.',
        },
      },
      {
        value: 50,
        label: {
          en: 'In pilot or limited deployment.',
          ro: 'În pilot sau deployment limitat.',
          de: 'Im Pilot oder begrenzten Deployment.',
          fr: 'En pilote ou déploiement limité.',
          it: 'In pilota o deployment limitato.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Exploring vendor offerings, no production use yet.',
          ro: 'Explorăm oferte de vendor, fără utilizare în producție încă.',
          de: 'Wir prüfen Vendor-Angebote, noch keine Produktivnutzung.',
          fr: 'Nous explorons les offres vendeurs, pas encore d\'usage en production.',
          it: 'Stiamo esplorando offerte vendor, ancora senza uso in produzione.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Not yet considered.',
          ro: 'Nu am ajuns încă acolo.',
          de: 'Bisher noch nicht in Betracht gezogen.',
          fr: 'Pas encore envisagé.',
          it: 'Non ancora preso in considerazione.',
        },
      },
    ],
  },
  {
    id: 'ai-3',
    dimension: 'ai',
    prompt: {
      en: 'Who owns AI risk in your organisation?',
      ro: 'Cine deține riscul de AI în organizația ta?',
      de: 'Wer trägt das KI-Risiko in Ihrer Organisation?',
      fr: 'Qui possède le risque IA dans votre organisation ?',
      it: 'Chi possiede il rischio AI nella vostra organizzazione?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'A defined function with mandate, sitting between risk and tech.',
          ro: 'O funcție definită cu mandat, între risk și tech.',
          de: 'Eine definierte Funktion mit Mandat, zwischen Risk und Tech angesiedelt.',
          fr: 'Une fonction définie avec mandat, située entre risk et tech.',
          it: 'Una funzione definita con mandato, tra risk e tech.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Risk function has extended scope to cover AI.',
          ro: 'Funcția de risk și-a extins scope-ul pentru a acoperi AI.',
          de: 'Die Risk-Funktion hat ihren Scope auf KI ausgeweitet.',
          fr: 'La fonction risk a étendu son périmètre à l\'IA.',
          it: 'La funzione risk ha esteso lo scope per coprire l\'AI.',
        },
      },
      {
        value: 50,
        label: { en: 'IT has informal ownership.', ro: 'IT are ownership informal.', de: 'IT hat informelle Eigentümerschaft.', fr: 'L\'IT en a la propriété informelle.', it: 'L\'IT ne ha proprietà informale.' },
      },
      {
        value: 25,
        label: {
          en: 'Discussed at committee level, no clear owner.',
          ro: 'Discutat la nivel de comitet, fără owner clar.',
          de: 'Auf Komitee-Ebene diskutiert, ohne klaren Owner.',
          fr: 'Discuté en comité, sans owner clair.',
          it: 'Discusso a livello di comitato, senza owner chiaro.',
        },
      },
      {
        value: 0,
        label: { en: 'Not yet on the agenda.', ro: 'Nu e încă pe agendă.', de: 'Bisher nicht auf der Agenda.', fr: 'Pas encore à l\'agenda.', it: 'Non ancora in agenda.' },
      },
    ],
  },

  // Customer experience (3)
  {
    id: 'customer-1',
    dimension: 'customer',
    prompt: {
      en: 'What can a customer do end to end via self-service?',
      ro: 'Ce poate face un client end-to-end prin self-service?',
      de: 'Was kann ein Kunde end-to-end im Self-Service erledigen?',
      fr: 'Qu\'est-ce qu\'un client peut faire end to end en self-service ?',
      it: 'Cosa può fare un cliente end-to-end in self-service?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Onboarding, account view, service requests, payments, document download, the full lifecycle.',
          ro: 'Onboarding, vizualizare cont, cereri de servicii, plăți, descărcare documente, întregul ciclu de viață.',
          de: 'Onboarding, Kontoansicht, Serviceanfragen, Zahlungen, Dokumenten-Download, der gesamte Lebenszyklus.',
          fr: 'Onboarding, vue compte, demandes de service, paiements, téléchargement de documents, tout le cycle de vie.',
          it: 'Onboarding, vista conto, richieste di servizio, pagamenti, download documenti, l\'intero ciclo di vita.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Most operational interactions without contacting us.',
          ro: 'Majoritatea interacțiunilor operaționale fără să ne contacteze.',
          de: 'Die meisten operativen Interaktionen, ohne uns kontaktieren zu müssen.',
          fr: 'La plupart des interactions opérationnelles sans nous contacter.',
          it: 'La maggior parte delle interazioni operative senza contattarci.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Basic account view and statement download.',
          ro: 'Vizualizare cont de bază și descărcare extras.',
          de: 'Grundlegende Kontoansicht und Auszugs-Download.',
          fr: 'Vue de compte basique et téléchargement de relevé.',
          it: 'Vista conto di base e download estratto.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Limited portal, most interactions require us.',
          ro: 'Portal limitat, majoritatea interacțiunilor ne implică.',
          de: 'Begrenztes Portal, die meisten Interaktionen erfordern uns.',
          fr: 'Portail limité, la plupart des interactions nous impliquent.',
          it: 'Portale limitato, la maggior parte delle interazioni ci coinvolge.',
        },
      },
      {
        value: 0,
        label: {
          en: 'No customer self-service, everything goes through ops or sales.',
          ro: 'Fără self-service pentru client, totul trece prin ops sau sales.',
          de: 'Kein Kunden-Self-Service, alles läuft über Ops oder Sales.',
          fr: 'Aucun self-service client, tout passe par ops ou sales.',
          it: 'Nessun self-service cliente, tutto passa da ops o sales.',
        },
      },
    ],
  },
  {
    id: 'customer-2',
    dimension: 'customer',
    prompt: {
      en: 'From request submission to active account on a typical clean case, how long?',
      ro: 'De la submit-ul cererii până la cont activ pe un caz curat tipic, cât durează?',
      de: 'Von der Anfrageeinreichung bis zum aktiven Konto auf einem typischen sauberen Vorgang: wie lange?',
      fr: 'De la soumission de la demande au compte actif sur un cas clean typique, combien de temps ?',
      it: 'Dall\'invio della richiesta al conto attivo su un caso pulito tipico, quanto tempo?',
    },
    options: [
      {
        value: 100,
        label: { en: 'Same day, fully online.', ro: 'Aceeași zi, complet online.', de: 'Am selben Tag, vollständig online.', fr: 'Le jour même, entièrement online.', it: 'Stesso giorno, completamente online.' },
      },
      { value: 75, label: { en: 'Two to three days.', ro: '2-3 zile.', de: 'Zwei bis drei Tage.', fr: 'Deux à trois jours.', it: 'Da due a tre giorni.' } },
      {
        value: 50,
        label: { en: 'About a week.', ro: 'Aproximativ o săptămână.', de: 'Etwa eine Woche.', fr: 'Environ une semaine.', it: 'Circa una settimana.' },
      },
      {
        value: 25,
        label: { en: 'Two to three weeks.', ro: '2-3 săptămâni.', de: 'Zwei bis drei Wochen.', fr: 'Deux à trois semaines.', it: 'Da due a tre settimane.' },
      },
      {
        value: 0,
        label: { en: 'A month or more.', ro: 'O lună sau mai mult.', de: 'Ein Monat oder mehr.', fr: 'Un mois ou plus.', it: 'Un mese o più.' },
      },
    ],
  },
  {
    id: 'customer-3',
    dimension: 'customer',
    prompt: {
      en: 'A customer starts a process on one channel and continues on another. What happens?',
      ro: 'Un client începe un proces pe un canal și continuă pe altul. Ce se întâmplă?',
      de: 'Ein Kunde startet einen Prozess auf einem Kanal und führt ihn auf einem anderen fort. Was passiert?',
      fr: 'Un client commence un processus sur un canal et continue sur un autre. Que se passe-t-il ?',
      it: 'Un cliente inizia un processo su un canale e continua su un altro. Cosa succede?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Seamless continuation, state is preserved.',
          ro: 'Continuare fără cusur, starea e prezervată.',
          de: 'Nahtlose Fortsetzung, der Zustand bleibt erhalten.',
          fr: 'Continuation seamless, l\'état est préservé.',
          it: 'Continuazione seamless, lo stato è preservato.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Mostly works, some friction on handover.',
          ro: 'Funcționează în mare, ceva fricțiune la handover.',
          de: 'Funktioniert weitgehend, etwas Friktion beim Handover.',
          fr: 'Fonctionne globalement, un peu de friction au handover.',
          it: 'Funziona in gran parte, un po\' di frizione al handover.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Possible but the customer often needs to restart.',
          ro: 'Posibil, dar clientul deseori e nevoit să o ia de la capăt.',
          de: 'Möglich, aber der Kunde muss oft neu beginnen.',
          fr: 'Possible mais le client doit souvent recommencer.',
          it: 'Possibile, ma il cliente spesso deve ricominciare.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Only fully supported on one channel.',
          ro: 'Suportat complet doar pe un singur canal.',
          de: 'Vollständig nur auf einem Kanal unterstützt.',
          fr: 'Pleinement supporté sur un seul canal.',
          it: 'Pienamente supportato solo su un canale.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Multi-channel is theoretical.',
          ro: 'Multi-channel e teoretic.',
          de: 'Multi-Channel ist theoretisch.',
          fr: 'Le multi-canal est théorique.',
          it: 'Multi-canale è teorico.',
        },
      },
    ],
  },

  // Employee experience (3)
  {
    id: 'employee-1',
    dimension: 'employee',
    prompt: {
      en: 'How many distinct systems does an ops person touch to process a typical end-to-end deal?',
      ro: 'Câte sisteme distincte atinge o persoană din ops pentru a procesa un deal end-to-end tipic?',
      de: 'Wie viele unterschiedliche Systeme nutzt eine Ops-Person, um einen typischen End-to-End-Deal abzuwickeln?',
      fr: 'Combien de systèmes distincts un opérationnel touche-t-il pour traiter un deal end-to-end typique ?',
      it: 'Quanti sistemi distinti tocca una persona di ops per processare un deal end-to-end tipico?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'One integrated environment.',
          ro: 'Un singur mediu integrat.',
          de: 'Eine integrierte Umgebung.',
          fr: 'Un seul environnement intégré.',
          it: 'Un unico ambiente integrato.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Two or three connected systems.',
          ro: '2-3 sisteme conectate.',
          de: 'Zwei oder drei verbundene Systeme.',
          fr: 'Deux ou trois systèmes connectés.',
          it: 'Due o tre sistemi connessi.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Three to five with some integration.',
          ro: '3-5 cu integrare parțială.',
          de: 'Drei bis fünf mit teilweiser Integration.',
          fr: 'Trois à cinq avec une intégration partielle.',
          it: 'Da tre a cinque con integrazione parziale.',
        },
      },
      {
        value: 25,
        label: {
          en: 'Five or more, mostly disconnected.',
          ro: '5 sau mai multe, majoritar deconectate.',
          de: 'Fünf oder mehr, überwiegend unverbunden.',
          fr: 'Cinq ou plus, principalement déconnectés.',
          it: 'Cinque o più, principalmente scollegati.',
        },
      },
      {
        value: 0,
        label: {
          en: 'Many systems plus spreadsheets and email threads.',
          ro: 'Multe sisteme plus spreadsheet-uri și thread-uri de email.',
          de: 'Viele Systeme plus Spreadsheets und E-Mail-Threads.',
          fr: 'Beaucoup de systèmes plus des tableurs et des fils de mail.',
          it: 'Molti sistemi più fogli di calcolo e thread di email.',
        },
      },
    ],
  },
  {
    id: 'employee-2',
    dimension: 'employee',
    prompt: {
      en: 'What share of an ops day is spent on manual data entry, copy-paste, or chasing approvals?',
      ro: 'Ce procent dintr-o zi de ops e cheltuit pe data entry manual, copy-paste sau alergat după aprobări?',
      de: 'Welcher Anteil eines Ops-Tages entfällt auf manuelle Dateneingabe, Copy-Paste oder das Hinterherjagen von Genehmigungen?',
      fr: 'Quelle part d\'une journée ops est passée en saisie manuelle, copy-paste ou course aux validations ?',
      it: 'Che quota di una giornata di ops è spesa in inserimento manuale, copy-paste o caccia ad approvazioni?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Under 10 percent, mostly exception handling.',
          ro: 'Sub 10%, majoritar exception handling.',
          de: 'Unter 10 Prozent, überwiegend Exception-Handling.',
          fr: 'Moins de 10 pour cent, principalement gestion d\'exceptions.',
          it: 'Sotto il 10 percento, principalmente gestione eccezioni.',
        },
      },
      { value: 75, label: { en: '10 to 25 percent.', ro: '10-25%.', de: '10 bis 25 Prozent.', fr: '10 à 25 pour cent.', it: 'Dal 10 al 25 percento.' } },
      { value: 50, label: { en: '25 to 50 percent.', ro: '25-50%.', de: '25 bis 50 Prozent.', fr: '25 à 50 pour cent.', it: 'Dal 25 al 50 percento.' } },
      { value: 25, label: { en: '50 to 75 percent.', ro: '50-75%.', de: '50 bis 75 Prozent.', fr: '50 à 75 pour cent.', it: 'Dal 50 al 75 percento.' } },
      {
        value: 0,
        label: {
          en: 'The job is the manual rework.',
          ro: 'Jobul ESTE rework-ul manual.',
          de: 'Der Job IST die manuelle Nacharbeit.',
          fr: 'Le job EST le retraitement manuel.',
          it: 'Il lavoro È il rework manuale.',
        },
      },
    ],
  },
  {
    id: 'employee-3',
    dimension: 'employee',
    prompt: {
      en: 'What does a decision-maker get from the system when deciding on a non-trivial case?',
      ro: 'Ce primește un decident de la sistem când decide pe un caz non-trivial?',
      de: 'Was bekommt ein Entscheider vom System, wenn er über einen nicht-trivialen Vorgang entscheidet?',
      fr: 'Que reçoit un décideur du système quand il décide d\'un cas non-trivial ?',
      it: 'Cosa riceve un decisore dal sistema quando decide su un caso non banale?',
    },
    options: [
      {
        value: 100,
        label: {
          en: 'Scoring, peer benchmarks, AI-assisted explanation, automated documentation.',
          ro: 'Scoring, benchmark-uri peer, explicație asistată de AI, documentație automată.',
          de: 'Scoring, Peer-Benchmarks, KI-gestützte Erklärung, automatisierte Dokumentation.',
          fr: 'Scoring, benchmarks peer, explication assistée par IA, documentation automatisée.',
          it: 'Scoring, benchmark peer, spiegazione AI-assistita, documentazione automatica.',
        },
      },
      {
        value: 75,
        label: {
          en: 'Scoring plus peer benchmarks.',
          ro: 'Scoring plus benchmark-uri peer.',
          de: 'Scoring plus Peer-Benchmarks.',
          fr: 'Scoring plus benchmarks peer.',
          it: 'Scoring più benchmark peer.',
        },
      },
      {
        value: 50,
        label: {
          en: 'Scoring only, the rest is judgement.',
          ro: 'Doar scoring, restul e judecată.',
          de: 'Nur Scoring, der Rest ist Urteilsvermögen.',
          fr: 'Scoring seulement, le reste est du jugement.',
          it: 'Solo scoring, il resto è giudizio.',
        },
      },
      {
        value: 25,
        label: {
          en: 'A standardised template to fill in.',
          ro: 'Un template standardizat de completat.',
          de: 'Eine standardisierte Vorlage zum Ausfüllen.',
          fr: 'Un template standardisé à remplir.',
          it: 'Un template standardizzato da compilare.',
        },
      },
      {
        value: 0,
        label: {
          en: 'The decision-maker starts from scratch each time.',
          ro: 'Decidentul pornește de la zero de fiecare dată.',
          de: 'Der Entscheider beginnt jedes Mal bei null.',
          fr: 'Le décideur repart de zéro à chaque fois.',
          it: 'Il decisore parte da zero ogni volta.',
        },
      },
    ],
  },
];
