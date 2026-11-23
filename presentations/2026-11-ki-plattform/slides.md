---
theme: default
title: 'nav-fleet: trygge KI-agenter i Nav'
htmlAttrs:
  lang: 'no'
transition: slide-left
mdc: true
layout: cover
routerMode: hash
colorSchema: light
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
<p class="cover-kicker font-mono">PLAN · GJELDENDE RETNING, IKKE LÅST</p>
<img src="/icons/fleet/nav-fleet.svg?v=8" alt="" class="cover-mark" />
<h1 class="cover-title">nav-fleet</h1>
<p class="cover-tagline">Agentene gjør forarbeidet.<br>Mennesket avgjør.</p>
<p class="cover-sub">Trygge KI-agenter i Nav, som byggeklosser</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «La oss se på fem agenter.»

- Dette er en plan med gjeldende retning. Den er ikke låst, og eieren har sagt at ingenting er hugget i stein
- Merkelappene: «besluttet» er bestemt av eieren, «forslag» er vår anbefaling, «visjon» er retningen uten plan, «hypotese» er noe vi tror, men ikke har avtalt med noen
- Rekkefølgen: fem agenter med samme byggeklosser, isfjellet, ett spørsmål gjennom Fleet, innsyn, ansvar, behovet, det som virker i dag, formål og grenser, visjonen, modulene, kjøretiden, identitet, styring, kostnad, status, veikartet og åpne spørsmål
- Navnet: nav-fleet, til daglig Fleet, på linje med Nais, Nada og Aksel. nav-pilot var én pilot. Fleet er en flåte i produksjon, og plattformen er flåtestyringen
- Modulene er fire: fleet-gateway, fleet-control, fleet-runtime og fleet-radar for innsyn og revisjon. I tillegg kommer et offentlig register og MCP-servere som teamene eier
- Kjente navn utenfor Nav: Rancher Fleet, Fleet (enhetsstyring) og JetBrains Fleet. Vi har ikke sjekket varemerker
-->

---
layout: default
clicks: 4
---

::header::
<h1 class="text-3xl font-bold">Fem agenter, de samme fem byggeklossene</h1>
<p class="subtitle">Ulike team og formål. Under vannlinjen trenger alle det samme</p>

::default::
<div class="five">
  <div class="five-left">
  <div class="five-steps">
    <span :class="{ on: $clicks === 0 }">Aksel Studio <i class="st ok">finnes</i></span>
    <span :class="{ on: $clicks === 1 }">Dolly <i class="st">eksempel</i></span>
    <span :class="{ on: $clicks === 2 }">Nais Console <i class="st">eksempel</i></span>
    <span :class="{ on: $clicks === 3 }">Titt På Ting <i class="st">eksempel</i></span>
    <span :class="{ on: $clicks === 4 }" class="later">Saksbehandling <i class="st">senere fase</i></span>
  </div>
  <div class="five-frame">
    <div class="app ax" :class="{ on: $clicks === 0 }">
      <BrowserWindow url="aksel-studio (skisse)" class="aw">
        <div class="ax-grid">
          <aside class="ax-side"><b>Prototyper</b><span class="in1">Start</span><span class="in1 on">Søknad</span><span class="in1">Kvittering</span></aside>
          <main class="ax-main">
            <div class="ax-banner"><span><b>Agenten har foreslått endringer</b></span><u>Godta</u><i>Forkast</i></div>
            <div class="ax-page"><div class="ax-head">Nav</div><h4>Søknad om tjeneste</h4><small>Steg 1 av 3</small><div class="bar"><i></i></div><div class="ax-card"><b>Om deg</b><div class="fld"></div><div class="fld"></div></div></div>
          </main>
          <aside class="ax-chat"><p class="me">Foreslå en endring for å gjøre dette litt mer forseggjort</p><div class="bot">Jeg foreslår:<ul><li>en ingress øverst</li><li>hjelpetekst på feltene</li><li>tydeligere neste-knapp</li></ul></div><small class="ax-file">Forslag til 1 fil</small><div class="inp">Melding til agenten …</div></aside>
        </div>
      </BrowserWindow>
    </div>
    <div class="app dl" :class="{ on: $clicks === 1 }">
      <BrowserWindow url="dolly (skisse)" class="aw">
        <div class="dl-grid">
          <main>
            <h4>Opprett testperson</h4>
            <div class="dl-filters"><span>Alder: 30–40</span><span>Sivilstand: gift</span><span>Arbeidsforhold: 2</span><span>Barn: 1</span></div>
            <table><tr><th>Navn</th><th>Alder</th><th>Arb.forhold</th><th>Barn</th></tr><tr><td>Testperson A</td><td>34</td><td>2</td><td>1</td></tr><tr><td>Testperson B</td><td>38</td><td>2</td><td>1</td></tr><tr><td>Testperson C</td><td>31</td><td>2</td><td>1</td></tr><tr><td>Testperson D</td><td>36</td><td>2</td><td>1</td></tr><tr><td colspan="4">… 16 til, bare syntetiske data</td></tr></table>
            <div class="dl-order"><span>20 testpersoner klare</span><u>Bestill</u></div>
          </main>
          <aside class="dl-chat"><p class="me">Lag 20 testpersoner med to arbeidsforhold og et barn</p><div class="bot">Jeg har fylt ut skjemaet og laget en forhåndsvisning.<span class="dl-note">Ingenting bestilles før du trykker <u>Bestill</u></span></div></aside>
        </div>
      </BrowserWindow>
    </div>
    <div class="app nc" :class="{ on: $clicks === 2 }">
      <BrowserWindow url="nais console (skisse)" class="aw">
        <div class="nc-top"><b>Nais Console</b> / team</div>
        <div class="nc-grid">
          <nav><span>Applications</span><span>Jobs</span><span>Secrets</span><span>Postgres</span><span>Alerts</span><span>Deployments</span><span>Cost</span></nav>
          <main>
            <h4>min-app <em>dev-gcp</em></h4>
            <div class="nc-tabs"><span class="on">Overview</span><span>Deployments</span><span>Logs</span><span>Events</span></div>
            <div class="nc-cards"><div><b>0</b> issues</div><div><b>1/1</b> instances ready</div></div>
            <div class="nc-ask"><b>Spør Nais:</b> Hemmeligheten finnes ikke i miljøet. Jeg foreslår å legge den til i manifestet. <u>Opprett PR</u></div>
          </main>
          <aside><b>Recent events</b><p class="warn">Health check failed: readiness check failed, connection refused</p><p class="warn">Mount failed: secret not found<u class="fx">Forklar</u></p></aside>
        </div>
      </BrowserWindow>
    </div>
    <div class="app tt" :class="{ on: $clicks === 3 }">
      <BrowserWindow url="titt på ting (skisse)" class="aw">
        <div class="tt-tabs"><span class="on">Vulnerabilities</span><span>Compliance</span><span>Golden Path</span></div>
        <div class="tt-grid">
          <main>
            <h4>Vulnerability prioritization that makes sense</h4>
            <div class="tt-buckets"><div><b>0</b>Immediately</div><div class="m"><b>18</b>Must be prioritized</div><div><b>634</b>Must be scheduled</div></div>
            <div class="tt-group"><b>team/app</b> (15 vulnerabilities)<span>Rebuild base image: 15 vulnerabilities in 2 OS packages</span></div><div class="tt-group"><b>team/app-2</b> (3 vulnerabilities)<span>Upgrade dependency: 3 vulnerabilities in 1 library</span></div>
          </main>
          <aside class="tt-chat"><p class="bot">Disse er prioritert fordi appene er eksponert og det finnes en fiks i et nyere base image.</p><div class="tt-pr">Bygg nytt base image · PR i 4 apper <u>Godkjenn</u></div><small>Teamets eier godkjenner</small></aside>
        </div>
      </BrowserWindow>
    </div>
    <div class="app sb" :class="{ on: $clicks === 4 }">
      <BrowserWindow url="saksbehandling (skisse)" class="aw">
        <div class="sb-grid">
          <nav><b>Dokumenter</b><span>Søknad</span><span>Vedlegg 1</span><span>Vedlegg 2</span><span>Notat</span></nav>
          <main><h4>Sak</h4><dl class="sb-dl"><dt>Sakstype</dt><dd>Søknad om tjeneste</dd><dt>Mottatt</dt><dd>3. november</dd><dt>Status</dt><dd>Venter på vedlegg</dd><dt>Dokumenter</dt><dd>4</dd></dl><div class="fld"></div><div class="fld s"></div></main>
          <aside><b>Utkast til oppsummering</b><p>Søknaden mangler et vedlegg. <sup>[1]</sup></p><p>Søkeren har levert to av tre dokumenter. <sup>[2]</sup></p><div class="sb-act"><span>Rediger</span><u>Godkjenn</u></div></aside>
        </div>
        <div class="sb-later">senere fase</div>
      </BrowserWindow>
    </div>
  </div>
  </div>
  <ol class="five-blocks" :key="$clicks">
    <li :class="{ used: true }" style="--d: 0.25s"><b class="pin">1</b><strong>Identitet</strong><span>på vegne av brukeren</span><code>fleet-gateway</code></li>
    <li :class="{ used: true }" style="--d: 0.45s"><b class="pin">2</b><strong>Verktøyregler</strong><span>bare det agenten har lov til</span><code>fleet-control</code></li>
    <li :class="{ used: $clicks === 0 || $clicks === 3 }" style="--d: 0.65s"><b class="pin">3</b><strong>Sandkasse</strong><span>bygger isolert, uten nøkler</span><code>fleet-runtime</code></li>
    <li :class="{ used: true }" style="--d: 0.85s"><b class="pin">4</b><strong>Godkjenning</strong><span>mennesket sier ja</span><code>appen</code></li>
    <li :class="{ used: true }" style="--d: 1.05s"><b class="pin">5</b><strong>Revisjon</strong><span>og kostnad per steg</span><code>fleet-radar</code></li>
  </ol>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Klikk gjennom fem apper. Agenten sitter inne i appen, slik teamet har bygget den. Byggeklossene under lyser opp for det hver agent bruker
