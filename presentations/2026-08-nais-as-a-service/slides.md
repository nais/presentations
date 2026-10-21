---
layout: cover
---

<h1 class="text-5xl font-black">Nais as a Service</h1>
<p class="subtitle text-xl mt-4">Gir fart og flyt på utviklingen av Norge</p>
<p class="text-sm mt-6 opacity-70">Hans Kristian Flaatten · Nais-teamet i Nav</p>

<!--
Hei! 20–25 minutter, ingen demo, bare animasjoner. Målgruppe: tech leads og arkitekter, og de som bestemmer i etatene.
-->

---
layout: none
transition: fade
---

<ClipSlide />

<!--
La klippet gå. Ikke snakk over det.
-->

---
layout: default
clicks: 2
transition: fade
---

::header::
<h1 class="text-3xl font-bold">Problemet</h1>
<p class="subtitle">Hver etat bygger sin egen plattform</p>

::default::
<ProblemStacks />

<!--
Klikk 1: kostnaden. Klikk 2: én felles plattform.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hva er Nais</h1>
<p class="subtitle">Plattform, team og fellesskap</p>

::default::
<HubSpokes center="Nais" :spokes="[
  { icon: 'i-carbon-cloud', title: 'Plattform', text: 'Kubernetes, datatjenester, innlogging, observability og Console' },
  { icon: 'i-carbon-user-multiple', title: 'Team', text: '15 personer som drifter, utvikler og har vakt døgnet rundt' },
  { icon: 'i-carbon-group', title: 'Fellesskap', text: 'Slack, dokumentasjon, champions i teamene og Naisdag' },
]" />

<!--
Tre deler. Plattformen alene er ikke nok – det er teamet og fellesskapet som gjør at det virker.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Tre etater utenfor Nav kjører 528 apper</h1>
<p class="subtitle">Og Nav deployer rundt 21 500 ganger i uka</p>

::default::
<div class="flex flex-col items-center gap-4 w-full">
  <div class="flex justify-center gap-10">
    <CountUp number="4" label="Etater" />
    <CountUp number="5212" label="Apper, alle etater" :delay="0.08" />
    <CountUp number="21500" prefix="≈" label="Deployer per uke (Nav)" :delay="0.16" />
    <CountUp number="154" label="Team som deployer (Nav)" :delay="0.24" />
  </div>
  <div class="grid grid-cols-2 gap-8 w-full items-end">
    <TenantBars />
    <DeployChart />
  </div>
  <Placeholder class="anim-item">logoer for Nav, SSB, Landbruksdirektoratet og Arbeidstilsynet</Placeholder>
</div>

<!--
Apper per etat: Grafana 21. oktober 2026 (72 + 164 + 292 = 528 utenfor Nav).
Deployer og team: Mimir, bare Nav, 21. oktober 2026. ≈21 500 per uke i alle miljøer, ≈9 000 i prod. 154 team har deployet siste 28 dager.
Andre tall fra Mimir hvis noen spør: ≈11 000 pods, 229 noder, ≈120 mill. forespørsler og ≈250 mill. Kafka-meldinger per dag.
PLASSHOLDER: logoer.
-->

---
layout: pillars
clicks: 5
---

::header::
<h1 class="text-3xl font-bold">Hva Nais har betydd for Nav</h1>

::default::
<BenefitStory :items="[
  { icon: 'i-carbon-building', title: 'Fundament', description: 'Fundament for autonome team' },
  { icon: 'i-carbon-rocket', title: 'Fart og flyt', description: 'Nais gir fart og flyt i Nav' },
  { icon: 'i-carbon-user-speaker', title: 'Utviklere', description: 'Fornøyde utviklere' },
  { icon: 'i-carbon-group', title: 'Ansatte', description: 'Fornøyde ansatte' },
  { icon: 'i-carbon-face-satisfied', title: 'Brukere', description: 'Fornøyde brukere' },
]" />

<!--
Ett klikk per steg, konfetti til slutt.
-->

---
layout: default
clicks: 4
---

::default::
<DeployFlow />

<!--
Ett klikk per steg: bygg, deploy, pods, live.
-->

---
layout: default
clicks: 6
---

::header::
<h1 class="text-3xl font-bold">Ett manifest, ferdig oppsett</h1>
<p class="subtitle">Ingen Terraform, ingen infrastrukturkunnskap</p>

