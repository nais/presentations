---
layout: cover
routerMode: hash
transition: fade
---

::logo::
<CoverLogo />

::default::
<h1 class="text-5xl font-black">Slipp utviklerne fri</h1>
<p class="subtitle text-xl mt-4">Slik skapte vi ekstrem fart og flyt i Nav. Lett å gjøre rett.</p>
<p class="text-sm mt-6 opacity-70">Hans Kristian Flaatten · Nais-teamet i Nav</p>

<!--
Overgang: «Jeg starter med et tall.»

- Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav
- Tesen: lett å gjøre rett. Den kommer tilbake på slutten
- Publikum er blandet: ledere og utviklere. Ingen demo, bare animasjoner
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">≈ 9 000 ganger i uka</h1>
<p class="subtitle">Så ofte setter teamene i Nav noe i produksjon</p>

::default::
<div class="flex justify-center items-center gap-12 w-full">
  <CountUp number="9000" prefix="≈" label="prodsettinger per uke" />
  <div class="anim-item stat-static"><StatHighlight number="150" label="utviklingsteam (anslag)" /></div>
</div>

<!--
Overgang: «Slik var det ikke alltid.»

- ≈ 9 000 prodsettinger per uke i Nav, bare produksjon (Mimir, oktober 2026)
- Eneste gang tallet teller opp. Det kommer tilbake på slide 14
- 150 utviklingsteam er et anslag. 154 team har deployet siste 28 dager (Mimir), men ikke alle er utviklingsteam
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Veien til produksjon, før</h1>
<p class="subtitle">Fire store releaser i året</p>

::default::
<div class="flex flex-col gap-8 w-full">
  <FlowChain tone="before" :nodes="[
    { icon: 'i-carbon-enterprise', label: 'Leverandør', sub: 'Bygger etter kontrakt', stat: 'uker' },
    { icon: 'i-carbon-document', label: 'Bestilling', sub: 'Skjema til forvaltning', stat: 'dager' },
    { icon: 'i-carbon-ticket', label: 'Drift', sub: 'Ticket i køen', stat: 'uker' },
    { icon: 'i-carbon-events', label: 'CAB', sub: 'Godkjenning i neste møte', stat: 'neste møte' },
    { icon: 'i-carbon-calendar', label: 'Releasevindu', sub: 'Fire ganger i året', stat: 'måneder' },
  ]" />
  <div v-click="4" class="tally">5 overleveringer · måneder</div>
</div>

<!--
Overgang: «Hva betydde det for én liten endring?»

- Generisk bilde av hvordan det var i Nav før omleggingen, ikke en bestemt sak
- Klikk 1–4: endringen går fra ledd til ledd. Hvert ledd er en overlevering til noen andre
- Ventetiden per ledd er omtrentlig. Poenget er at den summeres
- Fire store releaser i året var normalen
-->

---
layout: default
clicks: 1
---

::header::
<h1 class="text-3xl font-bold">En liten endring</h1>
<p class="subtitle">Én linje tekst, rettet på en dag</p>

::default::
<div class="grid grid-cols-2 gap-8 items-center w-full max-w-4xl mx-auto">
  <div class="anim-item pg-code">
    <pre><span class="text-red-400">- Du må sende søknaden innen 14 dagar.</span>
<span class="text-green-400">+ Du må sende søknaden innen 14 dager.</span></pre>
  </div>
  <div class="anim-item night">
    <p><b>Dag 1</b> En bruker melder feil i teksten</p>
    <p><b>Dag 2</b> Rettet. Venter på neste release</p>
    <p v-click="1"><b>Dag 90</b> Rettelsen er i produksjon</p>
  </div>
</div>
<div class="anim-item wait-bar w-full max-w-4xl mx-auto mt-8">
  <div v-click="1" class="wait-fill" />
  <span>Ventetid</span>
</div>

<!--
Overgang: «Så snudde Nav.»