- Alle skissene er forenklet. Navn og tall er oppdiktet
- Aksel Studio (finnes): designeren ber agenten forbedre en prototype. Agenten foreslår, og ingenting endres før designeren trykker Godta. Byggingen kjører i en sandkasse
- Dolly (eksempel): agenten gjør en setning om til en bestilling av syntetiske testpersoner. Bestill krever et klikk. Bare syntetiske data
- Nais Console (eksempel): agenten forklarer en hendelse og finner årsaken. Den leser bare. Å opprette en PR krever et klikk
- Titt På Ting (eksempel): en etterlevelsesagent forklarer hvorfor sårbarheter er prioritert, og foreslår å bygge nytt base image som en PR i flere apper. Teamets eier godkjenner. Bygget kjører i en sandkasse
- Saksbehandling (senere fase): et utkast til oppsummering med kildehenvisninger, som saksbehandleren redigerer og godkjenner. Ikke i piloten. Krever brukerdata, PVK og juridisk avklaring
- nav-pilot er også et aktuelt eksempel: agenter fra nav-pilot kan kjøre i fleet-runtime i stedet for på utviklerens maskin. Det er en hypotese
- Vi har med vilje ikke tatt med en agent for innbyggere på nav.no. Tjenester for innbyggere er et ikke-mål
- Overgang: «La oss se hva som skjer under vannlinjen for den første av dem.»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Chatten er bare toppen av isfjellet</h1>
<p class="subtitle">Designagenten i Aksel Studio. Fleet tar seg av det som ligger under vannlinjen <span class="chip amber align-middle ml-2">Eksempel · forslag</span></p>

::default::
<div class="tip">
  <BrowserWindow url="aksel-studio · konsept: søknadsskjema (skisse)" class="tip-win" role="img" aria-label="Skisse av Aksel Studio med en KI-assistent i et sidepanel. Fem nummererte punkter i chatten svarer til fem byggeklosser: fleet-gateway handler på vegne av designeren, fleet-control slipper bare til verktøy agenten har lov til, fleet-runtime bygger isolert uten nøkler i sandkassen, appen ber designeren si ja før en bestilling, og fleet-radar viser revisjon og kostnad for hvert steg.">
    <div class="km-top">
      <strong>Aksel Studio</strong>
      <span class="on">Søknadsskjema</span>
      <span>Konsepter</span>
      <span class="km-login">Ola N. <b class="pin a-fade" style="--d: 0.9s">1</b></span>
    </div>
    <div class="ch">
      <div class="ch-case">
        <h2>Søknadsskjema</h2>
        <dl><dt>Status</dt><dd>Utkast</dd><dt>Sider</dt><dd>3</dd><dt>Forslag</dt><dd>2 nye</dd></dl>
        <div class="ch-doc"></div><div class="ch-doc short"></div><div class="ch-doc"></div><div class="ch-doc short"></div>
      </div>
      <div class="ch-chat">
        <div class="ch-head"><span class="i-carbon-chat-bot" /> Assistent <b class="pin a-fade" style="--d: 1.5s">3</b></div>
        <p class="ch-user a-rise" style="--d: 0.2s">Lag en prototype av skjemaet med testdata.</p>
        <p class="ch-tool a-fade" style="--d: 0.45s"><span class="i-carbon-build-tool" /> Bygger prototypen <b class="pin a-fade" style="--d: 1.2s">2</b></p>
        <p class="ch-bot a-rise" style="--d: 0.6s">Prototypen er klar. Den trenger en testperson fra Dolly.</p>
        <div class="ch-approve a-rise" style="--d: 0.75s"><span>Bestille testperson?</span><u>Ja</u><i>Nei</i><b class="pin a-fade" style="--d: 1.8s">4</b></div>
        <p class="ch-foot">KI kan ta feil · hvert steg revideres <b class="pin a-fade" style="--d: 2.1s">5</b></p>
      </div>
    </div>
  </BrowserWindow>
  <div class="tip-stack">
    <div class="tip-see"><span class="i-carbon-user-avatar" /><div><strong>Det brukeren ser</strong>Chatten i teamets egen app</div><em>teamet eier</em></div>
    <div class="tip-water"><span>vannlinjen</span></div>
    <div class="tip-fleet a-rise" style="--d: 0.9s">
      <div class="tip-fleet-head"><img src="/icons/fleet/nav-fleet.svg?v=8" alt="" /><strong>nav-fleet</strong><em>felles for alle team</em></div>
      <ol>
        <li class="a-rise" style="--d: 0.9s"><b class="pin">1</b><span>Handler på vegne av Ola</span><code>fleet-gateway</code></li>
        <li class="a-rise" style="--d: 1.2s"><b class="pin">2</b><span>Bare verktøy agenten har lov til</span><code>fleet-control</code></li>
        <li class="a-rise" style="--d: 1.5s"><b class="pin">3</b><span>Bygger isolert, uten nøkler</span><code>fleet-runtime</code></li>
        <li class="a-rise" style="--d: 1.8s"><b class="pin">4</b><span>Ingen bestilling uten ja fra Ola</span><code>appen</code></li>
        <li class="a-rise" style="--d: 2.1s"><b class="pin">5</b><span>Revisjon og kostnad per steg</span><code>fleet-radar</code></li>
      </ol>
    </div>
    <div class="tip-base a-fade" style="--d: 2.4s">Teamets egen modell · MCP-servere fra teamene · Nais</div>
  </div>
</div>
<p class="footnote tight a-fade" style="--d: 2.6s">Teamet eier appen, agenten og det agenten gjør. Fleet leverer byggeklossene under vannlinjen og håndhever reglene.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Svar på spørsmålet «er ikke dette bare en chat på en side?». Chatvinduet er enkelt. Det som gjør det trygt å sette i produksjon, ligger under vannlinjen
- Eksemplet er Aksel Studio, der designere lager prototyper med KI. Navnet Ola og konseptet er oppdiktet. Flyttingen til Fleet er et forslag
- Gå gjennom punktene i rekkefølge. Hvert nummer i chatten svarer til en byggekloss
- Punkt 1: fleet-gateway vet hvem brukeren er og hvilken agent som spør, og bytter til et token per verktøy
- Punkt 2: fleet-control har agentprofilen. Den sier hvilke verktøy agenten får bruke. Rettighetene er snittet av det brukeren, ruten og agenten har lov til
- Punkt 3: bygget kjører i fleet-runtime. Sandkassen er stengt for trafikk ut, og modellnøkler legges på utenfor sandkassen
- Punkt 4: å bestille i Dolly er skriving. Appen spør brukeren, og jobben venter på svaret. At jobben kan pause og spørre, kommer etter fase 1
- Punkt 5: fleet-radar viser revisjonen av hvert kall med bruker og agent, og bruken per team og agent
- Data: bare åpne og interne data og syntetiske testdata går gjennom modellene i piloten
- Overgang: «Hva skjer egentlig under vannlinjen når Ola trykker enter?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet passer på hvert steg</h1>
<p class="subtitle">Ett spørsmål, fem steg under vannlinjen <span class="chip amber align-middle ml-2">Eksempel · forslag</span></p>

