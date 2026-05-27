/**
 * Whitepaper #7: Migrating into multi-tenant: why the target shape matters.
 *
 * The positioning piece on migration. Argument: the shape of the target
 * platform decides what the first ninety days of a migration look like.
 * A single-tenant private network is a cloud-engineering project before
 * any data lands. A row-isolated multi-tenant target means staging on
 * day one. Both work; one is faster for the segment we serve.
 *
 * Companion to whitepaper #6 (Migration Playbook): the playbook is the
 * how, this is the why-target-shape-matters.
 *
 * Style rules (enforced):
 *  - No em dashes.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete numbers over adjectives.
 *  - Frame on Innovia terms; no comparison tables.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function MigratingIntoMultiTenant({ locale }: ContentProps) {
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
        Migration conversations focus on the source system: the legacy code,
        the data dictionary, the conventions of an operator who has been
        running for fifteen years. The target shape gets less attention,
        which is a mistake. The target decides what the first ninety days
        of the project look like. We argue that for mid-tier lending
        operators, a row-isolated multi-tenant target is the structural
        property that compounds across staging speed, recon transparency,
        and post-cutover support cost.
      </p>

      <h2>Two target shapes</h2>
      <p>
        A migration target is either a per-customer private deployment or
        a row-isolated multi-tenant deployment. The choice is not just a
        deployment-economics call. It is a calendar call.
      </p>
      <p>
        In a per-customer private deployment, the first work item is
        provisioning the customer&apos;s cloud account, the customer&apos;s
        VPC, the customer&apos;s database instance, the customer&apos;s
        backup target. Two to six weeks of cloud-engineering work before
        any legacy row can be staged. The migration team waits. The
        operator&apos;s clock has started.
      </p>
      <p>
        In a row-isolated multi-tenant target, a new tenant is a row in
        a tenant table and a JWT claim. Day one the tenant exists. Day
        two we stage the first legacy extract into the tenant&apos;s
        staging schema. Day three the operator sees their data inside
        the new system, read-only, alongside the legacy.
      </p>

      <h2>What we mean by row-isolated</h2>
      <p>
        Every business table in our schema carries a TenantId column.
        Every query is filtered by tenant context taken from the JWT
        claim. We have twenty-five integration tests that fail the
        build if a query forgets the filter. The isolation is a property
        of the codebase, not a deployment decision. We covered the
        verification side of this in a previous whitepaper. Here we
        cover what it buys at migration time.
      </p>

      <h2>Three compounding effects at migration</h2>
      <p>
        <strong>Staging on day one.</strong> The staging schema lands in
        the same database as the target. It is fully tenant-isolated.
        The operator can query their staging data with the same
        credentials they will use to query production data. There is no
        side-channel to coordinate, no separate cloud account, no extra
        network plumbing. The migration team starts work the day the
        engagement begins, not the day cloud provisioning completes.
      </p>
      <p>
        <strong>One recon report, not five.</strong> The recon dashboard
        reads from the same database the production tables sit in. A
        balance-sum query against the legacy extract and a balance-sum
        query against the post-migration target run inside the same
        connection. The recon view that ships to the operator is a
        report, not a federation. They open one URL. The auditor opens
        the same URL.
      </p>
      <p>
        <strong>Hypercare uses production tools.</strong> After cutover,
        the two-week hypercare period uses the same operational
        dashboards as the production support team. There is no
        deployment-specific tooling, no per-tenant runbook, no separate
        on-call rotation. The operator&apos;s problem is the same shape
        as every other tenant&apos;s problem and gets the same
        attention.
      </p>

      <h2>What this trades away</h2>
      <p>
        Multi-tenant isolation costs us optionality. A tenant cannot
        choose their own region today without us routing them to a
        regional cluster, which is a roadmap item, not a sales option.
        A tenant cannot run on their own cloud account. A tenant
        cannot ask for a schema customisation that other tenants do
        not see (configuration extensions are tenant-scoped; schema is
        shared). These are real constraints, and there is a segment of
        the market for which they are deal-breakers. That segment is
        not the segment we serve.
      </p>
      <p>
        Operators of a few thousand up to five hundred thousand contracts
        almost never need a private cloud account. They need a fast
        migration, a transparent recon, and an audit trail that survives
        a regulator query. Multi-tenant target shape is the property
        that delivers those three.
      </p>

      <h2>What the operator sees</h2>
      <p>
        On day one the operator gets a tenant URL, a login, and an
        empty staging schema. On day two, the first legacy extract is
        in staging and the operator can query it. By the end of week
        one, the mapping document is in review and the first dry-run
        has produced its first recon report. The operator&apos;s clock
        moved from "we are waiting for cloud setup" to "we are reading
        our data in the new system" inside one calendar week.
      </p>
      <p>
        That single-week shift is not a marketing claim. It is the
        difference between the target being a deployment artefact and
        the target being a property of the platform we have already
        built.
      </p>

      <h2>What this means for the buyer</h2>
      <p>
        When a buyer evaluates a migration in 2026, the right question
        is not whether the vendor has a migration suite. Vendors have
        migration suites. The right question is what the target shape
        forces the first ninety days to look like. If the first six
        weeks are cloud engineering, the migration suite is downstream
        of a problem the buyer is paying to live through. If the first
        week is data staging, the migration suite is the work itself.
      </p>
      <p>
        We chose row-isolated multi-tenant because it was the
        structurally cheaper path for the segment we serve. The
        migration economics are a consequence, not a goal we backed
        into.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Conversațiile despre migrare se concentrează pe sistemul sursă:
        codul legacy, dicționarul de date, convențiile unui operator care
        a funcționat cincisprezece ani. Forma țintei primește mai puțină
        atenție, ceea ce este o greșeală. Ținta decide cum arată primele
        nouăzeci de zile ale proiectului. Argumentăm că pentru operatorii
        mid-tier de lending, o țintă multi-tenant cu izolare la nivel de
        rând este proprietatea structurală care compune peste viteza de
        staging, transparența reconcilierii și costul de suport
        post-cutover.
      </p>

      <h2>Două forme de țintă</h2>
      <p>
        O țintă de migrare este fie un deployment privat per-client, fie
        un deployment multi-tenant cu izolare la nivel de rând. Alegerea
        nu este doar un apel de economie de deployment. Este un apel de
        calendar.
      </p>
      <p>
        Într-un deployment privat per-client, primul element de lucru
        este provizionarea contului de cloud al clientului, a VPC-ului
        clientului, a instanței de bază de date a clientului, a țintei
        de backup a clientului. Două până la șase săptămâni de muncă de
        inginerie cloud înainte ca vreun rând legacy să poată fi pus în
        staging. Echipa de migrare așteaptă. Ceasul operatorului a
        pornit.
      </p>
      <p>
        Într-o țintă multi-tenant cu izolare la nivel de rând, un tenant
        nou este un rând într-o tabelă de tenanți și un claim JWT. În
        ziua întâi tenantul există. În ziua a doua punem primul extract
        legacy în schema de staging a tenantului. În ziua a treia
        operatorul vede datele sale în noul sistem, read-only, alături
        de cele legacy.
      </p>

      <h2>Ce înțelegem prin izolare la nivel de rând</h2>
      <p>
        Fiecare tabelă de business din schema noastră poartă o coloană
        TenantId. Fiecare interogare este filtrată după contextul de
        tenant luat din claim-ul JWT. Avem douăzeci și cinci de teste de
        integrare care fac build-ul să pice dacă o interogare uită
        filtrul. Izolarea este o proprietate a codebase-ului, nu o
        decizie de deployment. Am acoperit partea de verificare a
        acestui lucru într-o hârtie albă anterioară. Aici acoperim ce
        cumpără la momentul migrării.
      </p>

      <h2>Trei efecte care compun la migrare</h2>
      <p>
        <strong>Staging în ziua întâi.</strong> Schema de staging
        aterizează în aceeași bază de date ca ținta. Este complet
        izolată la nivel de tenant. Operatorul poate interoga datele de
        staging cu aceleași credențiale pe care le va folosi pentru
        producție. Nu există un canal lateral de coordonat, niciun cont
        cloud separat, nicio instalație de rețea suplimentară. Echipa
        de migrare începe munca în ziua în care contractul începe, nu
        în ziua în care se termină provizionarea cloud.
      </p>
      <p>
        <strong>Un singur raport de reconciliere, nu cinci.</strong>
        Dashboard-ul de reconciliere citește din aceeași bază de date
        în care stau tabelele de producție. O interogare de sume de
        sold pe extractul legacy și o interogare de sume de sold pe
        ținta post-migrare rulează în aceeași conexiune. Vederea de
        reconciliere care iese către operator este un raport, nu o
        federare. Operatorul deschide un URL. Auditorul deschide
        același URL.
      </p>
      <p>
        <strong>Hypercare folosește unelte de producție.</strong> După
        cutover, perioada de hypercare de două săptămâni folosește
        aceleași dashboard-uri operaționale ca echipa de suport de
        producție. Nu există tooling specific de deployment, niciun
        runbook per-tenant, nicio rotație on-call separată. Problema
        operatorului are aceeași formă ca problema oricărui alt tenant
        și primește aceeași atenție.
      </p>

      <h2>Ce sacrificăm</h2>
      <p>
        Izolarea multi-tenant ne costă opționalitate. Un tenant nu își
        poate alege regiunea singur astăzi fără ca noi să îl rutăm către
        un cluster regional, ceea ce este un element de roadmap, nu o
        opțiune comercială. Un tenant nu poate rula pe contul său de
        cloud. Un tenant nu poate cere o personalizare de schemă pe
        care ceilalți tenanți să nu o vadă (extensiile de configurare
        sunt scoped-tenant; schema este partajată). Acestea sunt
        constrângeri reale și există un segment de piață pentru care
        sunt deal-breakers. Acel segment nu este segmentul pe care îl
        servim.
      </p>
      <p>
        Operatorii de la câteva mii până la cinci sute de mii de
        contracte aproape niciodată nu au nevoie de un cont cloud
        privat. Au nevoie de o migrare rapidă, de o reconciliere
        transparentă, și de un audit trail care rezistă la o
        interogare de regulator. Forma de țintă multi-tenant este
        proprietatea care livrează cele trei.
      </p>

      <h2>Ce vede operatorul</h2>
      <p>
        În ziua întâi operatorul primește un URL de tenant, un login și
        o schemă de staging goală. În ziua a doua, primul extract
        legacy este în staging și operatorul îl poate interoga. La
        sfârșitul primei săptămâni, documentul de mapare este în
        revizie și primul dry-run a produs primul său raport de
        reconciliere. Ceasul operatorului a trecut de la "așteptăm
        setup-ul cloud" la "ne citim datele în noul sistem" într-o
        săptămână calendaristică.
      </p>
      <p>
        Acea schimbare de o săptămână nu este o afirmație de marketing.
        Este diferența dintre țintă ca artefact de deployment și țintă
        ca proprietate a platformei pe care am construit-o deja.
      </p>

      <h2>Ce înseamnă pentru cumpărător</h2>
      <p>
        Când un cumpărător evaluează o migrare în 2026, întrebarea
        corectă nu este dacă vendorul are o suită de migrare. Vendorii
        au suite de migrare. Întrebarea corectă este ce forțează forma
        țintei să arate primele nouăzeci de zile. Dacă primele șase
        săptămâni sunt inginerie cloud, suita de migrare este în aval
        de o problemă pe care cumpărătorul plătește să o trăiască.
        Dacă prima săptămână este staging de date, suita de migrare
        este munca însăși.
      </p>
      <p>
        Am ales multi-tenant cu izolare la nivel de rând pentru că era
        calea structural mai ieftină pentru segmentul pe care îl
        servim. Economia migrării este o consecință, nu un obiectiv
        spre care am navigat invers.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Migrationsgespräche konzentrieren sich auf das Quellsystem: den
        Legacy-Code, das Datenwörterbuch, die Konventionen eines
        Betreibers, der fünfzehn Jahre läuft. Die Form des Ziels bekommt
        weniger Aufmerksamkeit, was ein Fehler ist. Das Ziel entscheidet,
        wie die ersten neunzig Tage des Projekts aussehen. Wir
        argumentieren, dass für Mid-Tier-Lending-Betreiber eine
        Multi-Tenant-Zielform mit Zeilenebenen-Isolation die
        strukturelle Eigenschaft ist, die sich über
        Staging-Geschwindigkeit, Abgleichstransparenz und
        Post-Cutover-Supportkosten zinsanhäuft.
      </p>

      <h2>Zwei Zielformen</h2>
      <p>
        Ein Migrationsziel ist entweder ein kundenspezifisches privates
        Deployment oder ein Multi-Tenant-Deployment mit
        Zeilenebenen-Isolation. Die Wahl ist nicht nur ein
        Deployment-Ökonomie-Anruf. Es ist ein Kalender-Anruf.
      </p>
      <p>
        Bei einem kundenspezifischen privaten Deployment ist die erste
        Arbeitseinheit das Provisionieren des Cloud-Accounts des Kunden,
        der VPC des Kunden, der Datenbankinstanz des Kunden, des
        Backup-Ziels des Kunden. Zwei bis sechs Wochen
        Cloud-Engineering-Arbeit, bevor irgendeine Legacy-Zeile gestaged
        werden kann. Das Migrationsteam wartet. Die Uhr des Betreibers
        läuft.
      </p>
      <p>
        Bei einem Multi-Tenant-Ziel mit Zeilenebenen-Isolation ist ein
        neuer Tenant eine Zeile in einer Tenant-Tabelle und ein
        JWT-Claim. An Tag eins existiert der Tenant. An Tag zwei stagen
        wir den ersten Legacy-Extrakt in das Staging-Schema des Tenants.
        An Tag drei sieht der Betreiber seine Daten im neuen System,
        read-only, neben den Legacy-Daten.
      </p>

      <h2>Was wir unter Zeilenebenen-Isolation verstehen</h2>
      <p>
        Jede Geschäftstabelle in unserem Schema trägt eine
        TenantId-Spalte. Jede Abfrage wird nach dem aus dem JWT-Claim
        genommenen Tenant-Kontext gefiltert. Wir haben fünfundzwanzig
        Integrationstests, die den Build fehlschlagen lassen, wenn eine
        Abfrage den Filter vergisst. Die Isolation ist eine Eigenschaft
        des Codebase, keine Deployment-Entscheidung. Wir haben die
        Verifikationsseite davon in einem früheren Whitepaper behandelt.
        Hier behandeln wir, was sie bei der Migration bringt.
      </p>

      <h2>Drei sich zinsanhäufende Effekte bei der Migration</h2>
      <p>
        <strong>Staging an Tag eins.</strong> Das Staging-Schema landet
        in der gleichen Datenbank wie das Ziel. Es ist vollständig
        tenant-isoliert. Der Betreiber kann seine Staging-Daten mit den
        gleichen Anmeldedaten abfragen, die er für Produktionsdaten
        verwenden wird. Es gibt keinen Side-Channel zu koordinieren,
        keinen separaten Cloud-Account, keine zusätzliche
        Netzwerk-Verkabelung. Das Migrationsteam beginnt die Arbeit am
        Tag des Engagement-Beginns, nicht am Tag des Abschlusses der
        Cloud-Provisionierung.
      </p>
      <p>
        <strong>Ein Abgleichsbericht, nicht fünf.</strong> Das
        Abgleichs-Dashboard liest aus derselben Datenbank, in der die
        Produktionstabellen sitzen. Eine Saldo-Summen-Abfrage gegen den
        Legacy-Extrakt und eine Saldo-Summen-Abfrage gegen das
        Post-Migrationsziel laufen innerhalb derselben Verbindung. Die
        Abgleichs-Ansicht, die zum Betreiber geht, ist ein Bericht,
        keine Föderation. Sie öffnen eine URL. Der Auditor öffnet
        dieselbe URL.
      </p>
      <p>
        <strong>Hypercare verwendet Produktionswerkzeuge.</strong> Nach
        dem Cutover verwendet die zweiwöchige Hypercare-Periode dieselben
        operativen Dashboards wie das Produktionssupportteam. Es gibt
        kein deployment-spezifisches Tooling, kein
        Per-Tenant-Runbook, keine separate On-Call-Rotation. Das
        Problem des Betreibers hat dieselbe Form wie das Problem jedes
        anderen Tenants und bekommt dieselbe Aufmerksamkeit.
      </p>

      <h2>Was wir dafür eintauschen</h2>
      <p>
        Multi-Tenant-Isolation kostet uns Optionalität. Ein Tenant kann
        heute seine eigene Region nicht wählen, ohne dass wir ihn auf
        einen regionalen Cluster routen, was ein Roadmap-Punkt ist,
        keine Vertriebsoption. Ein Tenant kann nicht auf seinem eigenen
        Cloud-Account laufen. Ein Tenant kann keine Schema-Anpassung
        verlangen, die andere Tenants nicht sehen
        (Konfigurations-Erweiterungen sind tenant-scoped; das Schema
        wird geteilt). Das sind reale Einschränkungen, und es gibt ein
        Marktsegment, für das sie Deal-Breaker sind. Dieses Segment ist
        nicht das Segment, dem wir dienen.
      </p>
      <p>
        Betreiber von einigen tausend bis fünfhunderttausend Verträgen
        brauchen fast nie einen privaten Cloud-Account. Sie brauchen
        eine schnelle Migration, einen transparenten Abgleich und eine
        Audit-Spur, die eine Regulator-Abfrage überlebt.
        Multi-Tenant-Zielform ist die Eigenschaft, die diese drei
        liefert.
      </p>

      <h2>Was der Betreiber sieht</h2>
      <p>
        An Tag eins bekommt der Betreiber eine Tenant-URL, ein Login und
        ein leeres Staging-Schema. An Tag zwei ist der erste
        Legacy-Extrakt im Staging und der Betreiber kann ihn abfragen.
        Am Ende der ersten Woche ist das Mapping-Dokument in Prüfung,
        und der erste Probelauf hat seinen ersten Abgleichsbericht
        produziert. Die Uhr des Betreibers ist von "wir warten auf das
        Cloud-Setup" zu "wir lesen unsere Daten im neuen System"
        innerhalb einer Kalenderwoche gewechselt.
      </p>
      <p>
        Diese einwöchige Verschiebung ist keine Marketingbehauptung. Sie
        ist der Unterschied zwischen dem Ziel als Deployment-Artefakt
        und dem Ziel als Eigenschaft der Plattform, die wir bereits
        gebaut haben.
      </p>

      <h2>Was das für den Käufer bedeutet</h2>
      <p>
        Wenn ein Käufer 2026 eine Migration bewertet, lautet die richtige
        Frage nicht, ob der Anbieter eine Migrations-Suite hat. Anbieter
        haben Migrations-Suiten. Die richtige Frage ist, was die
        Zielform die ersten neunzig Tage zu sein zwingt. Wenn die ersten
        sechs Wochen Cloud-Engineering sind, ist die Migrations-Suite
        stromabwärts eines Problems, durch das der Käufer dafür bezahlt
        zu leben. Wenn die erste Woche Daten-Staging ist, ist die
        Migrations-Suite die Arbeit selbst.
      </p>
      <p>
        Wir wählten zeilen-isoliert Multi-Tenant, weil es der
        strukturell günstigere Weg für das Segment war, dem wir dienen.
        Die Migrationsökonomie ist eine Konsequenz, kein Ziel, das wir
        rückwärts erreicht haben.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Les conversations sur la migration se concentrent sur le système
        source : le code legacy, le dictionnaire de données, les
        conventions d&apos;un opérateur qui tourne depuis quinze ans. La
        forme de la cible reçoit moins d&apos;attention, ce qui est une
        erreur. La cible décide à quoi ressemblent les premiers
        quatre-vingt-dix jours du projet. Nous soutenons que pour les
        opérateurs mid-tier du lending, une cible multi-tenant avec
        isolation au niveau ligne est la propriété structurelle qui
        compose sur la vitesse de staging, la transparence du
        rapprochement et le coût de support post-bascule.
      </p>

      <h2>Deux formes de cible</h2>
      <p>
        Une cible de migration est soit un déploiement privé par client,
        soit un déploiement multi-tenant avec isolation au niveau ligne.
        Le choix n&apos;est pas seulement un appel
        d&apos;économie-de-déploiement. C&apos;est un appel de
        calendrier.
      </p>
      <p>
        Dans un déploiement privé par client, le premier élément de
        travail est le provisioning du compte cloud du client, du VPC du
        client, de l&apos;instance de base de données du client, de la
        cible de sauvegarde du client. Deux à six semaines de travail
        d&apos;ingénierie cloud avant qu&apos;aucune ligne legacy ne
        puisse être stockée en staging. L&apos;équipe de migration
        attend. L&apos;horloge de l&apos;opérateur a démarré.
      </p>
      <p>
        Dans une cible multi-tenant avec isolation au niveau ligne, un
        nouveau tenant est une ligne dans une table tenant et une claim
        JWT. Jour un, le tenant existe. Jour deux, nous stockons le
        premier extrait legacy dans le schéma de staging du tenant.
        Jour trois, l&apos;opérateur voit ses données dans le nouveau
        système, en lecture seule, à côté du legacy.
      </p>

      <h2>Ce que nous entendons par isolation au niveau ligne</h2>
      <p>
        Chaque table métier de notre schéma porte une colonne TenantId.
        Chaque requête est filtrée selon le contexte tenant pris du
        claim JWT. Nous avons vingt-cinq tests d&apos;intégration qui
        font échouer le build si une requête oublie le filtre.
        L&apos;isolation est une propriété du codebase, pas une
        décision de déploiement. Nous avons couvert le côté
        vérification dans un whitepaper précédent. Ici nous couvrons
        ce que cela apporte au moment de la migration.
      </p>

      <h2>Trois effets composés à la migration</h2>
      <p>
        <strong>Staging dès le jour un.</strong> Le schéma de staging
        atterrit dans la même base de données que la cible. Il est
        entièrement isolé tenant. L&apos;opérateur peut interroger ses
        données de staging avec les mêmes identifiants qu&apos;il
        utilisera pour les données de production. Pas de canal latéral
        à coordonner, pas de compte cloud séparé, pas de plomberie
        réseau supplémentaire. L&apos;équipe de migration commence le
        travail le jour où l&apos;engagement commence, pas le jour où
        le provisioning cloud se termine.
      </p>
      <p>
        <strong>Un rapport de rapprochement, pas cinq.</strong> Le
        tableau de bord de rapprochement lit dans la même base de
        données que les tables de production. Une requête de sommes de
        soldes contre l&apos;extrait legacy et une requête de sommes de
        soldes contre la cible post-migration s&apos;exécutent dans la
        même connexion. La vue de rapprochement qui part chez
        l&apos;opérateur est un rapport, pas une fédération. Il ouvre
        une URL. L&apos;auditeur ouvre la même URL.
      </p>
      <p>
        <strong>L&apos;hypercare utilise des outils de production.</strong>
        Après la bascule, la période d&apos;hypercare de deux semaines
        utilise les mêmes tableaux de bord opérationnels que
        l&apos;équipe de support de production. Pas d&apos;outillage
        spécifique au déploiement, pas de runbook par tenant, pas de
        rotation d&apos;astreinte séparée. Le problème de
        l&apos;opérateur a la même forme que le problème de tout autre
        tenant et reçoit la même attention.
      </p>

      <h2>Ce que cela échange</h2>
      <p>
        L&apos;isolation multi-tenant nous coûte de l&apos;optionalité.
        Un tenant ne peut pas choisir sa propre région aujourd&apos;hui
        sans que nous le routions vers un cluster régional, ce qui est
        un élément de roadmap, pas une option de vente. Un tenant ne
        peut pas tourner sur son propre compte cloud. Un tenant ne peut
        pas demander une personnalisation de schéma que les autres
        tenants ne verront pas (les extensions de configuration sont
        scoped-tenant ; le schéma est partagé). Ce sont des contraintes
        réelles, et il y a un segment de marché pour lequel elles sont
        rédhibitoires. Ce segment n&apos;est pas le segment que nous
        servons.
      </p>
      <p>
        Les opérateurs de quelques milliers jusqu&apos;à cinq cent mille
        contrats n&apos;ont presque jamais besoin d&apos;un compte cloud
        privé. Ils ont besoin d&apos;une migration rapide, d&apos;un
        rapprochement transparent, et d&apos;une piste d&apos;audit qui
        survit à une requête de régulateur. La forme cible multi-tenant
        est la propriété qui livre ces trois.
      </p>

      <h2>Ce que voit l&apos;opérateur</h2>
      <p>
        Jour un, l&apos;opérateur reçoit une URL de tenant, un login,
        et un schéma de staging vide. Jour deux, le premier extrait
        legacy est en staging et l&apos;opérateur peut
        l&apos;interroger. À la fin de la première semaine, le document
        de mapping est en revue et le premier dry-run a produit son
        premier rapport de rapprochement. L&apos;horloge de
        l&apos;opérateur est passée de "nous attendons la configuration
        cloud" à "nous lisons nos données dans le nouveau système" en
        une semaine calendaire.
      </p>
      <p>
        Ce décalage d&apos;une semaine n&apos;est pas une affirmation
        marketing. C&apos;est la différence entre la cible comme
        artefact de déploiement et la cible comme propriété de la
        plateforme que nous avons déjà construite.
      </p>

      <h2>Ce que cela signifie pour l&apos;acheteur</h2>
      <p>
        Quand un acheteur évalue une migration en 2026, la bonne
        question n&apos;est pas si le vendeur a une suite de migration.
        Les vendeurs ont des suites de migration. La bonne question est
        à quoi la forme cible force les premiers quatre-vingt-dix jours
        à ressembler. Si les six premières semaines sont de
        l&apos;ingénierie cloud, la suite de migration est en aval
        d&apos;un problème que l&apos;acheteur paie pour vivre. Si la
        première semaine est du staging de données, la suite de
        migration est le travail lui-même.
      </p>
      <p>
        Nous avons choisi multi-tenant isolé au niveau ligne parce que
        c&apos;était le chemin structurellement le moins cher pour le
        segment que nous servons. L&apos;économie de migration est une
        conséquence, pas un objectif vers lequel nous avons remonté.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Le conversazioni sulla migrazione si concentrano sul sistema
        sorgente: il codice legacy, il dizionario dati, le convenzioni di
        un operatore che gira da quindici anni. La forma del target
        riceve meno attenzione, il che è un errore. Il target decide
        come appaiono i primi novanta giorni del progetto. Sosteniamo
        che per gli operatori mid-tier del lending, un target
        multi-tenant con isolamento a livello riga è la proprietà
        strutturale che si compone su velocità di staging, trasparenza
        di riconciliazione e costo di supporto post-cutover.
      </p>

      <h2>Due forme di target</h2>
      <p>
        Un target di migrazione è o un deployment privato per cliente,
        o un deployment multi-tenant con isolamento a livello riga. La
        scelta non è solo una chiamata di economia di deployment. È
        una chiamata di calendario.
      </p>
      <p>
        In un deployment privato per cliente, il primo elemento di
        lavoro è il provisioning dell&apos;account cloud del cliente,
        del VPC del cliente, dell&apos;istanza di database del cliente,
        del target di backup del cliente. Da due a sei settimane di
        lavoro di ingegneria cloud prima che alcuna riga legacy possa
        essere messa in staging. Il team di migrazione aspetta.
        L&apos;orologio dell&apos;operatore è partito.
      </p>
      <p>
        In un target multi-tenant con isolamento a livello riga, un
        nuovo tenant è una riga in una tabella tenant e una claim JWT.
        Giorno uno il tenant esiste. Giorno due mettiamo in staging il
        primo extract legacy nello schema di staging del tenant.
        Giorno tre l&apos;operatore vede i suoi dati nel nuovo
        sistema, in sola lettura, accanto al legacy.
      </p>

      <h2>Cosa intendiamo per isolamento a livello riga</h2>
      <p>
        Ogni tabella di business nel nostro schema porta una colonna
        TenantId. Ogni query è filtrata per il contesto tenant preso
        dalla claim JWT. Abbiamo venticinque test di integrazione che
        fanno fallire la build se una query dimentica il filtro.
        L&apos;isolamento è una proprietà del codebase, non una
        decisione di deployment. Abbiamo coperto il lato verifica in un
        whitepaper precedente. Qui copriamo cosa porta al momento della
        migrazione.
      </p>

      <h2>Tre effetti che si compongono alla migrazione</h2>
      <p>
        <strong>Staging dal giorno uno.</strong> Lo schema di staging
        atterra nello stesso database del target. È completamente
        isolato per tenant. L&apos;operatore può interrogare i suoi
        dati di staging con le stesse credenziali che userà per i dati
        di produzione. Nessun canale laterale da coordinare, nessun
        account cloud separato, nessuna idraulica di rete aggiuntiva.
        Il team di migrazione inizia il lavoro nel giorno in cui
        l&apos;ingaggio inizia, non nel giorno in cui il provisioning
        cloud si conclude.
      </p>
      <p>
        <strong>Un report di riconciliazione, non cinque.</strong> La
        dashboard di riconciliazione legge dallo stesso database in cui
        siedono le tabelle di produzione. Una query di somme di saldo
        contro l&apos;extract legacy e una query di somme di saldo
        contro il target post-migrazione girano nella stessa
        connessione. La vista di riconciliazione che esce
        all&apos;operatore è un report, non una federazione. Apre un
        URL. L&apos;auditor apre lo stesso URL.
      </p>
      <p>
        <strong>L&apos;hypercare usa strumenti di produzione.</strong>
        Dopo il cutover, il periodo di hypercare di due settimane usa
        le stesse dashboard operative del team di supporto di
        produzione. Nessun tooling specifico per deployment, nessun
        runbook per tenant, nessuna rotazione on-call separata. Il
        problema dell&apos;operatore ha la stessa forma del problema
        di ogni altro tenant e riceve la stessa attenzione.
      </p>

      <h2>Cosa scambiamo in cambio</h2>
      <p>
        L&apos;isolamento multi-tenant ci costa opzionalità. Un tenant
        non può scegliere oggi la propria regione senza che noi lo
        instradiamo a un cluster regionale, che è un elemento di
        roadmap, non un&apos;opzione di vendita. Un tenant non può
        girare sul proprio account cloud. Un tenant non può chiedere
        una personalizzazione di schema che altri tenant non vedranno
        (le estensioni di configurazione sono scoped-tenant; lo schema
        è condiviso). Sono vincoli reali, e c&apos;è un segmento di
        mercato per cui sono deal-breaker. Quel segmento non è il
        segmento che serviamo.
      </p>
      <p>
        Operatori da qualche migliaio fino a cinquecentomila contratti
        non hanno quasi mai bisogno di un account cloud privato. Hanno
        bisogno di una migrazione veloce, di una riconciliazione
        trasparente, e di una traccia d&apos;audit che sopravvive a
        una richiesta del regolatore. La forma target multi-tenant è
        la proprietà che consegna queste tre.
      </p>

      <h2>Cosa vede l&apos;operatore</h2>
      <p>
        Giorno uno l&apos;operatore riceve un URL di tenant, un login
        e uno schema di staging vuoto. Giorno due, il primo extract
        legacy è in staging e l&apos;operatore può interrogarlo. Alla
        fine della prima settimana, il documento di mapping è in
        revisione e il primo dry-run ha prodotto il suo primo report
        di riconciliazione. L&apos;orologio dell&apos;operatore è
        passato da "stiamo aspettando il setup cloud" a "stiamo
        leggendo i nostri dati nel nuovo sistema" in una settimana di
        calendario.
      </p>
      <p>
        Quello spostamento di una settimana non è una rivendicazione di
        marketing. È la differenza tra il target come artefatto di
        deployment e il target come proprietà della piattaforma che
        abbiamo già costruito.
      </p>

      <h2>Cosa significa per l&apos;acquirente</h2>
      <p>
        Quando un acquirente valuta una migrazione nel 2026, la
        domanda giusta non è se il vendor ha una suite di migrazione.
        I vendor hanno suite di migrazione. La domanda giusta è cosa
        la forma target costringe i primi novanta giorni a essere. Se
        le prime sei settimane sono ingegneria cloud, la suite di
        migrazione è a valle di un problema che l&apos;acquirente sta
        pagando per vivere. Se la prima settimana è staging dati, la
        suite di migrazione è il lavoro stesso.
      </p>
      <p>
        Abbiamo scelto multi-tenant isolato a livello riga perché era
        il percorso strutturalmente più economico per il segmento che
        serviamo. L&apos;economia di migrazione è una conseguenza, non
        un obiettivo a cui siamo risaliti.
      </p>
    </div>
  );
}
