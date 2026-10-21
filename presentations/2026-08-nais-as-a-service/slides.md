---
layout: cover
---

<h1 class="text-5xl font-black">Nais as a Service</h1>
<p class="subtitle text-xl mt-4">Gir fart og flyt på utviklingen av Norge</p>


---
layout: stats-grid
---

::header::
<h1 class="text-3xl font-bold">Nøkkeltall</h1>
<p class="subtitle">Nais as a Service på tvers av etatene</p>

::default::
<div class="flex flex-col items-center gap-5 w-full">
  <div class="flex justify-center gap-12">
    <CountUp number="4" label="Etater" />
    <CountUp number="5212" label="Applikasjoner" :delay="0.08" />
    <CountUp number="1270" label="Databaser (Cloud SQL)" :delay="0.16" />
    <CountUp number="1931" label="Kafka-topics" :delay="0.24" />
  </div>
  <TenantBars />
  <p class="anim-item text-sm opacity-70">I Nav: 150 team · 800 utviklere · 2 500 utrullinger per uke</p>
</div>

---
layout: none
---

<ClipSlide />

---
layout: default
clicks: 4
---

::default::
<DeployFlow />

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Nais-teamet</h1>

::default::
<div class="flex flex-col gap-4">
  <div class="anim-item text-xl text-center">Verktøykasse for autonome produktteam</div>
  <TeamWall />
</div>

---
layout: pillars
clicks: 6
---

::header::
<h1 class="text-3xl font-bold">Hva Nais har betydd for Nav</h1>

::default::
<BenefitStory :items="[
  { icon: 'i-carbon-building', title: 'Fundament', description: 'Fundament for autonome team' },
  { icon: 'i-carbon-growth', title: 'Rekruttering', description: 'Rekordår for rekruttering i 2023' },
  { icon: 'i-carbon-rocket', title: 'Fart og flyt', description: 'Nais gir fart og flyt i Nav' },
  { icon: 'i-carbon-user-speaker', title: 'Utviklere', description: 'Fornøyde utviklere' },
  { icon: 'i-carbon-group', title: 'Ansatte', description: 'Fornøyde ansatte' },
  { icon: 'i-carbon-face-satisfied', title: 'Brukere', description: 'Fornøyde brukere' },
]" />

---
layout: pillars
---

::header::
<h1 class="text-3xl font-bold">Utvikling i store virksomheter</h1>
<p class="subtitle">Med fokus på utvikleropplevelsen</p>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-cloud-app" title="Mer enn infrastruktur" description="Plattform er mer enn bare infrastruktur" />
  <IconCard icon="i-carbon-api" title="Selvbetjent" description="Selvbetjent og API-drevet" />
</div>

---
layout: pillars
---

::header::
<h1 class="text-3xl font-bold">Verktøykasse for utviklere</h1>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-document" title="Dokumentasjon" description="Levende dokumentasjon" />
  <IconCard icon="i-carbon-education" title="Opplæring" description="Opplæring og onboarding" />
  <IconCard icon="i-carbon-user-certification" title="Selvbetjening" description="Selvbetjening for team" />
  <IconCard icon="i-carbon-terminal" title="Console" description="Nais Console gir full oversikt" />
</div>

---
layout: cover
---

<h1 class="text-5xl font-black">Det er Nais å være utvikler i Nav</h1>
<p class="subtitle text-2xl mt-4 opacity-80">It is Nais to be a developer at Nav</p>


