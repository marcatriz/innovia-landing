/**
 * Whitepaper: Single-obligor exposure as a property, not a report.
 *
 * Argues that a borrower's total exposure across every lending line should be
 * computed one way and enforced at decision time, which is only possible on a
 * single codebase. Reinforces the single-codebase thesis with a concrete case.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete capabilities over adjectives.
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function SingleObligorExposureAsAProperty({ locale }: ContentProps) {
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
        Ask a mid-tier lender a simple question, what is our total exposure to
        this borrower, and the answer usually takes a day. Asset finance lives
        in one system, consumer lending in another, the secured or pawn book in
        a third, the corporate facilities in a fourth. Each can tell you its own
        number. Nobody holds the sum, except a spreadsheet someone rebuilds the
        week the credit committee asks. We treat that sum as a property of the
        platform: computed the same way every time it is needed, and enforced
        before the next deal is approved.
      </p>

      <h2>Exposure is one number, not four</h2>
      <p>
        A single borrower is one obligor, whatever product they hold. Our
        obligor view aggregates the outstanding a borrower carries across every
        line, asset finance, consumer, pawn, and SME, into one figure, set
        against the partner credit ceiling with the headroom that remains. It is
        computed by one function over the tenant&apos;s data, so the total on the
        screen is the total the rest of the platform uses. There is no separate
        reconciliation step left to drift.
      </p>

      <h2>A report is something you read. A limit is something that holds.</h2>
      <p>
        The difference that matters is not the screen. It is the enforcement. A
        report tells you, after the fact, that a borrower drifted past their
        ceiling. A property stops it at the moment of the decision. When a new
        facility is scored, the engine projects the borrower&apos;s existing
        cross-line exposure plus the new amount against the partner limit, and
        hard-stops the decision if it would breach. A borrower cannot quietly
        accumulate limit-breaching exposure by spreading it across product
        lines, because every line consults the same ceiling before it commits.
      </p>

      <h2>Why this is a single-codebase property</h2>
      <p>
        You cannot enforce a cross-line limit you can only assemble. If asset
        finance, consumer, pawn, and SME each live in their own backend behind a
        shared portal, the aggregate exists only in whatever report stitches
        them together: computed late, trusted on faith. One engine and one data
        model is what lets the limit live where the decision is made. This is the
        concrete payoff of single codebase as a structural property rather than a
        slide. The obligor is one record the whole platform agrees on, and the
        limit travels with the decision, not with the report.
      </p>

      <h2>What we verify</h2>
      <p>
        The cross-line aggregate is exercised by integration tests that seed a
        borrower with facilities on more than one line, prove the total equals
        the sum of the lines, and prove the breach is caught at decision time.
        The same tests prove the figure is tenant-scoped: one tenant&apos;s
        obligor view never counts another tenant&apos;s facilities. The number an
        underwriter sees on screen and the number the decision enforces come from
        the same calculation, so the view and the guardrail cannot disagree.
      </p>

      <h2>Why it matters for the segment we serve</h2>
      <p>
        Mid-tier non-bank lenders, captives, and independent finance houses grow
        by adding product lines, and concentration risk grows with them,
        quietly, one silo at a time. The borrower who looks comfortable on each
        individual line can be the borrower who is over the house limit in
        aggregate. A regulator or a credit committee asking for total exposure to
        a name should get an answer in one click, not one day. Single-obligor
        exposure as a property is how a platform answers that question the same
        way every time, and refuses the deal that would have made the answer
        worse.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        Pune-i unui creditor mid-tier o intrebare simpla, care e expunerea
        noastra totala fata de acest debitor, iar raspunsul dureaza de obicei o
        zi. Asset finance traieste intr-un sistem, creditarea de consum in
        altul, cartea garantata sau de amanet in al treilea, facilitatile
        corporate in al patrulea. Fiecare iti poate spune propriul numar. Nimeni
        nu detine suma, in afara de un spreadsheet pe care cineva il reface in
        saptamana in care intreaba comitetul de credit. Noi tratam acea suma ca
        o proprietate a platformei: calculata la fel de fiecare data cand e
        nevoie, si impusa inainte de aprobarea urmatoarei tranzactii.
      </p>

      <h2>Expunerea e un singur numar, nu patru</h2>
      <p>
        Un singur debitor este un singur obligor, indiferent ce produs are.
        Vederea noastra de obligor agrega soldul pe care un debitor il poarta pe
        fiecare linie, asset finance, consumer, amanet si SME, intr-o singura
        cifra, raportata la plafonul de credit al partenerului cu headroom-ul
        ramas. Este calculata de o singura functie peste datele tenantului,
        astfel incat totalul de pe ecran este totalul pe care il foloseste
        restul platformei. Nu exista un pas separat de reconciliere lasat sa
        derive.
      </p>

      <h2>Un raport este ceva ce citesti. O limita este ceva ce tine.</h2>
      <p>
        Diferenta care conteaza nu e ecranul. Este impunerea. Un raport iti
        spune, ulterior, ca un debitor a depasit plafonul. O proprietate il
        opreste in momentul deciziei. Cand o noua facilitate e scorata, motorul
        proiecteaza expunerea cross-line existenta a debitorului plus suma noua
        fata de plafonul partenerului, si opreste decizia ca hard-stop daca ar
        depasi. Un debitor nu poate acumula discret expunere care incalca
        plafonul imprastiind-o pe linii de produs, fiindca fiecare linie
        consulta acelasi plafon inainte sa se angajeze.
      </p>

      <h2>De ce e o proprietate de single-codebase</h2>
      <p>
        Nu poti impune o limita cross-line pe care doar o poti asambla. Daca
        asset finance, consumer, amanet si SME traiesc fiecare in propriul
        backend in spatele unui portal comun, agregatul exista doar in raportul
        care le coase impreuna: calculat tarziu, crezut pe incredere. Un singur
        motor si un singur model de date sunt ceea ce lasa limita sa traiasca
        acolo unde se ia decizia. Acesta este beneficiul concret al single
        codebase ca proprietate structurala, nu ca slide. Obligorul este o
        singura inregistrare pe care intreaga platforma o agreeaza, iar limita
        calatoreste cu decizia, nu cu raportul.
      </p>

      <h2>Ce verificam</h2>
      <p>
        Agregatul cross-line este exercitat de teste de integrare care
        populeaza un debitor cu facilitati pe mai mult de o linie, dovedesc ca
        totalul egaleaza suma liniilor, si dovedesc ca depasirea e prinsa la
        momentul deciziei. Aceleasi teste dovedesc ca cifra e izolata pe tenant:
        vederea de obligor a unui tenant nu numara niciodata facilitatile altui
        tenant. Numarul pe care il vede un analist pe ecran si numarul pe care
        il impune decizia vin din acelasi calcul, asa ca vederea si guardrail-ul
        nu pot fi in dezacord.
      </p>

      <h2>De ce conteaza pentru segmentul pe care il servim</h2>
      <p>
        Creditorii non-bancari mid-tier, captive-urile si casele de finantare
        independente cresc adaugand linii de produs, iar riscul de concentrare
        creste odata cu ele, tacut, un siloz pe rand. Debitorul care pare
        confortabil pe fiecare linie individuala poate fi debitorul care e peste
        limita casei in agregat. Un regulator sau un comitet de credit care cere
        expunerea totala fata de un nume ar trebui sa primeasca un raspuns
        dintr-un click, nu dintr-o zi. Expunerea pe debitor unic ca proprietate
        este modul in care o platforma raspunde la acea intrebare la fel de
        fiecare data, si refuza tranzactia care ar fi inrautatit raspunsul.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        Stellen Sie einem Mid-Tier-Kreditgeber eine einfache Frage, wie hoch ist
        unser Gesamtengagement gegenueber diesem Kreditnehmer, und die Antwort
        dauert meist einen Tag. Asset Finance lebt in einem System, das
        Konsumentenkreditgeschaeft in einem anderen, das besicherte oder
        Pfandbuch in einem dritten, die Unternehmensfazilitaeten in einem
        vierten. Jedes kann Ihnen seine eigene Zahl nennen. Niemand haelt die
        Summe, ausser einer Tabelle, die jemand in der Woche neu baut, in der
        das Kreditkomitee fragt. Wir behandeln diese Summe als Eigenschaft der
        Plattform: jedes Mal gleich berechnet, wenn sie gebraucht wird, und
        durchgesetzt, bevor das naechste Geschaeft genehmigt wird.
      </p>

      <h2>Engagement ist eine Zahl, nicht vier</h2>
      <p>
        Ein einzelner Kreditnehmer ist ein Obligor, welches Produkt er auch
        haelt. Unsere Obligor-Ansicht aggregiert den Aussenstand, den ein
        Kreditnehmer ueber jede Linie traegt, Asset Finance, Consumer, Pfand und
        SME, zu einer Zahl, gestellt gegen das Kreditlimit des Partners mit dem
        verbleibenden Spielraum. Sie wird von einer Funktion ueber den Daten des
        Mandanten berechnet, sodass die Summe auf dem Bildschirm die Summe ist,
        die der Rest der Plattform verwendet. Es gibt keinen separaten
        Abstimmungsschritt, der abdriften koennte.
      </p>

      <h2>Ein Bericht ist etwas, das man liest. Ein Limit ist etwas, das haelt.</h2>
      <p>
        Der entscheidende Unterschied ist nicht der Bildschirm. Es ist die
        Durchsetzung. Ein Bericht sagt Ihnen nachtraeglich, dass ein
        Kreditnehmer ueber sein Limit gedriftet ist. Eine Eigenschaft stoppt es
        im Moment der Entscheidung. Wenn eine neue Fazilitaet bewertet wird,
        projiziert die Engine das bestehende linienuebergreifende Engagement des
        Kreditnehmers plus den neuen Betrag gegen das Partnerlimit und stoppt die
        Entscheidung hart, falls es das Limit ueberschreiten wuerde. Ein
        Kreditnehmer kann nicht still limitueberschreitendes Engagement
        ansammeln, indem er es ueber Produktlinien verteilt, weil jede Linie
        dasselbe Limit konsultiert, bevor sie sich bindet.
      </p>

      <h2>Warum dies eine Single-Codebase-Eigenschaft ist</h2>
      <p>
        Man kann ein linienuebergreifendes Limit nicht durchsetzen, das man nur
        zusammensetzen kann. Wenn Asset Finance, Consumer, Pfand und SME jeweils
        in ihrem eigenen Backend hinter einem gemeinsamen Portal leben,
        existiert das Aggregat nur in dem Bericht, der sie zusammennaeht: spaet
        berechnet, auf Vertrauen geglaubt. Eine Engine und ein Datenmodell sind
        das, was das Limit dort leben laesst, wo die Entscheidung getroffen
        wird. Das ist der konkrete Ertrag von Single Codebase als strukturelle
        Eigenschaft statt als Folie. Der Obligor ist ein Datensatz, auf den sich
        die ganze Plattform einigt, und das Limit reist mit der Entscheidung,
        nicht mit dem Bericht.
      </p>

      <h2>Was wir verifizieren</h2>
      <p>
        Das linienuebergreifende Aggregat wird von Integrationstests geprueft,
        die einen Kreditnehmer mit Fazilitaeten auf mehr als einer Linie
        befuellen, beweisen, dass die Summe der Summe der Linien entspricht, und
        beweisen, dass die Ueberschreitung zum Entscheidungszeitpunkt gefangen
        wird. Dieselben Tests beweisen, dass die Zahl mandantengetrennt ist: die
        Obligor-Ansicht eines Mandanten zaehlt nie die Fazilitaeten eines
        anderen. Die Zahl, die ein Underwriter auf dem Bildschirm sieht, und die
        Zahl, die die Entscheidung durchsetzt, stammen aus derselben Berechnung,
        sodass Ansicht und Leitplanke nicht widersprechen koennen.
      </p>

      <h2>Warum das fuer das Segment zaehlt, das wir bedienen</h2>
      <p>
        Mid-Tier-Nichtbankenfinanzierer, Captives und unabhaengige
        Finanzierungshaeuser wachsen, indem sie Produktlinien hinzufuegen, und
        das Konzentrationsrisiko waechst mit ihnen, leise, ein Silo nach dem
        anderen. Der Kreditnehmer, der auf jeder einzelnen Linie bequem
        aussieht, kann der Kreditnehmer sein, der im Aggregat ueber dem
        Hauslimit liegt. Ein Regulator oder ein Kreditkomitee, das nach dem
        Gesamtengagement gegenueber einem Namen fragt, sollte eine Antwort in
        einem Klick bekommen, nicht in einem Tag. Einzelobligor-Engagement als
        Eigenschaft ist die Art, wie eine Plattform diese Frage jedes Mal gleich
        beantwortet und das Geschaeft ablehnt, das die Antwort verschlechtert
        haette.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        Posez à un prêteur mid-tier une question simple, quelle est notre
        exposition totale à cet emprunteur, et la réponse prend en général une
        journée. L&apos;asset finance vit dans un système, le crédit à la
        consommation dans un autre, le portefeuille garanti ou de prêt sur gage
        dans un troisième, les facilités corporate dans un quatrième. Chacun
        peut vous donner son propre chiffre. Personne ne détient la somme, sauf
        un tableur que quelqu&apos;un reconstruit la semaine où le comité de
        crédit le demande. Nous traitons cette somme comme une propriété de la
        plateforme : calculée de la même façon à chaque fois qu&apos;elle est
        requise, et imposée avant l&apos;approbation de la transaction suivante.
      </p>

      <h2>L&apos;exposition est un chiffre, pas quatre</h2>
      <p>
        Un emprunteur unique est un seul obligé, quel que soit le produit
        qu&apos;il détient. Notre vue obligé agrège l&apos;encours qu&apos;un
        emprunteur porte sur chaque ligne, asset finance, consumer, prêt sur
        gage et SME, en un seul chiffre, rapporté au plafond de crédit du
        partenaire avec la marge restante. Elle est calculée par une seule
        fonction sur les données du tenant, de sorte que le total à l&apos;écran
        est le total qu&apos;utilise le reste de la plateforme. Il n&apos;y a
        pas d&apos;étape de réconciliation séparée laissée à la dérive.
      </p>

      <h2>Un rapport est ce qu&apos;on lit. Une limite est ce qui tient.</h2>
      <p>
        La différence qui compte n&apos;est pas l&apos;écran. C&apos;est
        l&apos;application. Un rapport vous dit, après coup, qu&apos;un
        emprunteur a dérivé au-delà de son plafond. Une propriété
        l&apos;arrête au moment de la décision. Quand une nouvelle facilité est
        notée, le moteur projette l&apos;exposition cross-line existante de
        l&apos;emprunteur plus le nouveau montant face au plafond du
        partenaire, et arrête la décision strictement si elle devait le
        dépasser. Un emprunteur ne peut pas accumuler discrètement une
        exposition dépassant le plafond en la répartissant sur les lignes de
        produit, parce que chaque ligne consulte le même plafond avant de
        s&apos;engager.
      </p>

      <h2>Pourquoi c&apos;est une propriété de single codebase</h2>
      <p>
        On ne peut pas imposer une limite cross-line qu&apos;on ne peut
        qu&apos;assembler. Si asset finance, consumer, prêt sur gage et SME
        vivent chacun dans leur propre backend derrière un portail commun,
        l&apos;agrégat n&apos;existe que dans le rapport qui les recoud :
        calculé tard, cru sur parole. Un seul moteur et un seul modèle de
        données sont ce qui laisse la limite vivre là où la décision est prise.
        C&apos;est le bénéfice concret du single codebase comme propriété
        structurelle plutôt que comme slide. L&apos;obligé est un seul
        enregistrement sur lequel toute la plateforme s&apos;accorde, et la
        limite voyage avec la décision, pas avec le rapport.
      </p>

      <h2>Ce que nous vérifions</h2>
      <p>
        L&apos;agrégat cross-line est éprouvé par des tests d&apos;intégration
        qui alimentent un emprunteur avec des facilités sur plus d&apos;une
        ligne, prouvent que le total égale la somme des lignes, et prouvent que
        le dépassement est attrapé au moment de la décision. Les mêmes tests
        prouvent que le chiffre est cantonné par tenant : la vue obligé
        d&apos;un tenant ne compte jamais les facilités d&apos;un autre. Le
        chiffre qu&apos;un souscripteur voit à l&apos;écran et le chiffre que la
        décision impose viennent du même calcul, de sorte que la vue et le
        garde-fou ne peuvent pas être en désaccord.
      </p>

      <h2>Pourquoi cela compte pour le segment que nous servons</h2>
      <p>
        Les prêteurs non bancaires mid-tier, les captives et les maisons de
        financement indépendantes grandissent en ajoutant des lignes de
        produit, et le risque de concentration grandit avec elles,
        silencieusement, un silo à la fois. L&apos;emprunteur qui paraît à
        l&apos;aise sur chaque ligne individuelle peut être l&apos;emprunteur
        qui dépasse la limite maison en agrégat. Un régulateur ou un comité de
        crédit qui demande l&apos;exposition totale à un nom devrait obtenir une
        réponse en un clic, pas en une journée. L&apos;exposition par obligé
        unique comme propriété, c&apos;est ainsi qu&apos;une plateforme répond à
        cette question de la même façon à chaque fois, et refuse la transaction
        qui aurait aggravé la réponse.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        Fate a un prestatore mid-tier una domanda semplice, qual è la nostra
        esposizione totale verso questo mutuatario, e la risposta di solito
        richiede un giorno. L&apos;asset finance vive in un sistema, il credito
        al consumo in un altro, il portafoglio garantito o di pegno in un terzo,
        le facilitazioni corporate in un quarto. Ciascuno può dirvi il proprio
        numero. Nessuno detiene la somma, tranne un foglio di calcolo che
        qualcuno ricostruisce la settimana in cui lo chiede il comitato crediti.
        Noi trattiamo quella somma come una proprietà della piattaforma:
        calcolata allo stesso modo ogni volta che serve, e imposta prima
        dell&apos;approvazione della transazione successiva.
      </p>

      <h2>L&apos;esposizione è un numero, non quattro</h2>
      <p>
        Un singolo mutuatario è un solo obbligato, qualunque prodotto detenga.
        La nostra vista obbligato aggrega il saldo che un mutuatario porta su
        ogni linea, asset finance, consumer, pegno e SME, in un solo numero,
        rapportato al plafond di credito del partner con il margine residuo.
        È calcolata da una sola funzione sui dati del tenant, così che il totale
        a schermo è il totale che usa il resto della piattaforma. Non c&apos;è
        un passo di riconciliazione separato lasciato alla deriva.
      </p>

      <h2>Un report è qualcosa che si legge. Un limite è qualcosa che tiene.</h2>
      <p>
        La differenza che conta non è lo schermo. È l&apos;applicazione. Un
        report vi dice, a posteriori, che un mutuatario è andato oltre il suo
        plafond. Una proprietà lo ferma nel momento della decisione. Quando una
        nuova facilitazione viene valutata, il motore proietta
        l&apos;esposizione cross-line esistente del mutuatario più il nuovo
        importo a fronte del plafond del partner, e ferma la decisione come
        hard-stop se lo supererebbe. Un mutuatario non può accumulare in
        silenzio un&apos;esposizione oltre il plafond distribuendola tra le
        linee di prodotto, perché ogni linea consulta lo stesso plafond prima di
        impegnarsi.
      </p>

      <h2>Perché è una proprietà di single codebase</h2>
      <p>
        Non si può imporre un limite cross-line che si può solo assemblare. Se
        asset finance, consumer, pegno e SME vivono ciascuno nel proprio backend
        dietro un portale comune, l&apos;aggregato esiste solo nel report che li
        ricuce: calcolato tardi, creduto sulla fiducia. Un solo motore e un solo
        modello dati sono ciò che lascia il limite vivere dove la decisione
        viene presa. È il beneficio concreto del single codebase come proprietà
        strutturale invece che come slide. L&apos;obbligato è un solo record su
        cui tutta la piattaforma concorda, e il limite viaggia con la decisione,
        non con il report.
      </p>

      <h2>Cosa verifichiamo</h2>
      <p>
        L&apos;aggregato cross-line è esercitato da test di integrazione che
        popolano un mutuatario con facilitazioni su più di una linea, provano
        che il totale eguaglia la somma delle linee, e provano che lo
        sforamento viene intercettato al momento della decisione. Gli stessi
        test provano che il numero è circoscritto per tenant: la vista
        obbligato di un tenant non conta mai le facilitazioni di un altro. Il
        numero che un sottoscrittore vede a schermo e il numero che la decisione
        impone vengono dallo stesso calcolo, così che la vista e il guardrail
        non possono essere in disaccordo.
      </p>

      <h2>Perché conta per il segmento che serviamo</h2>
      <p>
        I prestatori non bancari mid-tier, le captive e le case di finanziamento
        indipendenti crescono aggiungendo linee di prodotto, e il rischio di
        concentrazione cresce con loro, in silenzio, un silo alla volta. Il
        mutuatario che sembra a posto su ogni singola linea può essere il
        mutuatario che in aggregato è oltre il limite della casa. Un regolatore
        o un comitato crediti che chiede l&apos;esposizione totale verso un nome
        dovrebbe ottenere una risposta in un clic, non in un giorno.
        L&apos;esposizione per singolo obbligato come proprietà è il modo in cui
        una piattaforma risponde a quella domanda allo stesso modo ogni volta, e
        rifiuta la transazione che avrebbe peggiorato la risposta.
      </p>
    </div>
  );
}
