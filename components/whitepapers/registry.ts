/**
 * Whitepaper registry: central index used by both the index page and the
 * `[slug]` route. Adding a new paper means:
 *   1. Append an entry below.
 *   2. Create the content component at `components/whitepapers/<Slug>.tsx`.
 *   3. Wire it into the `renderContent()` switch in `app/[locale]/whitepapers/[slug]/page.tsx`.
 *
 * Whitepapers are static, served from the static export (Cloudflare Pages).
 * No CMS. JSX as content keeps the toolchain tiny until the catalog grows
 * past 3-5 papers, at which point switching to MDX is the next step.
 *
 * Each whitepaper carries its metadata in all five locales (see
 * landing-five-locales memory note for the quality bar).
 */

import type { AppLocale } from '@/i18n/routing';

export type WhitepaperLocaleMeta = {
  title: string;
  subtitle: string;
  lede: string;
};

export interface WhitepaperMeta {
  slug: string;
  date: string;
  minutes: number;
  en: WhitepaperLocaleMeta;
  ro: WhitepaperLocaleMeta;
  de: WhitepaperLocaleMeta;
  fr: WhitepaperLocaleMeta;
  it: WhitepaperLocaleMeta;
}

export function localeMeta(paper: WhitepaperMeta, locale: AppLocale): WhitepaperLocaleMeta {
  return paper[locale];
}

