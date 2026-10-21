---
layout: cover
---

<h1 class="text-5xl font-black">Nais as a Service</h1>
<p class="subtitle text-xl mt-4">Gir fart og flyt på utviklingen av Norge</p>
<p class="text-sm mt-6 opacity-70">Hans Kristian Flaatten · Nais-teamet i Nav</p>

<!--
Overgang: «Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav.»

- Målgruppe: tech leads, arkitekter og de som bestemmer i etatene
- Tesen: Plattformen Nav bygde for seg selv er nå en tjeneste for staten
- Ingen demo i dag, bare animasjoner
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Problemet</h1>
<p class="subtitle">Hver etat bygger sin egen plattform</p>

::default::
<ProblemStacks />

<!--
Overgang: «Og den felles plattformen er ikke en idé. Den har vokst siden 2016. Se.»

- Hver etat som bygger egen plattform, trenger knapp og dyr kompetanse
- Samme arbeid gjøres fire ganger, og sikkerheten blir ujevn
- Klikk: de fire stablene smelter sammen til én felles plattform
-->

---
layout: none
transition: fade
---

<ClipSlide />

<!--
Overgang: «(Ingen overgang. La klippet gå, ikke snakk over det.)»

- 4 etater, 5 212 apper (Grafana, 21. oktober 2026)
- ≈21 500 deployer per uke er Nav, alle miljøer (Mimir)
- Fargene viser de mindre etatene spredt i bikuben
-->

---
layout: default
transition: fade
---

::header::
<h1 class="text-3xl font-bold">Hva er Nais</h1>
<p class="subtitle">En plattform laget av Nav for å gi fart og flyt til utviklerne av det offentlige Norge</p>

::default::
<NaisPillars />
<p class="anim-item text-center mt-8">Vi mener at det skal være lett å gjøre rett.</p>

<!--
Overgang: «Seks ting Nais skal gi dere. Jeg kommer tilbake til dem underveis. Først: brukes dette faktisk?»

- Teksten og søylene er hentet fra nais.io
- Vi mener at det skal være lett å gjøre rett
- Hjørnemerket på senere slides viser hvilken søyle de handler om
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
  <YearChart metric="deploys" />
  <div class="anim-item tenant-logos">
    <img src="./assets/logos/nav.svg" alt="Nav" class="h-7" />
    <img src="./assets/logos/ssb.svg" alt="SSB" class="h-7" />
    <img src="./assets/logos/ldir.svg" alt="Landbruksdirektoratet" class="h-8" />
    <img src="./assets/logos/atil.svg" alt="Arbeidstilsynet" class="h-7" />
  </div>
</div>

<!--
Overgang: «Grunnen til at tallene er så store, kommer på neste slides.»

- Apper per etat: Grafana 21. oktober 2026 (72 + 164 + 292 = 528 utenfor Nav)
- ≈21 500 deployer per uke i Nav, alle miljøer. ≈9 000 i prod (Mimir)
- 154 team har deployet siste 28 dager
- Reserve: ukegrafen fra Mimir (11 uker, aug.–okt. 2026) ligger i DeployChart hvis noen spør
- PLASSHOLDER: årstall for veksten fra Nais-teamet
-->

---
layout: default
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
<div class="grid grid-cols-2 gap-4 max-w-3xl mx-auto w-full mt-2">
  <Placeholder class="anim-item">DORA for Nav: deployfrekvens</Placeholder>
  <Placeholder class="anim-item">DORA for Nav: ledetid for endringer</Placeholder>
</div>

<!--
Overgang: «Grunnen til at 154 team deployer 21 500 ganger i uka, er at dette er alt de må skrive.»

- Ett klikk per steg, konfetti til slutt
- PLASSHOLDER: DORA-tall for Nav (deployfrekvens og ledetid)
-->

---
layout: default
clicks: 7
---

::header::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<h1 class="text-3xl font-bold">Ett manifest, ferdig oppsett</h1>
<p class="subtitle">Ingen Terraform, ingen infrastrukturkunnskap</p>

::default::
<ManifestDeep />

<!--
Overgang: «Så skal vi se hva som skjer når de trykker på knappen.»

- Feltnavn fra Application-eksempelet i nais/doc
- Hvert klikk skriver én blokk, og ressursen dukker opp rundt appen
- Ingen Terraform, ingen infrastrukturkunnskap
-->

---
layout: default
clicks: 4
---

::default::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<DeployFlow />

<!--
Overgang: «Men hva skjer egentlig på plattformsiden?»

- Bygg i GitHub Actions, deploy med Nais, pods i Kubernetes, live
- Ett klikk per steg
-->

---
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Hva skjer på app-siden</h1>
<p class="subtitle">Naiserator gjør manifestet om til ressurser</p>

::default::
<AppFanout />

