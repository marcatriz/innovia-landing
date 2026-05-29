/**
 * Whitepaper: Resilience and security as operating properties.
 *
 * Argues that security and resilience are usually sold as documents (a pen
 * test PDF, an ISO certificate) but tested by regulators as behaviours. Maps
 * the platform's controls to the regimes that set the bar in Europe (DORA,
 * NIS2) and the standards underneath them (ISO 27001/22301, GDPR Art 32/33,
 * forward-looking AI Act and CRA), then walks through the properties we build
 * in: fail-closed, least privilege as a tested contract, tamper-evident audit,
 * rehearsed recovery, supply-chain hygiene, behaviour under load. Closes with
 * an evidence recap and an honest boundary.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete numbers over adjectives, all verified internally.
 *  - Honest framing: we map controls to standards, we do NOT claim company
 *    certification. Certification is a roadmap item; the controls are shipped.
 *  - DORA / NIS2 / GDPR / ISO / AI Act / CRA are EU or international and
 *    allowed in every locale. No RO acronyms (IFN, etc.) in non-RO locales.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function ResilienceAndSecurityAsProperties({ locale }: ContentProps) {
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
        Security and resilience are usually presented to a buyer as documents.
        A penetration test PDF, an ISO certificate, a line in a tender that
        says &quot;bank-grade.&quot; Those are necessary. They are not what a
        regulator tests when an operational resilience review actually happens.
        Two regimes now set the bar in Europe: the Digital Operational
        Resilience Act for financial entities, and the NIS2 Directive as the
        horizontal baseline for essential and important entities. Both ask the
        same hard question in different words. Can you show that your critical
        systems fail safely, recover on a clock you can defend, and leave
        evidence? A certificate asserts a state at a point in time. What
        follows is the set of properties we build into the platform so that
        state holds the day someone asks for proof, and the map from each
        property to the obligation it answers.
      </p>

      <h2>Two regimes, and the standards underneath them</h2>
      <p>
        We are precise about our place in this. A lending operator is the
        regulated entity. We are the platform it runs on: an ICT third-party
        provider in DORA&apos;s language, a supplier in NIS2&apos;s. Our job is
        not to hold the operator&apos;s certificate for it. Our job is to be a
        component the operator can place inside its own framework without
        inheriting a problem. The landscape, and where we sit in it:
      </p>
      <ul>
        <li>
          <strong>DORA</strong> (in force since January 2025) asks financial
          entities for ICT risk management, incident classification and
          reporting, regular resilience testing, and control over third-party
          providers. We supply the testable controls, the audit evidence, and
          the measured recovery behaviour that feed those four pillars.
        </li>
        <li>
          <strong>NIS2</strong>, the horizontal baseline, requires
          risk-management measures, supply-chain security, and incident
          reporting on a tight clock: an early warning within twenty-four
          hours, a notification within seventy-two, a final report within a
          month. A platform that cannot tell you who did what and when makes
          those deadlines impossible. Ours is built so the answer is a query.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> and <strong>ISO/IEC 22301</strong> are
          the control vocabularies for information security management and
          business continuity. Our practices map to both: access control,
          change management, backup and restore, supplier risk.
        </li>
        <li>
          <strong>GDPR</strong> Article 32 (security of processing) and Article
          33 (breach notification within seventy-two hours) sit underneath all
          of it. Tenant isolation and a tamper-evident trail are what make a
          breach assessment a bounded exercise rather than an open-ended one.
        </li>
        <li>
          Two more are coming, and we build toward them rather than away from
          them: the <strong>EU AI Act</strong>, under which creditworthiness
          scoring is a high-risk use that demands logging, human oversight, and
          traceability, and the <strong>Cyber Resilience Act</strong>, which
          sets security obligations for software products across their
          lifecycle.
        </li>
      </ul>
      <p>
        We do not claim a wall of certification badges. We claim something
        narrower and, we think, more useful: platform-level controls that are
        shipped, tested, and mapped to these regimes today, so the
        operator&apos;s certification work starts from evidence rather than
        from a blank page.
      </p>

      <h2>Fail closed, not fail open</h2>
      <p>
        <em>What it answers: DORA ICT risk management, NIS2 Article 21.</em>{' '}
        When the tenant context is missing from a request, the pipeline rejects
        it. When a notification has no tenant group, it is not broadcast. When
        an authorization policy cannot resolve a role, the answer is 403, not
        200. A <code>TenantId</code> column sits on every business table,
        populated on write and filtered on read, and a request that arrives
        without a resolved tenant context dies at the door. Failing closed is a
        design stance: the cheap failure, a legitimate request occasionally
        refused, is always preferable to the expensive one, a request served
        that should not have been. Most of the leaks we have found in our own
        code were the absence of a filter, not the presence of a bug. A system
        that fails open turns every missing filter into a breach. A system that
        fails closed turns it into a support ticket.
      </p>

      <h2>Least privilege as a tested contract</h2>
      <p>
        <em>What it answers: ISO 27001 access control, NIS2 Article 21.</em>{' '}
        A back-office authorization policy sits on roughly eighty-six
        controllers that handle origination, billing, contracts, and
        administration. A client or dealer role calling those surfaces receives
        a 403, not a 200. This closed a real privilege-escalation gap: surfaces
        that once answered any authenticated caller now answer only the roles
        that should reach them. The point is not that the policy exists. The
        point is that it is asserted by tests that fail the build if a
        controller is added without it, and by twenty-one architecture rules
        that fail the build if a layer reaches across a boundary it should not.
        A rule that is not tested is a rule that drifts.
      </p>

      <h2>A tamper-evident trail</h2>
      <p>
        <em>
          What it answers: DORA incident evidence, the NIS2 reporting clock,
          GDPR Article 33.
        </em>{' '}
        Every state change writes an audit row scoped to the tenant that made
        it. The trail is not a log file someone can rotate away. It is
        queryable, tenant-isolated, and it survived a load test that wrote
        thirty-two thousand audit rows under sustained traffic with zero
        cross-tenant leakage. When a regulator, an internal auditor, or a NIS2
        incident report asks who changed a contract and when, the answer is a
        query, not an investigation. This is the single control that turns a
        seventy-two-hour reporting deadline from a panic into a procedure.
      </p>

      <h2>Recovery is rehearsed, not assumed</h2>
      <p>
        <em>What it answers: DORA resilience testing and recovery time, ISO 22301.</em>{' '}
        Resilience is the half of the word that certificates rarely cover. We
        operate one database per deployment with per-tenant point-in-time
        restore, so a single tenant can be rolled back without touching its
        neighbours. Backups run on a schedule, not on memory. The recovery path
        is exercised, because a backup that has never been restored is a hope,
        not a control. DORA asks for a recovery time you can defend. ISO 22301
        asks you to have exercised it. The only honest way to have a number is
        to have measured it.
      </p>

      <h2>The supply chain is part of the surface</h2>
      <p>
        <em>What it answers: NIS2 supply-chain security, DORA third-party risk, the Cyber Resilience Act.</em>{' '}
        A lending platform is mostly other people&apos;s code. We treat the
        dependency tree as part of the attack surface: secret scanning and push
        protection on both source repositories so a credential cannot be
        committed, dependency alerts that turn a disclosed vulnerability into a
        tracked task, and a continuous integration pipeline that runs type
        checks and the full test suite, around eleven hundred tests, before
        code can merge. When a vulnerability was disclosed in a mail library we
        depend on, the fix shipped as a version bump with a test, not as a memo
        for later. NIS2 makes your suppliers&apos; hygiene your problem. We
        treat our dependency tree as part of our attack surface so that it does
        not become yours.
      </p>

      <h2>Behaviour under load is a security property</h2>
      <p>
        <em>What it answers: DORA resilience testing.</em>{' '}
        A platform that falls over under traffic is not secure, it is merely
        closed for business at the worst possible moment. We load tested the
        platform at two hundred concurrent users for an hour: two hundred and
        twenty-six thousand requests, zero percent failures, and the audit and
        isolation properties above held for every one of them. Resilience is
        not a separate workstream from security. The same fail-closed pipeline
        that refuses a leak also refuses to corrupt state when the system is
        saturated.
      </p>

      <h2>The evidence we hand you</h2>
      <p>
        When an operator&apos;s risk team sits down to its DORA or NIS2 file,
        the questions are concrete, and so are our answers. How is tenant data
        isolated, and is it tested? A <code>TenantId</code> boundary verified by
        an isolation suite of twenty-five to thirty integration tests that has
        caught three real leaks before they shipped. Who can reach privileged
        surfaces? A back-office policy on roughly eighty-six controllers,
        enforced by the build. Can you reconstruct an incident? A tenant-scoped
        audit trail that held through two hundred and twenty-six thousand
        requests. What is your recovery time, and have you tested it? Per-tenant
        point-in-time restore, exercised, not assumed. How do you manage
        supplier risk? Secret scanning, push protection, dependency alerts, and
        a test gate of around eleven hundred tests on every merge. None of these
        is a slogan. Each is a number or a test an auditor can re-run.
      </p>

      <h2>What a platform cannot do alone</h2>
      <p>
        We are deliberate about the boundary. A platform can fail closed,
        enforce least privilege, keep an audit trail, and rehearse recovery. It
        cannot write an operator&apos;s incident response plan, classify an
        incident under DORA, run their access reviews, or choose their recovery
        time objective. Those are the operator&apos;s to own. What we can do is
        make the platform a component an operator can place inside a resilience
        framework without having to apologise for it. That is the standard we
        hold: not that we are secure in the abstract, but that we are a
        defensible building block inside someone else&apos;s regulated process.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Securitatea și reziliența îi sunt prezentate cumpărătorului, de regulă,
        ca documente. Un PDF de penetration test, un certificat ISO, un rând
        într-o licitație care zice &quot;bank-grade.&quot; Sunt necesare. Nu
        sunt însă ceea ce testează un regulator când are loc efectiv o evaluare
        de reziliență operațională. Două regimuri stabilesc acum ștacheta în
        Europa: Digital Operational Resilience Act pentru entitățile financiare,
        și Directiva NIS2 ca bază orizontală pentru entitățile esențiale și
        importante. Ambele pun aceeași întrebare grea în cuvinte diferite. Poți
        arăta că sistemele tale critice eșuează în siguranță, se recuperează pe
        un ceas pe care îl poți apăra și lasă dovezi? Un certificat afirmă o
        stare la un moment dat. Ce urmează este setul de proprietăți pe care le
        construim în platformă ca acea stare să reziste în ziua în care cineva
        cere dovada, și harta de la fiecare proprietate la obligația pe care o
        acoperă.
      </p>

      <h2>Două regimuri și standardele de sub ele</h2>
      <p>
        Suntem preciși în privința locului nostru aici. Un operator de lending
        este entitatea reglementată. Noi suntem platforma pe care el rulează: un
        furnizor terț de ICT în limbajul DORA, un furnizor în cel al NIS2. Treaba
        noastră nu e să ținem certificatul operatorului în locul lui. Treaba
        noastră e să fim o componentă pe care operatorul o poate pune în propriul
        cadru fără să moștenească o problemă. Peisajul, și unde stăm în el:
      </p>
      <ul>
        <li>
          <strong>DORA</strong> (în vigoare din ianuarie 2025) cere entităților
          financiare management de risc ICT, clasificarea și raportarea
          incidentelor, testare regulată de reziliență și control asupra
          furnizorilor terți. Noi furnizăm controalele testabile, dovada de
          audit și comportamentul de recuperare măsurat care alimentează acești
          patru piloni.
        </li>
        <li>
          <strong>NIS2</strong>, baza orizontală, cere măsuri de management al
          riscului, securitatea lanțului de aprovizionare și raportarea
          incidentelor pe un ceas strâns: o avertizare timpurie în douăzeci și
          patru de ore, o notificare în șaptezeci și două, un raport final într-o
          lună. O platformă care nu îți poate spune cine ce a făcut și când face
          acele termene imposibile. A noastră e construită ca răspunsul să fie o
          interogare.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> și <strong>ISO/IEC 22301</strong> sunt
          vocabularele de control pentru managementul securității informației și
          continuitatea afacerii. Practicile noastre se mapează pe amândouă:
          control de acces, managementul schimbării, backup și restore, risc de
          furnizor.
        </li>
        <li>
          <strong>GDPR</strong> Articolul 32 (securitatea prelucrării) și
          Articolul 33 (notificarea breșei în șaptezeci și două de ore) stau sub
          toate. Izolarea pe tenant și un traseu rezistent la falsificare sunt
          ceea ce face dintr-o evaluare de breșă un exercițiu mărginit, nu unul
          deschis la nesfârșit.
        </li>
        <li>
          Încă două vin, și construim spre ele, nu dinspre ele: <strong>EU AI
          Act</strong>, sub care scorarea de bonitate este o utilizare cu risc
          ridicat ce cere logare, supraveghere umană și trasabilitate, și{' '}
          <strong>Cyber Resilience Act</strong>, care stabilește obligații de
          securitate pentru produsele software pe tot ciclul lor de viață.
        </li>
      </ul>
      <p>
        Nu pretindem un zid de insigne de certificare. Pretindem ceva mai îngust
        și, credem, mai util: controale la nivel de platformă care sunt livrate,
        testate și mapate pe aceste regimuri azi, astfel încât munca de
        certificare a operatorului să pornească din dovezi, nu de la o pagină
        albă.
      </p>

      <h2>Eșuează închis, nu eșuează deschis</h2>
      <p>
        <em>Ce acoperă: managementul de risc ICT din DORA, Articolul 21 NIS2.</em>{' '}
        Când contextul de tenant lipsește dintr-un request, pipeline-ul îl
        respinge. Când o notificare nu are grup de tenant, nu este difuzată.
        Când o politică de autorizare nu poate rezolva un rol, răspunsul e 403,
        nu 200. O coloană <code>TenantId</code> stă pe fiecare tabel de business,
        populată la scriere și filtrată la citire, iar un request care sosește
        fără context de tenant rezolvat moare la ușă. A eșua închis e o poziție
        de design: eșecul ieftin, un request legitim refuzat ocazional, e mereu
        preferabil celui scump, un request servit care nu ar fi trebuit.
        Majoritatea scurgerilor pe care le-am găsit în propriul cod au fost
        absența unui filtru, nu prezența unui bug. Un sistem care eșuează deschis
        transformă fiecare filtru lipsă într-o breșă. Un sistem care eșuează
        închis îl transformă într-un tichet de suport.
      </p>

      <h2>Privilegiu minim ca un contract testat</h2>
      <p>
        <em>Ce acoperă: controlul de acces ISO 27001, Articolul 21 NIS2.</em>{' '}
        O politică de autorizare back-office stă pe aproximativ optzeci și șase
        de controllere care gestionează originarea, facturarea, contractele și
        administrarea. Un rol de client sau dealer care apelează acele suprafețe
        primește 403, nu 200. Asta a închis o breșă reală de escaladare de
        privilegii: suprafețe care odată răspundeau oricărui apelant autentificat
        răspund acum doar rolurilor care ar trebui să le atingă. Ideea nu e că
        politica există. Ideea e că este afirmată de teste care pică build-ul
        dacă se adaugă un controller fără ea, și de douăzeci și una de reguli de
        arhitectură care pică build-ul dacă un strat traversează o graniță pe
        care nu ar trebui. O regulă care nu e testată e o regulă care derivează.
      </p>

      <h2>Un traseu rezistent la falsificare</h2>
      <p>
        <em>
          Ce acoperă: dovada de incident DORA, ceasul de raportare NIS2,
          Articolul 33 GDPR.
        </em>{' '}
        Fiecare schimbare de stare scrie un rând de audit scopat pe tenantul
        care a făcut-o. Traseul nu e un fișier de log pe care cineva îl poate
        roti și șterge. Este interogabil, izolat pe tenant, și a supraviețuit
        unui load test care a scris treizeci și două de mii de rânduri de audit
        sub trafic susținut, cu zero scurgeri cross-tenant. Când un regulator, un
        auditor intern sau un raport de incident NIS2 întreabă cine a schimbat un
        contract și când, răspunsul e o interogare, nu o investigație. Ăsta e
        singurul control care transformă un termen de raportare de șaptezeci și
        două de ore dintr-o panică într-o procedură.
      </p>

      <h2>Recuperarea e repetată, nu presupusă</h2>
      <p>
        <em>Ce acoperă: testarea de reziliență și timpul de recuperare DORA, ISO 22301.</em>{' '}
        Reziliența e jumătatea cuvântului pe care certificatele rar o acoperă.
        Operăm o singură bază de date per deployment, cu restore point-in-time
        per tenant, astfel încât un singur tenant poate fi readus în urmă fără să
        atingem vecinii. Backup-urile rulează pe un program, nu din memorie. Calea
        de recuperare e exersată, fiindcă un backup care nu a fost niciodată
        restaurat e o speranță, nu un control. DORA cere un timp de recuperare pe
        care să îl poți apăra. ISO 22301 cere să îl fi exersat. Singurul mod onest
        de a avea un număr e să îl fi măsurat.
      </p>

      <h2>Lanțul de aprovizionare e parte din suprafață</h2>
      <p>
        <em>Ce acoperă: securitatea lanțului de aprovizionare NIS2, riscul de terț DORA, Cyber Resilience Act.</em>{' '}
        O platformă de lending e în mare parte codul altora. Tratăm arborele de
        dependențe ca parte din suprafața de atac: secret scanning și push
        protection pe ambele repozitoare sursă ca o credențială să nu poată fi
        comisă, alerte de dependențe care transformă o vulnerabilitate divulgată
        într-o sarcină urmărită, și un pipeline de integrare continuă care rulează
        verificări de tip și suita completă de teste, în jur de o mie o sută de
        teste, înainte ca un cod să poată fi unit. Când a fost divulgată o
        vulnerabilitate într-o bibliotecă de mail de care depindem, fix-ul a fost
        livrat ca un version bump cu un test, nu ca un memo pentru mai târziu.
        NIS2 face din igiena furnizorilor tăi problema ta. Noi tratăm arborele
        nostru de dependențe ca parte din suprafața noastră de atac, ca să nu
        devină a ta.
      </p>

      <h2>Comportamentul sub sarcină e o proprietate de securitate</h2>
      <p>
        <em>Ce acoperă: testarea de reziliență DORA.</em>{' '}
        O platformă care cade sub trafic nu e sigură, e doar închisă pentru
        afaceri în cel mai prost moment cu putință. Am făcut load test pe
        platformă la două sute de utilizatori concurenți timp de o oră: două sute
        douăzeci și șase de mii de request-uri, zero la sută eșecuri, iar
        proprietățile de audit și izolare de mai sus au rezistat pentru fiecare
        dintre ele. Reziliența nu e un flux de lucru separat de securitate.
        Același pipeline care eșuează închis și refuză o scurgere refuză și să
        corupă starea când sistemul e saturat.
      </p>

      <h2>Dovezile pe care ți le punem în mână</h2>
      <p>
        Când echipa de risc a unui operator se așază la dosarul ei de DORA sau
        NIS2, întrebările sunt concrete, și la fel sunt și răspunsurile noastre.
        Cum sunt izolate datele pe tenant, și e testat? O graniță{' '}
        <code>TenantId</code> verificată de o suită de izolare de douăzeci și
        cinci până la treizeci de teste de integrare care a prins trei scurgeri
        reale înainte să iasă. Cine poate atinge suprafețele privilegiate? O
        politică back-office pe aproximativ optzeci și șase de controllere,
        impusă de build. Poți reconstrui un incident? Un traseu de audit scopat
        pe tenant care a rezistat prin două sute douăzeci și șase de mii de
        request-uri. Care e timpul tău de recuperare, și l-ai testat? Restore
        point-in-time per tenant, exersat, nu presupus. Cum gestionezi riscul de
        furnizor? Secret scanning, push protection, alerte de dependențe, și o
        poartă de teste de aproximativ o mie o sută de teste la fiecare merge.
        Niciuna nu e un slogan. Fiecare e un număr sau un test pe care un auditor
        îl poate rerula.
      </p>

      <h2>Ce nu poate face o platformă singură</h2>
      <p>
        Suntem deliberați în privința graniței. O platformă poate eșua închis,
        poate impune privilegiu minim, poate ține un traseu de audit și poate
        repeta recuperarea. Nu poate scrie planul de răspuns la incidente al unui
        operator, nu poate clasifica un incident sub DORA, nu îi poate rula
        review-urile de acces și nu îi poate alege obiectivul de timp de
        recuperare. Acelea sunt ale operatorului. Ce putem face e să facem
        platforma o componentă pe care un operator o poate pune într-un cadru de
        reziliență fără să fie nevoit să își ceară scuze pentru ea. Ăsta e
        standardul pe care îl ținem: nu că suntem siguri în abstract, ci că suntem
        un element de construcție defensabil în interiorul procesului reglementat
        al altcuiva.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Sicherheit und Resilienz werden einem Käufer meist als Dokumente
        präsentiert. Ein Penetration-Test-PDF, ein ISO-Zertifikat, eine Zeile in
        einer Ausschreibung, die &quot;bankentauglich&quot; sagt. Diese sind
        notwendig. Sie sind nicht das, was ein Regulator prüft, wenn tatsächlich
        eine Überprüfung der operativen Resilienz stattfindet. Zwei Regime setzen
        in Europa nun die Messlatte: der Digital Operational Resilience Act für
        Finanzeinheiten und die NIS2-Richtlinie als horizontale Grundlinie für
        wesentliche und wichtige Einrichtungen. Beide stellen dieselbe harte
        Frage in anderen Worten. Können Sie zeigen, dass Ihre kritischen Systeme
        sicher scheitern, auf einer verteidigbaren Uhr wiederherstellen und
        Belege hinterlassen? Ein Zertifikat behauptet einen Zustand zu einem
        Zeitpunkt. Was folgt, ist der Satz an Eigenschaften, die wir in die
        Plattform bauen, damit dieser Zustand an dem Tag hält, an dem jemand nach
        Beweisen fragt, und die Zuordnung jeder Eigenschaft zu der Pflicht, die
        sie erfüllt.
      </p>

      <h2>Zwei Regime und die Standards darunter</h2>
      <p>
        Wir sind präzise bei unserem Platz darin. Ein Lending-Betreiber ist die
        regulierte Einheit. Wir sind die Plattform, auf der er läuft: ein
        IKT-Drittanbieter in der Sprache von DORA, ein Lieferant in der von NIS2.
        Unsere Aufgabe ist nicht, das Zertifikat des Betreibers für ihn zu
        halten. Unsere Aufgabe ist, eine Komponente zu sein, die der Betreiber in
        seinen eigenen Rahmen stellen kann, ohne ein Problem zu erben. Die
        Landschaft und wo wir darin sitzen:
      </p>
      <ul>
        <li>
          <strong>DORA</strong> (seit Januar 2025 in Kraft) verlangt von
          Finanzeinheiten IKT-Risikomanagement, Vorfallklassifizierung und
          -meldung, regelmäßige Resilienztests und Kontrolle über Drittanbieter.
          Wir liefern die testbaren Kontrollen, die Audit-Belege und das
          gemessene Wiederherstellungsverhalten, die diese vier Säulen speisen.
        </li>
        <li>
          <strong>NIS2</strong>, die horizontale Grundlinie, verlangt
          Risikomanagement-Maßnahmen, Lieferkettensicherheit und
          Vorfallmeldung auf enger Uhr: eine Frühwarnung binnen vierundzwanzig
          Stunden, eine Meldung binnen zweiundsiebzig, ein Abschlussbericht
          binnen eines Monats. Eine Plattform, die nicht sagen kann, wer was wann
          getan hat, macht diese Fristen unmöglich. Unsere ist so gebaut, dass
          die Antwort eine Abfrage ist.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> und <strong>ISO/IEC 22301</strong> sind
          die Kontrollvokabulare für Informationssicherheitsmanagement und
          Geschäftskontinuität. Unsere Praktiken bilden beide ab:
          Zugriffskontrolle, Änderungsmanagement, Backup und Restore,
          Lieferantenrisiko.
        </li>
        <li>
          <strong>GDPR</strong> Artikel 32 (Sicherheit der Verarbeitung) und
          Artikel 33 (Meldung einer Verletzung binnen zweiundsiebzig Stunden)
          liegen unter allem. Tenant-Isolation und eine manipulationssichere
          Spur sind das, was eine Verletzungsbewertung zu einer begrenzten Übung
          statt zu einer offenen macht.
        </li>
        <li>
          Zwei weitere kommen, und wir bauen darauf zu, nicht davon weg: der{' '}
          <strong>EU AI Act</strong>, unter dem Bonitätsbewertung eine
          Hochrisiko-Nutzung ist, die Protokollierung, menschliche Aufsicht und
          Nachvollziehbarkeit verlangt, und der{' '}
          <strong>Cyber Resilience Act</strong>, der Sicherheitspflichten für
          Softwareprodukte über ihren Lebenszyklus festlegt.
        </li>
      </ul>
      <p>
        Wir behaupten keine Wand aus Zertifizierungsabzeichen. Wir behaupten
        etwas Schmaleres und, wie wir meinen, Nützlicheres:
        Plattform-Kontrollen, die heute ausgeliefert, getestet und auf diese
        Regime abgebildet sind, sodass die Zertifizierungsarbeit des Betreibers
        von Belegen statt von einem leeren Blatt ausgeht.
      </p>

      <h2>Geschlossen scheitern, nicht offen scheitern</h2>
      <p>
        <em>Was sie erfüllt: DORA IKT-Risikomanagement, NIS2 Artikel 21.</em>{' '}
        Wenn der Tenant-Kontext in einer Anfrage fehlt, weist die Pipeline sie
        ab. Wenn eine Benachrichtigung keine Tenant-Gruppe hat, wird sie nicht
        gesendet. Wenn eine Autorisierungs-Policy keine Rolle auflösen kann,
        lautet die Antwort 403, nicht 200. Eine <code>TenantId</code>-Spalte
        sitzt auf jeder Geschäftstabelle, beim Schreiben befüllt und beim Lesen
        gefiltert, und eine Anfrage, die ohne aufgelösten Tenant-Kontext
        ankommt, stirbt an der Tür. Geschlossen zu scheitern ist eine
        Design-Haltung: das billige Scheitern, eine legitime Anfrage
        gelegentlich abgelehnt, ist immer dem teuren vorzuziehen, eine
        ausgelieferte Anfrage, die es nicht hätte sein dürfen. Die meisten Leaks,
        die wir in unserem eigenen Code gefunden haben, waren das Fehlen eines
        Filters, nicht das Vorhandensein eines Bugs. Ein System, das offen
        scheitert, macht aus jedem fehlenden Filter eine
        Sicherheitsverletzung. Ein System, das geschlossen scheitert, macht
        daraus ein Support-Ticket.
      </p>

      <h2>Geringstes Privileg als getesteter Kontrakt</h2>
      <p>
        <em>Was sie erfüllt: ISO 27001 Zugriffskontrolle, NIS2 Artikel 21.</em>{' '}
        Eine Back-Office-Autorisierungs-Policy sitzt auf etwa sechsundachtzig
        Controllern, die Origination, Abrechnung, Verträge und Administration
        behandeln. Eine Client- oder Händlerrolle, die diese Oberflächen
        aufruft, erhält 403, nicht 200. Das schloss eine echte
        Privilege-Escalation-Lücke: Oberflächen, die einst jedem
        authentifizierten Aufrufer antworteten, antworten nun nur den Rollen, die
        sie erreichen sollten. Der Punkt ist nicht, dass die Policy existiert.
        Der Punkt ist, dass sie durch Tests behauptet wird, die den Build
        scheitern lassen, wenn ein Controller ohne sie hinzugefügt wird, und
        durch einundzwanzig Architekturregeln, die den Build scheitern lassen,
        wenn eine Schicht über eine Grenze greift, die sie nicht sollte. Eine
        Regel, die nicht getestet wird, ist eine Regel, die abdriftet.
      </p>

      <h2>Eine manipulationssichere Spur</h2>
      <p>
        <em>
          Was sie erfüllt: DORA-Vorfallbeleg, die NIS2-Meldeuhr, GDPR Artikel 33.
        </em>{' '}
        Jede Zustandsänderung schreibt eine Audit-Zeile, die auf den Tenant
        begrenzt ist, der sie ausgelöst hat. Die Spur ist keine Logdatei, die
        jemand wegrotieren kann. Sie ist abfragbar, tenant-isoliert, und sie
        überlebte einen Lasttest, der unter anhaltendem Verkehr
        zweiunddreißigtausend Audit-Zeilen schrieb, mit null
        Cross-Tenant-Leakage. Wenn ein Regulator, ein interner Prüfer oder ein
        NIS2-Vorfallbericht fragt, wer einen Vertrag wann geändert hat, ist die
        Antwort eine Abfrage, keine Untersuchung. Das ist die einzelne Kontrolle,
        die eine Meldefrist von zweiundsiebzig Stunden von einer Panik in ein
        Verfahren verwandelt.
      </p>

      <h2>Wiederherstellung wird geprobt, nicht angenommen</h2>
      <p>
        <em>Was sie erfüllt: DORA-Resilienztests und Wiederherstellungszeit, ISO 22301.</em>{' '}
        Resilienz ist die Worthälfte, die Zertifikate selten abdecken. Wir
        betreiben eine Datenbank pro Deployment mit tenantweisem
        Point-in-Time-Restore, sodass ein einzelner Tenant zurückgerollt werden
        kann, ohne seine Nachbarn zu berühren. Backups laufen nach einem
        Zeitplan, nicht aus dem Gedächtnis. Der Wiederherstellungspfad wird
        geübt, denn ein Backup, das nie wiederhergestellt wurde, ist eine
        Hoffnung, kein Kontrollmittel. DORA fragt nach einer
        Wiederherstellungszeit, die man verteidigen kann. ISO 22301 verlangt,
        dass man sie geübt hat. Der einzige ehrliche Weg, eine Zahl zu haben,
        ist, sie gemessen zu haben.
      </p>

      <h2>Die Lieferkette ist Teil der Oberfläche</h2>
      <p>
        <em>Was sie erfüllt: NIS2-Lieferkettensicherheit, DORA-Drittanbieterrisiko, der Cyber Resilience Act.</em>{' '}
        Eine Lending-Plattform ist größtenteils der Code anderer Leute. Wir
        behandeln den Abhängigkeitsbaum als Teil der Angriffsoberfläche: Secret
        Scanning und Push Protection auf beiden Quell-Repositories, damit ein
        Anmeldedatum nicht committet werden kann, Abhängigkeitswarnungen, die
        eine offengelegte Schwachstelle in eine verfolgte Aufgabe verwandeln, und
        eine Continuous-Integration-Pipeline, die Typprüfungen und die volle
        Testsuite ausführt, rund elfhundert Tests, bevor Code gemergt werden
        kann. Als eine Schwachstelle in einer Mail-Bibliothek offengelegt wurde,
        von der wir abhängen, wurde der Fix als Versionssprung mit einem Test
        ausgeliefert, nicht als Memo für später. NIS2 macht die Hygiene Ihrer
        Lieferanten zu Ihrem Problem. Wir behandeln unseren Abhängigkeitsbaum als
        Teil unserer Angriffsoberfläche, damit er nicht zu Ihrem wird.
      </p>

      <h2>Verhalten unter Last ist eine Sicherheitseigenschaft</h2>
      <p>
        <em>Was sie erfüllt: DORA-Resilienztests.</em>{' '}
        Eine Plattform, die unter Verkehr umkippt, ist nicht sicher, sie ist
        lediglich im schlechtestmöglichen Moment geschlossen. Wir haben die
        Plattform mit zweihundert gleichzeitigen Benutzern eine Stunde lang
        getestet: zweihundertsechsundzwanzigtausend Anfragen, null Prozent
        Fehler, und die obigen Audit- und Isolationseigenschaften hielten für
        jede einzelne davon. Resilienz ist kein von der Sicherheit getrennter
        Arbeitsstrang. Dieselbe geschlossen scheiternde Pipeline, die ein Leak
        verweigert, verweigert auch, den Zustand zu beschädigen, wenn das System
        gesättigt ist.
      </p>

      <h2>Die Belege, die wir Ihnen in die Hand geben</h2>
      <p>
        Wenn sich das Risikoteam eines Betreibers an seine DORA- oder
        NIS2-Akte setzt, sind die Fragen konkret, und so sind unsere Antworten.
        Wie sind Tenant-Daten isoliert, und ist es getestet? Eine{' '}
        <code>TenantId</code>-Grenze, verifiziert durch eine Isolationssuite von
        fünfundzwanzig bis dreißig Integrationstests, die drei echte Leaks
        abgefangen hat, bevor sie ausgeliefert wurden. Wer kann privilegierte
        Oberflächen erreichen? Eine Back-Office-Policy auf etwa sechsundachtzig
        Controllern, durch den Build durchgesetzt. Können Sie einen Vorfall
        rekonstruieren? Eine tenant-begrenzte Audit-Spur, die durch
        zweihundertsechsundzwanzigtausend Anfragen hielt. Wie hoch ist Ihre
        Wiederherstellungszeit, und haben Sie sie getestet? Tenantweises
        Point-in-Time-Restore, geübt, nicht angenommen. Wie managen Sie
        Lieferantenrisiko? Secret Scanning, Push Protection,
        Abhängigkeitswarnungen und ein Test-Gate von rund elfhundert Tests bei
        jedem Merge. Nichts davon ist ein Slogan. Jedes ist eine Zahl oder ein
        Test, den ein Prüfer erneut ausführen kann.
      </p>

      <h2>Was eine Plattform nicht allein tun kann</h2>
      <p>
        Wir sind bewusst bei der Grenze. Eine Plattform kann geschlossen
        scheitern, geringstes Privileg durchsetzen, eine Audit-Spur halten und
        Wiederherstellung proben. Sie kann nicht den Incident-Response-Plan eines
        Betreibers schreiben, einen Vorfall unter DORA klassifizieren, seine
        Zugriffsüberprüfungen durchführen oder sein Recovery-Time-Objective
        wählen. Diese gehören dem Betreiber. Was wir tun können, ist, die
        Plattform zu einer Komponente zu machen, die ein Betreiber in einen
        Resilienzrahmen stellen kann, ohne sich für sie entschuldigen zu müssen.
        Das ist der Standard, den wir halten: nicht, dass wir abstrakt sicher
        sind, sondern dass wir ein verteidigbarer Baustein innerhalb des
        regulierten Prozesses eines anderen sind.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        La sécurité et la résilience sont en général présentées à un acheteur
        comme des documents. Un PDF de test d&apos;intrusion, un certificat ISO,
        une ligne dans un appel d&apos;offres qui dit &quot;de niveau
        bancaire.&quot; Ils sont nécessaires. Ils ne sont pas ce qu&apos;un
        régulateur teste quand une revue de résilience opérationnelle a
        réellement lieu. Deux régimes fixent désormais la barre en Europe : le
        Digital Operational Resilience Act pour les entités financières, et la
        directive NIS2 comme socle horizontal pour les entités essentielles et
        importantes. Les deux posent la même question difficile en mots
        différents. Pouvez-vous montrer que vos systèmes critiques échouent en
        sécurité, se rétablissent sur une horloge défendable, et laissent des
        preuves ? Un certificat affirme un état à un instant. Ce qui suit est
        l&apos;ensemble de propriétés que nous bâtissons dans la plateforme pour
        que cet état tienne le jour où quelqu&apos;un demande la preuve, et la
        correspondance de chaque propriété avec l&apos;obligation qu&apos;elle
        satisfait.
      </p>

      <h2>Deux régimes, et les standards en dessous</h2>
      <p>
        Nous sommes précis sur notre place là-dedans. Un opérateur de lending
        est l&apos;entité régulée. Nous sommes la plateforme sur laquelle il
        tourne : un prestataire tiers d&apos;informatique au sens de DORA, un
        fournisseur au sens de NIS2. Notre rôle n&apos;est pas de détenir le
        certificat de l&apos;opérateur à sa place. Notre rôle est d&apos;être un
        composant que l&apos;opérateur peut placer dans son propre cadre sans
        hériter d&apos;un problème. Le paysage, et où nous nous situons :
      </p>
      <ul>
        <li>
          <strong>DORA</strong> (en vigueur depuis janvier 2025) demande aux
          entités financières une gestion du risque informatique, la
          classification et la déclaration des incidents, des tests de résilience
          réguliers, et un contrôle des prestataires tiers. Nous fournissons les
          contrôles testables, les preuves d&apos;audit, et le comportement de
          récupération mesuré qui alimentent ces quatre piliers.
        </li>
        <li>
          <strong>NIS2</strong>, le socle horizontal, exige des mesures de
          gestion du risque, la sécurité de la chaîne d&apos;approvisionnement,
          et la déclaration d&apos;incident sur une horloge serrée : une alerte
          précoce sous vingt-quatre heures, une notification sous soixante-douze,
          un rapport final sous un mois. Une plateforme qui ne peut pas dire qui
          a fait quoi et quand rend ces délais impossibles. La nôtre est bâtie
          pour que la réponse soit une requête.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> et <strong>ISO/IEC 22301</strong> sont
          les vocabulaires de contrôle pour la gestion de la sécurité de
          l&apos;information et la continuité d&apos;activité. Nos pratiques
          correspondent aux deux : contrôle d&apos;accès, gestion du changement,
          sauvegarde et restauration, risque fournisseur.
        </li>
        <li>
          <strong>GDPR</strong> Article 32 (sécurité du traitement) et Article 33
          (notification de violation sous soixante-douze heures) sont sous tout
          le reste. L&apos;isolation par tenant et une piste infalsifiable sont
          ce qui fait d&apos;une évaluation de violation un exercice borné plutôt
          qu&apos;ouvert.
        </li>
        <li>
          Deux autres arrivent, et nous bâtissons vers eux plutôt que loin
          d&apos;eux : le <strong>EU AI Act</strong>, sous lequel le scoring de
          solvabilité est un usage à haut risque qui exige journalisation,
          supervision humaine et traçabilité, et le{' '}
          <strong>Cyber Resilience Act</strong>, qui fixe des obligations de
          sécurité pour les produits logiciels sur tout leur cycle de vie.
        </li>
      </ul>
      <p>
        Nous ne revendiquons pas un mur d&apos;écussons de certification. Nous
        revendiquons quelque chose de plus étroit et, nous le pensons, de plus
        utile : des contrôles au niveau plateforme qui sont livrés, testés et
        mis en correspondance avec ces régimes aujourd&apos;hui, de sorte que le
        travail de certification de l&apos;opérateur parte de preuves plutôt que
        d&apos;une page blanche.
      </p>

      <h2>Échouer fermé, pas échouer ouvert</h2>
      <p>
        <em>Ce qu&apos;elle satisfait : gestion du risque informatique DORA, NIS2 Article 21.</em>{' '}
        Quand le contexte tenant manque dans une requête, le pipeline la rejette.
        Quand une notification n&apos;a pas de groupe tenant, elle n&apos;est pas
        diffusée. Quand une politique d&apos;autorisation ne peut résoudre un
        rôle, la réponse est 403, pas 200. Une colonne <code>TenantId</code> est
        sur chaque table métier, remplie à l&apos;écriture et filtrée à la
        lecture, et une requête qui arrive sans contexte tenant résolu meurt à la
        porte. Échouer fermé est une posture de conception : l&apos;échec bon
        marché, une requête légitime occasionnellement refusée, est toujours
        préférable au coûteux, une requête servie qui n&apos;aurait pas dû
        l&apos;être. La plupart des fuites que nous avons trouvées dans notre
        propre code étaient l&apos;absence d&apos;un filtre, pas la présence
        d&apos;un bug. Un système qui échoue ouvert transforme chaque filtre
        manquant en brèche. Un système qui échoue fermé le transforme en ticket
        de support.
      </p>

      <h2>Moindre privilège comme contrat testé</h2>
      <p>
        <em>Ce qu&apos;elle satisfait : contrôle d&apos;accès ISO 27001, NIS2 Article 21.</em>{' '}
        Une politique d&apos;autorisation back-office repose sur environ
        quatre-vingt-six contrôleurs qui gèrent l&apos;origination, la
        facturation, les contrats et l&apos;administration. Un rôle client ou
        concessionnaire qui appelle ces surfaces reçoit un 403, pas un 200. Cela
        a fermé une vraie faille d&apos;élévation de privilèges : des surfaces qui
        répondaient autrefois à tout appelant authentifié ne répondent désormais
        qu&apos;aux rôles qui devraient les atteindre. Le point n&apos;est pas que
        la politique existe. Le point est qu&apos;elle est affirmée par des tests
        qui font échouer le build si un contrôleur est ajouté sans elle, et par
        vingt et une règles d&apos;architecture qui font échouer le build si une
        couche franchit une frontière qu&apos;elle ne devrait pas. Une règle qui
        n&apos;est pas testée est une règle qui dérive.
      </p>

      <h2>Une piste infalsifiable</h2>
      <p>
        <em>
          Ce qu&apos;elle satisfait : preuve d&apos;incident DORA, l&apos;horloge
          de déclaration NIS2, GDPR Article 33.
        </em>{' '}
        Chaque changement d&apos;état écrit une ligne d&apos;audit cantonnée au
        tenant qui l&apos;a effectué. La piste n&apos;est pas un fichier de log
        que quelqu&apos;un peut faire tourner et effacer. Elle est interrogeable,
        isolée par tenant, et elle a survécu à un test de charge qui a écrit
        trente-deux mille lignes d&apos;audit sous trafic soutenu, avec zéro fuite
        cross-tenant. Quand un régulateur, un auditeur interne ou un rapport
        d&apos;incident NIS2 demande qui a changé un contrat et quand, la réponse
        est une requête, pas une enquête. C&apos;est le seul contrôle qui
        transforme un délai de déclaration de soixante-douze heures d&apos;une
        panique en une procédure.
      </p>

      <h2>La récupération est répétée, pas supposée</h2>
      <p>
        <em>Ce qu&apos;elle satisfait : tests de résilience et temps de récupération DORA, ISO 22301.</em>{' '}
        La résilience est la moitié du mot que les certificats couvrent rarement.
        Nous opérons une base de données par déploiement avec restauration
        point-in-time par tenant, de sorte qu&apos;un seul tenant peut être
        ramené en arrière sans toucher ses voisins. Les sauvegardes tournent
        selon un calendrier, pas de mémoire. Le chemin de récupération est
        exercé, car une sauvegarde jamais restaurée est un espoir, pas un
        contrôle. DORA demande un temps de récupération que vous pouvez défendre.
        ISO 22301 demande que vous l&apos;ayez exercé. La seule manière honnête
        d&apos;avoir un chiffre est de l&apos;avoir mesuré.
      </p>

      <h2>La chaîne d&apos;approvisionnement fait partie de la surface</h2>
      <p>
        <em>Ce qu&apos;elle satisfait : sécurité de la chaîne d&apos;approvisionnement NIS2, risque tiers DORA, Cyber Resilience Act.</em>{' '}
        Une plateforme de lending est en grande partie le code des autres. Nous
        traitons l&apos;arbre de dépendances comme une partie de la surface
        d&apos;attaque : secret scanning et push protection sur les deux dépôts
        source pour qu&apos;un identifiant ne puisse pas être committé, alertes de
        dépendances qui transforment une vulnérabilité divulguée en tâche suivie,
        et un pipeline d&apos;intégration continue qui exécute les vérifications
        de type et la suite complète de tests, environ onze cents tests, avant
        qu&apos;un code puisse être fusionné. Quand une vulnérabilité a été
        divulguée dans une bibliothèque de mail dont nous dépendons, le correctif
        a été livré comme une montée de version avec un test, pas comme un mémo
        pour plus tard. NIS2 fait de l&apos;hygiène de vos fournisseurs votre
        problème. Nous traitons notre arbre de dépendances comme une partie de
        notre surface d&apos;attaque pour qu&apos;il ne devienne pas la vôtre.
      </p>

      <h2>Le comportement sous charge est une propriété de sécurité</h2>
      <p>
        <em>Ce qu&apos;elle satisfait : tests de résilience DORA.</em>{' '}
        Une plateforme qui s&apos;effondre sous le trafic n&apos;est pas sûre,
        elle est simplement fermée au pire moment possible. Nous avons testé la
        plateforme en charge à deux cents utilisateurs simultanés pendant une
        heure : deux cent vingt-six mille requêtes, zéro pour cent d&apos;échecs,
        et les propriétés d&apos;audit et d&apos;isolation ci-dessus ont tenu pour
        chacune d&apos;elles. La résilience n&apos;est pas un chantier séparé de
        la sécurité. Le même pipeline qui échoue fermé et refuse une fuite refuse
        aussi de corrompre l&apos;état quand le système est saturé.
      </p>

      <h2>Les preuves que nous vous remettons</h2>
      <p>
        Quand l&apos;équipe de risque d&apos;un opérateur s&apos;assoit à son
        dossier DORA ou NIS2, les questions sont concrètes, et nos réponses
        aussi. Comment les données tenant sont-elles isolées, et est-ce testé ?
        Une frontière <code>TenantId</code> vérifiée par une suite d&apos;isolation
        de vingt-cinq à trente tests d&apos;intégration qui a attrapé trois vraies
        fuites avant livraison. Qui peut atteindre les surfaces privilégiées ?
        Une politique back-office sur environ quatre-vingt-six contrôleurs,
        imposée par le build. Pouvez-vous reconstruire un incident ? Une piste
        d&apos;audit cantonnée par tenant qui a tenu à travers deux cent
        vingt-six mille requêtes. Quel est votre temps de récupération,
        l&apos;avez-vous testé ? Restauration point-in-time par tenant, exercée,
        pas supposée. Comment gérez-vous le risque fournisseur ? Secret scanning,
        push protection, alertes de dépendances, et une porte de tests
        d&apos;environ onze cents tests à chaque fusion. Rien de cela
        n&apos;est un slogan. Chacun est un chiffre ou un test qu&apos;un
        auditeur peut réexécuter.
      </p>

      <h2>Ce qu&apos;une plateforme ne peut pas faire seule</h2>
      <p>
        Nous sommes délibérés sur la frontière. Une plateforme peut échouer
        fermé, imposer le moindre privilège, tenir une piste d&apos;audit et
        répéter la récupération. Elle ne peut pas écrire le plan de réponse aux
        incidents d&apos;un opérateur, classifier un incident sous DORA, mener ses
        revues d&apos;accès, ni choisir son objectif de temps de récupération.
        Ceux-là appartiennent à l&apos;opérateur. Ce que nous pouvons faire,
        c&apos;est rendre la plateforme un composant qu&apos;un opérateur peut
        placer dans un cadre de résilience sans avoir à s&apos;en excuser.
        C&apos;est le standard que nous tenons : non pas que nous sommes sûrs dans
        l&apos;abstrait, mais que nous sommes un bloc défendable à
        l&apos;intérieur du processus régulé d&apos;un autre.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Sicurezza e resilienza vengono di solito presentate a un acquirente come
        documenti. Un PDF di penetration test, un certificato ISO, una riga in
        una gara che dice &quot;di livello bancario.&quot; Sono necessari. Non
        sono ciò che un regolatore verifica quando avviene davvero una revisione
        di resilienza operativa. Due regimi fissano ora l&apos;asticella in
        Europa: il Digital Operational Resilience Act per le entità finanziarie,
        e la direttiva NIS2 come base orizzontale per le entità essenziali e
        importanti. Entrambi pongono la stessa domanda difficile con parole
        diverse. Puoi mostrare che i tuoi sistemi critici falliscono in
        sicurezza, si ripristinano su un orologio che puoi difendere, e lasciano
        prove? Un certificato afferma uno stato in un dato momento. Ciò che segue
        è l&apos;insieme di proprietà che costruiamo nella piattaforma affinché
        quello stato regga il giorno in cui qualcuno chiede la prova, e la mappa
        da ogni proprietà all&apos;obbligo che soddisfa.
      </p>

      <h2>Due regimi, e gli standard sotto di essi</h2>
      <p>
        Siamo precisi sul nostro posto in questo. Un operatore di lending è
        l&apos;entità regolata. Noi siamo la piattaforma su cui gira: un fornitore
        terzo di servizi informatici nel linguaggio di DORA, un fornitore in
        quello di NIS2. Il nostro compito non è tenere il certificato
        dell&apos;operatore al posto suo. Il nostro compito è essere un componente
        che l&apos;operatore può collocare nel proprio quadro senza ereditare un
        problema. Il panorama, e dove ci collochiamo:
      </p>
      <ul>
        <li>
          <strong>DORA</strong> (in vigore da gennaio 2025) chiede alle entità
          finanziarie gestione del rischio informatico, classificazione e
          segnalazione degli incidenti, test di resilienza regolari, e controllo
          sui fornitori terzi. Noi forniamo i controlli testabili, le prove di
          audit, e il comportamento di ripristino misurato che alimentano questi
          quattro pilastri.
        </li>
        <li>
          <strong>NIS2</strong>, la base orizzontale, richiede misure di gestione
          del rischio, sicurezza della catena di fornitura, e segnalazione degli
          incidenti su un orologio stretto: un preallarme entro ventiquattro ore,
          una notifica entro settantadue, una relazione finale entro un mese. Una
          piattaforma che non sa dirti chi ha fatto cosa e quando rende quelle
          scadenze impossibili. La nostra è costruita perché la risposta sia una
          query.
        </li>
        <li>
          <strong>ISO/IEC 27001</strong> e <strong>ISO/IEC 22301</strong> sono i
          vocabolari di controllo per la gestione della sicurezza delle
          informazioni e la continuità operativa. Le nostre pratiche si mappano
          su entrambi: controllo degli accessi, gestione del cambiamento, backup
          e restore, rischio fornitore.
        </li>
        <li>
          <strong>GDPR</strong> Articolo 32 (sicurezza del trattamento) e Articolo
          33 (notifica di violazione entro settantadue ore) stanno sotto tutto.
          L&apos;isolamento per tenant e una traccia a prova di manomissione sono
          ciò che rende una valutazione di violazione un esercizio circoscritto
          anziché aperto.
        </li>
        <li>
          Altri due stanno arrivando, e costruiamo verso di essi anziché
          lontano: l&apos;<strong>EU AI Act</strong>, sotto cui lo scoring di
          merito creditizio è un uso ad alto rischio che richiede logging,
          supervisione umana e tracciabilità, e il{' '}
          <strong>Cyber Resilience Act</strong>, che fissa obblighi di sicurezza
          per i prodotti software lungo il loro ciclo di vita.
        </li>
      </ul>
      <p>
        Non rivendichiamo un muro di distintivi di certificazione. Rivendichiamo
        qualcosa di più stretto e, crediamo, più utile: controlli a livello di
        piattaforma che sono rilasciati, testati e mappati su questi regimi oggi,
        così che il lavoro di certificazione dell&apos;operatore parta da prove
        anziché da una pagina bianca.
      </p>

      <h2>Fallire chiuso, non fallire aperto</h2>
      <p>
        <em>Cosa soddisfa: gestione del rischio informatico DORA, NIS2 Articolo 21.</em>{' '}
        Quando manca il contesto tenant in una richiesta, la pipeline la rifiuta.
        Quando una notifica non ha un gruppo tenant, non viene trasmessa. Quando
        una policy di autorizzazione non riesce a risolvere un ruolo, la risposta
        è 403, non 200. Una colonna <code>TenantId</code> siede su ogni tabella
        di business, popolata in scrittura e filtrata in lettura, e una richiesta
        che arriva senza contesto tenant risolto muore alla porta. Fallire chiuso
        è una postura di progettazione: il fallimento economico, una richiesta
        legittima rifiutata occasionalmente, è sempre preferibile a quello
        costoso, una richiesta servita che non avrebbe dovuto esserlo. La maggior
        parte delle falle che abbiamo trovato nel nostro stesso codice era
        l&apos;assenza di un filtro, non la presenza di un bug. Un sistema che
        fallisce aperto trasforma ogni filtro mancante in una violazione. Un
        sistema che fallisce chiuso lo trasforma in un ticket di supporto.
      </p>

      <h2>Privilegio minimo come contratto testato</h2>
      <p>
        <em>Cosa soddisfa: controllo degli accessi ISO 27001, NIS2 Articolo 21.</em>{' '}
        Una policy di autorizzazione back-office siede su circa ottantasei
        controller che gestiscono origination, fatturazione, contratti e
        amministrazione. Un ruolo cliente o concessionario che chiama quelle
        superfici riceve un 403, non un 200. Questo ha chiuso una vera falla di
        escalation di privilegi: superfici che un tempo rispondevano a qualsiasi
        chiamante autenticato ora rispondono solo ai ruoli che dovrebbero
        raggiungerle. Il punto non è che la policy esista. Il punto è che è
        affermata da test che fanno fallire la build se un controller viene
        aggiunto senza di essa, e da ventuno regole di architettura che fanno
        fallire la build se uno strato attraversa un confine che non dovrebbe.
        Una regola che non è testata è una regola che deriva.
      </p>

      <h2>Una traccia a prova di manomissione</h2>
      <p>
        <em>
          Cosa soddisfa: prova di incidente DORA, l&apos;orologio di segnalazione
          NIS2, GDPR Articolo 33.
        </em>{' '}
        Ogni cambio di stato scrive una riga di audit circoscritta al tenant che
        l&apos;ha effettuata. La traccia non è un file di log che qualcuno può
        ruotare via. È interrogabile, isolata per tenant, ed è sopravvissuta a un
        test di carico che ha scritto trentaduemila righe di audit sotto traffico
        sostenuto, con zero perdite cross-tenant. Quando un regolatore, un auditor
        interno o una segnalazione di incidente NIS2 chiede chi ha cambiato un
        contratto e quando, la risposta è una query, non un&apos;indagine. È
        l&apos;unico controllo che trasforma una scadenza di segnalazione di
        settantadue ore da un panico in una procedura.
      </p>

      <h2>Il ripristino è provato, non presunto</h2>
      <p>
        <em>Cosa soddisfa: test di resilienza e tempo di ripristino DORA, ISO 22301.</em>{' '}
        La resilienza è la metà della parola che i certificati raramente coprono.
        Operiamo un database per deployment con restore point-in-time per tenant,
        così un singolo tenant può essere riportato indietro senza toccare i
        vicini. I backup girano su un programma, non a memoria. Il percorso di
        ripristino è esercitato, perché un backup mai ripristinato è una
        speranza, non un controllo. DORA chiede un tempo di ripristino che puoi
        difendere. ISO 22301 chiede che tu lo abbia esercitato. L&apos;unico modo
        onesto di avere un numero è averlo misurato.
      </p>

      <h2>La catena di fornitura fa parte della superficie</h2>
      <p>
        <em>Cosa soddisfa: sicurezza della catena di fornitura NIS2, rischio terzo DORA, Cyber Resilience Act.</em>{' '}
        Una piattaforma di lending è in gran parte il codice di altri. Trattiamo
        l&apos;albero delle dipendenze come parte della superficie d&apos;attacco:
        secret scanning e push protection su entrambi i repository sorgente
        affinché una credenziale non possa essere committata, avvisi di
        dipendenza che trasformano una vulnerabilità divulgata in un compito
        tracciato, e una pipeline di integrazione continua che esegue i controlli
        di tipo e la suite completa di test, circa millecento test, prima che il
        codice possa essere unito. Quando è stata divulgata una vulnerabilità in
        una libreria di posta da cui dipendiamo, la correzione è stata rilasciata
        come un aumento di versione con un test, non come un promemoria per dopo.
        NIS2 rende l&apos;igiene dei tuoi fornitori un tuo problema. Noi trattiamo
        il nostro albero delle dipendenze come parte della nostra superficie
        d&apos;attacco affinché non diventi il tuo.
      </p>

      <h2>Il comportamento sotto carico è una proprietà di sicurezza</h2>
      <p>
        <em>Cosa soddisfa: test di resilienza DORA.</em>{' '}
        Una piattaforma che crolla sotto il traffico non è sicura, è solo chiusa
        per affari nel momento peggiore possibile. Abbiamo testato sotto carico la
        piattaforma con duecento utenti concorrenti per un&apos;ora:
        duecentoventiseimila richieste, zero percento di fallimenti, e le
        proprietà di audit e isolamento di cui sopra hanno retto per ognuna di
        esse. La resilienza non è un flusso di lavoro separato dalla sicurezza. La
        stessa pipeline che fallisce chiusa e rifiuta una perdita rifiuta anche di
        corrompere lo stato quando il sistema è saturo.
      </p>

      <h2>Le prove che ti mettiamo in mano</h2>
      <p>
        Quando il team di rischio di un operatore si siede al suo fascicolo DORA
        o NIS2, le domande sono concrete, e così le nostre risposte. Come sono
        isolati i dati per tenant, ed è testato? Un confine{' '}
        <code>TenantId</code> verificato da una suite di isolamento di venticinque
        a trenta test di integrazione che ha intercettato tre falle reali prima
        del rilascio. Chi può raggiungere le superfici privilegiate? Una policy
        back-office su circa ottantasei controller, imposta dalla build. Puoi
        ricostruire un incidente? Una traccia di audit circoscritta per tenant che
        ha retto attraverso duecentoventiseimila richieste. Qual è il tuo tempo di
        ripristino, e lo hai testato? Restore point-in-time per tenant,
        esercitato, non presunto. Come gestisci il rischio fornitore? Secret
        scanning, push protection, avvisi di dipendenza, e una porta di test di
        circa millecento test a ogni merge. Niente di questo è uno slogan.
        Ciascuno è un numero o un test che un auditor può rieseguire.
      </p>

      <h2>Cosa una piattaforma non può fare da sola</h2>
      <p>
        Siamo deliberati sul confine. Una piattaforma può fallire chiusa, imporre
        il privilegio minimo, tenere una traccia di audit e provare il ripristino.
        Non può scrivere il piano di risposta agli incidenti di un operatore,
        classificare un incidente sotto DORA, condurre le sue revisioni di
        accesso, né scegliere il suo obiettivo di tempo di ripristino. Quelli
        appartengono all&apos;operatore. Ciò che possiamo fare è rendere la
        piattaforma un componente che un operatore può collocare dentro un quadro
        di resilienza senza doversene scusare. Questo è lo standard che teniamo:
        non che siamo sicuri nell&apos;astratto, ma che siamo un blocco difendibile
        dentro il processo regolato di qualcun altro.
      </p>
    </div>
  );
}
