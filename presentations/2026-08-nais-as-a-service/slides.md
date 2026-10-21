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
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hvem dette er for</h1>
<p class="subtitle">NaaS tilbys innenfor egenregi i staten</p>

::default::
<SplitCompare :columns="[
  { title: 'Kan bruke NaaS', icon: 'i-carbon-checkmark-filled', tone: 'good', items: ['Departementer, direktorater, etater og tilsyn', 'Forvaltningsbedrifter og forvaltningsorganer med særskilte fullmakter', 'Statlige ombud'] },
  { title: 'Kan ikke bruke NaaS', icon: 'i-carbon-close-filled', tone: 'bad', items: ['Kommuner', 'Statsforetak', 'Private foretak'] },
  { title: 'Nais passer ikke for', icon: 'i-carbon-warning-alt', tone: '', items: ['Systemer med skjermingsverdig informasjon', 'Systemer som må kjøre on-prem'] },
]" />

<!--
Si det tidlig: egenregi betyr at bare statlige virksomheter kan bruke NaaS. Og vær ærlig om hva Nais ikke er.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Tre etater utenfor Nav kjører 528 apper</h1>
<p class="subtitle">Fire etater på samme plattform</p>

::default::
<div class="flex flex-col items-center gap-4 w-full">
  <div class="flex justify-center gap-12">
    <CountUp number="4" label="Etater" />
    <CountUp number="5212" label="Applikasjoner" :delay="0.08" />
    <CountUp number="1270" label="Databaser (Cloud SQL)" :delay="0.16" />
    <CountUp number="1931" label="Kafka-topics" :delay="0.24" />
  </div>
  <TenantBars />
  <Placeholder class="anim-item">logoer for Nav, SSB, Landbruksdirektoratet og Arbeidstilsynet</Placeholder>
</div>

<!--
Kilde: Grafana, 21. oktober 2026. 72 + 164 + 292 = 528 apper utenfor Nav.
PLASSHOLDER: logoer for de fire etatene.
-->

---
layout: none
---

<ClipSlide />

<!--
La klippet gå. Ikke snakk over det.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Skala i Nav</h1>
<p class="subtitle">Målt i Mimir 21. oktober 2026</p>

::default::
<div class="flex flex-col items-center gap-4 w-full">
  <div class="flex justify-center gap-10">
    <CountUp number="21500" prefix="≈" label="Deployer per uke, alle miljøer" />
    <CountUp number="9000" prefix="≈" label="Deployer per uke i prod" :delay="0.08" />
    <CountUp number="154" label="Team deployet siste 28 dager" :delay="0.16" />
    <CountUp number="11000" prefix="≈" label="Pods kjører nå" :delay="0.24" />
  </div>
  <DeployChart />
  <p class="anim-item text-sm opacity-70">≈ 120 millioner forespørsler per dag · ≈ 250 millioner Kafka-meldinger per dag · 229 noder</p>
</div>

<!--
Alle tall fra Mimir, bare Nav, 21. oktober 2026. "Alle miljøer" inkluderer dev. Prod alene er rundt 9 000 i uka.
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
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">KI i utviklingen</h1>
<p class="subtitle">Agenten får fart, plattformen holder rekkverket</p>

::default::
<FlowChain :nodes="[
  { icon: 'i-carbon-bot', label: 'KI-agent', sub: 'GitHub Copilot, Claude og andre' },
  { icon: 'i-carbon-terminal', label: 'MCP og nais CLI', sub: 'Leser fra Nais med dine tilganger' },
  { icon: 'i-carbon-security', label: 'Rekkverk', sub: 'Policyer, review og skanning' },
  { icon: 'i-carbon-checkmark', label: 'Prod', sub: 'Samme vei som all annen kode' },
]" />

<!--
MCP-serveren ligger i nais CLI. Agenten får lese, ikke gjøre hva den vil.
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Hva dere slipper å drive</h1>

::default::
<StackBuild :layers="[
  { name: 'Console', parts: 'Kostnad per team og app, sårbarheter, status' },
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
---

::header::
<h1 class="text-3xl font-bold">Kl. 03:00</h1>
<p class="subtitle">Når noe går galt</p>

::default::
<div class="grid grid-cols-2 gap-8 items-center max-w-4xl mx-auto w-full">
  <Placeholder class="anim-item">hendelsesforløp fra en ekte natt: hva skjedde, hvem ble varslet, hvor lang tid til løst</Placeholder>
  <div class="anim-item text-center">
    <div class="text-6xl font-bold text-nais-accent" style="font-family: Poppins">99,88 %</div>
    <p class="mt-2">av forespørslene til ingress i Nav fikk svar uten 5xx-feil siste 30 dager</p>
    <p class="text-sm opacity-70 mt-1">Målt, ikke SLA</p>
  </div>
</div>

<!--
PLASSHOLDER: hendelseshistorie (forløp, varsling, tid til løst).
99,88 % er målt i Mimir, Nav, siste 30 dager. Ikke en garanti – vi har ingen formell SLA.
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Sikkerhet i forsyningskjeden</h1>

::default::
<FlowChain :nodes="[
  { icon: 'i-carbon-build-tool', label: 'Bygg', sub: 'GitHub Actions' },
  { icon: 'i-carbon-list-boxes', label: 'SBOM', sub: 'Lages automatisk (CycloneDX)' },
  { icon: 'i-carbon-certificate', label: 'Signering', sub: 'Signert og attestert, uten nøkler å passe på' },
  { icon: 'i-carbon-scan', label: 'Sårbarheter', sub: 'Følges opp per workload', stat: '5 608 workloads skannes' },
  { icon: 'i-carbon-dashboard', label: 'Console', sub: 'Teamet ser status og tiltak' },
]" />

<!--
Signering med Sigstore Cosign, sårbarheter via Dependency-Track. 5 608 workloads fra Mimir 21. oktober 2026.
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hva kjører hvor</h1>
<p class="subtitle">Vi er ærlige om avhengighetene</p>

::default::
<div class="flex flex-col gap-5 w-full">
  <SplitCompare :columns="[
    { title: 'Google Cloud', icon: 'i-carbon-cloud', items: ['GKE (Kubernetes)', 'Cloud SQL', 'Buckets', 'BigQuery'] },
    { title: 'Aiven', icon: 'i-carbon-data-base', items: ['Kafka', 'OpenSearch', 'Valkey'] },
    { title: 'Nais drifter selv', icon: 'i-carbon-chart-line', items: ['Grafana', 'Mimir', 'Loki', 'Tempo'] },
  ]" />
  <p class="anim-item text-center">Nais startet on-prem i 2016 og flyttet til Google Cloud. Plattformen har flyttet før.</p>
</div>

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

::default::
<div class="card-row">
  <IconCard icon="i-carbon-map" title="Nais-teamet" description="Bestemmer veikartet" />
  <IconCard icon="i-carbon-group" title="Etatsforum" description="Etatene møtes jevnlig og gir innspill" />
  <IconCard icon="i-carbon-growth" title="1–2 nye etater per år" description="Så mange har vi kapasitet til" />
</div>

<!--
Ærlig: vi sier nei oftere enn ja, fordi vi vil gjøre det skikkelig.
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
<div class="grid grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
  <Placeholder class="anim-item">DORA-tall for Nav: deployfrekvens, ledetid, feilrate, tid til gjenoppretting</Placeholder>
  <Placeholder class="anim-item">sitat fra en etat om NaaS (navn, rolle, etat)</Placeholder>
  <Placeholder class="anim-item">onboarding-tid: fra avtale til første app i prod</Placeholder>
</div>

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
