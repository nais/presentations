---
theme: default
title: 'nav-fleet: en felles plattform for KI-agenter i Nav'
htmlAttrs:
  lang: 'no'
transition: slide-left
mdc: true
layout: cover
routerMode: hash
fonts:
  sans: 'Inter'
  serif: 'Poppins'
  mono: 'JetBrains Mono'
---

::logo::
<svg class="sky" viewBox="0 0 980 552" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <linearGradient id="sky-bg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#fffdf9"/><stop offset=".4" stop-color="#fbfbf9"/><stop offset="1" stop-color="#d9eafb"/></linearGradient>
    <pattern id="sky-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r=".75" fill="#cbd5e1"/></pattern>
    <linearGradient id="sky-fade" gradientUnits="userSpaceOnUse" x1="0" y1="10" x2="0" y2="130"><stop offset="0" stop-color="#0067c5" stop-opacity=".75"/><stop offset="1" stop-color="#0067c5" stop-opacity="0"/></linearGradient>
    <line id="sky-trail" x1="0" y1="10" x2="0" y2="130"/>
    <filter id="sky-soft" x="-5%" y="-30%" width="110%" height="160%"><feGaussianBlur stdDeviation="5"/></filter>
    <mask id="sky-reveal" maskUnits="userSpaceOnUse" x="-90" y="0" width="180" height="320">
      <g stroke="#ffffff" stroke-width="8">
        <line class="sky-draw" x1="0" y1="10" x2="0" y2="130" pathLength="1"/>
        <line class="sky-draw" x1="-31" y1="64" x2="-31" y2="184" pathLength="1"/>
        <line class="sky-draw" x1="31" y1="64" x2="31" y2="184" pathLength="1"/>
        <line class="sky-draw" x1="-62" y1="117" x2="-62" y2="237" pathLength="1"/>
        <line class="sky-draw" x1="0" y1="117" x2="0" y2="237" pathLength="1"/>
        <line class="sky-draw" x1="62" y1="117" x2="62" y2="237" pathLength="1"/>
      </g>
    </mask>
  </defs>
  <rect width="980" height="552" fill="url(#sky-bg)"/>
  <rect width="980" height="552" fill="url(#sky-dots)" opacity=".5"/>
  <g class="sky-cloud back" fill="#e3ebf5" filter="url(#sky-soft)"><ellipse cx="-90" cy="500" rx="120" ry="38"/><ellipse cx="110" cy="488" rx="140" ry="44"/><ellipse cx="330" cy="500" rx="120" ry="36"/><ellipse cx="520" cy="484" rx="150" ry="48"/><ellipse cx="740" cy="498" rx="130" ry="38"/><ellipse cx="930" cy="480" rx="150" ry="50"/><ellipse cx="1100" cy="500" rx="110" ry="36"/><rect x="-160" y="500" width="1300" height="100"/></g>
  <g class="sky-x"><g class="sky-y"><g class="sky-bob"><g transform="translate(860 95)"><g class="sky-turn" transform="rotate(45)">
    <g class="sky-trails" mask="url(#sky-reveal)">
      <use href="#sky-trail" x="0" y="0"/>
      <use href="#sky-trail" x="-31" y="54"/>
      <use href="#sky-trail" x="31" y="54"/>
      <use href="#sky-trail" x="-62" y="107"/>
      <use href="#sky-trail" x="0" y="107"/>
      <use href="#sky-trail" x="62" y="107"/>
    </g>
    <g>
      <FleetShip x="0" y="0" scale="1.2" class="lead"/>
      <FleetShip x="-31" y="54" scale="1.2"/>
      <FleetShip x="31" y="54" scale="1.2"/>
      <FleetShip x="-62" y="107" scale="1.2"/>
      <FleetShip x="0" y="107" scale="1.2"/>
      <FleetShip x="62" y="107" scale="1.2"/>
    </g>
  </g></g></g></g></g>
  <g class="sky-cloud mid" fill="#f0f4fa" filter="url(#sky-soft)"><ellipse cx="-40" cy="522" rx="130" ry="34"/><ellipse cx="190" cy="514" rx="120" ry="38"/><ellipse cx="400" cy="526" rx="140" ry="32"/><ellipse cx="620" cy="512" rx="130" ry="40"/><ellipse cx="830" cy="526" rx="120" ry="32"/><ellipse cx="1030" cy="516" rx="130" ry="38"/><rect x="-160" y="524" width="1300" height="76"/></g>
  <g class="sky-cloud front" fill="#ffffff" filter="url(#sky-soft)"><ellipse cx="-100" cy="548" rx="120" ry="26"/><ellipse cx="90" cy="542" rx="130" ry="30"/><ellipse cx="300" cy="550" rx="120" ry="24"/><ellipse cx="500" cy="540" rx="140" ry="32"/><ellipse cx="720" cy="550" rx="120" ry="26"/><ellipse cx="910" cy="542" rx="130" ry="30"/><ellipse cx="1090" cy="550" rx="110" ry="26"/><rect x="-160" y="548" width="1300" height="52"/></g>
</svg>

::default::
<p class="cover-kicker font-mono">PLAN OG VISJON · UTKAST TIL DISKUSJON</p>
<img src="/icons/fleet/nav-fleet.svg?v=8" alt="" class="cover-mark" />
<h1 class="cover-title">nav-fleet</h1>
<p class="cover-tagline">Himmelen er grensen.<br>Mennesket har kursen.</p>
<p class="cover-sub">En felles plattform for KI-agenter i produksjon</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvorfor trenger vi dette?»

- Dette er en plan og en visjon. Ingenting er vedtatt
- Rekkefølgen: chatten som toppen av isfjellet, ett spørsmål gjennom Fleet, behovet, det som virker i dag, visjonen, økosystemet, modulene, identitet, KI-grunnmuren, seks typer agenter, første steg, veikartet og åpne spørsmål
- Navnet: nav-fleet, til daglig Fleet, på linje med Nais, Nada og Aksel. nav-pilot var én pilot og de første forsøkene. Fleet er en flåte i produksjon, og plattformen er flåtestyringen. Navnet fungerer på norsk og engelsk
- Fleet er en egen plattform. Den bruker Nais der det passer og har egen infrastruktur for agentsandkassene. Nais er én av flere som kan bruke den. Derfor har presentasjonen ingen Nais-profil
- Modulnavnene (fleet-gateway, fleet-control, fleet-runtime, fleet-orchestrator, fleet-radar og fleet-sdk) og adressen fleet.nav.no er forslag
- Der notatene sier «vår vurdering», er det forfatterens egen analyse, ikke en kilde. Der lysbildene sier «visjon», «forslag» eller «hypotese», er det ikke planlagt eller avtalt
- Navnesjekk 16. november 2026: Et søk i reponavn i navikt ga to treff på «fleet», navikt/fleet («Exploratory operation») og navikt/atom-fleet (forsøk med Elastic Fleet). Repoet navikt/nav-fleet finnes ikke
- Kjente navn utenfor Nav: Rancher Fleet (GitOps for Kubernetes), Fleet (enhetsstyring, fleetdm) og JetBrains Fleet. Vi har ikke sjekket varemerker eller Navs interne systemkatalog
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Chatten er bare toppen av isfjellet</h1>
<p class="subtitle">En tenkt app med KI-assistent. Fleet tar seg av det som ligger under vannlinjen <span class="chip amber align-middle ml-2">Visjon etter fase 3</span></p>

::default::
<div class="tip">
  <BrowserWindow url="saksbehandling.intern.nav.no/sak/4711" class="tip-win" role="img" aria-label="Skisse av en tenkt saksbehandlingsapp med en KI-assistent i et sidepanel. Fem nummererte punkter i chatten svarer til fem byggeklosser i Fleet: fleet-gateway handler på vegne av Kari, fleet-control slipper bare til verktøy agenten har lov til, fleet-runtime gir egen sandkasse per bruker, fleet-orchestrator stopper brev uten at Kari sier ja, og fleet-radar viser logg, sporing og kostnad.">
    <div class="km-top">
      <strong>Saksbehandling</strong>
      <span class="on">Sak 4711</span>
      <span>Dokumenter</span>
      <span class="km-login">Kari N. <b class="pin a-fade" style="--d: 0.9s">1</b></span>
    </div>
    <div class="ch">
      <div class="ch-case">
        <h2>Sak 4711</h2>
        <dl><dt>Status</dt><dd>Under behandling</dd><dt>Mottatt</dt><dd>3. november</dd><dt>Dokumenter</dt><dd>7</dd></dl>
        <div class="ch-doc"></div><div class="ch-doc short"></div><div class="ch-doc"></div><div class="ch-doc short"></div>
      </div>
      <div class="ch-chat">
        <div class="ch-head"><span class="i-carbon-chat-bot" /> Assistent <b class="pin a-fade" style="--d: 1.5s">3</b></div>
        <p class="ch-user a-rise" style="--d: 0.2s">Oppsummer saken og foreslå neste steg.</p>
        <p class="ch-tool a-fade" style="--d: 0.45s"><span class="i-carbon-document-multiple-01" /> Leser 7 dokumenter <b class="pin a-fade" style="--d: 1.2s">2</b></p>
        <p class="ch-bot a-rise" style="--d: 0.6s">Søknaden mangler legeerklæring. Jeg foreslår å be om den.</p>
        <div class="ch-approve a-rise" style="--d: 0.75s"><span>Sende brev til søkeren?</span><u>Godkjenn</u><i>Avvis</i><b class="pin a-fade" style="--d: 1.8s">4</b></div>
        <p class="ch-foot">KI kan ta feil · samtalen logges <b class="pin a-fade" style="--d: 2.1s">5</b></p>
      </div>
    </div>
  </BrowserWindow>
  <div class="tip-stack">
    <div class="tip-see"><span class="i-carbon-user-avatar" /><div><strong>Det brukeren ser</strong>Chatten i teamets egen app</div><em>teamet bygger</em></div>
    <div class="tip-water"><span>vannlinjen</span></div>
    <div class="tip-fleet a-rise" style="--d: 0.9s">
      <div class="tip-fleet-head"><img src="/icons/fleet/nav-fleet.svg?v=8" alt="" /><strong>nav-fleet</strong><em>felles for alle team</em></div>
      <ol>
        <li class="a-rise" style="--d: 0.9s"><b class="pin">1</b><span>Handler på vegne av Kari</span><code>fleet-gateway</code></li>
        <li class="a-rise" style="--d: 1.2s"><b class="pin">2</b><span>Bare verktøy agenten har lov til</span><code>fleet-control</code></li>
        <li class="a-rise" style="--d: 1.5s"><b class="pin">3</b><span>Én isolert sandkasse per bruker</span><code>fleet-runtime</code></li>
        <li class="a-rise" style="--d: 1.8s"><b class="pin">4</b><span>Ingen brev uten at Kari sier ja</span><code>fleet-orchestrator</code></li>
        <li class="a-rise" style="--d: 2.1s"><b class="pin">5</b><span>Logg og kostnad for hvert steg</span><code>fleet-radar</code></li>
      </ol>
    </div>
    <div class="tip-base a-fade" style="--d: 2.4s">KI-modeller · verktøy og data i Nav · Nais</div>
  </div>
</div>
<p class="footnote tight a-fade" style="--d: 2.6s">Uten Fleet bygger hvert team alt under vannlinjen selv. Med Fleet bygger teamet chatten og agenten sin. Resten er felles.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
- Svar på spørsmålet «er ikke dette bare en chat på en side?». Chatvinduet er enkelt. Det som gjør det trygt å sette i produksjon, ligger under vannlinjen
- Gå gjennom punktene i rekkefølge: hvert nummer i chatten svarer til en byggekloss i Fleet
- Punkt 2: fleet-control vet hva agenten har lov til. At agenten bare ser Karis saker, følger av Karis token og tilgangsstyringen i saksarkivet. Rettighetene er snittet av det Kari og agenten har lov til
- Punkt 4: fleet-orchestrator med felles regler for godkjenning kommer i fase 3. Til da håndhever fleet-gateway at skriving krever godkjenning
- Overgang: «Hva skjer egentlig under vannlinjen når Kari trykker enter?»
- Saksbehandling er visjon etter fase 3. Det krever egen modellvei, risikovurdering og juridisk avklaring, se veikartet. Vi bruker eksemplet fordi det er her Navs oppdrag ligger
- Appen, saken og navnet Kari er oppdiktet. Det virkelige første eksempelet er aksel-studio, se lysbildet «Første steg»
- Modulene til høyre er forslag. Ingenting av Fleet finnes ennå
- Punkt 1 og 2 henger sammen: fleet-control bestemmer hva agenten har lov til, fleet-gateway håndhever det og gjør token exchange
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet passer på hvert steg</h1>
<p class="subtitle">Ett spørsmål, fem steg under vannlinjen <span class="chip amber align-middle ml-2">Visjon etter fase 3</span></p>

