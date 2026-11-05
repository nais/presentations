---
layout: cover
transition: fade
---

::logo::
<CoverLogo />

::default::
<h1 class="text-5xl font-black">Nais er fortsatt Nais</h1>
<p class="subtitle text-xl mt-4">Samme løfte, bedre under panseret</p>
<p class="text-sm mt-6 opacity-70">Hans Kristian Flaatten · Nais-teamet i Nav</p>

<!--
Overgang: «Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav. Dere har kjørt på Nais en stund nå. I dag viser jeg hva som har skjedd under panseret.»

- Målgruppe: utviklere og tech leads i Arbeidstilsynet
- Tesen: samme løfte, bedre under panseret. Det dere valgte, holder
- Ingen demo i dag, bare animasjoner
-->

---
layout: none
transition: fade
---

<ClipSlide />

<!--
Overgang: «(Ingen overgang. La klippet gå, ikke snakk over det.)»

- 6 tenants, 5 212 apper (Grafana, 21. oktober 2026). KS Digital og Novari har signert, men har ikke apper i produksjon ennå
- ≈ 21 500 deployer per uke er Nav, alle miljøer (Mimir)
- Fargene viser de mindre tenantene spredt i bikuben
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
Overgang: «Seks ting Nais skal gi dere. De er de samme som da dere startet. Jeg bruker dem som kart resten av foredraget.»

- Teksten og søylene er hentet fra nais.io
- Vi mener at det skal være lett å gjøre rett
- Hjørnemerket på senere slides viser hvilken søyle de handler om
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Dere er ikke alene på plattformen</h1>
<p class="subtitle">Tenants utenfor Nav kjører 528 apper, og Arbeidstilsynet er en av dem</p>

::default::
<div class="flex flex-col items-center gap-3 w-full">
  <div class="flex justify-center gap-6">
    <CountUp number="6" label="Tenants" />
    <CountUp number="5212" label="Apper totalt" :delay="0.08" />
    <CountUp number="21500" prefix="≈" label="Deployer per uke" :delay="0.16" />
    <CountUp number="154" label="Team som deployer" :delay="0.24" />
  </div>
  <YearChart metric="deploys" :labels="false" />
  <div class="anim-item tenant-logos">
    <img src="./assets/logos/nav.svg" alt="Nav" class="h-7" />
    <img src="./assets/logos/ssb.svg" alt="SSB" class="h-7" />
    <img src="./assets/logos/ldir.svg" alt="Landbruksdirektoratet" class="h-8" />
    <img src="./assets/logos/atil.svg" alt="Arbeidstilsynet" class="h-7 tenant-highlight" />
    <span class="incoming-logo"><img src="./assets/logos/ksdigital.png" alt="KS Digital" class="h-6" /><small>på vei inn</small></span>
    <span class="incoming-logo"><img src="./assets/logos/novari.svg" alt="Novari" class="h-5" /><small>på vei inn</small></span>
  </div>
</div>

<!--
Overgang: «Dere deler plattform med mange. Det er derfor den blir bedre hvert år. Så: hva skjer egentlig når dere deployer?»

