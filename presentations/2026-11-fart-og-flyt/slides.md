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