::default::
<svg class="dg seq" viewBox="0 0 880 340" role="img" aria-label="Sekvensdiagram i fem steg. 1: Kari spør i appen, og agenten i fleet-runtime får spørsmålet og et kortlivet token for Kari i Karis sandkasse. 2: Agenten spør modellen gjennom fleet-gateway, som står for modelltilgang og kvote senere. 3: Agenten henter dokumenter gjennom fleet-gateway, og fleet-control sjekker at agenten har lov. 4: Agenten foreslår å sende brev, og Kari sier ja gjennom fleet-orchestrator. 5: Agenten sender brevet gjennom fleet-gateway, som sjekker godkjenningen, og sandkassen stoppes. Nederst viser fleet-radar én logglinje per steg.">
  <defs><marker id="ar9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="15.0" y="0" width="110" height="44" rx="8" class="b"/><text x="70" y="19" class="t" text-anchor="middle">Kari i appen</text><text x="70" y="36" class="s" text-anchor="middle">saksbehandling</text><line x1="70" y1="44" x2="70" y2="284" class="life"/><rect x="215.0" y="0" width="150" height="44" rx="8" class="p"/><text x="290" y="19" class="t" text-anchor="middle">Agent</text><text x="290" y="36" class="s" text-anchor="middle">fleet-runtime</text><line x1="290" y1="44" x2="290" y2="284" class="life"/><rect x="425.0" y="0" width="150" height="44" rx="8" class="p"/><text x="500" y="19" class="t" text-anchor="middle">fleet-gateway</text><text x="500" y="36" class="s" text-anchor="middle">sjekker alle kall</text><line x1="500" y1="44" x2="500" y2="284" class="life"/><rect x="635.0" y="0" width="110" height="44" rx="8" class="b"/><text x="690" y="27" class="t" text-anchor="middle">Modell</text><line x1="690" y1="44" x2="690" y2="284" class="life"/><rect x="760.0" y="0" width="110" height="44" rx="8" class="b"/><text x="815" y="19" class="t" text-anchor="middle">Verktøy</text><text x="815" y="36" class="s" text-anchor="middle">saksarkivet</text><line x1="815" y1="44" x2="815" y2="284" class="life"/>
  <rect x="0" y="292" width="880" height="46" rx="8" class="n"/><text x="10" y="302" class="s rad">fleet-radar</text>
  <g v-click><line x1="70" y1="74" x2="282" y2="74" class="a" marker-end="url(#ar9)"/><text x="190" y="68" class="s" text-anchor="middle">Spørsmål og kortlivet tilgang</text><rect x="47" y="59" width="18" height="18" rx="4" class="pn"/><text x="56" y="71.5" class="pnt" text-anchor="middle">1</text><rect x="282" y="64" width="16" height="200" rx="3" class="sbx"/><text x="276" y="100" class="s sbt" text-anchor="end">sandkasse for Kari</text><g><g class="lg"><rect x="18" y="306" width="132" height="24" rx="5"/><text x="84" y="322" text-anchor="middle">1 · Kari · start</text></g></g></g>
  <g v-click><line x1="298" y1="112" x2="690" y2="112" class="a" marker-end="url(#ar9)"/><circle cx="500" cy="112" r="4.5" class="gwd"/><text x="400" y="106" class="s" text-anchor="middle">Hva står i saken?</text><rect x="307" y="87" width="18" height="18" rx="4" class="pn"/><text x="316" y="99.5" class="pnt" text-anchor="middle">2</text><text x="500" y="126" class="s gwt" text-anchor="middle">modelltilgang og kvote (senere)</text><line x1="690" y1="140" x2="300" y2="140" class="a ret" marker-end="url(#ar9)"/><g class="lg"><rect x="162" y="306" width="132" height="24" rx="5"/><text x="228" y="322" text-anchor="middle">2 · modell · ok</text></g></g>
  <g v-click><line x1="298" y1="168" x2="815" y2="168" class="a" marker-end="url(#ar9)"/><circle cx="500" cy="168" r="4.5" class="gwd"/><text x="400" y="162" class="s" text-anchor="middle">Hent dokumentene</text><rect x="307" y="143" width="18" height="18" rx="4" class="pn"/><text x="316" y="155.5" class="pnt" text-anchor="middle">3</text><g class="chk"><rect x="410" y="174" width="180" height="20" rx="10"/><text x="500" y="188" text-anchor="middle">fleet-control: agenten har lov ✓</text></g><line x1="815" y1="206" x2="300" y2="206" class="a ret" marker-end="url(#ar9)"/><text x="720" y="200" class="s" text-anchor="middle">7 dokumenter</text><g class="lg"><rect x="306" y="306" width="132" height="24" rx="5"/><text x="372" y="322" text-anchor="middle">3 · verktøy · ok</text></g></g>
  <g v-click><line x1="282" y1="232" x2="70" y2="232" class="a ret" marker-end="url(#ar9)"/><text x="180" y="226" class="s" text-anchor="middle">Forslag: send brev?</text><rect x="77" y="207" width="18" height="18" rx="4" class="pn"/><text x="86" y="219.5" class="pnt" text-anchor="middle">4</text><g class="chk"><rect x="20" y="240" width="200" height="20" rx="10"/><text x="120" y="254" text-anchor="middle">fleet-orchestrator: Kari sier ja ✓</text></g><g class="lg"><rect x="450" y="306" width="132" height="24" rx="5"/><text x="516" y="322" text-anchor="middle">4 · godkjent</text></g></g>
  <g v-click><line x1="298" y1="258" x2="815" y2="258" class="a" marker-end="url(#ar9)"/><circle cx="500" cy="258" r="4.5" class="gwd"/><text x="560" y="252" class="s" text-anchor="middle">Send brevet</text><rect x="307" y="233" width="18" height="18" rx="4" class="pn"/><text x="316" y="245.5" class="pnt" text-anchor="middle">5</text><text x="290" y="280" class="s" text-anchor="middle">sandkassen stoppes</text><g class="chk"><rect x="420" y="264" width="160" height="20" rx="10"/><text x="500" y="278" text-anchor="middle">fleet-gateway: godkjent ✓</text></g><g class="lg"><rect x="594" y="306" width="132" height="24" rx="5"/><text x="660" y="322" text-anchor="middle">5 · brev · ok</text></g></g>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
- Samme tenkte app som forrige lysbilde. Klikk gjennom stegene
- 1: Appen sender spørsmålet. Agenten får et kortlivet OBO-token for Kari, ikke Karis eget token. Det ligger bare i Karis sandkasse i fleet-runtime
- 2: Agenten spør modellen. Alle modellkall går gjennom fleet-gateway, som håndhever kvoter. Modellgatewayen kommer senere
- 3: Agenten henter dokumenter. fleet-gateway bytter token, og fleet-control sjekker at agenten har lov til verktøyet. Saksarkivet avgjør selv hvilke saker Kari ser
- 4: Agenten vil skrive. Det krever et ja fra Kari. Felles regler for godkjenning hører til fleet-orchestrator, som kommer i fase 3
- 5: Brevet sendes gjennom fleet-gateway, som sjekker at godkjenningen finnes. Sandkassen stoppes når økten er over, og tokenet forsvinner med den
- fleet-radar: fleet-gateway skriver loggen, og fleet-radar viser den. Én logglinje per steg med bruker, verktøy, utfall, kostnad og trace-ID. Aldri innholdet i prompten
- Teamet har skrevet appen, chatten og agenten. Alt annet på lysbildet er Fleet. Alt er forslag
- Overgang: «Hvorfor skal ikke hvert team bygge dette selv?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Mange team trenger det samme, men bygger det hver for seg</h1>
<p class="subtitle">Det gir dobbeltarbeid når KI skal fra forsøk til produksjon</p>

::default::
<div class="shift">
  <div></div>
  <div class="shift-h">I dag: forsøk</div>
  <div class="shift-h now">Med Fleet: produksjon</div>
  <div class="shift-l">Formål</div>
  <div>Teste hva KI kan brukes til</div>
  <div class="now">Drifte KI stabilt i tjenester</div>
  <div class="shift-l">Styring</div>
  <div>Hvert team finner sin egen løsning</div>
  <div class="now">Plattformen håndhever felles regler ett sted</div>
  <div class="shift-l">Tilgang</div>
  <div>Hver app løser tilgang med egen kode</div>
  <div class="now">Knyttet til hvem appen og brukeren er</div>
  <div class="shift-l">Kostnad</div>
  <div>Ingen samlet oversikt</div>
  <div class="now">Synlig per team</div>
</div>
<p class="footnote">Alle trenger det samme: tilgang på vegne av brukeren, trygge verktøy og modeller, og sporing av hva agenten gjorde.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Men noe virker allerede.»

- Hovedpoenget: mange team og tjenester trenger det samme. Uten en felles plattform løser hvert team det alene
- Fra pilot til flåte: nav-pilot er der vi startet. Det er et kommandolinjeverktøy for utviklere, som logger inn mot GitHub med device flow. Det er ikke en sandkasse eller en inkubator
- Visjon: nav-pilot kjører på nav-fleet. Verktøyet er det samme, men agentene kjører i fleet-runtime i stedet for på utviklerens maskin
- Høyre kolonne er et forslag. Ingenting av Fleet finnes ennå
- «Ingen samlet oversikt» over kostnad er vår vurdering. Vi har ingen tall for kostnad i kroner eller timer. Ikke oppgi noen

Underlag, bare hvis noen spør:
- Seks apper har egen kode for brukertokener. Talt i filer på main 16. november 2026:
  - my-copilot: navikt/copilot/apps/my-copilot/src/lib/auth.ts og introspect.ts (Texas)
  - copilot-api: navikt/copilot/apps/copilot-api/auth.go og identity_onbehalfof.go (validerer tokenet på nytt)
  - copilot-cli: navikt/copilot/apps/copilot-cli/texas.go
  - copilot-survey: navikt/copilot/apps/copilot-survey/texas.go og auth.go
  - mcp-onboarding: navikt/copilot/apps/mcp-onboarding/oauth.go (egen OAuth-server foran GitHub)
  - aksel-studio: backend/internal/api/github.go og backend/internal/chat/chat.go (TokenProvider)
  - Ikke talt med: copilot-metrics og copilot-adoption, som bare bruker installasjonstokener for en GitHub App, og kommandolinjeverktøyet nav-pilot, som lagrer brukerens token i nøkkelringen
- Fire måter å handle for en bruker:
  - Entra OBO gjennom Texas, my-copilot til copilot-api (navikt/copilot/ARCHITECTURE.md, «Request path»)
  - M2M-token pluss HTTP-hodet X-On-Behalf-Of, copilot-cli til copilot-api, bare GET fra forhåndsgodkjent azp (samme fil)
  - brukerens ghu_-token kryptert i Postgres, aksel-studio (aksel-studio docs/beslutninger/011-ki-kjoretid.md)
  - brukerens GitHub-token i minnet bak et eget token, mcp-onboarding (navikt/copilot/apps/mcp-onboarding/README.md, «Flow»)
- Ingen vei inn for skriveverktøy: MCP-kategori 3, «begrenset tilgang til sensitive data eller skriving»: «Ikke besluttet, avslås inntil ny risikovurdering». Kategori 4 er ikke tillatt
- aksel-studio har ni verktøy utenfor registeret. De kjører i studio-api over SDK-ens JSON-RPC (aksel-studio docs/beslutninger/019-ki-chat-per-konsept.md). Ingen av de 12 serverne i navikt/copilot/apps/mcp-registry/allowlist.json er aksel-studio. Presisering: 019 velger egne verktøy av sikkerhetsgrunner og oppgir ikke kategori 3 som grunn
- Tom modus virker: i den lokale testen kunne modellen ikke lese filer eller kjøre kommandoer (aksel-studio docs/ki-spike-lokal.md, 15. november 2026).
- At neste team kopierer dette mønsteret, er en hypotese. Vi kjenner ikke til et konkret neste team
- Ingen eier: styringsmodellen dekker utviklerflater og har ingen rolle for agenter som tjenester
- Ingen normative dokumenter: styringsmodell.md, risikovurdering.md, retningslinjer.md, godkjente-agenter.md, overvaaking.md og modellstyring.md handler om kodeagenter på utviklermaskiner og i sky. Ingen beskriver agenter som kjører som tjenester på Nais. Dette er vår lesing og et søk i filene, ikke en juridisk gjennomgang
- Snarveiene tar også slutt: «navikt har nådd grensen for antall GitHub Apps. Studio gjenbruker derfor den eksisterende appen Nav Copilot (nav-pilot)» (011, merknad november 2026)
- Tallene gjelder repoene vi har lest. Andre team i Nav kan ha egne agenter vi ikke kjenner til