::default::
<svg class="dg seq" viewBox="0 0 880 340" role="img" aria-label="Sekvensdiagram i fem steg. 1: Ola spør i Aksel Studio, og appen starter en jobb i fleet-runtime. 2: Agenten spør teamets egen modell, og nøkkelen legges på utenfor sandkassen. 3: Agenten søker etter testpersoner i Dolly gjennom fleet-gateway, og fleet-control sjekker at agenten har lov. 4: Agenten foreslår å bestille en testperson, og Ola sier ja i appen. 5: Agenten bestiller gjennom fleet-gateway, som sjekker godkjenningen, og jobben avsluttes med et artefakt. Nederst viser fleet-radar én revisjonslinje per steg.">
  <defs><marker id="ar9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="15.0" y="0" width="110" height="44" rx="8" class="b"/><text x="70" y="19" class="t" text-anchor="middle">Ola i appen</text><text x="70" y="36" class="s" text-anchor="middle">Aksel Studio</text><line x1="70" y1="44" x2="70" y2="284" class="life"/><rect x="215.0" y="0" width="150" height="44" rx="8" class="p"/><text x="290" y="19" class="t" text-anchor="middle">Agent</text><text x="290" y="36" class="s" text-anchor="middle">fleet-runtime</text><line x1="290" y1="44" x2="290" y2="284" class="life"/><rect x="425.0" y="0" width="150" height="44" rx="8" class="p"/><text x="500" y="19" class="t" text-anchor="middle">fleet-gateway</text><text x="500" y="36" class="s" text-anchor="middle">sjekker verktøykall</text><line x1="500" y1="44" x2="500" y2="284" class="life"/><rect x="635.0" y="0" width="110" height="44" rx="8" class="b"/><text x="690" y="19" class="t" text-anchor="middle">Modell</text><text x="690" y="36" class="s" text-anchor="middle">teamets egen</text><line x1="690" y1="44" x2="690" y2="284" class="life"/><rect x="760.0" y="0" width="110" height="44" rx="8" class="b"/><text x="815" y="19" class="t" text-anchor="middle">Verktøy</text><text x="815" y="36" class="s" text-anchor="middle">Dolly</text><line x1="815" y1="44" x2="815" y2="284" class="life"/>
  <rect x="0" y="292" width="880" height="46" rx="8" class="n"/><text x="10" y="302" class="s rad">revisjon i fleet-radar</text>
  <g v-click><line x1="70" y1="74" x2="282" y2="74" class="a" marker-end="url(#ar9)"/><text x="190" y="68" class="s" text-anchor="middle">Start jobb (jobb-API)</text><rect x="47" y="59" width="18" height="18" rx="4" class="pn"/><text x="56" y="71.5" class="pnt" text-anchor="middle">1</text><rect x="282" y="64" width="16" height="200" rx="3" class="sbx"/><text x="276" y="100" class="s sbt" text-anchor="end">sandkasse for jobben</text><g><g class="lg"><rect x="18" y="306" width="132" height="24" rx="5"/><text x="84" y="322" text-anchor="middle">1 · Ola · start</text></g></g></g>
  <g v-click><line x1="298" y1="112" x2="690" y2="112" class="a" marker-end="url(#ar9)"/><text x="400" y="106" class="s" text-anchor="middle">Lag skjemaet</text><rect x="307" y="87" width="18" height="18" rx="4" class="pn"/><text x="316" y="99.5" class="pnt" text-anchor="middle">2</text><text x="560" y="126" class="s gwt" text-anchor="middle">nøkkelen legges på utenfor sandkassen</text><line x1="690" y1="140" x2="300" y2="140" class="a ret" marker-end="url(#ar9)"/><g class="lg"><rect x="162" y="306" width="132" height="24" rx="5"/><text x="228" y="322" text-anchor="middle">2 · modell · ok</text></g></g>
  <g v-click><line x1="298" y1="168" x2="815" y2="168" class="a" marker-end="url(#ar9)"/><circle cx="500" cy="168" r="4.5" class="gwd"/><text x="400" y="162" class="s" text-anchor="middle">Finn testpersoner</text><rect x="307" y="143" width="18" height="18" rx="4" class="pn"/><text x="316" y="155.5" class="pnt" text-anchor="middle">3</text><g class="chk"><rect x="410" y="174" width="180" height="20" rx="10"/><text x="500" y="188" text-anchor="middle">fleet-control: agenten har lov ✓</text></g><line x1="815" y1="206" x2="300" y2="206" class="a ret" marker-end="url(#ar9)"/><text x="720" y="200" class="s" text-anchor="middle">ingen passer</text><g class="lg"><rect x="306" y="306" width="132" height="24" rx="5"/><text x="372" y="322" text-anchor="middle">3 · lesing · ok</text></g></g>
  <g v-click><line x1="282" y1="232" x2="70" y2="232" class="a ret" marker-end="url(#ar9)"/><text x="180" y="226" class="s" text-anchor="middle">Bestille testperson?</text><rect x="77" y="207" width="18" height="18" rx="4" class="pn"/><text x="86" y="219.5" class="pnt" text-anchor="middle">4</text><g class="chk"><rect x="20" y="240" width="200" height="20" rx="10"/><text x="120" y="254" text-anchor="middle">Ola sier ja i appen ✓</text></g><g class="lg"><rect x="450" y="306" width="132" height="24" rx="5"/><text x="516" y="322" text-anchor="middle">4 · godkjent</text></g></g>
  <g v-click><line x1="298" y1="258" x2="815" y2="258" class="a" marker-end="url(#ar9)"/><circle cx="500" cy="258" r="4.5" class="gwd"/><text x="580" y="252" class="s" text-anchor="middle">Bestill testperson</text><rect x="307" y="233" width="18" height="18" rx="4" class="pn"/><text x="316" y="245.5" class="pnt" text-anchor="middle">5</text><text x="290" y="280" class="s" text-anchor="middle">jobben avsluttes, resultat som artefakt</text><g class="chk"><rect x="420" y="264" width="160" height="20" rx="10"/><text x="500" y="278" text-anchor="middle">fleet-gateway: godkjent ✓</text></g><g class="lg"><rect x="594" y="306" width="132" height="24" rx="5"/><text x="660" y="322" text-anchor="middle">5 · skriving · ok</text></g></g>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Samme eksempel som forrige lysbilde. Klikk gjennom stegene
- 1: Aksel Studio starter en agentjobb gjennom jobb-API-et i fleet-control og får en jobb-ID. Jobben kjører i en egen sandkasse i fleet-runtime
- 2: Agenten spør teamets egen modell, først Vertex AI i teamets eget GCP-prosjekt. Nøkkelen legges på utenfor sandkassen, så agenten ser den aldri
- 3: Agenten søker i Dolly gjennom fleet-gateway. fleet-control sier hva agentprofilen har lov til. Dolly lager bare syntetiske testpersoner
- 4: Å bestille er skriving. Appen spør Ola, og jobben venter. At jobben kan pause og spørre via appen, er utenfor fase 1
- 5: Bestillingen går gjennom fleet-gateway, som sjekker godkjenningen. Jobben avsluttes, og resultatet kommer som et artefakt
- Nederst: fleet-radar viser én revisjonslinje per steg, med bruker, agent, verktøy, utfall og trace-ID
- Teamet har skrevet appen, chatten og agenten. Resten er Fleet
- Overgang: «Kan vi i ettertid se hva agenten gjorde?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Vi skal kunne vise hva agenten gjorde</h1>
<p class="subtitle">Skisse av innsynet for én agentjobb. Teamet, eierne og revisorene ser det samme <span class="chip amber align-middle ml-2">Forslag</span></p>

