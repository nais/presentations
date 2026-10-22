---
layout: cover
transition: fade
---

<h1 class="text-5xl font-black">Nais as a Service</h1>
<p class="subtitle text-xl mt-4">Gir fart og flyt på utviklingen av Norge</p>
<p class="text-sm mt-6 opacity-70">Hans Kristian Flaatten · Nais-teamet i Nav</p>

<!--
Overgang: «Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav.»

- Målgruppe: teknologiledere, arkitekter og beslutningstakere
- Tesen: Plattformen Nav bygde for seg selv er nå en tjeneste for det offentlige
- Ingen demo i dag, bare animasjoner
-->

---
layout: default
clicks: 1
---

::header::
<h1 class="text-3xl font-bold">Problemet</h1>
<p class="subtitle">Hver etat bygger sin egen plattform</p>

::default::
<ProblemStacks />
<div class="evidence anim-item">
  <p>«Staten bruker penger på at 40 ulike etater løser det samme problemet.» <span>Nav, Kubernetes Podcast #216 (2024)</span></p>
  <p>«… det offentlege framleis er for oppdelt.» <span>Stortinget, 29.01.2026</span></p>
  <p>Ofte blir resultatet en Azure landing zone og en wiki.</p>
</div>

<!--
Overgang: «Og den felles plattformen er ikke en idé. Den har vokst siden 2016. Se.»

- Hver etat som bygger egen plattform, trenger knapp og dyr kompetanse
- Få lykkes med å bygge og drifte en plattform utviklerne liker. Ofte ender det med en landingssone og en wiki, eller en halvferdig plattform.
- Det krever ressurser og vilje over år. Plattform er et produkt, ikke et prosjekt
- Kilde: Kubernetes Podcast #216 (jan. 2024), «the same government who is spending money in 40 different public agencies solving the same problem», https://kubernetespodcast.com/episode/216-nais/
- Kilde: Stortinget 29.01.2026 (Dok. 3:14), Geir Pollestad: «det offentlege framleis er for oppdelt», https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2025-2026/refs-202526-01-29/8
- Klikk 1: én felles plattform. ≈ 150 årsverk er Nav sitt eget anslag
-->

---
layout: none
transition: fade
---

<ClipSlide />

<!--
Overgang: «(Ingen overgang. La klippet gå, ikke snakk over det.)»

- 6 tenants, 5 212 apper (Grafana, 21. oktober 2026). KS Digital og Novari har signert, men har ikke apper i produksjon ennå
- ≈21 500 deployer per uke er Nav, alle miljøer (Mimir)
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
Overgang: «Seks ting Nais skal gi dere. Jeg kommer tilbake til dem underveis. Først: brukes dette faktisk?»

- Teksten og søylene er hentet fra nais.io
- Vi mener at det skal være lett å gjøre rett
- Hjørnemerket på senere slides viser hvilken søyle de handler om
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Tenants utenfor Nav kjører allerede 528 apper</h1>
<p class="subtitle">Og Nav deployer rundt 21 500 ganger i uka, i alle miljøer</p>

::default::
<div class="flex flex-col items-center gap-3 w-full">
  <div class="flex justify-center gap-6">
    <CountUp number="6" label="Tenants" />
    <CountUp number="5212" label="Apper totalt" :delay="0.08" />
    <CountUp number="21500" prefix="≈" label="Deployer per uke" :delay="0.16" />
    <CountUp number="154" label="Team som deployer" :delay="0.24" />
  </div>
  <p class="anim-item text-sm text-muted -mt-2">En tenant er en virksomhet som bruker Nais.</p>
  <YearChart metric="deploys" />
  <div class="anim-item tenant-logos">
    <img src="./assets/logos/nav.svg" alt="Nav" class="h-7" />
    <img src="./assets/logos/ssb.svg" alt="SSB" class="h-7" />
    <img src="./assets/logos/ldir.svg" alt="Landbruksdirektoratet" class="h-8" />
    <img src="./assets/logos/atil.svg" alt="Arbeidstilsynet" class="h-7" />
    <span class="incoming-logo"><img src="./assets/logos/ksdigital.png" alt="KS Digital" class="h-6" /><small>på vei inn</small></span>
    <span class="incoming-logo"><img src="./assets/logos/novari.svg" alt="Novari" class="h-5" /><small>på vei inn</small></span>
  </div>