- Generisk eksempel, ikke en bestemt sak. Ett tegn i en tekst
- Rettelsen tok en dag. Ventetiden var resten
- Klikk 1: stolpen fylles. Endringen lå klar i flere måneder
-->

---
layout: two-cols
clicks: 1
---

::header::
<h1 class="text-3xl font-bold">Vendepunktet</h1>
<p class="subtitle">Nav tok utviklingen inn i egne team</p>

::left::
<div class="turn-col muted">
  <h3>Før</h3>
  <div><span class="i-carbon-enterprise" /> Leverandøren bygger</div>
  <div><span class="i-carbon-ticket" /> Drift prodsetter</div>
  <div><span class="i-carbon-calendar" /> Releasevinduet bestemmer når</div>
</div>

::right::
<div v-click="1" class="turn-col">
  <h3><span class="anchor-hex small-hex" data-anchor="hex">Team</span> Etter</h3>
  <div><span class="i-carbon-group" /> Egne team i Nav</div>
  <div><span class="i-carbon-flow" /> Teamet eier veien fra idé til produksjon</div>
  <div><span class="i-carbon-time" /> Teamet bestemmer når</div>
</div>

<!--
Overgang: «Det krevde at noen ga fra seg kontroll.»

- Nav flyttet utviklingen fra leverandører til egne tverrfaglige team (insourcing, fra midten av 2010-tallet)
- Nais har vært i produksjon siden 2016 og ble laget for at teamene skal eie veien selv
- Klikk 1: høyre side. Hexen er teamet, den følger oss videre
-->

---
layout: default
clicks: 2
---

::header::
<h1 class="text-3xl font-bold">Tillit og eierskap</h1>
<p class="subtitle">Noen måtte gi fra seg kontroll, og noen måtte ta den</p>

::default::
<div class="hr-scale">
  <div v-click="1" class="hr-col hr-press">
    <h3 class="hr-head">Ledelsen ga fra seg</h3>
    <div><span class="i-carbon-events" /><span><b>CAB</b> og godkjenningsmøter</span></div>
    <div><span class="i-carbon-calendar" /><span><b>Releasevinduer</b></span></div>
    <div><span class="i-carbon-ticket" /><span><b>Bestilling</b> via drift</span></div>
    <div><span class="i-carbon-list-checked" /><span><b>Detaljstyring</b> av hvordan teamene jobber</span></div>
  </div>
  <div v-click="2" class="hr-mid"><span class="i-carbon-arrow-right" /></div>
  <div v-click="2" class="hr-col hr-room">
    <h3 class="hr-head">Teamene tok</h3>
    <div><span class="i-carbon-rocket" /><span><b>Prodsetting</b> når de selv vil</span></div>
    <div><span class="i-carbon-activity" /><span><b>Drift</b> av egne apper</span></div>
    <div><span class="i-carbon-currency" /><span><b>Kostnad</b> for det de bruker</span></div>
  </div>
</div>

::footer::
<span v-click="2" class="lesson" style="--pc: #ff5c6c">Tillit framfor kontroll</span>

<!--
Overgang: «Eierskap betyr også regningen.»

- Klikk 1: det ledelsen ga fra seg. Klikk 2: det teamene tok
- Det er en lederbeslutning, ikke en teknisk. Plattformen gjør det mulig, men noen må slippe taket
- Lærdom: tillit framfor kontroll
-->

---
layout: default
clicks: 1
---

::header::
<h1 class="text-3xl font-bold">Teamet eier kostnaden</h1>
<p class="subtitle">Teamet ser prisen i Console og endrer den selv</p>

::default::
<CostLoop />

::footer::
<span v-click="1" class="lesson" style="--pc: #ff5c6c">Den som bestemmer, ser prisen</span>

<!--
Overgang: «Og eierskap betyr natta.»

- Klikk 1 spiller hele løkka: teamet merger en PR som gjør databasen større, og kostnaden stiger i Console. Teamet ser det og sender en ny PR med riktig størrelse
- Feltene er fra Application-spec (gcp.sqlInstances tier og diskSize). Kronebeløpene er illustrasjon
- Kostnad per team vises i Console (console.nais.io)
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Kl. 03.00</h1>
<p class="subtitle">Nais har vakt for plattformen. Teamene eier appene sine.</p>

