/**
 * Whitepaper: The Residual Value Data Object.
 *
 * Voice and discipline rules:
 *  - First person plural ("we"). Innovia is the publisher.
 *  - No em dashes anywhere, in any language.
 *  - No named competitors, no named clients.
 *  - Quantitative claims sourced from Ayvens European Mobility Guide 2026
 *    (per-jurisdiction TCO and cluster classification, single-source directional),
 *    ACEA April 2026 release (powertrain trajectory), and Financial Times
 *    23 May 2026 (UK RV compression, single-source directional via Indicata
 *    and SMMT).
 *  - Companion to PricingEvResidualValueRisk.tsx (May 2026), which covered the
 *    four-instrument toolkit. This paper covers the data object beneath those
 *    instruments.
 */

import type { AppLocale } from '@/i18n/routing';

interface ContentProps {
  locale: AppLocale;
}

export default function ResidualValueDataObject({ locale }: ContentProps) {
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
          <strong>Model quality is bounded above by the data object underneath.</strong> A more
          sophisticated forecasting model trained on the same impoverished schema delivers
          marginally better forecasts of the wrong thing. The hardest residual value gains in 2026
          come from extending the schema, not refining the model on the same schema.
        </li>
        <li>
          <strong>The 2026 problem has four structural dimensions the dominant objects do not
          represent natively.</strong> Battery state-of-health, OEM survival probability,
          per-jurisdiction fiscal overlay, and typed instrument attachments. Each requires its own
          structural extension, not a column added to an existing table.
        </li>
        <li>
          <strong>The reference object is publishable.</strong> Nine field groups, two
          non-negotiable conventions (effective-dating on every field and explicit provenance with
          confidence per field), and explicit typed attachments for risk-share contracts, residual
          value insurance, and securitisation tranches. We publish the structure in this paper.
        </li>
        <li>
          <strong>Per-jurisdiction overlay is a native construct, not a customisation.</strong> A
          multi-country operator who hardcodes a single fiscal treatment per implementation pays
          for the privilege every time a tax code moves, which on 2025-2026 evidence is roughly two
          markets per year.
        </li>
        <li>
          <strong>The schema-first operators will win the next design-partner cycle.</strong>
          Operators publishing a reference object force the conversation to start with their
          structure. Operators selling a feature list against a competing vendor&apos;s slide deck
          negotiate from a weaker position.
        </li>
      </ul>

      <h2>A model cannot be better than its object</h2>
      <p>
        A residual value model is a function from features to a predicted residual. The function
        can be linear, regularised, tree-based, neural, ensembled. The model architecture matters
        at the margin. The features matter structurally. If a feature is not in the schema, the
        model cannot learn from it, and no amount of architectural sophistication recovers the
        information. This is true at training time and equally true at inference time.
      </p>
      <p>
        Two layers of provenance compound the effect. The raw data layer is what the operator
        collects: vehicle telematics, contract events, transaction history, third-party valuations,
        market signals. The derived feature layer is what the modelling team can construct from
        the raw layer through engineering: battery state-of-health curves, OEM concentration
        ratios, per-jurisdiction TCO deltas, channel-stuffing intensity indices. A model can only
        use the derived feature layer. A modelling team can only construct derived features from
        raw data that has been captured. Raw data can only be captured at the granularity and
        frequency the data object accepts. The chain runs object to raw to derived to model to
        forecast, and the object decision is the upstream constraint on everything downstream.
      </p>
      <p>
        This sequencing has a temporal consequence. A schema decision made in 2014 to represent
        the manufacturer as a fifty-character string column with no foreign key to a counterparty
        entity becomes a structural debt twelve years later when the operator wants to price OEM
        survival probability and discovers that the manufacturer field cannot be joined to a
        credit risk view because there is no entity behind the string. The team can rewrite the
        field, but the back book carries the old representation; reconciling history with the new
        schema is a multi-quarter migration project with its own data-quality risks. Schema
        decisions are five-year debt at minimum.
      </p>
      <p>
        This is not a critique of any specific schema. It is an argument about the order of
        operations. Operators investing in model sophistication on top of a 2014 schema are doing
        the second move before the first. The first move is to specify the object that the 2026
        problem requires, audit the gap against the current schema, and sequence a migration. The
        second move is to select and train the model.
      </p>

      <h2>The four dimensions the 2026 object must represent</h2>
      <p>
        Four dimensions reshape residual value risk in 2026. Each requires a structural extension
        to the data object, not a column added to an existing table. Each is fundamentally a
        schema problem, not a model problem.
      </p>
      <p>
        <strong>Battery as a separable asset.</strong> A battery-electric vehicle is not a single
        asset with a residual value curve. It is a vehicle chassis and a battery pack, each with
        its own depreciation trajectory, its own warranty regime, and its own end-of-first-life
        path. The battery degrades on a curve that depends on charging history, climate, depth of
        discharge cycles, fast-charge ratio, and electrochemistry vintage. By 2027, second-life
        battery markets and stationary storage applications will provide a residual path for
        batteries independent of vehicle remarketing. An object that represents the vehicle as a
        single unit with a single residual value cannot price either side of this split.
      </p>
      <p>
        <strong>OEM counterparty risk.</strong> A residual value forecast made today against a
        vehicle whose manufacturer ceases European operations in 2028 is a forecast that excludes
        the dominant risk factor of that contract. Channel collapse, warranty void, parts
        availability, brand value: all collapse together if the manufacturer exits. The residual
        value model needs an input on the probability that the brand still exists at end of
        contract. That input has to live somewhere. The dominant industry objects have nowhere to
        put it because the manufacturer is a string column, not a counterparty entity with its
        own risk profile, credit rating, financial reporting and brand-survival probability
        estimate.
      </p>
      <p>
        <strong>Per-jurisdiction fiscal overlay.</strong> The same vehicle financed at the same
        OEM list price on the same day has materially different total cost of ownership and
        resale economics across 28 European jurisdictions. The driver is not vehicle attributes.
        It is fiscal regime: benefit-in-kind treatment, registration tax, road tax, deductibility,
        low-emission zone rules, charging infrastructure subsidy, used-vehicle VAT treatment. A
        2026 European motor finance portfolio holds the same VIN across multiple jurisdictions,
        and the residual value reflects each jurisdiction&apos;s fiscal stack. An object that
        represents fiscal context as a single jurisdictional flag misses the dimension entirely.
      </p>
      <p>
        <strong>Typed instrument attachments.</strong> Modern residual value risk is rarely held
        undivided on a single balance sheet. Risk-share contracts with OEMs, residual value
        insurance wraps, securitisation tranches, and direct private-credit placements move pieces
        of the residual exposure to counterparties under formal contracts with explicit triggers,
        share ratios, caps, deductibles, cash-flow directions and reporting obligations. These are
        not side-letters or footnotes. They are first-class financial contracts that attach to
        specific deals or pools and that alter the lender&apos;s residual exposure at deal level.
        The dominant industry objects treat these as documents stored alongside the contract or
        as fields on a customisations table. Neither representation allows the residual value
        model to ingest the attachment as a feature.
      </p>
      <p>
        These four dimensions are independent. An object that extends to handle the first three
        but not the fourth still mismatches the 2026 problem. An object that handles all four with
        the wrong relational structure between them generates the right fields but the wrong
        joins. The structural completeness of the object is the prerequisite, not the sum of
        column additions.
      </p>

      <h2>The anatomy of the reference object</h2>
      <p>
        The reference object for European motor finance in 2026 is built from nine field groups.
        Two conventions govern the whole structure: every field is effective-dated, and every
        field carries explicit provenance with a confidence score. The field groups are described
        below at the level of intent and key fields. Full DDL and migration patterns are in the
        platform reference implementation accompanying this paper.
      </p>
      <ol>
        <li>
          <strong>Vehicle identity and vintage.</strong> VIN, build date, model year, generation,
          body type, segment, drivetrain category, propulsion type. Original equipment
          configuration as registered with the manufacturer. WLTP-normalised emissions and energy
          consumption at type-approval. List price at first registration in the country of first
          registration. Sufficient identity to pin the vehicle uniquely and to reconstruct its
          commercial context.
        </li>
        <li>
          <strong>Battery, separable from vehicle.</strong> A distinct battery entity with its own
          identity, cell chemistry generation, nominal capacity at manufacture, current
          state-of-health at most recent measurement, state-of-health curve coefficients fitted to
          the vehicle&apos;s own history, warranty residual at lease end, fast-charge cycle count,
          average depth of discharge, climate exposure indicator. Linked to the vehicle by foreign
          key with separate lifecycle so that battery swap, second-life redirection or pack
          replacement is representable without rewriting the vehicle record.
        </li>
        <li>
          <strong>Usage telemetry summary.</strong> Periodic aggregations from connected-vehicle
          telematics: total kilometres, kilometres by use category, average daily distance,
          charging behaviour, driving aggression index, accident exposure flags. Raw telemetry
          remains in the source system; the object holds the rolled-up features the residual
          value model actually consumes.
        </li>
        <li>
          <strong>OEM counterparty entity.</strong> The manufacturer is an entity, not a string.
          Fields: legal entity identifier, European market presence indicator, captive finance arm
          presence, vehicle market share by segment and country, current credit rating where one
          exists, brand-survival probability estimate from the operator&apos;s internal credit
          research with explicit methodology reference, historical pattern of price actions on new
          vehicles, public regulatory or legal exposure flags. The contract object refers to this
          entity by foreign key; the entity is updated independently of any single vehicle.
        </li>
        <li>
          <strong>Fiscal and regulatory context, snapshot plus projection.</strong> Jurisdiction
          of registration, jurisdiction of effective use, benefit-in-kind regime applicable at
          contract start, deductibility regime, registration tax paid at first registration, road
          tax obligation per year, low-emission zone applicability, charging infrastructure
          subsidy stack at contract start. The same fields are stored a second time as a
          projection to contract end, reflecting known scheduled changes. The projection is
          updated whenever a jurisdictional rule changes, with effective-dating of the projection
          itself so that historical model inputs are preserved.
        </li>
        <li>
          <strong>Channel and remarketing intent.</strong> Origination channel, expected
          remarketing channel at end of contract, expected condition grade at return, remarketing
          geography, and a flag for whether the planned remarketing channel is currently
          operational for this combination of vehicle, jurisdiction and condition. The flag is the
          most important field in this group. A &ldquo;yes&rdquo; against a combination where the
          channel does not exist in practice is the most common source of historical residual
          value over-estimation.
        </li>
        <li>
          <strong>Typed instrument attachments.</strong> Each instrument is a first-class object
          linked to the contract: risk-share contract, residual value insurance wrap,
          securitisation tranche assignment, direct private-credit placement. The contract object
          exposes a net residual exposure derived field that aggregates over the attachments to
          produce the residual value the lender actually carries.
        </li>
        <li>
          <strong>Provenance and confidence per field.</strong> Every field in the object carries
          metadata: source system, capture timestamp, transformation lineage, and a confidence
          score on a published scale. A battery state-of-health from an OBD readout three weeks
          ago at the dealership has higher confidence than one inferred from charging behaviour
          against a manufacturer-published degradation curve. The model can ingest confidence as a
          feature, weighting its own uncertainty accordingly.
        </li>
        <li>
          <strong>Effective-dating envelope.</strong> No field is overwritten in place. Every
          change creates a new versioned row with effective-from and effective-to timestamps. A
          2026 query asks &ldquo;what was the projected fiscal regime as known to us when this
          contract was originated&rdquo;, and the object answers exactly. A 2028 query asks
          &ldquo;what is the projected fiscal regime as known to us today&rdquo;, and the object
          answers exactly. The two answers diverge in the normal case, and the divergence is
          itself a model input.
        </li>
      </ol>
      <p>
        These nine groups, plus the two conventions, are the reference. Operators do not need to
        implement all of them at full depth on day one. The argument is sequencing: a migration
        roadmap that adds the four 2026 dimensions first, layers provenance and effective-dating
        across the existing structure second, and refines individual field depths third, is the
        order that delivers structural completeness ahead of the next budget cycle.
      </p>

      <h2>The same VIN, different residuals in 28 jurisdictions</h2>
      <p>
        Per-jurisdiction overlay is the dimension that single-country operators find
        counterintuitive and multi-country operators recognise immediately. The same vehicle,
        financed by the same lender, against the same contract template, has a materially
        different residual value trajectory across European jurisdictions, and the variance is
        driven by fiscal stack, not vehicle attributes.
      </p>
      <p>
        The canonical industry observatory on this dimension demonstrates the variance directly.
        Across the 28 markets it scores, a battery-electric vehicle competes against an internal
        combustion equivalent on total cost of ownership at EUR 0.25 per kilometre in Norway, EUR
        0.33 per kilometre in Belgium, and EUR 0.33 per kilometre in Romania, against ICE
        counterparts at EUR 0.45, EUR 0.40 and EUR 0.28 respectively. The same battery-electric
        vehicle is roughly 80 percent as expensive to run as its ICE counterpart in Norway, 83
        percent as expensive in Belgium, and 18 percent more expensive in Romania. The technology
        is the same. The fiscal architecture is not.
      </p>
      <p>
        The residual value implication is direct. A used battery-electric vehicle in Norway
        re-enters a market where its primary substitute, used ICE, is structurally penalised by
        the fiscal regime, and the BEV retains residual value supported by buyer demand. A used
        battery-electric vehicle in Romania re-enters a market where its primary substitute is
        structurally favoured by the fiscal regime, and the BEV finds shallower buyer demand at
        the same headline price. The same VIN, same year of first registration, same condition
        grade, produces different end-of-contract economics depending on which jurisdiction the
        vehicle returns to.
      </p>
      <p>
        Three cluster archetypes simplify the modelling problem. The Developed cluster (13
        markets including Norway, Belgium, the Netherlands, Austria, Sweden, Finland, Denmark,
        Portugal, France, Luxembourg, the United Kingdom, Germany, Switzerland) shares the
        structural characteristic that the BEV-versus-ICE total cost of ownership favours the
        BEV. The Transitioning cluster (Ireland, Greece, Italy, Spain, Slovenia, Hungary) shares
        the characteristic of fiscal regimes converging toward the Developed cluster on a
        measurable trajectory. The Emerging cluster (Bulgaria, Croatia, Czechia, Estonia, Latvia,
        Lithuania, Poland, Romania, Serbia, Slovakia, Ukraine) shares the characteristic of
        fiscal stacks unchanged in approximately a decade and a residual value curve materially
        below the European average.
      </p>
      <p>
        A pan-European operator does not have one residual value curve per vehicle generation.
        The operator has, in principle, twenty-eight per vehicle generation, one per jurisdiction.
        In practice, the curves bucket into three cluster archetypes with within-cluster
        variation. The data object can express this if and only if the fiscal context is a
        first-class field group, the jurisdiction of effective use is captured per contract, and
        the projection of fiscal regime to contract end is updated as policy moves.
      </p>
      <p>
        A separate consideration applies when a jurisdiction moves a fiscal lever. The Belgian
        deductibility change effective January 2026 moved the residual value trajectory of every
        non-zero-emission vehicle in a Belgian portfolio. An operator with effective-dated fiscal
        projection in the data object recalculates the affected residual exposure at the
        regulation&apos;s publication date and feeds the new projection into the model and into
        the risk reporting. An operator with hardcoded fiscal treatment patches production code,
        rebuilds the deployment, reruns the batch and reconciles the difference manually, on a
        calendar that may extend across a quarter end. The first operator absorbs the change as
        a data event. The second operator absorbs it as an incident.
      </p>

      <h2>What the dominant objects represent, and what they miss</h2>
      <p>
        The dominant industry objects in European motor finance fall into three lineages. The
        captive-vendor lineage, originally designed for OEM captive finance arms, optimises for
        tight integration with the OEM&apos;s product catalogue and dealer network. The
        retail-banking lineage, derived from consumer credit cores, optimises for unsecured
        lending logic adapted to secured motor finance. The fleet-specialist lineage, built
        around fleet operations, optimises for vehicle lifecycle management and remarketing
        rather than financial contract representation. Each is a coherent design for its origin
        problem. None is a coherent design for residual value management in 2026.
      </p>
      <p>
        The captive-vendor lineage typically represents the vehicle in deep detail but treats the
        manufacturer as implicit and rarely supports multi-jurisdiction operations natively.
        Battery state-of-health is captured if at all through telematics integrations bolted onto
        the side. Instrument attachments are stored as documents or in customisation tables, with
        no derived field for net residual exposure.
      </p>
      <p>
        The retail-banking lineage represents the contract in good detail and the credit decision
        well, but treats the vehicle as effectively secondary, with manufacturer as a string
        column and battery as no field at all. Fiscal treatment is configuration. Jurisdictional
        variation is supported through tenant separation but not through native object structure.
        Instrument attachments live as risk-management spreadsheets external to the core.
      </p>
      <p>
        The fleet-specialist lineage represents the vehicle lifecycle in deep detail, including
        telemetry and remarketing, but treats the financial contract as adjacent rather than
        central. The OEM is a string. Fiscal treatment varies by configuration. Securitisation
        and risk-share contracts are typically not represented at all because they do not arise
        in the fleet operations workflow that originally drove the schema.
      </p>
      <p>
        This is not a critique of vendor choice. Each lineage is a faithful expression of its
        origin problem. The point is the gap. None of the three lineages was designed against a
        problem statement that includes battery as a separable asset, OEM as a counterparty
        entity, jurisdiction as a first-class fiscal overlay, and instruments as typed attachments
        simultaneously. The reference object proposed in this paper is designed against the 2026
        problem statement directly. It can be implemented as a green-field schema or as an
        overlay structure on top of an existing core. Either path leads to the same object
        specification at convergence.
      </p>

      <h2>How instruments attach</h2>
      <p>
        A first-class attachment is an object linked to a contract by foreign key, with its own
        schema, its own lifecycle, and its own contribution to the contract&apos;s derived
        fields. A side-letter attachment is a document stored alongside the contract, with no
        schema, no lifecycle representable in the system, and no automated contribution to
        derived fields. The first is a data object. The second is a filing convention.
      </p>
      <p>
        <strong>Risk-share contracts</strong> attach naturally as typed objects: counterparty
        entity reference, trigger conditions, share ratio, cap, deductible, cash-flow direction
        and timing, lifecycle events, accounting treatment. The contract&apos;s net residual
        exposure is the gross residual exposure minus the expected contribution of each
        risk-share attachment, conditional on its triggers.
      </p>
      <p>
        <strong>Residual value insurance wraps</strong> attach by the same pattern, with
        insurance-specific fields: insurer, premium structure, policy term, claim history,
        coverage scope, deductible. They differ from risk-share contracts in counterparty, in
        pricing model, and in regulatory treatment, but the schema convention is identical:
        typed attachment, derived field contribution, effective-dating.
      </p>
      <p>
        <strong>Securitisation tranche assignments</strong> attach with a different structure
        because the relationship is portfolio-to-tranche rather than contract-to-counterparty. A
        contract carries a reference to the securitisation deal it has been allocated to, the
        tranche within that deal, the retention rules at allocation, and the timestamp of
        allocation. The contract&apos;s effective residual exposure for the lender&apos;s
        balance sheet is reduced by the allocation.
      </p>
      <p>
        The advantage of typed attachments over side-letters is not aesthetic. Side-letters
        require the residual value model and the risk reporting to be re-engineered every time a
        new instrument is added. Typed attachments require the system to understand the schema
        once, after which any new instance of the instrument flows through the model and the
        reporting natively. The difference is repeated each time the operator&apos;s risk
        management strategy adds a layer.
      </p>

      <h2>Implications for actors</h2>
      <p>
        <strong>For motor-finance lenders.</strong> Audit the current data object against the
        four 2026 dimensions. Identify which dimensions are absent, which are present but
        inadequate, and which are adequate. Sequence a migration that adds the missing dimensions
        before refining the model on the existing schema. Treat the modelling roadmap as
        downstream of the schema roadmap, not in parallel. Operators running this sequence will
        produce structurally better residual value forecasts within twelve to eighteen months.
        Operators running the inverse will produce marginally better forecasts of the same
        impoverished features.
      </p>
      <p>
        <strong>For OEM captive lenders.</strong> The captive lineage&apos;s schema advantage on
        vehicle configuration is real and worth preserving. The structural weaknesses are on
        multi-jurisdiction overlay, on OEM-as-counterparty (the captive cannot easily model its
        own parent as a counterparty entity, but it can and should model brand-survival
        probability for joint-venture or sister-brand exposures), and on instrument attachments.
        The schema extension is narrower for captives than for non-captive lenders, but it is not
        zero.
      </p>
      <p>
        <strong>For OEM corporate strategy.</strong> A typed risk-share contract that a captive
        or bank counterparty maintains as a first-class object in their data layer is a contract
        the OEM should be in a position to author from the same structure. OEMs that operate
        against bank counterparties with mature instrument-attachment objects negotiate from a
        position where the counterparty can price the contract correctly and the OEM can model
        its own exposure correctly.
      </p>
      <p>
        <strong>For platform vendors.</strong> The reference object is a public specification.
        Vendors who express the nine field groups and the two conventions as native platform
        constructs participate in a market where the conversation starts with &ldquo;show me your
        data model&rdquo; rather than &ldquo;compare these feature lists&rdquo;. The
        differentiation moves from feature parity to structural completeness.
      </p>

      <h2>Signals we are watching</h2>
      <ol>
        <li>
          <strong>The first published reference object from a tier-1 lender or industry body.</strong>{' '}
          When a major lender or an industry association publishes a residual value data object
          specification at the level of detail this paper proposes, the schema-first frame moves
          from one operator&apos;s argument to industry consensus.
        </li>
        <li>
          <strong>The first regulator-required residual value disclosure that exceeds current
          object capacity.</strong> Regulators in several European markets are signalling interest
          in residual-value risk disclosure that goes beyond aggregate exposure. The first
          concrete disclosure requirement that the dominant objects cannot satisfy without
          extension is the moment the schema gap moves from optional improvement to required
          investment.
        </li>
        <li>
          <strong>The first securitisation deal whose loan tape exposes the four 2026
          dimensions.</strong> The first deal that priced materially because its loan tape exposed
          battery, OEM counterparty, fiscal regime and instrument attachments transparently is a
          market signal that the schema-first operators are getting paid for the work.
        </li>
        <li>
          <strong>OEM exit events that test the brand-survival input.</strong> Any 2026 or 2027
          OEM exit from a European market is a natural experiment on brand-survival probability
          as an input. Operators who had the field captured and the projection updated will
          absorb the event differently from operators who had the manufacturer as a string column.
        </li>
        <li>
          <strong>Per-jurisdiction policy moves that test the fiscal overlay.</strong> The
          Belgian, French and Dutch fiscal changes through 2026, 2027 and 2028 are pre-announced.
          Each one is a natural test of whether the data object absorbs a regulatory event as
          data or as an incident.
        </li>
      </ol>

      <h2>How Innovia helps</h2>
      <p>
        We operate a modular asset-finance platform built natively for European lenders, captive
        entities and large fleet operators, with multi-tenant contract management at its core and
        configurable per-jurisdiction integration points. The reference object argued in this
        paper is the structural target our platform is designed against. We are now opening
        design-partner engagements to harden specific extensions against real motor-finance flow.
      </p>
      <p>
        <strong>Battery as a separable asset object.</strong> Our vehicle object today represents
        the vehicle as a single entity with attached technical attributes. We are extending it
        with a battery entity that has its own identity, its own lifecycle and its own
        state-of-health curve, linked to the vehicle by foreign key. We are seeking one lender or
        captive with a battery-electric back book and either OBD-based or manufacturer-feed
        access to battery state-of-health.
      </p>
      <p>
        <strong>OEM as a counterparty entity with brand-survival probability.</strong> Our
        counterparty model supports borrower, dealer and insurer roles today, with full tenant
        isolation. We are extending it with OEM as a first-class counterparty type and an
        explicit brand-survival probability field with a methodology reference for the
        operator&apos;s own credit research. We are seeking a lender or captive with material
        non-captive OEM exposure and a credit research function ready to publish its own
        methodology against the schema.
      </p>
      <p>
        <strong>Per-jurisdiction fiscal overlay as a native object construct.</strong> Our
        contract object today supports per-tenant fiscal configuration. We are extending the BIK
        calculation layer, the deductibility schedule, and the registration and road tax engines
        to express country-specific powertrain rules as effective-dated objects, with the
        projection to contract end as a separately versioned object. We are seeking one
        multi-country operator running across at least three European markets to co-develop the
        rule set and the projection methodology.
      </p>
      <p>
        <strong>Typed instrument attachments with derived net residual exposure.</strong> Our
        contract object today supports attached customer-paid insurance products and attached
        financial products. We are extending the attachment model with risk-share contracts,
        residual value insurance wraps and securitisation tranche assignments as first-class
        typed objects, and a derived net-residual-exposure field on the contract that aggregates
        over the attachments. We are seeking a lender preparing a securitisation in the next
        twelve to eighteen months, a captive with a risk-share programme with bank
        counterparties, or a specialist insurer with a residual value wrap product.
      </p>
      <p>
        Our Year-One engagement format is a packaged Innovation Partnership, scoped against one
        or two of the extensions, with shared intellectual property on the generalised output and
        exclusive use of the design-partner&apos;s own configuration. We do not sell vendor
        software off the shelf; we co-build the capability against the partner&apos;s real flow
        and harden it for re-use.
      </p>

      <h2>Sources and methodology note</h2>
      <p>
        The argument of this paper is structural rather than empirical. The four 2026 dimensions
        are derived from the observable trajectory of European motor finance through 2024-2026:
        the acceleration of battery-electric penetration to 19.7 percent of European new car
        registrations by April 2026, the entry of multiple non-captive original equipment
        manufacturers into European markets through bank partnerships rather than captive arms,
        the divergence of fiscal treatment of company vehicles across European jurisdictions
        documented in the canonical industry observatory, and the formalisation of residual
        value risk-share, insurance and securitisation as distribution channels for motor-finance
        risk.
      </p>
      <p>
        Empirical claims and quantitative comparisons in this paper are drawn primarily from the
        Ayvens European Mobility Guide 2026 for per-jurisdiction fiscal and total cost of
        ownership data, the European Automobile Manufacturers&apos; Association registration
        data through April 2026 for powertrain mix trajectory, and primary financial journalism
        for the United Kingdom residual value compression and OEM exit dynamics. Each source is
        treated as single-source directional unless explicitly corroborated. The reference object
        specification itself is a builder&apos;s argument, intended as a public starting point
        for industry discussion and not as a normative standard.
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
          <strong>Calitatea modelului este plafonată de obiectul de date care îl susține.</strong>{' '}
          Un model de prognoză mai sofisticat antrenat pe aceeași schemă sărăcăcioasă livrează
          prognoze marginal mai bune ale lucrului greșit. Cele mai grele câștiguri pe valoarea
          reziduală în 2026 vin din extinderea schemei, nu din rafinarea modelului pe aceeași
          schemă.
        </li>
        <li>
          <strong>Problema din 2026 are patru dimensiuni structurale pe care obiectele dominante
          nu le reprezintă nativ.</strong> Starea de sănătate a bateriei, probabilitatea de
          supraviețuire a OEM-ului, overlay-ul fiscal per jurisdicție și atașamentele tipizate de
          instrumente. Fiecare necesită propria extindere structurală, nu o coloană adăugată la o
          tabelă existentă.
        </li>
        <li>
          <strong>Obiectul de referință este publicabil.</strong> Nouă grupuri de câmpuri, două
          convenții non-negociabile (effective-dating pe fiecare câmp și provenance explicit cu
          confidence per câmp) și atașamente tipizate explicit pentru contracte de risk-share,
          asigurări de valoare reziduală și tranșe de securitizare. Publicăm structura în
          această lucrare.
        </li>
        <li>
          <strong>Overlay-ul per jurisdicție este un construct nativ, nu o customizare.</strong>{' '}
          Un operator multi-țară care hardcodează un singur tratament fiscal per implementare
          plătește pentru acest privilegiu de fiecare dată când un cod fiscal se mișcă, ceea ce
          pe evidența 2025-2026 înseamnă aproximativ două piețe pe an.
        </li>
        <li>
          <strong>Operatorii schema-first vor câștiga următorul ciclu de design-partner.</strong>{' '}
          Operatorii care publică un obiect de referință forțează conversația să înceapă cu
          structura lor. Operatorii care vând o listă de feature-uri împotriva slide-deck-ului
          unui vendor concurent negociază dintr-o poziție mai slabă.
        </li>
      </ul>

      <h2>Un model nu poate fi mai bun decât obiectul său</h2>
      <p>
        Un model de valoare reziduală este o funcție de la feature-uri la o reziduală prezisă.
        Funcția poate fi liniară, regularizată, tree-based, neuronală, ensemble. Arhitectura
        modelului contează la margine. Feature-urile contează structural. Dacă un feature nu este
        în schemă, modelul nu poate învăța din el și niciun grad de sofisticare arhitecturală nu
        recuperează informația. Acest lucru este adevărat la antrenare și la fel de adevărat la
        inferență.
      </p>
      <p>
        Două straturi de provenance compun efectul. Stratul de date brute este ceea ce colectează
        operatorul: telemetrie de vehicul, evenimente de contract, istoric de tranzacții,
        evaluări terțe, semnale de piață. Stratul de feature-uri derivate este ceea ce echipa de
        modelare poate construi din stratul brut prin engineering: curbe de stare a bateriei,
        rate de concentrare OEM, delta de TCO per jurisdicție, indici de intensitate
        channel-stuffing. Un model poate folosi doar stratul derivat. O echipă de modelare poate
        construi feature-uri derivate doar din date brute care au fost capturate. Datele brute
        pot fi capturate doar la granularitatea și frecvența pe care obiectul de date o acceptă.
        Lanțul rulează obiect-spre-brut-spre-derivat-spre-model-spre-prognoză, iar decizia
        asupra obiectului este constrângerea upstream pe tot ce vine după.
      </p>
      <p>
        Această secvențiere are o consecință temporală. O decizie de schemă luată în 2014 de a
        reprezenta producătorul ca o coloană string de cincizeci de caractere, fără cheie străină
        către o entitate de contrapartidă, devine datorie structurală douăsprezece ani mai
        târziu când operatorul vrea să prețuiască probabilitatea de supraviețuire a OEM-ului și
        descoperă că acel câmp producător nu poate fi join-uit cu o vedere de risc de credit
        pentru că nu există o entitate în spatele string-ului. Echipa poate rescrie câmpul, dar
        back-book-ul poartă reprezentarea veche; reconcilierea istoricului cu noua schemă este un
        proiect de migrație multi-trimestrial cu propriile riscuri de calitate a datelor.
        Deciziile de schemă sunt datorie pe cinci ani la minim.
      </p>
      <p>
        Aceasta nu este o critică a vreunei scheme anume. Este un argument despre ordinea
        operațiilor. Operatorii care investesc în sofisticare de model peste o schemă din 2014
        fac a doua mișcare înaintea primei. Prima mișcare este să specifici obiectul pe care
        problema din 2026 îl cere, să audiezi gap-ul față de schema actuală și să secvențiezi o
        migrație. A doua mișcare este să alegi și să antrenezi modelul.
      </p>

      <h2>Cele patru dimensiuni pe care obiectul din 2026 trebuie să le reprezinte</h2>
      <p>
        Patru dimensiuni remodelează riscul valorii reziduale în 2026. Fiecare necesită o
        extindere structurală a obiectului de date, nu o coloană adăugată la o tabelă existentă.
        Fiecare este fundamental o problemă de schemă, nu o problemă de model.
      </p>
      <p>
        <strong>Bateria ca activ separabil.</strong> Un vehicul electric pe baterie nu este un
        singur activ cu o curbă de valoare reziduală. Este un șasiu și un pachet de baterii,
        fiecare cu propria traiectorie de depreciere, propriul regim de garanție și propriul
        traseu de end-of-first-life. Bateria se degradează pe o curbă care depinde de istoricul
        de încărcare, climă, adâncimea ciclurilor de descărcare, raportul de fast-charge și
        generația de electrochimie. Până în 2027, piețele second-life de baterii și aplicațiile
        de stocare staționară vor furniza o cale reziduală pentru baterii independentă de
        remarketingul vehiculului. Un obiect care reprezintă vehiculul ca o singură unitate cu o
        singură valoare reziduală nu poate prețui niciuna dintre cele două părți ale acestei
        diviziuni.
      </p>
      <p>
        <strong>Riscul de contrapartidă OEM.</strong> O prognoză de valoare reziduală făcută
        astăzi împotriva unui vehicul al cărui producător încetează operațiunile europene în
        2028 este o prognoză care exclude factorul de risc dominant al acelui contract.
        Colapsul canalului, anularea garanției, disponibilitatea pieselor, valoarea brandului:
        toate se prăbușesc împreună dacă producătorul iese. Modelul de valoare reziduală are
        nevoie de un input asupra probabilității ca brandul să mai existe la sfârșitul
        contractului. Acel input trebuie să stea undeva. Obiectele dominante din industrie nu au
        unde să-l pună pentru că producătorul este o coloană string, nu o entitate de
        contrapartidă cu propriul profil de risc, rating de credit, raportare financiară și
        estimare de probabilitate de supraviețuire a brandului.
      </p>
      <p>
        <strong>Overlay fiscal per jurisdicție.</strong> Același vehicul finanțat la același preț
        de listă OEM în aceeași zi are un cost total de proprietate și o economie de revânzare
        materială diferită în 28 de jurisdicții europene. Driver-ul nu sunt atributele
        vehiculului. Este regimul fiscal: tratamentul benefit-in-kind, taxa de înmatriculare,
        taxa de drum, deductibilitatea, regulile zonelor cu emisii scăzute, subvențiile pentru
        infrastructura de încărcare, tratamentul TVA pe vehiculele second-hand. Un portofoliu de
        finanțare auto european din 2026 deține același VIN în mai multe jurisdicții, iar
        valoarea reziduală reflectă stiva fiscală a fiecărei jurisdicții. Un obiect care
        reprezintă contextul fiscal ca un singur flag jurisdicțional ratează complet dimensiunea.
      </p>
      <p>
        <strong>Atașamente tipizate de instrumente.</strong> Riscul modern de valoare reziduală
        este rareori deținut nedivizat pe un singur bilanț. Contractele de risk-share cu OEM-urile,
        wrap-urile de asigurare de valoare reziduală, tranșele de securitizare și plasamentele
        directe în private credit mută bucăți din expunerea reziduală către contrapărți, sub
        contracte formale cu trigger-e explicite, rate de partajare, plafoane, deductibile,
        direcții de cash-flow și obligații de raportare. Acestea nu sunt side-letters sau note de
        subsol. Sunt contracte financiare de primă clasă care se atașează unor deal-uri sau
        portofolii specifice și care alterează expunerea reziduală a finanțatorului la nivel de
        deal. Obiectele dominante din industrie le tratează ca documente stocate alături de
        contract sau ca câmpuri pe o tabelă de customizări. Nicio reprezentare nu permite
        modelului de valoare reziduală să ingereze atașamentul ca feature.
      </p>
      <p>
        Aceste patru dimensiuni sunt independente. Un obiect care se extinde să gestioneze
        primele trei dar nu a patra încă nu se potrivește problemei din 2026. Un obiect care le
        gestionează pe toate patru cu structura relațională greșită între ele generează
        câmpurile corecte dar join-urile greșite. Completitudinea structurală a obiectului este
        prerechizitul, nu suma adăugărilor de coloane.
      </p>

      <h2>Anatomia obiectului de referință</h2>
      <p>
        Obiectul de referință pentru finanțarea auto europeană în 2026 este construit din nouă
        grupuri de câmpuri. Două convenții guvernează întreaga structură: fiecare câmp este
        effective-dated, iar fiecare câmp poartă provenance explicit cu un confidence score.
        Grupurile de câmpuri sunt descrise mai jos la nivel de intenție și câmpuri-cheie. DDL
        complet și pattern-uri de migrație sunt în implementarea de referință a platformei care
        însoțește această lucrare.
      </p>
      <ol>
        <li>
          <strong>Identitatea și vintage-ul vehiculului.</strong> VIN, data construcției, anul
          modelului, generația, tipul de caroserie, segmentul, categoria de transmisie, tipul de
          propulsie. Configurația originală așa cum a fost înregistrată la producător. Emisiile
          și consumul energetic normalizate WLTP la omologarea de tip. Prețul de listă la prima
          înmatriculare în țara de primă înmatriculare. Identitate suficientă pentru a fixa
          unic vehiculul și pentru a reconstrui contextul lui comercial.
        </li>
        <li>
          <strong>Bateria, separabilă de vehicul.</strong> O entitate distinctă de baterie cu
          propria identitate, generația chimiei celulei, capacitatea nominală la fabricare,
          starea de sănătate curentă la cea mai recentă măsurare, coeficienții curbei de
          sănătate fixați la istoricul propriu al vehiculului, garanția reziduală la sfârșitul
          leasing-ului, numărul de cicluri fast-charge, adâncimea medie a descărcării,
          indicatorul de expunere climatică. Legată de vehicul prin cheie străină cu un ciclu de
          viață separat, astfel încât swap-ul de baterie, redirecționarea second-life sau
          înlocuirea pachetului să fie reprezentabilă fără rescrierea înregistrării vehiculului.
        </li>
        <li>
          <strong>Sumarul de telemetrie de utilizare.</strong> Agregări periodice din telematica
          vehiculelor conectate: kilometri totali, kilometri pe categorie de utilizare, distanța
          medie zilnică, comportament de încărcare, indice de agresivitate la conducere, flag-uri
          de expunere la accidente. Telemetria brută rămâne în sistemul-sursă; obiectul ține
          feature-urile agregate pe care modelul de valoare reziduală le consumă efectiv.
        </li>
        <li>
          <strong>Entitatea de contrapartidă OEM.</strong> Producătorul este o entitate, nu un
          string. Câmpuri: identificator de entitate legală, indicator de prezență pe piața
          europeană, prezența brațului de finanțare captiv, cota de piață per segment și țară,
          rating-ul de credit curent unde există unul, estimarea de probabilitate de
          supraviețuire a brandului din cercetarea internă de credit a operatorului cu referință
          la metodologie explicită, pattern istoric de acțiuni de preț pe vehiculele noi,
          flag-uri de expunere publică regulatorie sau legală. Obiectul de contract se referă
          la această entitate prin cheie străină; entitatea este actualizată independent de
          orice vehicul singular.
        </li>
        <li>
          <strong>Contextul fiscal și regulatoriu, snapshot plus proiecție.</strong> Jurisdicția
          de înmatriculare, jurisdicția de utilizare efectivă, regimul benefit-in-kind aplicabil
          la începutul contractului, regimul de deductibilitate, taxa de înmatriculare plătită la
          prima înmatriculare, obligația de taxă de drum per an, aplicabilitatea zonelor cu
          emisii scăzute, stiva de subvenții pentru infrastructura de încărcare la începutul
          contractului. Aceleași câmpuri sunt stocate a doua oară ca proiecție la sfârșitul
          contractului, reflectând schimbările programate cunoscute. Proiecția este actualizată
          ori de câte ori o regulă jurisdicțională se schimbă, cu effective-dating al proiecției
          însăși astfel încât input-urile istorice de model să fie păstrate.
        </li>
        <li>
          <strong>Canal și intenție de remarketing.</strong> Canalul de originare, canalul de
          remarketing așteptat la sfârșitul contractului, grad-ul de stare așteptat la întoarcere,
          geografia de remarketing și un flag pentru dacă acel canal de remarketing planificat
          este operațional curent pentru această combinație de vehicul, jurisdicție și stare.
          Flag-ul este cel mai important câmp din acest grup. Un &ldquo;da&rdquo; împotriva unei
          combinații în care canalul nu există în practică este cea mai comună sursă istorică
          de supraestimare a valorii reziduale.
        </li>
        <li>
          <strong>Atașamente tipizate de instrumente.</strong> Fiecare instrument este un obiect
          de primă clasă legat de contract: contract de risk-share, wrap de asigurare de valoare
          reziduală, atribuirea de tranșă de securitizare, plasament direct în private credit.
          Obiectul de contract expune un câmp derivat &ldquo;net residual exposure&rdquo; care
          agregă peste atașamente pentru a produce valoarea reziduală pe care finanțatorul o
          poartă efectiv.
        </li>
        <li>
          <strong>Provenance și confidence per câmp.</strong> Fiecare câmp din obiect poartă
          metadata: sistemul-sursă, timestamp-ul de capturare, descendența transformării și un
          confidence score pe o scară publicată. O stare de sănătate a bateriei dintr-un readout
          OBD acum trei săptămâni la dealership are confidence mai mare decât una dedusă din
          comportamentul de încărcare pe o curbă de degradare publicată de producător. Modelul
          poate ingera confidence ca feature, ponderându-și propria incertitudine corespunzător.
        </li>
        <li>
          <strong>Învelișul effective-dating.</strong> Niciun câmp nu este suprascris în loc.
          Fiecare schimbare creează o nouă linie versionată cu timestamp-uri effective-from și
          effective-to. O interogare din 2026 întreabă &ldquo;care era regimul fiscal proiectat
          așa cum îl știam noi când acest contract a fost originat&rdquo; și obiectul răspunde
          exact. O interogare din 2028 întreabă &ldquo;care este regimul fiscal proiectat așa
          cum îl știm noi astăzi&rdquo; și obiectul răspunde exact. Cele două răspunsuri diverg
          în cazul normal, iar divergența este ea însăși un input de model.
        </li>
      </ol>
      <p>
        Aceste nouă grupuri, plus cele două convenții, sunt referința. Operatorii nu trebuie să
        le implementeze pe toate la adâncime completă din prima zi. Argumentul este secvențierea:
        o foaie de parcurs de migrație care adaugă cele patru dimensiuni din 2026 prima dată,
        stratifică provenance și effective-dating peste structura existentă a doua și
        rafinează adâncimile de câmpuri individuale a treia, este ordinea care livrează
        completitudine structurală înaintea următorului ciclu bugetar.
      </p>

      <h2>Același VIN, valori reziduale diferite în 28 de jurisdicții</h2>
      <p>
        Overlay-ul per jurisdicție este dimensiunea pe care operatorii single-country o găsesc
        contraintuitivă și pe care operatorii multi-country o recunosc imediat. Același vehicul,
        finanțat de același finanțator, împotriva aceluiași template de contract, are o
        traiectorie de valoare reziduală material diferită prin jurisdicțiile europene, iar
        variația este condusă de stiva fiscală, nu de atributele vehiculului.
      </p>
      <p>
        Observatorul de industrie canonic pe această dimensiune demonstrează variația direct.
        Pe cele 28 de piețe pe care le scorează, un vehicul electric pe baterie concurează cu
        un echivalent cu combustie internă pe cost total de proprietate la 0,25 EUR pe kilometru
        în Norvegia, 0,33 EUR pe kilometru în Belgia și 0,33 EUR pe kilometru în România,
        împotriva contrapărților ICE la 0,45 EUR, 0,40 EUR și respectiv 0,28 EUR. Același vehicul
        electric este aproximativ 80 la sută la fel de scump de rulat ca contrapartea ICE în
        Norvegia, 83 la sută în Belgia și 18 la sută mai scump în România. Tehnologia este
        aceeași. Arhitectura fiscală nu este.
      </p>
      <p>
        Implicația pe valoarea reziduală este directă. Un vehicul electric folosit în Norvegia
        reintră pe o piață unde substitutul lui primar, ICE second-hand, este penalizat
        structural de regimul fiscal, iar BEV-ul își păstrează valoarea reziduală susținută de
        cererea cumpărătorilor. Un vehicul electric folosit în România reintră pe o piață unde
        substitutul lui primar este favorizat structural de regimul fiscal, iar BEV-ul găsește
        o cerere mai superficială la același preț de listă. Același VIN, același an de primă
        înmatriculare, același grad de stare, produce o economie de sfârșit de contract diferită
        în funcție de jurisdicția în care vehiculul se întoarce.
      </p>
      <p>
        Trei arhetipuri de cluster simplifică problema de modelare. Clusterul Developed (13
        piețe care includ Norvegia, Belgia, Olanda, Austria, Suedia, Finlanda, Danemarca,
        Portugalia, Franța, Luxemburg, Regatul Unit, Germania, Elveția) împărtășește
        caracteristica structurală că TCO-ul BEV-versus-ICE favorizează BEV-ul. Clusterul
        Transitioning (Irlanda, Grecia, Italia, Spania, Slovenia, Ungaria) împărtășește
        caracteristica regimurilor fiscale care converg către clusterul Developed pe o
        traiectorie măsurabilă. Clusterul Emerging (Bulgaria, Croația, Cehia, Estonia, Letonia,
        Lituania, Polonia, România, Serbia, Slovacia, Ucraina) împărtășește caracteristica
        stivelor fiscale neschimbate de aproximativ un deceniu și o curbă de valoare reziduală
        material sub media europeană.
      </p>
      <p>
        Un operator pan-european nu are o singură curbă de valoare reziduală per generație de
        vehicul. Operatorul are, în principiu, douăzeci și opt per generație de vehicul, una per
        jurisdicție. În practică, curbele se grupează în trei arhetipuri de cluster cu variație
        în interiorul clusterului. Obiectul de date poate exprima asta dacă și doar dacă
        contextul fiscal este un grup de câmpuri de primă clasă, jurisdicția de utilizare
        efectivă este capturată per contract, iar proiecția regimului fiscal la sfârșitul
        contractului este actualizată pe măsură ce politica se mișcă.
      </p>
      <p>
        O considerație separată se aplică atunci când o jurisdicție mișcă o pârghie fiscală.
        Schimbarea de deductibilitate belgiană efectivă din ianuarie 2026 a mișcat traiectoria
        de valoare reziduală a fiecărui vehicul non-zero-emission dintr-un portofoliu belgian.
        Un operator cu proiecție fiscală effective-dated în obiectul de date recalculează
        expunerea reziduală afectată la data publicării reglementării și hrănește noua proiecție
        în model și în raportarea de risc. Un operator cu tratament fiscal hardcoded patchează
        codul de producție, reconstruiește deployment-ul, rerulează batch-ul și reconciliază
        diferența manual, pe un calendar care s-ar putea întinde peste un sfârșit de trimestru.
        Primul operator absoarbe schimbarea ca un eveniment de date. Al doilea operator o
        absoarbe ca un incident.
      </p>

      <h2>Ce reprezintă obiectele dominante și ce ratează</h2>
      <p>
        Obiectele dominante din industria finanțării auto europene se împart în trei linii.
        Linia captive-vendor, proiectată original pentru brațele de finanțare captive ale
        OEM-urilor, optimizează pentru integrare strânsă cu catalogul de produs al OEM-ului și
        rețeaua de dealeri. Linia retail-banking, derivată din core-uri de credit de consum,
        optimizează pentru logică de creditare negarantată adaptată finanțării auto garantate.
        Linia fleet-specialist, construită în jurul operațiunilor de flotă, optimizează pentru
        managementul ciclului de viață al vehiculului și remarketing mai degrabă decât pentru
        reprezentarea contractului financiar. Fiecare este un design coerent pentru problema sa
        de origine. Niciuna nu este un design coerent pentru managementul valorii reziduale în
        2026.
      </p>
      <p>
        Linia captive-vendor reprezintă tipic vehiculul în detaliu adânc, dar tratează
        producătorul ca implicit și rar suportă operațiuni multi-jurisdicție nativ. Starea de
        sănătate a bateriei este capturată dacă deloc prin integrări de telematică atașate
        lateral. Atașamentele de instrumente sunt stocate ca documente sau în tabele de
        customizare, fără un câmp derivat pentru expunerea reziduală netă.
      </p>
      <p>
        Linia retail-banking reprezintă contractul în detaliu bun și decizia de credit bine, dar
        tratează vehiculul ca efectiv secundar, cu producătorul ca o coloană string și bateria
        ca niciun câmp deloc. Tratamentul fiscal este configurație. Variația jurisdicțională
        este suportată prin separare de tenant dar nu prin structură de obiect nativă.
        Atașamentele de instrumente trăiesc ca foi de calcul de management al riscului externe
        față de core.
      </p>
      <p>
        Linia fleet-specialist reprezintă ciclul de viață al vehiculului în detaliu adânc,
        incluzând telemetria și remarketing-ul, dar tratează contractul financiar ca adiacent
        mai degrabă decât central. OEM-ul este un string. Tratamentul fiscal variază prin
        configurație. Contractele de securitizare și risk-share tipic nu sunt reprezentate
        deloc pentru că nu apar în workflow-ul de operațiuni de flotă care a condus schema
        original.
      </p>
      <p>
        Aceasta nu este o critică a alegerii de vendor. Fiecare linie este o expresie fidelă a
        problemei sale de origine. Punctul este gap-ul. Niciuna dintre cele trei linii nu a
        fost proiectată împotriva unui enunț de problemă care include bateria ca activ
        separabil, OEM-ul ca entitate de contrapartidă, jurisdicția ca overlay fiscal de primă
        clasă și instrumentele ca atașamente tipizate, simultan. Obiectul de referință propus
        în această lucrare este proiectat direct împotriva enunțului problemei din 2026. Poate
        fi implementat ca o schemă green-field sau ca o structură de overlay peste un core
        existent. Ambele căi conduc la aceeași specificație de obiect la convergență.
      </p>

      <h2>Cum se atașează instrumentele</h2>
      <p>
        Un atașament de primă clasă este un obiect legat de un contract prin cheie străină, cu
        propria schemă, propriul ciclu de viață și propria contribuție la câmpurile derivate ale
        contractului. Un atașament side-letter este un document stocat alături de contract,
        fără schemă, fără ciclu de viață reprezentabil în sistem și fără contribuție automată la
        câmpuri derivate. Primul este un obiect de date. Al doilea este o convenție de
        arhivare.
      </p>
      <p>
        <strong>Contractele de risk-share</strong> se atașează natural ca obiecte tipizate:
        referință de entitate de contrapartidă, condiții de trigger, rată de partajare, plafon,
        deductibil, direcție și moment de cash-flow, evenimente de ciclu de viață, tratament
        contabil. Expunerea reziduală netă a contractului este expunerea reziduală brută minus
        contribuția așteptată a fiecărui atașament de risk-share, condiționată de trigger-ele
        lui.
      </p>
      <p>
        <strong>Wrap-urile de asigurare de valoare reziduală</strong> se atașează prin același
        pattern, cu câmpuri specifice asigurării: asigurător, structura primei, termenul
        poliței, istoricul de despăgubiri, scopul acoperirii, deductibilul. Diferă de
        contractele de risk-share prin contrapartidă, prin modelul de prețuire și prin
        tratamentul regulatoriu, dar convenția de schemă este identică: atașament tipizat,
        contribuție de câmp derivat, effective-dating.
      </p>
      <p>
        <strong>Atribuirile de tranșă de securitizare</strong> se atașează cu o structură
        diferită pentru că relația este portofoliu-spre-tranșă mai degrabă decât
        contract-spre-contrapartidă. Un contract poartă o referință către deal-ul de
        securitizare în care a fost alocat, tranșa din acel deal, regulile de retenție la
        alocare și timestamp-ul alocării. Expunerea reziduală efectivă a contractului pentru
        bilanțul finanțatorului este redusă de alocare.
      </p>
      <p>
        Avantajul atașamentelor tipizate față de side-letters nu este estetic. Side-letters
        cer ca modelul de valoare reziduală și raportarea de risc să fie reingineriate de
        fiecare dată când un nou instrument este adăugat. Atașamentele tipizate cer ca sistemul
        să înțeleagă schema o singură dată, după care orice instanță nouă a instrumentului
        curge prin model și raportare nativ. Diferența se repetă de fiecare dată când strategia
        de management al riscului a operatorului adaugă un strat.
      </p>

      <h2>Implicații pentru actori</h2>
      <p>
        <strong>Pentru finanțatorii de auto-motor.</strong> Auditați obiectul de date curent
        împotriva celor patru dimensiuni din 2026. Identificați care dimensiuni sunt absente,
        care sunt prezente dar inadecvate și care sunt adecvate. Secvențiați o migrație care
        adaugă dimensiunile lipsă înainte de a rafina modelul pe schema existentă. Tratați foaia
        de parcurs de modelare ca downstream față de foaia de parcurs de schemă, nu în paralel.
        Operatorii care rulează această secvență vor produce prognoze de valoare reziduală
        structural mai bune în douăsprezece până la optsprezece luni. Operatorii care rulează
        inversul vor produce prognoze marginal mai bune ale acelorași feature-uri sărăcăcioase.
      </p>
      <p>
        <strong>Pentru finanțatorii captive OEM.</strong> Avantajul de schemă al liniei captive
        pe configurația vehiculului este real și merită păstrat. Slăbiciunile structurale sunt
        pe overlay-ul multi-jurisdicție, pe OEM-ca-contrapartidă (captiva nu poate modela ușor
        propriul părinte ca entitate de contrapartidă, dar poate și ar trebui să modeleze
        probabilitatea de supraviețuire a brandului pentru expuneri de joint-venture sau
        sister-brand) și pe atașamentele de instrumente. Extinderea de schemă este mai îngustă
        pentru captive decât pentru finanțatorii non-captive, dar nu este zero.
      </p>
      <p>
        <strong>Pentru strategia corporativă OEM.</strong> Un contract de risk-share tipizat pe
        care o contrapartidă captivă sau bancară îl menține ca obiect de primă clasă în
        stratul ei de date este un contract pe care OEM-ul ar trebui să fie în poziția de a-l
        scrie din aceeași structură. OEM-urile care operează împotriva unor contrapartide
        bancare cu obiecte de atașament de instrumente mature negociază dintr-o poziție în care
        contrapartida poate prețui contractul corect și OEM-ul își poate modela propria
        expunere corect.
      </p>
      <p>
        <strong>Pentru vendorii de platformă.</strong> Obiectul de referință este o specificație
        publică. Vendorii care exprimă cele nouă grupuri de câmpuri și cele două convenții ca
        construcții native de platformă participă pe o piață unde conversația începe cu
        &ldquo;arată-mi modelul tău de date&rdquo; în loc de &ldquo;compară aceste liste de
        feature-uri&rdquo;. Diferențierea se mută de la paritate de feature la completitudine
        structurală.
      </p>

      <h2>Semnale pe care le urmărim</h2>
      <ol>
        <li>
          <strong>Primul obiect de referință publicat de un finanțator tier-1 sau de un
          organism de industrie.</strong> Când un finanțator major sau o asociație de
          industrie publică o specificație de obiect de date de valoare reziduală la nivelul de
          detaliu pe care această lucrare îl propune, cadrul schema-first se mută de la
          argumentul unui singur operator la consens de industrie.
        </li>
        <li>
          <strong>Prima cerință de raportare a valorii reziduale impusă de regulator care
          depășește capacitatea obiectului curent.</strong> Regulatorii din mai multe piețe
          europene semnalizează interes pentru raportarea de risc de valoare reziduală care
          depășește expunerea agregată. Prima cerință concretă de raportare pe care obiectele
          dominante nu o pot satisface fără extindere este momentul când gap-ul de schemă se
          mută de la îmbunătățire opțională la investiție obligatorie.
        </li>
        <li>
          <strong>Primul deal de securitizare al cărui loan tape expune cele patru dimensiuni
          din 2026.</strong> Primul deal care a fost prețuit material pentru că loan tape-ul
          lui a expus baterie, contrapartidă OEM, regim fiscal și atașamente de instrumente
          transparent este un semnal de piață că operatorii schema-first sunt plătiți pentru
          munca.
        </li>
        <li>
          <strong>Evenimentele de ieșire OEM care testează input-ul de supraviețuire a
          brandului.</strong> Orice ieșire OEM din 2026 sau 2027 de pe o piață europeană este
          un experiment natural pe probabilitatea de supraviețuire a brandului ca input.
          Operatorii care au avut câmpul capturat și proiecția actualizată vor absorbi
          evenimentul diferit de operatorii care au avut producătorul ca o coloană string.
        </li>
        <li>
          <strong>Mișcările de politică per jurisdicție care testează overlay-ul fiscal.</strong>{' '}
          Schimbările fiscale belgiene, franceze și olandeze prin 2026, 2027 și 2028 sunt
          preanunțate. Fiecare este un test natural pentru a vedea dacă obiectul de date
          absoarbe un eveniment de reglementare ca date sau ca incident.
        </li>
      </ol>

      <h2>Cum ajută Innovia</h2>
      <p>
        Operăm o platformă modulară de asset-finance construită nativ pentru finanțatorii
        europeni, entități captive și operatori mari de flotă, cu management de contract
        multi-tenant la nucleu și puncte de integrare per-jurisdicție configurabile. Obiectul
        de referință argumentat în această lucrare este ținta structurală împotriva căreia
        platforma noastră este proiectată. Deschidem acum angajamente de design-partner pentru
        a întări extinderi specifice împotriva fluxului real de motor-finance.
      </p>
      <p>
        <strong>Bateria ca obiect de activ separabil.</strong> Obiectul nostru de vehicul
        astăzi reprezintă vehiculul ca o entitate unică cu atribute tehnice atașate. Îl
        extindem cu o entitate de baterie care are propria identitate, propriul ciclu de viață
        și propria curbă de stare de sănătate, legată de vehicul prin cheie străină. Căutăm un
        finanțator sau o entitate captivă cu un back-book de electrice pe baterie și acces
        OBD-based sau via feed-ul producătorului la starea de sănătate a bateriei.
      </p>
      <p>
        <strong>OEM-ul ca entitate de contrapartidă cu probabilitate de supraviețuire a
        brandului.</strong> Modelul nostru de contrapartidă suportă astăzi roluri de
        împrumutat, dealer și asigurător, cu izolare completă de tenant. Îl extindem cu OEM-ul
        ca tip de contrapartidă de primă clasă și un câmp explicit de probabilitate de
        supraviețuire a brandului cu o referință de metodologie pentru cercetarea de credit a
        operatorului. Căutăm un finanțator sau o entitate captivă cu expunere materială la OEM
        non-captive și o funcție de cercetare de credit gata să-și publice propria metodologie
        împotriva schemei.
      </p>
      <p>
        <strong>Overlay-ul fiscal per jurisdicție ca un construct nativ de obiect.</strong>{' '}
        Obiectul nostru de contract suportă astăzi configurație fiscală per-tenant. Extindem
        stratul de calcul BIK, schedule-ul de deductibilitate și motoarele de taxă de
        înmatriculare și taxă de drum pentru a exprima reguli specifice de țară per
        powertrain ca obiecte effective-dated, cu proiecția la sfârșitul contractului ca un
        obiect versionat separat. Căutăm un operator multi-țară care rulează în cel puțin trei
        piețe europene pentru a co-dezvolta setul de reguli și metodologia de proiecție.
      </p>
      <p>
        <strong>Atașamente tipizate de instrumente cu expunere reziduală netă derivată.</strong>{' '}
        Obiectul nostru de contract suportă astăzi produse de asigurare plătite de client
        atașate și produse financiare atașate. Extindem modelul de atașament cu contracte de
        risk-share, wrap-uri de asigurare de valoare reziduală și atribuiri de tranșă de
        securitizare ca obiecte tipizate de primă clasă, și un câmp derivat
        net-residual-exposure pe contract care agregă peste atașamente. Căutăm un finanțator
        care pregătește o securitizare în următoarele douăsprezece până la optsprezece luni, o
        captivă cu un program de risk-share cu contrapartide bancare sau un asigurător
        specialist cu un produs de wrap de valoare reziduală.
      </p>
      <p>
        Formatul nostru de angajament din Anul Unu este un Innovation Partnership pachetizat,
        cu scop pe una sau două dintre extinderi, cu IP partajat pe output-ul generalizat și
        utilizare exclusivă a propriei configurări de design-partner. Nu vindem software
        vendor de pe raft; co-construim capacitatea împotriva fluxului real al partenerului și
        o întărim pentru reutilizare.
      </p>

      <h2>Note de surse și metodologie</h2>
      <p>
        Argumentul acestei lucrări este structural mai degrabă decât empiric. Cele patru
        dimensiuni din 2026 sunt derivate din traiectoria observabilă a finanțării auto
        europene prin 2024-2026: accelerarea penetrării electrice pe baterie la 19,7 la sută
        din înmatriculările europene de mașini noi până în aprilie 2026, intrarea mai multor
        producători non-captive pe piețele europene prin parteneriate cu băncile mai degrabă
        decât prin brațe captive, divergența tratamentului fiscal al vehiculelor de companie
        prin jurisdicțiile europene documentată în observatorul de industrie canonic și
        formalizarea risk-share, asigurării și securitizării valorii reziduale ca canale de
        distribuție pentru riscul de motor-finance.
      </p>
      <p>
        Pretențiile empirice și comparațiile cantitative din această lucrare sunt extrase
        primar din Ayvens European Mobility Guide 2026 pentru date fiscale și de cost total de
        proprietate per jurisdicție, din datele de înmatriculare ale Asociației Europene a
        Producătorilor de Automobile prin aprilie 2026 pentru traiectoria mixului de
        powertrain și din jurnalismul financiar primar pentru compresia valorii reziduale din
        Regatul Unit și dinamica de ieșire OEM. Fiecare sursă este tratată ca single-source
        directional dacă nu este coroborată explicit. Specificația obiectului de referință în
        sine este un argument de constructor, intenționată ca un punct de plecare public pentru
        discuția de industrie și nu ca un standard normativ.
      </p>
    </div>
  );
}