---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Bygget på teknologi som utviklere foretrekker</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Utprøvd og testet teknologi over mange år</li>
  <li>Topper Stack Overflow Developer Survey</li>
  <li>Ingen problematisk binding til enkeltteknologier</li>
  <li>Gjør det mulig å bytte leverandør</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">En plattform med flere lag</h1>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-chart-multitype" title="Ressursutnyttelse" description="Optimal bruk av ressurser" />
  <IconCard icon="i-carbon-server-proxy" title="Innebygd redundans" description="Skalering i alle lag" />
  <IconCard icon="i-carbon-data-base" title="Bunnsolid infrastruktur" description="Fundamentet systemet bygger på" />
  <IconCard icon="i-carbon-activity" title="Innsikt og overvåking" description="Full kontroll på applikasjonene" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Sikkerhet og overholdelse</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Separate, isolerte installasjoner for hver etat</li>
  <li>Sterke sikkerhetstiltak etter Google Clouds standarder</li>
  <li>Etater kan enkelt koble fra og overta installasjonen sin</li>
  <li>Risikovurderinger og avtaleverk i orden</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Integrasjon med eksisterende systemer</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Støtte for populære tjenester som ID-porten, Maskinporten og Entra ID</li>
  <li>Enkel integrasjon med andre systemer og skymiljøer (VPN)</li>
  <li>Trygg og sikker innlogging av brukere</li>
</ul>

---
layout: cover
---

<h1 class="text-5xl font-black">Nais as a Service (NaaS)</h1>
<p class="subtitle text-2xl mt-4">Samme gode Nais, men for andre</p>

<ul class="list-disc ml-8 mt-4 space-y-3 text-xl text-left inline-block">
  <li>Som en tjeneste, driftet av Nav</li>
  <li>Dere betaler bare for forbruket*</li>
  <li>Databehandleravtale direkte med Nav</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Forbruksbasert prising</h1>
<p class="subtitle">Dere betaler kun for det dere bruker</p>

::default::
<div class="grid grid-cols-2 gap-8">
  <AddOnCard class="anim-item" title="Basiskost for plattform" price="30 000 NOK/mnd" :benefits="['Management-cluster: 20 000 NOK', 'Applikasjons-cluster: 10 000 NOK (per cluster)']" />
  <AddOnCard class="anim-item" title="Eksempelapplikasjon" price="200 NOK/mnd*" :benefits="['3 pods (cpu = 0.1, minne = 256MB)', '1 database (cpu = 1, minne = 644MB)']" />
</div>

<div class="anim-item mt-8 p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
  <h3 class="font-bold text-lg mb-2">Et litt mer realistisk eksempel (Dev + Prod + Management)</h3>
  <p>30 applikasjoner og 10 databaser.</p>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Vår første suksesshistorie</h1>
<p class="subtitle">Statistisk sentralbyrå (SSB)</p>

::default::
<div class="card-row">
  <IconCard v-click icon="i-carbon-star-filled" title="Fornøyd bruker" description="SSB er en fornøyd bruker av NaaS" />
  <IconCard v-click icon="i-carbon-rocket" title="Økt smidighet" description="Mer smidig og raskere utrulling" />
  <IconCard v-click icon="i-carbon-piggy-bank" title="Lave kostnader" description="Betydelig lavere driftskostnader" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Hvem kan få Nais as a Service?</h1>

::default::
<div class="space-y-6 text-lg">
  <p class="text-center"><strong>NaaS tilbys innenfor egenregi i Staten</strong></p>
  
  <div class="grid grid-cols-2 gap-6">
  <div class="anim-item p-6 bg-green-50 rounded-xl border border-green-200 dark:bg-green-900/20 dark:border-green-800">
    <h3 class="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2"><span class="i-carbon-checkmark-filled text-2xl"></span> Kan benyttes av</h3>
    <ul class="list-disc ml-8 space-y-2">
      <li>Ordinære forvaltningsorganer (departement, direktorat, etater og tilsyn)</li>
      <li>Forvaltningsbedrifter og forvaltningsorganer med særskilte fullmakter og statlige ombud</li>
    </ul>
  </div>

  <div class="anim-item p-6 bg-red-50 rounded-xl border border-red-200 dark:bg-red-900/20 dark:border-red-800">
    <h3 class="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2"><span class="i-carbon-close-filled text-2xl"></span> Kan ikke benyttes av</h3>
    <ul class="list-disc ml-8 space-y-2">
      <li>Private foretak</li>
      <li>Kommuner</li>
      <li>Statsforetak</li>
    </ul>
  </div>
  </div>
