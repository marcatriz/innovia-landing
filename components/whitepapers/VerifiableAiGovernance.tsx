/**
 * Whitepaper: Verifiable AI governance, an audit you can recompute.
 *
 * Argues that "auditable" is a checkbox most vendors tick by keeping a log and
 * asking buyers to trust it. We pin the stronger property: a SHA-256 hash chain
 * over the audit log plus one endpoint that recomputes it from the live rows,
 * extended so every AI action (MCP tool call, in-app assistant write, scoring
 * decision) inherits the same proof.
 *
 * Style rules (enforced):
 *  - No em dashes. Substitute with colon, comma, parens, or sentence split.
 *  - Website voice: first person plural ("we").
 *  - No client, partner, or competitor names.
 *  - Concrete: cite the endpoint, the algorithm, what verify returns. Numbers
 *    over adjectives. Do not over-claim: facts are taken from shipped code
 *    (AuditSealHelper, GET /api/admin/audit/verify, ERPAuditSeal).
 */

import { type AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function VerifiableAiGovernance({ locale }: ContentProps) {
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
        &quot;Auditable&quot; is the easiest box to tick in a tender and the
        hardest to mean. Most platforms log what happened, then ask you to
        trust that the log was not edited afterward. When the actions being
        logged are increasingly taken by software, an assistant drafting an
        offer, a model returning a score, a machine reading the API, the gap
        between a log you trust and a log you can recompute stops being
        academic. We pin the second one.
      </p>

      <h2>What we seal, and how</h2>
      <p>
        Every consequential action writes one row to a single audit log: who
        acted, on which entity, what they did, the detail, and when.
        Periodically we fold every row added since the last watermark into a
        SHA-256 hash chain stored in its own table. Each seal carries the
        running hash and the hash of the seal before it, so the seals form a
        chain, not a set. The way each row is turned into text is fixed and
        delimiter-safe, so the same row always produces the same hash, and any
        later change to a sealed row produces a different one.
      </p>

      <h2>What verification returns</h2>
      <p>
        One admin endpoint, <code>GET /api/admin/audit/verify</code>,
        recomputes the chain from the live audit rows and compares it against
        the stored seals. If nothing was touched, it answers that the chain is
        intact across the sealed range, up to a named row id. If a single
        sealed row was modified or deleted, the recomputed segment hash
        diverges, and the endpoint names the first broken seal and the row id
        it covered. The check does not trust the stored hash. It recomputes it.
        That one word, recompute, is the whole difference between evidence and
        assurance.
      </p>

      <h2>Why this is the AI story, not a second system</h2>
      <p>
        We did not build a separate audit for AI, and we did not need to. The
        interface a machine drives is the same core the screen drives, so a
        tool call over the Model Context Protocol, a write from the in-app
        assistant, and a decision from the scoring model all land in the same
        audit log as a human click, and inherit the same seal and the same
        verification. Governable and auditable AI is not a second system we
        promise. It is a property the platform already had, extended to the
        actions a model takes. The model proposes, the core disposes, the chain
        records, and anyone with the right to ask can recompute.
      </p>

      <h2>Why it matters for the operators we serve</h2>
      <p>
        Under an operational resilience or supervisory review, the question is
        not whether you keep an audit log. Everyone keeps a log. The question
        is whether you can show it was not edited after the fact. An audit you
        can recompute in front of a supervisor, one that points to the exact
        row if anything moved, is a different conversation from an audit you
        assert. For a mid-tier operator letting software take more of the
        actions each quarter, that property is the difference between adopting
        AI inside a controlled process and bolting it on beside one.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <p>
        &quot;Auditabil&quot; este cea mai ușoară bifă într-o licitație și cel
        mai greu de susținut. Majoritatea platformelor înregistrează ce s-a
        întâmplat, apoi îți cer să ai încredere că jurnalul nu a fost editat
        după aceea. Când acțiunile înregistrate sunt tot mai des luate de
        software, un asistent care schițează o ofertă, un model care returnează
        un scor, o mașină care citește API-ul, distanța dintre un jurnal în
        care ai încredere și un jurnal pe care îl poți recalcula încetează să
        fie academică. Noi o fixăm pe a doua.
      </p>

      <h2>Ce sigilăm, și cum</h2>
      <p>
        Fiecare acțiune consecventă scrie un rând într-un singur jurnal de
        audit: cine a acționat, asupra cărei entități, ce a făcut, detaliul, și
        când. Periodic pliem fiecare rând adăugat de la ultimul reper într-un
        lanț de hash SHA-256 stocat în propria tabelă. Fiecare sigiliu poartă
        hash-ul curent și hash-ul sigiliului dinaintea lui, astfel încât
        sigiliile formează un lanț, nu o mulțime. Felul în care fiecare rând
        este transformat în text este fix și sigur la delimitare, deci același
        rând produce mereu același hash, iar orice schimbare ulterioară a unui
        rând sigilat produce unul diferit.
      </p>

      <h2>Ce returnează verificarea</h2>
      <p>
        Un singur endpoint de admin, <code>GET /api/admin/audit/verify</code>,
        recalculează lanțul din rândurile vii de audit și îl compară cu
        sigiliile stocate. Dacă nimic nu a fost atins, răspunde că lanțul este
        intact pe intervalul sigilat, până la un id de rând numit. Dacă un
        singur rând sigilat a fost modificat sau șters, hash-ul segmentului
        recalculat diverge, iar endpoint-ul numește primul sigiliu rupt și
        id-ul de rând pe care îl acoperea. Verificarea nu are încredere în
        hash-ul stocat. Îl recalculează. Acel cuvânt, recalculează, este toată
        diferența dintre dovadă și asigurare.
      </p>

      <h2>De ce aceasta este povestea AI, nu un al doilea sistem</h2>
      <p>
        Nu am construit un audit separat pentru AI, și nici nu a fost nevoie.
        Interfața pe care o conduce o mașină este același nucleu pe care îl
        conduce ecranul, deci un apel de unealtă prin Model Context Protocol, o
        scriere din asistentul în aplicație, și o decizie din modelul de
        scoring ajung toate în același jurnal de audit ca un clic uman, și
        moștenesc același sigiliu și aceeași verificare. AI guvernabil și
        auditabil nu este un al doilea sistem pe care îl promitem. Este o
        proprietate pe care platforma o avea deja, extinsă la acțiunile pe care
        le ia un model. Modelul propune, nucleul dispune, lanțul înregistrează,
        și oricine are dreptul să întrebe poate recalcula.
      </p>

      <h2>De ce contează pentru operatorii pe care îi servim</h2>
      <p>
        Sub o evaluare de reziliență operațională sau de supraveghere,
        întrebarea nu este dacă ții un jurnal de audit. Toți țin un jurnal.
        Întrebarea este dacă poți arăta că nu a fost editat după fapt. Un audit
        pe care îl poți recalcula în fața unui supervizor, unul care indică
        rândul exact dacă ceva s-a mișcat, este o conversație diferită de un
        audit pe care doar îl afirmi. Pentru un operator mid-tier care lasă
        software-ul să ia tot mai multe dintre acțiuni în fiecare trimestru,
        acea proprietate este diferența dintre a adopta AI în interiorul unui
        proces controlat și a-l lipi alături de unul.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <p>
        &quot;Auditierbar&quot; ist das einfachste Kästchen in einer
        Ausschreibung und das am schwersten einzulösende. Die meisten
        Plattformen protokollieren, was geschah, und bitten Sie dann zu
        vertrauen, dass das Protokoll danach nicht bearbeitet wurde. Wenn die
        protokollierten Aktionen zunehmend von Software ausgeführt werden, ein
        Assistent, der ein Angebot entwirft, ein Modell, das einen Score
        zurückgibt, eine Maschine, die die API liest, hört der Abstand zwischen
        einem Protokoll, dem Sie vertrauen, und einem, das Sie nachrechnen
        können, auf, akademisch zu sein. Wir schreiben das zweite fest.
      </p>

      <h2>Was wir versiegeln, und wie</h2>
      <p>
        Jede folgenreiche Aktion schreibt eine Zeile in ein einziges Audit-Log:
        wer handelte, an welcher Entität, was getan wurde, das Detail, und wann.
        Periodisch falten wir jede seit dem letzten Wasserzeichen
        hinzugekommene Zeile in eine SHA-256-Hash-Kette, gespeichert in einer
        eigenen Tabelle. Jedes Siegel trägt den laufenden Hash und den Hash des
        Siegels davor, sodass die Siegel eine Kette bilden, keine Menge. Die Art,
        wie jede Zeile in Text verwandelt wird, ist fest und trennzeichensicher,
        sodass dieselbe Zeile immer denselben Hash erzeugt, und jede spätere
        Änderung einer versiegelten Zeile einen anderen.
      </p>

      <h2>Was die Verifikation zurückgibt</h2>
      <p>
        Ein Admin-Endpunkt, <code>GET /api/admin/audit/verify</code>, rechnet
        die Kette aus den Live-Audit-Zeilen nach und vergleicht sie mit den
        gespeicherten Siegeln. Wurde nichts berührt, antwortet er, dass die
        Kette über den versiegelten Bereich intakt ist, bis zu einer benannten
        Zeilen-Id. Wurde eine einzige versiegelte Zeile geändert oder gelöscht,
        weicht der nachgerechnete Segment-Hash ab, und der Endpunkt benennt das
        erste gebrochene Siegel und die Zeilen-Id, die es abdeckte. Die Prüfung
        vertraut dem gespeicherten Hash nicht. Sie rechnet ihn nach. Dieses
        eine Wort, nachrechnen, ist der ganze Unterschied zwischen Beweis und
        Zusicherung.
      </p>

      <h2>Warum das die KI-Geschichte ist, kein zweites System</h2>
      <p>
        Wir haben kein separates Audit für KI gebaut, und wir mussten es nicht.
        Die Schnittstelle, die eine Maschine bedient, ist derselbe Kern, den
        der Bildschirm bedient, sodass ein Werkzeugaufruf über das Model
        Context Protocol, ein Schreibvorgang des In-App-Assistenten, und eine
        Entscheidung des Scoring-Modells alle im selben Audit-Log landen wie ein
        menschlicher Klick, und dasselbe Siegel und dieselbe Verifikation erben.
        Steuerbare und auditierbare KI ist kein zweites System, das wir
        versprechen. Es ist eine Eigenschaft, die die Plattform schon hatte,
        ausgeweitet auf die Aktionen, die ein Modell ausführt. Das Modell
        schlägt vor, der Kern verfügt, die Kette zeichnet auf, und jeder mit dem
        Recht zu fragen kann nachrechnen.
      </p>

      <h2>Warum es für die Betreiber zählt, die wir bedienen</h2>
      <p>
        Unter einer Überprüfung der operativen Resilienz oder einer
        aufsichtlichen Prüfung lautet die Frage nicht, ob Sie ein Audit-Log
        führen. Jeder führt ein Log. Die Frage ist, ob Sie zeigen können, dass
        es nachträglich nicht bearbeitet wurde. Ein Audit, das Sie vor einem
        Aufseher nachrechnen können, eines, das auf die genaue Zeile zeigt,
        falls sich etwas bewegt hat, ist ein anderes Gespräch als ein Audit, das
        Sie behaupten. Für einen Mid-Tier-Betreiber, der Software jedes Quartal
        mehr Aktionen übernehmen lässt, ist diese Eigenschaft der Unterschied
        zwischen KI innerhalb eines kontrollierten Prozesses und KI daneben
        angeschraubt.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <p>
        &quot;Auditable&quot; est la case la plus facile à cocher dans un
        appel d&apos;offres et la plus difficile à tenir. La plupart des
        plateformes journalisent ce qui s&apos;est passé, puis vous demandent
        de croire que le journal n&apos;a pas été édité ensuite. Quand les
        actions journalisées sont de plus en plus prises par du logiciel, un
        assistant qui rédige une offre, un modèle qui renvoie un score, une
        machine qui lit l&apos;API, l&apos;écart entre un journal auquel vous
        faites confiance et un journal que vous pouvez recalculer cesse
        d&apos;être académique. Nous figeons le second.
      </p>

      <h2>Ce que nous scellons, et comment</h2>
      <p>
        Chaque action conséquente écrit une ligne dans un seul journal
        d&apos;audit: qui a agi, sur quelle entité, ce qui a été fait, le
        détail, et quand. Périodiquement, nous replions chaque ligne ajoutée
        depuis le dernier repère dans une chaîne de hachage SHA-256 stockée
        dans sa propre table. Chaque sceau porte le hachage courant et le
        hachage du sceau précédent, de sorte que les sceaux forment une chaîne,
        pas un ensemble. La façon dont chaque ligne est transformée en texte
        est fixe et sûre vis-à-vis des délimiteurs, donc la même ligne produit
        toujours le même hachage, et tout changement ultérieur d&apos;une ligne
        scellée en produit un différent.
      </p>

      <h2>Ce que la vérification renvoie</h2>
      <p>
        Un endpoint d&apos;administration, <code>GET /api/admin/audit/verify</code>,
        recalcule la chaîne à partir des lignes d&apos;audit vivantes et la
        compare aux sceaux stockés. Si rien n&apos;a été touché, il répond que
        la chaîne est intacte sur la plage scellée, jusqu&apos;à un id de ligne
        nommé. Si une seule ligne scellée a été modifiée ou supprimée, le
        hachage du segment recalculé diverge, et l&apos;endpoint nomme le
        premier sceau brisé et l&apos;id de ligne qu&apos;il couvrait. La
        vérification ne fait pas confiance au hachage stocké. Elle le recalcule.
        Ce seul mot, recalculer, fait toute la différence entre preuve et
        assurance.
      </p>

      <h2>Pourquoi c&apos;est l&apos;histoire de l&apos;IA, pas un second système</h2>
      <p>
        Nous n&apos;avons pas construit un audit séparé pour l&apos;IA, et nous
        n&apos;en avions pas besoin. L&apos;interface qu&apos;une machine pilote
        est le même cœur que pilote l&apos;écran, de sorte qu&apos;un appel
        d&apos;outil via le Model Context Protocol, une écriture de
        l&apos;assistant dans l&apos;application, et une décision du modèle de
        scoring atterrissent tous dans le même journal d&apos;audit qu&apos;un
        clic humain, et héritent du même sceau et de la même vérification. Une
        IA gouvernable et auditable n&apos;est pas un second système que nous
        promettons. C&apos;est une propriété que la plateforme avait déjà,
        étendue aux actions que prend un modèle. Le modèle propose, le cœur
        dispose, la chaîne enregistre, et quiconque a le droit de demander peut
        recalculer.
      </p>

      <h2>Pourquoi cela compte pour les opérateurs que nous servons</h2>
      <p>
        Sous une revue de résilience opérationnelle ou un contrôle de
        supervision, la question n&apos;est pas de savoir si vous tenez un
        journal d&apos;audit. Tout le monde tient un journal. La question est
        de savoir si vous pouvez montrer qu&apos;il n&apos;a pas été édité après
        coup. Un audit que vous pouvez recalculer devant un superviseur, qui
        pointe la ligne exacte si quelque chose a bougé, est une conversation
        différente d&apos;un audit que vous affirmez. Pour un opérateur
        mid-tier qui laisse le logiciel prendre davantage d&apos;actions chaque
        trimestre, cette propriété est la différence entre adopter l&apos;IA à
        l&apos;intérieur d&apos;un processus contrôlé et la visser à côté.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <p>
        &quot;Auditabile&quot; è la casella più facile da spuntare in una gara
        e la più difficile da mantenere. La maggior parte delle piattaforme
        registra cosa è accaduto, poi ti chiede di fidarti che il log non sia
        stato modificato dopo. Quando le azioni registrate sono sempre più
        prese dal software, un assistente che redige un&apos;offerta, un modello
        che restituisce un punteggio, una macchina che legge l&apos;API, la
        distanza tra un log di cui ti fidi e un log che puoi ricalcolare smette
        di essere accademica. Noi fissiamo il secondo.
      </p>

      <h2>Cosa sigilliamo, e come</h2>
      <p>
        Ogni azione di rilievo scrive una riga in un singolo log di audit: chi
        ha agito, su quale entità, cosa ha fatto, il dettaglio, e quando.
        Periodicamente pieghiamo ogni riga aggiunta dall&apos;ultimo segnaposto
        in una catena di hash SHA-256 conservata in una tabella propria. Ogni
        sigillo porta l&apos;hash corrente e l&apos;hash del sigillo
        precedente, così i sigilli formano una catena, non un insieme. Il modo
        in cui ogni riga è trasformata in testo è fisso e sicuro rispetto ai
        delimitatori, quindi la stessa riga produce sempre lo stesso hash, e
        qualsiasi cambiamento successivo a una riga sigillata ne produce uno
        diverso.
      </p>

      <h2>Cosa restituisce la verifica</h2>
      <p>
        Un endpoint di amministrazione, <code>GET /api/admin/audit/verify</code>,
        ricalcola la catena dalle righe di audit vive e la confronta con i
        sigilli conservati. Se nulla è stato toccato, risponde che la catena è
        intatta sull&apos;intervallo sigillato, fino a un id di riga nominato.
        Se una sola riga sigillata è stata modificata o cancellata, l&apos;hash
        del segmento ricalcolato diverge, e l&apos;endpoint nomina il primo
        sigillo rotto e l&apos;id di riga che copriva. La verifica non si fida
        dell&apos;hash conservato. Lo ricalcola. Quella sola parola,
        ricalcola, è tutta la differenza tra prova e rassicurazione.
      </p>

      <h2>Perché questa è la storia dell&apos;IA, non un secondo sistema</h2>
      <p>
        Non abbiamo costruito un audit separato per l&apos;IA, e non ne avevamo
        bisogno. L&apos;interfaccia che una macchina guida è lo stesso nucleo
        che guida lo schermo, così una chiamata di strumento via Model Context
        Protocol, una scrittura dall&apos;assistente in-app, e una decisione
        dal modello di scoring finiscono tutte nello stesso log di audit di un
        clic umano, ed ereditano lo stesso sigillo e la stessa verifica. Una IA
        governabile e auditabile non è un secondo sistema che promettiamo. È
        una proprietà che la piattaforma aveva già, estesa alle azioni che un
        modello compie. Il modello propone, il nucleo dispone, la catena
        registra, e chiunque abbia il diritto di chiedere può ricalcolare.
      </p>

      <h2>Perché conta per gli operatori che serviamo</h2>
      <p>
        Sotto una revisione di resilienza operativa o un controllo di
        vigilanza, la domanda non è se tieni un log di audit. Tutti tengono un
        log. La domanda è se puoi mostrare che non è stato modificato a
        posteriori. Un audit che puoi ricalcolare davanti a un supervisore, che
        indica la riga esatta se qualcosa si è mosso, è una conversazione
        diversa da un audit che affermi. Per un operatore mid-tier che lascia il
        software prendere sempre più azioni ogni trimestre, quella proprietà è
        la differenza tra adottare l&apos;IA dentro un processo controllato e
        avvitarla accanto a uno.
      </p>
    </div>
  );
}
