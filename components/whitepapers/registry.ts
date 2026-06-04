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
    slug: 'regulatory-reporting-off-the-booking-engine',
    date: '2026-06-04',
    minutes: 10,
    en: {
      title: 'Regulatory reporting off the booking engine',
      subtitle: 'IFRS 9 provisions and supervisory returns that reconcile to the book by construction, because they read the same rows the business runs on, not a copy in a warehouse.',
      lede: 'Most lenders produce their regulatory numbers in a stack downstream of the systems that run the business: the platform books the contracts, a separate warehouse turns them into IFRS 9 provisions and supervisory returns, and the two are reconciled on a clock. The gap between what the book says and what was reported is exactly where findings live. We took the other route. The regulatory view runs on the same engine that books the contract, so it reconciles by construction, not by a quarterly tie-out.',
    },
    ro: {
      title: 'Raportare regulatorie din motorul care inregistreaza contractele',
      subtitle: 'Provizioane IFRS 9 si raportari de supraveghere care se reconciliaza cu cartea prin constructie, fiindca citesc aceleasi randuri pe care ruleaza business-ul, nu o copie dintr-un warehouse.',
      lede: 'Majoritatea creditorilor isi produc cifrele regulatorii intr-un stack situat in aval de sistemele care ruleaza business-ul: platforma inregistreaza contractele, un warehouse separat le transforma in provizioane IFRS 9 si raportari de supraveghere, iar cele doua se reconciliaza pe un ceas. Diferenta dintre ce spune cartea si ce s-a raportat e exact locul unde traiesc constatarile. Noi am ales cealalta cale. Vederea regulatorie ruleaza pe acelasi motor care inregistreaza contractul, deci se reconciliaza prin constructie, nu printr-un tie-out trimestrial.',
    },
    de: {
      title: 'Regulatorisches Reporting aus der Buchungs-Engine',
      subtitle: 'IFRS-9-Risikovorsorge und Aufsichtsmeldungen, die sich konstruktionsbedingt mit dem Buch abstimmen, weil sie dieselben Zeilen lesen, auf denen das Geschaeft laeuft, keine Kopie in einem Warehouse.',
      lede: 'Die meisten Kreditgeber erzeugen ihre regulatorischen Zahlen in einem Stack, der den Systemen nachgelagert ist, die das Geschaeft betreiben: die Plattform bucht die Vertraege, ein separates Warehouse macht daraus IFRS-9-Risikovorsorge und Aufsichtsmeldungen, und beide werden auf einer Uhr abgestimmt. Die Luecke zwischen dem, was das Buch sagt, und dem, was gemeldet wurde, ist genau dort, wo Beanstandungen leben. Wir gingen den anderen Weg. Die regulatorische Sicht laeuft auf derselben Engine, die den Vertrag bucht, also stimmt sie sich konstruktionsbedingt ab, nicht durch eine vierteljaehrliche Abstimmung.',
    },
    fr: {
      title: "Reporting réglementaire depuis le moteur de comptabilisation",
      subtitle: "Provisions IFRS 9 et états prudentiels qui se réconcilient au livre par construction, parce qu'ils lisent les mêmes lignes sur lesquelles tourne l'activité, pas une copie dans un entrepôt.",
      lede: "La plupart des prêteurs produisent leurs chiffres réglementaires dans une stack en aval des systèmes qui font tourner l'activité : la plateforme comptabilise les contrats, un entrepôt séparé les transforme en provisions IFRS 9 et états prudentiels, et les deux sont réconciliés sur une horloge. L'écart entre ce que dit le livre et ce qui a été déclaré est exactement là où vivent les constats. Nous avons pris l'autre route. La vue réglementaire tourne sur le même moteur qui comptabilise le contrat, donc elle se réconcilie par construction, pas par un rapprochement trimestriel.",
    },
    it: {
      title: "Reporting regolamentare dal motore di contabilizzazione",
      subtitle: "Accantonamenti IFRS 9 e segnalazioni di vigilanza che si riconciliano al libro per costruzione, perché leggono le stesse righe su cui gira l'attività, non una copia in un warehouse.",
      lede: "La maggior parte dei prestatori produce i propri numeri regolamentari in uno stack a valle dei sistemi che fanno girare l'attività: la piattaforma contabilizza i contratti, un warehouse separato li trasforma in accantonamenti IFRS 9 e segnalazioni di vigilanza, e i due vengono riconciliati su un orologio. Il divario tra ciò che dice il libro e ciò che è stato segnalato è esattamente dove vivono i rilievi. Noi abbiamo preso l'altra strada. La vista regolamentare gira sullo stesso motore che contabilizza il contratto, quindi si riconcilia per costruzione, non con una quadratura trimestrale.",
    },
  },
  {
    slug: 'single-obligor-exposure-as-a-property',
    date: '2026-06-04',
    minutes: 9,
    en: {
      title: 'Single-obligor exposure as a property, not a report',
      subtitle: 'A borrower is one obligor whatever product they hold. Total exposure to a name should be one number the platform enforces, not a spreadsheet rebuilt the week the credit committee asks.',
      lede: 'Ask a mid-tier lender what their total exposure to a borrower is, and the answer usually takes a day: asset finance in one system, consumer in another, the secured book in a third, the corporate facilities in a fourth, and a spreadsheet to add them up. We treat that sum as a property of the platform, computed the same way every time it is needed and enforced as a hard stop before the next deal is approved, not assembled after the fact in a report nobody can fully trust.',
    },
    ro: {
      title: 'Expunerea pe debitor unic ca proprietate, nu ca raport',
      subtitle: 'Un debitor este un singur obligor, indiferent ce produs are. Expunerea totala fata de un nume ar trebui sa fie un numar pe care platforma il impune, nu un spreadsheet refacut in saptamana in care intreaba comitetul de credit.',
      lede: 'Intreaba un creditor mid-tier care e expunerea totala fata de un debitor, iar raspunsul dureaza de obicei o zi: asset finance intr-un sistem, consumer in altul, cartea garantata in al treilea, facilitatile corporate in al patrulea, si un spreadsheet care le aduna. Noi tratam acea suma ca o proprietate a platformei, calculata la fel de fiecare data cand e nevoie de ea si impusa ca hard-stop inainte de aprobarea urmatoarei tranzactii, nu asamblata ulterior intr-un raport in care nimeni nu are incredere deplina.',
    },
    de: {
      title: 'Einzelobligor-Exposure als Eigenschaft, nicht als Bericht',
      subtitle: 'Ein Kreditnehmer ist ein Obligor, welches Produkt er auch hat. Das Gesamtengagement gegenueber einem Namen sollte eine Zahl sein, die die Plattform durchsetzt, keine Tabelle, die in der Woche neu gebaut wird, in der das Kreditkomitee fragt.',
      lede: 'Fragen Sie einen Mid-Tier-Kreditgeber nach seinem Gesamtengagement gegenueber einem Kreditnehmer, und die Antwort dauert meist einen Tag: Asset Finance in einem System, Consumer in einem anderen, das besicherte Buch in einem dritten, die Unternehmensfazilitaeten in einem vierten, und eine Tabelle zum Aufsummieren. Wir behandeln diese Summe als Eigenschaft der Plattform, jedes Mal gleich berechnet, wenn sie gebraucht wird, und als Hard-Stop durchgesetzt, bevor das naechste Geschaeft genehmigt wird, statt sie nachtraeglich in einem Bericht zusammenzusetzen, dem niemand ganz vertraut.',
    },
    fr: {
      title: "L'exposition par obligé unique comme propriété, pas comme rapport",
      subtitle: "Un emprunteur est un seul obligé quel que soit le produit qu'il détient. L'exposition totale à un nom devrait être un chiffre que la plateforme impose, pas un tableur reconstruit la semaine où le comité de crédit le demande.",
      lede: "Demandez à un prêteur mid-tier quelle est son exposition totale à un emprunteur, et la réponse prend en général une journée : asset finance dans un système, consumer dans un autre, le portefeuille garanti dans un troisième, les facilités corporate dans un quatrième, et un tableur pour les additionner. Nous traitons cette somme comme une propriété de la plateforme, calculée de la même façon à chaque fois qu'elle est requise et imposée comme arrêt strict avant l'approbation de la transaction suivante, plutôt qu'assemblée après coup dans un rapport auquel personne ne se fie entièrement.",
    },
    it: {
      title: "L'esposizione per singolo obbligato come proprietà, non come report",
      subtitle: "Un mutuatario è un solo obbligato qualunque prodotto detenga. L'esposizione totale verso un nome dovrebbe essere un numero che la piattaforma impone, non un foglio di calcolo ricostruito la settimana in cui lo chiede il comitato crediti.",
      lede: "Chiedete a un prestatore mid-tier quale sia la sua esposizione totale verso un mutuatario, e la risposta di solito richiede un giorno: asset finance in un sistema, consumer in un altro, il portafoglio garantito in un terzo, le facilitazioni corporate in un quarto, e un foglio di calcolo per sommarli. Noi trattiamo quella somma come una proprietà della piattaforma, calcolata allo stesso modo ogni volta che serve e imposta come hard-stop prima dell'approvazione della transazione successiva, invece di assemblarla a posteriori in un report di cui nessuno si fida del tutto.",
    },
  },
  {
    slug: 'verifiable-ai-governance',
    date: '2026-06-01',
    minutes: 8,
    en: {
      title: 'Verifiable AI governance: an audit you can recompute',
      subtitle: 'The difference between an audit you trust and an audit a supervisor can recompute, extended to every action a model takes.',
      lede: 'Auditable is the easiest box to tick in a tender and the hardest to mean. Most platforms log what happened and ask you to trust the log was not edited afterward. We seal the audit log into a SHA-256 hash chain and expose one endpoint that recomputes it from the live rows, so anyone with the right to ask can prove the log was not altered, and name the exact row if it was. Every AI action, a tool call over the Model Context Protocol, a write from the in-app assistant, a decision from the scoring model, lands in that same chain and inherits the same proof.',
    },
    ro: {
      title: 'Guvernanță AI verificabilă: un audit pe care îl poți recalcula',
      subtitle: 'Diferența dintre un audit în care ai încredere și un audit pe care un supervizor îl poate recalcula, extinsă la fiecare acțiune pe care o ia un model.',
      lede: 'Auditabil este cea mai ușoară bifă într-o licitație și cel mai greu de susținut. Majoritatea platformelor înregistrează ce s-a întâmplat și îți cer să ai încredere că jurnalul nu a fost editat după aceea. Noi sigilăm jurnalul de audit într-un lanț de hash SHA-256 și expunem un singur endpoint care îl recalculează din rândurile vii, astfel încât oricine are dreptul să întrebe poate dovedi că jurnalul nu a fost alterat, și poate numi rândul exact dacă a fost. Fiecare acțiune AI, un apel de unealtă prin Model Context Protocol, o scriere din asistentul în aplicație, o decizie din modelul de scoring, ajunge în același lanț și moștenește aceeași dovadă.',
    },
    de: {
      title: 'Verifizierbare KI-Governance: ein Audit, das Sie nachrechnen können',
      subtitle: 'Der Unterschied zwischen einem Audit, dem Sie vertrauen, und einem Audit, das ein Aufseher nachrechnen kann, ausgeweitet auf jede Aktion, die ein Modell ausführt.',
      lede: 'Auditierbar ist das einfachste Kästchen in einer Ausschreibung und das am schwersten einzulösende. Die meisten Plattformen protokollieren, was geschah, und bitten Sie zu vertrauen, dass das Protokoll danach nicht bearbeitet wurde. Wir versiegeln das Audit-Log in einer SHA-256-Hash-Kette und stellen einen Endpunkt bereit, der sie aus den Live-Zeilen nachrechnet, sodass jeder mit dem Recht zu fragen beweisen kann, dass das Log nicht verändert wurde, und die genaue Zeile benennen kann, falls doch. Jede KI-Aktion, ein Werkzeugaufruf über das Model Context Protocol, ein Schreibvorgang des In-App-Assistenten, eine Entscheidung des Scoring-Modells, landet in derselben Kette und erbt denselben Beweis.',
    },
    fr: {
      title: 'Gouvernance IA vérifiable : un audit que vous pouvez recalculer',
      subtitle: 'La différence entre un audit auquel vous faites confiance et un audit qu\'un superviseur peut recalculer, étendue à chaque action que prend un modèle.',
      lede: 'Auditable est la case la plus facile à cocher dans un appel d\'offres et la plus difficile à tenir. La plupart des plateformes journalisent ce qui s\'est passé et vous demandent de croire que le journal n\'a pas été édité ensuite. Nous scellons le journal d\'audit dans une chaîne de hachage SHA-256 et exposons un endpoint qui la recalcule à partir des lignes vivantes, de sorte que quiconque a le droit de demander peut prouver que le journal n\'a pas été altéré, et nommer la ligne exacte s\'il l\'a été. Chaque action IA, un appel d\'outil via le Model Context Protocol, une écriture de l\'assistant dans l\'application, une décision du modèle de scoring, atterrit dans cette même chaîne et hérite de la même preuve.',
    },
    it: {
      title: 'Governance IA verificabile: un audit che puoi ricalcolare',
      subtitle: 'La differenza tra un audit di cui ti fidi e un audit che un supervisore può ricalcolare, estesa a ogni azione che un modello compie.',
      lede: 'Auditabile è la casella più facile da spuntare in una gara e la più difficile da mantenere. La maggior parte delle piattaforme registra cosa è accaduto e ti chiede di fidarti che il log non sia stato modificato dopo. Noi sigilliamo il log di audit in una catena di hash SHA-256 ed esponiamo un endpoint che la ricalcola dalle righe vive, così chiunque abbia il diritto di chiedere può provare che il log non è stato alterato, e nominare la riga esatta se lo è stato. Ogni azione IA, una chiamata di strumento via Model Context Protocol, una scrittura dall\'assistente in-app, una decisione dal modello di scoring, finisce nella stessa catena ed eredita la stessa prova.',
    },
  },
  {
    slug: 'five-disruptions-already-shipped',
    date: '2026-05-31',
    minutes: 10,
    en: {
      title: 'All five disruptions, already built by Innovia Systems',
      subtitle: 'McKinsey maps the AI-native platform as a future. In regulated lending, the substrate that captures the EBIT is the one we have already built.',
      lede: 'In its January 2026 analysis "The end of ERP as we know it? Five ways AI is disrupting ERP", McKinsey is right about all five, and it reports the catch in the same breath: only around 40 percent of organisations capture any enterprise-level EBIT impact from AI. We take each in turn, agree with it, and show why the difference between capturing the value and booking nothing is the substrate underneath, configuration-native, deterministic, and auditable, the one we built first.',
    },
    ro: {
      title: 'Toate cele cinci disrupții, deja construite de Innovia Systems',
      subtitle: 'McKinsey descrie platforma nativă pe IA ca viitor. În creditarea reglementată, substratul care captează EBIT-ul este cel pe care l-am construit deja.',
      lede: 'În analiza sa din ianuarie 2026 „The end of ERP as we know it? Five ways AI is disrupting ERP”, McKinsey are dreptate cu toate cele cinci, și raportează capcana în aceeași frază: doar în jur de 40% dintre organizații obțin vreun impact asupra EBIT la nivel de companie. Luăm fiecare disrupție pe rând, suntem de acord cu ea, și arătăm de ce diferența dintre a capta valoarea și a nu înregistra nimic este substratul de dedesubt, nativ pe configurare, determinist și auditabil, cel pe care l-am construit primii.',
    },
    de: {
      title: 'Alle fünf Umwälzungen, von Innovia Systems bereits gebaut',
      subtitle: 'McKinsey beschreibt die KI-native Plattform als Zukunft. Im regulierten Kreditgeschäft ist das Substrat, das EBIT erfasst, jenes, das wir bereits gebaut haben.',
      lede: 'In seiner Analyse vom Januar 2026 „The end of ERP as we know it? Five ways AI is disrupting ERP“ hat McKinsey mit allen fünf recht, und nennt im selben Atemzug den Haken: nur rund 40% der Organisationen erfassen überhaupt einen EBIT-Effekt auf Unternehmensebene. Wir nehmen jede der Reihe nach auf, stimmen ihr zu und zeigen, warum der Unterschied zwischen dem Erfassen des Wertes und dem Verbuchen von nichts das Substrat darunter ist, konfigurationsnativ, deterministisch und auditierbar, jenes, das wir zuerst gebaut haben.',
    },
    fr: {
      title: 'Les cinq ruptures, déjà construites par Innovia Systems',
      subtitle: 'McKinsey décrit la plateforme native de l\'IA comme un avenir. Dans le crédit réglementé, le substrat qui capte l\'EBIT est celui que nous avons déjà construit.',
      lede: 'Dans son analyse de janvier 2026 « The end of ERP as we know it? Five ways AI is disrupting ERP », McKinsey a raison sur les cinq, et signale le bémol dans la même phrase: seules 40% des organisations environ captent un quelconque impact sur l\'EBIT au niveau de l\'entreprise. Nous les reprenons l\'une après l\'autre, nous y souscrivons, et nous montrons pourquoi la différence entre capter la valeur et ne rien enregistrer tient au substrat en dessous, nativement configurable, déterministe et auditable, celui que nous avons construit d\'abord.',
    },
    it: {
      title: 'Tutte e cinque le rotture, già costruite da Innovia Systems',
      subtitle: 'McKinsey descrive la piattaforma nativa per l\'IA come un futuro. Nel credito regolamentato, il substrato che cattura l\'EBIT è quello che abbiamo già costruito.',
      lede: 'Nella sua analisi del gennaio 2026 « The end of ERP as we know it? Five ways AI is disrupting ERP », McKinsey ha ragione su tutti e cinque, e segnala il punto critico nella stessa frase: solo circa il 40% delle organizzazioni cattura un qualche impatto sull\'EBIT a livello aziendale. Li affrontiamo a turno, li condividiamo, e mostriamo perché la differenza tra catturare il valore e non registrare nulla è il substrato sottostante, nativo per configurazione, deterministico e verificabile, quello che abbiamo costruito per primi.',
    },
  },
  {
    slug: 'resilience-and-security-as-properties',
    date: '2026-05-29',
    minutes: 14,
    en: {
      title: 'Resilience and security as operating properties',
      subtitle: 'What we pin so a lending platform holds up under DORA, not just in a certificate.',
      lede: 'Security and resilience are usually sold to a buyer as documents: a penetration test PDF, an ISO certificate, a line in a tender that says bank-grade. Those are necessary. They are not what a regulator tests when an operational resilience review actually happens. Under the Digital Operational Resilience Act and the NIS2 Directive, an operator has to show that its critical platforms fail safely, recover on a known clock, and leave evidence. We map our platform-level controls to those two regimes and the standards underneath them (ISO 27001, ISO 22301, GDPR Article 32 and 33, with the EU AI Act and the Cyber Resilience Act ahead), and we publish the properties that make the mapping real: fail-closed by default, least privilege enforced by the build across roughly 86 controllers, a tamper-evident audit trail that held through 226,000 requests, per-tenant point-in-time restore, and supply-chain hygiene gated by around 1,100 tests on every merge. Plus an honest line on what a platform cannot do alone.',
    },
    ro: {
      title: 'Reziliența și securitatea ca proprietăți operaționale',
      subtitle: 'Ce fixăm ca o platformă de lending să reziste sub DORA, nu doar într-un certificat.',
      lede: 'Securitatea și reziliența îi sunt vândute cumpărătorului, de regulă, ca documente: un PDF de penetration test, un certificat ISO, un rând într-o licitație care zice bank-grade. Sunt necesare. Nu sunt ceea ce testează un regulator când are loc efectiv o evaluare de reziliență operațională. Sub Digital Operational Resilience Act și Directiva NIS2, un operator trebuie să arate că platformele lui critice eșuează în siguranță, se recuperează pe un ceas cunoscut și lasă dovezi. Mapăm controalele noastre la nivel de platformă pe aceste două regimuri și pe standardele de sub ele (ISO 27001, ISO 22301, GDPR Articolele 32 și 33, cu EU AI Act și Cyber Resilience Act în față), și publicăm proprietățile care fac maparea reală: eșec închis implicit, privilegiu minim impus de build pe aproximativ 86 de controllere, un traseu de audit rezistent la falsificare care a rezistat prin 226.000 de request-uri, restore point-in-time per tenant, și igienă a lanțului de aprovizionare păzită de aproximativ 1.100 de teste la fiecare merge. Plus un rând onest despre ce nu poate face o platformă singură.',
    },
    de: {
      title: 'Resilienz und Sicherheit als operative Eigenschaften',
      subtitle: 'Was wir festschreiben, damit eine Lending-Plattform unter DORA standhält, nicht nur in einem Zertifikat.',
      lede: 'Sicherheit und Resilienz werden einem Käufer meist als Dokumente verkauft: ein Penetration-Test-PDF, ein ISO-Zertifikat, eine Zeile in einer Ausschreibung, die bankentauglich sagt. Diese sind notwendig. Sie sind nicht das, was ein Regulator prüft, wenn tatsächlich eine Überprüfung der operativen Resilienz stattfindet. Unter dem Digital Operational Resilience Act und der NIS2-Richtlinie muss ein Betreiber zeigen, dass seine kritischen Plattformen sicher scheitern, auf einer bekannten Uhr wiederherstellen und Belege hinterlassen. Wir bilden unsere Plattform-Kontrollen auf diese beiden Regime und die Standards darunter ab (ISO 27001, ISO 22301, GDPR Artikel 32 und 33, mit dem EU AI Act und dem Cyber Resilience Act voraus) und veröffentlichen die Eigenschaften, die die Abbildung real machen: geschlossen scheitern als Voreinstellung, geringstes Privileg durch den Build über rund 86 Controller durchgesetzt, eine manipulationssichere Audit-Spur, die durch 226.000 Anfragen hielt, tenantweises Point-in-Time-Restore und Lieferketten-Hygiene, abgesichert durch rund 1.100 Tests bei jedem Merge. Plus eine ehrliche Zeile, was eine Plattform nicht allein tun kann.',
    },
    fr: {
      title: 'Résilience et sécurité comme propriétés opérationnelles',
      subtitle: 'Ce que nous figeons pour qu\'une plateforme de lending tienne sous DORA, pas seulement dans un certificat.',
      lede: 'La sécurité et la résilience sont en général vendues à un acheteur comme des documents: un PDF de test d\'intrusion, un certificat ISO, une ligne dans un appel d\'offres qui dit de niveau bancaire. Ils sont nécessaires. Ils ne sont pas ce qu\'un régulateur teste quand une revue de résilience opérationnelle a réellement lieu. Sous le Digital Operational Resilience Act et la directive NIS2, un opérateur doit montrer que ses plateformes critiques échouent en sécurité, se rétablissent sur une horloge connue et laissent des preuves. Nous mettons nos contrôles au niveau plateforme en correspondance avec ces deux régimes et les standards en dessous (ISO 27001, ISO 22301, GDPR Articles 32 et 33, avec le EU AI Act et le Cyber Resilience Act devant), et nous publions les propriétés qui rendent la correspondance réelle: échouer fermé par défaut, moindre privilège imposé par le build sur environ 86 contrôleurs, une piste d\'audit infalsifiable qui a tenu à travers 226 000 requêtes, restauration point-in-time par tenant, et hygiène de la chaîne d\'approvisionnement gardée par environ 1 100 tests à chaque fusion. Plus une ligne honnête sur ce qu\'une plateforme ne peut pas faire seule.',
    },
    it: {
      title: 'Resilienza e sicurezza come proprietà operative',
      subtitle: 'Cosa fissiamo affinché una piattaforma di lending regga sotto DORA, non solo in un certificato.',
      lede: 'Sicurezza e resilienza vengono di solito vendute a un acquirente come documenti: un PDF di penetration test, un certificato ISO, una riga in una gara che dice di livello bancario. Sono necessari. Non sono ciò che un regolatore verifica quando avviene davvero una revisione di resilienza operativa. Sotto il Digital Operational Resilience Act e la direttiva NIS2, un operatore deve mostrare che le sue piattaforme critiche falliscono in sicurezza, si ripristinano su un orologio noto e lasciano prove. Mappiamo i nostri controlli a livello di piattaforma su questi due regimi e sugli standard sotto di essi (ISO 27001, ISO 22301, GDPR Articoli 32 e 33, con l\'EU AI Act e il Cyber Resilience Act davanti), e pubblichiamo le proprietà che rendono reale la mappatura: fallire chiuso di default, privilegio minimo imposto dalla build su circa 86 controller, una traccia di audit a prova di manomissione che ha retto attraverso 226.000 richieste, ripristino point-in-time per tenant, e igiene della catena di fornitura protetta da circa 1.100 test a ogni merge. Più una riga onesta su cosa una piattaforma non può fare da sola.',
    },
  },
  {
    slug: 'api-and-mcp-by-design',
    date: '2026-05-29',
    minutes: 12,
    en: {
      title: 'API and MCP by design',
      subtitle: 'An interface a machine can drive, with the same isolation, permissions, and audit the screen has.',
      lede: 'Two claims show up in almost every vendor conversation now: we have an API, and we have an AI roadmap. Both are usually true and usually shallow. An API that wraps a few reports, and an agent that screen-scrapes the same screen a human uses, are bolt-ons that inherit none of the guarantees the core was built with. We took a different stance: the interface a machine drives is the same core the screen drives, governed by the same rules. We walk through one core with three front doors; an API proven to 226,000 requests at zero failures; a Model Context Protocol catalogue of around 11 tenant-scoped, audited tools (list a partner\'s contracts, fetch a scoring result, draft an offer, query who changed a contract) with a worked end-to-end example; an in-app assistant of around 12 tools across 6 pages where every write waits for a human to confirm; and a deterministic workflow engine of 14 task definitions and 3 flows where the model proposes and the core disposes.',
    },
    ro: {
      title: 'API și MCP by design',
      subtitle: 'O interfață pe care o poate conduce o mașină, cu aceeași izolare, permisiuni și audit ca ecranul.',
      lede: 'Două afirmații apar acum în aproape fiecare conversație cu un furnizor: avem un API, și avem un roadmap de AI. Ambele sunt de regulă adevărate și de regulă superficiale. Un API care învelește câteva rapoarte, și un agent care face screen-scraping pe același ecran pe care îl folosește un om, sunt adăugiri lipite care nu moștenesc niciuna dintre garanțiile cu care a fost construit nucleul. Noi am luat o poziție diferită: interfața pe care o conduce o mașină este același nucleu pe care îl conduce ecranul, guvernat de aceleași reguli. Parcurgem un nucleu cu trei uși de intrare; un API dovedit la 226.000 de request-uri cu zero eșecuri; un catalog Model Context Protocol de aproximativ 11 unelte scopate pe tenant și auditate (listează contractele unui partener, ia un rezultat de scoring, schițează o ofertă, interoghează cine a schimbat un contract) cu un exemplu concret end-to-end; un asistent în aplicație de aproximativ 12 unelte pe 6 pagini unde fiecare scriere așteaptă confirmarea unui om; și un motor de workflow determinist cu 14 definiții de task și 3 fluxuri unde modelul propune și nucleul dispune.',
    },
    de: {
      title: 'API und MCP by design',
      subtitle: 'Eine Schnittstelle, die eine Maschine bedienen kann, mit derselben Isolation, Berechtigung und Audit wie der Bildschirm.',
      lede: 'Zwei Aussagen tauchen mittlerweile in fast jedem Anbietergespräch auf: wir haben eine API, und wir haben eine KI-Roadmap. Beide sind meist wahr und meist oberflächlich. Eine API, die ein paar Berichte umhüllt, und ein Agent, der denselben Bildschirm abgreift, den ein Mensch benutzt, sind Aufsätze, die keine der Garantien erben, mit denen der Kern gebaut wurde. Wir haben eine andere Haltung eingenommen: die Schnittstelle, die eine Maschine bedient, ist derselbe Kern, den der Bildschirm bedient, geregelt von denselben Regeln. Wir gehen einen Kern mit drei Eingangstüren durch; eine API, bewiesen bis 226.000 Anfragen bei null Fehlern; einen Model-Context-Protocol-Katalog von rund 11 tenant-begrenzten, auditierten Werkzeugen (die Verträge eines Partners auflisten, ein Scoring-Ergebnis abrufen, ein Angebot entwerfen, abfragen, wer einen Vertrag geändert hat) mit einem durchgespielten End-to-End-Beispiel; einen Assistenten in der Anwendung von rund 12 Werkzeugen über 6 Seiten, wo jede Schreibaktion auf die Bestätigung eines Menschen wartet; und eine deterministische Workflow-Engine von 14 Task-Definitionen und 3 Flüssen, wo das Modell vorschlägt und der Kern verfügt.',
    },
    fr: {
      title: 'API et MCP by design',
      subtitle: 'Une interface qu\'une machine peut piloter, avec la même isolation, les mêmes permissions et le même audit que l\'écran.',
      lede: 'Deux affirmations apparaissent désormais dans presque chaque conversation avec un fournisseur: nous avons une API, et nous avons une feuille de route IA. Les deux sont en général vraies et en général superficielles. Une API qui enveloppe quelques rapports, et un agent qui fait du screen-scraping sur le même écran qu\'un humain utilise, sont des ajouts rapportés qui n\'héritent d\'aucune des garanties avec lesquelles le cœur a été bâti. Nous avons pris une posture différente: l\'interface qu\'une machine pilote est le même cœur que pilote l\'écran, gouverné par les mêmes règles. Nous parcourons un cœur avec trois portes d\'entrée; une API prouvée jusqu\'à 226 000 requêtes à zéro échec; un catalogue Model Context Protocol d\'environ 11 outils cantonnés par tenant et audités (lister les contrats d\'un partenaire, récupérer un résultat de scoring, rédiger une offre, interroger qui a changé un contrat) avec un exemple concret de bout en bout; un assistant dans l\'application d\'environ 12 outils sur 6 pages où chaque écriture attend la confirmation d\'un humain; et un moteur de workflow déterministe de 14 définitions de tâche et 3 flux où le modèle propose et le cœur dispose.',
    },
    it: {
      title: 'API e MCP by design',
      subtitle: 'Un\'interfaccia che una macchina può guidare, con lo stesso isolamento, permessi e audit dello schermo.',
      lede: 'Due affermazioni compaiono ormai in quasi ogni conversazione con un fornitore: abbiamo un API, e abbiamo una roadmap IA. Entrambe sono di solito vere e di solito superficiali. Un API che avvolge qualche report, e un agente che fa screen-scraping sullo stesso schermo che usa un umano, sono aggiunte posticce che non ereditano nessuna delle garanzie con cui è stato costruito il nucleo. Noi abbiamo preso una postura diversa: l\'interfaccia che una macchina guida è lo stesso nucleo che guida lo schermo, governato dalle stesse regole. Percorriamo un nucleo con tre porte d\'ingresso; un API provata fino a 226.000 richieste a zero fallimenti; un catalogo Model Context Protocol di circa 11 strumenti circoscritti per tenant e auditati (elencare i contratti di un partner, recuperare un risultato di scoring, redigere un\'offerta, interrogare chi ha cambiato un contratto) con un esempio concreto end-to-end; un assistente nell\'applicazione di circa 12 strumenti su 6 pagine dove ogni scrittura attende la conferma di un umano; e un motore di workflow deterministico di 14 definizioni di task e 3 flussi dove il modello propone e il nucleo dispone.',
    },
  },
  {
    slug: 'residual-value-data-object',
    date: '2026-05-27',
    minutes: 14,
    en: {
      title: 'The residual value data object',
      subtitle: 'A builder\'s specification for European motor finance in 2026.',
      lede: 'European motor finance is investing heavily in better residual value forecasting. AI, machine learning, VIN-level modelling, scenario engines: the rhetoric is now industry-wide. The investment is broadly right. The framing is incomplete. A residual value model in 2026 is bounded above by the residual value data object beneath it. Most operators are running a 2014 object against a 2026 problem. We publish here a reference object for European motor finance: nine field groups, two non-negotiable conventions, and typed attachments for the instruments that distribute residual value risk today.',
    },
    ro: {
      title: 'Obiectul de date al valorii reziduale',
      subtitle: 'O specificație de constructor pentru finanțarea auto europeană în 2026.',
      lede: 'Finanțarea auto europeană investește masiv în prognoze mai bune ale valorii reziduale. IA, machine learning, modelare la nivel VIN, motoare de scenarii: retorica este acum la nivel de industrie. Investiția este în mare parte corectă. Cadrul este incomplet. Un model de valoare reziduală în 2026 este plafonat de obiectul de date al valorii reziduale de sub el. Majoritatea operatorilor rulează un obiect din 2014 împotriva unei probleme din 2026. Publicăm aici un obiect de referință pentru finanțarea auto europeană: nouă grupuri de câmpuri, două convenții non-negociabile și atașamente tipizate pentru instrumentele care distribuie riscul valorii reziduale astăzi.'
    },
    de: {
      title: 'Das Restwert-Datenobjekt',
      subtitle: 'Eine Builder-Spezifikation für die europäische Autofinanzierung 2026.',
      lede: 'Die europäische Autofinanzierung investiert massiv in bessere Restwertprognosen. KI, maschinelles Lernen, VIN-Level-Modellierung, Szenario-Engines: Die Rhetorik ist nun branchenweit. Die Investition ist im Großen und Ganzen richtig. Der Rahmen ist unvollständig. Ein Restwertmodell im Jahr 2026 ist nach oben begrenzt durch das Restwert-Datenobjekt darunter. Die meisten Betreiber führen ein Objekt von 2014 gegen ein Problem von 2026 aus. Wir veröffentlichen hier ein Referenzobjekt für die europäische Autofinanzierung: neun Feldgruppen, zwei nicht verhandelbare Konventionen und typisierte Anhänge für die Instrumente, die heute Restwertrisiko verteilen.',
    },
    fr: {
      title: 'L\'objet de données de valeur résiduelle',
      subtitle: 'Une spécification de constructeur pour le financement auto européen en 2026.',
      lede: 'Le financement auto européen investit massivement dans de meilleures prévisions de valeur résiduelle. IA, machine learning, modélisation au niveau VIN, moteurs de scénarios : la rhétorique est désormais à l\'échelle de l\'industrie. L\'investissement est largement juste. Le cadre est incomplet. Un modèle de valeur résiduelle en 2026 est borné supérieurement par l\'objet de données de valeur résiduelle qui le sous-tend. La plupart des opérateurs font tourner un objet de 2014 contre un problème de 2026. Nous publions ici un objet de référence pour le financement auto européen : neuf groupes de champs, deux conventions non négociables, et des attachements typés pour les instruments qui distribuent aujourd\'hui le risque de valeur résiduelle.',
    },
    it: {
      title: 'L\'oggetto dati del valore residuo',
      subtitle: 'Una specifica da costruttore per la finanza auto europea nel 2026.',
      lede: 'La finanza auto europea sta investendo massicciamente in migliori previsioni del valore residuo. IA, machine learning, modellazione a livello VIN, motori di scenario: la retorica è ora a livello di settore. L\'investimento è in gran parte corretto. L\'inquadramento è incompleto. Un modello di valore residuo nel 2026 è limitato superiormente dall\'oggetto dati del valore residuo che gli sta sotto. La maggior parte degli operatori fa girare un oggetto del 2014 contro un problema del 2026. Pubblichiamo qui un oggetto di riferimento per la finanza auto europea: nove gruppi di campi, due convenzioni non negoziabili e allegati tipizzati per gli strumenti che oggi distribuiscono il rischio del valore residuo.',
    },
  },
  {
    slug: 'migration-playbook',
    date: '2026-05-26',
    minutes: 10,
    en: {
      title: 'How we migrate a portfolio into Innovia',
      subtitle: 'A seven-phase method for mid-tier replatform projects.',
      lede: 'The hardest part of replacing a lending platform is not running the new one. It is moving the portfolio of an operator that has been running for fifteen years on a legacy system. We publish here the seven-phase method we use, the deliverables we ship at each phase, and the honest scope where this method works: portfolios from a few thousand contracts up to five hundred thousand.',
    },
    ro: {
      title: 'Cum migrăm un portofoliu în Innovia',
      subtitle: 'O metodă în șapte faze pentru proiecte mid-tier de replatform.',
      lede: 'Partea cea mai grea a înlocuirii unei platforme de lending nu este să o rulezi pe cea nouă. Este să muți portofoliul unui operator care a funcționat cincisprezece ani pe un sistem legacy. Publicăm aici metoda în șapte faze pe care o folosim, documentele pe care le livrăm la fiecare fază și scopul onest în care această metodă funcționează: portofolii de la câteva mii de contracte până la cinci sute de mii.',
    },
    de: {
      title: 'Wie wir ein Portfolio nach Innovia migrieren',
      subtitle: 'Eine Sieben-Phasen-Methode für Mid-Tier-Replatform-Projekte.',
      lede: 'Der schwierigste Teil beim Ersetzen einer Lending-Plattform ist nicht, die neue zu betreiben. Es ist, das Portfolio eines Betreibers zu verschieben, der fünfzehn Jahre auf einem Legacy-System läuft. Wir veröffentlichen hier die Sieben-Phasen-Methode, die wir verwenden, die Dokumente, die wir in jeder Phase liefern, und den ehrlichen Umfang, in dem diese Methode funktioniert: Portfolios von einigen tausend Verträgen bis fünfhunderttausend.',
    },
    fr: {
      title: 'Comment nous migrons un portefeuille vers Innovia',
      subtitle: 'Une méthode en sept phases pour les projets de replatform mid-tier.',
      lede: 'La partie la plus difficile du remplacement d\'une plateforme de lending n\'est pas de faire tourner la nouvelle. C\'est de déplacer le portefeuille d\'un opérateur qui tourne depuis quinze ans sur un système legacy. Nous publions ici la méthode en sept phases que nous utilisons, les documents que nous livrons à chaque phase, et le périmètre honnête dans lequel cette méthode fonctionne: des portefeuilles de quelques milliers de contrats jusqu\'à cinq cent mille.',
    },
    it: {
      title: 'Come migriamo un portafoglio in Innovia',
      subtitle: 'Un metodo a sette fasi per progetti di replatform mid-tier.',
      lede: 'La parte più difficile della sostituzione di una piattaforma di lending non è far girare quella nuova. È spostare il portafoglio di un operatore che gira da quindici anni su un sistema legacy. Pubblichiamo qui il metodo a sette fasi che usiamo, i documenti che consegniamo a ogni fase, e l\'ambito onesto in cui questo metodo funziona: portafogli da qualche migliaio di contratti fino a cinquecentomila.',
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