::default::
<div class="trace">
  <BrowserWindow url="fleet-radar · jobb 7f3a (skisse)" class="trace-win" role="img" aria-label="Skisse av en tidslinje for én agentjobb: start, regelsjekk, modellkall, verktøykall, en regelsjekk som krever godkjenning, godkjenningen, skrivekallet og slutten. Øverst står agent, team, hvem som startet jobben og trace-ID.">
    <div class="trace-meta"><span><b>Agent</b> studio-prototype</span><span><b>Team</b> Aksel Studio</span><span><b>Startet av</b> Ola N.</span><span><b>Trace-ID</b> 4bf92f35…</span></div>
    <ol class="trace-list">
      <li class="a-rise" style="--d: 0.2s"><time>10:02:11</time><span class="k start">start</span><span>Ola N. starter jobben fra Aksel Studio</span><em>ok</em></li>
      <li class="a-rise" style="--d: 0.4s"><time>10:02:12</time><span class="k pol">regel</span><span>Agentprofilen er godkjent av teamet og gyldig</span><em>ok</em></li>
      <li class="a-rise" style="--d: 0.6s"><time>10:02:14</time><span class="k mod">modell</span><span>Vertex AI i teamets prosjekt · dataklasse: testdata</span><em>ok</em></li>
      <li class="a-rise" style="--d: 0.8s"><time>10:02:20</time><span class="k tool">verktøy</span><span>dolly · søk etter testpersoner (lesing)</span><em>ok</em></li>
      <li class="a-rise" style="--d: 1.0s"><time>10:02:31</time><span class="k pol">regel</span><span>Bestilling er skriving og krever godkjenning</span><em class="wait">venter</em></li>
      <li class="a-rise" style="--d: 1.2s"><time>10:02:58</time><span class="k ok">godkjent</span><span>Ola N. sa ja i appen</span><em>ok</em></li>
      <li class="a-rise" style="--d: 1.4s"><time>10:02:59</time><span class="k tool">verktøy</span><span>dolly · bestill testperson (skriving)</span><em>ok</em></li>
      <li class="a-rise" style="--d: 1.6s"><time>10:03:05</time><span class="k start">slutt</span><span>Artefakt levert · sandkassen slettet</span><em>ok</em></li>
    </ol>
  </BrowserWindow>
  <div class="trace-side">
    <h3>Dette skal logges</h3>
    <ul>
      <li>Hvem som spurte, fra hvilken app og når</li>
      <li>Hvilken agent og hvilken profil</li>
      <li>Hvert modellkall og verktøykall, med utfall</li>
      <li>Hvilke regler som ble sjekket</li>
      <li>Hvem som godkjente, og hva</li>
      <li>Én trace-ID gjennom hele jobben</li>
    </ul>
    <p class="trace-open">Om innholdet i prompter og svar skal lagres, er ikke bestemt.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Den som skal godkjenne en KI-tjeneste, spør først: kan vi se hva den gjorde? Dette er svaret vårt
- Skissen viser fleet-radar, modulen for innsyn og revisjon, for samme jobb som forrige lysbilde. Tidslinjen er et forslag til hvordan innsynet kan se ut. Den er ikke bygget
- Det som finnes i dag: fleet-gateway reviderer hvert verktøykall med bruker og klient. Revisjon av hver jobb i fleet-runtime er et krav før kjøretiden går i pilot
- Hvem ser hva: teamet ser sine egne agenter. Eiere og revisorer over teamet (ledelsen, sikkerhet, personvernombudet og internrevisjonen) ser revisjonen for teamene de har ansvar for
- Vi lover ikke mer enn det som står her. Om innholdet i prompter og svar, eller agentens begrunnelse, skal lagres, er et åpent designvalg. Det avhenger av formål, grunnlag og lagringstid
- KI-forordningen har krav om logging og menneskelig tilsyn for høyrisiko-KI (artikkel 12 og 14). Hva som gjelder for Navs agenter, må en jurist vurdere
- Overgang: «Hvem har ansvaret for det agenten gjør?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Teamet eier agenten. Fleet eier byggeklossene</h1>
<p class="subtitle">Fleet tar ingen juridiske beslutninger på vegne av teamene <span class="chip green align-middle ml-2">Gjeldende styringsmodell</span></p>

::default::
<div class="two">
  <div class="feature-card">
    <h3>Produktteamet</h3>
    <p>Eier agenten, formålet og det agenten gjør. Har risikovurderingen (ROS) og personvernkonsekvensvurderingen (PVK).</p>
  </div>
  <div class="feature-card purple">
    <h3>Fleet</h3>
    <p>Eier plattformen: byggeklossene og kontrollene som håndhever reglene. Tar ingen juridiske beslutninger.</p>
  </div>
</div>
<p class="footnote">Den som eier et verktøy eller data, bestemmer tilgangen til sitt eget API, slik som når ett produkt bruker data fra et annet produkts API i dag. Samme mønster, ikke noe nytt.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Én linje å ta med: teamet som bruker agenten, eier den og det den gjør. Fleet leverer byggeklosser og kontroller
- Dette står i styringsmodellen for Fleet. Den er gjeldende retning, ikke låst
- Teamet som eier agenten godkjenner egne endringer med to personer, som en PR-gjennomgang. PVK for agenter som skriver godkjennes av ansvarlig eier, og personvernombudet gir råd
- Teamet som eier MCP-serveren har ROS for serveren og bestemmer hvilken datakategori ruten har
- Fleet, det vil si team copilot, drifter plattformen og eier rekkverkene. Fleet tar ikke juridiske beslutninger og har ikke ansvaret for det agenten gjør
- Nav er behandlingsansvarlig. Vi skriver derfor «teamet har ansvaret for tjenesten», ikke «behandlingsansvar». Ordlyden bør sjekkes med en jurist
- Styring, fra det tidligere lysbildet om selvbetjening: To personer i teamet godkjenner egne endringer, som en PR-gjennomgang. Ruteeieren godkjenner når en agent vil bruke et annet teams verktøy, som accessPolicy. Leseverktøy publiseres automatisk fra teamets CI. Godkjenninger av skriveverktøy og agenter utløper etter seks måneder. Alt via API og CI, ikke klikk. Automatiske rekkverk: sjekker i CI, kvote, nødbryter og utestenging. Eiere og revisorer (ledelsen, sikkerhet, personvernombudet og internrevisjonen) ser revisjon og rapporter for sine team. Ledelsen og sikkerhet kan stoppe og trekke tilbake. Å stoppe krever én person. Å starte eller utvide krever to
- Samme tanke som i Nais: teamene eier sine egne objekter og godkjenner selv. Plattformteamet godkjenner ikke hver endring
- Risikoen styres per verktøy: lesing, skriving, eksterne kall og kjøring på vertsmaskinen. Det avgjør hvem som godkjenner, og om det trengs ROS eller PVK
- Et endret verktøy fjernes automatisk til det er godkjent på nytt
- Eiere og revisorer setter ikke egne regler, men leser revisjonsspor og rapporter for teamene de har ansvar for
- Hver fase i veikartet har egne krav til etterlevelse før den regnes som ferdig
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
  <div class="now">Synlig per team og agent, med budsjett og stopp</div>
</div>
<p class="footnote">Alle trenger det samme: tilgang på vegne av brukeren, trygge verktøy og modeller, og sporing av hva agenten gjorde.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «Hva er formålet, og hva skal Fleet ikke gjøre?»

- Hovedpoenget: mange team og tjenester trenger det samme. Uten en felles plattform løser hvert team det alene, med egen kode for tokener, egne verktøy og egen logging
- Det er også en risiko når hvert team bygger selv: hver løsning må få sin egen sikkerhetsvurdering, og feil gjentas
- Vi telte i november seks apper med egen kode for brukertokener, og fire ulike måter å handle på vegne av en bruker. Tallene gjelder repoene vi har lest
- At neste team kopierer dette mønsteret, er en hypotese
- Det finnes nå en styringsmodell for Fleet. Den sier hvem som eier hva, se forrige lysbilde

Kilder, bare hvis noen spør:
- MCP, spesifikasjon 2025-11-25: serveren skal ikke sende videre tokenet den fikk fra klienten. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- Entra Agent ID, On-Behalf-Of-flyt for agenter. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow
- Agentidentitet er ikke ferdig standardisert. En oversikt for OAuth-gruppen i IETF, 31. mai 2026, teller 32 individuelle utkast. https://datatracker.ietf.org/meeting/interim-2026-oauth-03/materials/slides-interim-2026-oauth-03-sessa-ietf-individual-draft-analysis-00
- OpenID Foundation, «Identity Management for Agentic AI», 7. oktober 2025. https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/
- Datatilsynet, 20. august 2026: «en økende mengde avviksmeldinger» om «tilfeldig, uønsket og ukontrollert bruk av KI-agenter i norske kommuner». https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2026/datatilsynet-pa-sikkerhetsfestivalen/
- KI-loven: ny høring høsten 2026. Reglene for høyrisiko-KI er utsatt til 2. desember 2027 og 2. august 2028. https://www.regjeringen.no/no/aktuelt/id3169693/
- Vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Det må en jurist vurdere