::default::
<div class="flex flex-col gap-8 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-notification', label: 'Varsel', sub: 'En node i plattformen svikter' },
    { icon: 'i-carbon-phone', label: 'Nais-vakt', sub: 'Vakthavende i Nais-teamet varsles' },
    { icon: 'i-carbon-cloud', label: 'Google', sub: 'Døgnåpen support ved behov' },
    { icon: 'i-carbon-checkmark', label: 'Løst', sub: 'Appene kjørte hele tiden' },
  ]" />
  <div v-click="3" class="text-center">
    <div class="text-5xl font-bold" style="font-family: Poppins; color: var(--nais-success)">99,88 %</div>
    <p class="mt-1">ingress-svar uten 5xx i Nav, siste 30 dager. Målt, ikke SLA.</p>
  </div>
</div>

::footer::
<span v-click="3" class="lesson" style="--pc: #ff5c6c">Tydelig ansvarsdeling</span>

<!--
Overgang: «Hvordan holder et team alt dette i hodet? Det gjør det ikke.»

- Nais har vakt døgnet rundt for plattformen, med Googles døgnåpne support ved behov
- Skillet: feiler en app på grunn av egen kode, er det teamets jobb å rette
- Klikk 1–3: varselet går fra plattformen via Nais-vakten til løst
- 99,88 %: målt i Mimir, Nav, siste 30 dager. Inkluderer feil i appene selv. Ingen SLA
-->

---
transition: view-transition
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Ett manifest, ferdig oppsett</h1>
<p class="subtitle">Det utvikleren slipper å vite</p>

::default::
<ManifestDeep />

::footer::
<span v-click="3" class="lesson" style="--pc: #FF9100">Asfaltert vei</span>

<!--
Overgang: «Og når teamet merger?»

- Kognitiv last: teamet beskriver hva appen trenger, ikke hvordan det settes opp. Ingen Terraform, ingen egen infrastruktur
- Klikk 1: inn (adresse, innlogging, hvem som får kalle appen). Klikk 2: data (database, bucket, Kafka). Klikk 3: innsikt (logger, metrikker, traces)
- Utvikleren ber en KI-agent om appen. Agenten bruker Nais MCP-serveren i Nais CLI og den åpne dokumentasjonen
- Feltnavn fra Application-eksempelet i nais/doc (docs.nais.io)
-->

---
layout: default
clicks: 3
---

::header::
<h1 class="text-3xl font-bold">Fra pull request til produksjon</h1>
<p class="subtitle">Samme endring som før</p>

::default::
<div class="flex flex-col gap-2 w-full">
  <PrFlow title="Rett skrivefeil i søknadsteksten" file="src/tekster.ts" :diff="[
    '- Du må sende søknaden innen 14 dagar.',
    '+ Du må sende søknaden innen 14 dager.',
  ]" />
  <div v-click="3" class="tally" style="font-size: 1.05rem; padding: 0.15rem 1rem">0 overleveringer · minutter</div>
</div>

::footer::
<span v-click="3" class="lesson" style="--pc: #FF9100">Ingen venting</span>

<!--
Overgang: «Men uten port, hvordan holder vi sikkerheten?»

- Samme rettelse som på slide 4. Speilet mot slide 3: null overleveringer, minutter i stedet for måneder
- Klikk 1: sjekker og godkjenning. Klikk 2: merge, så bygger nais/docker-build-push med SBOM og signering, og nais apply sender manifestet til prod. Klikk 3: PR-en viser at den er deployet
- Copilot-agenten åpner PR-en. Et menneske reviewer og merger
- Kilde for flyten: docs.nais.io, «Build and deploy»
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Sikkerheten ligger i veien</h1>
<p class="subtitle">Bygd inn, ikke bestilt</p>

