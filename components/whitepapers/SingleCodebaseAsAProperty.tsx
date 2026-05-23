/**
 * Whitepaper #4: Single codebase as a property, not a portal.
 *
 * Counters the legacy "unified portal over N codebases" narrative. The
 * argument: a portal that unifies five backends still leaves five backends.
 * Single codebase is a structural property that compounds across audit,
 * AI codepath uniformity, schema migrations, and deployment economics.
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

export default function SingleCodebaseAsAProperty({ locale }: ContentProps) {
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
        Sooner or later a vendor that has carried five products through three
        acquisitions points to a new portal and calls itself unified. The
        portal is real. The screens are pretty. The five backends are still
        five backends. The federation tax shows up later: in the audit
        evidence, in the migration calendar, in the path an AI agent has to
        walk to read a single customer record, and in the change-request
        queue that fans out to five teams every time a new disclosure rule
        ships.
      </p>

      <h2>What we mean by single codebase</h2>
      <p>
        One repository, one solution graph, one binary, one schema for the
        core platform. Five verticals (Asset Finance, Fleet, Working Capital,
        Consumer Credit, Secured Microcredit) share one engine, one tenant
        context, one audit log, one workflow orchestrator. Two services run
        out of process because they speak the language of distributed
        systems natively: the workflow orchestrator and the model sidecar.
        That is the whole topology. We can draw it on a napkin.
      </p>
      <p>
        The MCP server is a separate process because agents are a separate
        consumer class, not because the platform is fragmenting. Everything
        else lives in one place.
      </p>

      <h2>Why this compounds</h2>
      <p>
        <strong>One audit codepath.</strong> Every business action writes to
        one immutable audit log with one schema. A regulator that asks for a
        thematic data extract gets one query, not a federation plan.
      </p>
      <p>
        <strong>One AI codepath.</strong> The model sidecar speaks to a
        single engine. The document extraction pipeline runs against one
        document store. The credit risk advisory layer monitors one set of
        contracts. Agents that touch the platform through MCP see the same
        view a human sees, not a portal projection over different data
        substrates.
      </p>
      <p>
        <strong>One schema migration calendar.</strong> A new disclosure
        rule ships as a single migration with one set of integration tests.
        We do not coordinate across teams that own different codebases. The
        twenty-nine numbered migrations in our history are one cumulative
        artefact, not five overlapping ones.
      </p>
      <p>
        <strong>One deployment unit.</strong> The platform ships as one
        binary plus two sidecar processes. We add features without adding
        deployment surface. The operational on-call rotation reflects this:
        one process to watch for the core, two sidecars that operate
        independently.
      </p>

      <h2>What this costs us, honestly</h2>
      <p>
        Single codebase is not free. A noisy module can affect the others
        because they share a process. A schema change that needs to ship
        for one vertical lands for all of them in the same window. There is
        no easy story for the day a vertical needs to scale ten times
        faster than the others. We have mapped each of those costs, and we
        have a decomposition path per module that converts them into
        manageable splits when the workload justifies the move.
      </p>
      <p>
        That decomposition path is a property of having a single codebase
        in the first place. We get to choose where to split. A vendor that
        inherits five codebases from five acquisitions does not get to
        choose. They get to coordinate.
      </p>

      <h2>What this means for the buyer</h2>
      <p>
        When a buyer evaluates a lending platform in 2026, the question is
        not whether vendors say they are unified. They all say that now.
        The question is whether the unification holds when an auditor pulls
        a record, when an AI agent runs across the portfolio, when a new
        regulation forces a schema change, when an incident requires a
        single root cause. Single codebase is the property that determines
        whether the answer to all four questions is the same answer, given
        in the same week.
      </p>
      <p>
        One codebase, six verticals, every tenant. The proof is the build
        log. We are happy to walk through it.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Mai devreme sau mai târziu un furnizor care a purtat cinci produse
        prin trei achiziții arată spre un portal nou și se autodeclară
        unificat. Portalul este real. Ecranele sunt frumoase. Cele cinci
        backend-uri rămân cinci backend-uri. Taxa de federare apare mai
        târziu: în dovada de audit, în calendarul de migrare, în calea pe
        care un agent AI trebuie să o parcurgă ca să citească o singură
        înregistrare de client, și în coada de change-request care se
        împarte la cinci echipe de fiecare dată când iese o regulă nouă de
        raportare.
      </p>

      <h2>Ce înțelegem prin single codebase</h2>
      <p>
        Un singur repository, un singur graf de soluție, un singur binar, o
        singură schemă pentru platforma de bază. Cinci verticale (Asset
        Finance, Fleet, Working Capital, Consumer Credit, Secured
        Microcredit) împart un singur motor, un singur context de tenant,
        un singur audit log, un singur orchestrator de workflow. Două
        servicii rulează out-of-process pentru că vorbesc nativ limbajul
        sistemelor distribuite: orchestrator-ul de workflow și sidecar-ul
        de model. Aceasta este toată topologia. O putem desena pe un
        șervețel.
      </p>
      <p>
        Serverul MCP este un proces separat pentru că agenții sunt o clasă
        separată de consumator, nu pentru că platforma se fragmentează.
        Restul trăiește într-un singur loc.
      </p>

      <h2>De ce această proprietate compune</h2>
      <p>
        <strong>O singură cale de audit.</strong> Fiecare acțiune de
        business scrie într-un singur audit log imutabil cu o singură
        schemă. Un regulator care cere o extracție tematică primește o
        interogare, nu un plan de federare.
      </p>
      <p>
        <strong>O singură cale AI.</strong> Sidecar-ul de model vorbește
        cu un singur motor. Pipeline-ul de extracție document rulează pe
        un singur document store. Stratul de credit-risk advisory
        monitorizează un singur set de contracte. Agenții care ating
        platforma prin MCP văd aceeași imagine pe care o vede un om, nu o
        proiecție de portal peste substrate diferite de date.
      </p>
      <p>
        <strong>Un singur calendar de migrare de schemă.</strong> O regulă
        nouă de raportare iese ca o singură migrare cu un singur set de
        teste de integrare. Nu coordonăm între echipe care dețin codebase-uri
        diferite. Cele douăzeci și nouă de migrări numerotate din istoricul
        nostru sunt un artefact cumulativ unic, nu cinci suprapuse.
      </p>
      <p>
        <strong>O singură unitate de deployment.</strong> Platforma iese
        ca un binar plus două procese sidecar. Adăugăm funcționalitate
        fără să adăugăm suprafață de deployment. Rotația operațională
        on-call reflectă asta: un proces de urmărit pentru nucleu, două
        sidecars care operează independent.
      </p>

      <h2>Ce ne costă, onest</h2>
      <p>
        Single codebase nu este gratis. Un modul zgomotos poate afecta pe
        celelalte pentru că împart un proces. O schimbare de schemă care
        trebuie să iasă pentru o singură verticală iese pentru toate în
        aceeași fereastră. Nu există o poveste ușoară pentru ziua în care
        o verticală are nevoie să scaleze de zece ori mai repede decât
        celelalte. Am hartografiat fiecare dintre aceste costuri și avem o
        cale de decompoziție pe modul care le convertește în split-uri
        gestionabile când workload-ul justifică mutarea.
      </p>
      <p>
        Acea cale de decompoziție este o proprietate a faptului că ai un
        single codebase din capul locului. Noi avem unde să alegem să
        împărțim. Un furnizor care moștenește cinci codebase-uri din cinci
        achiziții nu are de ales. Are de coordonat.
      </p>

      <h2>Ce înseamnă pentru cumpărător</h2>
      <p>
        Când un cumpărător evaluează o platformă de lending în 2026,
        întrebarea nu este dacă vendorii spun că sunt unificați. Toți spun
        asta acum. Întrebarea este dacă unificarea rezistă când un auditor
        cere o înregistrare, când un agent AI traversează portofoliul,
        când o reglementare nouă forțează o schimbare de schemă, când un
        incident cere o singură cauză rădăcină. Single codebase este
        proprietatea care decide dacă răspunsul la toate patru întrebările
        este același răspuns, dat în aceeași săptămână.
      </p>
      <p>
        Un singur codebase, șase verticale, fiecare tenant. Dovada este
        build-log-ul. Suntem bucuroși să-l parcurgem împreună.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Früher oder später zeigt ein Anbieter, der fünf Produkte durch drei
        Akquisitionen mitgeschleppt hat, auf ein neues Portal und nennt
        sich vereinheitlicht. Das Portal ist echt. Die Bildschirme sind
        schön. Die fünf Backends sind immer noch fünf Backends. Die
        Föderationssteuer kommt später zum Vorschein: in der Audit-Evidenz,
        im Migrationskalender, im Pfad, den ein KI-Agent gehen muss, um
        einen einzigen Kundendatensatz zu lesen, und in der
        Change-Request-Warteschlange, die sich bei jeder neuen
        Berichtsregel auf fünf Teams aufteilt.
      </p>

      <h2>Was wir mit Single Codebase meinen</h2>
      <p>
        Ein Repository, ein Lösungsgraph, ein Binary, ein Schema für die
        Kernplattform. Fünf Vertikalen (Asset Finance, Fleet, Working
        Capital, Consumer Credit, Secured Microcredit) teilen sich eine
        Engine, einen Tenant-Kontext, ein Audit-Log, einen
        Workflow-Orchestrator. Zwei Dienste laufen out-of-process, weil
        sie die Sprache verteilter Systeme nativ sprechen: der
        Workflow-Orchestrator und das Modell-Sidecar. Das ist die gesamte
        Topologie. Wir können sie auf eine Serviette zeichnen.
      </p>
      <p>
        Der MCP-Server ist ein separater Prozess, weil Agenten eine
        eigene Verbraucherklasse sind, nicht weil die Plattform
        fragmentiert. Alles andere lebt an einem Ort.
      </p>

      <h2>Warum sich das aufzinst</h2>
      <p>
        <strong>Ein Audit-Codepfad.</strong> Jede Geschäftsaktion schreibt
        in ein unveränderliches Audit-Log mit einem Schema. Ein Regulator,
        der einen thematischen Datenauszug verlangt, bekommt eine Abfrage,
        keinen Föderationsplan.
      </p>
      <p>
        <strong>Ein KI-Codepfad.</strong> Das Modell-Sidecar spricht mit
        einer einzigen Engine. Die Dokumentenextraktions-Pipeline läuft
        gegen einen Dokumentenspeicher. Die Credit-Risk-Advisory-Schicht
        überwacht einen Vertragssatz. Agenten, die die Plattform über MCP
        berühren, sehen dieselbe Sicht wie ein Mensch, keine
        Portalprojektion über unterschiedliche Datensubstrate.
      </p>
      <p>
        <strong>Ein Migrationskalender.</strong> Eine neue Berichtsregel
        wird als eine Migration mit einem Satz Integrationstests
        ausgeliefert. Wir koordinieren nicht zwischen Teams, die
        verschiedene Codebases besitzen. Die neunundzwanzig nummerierten
        Migrationen in unserer Historie sind ein kumulatives Artefakt,
        nicht fünf überlappende.
      </p>
      <p>
        <strong>Eine Deployment-Einheit.</strong> Die Plattform wird als
        ein Binary plus zwei Sidecar-Prozesse ausgeliefert. Wir fügen
        Funktionen hinzu, ohne Deployment-Oberfläche hinzuzufügen. Die
        Betriebs-On-Call-Rotation spiegelt das: ein Prozess für den Kern,
        zwei unabhängig operierende Sidecars.
      </p>

      <h2>Was uns das ehrlich kostet</h2>
      <p>
        Single Codebase ist nicht kostenlos. Ein lautes Modul kann die
        anderen beeinflussen, weil sie sich einen Prozess teilen. Eine
        Schemaänderung für eine Vertikale landet für alle im selben
        Fenster. Es gibt keine einfache Geschichte für den Tag, an dem
        eine Vertikale zehnmal schneller skalieren muss als die anderen.
        Wir haben jeden dieser Kosten kartiert und einen Zerlegungspfad
        pro Modul, der sie in beherrschbare Splits umwandelt, wenn die
        Last den Schritt rechtfertigt.
      </p>
      <p>
        Dieser Zerlegungspfad ist eine Eigenschaft, einen Single Codebase
        überhaupt zu haben. Wir wählen, wo wir aufteilen. Ein Anbieter,
        der fünf Codebases aus fünf Akquisitionen erbt, hat keine Wahl. Er
        koordiniert.
      </p>

      <h2>Was das für den Käufer bedeutet</h2>
      <p>
        Wenn ein Käufer 2026 eine Lending-Plattform bewertet, lautet die
        Frage nicht, ob Anbieter sagen, sie seien vereinheitlicht. Das
        sagen alle jetzt. Die Frage ist, ob die Vereinheitlichung hält,
        wenn ein Auditor einen Datensatz zieht, wenn ein KI-Agent das
        Portfolio durchläuft, wenn eine neue Regulierung eine
        Schemaänderung erzwingt, wenn ein Vorfall eine einzige
        Grundursache erfordert. Single Codebase ist die Eigenschaft, die
        bestimmt, ob die Antwort auf alle vier Fragen dieselbe Antwort
        ist, gegeben in derselben Woche.
      </p>
      <p>
        Ein Codebase, sechs Vertikalen, jeder Tenant. Der Beweis ist das
        Build-Log. Wir gehen es gerne mit Ihnen durch.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Tôt ou tard, un fournisseur qui a porté cinq produits à travers
        trois acquisitions montre un nouveau portail et se déclare unifié.
        Le portail est réel. Les écrans sont jolis. Les cinq backends
        restent cinq backends. La taxe de fédération apparaît plus tard :
        dans la preuve d&apos;audit, dans le calendrier de migration, dans
        le chemin qu&apos;un agent IA doit parcourir pour lire un seul
        enregistrement client, et dans la file de change-requests qui se
        ramifie vers cinq équipes à chaque nouvelle règle de reporting.
      </p>

      <h2>Ce que nous entendons par single codebase</h2>
      <p>
        Un seul dépôt, un seul graphe de solution, un seul binaire, un
        seul schéma pour la plateforme centrale. Cinq verticaux (Asset
        Finance, Fleet, Working Capital, Consumer Credit, Secured
        Microcredit) partagent un moteur, un contexte tenant, un journal
        d&apos;audit, un orchestrateur de workflow. Deux services
        tournent out-of-process parce qu&apos;ils parlent nativement le
        langage des systèmes distribués : l&apos;orchestrateur de
        workflow et le sidecar modèle. C&apos;est toute la topologie. On
        peut la dessiner sur une serviette.
      </p>
      <p>
        Le serveur MCP est un processus séparé parce que les agents sont
        une classe de consommateurs séparée, non parce que la plateforme
        se fragmente. Tout le reste vit au même endroit.
      </p>

      <h2>Pourquoi cela compose</h2>
      <p>
        <strong>Un chemin d&apos;audit.</strong> Chaque action métier
        écrit dans un journal d&apos;audit immuable au schéma unique. Un
        régulateur qui demande une extraction thématique obtient une
        requête, non un plan de fédération.
      </p>
      <p>
        <strong>Un chemin IA.</strong> Le sidecar modèle parle à un seul
        moteur. Le pipeline d&apos;extraction de documents tourne contre
        un seul document store. La couche de credit-risk advisory
        surveille un seul ensemble de contrats. Les agents qui touchent
        la plateforme via MCP voient la même vue qu&apos;un humain, non
        une projection de portail au-dessus de substrats de données
        différents.
      </p>
      <p>
        <strong>Un calendrier de migration de schéma.</strong> Une
        nouvelle règle de reporting sort comme une migration avec un seul
        jeu de tests d&apos;intégration. Nous ne coordonnons pas entre
        équipes possédant des codebases différents. Les vingt-neuf
        migrations numérotées de notre historique sont un artefact
        cumulatif unique, non cinq qui se chevauchent.
      </p>
      <p>
        <strong>Une unité de déploiement.</strong> La plateforme se livre
        comme un binaire plus deux processus sidecar. Nous ajoutons des
        fonctionnalités sans ajouter de surface de déploiement. La
        rotation opérationnelle on-call reflète cela : un processus à
        surveiller pour le cœur, deux sidecars qui opèrent
        indépendamment.
      </p>

      <h2>Ce que cela nous coûte, honnêtement</h2>
      <p>
        Single codebase n&apos;est pas gratuit. Un module bruyant peut
        affecter les autres parce qu&apos;ils partagent un processus. Un
        changement de schéma à livrer pour un seul vertical atterrit pour
        tous dans la même fenêtre. Il n&apos;y a pas d&apos;histoire
        facile pour le jour où un vertical doit scaler dix fois plus vite
        que les autres. Nous avons cartographié chacun de ces coûts et
        avons une voie de décomposition par module qui les convertit en
        splits gérables quand la charge justifie le mouvement.
      </p>
      <p>
        Cette voie de décomposition est une propriété d&apos;avoir un
        single codebase au départ. Nous choisissons où diviser. Un
        fournisseur qui hérite de cinq codebases de cinq acquisitions
        n&apos;a pas le choix. Il coordonne.
      </p>

      <h2>Ce que cela veut dire pour l&apos;acheteur</h2>
      <p>
        Quand un acheteur évalue une plateforme de lending en 2026, la
        question n&apos;est pas si les fournisseurs disent qu&apos;ils
        sont unifiés. Tous le disent maintenant. La question est si
        l&apos;unification tient quand un auditeur tire un
        enregistrement, quand un agent IA parcourt le portefeuille,
        quand une nouvelle réglementation force un changement de schéma,
        quand un incident exige une seule cause racine. Single codebase
        est la propriété qui détermine si la réponse aux quatre questions
        est la même réponse, donnée la même semaine.
      </p>
      <p>
        Un codebase, six verticaux, chaque tenant. La preuve est le
        build-log. Nous sommes heureux de le parcourir.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Prima o poi un fornitore che ha portato cinque prodotti attraverso
        tre acquisizioni indica un nuovo portale e si dichiara unificato.
        Il portale è reale. Le schermate sono belle. I cinque backend
        restano cinque backend. La tassa di federazione emerge dopo:
        nella prova di audit, nel calendario di migrazione, nel percorso
        che un agente IA deve fare per leggere un singolo record cliente,
        e nella coda di change-request che si dirama verso cinque squadre
        ogni volta che arriva una nuova regola di reporting.
      </p>

      <h2>Cosa intendiamo per single codebase</h2>
      <p>
        Un solo repository, un solo grafo di soluzione, un solo binario,
        un solo schema per la piattaforma centrale. Cinque verticali
        (Asset Finance, Fleet, Working Capital, Consumer Credit, Secured
        Microcredit) condividono un motore, un contesto tenant, un audit
        log, un orchestratore di workflow. Due servizi girano
        out-of-process perché parlano nativamente il linguaggio dei
        sistemi distribuiti: l&apos;orchestratore di workflow e il
        sidecar del modello. È tutta la topologia. La possiamo disegnare
        su un tovagliolo.
      </p>
      <p>
        Il server MCP è un processo separato perché gli agenti sono una
        classe di consumatori separata, non perché la piattaforma si
        frammenta. Tutto il resto vive in un unico posto.
      </p>

      <h2>Perché questo si compone</h2>
      <p>
        <strong>Un percorso di audit.</strong> Ogni azione di business
        scrive in un audit log immutabile con uno schema unico. Un
        regolatore che chiede un&apos;estrazione tematica ottiene una
        query, non un piano di federazione.
      </p>
      <p>
        <strong>Un percorso IA.</strong> Il sidecar del modello parla con
        un solo motore. La pipeline di estrazione documenti gira contro
        un solo document store. Lo strato di credit-risk advisory
        monitora un solo set di contratti. Gli agenti che toccano la
        piattaforma tramite MCP vedono la stessa vista di un umano, non
        una proiezione di portale sopra substrati di dati diversi.
      </p>
      <p>
        <strong>Un calendario di migrazione di schema.</strong> Una nuova
        regola di reporting esce come una migrazione con un solo set di
        test di integrazione. Non coordiniamo tra squadre che possiedono
        codebase diversi. Le ventinove migrazioni numerate nella nostra
        storia sono un artefatto cumulativo unico, non cinque
        sovrapposte.
      </p>
      <p>
        <strong>Un&apos;unità di deployment.</strong> La piattaforma
        viene rilasciata come un binario più due processi sidecar.
        Aggiungiamo funzionalità senza aggiungere superficie di
        deployment. La rotazione operativa on-call lo riflette: un
        processo da guardare per il core, due sidecar che operano
        indipendentemente.
      </p>

      <h2>Cosa ci costa, onestamente</h2>
      <p>
        Single codebase non è gratis. Un modulo rumoroso può influire
        sugli altri perché condividono un processo. Un cambio di schema
        da rilasciare per un solo verticale atterra per tutti nella
        stessa finestra. Non c&apos;è una storia facile per il giorno in
        cui un verticale deve scalare dieci volte più veloce degli
        altri. Abbiamo mappato ognuno di questi costi e abbiamo un
        percorso di decomposizione per modulo che li converte in split
        gestibili quando il carico giustifica la mossa.
      </p>
      <p>
        Quel percorso di decomposizione è una proprietà del fatto di
        avere un single codebase fin dall&apos;inizio. Noi scegliamo dove
        dividere. Un fornitore che eredita cinque codebase da cinque
        acquisizioni non sceglie. Coordina.
      </p>

      <h2>Cosa significa per l&apos;acquirente</h2>
      <p>
        Quando un acquirente valuta una piattaforma di lending nel 2026,
        la domanda non è se i fornitori dicono di essere unificati. Lo
        dicono tutti ora. La domanda è se l&apos;unificazione regge
        quando un auditor tira un record, quando un agente IA percorre
        il portafoglio, quando una nuova regolamentazione forza un
        cambio di schema, quando un incidente richiede una sola causa
        radice. Single codebase è la proprietà che determina se la
        risposta a tutte e quattro le domande è la stessa risposta, data
        nella stessa settimana.
      </p>
      <p>
        Un codebase, sei verticali, ogni tenant. La prova è il build-log.
        Siamo felici di percorrerlo.
      </p>
    </div>
  );
}