function De() {
  return (
    <div className="prose-paper">
      <h2>Fünf Dinge zum Mitnehmen</h2>
      <ul>
        <li>
          <strong>Die Modellqualität ist nach oben durch das darunterliegende Datenobjekt
          begrenzt.</strong> Ein anspruchsvolleres Prognosemodell, das auf demselben verarmten
          Schema trainiert wird, liefert marginal bessere Prognosen des Falschen. Die
          schwierigsten Restwertgewinne in 2026 kommen aus der Erweiterung des Schemas, nicht
          aus der Verfeinerung des Modells auf demselben Schema.
        </li>
        <li>
          <strong>Das Problem 2026 hat vier strukturelle Dimensionen, die die dominanten Objekte
          nicht nativ darstellen.</strong> Batterie-Gesundheitszustand,
          OEM-Überlebenswahrscheinlichkeit, fiskalisches Overlay pro Jurisdiktion und
          typisierte Instrumentenanhänge. Jede erfordert ihre eigene strukturelle Erweiterung,
          nicht eine zu einer bestehenden Tabelle hinzugefügte Spalte.
        </li>
        <li>
          <strong>Das Referenzobjekt ist publizierbar.</strong> Neun Feldgruppen, zwei nicht
          verhandelbare Konventionen (Effective-Dating auf jedem Feld und explizite Provenance
          mit Confidence pro Feld) und explizite typisierte Anhänge für Risk-Share-Verträge,
          Restwert-Versicherungen und Verbriefungstranchen. Wir publizieren die Struktur in
          dieser Arbeit.
        </li>
        <li>
          <strong>Das Overlay pro Jurisdiktion ist ein nativer Konstrukt, keine
          Anpassung.</strong> Ein Multi-Country-Betreiber, der eine einzige fiskalische
          Behandlung pro Implementierung hartcodiert, zahlt für dieses Privileg jedes Mal, wenn
          sich ein Steuergesetz bewegt, was nach 2025-2026-Evidenz etwa zwei Märkte pro Jahr
          sind.
        </li>
        <li>
          <strong>Die Schema-First-Betreiber werden den nächsten Design-Partner-Zyklus
          gewinnen.</strong> Betreiber, die ein Referenzobjekt publizieren, zwingen das Gespräch
          dazu, mit ihrer Struktur zu beginnen. Betreiber, die eine Feature-Liste gegen das
          Slide-Deck eines konkurrierenden Anbieters verkaufen, verhandeln aus einer schwächeren
          Position.
        </li>
      </ul>

      <h2>Ein Modell kann nicht besser sein als sein Objekt</h2>
      <p>
        Ein Restwertmodell ist eine Funktion von Features zu einem prognostizierten Restwert.
        Die Funktion kann linear, regularisiert, baumbasiert, neuronal, ensembled sein. Die
        Modellarchitektur zählt am Rand. Die Features zählen strukturell. Wenn ein Feature
        nicht im Schema ist, kann das Modell nicht daraus lernen, und keine Menge
        architektonischer Raffinesse stellt die Information wieder her. Das gilt zur
        Trainingszeit und gleichermaßen zur Inferenzzeit.
      </p>
      <p>
        Zwei Schichten von Provenance verstärken den Effekt. Die Rohdatenschicht ist das, was
        der Betreiber sammelt: Fahrzeugtelematik, Vertragsereignisse, Transaktionshistorie,
        Drittparteien-Bewertungen, Marktsignale. Die abgeleitete Feature-Schicht ist das, was
        das Modellierungsteam aus der Rohschicht durch Engineering konstruieren kann:
        Batterie-Gesundheitskurven, OEM-Konzentrationsquoten, TCO-Deltas pro Jurisdiktion,
        Channel-Stuffing-Intensitätsindizes. Ein Modell kann nur die abgeleitete Schicht
        nutzen. Ein Modellierungsteam kann abgeleitete Features nur aus erfassten Rohdaten
        konstruieren. Rohdaten können nur mit der Granularität und Frequenz erfasst werden, die
        das Datenobjekt akzeptiert. Die Kette läuft Objekt zu Roh zu Abgeleitet zu Modell zu
        Prognose, und die Objektentscheidung ist die Upstream-Beschränkung für alles
        Downstream.
      </p>
      <p>
        Diese Sequenzierung hat eine zeitliche Konsequenz. Eine Schemaentscheidung aus 2014,
        den Hersteller als eine Fünfzig-Zeichen-String-Spalte ohne Foreign Key auf eine
        Counterparty-Entität darzustellen, wird zwölf Jahre später zu struktureller Schuld,
        wenn der Betreiber die OEM-Überlebenswahrscheinlichkeit bepreisen will und feststellt,
        dass das Herstellerfeld nicht mit einer Kreditrisiko-Sicht verknüpft werden kann, weil
        keine Entität hinter dem String steht. Das Team kann das Feld umschreiben, aber das
        Back-Book trägt die alte Darstellung; die Historie mit dem neuen Schema abzugleichen,
        ist ein mehrquartalweises Migrationsprojekt mit eigenen Datenqualitätsrisiken.
        Schemaentscheidungen sind mindestens fünfjährige Schuld.
      </p>
      <p>
        Dies ist keine Kritik an einem bestimmten Schema. Es ist ein Argument über die
        Reihenfolge der Operationen. Betreiber, die in Modellraffinesse auf einem Schema von
        2014 investieren, machen den zweiten Zug vor dem ersten. Der erste Zug besteht darin,
        das Objekt zu spezifizieren, das das Problem von 2026 erfordert, die Lücke gegenüber
        dem aktuellen Schema zu auditieren und eine Migration zu sequenzieren. Der zweite Zug
        besteht darin, das Modell auszuwählen und zu trainieren.
      </p>

      <h2>Die vier Dimensionen, die das Objekt von 2026 darstellen muss</h2>
      <p>
        Vier Dimensionen formen das Restwertrisiko in 2026 neu. Jede erfordert eine
        strukturelle Erweiterung des Datenobjekts, nicht eine zu einer bestehenden Tabelle
        hinzugefügte Spalte. Jede ist fundamental ein Schemaproblem, kein Modellproblem.
      </p>
      <p>
        <strong>Batterie als trennbares Asset.</strong> Ein batterieelektrisches Fahrzeug ist
        nicht ein einziges Asset mit einer Restwertkurve. Es ist ein Fahrzeugchassis und ein
        Batteriepack, jedes mit eigener Abschreibungsbahn, eigenem Garantieregime und eigenem
        End-of-First-Life-Pfad. Die Batterie degradiert auf einer Kurve, die von Ladehistorie,
        Klima, Entladetiefe-Zyklen, Schnelllade-Verhältnis und Elektrochemie-Jahrgang abhängt.
        Bis 2027 werden Second-Life-Batteriemärkte und stationäre Speicheranwendungen einen
        Restwertpfad für Batterien unabhängig von Fahrzeug-Remarketing bieten. Ein Objekt, das
        das Fahrzeug als eine einzige Einheit mit einem einzigen Restwert darstellt, kann
        keine der beiden Seiten dieser Trennung bepreisen.
      </p>
      <p>
        <strong>OEM-Counterparty-Risiko.</strong> Eine heute getroffene Restwertprognose gegen
        ein Fahrzeug, dessen Hersteller in 2028 die europäischen Operationen einstellt, ist
        eine Prognose, die den dominanten Risikofaktor dieses Vertrags ausschließt.
        Kanalzusammenbruch, Garantieverlust, Teileverfügbarkeit, Markenwert: alle brechen
        zusammen, wenn der Hersteller austritt. Das Restwertmodell braucht einen Input zur
        Wahrscheinlichkeit, dass die Marke am Vertragsende noch existiert. Dieser Input muss
        irgendwo leben. Die dominanten Industrieobjekte haben keinen Platz dafür, weil der
        Hersteller eine String-Spalte ist, keine Counterparty-Entität mit eigenem Risikoprofil,
        Kreditrating, Finanzberichterstattung und Markenüberlebenswahrscheinlichkeits-Schätzung.
      </p>
      <p>
        <strong>Fiskalisches Overlay pro Jurisdiktion.</strong> Dasselbe Fahrzeug, das am
        selben Tag zum selben OEM-Listenpreis finanziert wird, hat über 28 europäische
        Jurisdiktionen materiell unterschiedliche Gesamtbetriebskosten und
        Wiederverkaufsökonomie. Der Treiber sind nicht die Fahrzeugattribute. Es ist das
        Steuerregime: Sachbezugsbehandlung, Zulassungssteuer, Kfz-Steuer, Abzugsfähigkeit,
        Umweltzonen-Regeln, Ladeinfrastruktur-Subvention,
        Gebrauchtwagen-Mehrwertsteuerbehandlung. Ein europäisches Motor-Finance-Portfolio von
        2026 hält dieselbe VIN über mehrere Jurisdiktionen, und der Restwert reflektiert den
        fiskalischen Stack jeder Jurisdiktion. Ein Objekt, das den fiskalischen Kontext als
        ein einziges jurisdiktionales Flag darstellt, verfehlt die Dimension vollständig.
      </p>
      <p>
        <strong>Typisierte Instrumentenanhänge.</strong> Modernes Restwertrisiko wird selten
        ungeteilt auf einer einzelnen Bilanz gehalten. Risk-Share-Verträge mit OEMs,
        Restwert-Versicherungs-Wraps, Verbriefungstranchen und direkte
        Private-Credit-Platzierungen verschieben Teile der Restwertexposition zu
        Gegenparteien unter formalen Verträgen mit expliziten Triggern, Anteilsquoten, Caps,
        Selbstbehalten, Cashflow-Richtungen und Berichtspflichten. Dies sind keine Side-Letters
        oder Fußnoten. Es sind erstklassige Finanzverträge, die sich an spezifische Deals oder
        Pools anhängen und die Restwertexposition des Kreditgebers auf Deal-Ebene verändern.
        Die dominanten Industrieobjekte behandeln diese als Dokumente, die neben dem Vertrag
        gespeichert sind, oder als Felder auf einer Anpassungstabelle. Keine Darstellung
        erlaubt es dem Restwertmodell, den Anhang als Feature aufzunehmen.
      </p>
      <p>
        Diese vier Dimensionen sind unabhängig. Ein Objekt, das die ersten drei behandelt, aber
        nicht die vierte, passt immer noch nicht zum Problem von 2026. Ein Objekt, das alle
        vier mit der falschen relationalen Struktur zwischen ihnen behandelt, generiert die
        richtigen Felder, aber die falschen Joins. Die strukturelle Vollständigkeit des
        Objekts ist die Voraussetzung, nicht die Summe von Spaltenadditionen.
      </p>

      <h2>Die Anatomie des Referenzobjekts</h2>
      <p>
        Das Referenzobjekt für die europäische Autofinanzierung in 2026 ist aus neun
        Feldgruppen aufgebaut. Zwei Konventionen regeln die gesamte Struktur: jedes Feld ist
        effective-dated, und jedes Feld trägt explizite Provenance mit einem Confidence-Score.
        Die Feldgruppen werden unten auf der Ebene von Intention und Schlüsselfeldern
        beschrieben. Vollständige DDL und Migrationsmuster befinden sich in der
        Plattform-Referenzimplementierung, die diese Arbeit begleitet.
      </p>
      <ol>
        <li>
          <strong>Fahrzeugidentität und Jahrgang.</strong> VIN, Baudatum, Modelljahr,
          Generation, Karosserietyp, Segment, Antriebskategorie, Antriebsart. Originale
          Ausstattungskonfiguration wie beim Hersteller registriert. WLTP-normalisierte
          Emissionen und Energieverbrauch bei der Typgenehmigung. Listenpreis bei
          Erstzulassung im Land der Erstzulassung.
        </li>
        <li>
          <strong>Batterie, trennbar vom Fahrzeug.</strong> Eine distinkte Batterie-Entität
          mit eigener Identität, Generation der Zellchemie, Nennkapazität bei Herstellung,
          aktueller Gesundheitszustand bei der jüngsten Messung, Koeffizienten der
          Gesundheitskurve angepasst an die eigene Historie des Fahrzeugs, Garantie-Restwert
          am Leasing-Ende, Schnellladezyklenzahl, durchschnittliche Entladetiefe, Indikator für
          Klima-Exposition. Mit dem Fahrzeug per Foreign Key verbunden, mit separatem
          Lebenszyklus.
        </li>
        <li>
          <strong>Nutzungstelematik-Zusammenfassung.</strong> Periodische Aggregationen aus
          Connected-Vehicle-Telematik: Gesamtkilometer, Kilometer nach Nutzungskategorie,
          durchschnittliche Tagesentfernung, Ladeverhalten, Fahraggressivitätsindex,
          Unfallrisiko-Flags. Rohe Telematik bleibt im Quellsystem; das Objekt hält die
          aggregierten Features, die das Restwertmodell tatsächlich verbraucht.
        </li>
        <li>
          <strong>OEM-Counterparty-Entität.</strong> Der Hersteller ist eine Entität, kein
          String. Felder: Legal Entity Identifier, Indikator für europäische Marktpräsenz,
          Vorhandensein eines Captive-Finance-Arms, Fahrzeug-Marktanteil pro Segment und Land,
          aktuelles Kreditrating wo vorhanden, Markenüberlebenswahrscheinlichkeits-Schätzung
          aus der internen Kreditforschung des Betreibers mit explizitem Methodikbezug,
          historisches Muster von Preisaktionen bei Neufahrzeugen, öffentliche regulatorische
          oder rechtliche Expositions-Flags.
        </li>
        <li>
          <strong>Fiskalischer und regulatorischer Kontext, Snapshot plus Projektion.</strong>{' '}
          Zulassungsjurisdiktion, Jurisdiktion der effektiven Nutzung, Sachbezugsregime
          gültig bei Vertragsbeginn, Abzugsfähigkeitsregime, bei Erstzulassung gezahlte
          Zulassungssteuer, jährliche Kfz-Steuerpflicht, Umweltzonen-Anwendbarkeit,
          Ladeinfrastruktur-Subventionsstack bei Vertragsbeginn. Die gleichen Felder werden
          ein zweites Mal als Projektion zum Vertragsende gespeichert. Die Projektion wird
          aktualisiert, wenn sich eine jurisdiktionale Regel ändert, mit Effective-Dating der
          Projektion selbst.
        </li>
        <li>
          <strong>Kanal und Remarketing-Absicht.</strong> Origination-Kanal, erwarteter
          Remarketing-Kanal am Vertragsende, erwartete Zustandsstufe bei Rückgabe,
          Remarketing-Geografie und ein Flag dafür, ob der geplante Remarketing-Kanal aktuell
          für diese Kombination aus Fahrzeug, Jurisdiktion und Zustand operativ ist. Das Flag
          ist das wichtigste Feld in dieser Gruppe.
        </li>
        <li>
          <strong>Typisierte Instrumentenanhänge.</strong> Jedes Instrument ist ein
          erstklassiges Objekt: Risk-Share-Vertrag, Restwert-Versicherungs-Wrap,
          Verbriefungstranchen-Zuweisung, direkte Private-Credit-Platzierung. Das
          Vertragsobjekt exponiert ein abgeleitetes Feld Net Residual Exposure, das über die
          Anhänge aggregiert.
        </li>
        <li>
          <strong>Provenance und Confidence pro Feld.</strong> Jedes Feld trägt Metadaten:
          Quellsystem, Erfassungs-Zeitstempel, Transformations-Lineage und einen
          Confidence-Score auf einer publizierten Skala. Das Modell kann Confidence als
          Feature aufnehmen und seine eigene Unsicherheit entsprechend gewichten.
        </li>
        <li>
          <strong>Effective-Dating-Hülle.</strong> Kein Feld wird an Ort und Stelle
          überschrieben. Jede Änderung erzeugt eine neue versionierte Zeile mit
          Effective-From- und Effective-To-Zeitstempeln. Eine Abfrage aus 2026 fragt nach dem
          projizierten Steuerregime, wie es bei Vertragsorigination bekannt war; eine
          Abfrage aus 2028 fragt nach dem heute bekannten. Die Divergenz ist selbst ein
          Modell-Input.
        </li>
      </ol>
      <p>
        Diese neun Gruppen plus die zwei Konventionen sind die Referenz. Das Argument ist
        Sequenzierung: zuerst die vier Dimensionen von 2026, dann Provenance und
        Effective-Dating über die bestehende Struktur, drittens einzelne Feldtiefen. Diese
        Reihenfolge liefert strukturelle Vollständigkeit vor dem nächsten Budgetzyklus.
      </p>

      <h2>Dieselbe VIN, unterschiedliche Restwerte in 28 Jurisdiktionen</h2>
      <p>
        Das Overlay pro Jurisdiktion ist die Dimension, die Single-Country-Betreiber
        kontraintuitiv finden und Multi-Country-Betreiber sofort erkennen. Dasselbe Fahrzeug,
        finanziert vom selben Kreditgeber, hat eine materiell unterschiedliche Restwertbahn
        über europäische Jurisdiktionen, und die Varianz wird vom fiskalischen Stack
        getrieben, nicht von Fahrzeugattributen.
      </p>
      <p>
        Das kanonische Industrie-Observatorium auf dieser Dimension demonstriert die Varianz
        direkt. Über die 28 Märkte, die es bewertet, konkurriert ein batterieelektrisches
        Fahrzeug auf Gesamtbetriebskosten mit einem Verbrennungs-Äquivalent bei 0,25 EUR pro
        Kilometer in Norwegen, 0,33 EUR pro Kilometer in Belgien und 0,33 EUR pro Kilometer
        in Rumänien, gegen ICE-Pendants bei 0,45 EUR, 0,40 EUR und 0,28 EUR jeweils. Dasselbe
        batterieelektrische Fahrzeug ist in Norwegen ungefähr 80 Prozent so teuer im Betrieb
        wie sein ICE-Pendant, in Belgien 83 Prozent und in Rumänien 18 Prozent teurer. Die
        Technologie ist dieselbe. Die fiskalische Architektur ist es nicht.
      </p>
      <p>
        Die Restwert-Implikation ist direkt. Ein gebrauchtes BEV in Norwegen tritt in einen
        Markt ein, in dem sein primärer Substitut, gebrauchter ICE, durch das Steuerregime
        strukturell benachteiligt ist, und das BEV behält Restwert, gestützt durch
        Käufernachfrage. Ein gebrauchtes BEV in Rumänien tritt in einen Markt ein, in dem
        sein primärer Substitut strukturell begünstigt ist, und das BEV findet eine flachere
        Nachfrage. Dieselbe VIN produziert je nach Rückgabejurisdiktion unterschiedliche
        Vertragsende-Ökonomie.
      </p>
      <p>
        Drei Cluster-Archetypen vereinfachen das Modellierungsproblem. Der Cluster Developed
        (13 Märkte einschließlich Norwegen, Belgien, Niederlande, Österreich, Schweden,
        Finnland, Dänemark, Portugal, Frankreich, Luxemburg, Vereinigtes Königreich,
        Deutschland, Schweiz) teilt das strukturelle Merkmal, dass die
        BEV-versus-ICE-Gesamtbetriebskosten das BEV begünstigen. Der Cluster Transitioning
        (Irland, Griechenland, Italien, Spanien, Slowenien, Ungarn) teilt das Merkmal von
        Steuerregimen, die auf einer messbaren Bahn zum Cluster Developed konvergieren. Der
        Cluster Emerging (Bulgarien, Kroatien, Tschechien, Estland, Lettland, Litauen, Polen,
        Rumänien, Serbien, Slowakei, Ukraine) teilt das Merkmal von fiskalischen Stacks, die
        seit etwa einem Jahrzehnt unverändert sind.
      </p>
      <p>
        Ein paneuropäischer Betreiber hat im Prinzip achtundzwanzig Restwertkurven pro
        Fahrzeuggeneration, eine pro Jurisdiktion. Das Datenobjekt kann dies ausdrücken, wenn
        der fiskalische Kontext eine erstklassige Feldgruppe ist, die Jurisdiktion der
        effektiven Nutzung pro Vertrag erfasst wird und die Projektion des Steuerregimes zum
        Vertragsende aktualisiert wird, wenn sich die Politik bewegt.
      </p>
      <p>
        Eine separate Überlegung gilt, wenn eine Jurisdiktion einen fiskalischen Hebel
        bewegt. Die belgische Abzugsfähigkeitsänderung wirksam ab Januar 2026 hat die
        Restwertbahn jedes Nicht-Null-Emissionsfahrzeugs in einem belgischen Portfolio
        bewegt. Ein Betreiber mit effective-dated fiskalischer Projektion absorbiert die
        Änderung als Datenereignis. Ein Betreiber mit hartcodierter fiskalischer Behandlung
        absorbiert sie als Vorfall.
      </p>

      <h2>Was die dominanten Objekte darstellen und was sie verfehlen</h2>
      <p>
        Die dominanten Industrieobjekte in der europäischen Autofinanzierung fallen in drei
        Linien. Die Captive-Vendor-Linie optimiert für enge Integration mit dem Produktkatalog
        und Händlernetz des OEM. Die Retail-Banking-Linie optimiert für unbesicherte
        Kreditlogik, angepasst an besicherte Autofinanzierung. Die Fleet-Specialist-Linie
        optimiert für Fahrzeug-Lebenszyklus-Management und Remarketing. Jede ist ein
        kohärentes Design für ihr Ursprungsproblem. Keine ist ein kohärentes Design für
        Restwertmanagement in 2026.
      </p>
      <p>
        Die Captive-Vendor-Linie stellt das Fahrzeug in tiefem Detail dar, behandelt aber den
        Hersteller als implizit und unterstützt selten Multi-Jurisdiktions-Operationen
        nativ. Batterie-Gesundheitszustand wird, wenn überhaupt, durch seitlich angesetzte
        Telematik-Integrationen erfasst. Instrumentenanhänge werden als Dokumente oder in
        Anpassungstabellen gespeichert.
      </p>
      <p>
        Die Retail-Banking-Linie stellt den Vertrag in gutem Detail und die Kreditentscheidung
        gut dar, behandelt aber das Fahrzeug effektiv als sekundär, mit Hersteller als
        String-Spalte und Batterie als gar kein Feld. Fiskalische Behandlung ist
        Konfiguration. Jurisdiktionale Variation wird durch Tenant-Trennung unterstützt, aber
        nicht durch native Objektstruktur.
      </p>
      <p>
        Die Fleet-Specialist-Linie stellt den Fahrzeuglebenszyklus in tiefem Detail dar, aber
        behandelt den Finanzvertrag als benachbart statt zentral. Der OEM ist ein String.
        Verbriefungs- und Risk-Share-Verträge werden typischerweise gar nicht dargestellt.
      </p>
      <p>
        Dies ist keine Kritik an der Anbieterwahl. Keine der drei Linien wurde gegen eine
        Problemstellung entworfen, die Batterie als trennbares Asset, OEM als
        Counterparty-Entität, Jurisdiktion als erstklassiges fiskalisches Overlay und
        Instrumente als typisierte Anhänge simultan einschließt. Das in dieser Arbeit
        vorgeschlagene Referenzobjekt ist direkt gegen die Problemstellung von 2026
        entworfen. Es kann als Greenfield-Schema oder als Overlay-Struktur auf einem
        bestehenden Kern implementiert werden.
      </p>

      <h2>Wie Instrumente sich anhängen</h2>
      <p>
        Ein erstklassiger Anhang ist ein Objekt, das per Foreign Key mit einem Vertrag
        verbunden ist, mit eigener Schema, eigenem Lebenszyklus und eigenem Beitrag zu den
        abgeleiteten Feldern des Vertrags. Ein Side-Letter-Anhang ist ein Dokument, ohne
        Schema, ohne darstellbaren Lebenszyklus, ohne automatisierten Beitrag. Das erste ist
        ein Datenobjekt. Das zweite ist eine Ablagekonvention.
      </p>
      <p>
        <strong>Risk-Share-Verträge</strong> hängen sich natürlich als typisierte Objekte an:
        Counterparty-Referenz, Trigger-Bedingungen, Anteilsquote, Cap, Selbstbehalt,
        Cashflow-Richtung und Timing, Lebenszyklus-Ereignisse, buchhalterische Behandlung. Die
        Net Residual Exposure ist die Gross Residual Exposure minus den erwarteten Beitrag
        jedes Risk-Share-Anhangs, bedingt durch seine Trigger.
      </p>
      <p>
        <strong>Restwert-Versicherungs-Wraps</strong> hängen sich nach demselben Muster an,
        mit versicherungsspezifischen Feldern: Versicherer, Prämienstruktur, Policendauer,
        Schadenshistorie, Deckungsumfang, Selbstbehalt. Die Schemakonvention ist identisch.
      </p>
      <p>
        <strong>Verbriefungstranchen-Zuweisungen</strong> hängen sich mit einer anderen
        Struktur an, weil die Beziehung Portfolio-zu-Tranche statt Vertrag-zu-Counterparty
        ist. Ein Vertrag trägt eine Referenz auf den Deal, die Tranche, die Retention-Regeln
        und den Zeitstempel der Zuweisung. Die effektive Restwertexposition des Vertrags
        für die Bilanz des Kreditgebers wird durch die Zuweisung reduziert.
      </p>
      <p>
        Der Vorteil typisierter Anhänge ist nicht ästhetisch. Side-Letters erfordern, dass
        das Restwertmodell und die Risikoberichterstattung jedes Mal neu konstruiert werden,
        wenn ein neues Instrument hinzukommt. Typisierte Anhänge erfordern, dass das System
        die Schema einmal versteht, danach fließt jede neue Instanz nativ durch.
      </p>

      <h2>Implikationen für Akteure</h2>
      <p>
        <strong>Für Motor-Finance-Kreditgeber.</strong> Auditieren Sie das aktuelle
        Datenobjekt gegen die vier Dimensionen von 2026. Sequenzieren Sie eine Migration, die
        die fehlenden Dimensionen hinzufügt, bevor das Modell auf dem bestehenden Schema
        verfeinert wird. Behandeln Sie die Modellierungs-Roadmap als Downstream der
        Schema-Roadmap, nicht parallel.
      </p>
      <p>
        <strong>Für OEM-Captive-Kreditgeber.</strong> Der Schemavorteil der Captive-Linie auf
        Fahrzeugkonfiguration ist real und erhaltenswert. Die strukturellen Schwächen sind
        beim Multi-Jurisdiktions-Overlay, beim OEM-als-Counterparty (die Captive kann ihre
        eigene Muttergesellschaft nicht leicht modellieren, aber sie kann
        Markenüberlebenswahrscheinlichkeit für Joint-Venture- oder Sister-Brand-Expositionen
        modellieren) und bei den Instrumentenanhängen.
      </p>
      <p>
        <strong>Für OEM-Unternehmensstrategie.</strong> Ein typisierter Risk-Share-Vertrag,
        den eine Captive- oder Bank-Counterparty als erstklassiges Objekt in ihrer
        Datenschicht pflegt, ist ein Vertrag, den der OEM aus derselben Struktur erstellen
        können sollte.
      </p>
      <p>
        <strong>Für Plattform-Anbieter.</strong> Das Referenzobjekt ist eine öffentliche
        Spezifikation. Anbieter, die die neun Feldgruppen und die zwei Konventionen als
        native Plattform-Konstrukte ausdrücken, nehmen an einem Markt teil, in dem das
        Gespräch mit &bdquo;zeigen Sie mir Ihr Datenmodell&ldquo; beginnt statt mit dem
        Vergleich von Feature-Listen.
      </p>

      <h2>Signale, die wir beobachten</h2>
      <ol>
        <li>
          <strong>Das erste publizierte Referenzobjekt von einem Tier-1-Kreditgeber oder einer
          Industriekörperschaft.</strong> Wenn ein großer Kreditgeber oder ein
          Branchenverband eine Restwert-Datenobjektspezifikation publiziert, bewegt sich der
          Schema-First-Rahmen vom Argument eines einzelnen Betreibers zu Branchenkonsens.
        </li>
        <li>
          <strong>Die erste vom Regulator geforderte Restwert-Offenlegung, die die aktuelle
          Objektkapazität übersteigt.</strong> Die erste konkrete Offenlegungsanforderung, die
          die dominanten Objekte ohne Erweiterung nicht erfüllen können, ist der Moment, in
          dem die Schema-Lücke von optionaler Verbesserung zu erforderlicher Investition wird.
        </li>
        <li>
          <strong>Der erste Verbriefungs-Deal, dessen Loan Tape die vier Dimensionen von 2026
          freilegt.</strong> Der erste Deal, der materiell bepreist wurde, weil sein Loan
          Tape Batterie, OEM-Counterparty, Steuerregime und Instrumentenanhänge transparent
          freilegte, ist ein Marktsignal.
        </li>
        <li>
          <strong>OEM-Ausstiegsereignisse, die den Markenüberlebens-Input testen.</strong>
          Betreiber, die das Feld erfasst und die Projektion aktualisiert hatten, werden das
          Ereignis anders absorbieren als Betreiber, die den Hersteller als String-Spalte
          hatten.
        </li>
        <li>
          <strong>Politische Bewegungen pro Jurisdiktion, die das fiskalische Overlay
          testen.</strong> Die belgischen, französischen und niederländischen fiskalischen
          Änderungen über 2026, 2027 und 2028 sind vorab angekündigt. Jede ist ein
          natürlicher Test.
        </li>
      </ol>

      <h2>Wie Innovia hilft</h2>
      <p>
        Wir betreiben eine modulare Asset-Finance-Plattform, die nativ für europäische
        Kreditgeber, Captive-Entitäten und große Flottenbetreiber gebaut ist, mit
        Multi-Tenant-Vertragsmanagement im Kern und konfigurierbaren
        per-Jurisdiktions-Integrationspunkten. Das in dieser Arbeit argumentierte
        Referenzobjekt ist das strukturelle Ziel, gegen das unsere Plattform entworfen ist.
        Wir öffnen jetzt Design-Partner-Engagements, um spezifische Erweiterungen gegen
        echten Motor-Finance-Fluss zu härten.
      </p>
      <p>
        <strong>Batterie als trennbares Asset-Objekt.</strong> Unser Fahrzeugobjekt stellt
        das Fahrzeug heute als eine einzige Entität dar. Wir erweitern es mit einer
        Batterie-Entität mit eigener Identität, eigenem Lebenszyklus und eigener
        Gesundheitskurve. Wir suchen einen Kreditgeber oder eine Captive mit einem
        batterieelektrischen Back-Book und entweder OBD-basiertem oder
        Hersteller-Feed-Zugang zum Batterie-Gesundheitszustand.
      </p>
      <p>
        <strong>OEM als Counterparty-Entität mit Markenüberlebenswahrscheinlichkeit.</strong>{' '}
        Unser Counterparty-Modell unterstützt heute Kreditnehmer, Händler und Versicherer.
        Wir erweitern es mit OEM als erstklassigem Counterparty-Typ und einem expliziten
        Markenüberlebenswahrscheinlichkeits-Feld. Wir suchen einen Kreditgeber mit materieller
        Nicht-Captive-OEM-Exposition.
      </p>
      <p>
        <strong>Fiskalisches Overlay pro Jurisdiktion als nativer Objektkonstrukt.</strong>{' '}
        Wir erweitern die Sachbezugs-Berechnungsschicht, das Abzugsfähigkeits-Schedule und
        die Steuer-Engines, um länderspezifische Powertrain-Regeln als effective-dated
        Objekte auszudrücken, mit der Projektion zum Vertragsende als separat versioniertem
        Objekt. Wir suchen einen Multi-Country-Betreiber über mindestens drei europäische
        Märkte.
      </p>
      <p>
        <strong>Typisierte Instrumentenanhänge mit abgeleiteter Net Residual Exposure.</strong>{' '}
        Wir erweitern das Anhangmodell mit Risk-Share-Verträgen, Restwert-Versicherungs-Wraps
        und Verbriefungstranchen-Zuweisungen als erstklassigen typisierten Objekten. Wir
        suchen einen Kreditgeber, der eine Verbriefung in den nächsten zwölf bis achtzehn
        Monaten vorbereitet, eine Captive mit einem Risk-Share-Programm mit
        Bank-Counterparties oder einen Spezialversicherer mit einem Restwert-Wrap-Produkt.
      </p>
      <p>
        Unser Engagement-Format im ersten Jahr ist eine paketierte Innovation Partnership,
        gescoped gegen eine oder zwei der Erweiterungen, mit geteiltem geistigem Eigentum am
        verallgemeinerten Output und exklusiver Nutzung der eigenen Konfiguration des
        Design-Partners.
      </p>

      <h2>Quellen und Methodik</h2>
      <p>
        Empirische Behauptungen und quantitative Vergleiche in dieser Arbeit sind primär aus
        dem Ayvens European Mobility Guide 2026 für per-Jurisdiktions-fiskalische und
        Gesamtbetriebskosten-Daten, aus den Zulassungsdaten des Verbands der europäischen
        Automobilhersteller durch April 2026 für die Powertrain-Mix-Bahn und aus primärem
        Finanzjournalismus für die Restwert-Kompression im Vereinigten Königreich gezogen.
        Jede Quelle wird als single-source directional behandelt, sofern nicht explizit
        korroboriert. Die Referenzobjekt-Spezifikation selbst ist ein Builder-Argument,
        gedacht als öffentlicher Ausgangspunkt für Branchendiskussion und nicht als
        normativer Standard.
      </p>
    </div>
  );
}