::default::
<ManifestDeep />

<!--
Klikk gjennom blokkene i nais.yaml. Feltnavn fra Application-eksempelet i nais/doc.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Hva skjer på app-siden</h1>
<p class="subtitle">Naiserator gjør manifestet om til ressurser</p>

::default::
<AppFanout />

<!--
Klikk 1: Kubernetes-ressursene Naiserator lager. Klikk 2: operatorene som tar over (Config Connector, aivenator, azurerator, digdirator, jwker).
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Console: sårbarheter</h1>
<p class="subtitle">Teamet ser status for alle workloads</p>

::default::
<ConsoleVulns />

<!--
Illustrasjon av Console. Klikk 1: alle bygg får SBOM. Klikk 2: en ny CVE dukker opp. Klikk 3: teamet oppdaterer avhengigheten og deployer. I Console ser teamet også apper og status, deployer, kostnad per team og app, secrets, Unleash og ressursbruk.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Console: data og kostnad</h1>
<p class="subtitle">Hva teamet har, og hva det koster</p>

::default::
<ConsoleData />

<!--
Illustrasjon av Console. Klikk 1: datatjenestene appene bruker. Klikk 2: kostnad per app.
-->

---
layout: default
clicks: 6
---

::header::
<h1 class="text-3xl font-bold">En dag som utvikler</h1>

::default::
<JourneyPath :items="[
  { icon: 'i-carbon-cafe', title: '08:30 Console', description: 'Kostnad og sårbarheter for teamet på ett sted' },
  { icon: 'i-carbon-bot', title: '09:00 Koder med KI', description: 'Agenten spør plattformen via MCP' },
  { icon: 'i-carbon-pull-request', title: '11:00 Pull request', description: 'Review, tester og skanning i pipelinen' },
  { icon: 'i-carbon-rocket', title: '11:15 Merge', description: 'I prod på minutter, uten å bestille noe' },
  { icon: 'i-carbon-data-base', title: '13:00 Ny database', description: 'Postgres med noen linjer i nais.yaml' },
  { icon: 'i-carbon-home', title: '16:00 Hjem i tide', description: 'Logger, metrikker og traces er på plass' },
]" />

<!--
Fortell som en historie. Poenget: ingen billetter, ingen venting.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Hva dere slipper å drive</h1>

::default::
<StackBuild :layers="[
  { name: 'Console og nais CLI', parts: 'Kostnad per team og app, sårbarheter, MCP for kodeagenter' },
  { name: 'Utrulling og forsyningskjede', parts: 'GitHub Actions, SBOM, signering' },
  { name: 'Innlogging', parts: 'Texas, TokenX, ID-porten, Maskinporten, Entra ID' },
  { name: 'Datatjenester', parts: 'Postgres, Valkey, OpenSearch, Kafka, Unleash' },
  { name: 'Observability', parts: 'Grafana, Mimir, Loki, Tempo' },
  { name: 'Kubernetes og nettverk', parts: 'GKE, nettverkspolicyer, ingress' },
  { name: 'Google Cloud', parts: 'Cloud SQL, buckets, BigQuery' },
]" />

<!--
Klikk 1: appen lander. Klikk 2: alt under dimmes – det er vår jobb.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Hvem gjør hva</h1>
<p class="subtitle">Delt ansvar</p>

::default::
<Responsibility :sides="[
  { title: 'Etaten', icon: 'i-carbon-building', items: ['Koden og produktet', 'Dataene', 'Egne team og prioriteringer'] },
  { title: 'Nais', icon: 'i-carbon-cloud', items: ['Drift og oppgraderinger', 'Sikkerhet i plattformen', 'Vakt døgnet rundt'] },
]" />

<!--
Klikk 1: etatens side. Klikk 2: Nais sin side.
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Kl. 03:00</h1>
<p class="subtitle">Vakt døgnet rundt er inkludert i NaaS</p>