Det som virker i dag (fra det tidligere lysbildet «I dag virker det for utviklere på egen maskin»):
- Verktøykatalogen på ki-utvikling.nav.no har agenter, skills, instruksjoner og MCP-servere tilpasset Nav. God praksis og guider ligger samme sted
- nav-pilot legger agentpakker i repoet. MCP-registeret har godkjente servere, og ukjente blokkeres
- Agentene kjører lokalt på utviklerens maskin. Det dekker ikke agenter som kjører som tjenester
- Forslag: katalogen og god praksis kan bli inngangen til Fleet. Vi har ikke avtalt dette med noen
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Trygge KI-agenter i Nav, som byggeklosser</h1>
<p class="subtitle">Nais-apper er målgruppen. Grensene er like viktige som målene <span class="chip green align-middle ml-2">Gjeldende retning</span></p>

::default::
<div class="goals">
  <div>
    <h3>Formål</h3>
    <p class="goal-big">Felles, trygge byggeklosser for agenter i Nais-apper. Interne verktøy først.</p>
    <h3>Vi måler</h3>
    <div class="goal-chips"><span>team med MCP-servere</span><span>agenter i produksjon</span><span>alvorlige hendelser</span><span>tid fra idé til agent</span></div>
  </div>
  <div>
    <h3>Ikke-mål</h3>
    <div class="nogo"><span class="i-carbon-close-outline" /><strong>Drifte språkmodeller</strong></div>
    <div class="nogo"><span class="i-carbon-close-outline" /><strong>Tjenester for innbyggere</strong></div>
    <div class="nogo"><span class="i-carbon-close-outline" /><strong>Erstatte Nais</strong></div>
    <div class="nogo"><span class="i-carbon-close-outline" /><strong>Eget agentrammeverk</strong></div>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Formål, suksessmål og ikke-mål er eierens retning fra 22. november 2026. Den er ikke låst
- Målgruppen er team som vil sette en KI-agent i produksjon i en Nais-app. Ikke enkeltpersoner som bruker Copilot eller en chat i hverdagen
- Hva det betyr per rolle: ledere får synlig risiko og kostnad, fagfolk får sporbarhet og godkjenning, og utviklere slipper å bygge alt under vannlinjen selv
- Piloten tar bare åpne og interne data og syntetiske testdata gjennom modellene. Saksbehandling og andre apper med brukerdata er en senere fase
- Formålet i sin helhet: felles, trygge byggeklosser for team som vil ha agenter i appene sine. Først interne verktøy, flere parallelt, for eksempel Aksel Studio og våre egne. Senere apper med brukerdata, når identitet, personvern og risiko er avklart
- Suksessmålene: antall team som tilbyr MCP-servere, antall agenter i produksjon, ingen alvorlige hendelser, og tiden fra idé til kjørende agent
- Ikke-målene: vi drifter ikke språkmodeller (teamene tar med egen modelltilgang), vi lager ikke tjenester for innbyggere (målgruppen er team og apper i Nav), vi erstatter ikke Nais (appene kjører på Nais som før), og vi lager ikke et eget rammeverk eller SDK (standard MCP-SDK, veiledning og maler)
- Overgang: «Hvordan ser det ut når det virker?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Visjonen: KI i produksjon, enkelt, trygt og raskt</h1>
<p class="subtitle">Fire egenskaper plattformen skal ha. Gjeldende retning, ikke låst <span class="chip amber align-middle ml-2">Visjon</span></p>

::default::
<svg class="dg fly" viewBox="0 0 880 328" role="img" aria-label="Fem piler i V-formasjon med stiplede spor. Foran formasjonen viser en stiplet linje felles kurs. Den fremste pilen er nav-fleet. De fire andre er selvbetjent, automatiske rekkverk, egen modelltilgang og fullt innsyn. Underlaget har tre felt: eget GKE-cluster for agentsandkassene, samme modellregler som for Copilot, og Nais der det passer, for apper, identitet og nettverk.">
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
    <rect x="185" y="172" width="210" height="44" rx="8" class="card"/>
    <text x="290" y="191" text-anchor="middle" class="t">Selvbetjent</text>
    <text x="290" y="208" text-anchor="middle" class="s">Teamet godkjenner egne endringer</text>
    <rect x="485" y="172" width="210" height="44" rx="8" class="card"/>
    <text x="590" y="191" text-anchor="middle" class="t">Automatiske rekkverk</text>
    <text x="590" y="208" text-anchor="middle" class="s">Kvote, nødbryter og revisjon</text>
    <rect x="0" y="222" width="210" height="44" rx="8" class="card"/>
    <text x="105" y="241" text-anchor="middle" class="t">Egen modelltilgang</text>
    <text x="105" y="258" text-anchor="middle" class="s">Teamet tar med sin egen</text>
    <rect x="670" y="222" width="210" height="44" rx="8" class="card"/>
    <text x="775" y="241" text-anchor="middle" class="t">Fullt innsyn</text>
    <text x="775" y="258" text-anchor="middle" class="s">For teamet, eierne og revisorene</text>
  </g>
  <rect x="0" y="276" width="880" height="52" rx="8" class="n"/>
  <line x1="293" y1="285" x2="293" y2="319" class="div"/>
  <line x1="587" y1="285" x2="587" y2="319" class="div"/>
  <text x="146" y="299" text-anchor="middle" class="t">Eget GKE-cluster</text>
  <text x="146" y="317" text-anchor="middle" class="s">for agentsandkassene</text>
  <text x="440" y="299" text-anchor="middle" class="t">Samme modellregler</text>
  <text x="440" y="317" text-anchor="middle" class="s">som for Copilot</text>
  <text x="733" y="299" text-anchor="middle" class="t">Nais der det passer</text>
  <text x="733" y="317" text-anchor="middle" class="s">apper, identitet og nettverk</text>
</svg>
<p class="footnote tight">Fra lokale agenter på én maskin til skyagenter for ulike formål, kjørt på Fleet. Agenten gjør forarbeidet med rettighetene til et menneske, og mennesket avgjør.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «Hvor hører Fleet hjemme blant det vi har?»