- En tenant er en virksomhet som bruker Nais. Arbeidstilsynet er uthevet: det er dere
- 21 500 vises én gang, på flisa. Årsgrafen viser bare formen
- 528 apper kjører hos SSB, Landbruksdirektoratet og Arbeidstilsynet. KS Digital og Novari er på vei inn
- Apper per tenant: Grafana 21. oktober 2026 (72 + 164 + 292 = 528 utenfor Nav)
- ≈ 21 500 deployer per uke i Nav, alle miljøer. ≈ 9 000 i prod (Mimir)
- 154 team har deployet siste 28 dager (Nav). Deployer per uke er Nav, alle miljøer
- Reserve: ukegrafen fra Mimir (11 uker, aug.–okt. 2026) ligger i DeployChart hvis noen spør
- 2022: ≈ 1 500 deployer per uke og ≈ 1 300 apper (Ship It #78, nov. 2022, https://www.changelog.com/shipit/78). Nå: ≈ 21 500 per uke (alle miljøer) og 5 212 apper
- Nais har vært i produksjon siden 2016
- Årsgrafen er et anslag: formen følger Navs årlige snitt (2015 ≈ 10 … 2025 ≈ 2 700 deployer per uke), skalert slik at 2026 ender på dagens ≈ 21 500 i alle miljøer
-->

---
transition: view-transition
layout: default
clicks: 6
---

::header::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<h1 class="text-3xl font-bold">Ett manifest, ferdig oppsett <span class="new-badge">Nytt</span></h1>
<p class="subtitle">Ingen Terraform, ingen egen infrastruktur</p>

::default::
<ManifestDeep />

<!--
Overgang: «Så skal vi se hva som skjer når dere merger.»

- Manifestet ser ut som før. Det nye: Postgres er en egen ressurs (.nais/postgres.yaml, version: v1, type: Postgres), og appen kobler seg til med uses.postgres
- Nais Postgres kjører på CloudNativePG, i clusteret, i stedet for Cloud SQL
- Feltnavn fra Application-eksempelet i nais/doc og Postgres-veiledningen (docs.nais.io, persistence/postgres)
- Hvert klikk skriver én blokk, og ressursen dukker opp rundt appen
- Ingen Terraform, ingen egen infrastruktur
- Utvikleren ber KI-agenten om en app med Postgres og ID-porten. Agenten bruker Nais MCP-serveren (nais/cli, read-only GraphQL: get_nais_context, schema og nais://schema) og den åpne dokumentasjonen, og skriver manifestet vi ser bygge seg opp
-->

---
transition: view-transition
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<h1 class="text-3xl font-bold">Fra pull request til produksjon <span class="new-badge">Nytt</span></h1>

::default::
<PrFlow />

<!--
Overgang: «nais apply leverer manifestet. La oss åpne panseret og se hva som skjer på plattformsiden.»

- Alt går via GitHub: pull request, sjekker, review, merge
- Klikk 1: sjekker (bygg, test, nais validate) og godkjenning. Klikk 2: merge, så bygger nais/docker-build-push med SBOM og signering, og nais apply (via nais/setup) sender manifestet til nais deploy
- Nytt: deploy-steget er Nais CLI. nais apply tar også egne manifester som Postgres og Config, med --set for å overstyre felt (for eksempel spec.image)
- Klikk 3: PR-en viser at den er deployet
- Copilot-agenten åpner PR-en på vegne av utvikleren. Kari Nordmann reviewer, Copilot kommenterer, og et menneske merger
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Hva skjer på plattformsiden</h1>
<p class="subtitle">Nais API, nais deploy, Naiserator og api-reconcilers</p>

::default::
<AppFanout />

<!--
Overgang: «Hver app får den samme hylla. Her er den, slik den ser ut nå.»

- Klikk 1: klientene: Nais CLI, Console, nais deploy fra GitHub Actions og MCP-serveren for KI-agenter
- Klikk 2: alle snakker med Nais API
- Klikk 3: nais deploy leverer manifestet inn i clusteret, der Naiserator gjør det om til Kubernetes-objekter (Deployment, Service, NetworkPolicy, ingress, secrets). Nais API setter opp teamressurser og datatjenester
- Under panseret: CRD-ene (Application, Naisjob, IdportenClient, MaskinportenClient, AzureAdApplication, Kafka-topics m.fl.) er definert i liberator. Naiserator leser Application og Naisjob og lager Kubernetes-objektene og CRD-er for de andre operatorene
- api-reconcilers lager teamressursene: GCP-prosjekt, GitHub-team, Entra ID-gruppe. Operatorer som Config Connector og aivenator gjør resten
- Nais Postgres-ressursen håndteres av en egen operator (pgrator)
- Klikk 4: zoom ut fra én app til tusenvis av apper og ett plattformteam
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Verktøykassa <span class="new-badge">Nytt</span></h1>
<p class="subtitle">Alt rundt appen, klart til bruk</p>

::default::
<Toolbox mode="open" />

<!--
Overgang: «Hva har dette betydd for Nav, som har kjørt lengst?»

- Én bølge med skuffer per klikk (tre bølger), til slutt alt på en gang
- Gruppert etter inventaret over verktøykassa. Utfasede ting er utelatt
- MCP for kodeagenter ligger i Verktøy-skuffen
- Nytt siden i fjor: Nais Postgres (CloudNativePG), Valkey og OpenSearch er ute av alfa og kan endres selv (versjon, størrelse), Kafka-tilganger styres via API og CLI, og Unleash har selvbetjening med release-kanaler
-->

---
layout: default
clicks: 5
---

::header::
<h1 class="text-3xl font-bold">Hva Nais har betydd for Nav</h1>

::default::
<BenefitStory :items="[
  { icon: 'i-carbon-building', title: 'Fundament', description: 'Autonome team' },
  { icon: 'i-carbon-rocket', title: 'Fart og flyt', description: 'Kortere vei til prod' },
  { icon: 'i-carbon-user-speaker', title: 'Utviklere', description: 'Fornøyde' },
  { icon: 'i-carbon-group', title: 'Ansatte', description: 'Fornøyde' },
  { icon: 'i-carbon-face-satisfied', title: 'Brukere', description: 'Fornøyde' },
]" />
<div class="anim-item dora"><b>≈ 9 000</b> prodsettinger per uke · mange ganger daglig per team</div>

<!--
Overgang: «Og når noe feiler?»

- Ett klikk per steg, konfetti til slutt
- ≈ 9 000 prodsettinger per uke (Mimir, alle tenants, Nav dominerer). Mange ganger daglig per team
-->

---
layout: default
clicks: 5
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Fra feil til fiks <span class="new-badge">Nytt</span></h1>

::default::
<ObsHunt />

<!--
Overgang: «Og alt dette ser teamet også i Console.»

- Klikk 0: logger fra stdout går via Fluent Bit til Loki uten oppsett. Traces og metrikker går via OpenTelemetry Collector til Tempo og Mimir, metrikker også via PodMonitor. Alt vises i Grafana
- Klikk 1: diagrammet krymper, og jakten starter. Klikk 2–5: varsel, trace, logger for samme trace, fiks deployet
- Illustrasjon, ikke ekte tall. Kilde for flyten: docs.nais.io, «How Nais APM works»
- Nytt: metrikkene lagres i Mimir (tidligere Prometheus). I Console har en ny Loki-utforsker erstattet de gamle loggvisningene for apper, jobber og Postgres
-->

---
transition: view-transition
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-3xl font-bold">Console: fra team til app <span class="new-badge">Nytt</span></h1>

::default::
<ConsoleMock story="tour" />

<!--
Overgang: «Og fordi teamet ser kostnaden, gjør de noe med den.»

- Illustrasjon bygd etter strukturen i Console, ingen ekte data
- Klikk 1: kostnad per tjeneste. Klikk 2: markøren går til Applications. Klikk 3: teamet åpner én app med helse, deploy, persistens og kostnad
- Nytt i Console siden i fjor: Postgres-administrasjon, ConfigMaps, etiketter med filtre, ny aktivitetslogg, og innsyn i hemmelige verdier med begrunnelse (logges)
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Teamet eier kostnaden</h1>

::default::
<CostLoop />

<!--
Overgang: «Databasen er bare én post. Resten handler om at containere deler maskiner.»

- Samme PR-kort som på pull request-sliden. Klikk 1: teamet merger PR-en som gjør databasen større, og kostnaden stiger i Console
- Klikk 2: teamet ser det og sender en ny PR. Klikk 3: riktig størrelse, og kostnaden legger seg under der den startet
- Feltene er fra Application-spec (gcp.sqlInstances tier og diskSize). Kronebeløpene er illustrasjon
- Teamets valg slår rett ut på regningen, og teamet ser det selv i Console
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Ressursutnyttelse</h1>
<p class="subtitle">Containere deler maskiner. Virtuelle maskiner står ofte halvtomme.</p>

::default::
<ResourceIcebergs />

<!--
Overgang: «Og for dere som liker terminalen:»

- Containere deler maskiner, og derfor bruker de mindre enn virtuelle maskiner
- 2–10x er et anslag: spennet fra den gamle Nav-presentasjonen. Det avhenger av hvor godt virtuelle maskiner ble dimensjonert før; containere deler maskiner og skalerer etter behov
- Dere betaler for det appene bruker, ikke for tomme maskiner
- Nais Postgres er nytt, og Nais Buckets er på vei, blant annet for å få ned kostnaden
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Og fra terminalen <span class="new-badge">Nytt</span></h1>

::default::
<CliDemo />

<!--
Overgang: «Det var utviklerens side. Nå snur vi bildet: lagene som gjør at dagen blir kjedelig.»

- Kommandoene finnes i Nais CLI (binæren heter nais, sjekket mot nais -h). Utdata er illustrasjon
- Kommandoene spiller av seg selv når sliden åpnes: nais login, apply, app set replicas, postgres proxy, vulnerability summary
- Nytt: nais apply deployer manifester fra egen maskin eller pipeline. nais app set (image, env, replicas) endrer en app midlertidig til neste deploy. nais postgres har egne kommandoer for Nais Postgres (proxy, psql, branch), og Cloud SQL ligger nå under nais cloudsql
-->

---
layout: default
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Hva kjører hvor</h1>
<p class="subtitle">Dette er avhengighetene</p>

::default::
<HostingMap />

<!--
Overgang: «Slik er lagene bygd.»

- Google Cloud: GKE, Cloud SQL, buckets, BigQuery. Aiven: Kafka, OpenSearch, Valkey
- Nais drifter observability-stakken selv
- Klikk 2: Nais Postgres (CloudNativePG) og Nais Buckets erstatter over tid Cloud SQL og Cloud Storage, for kostnad og suverenitet. Nais Postgres er nytt (merket alfa i docs.nais.io), Buckets er på vei
- Dataene ligger i europe-north1 (Finland)
- Nais startet i eget datasenter i 2016 og flyttet til Google Cloud
- Nais drifter selv: Console og API, ingress, naisdevice og observability-stakken (Grafana, Mimir, Loki, Tempo)
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">En plattform med flere lag</h1>

::default::
<IsoLayers />

<!--
Overgang: «Og slik henger nettverket sammen.»

- Lagene bygges nedenfra: infrastruktur fra skyleverandøren, Kubernetes, Nais (operatorene, hjertet i plattformen) og teamenes apper
- Klikk 1: pods for app A, B og C fordelt over tre soner i én region. Klikk 2: de skalerer ut
- Klikk 3: datasenter-b faller ut, og podene startes i a og c. Appen merker det ikke
- Klikk 4: laget nederst byttes (eget datasenter → Google Cloud), mens Nais og appene blir stående. Nais har flyttet før. Appene merket det ikke
-->

---
layout: default
clicks: 6
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-2xl font-bold">Nettverket rundt min-app <span class="new-badge">Nytt</span></h1>

::default::
<NetTopology />

<!--
Overgang: «Nettverket er stengt som standard. Det samme gjelder koden som skal inn.»

- Klikk 0: min-app i et Nais-cluster (VPC) i tenantens egen GCP-organisasjon
- Klikk 1: nettverkspolicyer fra accessPolicy. Alt er stengt som standard; en app som ikke er nevnt, blir stoppet
- Klikk 2: trafikk ut går bare til vertsnavn i accessPolicy.outbound.external, fra faste utgående IP-er per miljø (docs.nais.io, environments) som partnere kan åpne for
- Klikk 3: Cloud SQL med privat IP, trafikken forlater ikke Google-nettverket. Aiven (Kafka, OpenSearch, Valkey) nås over privat lenke / VPC-peering, i tillegg til TLS-klientsertifikat for Kafka
- Klikk 4: tenantens eget datasenter via VPN eller Cloud Interconnect, satt opp per tenant
- Klikk 5: to innganger. Innbyggere kommer fra internett via ekstern ingress med TLS. Ansatte når interne apper via naisdevice og intern ingress
- Nytt: ingress kjører på HAProxy i stedet for nginx. Migreringen ble gjort i 2026
- Klikk 6: en annen tenant har sin egen organisasjon og sitt eget nettverk, ingenting er delt
-->

---
transition: view-transition
layout: default
clicks: 9
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
<h1 class="text-xl font-bold">Sikkerhet i forsyningskjeden <span class="new-badge">Nytt</span></h1>

::default::
<SupplyFix :nodes="[
  { icon: 'i-carbon-build-tool', label: 'Bygg', sub: 'All kode, også fra KI-agenter' },
  { icon: 'i-carbon-list-boxes', label: 'SBOM', sub: 'Lages automatisk (CycloneDX)' },
  { icon: 'i-carbon-certificate', label: 'Signering', sub: 'Signert og attestert' },
  { icon: 'i-carbon-scan', label: 'Sårbarheter', sub: 'Prioritert etter risiko' },
  { icon: 'i-carbon-dashboard', label: 'Console', sub: 'Teamet ser status' },
]" />