<!--
Overgang: «Det var én app. Zoom ut, og her er hele hylla.»

- Naiserator lager Kubernetes-ressursene: Deployment, Service, Ingress, NetworkPolicy og flere
- Operatorer tar over resten: Config Connector, aivenator, azurerator, digdirator, jwker
-->

---
layout: default
clicks: 8
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Verktøykassa</h1>
<p class="subtitle">Alt rundt appen, klart til bruk</p>

::default::
<Toolbox mode="open" />

<!--
Overgang: «Jeg åpner to skuffer. Først: hva skjer når noe feiler?»

- Én skuff per klikk, til slutt alt på en gang
- Gruppert etter inventaret over verktøykassa. Utfasede ting er utelatt
- MCP for kodeagenter ligger i Verktøy-skuffen
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-3xl font-bold">Fra feil til fiks</h1>
<p class="subtitle">Logger, metrikker og traces uten oppsett</p>

::default::
<ObsFlow />

<!--
Overgang: «Så la oss jakte på en feil.»

- Kilde: docs.nais.io, «How Nais APM works»
- Logger: stdout via fluentbit til Loki. Traces og metrikker: OTel collector til Tempo og Mimir
- Alt vises i Grafana. Skrus på med observability.autoInstrumentation
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-3xl font-bold">Jakten på feilen</h1>
<p class="subtitle">Signalene henger sammen, rett ut av boksen</p>

::default::
<BugHunt />

<!--
Overgang: «Og alt dette ser teamet også i Console.»

- Illustrasjon, ikke ekte tall
- Varsel, trace, logger for samme trace, fiks
- Signalene henger sammen uten oppsett
-->

---
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Console: teamets oversikt</h1>

::default::
<ConsoleMock story="team" />

<!--
Overgang: «Og hver app kan teamet se for seg.»

- Illustrasjon bygd etter Console sin struktur, ingen ekte data
- Team health, inventar og siste aktivitet
- Klikk: kostnad per tjeneste
-->

---
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Console: én app</h1>

::default::
<ConsoleMock story="app" />

<!--
Overgang: «Og for de som liker terminalen:»

- Klikk: teamet åpner én app
- Helse, siste deploy, persistens og kostnad for akkurat den appen
-->

---
layout: default
clicks: 5
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Og fra terminalen</h1>

::default::
<CliDemo />

<!--
Overgang: «Det var utviklerens side. Nå snur vi bildet: alt som måtte stå for at dagen ble kjedelig.»

- Kommandoene finnes i nais CLI (sjekket i nais/cli). Utdata er illustrasjon
- nais login, app status, app logs, postgres proxy, vulns summary
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Hva dere slipper å drive</h1>
<p class="subtitle">Dere bruker verktøyene. Vi drifter alt under.</p>

::default::
<Toolbox mode="ops" />

<!--
Overgang: «Og når noe likevel skjer om natta?»

- Samme verktøykasse, dempet
- Klikk 1: driften Nais tar. Klikk 2: streken mellom etatens del og Nais sin del
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Kl. 03:00</h1>
<p class="subtitle">Samme varsel, samme Grafana. Forskjellen er hvem sin telefon som ringer.</p>

::default::
<div class="flex flex-col gap-6 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-notification', label: 'Varsel', sub: 'Noe feiler kl. 03:00' },
    { icon: 'i-carbon-phone', label: 'Nais-vakt', sub: 'Vakthavende i Nais-teamet varsles' },
    { icon: 'i-carbon-cloud', label: 'Google', sub: 'Googles 24/7-support ved behov' },
    { icon: 'i-carbon-checkmark', label: 'Løst', sub: 'Dere sov gjennom det' },
  ]" />
  <div class="grid grid-cols-2 gap-6 items-center max-w-4xl mx-auto w-full">
    <Placeholder class="anim-item">en ekte natt i fire steg: varsel, trace, logger, fiks (hva skjedde og hvor lang tid det tok)</Placeholder>
    <div class="anim-item text-center">
      <div class="text-5xl font-bold text-nais-accent" style="font-family: Poppins">99,88 %</div>
      <p class="mt-1">ingress-svar uten 5xx i Nav, siste 30 dager</p>
      <p class="opacity-70">Målt, ikke SLA</p>
    </div>
  </div>
</div>

<!--
Overgang: «Hvem var våkne? Disse femten.»

- Vakt døgnet rundt er inkludert i NaaS: Nais-teamet, med Googles 24/7-support ved behov
- 99,88 % er målt i Mimir, Nav, siste 30 dager. Ingen formell SLA
- PLASSHOLDER: en ekte natt i fire steg
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
Overgang: «Teamet bygger også sikkerheten inn i hver leveranse.»

- Hele teamet: femten personer for fire etater
- Navn fra GitHub-teamet nais/nais
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
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
Overgang: «Og teamet ser resultatet i Console.»

