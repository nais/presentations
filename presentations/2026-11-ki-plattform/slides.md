---
theme: default
title: Én KI-plattform for agenter i Nav
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

::default::
<p class="text-sm font-mono" style="color: var(--nais-accent)">UTKAST TIL DISKUSJON</p>
<h1 class="text-5xl font-black mt-4">Én KI-plattform for agenter i Nav</h1>
<p class="text-xl mt-4" style="color: var(--nais-text-secondary)">En egen plattform som kjører på Nais.<br/>Nais, NADA, produktteam og utviklerverktøy er konsumenter.</p>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Først: hvordan ser det ut i dag?»

- Dette er et utkast til diskusjon. Ingenting er vedtatt
- Plattformen er ikke en del av Nais. Den kjører på Nais, og Nais er én av konsumentene
- Buen: problemet, hva det koster å vente, hva vi har, plattformen, hvem som vinner, aksel-studio som bevis, første versjon, og hva vi ber om
- Der notatene sier «vår vurdering», er det forfatterens egen analyse, ikke en kilde
-->

---
layout: stats-grid
---

::header::
<h1 class="text-3xl font-bold">Hver agent bygger tokener, verktøy og revisjon på nytt</h1>
<p class="subtitle">Talt i kode og dokumenter, november 2026</p>

::default::
<StatHighlight number="6" label="apper med egen kode for brukertokener" />
<StatHighlight number="4" label="måter å handle for en bruker" />
<StatHighlight number="0" label="normative dokumenter om agenter som tjenester" />

::tagline::
my-copilot, copilot-api, copilot-cli, copilot-survey, mcp-onboarding og aksel-studio

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvorfor ta dette nå, og ikke om et år?»

- 6 apper med egen kode for brukertokener. Talt i filer på main 16. november 2026:
  - my-copilot: navikt/copilot/apps/my-copilot/src/lib/auth.ts og introspect.ts (Texas)
  - copilot-api: navikt/copilot/apps/copilot-api/auth.go og identity_onbehalfof.go (validerer tokenet på nytt)
  - copilot-cli: navikt/copilot/apps/copilot-cli/texas.go
  - copilot-survey: navikt/copilot/apps/copilot-survey/texas.go og auth.go
  - mcp-onboarding: navikt/copilot/apps/mcp-onboarding/oauth.go (egen OAuth-server foran GitHub)
  - aksel-studio: backend/internal/api/github.go og backend/internal/chat/chat.go (TokenProvider)
  - Ikke talt med: copilot-metrics og copilot-adoption, som bare bruker installasjonstokener for en GitHub App, og kommandolinjeverktøyet nav-pilot, som lagrer brukerens token i nøkkelringen
- 4 måter å handle for en bruker:
  - Entra OBO gjennom Texas, my-copilot til copilot-api (navikt/copilot/ARCHITECTURE.md, «Request path»)
  - M2M-token pluss hodet X-On-Behalf-Of, copilot-cli til copilot-api, bare GET fra forhåndsgodkjent azp (samme fil)
  - brukerens ghu_-token kryptert i Postgres, aksel-studio (aksel-studio docs/beslutninger/011-ki-kjoretid.md)
  - brukerens GitHub-token i minnet bak et eget token, mcp-onboarding (navikt/copilot/apps/mcp-onboarding/README.md, «Flow»)
- 0 normative dokumenter: styringsmodell.md, risikovurdering.md, retningslinjer.md, godkjente-agenter.md, overvaaking.md og modellstyring.md i navikt/copilot-intern handler om kodeagenter på utviklermaskiner og i sky. Ingen beskriver agenter som kjører som tjenester på Nais. Dette er vår lesing og et søk i filene, ikke en juridisk gjennomgang
- Ett dokument som ikke er normativt, tar opp temaet: diskusjonsutkastet «Digital KI-grunnmur for produktteam i Nav» fra 6. november 2026 (navikt/copilot-intern/underlag/agentisk-ki-produktutvikling-maalbilde.md). Det foreslår agentkjøretid, modellgateway, MCP-gateway og identitet, og er ikke vedtatt. Dette utkastet må sees sammen med det
- Modellpolicy finnes ett sted: NAV_DISABLED_MODELS i navikt/copilot/apps/my-copilot/src/lib/model-policy.ts (navikt/copilot-intern/modellstyring.md). aksel-studio leser den ikke. Søk i main ga ingen treff
- Tallene gjelder repoene vi har lest. Andre team i Nav kan ha egne agenter vi ikke kjenner til
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Tre ting har endret seg i 2026</h1>
<p class="subtitle">Derfor nå</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3>Første agent som tjeneste</h3>
    <p>aksel-studio setter opp <code>studio-ki</code> i dev denne måneden. Neste team kopierer trolig det som finnes.</p>
  </div>
  <div class="feature-card blue">
    <h3>Standardene tar form</h3>
    <p>MCP forbyr å sende tokener videre. Entra har agentidentitet. Kubernetes har fått Agent Sandbox.</p>
  </div>
  <div class="feature-card amber">
    <h3>Tilsynet følger med</h3>
    <p>Datatilsynet får flere avviksmeldinger om ukontrollerte KI-agenter i kommunene. Statsråden vil legge fram KI-loven våren 2027.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva skjer hvis vi lar være?»