<!--
Overgang: «Og sikkerheten gjelder ikke bare koden. Hvem slipper inn? Innloggingen er bygd inn.»

- Klikk 1–4: ett ledd per klikk. SBOM og signering skjer automatisk i bygget. Husk manifestet og PR-en agenten laget tidligere: den koden gikk gjennom akkurat samme løp som all annen kode
- Klikk 5: Console vokser ut av det siste leddet. Klikk 6–9: funnet åpnes, PR oppdaterer avhengigheten, bygg og deploy, ny skanning og løst
- Console-delen er illustrasjon, ikke ekte data eller CVE-er
- Nytt: sårbarheter prioriteres etter risiko, ikke bare alvorlighet. EPSS (sannsynlighet for utnyttelse), KEV (kjent utnyttet) og om appen er eksponert mot internett teller med. Funn kan undertrykkes samlet
- 5 608 workloads (apper og jobber) skannes for sårbarheter i Nav (Mimir, 21. oktober 2026). Tallet er tatt av sliden; nevn det muntlig
- Kobling til NSM (tatt av sliden): SBOM og signering svarer til 2.1.4, sårbarhetsskanning til 3.1.1
- NSM anbefaler, loven krever ikke: Grunnprinsipper for IKT-sikkerhet 2.1.4 «Reduser risiko for målrettet manipulasjon av IKT-produkter i leverandørkjeden» (SBOM og signering) og 3.1.1 «Gjennomfør jevnlig sårbarhetskartlegging … ved hjelp av automatiserte verktøy» (skanning). https://nsm.no/grunnprinsipper-ikt
- Digitalsikkerhetsforskriften § 14 (i kraft 1.10.2025) gjelder bare tilbydere av samfunnsviktige tjenester: https://lovdata.no/dokument/SF/forskrift/2025-06-20-1131. NSMs veileder: https://nsm.no/getfile.php/1314788-1759304646/NSM/Filer/Dokumenter/Veiledere/Veileder%20fra%20NSM%20i%20digitalsikkerhetsloven%20og%20-forskriften.pdf
- NIS2 vurderes for EØS-avtalen, ingen norsk lov ennå: https://www.efta.int/eea-lex/32022L2555, https://www.regjeringen.no/no/sub/eos-notatbasen/notatene/2021/feb/nis2-direktivet/id2846097/
- Nais gir dere dokumentasjonen som hjelper dere å følge opp leverandørkjeden. Dokumentasjonen alene gjør ikke at dere etterlever kravene. Ansvaret ligger hos tenanten
-->