</div>

<!--
Overgang: «Grunnen til at tallene er så store, kommer på neste slides.»

- 528 apper kjører hos SSB, Landbruksdirektoratet og Arbeidstilsynet. KS Digital og Novari er på vei inn
- Apper per tenant: Grafana 21. oktober 2026 (72 + 164 + 292 = 528 utenfor Nav)
- ≈21 500 deployer per uke i Nav, alle miljøer. ≈9 000 i prod (Mimir)
- 154 team har deployet siste 28 dager (Nav). Deployer per uke er Nav, alle miljøer
- Reserve: ukegrafen fra Mimir (11 uker, aug.–okt. 2026) ligger i DeployChart hvis noen spør
- 2022: ≈1 500 deployer per uke og ≈1 300 apper (Ship It #78, nov. 2022, https://www.changelog.com/shipit/78). Nå: ≈21 500 per uke (alle miljøer) og 5 212 apper
- Nais har vært i produksjon siden 2016
- Årsgrafen er et anslag: formen følger Navs årlige snitt (2015 ≈10 … 2025 ≈2 700 deployer per uke), skalert slik at 2026 ender på dagens ≈21 500 i alle miljøer
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
<div class="anim-item dora"><b>≈ 9 000</b> prodsettinger per uke · mange ganger daglig per team</div>

<!--
Overgang: «Og hva er det utviklerne faktisk skriver? Dette.»

- Ett klikk per steg, konfetti til slutt
- ≈ 9 000 prodsettinger per uke (Mimir, alle tenants, Nav dominerer). Mange ganger daglig per team
-->

---
layout: default
clicks: 6
---

::header::
<div class="pillar-tag" style="--pc: #FF9100"><span class="i-carbon-rocket" /> Utviklingsfart</div>
<h1 class="text-3xl font-bold">Ett manifest, ferdig oppsett</h1>
<p class="subtitle">Ingen Terraform, ingen egen infrastruktur</p>

::default::
<ManifestDeep />

<!--
Overgang: «Så skal vi se hva som skjer når de trykker på knappen.»

- Feltnavn fra Application-eksempelet i nais/doc
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
<h1 class="text-3xl font-bold">Fra pull request til produksjon</h1>

::default::
<PrFlow />

<!--
Overgang: «Men hva skjer egentlig på plattformsiden?»

- Alt går via GitHub: pull request, sjekker, review, merge
- Klikk 1: sjekker (bygg, test, nais validate) og godkjenning. Klikk 2: merge, så bygger nais/docker-build-push med SBOM og signering, og nais apply deployer
- Klikk 3: PR-en viser at den er deployet
- PR-en er åpnet av Copilot-agenten på vegne av utvikleren. Kari Nordmann reviewer, Copilot kommenterer, og et menneske merger
-->

---
layout: default
transition: view-transition
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Hva skjer på plattformsiden</h1>
<p class="subtitle">Naiserator gjør manifestet om til ressurser</p>

::default::
<AppFanout />

<!--
Overgang: «Tusenvis av apper, og hver får den samme hylla. Her er den.»

- Naiserator lager Kubernetes-ressursene: Deployment, Service, Ingress, NetworkPolicy og flere
- Operatorer tar over resten: Config Connector, aivenator, azurerator, digdirator, jwker
- Klikk 2: zoom ut fra én app til tusenvis av apper og ett plattformteam
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
Overgang: «Jeg åpner skuffene én etter én. Etterpå: hva skjer når noe feiler?»

- Én skuff per klikk, til slutt alt på en gang
- Gruppert etter inventaret over verktøykassa. Utfasede ting er utelatt
- MCP for kodeagenter ligger i Verktøy-skuffen
-->

---
layout: default
clicks: 5
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Fra feil til fiks</h1>

::default::
<ObsHunt />

<!--
Overgang: «Og alt dette ser teamet også i Console.»

- Klikk 0: logger fra stdout går via Fluent Bit til Loki uten oppsett. Traces og metrikker går via OpenTelemetry Collector til Tempo og Mimir, metrikker også via PodMonitor. Alt vises i Grafana
- Klikk 1: diagrammet krymper, og jakten starter. Klikk 2–5: varsel, trace, logger for samme trace, fiks deployet
- Illustrasjon, ikke ekte tall. Kilde for flyten: docs.nais.io, «How Nais APM works»
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-3xl font-bold">Console: fra team til app</h1>

::default::
<ConsoleMock story="tour" />

<!--
Overgang: «Og fordi teamet ser kostnaden, gjør de noe med den.»

- Illustrasjon bygd etter Console sin struktur, ingen ekte data
- Klikk 1: kostnad per tjeneste. Klikk 2: markøren går til Applications. Klikk 3: teamet åpner én app med helse, deploy, persistens og kostnad
-->

---
transition: view-transition
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #5cb2da"><span class="i-carbon-activity" /> Oversikt</div>
<h1 class="text-2xl font-bold">Teamet eier kostnaden</h1>

::default::
<CostLoop />

<!--
Overgang: «Og for de som liker terminalen:»

- Samme PR-kort som på pull request-sliden. Klikk 1: PR-en som gjør databasen større merges, og kostnaden stiger i Console
- Klikk 2: teamet ser det og sender en ny PR. Klikk 3: riktig størrelse, og kostnaden legger seg under der den startet
- Feltene er fra Application-spec (gcp.sqlInstances tier og diskSize). Kronebeløpene er illustrasjon
- Knytter an til prisen: tenanten betaler forbruket sitt direkte til selvkost, så teamets valg slår rett ut på regningen
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
Overgang: «Det var utviklerens side. Nå snur vi bildet: alt som må stå for at dagen blir kjedelig.»

- Kommandoene finnes i Nais CLI (binæren heter nais, sjekket mot nais -h). Utdata er illustrasjon
- nais login, app status, app log, cloudsql proxy, vulnerability summary
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">En plattform med flere lag</h1>

::default::
<IsoLayers />

<!--
Overgang: «Og fordi containere deler maskiner, bruker de mindre enn virtuelle maskiner.»

- Lagene bygges nedenfra: infrastruktur fra skyleverandøren, Kubernetes, operatorene (hjertet i Nais) og appene
- Klikk 1: pods for app A, B og C fordelt over tre soner i én region. Klikk 2: de skalerer ut
- Klikk 3: datasenter-b faller ut, og podene startes i a og c. Appen merker det ikke
- Klikk 4: laget nederst byttes (eget datasenter → Google Cloud), mens operatorene og appene står stille. Nais har flyttet før, og det er dette som gjør exit og flytting mulig
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
Overgang: «Og alt dette må noen drifte.»

- 2–10x er et anslag: spennet fra den gamle Nav-presentasjonen. Det avhenger av hvor godt virtuelle maskiner ble dimensjonert før; containere deler maskiner og skalerer etter behov
- For beslutningstakere: dere betaler for det appene bruker, ikke for tomme maskiner
- Nais Postgres og Nais Buckets er på vei, blant annet for å få ned kostnaden
-->

---
layout: default
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #9b6fd6"><span class="i-carbon-settings" /> Automatisering</div>
<h1 class="text-3xl font-bold">Hva dere slipper å drifte</h1>
<p class="subtitle">Dere bruker verktøyene. Vi drifter alt under.</p>

::default::
<Toolbox mode="ops" />

<!--
Overgang: «Og når noe likevel skjer om natta?»

- Samme verktøykasse, dempet
- Klikk 1: driften Nais tar. Klikk 2: streken mellom tenantens del og Nais' del
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Kl. 03.00</h1>
<p class="subtitle">Samme varsel, samme Grafana. Forskjellen er hvem sin telefon som ringer.</p>

::default::
<div class="flex flex-col gap-6 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-notification', label: 'Varsel', sub: 'Noe feiler kl. 03.00' },
    { icon: 'i-carbon-phone', label: 'Nais-vakt', sub: 'Vakthavende i Nais-teamet varsles' },
    { icon: 'i-carbon-cloud', label: 'Google', sub: 'Googles døgnåpne support ved behov' },
    { icon: 'i-carbon-checkmark', label: 'Løst', sub: 'Dere sov gjennom det' },
  ]" />
  <div class="grid grid-cols-2 gap-6 items-center max-w-4xl mx-auto w-full">
    <div class="anim-item night">
      <p><b>03.02</b> Varsel i Slack</p>
      <p><b>03.05</b> Tracen peker på databasekallet</p>
      <p><b>03.08</b> Loggene viser at tilkoblingspoolen er full</p>
      <p><b>03.14</b> Rollback, og alt er grønt igjen</p>
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

