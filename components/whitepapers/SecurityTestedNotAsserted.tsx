/**
 * Whitepaper: Security that is tested, not asserted.
 *
 * Companion to "Resilience and security as operating properties". That paper
 * states the security properties; this one is about the practice that keeps
 * them true as the platform ships: continuous adversarial review, white-box
 * and black-box. It deliberately discloses NO specific findings about our own
 * systems, only the discipline.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - No specific vulnerability disclosure about our own platform.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function SecurityTestedNotAsserted({ locale }: ContentProps) {
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
        A certificate describes a system on the day it was examined. A
        penetration-test report describes the attacks someone tried during a
        fixed window. Both are necessary, and a buyer is right to ask for them.
        Neither answers the question a regulator actually presses under the
        Digital Operational Resilience Act or NIS2: not whether you were secure
        once, but what keeps you secure while you ship. A lending platform
        changes every week. Origination logic, pricing, new product lines, new
        integrations: each change is a chance for a security property to quietly
        stop holding. The honest claim is not a clean scan. It is a standing
        practice that assumes properties decay and is built to catch the decay
        early.
      </p>

      <h2>Two ways to look, because one is not enough</h2>
      <p>
        We review the platform the way an attacker and an engineer would,
        together. The engineer reads the code: this is where you find the class
        of a problem, a query that forgets a tenant filter, an endpoint that
        trusts the caller&apos;s claim, a secret with a weak default. The
        attacker drives the running system from the outside, with no source, and
        asks a narrower question: of everything that looks wrong in the code,
        what is actually reachable and exploitable on a live deployment?
        White-box review without black-box produces a long list of theoretical
        risks. Black-box without white-box misses the bug whose trigger you
        would never guess. We run both, and we treat a finding as real only when
        the second confirms the first.
      </p>

      <h2>Find, verify, fix, verify again</h2>
      <p>
        A finding is not a line in a spreadsheet; it is a claim that must
        survive being attacked. Before anything is changed, we try to disprove
        the finding: many plausible-looking issues turn out to be unreachable,
        already mitigated, or guarded a layer down. What survives gets fixed.
        Then the fix is re-tested against the live behaviour, not against our
        intention: if a data-exposure path is closed, we confirm it is closed
        from the outside, not merely that the code reads correctly. The loop is
        find, verify, fix, verify again, and the last step is the one most
        reviews skip.
      </p>

      <h2>Severity is exploitability, not a checklist</h2>
      <p>
        A checklist gives every item equal weight. An attacker does not. We
        triage by what a real adversary could do with what is really exposed: a
        confirmed, reachable exposure outranks a dozen theoretical hardening
        gaps, and gets fixed first, the same day. This keeps effort on the
        issues that change a buyer&apos;s risk, not on the ones that pad a
        report. It also means the issues we call critical are the ones that
        would actually fail a security review, which is the point.
      </p>

      <h2>The properties are re-tested, not remembered</h2>
      <p>
        A companion paper, on resilience and security as operating properties,
        sets out what we pin: tenant isolation that fails closed, least
        privilege as a tested contract, a tamper-evident audit trail, recovery
        on a defensible clock. A property is only as good as the last time it
        was checked. So each review re-attacks them as a set: can one tenant
        reach another&apos;s records by guessing an identifier; can a portal user
        reach a back-office action; can a token be forged; can a secret fall
        back to a default. These are not assumed to hold because they held last
        quarter. They are tested again, because the code around them moved.
      </p>

      <h2>Defence in depth is what makes review tractable</h2>
      <p>
        A system that depends on a single perfect control is one mistake away
        from a breach, and impossible to reason about. We layer: identity is
        verified at the edge, authorisation is enforced per action, every data
        query is scoped to the caller&apos;s tenant, and the audit trail records
        what happened regardless. The value of layering is not only that one
        slip is caught by the next line. It is that a reviewer can test each
        layer on its own and know what each is responsible for. Security you
        cannot test in pieces is security you are trusting on faith.
      </p>

      <h2>The supply chain is reviewed honestly</h2>
      <p>
        Most of any modern platform is code someone else wrote. We track our
        dependencies for known advisories and separate two cases plainly,
        because they are not equal. A vulnerability in a library that runs in
        production is treated as a live issue and patched. A vulnerability that
        exists only in build-time tooling, and never reaches the software a
        customer runs, is recorded and scheduled, not dressed up as a production
        risk. Telling those two apart honestly is itself part of the discipline.
        So is refusing to count a clean production scan as a finished job.
      </p>

      <h2>What we hand you</h2>
      <p>
        The output of all this is not a marketing line. It is evidence a
        due-diligence team can use: a description of the controls and where each
        is enforced, a record of the review discipline and how often it runs,
        and the assurance that the properties were re-tested against the current
        build, not certified once and left to drift. When your security team
        asks how you know this still holds, the answer is a process, with dates,
        not a promise.
      </p>

      <h2>What a practice cannot do alone</h2>
      <p>
        We will not tell you a platform is unbreakable; anyone who does is
        selling the certificate, not the security. Continuous adversarial review
        reduces the chance that a serious issue ships and shortens the time to
        catch one that does. It does not remove your side of the line. Identity
        providers, network boundaries, who you grant access to, how you run your
        own environment: these are yours, and the strongest platform cannot
        secure a deployment configured to be open. Security is shared, and a
        vendor honest about where its responsibility ends is usually the one
        taking the rest of it seriously.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Un certificat descrie un sistem în ziua în care a fost examinat. Un
        raport de penetration test descrie atacurile pe care cineva le-a
        încercat într-o fereastră fixă. Ambele sunt necesare, iar un cumpărător
        are dreptate să le ceară. Niciunul nu răspunde la întrebarea pe care un
        regulator chiar o apasă sub Digital Operational Resilience Act sau NIS2:
        nu dacă ai fost sigur o dată, ci ce te ține sigur în timp ce livrezi. O
        platformă de lending se schimbă în fiecare săptămână. Logica de
        originare, prețuirea, linii noi de produs, integrări noi: fiecare
        schimbare e o șansă ca o proprietate de securitate să înceteze tăcut să
        mai țină. Afirmația onestă nu e un scan curat. E o practică permanentă
        care presupune că proprietățile se degradează și e construită ca să
        prindă degradarea devreme.
      </p>

      <h2>Două feluri de a privi, fiindcă unul nu e de ajuns</h2>
      <p>
        Revizuim platforma așa cum ar face-o un atacator și un inginer,
        împreună. Inginerul citește codul: aici găsești clasa unei probleme, o
        interogare care uită un filtru de tenant, un endpoint care are încredere
        în afirmația apelantului, un secret cu un default slab. Atacatorul
        conduce sistemul în execuție din exterior, fără sursă, și pune o
        întrebare mai îngustă: din tot ce arată greșit în cod, ce este de fapt
        accesibil și exploatabil pe un deployment viu? Un review white-box fără
        black-box produce o listă lungă de riscuri teoretice. Black-box fără
        white-box ratează bug-ul al cărui declanșator nu l-ai ghici niciodată. Le
        rulăm pe amândouă, și tratăm o constatare ca reală doar când al doilea o
        confirmă pe primul.
      </p>

      <h2>Găsește, verifică, repară, verifică din nou</h2>
      <p>
        O constatare nu e un rând într-un spreadsheet; e o afirmație care
        trebuie să supraviețuiască atacului. Înainte să se schimbe ceva, încercăm
        să infirmăm constatarea: multe probleme care par plauzibile se dovedesc
        inaccesibile, deja mitigate sau păzite un strat mai jos. Ce supraviețuiește
        se repară. Apoi fix-ul e re-testat împotriva comportamentului viu, nu
        împotriva intenției noastre: dacă o cale de expunere de date e închisă,
        confirmăm că e închisă din exterior, nu doar că se citește corect codul.
        Bucla e găsește, verifică, repară, verifică din nou, iar ultimul pas e
        cel pe care cele mai multe review-uri îl sar.
      </p>

      <h2>Severitatea e exploatabilitate, nu o listă de bifat</h2>
      <p>
        O listă de bifat dă fiecărui element aceeași greutate. Un atacator nu.
        Triajăm după ce ar putea face un adversar real cu ce e cu adevărat
        expus: o expunere confirmată și accesibilă întrece o duzină de lipsuri de
        hardening teoretice, și se repară prima, în aceeași zi. Asta ține efortul
        pe problemele care schimbă riscul unui cumpărător, nu pe cele care umplu
        un raport. Înseamnă și că problemele pe care le numim critice sunt cele
        care chiar ar pica un review de securitate, ceea ce e ideea.
      </p>

      <h2>Proprietățile sunt re-testate, nu reamintite</h2>
      <p>
        O lucrare însoțitoare, despre reziliența și securitatea ca proprietăți
        operaționale, expune ce fixăm: izolare pe tenant care eșuează închis,
        privilegiu minim ca un contract testat, un traseu de audit rezistent la
        falsificare, recuperare pe un ceas pe care îl poți apăra. O proprietate e
        bună doar cât ultima dată când a fost verificată. Așa că fiecare review le
        re-atacă ca un set: poate un tenant să atingă înregistrările altuia
        ghicind un identificator; poate un utilizator de portal să atingă o
        acțiune de back-office; poate fi falsificat un token; poate cădea un
        secret pe un default. Acestea nu sunt presupuse să țină fiindcă au ținut
        trimestrul trecut. Sunt testate din nou, fiindcă s-a mutat codul din
        jurul lor.
      </p>

      <h2>Apărarea în adâncime e ce face review-ul abordabil</h2>
      <p>
        Un sistem care depinde de un singur control perfect e la o greșeală
        distanță de o breșă, și imposibil de rationalizat. Stratificăm:
        identitatea e verificată la margine, autorizarea e impusă per acțiune,
        fiecare interogare de date e scopată pe tenantul apelantului, iar traseul
        de audit înregistrează ce s-a întâmplat indiferent. Valoarea
        stratificării nu e doar că o alunecare e prinsă de linia următoare. E că
        un revizor poate testa fiecare strat de unul singur și știe de ce e
        responsabil fiecare. Securitatea pe care nu o poți testa în bucăți e
        securitate în care ai încredere pe credință.
      </p>

      <h2>Lanțul de aprovizionare e revizuit onest</h2>
      <p>
        Cea mai mare parte a oricărei platforme moderne e cod scris de altcineva.
        Ne urmărim dependențele pentru avertismente cunoscute și separăm clar
        două cazuri, fiindcă nu sunt egale. O vulnerabilitate într-o bibliotecă
        ce rulează în producție e tratată ca o problemă vie și plombată. O
        vulnerabilitate care există doar în uneltele de build-time, și nu ajunge
        niciodată la software-ul pe care îl rulează un client, e înregistrată și
        programată, nu împachetată ca un risc de producție. A le deosebi onest pe
        cele două e în sine parte din disciplină. La fel e și refuzul de a număra
        un scan curat de producție drept o treabă terminată.
      </p>

      <h2>Ce îți punem în mână</h2>
      <p>
        Rezultatul a toate astea nu e un rând de marketing. Sunt dovezi pe care o
        echipă de due-diligence le poate folosi: o descriere a controalelor și
        unde e impus fiecare, o evidență a disciplinei de review și cât de des
        rulează, și asigurarea că proprietățile au fost re-testate împotriva
        build-ului curent, nu certificate o dată și lăsate să deriveze. Când
        echipa ta de securitate întreabă cum știi că asta încă ține, răspunsul e
        un proces, cu date, nu o promisiune.
      </p>

      <h2>Ce nu poate face o practică singură</h2>
      <p>
        Nu îți vom spune că o platformă e indestructibilă; oricine o face vinde
        certificatul, nu securitatea. Review-ul adversarial continuu reduce șansa
        ca o problemă serioasă să iasă și scurtează timpul de a prinde una care
        iese. Nu îți elimină partea ta de linie. Furnizorii de identitate,
        granițele de rețea, cui dai acces, cum îți rulezi propriul mediu: acestea
        sunt ale tale, iar cea mai puternică platformă nu poate securiza un
        deployment configurat să fie deschis. Securitatea e împărțită, iar un
        furnizor onest despre unde se termină responsabilitatea lui e de regulă
        cel care o ia în serios pe restul.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Ein Zertifikat beschreibt ein System an dem Tag, an dem es geprüft wurde.
        Ein Penetration-Test-Bericht beschreibt die Angriffe, die jemand
        während eines festen Fensters versucht hat. Beide sind notwendig, und
        ein Käufer hat recht, danach zu fragen. Keiner beantwortet die Frage, die
        ein Regulator tatsächlich unter dem Digital Operational Resilience Act
        oder NIS2 stellt: nicht ob Sie einmal sicher waren, sondern was Sie
        sicher hält, während Sie ausliefern. Eine Lending-Plattform ändert sich
        jede Woche. Origination-Logik, Bepreisung, neue Produktlinien, neue
        Integrationen: jede Änderung ist eine Gelegenheit für eine
        Sicherheitseigenschaft, leise aufzuhören zu halten. Die ehrliche
        Behauptung ist kein sauberer Scan. Sie ist eine stehende Praxis, die
        annimmt, dass Eigenschaften verfallen, und so gebaut ist, dass sie den
        Verfall früh fängt.
      </p>

      <h2>Zwei Arten hinzusehen, weil eine nicht genügt</h2>
      <p>
        Wir überprüfen die Plattform so, wie es ein Angreifer und ein Ingenieur
        gemeinsam täten. Der Ingenieur liest den Code: hier findet man die Klasse
        eines Problems, eine Query, die einen Tenant-Filter vergisst, einen
        Endpunkt, der der Behauptung des Aufrufers vertraut, ein Secret mit einem
        schwachen Default. Der Angreifer bedient das laufende System von außen,
        ohne Quelle, und stellt eine engere Frage: von allem, was im Code falsch
        aussieht, was ist auf einem Live-Deployment tatsächlich erreichbar und
        ausnutzbar? White-Box-Review ohne Black-Box produziert eine lange Liste
        theoretischer Risiken. Black-Box ohne White-Box verpasst den Bug, dessen
        Auslöser man nie erraten würde. Wir führen beide aus, und wir behandeln
        eine Erkenntnis nur dann als echt, wenn die zweite die erste bestätigt.
      </p>

      <h2>Finden, verifizieren, beheben, erneut verifizieren</h2>
      <p>
        Eine Erkenntnis ist keine Zeile in einer Tabelle; sie ist eine
        Behauptung, die das Angegriffenwerden überstehen muss. Bevor irgendetwas
        geändert wird, versuchen wir, die Erkenntnis zu widerlegen: viele
        plausibel aussehende Probleme erweisen sich als unerreichbar, bereits
        gemildert oder eine Schicht tiefer abgesichert. Was übersteht, wird
        behoben. Dann wird der Fix gegen das Live-Verhalten erneut getestet,
        nicht gegen unsere Absicht: wenn ein Datenexpositionspfad geschlossen
        ist, bestätigen wir, dass er von außen geschlossen ist, nicht nur, dass
        sich der Code richtig liest. Die Schleife ist finden, verifizieren,
        beheben, erneut verifizieren, und der letzte Schritt ist der, den die
        meisten Reviews überspringen.
      </p>

      <h2>Schweregrad ist Ausnutzbarkeit, keine Checkliste</h2>
      <p>
        Eine Checkliste gibt jedem Punkt gleiches Gewicht. Ein Angreifer nicht.
        Wir triagieren danach, was ein echter Gegner mit dem anstellen könnte,
        was wirklich exponiert ist: eine bestätigte, erreichbare Exposition
        überragt ein Dutzend theoretischer Härtungslücken und wird zuerst
        behoben, am selben Tag. Das hält den Aufwand auf den Problemen, die das
        Risiko eines Käufers ändern, nicht auf denen, die einen Bericht füllen.
        Es bedeutet auch, dass die Probleme, die wir kritisch nennen, jene sind,
        die tatsächlich ein Security-Review durchfallen lassen würden, was der
        Punkt ist.
      </p>

      <h2>Die Eigenschaften werden erneut getestet, nicht erinnert</h2>
      <p>
        Eine begleitende Arbeit, über Resilienz und Sicherheit als operative
        Eigenschaften, legt dar, was wir festschreiben: Tenant-Isolation, die
        geschlossen scheitert, geringstes Privileg als getesteter Kontrakt, eine
        manipulationssichere Audit-Spur, Wiederherstellung auf einer
        verteidigbaren Uhr. Eine Eigenschaft ist nur so gut wie das letzte Mal,
        als sie geprüft wurde. Also greift jedes Review sie als Satz erneut an:
        kann ein Tenant die Datensätze eines anderen erreichen, indem er einen
        Identifikator errät; kann ein Portal-Benutzer eine Back-Office-Aktion
        erreichen; kann ein Token gefälscht werden; kann ein Secret auf einen
        Default zurückfallen. Diese werden nicht als haltend angenommen, weil sie
        letztes Quartal hielten. Sie werden erneut getestet, weil sich der Code um
        sie herum bewegt hat.
      </p>

      <h2>Verteidigung in der Tiefe macht das Review handhabbar</h2>
      <p>
        Ein System, das von einer einzigen perfekten Kontrolle abhängt, ist einen
        Fehler von einer Verletzung entfernt und unmöglich zu durchdenken. Wir
        schichten: Identität wird am Rand verifiziert, Autorisierung wird pro
        Aktion durchgesetzt, jede Datenabfrage ist auf den Tenant des Aufrufers
        begrenzt, und die Audit-Spur erfasst, was geschah, unabhängig davon. Der
        Wert der Schichtung ist nicht nur, dass ein Ausrutscher von der nächsten
        Linie gefangen wird. Er ist, dass ein Prüfer jede Schicht für sich testen
        kann und weiß, wofür jede zuständig ist. Sicherheit, die man nicht in
        Teilen testen kann, ist Sicherheit, der man auf Glauben vertraut.
      </p>

      <h2>Die Lieferkette wird ehrlich überprüft</h2>
      <p>
        Das meiste an jeder modernen Plattform ist Code, den jemand anderes
        geschrieben hat. Wir verfolgen unsere Abhängigkeiten auf bekannte
        Warnungen und trennen zwei Fälle klar, weil sie nicht gleich sind. Eine
        Schwachstelle in einer Bibliothek, die in Produktion läuft, wird als
        Live-Problem behandelt und gepatcht. Eine Schwachstelle, die nur in
        Build-Zeit-Werkzeugen existiert und nie die Software erreicht, die ein
        Kunde betreibt, wird festgehalten und eingeplant, nicht als
        Produktionsrisiko aufgehübscht. Diese beiden ehrlich auseinanderzuhalten
        ist selbst Teil der Disziplin. Ebenso die Weigerung, einen sauberen
        Produktionsscan als erledigte Arbeit zu zählen.
      </p>

      <h2>Was wir Ihnen in die Hand geben</h2>
      <p>
        Das Ergebnis von all dem ist keine Marketing-Zeile. Es sind Belege, die
        ein Due-Diligence-Team nutzen kann: eine Beschreibung der Kontrollen und
        wo jede durchgesetzt wird, eine Aufzeichnung der Review-Disziplin und wie
        oft sie läuft, und die Zusicherung, dass die Eigenschaften gegen den
        aktuellen Build erneut getestet wurden, nicht einmal zertifiziert und
        dann driften gelassen. Wenn Ihr Security-Team fragt, woher Sie wissen,
        dass das noch hält, ist die Antwort ein Prozess, mit Daten, kein
        Versprechen.
      </p>

      <h2>Was eine Praxis nicht allein tun kann</h2>
      <p>
        Wir werden Ihnen nicht sagen, dass eine Plattform unzerbrechlich ist; wer
        das tut, verkauft das Zertifikat, nicht die Sicherheit. Kontinuierliche
        adversarielle Überprüfung verringert die Chance, dass ein ernstes Problem
        ausgeliefert wird, und verkürzt die Zeit, eines zu fangen, das es doch
        wird. Sie nimmt Ihnen Ihre Seite der Linie nicht ab.
        Identitätsanbieter, Netzgrenzen, wem Sie Zugriff gewähren, wie Sie Ihre
        eigene Umgebung betreiben: diese gehören Ihnen, und die stärkste
        Plattform kann ein Deployment nicht sichern, das offen konfiguriert ist.
        Sicherheit ist geteilt, und ein Anbieter, der ehrlich ist, wo seine
        Verantwortung endet, ist meist der, der den Rest davon ernst nimmt.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Un certificat décrit un système le jour où il a été examiné. Un rapport
        de test d&apos;intrusion décrit les attaques que quelqu&apos;un a tentées
        pendant une fenêtre fixe. Les deux sont nécessaires, et un acheteur a
        raison de les demander. Aucun ne répond à la question qu&apos;un
        régulateur presse réellement sous le Digital Operational Resilience Act
        ou NIS2 : non pas si vous étiez sûr une fois, mais ce qui vous garde sûr
        pendant que vous livrez. Une plateforme de lending change chaque semaine.
        Logique d&apos;origination, tarification, nouvelles lignes de produit,
        nouvelles intégrations : chaque changement est une chance pour une
        propriété de sécurité de cesser silencieusement de tenir. L&apos;assertion
        honnête n&apos;est pas un scan propre. C&apos;est une pratique permanente
        qui suppose que les propriétés se dégradent et qui est bâtie pour
        attraper la dégradation tôt.
      </p>

      <h2>Deux façons de regarder, parce qu&apos;une ne suffit pas</h2>
      <p>
        Nous revoyons la plateforme comme le feraient un attaquant et un
        ingénieur, ensemble. L&apos;ingénieur lit le code : c&apos;est là
        qu&apos;on trouve la classe d&apos;un problème, une requête qui oublie un
        filtre tenant, un endpoint qui fait confiance à l&apos;affirmation de
        l&apos;appelant, un secret avec un default faible. L&apos;attaquant pilote
        le système en marche depuis l&apos;extérieur, sans source, et pose une
        question plus étroite : de tout ce qui paraît faux dans le code,
        qu&apos;est-ce qui est réellement atteignable et exploitable sur un
        déploiement vivant ? Une revue white-box sans black-box produit une longue
        liste de risques théoriques. Le black-box sans white-box manque le bug
        dont vous ne devineriez jamais le déclencheur. Nous menons les deux, et
        nous ne traitons un constat comme réel que lorsque le second confirme le
        premier.
      </p>

      <h2>Trouver, vérifier, corriger, vérifier à nouveau</h2>
      <p>
        Un constat n&apos;est pas une ligne dans un tableur ; c&apos;est une
        affirmation qui doit survivre à l&apos;attaque. Avant que quoi que ce soit
        ne change, nous essayons de réfuter le constat : beaucoup de problèmes
        d&apos;apparence plausible s&apos;avèrent inatteignables, déjà atténués ou
        gardés une couche plus bas. Ce qui survit est corrigé. Puis le correctif
        est re-testé contre le comportement vivant, pas contre notre intention :
        si un chemin d&apos;exposition de données est fermé, nous confirmons
        qu&apos;il est fermé depuis l&apos;extérieur, pas seulement que le code se
        lit correctement. La boucle est trouver, vérifier, corriger, vérifier à
        nouveau, et la dernière étape est celle que la plupart des revues sautent.
      </p>

      <h2>La sévérité est l&apos;exploitabilité, pas une checklist</h2>
      <p>
        Une checklist donne à chaque élément un poids égal. Un attaquant non.
        Nous trions selon ce qu&apos;un adversaire réel pourrait faire de ce qui
        est réellement exposé : une exposition confirmée et atteignable surpasse
        une douzaine de lacunes de durcissement théoriques, et est corrigée en
        premier, le jour même. Cela maintient l&apos;effort sur les problèmes qui
        changent le risque d&apos;un acheteur, pas sur ceux qui remplissent un
        rapport. Cela signifie aussi que les problèmes que nous appelons critiques
        sont ceux qui feraient réellement échouer une revue de sécurité, ce qui
        est le but.
      </p>

      <h2>Les propriétés sont re-testées, pas mémorisées</h2>
      <p>
        Une publication compagnon, sur la résilience et la sécurité comme
        propriétés opérationnelles, expose ce que nous figeons : isolation par
        tenant qui échoue fermé, moindre privilège comme contrat testé, une piste
        d&apos;audit infalsifiable, récupération sur une horloge défendable. Une
        propriété ne vaut que la dernière fois où elle a été vérifiée. Aussi
        chaque revue les ré-attaque comme un ensemble : un tenant peut-il
        atteindre les enregistrements d&apos;un autre en devinant un identifiant ;
        un utilisateur de portail peut-il atteindre une action back-office ; un
        token peut-il être falsifié ; un secret peut-il retomber sur un default.
        On ne suppose pas qu&apos;elles tiennent parce qu&apos;elles ont tenu le
        trimestre dernier. Elles sont testées de nouveau, parce que le code autour
        d&apos;elles a bougé.
      </p>

      <h2>La défense en profondeur est ce qui rend la revue traitable</h2>
      <p>
        Un système qui dépend d&apos;un seul contrôle parfait est à une erreur
        d&apos;une brèche, et impossible à raisonner. Nous superposons :
        l&apos;identité est vérifiée à la bordure, l&apos;autorisation est imposée
        par action, chaque requête de données est cantonnée au tenant de
        l&apos;appelant, et la piste d&apos;audit enregistre ce qui est arrivé
        quoi qu&apos;il en soit. La valeur de la superposition n&apos;est pas
        seulement qu&apos;un faux pas est attrapé par la ligne suivante.
        C&apos;est qu&apos;un relecteur peut tester chaque couche pour elle-même et
        savoir de quoi chacune est responsable. Une sécurité que vous ne pouvez
        pas tester en morceaux est une sécurité à laquelle vous faites confiance
        par foi.
      </p>

      <h2>La chaîne d&apos;approvisionnement est revue honnêtement</h2>
      <p>
        L&apos;essentiel de toute plateforme moderne est du code écrit par
        quelqu&apos;un d&apos;autre. Nous suivons nos dépendances pour les
        avertissements connus et séparons deux cas clairement, parce qu&apos;ils
        ne sont pas égaux. Une vulnérabilité dans une bibliothèque qui tourne en
        production est traitée comme un problème vivant et corrigée. Une
        vulnérabilité qui n&apos;existe que dans l&apos;outillage de build, et qui
        n&apos;atteint jamais le logiciel qu&apos;un client exécute, est consignée
        et planifiée, pas déguisée en risque de production. Distinguer ces deux
        honnêtement fait partie de la discipline. Tout comme refuser de compter un
        scan de production propre comme un travail terminé.
      </p>

      <h2>Ce que nous vous remettons</h2>
      <p>
        Le résultat de tout cela n&apos;est pas une ligne de marketing. Ce sont
        des preuves qu&apos;une équipe de due-diligence peut utiliser : une
        description des contrôles et où chacun est imposé, un relevé de la
        discipline de revue et de sa fréquence, et l&apos;assurance que les
        propriétés ont été re-testées contre le build actuel, pas certifiées une
        fois puis laissées dériver. Quand votre équipe de sécurité demande comment
        vous savez que cela tient encore, la réponse est un processus, avec des
        dates, pas une promesse.
      </p>

      <h2>Ce qu&apos;une pratique ne peut pas faire seule</h2>
      <p>
        Nous ne vous dirons pas qu&apos;une plateforme est incassable ;
        quiconque le fait vend le certificat, pas la sécurité. La revue adverse
        continue réduit la chance qu&apos;un problème sérieux soit livré et
        raccourcit le temps d&apos;en attraper un qui l&apos;est. Elle ne supprime
        pas votre côté de la ligne. Fournisseurs d&apos;identité, frontières
        réseau, à qui vous accordez l&apos;accès, comment vous exploitez votre
        propre environnement : ceux-là sont à vous, et la plateforme la plus forte
        ne peut pas sécuriser un déploiement configuré pour être ouvert. La
        sécurité est partagée, et un fournisseur honnête sur l&apos;endroit où sa
        responsabilité s&apos;arrête est en général celui qui prend le reste au
        sérieux.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Un certificato descrive un sistema nel giorno in cui è stato esaminato.
        Un rapporto di penetration test descrive gli attacchi che qualcuno ha
        tentato durante una finestra fissa. Entrambi sono necessari, e un
        acquirente ha ragione a chiederli. Nessuno risponde alla domanda che un
        regolatore preme davvero sotto il Digital Operational Resilience Act o
        NIS2: non se eri sicuro una volta, ma cosa ti mantiene sicuro mentre
        rilasci. Una piattaforma di lending cambia ogni settimana. Logica di
        origination, pricing, nuove linee di prodotto, nuove integrazioni: ogni
        cambiamento è un&apos;occasione perché una proprietà di sicurezza smetta
        silenziosamente di reggere. L&apos;affermazione onesta non è uno scan
        pulito. È una pratica permanente che presume che le proprietà si
        degradino ed è costruita per cogliere il degrado presto.
      </p>

      <h2>Due modi di guardare, perché uno non basta</h2>
      <p>
        Revisioniamo la piattaforma come farebbero un attaccante e un ingegnere,
        insieme. L&apos;ingegnere legge il codice: è qui che trovi la classe di un
        problema, una query che dimentica un filtro tenant, un endpoint che si
        fida dell&apos;affermazione del chiamante, un segreto con un default
        debole. L&apos;attaccante guida il sistema in esecuzione dall&apos;esterno,
        senza sorgente, e pone una domanda più stretta: di tutto ciò che sembra
        sbagliato nel codice, cosa è davvero raggiungibile e sfruttabile su un
        deployment vivo? Una revisione white-box senza black-box produce una lunga
        lista di rischi teorici. Il black-box senza white-box manca il bug il cui
        innesco non indovineresti mai. Eseguiamo entrambi, e trattiamo un rilievo
        come reale solo quando il secondo conferma il primo.
      </p>

      <h2>Trovare, verificare, correggere, verificare di nuovo</h2>
      <p>
        Un rilievo non è una riga in un foglio di calcolo; è un&apos;affermazione
        che deve sopravvivere all&apos;essere attaccata. Prima che qualcosa venga
        cambiato, proviamo a smentire il rilievo: molti problemi
        dall&apos;aspetto plausibile risultano irraggiungibili, già mitigati o
        protetti uno strato più sotto. Ciò che sopravvive viene corretto. Poi la
        correzione viene ri-testata contro il comportamento vivo, non contro la
        nostra intenzione: se un percorso di esposizione di dati è chiuso,
        confermiamo che è chiuso dall&apos;esterno, non solo che il codice si legge
        correttamente. Il ciclo è trovare, verificare, correggere, verificare di
        nuovo, e l&apos;ultimo passo è quello che la maggior parte delle revisioni
        salta.
      </p>

      <h2>La gravità è sfruttabilità, non una checklist</h2>
      <p>
        Una checklist dà a ogni voce uguale peso. Un attaccante no. Facciamo
        triage in base a ciò che un avversario reale potrebbe fare con ciò che è
        davvero esposto: un&apos;esposizione confermata e raggiungibile supera una
        dozzina di lacune di hardening teoriche, e viene corretta per prima, lo
        stesso giorno. Questo tiene lo sforzo sui problemi che cambiano il rischio
        di un acquirente, non su quelli che gonfiano un rapporto. Significa anche
        che i problemi che chiamiamo critici sono quelli che farebbero davvero
        fallire una revisione di sicurezza, che è il punto.
      </p>

      <h2>Le proprietà sono ri-testate, non ricordate</h2>
      <p>
        Una pubblicazione compagna, sulla resilienza e la sicurezza come
        proprietà operative, espone ciò che fissiamo: isolamento per tenant che
        fallisce chiuso, privilegio minimo come contratto testato, una traccia di
        audit a prova di manomissione, ripristino su un orologio difendibile. Una
        proprietà vale solo quanto l&apos;ultima volta in cui è stata verificata.
        Così ogni revisione le ri-attacca come insieme: un tenant può raggiungere
        i record di un altro indovinando un identificatore; un utente di portale
        può raggiungere un&apos;azione di back-office; un token può essere
        falsificato; un segreto può ricadere su un default. Non si presume che
        reggano perché hanno retto il trimestre scorso. Sono testate di nuovo,
        perché il codice attorno a esse si è mosso.
      </p>

      <h2>La difesa in profondità è ciò che rende la revisione trattabile</h2>
      <p>
        Un sistema che dipende da un singolo controllo perfetto è a un errore di
        distanza da una violazione, e impossibile da ragionare. Stratifichiamo:
        l&apos;identità è verificata al bordo, l&apos;autorizzazione è imposta per
        azione, ogni query di dati è circoscritta al tenant del chiamante, e la
        traccia di audit registra cosa è accaduto a prescindere. Il valore della
        stratificazione non è solo che uno scivolone è colto dalla linea
        successiva. È che un revisore può testare ogni strato per sé e sapere di
        cosa ciascuno è responsabile. Una sicurezza che non puoi testare a pezzi è
        una sicurezza a cui ti affidi per fede.
      </p>

      <h2>La catena di fornitura è revisionata onestamente</h2>
      <p>
        La maggior parte di qualsiasi piattaforma moderna è codice scritto da
        qualcun altro. Tracciamo le nostre dipendenze per gli avvisi noti e
        separiamo due casi chiaramente, perché non sono uguali. Una vulnerabilità
        in una libreria che gira in produzione è trattata come un problema vivo e
        corretta. Una vulnerabilità che esiste solo negli strumenti di build-time,
        e non raggiunge mai il software che un cliente esegue, è registrata e
        pianificata, non agghindata come un rischio di produzione. Distinguere
        questi due onestamente è di per sé parte della disciplina. Così come il
        rifiuto di contare uno scan di produzione pulito come un lavoro finito.
      </p>

      <h2>Cosa ti mettiamo in mano</h2>
      <p>
        Il risultato di tutto questo non è una riga di marketing. Sono prove che
        un team di due-diligence può usare: una descrizione dei controlli e dove
        ciascuno è imposto, un registro della disciplina di revisione e con quale
        frequenza gira, e la garanzia che le proprietà sono state ri-testate
        contro il build corrente, non certificate una volta e lasciate derivare.
        Quando il tuo team di sicurezza chiede come sai che questo regge ancora,
        la risposta è un processo, con date, non una promessa.
      </p>

      <h2>Cosa una pratica non può fare da sola</h2>
      <p>
        Non ti diremo che una piattaforma è infrangibile; chiunque lo faccia
        vende il certificato, non la sicurezza. La revisione avversariale continua
        riduce la possibilità che un problema serio venga rilasciato e accorcia il
        tempo per coglierne uno che lo è. Non rimuove il tuo lato della linea.
        Provider di identità, confini di rete, a chi concedi accesso, come gestisci
        il tuo stesso ambiente: questi sono tuoi, e la piattaforma più forte non
        può mettere in sicurezza un deployment configurato per essere aperto. La
        sicurezza è condivisa, e un fornitore onesto su dove finisce la sua
        responsabilità è di solito quello che prende sul serio il resto.
      </p>
    </div>
  );
}