export const WHITEPAPERS: WhitepaperMeta[] = [
  {
    slug: 'migrating-into-multi-tenant',
    date: '2026-05-26',
    minutes: 9,
    en: {
      title: 'Migrating into multi-tenant',
      subtitle: 'Why the target shape decides the first ninety days.',
      lede: 'Migration conversations focus on the source system. The target shape gets less attention, which is a mistake. The target decides what the first ninety days of the project look like. We argue that for mid-tier lending operators, a row-isolated multi-tenant target is the structural property that compounds across staging speed, recon transparency, and post-cutover support cost.',
    },
    ro: {
      title: 'Migrarea într-o țintă multi-tenant',
      subtitle: 'De ce forma țintei decide primele nouăzeci de zile.',
      lede: 'Conversațiile despre migrare se concentrează pe sistemul sursă. Forma țintei primește mai puțină atenție, ceea ce este o greșeală. Ținta decide cum arată primele nouăzeci de zile ale proiectului. Argumentăm că pentru operatorii mid-tier de lending, o țintă multi-tenant cu izolare la nivel de rând este proprietatea structurală care compune peste viteza de staging, transparența reconcilierii și costul de suport post-cutover.',
    },
    de: {
      title: 'Migration in ein Multi-Tenant-Ziel',
      subtitle: 'Warum die Zielform die ersten neunzig Tage entscheidet.',
      lede: 'Migrationsgespräche konzentrieren sich auf das Quellsystem. Die Form des Ziels bekommt weniger Aufmerksamkeit, was ein Fehler ist. Das Ziel entscheidet, wie die ersten neunzig Tage des Projekts aussehen. Wir argumentieren, dass für Mid-Tier-Lending-Betreiber eine Multi-Tenant-Zielform mit Zeilenebenen-Isolation die strukturelle Eigenschaft ist, die sich über Staging-Geschwindigkeit, Abgleichstransparenz und Post-Cutover-Supportkosten zinsanhäuft.',
    },
    fr: {
      title: 'Migrer dans une cible multi-tenant',
      subtitle: 'Pourquoi la forme cible décide des quatre-vingt-dix premiers jours.',
      lede: 'Les conversations sur la migration se concentrent sur le système source. La forme de la cible reçoit moins d\'attention, ce qui est une erreur. La cible décide à quoi ressemblent les premiers quatre-vingt-dix jours du projet. Nous soutenons que pour les opérateurs mid-tier du lending, une cible multi-tenant avec isolation au niveau ligne est la propriété structurelle qui compose sur la vitesse de staging, la transparence du rapprochement et le coût de support post-bascule.',
    },
    it: {
      title: 'Migrare in un target multi-tenant',
      subtitle: 'Perché la forma del target decide i primi novanta giorni.',
      lede: 'Le conversazioni sulla migrazione si concentrano sul sistema sorgente. La forma del target riceve meno attenzione, il che è un errore. Il target decide come appaiono i primi novanta giorni del progetto. Sosteniamo che per gli operatori mid-tier del lending, un target multi-tenant con isolamento a livello riga è la proprietà strutturale che si compone su velocità di staging, trasparenza di riconciliazione e costo di supporto post-cutover.',
    },
  },
  {
    slug: 'migration-playbook',
    date: '2026-05-26',
    minutes: 10,
    en: {
      title: 'How we migrate a portfolio into Innovia',
      subtitle: 'A seven-phase method for mid-tier replatform projects.',
      lede: 'The hardest part of replacing a lending platform is not running the new one. It is moving the portfolio of an operator that has been running for fifteen years on a legacy system. We publish here the seven-phase method we use, the artefacts we ship at each phase, and the honest scope where this method works: portfolios of twenty thousand to five hundred thousand contracts.',
    },
    ro: {
      title: 'Cum migrăm un portofoliu în Innovia',
      subtitle: 'O metodă în șapte faze pentru proiecte mid-tier de replatform.',
      lede: 'Partea cea mai grea a înlocuirii unei platforme de lending nu este să o rulezi pe cea nouă. Este să muți portofoliul unui operator care a funcționat cincisprezece ani pe un sistem legacy. Publicăm aici metoda în șapte faze pe care o folosim, artefactele pe care le livrăm la fiecare fază și scopul onest în care această metodă funcționează: portofolii între douăzeci de mii și cinci sute de mii de contracte.',
    },
    de: {
      title: 'Wie wir ein Portfolio nach Innovia migrieren',
      subtitle: 'Eine Sieben-Phasen-Methode für Mid-Tier-Replatform-Projekte.',
      lede: 'Der schwierigste Teil beim Ersetzen einer Lending-Plattform ist nicht, die neue zu betreiben. Es ist, das Portfolio eines Betreibers zu verschieben, der fünfzehn Jahre auf einem Legacy-System läuft. Wir veröffentlichen hier die Sieben-Phasen-Methode, die wir verwenden, die Artefakte, die wir in jeder Phase liefern, und den ehrlichen Umfang, in dem diese Methode funktioniert: Portfolios von zwanzigtausend bis fünfhunderttausend Verträgen.',
    },
    fr: {
      title: 'Comment nous migrons un portefeuille vers Innovia',
      subtitle: 'Une méthode en sept phases pour les projets de replatform mid-tier.',
      lede: 'La partie la plus difficile du remplacement d\'une plateforme de lending n\'est pas de faire tourner la nouvelle. C\'est de déplacer le portefeuille d\'un opérateur qui tourne depuis quinze ans sur un système legacy. Nous publions ici la méthode en sept phases que nous utilisons, les artefacts que nous livrons à chaque phase, et le périmètre honnête dans lequel cette méthode fonctionne: des portefeuilles de vingt mille à cinq cent mille contrats.',
    },
    it: {
      title: 'Come migriamo un portafoglio in Innovia',
      subtitle: 'Un metodo a sette fasi per progetti di replatform mid-tier.',
      lede: 'La parte più difficile della sostituzione di una piattaforma di lending non è far girare quella nuova. È spostare il portafoglio di un operatore che gira da quindici anni su un sistema legacy. Pubblichiamo qui il metodo a sette fasi che usiamo, gli artefatti che consegniamo a ogni fase, e l\'ambito onesto in cui questo metodo funziona: portafogli da ventimila a cinquecentomila contratti.',
    },
  },
  {
    slug: 'pricing-ev-residual-value-risk',
    date: '2026-05-25',
    minutes: 8,
    en: {
      title: 'Pricing residual value risk in the electric transition',
      subtitle: 'A toolkit for European asset-finance lenders.',
      lede: 'UK three-year EV residual values dropped to 38 percent in April 2026, against more than 46 percent for the same vehicles in Germany, Spain and France. The gap is the leading edge of a structural shift that has unmoored the residual-value paradigm European motor finance has run on for two decades. The constructive response is not better forecasting, which the data does not yet support, but a four-instrument toolkit and a new underwriting input the industry has never had to price before, brand survival.',
    },
    ro: {
      title: 'Cum stabilim prețul riscului de valoare reziduală în tranziția electrică',
      subtitle: 'Un toolkit pentru finanțatorii europeni de asset-finance.',
      lede: 'Valorile reziduale la trei ani pentru EV-urile din Marea Britanie au scăzut la 38 la sută în aprilie 2026, față de peste 46 la sută pentru aceleași vehicule în Germania, Spania și Franța. Diferența este marginea de avans a unei schimbări structurale care a destabilizat paradigma valorii reziduale pe care finanțarea auto europeană a funcționat două decenii. Răspunsul constructiv nu este o prognoză mai bună, pe care datele nu o susțin încă, ci un toolkit cu patru instrumente și un input nou de underwriting pe care industria nu a trebuit să îl prețuiască niciodată, supraviețuirea brandului.',
    },
    de: {
      title: 'Restwertrisiko in der Elektromobilitätswende bepreisen',
      subtitle: 'Ein Toolkit für europäische Asset-Finance-Anbieter.',
      lede: 'Die Drei-Jahres-Restwerte britischer EVs fielen im April 2026 auf 38 Prozent, gegenüber über 46 Prozent für dieselben Fahrzeuge in Deutschland, Spanien und Frankreich. Die Lücke ist die Vorderkante einer strukturellen Verschiebung, die das Restwertparadigma, auf dem die europäische Autofinanzierung zwei Jahrzehnte lief, ins Wanken gebracht hat. Die konstruktive Antwort ist nicht eine bessere Prognose, die die Datenlage noch nicht trägt, sondern ein Toolkit aus vier Instrumenten und ein neuer Underwriting-Input, den die Branche nie bepreisen musste, das Überleben der Marke.',
    },
    fr: {
      title: 'Tarifer le risque de valeur résiduelle dans la transition électrique',
      subtitle: 'Un toolkit pour les financeurs européens en asset-finance.',
      lede: 'Les valeurs résiduelles à trois ans des EV britanniques sont tombées à 38 pour cent en avril 2026, contre plus de 46 pour cent pour les mêmes véhicules en Allemagne, Espagne et France. L\'écart est le bord d\'attaque d\'un déplacement structurel qui a déstabilisé le paradigme de valeur résiduelle sur lequel le financement automobile européen a fonctionné pendant deux décennies. La réponse constructive n\'est pas une meilleure prévision, que les données ne soutiennent pas encore, mais un toolkit à quatre instruments et un nouvel input de souscription que l\'industrie n\'a jamais eu à tarifer, la survie de la marque.',
    },
    it: {
      title: 'Tariffare il rischio di valore residuo nella transizione elettrica',
      subtitle: 'Un toolkit per i finanziatori europei di asset-finance.',
      lede: 'I valori residui a tre anni degli EV britannici sono scesi al 38 percento ad aprile 2026, contro oltre il 46 percento per gli stessi veicoli in Germania, Spagna e Francia. Il divario è il margine anteriore di uno spostamento strutturale che ha destabilizzato il paradigma di valore residuo su cui la finanza auto europea ha operato per due decenni. La risposta costruttiva non è una previsione migliore, che i dati non sostengono ancora, ma un toolkit a quattro strumenti e un nuovo input di sottoscrizione che l\'industria non ha mai dovuto tariffare, la sopravvivenza del brand.',
    },
  },
  {
    slug: 'built-for-ownership-failing-the-lifecycle',
    date: '2026-05-24',
    minutes: 22,
    en: {
      title: 'Built for ownership, failing the lifecycle',
      subtitle: 'A platform reckoning for European equipment finance.',
      lede: 'European equipment finance has spent decades optimising platforms for one job: financing the acquisition of an asset. The demand-side data has moved. 87 percent of European leaders now say capital lock-up has constrained growth. 68 percent say the ease of end-of-life management drives procurement. The financing-event-centric platform cannot serve those concerns without a costly rebuild. Five capability areas separate platforms ready for the next decade from those that are not.',
    },
    ro: {
      title: 'Construit pentru proprietate, eșuând pe ciclul de viață',
      subtitle: 'O recalibrare de platformă pentru finanțarea de echipamente în Europa.',
      lede: 'Finanțarea de echipamente din Europa a petrecut decenii optimizând platforme pentru o singură sarcină: finanțarea achiziției unui activ. Cererea s-a mutat. 87 la sută din liderii europeni spun acum că imobilizarea capitalului le-a constrâns creșterea. 68 la sută spun că ușurința gestionării end-of-life decide procurement-ul. Platforma centrată pe evenimentul de finanțare nu poate răspunde acestor preocupări fără o reconstrucție costisitoare. Cinci zone de capabilitate separă platformele pregătite pentru următorul deceniu de cele care nu sunt.',
    },
    de: {
      title: 'Gebaut für Eigentum, gescheitert am Lebenszyklus',
      subtitle: 'Eine Plattform-Abrechnung für die europäische Equipment Finance.',
      lede: 'Die europäische Equipment Finance hat jahrzehntelang Plattformen für eine Aufgabe optimiert: die Finanzierung des Erwerbs eines Vermögenswerts. Die Nachfrageseite hat sich bewegt. 87 Prozent der europäischen Führungskräfte sagen jetzt, dass gebundenes Kapital das Wachstum eingeschränkt hat. 68 Prozent sagen, dass die Einfachheit des End-of-Life-Managements die Beschaffung steuert. Die finanzierungsereignis-zentrierte Plattform kann diese Anliegen nicht ohne kostspieligen Umbau bedienen. Fünf Fähigkeitsbereiche trennen Plattformen, die für das nächste Jahrzehnt bereit sind, von denen, die es nicht sind.',
    },
    fr: {
      title: 'Conçues pour la propriété, en échec sur le cycle de vie',
      subtitle: 'Une remise à plat des plateformes pour la finance d’équipement européenne.',
      lede: 'La finance d’équipement européenne a passé des décennies à optimiser des plateformes pour une seule tâche : financer l’acquisition d’un actif. La demande a bougé. 87 pour cent des dirigeants européens disent désormais que l’immobilisation du capital a contraint la croissance. 68 pour cent disent que la facilité de gestion en fin de vie pilote les achats. La plateforme centrée sur l’événement de financement ne peut pas répondre à ces préoccupations sans une refonte coûteuse. Cinq domaines de capacité séparent les plateformes prêtes pour la prochaine décennie de celles qui ne le sont pas.',
    },
    it: {
      title: 'Costruite per la proprietà, in fallimento sul ciclo di vita',
      subtitle: 'Una resa dei conti di piattaforma per la finanza di equipment europea.',
      lede: 'La finanza di equipment europea ha trascorso decenni a ottimizzare piattaforme per un solo compito: finanziare l’acquisizione di un asset. La domanda si è spostata. L’87 percento dei leader europei dice ora che il capitale immobilizzato ha vincolato la crescita. Il 68 percento dice che la facilità di gestione del fine vita guida il procurement. La piattaforma centrata sull’evento di finanziamento non può servire queste preoccupazioni senza una ricostruzione costosa. Cinque aree di capacità separano le piattaforme pronte per il prossimo decennio da quelle che non lo sono.',
    },
  },
  {
    slug: 'single-codebase-as-a-property',
    date: '2026-05-23',
    minutes: 9,
    en: {
      title: 'Single codebase as a property, not a portal',
      subtitle: 'A portal that unifies five backends still leaves five backends. Single codebase compounds across audit, AI, schema, and deployment.',
      lede: 'Sooner or later a vendor that has carried five products through three acquisitions points to a new portal and calls itself unified. The portal is real. The five backends are still five backends. We argue that single codebase is a structural property worth pricing into the decision, and we show what it buys and what it costs us.',
    },
    ro: {
      title: 'Single codebase ca proprietate, nu ca portal',
      subtitle: 'Un portal care unifică cinci backend-uri lasă tot cinci backend-uri. Single codebase compune peste audit, IA, schemă și deployment.',
      lede: 'Mai devreme sau mai târziu un furnizor care a purtat cinci produse prin trei achiziții arată spre un portal nou și se autodeclară unificat. Portalul este real. Cele cinci backend-uri rămân cinci backend-uri. Argumentăm că single codebase este o proprietate structurală pe care merită să o iei în calcul, și arătăm ce cumpără și ce ne costă.',
    },
    de: {
      title: 'Single Codebase als Eigenschaft, nicht als Portal',
      subtitle: 'Ein Portal, das fünf Backends vereinheitlicht, lässt immer noch fünf Backends. Single Codebase zinst auf in Audit, KI, Schema und Deployment.',
      lede: 'Früher oder später zeigt ein Anbieter, der fünf Produkte durch drei Akquisitionen mitgeschleppt hat, auf ein neues Portal und nennt sich vereinheitlicht. Das Portal ist echt. Die fünf Backends sind immer noch fünf Backends. Wir argumentieren, dass Single Codebase eine strukturelle Eigenschaft ist, die in die Entscheidung eingepreist werden sollte, und zeigen, was sie bringt und was sie uns kostet.',
    },
    fr: {
      title: 'Single codebase comme propriété, pas comme portail',
      subtitle: 'Un portail qui unifie cinq backends laisse toujours cinq backends. Single codebase compose à travers audit, IA, schéma et déploiement.',
      lede: 'Tôt ou tard, un fournisseur qui a porté cinq produits à travers trois acquisitions montre un nouveau portail et se déclare unifié. Le portail est réel. Les cinq backends restent cinq backends. Nous soutenons que single codebase est une propriété structurelle à prendre en compte dans la décision, et nous montrons ce qu&apos;elle apporte et ce qu&apos;elle nous coûte.',
    },
    it: {
      title: 'Single codebase come proprietà, non come portale',
      subtitle: 'Un portale che unifica cinque backend lascia comunque cinque backend. Single codebase si compone tra audit, IA, schema e deployment.',
      lede: 'Prima o poi un fornitore che ha portato cinque prodotti attraverso tre acquisizioni indica un nuovo portale e si dichiara unificato. Il portale è reale. I cinque backend restano cinque backend. Sosteniamo che single codebase sia una proprietà strutturale da considerare nella decisione, e mostriamo cosa porta e cosa ci costa.',
    },
  },
  {
    slug: 'multi-tenant-isolation-as-a-property',
    date: '2026-05-23',
    minutes: 8,
    en: {
      title: 'Multi-tenant isolation as a property, not a promise',
      subtitle: 'What we pin in CI so the SaaS economics hold up in front of a regulator.',
      lede: 'In an RFP, the "multi-tenant SaaS" checkbox usually gets a tick without anyone defining what it means. We define it in three concrete things, verify it with twenty-five integration tests, and remain honest about the trade-offs that come with row-level isolation.',
    },
    ro: {
      title: 'Izolarea multi-tenant ca proprietate, nu ca promisiune',
      subtitle: 'Ce fixăm în CI ca economia SaaS să reziste în fața unui regulator.',
      lede: 'Într-un RFP, bifa "SaaS multi-tenant" primește în general un da fără ca cineva să definească ce înseamnă. O definim în trei lucruri concrete, o verificăm cu douăzeci și cinci de teste de integrare, și rămânem onești în privința compromisurilor care vin cu izolarea la nivel de rând.',
    },
    de: {
      title: 'Multi-Tenant-Isolation als Eigenschaft, nicht als Versprechen',
      subtitle: 'Was wir in CI festschreiben, damit die SaaS-Ökonomie vor einem Regulator standhält.',
      lede: 'In einem RFP bekommt das Kästchen "multi-tenant SaaS" meistens ein Häkchen, ohne dass jemand definiert, was das eigentlich bedeutet. Wir definieren es in drei konkreten Dingen, verifizieren es mit fünfundzwanzig Integrationstests, und bleiben ehrlich über die Kompromisse, die mit Zeilenebene-Isolation einhergehen.',
    },
    fr: {
      title: 'L\'isolation multi-tenant comme propriété, pas comme promesse',
      subtitle: 'Ce que nous figeons en CI pour que l\'économie SaaS tienne devant un régulateur.',
      lede: 'Dans un appel d\'offres, la case "SaaS multi-tenant" reçoit en général une coche sans que quiconque définisse ce qu\'elle signifie. Nous la définissons en trois choses concrètes, la vérifions avec vingt-cinq tests d\'intégration, et restons honnêtes sur les compromis qui viennent avec l\'isolation au niveau ligne.',
    },
    it: {
      title: 'L\'isolamento multi-tenant come proprietà, non come promessa',
      subtitle: 'Cosa fissiamo in CI affinché l\'economia SaaS regga davanti a un regolatore.',
      lede: 'In una RFP, la casella "SaaS multi-tenant" riceve di solito un sì senza che nessuno definisca cosa significhi. La definiamo in tre cose concrete, la verifichiamo con venticinque test di integrazione, e restiamo onesti sui compromessi che vengono con l\'isolamento a livello riga.',
    },
  },
  {
    slug: 'the-compounding-cost-of-waiting',
    date: '2026-05-22',
    minutes: 11,
    en: {
      title: 'The compounding cost of waiting',
      subtitle: 'Why Fit for Digital and Fit for AI is a 2026 conversation, not a 2027 one.',
      lede: 'Most mid-tier lending operators score between 40 and 65 percent on the Fit for Digital. Fit for AI. diagnostic. The spread is not the news. The news is what happens to that score if the operator does nothing for twelve more months. Four clocks tick: regulator, talent, AI-native competitor, customer expectations.',
    },
    ro: {
      title: 'Costul compus al așteptării',
      subtitle: 'De ce Fit for Digital și Fit for AI sunt o conversație de 2026, nu de 2027.',
      lede: 'Majoritatea operatorilor mid-tier de lending obțin între 40 și 65 la sută pe diagnosticul Fit for Digital. Fit for AI. Intervalul nu este știrea. Știrea este ce se întâmplă cu scorul dacă operatorul nu face nimic în următoarele douăsprezece luni. Patru ceasuri ticăie: regulator, talent, concurența AI-native, așteptările clienților.',
    },
    de: {
      title: 'Die kumulierten Kosten des Wartens',
      subtitle: 'Warum Fit for Digital und Fit for AI ein 2026er Gespräch ist, kein 2027er.',
      lede: 'Die meisten Mid-Tier-Lending-Betreiber erzielen zwischen 40 und 65 Prozent im Fit for Digital. Fit for AI. Diagnostik. Die Spanne ist nicht die Nachricht. Die Nachricht ist, was mit diesem Score passiert, wenn der Betreiber zwölf weitere Monate nichts tut. Vier Uhren ticken: Regulator, Talent, KI-nativer Wettbewerber, Kundenerwartungen.',
    },
    fr: {
      title: 'Le coût composé de l\'attente',
      subtitle: 'Pourquoi Fit for Digital et Fit for AI est une conversation de 2026, pas de 2027.',
      lede: 'La plupart des opérateurs mid-tier du lending obtiennent entre 40 et 65 pour cent au diagnostic Fit for Digital. Fit for AI. L\'écart n\'est pas la nouvelle. La nouvelle, c\'est ce qu\'il advient de ce score si l\'opérateur ne fait rien pendant douze mois de plus. Quatre horloges tournent : régulateur, talent, concurrent AI-natif, attentes clients.',
    },
    it: {
      title: 'Il costo composto dell\'attesa',
      subtitle: 'Perché Fit for Digital e Fit for AI è una conversazione del 2026, non del 2027.',
      lede: 'La maggior parte degli operatori mid-tier del lending ottiene tra il 40 e il 65 percento nel diagnostico Fit for Digital. Fit for AI. La forbice non è la notizia. La notizia è cosa succede a quel punteggio se l\'operatore non fa nulla per altri dodici mesi. Quattro orologi ticchettano: regolatore, talento, concorrente AI-nativo, aspettative clienti.',
    },
  },
  {
    slug: 'after-the-ui-layer-falls',
    date: '2026-05-22',
    minutes: 12,
    en: {
      title: 'After the UI layer falls',
      subtitle: 'Where the moat moves in enterprise lending.',
      lede: 'LLMs and workflow orchestration are eating the most visible layer of every enterprise application. Three things stay defensible: the auditable core, the domain configuration each operator builds on top, and the speed at which both can move together.',
    },
    ro: {
      title: 'După ce stratul de UI cade',
      subtitle: 'Unde se mută moat-ul în lending-ul enterprise.',
      lede: 'LLM-urile și orchestrarea de workflow mănâncă stratul cel mai vizibil al oricărei aplicații enterprise. Trei lucruri rămân defensibile: nucleul auditabil, configurația de domeniu pe care fiecare operator o construiește deasupra, și viteza cu care cele două pot evolua împreună.',
    },
    de: {
      title: 'Nachdem die UI-Schicht fällt',
      subtitle: 'Wohin sich der Burggraben im Enterprise-Lending verschiebt.',
      lede: 'LLMs und Workflow-Orchestrierung fressen die sichtbarste Schicht jeder Enterprise-Anwendung. Drei Dinge bleiben verteidigungsfähig: der auditierbare Kern, die domänenspezifische Konfiguration, die jeder Betreiber darauf aufbaut, und das Tempo, in dem sich beide gemeinsam bewegen können.',
    },
    fr: {
      title: 'Après la chute de la couche UI',
      subtitle: 'Où le moat se déplace dans le lending enterprise.',
      lede: 'Les LLM et l\'orchestration de workflow dévorent la couche la plus visible de chaque application enterprise. Trois choses restent défendables : le cœur auditable, la configuration métier que chaque opérateur construit dessus, et la vitesse à laquelle les deux peuvent évoluer ensemble.',
    },
    it: {
      title: 'Dopo la caduta del livello UI',
      subtitle: 'Dove si sposta il moat nel lending enterprise.',
      lede: 'Gli LLM e l\'orchestrazione di workflow stanno divorando il livello più visibile di ogni applicazione enterprise. Tre cose restano difendibili: il nucleo auditabile, la configurazione di dominio che ogni operatore costruisce sopra, e la velocità con cui i due possono muoversi insieme.',
    },
  },
];

export function getWhitepaper(slug: string): WhitepaperMeta | undefined {
  return WHITEPAPERS.find((w) => w.slug === slug);
}