</div>

---
layout: pillars
---

::header::
<h1 class="text-3xl font-bold">Gevinster ved å dele plattform</h1>

::default::
<HexRow :items="[
  { icon: 'i-carbon-rocket', title: 'Rask oppstart', description: 'Kom fort i gang med noe som allerede fungerer' },
  { icon: 'i-carbon-group', title: 'Kjent teknologi', description: 'Utviklere og konsulenter i Norge kjenner Nais' },
  { icon: 'i-carbon-share-knowledge', title: 'Deling på tvers', description: 'Etatene kan dele på tvers' },
  { icon: 'i-carbon-arrow-up-right', title: 'Fellesskap', description: 'Forbedringer kommer alle til gode' },
]" />

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Høy tilgjengelighet og pålitelighet</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Beredskap døgnet rundt er inkludert</li>
  <li>Automatisk skalering i alle lag av stacken</li>
  <li>Feiltolerant og redundant infrastruktur</li>
  <li>Full kontroll over infrastruktur med minimal risiko</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Verktøy som utviklere verden over elsker</h1>

::default::
<div class="flex flex-col gap-6 mt-8">
  <div class="anim-item text-2xl text-center">Utvikleropplevelse med DevOps</div>
  <ul class="list-disc ml-16 mt-4 space-y-4 text-xl">
    <li>Plattform bygd for DevOps og raskere leveranser</li>
    <li>Tverrfunksjonelle team med fullt eierskap</li>
    <li>Automatisering reduserer manuelle operasjoner</li>
  </ul>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Moderne applikasjonsarkitektur med 12-factor apps</h1>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-flash" title="Enklere utvikling" description="Enklere applikasjonsutvikling" />
  <IconCard icon="i-carbon-delivery" title="Utrulling" description="Rask utrulling og rollback" />
  <IconCard icon="i-carbon-chart-line" title="Skalering" description="Skalerer automatisk etter behov" />
  <IconCard icon="i-carbon-machine-learning" title="CI/CD" description="Innebygde CI/CD-pipelines" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Skalerbarhet uten overlast</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Skaler applikasjoner automatisk basert på etterspørsel</li>
  <li>Du trenger ikke å administrere fysisk infrastruktur</li>
  <li>Betal for ressursene du bruker, ikke mer</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Bygger på ti år med utvikling</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>100 års utviklingsinnsats over 10 år</li>
  <li>Videreutvikles hele tiden av teamet i Nav</li>
  <li>Regelmessige oppdateringer og nye funksjoner</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Full kontroll over skymiljøet ditt</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Uavhengige installasjoner sikrer datasuverenitet</li>
  <li>Koble fra og drift infrastrukturen selv når som helst</li>
  <li>Full oversikt over applikasjoner, ressurser og kostnader</li>
  <li>Ingen avhengighet av en tredjepart for skydrift</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">24/7 support og hendelsesrespons</h1>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-headset" title="Beredskap" description="Nais-teamet har døgnbemannet beredskap" />
  <IconCard icon="i-carbon-partnership" title="Samarbeid" description="Samarbeid med Googles 24/7 responsteam" />
  <IconCard icon="i-carbon-time" title="Rask løsning" description="Kritiske hendelser løses raskt" />
  <IconCard icon="i-carbon-checkmark" title="Inkludert" description="Inkludert i NaaS" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Kostnadseffektivitet</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Dere betaler for forbruk, så ingen ressurser går til spille</li>
  <li>Minimalt administrasjonsgebyr</li>
  <li>Betydelige kostnadsbesparelser i forhold til tradisjonelle plattformer</li>
  <li>Bra for miljøet <span class="i-carbon-tree inline-block align-middle text-nais-success"></span></li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Bygg for fremtiden</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Bygd på åpne standarder</li>
  <li>Videreutvikles av fellesskapet rundt åpen kildekode</li>
  <li>Langsiktig veikart etter myndighetenes behov</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Vanlige bekymringer</h1>
