/**
 * Whitepaper #3: Multi-tenant isolation as a property, not a promise.
 *
 * Argues that "we are multi-tenant" is a checkbox most vendors tick without
 * proof, and walks through what we actually pin in CI so isolation is a
 * verified property of the platform rather than a marketing claim.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete numbers over adjectives. Cite the test count and the
 *    behaviour pinned, not "rigorous testing".
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function MultiTenantIsolationAsAProperty({ locale }: ContentProps) {
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
        In an RFP, the checkbox &quot;multi-tenant SaaS&quot; usually gets a tick
        without anyone defining what it means. The result is a category of
        platforms that share a logo across customers and almost nothing else.
        Two customers, two installations, two database backups, two upgrade
        windows. Branded multi-tenant, operated single-tenant. The economics
        of that arrangement are not the economics buyers think they are
        signing up for.
      </p>

      <h2>What we mean by isolation</h2>
      <p>
        We mean three concrete things. A single database instance per
        deployment, shared between tenants. A <code>TenantId</code> column on
        every business table, populated on write and filtered on read by the
        application layer. A request pipeline that fails closed when the
        tenant context is missing, so a bug that omits the filter cannot
        silently leak rows. Each of those three is testable in isolation, and
        the failure modes of the third are the ones that matter most.
      </p>

      <h2>What we verify in CI</h2>
      <p>
        Twenty-five integration tests in our continuous integration pipeline
        exercise the isolation contract. They spin up two tenants in a test
        database, seed each with overlapping but distinct data, log a user
        into tenant A, and call every read and write surface that a user can
        reach. Then they assert that tenant A&apos;s caller cannot list,
        download, modify, or even count a single row that belongs to tenant B.
        The suite covers documents, contracts, partners, audit log,
        notifications, signalling, scoring, and the cross-tenant Group COO
        aggregation that intentionally crosses tenants under a separate
        policy.
      </p>
      <p>
        The suite has caught three leaks in production code before they
        shipped. One in a document lookup that joined to a table without its
        own tenant filter. One in an AML check delete that did not assert the
        affected row count. One in an origination lookup that scoped by user
        but not by tenant. None of those would have been caught by manual
        review. All three were caught by a test that took six lines to write.
      </p>

      <h2>Where row-level isolation is honest about its trade-offs</h2>
      <p>
        Row-level isolation buys SaaS economics. One backup, one upgrade,
        one performance investment that benefits everyone. The trade-off is
        real. A database-wide incident affects every tenant. A schema change
        ships to every tenant at once. A noisy query from one tenant shares
        the same connection pool as every other tenant.
      </p>
      <p>
        We mitigate the first with per-tenant point-in-time restore, the
        second with backward-compatible migration patterns enforced by a
        schema review checklist, and the third with read replicas and query
        budgets per tenant. None of these are exotic. They are the price of
        admission for operating a multi-tenant platform honestly. We charge
        ourselves that price up front rather than discovering it on the day
        a regulator asks for evidence.
      </p>

      <h2>Why this matters for the segment we serve</h2>
      <p>
        Mid-tier non-bank lenders, captives, and independent fleets cannot
        afford the per-customer cost of single-tenant hosted platforms. They
        also cannot afford a regulator finding that their vendor&apos;s
        &quot;multi-tenant&quot; was only the marketing kind. Isolation as a
        verified property, not a promise, is what makes the SaaS price point
        defendable in front of an auditor and an underwriter at the same
        time. It is one of the few engineering decisions in this segment that
        is simultaneously a cost decision and a credibility decision.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Într-un RFP, bifa &quot;multi-tenant SaaS&quot; primește în general un
        DA fără ca cineva să definească ce înseamnă. Rezultatul e o categorie
        de platforme care împart un logo între clienți și aproape nimic
        altceva. Doi clienți, două instalări, două backup-uri de bază de
        date, două ferestre de upgrade. Multi-tenant la marcă, single-tenant
        în operare. Economia acelui aranjament nu e economia pe care o cred
        cumpărătorii când semnează.
      </p>

      <h2>Ce înțelegem prin izolare</h2>
      <p>
        Înțelegem trei lucruri concrete. O singură instanță de bază de date
        per deployment, partajată între tenanți. O coloană <code>TenantId</code> pe
        fiecare tabel de business, populată la scriere și filtrată la citire
        de stratul aplicație. Un pipeline de request care eșuează închis când
        contextul de tenant lipsește, astfel încât un bug care omite filtrul
        nu poate scurge rânduri tăcut. Fiecare dintre cele trei e testabil
        izolat, iar modurile de eșec ale celui de-al treilea sunt cele care
        contează cel mai mult.
      </p>

      <h2>Ce verificăm în CI</h2>
      <p>
        Douăzeci și cinci de teste de integrare în pipeline-ul nostru CI
        exercită contractul de izolare. Pornesc doi tenanți într-o bază de
        date de test, le populează cu date suprapuse dar distincte, autentifică
        un utilizator în tenantul A, și apelează fiecare suprafață de
        citire și scriere accesibilă unui utilizator. Apoi afirmă că
        apelantul tenantului A nu poate lista, descărca, modifica sau măcar
        număra un singur rând care aparține tenantului B. Suita acoperă
        documente, contracte, parteneri, audit log, notificări, semnale,
        scoring, și agregarea cross-tenant Group COO care intenționat
        traversează tenanți sub o politică separată.
      </p>
      <p>
        Suita a prins trei scurgeri în cod de producție înainte să iasă. Una
        într-o căutare de documente care făcea join către o tabelă fără
        propriul filtru de tenant. Una într-un delete de AML check care nu
        verifica numărul de rânduri afectate. Una într-o căutare de
        originare care scopa după utilizator dar nu după tenant. Niciuna nu
        ar fi fost prinsă printr-un review manual. Toate trei au fost prinse
        de un test scris în șase linii.
      </p>

      <h2>Unde izolarea la nivel de rând e onestă în privința compromisurilor</h2>
      <p>
        Izolarea la nivel de rând cumpără economie SaaS. Un backup, un
        upgrade, o investiție de performanță care folosește tuturor.
        Compromisul e real. Un incident la nivel de bază de date afectează
        fiecare tenant. O schimbare de schemă livrează către fiecare tenant
        deodată. O interogare zgomotoasă de la un tenant împarte același
        connection pool cu toți ceilalți.
      </p>
      <p>
        Mitigăm primul cu restore point-in-time per tenant, al doilea cu
        pattern-uri de migrație backward-compatible aplicate de o listă de
        verificare a schemei, al treilea cu read replicas și bugete de
        interogare per tenant. Niciuna nu e exotică. Sunt prețul de intrare
        pentru a opera o platformă multi-tenant onest. Plătim acel preț în
        avans, nu îl descoperim în ziua în care un regulator cere dovezi.
      </p>

      <h2>De ce contează pentru segmentul pe care îl servim</h2>
      <p>
        IFN-urile mid-tier, captive-urile, și flotele independente nu își
        permit costul per client al platformelor single-tenant hosted. Dar
        nu își permit nici un regulator care descoperă că
        &quot;multi-tenant&quot; al furnizorului a fost doar genul de
        marketing. Izolarea ca proprietate verificată, nu ca promisiune, e
        ce face prețul SaaS defensabil în fața unui auditor și a unui
        underwriter în același timp. E una dintre puținele decizii de
        inginerie din acest segment care e simultan o decizie de cost și o
        decizie de credibilitate.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        In einem RFP bekommt das Kästchen &quot;multi-tenant SaaS&quot;
        meistens ein Häkchen, ohne dass jemand definiert, was das eigentlich
        bedeutet. Das Ergebnis ist eine Kategorie von Plattformen, die ein
        Logo zwischen Kunden teilen und fast nichts anderes. Zwei Kunden,
        zwei Installationen, zwei Datenbank-Backups, zwei Upgrade-Fenster.
        Markenseitig multi-tenant, betrieblich single-tenant. Die Ökonomie
        dieser Anordnung ist nicht die, die Käufer beim Unterschreiben
        erwarten.
      </p>

      <h2>Was wir unter Isolation verstehen</h2>
      <p>
        Drei konkrete Dinge. Eine einzige Datenbankinstanz pro Deployment,
        zwischen Tenants geteilt. Eine <code>TenantId</code>-Spalte auf jeder
        Geschäftstabelle, beim Schreiben befüllt und beim Lesen durch die
        Anwendungsschicht gefiltert. Eine Request-Pipeline, die geschlossen
        scheitert, wenn der Tenant-Kontext fehlt, sodass ein Bug, der den
        Filter weglässt, keine Zeilen lautlos durchlassen kann. Jeder der
        drei Punkte ist isoliert testbar, und die Fehlermodi des dritten
        sind die wichtigsten.
      </p>

      <h2>Was wir in CI verifizieren</h2>
      <p>
        Fünfundzwanzig Integrationstests in unserer CI-Pipeline prüfen den
        Isolationskontrakt. Sie starten zwei Tenants in einer Testdatenbank,
        befüllen jeden mit überlappenden aber unterschiedlichen Daten,
        loggen einen Benutzer in Tenant A ein, und rufen jede Lese- und
        Schreiboberfläche auf, die ein Benutzer erreichen kann. Dann
        behaupten sie, dass Tenant A keine einzige Zeile listen, herunterladen,
        ändern oder auch nur zählen kann, die zu Tenant B gehört. Die Suite
        deckt Dokumente, Verträge, Partner, Audit-Log, Benachrichtigungen,
        Signaling, Scoring, und die Cross-Tenant Group-COO-Aggregation ab,
        die absichtlich unter einer separaten Policy Tenants überschreitet.
      </p>
      <p>
        Die Suite hat drei Leaks in Produktionscode abgefangen, bevor sie
        ausgeliefert wurden. Einer in einer Dokumentensuche, die zu einer
        Tabelle ohne eigenen Tenant-Filter jointe. Einer in einem
        AML-Check-Delete, der die betroffene Zeilenanzahl nicht prüfte.
        Einer in einer Origination-Suche, die nach Benutzer aber nicht nach
        Tenant filterte. Keiner davon wäre durch manuelles Review entdeckt
        worden. Alle drei wurden durch einen Test mit sechs Zeilen Code
        gefangen.
      </p>

      <h2>Wo Zeilenebene-Isolation ehrlich über ihre Kompromisse ist</h2>
      <p>
        Zeilenebene-Isolation kauft SaaS-Ökonomie. Ein Backup, ein Upgrade,
        eine Performance-Investition, von der alle profitieren. Der
        Kompromiss ist real. Ein datenbankweiter Vorfall trifft jeden
        Tenant. Ein Schemawechsel landet bei allen Tenants gleichzeitig.
        Eine laute Query eines Tenants teilt sich denselben Connection-Pool
        mit allen anderen.
      </p>
      <p>
        Wir mildern das Erste durch tenantweise Point-in-Time-Restores, das
        Zweite durch rückwärtskompatible Migrationsmuster, durchgesetzt
        durch eine Schema-Review-Checkliste, das Dritte durch Read Replicas
        und Query-Budgets pro Tenant. Nichts davon ist exotisch. Es ist der
        Eintrittspreis, eine Multi-Tenant-Plattform ehrlich zu betreiben.
        Wir berechnen uns diesen Preis im Voraus, anstatt ihn an dem Tag zu
        entdecken, an dem ein Regulator nach Belegen fragt.
      </p>

      <h2>Warum das für das Segment, das wir bedienen, zählt</h2>
      <p>
        Mid-Tier-Nichtbankenfinanzierer, Captives und unabhängige
        Fuhrparkbetreiber können sich die pro-Kunde-Kosten von
        Single-Tenant-Hosted-Plattformen nicht leisten. Sie können sich
        aber auch keinen Regulator leisten, der feststellt, dass das
        &quot;multi-tenant&quot; ihres Anbieters nur die Marketing-Variante
        war. Isolation als verifizierte Eigenschaft, nicht als Versprechen,
        ist das, was den SaaS-Preispunkt vor einem Auditor und einem
        Underwriter gleichzeitig verteidigbar macht. Es ist eine der wenigen
        Engineering-Entscheidungen in diesem Segment, die gleichzeitig eine
        Kosten- und eine Glaubwürdigkeitsentscheidung ist.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Dans un appel d&apos;offres, la case &quot;SaaS multi-tenant&quot;
        reçoit en général une coche sans que quiconque définisse ce qu&apos;elle
        signifie. Le résultat est une catégorie de plateformes qui partagent
        un logo entre clients et presque rien d&apos;autre. Deux clients,
        deux installations, deux sauvegardes, deux fenêtres de mise à jour.
        Multi-tenant côté marque, single-tenant côté opérations.
        L&apos;économie de cet arrangement n&apos;est pas celle que les
        acheteurs croient signer.
      </p>

      <h2>Ce que nous entendons par isolation</h2>
      <p>
        Trois choses concrètes. Une seule instance de base de données par
        déploiement, partagée entre tenants. Une colonne <code>TenantId</code> sur
        chaque table métier, remplie à l&apos;écriture et filtrée à la
        lecture par la couche applicative. Un pipeline de requête qui échoue
        fermé quand le contexte tenant est manquant, de sorte qu&apos;un bug
        qui omet le filtre ne puisse pas laisser fuir des lignes
        silencieusement. Chacun des trois est testable isolément, et les
        modes de défaillance du troisième sont ceux qui comptent le plus.
      </p>

      <h2>Ce que nous vérifions en CI</h2>
      <p>
        Vingt-cinq tests d&apos;intégration dans notre pipeline CI éprouvent
        le contrat d&apos;isolation. Ils démarrent deux tenants dans une
        base de test, alimentent chacun de données chevauchantes mais
        distinctes, connectent un utilisateur dans le tenant A, et appellent
        toutes les surfaces de lecture et d&apos;écriture qu&apos;un
        utilisateur peut atteindre. Puis ils affirment que l&apos;appelant
        du tenant A ne peut lister, télécharger, modifier ou même compter
        une seule ligne appartenant au tenant B. La suite couvre documents,
        contrats, partenaires, journal d&apos;audit, notifications,
        signaling, scoring, et l&apos;agrégation cross-tenant Group COO qui
        traverse intentionnellement les tenants sous une politique séparée.
      </p>
      <p>
        La suite a attrapé trois fuites en code de production avant
        livraison. Une dans une recherche documentaire qui joignait une
        table sans son propre filtre tenant. Une dans une suppression de
        contrôle AML qui ne vérifiait pas le nombre de lignes affectées.
        Une dans une recherche d&apos;origination qui filtrait par
        utilisateur mais pas par tenant. Aucune n&apos;aurait été attrapée
        par revue manuelle. Toutes trois ont été attrapées par un test
        écrit en six lignes.
      </p>

      <h2>Où l&apos;isolation au niveau ligne est honnête sur ses compromis</h2>
      <p>
        L&apos;isolation au niveau ligne achète une économie SaaS. Une
        sauvegarde, une mise à jour, un investissement de performance dont
        tous bénéficient. Le compromis est réel. Un incident au niveau base
        affecte chaque tenant. Un changement de schéma livre à tous les
        tenants en même temps. Une requête bruyante d&apos;un tenant
        partage le même pool de connexions que tous les autres.
      </p>
      <p>
        Nous atténuons le premier par des restaurations point-in-time par
        tenant, le second par des patterns de migration rétrocompatibles
        appliqués par une checklist de revue de schéma, le troisième par
        des read replicas et des budgets de requête par tenant. Rien
        d&apos;exotique. C&apos;est le prix d&apos;entrée pour opérer
        honnêtement une plateforme multi-tenant. Nous nous facturons ce
        prix en amont, plutôt que de le découvrir le jour où un régulateur
        demande des preuves.
      </p>

      <h2>Pourquoi cela compte pour le segment que nous servons</h2>
      <p>
        Les prêteurs non bancaires mid-tier, les captives, et les
        opérateurs de flotte indépendants ne peuvent se permettre le coût
        par client des plateformes single-tenant hébergées. Mais ils ne
        peuvent pas non plus se permettre qu&apos;un régulateur découvre
        que le &quot;multi-tenant&quot; de leur fournisseur n&apos;était
        que la version marketing. L&apos;isolation comme propriété
        vérifiée, et non comme promesse, est ce qui rend le prix SaaS
        défendable devant un auditeur et un souscripteur en même temps.
        C&apos;est l&apos;une des rares décisions d&apos;ingénierie dans
        ce segment qui soit simultanément une décision de coût et une
        décision de crédibilité.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        In una RFP, la casella &quot;SaaS multi-tenant&quot; riceve di solito
        un sì senza che nessuno definisca cosa significhi. Il risultato è
        una categoria di piattaforme che condividono un logo tra clienti e
        quasi nient&apos;altro. Due clienti, due installazioni, due backup
        di database, due finestre di upgrade. Multi-tenant lato marca,
        single-tenant lato operativo. L&apos;economia di questo accordo non
        è quella che gli acquirenti credono di firmare.
      </p>

      <h2>Cosa intendiamo per isolamento</h2>
      <p>
        Tre cose concrete. Una singola istanza di database per deployment,
        condivisa tra tenant. Una colonna <code>TenantId</code> su ogni
        tabella di business, popolata in scrittura e filtrata in lettura
        dallo strato applicativo. Una pipeline di richiesta che fallisce
        chiusa quando manca il contesto tenant, in modo che un bug che
        omette il filtro non possa far trapelare righe silenziosamente.
        Ciascuno dei tre è testabile in isolamento, e le modalità di
        fallimento del terzo sono quelle che contano di più.
      </p>

      <h2>Cosa verifichiamo in CI</h2>
      <p>
        Venticinque test di integrazione nella nostra pipeline CI esercitano
        il contratto di isolamento. Avviano due tenant in un database di
        test, popolano ciascuno con dati sovrapposti ma distinti, loggano un
        utente nel tenant A, e chiamano ogni superficie di lettura e
        scrittura raggiungibile da un utente. Poi affermano che il chiamante
        del tenant A non può elencare, scaricare, modificare o nemmeno
        contare una sola riga appartenente al tenant B. La suite copre
        documenti, contratti, partner, audit log, notifiche, signaling,
        scoring, e l&apos;aggregazione cross-tenant Group COO che
        intenzionalmente attraversa tenant sotto una policy separata.
      </p>
      <p>
        La suite ha intercettato tre falle in codice di produzione prima
        del rilascio. Una in una ricerca documentale che faceva join verso
        una tabella senza filtro tenant proprio. Una in un delete di
        controllo AML che non verificava il numero di righe interessate.
        Una in una ricerca di origination che filtrava per utente ma non
        per tenant. Nessuna sarebbe stata intercettata da una review
        manuale. Tutte e tre sono state intercettate da un test scritto in
        sei righe.
      </p>

      <h2>Dove l&apos;isolamento a livello riga è onesto sui compromessi</h2>
      <p>
        L&apos;isolamento a livello riga compra l&apos;economia SaaS. Un
        backup, un upgrade, un investimento di performance che beneficia
        tutti. Il compromesso è reale. Un incidente a livello database
        colpisce ogni tenant. Un cambio di schema arriva a tutti i tenant
        insieme. Una query rumorosa di un tenant condivide lo stesso pool
        di connessioni con tutti gli altri.
      </p>
      <p>
        Mitighiamo il primo con restore point-in-time per tenant, il
        secondo con pattern di migrazione retrocompatibili applicati da una
        checklist di review di schema, il terzo con read replica e budget
        di query per tenant. Niente di esotico. È il prezzo
        d&apos;ingresso per operare onestamente una piattaforma
        multi-tenant. Ci addebitiamo questo prezzo in anticipo, invece di
        scoprirlo il giorno in cui un regolatore chiede prove.
      </p>

      <h2>Perché conta per il segmento che serviamo</h2>
      <p>
        I prestatori non bancari mid-tier, le captive, e gli operatori di
        flotta indipendenti non possono permettersi il costo per cliente
        delle piattaforme single-tenant hosted. Ma non possono nemmeno
        permettersi un regolatore che scopre che il &quot;multi-tenant&quot;
        del loro fornitore era solo la versione marketing. L&apos;isolamento
        come proprietà verificata, non come promessa, è ciò che rende il
        prezzo SaaS difendibile davanti a un auditor e a un underwriter
        contemporaneamente. È una delle poche decisioni ingegneristiche in
        questo segmento che è simultaneamente una decisione di costo e una
        decisione di credibilità.
      </p>
    </div>
  );
}
