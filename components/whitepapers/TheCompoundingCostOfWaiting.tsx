/**
 * Whitepaper #2: The compounding cost of waiting.
 *
 * Sequel to "After the UI layer falls". Takes the diagnostic as starting point
 * and argues the urgency case: four clocks (regulator, talent, AI-native
 * competitor, customer expectations) tick quietly while leadership debates.
 * Concrete 4-quarter sequence at the end.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 */

import { Link, type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function TheCompoundingCostOfWaiting({ locale }: ContentProps) {
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
        Most mid-tier lending operators score between 40 and 65 percent on the{' '}
        <Link href="/diagnostic">Fit for Digital, Fit for AI. diagnostic</Link>.
        That spread is not the news. The news is what happens to that score if
        the operator does nothing for twelve more months.
      </p>

      <h2>The diagnostic, restated</h2>
      <p>
        Take the diagnostic (about seven minutes) and you get a number, a bucket,
        and a seven-bar breakdown. The number reflects how close your operation
        sits to operator-grade on the dimensions that decide whether your stack
        helps or hinders your business in 2026. The seven dimensions are Core
        platform, Configuration and speed, Data and decisioning, Compliance and
        audit, AI readiness, Customer experience, and Employee experience. None
        of them are surprising. What is sometimes surprising is the gap between
        where the leadership team believes the operation sits and where the
        score actually lands.
      </p>
      <p>
        A 60 percent score is not a failing grade. It is the honest market
        median for mid-tier non-bank lenders, captives, and independent fleets in European
        leasing. The reason most operators land there is structural, not
        embarrassing: the segment was built on assumptions about pace, vendor
        leverage, and AI maturity that no longer hold.
      </p>

      <h2>Why the score is what it is</h2>
      <p>
        The first whitepaper,{' '}
        <Link href="/whitepapers/after-the-ui-layer-falls">
          After the UI layer falls
        </Link>
        , argued that the UI is being commoditised and that three things stay
        defensible: an auditable core, a co-owned configuration layer, and the
        speed at which both move together. The diagnostic measures whether an
        operator has those three things plus the four practical layers that
        turn them into outcomes: data and decisioning, compliance and audit,
        customer experience, and employee experience.
      </p>
      <p>
        Most operators score well on parts of customer experience because they
        have invested in portals and self-service in the last five years. They
        score lower on Core platform and Configuration because those
        investments stopped at the surface and the engine underneath is still
        the engine from a previous era. They score lower still on AI readiness
        because nobody planned for an LLM-shaped world a board cycle ago.
      </p>
      <p>
        That distribution is not a moral failing of the operator. It is a
        snapshot of where the segment is. The question is not whether the
        snapshot is fair. The question is what happens to that snapshot next.
      </p>

      <h2>What happens if nothing changes for twelve months</h2>
      <p>Four clocks tick.</p>
      <p>
        <strong>The regulator clock.</strong> Every quarter, the regulatory
        surface area gets wider. New rules on outsourcing, on AI explainability,
        on data residency, on retail conduct. Each new rule adds a small but
        real cost to a stack that already struggles to audit its own state. The
        first time a regulator asks for a thematic data extract and the answer
        is &quot;give us four weeks&quot;, a soft cost has just turned into a
        hard one. Twelve months of nothing means twelve months of
        regulator-readiness debt accumulating on a base that was not designed
        to carry it.
      </p>
      <p>
        <strong>The talent clock.</strong> Engineering talent that understands
        both lending and modern stack is rare and getting rarer. The people who
        can move a vendor-owned core into a co-owned core have other options
        every year. Each month an operator waits, the cost and difficulty of
        hiring this team goes up. A two-person platform team in 2026 costs less
        than four people will in 2028, and the four-person team in 2028 will
        deliver less because the gap is bigger and the institutional memory is
        gone.
      </p>
      <p>
        <strong>The AI-native competitor clock.</strong> New entrants in
        adjacent segments are not building a leasing system that takes eighteen
        months to ship a product. They are building a leasing system that ships
        a product in three weeks because the team has the codebase, the data,
        and the autonomy in one place. The first time a new entrant takes a
        meaningful slice of a partner channel, that channel does not come back.
        Twelve months of nothing means twelve months for the new entrants to
        compound their advantage in places where the incumbents thought they
        were safe.
      </p>
      <p>
        <strong>The customer expectation clock.</strong> Sub-fifteen-minute
        decisioning, full self-service, omnichannel continuity. These were
        differentiators five years ago. They are baseline now. The first time a
        corporate client compares their leasing partner side by side with their
        bank&apos;s working capital experience and the leasing experience looks
        slower, the relationship has been silently demoted. Twelve months of
        nothing means twelve months of slow demotion across the corporate book.
      </p>
      <p>
        None of these clocks tick loudly. That is the problem. They compound
        quietly, and the cost shows up later as lost deals, regulator findings,
        talent gaps, and a board paper that suddenly looks more expensive than
        it would have done a year earlier.
      </p>

      <h2>What acting now actually means</h2>
      <p>
        Acting now does not mean signing a vendor today. It does not mean a
        multi-year transformation programme. It does not mean an RFP.
      </p>
      <p>Acting now means:</p>
      <ol>
        <li>
          <strong>This quarter:</strong> take the{' '}
          <Link href="/diagnostic">diagnostic</Link>, share it with the
          leadership team, and have an honest conversation about which two or
          three dimensions are most exposed. The diagnostic is free, takes
          seven minutes, and the breakdown is enough to start a board-level
          discussion. The score by itself does not matter. The breakdown does.
        </li>
        <li>
          <strong>Next quarter:</strong> scope a focused diagnostic engagement.
          Not a transformation. A two-to-four week structured read on the
          dimensions where you suspect the operation is most exposed, with
          concrete benchmarks against current operator practice. The output is
          a decision-grade document, not a slide deck.
        </li>
        <li>
          <strong>Within two quarters:</strong> decide whether the path forward
          is a configuration project on the existing stack, a partnership that
          brings in a working platform alongside, or a deeper rebuild. The data
          is now in hand. The decision is informed.
        </li>
        <li>
          <strong>Within four quarters:</strong> be in a configured deployment
          or in the late stages of a serious one. Year one of an Innovation
          Partnership ends with a deployment running your products on your
          data, not with a contract that pushes value into year three.
        </li>
      </ol>
      <p>
        That sequence costs less than the cost of waiting. The four clocks
        above are the reason.
      </p>

      <h2>The Innovia framing</h2>
      <p>
        The diagnostic is the entry point to this conversation but not the
        value. The value is the partnership: a working platform, a
        configuration layer your team co-owns, and the operator depth that
        comes from running these systems for nearly two decades. The diagnostic
        just makes the conversation honest. The first whitepaper makes the
        case for why the conversation matters. This one makes the case for not
        letting the conversation slide into next year.
      </p>
      <p>
        If your score is in the 40 to 65 percent band, that is the market
        median. The question is not whether to be embarrassed. The question is
        what the next move looks like in 2026. We will help you find it. The
        first 45 minutes are on us.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Majoritatea operatorilor mid-tier de lending obțin între 40 și 65 la
        sută pe{' '}
        <Link href="/diagnostic">
          diagnosticul Fit for Digital, Fit for AI.
        </Link>{' '}
        Acel interval nu e știrea. Știrea e ce se întâmplă cu scorul acela dacă
        operatorul nu face nimic în următoarele douăsprezece luni.
      </p>

      <h2>Diagnosticul, reformulat</h2>
      <p>
        Rezolvă diagnosticul (aproximativ șapte minute) și obții un număr, un
        bucket și o defalcare pe șapte bare. Numărul reflectă cât de aproape
        stă operațiunea ta de nivelul de operator pe dimensiunile care decid
        dacă stack-ul tău ajută sau încurcă business-ul în 2026. Cele șapte
        dimensiuni sunt Platforma de bază, Configurație și viteză, Date și
        decizionare, Compliance și audit, Pregătirea pentru AI, Experiența
        clienților și Experiența angajaților. Niciuna nu e surprinzătoare. Ce
        surprinde uneori e diferența dintre unde crede echipa de leadership că
        stă operațiunea și unde aterizează efectiv scorul.
      </p>
      <p>
        Un scor de 60 la sută nu e o notă de picare. E mediana onestă de piață
        pentru IFN-uri mid-tier, captive-uri și flote independente în
        leasing-ul european. Motivul pentru care majoritatea operatorilor
        aterizează acolo e structural, nu jenant: segmentul a fost construit pe
        presupuneri despre ritm, leverage față de vendori și maturitate AI care
        nu mai țin.
      </p>

      <h2>De ce e scorul ce este</h2>
      <p>
        Primul whitepaper,{' '}
        <Link href="/whitepapers/after-the-ui-layer-falls">
          După ce stratul de UI cade
        </Link>
        , a argumentat că UI-ul este comoditizat și că trei lucruri rămân
        defensibile: un nucleu auditabil, un strat de configurație co-deținut
        și viteza cu care cele două se mișcă împreună. Diagnosticul măsoară
        dacă un operator are aceste trei lucruri plus cele patru straturi
        practice care le transformă în rezultate: date și decizionare,
        compliance și audit, experiența clienților, experiența angajaților.
      </p>
      <p>
        Majoritatea operatorilor scorează bine pe părți din experiența
        clienților pentru că au investit în portaluri și self-service în
        ultimii cinci ani. Scorează mai prost pe Core platform și Configurație
        pentru că acele investiții s-au oprit la suprafață, iar motorul de
        dedesubt e tot motorul dintr-o eră anterioară. Scorează și mai prost
        pe pregătirea AI pentru că nimeni nu a planificat pentru o lume
        modelată de LLM-uri în urmă cu un ciclu de board.
      </p>
      <p>
        Distribuția asta nu este o eroare morală a operatorului. Este o
        fotografie a stării segmentului. Întrebarea nu este dacă fotografia
        este corectă. Întrebarea este ce se întâmplă cu ea în continuare.
      </p>

      <h2>Ce se întâmplă dacă nu se schimbă nimic timp de douăsprezece luni</h2>
      <p>Patru ceasuri ticăie.</p>
      <p>
        <strong>Ceasul regulator.</strong> În fiecare trimestru, suprafața de
        reglementare se lărgește. Reguli noi pe outsourcing, pe explicabilitate
        AI, pe data residency, pe conduita față de clientul retail. Fiecare
        regulă nouă adaugă un cost mic dar real unui stack care deja are
        dificultăți să-și auditeze propria stare. Prima dată când regulatorul
        cere un thematic data extract și răspunsul este &quot;dați-ne patru
        săptămâni&quot;, un cost soft tocmai s-a transformat în unul hard.
        Douăsprezece luni de nimic înseamnă douăsprezece luni de datorie de
        regulator-readiness acumulată pe o bază care nu a fost proiectată să o
        suporte.
      </p>
      <p>
        <strong>Ceasul talentului.</strong> Talentul de engineering care
        înțelege deopotrivă lending și stack modern este rar și devine din ce
        în ce mai rar. Oamenii care pot muta un core deținut de vendor
        într-un core co-deținut au alte opțiuni în fiecare an. Fiecare lună în
        care un operator așteaptă, costul și dificultatea de a angaja această
        echipă cresc. O echipă de platformă de doi oameni în 2026 costă mai
        puțin decât patru oameni în 2028, iar echipa de patru oameni în 2028
        va livra mai puțin pentru că golul este mai mare, iar memoria
        instituțională s-a pierdut.
      </p>
      <p>
        <strong>Ceasul concurenței AI-native.</strong> Noii intrați în
        segmente adiacente nu construiesc un sistem de leasing care lansează
        un produs în optsprezece luni. Ei construiesc un sistem de leasing
        care lansează un produs în trei săptămâni pentru că echipa are
        codebase-ul, datele și autonomia într-un singur loc. Prima dată când
        un nou intrat ia o felie semnificativă dintr-un canal partener, acel
        canal nu mai revine. Douăsprezece luni de nimic înseamnă douăsprezece
        luni în care noii intrați își compun avantajul în locuri unde
        incumbenții credeau că sunt în siguranță.
      </p>
      <p>
        <strong>Ceasul așteptărilor clienților.</strong> Decizionare sub
        cincisprezece minute, self-service complet, continuitate omnichannel.
        Acestea erau diferențiatori acum cinci ani. Sunt baseline acum. Prima
        dată când un client corporate își compară partenerul de leasing față
        în față cu experiența de working capital a băncii sale, iar
        experiența de leasing arată mai lent, relația a fost retrogradată în
        liniște. Douăsprezece luni de nimic înseamnă douăsprezece luni de
        retrogradare lentă pe întregul portofoliu corporate.
      </p>
      <p>
        Niciunul dintre aceste ceasuri nu ticăie zgomotos. Asta este problema.
        Ele se compun în liniște, iar costul apare mai târziu sub formă de
        deal-uri pierdute, findings de regulator, goluri de talent și un board
        paper care brusc arată mai scump decât ar fi arătat cu un an înainte.
      </p>

      <h2>Ce înseamnă efectiv acțiune acum</h2>
      <p>
        Acțiune acum nu înseamnă să semnezi cu un vendor astăzi. Nu înseamnă
        un program de transformare pe mai mulți ani. Nu înseamnă un RFP.
      </p>
      <p>Acțiune acum înseamnă:</p>
      <ol>
        <li>
          <strong>Trimestrul acesta:</strong> rezolvă{' '}
          <Link href="/diagnostic">diagnosticul</Link>, share-uiește-l cu
          echipa de leadership și ai o discuție onestă despre care două sau
          trei dimensiuni sunt cel mai expuse. Diagnosticul este gratis,
          durează șapte minute, iar defalcarea este suficientă să declanșeze
          o discuție la nivel de board. Scorul în sine nu contează.
          Defalcarea contează.
        </li>
        <li>
          <strong>Următorul trimestru:</strong> scope-uiește un engagement de
          diagnostic focusat. Nu o transformare. O citire structurată de două
          până la patru săptămâni pe dimensiunile unde suspectezi că
          operațiunea este cel mai expusă, cu benchmark-uri concrete față de
          practica actuală de operator. Output-ul este un document
          decision-grade, nu un slide deck.
        </li>
        <li>
          <strong>În două trimestre:</strong> decide dacă drumul înainte este
          un proiect de configurație pe stack-ul existent, un parteneriat care
          aduce o platformă funcțională alături sau un rebuild mai profund.
          Datele sunt acum la îndemână. Decizia este informată.
        </li>
        <li>
          <strong>În patru trimestre:</strong> fii într-un deployment
          configurat sau în stadii târzii ale unuia serios. Anul unu al unui
          Innovation Partnership se termină cu un deployment care rulează
          produsele tale pe datele tale, nu cu un contract care împinge
          valoarea în anul trei.
        </li>
      </ol>
      <p>
        Acea secvență costă mai puțin decât costul așteptării. Cele patru
        ceasuri de mai sus sunt motivul.
      </p>

      <h2>Framing-ul Innovia</h2>
      <p>
        Diagnosticul este punctul de intrare în această conversație, dar nu
        este valoarea. Valoarea este parteneriatul: o platformă funcțională,
        un strat de configurație pe care echipa ta îl co-deține, și
        profunzimea de operator venită din rularea acestor sisteme timp de
        aproape două decenii. Diagnosticul doar face conversația onestă.
        Primul whitepaper construiește argumentul de ce contează conversația.
        Acesta construiește argumentul de ce nu trebuie lăsată conversația să
        alunece în anul următor.
      </p>
      <p>
        Dacă scorul tău este în banda 40-65 la sută, asta este mediana de
        piață. Întrebarea nu este dacă să te jenezi. Întrebarea este cum
        arată următoarea mișcare în 2026. Te ajutăm să o găsești. Primele 45 de
        minute sunt din partea noastră.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Die meisten Mid-Tier-Lending-Betreiber erzielen zwischen 40 und 65 Prozent
        im{' '}
        <Link href="/diagnostic">
          Fit for Digital, Fit for AI. Diagnostik
        </Link>
        . Diese Spanne ist nicht die Nachricht. Die Nachricht ist, was mit
        diesem Score passiert, wenn der Betreiber zwölf weitere Monate nichts
        tut.
      </p>

      <h2>Die Diagnostik, neu formuliert</h2>
      <p>
        Machen Sie die Diagnostik (etwa sieben Minuten) und Sie bekommen eine
        Zahl, ein Bucket und eine Aufschlüsselung in sieben Balken. Die Zahl
        spiegelt, wie nahe Ihr Betrieb am Betreiberniveau auf den Dimensionen
        liegt, die entscheiden, ob Ihr Stack das Geschäft 2026 hilft oder
        behindert. Die sieben Dimensionen sind Kernplattform, Konfiguration
        und Tempo, Daten und Decisioning, Compliance und Audit, KI-Reife,
        Kundenerlebnis und Mitarbeitererlebnis. Keine davon überrascht.
        Was manchmal überrascht ist der Abstand zwischen dem, wo das
        Leadership-Team den Betrieb verortet, und dem, wo der Score
        tatsächlich landet.
      </p>
      <p>
        Ein Score von 60 Prozent ist keine Durchfallnote. Es ist der ehrliche
        Marktmedian für mid-tier Nichtbankenkreditgeber, Captives und
        unabhängige Flotten im europäischen Leasing. Der Grund, warum die
        meisten Betreiber dort landen, ist strukturell, nicht peinlich: das
        Segment wurde auf Annahmen über Tempo, Vendor-Leverage und KI-Reife
        gebaut, die nicht mehr gelten.
      </p>

      <h2>Warum der Score so ausfällt</h2>
      <p>
        Das erste Whitepaper,{' '}
        <Link href="/whitepapers/after-the-ui-layer-falls">
          Nachdem die UI-Schicht fällt
        </Link>
        , argumentierte, dass die UI zur Commodity wird und dass drei Dinge
        verteidigungsfähig bleiben: ein auditierbarer Kern, eine co-owned
        Konfigurationsschicht und das Tempo, in dem sich beide gemeinsam
        bewegen. Die Diagnostik misst, ob ein Betreiber diese drei Dinge hat,
        plus die vier praktischen Schichten, die sie in Ergebnisse umsetzen:
        Daten und Decisioning, Compliance und Audit, Kundenerlebnis und
        Mitarbeitererlebnis.
      </p>
      <p>
        Die meisten Betreiber scoren gut auf Teilen des Kundenerlebnisses,
        weil sie in den letzten fünf Jahren in Portale und Self-Service
        investiert haben. Sie scoren niedriger auf Kernplattform und
        Konfiguration, weil diese Investitionen an der Oberfläche stehen
        blieben und der Motor darunter immer noch der Motor einer früheren
        Ära ist. Sie scoren noch niedriger auf KI-Reife, weil vor einem
        Boardzyklus niemand für eine LLM-geprägte Welt geplant hat.
      </p>
      <p>
        Diese Verteilung ist kein moralisches Versagen des Betreibers. Sie
        ist eine Momentaufnahme des Segments. Die Frage ist nicht, ob die
        Momentaufnahme fair ist. Die Frage ist, was als nächstes mit ihr
        passiert.
      </p>

      <h2>Was passiert, wenn sich zwölf Monate nichts ändert</h2>
      <p>Vier Uhren ticken.</p>
      <p>
        <strong>Die Regulator-Uhr.</strong> Jedes Quartal wird die
        regulatorische Oberfläche breiter. Neue Regeln zu Outsourcing, zu
        KI-Erklärbarkeit, zu Data Residency, zu Verbraucherverhalten. Jede
        neue Regel fügt einem Stack, der bereits Schwierigkeiten hat,
        seinen eigenen Zustand zu auditieren, kleine, aber reale Kosten
        hinzu. Beim ersten Mal, wenn ein Regulator einen thematischen
        Datenauszug verlangt und die Antwort &quot;geben Sie uns vier
        Wochen&quot; lautet, ist aus weichen Kosten gerade hartes Geld
        geworden. Zwölf Monate Nichtstun bedeuten zwölf Monate
        Regulator-Readiness-Schulden, die sich auf einer Basis ansammeln,
        die nicht dafür ausgelegt war.
      </p>
      <p>
        <strong>Die Talent-Uhr.</strong> Engineering-Talent, das sowohl
        Lending als auch modernen Stack versteht, ist selten und wird
        seltener. Die Leute, die einen vom Vendor gehaltenen Kern in einen
        co-owned Kern verwandeln können, haben jedes Jahr andere Optionen.
        Jeden Monat, in dem ein Betreiber wartet, steigen Kosten und
        Schwierigkeit, dieses Team einzustellen. Ein
        Zwei-Personen-Plattform-Team in 2026 kostet weniger als vier
        Personen in 2028, und das Vier-Personen-Team in 2028 wird weniger
        liefern, weil die Lücke größer ist und das institutionelle
        Gedächtnis verloren.
      </p>
      <p>
        <strong>Die Uhr der KI-nativen Wettbewerber.</strong> Neueinsteiger
        in angrenzenden Segmenten bauen kein Leasing-System, das achtzehn
        Monate braucht, um ein Produkt auszuliefern. Sie bauen ein
        Leasing-System, das ein Produkt in drei Wochen ausliefert, weil das
        Team Codebase, Daten und Autonomie an einem Ort hat. Beim ersten
        Mal, wenn ein Neueinsteiger einen substantiellen Anteil eines
        Partnerkanals nimmt, kommt dieser Kanal nicht zurück. Zwölf Monate
        Nichtstun bedeuten zwölf Monate, in denen die Neueinsteiger ihren
        Vorteil an Orten ausbauen, an denen sich die Etablierten in
        Sicherheit wähnten.
      </p>
      <p>
        <strong>Die Uhr der Kundenerwartungen.</strong> Decisioning unter
        fünfzehn Minuten, vollständiger Self-Service, omnichannel
        Kontinuität. Das waren vor fünf Jahren Differenzierungsmerkmale.
        Heute sind es Grundvoraussetzungen. Beim ersten Mal, wenn ein
        Firmenkunde seinen Leasing-Partner Seite an Seite mit dem Working
        Capital seiner Bank vergleicht und das Leasing-Erlebnis langsamer
        wirkt, wurde die Beziehung still herabgestuft. Zwölf Monate
        Nichtstun bedeuten zwölf Monate stille Herabstufung über das
        gesamte Firmenkundenbuch.
      </p>
      <p>
        Keine dieser Uhren tickt laut. Das ist das Problem. Sie kumulieren
        leise, und die Kosten tauchen später auf als verlorene Deals,
        Regulator-Findings, Talent-Lücken und ein Vorstandspapier, das
        plötzlich teurer aussieht, als es ein Jahr zuvor ausgesehen hätte.
      </p>

      <h2>Was jetzt handeln tatsächlich bedeutet</h2>
      <p>
        Jetzt handeln bedeutet nicht, heute mit einem Vendor zu
        unterschreiben. Es bedeutet kein mehrjähriges
        Transformationsprogramm. Es bedeutet keinen RFP.
      </p>
      <p>Jetzt handeln bedeutet:</p>
      <ol>
        <li>
          <strong>Dieses Quartal:</strong> machen Sie die{' '}
          <Link href="/diagnostic">Diagnostik</Link>, teilen Sie sie mit
          dem Leadership-Team und führen Sie ein ehrliches Gespräch
          darüber, welche zwei oder drei Dimensionen am stärksten exponiert
          sind. Die Diagnostik ist kostenlos, dauert sieben Minuten, und
          die Aufschlüsselung reicht, um eine Diskussion auf Board-Ebene
          zu starten. Der Score allein zählt nicht. Die Aufschlüsselung
          schon.
        </li>
        <li>
          <strong>Nächstes Quartal:</strong> scopen Sie ein fokussiertes
          Diagnostik-Engagement. Keine Transformation. Eine strukturierte
          Lesart von zwei bis vier Wochen auf den Dimensionen, bei denen
          Sie den Betrieb am stärksten exponiert vermuten, mit konkreten
          Benchmarks gegen aktuelle Betreiberpraxis. Das Ergebnis ist ein
          entscheidungsreifes Dokument, kein Foliensatz.
        </li>
        <li>
          <strong>Innerhalb von zwei Quartalen:</strong> entscheiden Sie,
          ob der Weg nach vorn ein Konfigurationsprojekt auf dem
          bestehenden Stack, eine Partnerschaft, die eine funktionierende
          Plattform daneben bringt, oder ein tieferer Rebuild ist. Die
          Daten sind jetzt zur Hand. Die Entscheidung ist informiert.
        </li>
        <li>
          <strong>Innerhalb von vier Quartalen:</strong> seien Sie in
          einem konfigurierten Deployment oder in den späten Phasen eines
          ernsthaften. Jahr eins einer Innovation Partnership endet mit
          einem Deployment, das Ihre Produkte auf Ihren Daten betreibt,
          nicht mit einem Vertrag, der den Wert in Jahr drei schiebt.
        </li>
      </ol>
      <p>
        Diese Sequenz kostet weniger als die Kosten des Wartens. Die vier
        Uhren oben sind der Grund.
      </p>

      <h2>Das Innovia-Framing</h2>
      <p>
        Die Diagnostik ist der Einstiegspunkt in dieses Gespräch, nicht
        der Wert. Der Wert ist die Partnerschaft: eine funktionierende
        Plattform, eine Konfigurationsschicht, die Ihr Team mitbesitzt,
        und die Betreibertiefe aus knapp zwei Jahrzehnten Betrieb dieser
        Systeme. Die Diagnostik macht das Gespräch nur ehrlich. Das erste
        Whitepaper baut den Fall, warum das Gespräch wichtig ist. Dieses
        baut den Fall, das Gespräch nicht ins nächste Jahr abrutschen zu
        lassen.
      </p>
      <p>
        Wenn Ihr Score im Band von 40 bis 65 Prozent liegt, ist das der
        Marktmedian. Die Frage ist nicht, ob Sie sich schämen sollten. Die
        Frage ist, wie der nächste Schritt 2026 aussieht. Wir helfen Ihnen,
        ihn zu finden. Die ersten 45 Minuten gehen auf uns.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        La plupart des opérateurs mid-tier du lending obtiennent entre 40 et
        65 pour cent au{' '}
        <Link href="/diagnostic">
          diagnostic Fit for Digital, Fit for AI.
        </Link>
        . Cet écart n&apos;est pas la nouvelle. La nouvelle, c&apos;est ce
        qu&apos;il advient de ce score si l&apos;opérateur ne fait rien
        pendant douze mois de plus.
      </p>

      <h2>Le diagnostic, reformulé</h2>
      <p>
        Faites le diagnostic (environ sept minutes) et vous obtenez un nombre,
        un bucket et un détail en sept barres. Le nombre reflète à quel point
        votre opération se situe au niveau opérateur sur les dimensions qui
        décident si votre stack aide ou freine l&apos;activité en 2026. Les
        sept dimensions sont Plateforme cœur, Configuration et vitesse,
        Données et decisioning, Conformité et audit, Maturité IA, Expérience
        client et Expérience collaborateur. Aucune ne surprend. Ce qui
        surprend parfois est l&apos;écart entre où l&apos;équipe de direction
        croit que l&apos;opération se situe et où le score atterrit
        réellement.
      </p>
      <p>
        Un score de 60 pour cent n&apos;est pas une note d&apos;échec. C&apos;est
        la médiane honnête du marché pour les prêteurs non bancaires mid-tier,
        les captives et les flottes indépendantes en leasing européen. La
        raison pour laquelle la plupart des opérateurs atterrissent là est
        structurelle, pas gênante : le segment a été construit sur des
        hypothèses sur le rythme, le leverage vendeur et la maturité IA qui ne
        tiennent plus.
      </p>

      <h2>Pourquoi le score est ce qu&apos;il est</h2>
      <p>
        Le premier whitepaper,{' '}
        <Link href="/whitepapers/after-the-ui-layer-falls">
          Après la chute de la couche UI
        </Link>
        , argumentait que la UI est commoditisée et que trois choses restent
        défendables : un cœur auditable, une couche configuration co-détenue
        et la vitesse à laquelle les deux évoluent ensemble. Le diagnostic
        mesure si un opérateur a ces trois choses plus les quatre couches
        pratiques qui les transforment en résultats : données et decisioning,
        conformité et audit, expérience client, expérience collaborateur.
      </p>
      <p>
        La plupart des opérateurs scorent bien sur des parties de
        l&apos;expérience client parce qu&apos;ils ont investi dans des
        portails et du self-service ces cinq dernières années. Ils scorent
        plus bas sur Plateforme cœur et Configuration parce que ces
        investissements se sont arrêtés à la surface et que le moteur en
        dessous est toujours le moteur d&apos;une époque antérieure. Ils
        scorent encore plus bas sur la maturité IA parce que personne
        n&apos;a planifié un monde façonné par les LLM il y a un cycle de
        board.
      </p>
      <p>
        Cette distribution n&apos;est pas un échec moral de l&apos;opérateur.
        C&apos;est un instantané d&apos;où en est le segment. La question
        n&apos;est pas si l&apos;instantané est juste. La question est ce
        qu&apos;il advient de cet instantané ensuite.
      </p>

      <h2>Ce qui se passe si rien ne change pendant douze mois</h2>
      <p>Quatre horloges tournent.</p>
      <p>
        <strong>L&apos;horloge du régulateur.</strong> Chaque trimestre, la
        surface réglementaire s&apos;élargit. Nouvelles règles sur
        l&apos;outsourcing, sur l&apos;explicabilité IA, sur le data
        residency, sur la conduite retail. Chaque nouvelle règle ajoute un
        coût petit mais réel à un stack qui peine déjà à auditer son propre
        état. La première fois qu&apos;un régulateur demande une extraction
        thématique et que la réponse est &quot;donnez-nous quatre
        semaines&quot;, un coût soft vient de se transformer en coût hard.
        Douze mois de rien signifient douze mois de dette de
        regulator-readiness qui s&apos;accumule sur une base qui n&apos;a
        pas été conçue pour la porter.
      </p>
      <p>
        <strong>L&apos;horloge du talent.</strong> Le talent d&apos;ingénierie
        qui comprend à la fois le lending et le stack moderne est rare et
        devient plus rare. Les gens qui peuvent transformer un cœur détenu
        par le vendeur en un cœur co-détenu ont d&apos;autres options chaque
        année. Chaque mois qu&apos;un opérateur attend, le coût et la
        difficulté de recruter cette équipe augmentent. Une équipe
        plateforme de deux personnes en 2026 coûte moins cher que quatre
        personnes en 2028, et l&apos;équipe de quatre en 2028 livrera moins
        parce que l&apos;écart est plus grand et la mémoire institutionnelle
        est partie.
      </p>
      <p>
        <strong>L&apos;horloge du concurrent AI-natif.</strong> Les nouveaux
        entrants dans des segments adjacents ne construisent pas un système
        de leasing qui met dix-huit mois à livrer un produit. Ils
        construisent un système de leasing qui livre un produit en trois
        semaines parce que l&apos;équipe a la codebase, les données et
        l&apos;autonomie au même endroit. La première fois qu&apos;un
        nouvel entrant prend une part significative d&apos;un canal
        partenaire, ce canal ne revient pas. Douze mois de rien signifient
        douze mois pour les nouveaux entrants à composer leur avantage là
        où les incumbents se croyaient à l&apos;abri.
      </p>
      <p>
        <strong>L&apos;horloge des attentes clients.</strong> Decisioning
        sous quinze minutes, self-service complet, continuité omnichannel.
        C&apos;étaient des différenciateurs il y a cinq ans. C&apos;est le
        baseline maintenant. La première fois qu&apos;un client corporate
        compare son partenaire leasing côte à côte avec l&apos;expérience
        working capital de sa banque et que l&apos;expérience leasing
        paraît plus lente, la relation a été silencieusement rétrogradée.
        Douze mois de rien signifient douze mois de rétrogradation lente
        sur tout le portefeuille corporate.
      </p>
      <p>
        Aucune de ces horloges ne tourne bruyamment. C&apos;est ça le
        problème. Elles composent en silence, et le coût remonte plus tard
        sous forme de deals perdus, de findings de régulateur, de lacunes
        de talent et d&apos;un board paper qui paraît soudain plus cher
        qu&apos;il ne l&apos;aurait paru un an plus tôt.
      </p>

      <h2>Ce que &quot;agir maintenant&quot; signifie réellement</h2>
      <p>
        Agir maintenant ne veut pas dire signer avec un vendeur aujourd&apos;hui.
        Ça ne veut pas dire un programme de transformation pluriannuel. Ça ne
        veut pas dire un RFP.
      </p>
      <p>Agir maintenant veut dire :</p>
      <ol>
        <li>
          <strong>Ce trimestre :</strong> faites le{' '}
          <Link href="/diagnostic">diagnostic</Link>, partagez-le avec
          l&apos;équipe de direction et ayez une conversation honnête sur
          quelles deux ou trois dimensions sont les plus exposées. Le
          diagnostic est gratuit, prend sept minutes, et le détail suffit à
          démarrer une discussion au niveau board. Le score à lui seul ne
          compte pas. Le détail si.
        </li>
        <li>
          <strong>Le trimestre suivant :</strong> scopez un engagement de
          diagnostic focalisé. Pas une transformation. Une lecture
          structurée de deux à quatre semaines sur les dimensions où vous
          soupçonnez que l&apos;opération est la plus exposée, avec des
          benchmarks concrets contre la pratique actuelle des opérateurs.
          Le livrable est un document décisionnel, pas un slide deck.
        </li>
        <li>
          <strong>Dans deux trimestres :</strong> décidez si la voie est un
          projet de configuration sur le stack existant, un partenariat qui
          apporte une plateforme fonctionnelle à côté, ou un rebuild plus
          profond. Les données sont maintenant en main. La décision est
          informée.
        </li>
        <li>
          <strong>Dans quatre trimestres :</strong> soyez dans un
          déploiement configuré ou dans les phases tardives d&apos;un
          sérieux. L&apos;année un d&apos;une Innovation Partnership se
          termine avec un déploiement qui fait tourner vos produits sur
          vos données, pas avec un contrat qui pousse la valeur dans
          l&apos;année trois.
        </li>
      </ol>
      <p>
        Cette séquence coûte moins que le coût de l&apos;attente. Les
        quatre horloges ci-dessus en sont la raison.
      </p>

      <h2>Le cadrage Innovia</h2>
      <p>
        Le diagnostic est le point d&apos;entrée de cette conversation mais
        pas la valeur. La valeur est le partenariat : une plateforme
        fonctionnelle, une couche configuration que votre équipe co-détient,
        et la profondeur d&apos;opérateur qui vient de l&apos;exploitation
        de ces systèmes pendant près de deux décennies. Le diagnostic rend
        seulement la conversation honnête. Le premier whitepaper construit
        l&apos;argument du pourquoi la conversation compte. Celui-ci
        construit l&apos;argument de ne pas laisser la conversation glisser
        à l&apos;année suivante.
      </p>
      <p>
        Si votre score est dans la bande 40 à 65 pour cent, c&apos;est la
        médiane du marché. La question n&apos;est pas si être gêné. La
        question est à quoi ressemble le prochain mouvement en 2026. Nous
        vous aiderons à le trouver. Les premières 45 minutes sont pour
        nous.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        La maggior parte degli operatori mid-tier del lending ottiene tra il
        40 e il 65 percento nel{' '}
        <Link href="/diagnostic">
          diagnostico Fit for Digital, Fit for AI.
        </Link>
        . Quella forbice non è la notizia. La notizia è cosa succede a quel
        punteggio se l&apos;operatore non fa nulla per altri dodici mesi.
      </p>

      <h2>Il diagnostico, riformulato</h2>
      <p>
        Fate il diagnostico (circa sette minuti) e ottenete un numero, un
        bucket e un dettaglio in sette barre. Il numero riflette quanto
        vicino sta la vostra operazione al livello operatore sulle dimensioni
        che decidono se il vostro stack aiuta o ostacola il business nel
        2026. Le sette dimensioni sono Piattaforma core, Configurazione e
        velocità, Dati e decisioning, Conformità e audit, Maturità AI,
        Esperienza cliente ed Esperienza dipendente. Nessuna sorprende. Ciò
        che a volte sorprende è il divario tra dove il team di leadership
        crede si trovi l&apos;operazione e dove il punteggio atterra
        davvero.
      </p>
      <p>
        Un punteggio del 60 percento non è una bocciatura. È la mediana
        onesta di mercato per finanziarie non bancarie mid-tier, captive e
        flotte indipendenti nel leasing europeo. Il motivo per cui la
        maggior parte degli operatori atterra lì è strutturale, non
        imbarazzante: il segmento è stato costruito su assunzioni di ritmo,
        leverage vendor e maturità AI che non reggono più.
      </p>

      <h2>Perché il punteggio è quello che è</h2>
      <p>
        Il primo whitepaper,{' '}
        <Link href="/whitepapers/after-the-ui-layer-falls">
          Dopo la caduta del livello UI
        </Link>
        , argomentava che la UI è in via di commoditizzazione e che tre
        cose restano difendibili: un nucleo auditabile, un livello di
        configurazione co-posseduto e la velocità con cui i due si muovono
        insieme. Il diagnostico misura se un operatore ha queste tre cose
        più i quattro livelli pratici che le trasformano in risultati: dati
        e decisioning, conformità e audit, esperienza cliente ed esperienza
        dipendente.
      </p>
      <p>
        La maggior parte degli operatori scora bene su parti
        dell&apos;esperienza cliente perché hanno investito in portali e
        self-service negli ultimi cinque anni. Scorano più in basso su
        Piattaforma core e Configurazione perché quegli investimenti si
        sono fermati in superficie e il motore sotto è ancora il motore di
        un&apos;era precedente. Scorano ancora più in basso sulla maturità
        AI perché nessuno ha pianificato per un mondo plasmato dagli LLM
        un ciclo di board fa.
      </p>
      <p>
        Quella distribuzione non è un fallimento morale
        dell&apos;operatore. È una fotografia di dove si trova il segmento.
        La domanda non è se la fotografia è giusta. La domanda è cosa
        succede a quella fotografia dopo.
      </p>

      <h2>Cosa succede se non cambia niente per dodici mesi</h2>
      <p>Quattro orologi ticchettano.</p>
      <p>
        <strong>L&apos;orologio del regolatore.</strong> Ogni trimestre, la
        superficie regolatoria si allarga. Nuove regole su outsourcing,
        spiegabilità AI, data residency, condotta retail. Ogni nuova regola
        aggiunge un costo piccolo ma reale a uno stack che già fatica ad
        auditare il proprio stato. La prima volta che un regolatore chiede
        un thematic data extract e la risposta è &quot;dateci quattro
        settimane&quot;, un costo soft è appena diventato hard. Dodici mesi
        di nulla significano dodici mesi di debito di regulator-readiness
        accumulato su una base che non è stata progettata per
        sopportarlo.
      </p>
      <p>
        <strong>L&apos;orologio del talento.</strong> Il talento
        ingegneristico che capisce sia il lending sia lo stack moderno è
        raro e diventa più raro. Le persone che possono trasformare un
        nucleo posseduto dal vendor in un nucleo co-posseduto hanno altre
        opzioni ogni anno. Ogni mese che un operatore aspetta, costo e
        difficoltà di assumere questo team aumentano. Un team di
        piattaforma di due persone nel 2026 costa meno di quattro persone
        nel 2028, e il team di quattro persone nel 2028 consegnerà meno
        perché il divario è più grande e la memoria istituzionale è
        andata.
      </p>
      <p>
        <strong>L&apos;orologio del concorrente AI-nativo.</strong> I nuovi
        entranti nei segmenti adiacenti non costruiscono un sistema di
        leasing che impiega diciotto mesi per consegnare un prodotto.
        Costruiscono un sistema di leasing che consegna un prodotto in tre
        settimane perché il team ha codebase, dati e autonomia in un unico
        posto. La prima volta che un nuovo entrante prende una fetta
        significativa di un canale partner, quel canale non torna. Dodici
        mesi di nulla significano dodici mesi per i nuovi entranti per
        comporre il loro vantaggio in posti in cui gli incumbent si
        credevano al sicuro.
      </p>
      <p>
        <strong>L&apos;orologio delle aspettative del cliente.</strong>
        Decisioning sotto i quindici minuti, self-service completo,
        continuità omnichannel. Erano differenziatori cinque anni fa. Oggi
        sono baseline. La prima volta che un cliente corporate confronta il
        suo partner leasing fianco a fianco con l&apos;esperienza working
        capital della sua banca e l&apos;esperienza leasing sembra più
        lenta, la relazione è stata silenziosamente declassata. Dodici
        mesi di nulla significano dodici mesi di declassamento lento su
        tutto il portafoglio corporate.
      </p>
      <p>
        Nessuno di questi orologi ticchetta forte. È quello il problema. Si
        compongono in silenzio, e il costo emerge più tardi sotto forma di
        deal persi, findings di regolatore, lacune di talento e un board
        paper che sembra improvvisamente più caro di quanto sarebbe sembrato
        un anno prima.
      </p>

      <h2>Cosa significa davvero agire ora</h2>
      <p>
        Agire ora non significa firmare con un vendor oggi. Non significa
        un programma di trasformazione pluriennale. Non significa un RFP.
      </p>
      <p>Agire ora significa:</p>
      <ol>
        <li>
          <strong>Questo trimestre:</strong> fate il{' '}
          <Link href="/diagnostic">diagnostico</Link>, condividetelo con il
          team di leadership e fate una conversazione onesta su quali due o
          tre dimensioni sono più esposte. Il diagnostico è gratuito, dura
          sette minuti, e il dettaglio basta a far partire una discussione
          a livello board. Il punteggio da solo non conta. Il dettaglio sì.
        </li>
        <li>
          <strong>Il trimestre successivo:</strong> scopate un engagement
          di diagnostico focalizzato. Non una trasformazione. Una lettura
          strutturata di due-quattro settimane sulle dimensioni dove
          sospettate che l&apos;operazione sia più esposta, con benchmark
          concreti rispetto alla pratica attuale degli operatori. Il
          deliverable è un documento decisionale, non uno slide deck.
        </li>
        <li>
          <strong>In due trimestri:</strong> decidete se la strada è un
          progetto di configurazione sullo stack esistente, una partnership
          che porta una piattaforma funzionante a fianco, o un rebuild più
          profondo. I dati ora sono in mano. La decisione è informata.
        </li>
        <li>
          <strong>In quattro trimestri:</strong> siate in un deployment
          configurato o nelle fasi tardive di uno serio. L&apos;anno uno
          di un&apos;Innovation Partnership finisce con un deployment che
          fa girare i vostri prodotti sui vostri dati, non con un
          contratto che spinge il valore all&apos;anno tre.
        </li>
      </ol>
      <p>
        Quella sequenza costa meno del costo dell&apos;attesa. I quattro
        orologi sopra sono la ragione.
      </p>

      <h2>L&apos;inquadramento Innovia</h2>
      <p>
        Il diagnostico è il punto d&apos;ingresso a questa conversazione,
        non il valore. Il valore è la partnership: una piattaforma
        funzionante, un livello di configurazione che il vostro team
        co-possiede, e la profondità da operatore che viene dal gestire
        questi sistemi per quasi due decenni. Il diagnostico rende solo la
        conversazione onesta. Il primo whitepaper costruisce
        l&apos;argomentazione del perché la conversazione conta. Questo
        costruisce l&apos;argomentazione di non far scivolare la
        conversazione all&apos;anno successivo.
      </p>
      <p>
        Se il vostro punteggio è nella fascia 40-65 percento, è la mediana
        di mercato. La domanda non è se imbarazzarsi. La domanda è come
        appare la prossima mossa nel 2026. Vi aiutiamo a trovarla. I primi
        45 minuti sono offerti da noi.
      </p>
    </div>
  );
}
