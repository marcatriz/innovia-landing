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
 *  - No em dashes anywhere, in either language.
 */

interface ContentProps {
  locale: 'en' | 'ro';
}

export default function AfterTheUiLayerFalls({ locale }: ContentProps) {
  return locale === 'ro' ? <Ro /> : <En />;
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