- Vakt døgnet rundt er inkludert i NaaS: Nais-teamet, med Googles døgnåpne support ved behov. Google-supporten er inkludert i prisen
- 99,88 % er målt i Mimir, Nav, siste 30 dager. Tallet inkluderer feil i appene selv. Ingen formell SLA
- Natten i boksen er en typisk natt, en illustrasjon, ikke en bestemt hendelse
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
Overgang: «Teamet bygger også sikkerheten inn i hver leveranse.»

- Hele teamet: femten personer, alle ansatt i Nav, som drifter for seks tenants
- Navn fra GitHub-teamet nais/nais
-->

---
layout: default
clicks: 9
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
<h1 class="text-xl font-bold">Sikkerhet i forsyningskjeden</h1>

::default::
<SupplyFix :nodes="[
  { icon: 'i-carbon-build-tool', label: 'Bygg', sub: 'All kode, også fra KI-agenter' },
  { icon: 'i-carbon-list-boxes', label: 'SBOM', sub: 'Lages automatisk (CycloneDX)' },
  { icon: 'i-carbon-certificate', label: 'Signering', sub: 'Signert og attestert' },
  { icon: 'i-carbon-scan', label: 'Sårbarheter', sub: 'Følges opp per workload' },
  { icon: 'i-carbon-dashboard', label: 'Console', sub: 'Teamet ser status' },
]" />

