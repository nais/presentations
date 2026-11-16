---
theme: default
title: 'nav-fleet: en felles plattform for KI-agenter i Nav'
htmlAttrs:
  lang: 'no'
class: text-center
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
<svg class="cover-mark" viewBox="0 0 96 96" role="img" aria-label="nav-fleet">
  <g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M39 30l9-16 9 16M21 56l9-16 9 16M57 56l9-16 9 16M3 82l9-16 9 16M75 82l9-16 9 16"/>
  </g>
</svg>

::default::
<p class="text-sm font-mono" style="color: var(--nais-accent)">PLAN OG VISJON · UTKAST TIL DISKUSJON</p>
<h1 class="text-5xl font-black mt-4">nav-fleet</h1>
<p class="text-2xl mt-3" style="font-family: 'Poppins', sans-serif; font-weight: 600">En felles plattform for KI-agenter i produksjon</p>
<p class="text-lg mt-4" style="color: var(--nais-text-secondary)">Til daglig «Fleet». Fra én pilot til en hel flåte, der et menneske fortsatt avgjør.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvorfor trenger vi dette?»

- Dette er en plan og en visjon. Ingenting er vedtatt
- Rekkefølgen: behovet, visjonen, økosystemet, modulene, identitet, KI-grunnmuren, fire eksempler, første steg, veikartet, åpne spørsmål og hva vi ber om
- Navnet: nav-fleet, til daglig Fleet, på linje med Nais, Nada og Aksel. nav-pilot var én pilot og de første forsøkene. Fleet er en flåte i produksjon, og plattformen er flåtestyringen. Navnet fungerer på norsk og engelsk
- Fleet er en egen plattform. Den kjører på Nais, og Nais er én av flere som kan bruke den. Derfor har presentasjonen ingen Nais-profil
- Modulnavnene (fleet-gateway, fleet-control, fleet-orchestrator, fleet-radar og fleet-sdk) og adressen fleet.nav.no er forslag
- Der notatene sier «vår vurdering», er det forfatterens egen analyse, ikke en kilde. Der lysbildene sier «visjon», «forslag» eller «hypotese», er det ikke planlagt eller avtalt
- Navnesjekk 16. november 2026: søk i reponavn i navikt ga to treff på «fleet»: navikt/fleet («Exploratory operation») og navikt/atom-fleet (forsøk med Elastic Fleet). Repoet navikt/nav-fleet finnes ikke
- Kjente navn utenfor Nav: Rancher Fleet (GitOps for Kubernetes), Fleet (enhetsstyring, fleetdm) og JetBrains Fleet. Vi har ikke sjekket varemerker eller Navs interne systemkatalog
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Mange team trenger det samme, og bygger det hver for seg</h1>
<p class="subtitle">Fra forsøk til produksjon: uten en felles plattform løser hvert team dette alene</p>

::default::
<div class="shift">
  <div></div>
  <div class="shift-h">I dag: forsøk</div>
  <div class="shift-h now">Med Fleet: produksjon</div>
  <div class="shift-l">Formål</div>
  <div>Teste hva KI kan brukes til</div>
  <div class="now">Stabil drift av KI i tjenester</div>
  <div class="shift-l">Styring</div>
  <div>Hvert team finner sin egen løsning</div>
  <div class="now">Felles regler som håndheves ett sted</div>
  <div class="shift-l">Tilgang</div>
  <div>Egen tokenkode i hver app</div>
  <div class="now">Knyttet til identiteten til appen og brukeren</div>
  <div class="shift-l">Kostnad</div>
  <div>Ingen samlet oversikt</div>
  <div class="now">Synlig per team</div>
</div>
<p class="footnote">Alle trenger det samme: tilgang på vegne av brukeren, trygge verktøy og modeller, og sporing av hva agenten gjorde.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva vil vi i stedet?»

