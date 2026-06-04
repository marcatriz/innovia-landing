import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackLink from '@/components/BackLink';
import { Link, type AppLocale } from '@/i18n/routing';

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <BackLink href="/" labelKey="backToHome" />
        <ChangelogHero locale={locale} />
        <ChangelogEntries locale={locale as AppLocale} />
        <Footer />
      </main>
    </>
  );
}

function ChangelogHero({ locale }: { locale: string }) {
  const t = useTranslations('changelog');
  return (
    <section className="bg-tint">
      <div className="container-x max-w-3xl py-16">
        <p className="eyebrow mb-4">{t('eyebrow')}</p>
        <h1 className="text-h1 lg:text-display mb-4 text-ink-700">{t('title')}</h1>
        <p className="text-body-lg text-slate-500">{t('subtitle')}</p>
        <p className="mt-4 text-body text-slate-500">{t('cadence')}</p>
      </div>
    </section>
  );
}

interface ChangelogEntry {
  date: string;
  headline: Record<AppLocale, string>;
  highlights: Record<AppLocale, string[]>;
}

const ENTRIES: ChangelogEntry[] = [
  {
    date: '2026-06-03',
    headline: {
      en: 'Cross-line obligor exposure, origination governance hardened, regulatory analytics, and a verifiable audit seal.',
      ro: 'Expunere cross-line a obligorului, guvernanță de originare întărită, analitică regulatorie și un sigiliu de audit verificabil.',
      de: 'Cross-line-Obligor-Exposure, gehärtete Origination-Governance, regulatorische Analytik und ein verifizierbares Audit-Siegel.',
      fr: 'Exposition de l\'obligé sur toutes les lignes, gouvernance d\'origination renforcée, analytique réglementaire et un sceau d\'audit vérifiable.',
      it: 'Esposizione dell\'obbligato su tutte le linee, governance di origination rafforzata, analitica regolamentare e un sigillo di audit verificabile.',
    },
    highlights: {
      en: [
        'Obligor 360: a single borrower\'s full lending footprint on one screen, aggregating exposure across asset finance, consumer, pawn, and SME against the partner ceiling with live headroom.',
        'The single-obligor limit is enforced as a hard stop at decision time, so exposure cannot be spread past the ceiling across product lines.',
        'Origination governance hardened: four-eyes approval with mandate checks, decision hard-stops, pricing guardrails, exposure and sector-concentration limits, and an automated offer-expiry job.',
        'Tamper-evident audit seal: the audit log sealed into a SHA-256 hash chain, with an endpoint that recomputes it from the live rows and names the exact row if anything was altered.',
        'Regulatory analytics: IFRS 9 staging and expected credit loss, a stress-testing engine, and COREP, FINREP, AnaCredit, and EBA NPL report scaffolds, with pawn portfolio-at-risk and origination funnels.',
        'Governance extended to the newer lines: SME scoring on entry to analysis, a pawn collateral catalogue with an AML gate and four-eyes on high-value activation, and consumer decisioning controls.',
        'Tenant isolation deepened: a schema migration to direct tenant columns on downstream tables, a group-level cross-tenant overview for a group COO, and twenty-five isolation tests on every build.',
        'Proven under load: 226,000 requests at zero failures with no cross-tenant audit leakage, plus a seven-phase portfolio migration path for mid-tier replatform projects.',
      ],
      ro: [
        'Obligor 360: întreaga amprentă de creditare a unui singur debitor pe un singur ecran, agregând expunerea pe asset finance, consumer, amanet și SME față de plafonul partenerului, cu headroom în timp real.',
        'Limita pe debitor unic este impusă ca hard-stop la momentul deciziei, astfel încât expunerea să nu poată fi împrăștiată peste plafon pe linii de produs.',
        'Guvernanța originării întărită: aprobare în patru ochi cu verificarea mandatului, hard-stops la decizie, limite de preț, limite de expunere și de concentrare pe sector, și un job automat de expirare a ofertei.',
        'Sigiliu de audit rezistent la falsificare: jurnalul de audit sigilat într-un lanț de hash SHA-256, cu un endpoint care îl recalculează din rândurile vii și numește rândul exact dacă ceva a fost alterat.',
        'Analitică regulatorie: încadrare IFRS 9 și pierdere de credit așteptată, un motor de stress-testing, și schele de raportare COREP, FINREP, AnaCredit și EBA NPL, cu portfolio-at-risk pe amanet și pâlnii de originare.',
        'Guvernanță extinsă la liniile noi: scoring SME la intrarea în analiză, un catalog de colateral pentru amanet cu poartă AML și patru ochi la activarea de valoare mare, și controale de decizie pe consumer.',
        'Izolare pe tenant adâncită: o migrare de schemă către coloane de tenant directe pe tabelele din aval, o vedere de grup cross-tenant pentru un Group COO, și douăzeci și cinci de teste de izolare la fiecare build.',
        'Dovedit sub sarcină: 226.000 de request-uri cu zero eșecuri și fără scurgeri de audit cross-tenant, plus o cale de migrare a portofoliului în șapte faze pentru proiecte mid-tier de replatform.',
      ],
      de: [
        'Obligor 360: die gesamte Kreditbeziehung eines einzelnen Kreditnehmers auf einem Bildschirm, mit Aggregation der Exposure über Asset Finance, Consumer, Pfand und SME gegen das Partnerlimit, mit Echtzeit-Spielraum.',
        'Das Einzelobligor-Limit wird als Hard-Stop zum Entscheidungszeitpunkt durchgesetzt, sodass Exposure nicht über Produktlinien hinweg über das Limit hinaus verteilt werden kann.',
        'Origination-Governance gehärtet: Vier-Augen-Freigabe mit Mandatsprüfung, Entscheidungs-Hard-Stops, Preisleitplanken, Exposure- und Sektorkonzentrationslimits und ein automatischer Angebotsablauf-Job.',
        'Manipulationssicheres Audit-Siegel: das Audit-Log in einer SHA-256-Hash-Kette versiegelt, mit einem Endpunkt, der es aus den Live-Zeilen nachrechnet und die genaue Zeile benennt, falls etwas verändert wurde.',
        'Regulatorische Analytik: IFRS-9-Stufenzuordnung und erwarteter Kreditverlust, eine Stresstest-Engine sowie COREP-, FINREP-, AnaCredit- und EBA-NPL-Berichtsgerüste, mit Portfolio-at-Risk für Pfand und Origination-Funnels.',
        'Governance auf die neueren Linien ausgeweitet: SME-Scoring beim Eintritt in die Analyse, ein Pfand-Sicherheitenkatalog mit AML-Gate und Vier-Augen-Prinzip bei hochwertiger Aktivierung, und Consumer-Entscheidungskontrollen.',
        'Tenant-Isolation vertieft: eine Schema-Migration zu direkten Tenant-Spalten auf nachgelagerten Tabellen, eine gruppenweite Cross-Tenant-Übersicht für einen Group COO, und fünfundzwanzig Isolationstests bei jedem Build.',
        'Unter Last bewiesen: 226.000 Anfragen bei null Fehlern ohne Cross-Tenant-Audit-Leck, plus ein siebenphasiger Portfolio-Migrationspfad für Mid-Tier-Replatform-Projekte.',
      ],
      fr: [
        'Obligor 360 : toute l\'empreinte de crédit d\'un même emprunteur sur un seul écran, agrégeant l\'exposition sur asset finance, consumer, prêt sur gage et SME face au plafond du partenaire, avec marge en temps réel.',
        'La limite par obligé unique est imposée comme arrêt strict au moment de la décision, de sorte que l\'exposition ne puisse pas être répartie au-delà du plafond entre les lignes de produit.',
        'Gouvernance d\'origination renforcée : approbation à quatre yeux avec vérification du mandat, arrêts stricts à la décision, garde-fous de prix, limites d\'exposition et de concentration sectorielle, et une tâche automatique d\'expiration des offres.',
        'Sceau d\'audit infalsifiable : le journal d\'audit scellé dans une chaîne de hachage SHA-256, avec un endpoint qui le recalcule à partir des lignes vivantes et nomme la ligne exacte si quelque chose a été altéré.',
        'Analytique réglementaire : classement IFRS 9 et perte de crédit attendue, un moteur de stress-test, et des échafaudages de reporting COREP, FINREP, AnaCredit et EBA NPL, avec portfolio-at-risk sur le prêt sur gage et entonnoirs d\'origination.',
        'Gouvernance étendue aux lignes plus récentes : scoring SME à l\'entrée en analyse, un catalogue de collatéral pour le prêt sur gage avec porte AML et quatre yeux à l\'activation de valeur élevée, et contrôles de décision consumer.',
        'Isolation par tenant approfondie : une migration de schéma vers des colonnes de tenant directes sur les tables en aval, une vue de groupe cross-tenant pour un Group COO, et vingt-cinq tests d\'isolation à chaque build.',
        'Prouvé sous charge : 226 000 requêtes à zéro échec sans fuite d\'audit cross-tenant, plus une méthode de migration de portefeuille en sept phases pour les projets de replatform mid-tier.',
      ],
      it: [
        'Obligor 360: l\'intera impronta creditizia di un singolo mutuatario su una sola schermata, con aggregazione dell\'esposizione su asset finance, consumer, pegno e SME a fronte del plafond del partner, con margine in tempo reale.',
        'Il limite per singolo obbligato è imposto come hard-stop al momento della decisione, così che l\'esposizione non possa essere distribuita oltre il plafond tra le linee di prodotto.',
        'Governance di origination rafforzata: approvazione a quattro occhi con verifica del mandato, hard-stop alla decisione, guardrail di prezzo, limiti di esposizione e di concentrazione settoriale, e un job automatico di scadenza dell\'offerta.',
        'Sigillo di audit a prova di manomissione: il log di audit sigillato in una catena di hash SHA-256, con un endpoint che lo ricalcola dalle righe vive e nomina la riga esatta se qualcosa è stato alterato.',
        'Analitica regolamentare: staging IFRS 9 e perdita attesa su crediti, un motore di stress test, e scaffold di reporting COREP, FINREP, AnaCredit ed EBA NPL, con portfolio-at-risk sul pegno e funnel di origination.',
        'Governance estesa alle linee più recenti: scoring SME all\'ingresso in analisi, un catalogo di collaterale per il pegno con gate AML e quattro occhi all\'attivazione di valore elevato, e controlli di decisione consumer.',
        'Isolamento per tenant approfondito: una migrazione di schema verso colonne tenant dirette sulle tabelle a valle, una vista di gruppo cross-tenant per un Group COO, e venticinque test di isolamento a ogni build.',
        'Provato sotto carico: 226.000 richieste a zero fallimenti senza fughe di audit cross-tenant, più un percorso di migrazione del portafoglio in sette fasi per progetti di replatform mid-tier.',
      ],
    },
  },
  {
    date: '2026-05-23',
    headline: {
      en: 'Bureau adapter chain, AI document extraction, MCP server, GDPR DSAR, outbound webhooks, process mining, tax engine.',
      ro: 'Bureau adapter chain, extracție document AI, server MCP, GDPR DSAR, webhook-uri outbound, process mining, motor de taxe.',
      de: 'Bureau-Adapter-Chain, KI-Dokumentenextraktion, MCP-Server, DSGVO-DSAR, Outbound-Webhooks, Process Mining, Steuermaschine.',
      fr: 'Chaîne d\'adaptateurs bureau, extraction documentaire IA, serveur MCP, DSAR RGPD, webhooks sortants, process mining, moteur fiscal.',
      it: 'Catena di adattatori bureau, estrazione documenti IA, server MCP, DSAR GDPR, webhook in uscita, process mining, motore fiscale.',
    },
    highlights: {
      en: [
        'Country-pluggable credit bureau adapter with UK, RO, and EU corporate scaffolds; D&B Direct+ Failure Score wired under a two-stage activation flag.',
        'AI document extraction over images and PDFs via the Anthropic vision API, with structured-field output persisted alongside the file.',
        'Model Context Protocol server with eleven scoped tools, so an agent can read contracts, partners, dashboard KPIs, and the audit log under a controlled scope grant.',
        'GDPR Data Subject Access Request intake covering Articles 15 through 22, with per-row erasure audit log.',
        'Outbound webhook subscriptions with HMAC-SHA256 signatures and a tenant-scoped retry surface.',
        'Continuous PEP and sanctions rescreening on a weekly Quartz cron over the immutable AML check log.',
        'BNPL merchant onboarding: merchant identity, product binding, and a settlement ledger for the merchant channel.',
        'Polymorphic asset hierarchy phase 1 lands alongside the existing vehicle table; equipment and real-estate subtypes ready for migration when an equipment-pure design partner arrives.',
        'Process mining over the immutable audit log: funnel discovery and stage dwell-time available at /admin/process-mining.',
        'Tax rule engine with intra-EU reverse charge, export exemption, and twenty-five domestic VAT rates across EU and UK.',
      ],
      ro: [
        'Adapter de credit bureau pluggable pe țară cu schele UK, RO, și EU corporate; D&B Direct+ Failure Score conectat sub un flag de activare în două etape.',
        'Extracție document AI peste imagini și PDF-uri prin API-ul Anthropic vision, cu rezultat în câmpuri structurate persistat lângă fișier.',
        'Server Model Context Protocol cu unsprezece tool-uri scopate, încât un agent să citească contracte, parteneri, KPI dashboard și audit log sub un grant de scope controlat.',
        'GDPR DSAR intake care acoperă Articolele 15-22, cu audit log de ștergere per rând.',
        'Subscripții webhook outbound cu semnături HMAC-SHA256 și o suprafață de retry scopată per tenant.',
        'Rescreening continuu PEP și sancțiuni pe un cron Quartz săptămânal peste log-ul imutabil de AML check.',
        'Onboarding merchant BNPL: identitate merchant, binding de produs, și un ledger de settlement pentru canalul merchant.',
        'Ierarhie polimorfă de active faza 1 aterizează lângă tabela de vehicule; subtipuri echipament și imobiliare gata pentru migrare când apare un design partner pur-echipament.',
        'Process mining peste audit log-ul imutabil: funnel discovery și dwell-time pe stage disponibile la /admin/process-mining.',
        'Motor de reguli fiscale cu reverse charge intra-EU, scutire export, și douăzeci și cinci de cote VAT domestice peste EU și UK.',
      ],
      de: [
        'Länderspezifisch erweiterbare Credit-Bureau-Adapter mit Gerüsten für UK, RO und EU-Unternehmen; D&B Direct+ Failure Score über einen zweistufigen Aktivierungs-Flag angebunden.',
        'KI-Dokumentenextraktion über Bilder und PDFs via Anthropic Vision API, mit strukturiertem Feld-Output neben der Datei gespeichert.',
        'Model Context Protocol Server mit elf scope-begrenzten Tools, sodass ein Agent Verträge, Partner, Dashboard-KPIs und das Audit-Log unter einer kontrollierten Scope-Vergabe lesen kann.',
        'DSGVO-DSAR-Aufnahme nach Artikeln 15 bis 22, mit Löschungs-Audit-Log pro Zeile.',
        'Outbound-Webhook-Subscriptions mit HMAC-SHA256-Signaturen und einer tenant-scopierten Retry-Oberfläche.',
        'Kontinuierliches PEP- und Sanktionen-Rescreening über einen wöchentlichen Quartz-Cron über das unveränderliche AML-Check-Log.',
        'BNPL-Händler-Onboarding: Händleridentität, Produktbindung und ein Settlement-Ledger für den Händlerkanal.',
        'Polymorphe Asset-Hierarchie Phase 1 landet neben der bestehenden Fahrzeugtabelle; Equipment- und Immobilien-Subtypen bereit zur Migration, wenn ein equipment-pur Design-Partner erscheint.',
        'Process Mining über das unveränderliche Audit-Log: Funnel Discovery und Stage-Dwell-Time verfügbar unter /admin/process-mining.',
        'Steuerregel-Engine mit intra-EU Reverse Charge, Export-Befreiung und fünfundzwanzig inländischen Mehrwertsteuersätzen für EU und UK.',
      ],
      fr: [
        'Chaîne d\'adaptateurs bureau pluggable par pays avec échafaudages UK, RO et UE entreprise ; D&B Direct+ Failure Score câblé sous un flag d\'activation à deux étapes.',
        'Extraction documentaire IA sur images et PDF via l\'API Anthropic vision, avec sortie en champs structurés persistée à côté du fichier.',
        'Serveur Model Context Protocol avec onze outils à portée limitée, pour qu\'un agent puisse lire contrats, partenaires, KPI tableau de bord et journal d\'audit sous une attribution de portée contrôlée.',
        'Intake DSAR RGPD couvrant les articles 15 à 22, avec journal d\'audit d\'effacement par ligne.',
        'Abonnements webhook sortants avec signatures HMAC-SHA256 et une surface de réessai à portée tenant.',
        'Re-screening continu PEP et sanctions sur un cron Quartz hebdomadaire au-dessus du journal d\'AML check immuable.',
        'Onboarding marchand BNPL : identité marchand, binding produit, et un journal de règlement pour le canal marchand.',
        'Hiérarchie d\'actifs polymorphe phase 1 atterrit à côté de la table de véhicules existante ; sous-types équipement et immobilier prêts à la migration quand un design partner pur-équipement arrive.',
        'Process mining au-dessus du journal d\'audit immuable : découverte de funnel et temps de séjour par étape disponibles sur /admin/process-mining.',
        'Moteur de règles fiscales avec reverse charge intra-UE, exemption export, et vingt-cinq taux TVA domestiques pour UE et UK.',
      ],
      it: [
        'Catena di adattatori credit bureau pluggable per paese con scaffold per UK, RO e UE corporate; D&B Direct+ Failure Score collegato sotto un flag di attivazione a due stadi.',
        'Estrazione documenti IA su immagini e PDF tramite l\'API Anthropic vision, con output a campi strutturati persistito accanto al file.',
        'Server Model Context Protocol con undici strumenti a portata limitata, affinché un agente possa leggere contratti, partner, KPI cruscotto e log di audit sotto una concessione di portata controllata.',
        'Intake DSAR GDPR che copre gli Articoli da 15 a 22, con log di audit cancellazione per riga.',
        'Sottoscrizioni webhook in uscita con firme HMAC-SHA256 e una superficie di retry tenant-scopata.',
        'Re-screening continuo PEP e sanzioni su un cron Quartz settimanale sopra il log immutabile di AML check.',
        'Onboarding merchant BNPL: identità merchant, binding di prodotto, e un ledger di settlement per il canale merchant.',
        'Gerarchia di asset polimorfa fase 1 atterra accanto alla tabella veicoli esistente; sottotipi equipment e immobiliare pronti alla migrazione quando arriva un design partner equipment-puro.',
        'Process mining sopra il log di audit immutabile: scoperta del funnel e tempo di permanenza per stage disponibili su /admin/process-mining.',
        'Motore di regole fiscali con reverse charge intra-UE, esenzione export, e venticinque aliquote IVA domestiche per UE e UK.',
      ],
    },
  },
];

function ChangelogEntries({ locale }: { locale: AppLocale }) {
  const t = useTranslations('changelog');
  return (
    <section className="bg-paper py-20">
      <div className="container-x max-w-3xl space-y-12">
        {ENTRIES.map((entry) => {
          const formatted = new Date(entry.date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return (
            <article key={entry.date} className="border-l-4 border-teal-700 pl-6">
              <div className="mb-2 text-caption uppercase tracking-wider text-slate-500">
                {formatted}
              </div>
              <h2 className="text-h3 text-ink-700 mb-3">{entry.headline[locale]}</h2>
              <ul className="space-y-2">
                {entry.highlights[locale].map((h, i) => (
                  <li key={i} className="text-body text-slate-600 leading-relaxed">
                    <span className="text-teal-700">•</span> {h}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
        <div className="rounded-xl bg-tint p-6">
          <p className="text-body-sm text-slate-500">
            {t('whitepapersFooter')}{' '}
            <Link href="/whitepapers" className="text-teal-700 hover:text-teal-900 font-medium">
              {t('whitepapersLink')}
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