function Fr() {
  return (
    <div className="prose-paper">
      <h2>Cinq points à retenir</h2>
      <ul>
        <li>
          <strong>La qualité du modèle est bornée supérieurement par l&apos;objet de données
          en dessous.</strong> Un modèle de prévision plus sophistiqué entraîné sur le même
          schéma appauvri livre des prévisions marginalement meilleures de la mauvaise
          chose. Les gains les plus difficiles sur la valeur résiduelle en 2026 viennent de
          l&apos;extension du schéma, pas du raffinement du modèle sur le même schéma.
        </li>
        <li>
          <strong>Le problème de 2026 a quatre dimensions structurelles que les objets
          dominants ne représentent pas nativement.</strong> État de santé de la batterie,
          probabilité de survie de l&apos;OEM, overlay fiscal par juridiction et
          attachements typés d&apos;instruments. Chacune requiert sa propre extension
          structurelle, pas une colonne ajoutée à une table existante.
        </li>
        <li>
          <strong>L&apos;objet de référence est publiable.</strong> Neuf groupes de champs,
          deux conventions non négociables (effective-dating sur chaque champ et provenance
          explicite avec confidence par champ) et attachements typés explicites pour les
          contrats de risk-share, les assurances de valeur résiduelle et les tranches de
          titrisation. Nous publions la structure dans cette étude.
        </li>
        <li>
          <strong>L&apos;overlay par juridiction est un construct natif, pas une
          customisation.</strong> Un opérateur multi-pays qui hardcode un seul traitement
          fiscal par implémentation paie pour ce privilège chaque fois qu&apos;un code
          fiscal bouge, ce qui sur l&apos;évidence 2025-2026 équivaut à environ deux marchés
          par an.
        </li>
        <li>
          <strong>Les opérateurs schema-first gagneront le prochain cycle de
          design-partner.</strong> Les opérateurs qui publient un objet de référence
          forcent la conversation à commencer avec leur structure. Les opérateurs qui
          vendent une liste de fonctionnalités contre le slide-deck d&apos;un concurrent
          négocient depuis une position plus faible.
        </li>
      </ul>

      <h2>Un modèle ne peut pas être meilleur que son objet</h2>
      <p>
        Un modèle de valeur résiduelle est une fonction qui va des features vers une
        résiduelle prédite. La fonction peut être linéaire, régularisée, basée sur des
        arbres, neuronale, ensemble. L&apos;architecture du modèle compte à la marge. Les
        features comptent structurellement. Si une feature n&apos;est pas dans le schéma,
        le modèle ne peut pas l&apos;apprendre, et aucun degré de sophistication
        architecturale ne récupère l&apos;information. C&apos;est vrai à l&apos;entraînement
        comme à l&apos;inférence.
      </p>
      <p>
        Deux couches de provenance composent l&apos;effet. La couche de données brutes,
        c&apos;est ce que l&apos;opérateur collecte : télématique véhicule, événements de
        contrat, historique de transactions, évaluations tierces, signaux de marché. La
        couche de features dérivées, c&apos;est ce que l&apos;équipe de modélisation peut
        construire à partir de la couche brute par engineering : courbes d&apos;état de
        santé de batterie, ratios de concentration OEM, deltas de TCO par juridiction,
        indices d&apos;intensité de channel-stuffing. Un modèle ne peut utiliser que la
        couche dérivée. Une équipe de modélisation ne peut construire des features dérivées
        qu&apos;à partir de données brutes capturées. Les données brutes ne peuvent être
        capturées qu&apos;à la granularité et la fréquence que l&apos;objet de données
        accepte. La chaîne va de l&apos;objet aux brutes aux dérivées au modèle à la
        prévision, et la décision sur l&apos;objet est la contrainte upstream sur tout ce
        qui suit.
      </p>
      <p>
        Cette séquence a une conséquence temporelle. Une décision de schéma prise en 2014
        de représenter le constructeur comme une colonne string de cinquante caractères,
        sans clé étrangère vers une entité de contrepartie, devient une dette structurelle
        douze ans plus tard quand l&apos;opérateur veut tarifer la probabilité de survie de
        l&apos;OEM et découvre que ce champ ne peut pas être joint à une vue de risque
        crédit parce qu&apos;il n&apos;y a pas d&apos;entité derrière le string.
        L&apos;équipe peut réécrire le champ, mais le back-book porte l&apos;ancienne
        représentation ; réconcilier l&apos;historique avec le nouveau schéma est un projet
        de migration multi-trimestriel avec ses propres risques de qualité de données. Les
        décisions de schéma sont une dette de cinq ans au minimum.
      </p>
      <p>
        Ceci n&apos;est pas une critique d&apos;un schéma spécifique. C&apos;est un argument
        sur l&apos;ordre des opérations. Les opérateurs qui investissent dans la
        sophistication du modèle sur un schéma de 2014 font le deuxième mouvement avant le
        premier. Le premier mouvement consiste à spécifier l&apos;objet que le problème de
        2026 requiert, à auditer le gap par rapport au schéma actuel, et à séquencer une
        migration. Le deuxième mouvement consiste à sélectionner et entraîner le modèle.
      </p>

      <h2>Les quatre dimensions que l&apos;objet de 2026 doit représenter</h2>
      <p>
        Quatre dimensions reconfigurent le risque de valeur résiduelle en 2026. Chacune
        requiert une extension structurelle de l&apos;objet de données, pas une colonne
        ajoutée à une table existante. Chacune est fondamentalement un problème de schéma,
        pas un problème de modèle.
      </p>
      <p>
        <strong>La batterie comme actif séparable.</strong> Un véhicule électrique à
        batterie n&apos;est pas un actif unique avec une courbe de valeur résiduelle.
        C&apos;est un châssis et un pack batterie, chacun avec sa propre trajectoire de
        dépréciation, son propre régime de garantie et son propre chemin de
        end-of-first-life. La batterie se dégrade sur une courbe qui dépend de
        l&apos;historique de charge, du climat, de la profondeur des cycles de décharge,
        du ratio de fast-charge et de la génération d&apos;électrochimie. D&apos;ici 2027,
        les marchés second-life de batteries et les applications de stockage stationnaire
        fourniront un chemin résiduel pour les batteries indépendant du remarketing
        véhicule. Un objet qui représente le véhicule comme une seule unité avec une seule
        valeur résiduelle ne peut tarifer ni l&apos;un ni l&apos;autre côté de cette
        séparation.
      </p>
      <p>
        <strong>Risque de contrepartie OEM.</strong> Une prévision de valeur résiduelle
        faite aujourd&apos;hui contre un véhicule dont le constructeur cesse ses opérations
        européennes en 2028 est une prévision qui exclut le facteur de risque dominant de
        ce contrat. Effondrement du canal, annulation de garantie, disponibilité des pièces,
        valeur de marque : tous s&apos;effondrent ensemble si le constructeur sort. Le
        modèle de valeur résiduelle a besoin d&apos;un input sur la probabilité que la
        marque existe encore à la fin du contrat. Cet input doit vivre quelque part. Les
        objets dominants de l&apos;industrie n&apos;ont nulle part où le mettre parce que
        le constructeur est une colonne string, pas une entité de contrepartie avec son
        propre profil de risque, rating de crédit, reporting financier et estimation de
        probabilité de survie de marque.
      </p>
      <p>
        <strong>Overlay fiscal par juridiction.</strong> Le même véhicule financé au même
        prix de liste OEM le même jour a un coût total de possession et une économie de
        revente matériellement différents à travers 28 juridictions européennes. Le driver
        n&apos;est pas les attributs du véhicule. C&apos;est le régime fiscal : traitement
        benefit-in-kind, taxe d&apos;immatriculation, taxe de circulation, déductibilité,
        règles de zones à faibles émissions, subvention d&apos;infrastructure de recharge,
        traitement TVA sur les véhicules d&apos;occasion. Un portefeuille de financement
        auto européen en 2026 détient le même VIN à travers plusieurs juridictions, et la
        valeur résiduelle reflète la stack fiscale de chaque juridiction. Un objet qui
        représente le contexte fiscal comme un simple flag juridictionnel rate la dimension
        entièrement.
      </p>
      <p>
        <strong>Attachements typés d&apos;instruments.</strong> Le risque moderne de valeur
        résiduelle est rarement détenu indivis sur un seul bilan. Les contrats de risk-share
        avec OEMs, les wraps d&apos;assurance de valeur résiduelle, les tranches de
        titrisation et les placements directs en private credit déplacent des morceaux de
        l&apos;exposition résiduelle vers des contreparties sous des contrats formels avec
        triggers explicites, ratios de partage, plafonds, franchises, directions de
        cash-flow et obligations de reporting. Ce ne sont pas des side-letters ou des
        notes de bas de page. Ce sont des contrats financiers de première classe qui
        s&apos;attachent à des deals ou pools spécifiques et qui altèrent l&apos;exposition
        résiduelle du prêteur au niveau du deal. Les objets dominants de l&apos;industrie
        les traitent comme des documents stockés à côté du contrat ou comme des champs sur
        une table de customisations. Aucune représentation ne permet au modèle de valeur
        résiduelle d&apos;ingérer l&apos;attachement comme feature.
      </p>
      <p>
        Ces quatre dimensions sont indépendantes. Un objet qui s&apos;étend pour gérer les
        trois premières mais pas la quatrième ne correspond toujours pas au problème de
        2026. Un objet qui les gère toutes les quatre avec la mauvaise structure
        relationnelle entre elles génère les bons champs mais les mauvais joins. La
        complétude structurelle de l&apos;objet est le prérequis, pas la somme des
        ajouts de colonnes.
      </p>

      <h2>L&apos;anatomie de l&apos;objet de référence</h2>
      <p>
        L&apos;objet de référence pour le financement auto européen en 2026 est construit
        à partir de neuf groupes de champs. Deux conventions gouvernent toute la structure :
        chaque champ est effective-dated, et chaque champ porte une provenance explicite
        avec un score de confidence. Les groupes de champs sont décrits ci-dessous au
        niveau de l&apos;intention et des champs-clés. DDL complet et patterns de migration
        sont dans l&apos;implémentation de référence de la plateforme accompagnant cette
        étude.
      </p>
      <ol>
        <li>
          <strong>Identité et millésime du véhicule.</strong> VIN, date de construction,
          année modèle, génération, type de carrosserie, segment, catégorie de
          transmission, type de propulsion. Configuration originale telle
          qu&apos;enregistrée chez le constructeur. Émissions et consommation énergétique
          normalisées WLTP à l&apos;homologation. Prix catalogue à la première
          immatriculation dans le pays de première immatriculation.
        </li>
        <li>
          <strong>Batterie, séparable du véhicule.</strong> Une entité de batterie distincte
          avec sa propre identité, génération de chimie cellulaire, capacité nominale à la
          fabrication, état de santé actuel à la mesure la plus récente, coefficients de
          courbe de santé ajustés à l&apos;historique propre du véhicule, garantie
          résiduelle en fin de leasing, nombre de cycles fast-charge, profondeur moyenne
          de décharge, indicateur d&apos;exposition climatique. Liée au véhicule par clé
          étrangère avec un cycle de vie séparé.
        </li>
        <li>
          <strong>Résumé de télémétrie d&apos;usage.</strong> Agrégations périodiques depuis
          la télématique des véhicules connectés : kilomètres totaux, kilomètres par
          catégorie d&apos;usage, distance journalière moyenne, comportement de charge,
          indice d&apos;agressivité de conduite, flags d&apos;exposition aux accidents. La
          télémétrie brute reste dans le système source ; l&apos;objet contient les
          features agrégées que le modèle de valeur résiduelle consomme.
        </li>
        <li>
          <strong>Entité de contrepartie OEM.</strong> Le constructeur est une entité, pas
          un string. Champs : identifiant d&apos;entité légale, indicateur de présence sur
          le marché européen, présence de bras de finance captive, part de marché véhicule
          par segment et pays, rating de crédit actuel s&apos;il existe, estimation de
          probabilité de survie de marque depuis la recherche crédit interne de
          l&apos;opérateur avec référence de méthodologie explicite, pattern historique
          d&apos;actions de prix sur les véhicules neufs, flags d&apos;exposition publique
          réglementaire ou légale.
        </li>
        <li>
          <strong>Contexte fiscal et réglementaire, snapshot plus projection.</strong>{' '}
          Juridiction d&apos;immatriculation, juridiction d&apos;usage effectif, régime
          benefit-in-kind applicable au début du contrat, régime de déductibilité, taxe
          d&apos;immatriculation payée à la première immatriculation, obligation annuelle
          de taxe de circulation, applicabilité des zones à faibles émissions, stack de
          subventions d&apos;infrastructure de recharge au début du contrat. Les mêmes
          champs sont stockés une seconde fois comme projection à la fin du contrat,
          reflétant les changements programmés connus. La projection est mise à jour
          lorsqu&apos;une règle juridictionnelle change, avec effective-dating de la
          projection elle-même.
        </li>
        <li>
          <strong>Canal et intention de remarketing.</strong> Canal d&apos;origination,
          canal de remarketing attendu à la fin du contrat, grade d&apos;état attendu au
          retour, géographie de remarketing et un flag pour savoir si le canal de
          remarketing planifié est actuellement opérationnel pour cette combinaison de
          véhicule, juridiction et état. Le flag est le champ le plus important de ce
          groupe.
        </li>
        <li>
          <strong>Attachements typés d&apos;instruments.</strong> Chaque instrument est un
          objet de première classe lié au contrat : contrat de risk-share, wrap
          d&apos;assurance de valeur résiduelle, attribution de tranche de titrisation,
          placement direct en private credit. L&apos;objet contrat expose un champ dérivé
          de net residual exposure qui agrège sur les attachements.
        </li>
        <li>
          <strong>Provenance et confidence par champ.</strong> Chaque champ porte des
          métadonnées : système source, horodatage de capture, lignée de transformation et
          un score de confidence sur une échelle publiée. Le modèle peut ingérer la
          confidence comme feature, pondérant sa propre incertitude en conséquence.
        </li>
        <li>
          <strong>Enveloppe effective-dating.</strong> Aucun champ n&apos;est écrasé sur
          place. Chaque changement crée une nouvelle ligne versionnée avec horodatages
          effective-from et effective-to. Une requête de 2026 demande ce qu&apos;était le
          régime fiscal projeté tel qu&apos;on le connaissait à l&apos;origination du
          contrat ; une requête de 2028 demande ce qu&apos;il est tel qu&apos;on le connaît
          aujourd&apos;hui. La divergence est elle-même un input de modèle.
        </li>
      </ol>
      <p>
        Ces neuf groupes plus les deux conventions sont la référence. L&apos;argument
        porte sur la séquence : d&apos;abord les quatre dimensions de 2026, ensuite
        provenance et effective-dating sur la structure existante, troisièmement le
        raffinement des profondeurs de champs individuels. Cet ordre livre la complétude
        structurelle avant le prochain cycle budgétaire.
      </p>

      <h2>Le même VIN, des résiduelles différentes dans 28 juridictions</h2>
      <p>
        L&apos;overlay par juridiction est la dimension que les opérateurs mono-pays
        trouvent contre-intuitive et que les opérateurs multi-pays reconnaissent
        immédiatement. Le même véhicule, financé par le même prêteur, contre le même
        modèle de contrat, a une trajectoire de valeur résiduelle matériellement
        différente à travers les juridictions européennes, et la variance est conduite par
        la stack fiscale, pas par les attributs du véhicule.
      </p>
      <p>
        L&apos;observatoire industriel canonique sur cette dimension démontre la variance
        directement. À travers les 28 marchés qu&apos;il score, un véhicule électrique à
        batterie concurrence un équivalent à combustion interne sur le coût total de
        possession à 0,25 EUR par kilomètre en Norvège, 0,33 EUR par kilomètre en Belgique
        et 0,33 EUR par kilomètre en Roumanie, contre des contreparties ICE à 0,45 EUR,
        0,40 EUR et 0,28 EUR respectivement. Le même véhicule électrique est environ 80
        pour cent aussi cher à faire rouler que sa contrepartie ICE en Norvège, 83 pour
        cent en Belgique et 18 pour cent plus cher en Roumanie. La technologie est la
        même. L&apos;architecture fiscale ne l&apos;est pas.
      </p>
      <p>
        L&apos;implication sur la valeur résiduelle est directe. Un véhicule électrique
        d&apos;occasion en Norvège ré-entre sur un marché où son substitut primaire, ICE
        d&apos;occasion, est structurellement pénalisé par le régime fiscal, et le BEV
        retient sa valeur résiduelle, soutenue par la demande acheteur. Un véhicule
        électrique d&apos;occasion en Roumanie ré-entre sur un marché où son substitut
        primaire est structurellement favorisé par le régime fiscal, et le BEV trouve une
        demande plus superficielle au même prix de catalogue. Le même VIN produit une
        économie de fin de contrat différente selon la juridiction de retour.
      </p>
      <p>
        Trois archétypes de cluster simplifient le problème de modélisation. Le cluster
        Developed (13 marchés incluant Norvège, Belgique, Pays-Bas, Autriche, Suède,
        Finlande, Danemark, Portugal, France, Luxembourg, Royaume-Uni, Allemagne, Suisse)
        partage la caractéristique structurelle que le TCO BEV-versus-ICE favorise le
        BEV. Le cluster Transitioning (Irlande, Grèce, Italie, Espagne, Slovénie, Hongrie)
        partage la caractéristique de régimes fiscaux convergeant vers le cluster
        Developed sur une trajectoire mesurable. Le cluster Emerging (Bulgarie, Croatie,
        Tchéquie, Estonie, Lettonie, Lituanie, Pologne, Roumanie, Serbie, Slovaquie,
        Ukraine) partage la caractéristique de stacks fiscales inchangées depuis environ
        une décennie.
      </p>
      <p>
        Un opérateur paneuropéen n&apos;a pas une seule courbe de valeur résiduelle par
        génération de véhicule. L&apos;opérateur en a, en principe, vingt-huit par
        génération de véhicule, une par juridiction. L&apos;objet de données peut
        l&apos;exprimer si et seulement si le contexte fiscal est un groupe de champs de
        première classe, si la juridiction d&apos;usage effectif est capturée par contrat,
        et si la projection du régime fiscal à la fin du contrat est mise à jour quand la
        politique bouge.
      </p>
      <p>
        Une considération séparée s&apos;applique quand une juridiction bouge un levier
        fiscal. Le changement de déductibilité belge effectif en janvier 2026 a déplacé la
        trajectoire de valeur résiduelle de chaque véhicule non-zéro-émission dans un
        portefeuille belge. Un opérateur avec projection fiscale effective-dated dans
        l&apos;objet de données absorbe le changement comme un événement de données. Un
        opérateur avec traitement fiscal hardcoded l&apos;absorbe comme un incident.
      </p>

      <h2>Ce que les objets dominants représentent, et ce qu&apos;ils ratent</h2>
      <p>
        Les objets dominants de l&apos;industrie en financement auto européen tombent dans
        trois lignées. La lignée captive-vendor optimise pour une intégration étroite avec
        le catalogue produit du constructeur et son réseau de concessionnaires. La lignée
        retail-banking optimise pour une logique de crédit non garanti adaptée au
        financement auto garanti. La lignée fleet-specialist optimise pour la gestion du
        cycle de vie véhicule et le remarketing. Chacune est un design cohérent pour son
        problème d&apos;origine. Aucune n&apos;est un design cohérent pour la gestion de
        valeur résiduelle en 2026.
      </p>
      <p>
        La lignée captive-vendor représente typiquement le véhicule en détail profond,
        mais traite le constructeur comme implicite et supporte rarement les opérations
        multi-juridiction nativement. L&apos;état de santé de la batterie est capturé,
        s&apos;il l&apos;est, via des intégrations télématiques greffées sur le côté.
        Les attachements d&apos;instruments sont stockés comme documents ou dans des
        tables de customisations.
      </p>
      <p>
        La lignée retail-banking représente le contrat en bon détail et la décision crédit
        bien, mais traite le véhicule comme effectivement secondaire, avec le constructeur
        comme colonne string et la batterie comme aucun champ. Le traitement fiscal est
        configuration. La variation juridictionnelle est supportée par séparation de
        tenant mais pas par structure d&apos;objet native.
      </p>
      <p>
        La lignée fleet-specialist représente le cycle de vie véhicule en détail profond,
        mais traite le contrat financier comme adjacent plutôt que central. L&apos;OEM
        est un string. Les contrats de titrisation et de risk-share ne sont
        typiquement pas représentés du tout.
      </p>
      <p>
        Ceci n&apos;est pas une critique du choix de vendor. Aucune des trois lignées
        n&apos;a été conçue contre un énoncé de problème qui inclut la batterie comme
        actif séparable, l&apos;OEM comme entité de contrepartie, la juridiction comme
        overlay fiscal de première classe et les instruments comme attachements typés,
        simultanément. L&apos;objet de référence proposé dans cette étude est conçu
        directement contre l&apos;énoncé de problème de 2026. Il peut être implémenté
        comme un schéma green-field ou comme une structure d&apos;overlay sur un core
        existant.
      </p>

      <h2>Comment les instruments s&apos;attachent</h2>
      <p>
        Un attachement de première classe est un objet lié à un contrat par clé étrangère,
        avec son propre schéma, son propre cycle de vie et sa propre contribution aux
        champs dérivés du contrat. Un attachement side-letter est un document stocké à
        côté du contrat, sans schéma, sans cycle de vie représentable dans le système et
        sans contribution automatisée aux champs dérivés. Le premier est un objet de
        données. Le second est une convention d&apos;archivage.
      </p>
      <p>
        <strong>Les contrats de risk-share</strong> s&apos;attachent naturellement comme
        objets typés : référence d&apos;entité de contrepartie, conditions de trigger,
        ratio de partage, plafond, franchise, direction et timing de cash-flow, événements
        de cycle de vie, traitement comptable. La net residual exposure du contrat est la
        gross residual exposure moins la contribution attendue de chaque attachement de
        risk-share, conditionnée à ses triggers.
      </p>
      <p>
        <strong>Les wraps d&apos;assurance de valeur résiduelle</strong> s&apos;attachent
        par le même pattern, avec des champs spécifiques à l&apos;assurance : assureur,
        structure de prime, durée de police, historique de sinistres, périmètre de
        couverture, franchise. La convention de schéma est identique.
      </p>
      <p>
        <strong>Les attributions de tranche de titrisation</strong> s&apos;attachent avec
        une structure différente parce que la relation est portefeuille-à-tranche plutôt
        que contrat-à-contrepartie. Un contrat porte une référence vers le deal de
        titrisation auquel il a été alloué, la tranche dans ce deal, les règles de
        rétention à l&apos;allocation et le timestamp de l&apos;allocation.
        L&apos;exposition résiduelle effective du contrat pour le bilan du prêteur est
        réduite par l&apos;allocation.
      </p>
      <p>
        L&apos;avantage des attachements typés sur les side-letters n&apos;est pas
        esthétique. Les side-letters requièrent que le modèle de valeur résiduelle et le
        reporting risque soient réingénériés à chaque fois qu&apos;un nouvel instrument
        est ajouté. Les attachements typés requièrent que le système comprenne le schéma
        une fois, après quoi chaque nouvelle instance de l&apos;instrument circule
        nativement à travers modèle et reporting.
      </p>

      <h2>Implications pour les acteurs</h2>
      <p>
        <strong>Pour les prêteurs motor-finance.</strong> Auditez l&apos;objet de données
        actuel contre les quatre dimensions de 2026. Séquencez une migration qui ajoute
        les dimensions manquantes avant de raffiner le modèle sur le schéma existant.
        Traitez la roadmap de modélisation comme downstream de la roadmap de schéma, pas
        en parallèle.
      </p>
      <p>
        <strong>Pour les prêteurs captives OEM.</strong> L&apos;avantage de schéma de la
        lignée captive sur la configuration véhicule est réel et mérite d&apos;être
        préservé. Les faiblesses structurelles sont sur l&apos;overlay multi-juridiction,
        sur l&apos;OEM-en-tant-que-contrepartie (la captive ne peut pas facilement
        modéliser son propre parent comme entité de contrepartie, mais elle peut et doit
        modéliser la probabilité de survie de marque pour les expositions joint-venture
        ou sister-brand) et sur les attachements d&apos;instruments.
      </p>
      <p>
        <strong>Pour la stratégie corporate OEM.</strong> Un contrat de risk-share typé
        qu&apos;une contrepartie captive ou bancaire maintient comme objet de première
        classe dans sa couche de données est un contrat que l&apos;OEM devrait être en
        position d&apos;écrire à partir de la même structure.
      </p>
      <p>
        <strong>Pour les vendors de plateforme.</strong> L&apos;objet de référence est une
        spécification publique. Les vendors qui expriment les neuf groupes de champs et
        les deux conventions comme constructs natifs de plateforme participent à un
        marché où la conversation commence par &laquo; montrez-moi votre modèle de données
        &raquo; plutôt que par la comparaison de listes de fonctionnalités. La
        différenciation se déplace de la parité de fonctionnalités vers la complétude
        structurelle.
      </p>

      <h2>Signaux que nous observons</h2>
      <ol>
        <li>
          <strong>Le premier objet de référence publié par un prêteur tier-1 ou un
          organisme industriel.</strong> Quand un prêteur majeur ou une association
          industrielle publie une spécification d&apos;objet de données de valeur
          résiduelle au niveau de détail que cette étude propose, le cadre schema-first se
          déplace de l&apos;argument d&apos;un seul opérateur vers un consensus
          industriel.
        </li>
        <li>
          <strong>La première exigence réglementaire de reporting de valeur résiduelle
          qui dépasse la capacité actuelle de l&apos;objet.</strong> La première exigence
          concrète que les objets dominants ne peuvent satisfaire sans extension est le
          moment où le gap de schéma passe d&apos;amélioration optionnelle à investissement
          requis.
        </li>
        <li>
          <strong>Le premier deal de titrisation dont le loan tape expose les quatre
          dimensions de 2026.</strong> Le premier deal qui a été tarifé matériellement
          parce que son loan tape exposait batterie, contrepartie OEM, régime fiscal et
          attachements d&apos;instruments de manière transparente est un signal de marché.
        </li>
        <li>
          <strong>Les événements de sortie OEM qui testent l&apos;input de survie de
          marque.</strong> Toute sortie OEM en 2026 ou 2027 d&apos;un marché européen est
          une expérience naturelle sur la probabilité de survie de marque comme input.
        </li>
        <li>
          <strong>Les mouvements de politique par juridiction qui testent l&apos;overlay
          fiscal.</strong> Les changements fiscaux belges, français et néerlandais à
          travers 2026, 2027 et 2028 sont pré-annoncés. Chacun est un test naturel.
        </li>
      </ol>

      <h2>Comment Innovia aide</h2>
      <p>
        Nous opérons une plateforme modulaire d&apos;asset-finance bâtie nativement pour
        les prêteurs européens, entités captives et grands opérateurs de flotte, avec une
        gestion de contrats multi-tenant en son cœur et des points
        d&apos;intégration configurables par juridiction. L&apos;objet de référence
        argumenté dans cette étude est la cible structurelle contre laquelle notre
        plateforme est conçue. Nous ouvrons à présent des engagements de design-partner
        pour durcir des extensions spécifiques contre le flux réel motor-finance.
      </p>
      <p>
        <strong>La batterie comme objet d&apos;actif séparable.</strong> Notre objet
        véhicule représente aujourd&apos;hui le véhicule comme une entité unique avec
        des attributs techniques attachés. Nous l&apos;étendons avec une entité batterie
        ayant sa propre identité, son propre cycle de vie et sa propre courbe d&apos;état
        de santé. Nous recherchons un prêteur ou une captive avec un back-book
        électrique à batterie et un accès soit OBD soit via le feed du constructeur à
        l&apos;état de santé batterie.
      </p>
      <p>
        <strong>L&apos;OEM comme entité de contrepartie avec probabilité de survie de
        marque.</strong> Notre modèle de contrepartie supporte aujourd&apos;hui les rôles
        emprunteur, dealer et assureur. Nous l&apos;étendons avec l&apos;OEM comme type
        de contrepartie de première classe et un champ explicite de probabilité de
        survie de marque. Nous recherchons un prêteur ou une captive avec exposition
        matérielle à OEM non-captive.
      </p>
      <p>
        <strong>Overlay fiscal par juridiction comme construct d&apos;objet natif.</strong>{' '}
        Nous étendons la couche de calcul BIK, le schedule de déductibilité et les
        moteurs de taxe d&apos;immatriculation et de circulation pour exprimer les règles
        spécifiques par pays par powertrain comme objets effective-dated, avec la
        projection à la fin du contrat comme objet versionné séparément. Nous recherchons
        un opérateur multi-pays opérant sur au moins trois marchés européens.
      </p>
      <p>
        <strong>Attachements typés d&apos;instruments avec net residual exposure
        dérivée.</strong> Nous étendons le modèle d&apos;attachement avec les contrats de
        risk-share, les wraps d&apos;assurance de valeur résiduelle et les attributions
        de tranche de titrisation comme objets typés de première classe. Nous recherchons
        un prêteur préparant une titrisation dans les douze à dix-huit prochains mois.
      </p>
      <p>
        Notre format d&apos;engagement Année Un est un Innovation Partnership packagé,
        scoped contre une ou deux des extensions, avec partage de propriété
        intellectuelle sur l&apos;output généralisé et utilisation exclusive de la
        configuration propre du design-partner.
      </p>

      <h2>Sources et note méthodologique</h2>
      <p>
        Les affirmations empiriques et les comparaisons quantitatives dans cette étude
        sont tirées principalement de l&apos;Ayvens European Mobility Guide 2026 pour les
        données fiscales et de coût total de possession par juridiction, des données
        d&apos;immatriculation de l&apos;Association des Constructeurs Européens
        d&apos;Automobiles jusqu&apos;à avril 2026 pour la trajectoire du mix de
        powertrain, et du journalisme financier primaire pour la compression de valeur
        résiduelle au Royaume-Uni et la dynamique de sortie OEM. Chaque source est
        traitée comme single-source directional sauf corroboration explicite. La
        spécification de l&apos;objet de référence elle-même est un argument de
        constructeur, destinée comme point de départ public pour la discussion
        industrielle et non comme un standard normatif.
      </p>
    </div>
  );
}