::default::
<div class="flex flex-col gap-6 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-notification', label: 'Varsel', sub: 'Noe feiler kl. 03:00' },
    { icon: 'i-carbon-phone', label: 'Nais-vakt', sub: 'Vakthavende i Nais-teamet varsles' },
    { icon: 'i-carbon-cloud', label: 'Google', sub: 'Googles 24/7-support ved behov' },
    { icon: 'i-carbon-checkmark', label: 'Løst', sub: 'Dere sov gjennom det' },
  ]" />
  <div class="grid grid-cols-2 gap-6 items-center max-w-4xl mx-auto w-full">
    <Placeholder class="anim-item">hendelsesforløp fra en ekte natt: hva skjedde, hvem ble varslet, hvor lang tid til løst</Placeholder>
    <div class="anim-item text-center">
      <div class="text-5xl font-bold text-nais-accent" style="font-family: Poppins">99,88 %</div>
      <p class="mt-1">ingress-svar uten 5xx i Nav, siste 30 dager</p>
      <p class="opacity-70">Målt, ikke SLA</p>
    </div>
  </div>
</div>

<!--
Nais-teamet har vakt døgnet rundt, sammen med Googles 24/7-support. Det er inkludert i NaaS.
PLASSHOLDER: hendelsesforløp (hva skjedde, varsling, tid til løst).
99,88 % er målt i Mimir, Nav, siste 30 dager. Ingen formell SLA.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fra feil til fiks</h1>
<p class="subtitle">Logger, metrikker og traces uten oppsett</p>

::default::
<ObsFlow />

<!--
Kilde: docs.nais.io, «How Nais APM works». Logger fra stdout går via fluentbit til Loki. Traces og metrikker går via OpenTelemetry collector til Tempo og Mimir. Alt vises i Grafana. Automatisk instrumentering skrus på med observability.autoInstrumentation i nais.yaml.
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Jakten på feilen</h1>
<p class="subtitle">Signalene henger sammen, rett ut av boksen</p>

::default::
<BugHunt />

<!--
Illustrasjon, ikke ekte tall. Klikk 1: varsel på feilrate. Klikk 2: tracen viser at databasekallet feiler. Klikk 3: loggene for samme trace. Klikk 4: fiksen er ute, feilraten faller.
-->
---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Sikkerhet i forsyningskjeden</h1>

::default::
<FlowChain :nodes="[
  { icon: 'i-carbon-build-tool', label: 'Bygg', sub: 'All kode, også fra KI-agenter' },
  { icon: 'i-carbon-list-boxes', label: 'SBOM', sub: 'Lages automatisk (CycloneDX)' },
  { icon: 'i-carbon-certificate', label: 'Signering', sub: 'Signert og attestert' },
  { icon: 'i-carbon-scan', label: 'Sårbarheter', sub: 'Følges opp per workload', stat: '5 608 workloads skannes' },
  { icon: 'i-carbon-dashboard', label: 'Console', sub: 'Teamet ser status' },
]" />

<!--
Kode fra KI-agenter går gjennom akkurat samme løp. Signering med Sigstore Cosign, sårbarheter via Dependency-Track. 5 608 workloads fra Mimir 21. oktober 2026.
-->

---
layout: default
clicks: 1
---

::header::
<h1 class="text-3xl font-bold">Hva kjører hvor</h1>
<p class="subtitle">Vi er ærlige om avhengighetene</p>

::default::
<HostingMap />
<p class="anim-item text-center text-sm opacity-70 mt-3">NaaS passer ikke for skjermingsverdig informasjon eller systemer som må kjøre on-prem.</p>

<!--
Ikke lov bort suverenitet vi ikke har. Det vi kan si: Nais har flyttet én gang, og kan flytte igjen.
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Deres data, deres exit</h1>

::default::
<TenantMap :tenants="['Nav', 'SSB', 'Landbruksdirektoratet', 'Arbeidstilsynet']" :detach="3" exit-text="Exit-planen er dokumentert. Den har aldri vært brukt." />

<!--
Hver etat eier sin egen GCP-organisasjon. Nav eier betalingskontoen. Klikk 2: en etat kobler seg fra, og alt blir med.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hvem bestemmer</h1>
<p class="subtitle">Nais-teamet bestemmer veikartet, etatene gir innspill på Naisdag</p>

::default::
<GovernanceLoop />

<!--
Ærlig: vi sier nei oftere enn ja, fordi vi vil gjøre det skikkelig.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Bedre sammen</h1>
<p class="subtitle">Det én etat trenger, får alle</p>

::default::
<ShareLoop :agencies="['Nav', 'SSB', 'Landbruksdirektoratet', 'Arbeidstilsynet']" caption="Forbedringer kommer alle etatene til gode" />