- studio-ki: egen Nais-app med Copilot CLI som hodeløs server. Hemmeligheten ble laget 16. november 2026 (aksel-studio docs/oppsett/studio-ki.md og .nais/ki.yaml). Tilkoblingen mellom pods er ikke testet ennå (aksel-studio #132)
- «Neste team kopierer trolig» er en hypotese. Vi kjenner ikke til et konkret neste team
- MCP, spesifikasjon 2025-11-25: «The MCP server MUST NOT pass through the token it received from the MCP client», og serveren skal avvise tokener som ikke er utstedt til den. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- Entra Agent ID, On-Behalf-Of-flyt for agenter. Siden er datert 4. november 2025 og oppdatert 10. august 2026. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow
- Kubernetes Agent Sandbox under SIG Apps, med gVisor og Kata Containers. Blogg 20. mars 2026. https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
- Agentidentitet er ikke ferdig standardisert. En oversikt for OAuth-gruppa i IETF, datert 31. mai 2026, teller 32 individuelle utkast i 5 grupper. https://datatracker.ietf.org/meeting/interim-2026-oauth-03/materials/slides-interim-2026-oauth-03-sessa-ietf-individual-draft-analysis-00
- OpenID Foundation, «Identity Management for Agentic AI», 7. oktober 2025: dagens standarder holder for agenter i én organisasjon, og virksomheter bør behandle agenter som fullverdige identiteter i tilgangsstyringen sin. https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/
- Datatilsynet, 20. august 2026: «en økende mengde avviksmeldinger» om «tilfeldig, uønsket og ukontrollert bruk av KI-agenter i norske kommuner». https://www.datatilsynet.no/aktuelt/aktuelle-nyheter-2026/datatilsynet-pa-sikkerhetsfestivalen/
- KI-loven: ny høring høsten 2026. Statsrådens ambisjon er å fremme loven for Stortinget våren 2027. Det er ikke en frist. Reglene for høyrisiko-KI er utsatt til 2. desember 2027 og 2. august 2028. Pressemelding 4. august 2026. https://www.regjeringen.no/no/aktuelt/id3169693/
- EU: Rådet ga endelig godkjenning til endringene 29. juni 2026, og rettsakten ble signert 8. juli. Rådets egen side svarer 403 for oss. Datoene er bekreftet i andrehåndskilder, blant annet https://lewissilkin.com/insights/2026/07/09/council-of-the-eu-gives-ai-omnibus-final-green-light-102nbb1. Rådets pressemelding: https://www.consilium.europa.eu/en/press/press-releases/2026/06/29/artificial-intelligence-council-gives-final-green-light-to-simplify-and-streamline-rules/
- Vi har ikke vurdert om noen Nav-agent blir høyrisiko etter KI-forordningen. Det er et spørsmål til jurist
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Venter vi, kopierer neste team risikoen</h1>
<p class="subtitle">Hva koster det å la være?</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3>Risikoen sprer seg</h3>
    <p>Én pod har skallverktøy og tokenet til alle aktive brukere. Det er mønsteret som ligger klart til å kopieres.</p>
  </div>
  <div class="feature-card amber">
    <h3>Skriveverktøy har ingen vei inn</h3>
    <p>MCP-servere som skriver, avslås i dag. aksel-studio har ni verktøy utenfor registeret.</p>
  </div>
  <div class="feature-card purple">
    <h3>Snarveiene tar slutt</h3>
    <p><code>navikt</code> har nådd grensen for GitHub Apps. Studio låner appen til nav-pilot.</p>
  </div>
</div>
<p class="footnote">Hypotese: flere team vil bygge agenter som tjenester. Vi har ikke talt hvor mange.</p>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Det gode er at vi ikke starter fra null.»

- Delt pod: «Appen har skallverktøy og tokenet til alle aktive brukere» (aksel-studio docs/oppsett/studio-ki.md). Det er klienten som velger tom modus per økt (aksel-studio docs/beslutninger/019-ki-chat-per-konsept.md, status «Foreslått»)
- Tom modus virker: i den lokale testen kunne modellen ikke lese filer eller kjøre kommandoer (aksel-studio docs/ki-spike-lokal.md, 15. november 2026). Risikoen ligger i poden, ikke i modellen
- Ingen prober, og trafikken til studio-ki er ukryptert til kravet før prod er løst (studio-ki.md, 019, aksel-studio #141)
- MCP-kategori 3, «begrenset tilgang til sensitive data eller skriving»: «Ikke besluttet, avslås inntil ny risikovurdering». Kategori 4 er ikke tillatt (navikt/copilot-intern/retningslinjer.md § 3)
- Ni verktøy: tabellen i 019. De kjører i studio-api over SDK-ens JSON-RPC. Ingen av de 12 serverne i navikt/copilot/apps/mcp-registry/allowlist.json er aksel-studio
- Presisering: 019 velger egne verktøy i tom modus av sikkerhetsgrunner. Kategori 3 er ikke oppgitt som grunn. Poenget er at det ikke finnes en godkjent vei for skriveverktøy
- GitHub Apps: «navikt har nådd grensen for antall GitHub Apps. Studio gjenbruker derfor den eksisterende appen Nav Copilot (nav-pilot)» (aksel-studio docs/beslutninger/011-ki-kjoretid.md, merknad november 2026)
- Brukere uten Copilot-lisens får ikke KI-funksjonene (011, «Konsekvenser»). Retningslinjene gjelder ansatte i Utvikling og Data (navikt/copilot-intern/retningslinjer.md § 1)
- Vi har ingen tall for kostnad i kroner eller timer. Ikke oppgi noen
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Vi starter ikke fra null: fire byggeklosser er i drift</h1>
<p class="subtitle">Men ingen av dem kontrollerer eller logger et verktøykall mens agenten kjører</p>

::default::
<div class="grid grid-cols-4 gap-4">
  <IconCard icon="i-carbon-catalog" title="MCP Registry" description="12 godkjente servere. Ukjente blokkeres." />
  <IconCard icon="i-carbon-rule" title="Modellpolicy" description="Krav om ZDR og ingen trening. Én sannhetskilde." />
  <IconCard icon="i-carbon-two-person-lift" title="Texas og OBO" description="Brukerdelegert identitet, i drift i copilot-api." />
  <IconCard icon="i-carbon-cloud-services" title="Nais" description="Hosting, OTel og accessPolicy." />
</div>
<p class="footnote">Målbildet «Digital KI-grunnmur» fra 6. november 2026 foreslår mange av de samme delene. Det er også et utkast.</p>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Så hva er det plattformen samler?»

- MCP Registry: 12 servere i navikt/copilot/apps/mcp-registry/allowlist.json. Hard kontroll som blokkerer ukjente servere (navikt/copilot-intern/styringsmodell.md, «Kontroller»)
- Registeret er en liste, ikke en proxy. Det gir ikke kontroll eller revisjon per kall (vår vurdering)
- Modellpolicy: ZDR, ingen trening, innholdsfiltre, ingen safety-logging som overstyrer ZDR. Sannhetskilden er NAV_DISABLED_MODELS (navikt/copilot-intern/modellstyring.md, versjon 1.1, 11. oktober 2026)
- Texas og OBO: my-copilot ber Texas om et OBO-token for copilot-api, og copilot-api validerer det på nytt (navikt/copilot/ARCHITECTURE.md)
- Revisjon finnes for endringer i copilot-api, med aktør og NAVident (navikt/copilot/SECURITY.md, «Audit logging»)
- Nais: plattformen kjører på Nais og bruker det som finnes der
- Målbildet: navikt/copilot-intern/underlag/agentisk-ki-produktutvikling-maalbilde.md, status «Diskusjonsutkast, 6. november 2026». Det foreslår agentkjøretid, modellgateway, MCP-gateway(er) og identitet, og sier at registeret fortsatt er en katalog. Det peker ikke ut Nais som eier
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fra én stabel per team til ett felles lag</h1>
<p class="subtitle">Teamene beholder domenet. Plattformen tar det alle trenger</p>

::default::
<svg class="dg" viewBox="0 0 880 370" role="img" aria-label="I dag har hvert team egen kjøretid, tokenhåndtering, verktøy og revisjon. Med plattformen deler teamene ett felles lag som kjører på Nais.">
  <defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <text x="267" y="16" class="h" text-anchor="middle">I dag: én stabel per team</text>
  <text x="137" y="46" class="t" text-anchor="middle">utviklerverktøy</text>
  <text x="267" y="46" class="t" text-anchor="middle">aksel-studio</text>
  <text x="397" y="46" class="t" text-anchor="middle">neste team?</text>
  <text x="0" y="96" class="t">Kjøretid</text>
  <text x="0" y="172" class="t">Tokener</text>
  <text x="0" y="248" class="t">Verktøy</text>
  <text x="0" y="324" class="t">Revisjon</text>
  <rect x="75" y="58" width="125" height="68" rx="8" class="b"/>
  <text x="137" y="88" text-anchor="middle">utviklermaskin</text>
  <text x="137" y="106" text-anchor="middle">med cplt</text>
  <rect x="205" y="58" width="125" height="68" rx="8" class="w"/>
  <text x="267" y="88" text-anchor="middle">studio-ki,</text>
  <text x="267" y="106" text-anchor="middle">egen Nais-app</text>
  <rect x="335" y="58" width="125" height="68" rx="8" class="q"/>
  <text x="397" y="98" class="h" text-anchor="middle">?</text>
  <rect x="75" y="134" width="125" height="68" rx="8" class="b"/>
  <text x="137" y="164" text-anchor="middle">Texas OBO og</text>
  <text x="137" y="182" text-anchor="middle">M2M med hode</text>
  <rect x="205" y="134" width="125" height="68" rx="8" class="w"/>
  <text x="267" y="164" text-anchor="middle">ghu_ kryptert</text>
  <text x="267" y="182" text-anchor="middle">i Postgres</text>
  <rect x="335" y="134" width="125" height="68" rx="8" class="q"/>
  <text x="397" y="174" class="h" text-anchor="middle">?</text>
  <rect x="75" y="210" width="125" height="68" rx="8" class="b"/>
  <text x="137" y="240" text-anchor="middle">MCP Registry,</text>
  <text x="137" y="258" text-anchor="middle">12 servere</text>
  <rect x="205" y="210" width="125" height="68" rx="8" class="w"/>
  <text x="267" y="240" text-anchor="middle">9 egne</text>
  <text x="267" y="258" text-anchor="middle">i studio-api</text>
  <rect x="335" y="210" width="125" height="68" rx="8" class="q"/>
  <text x="397" y="250" class="h" text-anchor="middle">?</text>
  <rect x="75" y="286" width="125" height="68" rx="8" class="b"/>
  <text x="137" y="316" text-anchor="middle">aktørlogg i</text>
  <text x="137" y="334" text-anchor="middle">copilot-api</text>
  <rect x="205" y="286" width="125" height="68" rx="8" class="w"/>
  <text x="267" y="316" text-anchor="middle">egen logg</text>
  <text x="267" y="334" text-anchor="middle">og egen kvote</text>
  <rect x="335" y="286" width="125" height="68" rx="8" class="q"/>
  <text x="397" y="326" class="h" text-anchor="middle">?</text>
  <line x1="474" y1="206" x2="500" y2="206" class="a" marker-end="url(#ar1)"/>
  <text x="695" y="16" class="h" text-anchor="middle">Med plattform: ett felles lag</text>
  <rect x="514" y="34" width="116" height="46" rx="8" class="b"/>
  <text x="572" y="62" text-anchor="middle">utviklerverktøy</text>
  <rect x="637" y="34" width="116" height="46" rx="8" class="b"/>
  <text x="695" y="62" text-anchor="middle">aksel-studio</text>
  <rect x="760" y="34" width="116" height="46" rx="8" class="b"/>
  <text x="818" y="62" text-anchor="middle">neste team</text>
  <line x1="572" y1="80" x2="572" y2="110" class="a" marker-end="url(#ar1)"/>
  <line x1="695" y1="80" x2="695" y2="110" class="a" marker-end="url(#ar1)"/>
  <line x1="818" y1="80" x2="818" y2="110" class="a" marker-end="url(#ar1)"/>
  <rect x="514" y="112" width="362" height="186" rx="10" class="p"/>
  <text x="695" y="138" class="t" text-anchor="middle">KI-plattformen</text>
  <rect x="528" y="150" width="162" height="60" rx="8" class="b"/>
  <text x="609" y="185" text-anchor="middle">Kjøretidsmal</text>
  <rect x="700" y="150" width="162" height="60" rx="8" class="b"/>
  <text x="781" y="185" text-anchor="middle">Tokenmegler</text>
  <rect x="528" y="222" width="162" height="60" rx="8" class="b"/>
  <text x="609" y="257" text-anchor="middle">MCP-gateway</text>
  <rect x="700" y="222" width="162" height="60" rx="8" class="b"/>
  <text x="781" y="257" text-anchor="middle">Revisjon og kostnad</text>
  <rect x="514" y="310" width="362" height="44" rx="10" class="n"/>
  <text x="695" y="337" class="t" text-anchor="middle">kjører på Nais</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Slik ser lagene ut.»

- Venstre side er det som finnes i dag. Høyre side er forslaget
- Utviklerverktøy er my-copilot og nav-pilot. Kjøretiden er utviklerens maskin med cplt (navikt/copilot-intern/retningslinjer.md § 2). Tokener: Texas OBO og M2M med X-On-Behalf-Of (navikt/copilot/ARCHITECTURE.md). Verktøy: 12 servere (navikt/copilot/apps/mcp-registry/allowlist.json). Revisjon: aktørlogg for endringer (navikt/copilot/SECURITY.md)
- aksel-studio: studio-ki (aksel-studio docs/oppsett/studio-ki.md), ghu_ kryptert i Postgres (011), ni verktøy i studio-api (019), egen logging og egen kredittgrense (011, 019)
- «Neste team» er en hypotese. Spørsmålstegnene betyr at de må velge alt selv
- Høyre side: teamene beholder verktøyene og domenet sitt. Plattformen eier det som er likt for alle
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">En egen plattform med fire konsumenter</h1>
<p class="subtitle">Nais er både konsument og underlag. Inferens-gatewayen venter</p>

::default::
<svg class="dg" viewBox="0 0 880 366" role="img" aria-label="Fire konsumenter øverst: Nais, NADA, produktteam og utviklerverktøy. Under ligger KI-plattformen med seks deler. Nederst ligger Nais som plattformen kjører på.">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="2" width="205" height="62" rx="8" class="b"/>
  <text x="102" y="28" class="t" text-anchor="middle">Nais</text>
  <text x="102" y="48" class="s" text-anchor="middle">driftsagenter (hypotese)</text>
  <rect x="225" y="2" width="205" height="62" rx="8" class="b"/>
  <text x="327" y="28" class="t" text-anchor="middle">NADA</text>
  <text x="327" y="48" class="s" text-anchor="middle">dataprodukter (hypotese)</text>
  <rect x="450" y="2" width="205" height="62" rx="8" class="b"/>
  <text x="552" y="28" class="t" text-anchor="middle">Produktteam</text>
  <text x="552" y="48" class="s" text-anchor="middle">aksel-studio er først</text>
  <rect x="675" y="2" width="205" height="62" rx="8" class="b"/>
  <text x="777" y="28" class="t" text-anchor="middle">Utviklerverktøy</text>
  <text x="777" y="48" class="s" text-anchor="middle">my-copilot, nav-pilot</text>
  <line x1="102" y1="64" x2="102" y2="86" class="a" marker-end="url(#ar2)"/>
  <line x1="327" y1="64" x2="327" y2="86" class="a" marker-end="url(#ar2)"/>
  <line x1="552" y1="64" x2="552" y2="86" class="a" marker-end="url(#ar2)"/>
  <line x1="777" y1="64" x2="777" y2="86" class="a" marker-end="url(#ar2)"/>
  <rect x="0" y="88" width="880" height="204" rx="10" class="p"/>
  <text x="20" y="114" class="h">KI-plattformen</text>
  <rect x="20" y="126" width="268" height="68" rx="8" class="b"/>
  <text x="154" y="154" class="t" text-anchor="middle">Agentkjøretid</text>
  <text x="154" y="176" class="s" text-anchor="middle">v1, som mal</text>
  <rect x="306" y="126" width="268" height="68" rx="8" class="b"/>
  <text x="440" y="154" class="t" text-anchor="middle">MCP-gateway</text>
  <text x="440" y="176" class="s" text-anchor="middle">v1</text>
  <rect x="592" y="126" width="268" height="68" rx="8" class="b"/>
  <text x="726" y="154" class="t" text-anchor="middle">Identitet og tokenmegler</text>
  <text x="726" y="176" class="s" text-anchor="middle">v1, brukerdelegert</text>
  <rect x="20" y="206" width="268" height="68" rx="8" class="b"/>
  <text x="154" y="234" class="t" text-anchor="middle">Policy og vern</text>
  <text x="154" y="256" class="s" text-anchor="middle">gjenbruker register og modellpolicy</text>
  <rect x="306" y="206" width="268" height="68" rx="8" class="b"/>
  <text x="440" y="234" class="t" text-anchor="middle">Observerbarhet og kostnad</text>
  <text x="440" y="256" class="s" text-anchor="middle">v1, felles konvensjon</text>
  <rect x="592" y="206" width="268" height="68" rx="8" class="q"/>
  <text x="726" y="234" class="t" text-anchor="middle">Inferens-gateway</text>
  <text x="726" y="256" class="s" text-anchor="middle">senere</text>
  <line x1="440" y1="292" x2="440" y2="312" class="a" marker-end="url(#ar2)"/>
  <rect x="0" y="314" width="880" height="50" rx="10" class="n"/>
  <text x="440" y="345" class="t" text-anchor="middle">Kjører på Nais: hosting, OTel, accessPolicy og Texas</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Den vanskeligste delen er identitet.»

- Posisjonering: plattformen er ikke Nais. Den kjører på Nais. Nais står to steder i figuren: som konsument øverst og som underlag nederst
- Delene og hva som er v1: vår vurdering
- Ta i bruk, ikke bygg: MCP-gatewayen kan være en utvidelse av mcp-registry eller en åpen gateway. Kjøretiden er en mal (image, accessPolicy, helsesjekk), ikke en ny tjeneste
- Menneske i løkka, evalueringer og minne eies av appene i v1 (samme tabell)
- Inferens-gateway venter så lenge Copilot-lisensen bærer kostnaden. Kubernetes-prosjektet Gateway API Inference Extension har en egen ressurs for dette, InferencePool, med en v1-referanse. Prosjektet drives av WG Serving og SIG Network. https://gateway-api-inference-extension.sigs.k8s.io/
- Andre gjør det samme: Canada har GC AI Platform som fellestjeneste fra Shared Services Canada, med forhåndsgodkjente modeller og verktøy, blant annet for agentflyter. De vil utvide brukergruppen gjennom 2026 og 2027. Siden er oppdatert 25. august 2026. https://www.canada.ca/en/shared-services/services/gc-ai/gc-ai-platform.html
- Nais og NADA som konsumenter er hypoteser. Vi har ikke snakket med NADA
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Agenten låner brukerens rettigheter, og ser aldri tokenet</h1>
<p class="subtitle">Brukerdelegert først. Agentens egen identitet venter til noen trenger bakgrunnsjobber</p>

::default::
<svg class="dg" viewBox="0 0 880 340" role="img" aria-label="Identitetsflyt i fire steg: brukeren logger inn i appen, appen veksler til et OBO-token, agenten kaller verktøy gjennom MCP-gatewayen, og gatewayen sjekker og logger før verktøyet kjører.">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ah"/></marker></defs>
  <rect x="0" y="20" width="128" height="72" rx="8" class="b"/>
  <text x="64" y="61" class="t" text-anchor="middle">Bruker</text>
  <rect x="188" y="20" width="128" height="72" rx="8" class="b"/>
  <text x="252" y="52" class="t" text-anchor="middle">App</text>
  <text x="252" y="72" class="s" text-anchor="middle">studio-api</text>
  <rect x="376" y="20" width="128" height="72" rx="8" class="p"/>
  <text x="440" y="61" class="t" text-anchor="middle">Agent</text>
  <rect x="564" y="20" width="128" height="72" rx="8" class="p"/>
  <text x="628" y="61" class="t" text-anchor="middle">MCP-gateway</text>
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
  <text x="254" y="140" class="t">Veksler token</text>
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
  <text x="160" y="276">Gatewayen veksler til GitHub- og Copilot-tokener. Agenten får dem aldri.</text>
  <text x="24" y="306" class="t">Revisjon</text>
  <text x="160" y="306">Hvem, hvilket verktøy, hvilken ressurs og utfallet. Aldri innholdet i prompten.</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hvem får hva ut av dette?»

- Flyten er vårt forslag. Den er ikke bygget
- Steg 1 og 2 finnes i dag for my-copilot: Wonderwall, så Texas med OBO til copilot-api (navikt/copilot/ARCHITECTURE.md)
- Entra beskriver samme mønster for agenter: brukeren står i oid, og brukertokenet må være utstedt til agentens blueprint (aud). Kravene sub og azp i figuren er vårt forslag, ikke hentet fra Entra. https://learn.microsoft.com/en-us/entra/agent-id/agent-on-behalf-of-oauth-flow (oppdatert 10. august 2026)
- MCP krever at tokenet er utstedt til serveren som mottar det, og forbyr å sende det videre. Derfor trengs en megler som veksler. https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization
- I dag går brukerens ghu_-token helt inn i kjøretiden hos aksel-studio (011, 019)
- Revisjon uten promptinnhold er allerede praksis: 011 logger forbruk uten innholdet i promptene, og copilot-api logger aktør ved endringer (navikt/copilot/SECURITY.md)
- Agentens egen identitet trengs først ved bakgrunnsjobber. aksel-studio trenger det ikke nå (011, «Konsekvenser»)
- SPIFFE og WIMSE er underlaget IETF bygger agentidentitet på, men arbeidet er utkast (IETF-oversikten 31. mai 2026, lenke på «Derfor nå»-sliden). Vi foreslår ikke å vente på dem
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Fire konsumenter får hver sin gevinst</h1>
<p class="subtitle">Nais og NADA er hypoteser. Ingenting er avtalt</p>

::default::
<div class="grid grid-cols-4 gap-4">
  <IconCard icon="i-carbon-cloud-services" title="Nais (hypotese)" description="Trygg kjøretid og identitet for drifts- og støtteagenter." />
  <IconCard icon="i-carbon-data-base" title="NADA (hypotese)" description="Dataprodukter som verktøy, med policy og revisjon." />
  <IconCard icon="i-carbon-pen" title="Produktteam" description="Mal og gateway i stedet for egen stabel. aksel-studio er først." />
  <IconCard icon="i-carbon-terminal" title="Utviklerverktøy" description="Samme identitet, modellpolicy og revisjon som alle andre." />
</div>
<p class="footnote">Sikkerhet og etterlevelse: policy håndheves ett sted, og hvert verktøykall kan spores.</p>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «La oss se på den ene konsumenten vi faktisk kjenner.»

- Nais og NADA: hypoteser fra oss. Ingen av dem har bedt om dette, og vi har ikke avtalt noe
- Produktteam: aksel-studio er det eneste konkrete tilfellet vi har (aksel-studio docs/beslutninger/011 og 019)
- Utviklerverktøy: my-copilot og nav-pilot har allerede identitet og modellpolicy, men hver sin løsning (navikt/copilot/ARCHITECTURE.md, navikt/copilot/apps/my-copilot/src/lib/model-policy.ts)
- Sikkerhet: prompt injection (MCP-R02) og uautorisert kodekjøring (MCP-R03) er vurdert som kritiske (navikt/copilot-intern/risikovurdering.md). Én gateway gir ett sted å sette tiltak
- Forbruk per team blir synlig når kallene går samme vei. Kostnadsinnsikt finnes for Copilot i copilot-api (navikt/copilot/apps/copilot-api)
-->

---
layout: default
---

::header::
<h1 class="text-3xl font-bold">Studio beholder bare domenet</h1>
<p class="subtitle">Studio sender bare et OBO-token. Forslagsflyten blir i Studio</p>

::default::
<svg class="dg" viewBox="0 0 880 350" role="img" aria-label="I dag henter studio-api brukerens token fra Postgres og sender det til studio-ki, som har skallverktøy og alle aktive tokener. På plattformen sender studio-api et OBO-token til agentkjøretiden, og MCP-gatewayen kaller verktøyene i studio-api og veksler tokener.">
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
  <text x="90" y="272" class="s" text-anchor="middle">skall og aktive tokener</text>
  <text x="196" y="252" class="x">Største lokale risiko</text>
  <text x="196" y="272" class="s">én delt pod, ingen prober</text>
  <line x1="90" y1="288" x2="90" y2="306" class="a" marker-end="url(#ar4)"/>
  <rect x="0" y="308" width="180" height="38" rx="8" class="n"/>
  <text x="90" y="332" text-anchor="middle">Copilot API</text>
  <line x1="416" y1="176" x2="444" y2="176" class="a" marker-end="url(#ar4)"/>
  <text x="460" y="16" class="h">På plattformen</text>
  <rect x="460" y="30" width="120" height="40" rx="8" class="b"/>
  <text x="520" y="55" text-anchor="middle">nettleser</text>
  <line x1="520" y1="70" x2="520" y2="94" class="a" marker-end="url(#ar4)"/>
  <rect x="460" y="96" width="160" height="96" rx="8" class="b"/>
  <text x="540" y="122" class="t" text-anchor="middle">studio-api</text>
  <text x="540" y="146" class="s" text-anchor="middle">forslagsflyten,</text>
  <text x="540" y="164" class="s" text-anchor="middle">verktøy som MCP-server</text>
  <rect x="692" y="30" width="188" height="258" rx="10" class="p"/>
  <text x="786" y="54" class="t" text-anchor="middle">KI-plattformen</text>
  <rect x="706" y="68" width="160" height="50" rx="8" class="b"/>
  <text x="786" y="98" text-anchor="middle">agentkjøretid</text>
  <rect x="706" y="140" width="160" height="56" rx="8" class="b"/>
  <text x="786" y="163" text-anchor="middle">MCP-gateway</text>
  <text x="786" y="182" class="s" text-anchor="middle">tilgang, policy, revisjon</text>
  <rect x="706" y="218" width="160" height="50" rx="8" class="b"/>
  <text x="786" y="248" text-anchor="middle">tokenmegler</text>
  <line x1="620" y1="108" x2="704" y2="108" class="a" marker-end="url(#ar4)"/>
  <text x="656" y="100" class="s" text-anchor="middle">OBO</text>
  <line x1="706" y1="172" x2="622" y2="172" class="a" marker-end="url(#ar4)"/>
  <text x="656" y="164" class="s" text-anchor="middle">verktøy</text>
  <line x1="786" y1="118" x2="786" y2="138" class="a" marker-end="url(#ar4)"/>
  <line x1="786" y1="196" x2="786" y2="216" class="a" marker-end="url(#ar4)"/>
  <line x1="786" y1="268" x2="786" y2="306" class="a" marker-end="url(#ar4)"/>
  <rect x="706" y="308" width="160" height="38" rx="8" class="n"/>
  <text x="786" y="332" text-anchor="middle">Copilot API</text>
  <text x="460" y="252" class="t">Borte fra Studio:</text>
  <text x="460" y="274" class="s">egen kjøretid, tokenlagring</text>
  <text x="460" y="292" class="s">og egen kvote</text>
</svg>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Og Studio har allerede forberedt seg på byttet.»

- I dag: studio-api åpner en økt i studio-ki med brukerens ghu_-token og verktøyene. Verktøyene kjører i studio-api (019, «Slik går et verktøykall»)
- Tilkoblingen er JSON-RPC over ren TCP uten TLS. SDK-en avviser https (aksel-studio docs/oppsett/studio-ki.md, 019)
- studio-ki har skallverktøy og tokenet til alle aktive brukere, og ingen prober (studio-ki.md). «Største lokale risiko» er vår vurdering
- Studio gjør mye riktig: tom modus, tilgangssjekk i hvert verktøy, og bare forslag som brukeren må godta (011, 019)
- Etter: hvem som erstatter hva, er vår vurdering
- Forslagsflyten med godta, forkast og If-Match er domenelogikk og blir i Studio (019, «Godta og forkaste»)
- Domenegrensene blir også i Studio: 3 minutter, 20 forslag, 8000 tegn, 3 bilder (019, «Grenser per melding»)
- Høyre side er et forslag. Ingenting av plattformen finnes ennå
-->

---
layout: pillars
---

::header::
<h1 class="text-3xl font-bold">Sømmene finnes allerede i aksel-studio</h1>
<p class="subtitle">Tre grensesnitt gjør byttet til én ny implementasjon per del</p>

::default::
<ValuePillar icon="i-carbon-tool-kit" title="Tool" description="Verktøy med samme form som i MCP. Bruker og konsept kommer fra serveren, aldri fra modellen." />
<ValuePillar icon="i-carbon-flow" title="Runtime" description="Starter en kjøring og gir en strøm av hendelser. Kjøretiden kan byttes." />
<ValuePillar icon="i-carbon-password" title="TokenProvider" description="All tilgang til brukerens token går ett sted. Senere: tokenmegleren." />

::tagline::
Koden er på main. ADR 019 har fortsatt status «Foreslått».

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Hva er det minste vi kan starte med?»

- Dette er beviset på at overgangen er liten: «Tre små grensesnitt i backend/internal/chat gjør det mulig å bytte KI-plattform senere uten å skrive om resten» (019, «Første versjon i studio-api»)
- Koden ligger på main: backend/internal/chat/chat.go, med Tool (linje 35), TokenProvider (linje 49) og Runtime (linje 97). Copilot SDK mot studio-ki er én implementasjon, og testene bruker en falsk
- Forbehold: koden er merget (aksel-studio #143), men 019 har fortsatt status «Foreslått»
- Vi har ikke målt hvor mye arbeid byttet er. «Én implementasjon per del» er designmålet, ikke et målt tall
-->

---
layout: two-cols
---

::header::
<h1 class="text-3xl font-bold">Første versjon: gateway, identitet og mal</h1>
<p class="subtitle">Vi tar i bruk og utvider. Vi bygger ikke fra bunnen</p>

::left::
<h3 style="color: var(--nais-success)">Med</h3>

- MCP-gateway, bygget eller tatt i bruk
- Brukerdelegert identitet med revisjon
- Kjøretidsmal: image, accessPolicy, helsesjekk
- Felles navn i logger og spor

::right::
<h3 style="color: var(--nais-accent)">Venter</h3>

- Inferens-gateway
- Agentens egen identitet
- Menneske i løkka, evalueringer og minne

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «I hvilken rekkefølge?»

- Omfanget er vår anbefaling
- MCP-gateway: utvid navikt/copilot/apps/mcp-registry til en proxy, eller ta i bruk en åpen gateway. Valget er ikke tatt
- Identitet: Texas og OBO-mønsteret fra copilot-api (navikt/copilot/ARCHITECTURE.md), pluss en tynn megler for GitHub-tokener
- Kjøretidsmal: studio-ki er utgangspunktet, men én økt per bruker må skilles ut før flere kopierer den (vår vurdering). Kubernetes Agent Sandbox er et alternativ å vurdere. https://kubernetes.io/blog/2026/03/20/running-agents-on-kubernetes-with-agent-sandbox/
- Felles navn i logger: user, tool, outcome, credits og spor-ID, uten innhold (vår vurdering)
- Inferens-gateway venter så lenge Copilot-lisensen bærer kostnaden. Den trengs når noen bruker modeller utenfor Copilot, eller når brukere uten lisens skal med
- Menneske i løkka, evalueringer og minne er domenespesifikke og eies av appene
-->

---
layout: timeline
---

::header::
<h1 class="text-3xl font-bold">Styring først, så teknikk</h1>
<p class="subtitle">Rekkefølgen er et forslag. Ingen datoer er satt</p>

::default::
<TimelineNode version="1" year="nå" title="ADR" description="Eier, isolasjon, token per økt og revisjon." icon="i-carbon-document" />
<TimelineNode version="2" year="parallelt" title="Avklar" description="Jurist og GitHub: token på server og brukere uten lisens." icon="i-carbon-help" />
<TimelineNode version="3" year="v1" title="Gateway og OBO" description="Med aksel-studio som første konsument." icon="i-carbon-gateway" />
<TimelineNode version="4" year="senere" title="Mal og inferens" description="studio-ki blir mal. Inferens-gateway når noen trenger den." icon="i-carbon-template" />

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Det er ting vi ikke vet ennå.»

- Rekkefølgen følger vår anbefaling. Vi har ikke estimert noe, og det finnes ingen datoer
- ADR-en skrives i navikt/copilot-intern: «Agenter som tjenester på Nais». Stedet er vårt forslag
- Avklaringen avgjør når inferens-gatewayen trengs (vår vurdering)
- Ytre datoer vi kjenner: statsråden vil fremme KI-loven for Stortinget våren 2027, og de første høyrisiko-reglene i EU gjelder fra 2. desember 2027. https://www.regjeringen.no/no/aktuelt/id3169693/
- Sømmene i aksel-studio er allerede på main, så de står ikke som eget steg
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
  <div class="feature-card blue">
    <h3>Personvern</h3>
    <p>Copilot kan bare brukes i repoer uten personopplysninger.</p>
  </div>
  <div class="feature-card amber">
    <h3>Leverandørbinding</h3>
    <p>CLI og SDK binder oss til GitHub. MCP holder byttet billig.</p>
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
    <h3>CLI-lisens</h3>
    <p>Copilot CLI har egen lisens, ikke MIT.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Overgang: «Så hva ber vi om?»

- Lisens: per bruker-lisens gir enkel kostnadsfordeling, men brukere uten Copilot mister funksjonen (011). Om vilkårene tillater at en tjeneste bruker brukerens token, er åpent (vår vurdering)
- Personvern: Copilot kan brukes i alle repoer uten personopplysninger eller skjermingsverdig informasjon (navikt/copilot-intern/retningslinjer.md § 1). Bilder i chat øker risikoen (019, «Bilder»)
- Leverandørbinding: bindingen ligger i kjøretiden, ikke i domenet (vår vurdering)
- Eierskap: styringsmodellen dekker utviklerflater og har ingen rolle for agenter som tjenester (navikt/copilot-intern/styringsmodell.md, «Roller og ansvar»)
- Drift: ingen prober for TCP-serveren (aksel-studio docs/oppsett/studio-ki.md). GitHubs grenser per bruker er ikke oppgitt med tall (011, «Uavklart»)
- CLI-lisens: tillater å kjøre uendret programvare som del av en tjeneste. Jus og sikkerhet skal bekrefte (011, «Oppfølging»)
- «Ingen av dem stopper en ADR» er vår vurdering
-->

---
layout: cta
---

::header::
<h1 class="text-3xl font-bold text-center">Vi ber om tre ting</h1>
<p class="subtitle text-center">Et utkast til diskusjon. Ingenting er vedtatt</p>

::default::
<div class="card-row">
  <div class="feature-card">
    <h3><span class="section-number">1</span> En eier</h3>
    <p>Hvem eier agenter som tjenester i Nav? I dag er svaret ingen.</p>
  </div>
  <div class="feature-card blue">
    <h3><span class="section-number">2</span> Et ja til ADR-en</h3>
    <p>«Agenter som tjenester på Nais», med aksel-studio som første konsument.</p>
  </div>
  <div class="feature-card green">
    <h3><span class="section-number">3</span> Folk</h3>
    <p>Én fra hver: Nais, NADA, sikkerhet og identitet. Og en jurist til lisensspørsmålet.</p>
  </div>
</div>

::footer::
<span class="font-mono text-sm opacity-70">Utkast til diskusjon · ikke vedtatt</span>

<!--
Avslutning: «Hva mener dere? Hva mangler, og hvem bør være med?»

- Eier: styringsmodellen har ingen rolle for agenter som tjenester (navikt/copilot-intern/styringsmodell.md)
- ADR: vår anbefaling. Den dekker eier, isolasjonskrav, token per økt og revisjonsfelt
- Folk: Nais fordi plattformen kjører der, NADA som mulig konsument, sikkerhet og identitet for Texas og Entra, og jurist for server-side bruk av ghu_ og brukere uten lisens (vår vurdering)
- Vi ber ikke om budsjett eller om et team nå. Vi ber om en beslutning om å utrede, og om navn
- Hvem som skal eie, er et åpent spørsmål. Vi foreslår ingen
-->