function It() {
  return (
    <div className="prose-paper">
      <h2>Cinque cose da portare via</h2>
      <ul>
        <li>
          <strong>La qualità del modello è limitata superiormente dall&apos;oggetto dati
          sottostante.</strong> Un modello di previsione più sofisticato addestrato sullo
          stesso schema impoverito fornisce previsioni marginalmente migliori della cosa
          sbagliata. I guadagni più difficili sul valore residuo nel 2026 vengono
          dall&apos;estensione dello schema, non dal raffinamento del modello sullo stesso
          schema.
        </li>
        <li>
          <strong>Il problema del 2026 ha quattro dimensioni strutturali che gli oggetti
          dominanti non rappresentano nativamente.</strong> Stato di salute della batteria,
          probabilità di sopravvivenza dell&apos;OEM, overlay fiscale per giurisdizione e
          allegati tipizzati di strumenti. Ciascuna richiede la propria estensione
          strutturale, non una colonna aggiunta a una tabella esistente.
        </li>
        <li>
          <strong>L&apos;oggetto di riferimento è pubblicabile.</strong> Nove gruppi di
          campi, due convenzioni non negoziabili (effective-dating su ogni campo e
          provenance esplicita con confidence per campo) e allegati tipizzati espliciti
          per contratti di risk-share, assicurazioni di valore residuo e tranche di
          cartolarizzazione. Pubblichiamo la struttura in questo studio.
        </li>
        <li>
          <strong>L&apos;overlay per giurisdizione è un costrutto nativo, non una
          customizzazione.</strong> Un operatore multi-paese che hardcoda un singolo
          trattamento fiscale per implementazione paga per questo privilegio ogni volta
          che un codice fiscale si muove, ciò che sull&apos;evidenza 2025-2026 equivale
          a circa due mercati all&apos;anno.
        </li>
        <li>
          <strong>Gli operatori schema-first vinceranno il prossimo ciclo di
          design-partner.</strong> Gli operatori che pubblicano un oggetto di riferimento
          costringono la conversazione a iniziare con la loro struttura. Gli operatori che
          vendono una lista di funzionalità contro lo slide-deck di un vendor concorrente
          negoziano da una posizione più debole.
        </li>
      </ul>

      <h2>Un modello non può essere migliore del suo oggetto</h2>
      <p>
        Un modello di valore residuo è una funzione dalle feature a un residuo predetto.
        La funzione può essere lineare, regolarizzata, basata su alberi, neurale, ensemble.
        L&apos;architettura del modello conta al margine. Le feature contano
        strutturalmente. Se una feature non è nello schema, il modello non può impararla,
        e nessun grado di sofisticazione architetturale recupera l&apos;informazione.
        Questo è vero in addestramento e ugualmente vero in inferenza.
      </p>
      <p>
        Due livelli di provenance compongono l&apos;effetto. Il livello di dati grezzi è
        ciò che l&apos;operatore raccoglie: telematica veicolo, eventi di contratto,
        cronologia transazioni, valutazioni di terzi, segnali di mercato. Il livello di
        feature derivate è ciò che il team di modellazione può costruire dal livello
        grezzo tramite engineering: curve di stato di salute della batteria, rapporti di
        concentrazione OEM, delta di TCO per giurisdizione, indici di intensità di
        channel-stuffing. Un modello può usare solo il livello derivato. Un team di
        modellazione può costruire feature derivate solo da dati grezzi catturati. I dati
        grezzi possono essere catturati solo alla granularità e frequenza che
        l&apos;oggetto dati accetta. La catena va oggetto a grezzi a derivate a modello a
        previsione, e la decisione sull&apos;oggetto è il vincolo upstream su tutto ciò
        che segue.
      </p>
      <p>
        Questa sequenzazione ha una conseguenza temporale. Una decisione di schema presa
        nel 2014 di rappresentare il costruttore come una colonna string di cinquanta
        caratteri, senza chiave esterna verso un&apos;entità di controparte, diventa
        debito strutturale dodici anni più tardi quando l&apos;operatore vuole prezzare la
        probabilità di sopravvivenza dell&apos;OEM e scopre che quel campo non può essere
        joinato con una vista di rischio credito perché non c&apos;è un&apos;entità
        dietro la stringa. Le decisioni di schema sono debito quinquennale come minimo.
      </p>
      <p>
        Questa non è una critica di uno schema specifico. È un argomento sull&apos;ordine
        delle operazioni. La prima mossa è specificare l&apos;oggetto che il problema del
        2026 richiede, auditare il gap rispetto allo schema attuale e sequenziare una
        migrazione. La seconda mossa è selezionare e addestrare il modello.
      </p>

      <h2>Le quattro dimensioni che l&apos;oggetto del 2026 deve rappresentare</h2>
      <p>
        Quattro dimensioni riformano il rischio di valore residuo nel 2026. Ciascuna
        richiede un&apos;estensione strutturale dell&apos;oggetto dati, non una colonna
        aggiunta a una tabella esistente. Ciascuna è fondamentalmente un problema di
        schema, non un problema di modello.
      </p>
      <p>
        <strong>La batteria come asset separabile.</strong> Un veicolo elettrico a
        batteria non è un singolo asset con una curva di valore residuo. È un telaio
        veicolo e un pacco batteria, ciascuno con la propria traiettoria di
        deprezzamento, il proprio regime di garanzia e il proprio percorso di
        end-of-first-life. Entro il 2027 i mercati second-life di batterie e le
        applicazioni di accumulo stazionario forniranno un percorso residuo per le
        batterie indipendente dal remarketing del veicolo. Un oggetto che rappresenta il
        veicolo come singola unità con un singolo valore residuo non può prezzare nessuno
        dei due lati di questa divisione.
      </p>
      <p>
        <strong>Rischio di controparte OEM.</strong> Una previsione di valore residuo
        fatta oggi contro un veicolo il cui costruttore cessa le operazioni europee nel
        2028 è una previsione che esclude il fattore di rischio dominante di quel
        contratto. Il modello di valore residuo ha bisogno di un input sulla probabilità
        che il marchio esista ancora alla fine del contratto. Gli oggetti dominanti
        dell&apos;industria non hanno dove metterlo perché il costruttore è una colonna
        string, non un&apos;entità di controparte con il proprio profilo di rischio,
        rating di credito, reporting finanziario e stima di probabilità di sopravvivenza
        del marchio.
      </p>
      <p>
        <strong>Overlay fiscale per giurisdizione.</strong> Lo stesso veicolo finanziato
        allo stesso prezzo di listino OEM nello stesso giorno ha un costo totale di
        proprietà e un&apos;economia di rivendita materialmente differenti attraverso 28
        giurisdizioni europee. Il driver è il regime fiscale: trattamento benefit-in-kind,
        tassa di immatricolazione, tassa di circolazione, deducibilità, regole di zone a
        basse emissioni, sussidio all&apos;infrastruttura di ricarica, trattamento IVA su
        veicoli usati. Un portafoglio di finanza auto europeo del 2026 detiene lo stesso
        VIN attraverso più giurisdizioni, e il valore residuo riflette lo stack fiscale
        di ciascuna giurisdizione.
      </p>
      <p>
        <strong>Allegati tipizzati di strumenti.</strong> Il rischio moderno di valore
        residuo è raramente detenuto indiviso su un singolo bilancio. I contratti di
        risk-share con OEM, i wrap di assicurazione di valore residuo, le tranche di
        cartolarizzazione e i piazzamenti diretti in private credit spostano pezzi
        dell&apos;esposizione residua verso controparti sotto contratti formali con
        trigger espliciti, rapporti di partecipazione, cap, franchigie, direzioni di
        cash-flow e obblighi di reporting. Sono contratti finanziari di prima classe che
        si attaccano a deal o pool specifici. Gli oggetti dominanti dell&apos;industria
        li trattano come documenti archiviati accanto al contratto o come campi su una
        tabella di customizzazioni. Nessuna rappresentazione permette al modello di
        valore residuo di ingerire l&apos;allegato come feature.
      </p>
      <p>
        Queste quattro dimensioni sono indipendenti. Un oggetto che si estende per
        gestire le prime tre ma non la quarta ancora non corrisponde al problema del
        2026. La completezza strutturale dell&apos;oggetto è il prerequisito, non la
        somma delle aggiunte di colonne.
      </p>

      <h2>L&apos;anatomia dell&apos;oggetto di riferimento</h2>
      <p>
        L&apos;oggetto di riferimento per la finanza auto europea nel 2026 è costruito
        da nove gruppi di campi. Due convenzioni governano l&apos;intera struttura: ogni
        campo è effective-dated, e ogni campo porta provenance esplicita con un punteggio
        di confidence.
      </p>
      <ol>
        <li>
          <strong>Identità e annata del veicolo.</strong> VIN, data di costruzione, anno
          modello, generazione, tipo di carrozzeria, segmento, categoria di trazione,
          tipo di propulsione. Configurazione originale come registrata presso il
          costruttore. Emissioni e consumo energetico normalizzati WLTP
          all&apos;omologazione. Prezzo di listino alla prima immatricolazione.
        </li>
        <li>
          <strong>Batteria, separabile dal veicolo.</strong> Un&apos;entità batteria
          distinta con propria identità, generazione di chimica cellulare, capacità
          nominale, stato di salute attuale, coefficienti di curva di salute, garanzia
          residua a fine leasing, numero di cicli fast-charge, profondità media di
          scarica, indicatore di esposizione climatica. Collegata al veicolo con ciclo
          di vita separato.
        </li>
        <li>
          <strong>Sommario di telemetria d&apos;uso.</strong> Aggregazioni periodiche
          dalla telematica dei veicoli connessi. La telematica grezza rimane nel sistema
          sorgente; l&apos;oggetto contiene le feature aggregate che il modello consuma.
        </li>
        <li>
          <strong>Entità di controparte OEM.</strong> Il costruttore è un&apos;entità,
          non una stringa. Campi: identificatore di entità legale, indicatore di
          presenza sul mercato europeo, presenza di braccio di finanza captiva, quota
          di mercato per segmento e paese, rating di credito attuale dove esiste, stima
          di probabilità di sopravvivenza del marchio dalla ricerca di credito interna
          con riferimento di metodologia esplicito.
        </li>
        <li>
          <strong>Contesto fiscale e regolatorio, snapshot più proiezione.</strong>{' '}
          Giurisdizione di immatricolazione, giurisdizione di uso effettivo, regime
          benefit-in-kind, regime di deducibilità, tassa di immatricolazione, tassa di
          circolazione, applicabilità di zone a basse emissioni, stack di sussidi. Gli
          stessi campi sono memorizzati una seconda volta come proiezione alla fine del
          contratto, aggiornata quando una regola giurisdizionale cambia, con
          effective-dating della proiezione stessa.
        </li>
        <li>
          <strong>Canale e intento di remarketing.</strong> Canale di origination,
          canale di remarketing atteso a fine contratto, grado di stato atteso al
          ritorno, geografia di remarketing e un flag per indicare se il canale di
          remarketing pianificato è attualmente operativo per questa combinazione di
          veicolo, giurisdizione e stato.
        </li>
        <li>
          <strong>Allegati tipizzati di strumenti.</strong> Ogni strumento è un oggetto
          di prima classe collegato al contratto: contratto di risk-share, wrap di
          assicurazione di valore residuo, assegnazione di tranche di
          cartolarizzazione, piazzamento diretto in private credit. L&apos;oggetto
          contratto espone un campo derivato di net residual exposure che aggrega sugli
          allegati.
        </li>
        <li>
          <strong>Provenance e confidence per campo.</strong> Ogni campo porta metadati:
          sistema sorgente, timestamp di cattura, lineage di trasformazione e un
          punteggio di confidence su una scala pubblicata. Il modello può ingerire la
          confidence come feature.
        </li>
        <li>
          <strong>Involucro effective-dating.</strong> Nessun campo è sovrascritto in
          loco. Ogni cambiamento crea una nuova riga versionata con timestamp
          effective-from ed effective-to. La divergenza tra ciò che si conosceva
          all&apos;origination e ciò che si conosce oggi è essa stessa un input di
          modello.
        </li>
      </ol>
      <p>
        Questi nove gruppi più le due convenzioni sono il riferimento.
        L&apos;argomentazione è sulla sequenza: prima le quattro dimensioni del 2026,
        poi provenance ed effective-dating sulla struttura esistente, terzo il
        raffinamento delle profondità di campo individuali.
      </p>

      <h2>Lo stesso VIN, residui diversi in 28 giurisdizioni</h2>
      <p>
        L&apos;overlay per giurisdizione è la dimensione che gli operatori mono-paese
        trovano controintuitiva e che gli operatori multi-paese riconoscono
        immediatamente. Lo stesso veicolo, finanziato dallo stesso prestatore, ha una
        traiettoria di valore residuo materialmente differente attraverso le
        giurisdizioni europee, e la varianza è guidata dallo stack fiscale, non dagli
        attributi del veicolo.
      </p>
      <p>
        L&apos;osservatorio industriale canonico su questa dimensione dimostra la
        varianza direttamente. Un veicolo elettrico a batteria compete con un
        equivalente a combustione interna sul costo totale di proprietà a 0,25 EUR per
        chilometro in Norvegia, 0,33 EUR per chilometro in Belgio e 0,33 EUR per
        chilometro in Romania, contro le controparti ICE a 0,45 EUR, 0,40 EUR e 0,28
        EUR rispettivamente. Lo stesso veicolo elettrico è circa l&apos;80 per cento
        costoso da far rotolare quanto la sua controparte ICE in Norvegia, l&apos;83 per
        cento in Belgio e il 18 per cento più costoso in Romania. La tecnologia è la
        stessa. L&apos;architettura fiscale no.
      </p>
      <p>
        L&apos;implicazione sul valore residuo è diretta. Un veicolo elettrico usato in
        Norvegia rientra in un mercato dove il suo sostituto primario è strutturalmente
        penalizzato dal regime fiscale, e il BEV mantiene il valore residuo. Un veicolo
        elettrico usato in Romania rientra in un mercato dove il suo sostituto primario
        è strutturalmente favorito dal regime fiscale, e il BEV trova una domanda più
        superficiale allo stesso prezzo di listino. Lo stesso VIN produce
        un&apos;economia di fine contratto differente a seconda della giurisdizione di
        ritorno.
      </p>
      <p>
        Tre archetipi di cluster semplificano il problema di modellazione. Il cluster
        Developed (13 mercati incluse Norvegia, Belgio, Paesi Bassi, Austria, Svezia,
        Finlandia, Danimarca, Portogallo, Francia, Lussemburgo, Regno Unito, Germania,
        Svizzera) condivide la caratteristica strutturale che il TCO BEV-versus-ICE
        favorisce il BEV. Il cluster Transitioning (Irlanda, Grecia, Italia, Spagna,
        Slovenia, Ungheria) condivide la caratteristica di regimi fiscali convergenti
        verso il cluster Developed su una traiettoria misurabile. Il cluster Emerging
        (Bulgaria, Croazia, Cechia, Estonia, Lettonia, Lituania, Polonia, Romania,
        Serbia, Slovacchia, Ucraina) condivide la caratteristica di stack fiscali
        invariati da circa un decennio.
      </p>
      <p>
        Un operatore paneuropeo ne ha, in linea di principio, ventotto curve di valore
        residuo per generazione di veicolo, una per giurisdizione. L&apos;oggetto dati
        può esprimerlo se e solo se il contesto fiscale è un gruppo di campi di prima
        classe e la proiezione del regime fiscale alla fine del contratto è aggiornata
        quando la politica si muove.
      </p>
      <p>
        Una considerazione separata si applica quando una giurisdizione muove una leva
        fiscale. Il cambiamento di deducibilità belga effettivo da gennaio 2026 ha
        mosso la traiettoria di valore residuo di ogni veicolo non-zero-emission in un
        portafoglio belga. Un operatore con proiezione fiscale effective-dated assorbe
        il cambiamento come evento di dati. Un operatore con trattamento fiscale
        hardcoded lo assorbe come incidente.
      </p>

      <h2>Cosa rappresentano gli oggetti dominanti, e cosa mancano</h2>
      <p>
        Gli oggetti dominanti dell&apos;industria nella finanza auto europea cadono in
        tre linee. La linea captive-vendor ottimizza per un&apos;integrazione stretta
        con il catalogo prodotto e la rete dealer dell&apos;OEM. La linea retail-banking
        ottimizza per logica di credito non garantito adattata alla finanza auto
        garantita. La linea fleet-specialist ottimizza per la gestione del ciclo di
        vita del veicolo e il remarketing. Nessuna è un design coerente per la gestione
        del valore residuo nel 2026.
      </p>
      <p>
        La linea captive-vendor rappresenta tipicamente il veicolo in dettaglio
        profondo, ma tratta il costruttore come implicito e supporta raramente
        operazioni multi-giurisdizione nativamente. Gli allegati di strumenti sono
        memorizzati come documenti o in tabelle di customizzazioni.
      </p>
      <p>
        La linea retail-banking tratta il veicolo come effettivamente secondario, con
        il costruttore come colonna string e la batteria come nessun campo. Il
        trattamento fiscale è configurazione.
      </p>
      <p>
        La linea fleet-specialist tratta il contratto finanziario come adiacente
        piuttosto che centrale. L&apos;OEM è una stringa. I contratti di
        cartolarizzazione e risk-share tipicamente non sono rappresentati affatto.
      </p>
      <p>
        Nessuna delle tre linee è stata progettata contro un enunciato di problema che
        include batteria come asset separabile, OEM come entità di controparte,
        giurisdizione come overlay fiscale di prima classe e strumenti come allegati
        tipizzati simultaneamente. L&apos;oggetto di riferimento proposto in questo
        studio è progettato direttamente contro l&apos;enunciato di problema del 2026.
      </p>

      <h2>Come si attaccano gli strumenti</h2>
      <p>
        Un allegato di prima classe è un oggetto collegato a un contratto tramite
        chiave esterna, con proprio schema, proprio ciclo di vita e propria
        contribuzione ai campi derivati del contratto. Un allegato side-letter è un
        documento memorizzato accanto al contratto, senza schema né contribuzione
        automatica.
      </p>
      <p>
        <strong>I contratti di risk-share</strong> si attaccano come oggetti tipizzati:
        riferimento di entità di controparte, condizioni di trigger, rapporto di
        partecipazione, cap, franchigia, direzione e timing di cash-flow, eventi di
        ciclo di vita, trattamento contabile. La net residual exposure del contratto è
        la gross residual exposure meno la contribuzione attesa di ogni allegato di
        risk-share.
      </p>
      <p>
        <strong>I wrap di assicurazione di valore residuo</strong> si attaccano con lo
        stesso pattern, con campi specifici dell&apos;assicurazione. La convenzione di
        schema è identica.
      </p>
      <p>
        <strong>Le assegnazioni di tranche di cartolarizzazione</strong> si attaccano
        con una struttura diversa perché la relazione è portafoglio-a-tranche piuttosto
        che contratto-a-controparte.
      </p>
      <p>
        Il vantaggio degli allegati tipizzati non è estetico. I side-letters richiedono
        che il modello e il reporting siano reingegnerizzati ogni volta che un nuovo
        strumento viene aggiunto. Gli allegati tipizzati richiedono che il sistema
        comprenda lo schema una sola volta.
      </p>

      <h2>Implicazioni per gli attori</h2>
      <p>
        <strong>Per i prestatori motor-finance.</strong> Auditare l&apos;oggetto dati
        attuale contro le quattro dimensioni del 2026. Sequenziare una migrazione che
        aggiunge le dimensioni mancanti prima di raffinare il modello sullo schema
        esistente.
      </p>
      <p>
        <strong>Per i prestatori captive OEM.</strong> L&apos;estensione di schema è
        più stretta per le captive che per i prestatori non-captive, ma non è zero.
        Le debolezze strutturali sono sull&apos;overlay multi-giurisdizione,
        sull&apos;OEM-come-controparte e sugli allegati di strumenti.
      </p>
      <p>
        <strong>Per la strategia corporate OEM.</strong> Un contratto di risk-share
        tipizzato che una controparte captiva o bancaria mantiene come oggetto di prima
        classe è un contratto che l&apos;OEM dovrebbe essere in posizione di scrivere
        dalla stessa struttura.
      </p>
      <p>
        <strong>Per i vendor di piattaforma.</strong> L&apos;oggetto di riferimento è
        una specifica pubblica. I vendor che esprimono i nove gruppi di campi e le due
        convenzioni come costrutti nativi di piattaforma partecipano a un mercato dove
        la conversazione inizia con &laquo; mostratemi il vostro modello dati &raquo;.
      </p>

      <h2>Segnali che osserviamo</h2>
      <ol>
        <li>
          <strong>Il primo oggetto di riferimento pubblicato da un prestatore tier-1 o
          da un organismo industriale.</strong>
        </li>
        <li>
          <strong>La prima esigenza di disclosure di valore residuo richiesta dal
          regolatore che eccede la capacità attuale dell&apos;oggetto.</strong>
        </li>
        <li>
          <strong>Il primo deal di cartolarizzazione il cui loan tape espone le
          quattro dimensioni del 2026.</strong>
        </li>
        <li>
          <strong>Eventi di uscita OEM che testano l&apos;input di sopravvivenza del
          marchio.</strong>
        </li>
        <li>
          <strong>Movimenti politici per giurisdizione che testano l&apos;overlay
          fiscale.</strong> I cambiamenti fiscali belgi, francesi e olandesi attraverso
          il 2026, 2027 e 2028 sono pre-annunciati.
        </li>
      </ol>

      <h2>Come aiuta Innovia</h2>
      <p>
        Operiamo una piattaforma modulare di asset-finance costruita nativamente per i
        prestatori europei, le entità captive e i grandi operatori di flotta. Apriamo
        ora ingaggi di design-partner per indurire estensioni specifiche.
      </p>
      <p>
        <strong>La batteria come oggetto di asset separabile.</strong> Estendiamo
        l&apos;oggetto veicolo con un&apos;entità batteria con propria identità,
        proprio ciclo di vita e propria curva di stato di salute. Cerchiamo un
        prestatore o una captive con un back-book elettrico a batteria.
      </p>
      <p>
        <strong>OEM come entità di controparte con probabilità di sopravvivenza del
        marchio.</strong> Estendiamo il modello di controparte con OEM come tipo di
        prima classe. Cerchiamo un prestatore con esposizione materiale a OEM
        non-captive.
      </p>
      <p>
        <strong>Overlay fiscale per giurisdizione come costrutto nativo.</strong>{' '}
        Estendiamo il livello BIK, lo schedule di deducibilità e i motori di tassa
        come oggetti effective-dated. Cerchiamo un operatore multi-paese su almeno
        tre mercati europei.
      </p>
      <p>
        <strong>Allegati tipizzati di strumenti con net residual exposure
        derivata.</strong> Estendiamo il modello di allegato con contratti di
        risk-share, wrap di assicurazione di valore residuo e assegnazioni di tranche
        di cartolarizzazione come oggetti tipizzati di prima classe.
      </p>
      <p>
        Il nostro formato di ingaggio Anno Uno è un Innovation Partnership
        pacchettizzato, con condivisione di proprietà intellettuale sull&apos;output
        generalizzato e uso esclusivo della configurazione propria del design-partner.
      </p>

      <h2>Fonti e nota metodologica</h2>
      <p>
        Le affermazioni empiriche in questo studio sono tratte principalmente
        dall&apos;Ayvens European Mobility Guide 2026 per dati fiscali e di costo
        totale di proprietà per giurisdizione, dai dati di immatricolazione
        dell&apos;Associazione dei Costruttori Europei di Automobili fino ad aprile
        2026 per la traiettoria del mix di powertrain e dal giornalismo finanziario
        primario per la compressione del valore residuo nel Regno Unito. Ogni fonte è
        trattata come single-source directional salvo corroborazione esplicita.
      </p>
    </div>
  );
}
