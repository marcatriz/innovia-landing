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
