/**
 * Whitepaper: Regulatory reporting off the booking engine.
 *
 * Argues that IFRS 9 provisions and supervisory returns reconcile to the book
 * by construction when they run on the same engine that books the contract,
 * rather than in a downstream warehouse that drifts. Honest about scope: the
 * scaffolds are real and engine-fed; per-jurisdiction filing is configured.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Honest scope: do not claim turnkey filing for every regime.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function RegulatoryReportingOffTheBookingEngine({ locale }: ContentProps) {
  switch (locale) {
    case 'ro':
      return <Ro />;
    case 'de':
      return <De />;
    case 'fr':
      return <Fr />;
    case 'it':
      return <It />;
    default:
      return <En />;
  }
}

function En() {
  return (
    <div className="prose-paper">
      <p>
        Most lenders produce their regulatory numbers in a stack that sits
        downstream of the systems that run the business. The operational
        platform books the contracts; a separate warehouse and a reporting tool
        turn those into IFRS 9 provisions, COREP and FINREP returns, and the
        rest. The two are reconciled on a clock: monthly, quarterly, the night
        before a submission. The gap between what the book says and what was
        reported is exactly where findings live. We took the other route. The
        regulatory view runs on the same engine that books the contract, so it
        reconciles by construction.
      </p>

      <h2>The same engine, the same number</h2>
      <p>
        Expected credit loss, stage allocation, stress testing, and the report
        scaffolds for supervisory returns all run against the live book, on the
        same engine that originates and services the contracts. The regulatory
        view reads the rows the operations team works in, not a copy of them.
        There is no extract-transform-load step between the contract and the
        provision, so there is no window in which the two can quietly diverge.
      </p>

      <h2>Staging that ties back to the contract event</h2>
      <p>
        A contract lands in Stage 1, 2, or 3 from the actual arrears on its
        actual invoices, and its exposure at default is the financed amount on
        the contract itself. Coverage, the migration matrix, and the largest
        exposures all derive from the same rows. Every figure in the report
        traces back to the contract event that produced it, so the answer to
        show me the book behind this number is a drill-down, not a data request
        to another team next week.
      </p>

      <h2>Why a warehouse drifts and an engine does not</h2>
      <p>
        A separate reporting warehouse is a copy of the book, and copies drift.
        Every copy adds a lag, a mapping that can go stale, and a reconciliation
        someone has to sign. One data model removes the copy. The regulatory
        layer is a read over the operational tables, governed by the same tenant
        isolation and the same audit trail as everything else. This is the
        auditable core as a property: the provision and the contract are the
        same source of truth, observed two ways.
      </p>

      <h2>Honest about scope</h2>
      <p>
        We ship the scaffolds: IFRS 9 ECL and staging, a stress-testing engine,
        and report structures for COREP, FINREP, AnaCredit, and EBA
        non-performing exposures, plus portfolio-at-risk and origination
        funnels. The templates are wired to the engine and populated from the
        live book. The per-jurisdiction submission detail, the exact validation
        rules and filing formats each regime expects, is configured per
        engagement, not claimed as a turnkey filing for every supervisor on day
        one. What is structural is that the numbers come from the book. What is
        configured is how each regulator wants them dressed.
      </p>

      <h2>Why it matters for the segment we serve</h2>
      <p>
        Mid-tier non-bank lenders and captives carry much of the same reporting
        obligation as larger institutions, with a fraction of the back office to
        meet it. A reporting stack that drifts from the book is a standing cost:
        the reconciliation, the explanations, the finding when the tie-out
        fails. Regulatory reporting off the booking engine turns that standing
        cost into a read. Risk and finance stop rebuilding the numbers for every
        submission, and the question a supervisor asks has the same answer the
        operations screen already shows.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Majoritatea creditorilor isi produc cifrele regulatorii intr-un stack
        situat in aval de sistemele care ruleaza business-ul. Platforma
        operationala inregistreaza contractele; un warehouse separat si un
        instrument de raportare le transforma in provizioane IFRS 9, raportari
        COREP si FINREP, si restul. Cele doua se reconciliaza pe un ceas: lunar,
        trimestrial, in noaptea dinaintea unei depuneri. Diferenta dintre ce
        spune cartea si ce s-a raportat e exact locul unde traiesc constatarile.
        Noi am ales cealalta cale. Vederea regulatorie ruleaza pe acelasi motor
        care inregistreaza contractul, deci se reconciliaza prin constructie.
      </p>

      <h2>Acelasi motor, acelasi numar</h2>
      <p>
        Pierderea de credit asteptata, alocarea pe stadii, stress-testing-ul si
        schelele de raportare pentru raportarile de supraveghere ruleaza toate
        pe cartea vie, pe acelasi motor care origineaza si serviseaza
        contractele. Vederea regulatorie citeste randurile in care lucreaza
        echipa de operatiuni, nu o copie a lor. Nu exista un pas de
        extract-transform-load intre contract si provizion, deci nu exista o
        fereastra in care cele doua sa devieze tacut.
      </p>

      <h2>Stadializare care se leaga inapoi de evenimentul de contract</h2>
      <p>
        Un contract ajunge in Stadiul 1, 2 sau 3 din restantele reale de pe
        facturile sale reale, iar expunerea la default este suma finantata de pe
        contractul insusi. Gradul de acoperire, matricea de migrare si cele mai
        mari expuneri deriva toate din aceleasi randuri. Fiecare cifra din
        raport se trage inapoi la evenimentul de contract care a produs-o, asa
        ca raspunsul la arata-mi cartea din spatele acestui numar e un
        drill-down, nu o cerere de date catre alta echipa saptamana viitoare.
      </p>

      <h2>De ce un warehouse deviaza, iar un motor nu</h2>
      <p>
        Un warehouse de raportare separat este o copie a cartii, iar copiile
        deviaza. Fiecare copie adauga un decalaj, o mapare care se poate invechi
        si o reconciliere pe care cineva trebuie sa o semneze. Un singur model
        de date elimina copia. Stratul regulatoriu este o citire peste tabelele
        operationale, guvernata de aceeasi izolare pe tenant si acelasi traseu
        de audit ca tot restul. Acesta este nucleul auditabil ca proprietate:
        provizionul si contractul sunt aceeasi sursa de adevar, observata in
        doua moduri.
      </p>

      <h2>Onesti in privinta scopului</h2>
      <p>
        Livram schelele: IFRS 9 ECL si stadializare, un motor de stress-testing
        si structuri de raportare pentru COREP, FINREP, AnaCredit si expunerile
        neperformante EBA, plus portfolio-at-risk si palnii de originare.
        Sabloanele sunt conectate la motor si populate din cartea vie. Detaliul
        de depunere per jurisdictie, regulile exacte de validare si formatele de
        depunere pe care le asteapta fiecare regim, este configurat per
        angajament, nu pretins ca o depunere la cheie pentru fiecare supervizor
        din prima zi. Ce e structural este ca numerele vin din carte. Ce e
        configurat este cum vrea fiecare regulator sa fie imbracate.
      </p>

      <h2>De ce conteaza pentru segmentul pe care il servim</h2>
      <p>
        Creditorii non-bancari mid-tier si captive-urile poarta mare parte din
        aceeasi obligatie de raportare ca institutiile mai mari, cu o fractiune
        din back office-ul necesar sa o indeplineasca. Un stack de raportare
        care deviaza de la carte este un cost permanent: reconcilierea,
        explicatiile, constatarea cand tie-out-ul esueaza. Raportarea
        regulatorie din motorul care inregistreaza contractele transforma acel
        cost permanent intr-o citire. Riscul si finantele nu mai reconstruiesc
        numerele pentru fiecare depunere, iar intrebarea pe care o pune un
        supervizor are acelasi raspuns pe care ecranul de operatiuni il arata
        deja.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Die meisten Kreditgeber erzeugen ihre regulatorischen Zahlen in einem
        Stack, der den Systemen nachgelagert ist, die das Geschaeft betreiben.
        Die operative Plattform bucht die Vertraege; ein separates Warehouse und
        ein Reporting-Werkzeug machen daraus IFRS-9-Risikovorsorge, COREP- und
        FINREP-Meldungen und den Rest. Beide werden auf einer Uhr abgestimmt:
        monatlich, vierteljaehrlich, in der Nacht vor einer Meldung. Die Luecke
        zwischen dem, was das Buch sagt, und dem, was gemeldet wurde, ist genau
        dort, wo Beanstandungen leben. Wir gingen den anderen Weg. Die
        regulatorische Sicht laeuft auf derselben Engine, die den Vertrag bucht,
        also stimmt sie sich konstruktionsbedingt ab.
      </p>

      <h2>Dieselbe Engine, dieselbe Zahl</h2>
      <p>
        Erwarteter Kreditverlust, Stufenzuordnung, Stresstests und die
        Berichtsgerueste fuer Aufsichtsmeldungen laufen alle gegen das lebende
        Buch, auf derselben Engine, die die Vertraege originiert und bedient.
        Die regulatorische Sicht liest die Zeilen, in denen das Operations-Team
        arbeitet, nicht eine Kopie davon. Es gibt keinen
        Extract-Transform-Load-Schritt zwischen Vertrag und Risikovorsorge,
        also kein Fenster, in dem die beiden lautlos auseinanderlaufen koennen.
      </p>

      <h2>Stufenzuordnung, die auf das Vertragsereignis zurueckgeht</h2>
      <p>
        Ein Vertrag landet in Stufe 1, 2 oder 3 aus dem tatsaechlichen
        Zahlungsverzug auf seinen tatsaechlichen Rechnungen, und sein Exposure
        at Default ist der Finanzierungsbetrag auf dem Vertrag selbst. Deckung,
        die Migrationsmatrix und die groessten Engagements leiten sich alle aus
        denselben Zeilen ab. Jede Zahl im Bericht geht auf das Vertragsereignis
        zurueck, das sie erzeugt hat, sodass die Antwort auf zeig mir das Buch
        hinter dieser Zahl ein Drill-down ist, keine Datenanfrage an ein anderes
        Team naechste Woche.
      </p>

      <h2>Warum ein Warehouse abdriftet und eine Engine nicht</h2>
      <p>
        Ein separates Reporting-Warehouse ist eine Kopie des Buchs, und Kopien
        driften. Jede Kopie fuegt eine Verzoegerung hinzu, eine Zuordnung, die
        veralten kann, und eine Abstimmung, die jemand unterschreiben muss. Ein
        Datenmodell entfernt die Kopie. Die regulatorische Schicht ist ein
        Lesen ueber den operativen Tabellen, geregelt von derselben
        Mandantenisolation und demselben Audit-Trail wie alles andere. Das ist
        der auditierbare Kern als Eigenschaft: Risikovorsorge und Vertrag sind
        dieselbe Quelle der Wahrheit, auf zwei Arten betrachtet.
      </p>

      <h2>Ehrlich zum Umfang</h2>
      <p>
        Wir liefern die Gerueste: IFRS-9-ECL und Stufenzuordnung, eine
        Stresstest-Engine und Berichtsstrukturen fuer COREP, FINREP, AnaCredit
        und notleidende EBA-Engagements, dazu Portfolio-at-Risk und
        Origination-Funnels. Die Vorlagen sind an die Engine angebunden und aus
        dem lebenden Buch befuellt. Das Meldedetail je Jurisdiktion, die genauen
        Validierungsregeln und Einreichungsformate, die jedes Regime erwartet,
        wird je Engagement konfiguriert, nicht als schluesselfertige Einreichung
        fuer jeden Aufseher am ersten Tag behauptet. Strukturell ist, dass die
        Zahlen aus dem Buch kommen. Konfiguriert wird, wie jeder Regulator sie
        gekleidet haben moechte.
      </p>

      <h2>Warum das fuer das Segment zaehlt, das wir bedienen</h2>
      <p>
        Mid-Tier-Nichtbankenfinanzierer und Captives tragen einen Grossteil
        derselben Meldepflicht wie groessere Institute, mit einem Bruchteil des
        Backoffice, um sie zu erfuellen. Ein Reporting-Stack, der vom Buch
        abdriftet, ist ein stehender Kostenfaktor: die Abstimmung, die
        Erklaerungen, die Beanstandung, wenn die Abstimmung scheitert.
        Regulatorisches Reporting aus der Buchungs-Engine verwandelt diesen
        stehenden Kostenfaktor in ein Lesen. Risiko und Finanzen bauen die
        Zahlen nicht mehr fuer jede Meldung neu auf, und die Frage, die ein
        Aufseher stellt, hat dieselbe Antwort, die der Operations-Bildschirm
        bereits zeigt.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        La plupart des prêteurs produisent leurs chiffres réglementaires dans
        une stack en aval des systèmes qui font tourner l&apos;activité. La
        plateforme opérationnelle comptabilise les contrats ; un entrepôt séparé
        et un outil de reporting les transforment en provisions IFRS 9, en états
        COREP et FINREP, et le reste. Les deux sont réconciliés sur une horloge :
        mensuelle, trimestrielle, la nuit avant une remise. L&apos;écart entre
        ce que dit le livre et ce qui a été déclaré est exactement là où vivent
        les constats. Nous avons pris l&apos;autre route. La vue réglementaire
        tourne sur le même moteur qui comptabilise le contrat, donc elle se
        réconcilie par construction.
      </p>

      <h2>Le même moteur, le même chiffre</h2>
      <p>
        La perte de crédit attendue, l&apos;allocation par étape, le stress-test
        et les échafaudages de reporting pour les états prudentiels tournent
        tous sur le livre vivant, sur le même moteur qui origine et gère les
        contrats. La vue réglementaire lit les lignes dans lesquelles
        l&apos;équipe des opérations travaille, pas une copie. Il n&apos;y a pas
        d&apos;étape extract-transform-load entre le contrat et la provision,
        donc pas de fenêtre dans laquelle les deux peuvent diverger
        silencieusement.
      </p>

      <h2>Un classement qui remonte à l&apos;événement du contrat</h2>
      <p>
        Un contrat tombe en Étape 1, 2 ou 3 à partir des impayés réels sur ses
        factures réelles, et son exposition en cas de défaut est le montant
        financé sur le contrat lui-même. La couverture, la matrice de migration
        et les plus grandes expositions dérivent toutes des mêmes lignes. Chaque
        chiffre du rapport remonte à l&apos;événement de contrat qui l&apos;a
        produit, de sorte que la réponse à montrez-moi le livre derrière ce
        chiffre est un drill-down, pas une demande de données à une autre équipe
        la semaine prochaine.
      </p>

      <h2>Pourquoi un entrepôt dérive et un moteur non</h2>
      <p>
        Un entrepôt de reporting séparé est une copie du livre, et les copies
        dérivent. Chaque copie ajoute un décalage, un mapping qui peut devenir
        obsolète, et une réconciliation que quelqu&apos;un doit signer. Un seul
        modèle de données supprime la copie. La couche réglementaire est une
        lecture au-dessus des tables opérationnelles, gouvernée par la même
        isolation par tenant et le même journal d&apos;audit que tout le reste.
        C&apos;est le cœur auditable comme propriété : la provision et le
        contrat sont la même source de vérité, observée de deux façons.
      </p>

      <h2>Honnête sur le périmètre</h2>
      <p>
        Nous livrons les échafaudages : IFRS 9 ECL et classement, un moteur de
        stress-test, et des structures de reporting pour COREP, FINREP,
        AnaCredit et les expositions non performantes EBA, plus le
        portfolio-at-risk et les entonnoirs d&apos;origination. Les modèles sont
        câblés au moteur et alimentés depuis le livre vivant. Le détail de
        remise par juridiction, les règles de validation exactes et les formats
        de dépôt qu&apos;attend chaque régime, est configuré par engagement, et
        non présenté comme un dépôt clé en main pour chaque superviseur dès le
        premier jour. Ce qui est structurel, c&apos;est que les chiffres
        viennent du livre. Ce qui est configuré, c&apos;est la façon dont chaque
        régulateur veut les habiller.
      </p>

      <h2>Pourquoi cela compte pour le segment que nous servons</h2>
      <p>
        Les prêteurs non bancaires mid-tier et les captives portent une grande
        partie de la même obligation de reporting que les institutions plus
        grandes, avec une fraction du back-office pour y répondre. Une stack de
        reporting qui dérive du livre est un coût permanent : la réconciliation,
        les explications, le constat quand le rapprochement échoue. Le reporting
        réglementaire depuis le moteur de comptabilisation transforme ce coût
        permanent en une lecture. Le risque et la finance cessent de
        reconstruire les chiffres pour chaque remise, et la question que pose un
        superviseur a la même réponse que l&apos;écran des opérations montre
        déjà.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        La maggior parte dei prestatori produce i propri numeri regolamentari in
        uno stack a valle dei sistemi che fanno girare l&apos;attività. La
        piattaforma operativa contabilizza i contratti ; un warehouse separato e
        uno strumento di reporting li trasformano in accantonamenti IFRS 9,
        segnalazioni COREP e FINREP, e il resto. I due vengono riconciliati su
        un orologio : mensile, trimestrale, la notte prima di un invio. Il
        divario tra ciò che dice il libro e ciò che è stato segnalato è
        esattamente dove vivono i rilievi. Noi abbiamo preso l&apos;altra
        strada. La vista regolamentare gira sullo stesso motore che
        contabilizza il contratto, quindi si riconcilia per costruzione.
      </p>

      <h2>Lo stesso motore, lo stesso numero</h2>
      <p>
        La perdita attesa su crediti, l&apos;allocazione per stage, lo stress
        test e gli scaffold di reporting per le segnalazioni di vigilanza girano
        tutti sul libro vivo, sullo stesso motore che origina e gestisce i
        contratti. La vista regolamentare legge le righe in cui lavora il team
        operativo, non una loro copia. Non c&apos;è un passo
        extract-transform-load tra il contratto e l&apos;accantonamento, quindi
        non c&apos;è una finestra in cui i due possano divergere in silenzio.
      </p>

      <h2>Uno staging che risale all&apos;evento del contratto</h2>
      <p>
        Un contratto finisce in Stage 1, 2 o 3 dagli arretrati reali sulle sue
        fatture reali, e la sua esposizione al default è l&apos;importo
        finanziato sul contratto stesso. La copertura, la matrice di migrazione
        e le maggiori esposizioni derivano tutte dalle stesse righe. Ogni numero
        nel report risale all&apos;evento di contratto che lo ha prodotto, così
        che la risposta a mostrami il libro dietro questo numero è un
        drill-down, non una richiesta di dati a un altro team la settimana
        prossima.
      </p>

      <h2>Perché un warehouse deriva e un motore no</h2>
      <p>
        Un warehouse di reporting separato è una copia del libro, e le copie
        derivano. Ogni copia aggiunge un ritardo, una mappatura che può
        invecchiare, e una riconciliazione che qualcuno deve firmare. Un solo
        modello dati elimina la copia. Lo strato regolamentare è una lettura
        sopra le tabelle operative, governata dallo stesso isolamento per tenant
        e dallo stesso audit trail di tutto il resto. È il nucleo auditabile
        come proprietà : l&apos;accantonamento e il contratto sono la stessa
        fonte di verità, osservata in due modi.
      </p>

      <h2>Onesti sull&apos;ambito</h2>
      <p>
        Consegniamo gli scaffold : IFRS 9 ECL e staging, un motore di stress
        test, e strutture di reporting per COREP, FINREP, AnaCredit ed
        esposizioni deteriorate EBA, più portfolio-at-risk e funnel di
        origination. I template sono collegati al motore e popolati dal libro
        vivo. Il dettaglio di invio per giurisdizione, le regole di validazione
        esatte e i formati di deposito che ogni regime si aspetta, è configurato
        per engagement, non dichiarato come un deposito chiavi in mano per ogni
        autorità di vigilanza dal primo giorno. Ciò che è strutturale è che i
        numeri vengono dal libro. Ciò che è configurato è come ogni regolatore
        li vuole vestiti.
      </p>

      <h2>Perché conta per il segmento che serviamo</h2>
      <p>
        I prestatori non bancari mid-tier e le captive portano gran parte della
        stessa obbligazione di reporting delle istituzioni più grandi, con una
        frazione del back office per soddisfarla. Uno stack di reporting che
        deriva dal libro è un costo permanente : la riconciliazione, le
        spiegazioni, il rilievo quando la quadratura fallisce. Il reporting
        regolamentare dal motore di contabilizzazione trasforma quel costo
        permanente in una lettura. Rischio e finanza smettono di ricostruire i
        numeri per ogni invio, e la domanda che pone un&apos;autorità di
        vigilanza ha la stessa risposta che lo schermo operativo mostra già.
      </p>
    </div>
  );
}