<!--
Overgang: «Så: hvor kjører dette, og hvem eier det? Nå snakker jeg til dere som skal signere.»

- Klikk 1–4: ett ledd per klikk. SBOM og signering skjer automatisk i bygget. Husk manifestet og PR-en agenten laget tidligere: den koden gikk gjennom akkurat samme løp som all annen kode
- Klikk 5: Console vokser ut av det siste leddet. Klikk 6–9: funnet åpnes, PR oppdaterer avhengigheten, bygg og deploy, ny skanning og løst
- Console-delen er illustrasjon, ikke ekte data eller CVE-er
- DORA 2025: «AI doesn't fix a team; it amplifies what's already there», https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
- 5 608 workloads (apper og jobber) skannes for sårbarheter i Nav (Mimir, 21. oktober 2026). Tallet er tatt av sliden; nevn det muntlig
- Plass til ett lovsitat om forsyningskjede (kommer fra research)
-->

---
transition: view-transition
layout: default
clicks: 6
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Hva Europa gjør</h1>

::default::
<EuropeMap />

<!--
Overgang: «Og hvor kjører det i dag?»

- Klikk 1, Storbritannia: GOV.UK PaaS for «more than 60 departments, agencies and local authorities», «3,200 applications». Lagt ned fordi den «has not seen the rapid and continued growth». https://gds.blog.gov.uk/2022/07/12/why-weve-decided-to-decommission-gov-uk-paas-platform-as-a-service/
- Klikk 2, Nederland: Haven. «Een app die op één HAVEN-omgeving draait, werkt op álle HAVEN-omgevingen» («En app som kjører i ett HAVEN-miljø, virker i alle HAVEN-miljøer»). Standard, ikke drift. https://vng.nl/projecten/haven
- Klikk 3, Frankrike: Cloud π Native, «Plateforme DevSecOps du gouvernement français basée sur Kubernetes» («Den franske statens DevSecOps-plattform, bygd på Kubernetes»). Ingen offentlige tall. https://cloud-pi-native.fr/ og https://github.com/cloud-pi-native
- Klikk 4, Sverige: SFS 2024:1005, «Denna förordning innehåller bestämmelser om ett samordnat statligt tjänsteutbud för it-drift» («Denne forskriften inneholder bestemmelser om et samordnet statlig tjenestetilbud for IT-drift»). https://lagen.nu/2024:1005
- Klikk 5: Schleswig-Holstein (≈80 % LibreOffice, sparer over 15 millioner euro i året), openDesk (100 000 arbeidsplasser, Deutsche Rentenversicherung 21.07.2026), La Suite (over 500 000 ansatte i måneden, ifølge DINUM). Kilder: schleswig-holstein.de, deutsche-rentenversicherung.de, lasuite.numerique.gouv.fr
- Klikk 6: Norge og Nais. cloud.gov (USA) er en annen felles plattform med kostnadsdekning: «100% of your investment goes directly to platform development», https://cloud.gov/pricing/
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
Overgang: «Og slik henger nettverket sammen.»

