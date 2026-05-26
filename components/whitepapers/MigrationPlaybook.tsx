/**
 * Whitepaper #6: How we migrate a portfolio into Innovia.
 *
 * The methodology piece. Seven phases (assess, stage, map, dry-run, recon,
 * cutover, hypercare) with concrete artefacts at each step. Honest scope:
 * 20k-500k contracts, mid-tier, not 5M+.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete numbers over adjectives.
 *  - Frame on Innovia terms; no comparison tables.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function MigrationPlaybook({ locale }: ContentProps) {
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
        The hardest part of replacing a lending platform is not running the new
        one. It is moving the portfolio of an operator that has been running
        for fifteen years on a legacy system, with conventions, edge cases,
        and a paper trail nobody quite owns. We publish here the seven-phase
        method we use to do that, the artefacts we ship at each phase, and the
        honest scope where this method works.
      </p>

      <h2>Scope</h2>
      <p>
        This playbook is designed for portfolios of twenty thousand to five
        hundred thousand contracts. It is not the right method for
        five-million-contract consolidations of multiple legacy systems, where
        a dedicated migration product with twenty-five years of tooling is the
        right answer. The audience we wrote this for is the mid-tier operator
        who is moving off one in-house or off-the-shelf system into a
        multi-tenant target, with one source of truth, one cutover window,
        and an audit trail that needs to survive a regulator query.
      </p>

      <h2>Phase 1: Assess</h2>
      <p>
        We take a read-only extract of the legacy data dictionary plus a
        sample of one hundred rows per material table. Two hours of operator
        time, two business days of our time. We come back with: the list of
        tables we need to map, the list of fields we have not seen before, a
        first cut of the cutover risk register, and a calendar that names the
        cutover weekend.
      </p>
      <p>
        We do not require any legacy-system enhancements. We read what is
        there.
      </p>

      <h2>Phase 2: Stage</h2>
      <p>
        We provision a staging schema inside the tenant that will receive the
        production data. The staging schema mirrors the shape of the legacy
        extract one to one, with three extra columns on every row: source
        system, source row id, batch id. Nothing is yet visible to the
        target tables. The operator can see the staging schema, query it,
        and reconcile against the legacy system in parallel.
      </p>

      <h2>Phase 3: Map</h2>
      <p>
        For each staging table we produce a mapping document that names every
        column, its target field in Innovia, the transformation rule, and the
        defaulting policy when the source is null. The mapping is reviewed
        in writing and signed off by the operator before any data crosses
        into the target schema. We ship the mapping document in spreadsheet
        form because that is the form the operator can audit without
        installing anything.
      </p>
      <p>
        Our document extraction pipeline reads the legacy data dictionary
        plus the hundred sample rows and proposes the first version of the
        mapping. A human reviews and edits it. The proposer is fast, the
        review is the work.
      </p>

      <h2>Phase 4: Dry-run</h2>
      <p>
        We run the full migration end to end against the staging schema. We
        do not yet write into production target tables. The dry-run produces
        the recon report and a list of every row that did not pass a
        validation rule. The operator decides which exceptions are acceptable
        (a missing tax code on a closed contract) and which are blockers
        (a missing principal on an active contract). We iterate until the
        blocker list is empty.
      </p>
      <p>
        Most projects need two dry-runs. Some need four. We bill the dry-run
        as one phase, not per attempt, because attempts are how we learn the
        portfolio.
      </p>

      <h2>Phase 5: Reconcile</h2>
      <p>
        The recon report compares, side by side, the legacy system and the
        post-migration target on five axes: row count per material table,
        sum of contract principal, sum of outstanding balance, sum of monthly
        billing, count of contracts in each lifecycle state. The report ships
        as a dashboard the operator can open, drill into, and screenshot for
        their auditor. Variances above a tolerance threshold (default zero
        for balances, configurable for counts) are flagged and require an
        explanation before sign-off.
      </p>

      <h2>Phase 6: Cutover</h2>
      <p>
        The cutover is a weekend. Friday evening the legacy system goes
        read-only. We pull the final extract, run staging, run mapping, run
        validation, run recon. Sunday morning we present the recon report
        to the operator. Sunday afternoon, if recon is green, the tenant
        flips to live. Monday morning the operator transacts. We sit with
        them.
      </p>

      <h2>Phase 7: Hypercare</h2>
      <p>
        Two weeks of dedicated support after cutover. We watch the operational
        dashboard, we triage every exception ourselves, we keep the legacy
        system available read-only for the operator to spot-check. After two
        weeks the legacy system is archived (we provide the archival script)
        and standard support starts.
      </p>

      <h2>What we ask from the operator</h2>
      <p>
        One named person who owns the legacy system and can answer fielded
        questions within one business day. Read access to a recent backup of
        the legacy database. Sign-off authority on the mapping document.
        Presence at the cutover weekend.
      </p>

      <h2>What can go wrong</h2>
      <p>
        Three things, in our experience. First, an undocumented business
        rule in the legacy code that the data dictionary does not show
        (typical: a status transition that depends on a column in a
        peripheral table). We surface these during dry-run and add them to
        the mapping. Second, a balance discrepancy traced back to a legacy
        bug nobody had caught (typical: a rounding rule that drifted by a
        cent over years). We document and reconcile to the legacy value, not
        to the corrected value, then book the correction as a one-time
        adjustment after cutover. Third, an integration that the legacy
        system has been quietly relying on (typical: a nightly file
        consumed by accounting). We map these in Phase 1 and ship them in
        Phase 6.
      </p>

      <h2>The audit trail</h2>
      <p>
        Every migrated row carries its source system and source row id for
        the life of the record. A regulator asking "where did this contract
        come from" gets a one-query answer. The mapping document and every
        recon report are versioned and stored alongside the audit log of the
        tenant.
      </p>

      <p>
        The method works because the target is multi-tenant. We are not
        provisioning a cloud account before we can stage data. We are not
        coordinating five backends. The portfolio lands into one tenant, in
        one engine, with one audit log. That is the property the next
        whitepaper covers.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Partea cea mai grea a înlocuirii unei platforme de lending nu este să
        o rulezi pe cea nouă. Este să muți portofoliul unui operator care a
        funcționat cincisprezece ani pe un sistem legacy, cu convenții,
        excepții și un istoric de hârtii pe care nimeni nu îl deține în
        totalitate. Publicăm aici metoda în șapte faze pe care o folosim,
        artefactele pe care le livrăm la fiecare fază și scopul onest în care
        această metodă funcționează.
      </p>

      <h2>Scop</h2>
      <p>
        Acest playbook este proiectat pentru portofolii între douăzeci de mii
        și cinci sute de mii de contracte. Nu este metoda potrivită pentru
        consolidări de cinci milioane de contracte din mai multe sisteme
        legacy, unde un produs de migrare dedicat cu douăzeci și cinci de
        ani de tooling este răspunsul corect. Audiența pentru care am scris
        este operatorul mid-tier care iese de pe un sistem in-house sau
        off-the-shelf către o țintă multi-tenant, cu o singură sursă de
        adevăr, o singură fereastră de cutover și un audit trail care
        trebuie să reziste la o interogare de regulator.
      </p>

      <h2>Faza 1: Evaluare</h2>
      <p>
        Luăm un extract read-only al dicționarului de date legacy plus un
        eșantion de o sută de rânduri per tabelă materială. Două ore de timp
        al operatorului, două zile lucrătoare ale noastre. Ne întoarcem cu:
        lista de tabele pe care trebuie să le mapăm, lista de câmpuri pe
        care nu le-am mai văzut, o primă variantă a registrului de risc al
        cutover-ului, și un calendar care numește weekend-ul de cutover.
      </p>
      <p>
        Nu cerem nicio îmbunătățire la sistemul legacy. Citim ce există.
      </p>

      <h2>Faza 2: Staging</h2>
      <p>
        Provizionăm o schemă de staging în interiorul tenantului care va
        primi datele de producție. Schema de staging oglindește forma
        extractului legacy unu la unu, cu trei coloane suplimentare pe
        fiecare rând: sistem sursă, id rând sursă, id batch. Nimic nu este
        încă vizibil în tabelele țintă. Operatorul poate vedea schema de
        staging, o poate interoga și reconcilia în paralel cu sistemul
        legacy.
      </p>

      <h2>Faza 3: Mapare</h2>
      <p>
        Pentru fiecare tabelă de staging producem un document de mapare care
        numește fiecare coloană, câmpul țintă în Innovia, regula de
        transformare și politica de default când sursa este null. Maparea
        este revizuită în scris și semnată de operator înainte ca vreo dată
        să treacă în schema țintă. Livrăm documentul de mapare în format
        spreadsheet pentru că este forma pe care operatorul o poate audita
        fără să instaleze nimic.
      </p>
      <p>
        Pipeline-ul nostru de extracție document citește dicționarul de date
        legacy plus cele o sută de rânduri eșantion și propune prima
        versiune a mapării. Un om revizuiește și editează. Propunătorul
        este rapid, revizuirea este munca.
      </p>

      <h2>Faza 4: Dry-run</h2>
      <p>
        Rulăm migrarea completă end-to-end pe schema de staging. Nu scriem
        încă în tabelele țintă de producție. Dry-run-ul produce raportul de
        reconciliere și lista fiecărui rând care nu a trecut o regulă de
        validare. Operatorul decide care excepții sunt acceptabile (un cod
        de TVA lipsă pe un contract închis) și care sunt blocante (un
        principal lipsă pe un contract activ). Iterăm până când lista
        blocantă este goală.
      </p>
      <p>
        Cele mai multe proiecte au nevoie de două dry-run-uri. Unele au
        nevoie de patru. Facturăm dry-run-ul ca o singură fază, nu per
        încercare, pentru că încercările sunt felul în care învățăm
        portofoliul.
      </p>

      <h2>Faza 5: Reconciliere</h2>
      <p>
        Raportul de reconciliere compară, una lângă alta, sistemul legacy și
        ținta post-migrare pe cinci axe: numărul de rânduri per tabelă
        materială, suma principalului pe contracte, suma soldurilor
        restante, suma facturării lunare, numărul de contracte în fiecare
        stare de ciclu de viață. Raportul iese ca un dashboard pe care
        operatorul îl poate deschide, în care poate intra în detaliu și pe
        care îl poate screenshotui pentru auditorul lui. Variațiile peste un
        prag de toleranță (zero implicit pentru solduri, configurabil pentru
        numere) sunt marcate și cer o explicație înainte de sign-off.
      </p>

      <h2>Faza 6: Cutover</h2>
      <p>
        Cutover-ul este un weekend. Vineri seara sistemul legacy devine
        read-only. Tragem extractul final, rulăm staging, rulăm mapare,
        rulăm validare, rulăm reconciliere. Duminică dimineață prezentăm
        raportul de reconciliere operatorului. Duminică după-amiază, dacă
        reconcilierea este verde, tenantul comută live. Luni dimineață
        operatorul tranzacționează. Stăm cu el.
      </p>

      <h2>Faza 7: Hypercare</h2>
      <p>
        Două săptămâni de suport dedicat după cutover. Privim dashboard-ul
        operațional, triajem fiecare excepție noi înșine, păstrăm sistemul
        legacy disponibil read-only pentru ca operatorul să poată face
        spot-check-uri. După două săptămâni, sistemul legacy este arhivat
        (livrăm scriptul de arhivare) și suportul standard începe.
      </p>

      <h2>Ce cerem de la operator</h2>
      <p>
        O persoană numită care deține sistemul legacy și poate răspunde la
        întrebări detaliate într-o zi lucrătoare. Acces read la un backup
        recent al bazei legacy. Autoritate de sign-off pe documentul de
        mapare. Prezență la weekend-ul de cutover.
      </p>

      <h2>Ce poate să meargă prost</h2>
      <p>
        Trei lucruri, din experiența noastră. Primul, o regulă de business
        nedocumentată în codul legacy pe care dicționarul de date nu o
        arată (tipic: o tranziție de status care depinde de o coloană
        dintr-o tabelă periferică). Le scoatem la lumină în timpul
        dry-run-ului și le adăugăm la mapare. Al doilea, o discrepanță de
        sold trasată înapoi la un bug legacy pe care nimeni nu îl prinsese
        (tipic: o regulă de rotunjire care a derivat cu un cent de-a lungul
        anilor). Documentăm și reconciliem la valoarea legacy, nu la
        valoarea corectată, apoi înregistrăm corecția ca o ajustare one-off
        după cutover. Al treilea, o integrare pe care sistemul legacy a
        contat-o tăcut (tipic: un fișier de noapte consumat de
        contabilitate). Le mapăm în Faza 1 și le livrăm în Faza 6.
      </p>

      <h2>Audit trail-ul</h2>
      <p>
        Fiecare rând migrat poartă sistemul său sursă și id-ul de rând
        sursă pentru toată viața înregistrării. Un regulator care întreabă
        "de unde a venit acest contract" primește un răspuns într-o
        interogare. Documentul de mapare și fiecare raport de reconciliere
        sunt versionate și stocate alături de audit log-ul tenantului.
      </p>

      <p>
        Metoda funcționează pentru că ținta este multi-tenant. Nu
        provizionăm un cont de cloud înainte de a putea face staging la
        date. Nu coordonăm cinci backend-uri. Portofoliul aterizează într-un
        tenant, într-un motor, cu un audit log. Aceasta este proprietatea pe
        care o acoperă următoarea hârtie albă.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Der schwierigste Teil beim Ersetzen einer Lending-Plattform ist
        nicht, die neue zu betreiben. Es ist, das Portfolio eines Betreibers
        zu verschieben, der fünfzehn Jahre auf einem Legacy-System läuft,
        mit Konventionen, Sonderfällen und einer Aktenspur, die niemand
        ganz besitzt. Wir veröffentlichen hier die Sieben-Phasen-Methode,
        die wir dafür verwenden, die Artefakte, die wir in jeder Phase
        liefern, und den ehrlichen Umfang, in dem diese Methode funktioniert.
      </p>

      <h2>Umfang</h2>
      <p>
        Dieses Playbook ist für Portfolios von zwanzigtausend bis
        fünfhunderttausend Verträgen ausgelegt. Es ist nicht die richtige
        Methode für Fünf-Millionen-Vertrags-Konsolidierungen mehrerer
        Legacy-Systeme, bei denen ein dediziertes Migrationsprodukt mit
        fünfundzwanzig Jahren Tooling die richtige Antwort ist. Die
        Zielgruppe, für die wir das geschrieben haben, ist der Mid-Tier-
        Betreiber, der von einem in-house oder Standard-System auf ein
        Multi-Tenant-Ziel wechselt, mit einer einzigen Wahrheitsquelle,
        einem einzigen Cutover-Fenster und einer Audit-Spur, die eine
        Regulator-Abfrage überstehen muss.
      </p>

      <h2>Phase 1: Bewertung</h2>
      <p>
        Wir nehmen einen Read-Only-Extrakt des Legacy-Datenwörterbuchs plus
        eine Stichprobe von hundert Zeilen pro materieller Tabelle. Zwei
        Stunden Betreiberzeit, zwei Werktage unsererseits. Wir kommen
        zurück mit: der Liste der Tabellen, die wir mappen müssen, der
        Liste der Felder, die wir noch nie gesehen haben, einem ersten
        Schnitt des Cutover-Risikoregisters und einem Kalender, der das
        Cutover-Wochenende benennt.
      </p>
      <p>
        Wir verlangen keine Legacy-System-Erweiterungen. Wir lesen, was da
        ist.
      </p>

      <h2>Phase 2: Staging</h2>
      <p>
        Wir provisionieren ein Staging-Schema innerhalb des Tenants, der
        die Produktionsdaten erhalten wird. Das Staging-Schema spiegelt
        die Form des Legacy-Extrakts eins zu eins, mit drei zusätzlichen
        Spalten pro Zeile: Quellsystem, Quellzeilen-ID, Batch-ID. Nichts
        ist noch in den Zieltabellen sichtbar. Der Betreiber kann das
        Staging-Schema sehen, abfragen und parallel zum Legacy-System
        abgleichen.
      </p>

      <h2>Phase 3: Mapping</h2>
      <p>
        Für jede Staging-Tabelle erstellen wir ein Mapping-Dokument, das
        jede Spalte, ihr Zielfeld in Innovia, die Transformationsregel und
        die Default-Richtlinie bei null-Quellen benennt. Das Mapping wird
        schriftlich geprüft und vom Betreiber abgenommen, bevor Daten in
        das Zielschema übergehen. Wir liefern das Mapping-Dokument als
        Tabellenkalkulation, weil das die Form ist, die der Betreiber
        ohne Installation prüfen kann.
      </p>
      <p>
        Unsere Dokumentenextraktions-Pipeline liest das
        Legacy-Datenwörterbuch plus die hundert Stichprobenzeilen und
        schlägt die erste Version des Mappings vor. Ein Mensch prüft und
        editiert. Der Vorschlag ist schnell, die Prüfung ist die Arbeit.
      </p>

      <h2>Phase 4: Probelauf</h2>
      <p>
        Wir führen die vollständige Migration End-to-End gegen das
        Staging-Schema aus. Wir schreiben noch nicht in
        Produktions-Zieltabellen. Der Probelauf erzeugt den
        Abgleichsbericht und eine Liste jeder Zeile, die eine
        Validierungsregel nicht bestanden hat. Der Betreiber entscheidet,
        welche Ausnahmen akzeptabel sind (ein fehlender Steuercode bei
        einem geschlossenen Vertrag) und welche Blocker sind (ein
        fehlender Kapitalbetrag bei einem aktiven Vertrag). Wir
        iterieren, bis die Blocker-Liste leer ist.
      </p>
      <p>
        Die meisten Projekte brauchen zwei Probeläufe. Manche vier. Wir
        rechnen den Probelauf als eine Phase ab, nicht pro Versuch, denn
        Versuche sind, wie wir das Portfolio lernen.
      </p>

      <h2>Phase 5: Abgleich</h2>
      <p>
        Der Abgleichsbericht vergleicht das Legacy-System und das
        Migrationsziel nebeneinander auf fünf Achsen: Zeilenanzahl pro
        materieller Tabelle, Summe des Vertragskapitals, Summe der offenen
        Salden, Summe der monatlichen Abrechnung, Anzahl der Verträge in
        jedem Lebenszyklusstatus. Der Bericht erscheint als Dashboard, das
        der Betreiber öffnen, in das er hineindrillen und das er für
        seinen Auditor screenshotten kann. Abweichungen über einer
        Toleranzschwelle (Standard null für Salden, konfigurierbar für
        Anzahlen) werden markiert und benötigen eine Erklärung vor der
        Abnahme.
      </p>

      <h2>Phase 6: Cutover</h2>
      <p>
        Der Cutover ist ein Wochenende. Freitagabend wird das
        Legacy-System Read-Only. Wir ziehen den finalen Extrakt, lassen
        Staging laufen, Mapping, Validierung, Abgleich. Sonntagmorgen
        präsentieren wir den Abgleichsbericht dem Betreiber.
        Sonntagnachmittag, wenn der Abgleich grün ist, schaltet der Tenant
        auf live. Montagmorgen transagiert der Betreiber. Wir sitzen bei
        ihm.
      </p>

      <h2>Phase 7: Hypercare</h2>
      <p>
        Zwei Wochen dedizierter Support nach dem Cutover. Wir beobachten
        das operative Dashboard, triagieren jede Ausnahme selbst, halten
        das Legacy-System read-only verfügbar, damit der Betreiber
        Stichproben machen kann. Nach zwei Wochen wird das Legacy-System
        archiviert (wir liefern das Archivierungsskript) und der
        Standard-Support beginnt.
      </p>

      <h2>Was wir vom Betreiber verlangen</h2>
      <p>
        Eine benannte Person, die das Legacy-System besitzt und Fragen im
        Detail innerhalb eines Werktags beantworten kann. Lesezugriff auf
        ein aktuelles Backup der Legacy-Datenbank. Abnahmebefugnis für das
        Mapping-Dokument. Anwesenheit am Cutover-Wochenende.
      </p>

      <h2>Was schiefgehen kann</h2>
      <p>
        Drei Dinge nach unserer Erfahrung. Erstens, eine undokumentierte
        Geschäftsregel im Legacy-Code, die das Datenwörterbuch nicht zeigt
        (typisch: ein Statusübergang, der von einer Spalte in einer
        Randtabelle abhängt). Wir bringen sie im Probelauf ans Licht und
        fügen sie dem Mapping hinzu. Zweitens, eine Saldenabweichung, die
        auf einen Legacy-Bug zurückgeht, den niemand bemerkt hatte
        (typisch: eine Rundungsregel, die über Jahre um einen Cent
        abgedriftet ist). Wir dokumentieren und gleichen auf den
        Legacy-Wert ab, nicht auf den korrigierten Wert, und buchen die
        Korrektur als einmalige Anpassung nach dem Cutover. Drittens, eine
        Integration, auf die sich das Legacy-System still verlassen hat
        (typisch: eine nächtliche Datei, die von der Buchhaltung
        verarbeitet wird). Wir mappen sie in Phase 1 und liefern sie in
        Phase 6.
      </p>

      <h2>Die Audit-Spur</h2>
      <p>
        Jede migrierte Zeile trägt ihr Quellsystem und ihre Quellzeilen-ID
        für die Lebensdauer des Datensatzes. Ein Regulator, der fragt
        "woher kommt dieser Vertrag", bekommt eine Antwort in einer
        Abfrage. Das Mapping-Dokument und jeder Abgleichsbericht sind
        versioniert und neben dem Audit-Log des Tenants gespeichert.
      </p>

      <p>
        Die Methode funktioniert, weil das Ziel Multi-Tenant ist. Wir
        provisionieren keinen Cloud-Account, bevor wir Daten staggen
        können. Wir koordinieren keine fünf Backends. Das Portfolio
        landet in einem Tenant, in einer Engine, mit einem Audit-Log. Das
        ist die Eigenschaft, die das nächste Whitepaper behandelt.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        La partie la plus difficile du remplacement d&apos;une plateforme de
        lending n&apos;est pas de faire tourner la nouvelle. C&apos;est de
        déplacer le portefeuille d&apos;un opérateur qui tourne depuis
        quinze ans sur un système legacy, avec ses conventions, ses cas
        limites, et un dossier que personne ne possède tout à fait. Nous
        publions ici la méthode en sept phases que nous utilisons, les
        artefacts que nous livrons à chaque phase, et le périmètre honnête
        dans lequel cette méthode fonctionne.
      </p>

      <h2>Périmètre</h2>
      <p>
        Ce playbook est conçu pour des portefeuilles de vingt mille à cinq
        cent mille contrats. Ce n&apos;est pas la bonne méthode pour des
        consolidations de cinq millions de contrats issus de plusieurs
        systèmes legacy, où un produit de migration dédié avec vingt-cinq
        ans d&apos;outillage est la bonne réponse. Le public pour lequel
        nous avons écrit est l&apos;opérateur mid-tier qui sort d&apos;un
        système interne ou prêt-à-l&apos;emploi vers une cible
        multi-tenant, avec une seule source de vérité, une seule fenêtre
        de bascule, et une piste d&apos;audit qui doit survivre à une
        requête de régulateur.
      </p>

      <h2>Phase 1 : Évaluation</h2>
      <p>
        Nous prenons un extrait en lecture seule du dictionnaire de
        données legacy plus un échantillon de cent lignes par table
        matérielle. Deux heures du temps de l&apos;opérateur, deux jours
        ouvrés du nôtre. Nous revenons avec : la liste des tables à
        mapper, la liste des champs jamais vus, une première version du
        registre de risque de bascule, et un calendrier qui nomme le
        week-end de bascule.
      </p>
      <p>
        Nous ne demandons aucune amélioration du système legacy. Nous
        lisons ce qui est là.
      </p>

      <h2>Phase 2 : Staging</h2>
      <p>
        Nous provisionnons un schéma de staging à l&apos;intérieur du
        tenant qui recevra les données de production. Le schéma de
        staging reflète la forme de l&apos;extrait legacy un à un, avec
        trois colonnes supplémentaires sur chaque ligne : système source,
        identifiant de ligne source, identifiant de lot. Rien n&apos;est
        encore visible dans les tables cibles. L&apos;opérateur peut voir
        le schéma de staging, l&apos;interroger, et le rapprocher du
        système legacy en parallèle.
      </p>

      <h2>Phase 3 : Mapping</h2>
      <p>
        Pour chaque table de staging nous produisons un document de
        mapping qui nomme chaque colonne, son champ cible dans Innovia,
        la règle de transformation, et la politique de défaut quand la
        source est nulle. Le mapping est revu par écrit et validé par
        l&apos;opérateur avant que toute donnée ne passe dans le schéma
        cible. Nous livrons le document de mapping en format tableur
        parce que c&apos;est la forme que l&apos;opérateur peut auditer
        sans rien installer.
      </p>
      <p>
        Notre pipeline d&apos;extraction de documents lit le dictionnaire
        de données legacy plus les cent lignes d&apos;échantillon et
        propose la première version du mapping. Un humain revoit et
        édite. La proposition est rapide, la revue est le travail.
      </p>

      <h2>Phase 4 : Dry-run</h2>
      <p>
        Nous exécutons la migration complète de bout en bout sur le
        schéma de staging. Nous n&apos;écrivons pas encore dans les
        tables cibles de production. Le dry-run produit le rapport de
        rapprochement et la liste de chaque ligne qui n&apos;a pas passé
        une règle de validation. L&apos;opérateur décide quelles
        exceptions sont acceptables (un code fiscal manquant sur un
        contrat clos) et lesquelles sont bloquantes (un principal
        manquant sur un contrat actif). Nous itérons jusqu&apos;à ce que
        la liste bloquante soit vide.
      </p>
      <p>
        La plupart des projets ont besoin de deux dry-runs. Certains de
        quatre. Nous facturons le dry-run comme une phase, pas par
        tentative, parce que les tentatives sont la manière dont nous
        apprenons le portefeuille.
      </p>

      <h2>Phase 5 : Rapprochement</h2>
      <p>
        Le rapport de rapprochement compare, côte à côte, le système
        legacy et la cible post-migration sur cinq axes : nombre de
        lignes par table matérielle, somme du principal contractuel,
        somme des soldes restants, somme de la facturation mensuelle,
        nombre de contrats dans chaque état de cycle de vie. Le rapport
        sort sous forme d&apos;un tableau de bord que l&apos;opérateur
        peut ouvrir, dans lequel il peut entrer en détail, et qu&apos;il
        peut capturer pour son auditeur. Les écarts au-dessus d&apos;un
        seuil de tolérance (zéro par défaut pour les soldes,
        configurable pour les comptages) sont marqués et requièrent une
        explication avant la validation.
      </p>

      <h2>Phase 6 : Bascule</h2>
      <p>
        La bascule est un week-end. Vendredi soir le système legacy
        passe en lecture seule. Nous tirons l&apos;extrait final,
        lançons staging, lançons mapping, lançons validation, lançons
        rapprochement. Dimanche matin nous présentons le rapport de
        rapprochement à l&apos;opérateur. Dimanche après-midi, si le
        rapprochement est vert, le tenant bascule en live. Lundi matin
        l&apos;opérateur transige. Nous restons avec lui.
      </p>

      <h2>Phase 7 : Hypercare</h2>
      <p>
        Deux semaines de support dédié après la bascule. Nous surveillons
        le tableau de bord opérationnel, nous triaisons chaque exception
        nous-mêmes, nous gardons le système legacy disponible en lecture
        seule pour que l&apos;opérateur puisse faire des vérifications.
        Après deux semaines, le système legacy est archivé (nous
        fournissons le script d&apos;archivage) et le support standard
        commence.
      </p>

      <h2>Ce que nous demandons à l&apos;opérateur</h2>
      <p>
        Une personne nommée qui possède le système legacy et peut
        répondre à des questions détaillées sous un jour ouvré. Accès en
        lecture à une sauvegarde récente de la base legacy. Autorité de
        validation sur le document de mapping. Présence au week-end de
        bascule.
      </p>

      <h2>Ce qui peut mal tourner</h2>
      <p>
        Trois choses, selon notre expérience. D&apos;abord, une règle
        métier non documentée dans le code legacy que le dictionnaire de
        données ne montre pas (typique : une transition de statut qui
        dépend d&apos;une colonne dans une table périphérique). Nous les
        faisons remonter pendant le dry-run et les ajoutons au mapping.
        Ensuite, un écart de solde retracé jusqu&apos;à un bug legacy que
        personne n&apos;avait attrapé (typique : une règle d&apos;arrondi
        qui a dérivé d&apos;un centime au fil des ans). Nous documentons
        et rapprochons à la valeur legacy, pas à la valeur corrigée, puis
        comptabilisons la correction comme un ajustement ponctuel après
        bascule. Enfin, une intégration sur laquelle le système legacy
        comptait silencieusement (typique : un fichier nocturne consommé
        par la comptabilité). Nous les mappons en Phase 1 et les livrons
        en Phase 6.
      </p>

      <h2>La piste d&apos;audit</h2>
      <p>
        Chaque ligne migrée porte son système source et son identifiant
        de ligne source pour toute la vie de l&apos;enregistrement. Un
        régulateur qui demande "d&apos;où vient ce contrat" obtient une
        réponse en une requête. Le document de mapping et chaque rapport
        de rapprochement sont versionnés et stockés à côté du journal
        d&apos;audit du tenant.
      </p>

      <p>
        La méthode fonctionne parce que la cible est multi-tenant. Nous
        ne provisionnons pas de compte cloud avant de pouvoir staquer
        des données. Nous ne coordonnons pas cinq backends. Le
        portefeuille atterrit dans un tenant, dans un moteur, avec un
        journal d&apos;audit. C&apos;est la propriété que couvre le
        prochain whitepaper.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        La parte più difficile della sostituzione di una piattaforma di
        lending non è far girare quella nuova. È spostare il portafoglio
        di un operatore che gira da quindici anni su un sistema legacy,
        con convenzioni, casi limite, e una traccia documentale che
        nessuno possiede del tutto. Pubblichiamo qui il metodo a sette
        fasi che usiamo, gli artefatti che consegniamo a ogni fase, e
        l&apos;ambito onesto in cui questo metodo funziona.
      </p>

      <h2>Ambito</h2>
      <p>
        Questo playbook è progettato per portafogli da ventimila a
        cinquecentomila contratti. Non è il metodo giusto per
        consolidamenti di cinque milioni di contratti da più sistemi
        legacy, dove un prodotto di migrazione dedicato con venticinque
        anni di tooling è la risposta corretta. Il pubblico per cui
        abbiamo scritto è l&apos;operatore mid-tier che sta uscendo da un
        sistema in-house o off-the-shelf verso un target multi-tenant,
        con una singola fonte di verità, una singola finestra di
        cutover, e una traccia d&apos;audit che deve sopravvivere a una
        richiesta del regolatore.
      </p>

      <h2>Fase 1: Valutazione</h2>
      <p>
        Prendiamo un extract in sola lettura del dizionario dati legacy
        più un campione di cento righe per tabella materiale. Due ore di
        tempo dell&apos;operatore, due giorni lavorativi del nostro.
        Torniamo con: la lista delle tabelle da mappare, la lista dei
        campi mai visti prima, un primo taglio del registro di rischio
        del cutover, e un calendario che nomina il weekend di cutover.
      </p>
      <p>
        Non chiediamo alcun miglioramento al sistema legacy. Leggiamo
        ciò che c&apos;è.
      </p>

      <h2>Fase 2: Staging</h2>
      <p>
        Provisioniamo uno schema di staging dentro il tenant che
        riceverà i dati di produzione. Lo schema di staging rispecchia
        la forma dell&apos;extract legacy uno a uno, con tre colonne
        aggiuntive su ogni riga: sistema sorgente, id riga sorgente, id
        batch. Nulla è ancora visibile nelle tabelle target.
        L&apos;operatore può vedere lo schema di staging, interrogarlo, e
        riconciliarlo in parallelo con il sistema legacy.
      </p>

      <h2>Fase 3: Mapping</h2>
      <p>
        Per ogni tabella di staging produciamo un documento di mapping
        che nomina ogni colonna, il suo campo target in Innovia, la
        regola di trasformazione, e la politica di default quando la
        sorgente è null. Il mapping viene rivisto per iscritto e
        approvato dall&apos;operatore prima che alcun dato passi nello
        schema target. Consegniamo il documento di mapping in formato
        foglio di calcolo perché è la forma che l&apos;operatore può
        auditare senza installare nulla.
      </p>
      <p>
        La nostra pipeline di estrazione documenti legge il dizionario
        dati legacy più le cento righe campione e propone la prima
        versione del mapping. Un umano rivede e modifica. Il
        propositore è veloce, la revisione è il lavoro.
      </p>

      <h2>Fase 4: Dry-run</h2>
      <p>
        Eseguiamo la migrazione completa end-to-end contro lo schema di
        staging. Non scriviamo ancora nelle tabelle target di produzione.
        Il dry-run produce il report di riconciliazione e la lista di
        ogni riga che non ha passato una regola di validazione.
        L&apos;operatore decide quali eccezioni sono accettabili (un
        codice fiscale mancante su un contratto chiuso) e quali sono
        bloccanti (un capitale mancante su un contratto attivo).
        Iteriamo finché la lista bloccante è vuota.
      </p>
      <p>
        La maggior parte dei progetti necessita di due dry-run. Alcuni
        di quattro. Fatturiamo il dry-run come una fase, non per
        tentativo, perché i tentativi sono il modo in cui impariamo il
        portafoglio.
      </p>

      <h2>Fase 5: Riconciliazione</h2>
      <p>
        Il report di riconciliazione confronta, fianco a fianco, il
        sistema legacy e il target post-migrazione su cinque assi:
        numero di righe per tabella materiale, somma del capitale
        contrattuale, somma dei saldi residui, somma della fatturazione
        mensile, numero di contratti in ogni stato di ciclo di vita. Il
        report esce come una dashboard che l&apos;operatore può aprire,
        in cui può scendere in dettaglio, e che può fotografare per il
        suo auditor. Le varianze sopra una soglia di tolleranza (zero di
        default per i saldi, configurabile per i conteggi) sono marcate
        e richiedono una spiegazione prima dell&apos;approvazione.
      </p>

      <h2>Fase 6: Cutover</h2>
      <p>
        Il cutover è un weekend. Venerdì sera il sistema legacy diventa
        di sola lettura. Tiriamo l&apos;extract finale, eseguiamo
        staging, eseguiamo mapping, eseguiamo validazione, eseguiamo
        riconciliazione. Domenica mattina presentiamo il report di
        riconciliazione all&apos;operatore. Domenica pomeriggio, se la
        riconciliazione è verde, il tenant passa live. Lunedì mattina
        l&apos;operatore transa. Stiamo con lui.
      </p>

      <h2>Fase 7: Hypercare</h2>
      <p>
        Due settimane di supporto dedicato dopo il cutover. Guardiamo la
        dashboard operativa, triagiamo ogni eccezione noi stessi,
        teniamo il sistema legacy disponibile in sola lettura perché
        l&apos;operatore possa fare verifiche a campione. Dopo due
        settimane il sistema legacy viene archiviato (forniamo lo
        script di archiviazione) e il supporto standard inizia.
      </p>

      <h2>Cosa chiediamo all&apos;operatore</h2>
      <p>
        Una persona nominata che possiede il sistema legacy e può
        rispondere a domande di dettaglio entro un giorno lavorativo.
        Accesso in lettura a un backup recente del database legacy.
        Autorità di approvazione sul documento di mapping. Presenza al
        weekend di cutover.
      </p>

      <h2>Cosa può andare storto</h2>
      <p>
        Tre cose, dalla nostra esperienza. La prima, una regola di
        business non documentata nel codice legacy che il dizionario
        dati non mostra (tipico: una transizione di stato che dipende
        da una colonna in una tabella periferica). Le facciamo
        emergere durante il dry-run e le aggiungiamo al mapping. La
        seconda, una discrepanza di saldo tracciata a un bug legacy che
        nessuno aveva preso (tipico: una regola di arrotondamento che
        è derivata di un centesimo negli anni). Documentiamo e
        riconciliamo al valore legacy, non al valore corretto, poi
        registriamo la correzione come aggiustamento una-tantum dopo
        il cutover. La terza, un&apos;integrazione su cui il sistema
        legacy contava silenziosamente (tipico: un file notturno
        consumato dalla contabilità). Le mappiamo in Fase 1 e le
        consegniamo in Fase 6.
      </p>

      <h2>La traccia d&apos;audit</h2>
      <p>
        Ogni riga migrata porta il suo sistema sorgente e il suo id
        riga sorgente per tutta la vita del record. Un regolatore che
        chiede "da dove viene questo contratto" ottiene una risposta
        in una query. Il documento di mapping e ogni report di
        riconciliazione sono versionati e archiviati accanto al log di
        audit del tenant.
      </p>

      <p>
        Il metodo funziona perché il target è multi-tenant. Non
        provisioniamo un account cloud prima di poter mettere in
        staging i dati. Non coordiniamo cinque backend. Il portafoglio
        atterra in un tenant, in un motore, con un log di audit. È la
        proprietà che copre il prossimo whitepaper.
      </p>
    </div>
  );
}