---
layout: default
clicks: 9
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
<h1 class="text-2xl font-bold">Innlogging uten egen kode <span class="new-badge">Nytt</span></h1>

::default::
<AuthJourney star />

<!--
Overgang: «Og når noe likevel går galt om natta?»

- To sidecars gjør jobben: Wonderwall er en innloggings-sidecar foran appen (logger brukeren inn mot ID-porten eller Entra ID). Texas er en token-sidecar som appen spør for å validere, bytte og hente tokens
- Klikk 0: ID-porten, Maskinporten, Entra ID og TokenX/Texas er innebygd
- Klikk 1: oversikten viker for én forespørsel gjennom Nais, og grensene for cluster og pods tegnes
- Klikk 2: Wonderwall (innloggings-sidecar) sender innbyggeren til ID-porten. min-app får forespørselen med Authorization-header. Wonderwall validerer ikke tokenet; appen gjør det via Texas
- Klikk 3: tokenet har mottaker (aud) min-app. Et token er bare gyldig for mottakeren det er laget for
- Klikk 4: min-app kaller Texas: POST til NAIS_TOKEN_EXCHANGE_ENDPOINT med identity_provider=tokenx, target=prod-gcp:team-b:api og user_token (docs.nais.io, TokenX)
- Klikk 5: Texas bytter tokenet via TokenX. Samme bruker, ny mottaker: prod-gcp:team-b:api. Hvorfor: lekker tokenet, kan det ikke brukes mot andre tjenester, og hvert API ser hvem brukeren er
- Klikk 6: API-ets Texas introspekterer tokenet (NAIS_TOKEN_INTROSPECTION_ENDPOINT): riktig mottaker, riktig bruker
- Klikk 7: accessPolicy.inbound stopper en app som ikke har lov
- Klikk 8: Maskinporten-token for et eksternt API, også via Texas
- Klikk 9: manifestlinjene. Kilde: docs.nais.io (auth, ID-porten, TokenX, Entra ID, Maskinporten)
- Nytt i liberator: AnsattportenClient (innlogging for ansatte via Ansattporten) og federated credentials for Entra ID-applikasjoner
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Kl. 03.00</h1>
<p class="subtitle">Nais har vakt for plattformen. Teamene eier appene sine.</p>