- Google Cloud: GKE, Cloud SQL, buckets, BigQuery. Aiven: Kafka, OpenSearch, Valkey
- Nais drifter observability-stakken selv
- Klikk 2: Cloud SQL og Cloud Storage erstattes over tid av Nais Postgres (CloudNativePG) og Nais Buckets. Begge er på vei, for kostnad og suverenitet. docs.nais.io sier i dag: ikke lag nye Postgres-databaser der ennå, bruk Cloud SQL
- Dataene ligger i europe-north1 (Finland)
- Nais startet i eget datasenter i 2016 og flyttet til Google Cloud
-->

---
layout: default
clicks: 6
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-2xl font-bold">Nettverket rundt min-app</h1>

::default::
<NetTopology />

<!--
Overgang: «Og hvem slipper inn? Innloggingen er bygd inn.»

- Klikk 0: min-app i et Nais-cluster (VPC) i tenantens egen GCP-organisasjon
- Klikk 1: nettverkspolicyer fra accessPolicy. Alt er stengt som standard; en app som ikke er nevnt, blir stoppet
- Klikk 2: trafikk ut går bare til vertsnavn i accessPolicy.outbound.external, fra faste utgående IP-er per miljø (docs.nais.io, environments) som partnere kan åpne for
- Klikk 3: Cloud SQL med privat IP, trafikken forlater ikke Google-nettverket. Aiven-tjenester (Kafka) krever TLS-klientsertifikat
- Klikk 4: tenantens eget datasenter via VPN eller Cloud Interconnect, satt opp per tenant
- Klikk 5: brukere kommer inn via ingress med TLS. Interne ingresser nås bare via naisdevice
- Klikk 6: en annen tenant har sin egen organisasjon og sitt eget nettverk, ingenting er delt
-->

---
layout: default
clicks: 9
---

::header::
<div class="pillar-tag" style="--pc: #34c27a"><span class="i-carbon-certificate-check" /> Sikkerhet</div>
<h1 class="text-2xl font-bold">Innlogging uten egen kode</h1>

::default::
<AuthJourney star />

<!--
Overgang: «Og hvis dere vil flytte, er det deres valg.»