Derfor nå:
- studio-ki: egen Nais-app med Copilot CLI som headless server. Secreten ble opprettet 16. november 2026 (aksel-studio docs/oppsett/studio-ki.md og .nais/ki.yaml).
- MCP, spesifikasjon 2025-11-25: «The MCP server MUST NOT pass through the token it received from the MCP client», og serveren skal avvise tokener som ikke er utstedt til den. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- Entra Agent ID, On-Behalf-Of-flyt for agenter. Siden er datert 4. november 2025 og oppdatert 10. august 2026. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow
- Kubernetes Agent Sandbox under SIG Apps, med gVisor og Kata Containers. Blogg 20. mars 2026. https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
- Agentidentitet er ikke ferdig standardisert. En oversikt for OAuth-gruppen i IETF, datert 31. mai 2026, teller 32 individuelle utkast i 5 grupper. https://datatracker.ietf.org/meeting/interim-2026-oauth-03/materials/slides-interim-2026-oauth-03-sessa-ietf-individual-draft-analysis-00
- OpenID Foundation, «Identity Management for Agentic AI», 7. oktober 2025: dagens standarder holder for agenter i én organisasjon, og virksomheter bør behandle agenter som fullverdige identiteter i tilgangsstyringen sin. https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/
- Datatilsynet, 20. august 2026: «en økende mengde avviksmeldinger» om «tilfeldig, uønsket og ukontrollert bruk av KI-agenter i norske kommuner». https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2026/datatilsynet-pa-sikkerhetsfestivalen/
- KI-loven: ny høring høsten 2026. Statsrådens ambisjon er å fremme loven for Stortinget våren 2027. Det er ikke en frist. Reglene for høyrisiko-KI er utsatt til 2. desember 2027 og 2. august 2028. Pressemelding 4. august 2026. https://www.regjeringen.no/no/aktuelt/id3169693/
- EU: Rådet ga endelig godkjenning til endringene 29. juni 2026, og rettsakten ble signert 8. juli. Rådets egen side svarer 403 for oss. Datoene er bekreftet i andrehåndskilder, blant annet https://lewissilkin.com/insights/2026/07/09/council-of-the-eu-gives-ai-omnibus-final-green-light-102nbb1. Rådets pressemelding: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Det må en jurist vurdere
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">I dag virker det for utviklere på egen maskin</h1>
<p class="subtitle">Verktøykatalogen og god praksis kan bli inngangen til Fleet <span class="chip amber align-middle ml-2">Forslag</span></p>

::default::
<div class="today">
  <BrowserWindow url="ki-utvikling.nav.no/verktoy" class="today-win" role="img" aria-label="Skisse av verktøykatalogen på ki-utvikling.nav.no. Fire nummererte punkter: verktøykatalogen, god praksis, nav-pilot og MCP-registeret.">
    <span class="chip green today-badge">I dag</span>
    <div class="km-top">
      <strong>KI-produktutvikling</strong>
      <span>Kom i gang</span>
      <span>nav-pilot <b class="pin a-fade" style="--d: 1.1s">3</b></span>
      <span class="on">Tilpasning</span>
      <span>Praksis og regler <b class="pin a-fade" style="--d: 0.7s">2</b></span>
      <span>Innsikt</span>
      <span class="km-login">Logg inn</span>
    </div>
    <div class="km-main">
      <h2>Verktøykatalog <b class="pin a-fade" style="--d: 0.3s">1</b></h2>
      <p>Agenter, instruksjoner, skills og MCP-servere som gjør Copilot smartere for Navs stack.</p>
      <div class="km-filter"><span>Agent</span><span>Instruksjon</span><span>Prompt</span><span>Skill</span><span>MCP Server</span><em>80 av 80 tilpasninger</em></div>
      <div class="km-cards">
        <div><small>Agent · Generelt</small><strong>@nav-pilot</strong><p>Planlegging og bygging av Nav-apper.</p><u>Installer</u></div>
        <div><small>Skill · Sikkerhet</small><strong>nav-auth</strong><p>Entra ID, TokenX, ID-porten og Maskinporten.</p><u>Mer info</u></div>
        <div><small>MCP Server · Plattform <b class="pin a-fade" style="--d: 1.5s">4</b></small><strong>nais-mcp</strong><p>Nais-kontekst via Nais CLI.</p><u>Mer info</u></div>
      </div>
    </div>
  </BrowserWindow>
  <ol class="today-list">
    <li class="a-rise" style="--d: 0.3s"><b class="pin">1</b><div><strong>Verktøykatalogen</strong>80 agenter, skills, instruksjoner og MCP-servere tilpasset Nav.</div></li>
    <li class="a-rise" style="--d: 0.7s"><b class="pin">2</b><div><strong>God praksis</strong>Guider for å skrive kode, teste og sette opp agenter.</div></li>
    <li class="a-rise" style="--d: 1.1s"><b class="pin">3</b><div><strong>nav-pilot</strong><code>nav-pilot install</code> legger agentpakker i repoet.</div></li>
    <li class="a-rise" style="--d: 1.5s"><b class="pin">4</b><div><strong>MCP-registeret</strong>12 godkjente servere som gir agentene verktøy. Ukjente blokkeres.</div></li>
    <li class="side a-rise" style="--d: 1.9s"><span class="i-carbon-laptop" /><div><strong>Lokale agenter</strong>Copilot CLI kjører agentene på utviklerens egen maskin.</div></li>
  </ol>
</div>
<p class="footnote tight">Fleet bygger videre på dette: katalog, veiledning og hjelp til å komme i gang finnes allerede for utviklere.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva vil vi i stedet?»

- Hovedpoenget: dette virker for utviklere på egen maskin. Det dekker ikke agenter som kjører som tjenester
- ki-utvikling.nav.no er appen my-copilot (navikt/copilot/apps/my-copilot). Adressen står i .nais/prod-gcp.yaml
  - Abonnement: src/app/(nb)/abonnement/page.tsx. Krever innlogging
  - Verktøykatalogen: src/app/(nb)/(nav-pilot)/verktoy/page.tsx. «Agenter, instruksjoner, skills og MCP-servere som gjør GitHub Copilot smartere for Navs stack»
  - God praksis og guider: src/app/(nb)/praksis/page.tsx
  - Forsiden viste 10 agenter, 36 skills, 17 instruksjoner og 12 MCP-servere 16. november 2026. /verktoy og /praksis er åpne uten innlogging
  - Skissen følger /verktoy slik siden så ut 16. november 2026: menyen, ingressen, filtrene og «80 av 80 tilpasninger». Den viser tre av kortene og ingen brukerdata
- nav-pilot: «nav-pilot gir GitHub Copilot Navs institusjonelle kunnskap, fra Nais-manifester til TokenX» (src/app/(nb)/nav-pilot/page.tsx)
- Lokale agenter: Copilot CLI på utviklerens maskin. Klientene er beskrevet i src/app/(nb)/(nav-pilot)/nav-pilot/klienter/page.tsx
- MCP-registeret: navikt/copilot/apps/mcp-registry, med 12 servere i allowlist.json. Offentlig på mcp-registry.nav.no (README.md)
- Forslag: verktøykatalogen og god praksis blir katalogen og inngangen til Fleet, med katalog, veiledning og onboarding. Katalogen hører til fleet-control. Vi har ikke avtalt dette med noen
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Visjonen: KI i produksjon, enkelt, trygt og raskt</h1>
<p class="subtitle">Fire egenskaper plattformen skal ha. Ingenting her er planlagt eller vedtatt <span class="chip amber align-middle ml-2">Visjon</span></p>

::default::
<svg class="dg fly" viewBox="0 0 880 328" role="img" aria-label="Fem piler i V-formasjon med stiplede spor. Foran formasjonen viser en stiplet linje felles kurs. Den fremste pilen er nav-fleet. De fire andre er selvbetjent, innebygde regler, fritt modellvalg og full oversikt. Underlaget har tre felt: egen infrastruktur for agentsandkassene, egne modellvalg der vi velger hvor inferens kjører, og Nais der det passer, for apper, identitet og nettverk.">
  <g class="a-fade" style="--d: 1.9s">
    <path d="M440 46V14" class="course"/>
    <path d="M432 19l8-9 8 9" class="courseh"/>
    <text x="456" y="30" class="courset">felles kurs</text>
  </g>
  <g class="a-rise a-trails" style="--dy: 48px; --t: 1.2s">
    <FleetShip x="440" y="80" scale="2" trail="5"/>
    <FleetShip x="290" y="114" scale="1.7" trail="3"/>
    <FleetShip x="590" y="114" scale="1.7" trail="3"/>
    <FleetShip x="105" y="160" scale="1.7" trail="3"/>
    <FleetShip x="775" y="160" scale="1.7" trail="3"/>
    <rect x="388" y="142" width="104" height="26" rx="13" class="pill"/>
    <text x="440" y="160" text-anchor="middle" class="pillt">nav-fleet</text>
    <rect x="195" y="172" width="190" height="44" rx="8" class="card"/>
    <text x="290" y="191" text-anchor="middle" class="t">Selvbetjent</text>
    <text x="290" y="208" text-anchor="middle" class="s">Teamet beskriver behovet</text>
    <rect x="495" y="172" width="190" height="44" rx="8" class="card"/>
    <text x="590" y="191" text-anchor="middle" class="t">Innebygde regler</text>
    <text x="590" y="208" text-anchor="middle" class="s">Tilgang og logging ett sted</text>
    <rect x="10" y="222" width="190" height="44" rx="8" class="card"/>
    <text x="105" y="241" text-anchor="middle" class="t">Fritt modellvalg</text>
    <text x="105" y="258" text-anchor="middle" class="s">Bytt modell uten kodeendring</text>
    <rect x="680" y="222" width="190" height="44" rx="8" class="card"/>
    <text x="775" y="241" text-anchor="middle" class="t">Full oversikt</text>
    <text x="775" y="258" text-anchor="middle" class="s">Sporing og kostnad per team</text>
  </g>
  <rect x="0" y="276" width="880" height="52" rx="8" class="n"/>
  <line x1="293" y1="285" x2="293" y2="319" class="div"/>
  <line x1="587" y1="285" x2="587" y2="319" class="div"/>
  <text x="146" y="299" text-anchor="middle" class="t">Egen infrastruktur</text>
  <text x="146" y="317" text-anchor="middle" class="s">for agentsandkassene</text>
  <text x="440" y="299" text-anchor="middle" class="t">Egne modellvalg</text>
  <text x="440" y="317" text-anchor="middle" class="s">vi velger hvor modellene kjører</text>
  <text x="733" y="299" text-anchor="middle" class="t">Nais der det passer</text>
  <text x="733" y="317" text-anchor="middle" class="s">apper, identitet og nettverk</text>
</svg>
<p class="footnote tight">Fra lokale agenter på én maskin til skyagenter for ulike formål, kjørt på Fleet. Agenten gjør forarbeidet med rettighetene til et menneske, og mennesket avgjør.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvor hører Fleet hjemme blant det vi har?»