::default::
<div class="flex flex-col gap-6 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-notification', label: 'Varsel', sub: 'En node i plattformen svikter kl. 03.00' },
    { icon: 'i-carbon-phone', label: 'Nais-vakt', sub: 'Vakthavende i Nais-teamet varsles' },
    { icon: 'i-carbon-cloud', label: 'Google', sub: 'Googles døgnåpne support ved behov' },
    { icon: 'i-carbon-checkmark', label: 'Løst', sub: 'Appene kjørte hele tiden' },
  ]" />
  <div class="grid grid-cols-2 gap-6 items-center max-w-4xl mx-auto w-full">
    <div class="anim-item night">
      <p><b>03.02</b> Varsel: en node i én sone svarer ikke</p>
      <p><b>03.03</b> Kubernetes flytter podene til friske noder</p>
      <p><b>03.10</b> Nais-vakten bytter noden, sammen med Google</p>
      <p><b>03.25</b> Alt er grønt. Appene merket det ikke</p>
    </div>
    <div class="anim-item text-center">
      <div class="text-5xl font-bold" style="font-family: Poppins; color: var(--nais-success)">99,88 %</div>
      <p class="mt-1">ingress-svar uten 5xx i Nav, siste 30 dager</p>
      <p class="opacity-70">Målt, ikke SLA. Inkluderer feil i appene selv.</p>
    </div>
  </div>