- Klikk 0: ID-porten, Maskinporten, Entra ID og TokenX/Texas er innebygd
- Klikk 1: nodene flyr inn i én forespørsel gjennom Nais, og grensene for cluster og pods tegnes
- Klikk 2: Wonderwall (innloggings-sidecar) sender innbyggeren til ID-porten. min-app får forespørselen med Authorization-header. Wonderwall validerer ikke tokenet; appen gjør det via Texas
- Klikk 3: tokenet har mottaker (aud) min-app. Et token er bare gyldig for mottakeren det er laget for
- Klikk 4: min-app kaller Texas: POST til NAIS_TOKEN_EXCHANGE_ENDPOINT med identity_provider=tokenx, target=prod-gcp:team-b:api og user_token (docs.nais.io, TokenX)
- Klikk 5: Texas bytter tokenet via TokenX. Samme bruker, ny mottaker: prod-gcp:team-b:api. Hvorfor: lekker tokenet, kan det ikke brukes mot andre tjenester, og hvert API ser hvem brukeren er
- Klikk 6: API-ets Texas introspekterer tokenet (NAIS_TOKEN_INTROSPECTION_ENDPOINT): riktig mottaker, riktig bruker
- Klikk 7: accessPolicy.inbound stopper en app som ikke har lov
- Klikk 8: Maskinporten-token for et eksternt API, også via Texas
- Klikk 9: manifestlinjene. Kilde: docs.nais.io (auth, ID-porten, TokenX, Entra ID, Maskinporten)
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Deres data, deres exit</h1>

::default::
<TenantMap :tenants="['Nav', 'SSB', 'Din virksomhet', 'Landbruksdirektoratet', 'Arbeidstilsynet', 'KS Digital', 'Novari']" :incoming="['KS Digital', 'Novari']" :detach="2" exit-text="Exit-planen er dokumentert. Ingen har trengt den." />
<p class="evidence anim-item text-center mt-3">«Planlegg for å kunne bytte ut skyleverandør effektivt og med kjent ressursbruk og kostnad.» <span>NSM, Risiko 2026</span></p>

<!--
Overgang: «Og dette tar dere med dere.»

- Hver tenant eier sin egen GCP-organisasjon. Nav eier faktureringskontoen
- Klikk 2: en tenant kobler seg fra, og alt blir med. Det er bevisst kort nr. 2 («Din virksomhet») som kobler seg fra
- NSM Risiko 2026, s. 36: «Planlegg for å kunne bytte ut skyleverandør effektivt og med kjent ressursbruk og kostnad dersom behovet skulle oppstå.» https://nsm.no/getfile.php/1314962-1770630853/NSM/Filer/Dokumenter/Rapporter/Risiko%202026.pdf
- Exit-planen er dokumentert. Ingen har trengt den
-->

---
transition: view-transition
layout: default
clicks: 1
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Dette tar dere med dere</h1>

::default::
<TakeAway />

<!--
Overgang: «Men dere lurer sikkert på noe.»

- Klikk 1: tenanten går, og teknologien blir med: Kubernetes, containere, Postgres, Kafka, OpenSearch, Valkey, OpenTelemetry, Prometheus, Grafana, GitHub Actions
- Nais Postgres (CloudNativePG) og Nais Buckets er på vei, og gjør data mer flyttbare
- Stack Overflow Developer Survey: Postgres er mest brukte database, Docker mest brukte verktøy
-->

---
layout: default
clicks: 4
---

::header::
<div class="pillar-tag" style="--pc: #4a9be8"><span class="i-carbon-migrate" /> Suveren og autonom</div>
<h1 class="text-3xl font-bold">Det dere lurer på</h1>

::default::
<Objections />

<!--
Overgang: «Hvem bestemmer så hva som skjer med plattformen?»

