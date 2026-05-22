/**
 * Whitepaper #1: After the UI layer falls.
 *
 * Long-form content authored as JSX (one component per locale). Keeps the
 * authoring loop short while the whitepaper catalog is small. When we pass
 * three or four papers, switch to MDX and an `app/[locale]/whitepapers/[slug]/page.mdx`
 * pattern.
 *
 * Style notes:
 *  - Website voice: first person plural ("we"). The split between we (public
 *    site, whitepapers, decks) and I (DMs, 1:1 emails) is captured in the
 *    no-corporate-we memory note.
 *  - No named clients, partners, or competitors.
 *  - Operator-grade voice: concrete, opinionated, no consulting boilerplate.
 *  - No em dashes anywhere, in any language.
 */

import type { AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function AfterTheUiLayerFalls({ locale }: ContentProps) {
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
      <h2>The cycle, briefly</h2>
      <p>
        Every wave of enterprise software has produced a new commodity layer. In the 2000s it was
        the application server. In the 2010s it was the cloud runtime. In the 2020s it is the
        application&apos;s presentation layer itself: the screens, the forms, the dashboards, the
        report builders. Generative interfaces, copilot patterns, and the orchestration logic that
        sits above them are turning what used to be twelve months of design and build into a few
        days of configuration. The end state is not that UIs disappear. It is that the cost of
        producing one falls so far that buying a UI from a platform vendor becomes a strange thing
        to do.
      </p>
      <p>
        That shift matters specifically for lending. The leasing, consumer finance, and fleet
        sectors built whole product categories on top of the assumption that the user interface was
        scarce, slow, and expensive. Vendor selection decisions, internal politics, training
        budgets, and integration timelines all anchor on that assumption. When it stops being true,
        a lot of those decisions get repriced at once.
      </p>

      <h2>What stays defensible</h2>
      <p>
        Three layers survive the shift, and a fourth one becomes more important than it has been
        for twenty years.
      </p>
      <p>
        <strong>The auditable core.</strong> A lending platform is, at its heart, a state machine
        for contracts and money. It tells you, at any second, what every contract is worth, what
        every borrower owes, what every regulator is going to ask for next quarter. The core has to
        be deterministic, reproducible, and auditable for the rest of the decade. LLMs do not
        change that requirement; if anything they raise the bar, because the easier it is to
        generate text and screens, the more the regulator and the auditor will pull on the
        underlying ledger.
      </p>
      <p>
        <strong>The domain configuration.</strong> Every operator has its own products, its own
        risk policy, its own approval matrix, its own accounting plan, its own way of pricing a
        residual value. None of that is generic. None of it is shipped by a vendor. It is built
        over years and it is what makes one operator different from another. Five years from now,
        the configuration layer of a lending platform will look more like a private codebase than a
        set of admin screens, and the operators who own theirs will run circles around the ones
        who rent it.
      </p>
      <p>
        <strong>The speed at which the two move together.</strong> The defensible position is not
        having a good core, or a good configuration, in isolation. It is the ability to change the
        configuration in days and the core in weeks, on the same release train, without breaking
        the ledger. That is an organisational capability as much as a technical one. The vendors
        who sell long roadmaps are essentially saying they cannot do this. The operators who can
        do it in-house are essentially saying they no longer need a vendor.
      </p>
      <p>
        <strong>And the operator depth behind the configuration.</strong> A configuration is only
        as good as the people who set it. The reason the UI commoditisation matters is that it
        removes the part of the platform that was easy to outsource, and leaves the parts that
        actually require domain context. The mid-tier operators who win the next decade will be
        the ones who can pull domain context into their platform decisions, not the ones who treat
        platform as a procurement problem.
      </p>

      <h2>What it means for a mid-tier operator in 2026</h2>
      <p>
        If you are running a mid-tier non-bank lender, a captive, or an independent fleet, the practical
        implication is that the shape of your next platform decision has changed. A traditional
        decision in 2018 looked like this: write a board paper, run an RFP, pick a vendor, spend
        eighteen to twenty-four months on implementation, hope nothing material changes in the
        market. The vendor handed you the UI, the workflow, the data model, and a long list of
        configurable knobs you would never quite have time to turn.
      </p>
      <p>
        The same decision in 2026 looks different. The UI is no longer the scarce thing. The
        scarce thing is a deterministic, auditable core that runs your products on your data,
        plus a configuration layer that captures the way you actually do business, plus the
        speed to iterate on both. The vendor model breaks down because there is no single
        configuration that fits two operators in a single segment, let alone five segments. The
        in-house model breaks down because most mid-tier operators cannot afford the engineering
        depth required to maintain the core. What replaces both is a co-creation model: a shared
        core, a partner-specific configuration, and an operator-grade partner sitting between
        you and the production line.
      </p>

      <h2>Questions to put on the table</h2>
      <p>The next time the platform conversation comes up in your operating committee, four questions are worth a slot:</p>
      <ol>
        <li>
          <strong>Where, specifically, is the core auditable today?</strong> Not&nbsp;the screens,
          not the workflow, not the dashboards. The ledger, the contract state machine, the
          accounting layer. If the answer is &quot;the vendor handles it,&quot; that is a vendor
          dependency you are about to renegotiate from a weaker position than you think.
        </li>
        <li>
          <strong>Who owns the configuration?</strong> If your risk policy lives in a Word
          document and is replicated into three different platforms by three different teams,
          you do not have a configuration layer. You have a coordination tax. The defensible
          version of this layer is a small, versioned, testable artifact that the business and
          the platform team co-own.
        </li>
        <li>
          <strong>How quickly can you change a product?</strong> Not how quickly your vendor can.
          How quickly you can. From the moment a commercial decision is made to the moment the
          new product is live, end-to-end, including tax, accounting, reporting, audit trail.
          Sixty days is operator-grade. A hundred and eighty is mid-pack. A year is end-of-life.
        </li>
        <li>
          <strong>Who do you call when it breaks?</strong> If the answer is a procurement contact
          at a vendor with a different incentive structure, that is the gap a partnership model
          is built to close.
        </li>
      </ol>

      <h2>What we are building around this thesis</h2>
      <p>
        Innovia is structured around the four layers above. The platform is the auditable core.
        The Year-1 Innovation Partnership is the configuration work. The operator depth is what we
        bring. The speed is what the technology stack and the engagement model are jointly designed
        to deliver. None of that is unique on a slide. The work is in proving it on a deployment
        , which is exactly what the prototype and implementation engagements are for.
      </p>
      <p>
        If any of the four questions above is currently sitting unanswered in your operating
        committee, that is a useful starting point for a conversation.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <h2>Ciclul, pe scurt</h2>
      <p>
        Fiecare val de software enterprise a produs un strat nou care a devenit commodity. În anii
        2000 a fost application server-ul. În anii 2010 a fost cloud runtime-ul. În anii 2020 este
        chiar stratul de prezentare al aplicației: ecranele, formularele, dashboard-urile,
        report builder-ele. Interfețele generative, pattern-urile de copilot și logica de
        orchestrare care stă deasupra transformă ce însemna douăsprezece luni de design și build în
        câteva zile de configurație. Nu e că UI-urile dispar. E că prețul producerii unui UI scade
        atât de mult încât a cumpăra un UI de la un vendor de platformă devine un lucru ciudat
        de făcut.
      </p>
      <p>
        Schimbarea contează specific pentru lending. Sectoarele de leasing, finanțare de consum și
        flote au construit categorii întregi de produse pe presupunerea că interfața de utilizator
        e rară, lentă și scumpă. Deciziile de selecție de vendor, politica internă, bugetele de
        training, calendarele de integrare, toate sunt ancorate pe acea presupunere. Când ea
        încetează să fie adevărată, multe dintre acele decizii sunt re-prețuite simultan.
      </p>

      <h2>Ce rămâne defensibil</h2>
      <p>
        Trei straturi supraviețuiesc schimbării, iar un al patrulea devine mai important decât a
        fost în ultimii douăzeci de ani.
      </p>
      <p>
        <strong>Nucleul auditabil.</strong> O platformă de lending este, în esență, o mașină de
        stare pentru contracte și bani. Îți spune, în orice secundă, ce valoare are fiecare
        contract, ce datorează fiecare împrumutat, ce o să ceară fiecare regulator trimestrul
        următor. Nucleul trebuie să fie determinist, reproductibil și auditabil pentru restul
        deceniului. LLM-urile nu schimbă această cerință; dacă o influențează cumva, o ridică,
        pentru că cu cât e mai ușor să generezi text și ecrane, cu atât mai mult vor trage
        regulatorul și auditorul de registrul de bază.
      </p>
      <p>
        <strong>Configurația de domeniu.</strong> Fiecare operator are propriile produse, propria
        politică de risc, propria matrice de aprobare, propriul plan de conturi, propriul mod de a
        preția o valoare reziduală. Nimic din asta nu e generic. Nimic nu vine livrat de un
        vendor. Se construiește în ani și e ce face un operator diferit de altul. Peste cinci ani,
        stratul de configurație al unei platforme de lending va semăna mai mult cu un codebase
        privat decât cu un set de ecrane de admin, iar operatorii care îl dețin propriu vor rula
        cercuri în jurul celor care îl închiriază.
      </p>
      <p>
        <strong>Viteza cu care cele două se mișcă împreună.</strong> Poziția defensibilă nu e să
        ai un nucleu bun, sau o configurație bună, izolat. Este capacitatea de a schimba
        configurația în zile și nucleul în săptămâni, pe același tren de release, fără a sparge
        registrul. E o capacitate organizațională la fel de mult ca una tehnică. Vendorii care vând
        roadmap-uri lungi spun, în fond, că nu pot face asta. Operatorii care pot face asta in-house
        spun, în fond, că nu mai au nevoie de vendor.
      </p>
      <p>
        <strong>Și profunzimea de operator din spatele configurației.</strong> O configurație e
        atât de bună cât sunt oamenii care o setează. Motivul pentru care comoditizarea UI-ului
        contează e că scoate partea din platformă care era ușor de externalizat și lasă părțile
        care necesită cu adevărat context de domeniu. Operatorii mid-tier care câștigă următorul
        deceniu vor fi cei care pot aduce context de domeniu în deciziile de platformă, nu cei
        care tratează platforma ca pe o problemă de procurement.
      </p>

      <h2>Ce înseamnă asta pentru un operator mid-tier în 2026</h2>
      <p>
        Dacă administrezi un IFN mid-tier, un captive sau o flotă independentă, implicația
        practică e că forma următoarei decizii de platformă s-a schimbat. O decizie tradițională
        în 2018 arăta așa: scrii un board paper, rulezi un RFP, alegi un vendor, cheltui
        optsprezece până la douăzeci și patru de luni pe implementare, speri să nu se schimbe
        nimic material în piață. Vendorul îți preda UI-ul, workflow-ul, modelul de date și o listă
        lungă de knob-uri configurabile pe care nu ai fi avut niciodată timp să le rotești.
      </p>
      <p>
        Aceeași decizie în 2026 arată diferit. UI-ul nu mai e lucrul rar. Lucrul rar e un nucleu
        determinist și auditabil care rulează produsele tale pe datele tale, plus un strat de
        configurație care surprinde modul în care tu chiar faci business, plus viteza de iterare
        pe ambele. Modelul de vendor se rupe pentru că nu există o singură configurație care să
        se potrivească la doi operatori dintr-un singur segment, darămite cinci segmente. Modelul
        in-house se rupe pentru că majoritatea operatorilor mid-tier nu-și permit profunzimea de
        inginerie necesară pentru a întreține nucleul. Ce înlocuiește pe ambele este un model de
        co-creație: un nucleu partajat, o configurație specifică partenerului și un partener de
        nivel de operator care stă între tine și linia de producție.
      </p>

      <h2>Întrebări de pus pe masă</h2>
      <p>
        Următoarea dată când discuția de platformă apare în comitetul tău operațional, patru
        întrebări merită un slot:
      </p>
      <ol>
        <li>
          <strong>Unde, mai exact, este nucleul auditabil astăzi?</strong> Nu ecranele, nu
          workflow-ul, nu dashboard-urile. Registrul, mașina de stare a contractului, stratul de
          contabilitate. Dacă răspunsul e &quot;se ocupă vendor-ul&quot;, asta e o dependență de
          vendor pe care urmează să o renegociezi dintr-o poziție mai slabă decât crezi.
        </li>
        <li>
          <strong>Cine deține configurația?</strong> Dacă politica ta de risc trăiește într-un
          document Word și e replicată în trei platforme diferite de trei echipe diferite, nu ai
          un strat de configurație. Ai o taxă de coordonare. Versiunea defensibilă a acestui
          strat e un artefact mic, versionat și testabil pe care business-ul și echipa de
          platformă îl dețin împreună.
        </li>
        <li>
          <strong>Cât de repede poți schimba un produs?</strong> Nu cât de repede poate vendor-ul
          tău. Cât de repede poți tu. Din momentul în care se ia o decizie comercială până în
          momentul în care produsul nou e live, end-to-end, incluzând fiscalitate, contabilitate,
          raportare, audit trail. Șaizeci de zile e nivel de operator. O sută optzeci e mid-pack.
          Un an e end-of-life.
        </li>
        <li>
          <strong>Pe cine suni când se sparge?</strong> Dacă răspunsul e un contact de procurement
          la un vendor cu o structură de stimulente diferită, ăla e exact golul pe care un model
          de parteneriat e construit să-l închidă.
        </li>
      </ol>

      <h2>Ce construim în jurul acestei teze</h2>
      <p>
        Innovia este structurată în jurul celor patru straturi de mai sus. Platforma este nucleul
        auditabil. Innovation Partnership-ul de Anul 1 este munca de configurație. Profunzimea de
        operator este ce aducem. Viteza este ce stack-ul tehnologic și modelul de engagement sunt
        proiectate împreună să livreze. Nimic din asta nu e unic pe un slide. Munca e în a o
        demonstra pe un deployment, care e exact pentru ce sunt engagement-urile de prototip și
        implementare.
      </p>
      <p>
        Dacă oricare dintre cele patru întrebări de mai sus stă în acest moment fără răspuns în
        comitetul tău operațional, ăla e un punct de plecare util pentru o discuție.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <h2>Der Zyklus in Kürze</h2>
      <p>
        Jede Welle von Enterprise-Software hat eine neue Commodity-Schicht hervorgebracht. In den
        2000ern war es der Application Server. In den 2010ern die Cloud-Runtime. In den 2020ern
        ist es die Präsentationsschicht der Anwendung selbst: die Bildschirme, die Formulare,
        die Dashboards, die Report-Builder. Generative Oberflächen, Copilot-Muster und die
        Orchestrierungslogik darüber verwandeln zwölf Monate Design und Bau in wenige Tage
        Konfiguration. Das Endbild ist nicht, dass UIs verschwinden. Es ist, dass die Kosten,
        eine zu produzieren, so weit fallen, dass es seltsam wird, eine UI von einem
        Plattform-Vendor zu kaufen.
      </p>
      <p>
        Diese Verschiebung trifft Lending besonders. Die Sektoren Leasing, Konsumentenkredit und
        Fuhrpark haben ganze Produktkategorien auf der Annahme aufgebaut, dass die
        Benutzeroberfläche knapp, langsam und teuer ist. Vendor-Auswahlentscheidungen, interne
        Politik, Trainingsbudgets und Integrations-Zeitpläne sind alle an dieser Annahme
        verankert. Wenn sie nicht mehr stimmt, werden viele dieser Entscheidungen gleichzeitig
        neu bepreist.
      </p>

      <h2>Was verteidigungsfähig bleibt</h2>
      <p>
        Drei Schichten überleben die Verschiebung, und eine vierte wird wichtiger als sie in den
        letzten zwanzig Jahren war.
      </p>
      <p>
        <strong>Der auditierbare Kern.</strong> Eine Lending-Plattform ist im Kern eine
        Zustandsmaschine für Verträge und Geld. Sie sagt Ihnen jederzeit, was jeder Vertrag wert
        ist, was jeder Kreditnehmer schuldet, was jeder Regulator im nächsten Quartal verlangen
        wird. Der Kern muss deterministisch, reproduzierbar und für den Rest des Jahrzehnts
        auditierbar sein. LLMs ändern diese Anforderung nicht; wenn überhaupt, erhöhen sie die
        Latte, denn je einfacher sich Text und Bildschirme generieren lassen, desto stärker
        ziehen Regulator und Auditor am darunterliegenden Ledger.
      </p>
      <p>
        <strong>Die domänenspezifische Konfiguration.</strong> Jeder Betreiber hat seine eigenen
        Produkte, seine eigene Risikopolitik, seine eigene Genehmigungsmatrix, seinen eigenen
        Kontenplan, seine eigene Art, einen Restwert zu bepreisen. Nichts davon ist generisch.
        Nichts davon kommt von einem Vendor geliefert. Es wird über Jahre aufgebaut und es ist
        das, was einen Betreiber von einem anderen unterscheidet. In fünf Jahren wird die
        Konfigurationsschicht einer Lending-Plattform eher wie eine private Codebase aussehen
        als wie eine Sammlung von Admin-Bildschirmen. Die Betreiber, denen ihre Konfiguration
        gehört, werden Kreise um die ziehen, die sie mieten.
      </p>
      <p>
        <strong>Das Tempo, in dem sich beide gemeinsam bewegen.</strong> Die verteidigungsfähige
        Position ist nicht, isoliert einen guten Kern oder eine gute Konfiguration zu haben. Es
        ist die Fähigkeit, die Konfiguration in Tagen und den Kern in Wochen zu verändern, auf
        demselben Release-Train, ohne den Ledger zu brechen. Das ist genauso eine
        Organisationsfähigkeit wie eine technische. Die Vendoren, die lange Roadmaps verkaufen,
        sagen im Grunde, dass sie das nicht können. Die Betreiber, die das in-house können,
        sagen im Grunde, dass sie keinen Vendor mehr brauchen.
      </p>
      <p>
        <strong>Und die Betreibertiefe hinter der Konfiguration.</strong> Eine Konfiguration ist
        nur so gut wie die Leute, die sie aufsetzen. Der Grund, warum die UI-Commoditisierung
        wichtig ist: sie entfernt den Teil der Plattform, der leicht auszulagern war, und lässt
        die Teile übrig, die tatsächlich Domänenkontext brauchen. Die Mid-Tier-Betreiber, die
        das nächste Jahrzehnt gewinnen, sind diejenigen, die Domänenkontext in ihre
        Plattform-Entscheidungen ziehen können, nicht diejenigen, die Plattform als
        Procurement-Problem behandeln.
      </p>

      <h2>Was das für einen Mid-Tier-Betreiber in 2026 bedeutet</h2>
      <p>
        Wenn Sie einen Mid-Tier-Nichtbankenkreditgeber, einen Captive oder eine unabhängige
        Flotte führen, ist die praktische Implikation, dass sich die Form Ihrer nächsten
        Plattform-Entscheidung verändert hat. Eine traditionelle Entscheidung in 2018 sah so
        aus: Vorstandspapier schreiben, RFP durchführen, Vendor wählen, achtzehn bis
        vierundzwanzig Monate auf Implementierung verwenden, hoffen, dass sich am Markt nichts
        Wesentliches ändert. Der Vendor übergab Ihnen die UI, den Workflow, das Datenmodell und
        eine lange Liste konfigurierbarer Stellschrauben, die zu drehen Sie nie ganz Zeit gehabt
        hätten.
      </p>
      <p>
        Dieselbe Entscheidung in 2026 sieht anders aus. Die UI ist nicht mehr das Knappe. Das
        Knappe ist ein deterministischer, auditierbarer Kern, der Ihre Produkte auf Ihren Daten
        betreibt, plus eine Konfigurationsschicht, die abbildet, wie Sie tatsächlich Geschäft
        machen, plus die Geschwindigkeit, beides zu iterieren. Das Vendor-Modell bricht, weil
        es keine einzelne Konfiguration gibt, die zu zwei Betreibern in einem einzelnen Segment
        passt, geschweige denn fünf Segmenten. Das In-house-Modell bricht, weil sich die
        meisten Mid-Tier-Betreiber die Engineering-Tiefe, die zur Pflege des Kerns nötig ist,
        nicht leisten können. Was beide ersetzt, ist ein Co-Creation-Modell: ein geteilter Kern,
        eine partner-spezifische Konfiguration und ein Partner auf Betreiberniveau, der
        zwischen Ihnen und der Produktionslinie sitzt.
      </p>

      <h2>Fragen für den Tisch</h2>
      <p>
        Wenn das nächste Mal das Plattform-Gespräch in Ihrem Operating Committee aufkommt,
        verdienen vier Fragen einen Slot:
      </p>
      <ol>
        <li>
          <strong>Wo genau ist der Kern heute auditierbar?</strong> Nicht die Bildschirme, nicht
          der Workflow, nicht die Dashboards. Der Ledger, die Vertragszustandsmaschine, die
          Buchhaltungs-Schicht. Wenn die Antwort &quot;das macht der Vendor&quot; lautet, ist
          das eine Vendor-Abhängigkeit, die Sie aus einer schwächeren Position neu verhandeln
          werden, als Sie denken.
        </li>
        <li>
          <strong>Wem gehört die Konfiguration?</strong> Wenn Ihre Risikopolitik in einem
          Word-Dokument lebt und von drei verschiedenen Teams in drei verschiedene Plattformen
          repliziert wird, haben Sie keine Konfigurationsschicht. Sie haben eine
          Koordinationssteuer. Die verteidigungsfähige Version dieser Schicht ist ein kleines,
          versioniertes, testbares Artefakt, das Business und Plattform-Team gemeinsam besitzen.
        </li>
        <li>
          <strong>Wie schnell können Sie ein Produkt ändern?</strong> Nicht wie schnell Ihr
          Vendor kann. Wie schnell Sie können. Von der kommerziellen Entscheidung bis zum
          neuen Produkt live, end-to-end, inklusive Steuern, Buchhaltung, Reporting, Audit
          Trail. Sechzig Tage sind Betreiberniveau. Hundertachtzig sind Mid-Pack. Ein Jahr ist
          End-of-Life.
        </li>
        <li>
          <strong>Wen rufen Sie an, wenn es bricht?</strong> Wenn die Antwort ein
          Procurement-Kontakt bei einem Vendor mit einer anderen Incentive-Struktur ist, ist
          das genau die Lücke, die ein Partnerschaftsmodell schließen soll.
        </li>
      </ol>

      <h2>Was wir um diese These herum bauen</h2>
      <p>
        Innovia ist um die vier Schichten oben herum aufgebaut. Die Plattform ist der
        auditierbare Kern. Die Innovation Partnership des ersten Jahres ist die
        Konfigurationsarbeit. Die Betreibertiefe ist, was wir mitbringen. Die Geschwindigkeit
        ist das, was Technologie-Stack und Engagement-Modell gemeinsam liefern sollen. Nichts
        davon ist auf einem Slide einzigartig. Die Arbeit besteht darin, es auf einem
        Deployment zu beweisen, und genau dafür sind die Prototyp- und
        Implementierungs-Engagements da.
      </p>
      <p>
        Wenn eine der vier Fragen oben derzeit unbeantwortet in Ihrem Operating Committee liegt,
        ist das ein nützlicher Startpunkt für ein Gespräch.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <h2>Le cycle, en bref</h2>
      <p>
        Chaque vague de logiciel enterprise a produit une nouvelle couche commodity. Dans les
        années 2000, c&apos;était l&apos;application server. Dans les années 2010, le runtime
        cloud. Dans les années 2020, c&apos;est la couche de présentation elle-même de
        l&apos;application : les écrans, les formulaires, les dashboards, les report-builders.
        Les interfaces génératives, les patterns copilot et la logique d&apos;orchestration
        au-dessus transforment ce qui était douze mois de design et de build en quelques jours
        de configuration. L&apos;état final, ce n&apos;est pas que les UI disparaissent.
        C&apos;est que le coût d&apos;en produire une chute tellement bas qu&apos;acheter une UI
        à un vendeur de plateforme devient une chose étrange à faire.
      </p>
      <p>
        Ce shift compte spécifiquement pour le lending. Les secteurs leasing, crédit à la
        consommation et gestion de flotte ont construit des catégories entières de produits sur
        l&apos;hypothèse que l&apos;interface utilisateur était rare, lente et coûteuse. Les
        décisions de sélection de vendeur, la politique interne, les budgets de formation et les
        calendriers d&apos;intégration sont tous ancrés sur cette hypothèse. Quand elle cesse
        d&apos;être vraie, beaucoup de ces décisions sont reprises au prix du marché en même
        temps.
      </p>

      <h2>Ce qui reste défendable</h2>
      <p>
        Trois couches survivent au shift, et une quatrième devient plus importante
        qu&apos;elle ne l&apos;a été depuis vingt ans.
      </p>
      <p>
        <strong>Le cœur auditable.</strong> Une plateforme de lending est, au fond, une machine
        à états pour les contrats et l&apos;argent. Elle vous dit à chaque seconde ce que vaut
        chaque contrat, ce que doit chaque emprunteur, ce que chaque régulateur va demander au
        trimestre prochain. Le cœur doit être déterministe, reproductible et auditable pour le
        reste de la décennie. Les LLM ne changent pas cette exigence ; s&apos;ils changent
        quelque chose, ils élèvent la barre, parce que plus il est facile de générer du texte
        et des écrans, plus le régulateur et l&apos;auditeur tirent sur le ledger en dessous.
      </p>
      <p>
        <strong>La configuration métier.</strong> Chaque opérateur a ses propres produits, sa
        propre politique de risque, sa propre matrice d&apos;approbation, son propre plan
        comptable, sa propre façon de pricer une valeur résiduelle. Rien de tout cela
        n&apos;est générique. Rien n&apos;est livré par un vendeur. Ça se construit sur des
        années et c&apos;est ce qui rend un opérateur différent d&apos;un autre. Dans cinq ans,
        la couche configuration d&apos;une plateforme de lending ressemblera plus à une
        codebase privée qu&apos;à un ensemble d&apos;écrans admin, et les opérateurs qui
        possèdent la leur tourneront en rond autour de ceux qui la louent.
      </p>
      <p>
        <strong>La vitesse à laquelle les deux évoluent ensemble.</strong> La position
        défendable n&apos;est pas d&apos;avoir un bon cœur, ou une bonne configuration, isolés.
        C&apos;est la capacité à changer la configuration en jours et le cœur en semaines, sur
        le même train de release, sans casser le ledger. C&apos;est une capacité
        organisationnelle autant que technique. Les vendeurs qui vendent de longues roadmaps
        disent essentiellement qu&apos;ils ne peuvent pas faire ça. Les opérateurs qui peuvent
        le faire en interne disent essentiellement qu&apos;ils n&apos;ont plus besoin de
        vendeur.
      </p>
      <p>
        <strong>Et la profondeur d&apos;opérateur derrière la configuration.</strong> Une
        configuration ne vaut que ce que valent les gens qui l&apos;établissent. La raison pour
        laquelle la commoditisation de l&apos;UI compte, c&apos;est qu&apos;elle retire la
        partie de la plateforme qui était facile à externaliser et laisse les parties qui
        nécessitent vraiment du contexte métier. Les opérateurs mid-tier qui gagneront la
        prochaine décennie sont ceux qui peuvent tirer du contexte métier dans leurs décisions
        de plateforme, pas ceux qui traitent la plateforme comme un problème de procurement.
      </p>

      <h2>Ce que cela signifie pour un opérateur mid-tier en 2026</h2>
      <p>
        Si vous gérez un prêteur non bancaire mid-tier, un captive ou une flotte indépendante,
        l&apos;implication pratique est que la forme de votre prochaine décision de plateforme
        a changé. Une décision traditionnelle en 2018 ressemblait à ceci : écrire un papier
        pour le board, lancer un RFP, choisir un vendeur, passer dix-huit à vingt-quatre mois
        sur l&apos;implémentation, espérer que rien de matériel ne change sur le marché. Le
        vendeur vous remettait l&apos;UI, le workflow, le modèle de données et une longue liste
        de paramètres configurables que vous n&apos;auriez jamais le temps de tourner.
      </p>
      <p>
        La même décision en 2026 a une autre allure. L&apos;UI n&apos;est plus la chose rare.
        La chose rare est un cœur déterministe, auditable, qui fait tourner vos produits sur
        vos données, plus une couche configuration qui capture la façon dont vous faites
        réellement du business, plus la vitesse pour itérer sur les deux. Le modèle vendeur
        casse parce qu&apos;il n&apos;y a pas de configuration unique qui convienne à deux
        opérateurs d&apos;un même segment, encore moins à cinq segments. Le modèle in-house
        casse parce que la plupart des opérateurs mid-tier ne peuvent pas se permettre la
        profondeur d&apos;ingénierie nécessaire pour maintenir le cœur. Ce qui remplace les
        deux est un modèle de co-création : un cœur partagé, une configuration spécifique au
        partenaire et un partenaire de niveau opérateur entre vous et la ligne de production.
      </p>

      <h2>Questions à mettre sur la table</h2>
      <p>
        La prochaine fois que la conversation plateforme remonte dans votre comité opérationnel,
        quatre questions méritent un slot :
      </p>
      <ol>
        <li>
          <strong>Où, exactement, le cœur est-il auditable aujourd&apos;hui ?</strong> Pas les
          écrans, pas le workflow, pas les dashboards. Le ledger, la machine à états du
          contrat, la couche comptable. Si la réponse est &quot;c&apos;est le vendeur qui
          gère&quot;, c&apos;est une dépendance vendeur que vous êtes sur le point de
          renégocier depuis une position plus faible que vous ne le pensez.
        </li>
        <li>
          <strong>Qui détient la configuration ?</strong> Si votre politique de risque vit dans
          un document Word et est répliquée dans trois plateformes différentes par trois
          équipes différentes, vous n&apos;avez pas de couche configuration. Vous avez une taxe
          de coordination. La version défendable de cette couche est un artefact petit,
          versionné, testable, co-détenu par le business et l&apos;équipe plateforme.
        </li>
        <li>
          <strong>À quelle vitesse pouvez-vous changer un produit ?</strong> Pas à quelle
          vitesse votre vendeur peut. À quelle vitesse vous pouvez. Du moment où une décision
          commerciale est prise au moment où le nouveau produit est live, end-to-end, y compris
          fiscalité, comptabilité, reporting, audit trail. Soixante jours, c&apos;est niveau
          opérateur. Cent quatre-vingt, mid-pack. Un an, end-of-life.
        </li>
        <li>
          <strong>Qui appelez-vous quand ça casse ?</strong> Si la réponse est un contact
          procurement chez un vendeur avec une structure d&apos;incitations différente, c&apos;est
          exactement la lacune qu&apos;un modèle de partenariat est construit pour combler.
        </li>
      </ol>

      <h2>Ce que nous construisons autour de cette thèse</h2>
      <p>
        Innovia est structurée autour des quatre couches ci-dessus. La plateforme est le cœur
        auditable. L&apos;Innovation Partnership de l&apos;année 1 est le travail de
        configuration. La profondeur d&apos;opérateur est ce que nous apportons. La vitesse
        est ce que le stack technologique et le modèle d&apos;engagement sont conçus ensemble
        pour livrer. Rien de tout cela n&apos;est unique sur un slide. Le travail est dans le
        fait de le prouver sur un déploiement, ce à quoi servent précisément les engagements
        de prototype et d&apos;implémentation.
      </p>
      <p>
        Si l&apos;une des quatre questions ci-dessus est actuellement sans réponse dans votre
        comité opérationnel, c&apos;est un point de départ utile pour une conversation.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <h2>Il ciclo, in breve</h2>
      <p>
        Ogni ondata di software enterprise ha prodotto un nuovo livello commodity. Negli anni
        2000 era l&apos;application server. Negli anni 2010 era il runtime cloud. Negli anni
        2020 è il livello di presentazione stesso dell&apos;applicazione: schermate, form,
        dashboard, report builder. Le interfacce generative, i pattern copilot e la logica di
        orchestrazione sopra di essi stanno trasformando quello che erano dodici mesi di
        design e build in pochi giorni di configurazione. Lo stato finale non è che le UI
        scompaiano. È che il costo di produrne una scende così tanto che comprare una UI da un
        vendor di piattaforma diventa una cosa strana da fare.
      </p>
      <p>
        Questo shift conta specificamente per il lending. I settori leasing, credito al
        consumo e flotte hanno costruito intere categorie di prodotto sull&apos;assunzione che
        l&apos;interfaccia utente fosse scarsa, lenta e costosa. Le decisioni di selezione
        vendor, la politica interna, i budget di training e i calendari di integrazione sono
        tutti ancorati a quell&apos;assunzione. Quando smette di essere vera, molte di quelle
        decisioni vengono ri-prezzate insieme.
      </p>

      <h2>Cosa resta difendibile</h2>
      <p>
        Tre livelli sopravvivono allo shift, e un quarto diventa più importante di quanto sia
        stato negli ultimi vent&apos;anni.
      </p>
      <p>
        <strong>Il nucleo auditabile.</strong> Una piattaforma di lending è, in fondo, una
        macchina a stati per contratti e denaro. Vi dice in ogni secondo cosa vale ogni
        contratto, cosa deve ogni mutuatario, cosa chiederà ogni regolatore nel prossimo
        trimestre. Il nucleo deve essere deterministico, riproducibile e auditabile per il
        resto del decennio. Gli LLM non cambiano questo requisito; semmai alzano l&apos;asticella,
        perché più è facile generare testo e schermate, più il regolatore e l&apos;auditor
        tirano sul ledger sottostante.
      </p>
      <p>
        <strong>La configurazione di dominio.</strong> Ogni operatore ha i propri prodotti, la
        propria politica di rischio, la propria matrice di approvazione, il proprio piano dei
        conti, il proprio modo di prezzare un valore residuo. Niente di tutto questo è generico.
        Niente arriva consegnato da un vendor. Si costruisce negli anni ed è ciò che rende un
        operatore diverso da un altro. Tra cinque anni, il livello di configurazione di una
        piattaforma di lending assomiglierà più a una codebase privata che a un insieme di
        schermate admin, e gli operatori che possiedono la propria gireranno in tondo intorno
        a chi la affitta.
      </p>
      <p>
        <strong>La velocità con cui i due si muovono insieme.</strong> La posizione difendibile
        non è avere un buon nucleo, o una buona configurazione, isolati. È la capacità di
        cambiare la configurazione in giorni e il nucleo in settimane, sullo stesso treno di
        release, senza rompere il ledger. È una capacità organizzativa quanto tecnica. I
        vendor che vendono roadmap lunghe in sostanza dicono che non possono farlo. Gli
        operatori che possono farlo in-house in sostanza dicono che non hanno più bisogno di
        un vendor.
      </p>
      <p>
        <strong>E la profondità da operatore dietro la configurazione.</strong> Una
        configurazione vale quanto le persone che la impostano. Il motivo per cui la
        commoditizzazione della UI conta è che rimuove la parte della piattaforma che era
        facile da esternalizzare e lascia le parti che richiedono davvero contesto di dominio.
        Gli operatori mid-tier che vinceranno il prossimo decennio saranno quelli che possono
        tirare contesto di dominio nelle loro decisioni di piattaforma, non quelli che
        trattano la piattaforma come un problema di procurement.
      </p>

      <h2>Cosa significa per un operatore mid-tier nel 2026</h2>
      <p>
        Se gestite una finanziaria non bancaria mid-tier, una captive o una flotta
        indipendente, l&apos;implicazione pratica è che la forma della vostra prossima
        decisione di piattaforma è cambiata. Una decisione tradizionale nel 2018 era così:
        scrivere un board paper, lanciare un RFP, scegliere un vendor, spendere da diciotto a
        ventiquattro mesi di implementazione, sperare che niente di materiale cambi sul
        mercato. Il vendor vi consegnava la UI, il workflow, il modello dati e una lunga lista
        di knob configurabili che non avreste mai avuto tempo di girare.
      </p>
      <p>
        La stessa decisione nel 2026 ha un altro aspetto. La UI non è più la cosa scarsa. La
        cosa scarsa è un nucleo deterministico e auditabile che fa girare i vostri prodotti
        sui vostri dati, più un livello di configurazione che cattura il modo in cui fate
        davvero business, più la velocità di iterare su entrambi. Il modello vendor si rompe
        perché non c&apos;è una singola configurazione che vada bene per due operatori in un
        singolo segmento, figurarsi cinque segmenti. Il modello in-house si rompe perché la
        maggior parte degli operatori mid-tier non si può permettere la profondità di
        ingegneria necessaria per mantenere il nucleo. Quello che sostituisce entrambi è un
        modello di co-creazione: un nucleo condiviso, una configurazione specifica per il
        partner e un partner a livello operatore che sta tra voi e la linea di produzione.
      </p>

      <h2>Domande da mettere sul tavolo</h2>
      <p>
        La prossima volta che la conversazione di piattaforma torna nel vostro comitato
        operativo, quattro domande meritano uno slot:
      </p>
      <ol>
        <li>
          <strong>Dove, esattamente, il nucleo è auditabile oggi?</strong> Non le schermate,
          non il workflow, non le dashboard. Il ledger, la macchina a stati del contratto, il
          livello contabile. Se la risposta è &quot;se ne occupa il vendor&quot;, è una
          dipendenza vendor che state per rinegoziare da una posizione più debole di quanto
          pensiate.
        </li>
        <li>
          <strong>Chi possiede la configurazione?</strong> Se la vostra politica di rischio
          vive in un documento Word e viene replicata in tre piattaforme diverse da tre team
          diversi, non avete un livello di configurazione. Avete una tassa di coordinamento.
          La versione difendibile di questo livello è un artefatto piccolo, versionato,
          testabile, co-posseduto da business e team di piattaforma.
        </li>
        <li>
          <strong>Quanto velocemente potete cambiare un prodotto?</strong> Non quanto può il
          vostro vendor. Quanto potete voi. Dal momento in cui si prende una decisione
          commerciale al momento in cui il nuovo prodotto è live, end-to-end, fiscalità,
          contabilità, reporting, audit trail inclusi. Sessanta giorni è livello operatore.
          Centoottanta è mid-pack. Un anno è end-of-life.
        </li>
        <li>
          <strong>Chi chiamate quando si rompe?</strong> Se la risposta è un contatto
          procurement presso un vendor con una struttura di incentivi diversa, è esattamente
          il vuoto che un modello di partnership è costruito per chiudere.
        </li>
      </ol>

      <h2>Cosa stiamo costruendo intorno a questa tesi</h2>
      <p>
        Innovia è strutturata intorno ai quattro livelli sopra. La piattaforma è il nucleo
        auditabile. L&apos;Innovation Partnership dell&apos;anno 1 è il lavoro di
        configurazione. La profondità da operatore è ciò che portiamo noi. La velocità è ciò
        che lo stack tecnologico e il modello di engagement sono progettati insieme per
        consegnare. Niente di tutto questo è unico su uno slide. Il lavoro è nel dimostrarlo
        su un deployment, che è esattamente per cui servono gli engagement di prototipo e
        implementazione.
      </p>
      <p>
        Se una qualsiasi delle quattro domande sopra è attualmente senza risposta nel vostro
        comitato operativo, è un punto di partenza utile per una conversazione.
      </p>
    </div>
  );
}