</div>

<!--
Overgang: «Hvem var våkne? Disse femten.»

- Nais har vakt døgnet rundt for plattformen, med Googles døgnåpne support ved behov. Det gjelder Arbeidstilsynet like mye som Nav
- Skillet: Nais har vakt for plattformen. Teamene eier appene sine. Feiler en app på grunn av egen kode, for eksempel mot databasen, er det teamets jobb å rette, ikke Nais'
- Få produktteam har egen vakt, og det trenger de ikke for plattformfeil
- 99,88 % er målt i Mimir, Nav, siste 30 dager. Tallet inkluderer feil i appene selv. Ingen formell SLA
- Natten i boksen er en illustrasjon av en plattformfeil (en node faller ut), ikke en bestemt hendelse
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Nais-teamet</h1>
<p class="subtitle">15 personer i Nav. Drifter for seks tenants, fire i produksjon.</p>

::default::
<TeamWall />

<!--
Overgang: «Og hvem bestemmer hva de bygger?»

- Hele teamet: femten personer, alle ansatt i Nav, som drifter for seks tenants
- Navn fra GitHub-teamet nais/nais
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Velkommen, KS Digital og Novari</h1>
<p class="subtitle">To nye tenants har signert. Arbeidslastene kommer i 2027.</p>

::default::
<div class="flex flex-col items-center gap-8 w-full">
  <div class="card-row welcome-row">
    <div class="welcome-card"><img src="./assets/logos/ksdigital.png" alt="KS Digital" class="h-14" /><span>KS Digital</span></div>
    <div class="welcome-card"><img src="./assets/logos/novari.svg" alt="Novari" class="h-12" /><span>Novari</span></div>
  </div>
  <div class="anim-item tenant-logos">
    <img src="./assets/logos/nav.svg" alt="Nav" class="h-6" />
    <img src="./assets/logos/ssb.svg" alt="SSB" class="h-6" />
    <img src="./assets/logos/ldir.svg" alt="Landbruksdirektoratet" class="h-7" />
    <img src="./assets/logos/atil.svg" alt="Arbeidstilsynet" class="h-6 tenant-highlight" />
  </div>
  <p class="anim-item text-center">Seks tenants på samme plattform. Det vi bygger for én, får alle.</p>
</div>