- GOV.UK PaaS ble lagt ned 2023 (60+ virksomheter, 3 200 apper). Egen kjøreplattform, og leverandøren hadde ikke selv behov for den. https://gds.blog.gov.uk/2022/07/12/why-weve-decided-to-decommission-gov-uk-paas-platform-as-a-service/ og https://cloud.service.gov.uk
- Nais er Kubernetes, og Nav er den største tenanten (≈4 700 av 5 212 apper, Grafana 21. oktober 2026)
- Låsing: dere går ut med standarder. Avhengighet: vakt døgnet rundt med Googles support, 1–2 nye tenants per år
- Ingen formell SLA: 99,88 % målt i Nav siste 30 dager, feil i appene inkludert
-->

---
layout: default
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Hvem bestemmer</h1>
<p class="subtitle">Nais-teamet bestemmer veikartet, tenantene gir innspill på Naisdag</p>

::default::
<GovernanceLoop />

<!--
Overgang: «Når vi sier ja til én tenant, sier vi ja til alle.»

- Nais-teamet bestemmer veikartet
- Tenantene gir innspill på Naisdag
- 1–2 nye tenants per år
- På veikartet: Nais Postgres (CloudNativePG) og Nais Buckets
-->

---
layout: default
clicks: 3
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold mt-4">Bedre sammen</h1>
<p class="subtitle">Det én tenant trenger, får alle</p>

::default::
<ShareLoop :agencies="['Nav', 'SSB', 'Landbruksdirektoratet', 'Arbeidstilsynet', 'KS Digital', 'Novari']" :support="[
  { icon: 'i-carbon-logo-slack', title: 'Slack', text: 'Direkte kontakt med Nais-teamet' },
  { icon: 'i-carbon-document', title: 'docs.nais.io', text: 'Dokumentasjon og veiledninger' },
  { icon: 'i-carbon-badge', title: 'Champions', text: 'Champions i teamene' },
  { icon: 'i-carbon-education', title: 'Arbeidsøkter', text: 'Praktiske økter med Nais-teamet' },
  { icon: 'i-carbon-group', title: 'Naisdag', text: 'Tenantene møtes og gir innspill' },
]" />
<p class="evidence anim-item text-center mt-10">«Løse felles oppgaver én gang i fellesskap i stedet for hver for seg.» <span>KS, Altinget 10.06.2025</span></p>
<p class="evidence anim-item text-center mt-1">«Vi tar nå i bruk NAV sin skybaserte applikasjonsplattform NAIS som er basert på Google cloud.» <span>Landbruksdirektoratet, stillingsannonse</span></p>

<!--
Overgang: «Og dere får ikke bare hjelp fra oss. Utviklerne kan det allerede.»

- Forbedringer for én tenant kommer alle til gode (klikk 2: alle nodene blir grønne)
- Klikk 3: dere står ikke alene. Slack, docs.nais.io, champions i teamene, arbeidsøkter og Naisdag
- KS i Altinget 10.06.2025: «løse felles oppgaver én gang i fellesskap i stedet for hver for seg», https://www.altinget.no/artikkel/etterlysning-taktskifte-i-digitaliseringsarbeidet
- Sitat fra Landbruksdirektoratets stillingsannonse: https://www.finn.no/451519458
-->

---
layout: default
clicks: 2
---

::header::
<div class="pillar-tag" style="--pc: #ff5c6c"><span class="i-carbon-partnership" /> Et Nais-fellesskap</div>
<h1 class="text-3xl font-bold">Utviklerne kan det allerede</h1>

::default::
<DevFlow />

<!--
Overgang: «Så hva koster det?»

- Anslag: ~800 utviklere i Nav i dag; antatt ~40 % konsulenter med ~3 års oppdrag (~100 nye i året) og ~8 % turnover blant ansatte (~40 nye i året); ~9 år i produksjon → ~1 300 som har gått videre + ~800 i dag ≈ 2 000. Utviklere hos de andre tenantene er ikke med
- Rekruttering blir enklere, og opplæringen kortere
- Konsulenter kjenner plattformen, og utviklere etterspør den
- De fleste store konsulentselskapene har folk med Nais-erfaring
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hva koster det</h1>
<p class="subtitle">Dere betaler for det dere bruker, pluss 200 000 kr i året</p>