<p class="subtitle">Kontroll og fleksibilitet</p>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Noen interessenter frykter tap av kontroll</li>
  <li>NaaS gir full fleksibilitet i driften</li>
  <li>Isolerte installasjoner sikrer full autonomi</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Vanlige bekymringer</h1>
<p class="subtitle">Sikkerhet</p>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-locked" title="Tilgangskontroll" description="Isolerte miljøer med strenge tilgangskontroller" />
  <IconCard icon="i-carbon-security" title="Beste praksis" description="Følger Google Clouds anbefalte praksis" />
  <IconCard icon="i-carbon-certificate" title="Samsvar" description="Følger myndighetenes sikkerhetsstandarder" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Nais arkitekturoversikt</h1>

::default::
<div class="grid grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
  <div class="anim-item">
    <h3 class="font-bold text-xl mb-4">Clustere og nettverk</h3>
    <ul class="list-disc ml-6 space-y-2">
      <li>Management- og app-clustere</li>
      <li>Load balancers</li>
      <li>VPN og nettverk</li>
    </ul>
  </div>
  <div class="anim-item">
    <h3 class="font-bold text-xl mb-4">Sikkerhet og tillit</h3>
    <ul class="list-disc ml-6 space-y-2">
      <li>Network policies</li>
      <li>Security policies</li>
      <li>Innlogging for brukere</li>
    </ul>
  </div>
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Høy tilgjengelighet og feiltoleranse</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Innebygd redundans for kritiske tjenester</li>
  <li>Geografisk failover</li>
  <li>Automatisk failover ved driftsavbrudd</li>
  <li><strong>99,95–99,99 %</strong> oppetidsgaranti</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Nais: Optimalisert for DevOps</h1>

::default::
<div class="card-row">
  <IconCard icon="i-carbon-continuous-integration" title="CI/CD" description="Integrert med CI/CD-pipelines" />
  <IconCard icon="i-carbon-chart-evaluation" title="Overvåking" description="Overvåkings- og observerbarhetsverktøy inkludert" />
  <IconCard icon="i-carbon-collaborate" title="Samarbeid" description="Enkelt samarbeid på tvers av utvikling og drift" />
</div>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Slik migrerer dere til NaaS</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Ingen nedetid under migrering</li>
  <li>Full støtte fra Nais-teamet</li>
  <li>Dere kan migrere trinnvis</li>
  <li>Direkte supportkanal på Slack</li>
</ul>

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Opplæring og onboarding</h1>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl">
  <li>Omfattende onboarding og opplæringsressurser</li>
  <li>Dokumentasjon som utviklere elsker</li>
  <li>Workshops og praktiske økter med Nais-teamet</li>
  <li>Løpende støtte mens dere lærer</li>
  <li>Nais Champions-program og erfaringsutveksling</li>
</ul>

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold">Neste steg</h1>
<p class="subtitle">Hvordan komme i gang?</p>

::default::
<ul class="list-disc ml-8 mt-8 space-y-4 text-xl text-left">
  <li>Få en teknisk demo av Nais</li>
  <li>Utforsk et demomiljø som er skreddersydd for dine behov</li>
  <li>Bli med i vårt pilotprogram og se fordelene på egen hånd</li>
  <li class="mt-8 font-bold text-nais-accent">Etter 12 måneder med Nais lager vi en episode av Plattformpodden</li>
</ul>

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold">Oppsummering</h1>

::default::
<div class="card-row text-left">
  <IconCard icon="i-carbon-cloud" title="Solid plattform" description="NaaS: En kostnadseffektiv, skalerbar og sikker skyplattform" />
  <IconCard icon="i-carbon-unlocked" title="Ingen leverandørlåsing" description="Fullstendig isolerte miljøer" />
  <IconCard icon="i-carbon-trophy" title="Fungerer i praksis" description="I bruk hos Nav og Statistisk sentralbyrå" />
</div>