- Visjonen i én setning: det skal være enkelt, trygt og raskt for produktteam å bygge, drifte og videreutvikle KI i produksjon, med etterlevelse innebygd og uten dobbeltarbeid
- Selvbetjent: som i Nais. Teamet godkjenner egne endringer med to personer. Team copilot godkjenner ikke hver endring
- Automatiske rekkverk: plattformen håndhever kvote, nødbryter, utestenging og revisjon, og sjekker i CI
- Egen modelltilgang: hvert team tar med sin egen modelltilgang og betaler selv. Plattformen koster infrastruktur og folk til drift
- Fullt innsyn: ikke bare for teamet, men for dem som eier og reviderer teamet
- Underlaget: agentsandkassene kjører i et eget GKE-cluster utenfor Nais. Modellene følger samme regler som for Copilot. Resten kjører på Nais der det passer
- Figuren: fem piler i formasjon, samme tegn som i logoen
- Navs oppdrag er utgangspunktet: Arbeids- og velferdsforvaltningen skal «møte det enkelte mennesket med respekt, bidra til sosial og økonomisk trygghet og fremme overgang til arbeid og aktiv virksomhet» (Nav-loven § 1 andre ledd, https://lovdata.no/lov/2006-06-16-20/§1)
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet fyller laget mellom appene og modellene</h1>
<p class="subtitle">nav-fleet erstatter ingen plattform. Rollene er vår beskrivelse og ikke avklart med Nais eller Nada</p>

::default::
<svg class="dg" viewBox="0 0 880 330" role="img" aria-label="Tre plattformer side om side: Nais, nav-fleet og Nada. Fleet bruker Nais der det passer og henter data og kontekst fra Nada, med tilgangsstyring. Nais og Nada bruker også Fleet. Over står Nais-apper og utviklerverktøy, som bygger på Fleet. Under står teamets egen modelltilgang og fleet-runtime på eget GKE-cluster utenfor Nais. Verktøykatalogen og god praksis på ki-utvikling.nav.no kan bli inngangen til Fleet.">
  <defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="200" y="2" width="480" height="40" rx="8" class="b"/>
  <text x="440" y="27" text-anchor="middle" class="t">Nais-apper og utviklerverktøy</text>
  <line x1="440" y1="42" x2="440" y2="72" class="a" marker-end="url(#ar1)"/>
  <text x="452" y="61" class="s">bygger på Fleet</text>
  <rect x="0" y="74" width="190" height="124" rx="10" class="n"/>
  <text x="95" y="112" text-anchor="middle" class="h">Nais</text>
  <text x="95" y="140" text-anchor="middle" class="s">kjøre apper</text>
  <text x="95" y="158" text-anchor="middle" class="s">og infrastruktur</text>
  <rect x="345" y="74" width="190" height="124" rx="10" class="p"/>
  <text x="440" y="112" text-anchor="middle" class="h">nav-fleet</text>
  <text x="440" y="140" text-anchor="middle" class="s">gateway, control,</text>
  <text x="440" y="158" text-anchor="middle" class="s">runtime og radar</text>
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
  <text x="200" y="255" class="s">teamets egen modelltilgang, først Vertex AI i teamets eget GCP-prosjekt</text>
  <text x="20" y="281" class="t">fleet-runtime</text>
  <text x="200" y="281" class="s">på eget GKE-cluster, utenfor Nais-clusterne</text>
  <text x="0" y="322" class="t">ki-utvikling.nav.no</text>
  <text x="170" y="322" class="s">verktøykatalogen og god praksis kan bli katalogen og inngangen til Fleet (forslag)</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «Hva består Fleet av?»

- Tre plattformer som jobber sammen, hver med sin oppgave. Fleet erstatter ingen av dem
- Rollene er vår beskrivelse. Vi har ikke avklart dem med Nais eller Nada
- Nais der det passer: apper, nettverk og innlogging gjennom Texas. Agentsandkassene kjører i et eget GKE-cluster som team copilot drifter
- Modeller: hvert team tar med sin egen modelltilgang. Først Vertex AI i teamets eget GCP-prosjekt. Vi drifter ikke språkmodeller
- Fleet henter data og kontekst fra Nada, med tilgangsstyring. Hypotese. Vi har ikke snakket med Nada
- KI-grunnmuren: målbildet fra 6. november 2026 beskriver grunnmuren for produktutvikling. Fleet er vårt forslag til delene i kjøreplanet for agenter som kjører som tjenester. Modellgatewayen ligger utenfor Fleet: teamet tar med egen modelltilgang, og nøklene legges på i fleet-runtime. Oppdrag og arbeidsflyter eies av appen, som starter jobber gjennom fleet-control. Ressurseier avgjør tilgangen
- Målbildet holder saksbehandling og innbyggerdialog utenfor piloten. Det er vi enige i
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fire moduler og MCP-servere fra teamene</h1>
<p class="subtitle">Appene kjører på Nais. Agentene kjører i fleet-runtime. Registeret viser hva som finnes</p>

::default::
<svg class="dg mod" viewBox="0 0 880 352" role="img" aria-label="Øverst Nais-apper som starter agentjobber, og utviklerverktøy som kaller verktøy. I midten nav-fleet med fire moduler: fleet-control med regler og jobb-API, fleet-runtime med sandkasser på eget GKE-cluster, fleet-gateway som håndhever hvert verktøykall, og under dem fleet-radar med innsyn og revisjon. Appene starter jobber i fleet-control, som sender dem til fleet-runtime. Agentene kaller verktøy gjennom fleet-gateway. Nederst registeret som er en offentlig lesekopi av fleet-control, teamets egen modell, og MCP-servere som teamene eier.">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <g class="a-rise" style="--d: 0.1s; --dy: -12px">
    <rect x="0" y="2" width="300" height="48" rx="8" class="b"/>
    <text x="150" y="22" class="t" text-anchor="middle">Nais-apper</text>
    <text x="150" y="40" class="s" text-anchor="middle">starter agentjobber, f.eks. Aksel Studio</text>
  </g>
  <g class="a-rise" style="--d: 0.2s; --dy: -12px">
    <rect x="580" y="2" width="300" height="48" rx="8" class="b"/>
    <text x="730" y="22" class="t" text-anchor="middle">Utviklerverktøy</text>
    <text x="730" y="40" class="s" text-anchor="middle">Copilot, nav-pilot og andre MCP-klienter</text>
  </g>
  <g class="a-fade" style="--d: 0.4s"><line x1="150" y1="50" x2="150" y2="108" class="a" marker-end="url(#ar2)"/>
  <text x="160" y="80" class="s">jobb-API</text></g>
  <g class="a-fade" style="--d: 0.7s"><line x1="730" y1="50" x2="730" y2="108" class="a" marker-end="url(#ar2)"/>
  <text x="740" y="80" class="s">verktøykall</text></g>
  <rect x="0" y="64" width="880" height="214" rx="10" class="p" style="fill-opacity: .55"/>
  <text x="440" y="86" class="h" text-anchor="middle">nav-fleet</text>
  <g class="a-rise" style="--d: 0.4s">
    <rect x="16" y="110" width="262" height="124" rx="8" class="b"/>
    <text x="147" y="134" class="t" text-anchor="middle">fleet-control</text>
    <text x="147" y="156" class="s" text-anchor="middle">servere, ruter, verktøy, agentprofiler</text>
    <text x="147" y="176" class="s" text-anchor="middle">jobb-API: jobb-ID inn, artefakt ut</text>
    <text x="147" y="196" class="s" text-anchor="middle">godkjenning og budsjett</text>
    <text x="147" y="220" class="s x" text-anchor="middle">lese-API bygget</text>
  </g>
  <g class="a-rise" style="--d: 0.55s">
    <rect x="309" y="110" width="262" height="124" rx="8" class="b"/>
    <text x="440" y="134" class="t" text-anchor="middle">fleet-runtime</text>
    <text x="440" y="156" class="s" text-anchor="middle">sandkasse per jobb, egen GKE</text>
    <text x="440" y="176" class="s" text-anchor="middle">stengt for trafikk ut</text>
    <text x="440" y="196" class="s" text-anchor="middle">nøkler legges på utenfor</text>
    <text x="440" y="220" class="s x" text-anchor="middle">ikke bygget, prøves ut først</text>
  </g>
  <g class="a-rise" style="--d: 0.7s">
    <rect x="602" y="110" width="262" height="124" rx="8" class="b"/>
    <text x="733" y="134" class="t" text-anchor="middle">fleet-gateway</text>
    <text x="733" y="156" class="s" text-anchor="middle">inngangen for alle verktøykall</text>
    <text x="733" y="176" class="s" text-anchor="middle">token per rute (OBO)</text>
    <text x="733" y="196" class="s" text-anchor="middle">verktøyliste, kvote og nødbryter</text>
    <text x="733" y="220" class="s x" text-anchor="middle">pilot i produksjon</text>
  </g>
  <g class="a-fade" style="--d: 0.55s"><line x1="278" y1="170" x2="307" y2="170" class="a" marker-end="url(#ar2)"/></g>
  <g class="a-fade" style="--d: 0.7s"><line x1="571" y1="170" x2="600" y2="170" class="a" marker-end="url(#ar2)"/></g>
  <g class="a-rise" style="--d: 0.85s">
    <rect x="16" y="242" width="848" height="28" rx="8" class="b"/>
    <image href="/icons/fleet/fleet-radar.svg?v=8" x="26" y="245" width="22" height="22"/>
    <text x="56" y="261" class="t" style="font-size: 13.5px">fleet-radar</text>
    <text x="150" y="261" class="s">innsyn og revisjon: hver jobb, hvert kall og hver endring, for teamet, eierne og revisorene</text>
  </g>
  <g class="a-fade" style="--d: 0.4s"><line x1="147" y1="278" x2="147" y2="298" class="a" marker-end="url(#ar2)"/></g>
  <g class="a-fade" style="--d: 0.55s"><line x1="440" y1="278" x2="440" y2="298" class="a" marker-end="url(#ar2)"/></g>
  <g class="a-fade" style="--d: 0.7s"><line x1="733" y1="278" x2="733" y2="298" class="a" marker-end="url(#ar2)"/></g>
  <rect x="0" y="300" width="290" height="50" rx="8" class="n"/>
  <text x="145" y="321" class="t" text-anchor="middle">Registeret</text>
  <text x="145" y="339" class="s" text-anchor="middle">offentlig lesekopi av fleet-control</text>
  <rect x="300" y="300" width="280" height="50" rx="8" class="q"/>
  <text x="440" y="321" class="t" text-anchor="middle">Teamets egen modell</text>
  <text x="440" y="339" class="s" text-anchor="middle">Vertex AI først</text>
  <rect x="590" y="300" width="290" height="50" rx="8" class="n"/>
  <text x="735" y="321" class="t" text-anchor="middle">MCP-servere</text>
  <text x="735" y="339" class="s" text-anchor="middle">teamene eier verktøy, data og risiko</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «Hvorfor kjører agentene ikke på Nais?»

- fleet-control er eneste kilde for servere, ruter, verktøy og agentprofiler. Appen starter en agentkjøring gjennom et asynkront jobb-API og får en jobb-ID. Resultatet kommer som et artefakt. fleet-runtime bare utfører
- fleet-runtime er en sandkasse for agentkjøringer på eget GKE-cluster. Team tar med enten konfigurasjon for et standard agentoppsett eller sitt eget containerimage. Profilen avgjør om kjøringen er kort og uten tilstand eller en lang økt
- fleet-gateway håndhever per kall: token per rute, verktøyliste, hash-låsing av verktøy, kvote og nødbryter, og reviderer hvert kall
- fleet-radar er innsyn og revisjon: hver jobb, hvert verktøykall og hver endring i fleet-control, samlet med trace-ID. Teamet, eierne og revisorene ser det samme. Ikonet er radaren
- Registeret er en offentlig lesekopi av fleet-control
- MCP-servere: teamene eier verktøyene, dataene og risikoen bak dem
- Identitet i dag: fleet-gateway bytter til et nytt token per rute (OBO), så tokenet til verktøyet gjelder bare den MCP-serveren. Agenten kan aldri mer enn brukeren, og modellen ser aldri tokenet. Nais STS som utsteder og egen agentidentitet for agenter uten bruker vurderes, men er ikke med i fase 1
- Det enkle tilfellet er også med: en Nais-app med et standard MCP-SDK kaller ett eller to verktøy gjennom fleet-gateway, uten fleet-runtime
- Vi lager ikke eget SDK eller agentrammeverk. Vi gir veiledning og maler
- Status: fleet-gateway er i pilot i produksjon med leseruter bak naisdevice. fleet-control har lese-API. fleet-runtime er ikke bygget
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">fleet-runtime kjører i vårt eget GKE-cluster</h1>
<p class="subtitle">Kode vi ikke stoler på, skal ikke dele cluster med Navs apper <span class="chip green align-middle ml-2">Besluttet retning</span> <span class="chip amber align-middle ml-1">Utprøving først</span></p>

::default::
<div class="rt">
<svg class="dg" viewBox="0 0 520 250" role="img" aria-label="fleet-control på Nais til venstre, med en offentlig ingress som bare tar imot maskin-til-maskin-kall. Til høyre et eget GKE-cluster med fleet-runtime og Agent Substrate, der hver jobb kjører bak sin egen grense. Begge pilene starter i fleet-runtime: den henter kommandoer fra fleet-control og sender status tilbake.">
  <defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="0" width="180" height="250" rx="10" class="n"/>
  <text x="90" y="28" class="t" text-anchor="middle">Nais</text>
  <rect x="16" y="70" width="136" height="70" rx="8" class="p"/>
  <text x="84" y="110" class="t" text-anchor="middle">fleet-control</text>
  <rect x="152" y="80" width="12" height="50" rx="3" class="w"/>
  <text x="158" y="150" class="s" text-anchor="middle" style="font-size: 10px">ingress</text>
  <text x="158" y="163" class="s" text-anchor="middle" style="font-size: 10px">bare M2M</text>
  <rect x="16" y="186" width="136" height="40" rx="8" class="b"/>
  <text x="84" y="211" class="s" text-anchor="middle">Nais-apper</text>
  <line x1="84" y1="186" x2="84" y2="142" class="a" marker-end="url(#ar6)"/>
  <rect x="300" y="0" width="220" height="250" rx="10" class="p"/>
  <text x="410" y="28" class="t" text-anchor="middle">Eget GKE-cluster</text>
  <text x="410" y="47" class="s" text-anchor="middle">fleet-runtime · Agent Substrate</text>
  <rect x="320" y="66" width="180" height="44" rx="8" class="b" style="stroke-dasharray: 5 4"/>
  <text x="410" y="93" class="s" text-anchor="middle">jobb · egen grense</text>
  <rect x="320" y="122" width="180" height="44" rx="8" class="b" style="stroke-dasharray: 5 4"/>
  <text x="410" y="149" class="s" text-anchor="middle">jobb · egen grense</text>
  <text x="410" y="200" class="s" text-anchor="middle">ingen trafikk ut</text>
  <text x="410" y="220" class="s" text-anchor="middle">nøkler utenfor sandkassen</text>
  <text x="236" y="87" class="s" text-anchor="middle" style="font-size: 10px">henter kommandoer</text>
  <line x1="298" y1="94" x2="168" y2="94" class="a" marker-end="url(#ar6)"/>
  <text x="236" y="117" class="s" text-anchor="middle" style="font-size: 10px">sender status</text>
  <line x1="298" y1="124" x2="168" y2="124" class="a" marker-end="url(#ar6)"/>
</svg>
<ul class="rt-list">
  <li><b>Hovedgrunnen:</b> Nais vil ikke ha agentsandkasser i sine clustere</li>
  <li><b>Behovene</b> peker samme vei: isolasjon (gVisor eller microVM), root, CRD-er og operatorer</li>
  <li><b>Agent Substrate</b> er førstevalget. Hver jobb kjører bak sin egen grense</li>
  <li><b>fleet-control har en offentlig ingress</b> som bare tar imot maskin-til-maskin-kall</li>
  <li><b>fleet-runtime tar alltid kontakt:</b> den henter kommandoer fra fleet-control og sender status og artefakter tilbake</li>
  <li><b>Team copilot drifter clusteret,</b> med avgrenset omfang</li>
</ul>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Retningen er bestemt: fleet-runtime kjører i vårt eget GKE-cluster, med Agent Substrate som førstevalg. agent-sandbox er reserve. Vi prøver det ut først. Så sier produkteieren ja eller nei
- Hovedgrunnen er at Nais ikke vil ha det i sine clustere. Behovene for isolasjon peker samme vei
- Grense per jobb: hver jobb er isolert fra de andre og ryddes bort når den er ferdig. Teknisk blir det ett namespace per jobb
- Nettverket: fleet-control kjører på Nais. Trafikk mellom fleet-control og fleet-runtime går gjennom en offentlig ingress som bare tar imot maskin-til-maskin-kall. fleet-runtime henter kommandoer fra fleet-control, så fleet-control trenger ikke å nå inn i clusteret
- Dokumenterte alternativer, ikke valgt: Pub/Sub som kø mellom dem, et WireGuard-mesh (bare hvis vi drifter det selv) og peering via et nettverkshub
- Vi eier hele clusteret: oppgradering, hendelser og kapasitet. Det står under åpne spørsmål
- Overgang: «Hva koster det, og hvilke modeller kan teamene bruke?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Plattformen koster infrastruktur og drift. Teamene tar med egen modell</h1>
<p class="subtitle">Ingen felles modellpott <span class="chip green align-middle ml-2">Besluttet</span></p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3>Egen modell</h3>
    <p>Hvert team har egen modelltilgang, avtale og faktura. Først Vertex AI i teamets eget GCP-prosjekt.</p>
  </div>
  <div class="feature-card green">
    <h3>Copilots regler</h3>
    <p>Én liste over godkjente modeller og leverandører. Copilot brukes bare på vegne av en bruker med lisens.</p>
  </div>
  <div class="feature-card amber">
    <h3>Ingen persondata</h3>
    <p>Åpne og interne data og syntetiske testdata. Ingen personopplysninger gjennom modellene.</p>
  </div>
</div>
<p class="footnote">Bruk og kostnad måles per team og agent, med budsjett, varsler og stopp. Nøklene legges på utenfor sandkassen.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Eierens beslutninger fra 22. november 2026
- Copilot-lisensen er personlig. En agent uten en person bak bruker ikke Copilot-lisens, men Vertex AI i teamets prosjekt eller en annen kobling teamet tar med selv
- Vertex AI først: ingen statisk nøkkel, faktura til teamets prosjekt, og den brukes allerede av apper i Nav
- Modellreglene er de samme som for Copilot. Vi lager ikke en egen liste for agenter
- Gatewayen skal avvise kall fra piloten som er merket med en annen dataklasse
- Måling skjer i Fleet, ikke hos agenten, så agenten kan ikke underrapportere
- Åpent: om Navs GCP-avtale dekker alle modellene vi trenger
- Overgang: «Hvor står vi i dag?»
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Først interne verktøy, flere parallelt</h1>
<p class="subtitle">Status 23. november 2026</p>

::default::
<div class="two">
  <div class="feature-card">
    <h3>Dette kjører, og dette kommer</h3>
    <ul class="status">
      <li><span class="chip green">kjører</span>fleet-gateway i pilot i produksjon, med leseruter bak naisdevice</li>
      <li><span class="chip green">kjører</span>MCP-servere for Dolly, kodeverk og teamkatalogen, og det offentlige registeret</li>
      <li><span class="chip blue">bygget</span>fleet-control med lese-API. Utrulling til dev pågår</li>
      <li><span class="chip amber">neste</span>skrive-API og godkjenning, parallelt med utprøving av fleet-runtime</li>
      <li><span class="chip slate">venter</span>målbildet for identitet, avklares med Nais</li>
    </ul>
  </div>
  <div class="feature-card green">
    <h3>De første agentene <span class="chip amber align-middle ml-1">Forslag</span></h3>
    <ul>
      <li><b>Aksel Studio:</b> bygg av prototyper kan bli første arbeidslast i fleet-runtime</li>
      <li><b>Første agentprofil:</b> studio-api leser fra Dolly, godkjent av ruteeieren</li>
      <li><b>Våre egne verktøy:</b> Copilot og nav-pilot bruker verktøyene gjennom fleet-gateway</li>
      <li><b>Senere fase:</b> apper med brukerdata, som saksbehandling</li>
    </ul>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Vi beviser plattformen på interne verktøy først, flere parallelt. Aksel Studio tester både gatewayen og kjøretiden
- Aksel Studio: designere skal lage prototyper med KI. Studio beholder domenet sitt, som forslagsflyten der brukeren godtar eller forkaster. Fleet tar kjøretiden, tokenbyttet og revisjonen
- Første agent er studio-api med lesetilgang til Dolly. Profilen skal godkjennes både av Aksel Studio og av teamet som eier Dolly-ruten. Ingen frist, og ingen snarvei for å gå raskere
- Det som kjører i dag, er en pilot. Det er ikke åpnet for alle
- Overgang: «Hvordan kommer vi videre?»
-->

---
layout: timeline
---

::header::
<h1 class="text-3xl font-bold">Fem faser, hver med krav før neste</h1>
<p class="subtitle">Fasene kan overlappe. Ingen datoer</p>

::default::
<TimelineNode version="Fase 1" year="pilot" title="Gateway og register" description="Gateway i prod med leseruter. Kvote som tåler omstart, hendelsesrutine og revisjon av hvert kall." icon="i-carbon-gateway" />
<TimelineNode version="Fase 2" year="styring" title="fleet-control" description="Skrive-API, godkjenning, rekkverk, jobb-API, innsyn og budsjett." icon="i-carbon-settings-adjust" />
<TimelineNode version="Fase 3" year="identitet" title="Første agent" description="Målbildet bestemt med Nais. studio-api leser fra Dolly." icon="i-carbon-user-identification" />
<TimelineNode version="Fase 4" year="kjøretid" title="fleet-runtime" description="Utprøving, så ja eller nei. Pilot i dev med egen modell og testdata." icon="i-carbon-container-software" />
<TimelineNode version="Fase 5" year="åpning" title="Bredere bruk" description="Sikkerhetstest, oppdatert ROS og gjennomgang med sikkerhet og internrevisjonen." icon="i-carbon-unlocked" />

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Overgang: «Det er ting vi ikke vet ennå.»

- Hver fase har krav som må være oppfylt før neste regnes som startet for alvor, også krav til etterlevelse
- Fase 1: gatewayen kjører allerede. Det som gjenstår, er kvote som tåler omstart, en felles hendelsesrutine og at eiere og revisorer kan lese revisjonen
- Fase 2: fleet-control med selvbetjening, godkjenning, automatiske rekkverk, jobb-API og budsjett, og fleet-radar med innsyn for eiere og revisorer
- Fase 3: identitet gjøres riktig, uten frist. Første agent er studio-api fra Aksel Studio med lesetilgang til Dolly
- Fase 4: utprøvingen av fleet-runtime går parallelt med fase 2. Så sier produkteieren ja eller nei. Piloten bruker teamets egen modell og bare testdata
- Fase 5: før plattformen åpnes bredere trengs uavhengig sikkerhetstest, oppdatert ROS og gjennomgang med sikkerhet og internrevisjonen
- Etter dette: apper med brukerdata, som saksbehandling, krever egne avklaringer om personvern, KI-forordningen og risiko
- Ytre datoer vi kjenner: statsråden vil fremme KI-loven for Stortinget våren 2027, og de første reglene for høyrisiko-KI i EU gjelder fra 2. desember 2027. https://www.regjeringen.no/no/aktuelt/id3169693/
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Seks spørsmål vi må avklare underveis</h1>
<p class="subtitle">Ingen av dem stopper fase 1 og 2</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3>Identitet</h3>
    <p>Nais STS, Entra Agent ID eller begge?</p>
  </div>
  <div class="feature-card green">
    <h3>Personvern</h3>
    <p>Vi trenger en mal for PVK for agenter som skriver. Teamet som eier agenten, eier PVK-en.</p>
  </div>
  <div class="feature-card amber">
    <h3>KI-loven</h3>
    <p>Blir noen av agentene høyrisiko? Vi har ikke vurdert det.</p>
  </div>
</div>
<div class="card-row">
  <div class="feature-card purple">
    <h3>Drift</h3>
    <p>Hvem tar oppgradering, hendelser og kapasitet når vi eier hele clusteret?</p>
  </div>
  <div class="feature-card green">
    <h3>Modeller</h3>
    <p>Dekker GCP-avtalen modellene vi trenger?</p>
  </div>
  <div class="feature-card">
    <h3>Leverandørbinding</h3>
    <p>Blir vi bundet til én leverandør, eller holder MCP og egen modell det åpent?</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
Avslutning: «Hva mener dere? Hva mangler, og hvem bør være med?»

- Identitet: målbildet er ikke bestemt. Vi har sendt spørsmål til Nais om Nais STS. Det er det største hullet
- Personvern: teamet som eier agenten eier PVK-en, men har ingen mal ennå. Malen lages sammen med personvernombudet
- KI-loven: vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Saksbehandling er det som ligger nærmest (vedlegg III nr. 5 bokstav a). Det må en jurist vurdere
- Drift: vi eier hele clusteret for fleet-runtime. Det må planlegges før piloten går over i drift
- Modeller: det er ikke sjekket om Navs GCP-avtale dekker alle modellene i Vertex AI
- Leverandørbinding: åpne standarder og «ta med egen modell» gjør det billigere å bytte (vår vurdering)
- Lisensspørsmålet fra tidligere versjoner er avklart: agenter uten person bak bruker ikke Copilot-lisens. Eierskapet er også avklart: team copilot eier plattformen, og teamene eier sine agenter og verktøy

Hva vi ber om, hvis noen spør:
- Innspill til styringsmodellen og ansvarsdelingen
- Navngitte folk fra Nais, sikkerhet, personvern og en jurist til å se på identitet, PVK-malen og KI-forordningen
- Team med interne agenter som vil være med i piloten
-->

---
layout: default
---

::header::
<h1 class="text-4xl font-black">Felles byggeklosser, trygge agenter</h1>
<p class="tagline mt-2">Teamene eier agentene. Fleet gjør det trygt å sette dem i produksjon.</p>

::default::
<svg class="dg fly" viewBox="0 0 880 340" role="img" aria-label="Seks piler i trekantformasjon stiger mot øvre høyre hjørne. En stiplet linje foran den fremste pilen viser kursen.">
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
<span class="font-mono text-sm opacity-70">nav-fleet · gjeldende retning · ikke låst</span>

<!--
- Avslutningen i én setning: teamene eier agentene, og Fleet gjør det trygt å sette dem i produksjon
- Figuren: de samme pilene som på forsiden, i formasjon på felles kurs
-->