<!--
Overgang: «Før jeg viser hva som er nytt: vi har fått selskap.»

- KS Digital og Novari (for fylkeskommunene) har signert avtale om å bruke Nais, gjennom offentlig-offentlig samarbeid
- De har ingen apper i produksjon ennå. Arbeidslastene ventes i 2027
- Hva betyr det for Arbeidstilsynet? Flere som bruker plattformen gir flere innspill og flere som finner feil. Det som bygges for én tenant, får alle
- Nais-teamet er fortsatt de samme 15 i Nav
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Året som gikk</h1>
<p class="subtitle">Et utvalg av det som kom fra november 2025 til november 2026</p>

::default::
<div class="flex flex-col gap-5 w-full max-w-5xl mx-auto">
  <div class="card-row year-grid">
    <div class="ms"><b>Des. 2025</b><span class="i-carbon-bot" /><p>MCP-server i Nais CLI</p></div>
    <div class="ms"><b>Jan. 2026</b><span class="i-carbon-chart-line" /><p>Metrikker i Mimir</p></div>
    <div class="ms"><b>Jan. 2026</b><span class="i-carbon-locked" /><p>Se hemmeligheter med begrunnelse</p></div>
    <div class="ms"><b>Vår 2026</b><span class="i-carbon-data-base" /><p>Valkey og OpenSearch ute av alfa</p></div>
    <div class="ms"><b>Apr. 2026</b><span class="i-carbon-security" /><p>Sårbarheter prioritert etter risiko</p></div>
    <div class="ms"><b>Apr.–jun. 2026</b><span class="i-carbon-network-3" /><p>HAProxy erstatter nginx</p></div>
    <div class="ms"><b>Mai 2026</b><span class="i-carbon-terminal" /><p>nais apply og nais app set</p></div>
    <div class="ms"><b>Okt. 2026</b><span class="i-carbon-data-base" /><p>Nais Postgres med branches</p></div>
    <div class="ms"><b>Nov. 2026</b><span class="i-carbon-search" /><p>Loki-utforsker i Console</p></div>
  </div>
  <div class="anim-item cleared">
    <b>Ryddet bort:</b> secure logs · KrakenD · Elastic APM · <code>nais alpha postgres</code> og Cloud SQL-migreringskommandoene · <code>nais aiven</code>
  </div>
</div>

<!--
Overgang: «Mye av dette har dere sett på veien. Her er året samlet.»

- Datoene er fra når endringen kom i kildekoden (commits i nais/cli, api, console-frontend, system), ikke fra en lansering. Månedene er omtrentlige
- Des. 2025: MCP-serveren kom i Nais CLI (nais alpha mcp serve). Mer om den om litt
- Jan. 2026: Nais API byttet til Mimir for metrikker. Innsyn i hemmelige verdier krever begrunnelse og logges
- Vår 2026: Valkey og OpenSearch ute av alfa, med selvbetjening for versjon og størrelse (mars–september)
- Apr. 2026: sårbarheter prioriteres med EPSS, KEV og internetteksponering
- Apr.–jun. 2026: ingress flyttet fra nginx til HAProxy
- Apr.–mai 2026: nais apply ble en hovedkommando, nais app set for midlertidige endringer
- Okt. 2026: Nais Postgres som nais.io/v1-ressurs, med branches
- Nov. 2026: Loki-utforskeren erstatter de gamle loggvisningene i Console
- Ryddet bort: secure logs (jan. 2026), KrakenD som funksjon (aug. 2026), Elastic APM. Gamle CLI-kommandoer: nais alpha postgres er nå nais postgres, Cloud SQL ligger under nais cloudsql, og migreringskommandoene er fjernet. nais aiven er erstattet av credentials-kommandoer
- Bruker dere noe av dette, står det i dokumentasjonen hva dere skal gjøre
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Nais Postgres <span class="new-badge">Nytt</span></h1>
<p class="subtitle">Postgres i clusteret, på CloudNativePG</p>

