/**
 * Whitepaper: Show your work: AI in lending meets its deadline.
 *
 * The pilot-to-production gap in AI lending, read against the EU AI Act
 * high-risk obligations that bite on 2 August 2026. Argues the binding
 * constraint on production is auditability (explainable reason + complete log +
 * tamper-evidence), and positions that as how we build.
 *
 * Style rules (enforced):
 *  - Clear and plain: short sentences, concrete numbers, takeaway first.
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names. Vendors are referred to as a
 *    class ("major banking and lending-technology vendors").
 *  - Concrete capabilities over adjectives.
 *
 * LOCALE STATUS: English only (preview). ro/de/fr/it fall through to En()
 * until the content is approved and translated in lockstep.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function ShowYourWork({ locale }: ContentProps) {
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
        The headlines say AI is taking over lending. The surveys say something
        quieter: most lenders are still stuck in pilots. And on 2 August 2026,
        European credit scoring becomes a high-risk system under the EU AI Act,
        with a short list of things every automated decision has to be able to
        show. The pilots that reach production will not be the cleverest. They
        will be the ones that can show their work.
      </p>

      <h2>Adoption is racing. Production is not.</h2>
      <p>
        The appetite is real. In one industry survey, 83% of lenders said they
        are increasing their generative-AI budgets in 2026, and 67% have a
        generative-AI strategy in place or arriving this year.<sup>1</sup>
      </p>
      <p>
        The deployment is not. Only 23% of banking executives say they have moved
        past pilots into production.<sup>2</sup> In credit risk specifically,
        just 12% of North American institutions report having deployed any
        generative-AI use case at all, while 27% are still piloting it to help
        with credit decisions.<sup>3</sup>
      </p>
      <p>
        The gap is not appetite, and it is not model quality. It is the distance
        between a model that works in a demo and one that can stand behind a
        regulated decision. A demo does not have to explain itself. A credit
        decision does.
      </p>

      <h2>What 2 August 2026 actually asks</h2>
      <p>
        Under the EU AI Act, an AI system used to evaluate someone&apos;s
        creditworthiness or set their credit score is high-risk: Annex III, point
        5(b), with a narrow exception for fraud detection.<sup>4</sup> The
        obligations apply from 2 August 2026. Three of them decide whether a model is allowed to
        make decisions at all.
      </p>
      <ul>
        <li>
          <strong>An interpretable output that supports human oversight</strong>{' '}
          (Article 14). For every decision, a person must be able to understand
          why.
        </li>
        <li>
          <strong>A bias assessment of the training data</strong> (Article 10).
          You must be able to show the data behind the model was examined for
          bias.
        </li>
        <li>
          <strong>Automatic logging of inputs and outputs</strong> (Article 12).
          Every decision leaves a record, kept by the system, not by hand.
        </li>
      </ul>
      <p>
        On top of that, by the deadline a high-risk system needs a completed
        conformity assessment, finalised technical documentation, a CE marking,
        and registration in the EU database. The penalty for getting it wrong
        runs up to 35 million euro or 7% of worldwide turnover.<sup>5</sup>
      </p>

      <h2>The three things an AI lending decision has to show</h2>
      <p>Read as an engineer reads it, the rule asks for three properties on every decision.</p>
      <ol>
        <li>
          <strong>Why.</strong> An interpretable reason for the decision, not a
          score with no story behind it.
        </li>
        <li>
          <strong>On what.</strong> A complete, automatic record of the exact
          inputs and outputs, captured as the decision is made.
        </li>
        <li>
          <strong>Provably unchanged.</strong> A log a supervisor can recompute
          and verify, not one they are asked to trust.
        </li>
      </ol>
      <p>
        Most pilots do the first poorly, the second partially, and the third not
        at all. That is precisely why they are pilots. The model is the easy half.
        The proof is the half that is missing.
      </p>

      <h2>Everyone shipped an agent. Few shipped the proof.</h2>
      <p>
        May 2026 made the point. Within two weeks, several of the largest banking
        and lending-technology vendors each launched an &quot;agent operating
        system&quot; for lending: software where AI agents pull data, run risk
        models, flag anomalies, and route exceptions, with credit decisioning
        named on every roadmap.<sup>6</sup>
      </p>
      <p>
        An agent that acts is half the requirement. The other half is an agent
        that can be audited: every action it takes logged and explainable to the
        same standard as a human decision. An autonomous step that no one can
        reconstruct afterward is not a feature in a regulated lender. It is a
        finding waiting to happen. The deadline does not ask whether the agent is
        clever. It asks whether the agent can show its work.
      </p>

      <h2>The next 90 days</h2>
      <p>For a European lender, the work between now and August is concrete.</p>
      <ul>
        <li>
          <strong>List every AI use case that touches creditworthiness.</strong>{' '}
          Those are your high-risk systems. Fraud detection is the exception, not
          the rule.
        </li>
        <li>
          <strong>For each, answer three questions.</strong> Can we give an
          interpretable reason for every decision? Do we keep a complete,
          automatic log of inputs and outputs? Can we prove that log is intact?
        </li>
        <li>
          <strong>If agents take actions, check the audit.</strong> Does each
          agent action inherit the same logging and explainability as a human
          decision, or does it slip through unrecorded?
        </li>
        <li>
          <strong>Be honest about the answer.</strong> If it is no, that pilot
          does not go to production in August. It goes back to architecture.
        </li>
      </ul>

      <h2>How we built for this</h2>
      <p>
        We did not wait for the deadline to design these in. They are properties
        of the platform, not features bolted on for an audit.
      </p>
      <ul>
        <li>
          <strong>The decision stays deterministic; AI stays advisory.</strong>{' '}
          The engine that books a credit decision runs on explicit rules. A model
          runs alongside as a second opinion, not as the decision. That keeps the
          decision outside the high-risk burden by design, while we hold the
          high-risk controls anyway.
        </li>
        <li>
          <strong>Every decision is logged, and the log can be recomputed.</strong>{' '}
          Each decision lands in an append-only record, sealed into a SHA-256 hash
          chain a supervisor can recompute from the live rows. (Article 12)
        </li>
        <li>
          <strong>Two people, not one.</strong> A four-eyes rule means the person
          who prepares a deal cannot approve it, on every lending line. Overriding
          a model rejection takes a named reason and Risk Director authority.
          (Article 14)
        </li>
        <li>
          <strong>Reasons, not just scores.</strong> Every decision carries an
          interpretable reason, and we run an explainable-by-design model so the
          reason is the model itself, not a guess about it. (Articles 13 and 14)
        </li>
        <li>
          <strong>Fairness is gated, not hoped for.</strong> A model cannot enter
          the decision until it passes a disparate-impact check (the four-fifths
          rule) and a proxy screen. (Article 10)
        </li>
        <li>
          <strong>A model has a lifecycle.</strong> Development, validation,
          approval, retirement, with an independent validator and a twelve-month
          re-validation. (Articles 9 and 17)
        </li>
      </ul>
      <p>
        The bottom line: we are AI Act ready. We are built to the high-risk
        requirements, the controls are already in the platform, and the decision
        is architected so the high-risk burden does not even bind us yet. We are
        not claiming a certificate we have not earned. We are claiming the harder
        thing: the readiness is in the build, not in a binder.
      </p>

      <h2>The short version</h2>
      <p>
        The race in lending is not to the most autonomous agent. It is to the one
        that can show its work on demand. We build for that: every decision
        carries its reason, every action lands in a sealed log that a supervisor
        can recompute from live data rather than take on faith, and an AI agent is
        held to the same audit as the person it stands in for. The deadline is not
        a threat to that approach. It is the case for it.
      </p>

      <p className="text-body-sm text-slate-500">
        A note on the numbers: the adoption figures here are directional and
        mostly US or global in origin (the 83% budget figure is a survey of 106 US
        lenders, the 23% production figure is a global banking-executive read).
        We quote them as signals of direction, not European market shares. The
        European fact that is not directional is the regulation: Annex III and the
        2 August 2026 date are the legal text, not an estimate.
      </p>

      <h2>Sources</h2>
      <ol className="text-body-sm text-slate-500">
        <li>
          Generative AI in Retail Lending survey, 106 US banks, credit unions and
          consumer finance companies, fielded August 2025, released November 2025.
          Basis: US, single survey. Directional.
        </li>
        <li>
          Accenture, Q1 2026 banking-executive survey: 91% call AI a strategic
          priority, 23% have moved beyond pilots into production. Basis: global.
          Directional.
        </li>
        <li>
          McKinsey &amp; Company, &ldquo;Embracing generative AI in credit
          risk&rdquo;: 24% have fully deployed ad hoc use cases, 27% piloting
          synthesis for credit decisioning, 12% of North American respondents have
          deployed any use case. Basis: global, with a North American cut.
          Directional.
        </li>
        <li>
          EU AI Act, Annex III, point 5(b): AI systems to evaluate creditworthiness
          or establish a credit score of natural persons are high-risk, except
          fraud detection. Legal text.
        </li>
        <li>
          European Banking Authority, &ldquo;AI Act implications for the EU banking
          and payments sector&rdquo;, November 2025: high-risk obligations apply
          from 2 August 2026 (Articles 9 to 19, 26, 27); penalties up to 35 million
          euro or 7% of worldwide turnover. Legal and supervisory.
        </li>
        <li>
          May 2026 vendor announcements of agentic-AI platforms for banking and
          lending, with credit decisioning on the roadmap (multiple major
          core-banking and lending-technology vendors, 4 to 14 May 2026). Vendor
          press releases.
        </li>
      </ol>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Titlurile spun că AI preia controlul în creditare. Sondajele spun ceva
        mai discret: majoritatea creditorilor sunt încă blocați în piloți. Iar
        pe 2 august 2026, scoringul de credit european devine un sistem cu risc
        ridicat conform AI Act, cu o listă scurtă de lucruri pe care fiecare
        decizie automată trebuie să le poată demonstra. Piloții care ajung în
        producție nu vor fi cei mai inteligenți. Vor fi cei care își pot arăta
        munca.
      </p>

      <h2>Adopția accelerează. Producția, nu.</h2>
      <p>
        Apetitul este real. Într-un sondaj din industrie, 83% dintre creditori
        au declarat că își măresc bugetele pentru AI generativ în 2026, iar 67%
        au o strategie de AI generativ deja în vigoare sau care sosește anul
        acesta.<sup>1</sup>
      </p>
      <p>
        Implementarea, nu. Doar 23% dintre directorii din domeniul bancar spun
        că au trecut de piloți în producție.<sup>2</sup> În riscul de credit în
        mod specific, doar 12% dintre instituțiile nord-americane raportează că
        au implementat vreun caz de utilizare cu AI generativ, în timp ce 27%
        încă îl pilotează pentru a ajuta la deciziile de credit.<sup>3</sup>
      </p>
      <p>
        Decalajul nu este apetitul și nu este calitatea modelului. Este distanța
        dintre un model care funcționează într-un demo și unul care poate sta în
        spatele unei decizii reglementate. Un demo nu trebuie să se explice. O
        decizie de credit trebuie.
      </p>

      <h2>Ce cere de fapt 2 august 2026</h2>
      <p>
        Conform AI Act, un sistem de AI folosit pentru a evalua bonitatea cuiva
        sau pentru a-i stabili scorul de credit este cu risc ridicat: Anexa III,
        punctul 5(b), cu o excepție îngustă pentru detectarea fraudei.
        <sup>4</sup> Obligațiile se aplică de la 2 august 2026. Trei dintre ele
        decid dacă un model are voie să ia decizii.
      </p>
      <ul>
        <li>
          <strong>Un rezultat interpretabil care susține supravegherea umană</strong>{' '}
          (Articolul 14). Pentru fiecare decizie, o persoană trebuie să poată
          înțelege de ce.
        </li>
        <li>
          <strong>O evaluare a prejudecăților din datele de antrenament</strong>{' '}
          (Articolul 10). Trebuie să poți demonstra că datele din spatele
          modelului au fost examinate pentru prejudecăți.
        </li>
        <li>
          <strong>Înregistrarea automată a intrărilor și a ieșirilor</strong>{' '}
          (Articolul 12). Fiecare decizie lasă o evidență, păstrată de sistem,
          nu manual.
        </li>
      </ul>
      <p>
        În plus, până la termenul-limită un sistem cu risc ridicat are nevoie de
        o evaluare a conformității finalizată, de documentație tehnică
        finalizată, de un marcaj CE și de înregistrarea în baza de date a UE.
        Penalizarea pentru greșeli ajunge până la 35 de milioane de euro sau 7%
        din cifra de afaceri mondială.<sup>5</sup>
      </p>

      <h2>Cele trei lucruri pe care o decizie de creditare cu AI trebuie să le demonstreze</h2>
      <p>Citită așa cum o citește un inginer, regula cere trei proprietăți pentru fiecare decizie.</p>
      <ol>
        <li>
          <strong>De ce.</strong> Un motiv interpretabil pentru decizie, nu un
          scor fără nicio poveste în spate.
        </li>
        <li>
          <strong>Pe baza a ce.</strong> O evidență completă și automată a
          intrărilor și ieșirilor exacte, captată în momentul în care se ia
          decizia.
        </li>
        <li>
          <strong>Dovedit neschimbat.</strong> O înregistrare pe care un
          supervizor o poate recalcula și verifica, nu una pe care i se cere să
          o creadă pe cuvânt.
        </li>
      </ol>
      <p>
        Majoritatea piloților fac primul lucru prost, al doilea parțial, iar al
        treilea deloc. Exact de aceea sunt piloți. Modelul este jumătatea
        ușoară. Dovada este jumătatea care lipsește.
      </p>

      <h2>Toți au lansat un agent. Puțini au lansat dovada.</h2>
      <p>
        Mai 2026 a demonstrat ideea. În două săptămâni, mai mulți dintre cei mai
        mari furnizori de tehnologie bancară și de creditare au lansat fiecare
        un &ldquo;sistem de operare cu agenți&rdquo; pentru creditare: software
        în care agenții de AI extrag date, rulează modele de risc, semnalează
        anomalii și direcționează excepțiile, cu decizia de credit menționată în
        fiecare foaie de parcurs.<sup>6</sup>
      </p>
      <p>
        Un agent care acționează este jumătate din cerință. Cealaltă jumătate
        este un agent care poate fi auditat: fiecare acțiune pe care o
        întreprinde înregistrată și explicabilă la același standard ca o decizie
        umană. Un pas autonom pe care nimeni nu îl poate reconstrui ulterior nu
        este o funcționalitate într-un creditor reglementat. Este o constatare
        care așteaptă să se întâmple. Termenul-limită nu întreabă dacă agentul
        este inteligent. Întreabă dacă agentul își poate arăta munca.
      </p>

      <h2>Următoarele 90 de zile</h2>
      <p>Pentru un creditor european, munca de acum până în august este concretă.</p>
      <ul>
        <li>
          <strong>Enumeră fiecare caz de utilizare AI care atinge bonitatea.</strong>{' '}
          Acelea sunt sistemele tale cu risc ridicat. Detectarea fraudei este
          excepția, nu regula.
        </li>
        <li>
          <strong>Pentru fiecare, răspunde la trei întrebări.</strong> Putem oferi
          un motiv interpretabil pentru fiecare decizie? Păstrăm o înregistrare
          completă și automată a intrărilor și ieșirilor? Putem dovedi că acea
          înregistrare este intactă?
        </li>
        <li>
          <strong>Dacă agenții întreprind acțiuni, verifică auditul.</strong>{' '}
          Moștenește fiecare acțiune a unui agent aceeași înregistrare și
          explicabilitate ca o decizie umană sau se strecoară neînregistrată?
        </li>
        <li>
          <strong>Fii onest în privința răspunsului.</strong> Dacă este nu, acel
          pilot nu intră în producție în august. Se întoarce la arhitectură.
        </li>
      </ul>

      <h2>Cum am construit pentru asta</h2>
      <p>
        Nu am așteptat termenul-limită pentru a le proiecta. Sunt proprietăți ale
        platformei, nu funcționalități adăugate pentru un audit.
      </p>
      <ul>
        <li>
          <strong>Decizia rămâne deterministă; AI rămâne consultativ.</strong>{' '}
          Motorul care înregistrează o decizie de credit rulează pe reguli
          explicite. Un model rulează alături ca o a doua opinie, nu ca decizia.
          Asta menține decizia în afara poverii de risc ridicat prin proiectare,
          în timp ce noi deținem oricum controalele pentru risc ridicat.
        </li>
        <li>
          <strong>Fiecare decizie este înregistrată, iar înregistrarea poate fi recalculată.</strong>{' '}
          Fiecare decizie aterizează într-o evidență de tip append-only, sigilată
          într-un lanț de hash-uri SHA-256 pe care un supervizor îl poate
          recalcula din rândurile live. (Articolul 12)
        </li>
        <li>
          <strong>Două persoane, nu una.</strong> O regulă de patru ochi înseamnă
          că persoana care pregătește o tranzacție nu o poate aproba, pe fiecare
          linie de creditare. Anularea unei respingeri de model necesită un motiv
          numit și autoritatea Directorului de Risc. (Articolul 14)
        </li>
        <li>
          <strong>Motive, nu doar scoruri.</strong> Fiecare decizie poartă un
          motiv interpretabil, iar noi rulăm un model explicabil prin proiectare,
          astfel încât motivul este modelul însuși, nu o presupunere despre el.
          (Articolele 13 și 14)
        </li>
        <li>
          <strong>Echitatea este controlată, nu sperată.</strong> Un model nu
          poate intra în decizie până nu trece o verificare a impactului disparat
          (regula celor patru cincimi) și un filtru de proxy. (Articolul 10)
        </li>
        <li>
          <strong>Un model are un ciclu de viață.</strong> Dezvoltare, validare,
          aprobare, retragere, cu un validator independent și o re-validare la
          douăsprezece luni. (Articolele 9 și 17)
        </li>
      </ul>
      <p>
        Concluzia: suntem pregătiți pentru AI Act. Suntem construiți la cerințele
        de risc ridicat, controalele sunt deja în platformă, iar decizia este
        arhitecturată astfel încât povara de risc ridicat nici măcar nu ne
        obligă încă. Nu pretindem un certificat pe care nu l-am câștigat.
        Pretindem lucrul mai greu: pregătirea este în construcție, nu într-un
        dosar.
      </p>

      <h2>Versiunea scurtă</h2>
      <p>
        Cursa în creditare nu este către cel mai autonom agent. Este către cel
        care își poate arăta munca la cerere. Noi construim pentru asta: fiecare
        decizie își poartă motivul, fiecare acțiune aterizează într-o
        înregistrare sigilată pe care un supervizor o poate recalcula din date
        live în loc să o ia pe încredere, iar un agent de AI este supus aceluiași
        audit ca persoana pe care o înlocuiește. Termenul-limită nu este o
        amenințare la adresa acestei abordări. Este argumentul în favoarea ei.
      </p>

      <p className="text-body-sm text-slate-500">
        O notă despre cifre: cifrele de adopție de aici sunt orientative și în
        mare parte de origine americană sau globală (cifra de 83% privind
        bugetele este un sondaj pe 106 creditori americani, cifra de 23% privind
        producția este o lectură a directorilor bancari la nivel global). Le
        cităm ca semnale de direcție, nu ca cote de piață europene. Faptul
        european care nu este orientativ este reglementarea: Anexa III și data de
        2 august 2026 sunt textul legal, nu o estimare.
      </p>

      <h2>Surse</h2>
      <ol className="text-body-sm text-slate-500">
        <li>
          Sondaj Generative AI in Retail Lending, 106 bănci, uniuni de credit și
          companii de finanțare a consumatorilor din SUA, derulat în august 2025,
          publicat în noiembrie 2025. Bază: SUA, un singur sondaj. Orientativ.
        </li>
        <li>
          Accenture, sondaj T1 2026 al directorilor bancari: 91% numesc AI o
          prioritate strategică, 23% au trecut dincolo de piloți în producție.
          Bază: global. Orientativ.
        </li>
        <li>
          McKinsey &amp; Company, &ldquo;Embracing generative AI in credit
          risk&rdquo;: 24% au implementat complet cazuri de utilizare ad hoc, 27%
          pilotează sinteza pentru decizia de credit, 12% dintre respondenții
          nord-americani au implementat vreun caz de utilizare. Bază: global, cu
          o secțiune nord-americană. Orientativ.
        </li>
        <li>
          EU AI Act, Anexa III, punctul 5(b): sistemele de AI pentru a evalua
          bonitatea sau a stabili un scor de credit al persoanelor fizice sunt cu
          risc ridicat, cu excepția detectării fraudei. Text legal.
        </li>
        <li>
          European Banking Authority, &ldquo;AI Act implications for the EU
          banking and payments sector&rdquo;, noiembrie 2025: obligațiile de risc
          ridicat se aplică de la 2 august 2026 (Articolele 9 până la 19, 26, 27);
          penalizări de până la 35 de milioane de euro sau 7% din cifra de afaceri
          mondială. Legal și de supraveghere.
        </li>
        <li>
          Anunțuri ale furnizorilor din mai 2026 privind platforme de AI agentic
          pentru domeniul bancar și de creditare, cu decizia de credit pe foaia
          de parcurs (mai mulți furnizori importanți de core-banking și de
          tehnologie de creditare, 4 până la 14 mai 2026). Comunicate de presă ale
          furnizorilor.
        </li>
      </ol>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Die Schlagzeilen sagen, dass KI das Kreditgeschäft übernimmt. Die
        Umfragen sagen etwas Leiseres: Die meisten Kreditgeber stecken noch in
        Pilotprojekten fest. Und am 2. August 2026 wird die europäische
        Kreditbewertung unter dem EU AI Act zu einem Hochrisikosystem, mit einer
        kurzen Liste von Dingen, die jede automatisierte Entscheidung nachweisen
        können muss. Die Pilotprojekte, die in den Produktivbetrieb gelangen,
        werden nicht die cleversten sein. Es werden diejenigen sein, die ihre
        Arbeit belegen können.
      </p>

      <h2>Die Einführung rast. Der Produktivbetrieb nicht.</h2>
      <p>
        Der Appetit ist real. In einer Branchenumfrage gaben 83% der
        Kreditgeber an, ihre Budgets für generative KI im Jahr 2026 zu erhöhen,
        und 67% haben eine Strategie für generative KI bereits umgesetzt oder
        bringen sie noch in diesem Jahr auf den Weg.<sup>1</sup>
      </p>
      <p>
        Der Einsatz hingegen nicht. Nur 23% der Bankenführungskräfte sagen, dass
        sie über Pilotprojekte hinaus in den Produktivbetrieb gegangen sind.
        <sup>2</sup> Speziell im Kreditrisiko berichten lediglich 12% der
        nordamerikanischen Institute, überhaupt einen Anwendungsfall für
        generative KI eingeführt zu haben, während 27% ihn noch erproben, um bei
        Kreditentscheidungen zu unterstützen.<sup>3</sup>
      </p>
      <p>
        Die Lücke ist nicht der Appetit, und es ist auch nicht die Modellqualität.
        Es ist der Abstand zwischen einem Modell, das in einer Demo funktioniert,
        und einem, das hinter einer regulierten Entscheidung stehen kann. Eine
        Demo muss sich nicht erklären. Eine Kreditentscheidung schon.
      </p>

      <h2>Was der 2. August 2026 tatsächlich verlangt</h2>
      <p>
        Unter dem EU AI Act ist ein KI-System, das die Kreditwürdigkeit einer
        Person bewertet oder ihren Kredit-Score festlegt, hochriskant: Anhang
        III, Punkt 5(b), mit einer engen Ausnahme für die Betrugserkennung.
        <sup>4</sup> Die Pflichten gelten ab dem 2. August 2026. Drei von ihnen
        entscheiden darüber, ob ein Modell überhaupt Entscheidungen treffen darf.
      </p>
      <ul>
        <li>
          <strong>Eine interpretierbare Ausgabe, die menschliche Aufsicht unterstützt</strong>{' '}
          (Artikel 14). Für jede Entscheidung muss ein Mensch verstehen können,
          warum.
        </li>
        <li>
          <strong>Eine Verzerrungsbewertung der Trainingsdaten</strong> (Artikel 10).
          Sie müssen nachweisen können, dass die Daten hinter dem Modell auf
          Verzerrungen geprüft wurden.
        </li>
        <li>
          <strong>Automatische Protokollierung von Eingaben und Ausgaben</strong> (Artikel 12).
          Jede Entscheidung hinterlässt einen Datensatz, geführt vom System,
          nicht von Hand.
        </li>
      </ul>
      <p>
        Darüber hinaus braucht ein Hochrisikosystem bis zur Frist eine
        abgeschlossene Konformitätsbewertung, eine finalisierte technische
        Dokumentation, eine CE-Kennzeichnung und eine Registrierung in der
        EU-Datenbank. Die Strafe für Fehler beläuft sich auf bis zu 35 Millionen
        Euro oder 7% des weltweiten Umsatzes.<sup>5</sup>
      </p>

      <h2>Die drei Dinge, die eine KI-Kreditentscheidung belegen muss</h2>
      <p>So gelesen, wie ein Ingenieur es liest, verlangt die Regel drei Eigenschaften für jede Entscheidung.</p>
      <ol>
        <li>
          <strong>Warum.</strong> Ein interpretierbarer Grund für die
          Entscheidung, nicht ein Score ohne eine Geschichte dahinter.
        </li>
        <li>
          <strong>Worauf.</strong> Ein vollständiger, automatischer Datensatz der
          exakten Eingaben und Ausgaben, erfasst in dem Moment, in dem die
          Entscheidung getroffen wird.
        </li>
        <li>
          <strong>Nachweislich unverändert.</strong> Ein Protokoll, das eine
          Aufsicht neu berechnen und verifizieren kann, nicht eines, dem sie
          vertrauen soll.
        </li>
      </ol>
      <p>
        Die meisten Pilotprojekte machen das Erste schlecht, das Zweite teilweise
        und das Dritte gar nicht. Genau deshalb sind es Pilotprojekte. Das Modell
        ist die einfache Hälfte. Der Nachweis ist die Hälfte, die fehlt.
      </p>

      <h2>Alle haben einen Agenten ausgeliefert. Wenige den Nachweis.</h2>
      <p>
        Der Mai 2026 hat es deutlich gemacht. Innerhalb von zwei Wochen brachte
        jeder von mehreren der größten Banken- und Kredittechnologieanbieter ein
        &ldquo;Agenten-Betriebssystem&rdquo; für das Kreditgeschäft auf den Markt:
        Software, in der KI-Agenten Daten abrufen, Risikomodelle ausführen,
        Anomalien melden und Ausnahmen weiterleiten, mit Kreditentscheidung auf
        jeder Roadmap.<sup>6</sup>
      </p>
      <p>
        Ein Agent, der handelt, ist die halbe Anforderung. Die andere Hälfte ist
        ein Agent, der geprüft werden kann: jede Handlung, die er vornimmt,
        protokolliert und erklärbar nach demselben Maßstab wie eine menschliche
        Entscheidung. Ein autonomer Schritt, den niemand im Nachhinein
        rekonstruieren kann, ist bei einem regulierten Kreditgeber keine Funktion.
        Er ist eine Beanstandung, die nur darauf wartet, einzutreten. Die Frist
        fragt nicht, ob der Agent clever ist. Sie fragt, ob der Agent seine Arbeit
        belegen kann.
      </p>

      <h2>Die nächsten 90 Tage</h2>
      <p>Für einen europäischen Kreditgeber ist die Arbeit zwischen jetzt und August konkret.</p>
      <ul>
        <li>
          <strong>Listen Sie jeden KI-Anwendungsfall auf, der die Kreditwürdigkeit berührt.</strong>{' '}
          Das sind Ihre Hochrisikosysteme. Die Betrugserkennung ist die Ausnahme,
          nicht die Regel.
        </li>
        <li>
          <strong>Beantworten Sie für jeden drei Fragen.</strong> Können wir für
          jede Entscheidung einen interpretierbaren Grund angeben? Führen wir ein
          vollständiges, automatisches Protokoll von Eingaben und Ausgaben? Können
          wir beweisen, dass dieses Protokoll intakt ist?
        </li>
        <li>
          <strong>Wenn Agenten Handlungen vornehmen, prüfen Sie das Audit.</strong> Erbt
          jede Agentenhandlung dieselbe Protokollierung und Erklärbarkeit wie eine
          menschliche Entscheidung, oder rutscht sie unprotokolliert durch?
        </li>
        <li>
          <strong>Seien Sie ehrlich mit der Antwort.</strong> Wenn sie Nein
          lautet, geht dieses Pilotprojekt im August nicht in den Produktivbetrieb.
          Es geht zurück in die Architektur.
        </li>
      </ul>

      <h2>Wie wir dafür gebaut haben</h2>
      <p>
        Wir haben nicht auf die Frist gewartet, um diese Eigenschaften
        einzuplanen. Sie sind Eigenschaften der Plattform, keine Funktionen, die
        für ein Audit nachträglich angeschraubt wurden.
      </p>
      <ul>
        <li>
          <strong>Die Entscheidung bleibt deterministisch; die KI bleibt beratend.</strong>{' '}
          Die Engine, die eine Kreditentscheidung verbucht, läuft auf expliziten
          Regeln. Ein Modell läuft daneben als zweite Meinung, nicht als die
          Entscheidung. Das hält die Entscheidung von vornherein außerhalb der
          Hochrisikolast, während wir die Hochrisikokontrollen ohnehin einhalten.
        </li>
        <li>
          <strong>Jede Entscheidung wird protokolliert, und das Protokoll kann neu berechnet werden.</strong>{' '}
          Jede Entscheidung landet in einem reinen Anfügedatensatz, versiegelt in
          einer SHA-256-Hashkette, die eine Aufsicht aus den Live-Datensätzen neu
          berechnen kann. (Artikel 12)
        </li>
        <li>
          <strong>Zwei Personen, nicht eine.</strong> Eine Vier-Augen-Regel
          bedeutet, dass die Person, die einen Vorgang vorbereitet, ihn nicht
          genehmigen kann, auf jeder Kreditlinie. Eine Modellablehnung zu
          überstimmen erfordert einen benannten Grund und die Befugnis des Risk
          Directors. (Artikel 14)
        </li>
        <li>
          <strong>Gründe, nicht nur Scores.</strong> Jede Entscheidung trägt einen
          interpretierbaren Grund, und wir betreiben ein von Grund auf erklärbares
          Modell, sodass der Grund das Modell selbst ist, nicht eine Vermutung
          darüber. (Artikel 13 und 14)
        </li>
        <li>
          <strong>Fairness ist abgesichert, nicht erhofft.</strong> Ein Modell
          kann nicht in die Entscheidung eintreten, bevor es eine Prüfung auf
          unterschiedliche Auswirkungen (die Vier-Fünftel-Regel) und einen
          Proxy-Screen besteht. (Artikel 10)
        </li>
        <li>
          <strong>Ein Modell hat einen Lebenszyklus.</strong> Entwicklung,
          Validierung, Genehmigung, Außerbetriebnahme, mit einem unabhängigen
          Validierer und einer Re-Validierung nach zwölf Monaten. (Artikel 9 und 17)
        </li>
      </ul>
      <p>
        Das Fazit: Wir sind AI-Act-bereit. Wir sind nach den
        Hochrisikoanforderungen gebaut, die Kontrollen sind bereits in der
        Plattform, und die Entscheidung ist so architektiert, dass die
        Hochrisikolast uns noch nicht einmal bindet. Wir beanspruchen kein
        Zertifikat, das wir nicht verdient haben. Wir beanspruchen das Schwerere:
        Die Bereitschaft steckt im Bau, nicht in einem Aktenordner.
      </p>

      <h2>Die Kurzfassung</h2>
      <p>
        Das Rennen im Kreditgeschäft geht nicht an den autonomsten Agenten. Es
        geht an denjenigen, der seine Arbeit auf Anforderung belegen kann. Wir
        bauen dafür: Jede Entscheidung trägt ihren Grund, jede Handlung landet in
        einem versiegelten Protokoll, das eine Aufsicht aus Live-Daten neu
        berechnen kann, statt es auf Treu und Glauben hinzunehmen, und ein
        KI-Agent wird demselben Audit unterworfen wie die Person, für die er
        einsteht. Die Frist ist keine Bedrohung für diesen Ansatz. Sie ist das
        Argument dafür.
      </p>

      <p className="text-body-sm text-slate-500">
        Eine Anmerkung zu den Zahlen: Die Adoptionswerte hier sind richtungsweisend
        und stammen größtenteils aus den USA oder weltweit (die 83%-Budgetzahl ist
        eine Umfrage unter 106 US-Kreditgebern, die 23%-Produktionszahl ist eine
        globale Lesart unter Bankenführungskräften). Wir zitieren sie als Signale
        einer Richtung, nicht als europäische Marktanteile. Die europäische
        Tatsache, die nicht richtungsweisend ist, ist die Regulierung: Anhang III
        und das Datum 2. August 2026 sind der Rechtstext, keine Schätzung.
      </p>

      <h2>Quellen</h2>
      <ol className="text-body-sm text-slate-500">
        <li>
          Umfrage &ldquo;Generative AI in Retail Lending&rdquo;, 106 US-Banken,
          Kreditgenossenschaften und Verbraucherfinanzierungsunternehmen, erhoben
          im August 2025, veröffentlicht im November 2025. Grundlage: USA, einzelne
          Umfrage. Richtungsweisend.
        </li>
        <li>
          Accenture, Bankenführungskräfte-Umfrage Q1 2026: 91% nennen KI eine
          strategische Priorität, 23% sind über Pilotprojekte hinaus in den
          Produktivbetrieb gegangen. Grundlage: global. Richtungsweisend.
        </li>
        <li>
          McKinsey &amp; Company, &ldquo;Embracing generative AI in credit
          risk&rdquo;: 24% haben Ad-hoc-Anwendungsfälle vollständig eingeführt, 27%
          erproben Synthese für die Kreditentscheidung, 12% der nordamerikanischen
          Befragten haben einen Anwendungsfall eingeführt. Grundlage: global, mit
          einem nordamerikanischen Ausschnitt. Richtungsweisend.
        </li>
        <li>
          EU AI Act, Anhang III, Punkt 5(b): KI-Systeme zur Bewertung der
          Kreditwürdigkeit oder zur Festlegung eines Kredit-Scores natürlicher
          Personen sind hochriskant, mit Ausnahme der Betrugserkennung. Rechtstext.
        </li>
        <li>
          European Banking Authority, &ldquo;AI Act implications for the EU banking
          and payments sector&rdquo;, November 2025: Hochrisikopflichten gelten ab
          dem 2. August 2026 (Artikel 9 bis 19, 26, 27); Strafen bis zu 35 Millionen
          Euro oder 7% des weltweiten Umsatzes. Rechtlich und aufsichtsrechtlich.
        </li>
        <li>
          Ankündigungen von Anbietern agentischer KI-Plattformen für Banken und das
          Kreditgeschäft im Mai 2026, mit Kreditentscheidung auf der Roadmap
          (mehrere große Kernbanken- und Kredittechnologieanbieter, 4. bis 14. Mai
          2026). Pressemitteilungen der Anbieter.
        </li>
      </ol>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Les gros titres affirment que l&apos;IA s&apos;empare du crédit. Les
        enquêtes disent quelque chose de plus discret : la plupart des prêteurs
        restent bloqués au stade des pilotes. Et le 2 août 2026, le scoring de
        crédit européen devient un système à haut risque au titre de l&apos;AI
        Act, avec une courte liste d&apos;éléments que chaque décision
        automatisée doit pouvoir démontrer. Les pilotes qui atteindront la
        production ne seront pas les plus astucieux. Ce seront ceux qui savent
        montrer leur travail.
      </p>

      <h2>L&apos;adoption s&apos;emballe. La production, non.</h2>
      <p>
        L&apos;appétit est réel. Dans une enquête sectorielle, 83% des prêteurs
        ont déclaré augmenter leurs budgets d&apos;IA générative en 2026, et 67%
        disposent d&apos;une stratégie d&apos;IA générative en place ou prévue
        pour cette année.<sup>1</sup>
      </p>
      <p>
        Le déploiement, non. Seuls 23% des dirigeants bancaires affirment être
        passés des pilotes à la production.<sup>2</sup> Dans le risque de crédit
        en particulier, à peine 12% des institutions nord-américaines déclarent
        avoir déployé un cas d&apos;usage d&apos;IA générative, tandis que 27% en
        sont encore au stade pilote pour aider à la décision de crédit.
        <sup>3</sup>
      </p>
      <p>
        L&apos;écart ne tient pas à l&apos;appétit, ni à la qualité des modèles.
        Il tient à la distance entre un modèle qui fonctionne dans une
        démonstration et un modèle capable de soutenir une décision réglementée.
        Une démonstration n&apos;a pas à se justifier. Une décision de crédit, si.
      </p>

      <h2>Ce que le 2 août 2026 exige réellement</h2>
      <p>
        Au titre de l&apos;AI Act, un système d&apos;IA utilisé pour évaluer la
        solvabilité d&apos;une personne ou établir son score de crédit est à haut
        risque : Annexe III, point 5(b), avec une exception étroite pour la
        détection de la fraude.<sup>4</sup> Les obligations s&apos;appliquent à
        compter du 2 août 2026. Trois d&apos;entre elles déterminent si un modèle
        est seulement autorisé à prendre des décisions.
      </p>
      <ul>
        <li>
          <strong>Une sortie interprétable qui soutient la supervision humaine</strong>{' '}
          (Article 14). Pour chaque décision, une personne doit pouvoir
          comprendre pourquoi.
        </li>
        <li>
          <strong>Une évaluation des biais des données d&apos;entraînement</strong>{' '}
          (Article 10). Vous devez pouvoir démontrer que les données derrière le
          modèle ont été examinées pour détecter d&apos;éventuels biais.
        </li>
        <li>
          <strong>Une journalisation automatique des entrées et des sorties</strong>{' '}
          (Article 12). Chaque décision laisse une trace, conservée par le
          système, et non à la main.
        </li>
      </ul>
      <p>
        À cela s&apos;ajoute le fait que, d&apos;ici l&apos;échéance, un système
        à haut risque a besoin d&apos;une évaluation de conformité achevée,
        d&apos;une documentation technique finalisée, d&apos;un marquage CE et
        d&apos;une inscription à la base de données de l&apos;UE. La sanction en
        cas de manquement peut atteindre 35 millions d&apos;euros ou 7% du chiffre
        d&apos;affaires mondial.<sup>5</sup>
      </p>

      <h2>Les trois éléments qu&apos;une décision de crédit par IA doit montrer</h2>
      <p>
        Lue avec l&apos;oeil d&apos;un ingénieur, la règle exige trois propriétés
        pour chaque décision.
      </p>
      <ol>
        <li>
          <strong>Pourquoi.</strong> Une raison interprétable de la décision, et
          non un score sans aucune explication derrière lui.
        </li>
        <li>
          <strong>Sur quoi.</strong> Un enregistrement complet et automatique des
          entrées et sorties exactes, capturé au moment où la décision est prise.
        </li>
        <li>
          <strong>Démontrablement inchangé.</strong> Un journal qu&apos;un
          superviseur peut recalculer et vérifier, et non un journal qu&apos;on
          lui demande de croire sur parole.
        </li>
      </ol>
      <p>
        La plupart des pilotes traitent mal le premier point, partiellement le
        deuxième, et pas du tout le troisième. C&apos;est précisément pour cela
        qu&apos;ils restent des pilotes. Le modèle est la moitié facile. La preuve
        est la moitié qui manque.
      </p>

      <h2>Tout le monde a livré un agent. Peu ont livré la preuve.</h2>
      <p>
        Mai 2026 l&apos;a illustré. En l&apos;espace de deux semaines, plusieurs
        des plus grands fournisseurs de technologies bancaires et de crédit ont
        chacun lancé un &laquo;&nbsp;système d&apos;exploitation à base
        d&apos;agents&nbsp;&raquo; pour le crédit : des logiciels où des agents
        d&apos;IA collectent des données, exécutent des modèles de risque,
        signalent les anomalies et orientent les exceptions, avec la décision de
        crédit inscrite sur chaque feuille de route.<sup>6</sup>
      </p>
      <p>
        Un agent qui agit, c&apos;est la moitié de l&apos;exigence. L&apos;autre
        moitié est un agent qui peut être audité : chaque action qu&apos;il
        entreprend journalisée et explicable au même niveau qu&apos;une décision
        humaine. Une étape autonome que personne ne peut reconstituer après coup
        n&apos;est pas une fonctionnalité chez un prêteur réglementé. C&apos;est
        un constat d&apos;audit qui ne demande qu&apos;à survenir. L&apos;échéance
        ne demande pas si l&apos;agent est astucieux. Elle demande si l&apos;agent
        peut montrer son travail.
      </p>

      <h2>Les 90 prochains jours</h2>
      <p>
        Pour un prêteur européen, le travail d&apos;ici à août est concret.
      </p>
      <ul>
        <li>
          <strong>Recensez chaque cas d&apos;usage d&apos;IA touchant à la solvabilité.</strong>{' '}
          Ce sont vos systèmes à haut risque. La détection de la fraude est
          l&apos;exception, pas la règle.
        </li>
        <li>
          <strong>Pour chacun, répondez à trois questions.</strong> Pouvons-nous
          donner une raison interprétable pour chaque décision ? Conservons-nous
          un journal complet et automatique des entrées et des sorties ?
          Pouvons-nous prouver que ce journal est intact ?
        </li>
        <li>
          <strong>Si des agents entreprennent des actions, vérifiez l&apos;audit.</strong>{' '}
          Chaque action d&apos;agent hérite-t-elle de la même journalisation et de
          la même explicabilité qu&apos;une décision humaine, ou passe-t-elle au
          travers sans être enregistrée ?
        </li>
        <li>
          <strong>Soyez honnête sur la réponse.</strong> Si c&apos;est non, ce
          pilote ne passe pas en production en août. Il retourne à
          l&apos;architecture.
        </li>
      </ul>

      <h2>Comment nous avons conçu cela</h2>
      <p>
        Nous n&apos;avons pas attendu l&apos;échéance pour les intégrer. Ce sont
        des propriétés de la plateforme, et non des fonctionnalités ajoutées pour
        un audit.
      </p>
      <ul>
        <li>
          <strong>La décision reste déterministe ; l&apos;IA reste consultative.</strong>{' '}
          Le moteur qui enregistre une décision de crédit fonctionne sur des
          règles explicites. Un modèle l&apos;accompagne en tant que second avis,
          et non en tant que décision. Cela maintient la décision hors du fardeau
          à haut risque par conception, tout en nous appliquant malgré tout les
          contrôles à haut risque.
        </li>
        <li>
          <strong>Chaque décision est journalisée, et le journal peut être recalculé.</strong>{' '}
          Chaque décision atterrit dans un enregistrement en ajout seul, scellé
          dans une chaîne de hachage SHA-256 qu&apos;un superviseur peut
          recalculer à partir des lignes en production. (Article 12)
        </li>
        <li>
          <strong>Deux personnes, pas une.</strong> Une règle des quatre yeux
          signifie que la personne qui prépare un dossier ne peut pas
          l&apos;approuver, sur chaque ligne de crédit. Outrepasser un rejet du
          modèle exige une raison nommée et l&apos;autorité du directeur des
          risques. (Article 14)
        </li>
        <li>
          <strong>Des raisons, pas seulement des scores.</strong> Chaque décision
          porte une raison interprétable, et nous exécutons un modèle explicable
          par conception, de sorte que la raison soit le modèle lui-même, et non
          une supposition à son sujet. (Articles 13 et 14)
        </li>
        <li>
          <strong>L&apos;équité est contrôlée, pas espérée.</strong> Un modèle ne
          peut pas entrer dans la décision tant qu&apos;il n&apos;a pas passé un
          contrôle d&apos;impact disparate (la règle des quatre cinquièmes) et un
          dépistage des variables de substitution. (Article 10)
        </li>
        <li>
          <strong>Un modèle a un cycle de vie.</strong> Développement, validation,
          approbation, retrait, avec un validateur indépendant et une
          re-validation tous les douze mois. (Articles 9 et 17)
        </li>
      </ul>
      <p>
        En résumé : nous sommes prêts pour l&apos;AI Act. Nous sommes construits
        selon les exigences à haut risque, les contrôles sont déjà dans la
        plateforme, et la décision est architecturée de sorte que le fardeau à
        haut risque ne nous lie même pas encore. Nous ne revendiquons pas un
        certificat que nous n&apos;avons pas mérité. Nous revendiquons la chose la
        plus difficile : la préparation est dans la construction, pas dans un
        classeur.
      </p>

      <h2>La version courte</h2>
      <p>
        La course dans le crédit ne se gagne pas avec l&apos;agent le plus
        autonome. Elle se gagne avec celui qui peut montrer son travail à la
        demande. Nous construisons pour cela : chaque décision porte sa raison,
        chaque action atterrit dans un journal scellé qu&apos;un superviseur peut
        recalculer à partir des données en production plutôt que de l&apos;accepter
        sur la foi, et un agent d&apos;IA est tenu au même audit que la personne
        qu&apos;il remplace. L&apos;échéance n&apos;est pas une menace pour cette
        approche. Elle en est l&apos;argument.
      </p>

      <p className="text-body-sm text-slate-500">
        Une note sur les chiffres : les données d&apos;adoption présentées ici
        sont indicatives et d&apos;origine principalement américaine ou mondiale
        (le chiffre de 83% sur les budgets provient d&apos;une enquête auprès de
        106 prêteurs américains, le chiffre de 23% sur la production est une
        lecture mondiale de dirigeants bancaires). Nous les citons comme des
        signaux de tendance, et non comme des parts de marché européennes. Le fait
        européen qui n&apos;est pas indicatif, c&apos;est la réglementation :
        l&apos;Annexe III et la date du 2 août 2026 sont le texte juridique, et non
        une estimation.
      </p>

      <h2>Sources</h2>
      <ol className="text-body-sm text-slate-500">
        <li>
          Enquête &laquo;&nbsp;Generative AI in Retail Lending&nbsp;&raquo;, 106
          banques, coopératives de crédit et sociétés de crédit à la consommation
          américaines, réalisée en août 2025, publiée en novembre 2025. Base :
          États-Unis, enquête unique. Indicatif.
        </li>
        <li>
          Accenture, enquête auprès de dirigeants bancaires, T1 2026 : 91%
          qualifient l&apos;IA de priorité stratégique, 23% sont passés des pilotes
          à la production. Base : mondiale. Indicatif.
        </li>
        <li>
          McKinsey &amp; Company, &laquo;&nbsp;Embracing generative AI in credit
          risk&nbsp;&raquo; : 24% ont entièrement déployé des cas d&apos;usage
          ponctuels, 27% testent la synthèse pour la décision de crédit, 12% des
          répondants nord-américains ont déployé un cas d&apos;usage quelconque.
          Base : mondiale, avec un sous-ensemble nord-américain. Indicatif.
        </li>
        <li>
          AI Act de l&apos;UE, Annexe III, point 5(b) : les systèmes d&apos;IA
          destinés à évaluer la solvabilité ou à établir le score de crédit de
          personnes physiques sont à haut risque, à l&apos;exception de la
          détection de la fraude. Texte juridique.
        </li>
        <li>
          European Banking Authority, &laquo;&nbsp;AI Act implications for the EU
          banking and payments sector&nbsp;&raquo;, novembre 2025 : les
          obligations à haut risque s&apos;appliquent à compter du 2 août 2026
          (Articles 9 à 19, 26, 27) ; sanctions jusqu&apos;à 35 millions
          d&apos;euros ou 7% du chiffre d&apos;affaires mondial. Juridique et
          prudentiel.
        </li>
        <li>
          Annonces de fournisseurs, en mai 2026, de plateformes d&apos;IA agentique
          pour la banque et le crédit, avec la décision de crédit sur la feuille de
          route (plusieurs grands fournisseurs de core banking et de technologies
          de crédit, du 4 au 14 mai 2026). Communiqués de presse de fournisseurs.
        </li>
      </ol>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        I titoli dei giornali dicono che l&apos;IA sta conquistando il credito.
        I sondaggi dicono qualcosa di più sommesso: la maggior parte dei
        finanziatori è ancora bloccata nei progetti pilota. E il 2 agosto 2026
        il credit scoring europeo diventa un sistema ad alto rischio ai sensi
        dell&apos;AI Act dell&apos;UE, con un breve elenco di cose che ogni
        decisione automatizzata deve essere in grado di mostrare. I progetti
        pilota che arriveranno alla produzione non saranno i più ingegnosi.
        Saranno quelli capaci di mostrare il proprio lavoro.
      </p>

      <h2>L&apos;adozione corre. La produzione no.</h2>
      <p>
        L&apos;appetito è reale. In un sondaggio di settore, l&apos;83% dei
        finanziatori ha dichiarato di voler aumentare i propri budget per
        l&apos;IA generativa nel 2026, e il 67% ha una strategia di IA generativa
        già in atto o in arrivo quest&apos;anno.<sup>1</sup>
      </p>
      <p>
        Il dispiegamento no. Solo il 23% dei dirigenti bancari afferma di essere
        andato oltre i progetti pilota fino alla produzione.<sup>2</sup> Nel
        rischio di credito in particolare, appena il 12% degli istituti
        nordamericani dichiara di aver implementato un qualsiasi caso d&apos;uso
        di IA generativa, mentre il 27% lo sta ancora sperimentando come supporto
        alle decisioni di credito.<sup>3</sup>
      </p>
      <p>
        Il divario non è l&apos;appetito, e non è la qualità del modello. È la
        distanza tra un modello che funziona in una demo e uno che può reggere
        una decisione regolamentata. Una demo non deve spiegarsi. Una decisione
        di credito sì.
      </p>

      <h2>Cosa chiede davvero il 2 agosto 2026</h2>
      <p>
        Ai sensi dell&apos;AI Act dell&apos;UE, un sistema di IA usato per
        valutare il merito creditizio di una persona o per stabilire il suo
        punteggio di credito è ad alto rischio: Allegato III, punto 5(b), con una
        stretta eccezione per il rilevamento delle frodi.<sup>4</sup> Gli
        obblighi si applicano dal 2 agosto 2026. Tre di essi decidono se un
        modello sia affatto autorizzato a prendere decisioni.
      </p>
      <ul>
        <li>
          <strong>Un output interpretabile che supporti la sorveglianza umana</strong>{' '}
          (Articolo 14). Per ogni decisione, una persona deve poter capire il
          perché.
        </li>
        <li>
          <strong>Una valutazione dei bias dei dati di addestramento</strong>{' '}
          (Articolo 10). Bisogna poter dimostrare che i dati alla base del modello
          sono stati esaminati per individuare bias.
        </li>
        <li>
          <strong>La registrazione automatica di input e output</strong>{' '}
          (Articolo 12). Ogni decisione lascia una traccia, conservata dal
          sistema, non a mano.
        </li>
      </ul>
      <p>
        Oltre a questo, entro la scadenza un sistema ad alto rischio necessita di
        una valutazione di conformità completata, di una documentazione tecnica
        finalizzata, di una marcatura CE e della registrazione nella banca dati
        dell&apos;UE. La sanzione per chi sbaglia arriva fino a 35 milioni di euro
        o al 7% del fatturato mondiale.<sup>5</sup>
      </p>

      <h2>Le tre cose che una decisione di credito basata sull&apos;IA deve mostrare</h2>
      <p>Letta come la legge un ingegnere, la norma chiede tre proprietà per ogni decisione.</p>
      <ol>
        <li>
          <strong>Perché.</strong> Una ragione interpretabile per la decisione,
          non un punteggio senza alcuna storia dietro.
        </li>
        <li>
          <strong>Su cosa.</strong> Un registro completo e automatico degli esatti
          input e output, catturato nel momento in cui la decisione viene presa.
        </li>
        <li>
          <strong>Dimostrabilmente immutato.</strong> Un registro che un
          supervisore può ricalcolare e verificare, non uno di cui gli si chiede
          di fidarsi.
        </li>
      </ol>
      <p>
        La maggior parte dei progetti pilota fa la prima cosa male, la seconda
        parzialmente, e la terza per niente. È esattamente per questo che restano
        progetti pilota. Il modello è la metà facile. La prova è la metà che
        manca.
      </p>

      <h2>Tutti hanno rilasciato un agente. Pochi hanno rilasciato la prova.</h2>
      <p>
        Maggio 2026 lo ha dimostrato. Nel giro di due settimane, diversi tra i
        più grandi fornitori di tecnologia bancaria e creditizia hanno lanciato
        ciascuno un &ldquo;sistema operativo per agenti&rdquo; dedicato al
        credito: software in cui agenti di IA raccolgono dati, eseguono modelli di
        rischio, segnalano anomalie e instradano le eccezioni, con il
        decisioning del credito presente in ogni roadmap.<sup>6</sup>
      </p>
      <p>
        Un agente che agisce è metà del requisito. L&apos;altra metà è un agente
        che può essere sottoposto ad audit: ogni azione che compie registrata e
        spiegabile allo stesso standard di una decisione umana. Un passo autonomo
        che nessuno può ricostruire a posteriori non è una funzionalità presso un
        finanziatore regolamentato. È un rilievo in attesa di accadere. La
        scadenza non chiede se l&apos;agente sia ingegnoso. Chiede se l&apos;agente
        sappia mostrare il proprio lavoro.
      </p>

      <h2>I prossimi 90 giorni</h2>
      <p>Per un finanziatore europeo, il lavoro da qui ad agosto è concreto.</p>
      <ul>
        <li>
          <strong>Elencare ogni caso d&apos;uso dell&apos;IA che tocca il merito creditizio.</strong>{' '}
          Quelli sono i vostri sistemi ad alto rischio. Il rilevamento delle frodi
          è l&apos;eccezione, non la regola.
        </li>
        <li>
          <strong>Per ciascuno, rispondere a tre domande.</strong> Possiamo dare
          una ragione interpretabile per ogni decisione? Conserviamo un registro
          completo e automatico di input e output? Possiamo dimostrare che quel
          registro è intatto?
        </li>
        <li>
          <strong>Se gli agenti compiono azioni, verificare l&apos;audit.</strong>{' '}
          Ogni azione dell&apos;agente eredita la stessa registrazione e
          spiegabilità di una decisione umana, oppure passa inosservata senza
          essere registrata?
        </li>
        <li>
          <strong>Essere onesti sulla risposta.</strong> Se è no, quel progetto
          pilota non va in produzione ad agosto. Torna all&apos;architettura.
        </li>
      </ul>

      <h2>Come abbiamo costruito per questo</h2>
      <p>
        Non abbiamo aspettato la scadenza per progettare tutto ciò. Sono proprietà
        della piattaforma, non funzionalità aggiunte per un audit.
      </p>
      <ul>
        <li>
          <strong>La decisione resta deterministica; l&apos;IA resta consultiva.</strong>{' '}
          Il motore che registra una decisione di credito gira su regole
          esplicite. Un modello opera al suo fianco come secondo parere, non come
          la decisione. Questo mantiene la decisione fuori dall&apos;onere
          dell&apos;alto rischio per progettazione, mentre noi manteniamo comunque
          i controlli ad alto rischio.
        </li>
        <li>
          <strong>Ogni decisione è registrata, e il registro può essere ricalcolato.</strong>{' '}
          Ogni decisione finisce in un record di sola aggiunta, sigillato in una
          catena di hash SHA-256 che un supervisore può ricalcolare dalle righe
          attive. (Articolo 12)
        </li>
        <li>
          <strong>Due persone, non una.</strong> Una regola dei quattro occhi
          significa che la persona che prepara un&apos;operazione non può
          approvarla, su ogni linea di credito. Per scavalcare il rifiuto di un
          modello servono una ragione nominale e l&apos;autorità del Direttore
          Rischi. (Articolo 14)
        </li>
        <li>
          <strong>Ragioni, non solo punteggi.</strong> Ogni decisione porta con sé
          una ragione interpretabile, e usiamo un modello spiegabile per
          progettazione affinché la ragione sia il modello stesso, non una
          supposizione su di esso. (Articoli 13 e 14)
        </li>
        <li>
          <strong>L&apos;equità è vincolata, non sperata.</strong> Un modello non
          può entrare nella decisione finché non supera un controllo di impatto
          disparato (la regola dei quattro quinti) e uno screening dei proxy.
          (Articolo 10)
        </li>
        <li>
          <strong>Un modello ha un ciclo di vita.</strong> Sviluppo, validazione,
          approvazione, dismissione, con un validatore indipendente e una
          rivalidazione a dodici mesi. (Articoli 9 e 17)
        </li>
      </ul>
      <p>
        In sintesi: siamo pronti per l&apos;AI Act. Siamo costruiti secondo i
        requisiti per l&apos;alto rischio, i controlli sono già nella piattaforma,
        e la decisione è architettata in modo che l&apos;onere dell&apos;alto
        rischio non ci vincoli nemmeno ancora. Non stiamo rivendicando un
        certificato che non abbiamo guadagnato. Stiamo rivendicando la cosa più
        difficile: la prontezza è nella costruzione, non in un raccoglitore.
      </p>

      <h2>La versione breve</h2>
      <p>
        La corsa nel credito non è verso l&apos;agente più autonomo. È verso
        quello che sa mostrare il proprio lavoro su richiesta. Noi costruiamo per
        questo: ogni decisione porta con sé la sua ragione, ogni azione finisce in
        un registro sigillato che un supervisore può ricalcolare dai dati attivi
        anziché accettarlo sulla fiducia, e un agente di IA è tenuto allo stesso
        audit della persona che sostituisce. La scadenza non è una minaccia a
        questo approccio. È la sua ragion d&apos;essere.
      </p>

      <p className="text-body-sm text-slate-500">
        Una nota sui numeri: le cifre di adozione qui riportate sono indicative e
        per lo più di origine statunitense o globale (la cifra dell&apos;83% sul
        budget proviene da un sondaggio su 106 finanziatori statunitensi, la cifra
        del 23% sulla produzione è una lettura globale dei dirigenti bancari). Le
        citiamo come segnali di tendenza, non come quote del mercato europeo. Il
        dato europeo che non è indicativo è la regolamentazione: l&apos;Allegato
        III e la data del 2 agosto 2026 sono il testo giuridico, non una stima.
      </p>

      <h2>Fonti</h2>
      <ol className="text-body-sm text-slate-500">
        <li>
          Sondaggio Generative AI in Retail Lending, 106 tra banche, cooperative
          di credito e società di credito al consumo statunitensi, condotto ad
          agosto 2025, pubblicato a novembre 2025. Base: USA, singolo sondaggio.
          Indicativo.
        </li>
        <li>
          Accenture, sondaggio sui dirigenti bancari del primo trimestre 2026: il
          91% definisce l&apos;IA una priorità strategica, il 23% è andato oltre i
          progetti pilota fino alla produzione. Base: globale. Indicativo.
        </li>
        <li>
          McKinsey &amp; Company, &ldquo;Embracing generative AI in credit
          risk&rdquo;: il 24% ha pienamente implementato casi d&apos;uso ad hoc,
          il 27% sta sperimentando la sintesi per il decisioning del credito, il
          12% degli intervistati nordamericani ha implementato un qualsiasi caso
          d&apos;uso. Base: globale, con un taglio nordamericano. Indicativo.
        </li>
        <li>
          EU AI Act, Allegato III, punto 5(b): i sistemi di IA per valutare il
          merito creditizio o stabilire il punteggio di credito delle persone
          fisiche sono ad alto rischio, tranne il rilevamento delle frodi. Testo
          giuridico.
        </li>
        <li>
          European Banking Authority, &ldquo;AI Act implications for the EU banking
          and payments sector&rdquo;, novembre 2025: gli obblighi per l&apos;alto
          rischio si applicano dal 2 agosto 2026 (Articoli da 9 a 19, 26, 27);
          sanzioni fino a 35 milioni di euro o al 7% del fatturato mondiale.
          Giuridico e di vigilanza.
        </li>
        <li>
          Annunci dei fornitori di maggio 2026 di piattaforme di IA agentica per
          il settore bancario e creditizio, con il decisioning del credito nella
          roadmap (diversi importanti fornitori di core banking e di tecnologia
          creditizia, dal 4 al 14 maggio 2026). Comunicati stampa dei fornitori.
        </li>
      </ol>
    </div>
  );
}
