/**
 * Whitepaper: Pricing residual value risk in the electric transition.
 *
 * Voice and discipline rules:
 *  - First person plural ("we"). Innovia is the publisher.
 *  - No em dashes anywhere, in any language.
 *  - No named competitors, no named clients.
 *  - Quantitative claims sourced from the Financial Times article of 2026-05-23
 *    drawing on Indicata UK and SMMT data; treated as single-source directional.
 *  - Structural macro context cross-referenced against BNP Paribas Leasing
 *    Solutions European Business Equipment Outlook 2026 and Leaseurope H1 2025.
 *  - Section 7 capability claims validated against the C:\innovia-platform
 *    codebase on 2026-05-25; OEM-as-counterparty and risk-share-typed-object
 *    are explicit extensions, not present-today capabilities.
 */

import type { AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function PricingEvResidualValueRisk({ locale }: ContentProps) {
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
      <h2>Five things to take away</h2>
      <ul>
        <li>
          <strong>The UK is a leading indicator, not an outlier.</strong> The seven-point residual-value
          gap versus continental Europe reflects channel-stuffing pressure under the ZEV mandate plus
          disproportionate Chinese-OEM exposure absent EU-level tariffs. Both forces are present in
          continental markets with a lag.
        </li>
        <li>
          <strong>OEM new-price actions move the used market within 90 days.</strong> A 2023
          new-price cut from one large EV manufacturer triggered a 25 percent decline in its own used
          prices in the UK within months, dragging the broader used-EV market with it. RV models that
          assume independence between new pricing and used depreciation are systematically wrong for
          high-concentration brands.
        </li>
        <li>
          <strong>Bank-OEM bilateral risk-share contracts are becoming structural for non-captive
          brands.</strong> Early arrangements between major UK and European banks and non-captive EV
          manufacturers are now described publicly as commonplace.
        </li>
        <li>
          <strong>Brand-survival probability is a new, quantifiable underwriting input.</strong>
          Lenders waiting for the rating agencies to publish a methodology will be late.
        </li>
        <li>
          <strong>Securitisation is now the principal RV-distribution channel for banks.</strong>
          Loan-tape generation is a platform-grade requirement, not a back-office task.
        </li>
      </ul>

      <h2>What has shifted on EV residual value</h2>
      <p>
        <strong>Lease dominance creates a synchronised three-year supply pulse.</strong> Because 70
        percent of UK EV sales are fleet and the typical lease term is three years, the used market
        receives a contractually predetermined supply shock 36 months after every wave of
        originations. This is a market-microstructure problem, not a forecasting problem. The
        volume is known at origination; what is unknown is whether the dealer infrastructure and
        retail buyer depth will absorb it at the price the lender forecast.
      </p>
      <p>
        <strong>Policy-mandated supply meets channel stuffing.</strong> The UK ZEV mandate requires
        80 percent of new car sales to be electric by the end of the decade, with annual fines.
        Combined with the absence of UK tariffs equivalent to recent EU measures on Chinese-built
        EVs, this forces both legacy and new entrants to push volume through fleet, leasing brokers,
        daily rental and demonstrators. New-vehicle list prices remain reasonable. The same vehicles
        arrive on the used market very, very cheap, in the words of a senior automotive data
        executive. RV models that anchor to list price systematically overstate residuals in markets
        with heavy channel stuffing.
      </p>
      <p>
        <strong>Chinese-OEM entry without captive finance footprint.</strong> Chinese brands
        collectively reached 15 percent of the UK market, entering through bank partnerships rather
        than captives. The residual-value tail risk that captives historically absorbed now sits on
        bank balance sheets unless the contract transfers it back. Early data suggests Chinese RV
        outcomes are not uniformly worse: the leading Chinese entrant&apos;s UK three-year RV is
        39.8 percent, ahead of several legacy mass-market brands.
      </p>
      <p>
        <strong>Battery technology displacement risk.</strong> Rapid-charging battery technology is
        advancing fast. A 2024-vintage EV with a 30-minute fast-charge curve competes in 2027
        against new vehicles with a 12-minute curve at similar price points. This depreciation
        factor is real and largely uncaptured in current RV models.
      </p>

      <h2>The four-instrument toolkit</h2>
      <p>
        Better forecasting will not solve the problem. The data does not yet support it. The
        constructive response is a toolkit of four instruments, each addressing a different
        dimension of EV residual risk, used as layers in a portfolio-construction stack.
      </p>
      <ol>
        <li>
          <strong>OEM risk-share contracts.</strong> Brand-specific RV outcomes shared back to the
          OEM via explicit contract: trigger threshold, share ratio, cap, deductible, cash-flow
          direction, lifecycle events, accounting treatment. Per-deal, multi-year.
        </li>
        <li>
          <strong>Residual-value insurance wraps.</strong> Tail loss beyond model expectation
          transferred to a specialist insurer through parametric or structured policies attached at
          deal level. Per-deal, lease term.
        </li>
        <li>
          <strong>Securitisation and private-credit distribution.</strong> Aggregate balance-sheet
          exposure transferred to ABS investors and direct-lending vehicles. Periodic, portfolio
          level.
        </li>
        <li>
          <strong>AI-augmented RV models with survival input.</strong> Forecast quality at deal
          pricing improved through machine-learning models that ingest Chinese-brand penetration,
          OEM pricing actions, battery vintage and brand-survival probability as features.
          Continuous, internal capability.
        </li>
      </ol>
      <p>
        The new input deserves its own line. Brand survival is no longer a tail concern. A senior
        UK leasing-co executive put it publicly: it has never been more difficult to predict which
        OEMs will survive. A 5 percent annualised probability of OEM exit over a three-year lease
        term is mathematically equivalent to an additional 14 to 15 percent RV haircut applied at
        year three on a survival-weighted basis, before any consideration of remarketing
        infrastructure loss. RV models that do not accept survival probability as an input are
        silently mispricing every deal.
      </p>

      <h2>Implications</h2>
      <p>
        <strong>For motor-finance lenders.</strong> Reprice EV portfolios on a survival-weighted
        basis within the next two quarters. Build risk-share contracting capability with
        non-captive OEMs proactively, before the next entrant cohort negotiates from a position of
        strength. Treat brand-survival probability as a discrete underwriting input even if the
        methodology is internal and directional.
      </p>
      <p>
        <strong>For OEM captives.</strong> Stress-test captive RV books against the UK-style
        scenario in every European market, not only the UK. Offer risk-share contracts to bank
        partners on the captive&apos;s terms; captives that wait for banks to demand it will
        negotiate weaker formulae.
      </p>
      <p>
        <strong>For asset-finance platform vendors.</strong> Express the four instruments as
        first-class objects in the core platform, not as customisations. Treat the AI RV layer as a
        feature-and-data-engineering capability, not a model-selection problem.
      </p>

      <h2>Signals we are watching</h2>
      <ol>
        <li>
          <strong>Continental EV RV convergence with the UK.</strong> If three-year residual values
          in Germany, France and Spain compress toward UK levels in 2026 H2 disclosures, the
          structural explanation is confirmed.
        </li>
        <li>
          <strong>Chinese-brand RV stabilisation or further compression.</strong> The leading
          Chinese entrant&apos;s UK three-year RV at 39.8 percent is the leading data point on
          whether Chinese-brand RV management works at scale.
        </li>
        <li>
          <strong>First rating-agency methodology on brand-survival risk.</strong> Until it exists,
          the burden of pricing remains entirely on lender internal credit research.
        </li>
        <li>
          <strong>EU policy response to channel stuffing.</strong> Tariff adjustments will determine
          whether continental RV trajectories track or diverge from the UK.
        </li>
        <li>
          <strong>Private-credit demand for motor ABS paper.</strong> If private credit retreats
          from auto exposure, banks face a binding distribution constraint and must either
          underwrite less EV volume or accept more retained risk.
        </li>
      </ol>

      <h2>How Innovia helps</h2>
      <p>
        We operate a modular asset-finance platform built natively for European lenders and captive
        entities, with multi-tenant contract management at its core and configurable per-jurisdiction
        integration points (credit bureau, tax engine, document templates). The foundations for the
        four-instrument toolkit are in the platform today, and we are now opening four design-partner
        engagements to harden each against real deal flow.
      </p>
      <p>
        <strong>Risk-share contracts as a first-class data object.</strong> Our partner model is
        type-driven and supports borrower, dealer and insurer roles today, with full tenant
        isolation. We are extending it with OEM as a first-class counterparty type and a typed
        bank-OEM risk-share object that has explicit fields for trigger, share ratio, cap,
        deductible, cash-flow direction, lifecycle events and accounting treatment. We are seeking
        one bank or captive lender originating non-captive-OEM volume in 2026-2027 to co-develop the
        structure.
      </p>
      <p>
        <strong>RV insurance wraps at deal-pricing time.</strong> Our insurance module supports
        customer-paid products attached to a deal, and the origination layer reflects attached
        products in the customer-facing monthly payment. We are extending insurance attachments to
        include lender-paid RV protection wraps as a separate product class, with policy-management
        and end-of-term reconciliation. We are seeking a specialist RV-insurance provider or a bank
        with an in-place programme to co-develop the integration pattern.
      </p>
      <p>
        <strong>Loan-tape generation as a continuous capability.</strong> Our servicing data model
        is tenant-isolated end-to-end and supports loan-tape extraction via direct SQL today. We are
        formalising the extract as an on-demand productised capability, with stable schema alignment
        to common European auto-ABS templates and full lineage including RV-instrument attachments.
        We are seeking a mid-tier lender preparing a securitisation in the next 12 to 18 months.
      </p>
      <p>
        <strong>An RV model with brand-survival as a discrete input.</strong> We have built an
        advisory machine-learning layer wrapping three model families (regularised logistic,
        explainable boosting, gradient boosting), with monitoring exposed in the platform UI. We
        are extending it to motor-finance RV with the feature set this paper has argued for,
        including brand-survival probability ingestible from a source the lender selects.
      </p>
      <p>
        Our Year-One engagement format is a packaged Innovation Partnership in the EUR 60 to 150k
        range, scoped against one or two of the capability extensions, with shared IP on the
        generalised output and exclusive use of the design-partner&apos;s own configuration. We do
        not sell vendor software off the shelf, we co-build the capability against the
        partner&apos;s real deal flow and harden it for re-use.
      </p>

      <h2>What we will not do</h2>
      <ul>
        <li>
          We do not publish proprietary RV indices or compete with established vehicle-data
          providers. We integrate their data; we do not replicate it.
        </li>
        <li>
          We do not provide insurance underwriting capacity. We orchestrate the contractual
          attachment of third-party RV insurance to the deal; we do not bear the insurance risk.
        </li>
        <li>
          We do not act as a rating agency or publish brand-survival probabilities. We accept them
          as inputs from sources the lender selects.
        </li>
      </ul>
      <p>
        If you are a lender, an OEM captive or a regulator and any of the four extensions is on
        your 2026 or 2027 critical path, a short conversation about scope and fit is the right next
        step.
      </p>

      <h2>Sources</h2>
      <p>
        Primary source: Inagaki, K. and Al-Khalaf, L., &ldquo;Britain&apos;s EV boom hits
        second-hand bump in the road&rdquo;, Financial Times, 23 May 2026, drawing on Indicata UK
        residual-value tracking and SMMT UK new-car market data. Quantitative claims sourced
        exclusively from this article are treated as single-source directional in our underlying
        research. Structural macro context is drawn from BNP Paribas Leasing Solutions, European
        Business Equipment Outlook 2026 (May 2026), and Leaseurope H1 2025 European leasing
        volumes.
      </p>
    </div>
  );
}

