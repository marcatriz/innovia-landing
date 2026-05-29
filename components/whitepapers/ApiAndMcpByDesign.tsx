/**
 * Whitepaper: API and MCP by design.
 *
 * Argues that "we have an API" and "we have an AI roadmap" are usually shallow
 * bolt-ons, and that the interface a machine drives should be the same core a
 * person drives, governed by the same isolation, permissions, and audit. Now
 * expanded with concrete tool examples, a worked end-to-end agent interaction,
 * and verified numbers (one API surface; a Model Context Protocol catalogue of
 * ~11 tools; an in-app assistant exposing ~12 tools across 6 instrumented
 * pages; a workflow engine with 14 task definitions and 3 end-to-end flows;
 * the same isolation suite and audit trail; the 226k-request load test).
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete over adjectival. Verified numbers only. No dev-time anchors.
 *  - No RO acronyms in non-RO locales.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function ApiAndMcpByDesign({ locale }: ContentProps) {
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
        Two claims show up in almost every vendor conversation now. &quot;We
        have an API.&quot; &quot;We have an AI roadmap.&quot; Both are usually
        true and usually shallow. An API that wraps a few reports, and an agent
        that screen-scrapes the same screen a human uses, are bolt-ons. They
        inherit none of the guarantees the core was built with. We took a
        different stance: the interface a machine drives is the same core the
        screen drives, governed by the same rules. This is what we mean by API
        and MCP by design.
      </p>

      <h2>One core, three front doors</h2>
      <p>
        The web application is not the product. It is one client of the
        product. Every capability, creating an offer, scoring a borrower,
        booking a contract, running a billing cycle, is an endpoint before it
        is a screen. The screen calls the same endpoint a script would. This is
        not an architectural luxury. It is what makes the next two doors
        possible without a rebuild: if a capability exists only as a button, an
        API and an agent can never reach it cleanly. The same API surface that
        the screen runs on is the one a load test drove to two hundred and
        twenty-six thousand requests at zero percent failures in an hour.
      </p>

      <h2>The API inherits the rules</h2>
      <p>
        Because the API is the core and not a layer beside it, an API call is
        subject to the same authentication, the same tenant isolation, and the
        same audit trail as a click. A token scoped to one tenant cannot read
        another tenant&apos;s data through the API any more than through the
        screen, because the isolation lives below both. An API call that
        changes state writes the same audit row a human action would. There is
        no privileged side channel. The cheapest way to keep an API safe is to
        not give it its own rules. The isolation suite of twenty-five to thirty
        integration tests that guards the screen guards the API by construction,
        because they are the same surface.
      </p>

      <h2>MCP is the API an agent can reason about</h2>
      <p>
        A modern AI agent does not want a screen and it does not want raw HTTP.
        It wants a typed catalogue of tools: this is what you can do, these are
        the parameters, this is what comes back. We expose the platform to
        agents through a Model Context Protocol server: a focused catalogue of
        around eleven tools, each a thin wrapper over a platform endpoint, each
        call authenticated and tenant-scoped. The catalogue is small and
        deliberate. Representative tools: list the contracts for a partner;
        fetch a borrower&apos;s latest scoring result and the factors behind it;
        draft an offer with given terms; query who changed a contract in a date
        range; list open billing items. Because each tool is a thin wrapper over
        an endpoint that already exists, a tool cannot reach data the endpoint
        would not return, and a tool call is authenticated and tenant-scoped
        exactly as the endpoint is. An agent driving the platform through these
        tools inherits the isolation, the permissions, and the audit trail
        automatically. It gets reach. It does not get a bypass.
      </p>

      <h2>A worked example</h2>
      <p>
        Here is what that buys in practice. A credit analyst, working inside the
        application, asks the assistant to summarise a borrower&apos;s exposure
        and prepare a renewal. The assistant calls read tools: the
        partner&apos;s contracts, their outstanding exposure, the latest scoring
        result. It composes a summary on screen. Then it proposes one write
        action, a draft renewal offer, and places it on a queue. Nothing is
        created yet. The analyst reviews the terms, edits one, and clicks
        confirm. Only then is the offer created, through the same endpoint a
        manual create would use, writing the same audit row, under the same
        tenant isolation. The assistant did the gathering and the drafting. The
        human kept the decision. The audit trail cannot tell that action apart
        from any other, which is exactly the property a regulator wants.
      </p>

      <h2>The human stays in the loop by construction</h2>
      <p>
        That separation is not a convention we hope developers follow. It is
        built in. An in-application assistant exposes around twelve tools across
        the six pages it is wired into today, and it operates through an intent
        queue: proposing and doing are separate steps. The assistant places an
        intended action on the queue, a person acknowledges it before it runs,
        and the assistant can only call tools that a manifest has declared for
        the page and role it is operating in. The pattern is deliberate. An
        agent that can act without acknowledgement is a liability in a regulated
        process. An agent that can only act after a human says yes, and only
        within a declared surface, is an accelerator an auditor can live with.
      </p>

      <h2>The deterministic spine</h2>
      <p>
        Language models are good at proposing and bad at guaranteeing. So we
        keep the guarantees in a place a model does not touch. A workflow engine
        runs the multi-step processes, an origination flow, a billing run, a
        recovery sequence, as defined, versioned, replayable workflows: a
        starting library of fourteen task definitions wired into three
        end-to-end flows. The model can propose which workflow to start and with
        what inputs. The workflow itself executes deterministically, with each
        step recorded. The division of labour is the whole design: the model
        proposes, the deterministic core disposes, and the audit trail
        remembers.
      </p>

      <h2>What we do well, in numbers</h2>
      <p>
        The claim is not &quot;we are agent-ready&quot; in the abstract. It is
        specific. One API surface, the same one the application itself runs on,
        proven to two hundred and twenty-six thousand requests at zero percent
        failures. A Model Context Protocol catalogue of around eleven tools, each
        tenant-scoped and audited. An in-app assistant of around twelve tools
        across six instrumented pages, every write action acknowledged by a
        human before it runs. A workflow engine with fourteen task definitions
        and three end-to-end flows for the processes that must be deterministic.
        And the same isolation suite of twenty-five to thirty integration tests
        and the same audit trail that protect the screen protecting every one of
        those doors, because they are not separate doors onto separate cores.
        They are three doors onto one.
      </p>

      <h2>Why this matters now</h2>
      <p>
        The most visible layer of every enterprise application, the screen, is
        the layer AI is commoditising fastest. If your interface is only a
        screen, your product is exposed at exactly the layer that is eroding. If
        your interface is a typed, permissioned, audited tool surface, the same
        shift becomes leverage: agents can drive the platform without anyone
        lowering the guardrails. The operators who compound this fastest are the
        ones whose core was built to be driven by something other than a mouse.
      </p>

      <h2>Honest about where this is today</h2>
      <p>
        We are precise about the maturity. The API surface is broad and is the
        same surface the application itself runs on. The agent tool surface is
        real and is read-rich, with a controlled, acknowledged set of write
        actions, not a free hand over the whole platform. Hardening for
        unattended machine-to-machine use, dedicated service accounts, transport
        hardening for remote callers, is on the near roadmap rather than
        shipped. We would rather state the boundary than imply a maturity we
        have not yet earned. The design is the durable claim: the interface a
        machine drives and the interface a person drives are the same core,
        under the same rules.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Două afirmații apar acum în aproape fiecare conversație cu un furnizor.
        &quot;Avem un API.&quot; &quot;Avem un roadmap de AI.&quot; Ambele sunt
        de regulă adevărate și de regulă superficiale. Un API care învelește
        câteva rapoarte, și un agent care face screen-scraping pe același ecran
        pe care îl folosește un om, sunt adăugiri lipite pe deasupra. Nu
        moștenesc niciuna dintre garanțiile cu care a fost construit nucleul. Noi
        am luat o poziție diferită: interfața pe care o conduce o mașină este
        același nucleu pe care îl conduce ecranul, guvernat de aceleași reguli.
        Asta înțelegem prin API și MCP by design.
      </p>

      <h2>Un nucleu, trei uși de intrare</h2>
      <p>
        Aplicația web nu este produsul. Este un client al produsului. Fiecare
        capabilitate, crearea unei oferte, scorarea unui debitor, înregistrarea
        unui contract, rularea unui ciclu de facturare, este un endpoint înainte
        de a fi un ecran. Ecranul apelează același endpoint pe care l-ar apela un
        script. Nu e un lux de arhitectură. E ceea ce face posibile următoarele
        două uși fără o reconstrucție: dacă o capabilitate există doar ca un
        buton, un API și un agent nu o pot atinge niciodată curat. Aceeași
        suprafață de API pe care rulează ecranul e cea pe care un load test a
        dus-o la două sute douăzeci și șase de mii de request-uri, cu zero la
        sută eșecuri, într-o oră.
      </p>

      <h2>API-ul moștenește regulile</h2>
      <p>
        Pentru că API-ul este nucleul și nu un strat de lângă el, un apel de API
        e supus aceleiași autentificări, aceleiași izolări pe tenant și aceluiași
        traseu de audit ca un click. Un token scopat pe un tenant nu poate citi
        datele altui tenant prin API mai mult decât prin ecran, fiindcă izolarea
        trăiește sub amândouă. Un apel de API care schimbă starea scrie același
        rând de audit pe care l-ar scrie o acțiune umană. Nu există canal lateral
        privilegiat. Cel mai ieftin mod de a ține un API în siguranță e să nu îi
        dai propriile reguli. Suita de izolare de douăzeci și cinci până la
        treizeci de teste de integrare care păzește ecranul păzește API-ul prin
        construcție, fiindcă sunt aceeași suprafață.
      </p>

      <h2>MCP e API-ul despre care un agent poate raționa</h2>
      <p>
        Un agent AI modern nu vrea un ecran și nu vrea HTTP brut. Vrea un catalog
        tipizat de unelte: asta poți face, ăștia sunt parametrii, asta se
        întoarce. Expunem platforma către agenți printr-un server Model Context
        Protocol: un catalog focusat de aproximativ unsprezece unelte, fiecare un
        înveliș subțire peste un endpoint al platformei, fiecare apel autentificat
        și scopat pe tenant. Catalogul e mic și deliberat. Unelte reprezentative:
        listează contractele unui partener; ia ultimul rezultat de scoring al unui
        debitor și factorii din spate; schițează o ofertă cu termeni dați;
        interoghează cine a schimbat un contract într-un interval de date;
        listează articolele de facturare deschise. Pentru că fiecare unealtă e un
        înveliș subțire peste un endpoint care există deja, o unealtă nu poate
        atinge date pe care endpoint-ul nu le-ar returna, iar un apel de unealtă e
        autentificat și scopat pe tenant exact ca endpoint-ul. Un agent care
        conduce platforma prin aceste unelte moștenește automat izolarea,
        permisiunile și traseul de audit. Primește acoperire. Nu primește un
        bypass.
      </p>

      <h2>Un exemplu concret</h2>
      <p>
        Iată ce cumpără asta în practică. Un analist de credit, lucrând în
        interiorul aplicației, cere asistentului să rezume expunerea unui debitor
        și să pregătească o reînnoire. Asistentul apelează unelte de citire:
        contractele partenerului, expunerea lor curentă, ultimul rezultat de
        scoring. Compune un rezumat pe ecran. Apoi propune o singură acțiune de
        scriere, o ofertă de reînnoire în schiță, și o pune pe o coadă. Încă nu
        s-a creat nimic. Analistul revizuiește termenii, editează unul, și apasă
        confirmă. Abia atunci e creată oferta, prin același endpoint pe care l-ar
        folosi o creare manuală, scriind același rând de audit, sub aceeași
        izolare pe tenant. Asistentul a făcut culegerea și schițarea. Omul a
        păstrat decizia. Traseul de audit nu poate deosebi acea acțiune de oricare
        alta, ceea ce e exact proprietatea pe care o vrea un regulator.
      </p>

      <h2>Omul rămâne în buclă prin construcție</h2>
      <p>
        Acea separare nu e o convenție pe care sperăm că o urmează developerii. E
        construită în sistem. Un asistent în aplicație expune aproximativ
        douăsprezece unelte pe cele șase pagini în care e cablat azi, și operează
        printr-o coadă de intenții: a propune și a face sunt pași separați.
        Asistentul pune o acțiune intenționată pe coadă, o persoană o confirmă
        înainte să ruleze, și asistentul poate apela doar unelte pe care un
        manifest le-a declarat pentru pagina și rolul în care operează.
        Pattern-ul e deliberat. Un agent care poate acționa fără confirmare e o
        vulnerabilitate într-un proces reglementat. Un agent care poate acționa
        doar după ce un om spune da, și doar într-o suprafață declarată, e un
        accelerator cu care un auditor poate trăi.
      </p>

      <h2>Coloana vertebrală deterministă</h2>
      <p>
        Modelele de limbaj sunt bune la a propune și slabe la a garanta. Așa că
        ținem garanțiile într-un loc pe care un model nu îl atinge. Un motor de
        workflow rulează procesele cu mai mulți pași, un flux de originare, o
        rulare de facturare, o secvență de recuperare, ca workflow-uri definite,
        versionate, reluabile: o bibliotecă de pornire de paisprezece definiții de
        task cablate în trei fluxuri end-to-end. Modelul poate propune ce workflow
        să pornească și cu ce intrări. Workflow-ul însuși se execută determinist,
        cu fiecare pas înregistrat. Diviziunea muncii e tot designul: modelul
        propune, nucleul determinist dispune, și traseul de audit își amintește.
      </p>

      <h2>Ce facem bine, în cifre</h2>
      <p>
        Afirmația nu e &quot;suntem pregătiți pentru agenți&quot; în abstract. E
        specifică. O singură suprafață de API, aceeași pe care rulează aplicația
        însăși, dovedită la două sute douăzeci și șase de mii de request-uri, cu
        zero la sută eșecuri. Un catalog Model Context Protocol de aproximativ
        unsprezece unelte, fiecare scopată pe tenant și auditată. Un asistent în
        aplicație de aproximativ douăsprezece unelte pe șase pagini
        instrumentate, fiecare acțiune de scriere confirmată de un om înainte să
        ruleze. Un motor de workflow cu paisprezece definiții de task și trei
        fluxuri end-to-end pentru procesele care trebuie să fie deterministe. Și
        aceeași suită de izolare de douăzeci și cinci până la treizeci de teste de
        integrare și același traseu de audit care protejează ecranul protejând
        fiecare dintre acele uși, fiindcă nu sunt uși separate spre nuclee
        separate. Sunt trei uși spre unul singur.
      </p>

      <h2>De ce contează acum</h2>
      <p>
        Stratul cel mai vizibil al oricărei aplicații enterprise, ecranul, e
        stratul pe care AI îl comoditizează cel mai repede. Dacă interfața ta e
        doar un ecran, produsul tău e expus exact la stratul care se erodează.
        Dacă interfața ta e o suprafață de unelte tipizată, cu permisiuni și
        auditată, aceeași schimbare devine pârghie: agenții pot conduce platforma
        fără ca cineva să coboare barierele de protecție. Operatorii care vor
        compune asta cel mai repede sunt cei al căror nucleu a fost construit ca
        să fie condus de altceva decât un mouse.
      </p>

      <h2>Onești în privința situației de azi</h2>
      <p>
        Suntem preciși în privința maturității. Suprafața de API e largă și e
        aceeași suprafață pe care rulează aplicația însăși. Suprafața de unelte
        pentru agenți e reală și e bogată în citire, cu un set controlat și
        confirmat de acțiuni de scriere, nu o mână liberă peste toată platforma.
        Întărirea pentru uz nesupravegheat mașină-la-mașină, conturi de serviciu
        dedicate, întărirea transportului pentru apelanți la distanță, e pe
        roadmap-ul apropiat, nu livrată. Preferăm să spunem granița decât să
        sugerăm o maturitate pe care nu am câștigat-o încă. Designul e afirmația
        durabilă: interfața pe care o conduce o mașină și interfața pe care o
        conduce o persoană sunt același nucleu, sub aceleași reguli.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Zwei Aussagen tauchen mittlerweile in fast jedem Anbietergespräch auf.
        &quot;Wir haben eine API.&quot; &quot;Wir haben eine KI-Roadmap.&quot;
        Beide sind meist wahr und meist oberflächlich. Eine API, die ein paar
        Berichte umhüllt, und ein Agent, der denselben Bildschirm abgreift, den
        ein Mensch benutzt, sind Aufsätze. Sie erben keine der Garantien, mit
        denen der Kern gebaut wurde. Wir haben eine andere Haltung eingenommen:
        die Schnittstelle, die eine Maschine bedient, ist derselbe Kern, den der
        Bildschirm bedient, geregelt von denselben Regeln. Das meinen wir mit API
        und MCP by design.
      </p>

      <h2>Ein Kern, drei Eingangstüren</h2>
      <p>
        Die Webanwendung ist nicht das Produkt. Sie ist ein Client des Produkts.
        Jede Fähigkeit, ein Angebot erstellen, einen Kreditnehmer bewerten, einen
        Vertrag buchen, einen Abrechnungslauf ausführen, ist ein Endpunkt, bevor
        sie ein Bildschirm ist. Der Bildschirm ruft denselben Endpunkt auf, den
        ein Skript aufrufen würde. Das ist kein architektonischer Luxus. Es ist
        das, was die nächsten beiden Türen ohne Umbau möglich macht: existiert
        eine Fähigkeit nur als Schaltfläche, können eine API und ein Agent sie nie
        sauber erreichen. Dieselbe API-Oberfläche, auf der der Bildschirm läuft,
        ist die, die ein Lasttest in einer Stunde auf
        zweihundertsechsundzwanzigtausend Anfragen bei null Prozent Fehlern trieb.
      </p>

      <h2>Die API erbt die Regeln</h2>
      <p>
        Weil die API der Kern ist und keine Schicht daneben, unterliegt ein
        API-Aufruf derselben Authentifizierung, derselben Tenant-Isolation und
        derselben Audit-Spur wie ein Klick. Ein auf einen Tenant begrenztes Token
        kann die Daten eines anderen Tenants über die API ebenso wenig lesen wie
        über den Bildschirm, weil die Isolation unter beiden liegt. Ein
        zustandsändernder API-Aufruf schreibt dieselbe Audit-Zeile wie eine
        menschliche Aktion. Es gibt keinen privilegierten Seitenkanal. Der
        billigste Weg, eine API sicher zu halten, ist, ihr keine eigenen Regeln zu
        geben. Die Isolationssuite von fünfundzwanzig bis dreißig
        Integrationstests, die den Bildschirm schützt, schützt die API
        konstruktionsbedingt, weil sie dieselbe Oberfläche sind.
      </p>

      <h2>MCP ist die API, über die ein Agent nachdenken kann</h2>
      <p>
        Ein moderner KI-Agent will keinen Bildschirm und kein rohes HTTP. Er will
        einen typisierten Katalog von Werkzeugen: das kannst du tun, das sind die
        Parameter, das kommt zurück. Wir stellen die Plattform Agenten über einen
        Model-Context-Protocol-Server bereit: einen fokussierten Katalog von rund
        elf Werkzeugen, jedes eine dünne Hülle über einem Plattform-Endpunkt,
        jeder Aufruf authentifiziert und tenant-begrenzt. Der Katalog ist klein
        und bewusst. Repräsentative Werkzeuge: die Verträge eines Partners
        auflisten; das letzte Scoring-Ergebnis eines Kreditnehmers und die
        Faktoren dahinter abrufen; ein Angebot mit gegebenen Konditionen
        entwerfen; abfragen, wer einen Vertrag in einem Datumsbereich geändert
        hat; offene Abrechnungsposten auflisten. Weil jedes Werkzeug eine dünne
        Hülle über einem bereits existierenden Endpunkt ist, kann ein Werkzeug
        keine Daten erreichen, die der Endpunkt nicht zurückgäbe, und ein
        Werkzeugaufruf ist authentifiziert und tenant-begrenzt, genau wie der
        Endpunkt. Ein Agent, der die Plattform über diese Werkzeuge bedient, erbt
        automatisch die Isolation, die Berechtigungen und die Audit-Spur. Er
        bekommt Reichweite. Er bekommt keine Umgehung.
      </p>

      <h2>Ein durchgespieltes Beispiel</h2>
      <p>
        So sieht das in der Praxis aus. Ein Kreditanalyst, der innerhalb der
        Anwendung arbeitet, bittet den Assistenten, das Exposure eines
        Kreditnehmers zusammenzufassen und eine Verlängerung vorzubereiten. Der
        Assistent ruft Lesewerkzeuge auf: die Verträge des Partners, ihr
        offenes Exposure, das letzte Scoring-Ergebnis. Er verfasst eine
        Zusammenfassung auf dem Bildschirm. Dann schlägt er eine Schreibaktion
        vor, ein Verlängerungsangebot im Entwurf, und legt sie in eine
        Warteschlange. Noch wird nichts erstellt. Der Analyst prüft die
        Konditionen, ändert eine, und klickt auf bestätigen. Erst dann wird das
        Angebot erstellt, über denselben Endpunkt, den eine manuelle Erstellung
        verwenden würde, schreibt dieselbe Audit-Zeile, unter derselben
        Tenant-Isolation. Der Assistent erledigte das Sammeln und Entwerfen. Der
        Mensch behielt die Entscheidung. Die Audit-Spur kann diese Aktion von
        keiner anderen unterscheiden, was genau die Eigenschaft ist, die ein
        Regulator will.
      </p>

      <h2>Der Mensch bleibt konstruktionsbedingt in der Schleife</h2>
      <p>
        Diese Trennung ist keine Konvention, von der wir hoffen, dass Entwickler
        ihr folgen. Sie ist eingebaut. Ein Assistent in der Anwendung stellt rund
        zwölf Werkzeuge über die sechs Seiten bereit, in die er heute
        eingebunden ist, und arbeitet über eine Intent-Warteschlange:
        Vorschlagen und Tun sind getrennte Schritte. Der Assistent legt eine
        beabsichtigte Aktion in die Warteschlange, eine Person bestätigt sie,
        bevor sie läuft, und der Assistent kann nur Werkzeuge aufrufen, die ein
        Manifest für die Seite und die Rolle deklariert hat, in der er operiert.
        Das Muster ist bewusst. Ein Agent, der ohne Bestätigung handeln kann, ist
        in einem regulierten Prozess ein Risiko. Ein Agent, der erst handeln
        kann, nachdem ein Mensch ja gesagt hat, und nur innerhalb einer
        deklarierten Oberfläche, ist ein Beschleuniger, mit dem ein Prüfer leben
        kann.
      </p>

      <h2>Das deterministische Rückgrat</h2>
      <p>
        Sprachmodelle sind gut im Vorschlagen und schlecht im Garantieren. Also
        halten wir die Garantien an einem Ort, den ein Modell nicht berührt. Eine
        Workflow-Engine führt die mehrstufigen Prozesse aus, einen
        Origination-Fluss, einen Abrechnungslauf, eine Wiederherstellungssequenz,
        als definierte, versionierte, wiederabspielbare Workflows: eine
        Startbibliothek von vierzehn Task-Definitionen, eingebunden in drei
        End-to-End-Flüsse. Das Modell kann vorschlagen, welcher Workflow mit
        welchen Eingaben gestartet wird. Der Workflow selbst läuft deterministisch
        ab, mit jedem aufgezeichneten Schritt. Die Arbeitsteilung ist das ganze
        Design: das Modell schlägt vor, der deterministische Kern verfügt, und die
        Audit-Spur erinnert.
      </p>

      <h2>Was wir gut können, in Zahlen</h2>
      <p>
        Die Aussage ist nicht &quot;wir sind agentenbereit&quot; im Abstrakten.
        Sie ist konkret. Eine API-Oberfläche, dieselbe, auf der die Anwendung
        selbst läuft, bewiesen bis zu zweihundertsechsundzwanzigtausend Anfragen
        bei null Prozent Fehlern. Ein Model-Context-Protocol-Katalog von rund elf
        Werkzeugen, jedes tenant-begrenzt und auditiert. Ein Assistent in der
        Anwendung von rund zwölf Werkzeugen über sechs instrumentierte Seiten,
        jede Schreibaktion von einem Menschen bestätigt, bevor sie läuft. Eine
        Workflow-Engine mit vierzehn Task-Definitionen und drei
        End-to-End-Flüssen für die Prozesse, die deterministisch sein müssen. Und
        dieselbe Isolationssuite von fünfundzwanzig bis dreißig Integrationstests
        und dieselbe Audit-Spur, die den Bildschirm schützen, schützen jede
        dieser Türen, weil es keine getrennten Türen auf getrennte Kerne sind. Es
        sind drei Türen auf einen.
      </p>

      <h2>Warum das jetzt zählt</h2>
      <p>
        Die sichtbarste Schicht jeder Enterprise-Anwendung, der Bildschirm, ist
        die Schicht, die die KI am schnellsten zur Massenware macht. Ist Ihre
        Schnittstelle nur ein Bildschirm, ist Ihr Produkt genau an der Schicht
        exponiert, die erodiert. Ist Ihre Schnittstelle eine typisierte,
        berechtigte, auditierte Werkzeugoberfläche, wird dieselbe Verschiebung zum
        Hebel: Agenten können die Plattform bedienen, ohne dass jemand die
        Leitplanken senkt. Die Betreiber, die das am schnellsten aufzinsen, sind
        jene, deren Kern gebaut wurde, um von etwas anderem als einer Maus bedient
        zu werden.
      </p>

      <h2>Ehrlich, wo das heute steht</h2>
      <p>
        Wir sind präzise bei der Reife. Die API-Oberfläche ist breit und ist
        dieselbe Oberfläche, auf der die Anwendung selbst läuft. Die
        Agenten-Werkzeugoberfläche ist real und leselastig, mit einem
        kontrollierten, bestätigten Satz von Schreibaktionen, keine freie Hand
        über die ganze Plattform. Härtung für unbeaufsichtigten
        Maschine-zu-Maschine-Betrieb, dedizierte Dienstkonten, Transport-Härtung
        für entfernte Aufrufer, steht auf der nahen Roadmap statt ausgeliefert.
        Wir nennen lieber die Grenze, als eine Reife zu suggerieren, die wir noch
        nicht verdient haben. Das Design ist die dauerhafte Aussage: die
        Schnittstelle, die eine Maschine bedient, und die Schnittstelle, die ein
        Mensch bedient, sind derselbe Kern, unter denselben Regeln.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Deux affirmations apparaissent désormais dans presque chaque conversation
        avec un fournisseur. &quot;Nous avons une API.&quot; &quot;Nous avons une
        feuille de route IA.&quot; Les deux sont en général vraies et en général
        superficielles. Une API qui enveloppe quelques rapports, et un agent qui
        fait du screen-scraping sur le même écran qu&apos;un humain utilise, sont
        des ajouts rapportés. Ils n&apos;héritent d&apos;aucune des garanties avec
        lesquelles le cœur a été bâti. Nous avons pris une posture différente :
        l&apos;interface qu&apos;une machine pilote est le même cœur que pilote
        l&apos;écran, gouverné par les mêmes règles. C&apos;est ce que nous
        entendons par API et MCP by design.
      </p>

      <h2>Un cœur, trois portes d&apos;entrée</h2>
      <p>
        L&apos;application web n&apos;est pas le produit. Elle est un client du
        produit. Chaque capacité, créer une offre, scorer un emprunteur,
        enregistrer un contrat, lancer un cycle de facturation, est un endpoint
        avant d&apos;être un écran. L&apos;écran appelle le même endpoint
        qu&apos;appellerait un script. Ce n&apos;est pas un luxe architectural.
        C&apos;est ce qui rend les deux portes suivantes possibles sans refonte :
        si une capacité n&apos;existe que comme un bouton, une API et un agent ne
        peuvent jamais l&apos;atteindre proprement. La même surface d&apos;API sur
        laquelle tourne l&apos;écran est celle qu&apos;un test de charge a poussée
        à deux cent vingt-six mille requêtes à zéro pour cent d&apos;échecs en une
        heure.
      </p>

      <h2>L&apos;API hérite des règles</h2>
      <p>
        Parce que l&apos;API est le cœur et non une couche à côté, un appel
        d&apos;API est soumis à la même authentification, à la même isolation par
        tenant et à la même piste d&apos;audit qu&apos;un clic. Un jeton cantonné
        à un tenant ne peut pas lire les données d&apos;un autre tenant par
        l&apos;API pas plus que par l&apos;écran, parce que l&apos;isolation vit
        sous les deux. Un appel d&apos;API qui change l&apos;état écrit la même
        ligne d&apos;audit qu&apos;une action humaine. Il n&apos;y a pas de canal
        latéral privilégié. La manière la moins chère de garder une API sûre est
        de ne pas lui donner ses propres règles. La suite d&apos;isolation de
        vingt-cinq à trente tests d&apos;intégration qui garde l&apos;écran garde
        l&apos;API par construction, parce qu&apos;elles sont la même surface.
      </p>

      <h2>MCP est l&apos;API sur laquelle un agent peut raisonner</h2>
      <p>
        Un agent IA moderne ne veut pas d&apos;écran et ne veut pas de HTTP brut.
        Il veut un catalogue typé d&apos;outils : voici ce que tu peux faire,
        voici les paramètres, voici ce qui revient. Nous exposons la plateforme
        aux agents via un serveur Model Context Protocol : un catalogue ciblé
        d&apos;environ onze outils, chacun une enveloppe fine au-dessus d&apos;un
        endpoint de la plateforme, chaque appel authentifié et cantonné par
        tenant. Le catalogue est petit et délibéré. Outils représentatifs :
        lister les contrats d&apos;un partenaire ; récupérer le dernier résultat
        de scoring d&apos;un emprunteur et les facteurs derrière ; rédiger une
        offre avec des conditions données ; interroger qui a changé un contrat
        dans une plage de dates ; lister les postes de facturation ouverts. Parce
        que chaque outil est une enveloppe fine au-dessus d&apos;un endpoint qui
        existe déjà, un outil ne peut atteindre des données que l&apos;endpoint ne
        renverrait pas, et un appel d&apos;outil est authentifié et cantonné par
        tenant exactement comme l&apos;endpoint. Un agent qui pilote la plateforme
        via ces outils hérite automatiquement de l&apos;isolation, des permissions
        et de la piste d&apos;audit. Il obtient de la portée. Il n&apos;obtient
        pas un contournement.
      </p>

      <h2>Un exemple concret</h2>
      <p>
        Voici ce que cela apporte en pratique. Un analyste crédit, travaillant à
        l&apos;intérieur de l&apos;application, demande à l&apos;assistant de
        résumer l&apos;exposition d&apos;un emprunteur et de préparer un
        renouvellement. L&apos;assistant appelle des outils de lecture : les
        contrats du partenaire, leur exposition en cours, le dernier résultat de
        scoring. Il compose un résumé à l&apos;écran. Puis il propose une action
        d&apos;écriture, une offre de renouvellement en brouillon, et la place
        dans une file. Rien n&apos;est encore créé. L&apos;analyste revoit les
        conditions, en modifie une, et clique sur confirmer. Alors seulement
        l&apos;offre est créée, par le même endpoint qu&apos;utiliserait une
        création manuelle, écrivant la même ligne d&apos;audit, sous la même
        isolation par tenant. L&apos;assistant a fait la collecte et la rédaction.
        L&apos;humain a gardé la décision. La piste d&apos;audit ne peut
        distinguer cette action d&apos;aucune autre, ce qui est exactement la
        propriété qu&apos;un régulateur veut.
      </p>

      <h2>L&apos;humain reste dans la boucle par construction</h2>
      <p>
        Cette séparation n&apos;est pas une convention dont nous espérons que les
        développeurs la suivent. Elle est intégrée. Un assistant dans
        l&apos;application expose environ douze outils à travers les six pages où
        il est câblé aujourd&apos;hui, et il opère via une file d&apos;intentions :
        proposer et faire sont des étapes séparées. L&apos;assistant place une
        action voulue dans la file, une personne la confirme avant qu&apos;elle ne
        s&apos;exécute, et l&apos;assistant ne peut appeler que des outils
        qu&apos;un manifeste a déclarés pour la page et le rôle où il opère. Le
        pattern est délibéré. Un agent qui peut agir sans confirmation est un
        risque dans un processus régulé. Un agent qui ne peut agir qu&apos;après
        qu&apos;un humain a dit oui, et seulement dans une surface déclarée, est un
        accélérateur avec lequel un auditeur peut vivre.
      </p>

      <h2>La colonne vertébrale déterministe</h2>
      <p>
        Les modèles de langage sont bons pour proposer et mauvais pour garantir.
        Alors nous gardons les garanties dans un endroit qu&apos;un modèle ne
        touche pas. Un moteur de workflow exécute les processus à plusieurs
        étapes, un flux d&apos;origination, une exécution de facturation, une
        séquence de récupération, comme des workflows définis, versionnés,
        rejouables : une bibliothèque de départ de quatorze définitions de tâche
        câblées dans trois flux de bout en bout. Le modèle peut proposer quel
        workflow démarrer et avec quelles entrées. Le workflow lui-même
        s&apos;exécute de façon déterministe, chaque étape enregistrée. La
        division du travail est tout le design : le modèle propose, le cœur
        déterministe dispose, et la piste d&apos;audit se souvient.
      </p>

      <h2>Ce que nous faisons bien, en chiffres</h2>
      <p>
        L&apos;affirmation n&apos;est pas &quot;nous sommes prêts pour les
        agents&quot; dans l&apos;abstrait. Elle est précise. Une surface
        d&apos;API, la même sur laquelle l&apos;application elle-même tourne,
        prouvée jusqu&apos;à deux cent vingt-six mille requêtes à zéro pour cent
        d&apos;échecs. Un catalogue Model Context Protocol d&apos;environ onze
        outils, chacun cantonné par tenant et audité. Un assistant dans
        l&apos;application d&apos;environ douze outils sur six pages
        instrumentées, chaque action d&apos;écriture confirmée par un humain avant
        de s&apos;exécuter. Un moteur de workflow avec quatorze définitions de
        tâche et trois flux de bout en bout pour les processus qui doivent être
        déterministes. Et la même suite d&apos;isolation de vingt-cinq à trente
        tests d&apos;intégration et la même piste d&apos;audit qui protègent
        l&apos;écran protégeant chacune de ces portes, parce que ce ne sont pas
        des portes séparées sur des cœurs séparés. Ce sont trois portes sur un
        seul.
      </p>

      <h2>Pourquoi cela compte maintenant</h2>
      <p>
        La couche la plus visible de chaque application enterprise, l&apos;écran,
        est la couche que l&apos;IA banalise le plus vite. Si votre interface
        n&apos;est qu&apos;un écran, votre produit est exposé exactement à la
        couche qui s&apos;érode. Si votre interface est une surface d&apos;outils
        typée, avec permissions et auditée, le même déplacement devient un levier :
        les agents peuvent piloter la plateforme sans que personne n&apos;abaisse
        les garde-fous. Les opérateurs qui composeront cela le plus vite sont ceux
        dont le cœur a été bâti pour être piloté par autre chose qu&apos;une
        souris.
      </p>

      <h2>Honnêtes sur où en est aujourd&apos;hui</h2>
      <p>
        Nous sommes précis sur la maturité. La surface d&apos;API est large et
        c&apos;est la même surface sur laquelle l&apos;application elle-même
        tourne. La surface d&apos;outils pour agents est réelle et riche en
        lecture, avec un ensemble contrôlé et confirmé d&apos;actions
        d&apos;écriture, pas une main libre sur toute la plateforme. Le
        durcissement pour un usage machine-à-machine non surveillé, des comptes de
        service dédiés, le durcissement du transport pour les appelants distants,
        est sur la feuille de route proche plutôt que livré. Nous préférons
        énoncer la frontière plutôt que de suggérer une maturité que nous
        n&apos;avons pas encore méritée. Le design est l&apos;affirmation durable :
        l&apos;interface qu&apos;une machine pilote et l&apos;interface qu&apos;une
        personne pilote sont le même cœur, sous les mêmes règles.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Due affermazioni compaiono ormai in quasi ogni conversazione con un
        fornitore. &quot;Abbiamo un API.&quot; &quot;Abbiamo una roadmap
        IA.&quot; Entrambe sono di solito vere e di solito superficiali. Un API
        che avvolge qualche report, e un agente che fa screen-scraping sullo
        stesso schermo che usa un umano, sono aggiunte posticce. Non ereditano
        nessuna delle garanzie con cui è stato costruito il nucleo. Noi abbiamo
        preso una postura diversa: l&apos;interfaccia che una macchina guida è lo
        stesso nucleo che guida lo schermo, governato dalle stesse regole. Questo
        è ciò che intendiamo per API e MCP by design.
      </p>

      <h2>Un nucleo, tre porte d&apos;ingresso</h2>
      <p>
        L&apos;applicazione web non è il prodotto. È un client del prodotto. Ogni
        capacità, creare un&apos;offerta, valutare un debitore, registrare un
        contratto, eseguire un ciclo di fatturazione, è un endpoint prima di
        essere uno schermo. Lo schermo chiama lo stesso endpoint che chiamerebbe
        uno script. Non è un lusso architetturale. È ciò che rende possibili le
        due porte successive senza una ricostruzione: se una capacità esiste solo
        come un pulsante, un API e un agente non possono mai raggiungerla in modo
        pulito. La stessa superficie API su cui gira lo schermo è quella che un
        test di carico ha spinto a duecentoventiseimila richieste a zero percento
        di fallimenti in un&apos;ora.
      </p>

      <h2>L&apos;API eredita le regole</h2>
      <p>
        Poiché l&apos;API è il nucleo e non uno strato accanto, una chiamata API è
        soggetta alla stessa autenticazione, allo stesso isolamento per tenant e
        alla stessa traccia di audit di un click. Un token circoscritto a un
        tenant non può leggere i dati di un altro tenant tramite l&apos;API più di
        quanto possa tramite lo schermo, perché l&apos;isolamento vive sotto
        entrambi. Una chiamata API che cambia lo stato scrive la stessa riga di
        audit che scriverebbe un&apos;azione umana. Non c&apos;è un canale laterale
        privilegiato. Il modo più economico di tenere sicura un&apos;API è non
        darle regole proprie. La suite di isolamento di venticinque a trenta test
        di integrazione che protegge lo schermo protegge l&apos;API per
        costruzione, perché sono la stessa superficie.
      </p>

      <h2>MCP è l&apos;API su cui un agente può ragionare</h2>
      <p>
        Un agente IA moderno non vuole uno schermo e non vuole HTTP grezzo. Vuole
        un catalogo tipizzato di strumenti: questo è ciò che puoi fare, questi
        sono i parametri, questo è ciò che torna. Esponiamo la piattaforma agli
        agenti tramite un server Model Context Protocol: un catalogo mirato di
        circa undici strumenti, ciascuno un involucro sottile sopra un endpoint
        della piattaforma, ogni chiamata autenticata e circoscritta per tenant. Il
        catalogo è piccolo e deliberato. Strumenti rappresentativi: elencare i
        contratti di un partner; recuperare l&apos;ultimo risultato di scoring di
        un debitore e i fattori dietro; redigere un&apos;offerta con date
        condizioni; interrogare chi ha cambiato un contratto in un intervallo di
        date; elencare le voci di fatturazione aperte. Poiché ogni strumento è un
        involucro sottile sopra un endpoint che esiste già, uno strumento non può
        raggiungere dati che l&apos;endpoint non restituirebbe, e una chiamata di
        strumento è autenticata e circoscritta per tenant esattamente come
        l&apos;endpoint. Un agente che guida la piattaforma tramite questi
        strumenti eredita automaticamente l&apos;isolamento, i permessi e la
        traccia di audit. Ottiene portata. Non ottiene un bypass.
      </p>

      <h2>Un esempio concreto</h2>
      <p>
        Ecco cosa porta questo in pratica. Un analista del credito, lavorando
        dentro l&apos;applicazione, chiede all&apos;assistente di riassumere
        l&apos;esposizione di un debitore e preparare un rinnovo.
        L&apos;assistente chiama strumenti di lettura: i contratti del partner,
        la loro esposizione in essere, l&apos;ultimo risultato di scoring. Compone
        un riassunto sullo schermo. Poi propone un&apos;azione di scrittura,
        un&apos;offerta di rinnovo in bozza, e la mette in una coda. Ancora non
        viene creato nulla. L&apos;analista rivede le condizioni, ne modifica una,
        e clicca conferma. Solo allora l&apos;offerta viene creata, tramite lo
        stesso endpoint che userebbe una creazione manuale, scrivendo la stessa
        riga di audit, sotto lo stesso isolamento per tenant. L&apos;assistente ha
        fatto la raccolta e la stesura. L&apos;umano ha tenuto la decisione. La
        traccia di audit non può distinguere quell&apos;azione da nessun&apos;altra,
        che è esattamente la proprietà che un regolatore vuole.
      </p>

      <h2>L&apos;umano resta nel ciclo per costruzione</h2>
      <p>
        Quella separazione non è una convenzione che speriamo gli sviluppatori
        seguano. È costruita dentro. Un assistente nell&apos;applicazione espone
        circa dodici strumenti attraverso le sei pagine in cui è cablato oggi, e
        opera tramite una coda di intenti: proporre e fare sono passi separati.
        L&apos;assistente mette un&apos;azione voluta nella coda, una persona la
        conferma prima che venga eseguita, e l&apos;assistente può chiamare solo
        strumenti che un manifest ha dichiarato per la pagina e il ruolo in cui
        opera. Il pattern è deliberato. Un agente che può agire senza conferma è
        un rischio in un processo regolato. Un agente che può agire solo dopo che
        un umano ha detto sì, e solo entro una superficie dichiarata, è un
        acceleratore con cui un auditor può convivere.
      </p>

      <h2>La spina dorsale deterministica</h2>
      <p>
        I modelli linguistici sono bravi a proporre e scarsi a garantire. Così
        teniamo le garanzie in un luogo che un modello non tocca. Un motore di
        workflow esegue i processi a più passi, un flusso di origination,
        un&apos;esecuzione di fatturazione, una sequenza di ripristino, come
        workflow definiti, versionati, riproducibili: una libreria di partenza di
        quattordici definizioni di task cablate in tre flussi end-to-end. Il
        modello può proporre quale workflow avviare e con quali input. Il workflow
        stesso si esegue in modo deterministico, con ogni passo registrato. La
        divisione del lavoro è tutto il design: il modello propone, il nucleo
        deterministico dispone, e la traccia di audit ricorda.
      </p>

      <h2>Cosa facciamo bene, in cifre</h2>
      <p>
        L&apos;affermazione non è &quot;siamo pronti per gli agenti&quot;
        nell&apos;astratto. È specifica. Una superficie API, la stessa su cui gira
        l&apos;applicazione stessa, provata fino a duecentoventiseimila richieste
        a zero percento di fallimenti. Un catalogo Model Context Protocol di circa
        undici strumenti, ciascuno circoscritto per tenant e auditato. Un
        assistente nell&apos;applicazione di circa dodici strumenti su sei pagine
        strumentate, ogni azione di scrittura confermata da un umano prima di
        essere eseguita. Un motore di workflow con quattordici definizioni di task
        e tre flussi end-to-end per i processi che devono essere deterministici. E
        la stessa suite di isolamento di venticinque a trenta test di integrazione
        e la stessa traccia di audit che proteggono lo schermo proteggono ognuna
        di quelle porte, perché non sono porte separate verso nuclei separati.
        Sono tre porte verso uno solo.
      </p>

      <h2>Perché conta adesso</h2>
      <p>
        Lo strato più visibile di ogni applicazione enterprise, lo schermo, è lo
        strato che l&apos;IA sta rendendo commodity più in fretta. Se la tua
        interfaccia è solo uno schermo, il tuo prodotto è esposto esattamente allo
        strato che si erode. Se la tua interfaccia è una superficie di strumenti
        tipizzata, con permessi e auditata, lo stesso spostamento diventa leva:
        gli agenti possono guidare la piattaforma senza che nessuno abbassi le
        barriere di protezione. Gli operatori che comporranno questo più in fretta
        sono quelli il cui nucleo è stato costruito per essere guidato da qualcosa
        di diverso da un mouse.
      </p>

      <h2>Onesti su dove siamo oggi</h2>
      <p>
        Siamo precisi sulla maturità. La superficie API è ampia ed è la stessa
        superficie su cui gira l&apos;applicazione stessa. La superficie di
        strumenti per agenti è reale ed è ricca in lettura, con un insieme
        controllato e confermato di azioni di scrittura, non mano libera
        sull&apos;intera piattaforma. L&apos;irrobustimento per l&apos;uso
        macchina-a-macchina non presidiato, account di servizio dedicati,
        irrobustimento del trasporto per chiamanti remoti, è sulla roadmap vicina
        piuttosto che rilasciato. Preferiamo enunciare il confine piuttosto che
        suggerire una maturità che non abbiamo ancora meritato. Il design è
        l&apos;affermazione duratura: l&apos;interfaccia che una macchina guida e
        l&apos;interfaccia che una persona guida sono lo stesso nucleo, sotto le
        stesse regole.
      </p>
    </div>
  );
}