::default::
<div class="flex flex-col gap-8 w-full">
  <FlowChain :nodes="[
    { icon: 'i-carbon-build-tool', label: 'Bygg', sub: 'All kode, også fra KI-agenter' },
    { icon: 'i-carbon-list-boxes', label: 'SBOM', sub: 'Lages automatisk' },
    { icon: 'i-carbon-certificate', label: 'Signering', sub: 'Signert og attestert' },
    { icon: 'i-carbon-scan', label: 'Sårbarheter', sub: 'Prioritert etter risiko' },
  ]" />
  <div v-click="4" class="mcp-tools auth-chips">
    <span class="i-carbon-password" /><code>ID-porten</code><code>Maskinporten</code><code>Entra ID</code><code>TokenX</code>
  </div>
</div>

::footer::
<span v-click="4" class="lesson" style="--pc: #FF9100">Sikkerhet i veien, ikke i en port</span>

<!--
Overgang: «Veien er et produkt, med brukere.»

- Klikk 1–3: hvert ledd skjer automatisk i bygget (nais/docker-build-push: SBOM i CycloneDX, signering og attestering)
- Sårbarheter prioriteres etter risiko: EPSS, KEV og om appen er eksponert mot internett (nais/api, 2026)
- Klikk 4: innlogging er også bygd inn. ID-porten, Maskinporten, Entra ID og TokenX skrus på i manifestet (docs.nais.io, auth)
- NSM Grunnprinsipper 2.1.4 og 3.1.1 hvis noen spør: https://nsm.no/grunnprinsipper-ikt
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Plattform som produkt</h1>
<p class="subtitle">Verktøykassa rundt appen</p>

::default::
<Toolbox mode="open" />

::footer::
<span v-click="4" class="lesson" style="--pc: #9b6fd6">Plattform som produkt</span>

<!--
Overgang: «Og for dem som liker terminalen.»

- Én bølge med skuffer per klikk (tre bølger), så alt på en gang
- Console, Nais CLI og MCP for kodeagenter ligger i Verktøy-skuffen, sammen med dokumentasjon og champions
- Champions: en eller flere i hvert team som følger med på Nais og deler videre
- Ingenting å bestille: alt står i manifestet eller i Console
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Og fra terminalen</h1>
<p class="subtitle">Nais CLI</p>

::default::
<CliDemo />

::footer::
<span class="lesson" style="--pc: #9b6fd6">Plattform som produkt</span>

<!--
Overgang: «Og alt dette er åpent.»

- Kommandoene spiller av seg selv: nais login, apply, app set replicas, vulnerability summary
- Kommandoene finnes i Nais CLI (github.com/nais/cli). Utdata er illustrasjon
- Plattformteamet behandler utviklerne som brukere: CLI, Console og dokumentasjon er produktet
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Åpenhet</h1>
<p class="subtitle">Det vi lager, deler vi</p>

::default::
<div class="card-row grid grid-cols-4 gap-5 w-full max-w-5xl mx-auto">
  <IconCard icon="i-carbon-logo-github" title="Kildekode" description="Plattformen er åpen kildekode på github.com/nais." />
  <IconCard icon="i-carbon-document" title="Dokumentasjon" description="Åpen for alle på docs.nais.io." color="blue" />
  <IconCard icon="i-carbon-logo-slack" title="#nais" description="Spørsmål og svar i åpen kanal, ikke i tickets." color="yellow" />
  <IconCard icon="i-carbon-globe" title="nais.io" description="Hva Nais er, og hvordan andre kan bruke den." color="go-blue" />
</div>

::footer::
<span class="lesson" style="--pc: #5cb2da">Del åpent</span>

<!--
Overgang: «Hva har det gitt?»

- Kildekoden ligger på github.com/nais, dokumentasjonen på docs.nais.io
- #nais på Slack: utviklerne spør, Nais-teamet og andre team svarer
- Åpenhet gjør at andre kan gjenbruke, og at feil blir funnet tidlig
-->