function Ro() {
  return (
    <div className="prose-paper">
      <h2>Cinci lucruri de reținut</h2>
      <ul>
        <li>
          <strong>Marea Britanie este indicator avansat, nu excepție.</strong> Diferența de șapte
          puncte între valoarea reziduală britanică și cea continentală reflectă presiunea
          channel-stuffing sub mandatul ZEV plus expunerea disproporționată la OEM-urile chineze, în
          absența tarifelor de tip UE. Ambele forțe sunt prezente pe piețele continentale cu un
          decalaj.
        </li>
        <li>
          <strong>Acțiunile OEM pe prețul nou mișcă piața second-hand în 90 de zile.</strong> O
          tăiere de preț din 2023 făcută de un mare producător EV a declanșat o scădere de 25 la
          sută a propriilor prețuri second-hand în Marea Britanie în câteva luni, trăgând cu ea
          întreaga piață second-hand. Modelele RV care presupun independența între prețul nou și
          deprecierea second-hand sunt sistematic greșite pentru brandurile cu concentrare ridicată.
        </li>
        <li>
          <strong>Contractele bilaterale bancă-OEM de partajare a riscului devin structurale pentru
          brandurile non-captive.</strong> Aranjamentele timpurii între bănci britanice și europene
          majore și producători EV non-captivi sunt acum descrise public ca fiind uzuale.
        </li>
        <li>
          <strong>Probabilitatea de supraviețuire a brandului este un input nou și cuantificabil de
          underwriting.</strong> Finanțatorii care așteaptă agențiile de rating să publice o
          metodologie vor ajunge târziu.
        </li>
        <li>
          <strong>Securitizarea este acum canalul principal de distribuție RV pentru bănci.</strong>
          Generarea de loan tape este o cerință de nivel platformă, nu o sarcină de back-office.
        </li>
      </ul>

      <h2>Ce s-a mutat la valoarea reziduală EV</h2>
      <p>
        <strong>Dominanța leasingului creează un puls sincronizat de aprovizionare la trei
        ani.</strong> Pentru că 70 la sută din vânzările EV britanice sunt fleet și termenul tipic
        de leasing este de trei ani, piața second-hand primește un șoc de aprovizionare predeterminat
        contractual la 36 de luni după fiecare val de originări. Aceasta este o problemă de
        microstructură de piață, nu de prognoză. Volumul este cunoscut la originare; necunoscut
        este dacă infrastructura de dealeri și adâncimea cumpărătorilor retail îl vor absorbi la
        prețul pe care l-a prognozat finanțatorul.
      </p>
      <p>
        <strong>Aprovizionarea mandatată politic întâlnește channel stuffing.</strong> Mandatul ZEV
        britanic cere ca 80 la sută din vânzările de mașini noi să fie electrice până la sfârșitul
        deceniului, cu amenzi anuale. Combinat cu absența tarifelor britanice echivalente măsurilor
        recente ale UE pe EV-urile chinezești, asta forțează atât producătorii legacy cât și pe cei
        noi să împingă volume prin fleet, brokeri de leasing, închirieri zilnice și autoturisme de
        demonstrație. Prețurile de listă ale vehiculelor noi rămân rezonabile. Aceleași vehicule
        ajung pe piața second-hand foarte, foarte ieftin, în cuvintele unui executiv senior de date
        auto. Modelele RV care se ancorează în prețul de listă supraestimează sistematic valorile
        reziduale pe piețele cu channel stuffing puternic.
      </p>
      <p>
        <strong>Intrarea OEM-urilor chineze fără amprentă de captive finance.</strong> Brandurile
        chinezești au atins colectiv 15 la sută din piața britanică, intrând prin parteneriate
        bancare în loc de captive. Riscul de coadă pe valoarea reziduală pe care captive-le l-au
        absorbit istoric stă acum pe bilanțurile băncilor dacă contractul nu îl transferă înapoi.
        Datele timpurii sugerează că rezultatele RV chinezești nu sunt uniform mai proaste:
        principalul intrant chinez are RV la trei ani în Marea Britanie de 39,8 la sută, peste mai
        multe branduri legacy de masă.
      </p>
      <p>
        <strong>Riscul de înlocuire prin tehnologia bateriilor.</strong> Tehnologia bateriilor cu
        încărcare rapidă avansează rapid. Un EV de generație 2024 cu o curbă de încărcare rapidă de
        30 de minute concurează în 2027 cu vehicule noi cu o curbă de 12 minute la puncte de preț
        similare. Acest factor de depreciere este real și în mare parte necaptat de modelele RV
        actuale.
      </p>

      <h2>Toolkit-ul cu patru instrumente</h2>
      <p>
        O prognoză mai bună nu va rezolva problema. Datele nu o susțin încă. Răspunsul constructiv
        este un toolkit cu patru instrumente, fiecare abordând o dimensiune diferită a riscului
        rezidual EV, folosite ca straturi într-un stack de construcție de portofoliu.
      </p>
      <ol>
        <li>
          <strong>Contracte OEM de partajare a riscului.</strong> Rezultatele RV specifice brandului
          partajate înapoi cu OEM-ul prin contract explicit: prag de declanșare, raport de
          partajare, plafon, franșiză, direcția fluxului de numerar, evenimente de lifecycle,
          tratament contabil. Per tranzacție, multi-anual.
        </li>
        <li>
          <strong>Acoperiri de asigurare pe valoarea reziduală.</strong> Pierderea de coadă peste
          așteptarea modelului transferată unui asigurator specialist prin polițe parametrice sau
          structurate, atașate la nivel de tranzacție. Per tranzacție, durata leasingului.
        </li>
        <li>
          <strong>Distribuție prin securitizare și private credit.</strong> Expunerea agregată din
          bilanț transferată investitorilor ABS și vehiculelor de direct lending. Periodic, la
          nivel de portofoliu.
        </li>
        <li>
          <strong>Modele RV augmentate cu AI și input de supraviețuire.</strong> Calitatea
          prognozei la prețuirea tranzacției îmbunătățită prin modele de machine learning care
          consumă penetrarea brandurilor chineze, acțiunile de preț OEM, generația bateriei și
          probabilitatea de supraviețuire a brandului ca features. Continuu, capabilitate internă.
        </li>
      </ol>
      <p>
        Inputul nou merită propria linie. Supraviețuirea brandului nu mai este o preocupare de
        coadă. Un executiv senior dintr-o companie britanică de leasing a spus-o public: nu a fost
        niciodată mai dificil să prezici care OEM-uri vor supraviețui. O probabilitate anualizată
        de 5 la sută de ieșire OEM peste un termen de leasing de trei ani este matematic echivalentă
        cu un haircut RV suplimentar de 14 până la 15 la sută aplicat la anul trei pe bază
        ponderată cu supraviețuirea, înainte de orice considerație despre pierderea infrastructurii
        de remarketing. Modelele RV care nu acceptă probabilitatea de supraviețuire ca input
        prețuiesc în mod silențios greșit fiecare tranzacție.
      </p>

      <h2>Implicații</h2>
      <p>
        <strong>Pentru finanțatorii motor-finance.</strong> Reprețuiți portofoliile EV pe bază
        ponderată cu supraviețuirea în următoarele două trimestre. Construiți capacitate de
        contractare risk-share cu OEM-uri non-captive proactiv, înainte ca următoarea cohortă de
        intrânți să negocieze dintr-o poziție de forță. Tratați probabilitatea de supraviețuire a
        brandului ca input discret de underwriting chiar dacă metodologia este internă și
        direcțională.
      </p>
      <p>
        <strong>Pentru captive-le OEM.</strong> Faceți stress test cărților captive RV pe scenariul
        de tip britanic în fiecare piață europeană, nu doar în Marea Britanie. Oferiți contracte
        risk-share partenerilor bancari în termenii captive-ului; captive-le care așteaptă ca
        băncile să ceară vor negocia formule mai slabe.
      </p>
      <p>
        <strong>Pentru furnizorii de platforme asset-finance.</strong> Exprimați cele patru
        instrumente ca obiecte first-class în platforma core, nu ca personalizări. Tratați stratul
        AI RV ca o capabilitate de feature- și data-engineering, nu ca o problemă de selecție de
        model.
      </p>

      <h2>Semnale pe care le urmărim</h2>
      <ol>
        <li>
          <strong>Convergența RV continentală cu Marea Britanie.</strong> Dacă valorile reziduale la
          trei ani din Germania, Franța și Spania se comprimă spre nivelurile britanice în
          publicările din S2 2026, explicația structurală este confirmată.
        </li>
        <li>
          <strong>Stabilizarea sau comprimarea suplimentară a RV brandurilor chineze.</strong> RV
          la trei ani al principalului intrant chinez în Marea Britanie de 39,8 la sută este
          punctul de date principal pentru a vedea dacă managementul RV chinezesc funcționează la
          scară.
        </li>
        <li>
          <strong>Prima metodologie de agenție de rating pe riscul de supraviețuire a
          brandului.</strong> Până când există, sarcina prețuirii rămâne în întregime în
          cercetarea internă de credit a finanțatorului.
        </li>
        <li>
          <strong>Răspunsul de politică UE la channel stuffing.</strong> Ajustările tarifare vor
          determina dacă traiectoriile RV continentale urmează sau diverg de Marea Britanie.
        </li>
        <li>
          <strong>Cererea de private credit pentru hârtia motor ABS.</strong> Dacă private credit
          se retrage din expunerea auto, băncile se confruntă cu o constrângere de distribuție
          obligatorie și trebuie fie să subscrie mai puțin volum EV, fie să accepte mai mult risc
          reținut.
        </li>
      </ol>

      <h2>Cum ajută Innovia</h2>
      <p>
        Operăm o platformă modulară de asset-finance construită nativ pentru finanțatorii europeni
        și entitățile captive, cu management de contracte multi-tenant în nucleu și puncte de
        integrare configurabile per-jurisdicție (birou de credit, motor fiscal, șabloane de
        documente). Fundațiile pentru toolkit-ul cu patru instrumente sunt în platformă astăzi, și
        deschidem acum patru angajamente de design partner pentru a căli fiecare împotriva
        fluxului real de tranzacții.
      </p>
      <p>
        <strong>Contracte risk-share ca obiect de date first-class.</strong> Modelul nostru de
        partener este tipizat și suportă astăzi rolurile de împrumutat, dealer și asigurator, cu
        izolare completă per-tenant. Îl extindem cu OEM ca tip de contraparte first-class și cu un
        obiect tipizat risk-share bancă-OEM care are câmpuri explicite pentru declanșator, raport
        de partajare, plafon, franșiză, direcția fluxului de numerar, evenimente de lifecycle și
        tratament contabil. Căutăm o bancă sau un finanțator captive care originează volum
        non-captive-OEM în 2026-2027 pentru a co-dezvolta structura.
      </p>
      <p>
        <strong>Acoperiri RV de asigurare la momentul prețuirii tranzacției.</strong> Modulul
        nostru de asigurări suportă produse plătite de client atașate la o tranzacție, iar stratul
        de originare reflectă produsele atașate în plata lunară orientată spre client. Extindem
        atașamentele de asigurare să includă acoperiri RV plătite de finanțator ca o clasă
        separată de produs, cu management de polițe și reconciliere la finalul termenului.
      </p>
      <p>
        <strong>Generarea loan tape ca o capabilitate continuă.</strong> Modelul nostru de date pe
        servicing este izolat end-to-end per tenant și suportă astăzi extragerea loan tape prin
        SQL direct. Formalizăm extractul ca o capabilitate productizată on-demand, cu aliniere de
        schemă stabilă la șabloanele europene comune de auto-ABS și descendență completă inclusiv
        atașamente de instrumente RV.
      </p>
      <p>
        <strong>Un model RV cu supraviețuirea brandului ca input discret.</strong> Am construit un
        strat de machine learning advisory care înglobează trei familii de modele (regresie
        logistică regularizată, explainable boosting, gradient boosting), cu monitorizare expusă
        în UI-ul platformei. Îl extindem la RV de motor-finance cu setul de features pe care
        această lucrare l-a argumentat, inclusiv probabilitatea de supraviețuire a brandului,
        consumabilă dintr-o sursă pe care o selectează finanțatorul.
      </p>
      <p>
        Formatul nostru de angajament Anul Unu este un Parteneriat de Inovație în intervalul 60
        până la 150 mii EUR, dimensionat împotriva uneia sau a două extensii de capabilitate, cu
        IP partajat pe outputul generalizat și utilizare exclusivă a configurației proprii a
        design-partnerului. Nu vindem software de furnizor de pe raft, co-construim capabilitatea
        împotriva fluxului real de tranzacții al partenerului și o călim pentru reutilizare.
      </p>

      <h2>Ce nu facem</h2>
      <ul>
        <li>
          Nu publicăm indici RV proprietari și nu concurăm cu furnizorii consacrați de date pe
          vehicule. Le integrăm datele; nu le replicăm.
        </li>
        <li>
          Nu furnizăm capacitate de underwriting de asigurare. Orchestrăm atașarea contractuală a
          asigurării RV terțe la tranzacție; nu purtăm riscul de asigurare.
        </li>
        <li>
          Nu acționăm ca agenție de rating și nu publicăm probabilități de supraviețuire a
          brandurilor. Le acceptăm ca input-uri din surse pe care le selectează finanțatorul.
        </li>
      </ul>
      <p>
        Dacă sunteți finanțator, captive OEM sau regulator și oricare dintre cele patru extensii
        este pe calea critică a anului 2026 sau 2027, o scurtă conversație despre scope și
        potrivire este pasul natural următor.
      </p>

      <h2>Surse</h2>
      <p>
        Sursă principală: Inagaki, K. și Al-Khalaf, L., &bdquo;Britain&apos;s EV boom hits
        second-hand bump in the road&rdquo;, Financial Times, 23 mai 2026, bazat pe datele
        Indicata UK de urmărire a valorii reziduale și pe datele SMMT despre piața britanică a
        mașinilor noi. Cifrele provenind exclusiv din acest articol sunt tratate ca single-source
        direcționale în cercetarea noastră de bază. Contextul macro structural provine din BNP
        Paribas Leasing Solutions, European Business Equipment Outlook 2026 (mai 2026), și
        volumele Leaseurope H1 2025 pentru leasing-ul european.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <h2>Fünf Erkenntnisse zum Mitnehmen</h2>
      <ul>
        <li>
          <strong>Großbritannien ist Frühindikator, nicht Ausreißer.</strong> Die
          Sieben-Punkte-Lücke beim Restwert gegenüber Kontinentaleuropa spiegelt
          Channel-Stuffing-Druck unter dem ZEV-Mandat plus unverhältnismäßige Exposition gegenüber
          chinesischen OEMs ohne EU-Zollniveau. Beide Kräfte sind in kontinentalen Märkten zeitverzögert vorhanden.
        </li>
        <li>
          <strong>OEM-Neupreis-Aktionen bewegen den Gebrauchtmarkt innerhalb von 90 Tagen.</strong>
          Eine Neupreissenkung im Jahr 2023 durch einen großen EV-Hersteller löste binnen Monaten
          einen Rückgang seiner eigenen Gebrauchtpreise in Großbritannien um 25 Prozent aus und zog
          den breiteren Gebraucht-EV-Markt mit. RV-Modelle, die Unabhängigkeit zwischen Neupreis und
          Gebrauchtabschreibung annehmen, sind für Marken mit hoher Konzentration systematisch falsch.
        </li>
        <li>
          <strong>Bilaterale Risk-Share-Verträge zwischen Bank und OEM werden strukturell für
          Marken ohne Captive.</strong> Frühe Vereinbarungen zwischen großen britischen und
          europäischen Banken und nicht-captiven EV-Herstellern werden inzwischen öffentlich als
          alltäglich beschrieben.
        </li>
        <li>
          <strong>Die Überlebenswahrscheinlichkeit einer Marke ist ein neuer, quantifizierbarer
          Underwriting-Input.</strong> Kreditgeber, die auf eine Rating-Agentur-Methodologie warten,
          kommen zu spät.
        </li>
        <li>
          <strong>Verbriefung ist jetzt der Hauptverteilungskanal für RV bei Banken.</strong>
          Loan-Tape-Generierung ist eine Plattform-Anforderung, keine Back-Office-Aufgabe.
        </li>
      </ul>

      <h2>Was sich beim EV-Restwert verschoben hat</h2>
      <p>
        <strong>Leasing-Dominanz erzeugt einen synchronisierten Drei-Jahres-Angebotspuls.</strong>
        Weil 70 Prozent der britischen EV-Verkäufe Flotte sind und der typische Leasing-Term drei
        Jahre beträgt, erhält der Gebrauchtmarkt 36 Monate nach jeder Origination-Welle einen
        vertraglich vorbestimmten Angebotsschock. Das ist ein Marktmikrostrukturproblem, kein
        Prognoseproblem. Das Volumen ist bei Origination bekannt; unbekannt ist, ob die
        Händlerinfrastruktur und Retail-Käufertiefe es zu dem Preis absorbieren, den der
        Kreditgeber prognostiziert hat.
      </p>
      <p>
        <strong>Politisch verordnetes Angebot trifft auf Channel Stuffing.</strong> Das britische
        ZEV-Mandat verlangt, dass 80 Prozent der Neuwagenverkäufe bis Ende des Jahrzehnts elektrisch
        sein müssen, mit jährlichen Bußgeldern. Kombiniert mit der Abwesenheit britischer Zölle
        äquivalent zu jüngsten EU-Maßnahmen auf in China gebaute EVs zwingt das sowohl Legacy- als
        auch Neueinsteiger, Volumen über Flotte, Leasing-Broker, Tagesvermietung und
        Vorführfahrzeuge zu drücken. Die Listenpreise der Neufahrzeuge bleiben vernünftig. Dieselben
        Fahrzeuge kommen sehr, sehr billig auf den Gebrauchtmarkt, in den Worten einer leitenden
        Automotive-Daten-Führungskraft. RV-Modelle, die sich am Listenpreis verankern,
        überschätzen Restwerte in Märkten mit starkem Channel Stuffing systematisch.
      </p>
      <p>
        <strong>Eintritt chinesischer OEMs ohne Captive-Finance-Fußabdruck.</strong> Chinesische
        Marken erreichten zusammen 15 Prozent des britischen Marktes und traten über
        Bank-Partnerschaften ein, nicht über Captives. Das Restwert-Heckrisiko, das Captives
        historisch absorbiert haben, sitzt jetzt auf den Bankbilanzen, sofern der Vertrag es nicht
        zurücktransferiert. Frühe Daten deuten an, dass chinesische RV-Ergebnisse nicht
        einheitlich schlechter sind: Der britische Drei-Jahres-RV des führenden chinesischen
        Einsteigers liegt bei 39,8 Prozent, vor mehreren etablierten Massenmarken.
      </p>
      <p>
        <strong>Batterietechnologie-Verdrängungsrisiko.</strong> Die Schnelllade-Batterietechnologie
        schreitet schnell voran. Ein 2024er-EV mit einer 30-minütigen Schnelllade-Kurve konkurriert
        2027 gegen neue Fahrzeuge mit einer 12-Minuten-Kurve zu ähnlichen Preispunkten. Dieser
        Abschreibungsfaktor ist real und in heutigen RV-Modellen weitgehend nicht erfasst.
      </p>

      <h2>Das Vier-Instrumente-Toolkit</h2>
      <p>
        Bessere Prognose wird das Problem nicht lösen. Die Datenlage trägt es noch nicht. Die
        konstruktive Antwort ist ein Toolkit aus vier Instrumenten, jedes adressiert eine andere
        Dimension des EV-Restwertrisikos, eingesetzt als Schichten in einem
        Portfolio-Konstruktions-Stack.
      </p>
      <ol>
        <li>
          <strong>OEM-Risk-Share-Verträge.</strong> Markenspezifische RV-Ergebnisse explizit
          vertraglich an den OEM zurückgegeben: Auslöseschwelle, Aufteilungsverhältnis, Cap,
          Selbstbehalt, Cashflow-Richtung, Lifecycle-Ereignisse, Buchhaltungsbehandlung. Pro Deal,
          mehrjährig.
        </li>
        <li>
          <strong>Restwert-Versicherungs-Wraps.</strong> Hecklust über Modellerwartung hinaus an
          einen Spezialversicherer über parametrische oder strukturierte Policen übertragen, auf
          Deal-Ebene angehängt. Pro Deal, Laufzeit des Leasings.
        </li>
        <li>
          <strong>Verbriefung und Private-Credit-Distribution.</strong> Aggregierte
          Bilanzexposition an ABS-Investoren und Direct-Lending-Vehikel übertragen. Periodisch, auf
          Portfolio-Ebene.
        </li>
        <li>
          <strong>KI-augmentierte RV-Modelle mit Survival-Input.</strong> Prognosequalität bei
          Deal-Pricing verbessert durch Machine-Learning-Modelle, die chinesische
          Markenpenetration, OEM-Preisaktionen, Batterie-Jahrgang und
          Markenüberlebenswahrscheinlichkeit als Features konsumieren. Kontinuierlich, interne
          Kapazität.
        </li>
      </ol>
      <p>
        Der neue Input verdient eine eigene Zeile. Markenüberleben ist keine Heckangelegenheit
        mehr. Eine leitende britische Leasing-Führungskraft sagte es öffentlich: Es war noch nie so
        schwierig vorherzusagen, welche OEMs überleben werden. Eine annualisierte 5-Prozent-
        Wahrscheinlichkeit eines OEM-Ausstiegs über einen Drei-Jahres-Leasingtermin ist
        mathematisch äquivalent zu einem zusätzlichen RV-Haircut von 14 bis 15 Prozent, der im
        dritten Jahr auf survival-gewichteter Basis angewendet wird, vor jeder Berücksichtigung des
        Remarketing-Infrastrukturverlustes. RV-Modelle, die die Überlebenswahrscheinlichkeit nicht
        als Input akzeptieren, bepreisen jeden Deal stillschweigend falsch.
      </p>

      <h2>Implikationen</h2>
      <p>
        <strong>Für Motor-Finance-Kreditgeber.</strong> Bepreisen Sie EV-Portfolios in den nächsten
        zwei Quartalen auf survival-gewichteter Basis neu. Bauen Sie Risk-Share-Vertragskompetenz
        mit nicht-captiven OEMs proaktiv auf, bevor die nächste Einsteigerkohorte aus einer
        Stärkeposition verhandelt. Behandeln Sie die Markenüberlebenswahrscheinlichkeit als
        diskreten Underwriting-Input, auch wenn die Methodologie intern und richtungsweisend ist.
      </p>
      <p>
        <strong>Für OEM-Captives.</strong> Stresstesten Sie Captive-RV-Bücher gegen das
        UK-Szenario in jedem europäischen Markt, nicht nur in Großbritannien. Bieten Sie
        Risk-Share-Verträge Bankpartnern zu den Bedingungen des Captives proaktiv an; Captives, die
        warten, bis Banken danach fragen, werden schwächere Formeln verhandeln.
      </p>
      <p>
        <strong>Für Asset-Finance-Plattformanbieter.</strong> Drücken Sie die vier Instrumente als
        First-Class-Objekte in der Kernplattform aus, nicht als Anpassungen. Behandeln Sie die
        KI-RV-Schicht als Feature- und Data-Engineering-Fähigkeit, nicht als Modellwahlproblem.
      </p>

      <h2>Signale, die wir beobachten</h2>
      <ol>
        <li>
          <strong>Kontinentale EV-RV-Konvergenz mit Großbritannien.</strong> Wenn die
          Drei-Jahres-Restwerte in Deutschland, Frankreich und Spanien in den
          H2-2026-Veröffentlichungen Richtung UK-Niveau komprimieren, ist die strukturelle
          Erklärung bestätigt.
        </li>
        <li>
          <strong>Stabilisierung oder weitere Komprimierung des RV chinesischer Marken.</strong>
          Der britische Drei-Jahres-RV des führenden chinesischen Einsteigers bei 39,8 Prozent ist
          der führende Datenpunkt, ob das chinesische RV-Management in der Skalierung funktioniert.
        </li>
        <li>
          <strong>Erste Rating-Agentur-Methodologie zum Markenüberlebensrisiko.</strong> Bis sie
          existiert, bleibt die Last der Bepreisung vollständig bei der internen Kreditforschung
          des Kreditgebers.
        </li>
        <li>
          <strong>EU-politische Antwort auf Channel Stuffing.</strong> Zollanpassungen werden
          bestimmen, ob kontinentale RV-Verläufe Großbritannien folgen oder davon abweichen.
        </li>
        <li>
          <strong>Nachfrage nach Motor-ABS-Papier aus Private Credit.</strong> Wenn Private Credit
          sich aus der Auto-Exposition zurückzieht, stehen Banken vor einer bindenden
          Distributionsbeschränkung und müssen entweder weniger EV-Volumen unterschreiben oder
          mehr zurückbehaltenes Risiko akzeptieren.
        </li>
      </ol>

      <h2>Wie Innovia hilft</h2>
      <p>
        Wir betreiben eine modulare Asset-Finance-Plattform, nativ für europäische Kreditgeber und
        Captive-Einheiten gebaut, mit Multi-Tenant-Vertragsmanagement im Kern und konfigurierbaren
        jurisdiktionsspezifischen Integrationspunkten (Kreditauskunftei, Steuerengine,
        Dokumentvorlagen). Die Grundlagen für das Vier-Instrumente-Toolkit sind heute in der
        Plattform, und wir öffnen jetzt vier Design-Partner-Engagements, um jedes davon gegen
        realen Deal-Fluss zu härten.
      </p>
      <p>
        <strong>Risk-Share-Verträge als First-Class-Datenobjekt.</strong> Unser Partnermodell ist
        typgetrieben und unterstützt heute die Rollen von Kreditnehmer, Händler und Versicherer mit
        vollständiger Tenant-Isolation. Wir erweitern es mit OEM als
        First-Class-Counterparty-Typ und einem typisierten Bank-OEM-Risk-Share-Objekt, das
        explizite Felder für Auslöser, Aufteilungsverhältnis, Cap, Selbstbehalt, Cashflow-Richtung,
        Lifecycle-Ereignisse und Buchhaltungsbehandlung hat. Wir suchen eine Bank oder einen
        Captive-Kreditgeber, der 2026-2027 nicht-captive-OEM-Volumen originiert, um die Struktur
        gemeinsam zu entwickeln.
      </p>
      <p>
        <strong>RV-Versicherungs-Wraps zum Deal-Pricing-Zeitpunkt.</strong> Unser
        Versicherungsmodul unterstützt vom Kunden bezahlte Produkte, die an einen Deal angehängt
        werden, und die Origination-Schicht reflektiert angehängte Produkte in der
        kundenseitigen monatlichen Zahlung. Wir erweitern Versicherungsanhänge um vom Kreditgeber
        bezahlte RV-Schutz-Wraps als separate Produktklasse, mit Policy-Management und
        Abrechnung zum Laufzeitende.
      </p>
      <p>
        <strong>Loan-Tape-Generierung als kontinuierliche Fähigkeit.</strong> Unser Servicing-
        Datenmodell ist Ende-zu-Ende tenant-isoliert und unterstützt Loan-Tape-Extraktion über
        direktes SQL heute. Wir formalisieren den Extrakt als On-Demand-produktisierte Fähigkeit
        mit stabiler Schema-Ausrichtung an gängigen europäischen Auto-ABS-Templates und
        vollständiger Lineage inklusive RV-Instrument-Anhängen.
      </p>
      <p>
        <strong>Ein RV-Modell mit Markenüberleben als diskretem Input.</strong> Wir haben eine
        Advisory-Machine-Learning-Schicht gebaut, die drei Modellfamilien umfasst (regularisierte
        Logistik, Explainable Boosting, Gradient Boosting), mit Monitoring in der Plattform-UI.
        Wir erweitern sie auf Motor-Finance-RV mit dem Feature-Set, das dieses Papier argumentiert
        hat, einschließlich Markenüberlebenswahrscheinlichkeit, konsumierbar aus einer Quelle, die
        der Kreditgeber wählt.
      </p>
      <p>
        Unser Jahr-Eins-Engagement-Format ist eine paketierte Innovation Partnership im Bereich
        von 60 bis 150 Tausend EUR, scoped gegen eine oder zwei der Capability-Erweiterungen, mit
        geteiltem IP am verallgemeinerten Output und exklusiver Nutzung der eigenen Konfiguration
        des Design-Partners. Wir verkaufen keine Anbietersoftware von der Stange, wir bauen die
        Fähigkeit gemeinsam gegen den realen Deal-Fluss des Partners und härten sie für
        Wiederverwendung.
      </p>

      <h2>Was wir nicht tun</h2>
      <ul>
        <li>
          Wir veröffentlichen keine proprietären RV-Indizes und konkurrieren nicht mit etablierten
          Fahrzeug-Datenanbietern. Wir integrieren ihre Daten; wir replizieren sie nicht.
        </li>
        <li>
          Wir bieten keine Versicherungs-Underwriting-Kapazität. Wir orchestrieren die vertragliche
          Anbindung von Drittpartei-RV-Versicherung an den Deal; wir tragen das Versicherungsrisiko
          nicht.
        </li>
        <li>
          Wir agieren nicht als Rating-Agentur und veröffentlichen keine
          Markenüberlebenswahrscheinlichkeiten. Wir akzeptieren sie als Inputs aus Quellen, die der
          Kreditgeber wählt.
        </li>
      </ul>
      <p>
        Wenn Sie ein Kreditgeber, ein OEM-Captive oder ein Regulator sind und eine der vier
        Erweiterungen auf Ihrem 2026er- oder 2027er-Kritikalpfad liegt, ist ein kurzes Gespräch
        über Scope und Passung der richtige nächste Schritt.
      </p>

      <h2>Quellen</h2>
      <p>
        Primärquelle: Inagaki, K. und Al-Khalaf, L., &bdquo;Britain&apos;s EV boom hits
        second-hand bump in the road&ldquo;, Financial Times, 23. Mai 2026, gestützt auf
        Indicata-UK-Restwert-Tracking und SMMT-Daten zum britischen Neuwagenmarkt. Quantitative
        Aussagen, die ausschließlich aus diesem Artikel stammen, werden in unserer
        zugrundeliegenden Recherche als single-source und richtungsweisend behandelt. Den
        strukturellen Makro-Kontext beziehen wir aus BNP Paribas Leasing Solutions, European
        Business Equipment Outlook 2026 (Mai 2026), und den Leaseurope H1 2025
        Leasing-Volumina.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <h2>Cinq enseignements à retenir</h2>
      <ul>
        <li>
          <strong>Le Royaume-Uni est un indicateur avancé, pas une exception.</strong> L&apos;écart
          de sept points entre la valeur résiduelle britannique et continentale reflète la pression
          de channel stuffing sous le mandat ZEV plus l&apos;exposition disproportionnée aux OEM
          chinois en l&apos;absence de tarifs de type UE. Les deux forces sont présentes sur les
          marchés continentaux avec un décalage.
        </li>
        <li>
          <strong>Les actions OEM sur le prix neuf bougent le marché de l&apos;occasion en 90
          jours.</strong> Une coupe de prix en 2023 par un grand constructeur EV a déclenché une
          baisse de 25 pour cent de ses propres prix d&apos;occasion au Royaume-Uni en quelques
          mois, entraînant avec elle le marché élargi de l&apos;occasion EV. Les modèles VR qui
          supposent l&apos;indépendance entre le prix neuf et la dépréciation d&apos;occasion sont
          systématiquement faux pour les marques à forte concentration.
        </li>
        <li>
          <strong>Les contrats bilatéraux de partage de risque banque-OEM deviennent structurels
          pour les marques non captives.</strong> Les arrangements précoces entre grandes banques
          britanniques et européennes et fabricants EV non captifs sont désormais décrits
          publiquement comme courants.
        </li>
        <li>
          <strong>La probabilité de survie de la marque est un nouvel input de souscription
          quantifiable.</strong> Les financeurs qui attendent qu&apos;une agence de notation publie
          une méthodologie arriveront en retard.
        </li>
        <li>
          <strong>La titrisation est désormais le principal canal de distribution VR pour les
          banques.</strong> La génération de loan tape est une exigence de niveau plateforme, pas
          une tâche de back-office.
        </li>
      </ul>

      <h2>Ce qui a bougé sur la valeur résiduelle EV</h2>
      <p>
        <strong>La domination du leasing crée une impulsion d&apos;offre synchronisée à trois
        ans.</strong> Parce que 70 pour cent des ventes EV britanniques sont en flotte et que le
        terme typique de leasing est de trois ans, le marché de l&apos;occasion reçoit un choc
        d&apos;offre contractuellement prédéterminé 36 mois après chaque vague d&apos;originations.
        C&apos;est un problème de microstructure de marché, pas de prévision. Le volume est connu à
        l&apos;origination ; l&apos;inconnu est si l&apos;infrastructure des concessionnaires et la
        profondeur des acheteurs retail l&apos;absorberont au prix prévu par le financeur.
      </p>
      <p>
        <strong>L&apos;offre mandatée par la politique rencontre le channel stuffing.</strong> Le
        mandat ZEV britannique exige que 80 pour cent des ventes de voitures neuves soient
        électriques d&apos;ici la fin de la décennie, avec des amendes annuelles. Combiné avec
        l&apos;absence de tarifs britanniques équivalents aux mesures récentes de l&apos;UE sur les
        EV construits en Chine, cela force tant les acteurs historiques que les nouveaux entrants à
        pousser du volume à travers flotte, courtiers de leasing, location journalière et véhicules
        de démonstration. Les prix catalogue des véhicules neufs restent raisonnables. Les mêmes
        véhicules arrivent sur le marché de l&apos;occasion très, très bon marché, dans les mots
        d&apos;un cadre senior des données automobiles. Les modèles VR ancrés au prix catalogue
        surestiment systématiquement les valeurs résiduelles dans les marchés à fort channel
        stuffing.
      </p>
      <p>
        <strong>Entrée des OEM chinois sans empreinte de captive finance.</strong> Les marques
        chinoises ont atteint collectivement 15 pour cent du marché britannique, entrant via des
        partenariats bancaires plutôt que des captives. Le risque de queue sur la valeur résiduelle
        que les captives ont historiquement absorbé est désormais sur les bilans des banques sauf
        si le contrat le transfère en arrière. Les premières données suggèrent que les résultats
        VR chinois ne sont pas uniformément pires : la VR à trois ans au Royaume-Uni du principal
        entrant chinois est de 39,8 pour cent, devant plusieurs marques historiques de marché de
        masse.
      </p>
      <p>
        <strong>Risque de remplacement par la technologie des batteries.</strong> La technologie
        des batteries à charge rapide avance rapidement. Un EV de génération 2024 avec une courbe
        de charge rapide de 30 minutes concurrence en 2027 des véhicules neufs avec une courbe de
        12 minutes à des prix similaires. Ce facteur de dépréciation est réel et largement non
        capturé par les modèles VR actuels.
      </p>

      <h2>Le toolkit à quatre instruments</h2>
      <p>
        Une meilleure prévision ne résoudra pas le problème. Les données ne le soutiennent pas
        encore. La réponse constructive est un toolkit de quatre instruments, chacun adressant une
        dimension différente du risque résiduel EV, utilisés comme couches dans une pile de
        construction de portefeuille.
      </p>
      <ol>
        <li>
          <strong>Contrats OEM de partage de risque.</strong> Résultats VR spécifiques à la marque
          partagés en retour avec l&apos;OEM via contrat explicite : seuil de déclenchement, ratio
          de partage, plafond, franchise, direction du flux de trésorerie, événements de cycle de
          vie, traitement comptable. Par deal, multi-annuel.
        </li>
        <li>
          <strong>Couvertures d&apos;assurance valeur résiduelle.</strong> Perte de queue au-delà
          de l&apos;espérance du modèle transférée à un assureur spécialisé via des polices
          paramétriques ou structurées, attachées au niveau du deal. Par deal, durée du leasing.
        </li>
        <li>
          <strong>Titrisation et distribution private credit.</strong> Exposition de bilan agrégée
          transférée aux investisseurs ABS et véhicules de direct lending. Périodique, au niveau
          du portefeuille.
        </li>
        <li>
          <strong>Modèles VR augmentés par IA avec input de survie.</strong> Qualité de la
          prévision au pricing du deal améliorée par des modèles de machine learning consommant
          la pénétration des marques chinoises, les actions de prix OEM, le millésime de batterie
          et la probabilité de survie de la marque comme features. Continu, capacité interne.
        </li>
      </ol>
      <p>
        Le nouvel input mérite sa propre ligne. La survie de la marque n&apos;est plus une
        préoccupation de queue. Un cadre senior d&apos;une compagnie britannique de leasing
        l&apos;a dit publiquement : il n&apos;a jamais été aussi difficile de prédire quels OEM
        survivront. Une probabilité annualisée de 5 pour cent de sortie OEM sur un terme de
        leasing de trois ans est mathématiquement équivalente à un haircut VR supplémentaire de 14
        à 15 pour cent appliqué à l&apos;an trois sur une base pondérée par la survie, avant toute
        considération de la perte d&apos;infrastructure de remarketing. Les modèles VR qui
        n&apos;acceptent pas la probabilité de survie comme input mispricent silencieusement
        chaque deal.
      </p>

      <h2>Implications</h2>
      <p>
        <strong>Pour les financeurs motor finance.</strong> Repricez les portefeuilles EV sur une
        base pondérée par la survie dans les deux prochains trimestres. Construisez la capacité de
        contractualisation risk-share avec les OEM non captifs de manière proactive, avant que la
        prochaine cohorte d&apos;entrants ne négocie depuis une position de force. Traitez la
        probabilité de survie de la marque comme input discret de souscription même si la
        méthodologie est interne et directionnelle.
      </p>
      <p>
        <strong>Pour les captives OEM.</strong> Stressez les livres VR captifs contre le scénario
        de type britannique dans chaque marché européen, pas seulement au Royaume-Uni. Offrez des
        contrats risk-share aux partenaires bancaires aux conditions du captif ; les captives qui
        attendent que les banques le demandent négocieront des formules plus faibles.
      </p>
      <p>
        <strong>Pour les fournisseurs de plateformes asset-finance.</strong> Exprimez les quatre
        instruments comme objets first-class dans la plateforme cœur, pas comme personnalisations.
        Traitez la couche IA VR comme une capacité de feature et data engineering, pas comme un
        problème de sélection de modèle.
      </p>

      <h2>Signaux que nous surveillons</h2>
      <ol>
        <li>
          <strong>Convergence des VR continentaux avec le Royaume-Uni.</strong> Si les valeurs
          résiduelles à trois ans en Allemagne, France et Espagne se compriment vers les niveaux
          britanniques dans les publications du S2 2026, l&apos;explication structurelle est
          confirmée.
        </li>
        <li>
          <strong>Stabilisation ou compression supplémentaire de la VR des marques
          chinoises.</strong> La VR à trois ans au Royaume-Uni du principal entrant chinois à 39,8
          pour cent est le point de données principal pour voir si la gestion VR chinoise
          fonctionne à l&apos;échelle.
        </li>
        <li>
          <strong>Première méthodologie d&apos;agence de notation sur le risque de survie de
          marque.</strong> Jusqu&apos;à ce qu&apos;elle existe, le fardeau du pricing reste
          entièrement sur la recherche crédit interne du financeur.
        </li>
        <li>
          <strong>Réponse de politique UE au channel stuffing.</strong> Les ajustements tarifaires
          détermineront si les trajectoires VR continentales suivent ou divergent du Royaume-Uni.
        </li>
        <li>
          <strong>Demande private credit pour le papier motor ABS.</strong> Si le private credit se
          retire de l&apos;exposition auto, les banques font face à une contrainte de distribution
          contraignante et doivent soit souscrire moins de volume EV, soit accepter plus de risque
          retenu.
        </li>
      </ol>

      <h2>Comment Innovia aide</h2>
      <p>
        Nous exploitons une plateforme asset-finance modulaire conçue nativement pour les financeurs
        européens et les entités captives, avec une gestion de contrats multi-tenant au cœur et des
        points d&apos;intégration configurables par juridiction (bureau de crédit, moteur fiscal,
        modèles de documents). Les fondations du toolkit à quatre instruments sont dans la
        plateforme aujourd&apos;hui, et nous ouvrons maintenant quatre engagements de
        design-partner pour durcir chacun contre le flux réel de deals.
      </p>
      <p>
        <strong>Contrats risk-share comme objet de données first-class.</strong> Notre modèle de
        partenaire est typé et supporte aujourd&apos;hui les rôles d&apos;emprunteur, concessionnaire
        et assureur, avec isolation tenant complète. Nous l&apos;étendons avec OEM comme type de
        contrepartie first-class et un objet typé risk-share banque-OEM avec des champs explicites
        pour déclencheur, ratio de partage, plafond, franchise, direction du flux de trésorerie,
        événements de cycle de vie et traitement comptable. Nous recherchons une banque ou un
        financeur captif originant du volume non-captive-OEM en 2026-2027 pour co-développer la
        structure.
      </p>
      <p>
        <strong>Couvertures VR au moment du pricing du deal.</strong> Notre module
        d&apos;assurance supporte des produits payés par le client attachés à un deal, et la couche
        d&apos;origination reflète les produits attachés dans la mensualité orientée client. Nous
        étendons les attachements d&apos;assurance pour inclure des couvertures VR payées par le
        financeur comme classe de produit séparée, avec gestion de polices et réconciliation à fin
        de terme.
      </p>
      <p>
        <strong>Génération de loan tape comme capacité continue.</strong> Notre modèle de données
        côté servicing est isolé tenant de bout en bout et supporte l&apos;extraction de loan tape
        via SQL direct aujourd&apos;hui. Nous formalisons l&apos;extrait comme capacité productisée
        on-demand, avec alignement de schéma stable aux templates européens communs auto-ABS et
        lineage complète y compris les attachements d&apos;instruments VR.
      </p>
      <p>
        <strong>Un modèle VR avec la survie de marque comme input discret.</strong> Nous avons
        construit une couche advisory de machine learning enveloppant trois familles de modèles
        (logistique régularisée, explainable boosting, gradient boosting), avec monitoring exposé
        dans l&apos;UI de la plateforme. Nous l&apos;étendons au VR motor finance avec le set de
        features que ce papier a argumenté, y compris la probabilité de survie de marque,
        consommable depuis une source que le financeur sélectionne.
      </p>
      <p>
        Notre format d&apos;engagement Année Un est un Partenariat d&apos;Innovation packagé dans
        la fourchette de 60 à 150 mille EUR, scoped contre une ou deux des extensions de capacité,
        avec IP partagée sur le livrable généralisé et usage exclusif de la configuration propre
        du design-partner. Nous ne vendons pas de logiciel fournisseur sur étagère, nous
        co-construisons la capacité contre le flux réel de deals du partenaire et la durcissons
        pour la réutilisation.
      </p>

      <h2>Ce que nous ne ferons pas</h2>
      <ul>
        <li>
          Nous ne publions pas d&apos;indices VR propriétaires et ne concurrençons pas les
          fournisseurs établis de données véhicules. Nous intégrons leurs données ; nous ne les
          répliquons pas.
        </li>
        <li>
          Nous ne fournissons pas de capacité de souscription d&apos;assurance. Nous orchestrons
          l&apos;attachement contractuel d&apos;assurance VR tierce au deal ; nous ne portons pas
          le risque d&apos;assurance.
        </li>
        <li>
          Nous n&apos;agissons pas comme agence de notation et ne publions pas de probabilités de
          survie de marque. Nous les acceptons comme inputs depuis des sources que le financeur
          sélectionne.
        </li>
      </ul>
      <p>
        Si vous êtes un financeur, un captif OEM ou un régulateur et que l&apos;une des quatre
        extensions est sur votre chemin critique 2026 ou 2027, une courte conversation sur scope
        et adéquation est l&apos;étape naturelle suivante.
      </p>

      <h2>Sources</h2>
      <p>
        Source principale : Inagaki, K. et Al-Khalaf, L., «&nbsp;Britain&apos;s EV boom hits
        second-hand bump in the road&nbsp;», Financial Times, 23 mai 2026, s&apos;appuyant sur le
        suivi de valeur résiduelle Indicata UK et les données SMMT du marché britannique du
        véhicule neuf. Les affirmations chiffrées issues exclusivement de cet article sont
        traitées comme single-source directionnelles dans notre recherche sous-jacente. Le
        contexte macro structurel est tiré de BNP Paribas Leasing Solutions, European Business
        Equipment Outlook 2026 (mai 2026), et des volumes Leaseurope H1 2025 du leasing
        européen.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <h2>Cinque cose da portarsi a casa</h2>
      <ul>
        <li>
          <strong>Il Regno Unito è un indicatore anticipato, non un&apos;eccezione.</strong> Il
          divario di sette punti tra il valore residuo britannico e quello continentale riflette
          la pressione di channel stuffing sotto il mandato ZEV più l&apos;esposizione
          sproporzionata agli OEM cinesi in assenza di dazi di tipo UE. Entrambe le forze sono
          presenti sui mercati continentali con un ritardo.
        </li>
        <li>
          <strong>Le azioni OEM sul prezzo del nuovo muovono il mercato dell&apos;usato in 90
          giorni.</strong> Un taglio di prezzo nel 2023 da parte di un grande costruttore EV ha
          innescato un calo del 25 percento dei propri prezzi dell&apos;usato nel Regno Unito in
          pochi mesi, trascinando con sé il più ampio mercato dell&apos;usato EV. I modelli VR che
          assumono indipendenza tra il prezzo del nuovo e la svalutazione dell&apos;usato sono
          sistematicamente sbagliati per marchi ad alta concentrazione.
        </li>
        <li>
          <strong>I contratti bilaterali di condivisione del rischio banca-OEM stanno diventando
          strutturali per i marchi non captive.</strong> Gli accordi precoci tra grandi banche
          britanniche ed europee e produttori EV non captive sono ora descritti pubblicamente come
          comuni.
        </li>
        <li>
          <strong>La probabilità di sopravvivenza del brand è un nuovo input di sottoscrizione
          quantificabile.</strong> I finanziatori che aspettano che le agenzie di rating pubblichino
          una metodologia arriveranno tardi.
        </li>
        <li>
          <strong>La cartolarizzazione è ora il principale canale di distribuzione VR per le
          banche.</strong> La generazione di loan tape è un requisito a livello piattaforma, non
          un&apos;attività di back-office.
        </li>
      </ul>

      <h2>Cosa si è spostato sul valore residuo EV</h2>
      <p>
        <strong>Il dominio del leasing crea un impulso di offerta sincronizzato a tre anni.</strong>
        Poiché il 70 percento delle vendite EV britanniche è flotta e il termine tipico di leasing
        è di tre anni, il mercato dell&apos;usato riceve uno shock di offerta predeterminato
        contrattualmente 36 mesi dopo ogni ondata di originations. Questo è un problema di
        microstruttura di mercato, non di previsione. Il volume è noto all&apos;origination;
        l&apos;ignoto è se l&apos;infrastruttura dei concessionari e la profondità degli acquirenti
        retail lo assorbiranno al prezzo previsto dal finanziatore.
      </p>
      <p>
        <strong>L&apos;offerta mandata politicamente incontra il channel stuffing.</strong> Il
        mandato ZEV britannico richiede che l&apos;80 percento delle vendite di auto nuove sia
        elettrico entro la fine del decennio, con multe annuali. Combinato con l&apos;assenza di
        dazi britannici equivalenti alle recenti misure UE sugli EV costruiti in Cina, costringe
        sia i costruttori legacy che i nuovi entranti a spingere volumi attraverso flotte, broker
        di leasing, noleggio giornaliero e vetture dimostrative. I prezzi di listino dei veicoli
        nuovi restano ragionevoli. Gli stessi veicoli arrivano sul mercato dell&apos;usato molto,
        molto economici, secondo le parole di un dirigente senior di dati automotive. I modelli VR
        ancorati al prezzo di listino sovrastimano sistematicamente i valori residui nei mercati
        con forte channel stuffing.
      </p>
      <p>
        <strong>Ingresso degli OEM cinesi senza impronta di captive finance.</strong> I marchi
        cinesi hanno collettivamente raggiunto il 15 percento del mercato britannico, entrando
        attraverso partnership bancarie invece che captive. Il rischio di coda sul valore residuo
        che le captive hanno storicamente assorbito ora siede sui bilanci delle banche a meno che
        il contratto non lo trasferisca indietro. I primi dati suggeriscono che i risultati VR
        cinesi non sono uniformemente peggiori: il VR a tre anni nel Regno Unito del principale
        entrante cinese è del 39,8 percento, davanti a diversi marchi legacy di massa.
      </p>
      <p>
        <strong>Rischio di sostituzione dalla tecnologia delle batterie.</strong> La tecnologia
        delle batterie a ricarica rapida avanza velocemente. Un EV di generazione 2024 con una
        curva di ricarica rapida di 30 minuti compete nel 2027 con veicoli nuovi con una curva di
        12 minuti a prezzi simili. Questo fattore di svalutazione è reale e in gran parte non
        catturato dagli attuali modelli VR.
      </p>

      <h2>Il toolkit a quattro strumenti</h2>
      <p>
        Una migliore previsione non risolverà il problema. I dati non lo supportano ancora. La
        risposta costruttiva è un toolkit di quattro strumenti, ciascuno che affronta una
        dimensione diversa del rischio residuo EV, usati come strati in uno stack di costruzione di
        portafoglio.
      </p>
      <ol>
        <li>
          <strong>Contratti OEM di condivisione del rischio.</strong> Risultati VR specifici del
          brand condivisi indietro all&apos;OEM tramite contratto esplicito: soglia di attivazione,
          rapporto di condivisione, cap, franchigia, direzione del flusso di cassa, eventi di ciclo
          di vita, trattamento contabile. Per deal, multi-annuale.
        </li>
        <li>
          <strong>Coperture assicurative sul valore residuo.</strong> Perdita di coda oltre
          l&apos;aspettativa del modello trasferita a un assicuratore specializzato tramite polizze
          parametriche o strutturate, attaccate a livello di deal. Per deal, durata del leasing.
        </li>
        <li>
          <strong>Cartolarizzazione e distribuzione private credit.</strong> Esposizione di
          bilancio aggregata trasferita a investitori ABS e veicoli di direct lending. Periodica,
          a livello di portafoglio.
        </li>
        <li>
          <strong>Modelli VR aumentati con AI e input di sopravvivenza.</strong> Qualità della
          previsione al pricing del deal migliorata da modelli di machine learning che consumano
          la penetrazione dei marchi cinesi, le azioni di prezzo OEM, l&apos;annata della batteria
          e la probabilità di sopravvivenza del brand come features. Continuo, capacità interna.
        </li>
      </ol>
      <p>
        Il nuovo input merita la sua linea. La sopravvivenza del brand non è più una
        preoccupazione di coda. Un dirigente senior di una compagnia britannica di leasing
        l&apos;ha detto pubblicamente: non è mai stato più difficile prevedere quali OEM
        sopravviveranno. Una probabilità annualizzata del 5 percento di uscita OEM su un termine
        di leasing di tre anni è matematicamente equivalente a un haircut VR aggiuntivo del 14
        al 15 percento applicato all&apos;anno tre su base ponderata per la sopravvivenza, prima
        di qualsiasi considerazione sulla perdita dell&apos;infrastruttura di remarketing. I
        modelli VR che non accettano la probabilità di sopravvivenza come input mispricano
        silenziosamente ogni deal.
      </p>

      <h2>Implicazioni</h2>
      <p>
        <strong>Per i finanziatori motor finance.</strong> Riprezzare i portafogli EV su base
        ponderata per la sopravvivenza nei prossimi due trimestri. Costruire capacità di
        contrattazione risk-share con OEM non captive in modo proattivo, prima che la prossima
        coorte di entranti negozi da una posizione di forza. Trattare la probabilità di
        sopravvivenza del brand come input discreto di sottoscrizione anche se la metodologia è
        interna e direzionale.
      </p>
      <p>
        <strong>Per le captive OEM.</strong> Sottoporre a stress test i libri VR captive contro lo
        scenario di tipo britannico in ogni mercato europeo, non solo nel Regno Unito. Offrire
        contratti risk-share ai partner bancari alle condizioni della captive; le captive che
        aspettano che le banche lo chiedano negozieranno formule più deboli.
      </p>
      <p>
        <strong>Per i fornitori di piattaforme asset-finance.</strong> Esprimere i quattro
        strumenti come oggetti first-class nella piattaforma core, non come personalizzazioni.
        Trattare lo strato AI VR come una capacità di feature e data engineering, non come un
        problema di selezione del modello.
      </p>

      <h2>Segnali che monitoriamo</h2>
      <ol>
        <li>
          <strong>Convergenza dei VR continentali con il Regno Unito.</strong> Se i valori residui
          a tre anni in Germania, Francia e Spagna si comprimono verso i livelli britannici nelle
          pubblicazioni del H2 2026, la spiegazione strutturale è confermata.
        </li>
        <li>
          <strong>Stabilizzazione o ulteriore compressione del VR dei marchi cinesi.</strong> Il
          VR a tre anni nel Regno Unito del principale entrante cinese al 39,8 percento è il punto
          dati principale per vedere se la gestione VR cinese funziona in scala.
        </li>
        <li>
          <strong>Prima metodologia di agenzia di rating sul rischio di sopravvivenza del
          brand.</strong> Finché non esiste, l&apos;onere del pricing resta interamente sulla
          ricerca crediti interna del finanziatore.
        </li>
        <li>
          <strong>Risposta di politica UE al channel stuffing.</strong> Gli aggiustamenti tariffari
          determineranno se le traiettorie VR continentali seguono o divergono dal Regno Unito.
        </li>
        <li>
          <strong>Domanda private credit per la carta motor ABS.</strong> Se il private credit si
          ritira dall&apos;esposizione auto, le banche affrontano un vincolo di distribuzione
          stringente e devono sottoscrivere meno volume EV o accettare più rischio trattenuto.
        </li>
      </ol>

      <h2>Come aiuta Innovia</h2>
      <p>
        Operiamo una piattaforma asset-finance modulare costruita nativamente per finanziatori
        europei ed entità captive, con gestione contratti multi-tenant nel nucleo e punti di
        integrazione configurabili per giurisdizione (bureau di credito, motore fiscale, template
        di documenti). Le fondamenta del toolkit a quattro strumenti sono nella piattaforma oggi,
        e stiamo ora aprendo quattro impegni di design-partner per indurire ciascuno contro il
        flusso reale di deal.
      </p>
      <p>
        <strong>Contratti risk-share come oggetto dati first-class.</strong> Il nostro modello di
        partner è tipizzato e supporta oggi i ruoli di mutuatario, concessionario e assicuratore,
        con isolamento tenant completo. Lo estendiamo con OEM come tipo di controparte first-class
        e un oggetto tipizzato risk-share banca-OEM con campi espliciti per trigger, rapporto di
        condivisione, cap, franchigia, direzione del flusso di cassa, eventi di ciclo di vita e
        trattamento contabile. Cerchiamo una banca o un finanziatore captive che origina volume
        non-captive-OEM nel 2026-2027 per co-sviluppare la struttura.
      </p>
      <p>
        <strong>Coperture VR al momento del pricing del deal.</strong> Il nostro modulo
        assicurativo supporta prodotti pagati dal cliente attaccati a un deal, e lo strato di
        origination riflette i prodotti attaccati nella rata mensile orientata al cliente.
        Estendiamo gli attaccamenti assicurativi per includere coperture VR pagate dal finanziatore
        come classe di prodotto separata, con gestione polizze e riconciliazione a fine termine.
      </p>
      <p>
        <strong>Generazione di loan tape come capacità continua.</strong> Il nostro modello dati
        sul lato servicing è tenant-isolato end-to-end e supporta oggi l&apos;estrazione di loan
        tape tramite SQL diretto. Stiamo formalizzando l&apos;estrazione come capacità
        productized on-demand, con allineamento di schema stabile ai template europei comuni
        auto-ABS e lineage completo inclusi gli attaccamenti di strumenti VR.
      </p>
      <p>
        <strong>Un modello VR con la sopravvivenza del brand come input discreto.</strong> Abbiamo
        costruito uno strato advisory di machine learning che racchiude tre famiglie di modelli
        (logistica regolarizzata, explainable boosting, gradient boosting), con monitoring esposto
        nella UI della piattaforma. Lo estendiamo al VR motor finance con il set di features che
        questo paper ha argomentato, inclusa la probabilità di sopravvivenza del brand,
        consumabile da una fonte che il finanziatore seleziona.
      </p>
      <p>
        Il nostro formato di impegno Anno Uno è un Innovation Partnership pacchettizzato nella
        fascia da 60 a 150 mila EUR, scoped contro una o due delle estensioni di capacità, con IP
        condivisa sull&apos;output generalizzato e uso esclusivo della configurazione propria del
        design-partner. Non vendiamo software vendor da scaffale, co-costruiamo la capacità contro
        il flusso reale di deal del partner e la induriamo per il riutilizzo.
      </p>

      <h2>Cosa non faremo</h2>
      <ul>
        <li>
          Non pubblichiamo indici VR proprietari e non competiamo con i fornitori consolidati di
          dati sui veicoli. Integriamo i loro dati; non li replichiamo.
        </li>
        <li>
          Non forniamo capacità di sottoscrizione assicurativa. Orchestriamo l&apos;attaccamento
          contrattuale di assicurazione VR di terze parti al deal; non portiamo il rischio
          assicurativo.
        </li>
        <li>
          Non agiamo come agenzia di rating e non pubblichiamo probabilità di sopravvivenza dei
          brand. Le accettiamo come input da fonti che il finanziatore seleziona.
        </li>
      </ul>
      <p>
        Se siete un finanziatore, un captive OEM o un regolatore e una delle quattro estensioni è
        sul vostro percorso critico 2026 o 2027, una breve conversazione su scope e adeguatezza è
        il passo naturale successivo.
      </p>

      <h2>Fonti</h2>
      <p>
        Fonte principale: Inagaki, K. e Al-Khalaf, L., &laquo;Britain&apos;s EV boom hits
        second-hand bump in the road&raquo;, Financial Times, 23 maggio 2026, basato sul
        tracciamento del valore residuo Indicata UK e sui dati SMMT del mercato britannico
        dell&apos;auto nuova. Le affermazioni quantitative tratte esclusivamente da questo
        articolo sono trattate come single-source direzionali nella nostra ricerca di base. Il
        contesto macro strutturale è tratto da BNP Paribas Leasing Solutions, European Business
        Equipment Outlook 2026 (maggio 2026), e dai volumi Leaseurope H1 2025 del leasing
        europeo.
      </p>
    </div>
  );
}