- SBOM og signering skjer automatisk i bygget
- Kode fra KI-agenter går gjennom akkurat samme løp
- 5 608 workloads skannes (Mimir, 21. oktober 2026)
-->

---
layout: default
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
<h1 class="text-2xl font-bold">Console: sårbarheter</h1>

::default::
<ConsoleMock story="vulns" />

<!--
Overgang: «Så langt har jeg snakket til utviklerne. Nå til dere som skal signere.»

- Illustrasjon, ingen ekte data eller CVE-er
- Klikk 1: appen har en kjent utnyttet sårbarhet, teamet åpner Vulnerabilities
- Klikk 2: avhengigheten er oppdatert og deployet, tallet går til null
-->

---
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Hva kjører hvor</h1>
<p class="subtitle">Vi er ærlige om avhengighetene</p>

::default::
<HostingMap />

<!--
Overgang: «Og hvis dere vil flytte, er det deres valg.»

- Google Cloud: GKE, Cloud SQL, buckets, BigQuery. Aiven: Kafka, OpenSearch, Valkey
- Nais drifter observability-stakken selv
- Nais startet on-prem i 2016 og flyttet til Google Cloud
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Deres data, deres exit</h1>

::default::
<TenantMap :tenants="['Nav', 'SSB', 'Landbruksdirektoratet', 'Arbeidstilsynet']" :detach="3" exit-text="Exit-planen er dokumentert. Den har aldri vært brukt." />

<!--
Overgang: «Hvem bestemmer så hva som skjer med plattformen?»

- Hver etat eier sin egen GCP-organisasjon. Nav eier betalingskontoen
- Klikk 2: en etat kobler seg fra, og alt blir med
- Exit-planen er dokumentert, men aldri brukt
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
Overgang: «Når vi sier ja til én etat, sier vi ja til alle.»

- Nais-teamet bestemmer veikartet
- Etatene gir innspill på Naisdag
- 1–2 nye etater per år
-->

---
layout: default
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Bedre sammen</h1>
<p class="subtitle">Det én etat trenger, får alle</p>

::default::
<ShareLoop :agencies="['Nav', 'SSB', 'Landbruksdirektoratet', 'Arbeidstilsynet']" caption="Forbedringer kommer alle etatene til gode" />
<Placeholder class="anim-item max-w-3xl mx-auto mt-12">sitat fra en etat om NaaS (navn, rolle, etat)</Placeholder>

<!--
Overgang: «Og dere står ikke alene.»

- Forbedringer for én etat kommer alle til gode
- PLASSHOLDER: konkret eksempel og sitat fra en etat
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
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
Overgang: «Alt dette er inkludert i én pris. Og den er selvkost.»

- Slack, docs.nais.io, champions i teamene, workshops og Naisdag
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
Overgang: «Hvem kan så bli med?»

- Management 20 000 + to app-clustere à 10 000 = 40 000 kr/mnd før forbruk
- Forbruk i Google Cloud og Aiven kommer i tillegg, til selvkost
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
<p class="anim-item text-center mt-6 opacity-80">NaaS passer ikke for skjermingsverdig informasjon eller systemer som må kjøre on-prem.</p>

<!--
Overgang: «Slik kommer dere i gang.»

- Egenregi i staten: kommuner, statsforetak og private kan ikke bruke NaaS
- Ikke for skjermingsverdig informasjon eller systemer som må kjøre on-prem
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
<Placeholder class="anim-item max-w-xl mx-auto">fra avtale til første app i prod (onboarding-tid)</Placeholder>

<!--
Overgang: «Og hvis det ikke passer: dere kan gå når som helst, med alt.»

- Demo, pilot, migrering, drift
- PLASSHOLDER: varighet per steg og tid fra avtale til første app i prod
-->

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold">Dere kan gå når som helst, med alt</h1>
<p class="subtitle">Utviklerne får fart fra dag én, etaten beholder eierskap og exit, og det koster selvkost.</p>

::default::
<div class="flex items-center justify-center gap-10 w-full">
  <div class="anim-item qr-tile"><img src="./assets/kontakt-qr.svg" alt="QR-kode til e-post nais@nav.no" /></div>
  <div class="anim-item text-left">
    <p class="text-2xl font-bold" style="font-family: Poppins">Snakk med oss om Nais kan passe hos dere</p>
    <p class="text-xl mt-3"><a href="mailto:nais@nav.no" class="text-accent font-bold">nais@nav.no</a> · <a href="https://nais.io" class="text-accent">nais.io</a></p>
  </div>
</div>

<!--
Overgang: «Takk.»

- Koble tilbake til exit-sliden: etaten eier alt
- QR-koden åpner e-post til nais@nav.no (som «Kontakt oss» på nais.io)
-->