::default::
<div class="price">
  <div class="anim-item price-card">
    <span class="i-carbon-cloud" />
    <b>Egen infrastruktur og forbruk</b>
    <small>Til selvkost, uten påslag. Teamene ser kostnaden i Console.</small>
  </div>
  <div class="anim-item plus">+</div>
  <div class="anim-item price-card">
    <span class="i-carbon-receipt" />
    <b>200 000 kr i året</b>
    <small>Administrativt gebyr: en liten del av Nais-teamet, administrasjon og videre utvikling</small>
  </div>
</div>
<p class="anim-item text-center mt-6">Plattformen er allerede bygd. Det Nav allerede bærer, betaler dere ikke for.</p>

<!--
Overgang: «Hva betyr selvkost her?»

- Tenanten betaler egen infrastruktur og fakturerbart forbruk til selvkost, uten påslag
- I tillegg et administrativt gebyr på 200 000 kr i året. Det dekker en liten del av Nais-teamet på 15, ekstra administrasjon og videre utvikling av Nais
- Plattformen er allerede bygd og videreutvikles av Nav. Det tenantene ikke betaler for, er det Nav allerede bærer
- Nav fakturerer hver tenant månedlig til selvkost. Nav eier faktureringskontoen
-->

---
transition: view-transition
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hva selvkost betyr</h1>

::default::
<SelfCostSplit />

<!--
Overgang: «Hvem kan så bli med?»

- Det tenanten ser og betaler: egen infrastruktur og forbruk til selvkost, pluss 200 000 kr i året. Under vannflaten: det Nav allerede bærer, det meste av teamet og utviklingen
- Størrelsene er illustrasjon, ikke tall
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
<p class="anim-item text-center mt-6 opacity-80">NaaS passer ikke for skjermingsverdig informasjon eller systemer som må kjøre i eget datasenter.</p>

<!--
Overgang: «Slik kommer dere i gang.»

- Egenregi i staten: kommuner, statsforetak og private kan ikke bruke NaaS
- Ikke for skjermingsverdig informasjon eller systemer som må kjøre i eget datasenter
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Veien inn</h1>

::default::
<JourneyPath :burst="false" :items="[
  { icon: 'i-carbon-presentation-file', title: 'Demo', description: '1 time' },
  { icon: 'i-carbon-chemistry', title: 'Pilot', description: '4–8 uker' },
  { icon: 'i-carbon-migrate', title: 'Migrering', description: '3–12 måneder' },
  { icon: 'i-carbon-checkmark-outline', title: 'Drift', description: 'Dere utvikler, vi drifter' },
]" />
<p class="anim-item text-center font-bold">Første app i prod: noen uker etter avtale</p>

<!--
Overgang: «Og hvis det ikke passer: dere kan gå når som helst, med alt.»

- Demo, pilot, migrering, drift
- Varighet er anslag: demo 1 time, pilot 4–8 uker, migrering 3–12 måneder. Første app i prod noen uker etter avtale (anslag)
-->

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold">Book en demo eller pilot</h1>
<p class="subtitle">Dere kan gå når som helst, med alt</p>

::default::
<div class="flex items-center justify-center gap-10 w-full">
  <div class="anim-item qr-tile"><img src="./assets/kontakt-qr.svg" alt="QR-kode til e-post nais@nav.no" /></div>
  <div class="anim-item text-left">
    <p class="text-2xl font-bold" style="font-family: Poppins">Book demo eller pilot: nais@nav.no</p>
    <p class="text-xl mt-3"><a href="mailto:nais@nav.no" class="text-accent font-bold">nais@nav.no</a> · <a href="https://nais.io" class="text-accent">nais.io</a></p>
  </div>
</div>

<!--
Overgang: «Takk.»

- Utviklerne får fart fra dag én, tenanten beholder eierskapet og kan gå når som helst, og prisen er selvkost
- QR-koden åpner e-post til nais@nav.no (som «Kontakt oss» på nais.io)
-->