- Alt på dette lysbildet er visjon. Vi har ikke estimert noe
- Retningen: fra lokale agenter på én utviklermaskin til skyagenter for ulike formål, kjørt på Fleet. Lysbildet med seks typer agenter viser eksemplene
- Visjonen i én setning: det skal være enkelt, trygt og raskt for produktteam å bygge, drifte og videreutvikle KI i produksjon, med etterlevelse innebygd, full oversikt og uten dobbeltarbeid
- Selvbetjent: samme tanke som Nais. Teamet beskriver behovet, og plattformen gjør resten. Et eget felt i nais.yaml er et forslag
- Innebygde regler (regler som kode): sikkerhet og etterlevelse settes ett sted. Tilgang og logging er grunnlaget i første versjon. Maskering av personopplysninger og risikoklassifisering etter KI-forordningen er forslag. Hva forordningen krever av Nav, må en jurist sjekke
- Fritt modellvalg: i dag går modellkallene gjennom GitHub Copilot. Flere skyleverandører og egne GPU-er er visjon, ikke noe vi har
- Full oversikt: sporing uten innholdet i promptene er allerede praksis (aksel-studio docs/beslutninger/011-ki-kjoretid.md). Evalueringer og karbonregnskap er visjon
- Figuren: fem piler i formasjon, samme tegn som i logoen. nav-fleet leder, og de fire egenskapene flyr sammen på felles kurs
- Underlaget har tre felt. Fleet kjører ikke bare på Nais: agentsandkassene trenger egen infrastruktur, vi velger selv hvor inferens kjører, og resten kjører på Nais der det passer (apper, identitet og nettverk). Forslag
- Mennesket avgjør: se identitetslysbildet og kortet med saksbehandleren
- Navs oppdrag er utgangspunktet: Arbeids- og velferdsforvaltningen skal «møte det enkelte mennesket med respekt, bidra til sosial og økonomisk trygghet og fremme overgang til arbeid og aktiv virksomhet» (Nav-loven § 1 andre ledd, https://lovdata.no/lov/2006-06-16-20/§1). Ordrett sitat, sjekket mot Lovdata 16. november 2026
-->

---
layout: default
hide: true
---

::header::
<h1 class="text-3xl font-bold">Visjonen: KI i produksjon, enkelt, trygt og raskt</h1>
<p class="subtitle">Hele flåten på én skjerm. Ingenting her er planlagt eller vedtatt <span class="chip amber align-middle ml-2">Visjon</span></p>

::default::
<svg class="dg fly" viewBox="0 0 880 328" role="img" aria-label="En radarskjerm med fleet i midten og agenter som små piler i fire sektorer: selvbetjent, regler som kode, fritt modellvalg og full oversikt. Underlaget har tre felt: egen infrastruktur for agentsandkassene, egne modellvalg der vi velger hvor inferens kjører, og Nais der det passer, for apper, identitet og nettverk.">
  <defs>
    <radialGradient id="rd-bg" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e6f1ff"/><stop offset="1" stop-color="#cfe2f7"/></radialGradient>
    <linearGradient id="rd-sweep" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0067c5" stop-opacity="0"/><stop offset="1" stop-color="#0067c5" stop-opacity=".35"/></linearGradient>
  </defs>
  <g transform="translate(440 134)">
    <circle r="128" fill="url(#rd-bg)" class="ring0"/>
    <circle r="85" class="ring"/>
    <circle r="43" class="ring"/>
    <path d="M-128 0H128M0-128V128" class="ring"/>
    <path d="M0 0L128 0A128 128 0 0 0 90.5-90.5z" fill="url(#rd-sweep)"/>
    <FleetShip x="-66" y="-53" scale=".75" rotate="60" trail="2"/>
    <FleetShip x="-40" y="-92" scale=".6" rotate="80" trail="2"/>
    <FleetShip x="53" y="-40" scale=".75" rotate="150" trail="2"/>
    <FleetShip x="92" y="-70" scale=".6" rotate="170" trail="2"/>
    <FleetShip x="-79" y="48" scale=".75" rotate="-30" trail="2"/>
    <FleetShip x="-26" y="84" scale=".6" rotate="-10" trail="2"/>
    <FleetShip x="62" y="66" scale=".75" rotate="-120" trail="2"/>
    <FleetShip x="26" y="101" scale=".6" rotate="-100" trail="2"/>
    <circle r="24" class="hub"/>
    <text y="5" text-anchor="middle" class="pillt">fleet</text>
  </g>
  <text x="272" y="78" text-anchor="end" class="t">Selvbetjent</text>
  <text x="272" y="96" text-anchor="end" class="s">Teamet beskriver behovet</text>
  <line x1="280" y1="80" x2="364" y2="90" class="lead"/>
  <text x="608" y="78" class="t">Innebygde regler</text>
  <text x="608" y="96" class="s">Tilgang og logging ett sted</text>
  <line x1="600" y1="80" x2="516" y2="90" class="lead"/>
  <text x="272" y="206" text-anchor="end" class="t">Fritt modellvalg</text>
  <text x="272" y="224" text-anchor="end" class="s">Bytt modell uten kodeendring</text>
  <line x1="280" y1="208" x2="364" y2="186" class="lead"/>
  <text x="608" y="206" class="t">Full oversikt</text>
  <text x="608" y="224" class="s">Sporing og kostnad per team</text>
  <line x1="600" y1="208" x2="516" y2="186" class="lead"/>
  <rect x="0" y="276" width="880" height="52" rx="8" class="n"/>
  <line x1="293" y1="285" x2="293" y2="319" class="div"/>
  <line x1="587" y1="285" x2="587" y2="319" class="div"/>
  <text x="146" y="299" text-anchor="middle" class="t">Egen infrastruktur</text>
  <text x="146" y="317" text-anchor="middle" class="s">for agentsandkassene</text>
  <text x="440" y="299" text-anchor="middle" class="t">Egne modellvalg</text>
  <text x="440" y="317" text-anchor="middle" class="s">vi velger hvor inferens kjører</text>
  <text x="733" y="299" text-anchor="middle" class="t">Nais der det passer</text>
  <text x="733" y="317" text-anchor="middle" class="s">apper, identitet og nettverk</text>
</svg>
<p class="footnote tight">Fra lokale agenter på én maskin til skyagenter for ulike formål, kjørt på Fleet. Agenten gjør forarbeidet med rettighetene til et menneske, og mennesket avgjør.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Reserve: radar-varianten av visjonen
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet fyller laget mellom appene og modellene</h1>
<p class="subtitle">nav-fleet erstatter ingen plattform. Rollene er vår beskrivelse og ikke avklart med Nais eller Nada</p>

::default::
<svg class="dg" viewBox="0 0 880 330" role="img" aria-label="Tre plattformer side om side: Nais, nav-fleet og Nada. Fleet bruker Nais der det passer og henter data og kontekst fra Nada, med tilgangsstyring. Nais og Nada bruker også Fleet. Over står nav-pilot, fagsystemer og andre team, som bygger på Fleet. Under står modellene, som Fleet kaller, og egen infrastruktur for agentsandkassene. Verktøykatalogen og god praksis på ki-utvikling.nav.no kan bli inngangen til Fleet.">
  <defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="200" y="2" width="480" height="40" rx="8" class="b"/>
  <text x="440" y="27" text-anchor="middle" class="t">nav-pilot · fagsystemer · andre team</text>
  <line x1="440" y1="42" x2="440" y2="72" class="a" marker-end="url(#ar1)"/>
  <text x="452" y="61" class="s">bygger på Fleet</text>
  <rect x="0" y="74" width="190" height="124" rx="10" class="n"/>
  <text x="95" y="112" text-anchor="middle" class="h">Nais</text>
  <text x="95" y="140" text-anchor="middle" class="s">kjøre apper</text>
  <text x="95" y="158" text-anchor="middle" class="s">og infrastruktur</text>
  <rect x="345" y="74" width="190" height="124" rx="10" class="p"/>
  <text x="440" y="112" text-anchor="middle" class="h">nav-fleet</text>
  <text x="440" y="140" text-anchor="middle" class="s">KI og agenter</text>
  <text x="440" y="158" text-anchor="middle" class="s">i produksjon</text>
  <text x="440" y="184" text-anchor="middle" class="s x">fleet.nav.no (forslag)</text>
  <rect x="690" y="74" width="190" height="124" rx="10" class="n"/>
  <text x="785" y="112" text-anchor="middle" class="h">Nada</text>
  <text x="785" y="140" text-anchor="middle" class="s">data og domenekunnskap:</text>
  <text x="785" y="158" text-anchor="middle" class="s">konteksten agentene trenger</text>
  <g style="--d: 0.3s">
    <text x="267" y="104" text-anchor="middle" class="s a-fade">bruker Nais</text>
    <line x1="343" y1="112" x2="194" y2="112" class="a a-draw" pathLength="1"/>
    <path d="M206.6 105L192.6 112L206.6 119z" class="ah a-head"/>
    <text x="267" y="130" text-anchor="middle" class="s a-fade">der det passer</text>
  </g>
  <g style="--d: 1s">
    <line x1="192" y1="160" x2="341" y2="160" class="a a-draw" pathLength="1"/>
    <path d="M328.4 153L342.4 160L328.4 167z" class="ah a-head"/>
    <text x="267" y="178" text-anchor="middle" class="s a-fade">bruker Fleet</text>
  </g>
  <g style="--d: 1.7s">
    <text x="612" y="104" text-anchor="middle" class="s a-fade">henter data og kontekst</text>
    <line x1="537" y1="112" x2="686" y2="112" class="a a-draw" pathLength="1"/>
    <path d="M673.4 105L687.4 112L673.4 119z" class="ah a-head"/>
    <text x="612" y="130" text-anchor="middle" class="s a-fade">med tilgangsstyring</text>
  </g>
  <g style="--d: 2.4s">
    <line x1="688" y1="160" x2="539" y2="160" class="a a-draw" pathLength="1"/>
    <path d="M551.6 153L537.6 160L551.6 167z" class="ah a-head"/>
    <text x="612" y="178" text-anchor="middle" class="s a-fade">bruker Fleet</text>
  </g>
  <line x1="440" y1="198" x2="440" y2="228" class="a" marker-end="url(#ar1)"/>
  <text x="452" y="217" class="s">bruker modellene og kjører sandkassene</text>
  <rect x="0" y="230" width="880" height="64" rx="8" class="b"/>
  <text x="20" y="255" class="t">Modeller</text>
  <text x="200" y="255" class="s">skymodeller, i dag gjennom GitHub Copilot. Vi velger hvor modellene kjører</text>
  <rect x="696" y="238" width="168" height="24" rx="12" class="q"/>
  <text x="780" y="254" class="s" text-anchor="middle">egne GPU-er (visjon)</text>
  <text x="20" y="281" class="t">Egen infrastruktur</text>
  <text x="200" y="281" class="s">for agentsandkassene i fleet-runtime (forslag)</text>
  <text x="0" y="322" class="t">ki-utvikling.nav.no</text>
  <text x="170" y="322" class="s">verktøykatalogen og god praksis kan bli katalogen og inngangen til Fleet (forslag)</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva består Fleet av?»

- Tre plattformer som jobber sammen, hver med sin oppgave. Fleet erstatter ingen av dem
- Nais kjører apper og infrastruktur. Nada har data og domenekunnskap, altså konteksten agentene trenger. nav-fleet er KI og agenter i produksjon
- Rollene er vår beskrivelse. Vi har ikke avklart dem med Nais eller Nada
- Fleet kjører ikke bare på Nais. Nais der det passer: apper, nettverk og innlogging (Entra ID, TokenX og Maskinporten gjennom Texas). Agentsandkassene i fleet-runtime trenger egen infrastruktur, som Fleet eier og drifter. Hvor inferens kjører, velger vi selv. Alt dette er forslag
- Fleet henter data og kontekst fra Nada, med tilgangsstyring. Agenten ser bare det brukeren selv har tilgang til. Hypotese. Vi har ikke snakket med Nada
- Nais og Nada bruker også Fleet, for eksempel til feilsøkingsagenter og analyseagenter. Nais er altså både en del av underlaget og en av brukerne
- nav-pilot, fagsystemer og andre team bygger på Fleet. nav-pilot er lokalt i dag. At det kjører på nav-fleet, er visjon og ikke planlagt
- Detaljene står på de neste lysbildene: modulene og hvem som bruker dem på neste, de seks typene agenter senere
- Modeller: i dag går modellkallene gjennom GitHub Copilot. Flere skyleverandører og egne GPU-er er visjon
- ki-utvikling.nav.no: verktøykatalogen og god praksis kan bli katalogen og inngangen til Fleet. Katalogen hører da til fleet-control. Forslag
- fleet.nav.no er et forslag til adresse. Den finnes ikke
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fem moduler dekker det alle agenter trenger</h1>
<p class="subtitle">Modulnavnene er forslag. Fleet bruker Nais der det passer</p>

::default::
<svg class="dg" viewBox="0 0 880 364" role="img" aria-label="Øverst fire som kan bruke Fleet: produktteam, utviklerverktøy, Nais og Nada. I midten nav-fleet med modulene fleet-gateway, fleet-control, fleet-runtime, fleet-orchestrator og fleet-radar, og under dem fleet-sdk og identitet. Underlaget har tre felt: egen infrastruktur for agentsandkassene, egne modellvalg der vi velger hvor inferens kjører, og Nais der det passer, for apper, identitet og nettverk.">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <g class="a-rise" style="--d: 1.30s; --dy: -12px">
    <rect x="0" y="2" width="205" height="50" rx="8" class="b"/>
    <text x="102" y="23" class="t" text-anchor="middle">Produktteam</text>
    <text x="102" y="42" class="s" text-anchor="middle">aksel-studio er først</text>
    <line x1="102" y1="52" x2="102" y2="68" class="a" marker-end="url(#ar2)"/>
  </g>
  <g class="a-rise" style="--d: 1.45s; --dy: -12px">
    <rect x="225" y="2" width="205" height="50" rx="8" class="b"/>
    <text x="327" y="23" class="t" text-anchor="middle">Utviklerverktøy</text>
    <text x="327" y="42" class="s" text-anchor="middle">my-copilot</text>
    <line x1="327" y1="52" x2="327" y2="68" class="a" marker-end="url(#ar2)"/>
  </g>
  <g class="a-rise" style="--d: 1.60s; --dy: -12px">
    <rect x="450" y="2" width="205" height="50" rx="8" class="q"/>
    <text x="552" y="23" class="t" text-anchor="middle">Nais</text>
    <text x="552" y="42" class="s" text-anchor="middle">feilsøkingsagent (hypotese)</text>
    <line x1="552" y1="52" x2="552" y2="68" class="a" marker-end="url(#ar2)"/>
  </g>
  <g class="a-rise" style="--d: 1.75s; --dy: -12px">
    <rect x="675" y="2" width="205" height="50" rx="8" class="q"/>
    <text x="777" y="23" class="t" text-anchor="middle">Nada</text>
    <text x="777" y="42" class="s" text-anchor="middle">dataprodukter (hypotese)</text>
    <line x1="777" y1="52" x2="777" y2="68" class="a" marker-end="url(#ar2)"/>
  </g>
  <rect x="0" y="70" width="880" height="222" rx="10" class="p"/>
  <text x="20" y="93" class="h">nav-fleet</text>
  <g class="a-rise" style="--d: 0.20s">
    <rect x="16" y="104" width="162" height="114" rx="8" class="b"/>
    <text x="97" y="128" class="t" text-anchor="middle">fleet-gateway</text>
    <text x="97" y="150" class="s" text-anchor="middle" style="font-size: 11.8px">MCP- og modelltilgang</text>
    <text x="97" y="168" class="s" text-anchor="middle" style="font-size: 11.8px">tokenbytte og logging</text>
    <text x="97" y="186" class="s" text-anchor="middle" style="font-size: 11.8px">kvoter og rate limiting</text>
    <text x="97" y="204" class="s" text-anchor="middle" style="font-size: 11.8px">persondatavask (forslag)</text>
  </g>
  <g class="a-rise" style="--d: 0.35s">
    <rect x="187.5" y="104" width="162" height="114" rx="8" class="b"/>
    <text x="268.5" y="128" class="t" text-anchor="middle">fleet-control</text>
    <text x="268.5" y="150" class="s" text-anchor="middle" style="font-size: 11.8px">modell- og verktøykatalog</text>
    <text x="268.5" y="168" class="s" text-anchor="middle" style="font-size: 11.8px">tilgang og regler</text>
    <text x="268.5" y="186" class="s" text-anchor="middle" style="font-size: 11.8px">risikodokumentasjon</text>
    <text x="268.5" y="204" class="s" text-anchor="middle" style="font-size: 11.8px">felt i nais.yaml (forslag)</text>
  </g>
  <g class="a-rise" style="--d: 0.50s">
    <rect x="359" y="104" width="162" height="114" rx="8" class="b"/>
    <text x="440" y="128" class="t" text-anchor="middle">fleet-runtime</text>
    <text x="440" y="150" class="s" text-anchor="middle" style="font-size: 11.8px">sandkasse per bruker</text>
    <text x="440" y="168" class="s" text-anchor="middle" style="font-size: 11.8px">start, pause og stopp</text>
    <text x="440" y="186" class="s" text-anchor="middle" style="font-size: 11.8px">shell og filer bare der</text>
    <text x="440" y="204" class="s" text-anchor="middle" style="font-size: 11.8px">ressurs- og nettgrenser</text>
  </g>
  <g class="a-rise" style="--d: 0.65s">
    <rect x="530.5" y="104" width="162" height="114" rx="8" class="b"/>
    <text x="611.5" y="128" class="t" text-anchor="middle">fleet-orchestrator</text>
    <text x="611.5" y="150" class="s" text-anchor="middle" style="font-size: 11.8px">MCP-hub</text>
    <text x="611.5" y="168" class="s" text-anchor="middle" style="font-size: 11.8px">søk i data fra Nada (RAG)</text>
    <text x="611.5" y="186" class="s" text-anchor="middle" style="font-size: 11.8px">tilgang på dokumentnivå</text>
    <text x="611.5" y="204" class="s" text-anchor="middle" style="font-size: 11.8px">regler for godkjenning</text>
  </g>
  <g class="a-rise" style="--d: 0.80s">
    <rect x="702" y="104" width="162" height="114" rx="8" class="b"/>
    <text x="783" y="128" class="t" text-anchor="middle">fleet-radar</text>
    <text x="783" y="150" class="s" text-anchor="middle" style="font-size: 11.8px">sporing av agentkjeder</text>
    <text x="783" y="168" class="s" text-anchor="middle" style="font-size: 11.8px">test før og etter endring</text>
    <text x="783" y="186" class="s" text-anchor="middle" style="font-size: 11.8px">kostnad per team</text>
    <text x="783" y="204" class="s" text-anchor="middle" style="font-size: 11.8px">karbonregnskap (visjon)</text>
  </g>
  <text x="20" y="244" class="t">fleet-sdk og CLI</text>
  <text x="170" y="244">Mal og fil der teamet beskriver agenten, ved siden av nais.yaml. fleet-runtime kjører den.</text>
  <text x="20" y="272" class="t">Identitet</text>
  <text x="170" y="272">Texas utsteder tokenene. fleet-control gir tilgang, og fleet-gateway håndhever den.</text>
  <line x1="440" y1="292" x2="440" y2="308" class="a" marker-end="url(#ar2)"/>
  <rect x="0" y="310" width="880" height="52" rx="8" class="n"/>
  <line x1="293" y1="319" x2="293" y2="353" class="div"/>
  <line x1="587" y1="319" x2="587" y2="353" class="div"/>
  <text x="146" y="333" text-anchor="middle" class="t">Egen infrastruktur</text>
  <text x="146" y="351" text-anchor="middle" class="s">for agentsandkassene</text>
  <text x="440" y="333" text-anchor="middle" class="t">Egne modellvalg</text>
  <text x="440" y="351" text-anchor="middle" class="s">vi velger hvor modellene kjører</text>
  <text x="733" y="333" text-anchor="middle" class="t">Nais der det passer</text>
  <text x="733" y="351" text-anchor="middle" class="s">apper, identitet og nettverk</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Den vanskeligste delen er identitet.»

- Modulnavnene er forslag. Innholdet i hver modul er vår vurdering
- Slik fordeler de tidligere delene seg:
  - MCP-gateway, token exchange og modellgateway: fleet-gateway. Modellgatewayen kommer senere
  - Policy, tilgang og katalog over modeller og verktøy: fleet-control. Verktøykatalogen på ki-utvikling.nav.no kan bli denne katalogen (forslag)
  - Logging, sporing, evalueringer og kostnad: fleet-gateway skriver loggen, og fleet-radar viser den
  - Agent-runtime: fleet-runtime, en isolert sandkasse per bruker eller oppgave. Fleet eier og drifter den, på egen infrastruktur for sandkassene
  - fleet-runtime har en livssyklus: start, pause, fortsett og stopp. Filsystem, shell og verktøy finnes bare inne i sandkassen. Brukerens token finnes bare i brukerens egen sandkasse. Sandkassen har ressursgrenser og kontroll på utgående trafikk
  - Det gjør det mulig å klone fra GitHub (aksel-studio #145)
  - Kubernetes Agent Sandbox er en kandidat til fleet-runtime. Vi har ikke prøvd den (lenke i notatene til lysbildet «Mange team trenger det samme»)
  - fleet-sdk: mal og deklarativ konfigurasjon. Teamet beskriver agenten, og fleet-runtime kjører den
  - Identitet: Entra ID og Texas på Nais utsteder tokenene. fleet-control bestemmer hva en agent har lov til. fleet-gateway håndhever det og gjør token exchange. fleet-runtime holder tokenet inne i brukerens egen sandkasse
  - Nytt: fleet-orchestrator, med RAG mot Nada, MCP-hub og regler for når et menneske må godkjenne
- Forslag og visjon, ikke fakta: PII-vask i gatewayen, et eget fleet-felt i nais.yaml, karbonregnskap og egne GPU-er. Ingen av dem er utredet
- RAG mot Nada med tilgang på dokumentnivå er en hypotese. Vi har ikke snakket med Nada
- Risikodokumentasjon etter KI-forordningen i fleet-control er et forslag. Hva forordningen krever av Nav, må en jurist sjekke
- MCP står to steder: tilgang i fleet-gateway og hub i fleet-orchestrator. Grensen mellom dem må trekkes i ADR-en
- Plassering: Fleet er ikke en del av Nais og kjører ikke bare på Nais. Underlaget har tre felt: egen infrastruktur for agentsandkassene, egne modellvalg (vi velger hvor inferens kjører) og Nais der det passer (apper, identitet, nettverk, OTel og Texas). Teamene beholder domenet. Nais står to steder i figuren: øverst som en som kan bruke Fleet, og nederst som en del av underlaget
- Stiplet ramme betyr hypotese. Nais og Nada øverst er hypoteser. Vi har ikke snakket med Nada, og ingen av dem har bedt om dette
- Vi starter ikke fra null. Fire byggeklosser er i drift:
  - MCP Registry: 12 servere i navikt/copilot/apps/mcp-registry/allowlist.json. Hard kontroll som blokkerer ukjente servere. Registeret er en liste, ikke en proxy. Det gir ikke kontroll eller revisjon per kall (vår vurdering)
  - Modellpolicy: ZDR, ingen trening, innholdsfiltre. Sannhetskilden er NAV_DISABLED_MODELS i navikt/copilot/apps/my-copilot/src/lib/model-policy.ts. aksel-studio leser den ikke
  - Texas og OBO: my-copilot ber Texas om et OBO-token for copilot-api, og copilot-api validerer det på nytt (navikt/copilot/ARCHITECTURE.md)
  - Nais: hosting, OTel og accessPolicy
- Ingen av de fire kontrollerer eller logger et verktøykall mens agenten kjører. Det er hullet fleet-gateway fyller (vår vurdering)
- fleet-gateway bygger på MCP-gatewayen i navikt/copilot#2083. Den er delvis bestemt, og planen står i navikt/copilot docs/mcp-gateway-plan.md (status 2. november 2026). Ingenting er i drift ennå
- Bestemt for gatewayen:
  - Vi bygger, eier og drifter den (#2088)
  - Refresh-tokener lagres kryptert i gatewayen, i høyst 10 timer. Personvern skal godkjenne det før fase 2 (#2090)
  - Revisjonslogg: én linje per verktøykall med NAVident, lagret i 90 dager. Hvert team ser linjene for sin egen MCP-server (#2092)
  - Registrering: team registrerer MCP-serveren i selvbetjeningen på ki-utvikling, og vi godkjenner den i /admin (#2096, #2099). Skjemaet er ikke bygget ennå. Eksterne servere går fortsatt som PR mot allowlist.json (#2093)
- Verktøy festes med hash: registeret lagrer en hash av navn, beskrivelse og inputSchema for hvert verktøy. Endrer et verktøy seg, skjules det og logges til registeret er oppdatert. Serverens egne annotations er ikke til å stole på. toolRisk i registeret er fasiten (#2083, «Tool pinning»)
- På klientsiden holder cplt-brokeren tokenene på vertsmaskinen, utenfor agentens sandkasse. For cplt er gatewayen en vanlig MCP-server med OAuth (navikt/cplt#912, #947)
- Risiko: kjedet OBO gjennom Texas er ikke verifisert. Faller forsøket i #2084, faller hele gateway-tilnærmingen
- #2083 gjelder team-MCP-servere og utviklerklienter. Modellgateway og agenter som kjører i fleet-runtime er ikke en del av #2083. Det er vårt forslag
- Første versjon er fleet-gateway med MCP, token exchange på vegne av brukeren og logging med felles feltnavn: user, tool, outcome, credits og trace-ID, uten innhold (vår anbefaling)
- Venter: modellgateway, agentens egen identitet, evalueringer og minne
- Modellgatewayen venter så lenge Copilot-lisensen bærer kostnaden. Den trengs når noen bruker modeller utenfor Copilot, eller når brukere uten lisens skal med. Kubernetes-prosjektet Gateway API Inference Extension har en egen ressurs for dette, InferencePool. https://gateway-api-inference-extension.sigs.k8s.io/
- Andre gjør det samme: Canada har GC AI Platform som fellestjeneste fra Shared Services Canada, med forhåndsgodkjente modeller og verktøy, blant annet for agentflyter. Siden er oppdatert 25. august 2026. https://www.canada.ca/en/shared-services/services/gc-ai/gc-ai-platform.html
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Én flåte, fem moduler</h1>
<p class="subtitle">Ikonene har samme formasjon. Den hvite pilen foran er mennesket <span class="chip amber align-middle ml-2">Forslag</span></p>

::default::
<div class="fleet-icons top">
  <figure class="fleet-icon a-rise" style="--d: 0.10s"><img src="/icons/fleet/nav-pilot.svg?v=8" alt="" /><figcaption><strong>nav-pilot</strong><span>der vi startet</span></figcaption></figure>
  <figure class="fleet-icon a-rise" style="--d: 0.25s"><img src="/icons/fleet/nav-fleet.svg?v=8" alt="" /><figcaption><strong>nav-fleet</strong><span>plattformen</span></figcaption></figure>
</div>
<div class="fleet-icons">
  <figure class="fleet-icon a-rise" style="--d: 0.50s"><img src="/icons/fleet/fleet-gateway.svg?v=8" alt="" /><figcaption><strong>fleet-gateway</strong><span>inngangen</span></figcaption></figure>
  <figure class="fleet-icon a-rise" style="--d: 0.65s"><img src="/icons/fleet/fleet-control.svg?v=8" alt="" /><figcaption><strong>fleet-control</strong><span>reglene</span></figcaption></figure>
  <figure class="fleet-icon a-rise" style="--d: 0.80s"><img src="/icons/fleet/fleet-runtime.svg?v=8" alt="" /><figcaption><strong>fleet-runtime</strong><span>sandkassen</span></figcaption></figure>
  <figure class="fleet-icon a-rise" style="--d: 0.95s"><img src="/icons/fleet/fleet-orchestrator.svg?v=8" alt="" /><figcaption><strong>fleet-orchestrator</strong><span>samspillet</span></figcaption></figure>
  <figure class="fleet-icon a-rise" style="--d: 1.10s"><img src="/icons/fleet/fleet-radar.svg?v=8" alt="" /><figcaption><strong>fleet-radar</strong><span>oversikten</span></figcaption></figure>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
- Ikonene er utkast. Formasjonen er den samme i alle, og rammen rundt viser hva modulen gjør: port, skjold, sandkasse, nettverk og radar. fleet-runtime viser én agent i sin sandkasse
- Hvit pil foran er mennesket som har kursen. Blå piler er agentene
- Overgang: «Hvordan henger modulene sammen med identiteten til brukeren?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Agenten låner brukerens rettigheter, men modellen ser aldri tokenet</h1>
<p class="subtitle">Tokenet er brukerens midlertidige adgangsbevis. Agentens egen identitet venter til noen trenger bakgrunnsjobber</p>

::default::
<svg class="dg" viewBox="0 0 880 246" role="img" aria-label="Identitetsflyt i fire steg: brukeren logger inn i appen, appen bytter til et OBO-token, agenten i fleet-runtime kaller verktøy gjennom fleet-gateway, og gatewayen sjekker og logger før verktøyet kjører. Under står hvordan rettigheter, tokener og logging håndteres. En prikk under boksene viser tokenet som følger flyten fram til verktøyet.">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="8" width="128" height="56" rx="8" class="b"/>
  <text x="64" y="41" class="t" text-anchor="middle">Bruker</text>
  <rect x="188" y="8" width="128" height="56" rx="8" class="b"/>
  <text x="252" y="32" class="t" text-anchor="middle">App</text>
  <text x="252" y="50" class="s" text-anchor="middle">studio-api</text>
  <rect x="376" y="8" width="128" height="56" rx="8" class="p"/>
  <text x="440" y="32" class="t" text-anchor="middle">Agent</text>
  <text x="440" y="50" class="s" text-anchor="middle">fleet-runtime</text>
  <rect x="564" y="8" width="128" height="56" rx="8" class="p"/>
  <text x="628" y="41" class="t" text-anchor="middle" style="font-size: 14px">fleet-gateway</text>
  <rect x="752" y="8" width="128" height="56" rx="8" class="b"/>
  <text x="816" y="41" class="t" text-anchor="middle">Verktøy</text>
  <line x1="128" y1="36" x2="186" y2="36" class="a" marker-end="url(#ar3)"/>
  <line x1="316" y1="36" x2="374" y2="36" class="a" marker-end="url(#ar3)"/>
  <line x1="504" y1="36" x2="562" y2="36" class="a" marker-end="url(#ar3)"/>
  <line x1="692" y1="36" x2="750" y2="36" class="a" marker-end="url(#ar3)"/>
  <g class="a-pass" style="--d: 0.4s">
    <text x="158" y="98" class="t" text-anchor="middle">Logger inn</text>
    <text x="158" y="118" class="s" text-anchor="middle">Entra ID</text>
    <text x="158" y="135" class="s" text-anchor="middle">via Wonderwall</text>
  </g>
  <g class="a-pass" style="--d: 1.3s">
    <text x="346" y="98" class="t" text-anchor="middle">Bytter token</text>
    <text x="346" y="118" class="s" text-anchor="middle">via Texas (OBO),</text>
    <text x="346" y="135" class="s" text-anchor="middle">gjelder bare gatewayen</text>
  </g>
  <g class="a-pass" style="--d: 2.2s">
    <text x="534" y="98" class="t" text-anchor="middle">Kaller verktøy</text>
    <text x="534" y="118" class="s" text-anchor="middle">kortlivet token,</text>
    <text x="534" y="135" class="s" text-anchor="middle">få rettigheter</text>
  </g>
  <g class="a-pass" style="--d: 3.1s">
    <text x="722" y="98" class="t" text-anchor="middle">Sjekker og logger</text>
    <text x="722" y="118" class="s" text-anchor="middle">brukeren (sub) og</text>
    <text x="722" y="135" class="s" text-anchor="middle">agenten (azp)</text>
  </g>
  <line x1="64" y1="75" x2="816" y2="75" class="div"/>
  <circle cx="816" cy="75" r="5" class="token"/>
  <rect x="0" y="152" width="880" height="90" rx="10" class="n"/>
  <text x="24" y="176" class="t">Rettigheter</text>
  <text x="160" y="176">Bare det både brukeren og agenten har lov til.</text>
  <text x="24" y="200" class="t">Tokener</text>
  <text x="160" y="200">fleet-gateway bytter token. Kortlivet token, bare i brukerens egen sandkasse. Modellen ser det aldri.</text>
  <text x="24" y="224" class="t">Logging</text>
  <text x="160" y="224">Hvem, hvilket verktøy, hvilken ressurs og utfallet. Aldri innholdet i prompten.</text>
  </svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Det finnes allerede et målbilde for KI-grunnmuren. Hvordan passer Fleet med det?»

- Flyten er vårt forslag. Den er ikke bygget
- Dette er mekanismen bak «et menneske avgjør»: agenten kan aldri mer enn brukeren, og hvert kall har et navn
- Steg 1 og 2 finnes i dag for my-copilot: Wonderwall, så Texas med OBO til copilot-api (navikt/copilot/ARCHITECTURE.md)
- Entra beskriver samme mønster for agenter: brukeren står i oid, og brukertokenet må være utstedt til agentens blueprint (aud). Kravene sub og azp i figuren er vårt forslag, ikke hentet fra Entra. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow (oppdatert 10. august 2026)
- MCP krever at tokenet er utstedt til serveren som mottar det, og forbyr å sende det videre. Derfor trengs token exchange i et betrodd ledd. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- Logging uten promptinnhold er allerede praksis: 011 logger forbruk uten innholdet i promptene, og copilot-api logger aktør ved endringer (navikt/copilot/SECURITY.md, «Audit logging»)
- Målbildet stiller samme krav: gatewayen skal ikke skjule manglende brukerautorisasjon med egne brede backend-rettigheter, og ressurseier avgjør tilgangen (målbildet, «Gateway(er), integrasjoner og kontekst»)
- MCP-gatewayen i navikt/copilot#2083, som fleet-gateway bygger på, har tre delvis bestemte punkter (tatt ut av lysbildet, si dem muntlig ved behov):
  - Innlogging: Nais-dokumentasjonen beskriver ingen måte en klient utenfor Nais (CLI, cplt-brokeren, VS Code) kan få et Entra-token til en Nais-app. Entra støtter heller ikke dynamisk klientregistrering. Derfor er gatewayen en egen OAuth 2.1-autorisasjonsserver foran Entra, med autorisasjonskode og PKCE. Entra-tokener forlater aldri Nais. Bestemt i #2089. Direkte mot Entra vurderes på nytt før fase 3
  - Mottaker: tokenet er utstedt til rute-URL-en, https://<gateway>/<server-id>/mcp (RFC 8707), og avvises på andre ruter. Et stjålet token er verdt én server og én bruker til det utløper
  - Samtykke: Nais-apper i Entra er forhåndsgodkjent av administrator, så brukeren ser ingen samtykkeside hos Entra. Gatewayen viser sin egen side per klient, med klient, server og lesing eller lesing og skriving. Uten den kan en ondsinnet klient bruke brukerens Entra-økt i det stille
  - Skriving: bare lesing først. Skriving kommer senere som et scope brukeren gir i nettleseren, bundet inn i tokenet (#2091). Klientens konfigurasjon er ikke til å stole på, for agenten kan skrive til den
  - Gatewayen kaller teamets MCP-server med OBO via Texas, og serveren gjør en ny OBO videre. Slik kjedet OBO er ikke verifisert. #2084 skal vise om det virker. Gjør det ikke det, faller gateway-tilnærmingen
  - Refresh-tokener ligger kryptert i gatewayen i høyst 10 timer (#2090). Hvis Entra nekter offline_access, må det vurderes på nytt
- Figuren øverst viser en app på Nais som bytter til et OBO-token for gatewayen. Den veien inn er vårt forslag og står ikke i #2083, som beskriver klienter utenfor Nais
- Agenten kjører i fleet-runtime, i en sandkasse som bare tilhører denne brukeren
- Tokenet ligger bare i brukerens egen sandkasse i fleet-runtime. Det er kortlivet og har smalt omfang. Modellen ser det aldri
- Derfor kan agenten klone fra GitHub i sandkassen (aksel-studio #145) uten at tokenet deles med andre brukere
- Agentens egen identitet trengs først ved bakgrunnsjobber. aksel-studio trenger det ikke nå (011, «Konsekvenser»)
- SPIFFE og WIMSE er underlaget IETF bygger agentidentitet på, men arbeidet er utkast (IETF-oversikten 31. mai 2026, lenke i notatene til lysbildet «Mange team trenger det samme»). Vi foreslår ikke å vente på dem
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet passer inn i KI-grunnmuren</h1>
<p class="subtitle">Målbildet fra 6. november setter kravene. Fleet er vårt forslag for agenter som kjører som tjenester</p>

::default::
<svg class="dg" viewBox="0 0 880 352" role="img" aria-label="Delene i målbildet Digital KI-grunnmur til venstre og delene i Fleet til høyre. Identitet, kontroll, agent-runtime, modellgateway og MCP-gateway har en motpart i Fleet. Oppdrag og arbeidsflyter og integrasjoner ligger utenfor Fleet.">
  <defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <text x="250" y="16" class="h" text-anchor="middle">KI-grunnmuren (målbildet)</text>
  <text x="675" y="16" class="h" text-anchor="middle">nav-fleet (modulnavn er forslag)</text>
  <text x="0" y="55" class="s">Styrings-</text>
  <text x="0" y="71" class="s">plan</text>
  <text x="0" y="199" class="s">Kjøre-</text>
  <text x="0" y="215" class="s">plan</text>
  <rect x="70" y="32" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="57" class="t" text-anchor="middle">Oppdrag og arbeidsflyter</text>
  <rect x="470" y="32" width="410" height="40" rx="8" class="q"/>
  <text x="675" y="57" class="s" text-anchor="middle">utenfor Fleet: issue, manifest og teamets arbeidsflate</text>
  <rect x="70" y="80" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="105" class="t" text-anchor="middle">Identitet og autorisasjon</text>
  <line x1="430" y1="100" x2="468" y2="100" class="a" marker-end="url(#ar5)"/>
  <rect x="470" y="80" width="410" height="40" rx="8" class="p"/>
  <text x="675" y="105" class="t" text-anchor="middle">fleet-control og fleet-gateway</text>
  <rect x="70" y="128" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="153" class="t" text-anchor="middle">Kontroll og oppfølging</text>
  <line x1="430" y1="148" x2="468" y2="148" class="a" marker-end="url(#ar5)"/>
  <rect x="470" y="128" width="410" height="40" rx="8" class="p"/>
  <text x="675" y="153" class="t" text-anchor="middle">fleet-control og fleet-radar</text>
  <rect x="70" y="176" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="201" class="t" text-anchor="middle">Agent-runtime</text>
  <line x1="430" y1="196" x2="468" y2="196" class="a" marker-end="url(#ar5)"/>
  <rect x="470" y="176" width="410" height="40" rx="8" class="p"/>
  <text x="675" y="201" class="t" text-anchor="middle">fleet-runtime, på egen infrastruktur</text>
  <rect x="70" y="224" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="249" class="t" text-anchor="middle">Modellgateway</text>
  <line x1="430" y1="244" x2="468" y2="244" class="a" marker-end="url(#ar5)"/>
  <rect x="470" y="224" width="410" height="40" rx="8" class="p"/>
  <text x="675" y="249" class="t" text-anchor="middle">fleet-gateway: modeller (senere)</text>
  <rect x="70" y="272" width="360" height="40" rx="8" class="b"/>
  <text x="250" y="297" class="t" text-anchor="middle">MCP-gateway(er)</text>
  <line x1="430" y1="292" x2="468" y2="292" class="a" marker-end="url(#ar5)"/>
  <rect x="470" y="272" width="410" height="40" rx="8" class="p"/>
  <text x="675" y="297" class="t" text-anchor="middle">fleet-gateway: MCP</text>
  <rect x="70" y="320" width="360" height="30" rx="8" class="n"/>
  <text x="250" y="340" text-anchor="middle">Integrasjoner og kilder</text>
  <rect x="470" y="320" width="410" height="30" rx="8" class="q"/>
  <text x="675" y="340" class="s" text-anchor="middle">utenfor Fleet: teamenes verktøy, ressurseier avgjør tilgangen</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva kan dette brukes til? Seks typer agenter.»

- Målbildet: «Digital KI-grunnmur for produktteam i Nav», status «Diskusjonsutkast, 6. november 2026». Det er heller ikke vedtatt
- Venstre side følger figuren og tabellen «Byggesteiner og kontrakter» i målbildet. Koblingene til høyre er vår lesing. Forfatterne av målbildet har ikke sett dem
- Fleet konkurrerer ikke med målbildet. Målbildet beskriver hele grunnmuren for produktutvikling. Fleet er et forslag til hvordan delene i kjøreplanet, pluss identitet og kontroll, kan bygges for agenter som kjører som tjenester
- fleet-orchestrator har ingen egen motpart i figuren. Den ligger nærmest agent-runtime og MCP-gateway(er). Oppdraget eies fortsatt utenfor Fleet
- Tre ting vi tar med oss fra målbildet:
  - «Varig arbeidsoppdrag, utskiftbare agentsesjoner». Oppdraget eies ikke av Fleet. Fleet kjører økter og logger dem med oppgave-ID
  - Modellgateway og MCP-gateway er separate kontrollflater, og registeret er fortsatt en katalog
  - Ressurseier avgjør tilgangen. Gatewayen får ingen brede rettigheter
- Målbildet krever ikke én klient, modell eller runtime. Fleet gjør heller ikke det. Lokale agenter med cplt og leverandørdriftede agenter består ved siden av
- Målbildet peker ikke ut Nais som eier av agenttjenesten eller inferenslaget. Fleet gjør heller ikke det. Eierskap er et åpent spørsmål
- Der vi går lenger: visjonen vår nevner saksbehandling. Målbildet holder saksbehandling og innbyggerdialog utenfor, og sier at en løsning for utviklingsarbeid ikke dermed er godkjent for saksbehandling. Det er vi enige i
- Målbildet foreslår å sammenligne eksisterende tilbud før noen velger gateway eller egen runtime. Det gjelder også Fleet
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Samme plattform kan bære seks typer agenter</h1>
<p class="subtitle">Fra utvikling til saksbehandling. Alle er eksempler, hypoteser eller visjon</p>

::default::
<div class="scenario-row">
  <div class="feature-card scenario">
    <div class="kicker"><span>Utvikling</span><span class="chip amber">Visjon</span></div>
    <h3>nav-pilot kjører på nav-fleet</h3>
    <p><b>Agenten</b> tar en sak, endrer koden i fleet-runtime og åpner en utkast-PR. Den når bare repoene brukeren selv har tilgang til.</p>
    <p><b>Mennesket</b> starter fra samme verktøy som i dag og godkjenner den konkrete commiten.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-container-software"></span>fleet-runtime</span>
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
  <div class="feature-card amber scenario">
    <div class="kicker"><span>Fagsystemer</span><span class="chip amber">Hypotese · visjon</span></div>
    <h3>Saksbehandleren får et utkast med kilder</h3>
    <p><b>Agenten</b> er bygget inn i systemene vi lager. Den henter fram saken og regelverket og skriver utkast.</p>
    <p><b>Mennesket</b> godkjenner alltid og står for vedtaket.</p>
    <p class="caveat">Krever jurist, risikovurdering og en modell med avklart behandling av personopplysninger.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-rule"></span>fleet-control</span>
      <span class="chip slate"><span class="i-carbon-flow"></span>fleet-orchestrator</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
</div>
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-top: 0.6rem">
  <span class="chip amber">Feilsøkingsagenter for Nais</span>
  <span class="chip amber">Analyseagenter for Nada</span>
  <span class="chip amber">Teamhjerne: teamets kunnskap og beslutninger</span>
  <span class="chip amber">Sikkerhetsagenter</span>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Tilbake til det vi faktisk har: aksel-studio.»

- Retningen: i dag kjører agentene lokalt på én utviklermaskin. Visjonen er skyagenter for ulike formål, kjørt på Fleet
- Seks typer: utvikleragenter, feilsøkingsagenter for Nais, agenter i fagsystemene, analyseagenter for Nada, teamhjerne og sikkerhetsagenter. De to kortene er de vi har tenkt mest på. De fire brikkene nederst er hypoteser
- Merkelappene: «visjon» er retningen, uten plan. «Hypotese» er noe vi tror på, men ikke har snakket med noen om. Ingen av dem er bestilt eller planlagt
- Brikkene nederst på hvert kort viser hvilke moduler eksemplet bruker. Modulnavnene er forslag

Utvikleragenten, nav-pilot på nav-fleet:
- Visjon: nav-pilot går fra et lokalt kommandolinjeverktøy på utviklerens maskin til skyagenter i fleet-runtime. Verktøyet er det samme, og det er inngangen. Det er ikke planlagt
- Følger arbeidsløpet i målbildet, steg 3 til 5: utkast i valgt runtime, utkast-PR, og menneskelig gjennomgang av konkret commit (målbildet, «Ett konkret arbeidsløp»)
- Målbildet vil at også designer, produkteier og fagperson skal kunne starte et slikt løp. Da trengs en runtime som ikke er utviklerens egen maskin. Det er fleet-runtime
- Hva Fleet tilfører: token exchange i fleet-gateway gir agenten et kortlivet token for akkurat de repoene brukeren har. I dag finnes dette løpet hos leverandøren (Copilot cloud agent) eller lokalt med cplt. Målbildet sier at verken nav-pilot eller cplt gir sentral kontroll over de flatene
- Krav fra målbildet som gjelder her: ingen direkte push til standardgrenen, og ingen produksjonshemmeligheter (målbildet, «Krav før piloten får skriverettigheter»)
- Skriving gjennom MCP er kategori 3 og avslås i dag. Eksemplet forutsetter en ny risikovurdering

Feilsøkingsagenten, som svarer på «hvorfor feiler appen min?»:
- Agenten leser dokumentasjon og status for appene til teamet som spør, og foreslår neste steg. Mennesket gjør endringene selv. Agenten har bare lesetilgang
- Hypotese fra oss. Nais har ikke bedt om dette, og vi har ikke avtalt noe
- Lesetilgang gjør ikke innholdet ufarlig: logger, labels og traces kan inneholde personopplysninger og hemmeligheter. Målbildet holder produksjonstilgang utenfor piloten og foreslår syntetiske eller særskilt godkjente data (målbildet, «Driftsinnsikt og datagrenser»)
- Første versjon bør derfor lese dokumentasjon og status, ikke logger (vår vurdering)
- Eksisterende tilgangsprosesser består. Agenten automatiserer ikke JITA eller tenantskifte (målbildet, samme avsnitt)

Saksbehandleren, agenter i systemene vi lager og tilbyr saksbehandlere:
- Dette er visjon. Det er verken planlagt eller avtalt. Målbildet holder saksbehandling og innbyggerdialog utenfor
- Mennesket avgjør og står for vedtaket. Agenten skriver utkast med kildehenvisning og endrer ikke noe i saken
- KI-forordningen, forordning (EU) 2024/1689: etter vedlegg III nr. 5 bokstav a er KI-systemer høyrisiko når offentlige myndigheter bruker dem til å vurdere om noen har rett til grunnleggende offentlige ytelser og tjenester, og til å innvilge, redusere, trekke tilbake eller kreve tilbake slike ytelser. Artikkel 14 krever at høyrisiko-KI bygges slik at mennesker kan føre effektivt tilsyn med den. Vår oversettelse fra engelsk
- Kilden er ikke primær: EUR-Lex svarte ikke på automatisk henting 16. november 2026. Ordlyden er sjekket mot gjengivelsen på https://artificialintelligenceact.eu/annex/3/ og https://artificialintelligenceact.eu/article/14/, ikke mot endringene fra 2026. Sjekk mot EUR-Lex før lysbildene deles
- Om et utkastverktøy faller inn under vedlegg III, må en jurist sjekke
- Personvernforordningen artikkel 22 gir rett til ikke å være gjenstand for avgjørelser som utelukkende bygger på automatisert behandling, med unntak blant annet når nasjonal rett tillater det og fastsetter egnede vernetiltak (nr. 2 bokstav b, https://lovdata.no/dokument/NL/lov/2018-06-15-38/gdpr/ARTIKKEL_22, lest 16. november 2026). Vi velger utkast, ikke vedtak. Om artikkelen krever det her, må en jurist sjekke
- Modellvei: Copilot kan bare brukes i repoer uten personopplysninger eller skjermingsverdig informasjon. Saksbehandling trenger en annen modell med avklart databehandling. Modellgatewayen i fleet-gateway skal gjøre det mulig. fleet-orchestrator står her for reglene om menneskelig godkjenning
- Nav behandler allerede søknader automatisk på enkelte områder, blant annet barnetrygd, dagpenger, alderspensjon, foreldrepenger og sykepenger. En regelmotor sjekker vilkårene, og søkeren har rett til å få en saksbehandler til å vurdere søknaden. Siden nevner ikke KI (https://www.nav.no/automatisk-behandling, lest 16. november 2026). Eksemplet her handler om utkast til et menneske, ikke om flere automatiske vedtak
- Hvorfor ta det med: det er her Navs oppdrag ligger. Plattformen bør bygges slik at den kan bære dette senere, selv om første versjon ikke gjør det (vår vurdering)

Analyseagenter for Nada:
- Analytikeren spør dataproduktene med vanlige ord. Agenten finner dataproduktet, skriver spørringen og kjører den med analytikerens egen tilgang. Mennesket leser spørringen og vurderer svaret
- Hypotese fra oss. Vi har ikke snakket med Nada
- fleet-orchestrator står her for RAG mot dataproduktene med tilgang på dokumentnivå. Det er et forslag
- Poenget er policy og logging rundt verktøykallet: hvem spurte, hvilket dataprodukt, og ble det tillatt. Tilgangen er analytikerens egen, så agenten ser aldri mer enn analytikeren
- Målbildet sier det samme: ressurseier avgjør tilgangen, og et samlet verktøyendepunkt gir ikke samlet tilgang til alle kilder (målbildet, «Byggesteiner og kontrakter»)
- Dataprodukter med personopplysninger er kategori 3 eller 4 for MCP og er ikke tillatt i dag. En første versjon må holde seg til åpne eller ikke-sensitive dataprodukter
- Svaret går til en modell. Dataminimering må skje i et betrodd ledd før modellkallet (målbildet, «Driftsinnsikt og datagrenser»)

Teamhjerne og sikkerhetsagenter:
- Hypoteser fra oss. Teamhjernen er en agent som kjenner teamets egen kunnskap og beslutninger. Vi har ikke utredet hva en sikkerhetsagent skal gjøre, og ingen har bedt om noen av dem
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Første steg: aksel-studio flytter til Fleet</h1>
<p class="subtitle">Designere skal lage prototyper med KI. Studio beholder domenet, og grensesnittene er på plass</p>

::default::
<svg class="dg" viewBox="0 0 880 350" role="img" aria-label="I dag henter studio-api brukerens token fra Postgres og sender det til studio-ki,. Med Fleet sender studio-api et OBO-token til fleet-runtime, der hver bruker har sin egen sandkasse, og fleet-gateway kaller verktøyene i studio-api og gjør token exchange.">
  <defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <text x="0" y="16" class="h">I dag</text>
  <rect x="0" y="30" width="120" height="40" rx="8" class="b"/>
  <text x="60" y="55" text-anchor="middle">nettleser</text>
  <line x1="60" y1="70" x2="60" y2="94" class="a" marker-end="url(#ar4)"/>
  <rect x="0" y="96" width="180" height="96" rx="8" class="b"/>
  <text x="90" y="122" class="t" text-anchor="middle">studio-api</text>
  <text x="90" y="146" class="s" text-anchor="middle">9 verktøy, forslag,</text>
  <text x="90" y="164" class="s" text-anchor="middle">kvote og tokenlagring</text>
  <rect x="236" y="112" width="164" height="64" rx="8" class="b"/>
  <text x="318" y="138" class="t" text-anchor="middle">Postgres</text>
  <text x="318" y="158" class="s" text-anchor="middle">GitHub-token per bruker</text>
  <line x1="236" y1="144" x2="182" y2="144" class="a" marker-end="url(#ar4)"/>
  <line x1="90" y1="192" x2="90" y2="226" class="a" marker-end="url(#ar4)"/>
  <rect x="0" y="228" width="180" height="60" rx="8" class="w"/>
  <text x="90" y="252" class="t" text-anchor="middle">studio-ki</text>
  <line x1="90" y1="288" x2="90" y2="306" class="a" marker-end="url(#ar4)"/>
  <rect x="0" y="308" width="180" height="38" rx="8" class="n"/>
  <text x="90" y="332" text-anchor="middle">Copilot API</text>
  <line x1="443" y1="0" x2="443" y2="350" class="a-grow" style="stroke: var(--nais-border); stroke-width: 1.5; --d: 0.5s"/>
  <g class="a-fade" style="--d: 1.2s">
    <text x="460" y="16" class="h">Med Fleet</text>
    <rect x="460" y="30" width="120" height="40" rx="8" class="b"/>
    <text x="520" y="55" text-anchor="middle">nettleser</text>
    <line x1="520" y1="70" x2="520" y2="94" class="a" marker-end="url(#ar4)"/>
    <rect x="460" y="96" width="160" height="96" rx="8" class="b"/>
    <text x="540" y="122" class="t" text-anchor="middle">studio-api</text>
    <text x="540" y="146" class="s" text-anchor="middle">forslagsflyten,</text>
    <text x="540" y="164" class="s" text-anchor="middle">verktøy som MCP-server</text>
    <rect x="692" y="30" width="188" height="258" rx="10" class="p"/>
    <text x="786" y="54" class="t" text-anchor="middle">nav-fleet</text>
    <rect x="706" y="68" width="160" height="50" rx="8" class="b"/>
    <text x="786" y="90" text-anchor="middle">fleet-runtime</text>
    <text x="786" y="108" class="s" text-anchor="middle">sandkasse per bruker</text>
    <rect x="706" y="140" width="160" height="56" rx="8" class="b"/>
    <text x="786" y="163" text-anchor="middle">fleet-gateway</text>
    <text x="786" y="182" class="s" text-anchor="middle">MCP, regler, logging</text>
    <rect x="706" y="218" width="160" height="50" rx="8" class="b"/>
    <text x="786" y="248" text-anchor="middle">tokenbytte</text>
    <line x1="620" y1="108" x2="704" y2="108" class="a" marker-end="url(#ar4)"/>
    <text x="656" y="100" class="s" text-anchor="middle">OBO</text>
    <line x1="706" y1="172" x2="622" y2="172" class="a" marker-end="url(#ar4)"/>
    <text x="656" y="164" class="s" text-anchor="middle">verktøy</text>
    <line x1="786" y1="118" x2="786" y2="138" class="a" marker-end="url(#ar4)"/>
    <line x1="786" y1="196" x2="786" y2="216" class="a" marker-end="url(#ar4)"/>
    <line x1="786" y1="268" x2="786" y2="306" class="a" marker-end="url(#ar4)"/>
    <rect x="706" y="308" width="160" height="38" rx="8" class="n"/>
    <text x="786" y="332" text-anchor="middle">Copilot API</text>
    <text x="460" y="226" class="t">Først i fleet-runtime</text>
    <text x="460" y="244" class="s">studio-ki får sandkasse per bruker</text>
    <text x="460" y="274" class="t">Studio slipper</text>
    <text x="460" y="292" class="s">egen runtime, tokenlagring og kvote</text>
    <text x="460" y="322" class="t">Grensesnittene er i koden</text>
    <text x="460" y="340" class="s">Tool, Runtime og TokenProvider</text>
  </g>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvordan kommer vi fra dette til visjonen?»

- Dette er det ene tilfellet vi kjenner i detalj. KI-chatten i aksel-studio skal la designere lage forslag i et konsept (019). Den er på vei til dev og ikke i bruk ennå. Målbildet nevner Aksel Studio som mulig arbeidsflate for designere
- I dag: studio-api åpner en økt i studio-ki med brukerens ghu_-token og verktøyene. Verktøyene kjører i studio-api (019, «Slik går et verktøykall»)
- Studio gjør mye riktig: tom modus, tilgangssjekk i hvert verktøy, og bare forslag som brukeren må godta (011, 019). Det er «mennesket avgjør» i liten skala
- Høyre side er et forslag. Ingenting av Fleet finnes ennå. Hvem som erstatter hva, er vår vurdering
- studio-ki blir den første brukeren av fleet-runtime. Hver bruker får sin egen sandkasse, og tokenet finnes bare der. Da blir kloning fra GitHub blir mulig (aksel-studio #145)
- Forslagsflyten med godta, forkast og If-Match er domenelogikk og blir i Studio (019, «Godta og forkaste»). Domenegrensene blir også: 3 minutter, 20 forslag, 8000 tegn, 3 bilder (019, «Grenser per melding»)
- Grensesnittene: «Tre små grensesnitt i backend/internal/chat gjør det mulig å bytte KI-plattform senere uten å skrive om resten» (019, «Første versjon i studio-api»). Koden ligger på main i backend/internal/chat/chat.go, med Tool (linje 35), TokenProvider (linje 49) og Runtime (linje 97). Copilot SDK mot studio-ki er én implementasjon, og testene bruker en falsk
  - Tool: verktøy med samme form som i MCP. Bruker og konsept kommer fra serveren, aldri fra modellen
  - Runtime: starter en kjøring og gir en strøm av hendelser
  - TokenProvider: all tilgang til brukerens token går ett sted. Senere: token exchange i fleet-gateway
- Forbehold: koden er merget (aksel-studio #143), men 019 har fortsatt status «Foreslått». Vi har ikke målt hvor mye arbeid byttet er
-->

---
layout: timeline
---

::header::
<h1 class="text-3xl font-bold">Veikartet: styring først, så ett team, så flere</h1>
<p class="subtitle">Tre faser uten datoer. Ingenting er estimert eller vedtatt</p>

::default::
<TimelineNode version="Nå" year="styring" title="Beslutt" description="Beslutningsnotat (ADR) og eier. Jurist avklarer token og lisens." icon="i-carbon-document" />
<TimelineNode version="Fase 1" year="ett team" title="Gateway og control" description="Samler modell- og verktøykall ett sted. aksel-studio er først." icon="i-carbon-gateway" />
<TimelineNode version="Fase 2" year="flere team" title="Runtime og radar" description="Sandkasse per bruker og selvbetjent innsikt." icon="i-carbon-radar" />
<TimelineNode version="Fase 3" year="data og regler" title="Orchestrator" description="Dataprodukter fra Nada og regler for menneskelig godkjenning." icon="i-carbon-flow" />

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Det er ting vi ikke vet ennå.»

- Rekkefølgen er vår anbefaling. Fasene har ingen datoer. Vi har ikke estimert noe, og ingen har forpliktet seg
- Nå: vi skriver ADR-en «Agenter som tjenester i Nav». Den dekker eier, isolasjonskrav, token per økt og loggfelt. Jurist og GitHub avklarer token på server og brukere uten lisens
- Fase 1: fleet-gateway og fleet-control. Fleet samler modell- og verktøykall ett sted og knytter dem til identiteten appen har på Nais. Da blir kostnaden synlig. aksel-studio er først ut, med token exchange på vegne av brukeren. Grensesnittene i aksel-studio er allerede på main
- Fase 2: fleet-runtime, fleet-sdk med deklarativ konfigurasjon ved siden av nais.yaml, og fleet-radar. studio-ki flytter inn i fleet-runtime som første bruker, med én sandkasse per bruker. PII-vask i gatewayen er et forslag som må utredes. Skriveverktøy forutsetter at kategori 3 er risikovurdert
- Fase 3: fleet-orchestrator. Dataprodukter fra Nada i RAG og agenter, og felles regler for menneskelig godkjenning sammen med Aksel. Agentens egen identitet kommer når noen trenger bakgrunnsjobber
- Etter fase 3: saksbehandling i fagsystemer er visjon. Det krever egen modellvei, risikovurdering og juridisk avklaring
- Ytre datoer vi kjenner: statsråden vil fremme KI-loven for Stortinget våren 2027, og de første reglene for høyrisiko-KI i EU gjelder fra 2. desember 2027. https://www.regjeringen.no/no/aktuelt/id3169693/
- Målbildet for KI-grunnmuren foreslår en pilot med ett team og et udekket behov før noen velger gateway eller egen runtime (målbildet, «Første beslutning og videre eierskap»). Fase 1 kan være den piloten, eller komme etter den. Det må avklares med forfatterne
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Seks spørsmål vi må avklare underveis</h1>
<p class="subtitle">Ingen av dem hindrer et beslutningsnotat (ADR)</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3>Lisens</h3>
    <p>Kan en tjeneste bruke brukerens token? Hva med brukere uten lisens?</p>
  </div>
  <div class="feature-card green">
    <h3>Personvern</h3>
    <p>Copilot kan bare brukes i repoer uten personopplysninger.</p>
  </div>
  <div class="feature-card amber">
    <h3>KI-loven</h3>
    <p>Blir noen av agentene høyrisiko? Vi har ikke vurdert det.</p>
  </div>
</div>
<div class="card-row">
  <div class="feature-card purple">
    <h3>Eierskap</h3>
    <p>Ingen eier agenter som tjenester i dag.</p>
  </div>
  <div class="feature-card green">
    <h3>Drift</h3>
    <p>Vi kjenner ikke GitHubs grenser per bruker.</p>
  </div>
  <div class="feature-card">
    <h3>Leverandørbinding</h3>
    <p>Copilot CLI og SDK binder oss til GitHub. MCP gjør det billig å bytte.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Avslutning: «Hva mener dere? Hva mangler, og hvem bør være med?»

- Lisens: lisens per bruker gir enkel kostnadsfordeling, men brukere uten Copilot mister funksjonen (011). Om vilkårene tillater at en tjeneste bruker brukerens token, er åpent (vår vurdering). Copilot CLI har egen lisens, ikke MIT. Den tillater å kjøre uendret programvare som del av en tjeneste, og jus og sikkerhet skal bekrefte det (011, «Oppfølging»)
- Personvern: Copilot kan brukes i alle repoer uten personopplysninger eller skjermingsverdig informasjon. Bilder i chat øker risikoen (019, «Bilder»)
- KI-loven: vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Eksemplet med saksbehandleren er det som ligger nærmest (vedlegg III nr. 5 bokstav a). Det må en jurist sjekke
- Eierskap: styringsmodellen dekker utviklerflater og har ingen rolle for agenter som tjenester. Målbildet sier at KI i produktutvikling kan eie deler av grunnmuren midlertidig, og at tjenesten ikke kan bli eierløs
- Drift: GitHubs grenser per bruker er ikke oppgitt med tall (011, «Uavklart»)
- Leverandørbinding: bindingen ligger i runtimen, ikke i domenet (vår vurdering)
- Fritt modellvalg er en bærebjelke i visjonen, ikke noe vi har i dag
- Navnet nav-fleet er valgt. Modulnavnene og fleet.nav.no er forslag
- «Ingen av dem stopper en ADR» er vår vurdering
- Et sjuende spørsmål står ikke på lysbildet: virker kjedet OBO gjennom Texas? fleet-gateway bygger på MCP-gatewayen i navikt/copilot#2083, og den forutsetter det. Forsøket i #2084 avgjør. Feiler det, faller gateway-tilnærmingen

Hva vi ber om, hvis noen spør:
- En eier. Styringsmodellen har ingen rolle for agenter som tjenester. Vi foreslår ingen
- Et ja til ADR-en «Agenter som tjenester i Nav». Den dekker eier, isolasjonskrav, token per økt og loggfelt, og bør skrives sammen med forfatterne av målbildet
- Navngitte folk til å utrede: én fra KI i produktutvikling, Nais, Nada, sikkerhet og identitet, og en jurist
- Vi ber ikke om budsjett, et team eller et ja til hele visjonen
-->

---
layout: default
---

::header::
<h1 class="text-4xl font-black">Himmelen er grensen</h1>
<p class="tagline mt-2">nav-fleet gir agentene vinger. Mennesket har kursen.</p>

::default::
<svg class="dg fly" viewBox="0 0 880 340" role="img" aria-label="Seks piler i trekantformasjon stiger mot øvre høyre hjørne i en åpen himmel. En stiplet linje foran den fremste pilen viser kursen.">
  <g class="climb">
    <path d="M572 98L620 50" class="course"/>
    <path d="M607 48h15v15" class="courseh"/>
    <g transform="translate(540 130) rotate(45)">
      <FleetShip x="0" y="0" scale="2" trail="6" class="lead"/>
      <FleetShip x="-29" y="50" scale="1.7" trail="6"/>
      <FleetShip x="29" y="50" scale="1.7" trail="6"/>
      <FleetShip x="-58" y="100" scale="1.7" trail="6"/>
      <FleetShip x="0" y="100" scale="1.7" trail="6"/>
      <FleetShip x="58" y="100" scale="1.7" trail="6"/>
    </g>
  </g>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
- Slagordet: «Himmelen er grensen. Mennesket har kursen.»
- Engelsk variant: «Sky is the limit. Safety is the default.»
- Figuren: de samme pilene som på forsiden, nå på vei opp i åpen himmel
-->