::default::
<div class="grid grid-cols-2 gap-8 items-center w-full max-w-5xl mx-auto">
  <div class="card-row pg-list">
    <div><span class="i-carbon-data-base" /><b>CloudNativePG</b> kjører databasen i clusteret</div>
    <div><span class="i-carbon-branch" /><b>Branches</b> en kopi av databasen fra et tidspunkt</div>
    <div><span class="i-carbon-time" /><b>Point-in-time recovery</b> tilbake til et tidspunkt, som branch</div>
    <div><span class="i-carbon-user-admin" /><b>Personlig DBA-tilgang</b> med logget, tidsbegrenset tilgang</div>
    <div><span class="i-carbon-dashboard" /><b>Postgres i Console</b> opprett, endre, logger og innsikt i spørringer</div>
  </div>
  <pre class="anim-item pg-code"><code>$ nais postgres branch create min-db
$ nais postgres branch list min-db
$ nais postgres branch activate min-db test
$ nais postgres psql min-db</code></pre>
</div>

<!--
Overgang: «Den største endringen under panseret er databasen.»

- Nais Postgres er nytt. Dokumentasjonen merker det fortsatt som alfa, så si «nytt», ikke «i drift for alle»
- Ressursen ser slik ut: version: v1, type: Postgres i .nais/postgres.yaml, og appen kobler seg til med uses.postgres
- Kjører på CloudNativePG (CNPG) i clusteret, i stedet for Cloud SQL. Det gir lavere kostnad og mindre avhengighet av Google
- Branches: lag en inaktiv kopi fra et tidspunkt, og aktiver den ved behov. Det er også slik point-in-time recovery fungerer
- Personlig DBA-tilgang: utvikleren får tilgang i eget navn, via en relay/proxy (nais postgres proxy og psql)
- Console: opprette og endre, etiketter, logger, innsikt i spørringer, utvidelser og konfigurasjon
- Kommandoene er sjekket mot nais/cli. Navnene min-db og test er eksempler
- Cloud SQL finnes fortsatt, under nais cloudsql
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<h1 class="text-3xl font-bold">KI: MCP i Nais CLI</h1>
<p class="subtitle">Kodeagenten spør Nais, ikke deg</p>

::default::
<div class="flex flex-col gap-6 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-user', label: 'Utvikler', sub: 'Ber agenten om en app med Postgres' },
    { icon: 'i-carbon-bot', label: 'Kodeagent', sub: 'Copilot, Claude eller en annen' },
    { icon: 'i-carbon-terminal', label: 'nais alpha mcp serve', sub: 'Kjører lokalt, som deg' },
    { icon: 'i-carbon-api', label: 'Nais API', sub: 'Bare lesing' },
  ]" />
  <div class="anim-item mcp-tools">
    <code>get_nais_context</code><code>schema_search</code><code>schema_get_type</code><code>validate_graphql</code><code>execute_graphql</code>
  </div>
</div>

<!--
Overgang: «Og KI-agentene har også fått en vei inn.»

- MCP (Model Context Protocol) er en åpen standard for å gi KI-agenter verktøy. Nais CLI har en innebygd MCP-server: nais alpha mcp serve
- Den kjører lokalt, logger inn som deg og ser bare det du har tilgang til. Standard er stdio; HTTP lytter på 127.0.0.1
- Verktøyene er bare lesing: get_nais_context (hvem du er, teamene dine), schema-verktøy (schema_search, schema_get_type m.fl.), validate_graphql og execute_graphql. Hemmelige verdier filtreres bort
- Det er dette vi så på manifest-sliden: agenten slår opp teamet og skjemaet og skriver manifestet. Et menneske reviewer og merger, og koden går gjennom samme forsyningskjede som all annen kode
- Fortsatt under alpha i CLI-en
- Klikk 1–3: forespørselen går fra utvikleren via agenten og MCP-serveren til Nais API
-->

---
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Hvem bestemmer</h1>
<p class="subtitle">Nais-teamet bestemmer veikartet, med innspill fra tenantene på Naisdag</p>

::default::
<GovernanceLoop />

<!--
Overgang: «Så hvordan kan dere påvirke?»

- Nais-teamet bestemmer veikartet, med innspill fra tenantene på Naisdag
- Det betyr ikke at alt én tenant ønsker, blir bygd. Men det som blir bygd, får alle
- På veikartet: Nais Buckets og mer Postgres
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Hvordan påvirke</h1>
<p class="subtitle">Naisdag, champions og #nais på Slack</p>

::default::
<p class="anim-item text-center">Plassholder</p>

<!--
Plassholder: bygges i neste fase.
-->