<!--
Klikk 1: et behov fra én etat. Klikk 2: alle får forbedringen. PLASSHOLDER: et konkret eksempel på noe én etat ba om som alle fikk.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hva koster det</h1>
<p class="subtitle">Selvkost, uten påslag</p>

::default::
<div class="flex flex-col gap-5 w-full">
  <Meter :parts="[
    { label: 'Management-cluster', value: 20000 },
    { label: 'App-cluster, dev', value: 10000 },
    { label: 'App-cluster, prod', value: 10000 },
  ]" />
  <p class="anim-item text-center text-sm opacity-80">I tillegg kommer forbruket i Google Cloud og Aiven, også til selvkost. Kostnaden per team og app ser dere i Console.</p>
</div>

<!--
Management 20 000 + to app-clustere à 10 000 = 40 000 kr/mnd før forbruk.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Bevis</h1>

::default::
<ProofWall
  :tiles="[
    { label: 'Deployfrekvens (DORA)', need: 'DORA-tall for Nav' },
    { label: 'Ledetid for endringer (DORA)', need: 'DORA-tall for Nav' },
    { label: 'Fra avtale til første app i prod', need: 'onboarding-tid' },
  ]"
  :quote="{ need: 'sitat fra en etat om NaaS' }"
/>

<!--
PLASSHOLDER: DORA-tall, sitat fra etat, onboarding-tid.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Nais-teamet</h1>
<p class="subtitle">15 personer, 4 etater</p>

::default::
<TeamWall />

<!--
Dette er hele teamet. Femten personer drifter plattformen for fire etater.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Støtte og fellesskap</h1>
<p class="subtitle">Dere er ikke alene</p>

::default::
<HubSpokes center="Hjelp" center-icon="i-carbon-help" :start="-90" :spokes="[
  { icon: 'i-carbon-logo-slack', title: 'Slack', text: 'Direkte kontakt med Nais-teamet' },
  { icon: 'i-carbon-document', title: 'docs.nais.io', text: 'Dokumentasjon og veiledninger' },
  { icon: 'i-carbon-badge', title: 'Champions', text: 'Champions i teamene' },
  { icon: 'i-carbon-education', title: 'Workshops', text: 'Praktiske økter med Nais-teamet' },
  { icon: 'i-carbon-group', title: 'Naisdag', text: 'Etatene møtes og gir innspill' },
]" />

<!--
Fra den gamle opplæringssliden: workshops, champions, Slack og dokumentasjon.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hvem kan bli med</h1>
<p class="subtitle">Statlige virksomheter i egenregi</p>

::default::
<div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Departementer</div>
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Direktorater</div>
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Etater og tilsyn</div>
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Forvaltningsbedrifter</div>
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Forvaltningsorganer med særskilte fullmakter</div>
  <div class="anim-item who-chip"><span class="i-carbon-checkmark-filled" /> Statlige ombud</div>
</div>

<!--
Egenregi i staten: kommuner, statsforetak og private kan ikke bruke NaaS (si det muntlig hvis noen spør).
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Veien inn</h1>

::default::
<JourneyPath :burst="false" :items="[
  { icon: 'i-carbon-presentation-file', title: 'Demo', description: 'Varighet: PLASSHOLDER', placeholder: true },
  { icon: 'i-carbon-chemistry', title: 'Pilot', description: 'Varighet: PLASSHOLDER', placeholder: true },
  { icon: 'i-carbon-migrate', title: 'Migrering', description: 'Varighet: PLASSHOLDER', placeholder: true },
  { icon: 'i-carbon-checkmark-outline', title: 'Drift', description: 'Dere utvikler, vi drifter' },
]" />

<!--
PLASSHOLDER: antall uker for demo, pilot og migrering.
-->

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold">Dere kan gå når som helst, med alt</h1>
<p class="subtitle">Vi tror dere blir</p>

::default::
<div class="flex items-center justify-center gap-10 w-full">
  <Placeholder class="anim-item w-56 h-44">QR-kode til booking av demo eller pilot</Placeholder>
  <div class="anim-item text-left">
    <p class="text-2xl font-bold" style="font-family: Poppins">Book en demo eller start en pilot</p>
    <Placeholder class="mt-4">kontaktperson: navn, e-post og telefon</Placeholder>
  </div>
</div>

<!--
Koble tilbake til exit-sliden: dere eier alt. PLASSHOLDER: QR-kode og kontaktperson.
-->