- Hovedpoenget: mange team og tjenester trenger det samme. Uten en felles plattform løser hvert team det alene
- Fra pilot til flåte: nav-pilot er der vi startet. Det er et kommandolinjeverktøy for utviklere, som logger inn mot GitHub med device flow. Det er ikke en sandkasse eller en inkubator, og det blir ikke en del av Fleet
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
- Ingen vei inn for skriveverktøy: MCP-kategori 3, «begrenset tilgang til sensitive data eller skriving»: «Ikke besluttet, avslås inntil ny risikovurdering». Kategori 4 er ikke tillatt (navikt/copilot-intern/retningslinjer.md § 3)
- aksel-studio har ni verktøy utenfor registeret. De kjører i studio-api over SDK-ens JSON-RPC (aksel-studio docs/beslutninger/019-ki-chat-per-konsept.md). Ingen av de 12 serverne i navikt/copilot/apps/mcp-registry/allowlist.json er aksel-studio. Presisering: 019 velger egne verktøy av sikkerhetsgrunner og oppgir ikke kategori 3 som grunn
- Én delt pod: «Appen har skallverktøy og tokenet til alle aktive brukere» (aksel-studio docs/oppsett/studio-ki.md). Ingen prober, og trafikken til studio-ki er ukryptert til kravet før prod er løst (studio-ki.md, 019, aksel-studio #141)
- Tom modus virker: i den lokale testen kunne modellen ikke lese filer eller kjøre kommandoer (aksel-studio docs/ki-spike-lokal.md, 15. november 2026). Risikoen ligger i poden, ikke i modellen
- At neste team kopierer dette mønsteret, er en hypotese. Vi kjenner ikke til et konkret neste team
- Ingen eier: styringsmodellen dekker utviklerflater og har ingen rolle for agenter som tjenester (navikt/copilot-intern/styringsmodell.md, «Roller og ansvar»)
- Ingen normative dokumenter: styringsmodell.md, risikovurdering.md, retningslinjer.md, godkjente-agenter.md, overvaaking.md og modellstyring.md i navikt/copilot-intern handler om kodeagenter på utviklermaskiner og i sky. Ingen beskriver agenter som kjører som tjenester på Nais. Dette er vår lesing og et søk i filene, ikke en juridisk gjennomgang
- Snarveiene tar også slutt: «navikt har nådd grensen for antall GitHub Apps. Studio gjenbruker derfor den eksisterende appen Nav Copilot (nav-pilot)» (011, merknad november 2026)
- Tallene gjelder repoene vi har lest. Andre team i Nav kan ha egne agenter vi ikke kjenner til

Derfor nå:
- studio-ki: egen Nais-app med Copilot CLI som headless server. Hemmeligheten ble laget 16. november 2026 (aksel-studio docs/oppsett/studio-ki.md og .nais/ki.yaml). Tilkoblingen mellom pods er ikke testet ennå (aksel-studio #132)
- MCP, spesifikasjon 2025-11-25: «The MCP server MUST NOT pass through the token it received from the MCP client», og serveren skal avvise tokener som ikke er utstedt til den. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- Entra Agent ID, On-Behalf-Of-flyt for agenter. Siden er datert 4. november 2025 og oppdatert 10. august 2026. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow
- Kubernetes Agent Sandbox under SIG Apps, med gVisor og Kata Containers. Blogg 20. mars 2026. https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
- Agentidentitet er ikke ferdig standardisert. En oversikt for OAuth-gruppa i IETF, datert 31. mai 2026, teller 32 individuelle utkast i 5 grupper. https://datatracker.ietf.org/meeting/interim-2026-oauth-03/materials/slides-interim-2026-oauth-03-sessa-ietf-individual-draft-analysis-00
- OpenID Foundation, «Identity Management for Agentic AI», 7. oktober 2025: dagens standarder holder for agenter i én organisasjon, og virksomheter bør behandle agenter som fullverdige identiteter i tilgangsstyringen sin. https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/
- Datatilsynet, 20. august 2026: «en økende mengde avviksmeldinger» om «tilfeldig, uønsket og ukontrollert bruk av KI-agenter i norske kommuner». https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2026/datatilsynet-pa-sikkerhetsfestivalen/
- KI-loven: ny høring høsten 2026. Statsrådens ambisjon er å fremme loven for Stortinget våren 2027. Det er ikke en frist. Reglene for høyrisiko-KI er utsatt til 2. desember 2027 og 2. august 2028. Pressemelding 4. august 2026. https://www.regjeringen.no/no/aktuelt/id3169693/
- EU: Rådet ga endelig godkjenning til endringene 29. juni 2026, og rettsakten ble signert 8. juli. Rådets egen side svarer 403 for oss. Datoene er bekreftet i andrehåndskilder, blant annet https://lewissilkin.com/insights/2026/07/09/council-of-the-eu-gives-ai-omnibus-final-green-light-102nbb1. Rådets pressemelding: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Det må sjekkes av jurist
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Visjonen: enkelt, trygt og raskt å bygge og drifte KI i produksjon</h1>
<p class="subtitle">Fire bærebjelker. Ingenting her er planlagt eller vedtatt <span class="chip amber align-middle ml-2">Visjon</span></p>

::default::
<div class="grid grid-cols-4 gap-4">
  <IconCard icon="i-carbon-code" title="Selvbetjent" description="Teamet beskriver hva agenten trenger, slik de gjør for en app på Nais." />
  <IconCard icon="i-carbon-security" title="Regler som kode" description="Tilgang, logging og risikoklasse settes ett sted, ikke i hver app." />
  <IconCard icon="i-carbon-arrows-horizontal" title="Fritt modellvalg" description="Teamet bytter modell eller leverandør uten å endre koden." />
  <IconCard icon="i-carbon-chart-line" title="Full oversikt" description="Sporing, kostnad per team og evalueringer før og etter endringer." />
</div>
<p class="footnote">Felles for alt: agenten gjør forarbeidet med rettighetene til et menneske, og mennesket avgjør.</p>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvor hører Fleet hjemme blant det vi har?»

- Alt på dette lysbildet er visjon. Vi har ikke estimert noe
- Visjonen i én setning: det skal være enkelt, trygt og raskt for produktteam å bygge, drifte og videreutvikle KI i produksjon, med etterlevelse innebygd, full oversikt og uten dobbeltarbeid
- Selvbetjent: samme tanke som Nais. Teamet beskriver behovet, og plattformen gjør resten. Et eget felt i nais.yaml er et forslag
- Regler som kode: sikkerhet og etterlevelse settes ett sted. Tilgang og logging er grunnlaget i første versjon. Maskering av personopplysninger og risikoklassifisering etter KI-forordningen er forslag. Hva forordningen krever av Nav, må sjekkes av jurist
- Fritt modellvalg: i dag går modellkallene gjennom GitHub Copilot. Flere skyleverandører og egne GPU-er er visjon, ikke noe vi har
- Full oversikt: sporing uten innholdet i promptene er allerede praksis (aksel-studio docs/beslutninger/011-ki-kjoretid.md). Evalueringer og karbonregnskap er visjon
- Mennesket avgjør: se identitetslysbildet og eksemplet med saksbehandleren
- Navs oppdrag er utgangspunktet: Arbeids- og velferdsforvaltningen skal «møte det enkelte mennesket med respekt, bidra til sosial og økonomisk trygghet og fremme overgang til arbeid og aktiv virksomhet» (Nav-loven § 1 andre ledd, https://lovdata.no/lov/2006-06-16-20/§1). Ordrett sitat, sjekket mot Lovdata 16. november 2026
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet fyller laget mellom appene og modellene</h1>
<p class="subtitle">nav-fleet erstatter ingen plattform. Rollene er vår beskrivelse</p>

::default::
<svg class="dg" viewBox="0 0 880 368" role="img" aria-label="Økosystemet i fem lag. Øverst Aksel for brukerflater. Under ligger Nais med apper, agenter og innlogging. Under Nais ligger nav-fleet med fire moduler, ved siden av Nada med dataprodukter. Nederst ligger modeller og infrastruktur. nav-pilot står for seg selv som stedet vi startet.">
  <defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="2" width="880" height="54" rx="8" class="b"/>
  <text x="20" y="35" class="t">Aksel</text>
  <text x="130" y="35" class="s">designsystem og mønstre for samspill mellom menneske og KI: kilder, usikkerhet og godkjenning</text>
  <line x1="440" y1="56" x2="440" y2="72" class="a" marker-end="url(#ar1)"/>
  <rect x="0" y="74" width="880" height="54" rx="8" class="n"/>
  <text x="20" y="107" class="t">Nais</text>
  <text x="130" y="107" class="s">apper og agenter, runtime og infrastruktur, innlogging med Entra ID, TokenX og Maskinporten</text>
  <line x1="300" y1="128" x2="300" y2="144" class="a" marker-end="url(#ar1)"/>
  <line x1="750" y1="128" x2="750" y2="144" class="a" marker-end="url(#ar1)"/>
  <rect x="0" y="146" width="600" height="112" rx="10" class="p"/>
  <text x="20" y="172" class="h">nav-fleet</text>
  <text x="118" y="172" class="s">styring, ruting og orkestrering for KI i produksjon</text>
  <text x="584" y="172" class="s" text-anchor="end">fleet.nav.no (forslag)</text>
  <rect x="16" y="188" width="134" height="54" rx="8" class="b"/>
  <text x="83" y="220" text-anchor="middle">fleet-gateway</text>
  <rect x="160" y="188" width="134" height="54" rx="8" class="b"/>
  <text x="227" y="220" text-anchor="middle">fleet-control</text>
  <rect x="304" y="188" width="136" height="54" rx="8" class="b"/>
  <text x="372" y="220" text-anchor="middle">fleet-orchestrator</text>
  <rect x="450" y="188" width="134" height="54" rx="8" class="b"/>
  <text x="517" y="220" text-anchor="middle">fleet-radar</text>
  <line x1="602" y1="202" x2="634" y2="202" class="a" marker-end="url(#ar1)"/>
  <rect x="636" y="146" width="244" height="112" rx="10" class="b"/>
  <text x="758" y="184" class="t" text-anchor="middle">Nada</text>
  <text x="758" y="208" class="s" text-anchor="middle">dataprodukter, katalog og tilgang</text>
  <text x="758" y="226" class="s" text-anchor="middle">domenekunnskap til agentene</text>
  <line x1="300" y1="258" x2="300" y2="274" class="a" marker-end="url(#ar1)"/>
  <rect x="0" y="276" width="880" height="48" rx="8" class="n"/>
  <text x="20" y="305" class="t">Modeller og infrastruktur</text>
  <text x="260" y="305" class="s">skymodeller, i dag gjennom GitHub Copilot</text>
  <rect x="696" y="287" width="168" height="26" rx="13" class="q"/>
  <text x="780" y="304" class="s" text-anchor="middle">egne GPU-er (visjon)</text>
  <text x="0" y="356" class="t">nav-pilot</text>
  <text x="92" y="356" class="s">der vi startet: et kommandolinjeverktøy for utviklere og de første forsøkene. Det blir ikke en del av Fleet.</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva består Fleet av?»

- Fleet erstatter ingen plattform. Den legger seg mellom appene på Nais og modellene, ved siden av Nada
- Rollene er vår beskrivelse. Vi har ikke avklart dem med Nais, Nada eller Aksel
- Aksel: designsystemet. Mønstre for samspill mellom menneske og KI, som å vise kilder, vise usikkerhet og be om godkjenning, er et forslag til rolle. Aksel har ikke tatt den på seg
- Nais: runtime og infrastruktur. Innlogging og tokener finnes i dag, med Entra ID, TokenX og Maskinporten gjennom Texas
- Nada: dataprodukter, katalog og tilgang. Domenekunnskap til agentene er en hypotese. Vi har ikke snakket med Nada
- Modeller: i dag går modellkallene gjennom GitHub Copilot. Flere skyleverandører og egne GPU-er er visjon
- nav-pilot: der vi startet. Det er et kommandolinjeverktøy som logger inn mot GitHub med device flow. Det er ikke en sandkasse eller en inkubator
- fleet.nav.no er et forslag til adresse. Den finnes ikke
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fire moduler dekker det alle agenter trenger</h1>
<p class="subtitle">Modulnavnene er forslag. Teamene beholder domenet, og Fleet kjører på Nais</p>

::default::
<svg class="dg" viewBox="0 0 880 362" role="img" aria-label="Øverst fire som kan bruke Fleet: produktteam, utviklerverktøy, Nais og Nada. I midten nav-fleet med modulene fleet-gateway, fleet-control, fleet-orchestrator og fleet-radar, og under dem fleet-sdk og identitet. Nederst Nais, som Fleet kjører på.">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="2" width="205" height="50" rx="8" class="b"/>
  <text x="102" y="23" class="t" text-anchor="middle">Produktteam</text>
  <text x="102" y="42" class="s" text-anchor="middle">aksel-studio er først</text>
  <line x1="102" y1="52" x2="102" y2="68" class="a" marker-end="url(#ar2)"/>
  <rect x="225" y="2" width="205" height="50" rx="8" class="b"/>
  <text x="327" y="23" class="t" text-anchor="middle">Utviklerverktøy</text>
  <text x="327" y="42" class="s" text-anchor="middle">my-copilot</text>
  <line x1="327" y1="52" x2="327" y2="68" class="a" marker-end="url(#ar2)"/>
  <rect x="450" y="2" width="205" height="50" rx="8" class="q"/>
  <text x="552" y="23" class="t" text-anchor="middle">Nais</text>
  <text x="552" y="42" class="s" text-anchor="middle">støtteagent (hypotese)</text>
  <line x1="552" y1="52" x2="552" y2="68" class="a" marker-end="url(#ar2)"/>
  <rect x="675" y="2" width="205" height="50" rx="8" class="q"/>
  <text x="777" y="23" class="t" text-anchor="middle">Nada</text>
  <text x="777" y="42" class="s" text-anchor="middle">dataprodukter (hypotese)</text>
  <line x1="777" y1="52" x2="777" y2="68" class="a" marker-end="url(#ar2)"/>
  <rect x="0" y="70" width="880" height="222" rx="10" class="p"/>
  <text x="20" y="93" class="h">nav-fleet</text>
  <rect x="16" y="104" width="203" height="114" rx="8" class="b"/>
  <text x="117" y="128" class="t" text-anchor="middle">fleet-gateway</text>
  <text x="117" y="150" class="s" text-anchor="middle">MCP- og modelltilgang</text>
  <text x="117" y="168" class="s" text-anchor="middle">token exchange og logging</text>
  <text x="117" y="186" class="s" text-anchor="middle">kvoter og rate limiting</text>
  <text x="117" y="204" class="s" text-anchor="middle">PII-vask (forslag)</text>
  <rect x="231" y="104" width="203" height="114" rx="8" class="b"/>
  <text x="332" y="128" class="t" text-anchor="middle">fleet-control</text>
  <text x="332" y="150" class="s" text-anchor="middle">modell- og verktøykatalog</text>
  <text x="332" y="168" class="s" text-anchor="middle">tilgang og policy</text>
  <text x="332" y="186" class="s" text-anchor="middle">risikodokumentasjon</text>
  <text x="332" y="204" class="s" text-anchor="middle">fleet: i nais.yaml (forslag)</text>
  <rect x="446" y="104" width="203" height="114" rx="8" class="b"/>
  <text x="547" y="128" class="t" text-anchor="middle">fleet-orchestrator</text>
  <text x="547" y="150" class="s" text-anchor="middle">agentinfrastruktur og MCP-hub</text>
  <text x="547" y="168" class="s" text-anchor="middle">RAG mot Nada</text>
  <text x="547" y="186" class="s" text-anchor="middle">tilgang på dokumentnivå</text>
  <text x="547" y="204" class="s" text-anchor="middle">regler for godkjenning</text>
  <rect x="661" y="104" width="203" height="114" rx="8" class="b"/>
  <text x="762" y="128" class="t" text-anchor="middle">fleet-radar</text>
  <text x="762" y="150" class="s" text-anchor="middle">tracing av agentkjeder</text>
  <text x="762" y="168" class="s" text-anchor="middle">evals før og etter endring</text>
  <text x="762" y="186" class="s" text-anchor="middle">kostnad per team</text>
  <text x="762" y="204" class="s" text-anchor="middle">karbonregnskap (visjon)</text>
  <text x="20" y="244" class="t">fleet-sdk og CLI</text>
  <text x="170" y="244">Runtime-mal og deklarativ config ved siden av nais.yaml. Agenten kjører som en vanlig Nais-app.</text>
  <text x="20" y="272" class="t">Identitet</text>
  <text x="170" y="272">Entra ID og Texas utsteder tokenene. fleet-control gir tilgang, og fleet-gateway håndhever den.</text>
  <line x1="440" y1="292" x2="440" y2="308" class="a" marker-end="url(#ar2)"/>
  <rect x="0" y="310" width="880" height="50" rx="10" class="n"/>
  <text x="440" y="341" class="t" text-anchor="middle">Kjører på Nais: hosting, OTel, accessPolicy og Texas</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Den vanskeligste delen er identitet.»

- Modulnavnene er forslag. Innholdet i hver modul er vår vurdering
- Slik fordeler de tidligere delene seg:
  - MCP-gateway, token exchange og modellgateway: fleet-gateway. Modellgatewayen kommer senere
  - Policy, tilgang og katalog over modeller og verktøy: fleet-control
  - Logging, sporing, evalueringer og kostnad: fleet-gateway skriver loggen, og fleet-radar viser den
  - Agent-runtime: en mal i fleet-sdk med image, accessPolicy og helsesjekk. Agenten kjører som en vanlig app på Nais. Fleet drifter ingen egen runtime-tjeneste
  - Identitet: Entra ID og Texas på Nais utsteder tokenene. fleet-control bestemmer hva en agent har lov til. fleet-gateway håndhever det og gjør token exchange
  - Nytt: fleet-orchestrator, med RAG mot Nada, MCP-hub og regler for når et menneske må godkjenne
- Forslag og visjon, ikke fakta: PII-vask i gatewayen, et fleet:-felt i nais.yaml, karbonregnskap og egne GPU-er. Ingen av dem er utredet
- RAG mot Nada med tilgang på dokumentnivå er en hypotese. Vi har ikke snakket med Nada
- Risikodokumentasjon etter KI-forordningen i fleet-control er et forslag. Hva forordningen krever av Nav, må sjekkes av jurist
- MCP står to steder: tilgang i fleet-gateway og hub i fleet-orchestrator. Grensen mellom dem må trekkes i ADR-en
- Plassering: Fleet er ikke en del av Nais. Den kjører på Nais. Nais står to steder i figuren: øverst som en som kan bruke Fleet, og nederst som underlag
- Stiplet ramme betyr hypotese. Nais og Nada øverst er hypoteser. Vi har ikke snakket med Nada, og ingen av dem har bedt om dette
- Vi starter ikke fra null. Fire byggeklosser er i drift:
  - MCP Registry: 12 servere i navikt/copilot/apps/mcp-registry/allowlist.json. Hard kontroll som blokkerer ukjente servere (navikt/copilot-intern/styringsmodell.md, «Kontroller»). Registeret er en liste, ikke en proxy. Det gir ikke kontroll eller revisjon per kall (vår vurdering)
  - Modellpolicy: ZDR, ingen trening, innholdsfiltre. Sannhetskilden er NAV_DISABLED_MODELS i navikt/copilot/apps/my-copilot/src/lib/model-policy.ts (navikt/copilot-intern/modellstyring.md, versjon 1.1, 11. oktober 2026). aksel-studio leser den ikke
  - Texas og OBO: my-copilot ber Texas om et OBO-token for copilot-api, og copilot-api validerer det på nytt (navikt/copilot/ARCHITECTURE.md)
  - Nais: hosting, OTel og accessPolicy
- Ingen av de fire kontrollerer eller logger et verktøykall mens agenten kjører. Det er hullet fleet-gateway fyller (vår vurdering)
- Ta i bruk framfor å bygge: fleet-gateway kan være en utvidelse av mcp-registry eller en åpen gateway
- Første versjon er fleet-gateway med MCP, token exchange på vegne av brukeren og logging med felles feltnavn: user, tool, outcome, credits og trace-ID, uten innhold (vår anbefaling)
- Venter: modellgateway, agentens egen identitet, evalueringer og minne
- Modellgatewayen venter så lenge Copilot-lisensen bærer kostnaden. Den trengs når noen bruker modeller utenfor Copilot, eller når brukere uten lisens skal med. Kubernetes-prosjektet Gateway API Inference Extension har en egen ressurs for dette, InferencePool. https://gateway-api-inference-extension.sigs.k8s.io/
- Andre gjør det samme: Canada har GC AI Platform som fellestjeneste fra Shared Services Canada, med forhåndsgodkjente modeller og verktøy, blant annet for agentflyter. Siden er oppdatert 25. august 2026. https://www.canada.ca/en/shared-services/services/gc-ai/gc-ai-platform.html
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Agenten låner brukerens rettigheter, og ser aldri tokenet</h1>
<p class="subtitle">Først på vegne av brukeren. Agentens egen identitet venter til noen trenger bakgrunnsjobber</p>

::default::
<svg class="dg" viewBox="0 0 880 340" role="img" aria-label="Identitetsflyt i fire steg: brukeren logger inn i appen, appen bytter til et OBO-token, agenten kaller verktøy gjennom fleet-gateway, og gatewayen sjekker og logger før verktøyet kjører.">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="20" width="128" height="72" rx="8" class="b"/>
  <text x="64" y="61" class="t" text-anchor="middle">Bruker</text>
  <rect x="188" y="20" width="128" height="72" rx="8" class="b"/>
  <text x="252" y="52" class="t" text-anchor="middle">App</text>
  <text x="252" y="72" class="s" text-anchor="middle">studio-api</text>
  <rect x="376" y="20" width="128" height="72" rx="8" class="p"/>
  <text x="440" y="61" class="t" text-anchor="middle">Agent</text>
  <rect x="564" y="20" width="128" height="72" rx="8" class="p"/>
  <text x="628" y="61" class="t" text-anchor="middle" style="font-size: 14px">fleet-gateway</text>
  <rect x="752" y="20" width="128" height="72" rx="8" class="b"/>
  <text x="816" y="61" class="t" text-anchor="middle">Verktøy</text>
  <line x1="128" y1="56" x2="186" y2="56" class="a" marker-end="url(#ar3)"/>
  <line x1="316" y1="56" x2="374" y2="56" class="a" marker-end="url(#ar3)"/>
  <line x1="504" y1="56" x2="562" y2="56" class="a" marker-end="url(#ar3)"/>
  <line x1="692" y1="56" x2="750" y2="56" class="a" marker-end="url(#ar3)"/>
  <circle cx="155" cy="34" r="12" class="num"/><text x="155" y="39" class="numt" text-anchor="middle">1</text>
  <circle cx="343" cy="34" r="12" class="num"/><text x="343" y="39" class="numt" text-anchor="middle">2</text>
  <circle cx="531" cy="34" r="12" class="num"/><text x="531" y="39" class="numt" text-anchor="middle">3</text>
  <circle cx="719" cy="34" r="12" class="num"/><text x="719" y="39" class="numt" text-anchor="middle">4</text>
  <circle cx="14" cy="142" r="12" class="num"/><text x="14" y="147" class="numt" text-anchor="middle">1</text>
  <text x="34" y="140" class="t">Logger inn</text>
  <text x="34" y="160" class="s">Entra ID</text>
  <text x="34" y="178" class="s">via Wonderwall</text>
  <circle cx="234" cy="142" r="12" class="num"/><text x="234" y="147" class="numt" text-anchor="middle">2</text>
  <text x="254" y="140" class="t">Bytter token</text>
  <text x="254" y="160" class="s">OBO via Texas,</text>
  <text x="254" y="178" class="s">aud = gateway</text>
  <circle cx="454" cy="142" r="12" class="num"/><text x="454" y="147" class="numt" text-anchor="middle">3</text>
  <text x="474" y="140" class="t">Kaller verktøy</text>
  <text x="474" y="160" class="s">kortlivet token,</text>
  <text x="474" y="178" class="s">smalt omfang</text>
  <circle cx="674" cy="142" r="12" class="num"/><text x="674" y="147" class="numt" text-anchor="middle">4</text>
  <text x="694" y="140" class="t">Sjekker og logger</text>
  <text x="694" y="160" class="s">sub = bruker,</text>
  <text x="694" y="178" class="s">azp = agent</text>
  <rect x="0" y="214" width="880" height="110" rx="10" class="n"/>
  <text x="24" y="246" class="t">Rettigheter</text>
  <text x="160" y="246">Snittet av det brukeren og agenten har lov til.</text>
  <text x="24" y="276" class="t">Tokener</text>
  <text x="160" y="276">Token exchange skjer i fleet-gateway. Agenten får aldri GitHub- eller Copilot-tokenet.</text>
  <text x="24" y="306" class="t">Logging</text>
  <text x="160" y="306">Hvem, hvilket verktøy, hvilken ressurs og utfallet. Aldri innholdet i prompten.</text>
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
- I dag går brukerens ghu_-token helt inn i runtimen hos aksel-studio (011, 019)
- Logging uten promptinnhold er allerede praksis: 011 logger forbruk uten innholdet i promptene, og copilot-api logger aktør ved endringer (navikt/copilot/SECURITY.md, «Audit logging»)
- Målbildet stiller samme krav: gatewayen skal ikke skjule manglende brukerautorisasjon med egne brede backend-rettigheter, og ressurseier avgjør tilgangen (målbildet, «Gateway(er), integrasjoner og kontekst»)
- Agentens egen identitet trengs først ved bakgrunnsjobber. aksel-studio trenger det ikke nå (011, «Konsekvenser»)
- SPIFFE og WIMSE er underlaget IETF bygger agentidentitet på, men arbeidet er utkast (IETF-oversikten 31. mai 2026, lenke i notatene til lysbilde 2). Vi foreslår ikke å vente på dem
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fleet passer inn i KI-grunnmuren</h1>
<p class="subtitle">Målbildet fra 6. november setter kravene. Fleet er et bidrag for agenter som kjører som tjenester</p>

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
  <text x="675" y="201" class="t" text-anchor="middle">runtime-mal i fleet-sdk, kjører på Nais</text>
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
Overgang: «Hva kan dette brukes til? Fire eksempler.»

- Målbildet: «Digital KI-grunnmur for produktteam i Nav», status «Diskusjonsutkast, 6. november 2026» (navikt/copilot-intern/underlag/agentisk-ki-produktutvikling-maalbilde.md). Det er heller ikke vedtatt
- Venstre side følger figuren og tabellen «Byggesteiner og kontrakter» i målbildet. Koblingene til høyre er vår lesing. Forfatterne av målbildet har ikke sett dem
- Fleet konkurrerer ikke med målbildet. Målbildet beskriver hele grunnmuren for produktutvikling. Fleet er et forslag til hvordan delene i kjøreplanet, pluss identitet og kontroll, kan bygges for agenter som kjører som tjenester på Nais
- fleet-orchestrator har ingen egen motpart i figuren. Den ligger nærmest agent-runtime og MCP-gateway(er). Oppdraget eies fortsatt utenfor Fleet
- Tre ting vi tar med oss fra målbildet:
  - «Varig arbeidsoppdrag, utskiftbare agentsesjoner». Oppdraget eies ikke av Fleet. Fleet kjører økter og logger dem med oppgave-ID
  - Modellgateway og MCP-gateway er separate kontrollflater, og registeret er fortsatt en katalog
  - Ressurseier avgjør tilgangen. Gatewayen får ingen brede rettigheter
- Målbildet krever ikke én klient, modell eller runtime. Fleet gjør heller ikke det. Lokale agenter med cplt og leverandørdriftede agenter består ved siden av
- Målbildet peker ikke ut Nais som eier av agenttjenesten eller inferenslaget. Fleet gjør heller ikke det. Eierskap er et åpent spørsmål
- Der vi går lenger: visjonen vår nevner saksbehandling. Målbildet holder saksbehandling og innbyggerdialog utenfor, og sier at en løsning for utviklingsarbeid ikke dermed er godkjent for saksbehandling. Det er vi enige i
- Målbildet foreslår å sammenligne eksisterende tilbud før gateway eller egen runtime velges. Det gjelder også Fleet
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Utvikling og drift: agenten handler med tilgangen til den som spør</h1>
<p class="subtitle">To av fire eksempler. Ingen av dem er forpliktelser</p>

::default::
<div class="scenario-row">
  <div class="feature-card scenario">
    <div class="kicker"><span>Utviklerverktøy</span><span class="chip accent">Eksempel</span></div>
    <h3>Utvikleragenten åpner en PR med riktig tilgang</h3>
    <p><b>Agenten</b> tar en sak, endrer koden i en sandkasse og åpner en utkast-PR. Den når bare repoene brukeren selv har.</p>
    <p><b>Mennesket</b> gjennomgår og godkjenner den konkrete commiten.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-container-software"></span>runtime-mal</span>
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
  <div class="feature-card green scenario">
    <div class="kicker"><span>Nais</span><span class="chip amber">Hypotese</span></div>
    <h3>Støtteagenten svarer på «hvorfor feiler appen min?»</h3>
    <p><b>Agenten</b> leser dokumentasjon og status for appene til teamet som spør, og foreslår neste steg.</p>
    <p><b>Mennesket</b> gjør endringene selv. Agenten har bare lesetilgang.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-container-software"></span>runtime-mal</span>
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-rule"></span>fleet-control</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «De to neste eksemplene ligger lenger fram.»

- Merkelappene: «eksempel» er noe vi mener plattformen bør kunne bære tidlig. «Hypotese» er noe vi tror på, men ikke har snakket med noen om. Ingen av dem er bestilt eller planlagt
- Brikkene nederst på hvert kort viser hvilke moduler eksemplet bruker. Modulnavnene er forslag. Runtime-malen kommer fra fleet-sdk

Utvikleragenten:
- Følger arbeidsløpet i målbildet, steg 3 til 5: utkast i valgt runtime, utkast-PR, og menneskelig gjennomgang av konkret commit (målbildet, «Ett konkret arbeidsløp»)
- Målbildet vil at også designer, produkteier og fagperson skal kunne starte et slikt løp. Da trengs en runtime som ikke er utviklerens egen maskin
- Hva Fleet tilfører: token exchange i fleet-gateway gir agenten et kortlivet token for akkurat de repoene brukeren har. I dag finnes dette løpet hos leverandøren (Copilot cloud agent) eller lokalt med cplt. Målbildet sier at verken nav-pilot eller cplt gir sentral kontroll over de flatene
- Krav fra målbildet som gjelder her: ingen direkte push til standardgrenen, og ingen produksjonshemmeligheter (målbildet, «Krav før piloten får skriverettigheter»)
- Skriving gjennom MCP er kategori 3 og avslås i dag (navikt/copilot-intern/retningslinjer.md § 3). Eksemplet forutsetter en ny risikovurdering

Støtteagenten:
- Hypotese fra oss. Nais har ikke bedt om dette, og vi har ikke avtalt noe
- Lesetilgang gjør ikke innholdet ufarlig: logger, labels og traces kan inneholde personopplysninger og hemmeligheter. Målbildet holder produksjonstilgang utenfor piloten og foreslår syntetiske eller særskilt godkjente data (målbildet, «Driftsinnsikt og datagrenser»)
- Første utgave bør derfor lese dokumentasjon og status, ikke logger (vår vurdering)
- Eksisterende tilgangsprosesser består. Agenten automatiserer ikke JITA eller tenantskifte (målbildet, samme avsnitt)
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Data og saksbehandling: agenten lager utkastet, mennesket avgjør</h1>
<p class="subtitle">To hypoteser. Den siste krever avklaringer vi ikke har startet på</p>

::default::
<div class="scenario-row">
  <div class="feature-card purple scenario">
    <div class="kicker"><span>Nada</span><span class="chip amber">Hypotese</span></div>
    <h3>Analytikeren spør dataproduktene med vanlige ord</h3>
    <p><b>Agenten</b> finner dataproduktet, skriver spørringen og kjører den med analytikerens egen tilgang.</p>
    <p><b>Mennesket</b> leser spørringen og vurderer svaret.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-rule"></span>fleet-control</span>
      <span class="chip slate"><span class="i-carbon-flow"></span>fleet-orchestrator</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
  <div class="feature-card amber scenario">
    <div class="kicker"><span>Fagsystemer</span><span class="chip amber">Hypotese · visjon</span></div>
    <h3>Saksbehandleren får et utkast med kilder</h3>
    <p><b>Agenten</b> henter fram saken og regelverket og skriver utkast til brev eller vurdering.</p>
    <p><b>Mennesket</b> retter, godkjenner og står for vedtaket.</p>
    <p class="caveat">Krever jurist, risikovurdering og en modellvei for personopplysninger.</p>
    <div class="blocks">
      <span class="chip slate"><span class="i-carbon-gateway"></span>fleet-gateway</span>
      <span class="chip slate"><span class="i-carbon-rule"></span>fleet-control</span>
      <span class="chip slate"><span class="i-carbon-flow"></span>fleet-orchestrator</span>
      <span class="chip slate"><span class="i-carbon-radar"></span>fleet-radar</span>
    </div>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Tilbake til det vi faktisk har: aksel-studio.»

Analytikeren:
- Hypotese fra oss. Vi har ikke snakket med Nada
- fleet-orchestrator står her for RAG mot dataproduktene med tilgang på dokumentnivå. Det er et forslag
- Poenget er policy og logging rundt verktøykallet: hvem spurte, hvilket dataprodukt, og ble det tillatt. Tilgangen er analytikerens egen, så agenten ser aldri mer enn analytikeren
- Målbildet sier det samme: ressurseier avgjør tilgangen, og et samlet verktøyendepunkt gir ikke samlet tilgang til alle kilder (målbildet, «Byggesteiner og kontrakter»)
- Dataprodukter med personopplysninger er kategori 3 eller 4 for MCP og er ikke tillatt i dag (navikt/copilot-intern/retningslinjer.md § 3). En første utgave må holde seg til åpne eller ikke-sensitive dataprodukter
- Svaret går til en modell. Dataminimering må skje i et betrodd ledd før modellkallet (målbildet, «Driftsinnsikt og datagrenser»)

Saksbehandleren:
- Dette er visjon. Det er ikke planlagt, ikke avtalt, og ligger utenfor målbildet, som holder saksbehandling og innbyggerdialog utenfor
- Mennesket avgjør og står for vedtaket. Agenten skriver utkast med kildehenvisning, og gjør ingen endring i saken
- KI-forordningen, forordning (EU) 2024/1689: vedlegg III nr. 5 bokstav a regner som høyrisiko KI-systemer som offentlige myndigheter bruker til å vurdere om noen har rett til grunnleggende offentlige ytelser og tjenester, og til å innvilge, redusere, trekke tilbake eller kreve tilbake slike ytelser. Artikkel 14 krever at høyrisiko-KI bygges slik at mennesker kan føre effektivt tilsyn med den. Vår oversettelse fra engelsk
- Kilden er ikke primær: EUR-Lex svarte ikke på automatisk henting 16. november 2026. Ordlyden er sjekket mot gjengivelsen på https://artificialintelligenceact.eu/annex/3/ og https://artificialintelligenceact.eu/article/14/, ikke mot endringene fra 2026. Sjekk mot EUR-Lex før lysbildene deles
- Om et utkastverktøy faller inn under vedlegg III, må sjekkes av jurist
- Personvernforordningen artikkel 22 gir rett til ikke å være gjenstand for avgjørelser som utelukkende bygger på automatisert behandling, med unntak blant annet når nasjonal rett tillater det og fastsetter egnede vernetiltak (nr. 2 bokstav b, https://lovdata.no/dokument/NL/lov/2018-06-15-38/gdpr/ARTIKKEL_22, lest 16. november 2026). Vi velger utkast, ikke vedtak. Om artikkelen krever det her, må sjekkes av jurist
- Modellvei: Copilot kan bare brukes i repoer uten personopplysninger eller skjermingsverdig informasjon (navikt/copilot-intern/retningslinjer.md § 1). Saksbehandling trenger en annen modell med avklart databehandling. Det er modellgatewayen i fleet-gateway som skal gjøre det mulig. fleet-orchestrator står her for reglene om menneskelig godkjenning
- Nav behandler allerede søknader automatisk på enkelte områder, blant annet barnetrygd, dagpenger, alderspensjon, foreldrepenger og sykepenger. En regelmotor sjekker vilkårene, og søkeren har rett til å få en saksbehandler til å vurdere søknaden. Siden nevner ikke KI (https://www.nav.no/automatisk-behandling, lest 16. november 2026). Eksemplet her handler om utkast til et menneske, ikke om flere automatiske vedtak
- Hvorfor ta det med: det er her Navs oppdrag ligger. Plattformen bør bygges slik at den kan bære dette senere, selv om første versjon ikke gjør det (vår vurdering)
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Første steg: aksel-studio flytter til Fleet</h1>
<p class="subtitle">Designere skal lage prototyper med KI. Studio beholder domenet, og grensesnittene er på plass</p>

::default::
<svg class="dg" viewBox="0 0 880 350" role="img" aria-label="I dag henter studio-api brukerens token fra Postgres og sender det til studio-ki, som har shell-tilgang og alle aktive tokener. Med Fleet sender studio-api et OBO-token til agent-runtimen, og fleet-gateway kaller verktøyene i studio-api og gjør token exchange.">
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
  <text x="318" y="158" class="s" text-anchor="middle">ghu_ per bruker</text>
  <line x1="236" y1="144" x2="182" y2="144" class="a" marker-end="url(#ar4)"/>
  <line x1="90" y1="192" x2="90" y2="226" class="a" marker-end="url(#ar4)"/>
  <text x="104" y="214" class="s">ghu_ per økt, ukryptert TCP</text>
  <rect x="0" y="228" width="180" height="60" rx="8" class="w"/>
  <text x="90" y="252" class="t" text-anchor="middle">studio-ki</text>
  <text x="90" y="272" class="s" text-anchor="middle">shell og aktive tokener</text>
  <text x="196" y="252" class="x">Største lokale risiko</text>
  <text x="196" y="272" class="s">én delt pod, ingen prober</text>
  <line x1="90" y1="288" x2="90" y2="306" class="a" marker-end="url(#ar4)"/>
  <rect x="0" y="308" width="180" height="38" rx="8" class="n"/>
  <text x="90" y="332" text-anchor="middle">Copilot API</text>
  <line x1="416" y1="176" x2="444" y2="176" class="a" marker-end="url(#ar4)"/>
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
  <text x="786" y="98" text-anchor="middle">agent-runtime</text>
  <rect x="706" y="140" width="160" height="56" rx="8" class="b"/>
  <text x="786" y="163" text-anchor="middle">fleet-gateway</text>
  <text x="786" y="182" class="s" text-anchor="middle">MCP, policy, logging</text>
  <rect x="706" y="218" width="160" height="50" rx="8" class="b"/>
  <text x="786" y="248" text-anchor="middle">token exchange</text>
  <line x1="620" y1="108" x2="704" y2="108" class="a" marker-end="url(#ar4)"/>
  <text x="656" y="100" class="s" text-anchor="middle">OBO</text>
  <line x1="706" y1="172" x2="622" y2="172" class="a" marker-end="url(#ar4)"/>
  <text x="656" y="164" class="s" text-anchor="middle">verktøy</text>
  <line x1="786" y1="118" x2="786" y2="138" class="a" marker-end="url(#ar4)"/>
  <line x1="786" y1="196" x2="786" y2="216" class="a" marker-end="url(#ar4)"/>
  <line x1="786" y1="268" x2="786" y2="306" class="a" marker-end="url(#ar4)"/>
  <rect x="706" y="308" width="160" height="38" rx="8" class="n"/>
  <text x="786" y="332" text-anchor="middle">Copilot API</text>
  <text x="460" y="232" class="t">Borte fra Studio</text>
  <text x="460" y="252" class="s">egen runtime, tokenlagring og kvote</text>
  <text x="460" y="290" class="t">Grensesnittene er på main</text>
  <text x="460" y="310" class="s">Tool, Runtime og TokenProvider</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvordan kommer vi fra dette til visjonen?»

- Dette er det ene tilfellet vi kjenner i detalj. KI-chatten i aksel-studio skal la designere lage forslag i et konsept (019). Den er på vei til dev og ikke i bruk ennå. Målbildet nevner Aksel Studio som mulig arbeidsflate for designere
- I dag: studio-api åpner en økt i studio-ki med brukerens ghu_-token og verktøyene. Verktøyene kjører i studio-api (019, «Slik går et verktøykall»)
- Tilkoblingen er JSON-RPC over ren TCP uten TLS. SDK-en avviser https (aksel-studio docs/oppsett/studio-ki.md, 019)
- studio-ki har shell-tilgang og tokenet til alle aktive brukere, og ingen prober (studio-ki.md). «Største lokale risiko» er vår vurdering
- Studio gjør mye riktig: tom modus, tilgangssjekk i hvert verktøy, og bare forslag som brukeren må godta (011, 019). Det er «mennesket avgjør» i liten skala
- Høyre side er et forslag. Ingenting av Fleet finnes ennå. Hvem som erstatter hva, er vår vurdering
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
<TimelineNode version="Nå" year="styring" title="Beslutt" description="ADR og eier. Jurist avklarer token og lisens." icon="i-carbon-document" />
<TimelineNode version="Fase 1" year="ett team" title="Gateway og control" description="Modell- og verktøykall samles. aksel-studio er først." icon="i-carbon-gateway" />
<TimelineNode version="Fase 2" year="flere team" title="Nais og radar" description="Deklarativ config, runtime-mal og selvbetjent innsikt." icon="i-carbon-radar" />
<TimelineNode version="Fase 3" year="data og regler" title="Orchestrator" description="Dataprodukter fra Nada og regler for godkjenning." icon="i-carbon-flow" />

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Det er ting vi ikke vet ennå.»

- Rekkefølgen er vår anbefaling. Fasene har ingen datoer. Vi har ikke estimert noe, og ingen har forpliktet seg
- Nå: ADR-en skrives i navikt/copilot-intern: «Agenter som tjenester på Nais». Stedet er vårt forslag. Den dekker eier, isolasjonskrav, token per økt og loggfelt. Jurist og GitHub avklarer token på server og brukere uten lisens
- Fase 1: fleet-gateway og fleet-control. Modell- og verktøykall samles ett sted, knyttes til identiteten appen har på Nais, og kostnaden blir synlig. aksel-studio er først ut, med token exchange på vegne av brukeren. Grensesnittene i aksel-studio er allerede på main
- Fase 2: deklarativ config ved siden av nais.yaml, fleet-sdk med runtime-mal, og fleet-radar. studio-ki blir mal når én økt per bruker er skilt ut. PII-vask i gatewayen er et forslag som må utredes. Skriveverktøy forutsetter at kategori 3 er risikovurdert (navikt/copilot-intern/retningslinjer.md § 3)
- Fase 3: fleet-orchestrator. Dataprodukter fra Nada i RAG og agenter, og felles regler for menneskelig godkjenning sammen med Aksel. Agentens egen identitet kommer når noen trenger bakgrunnsjobber
- Etter fase 3: saksbehandling i fagsystemer er visjon. Det krever egen modellvei, risikovurdering og juridisk avklaring
- Ytre datoer vi kjenner: statsråden vil fremme KI-loven for Stortinget våren 2027, og de første reglene for høyrisiko-KI i EU gjelder fra 2. desember 2027. https://www.regjeringen.no/no/aktuelt/id3169693/
- Målbildet for KI-grunnmuren foreslår en pilot med ett team og et udekket behov før gateway eller egen runtime velges (målbildet, «Første beslutning og videre eierskap»). Fase 1 kan være den piloten, eller komme etter den. Det må avklares med forfatterne
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Seks spørsmål må avklares underveis</h1>
<p class="subtitle">Ingen av dem stopper en ADR</p>

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
    <p>Blir noen av agentene høyrisiko? Det er ikke vurdert.</p>
  </div>
</div>
<div class="card-row">
  <div class="feature-card purple">
    <h3>Eierskap</h3>
    <p>Ingen eier agenter som tjenester i dag.</p>
  </div>
  <div class="feature-card green">
    <h3>Drift</h3>
    <p>Ingen prober for studio-ki. GitHubs grenser er ukjente.</p>
  </div>
  <div class="feature-card">
    <h3>Leverandørbinding</h3>
    <p>Copilot CLI og SDK binder oss til GitHub. MCP holder byttet billig.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Så hva ber vi om?»

- Lisens: lisens per bruker gir enkel kostnadsfordeling, men brukere uten Copilot mister funksjonen (011). Om vilkårene tillater at en tjeneste bruker brukerens token, er åpent (vår vurdering). Copilot CLI har egen lisens, ikke MIT. Den tillater å kjøre uendret programvare som del av en tjeneste, og jus og sikkerhet skal bekrefte (011, «Oppfølging»)
- Personvern: Copilot kan brukes i alle repoer uten personopplysninger eller skjermingsverdig informasjon (navikt/copilot-intern/retningslinjer.md § 1). Bilder i chat øker risikoen (019, «Bilder»)
- KI-loven: vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Eksemplet med saksbehandleren er det som ligger nærmest (vedlegg III nr. 5 bokstav a). Må sjekkes av jurist
- Eierskap: styringsmodellen dekker utviklerflater og har ingen rolle for agenter som tjenester (navikt/copilot-intern/styringsmodell.md, «Roller og ansvar»). Målbildet sier at KI i produktutvikling kan eie deler av grunnmuren midlertidig, og at tjenesten ikke kan bli eierløs
- Drift: ingen prober for TCP-serveren (aksel-studio docs/oppsett/studio-ki.md). GitHubs grenser per bruker er ikke oppgitt med tall (011, «Uavklart»)
- Leverandørbinding: bindingen ligger i runtimen, ikke i domenet (vår vurdering)
- Fritt modellvalg er en bærebjelke i visjonen, ikke noe vi har i dag
- Navnet nav-fleet er valgt. Modulnavnene og fleet.nav.no er forslag
- «Ingen av dem stopper en ADR» er vår vurdering
-->

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold text-center">Vi ber om tre ting</h1>
<p class="subtitle text-center">En plan og en visjon til diskusjon. Ingenting er vedtatt</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3><span class="section-number">1</span> En eier</h3>
    <p>Hvem eier agenter som tjenester i Nav? I dag er svaret ingen.</p>
  </div>
  <div class="feature-card green">
    <h3><span class="section-number">2</span> Et ja til ADR-en</h3>
    <p>«Agenter som tjenester på Nais», skrevet sammen med KI-grunnmuren og med aksel-studio som første bruker.</p>
  </div>
  <div class="feature-card purple">
    <h3><span class="section-number">3</span> Folk</h3>
    <p>Én fra hver: KI i produktutvikling, Nais, Nada, sikkerhet og identitet. Og en jurist.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">nav-fleet · utkast til diskusjon · ikke vedtatt</span>

<!--
Avslutning: «Hva mener dere? Hva mangler, og hvem bør være med?»

- Eier: styringsmodellen har ingen rolle for agenter som tjenester (navikt/copilot-intern/styringsmodell.md). Hvem som skal eie, er et åpent spørsmål. Vi foreslår ingen
- ADR: vår anbefaling. Den dekker eier, isolasjonskrav, token per økt og loggfelt. Den bør skrives sammen med forfatterne av målbildet, slik at vi ikke får to planer
- Folk: KI i produktutvikling fordi målbildet peker på dem som mulig midlertidig eier av deler av grunnmuren, Nais fordi plattformen kjører der, Nada fordi agentene trenger dataproduktene, sikkerhet og identitet for Texas og Entra, og jurist for bruk av ghu_ på server, brukere uten lisens og KI-loven (vår vurdering)
- Vi ber ikke om budsjett eller om et team nå. Vi ber om en beslutning om å utrede, og om navn
- Vi ber heller ikke om et ja til hele visjonen. Den er der for å vise hvorfor første versjon bør bygges som en plattform og ikke som én app til
-->
