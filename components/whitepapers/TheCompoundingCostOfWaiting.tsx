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

import { Link } from '@/i18n/routing';

interface ContentProps {
  locale: 'en' | 'ro';
}

export default function TheCompoundingCostOfWaiting({ locale }: ContentProps) {
  return locale === 'ro' ? <Ro /> : <En />;
}

function En() {
  return (
    <div className="prose-paper">
      <p>
        Most mid-tier lending operators score between 40 and 65 percent on the{' '}
        <Link href="/diagnostic">Fit for Digital. Fit for AI. diagnostic</Link>.
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
          diagnosticul Fit for Digital. Fit for AI.
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
