# Storyboard: Nais as a Service

Beskriver decket slik det er nå (`slides.md`, komponenter i `gsap/`).

- **Tese:** «Plattformen Nav bygde for seg selv er nå en tjeneste for det offentlige.»
- **Målgruppe:** teknologiledere (primær), beslutningstakere (sekundær)
- **Oppfordring:** book demo eller pilot (nais@nav.no, QR-kode på siste slide)
- **Pris:** egen infrastruktur og forbruk til selvkost, pluss et administrativt gebyr på 200 000 kr i året. ≈ 150 årsverk (anslag) vises én gang, på Problemet; senere står «det Nav allerede bærer»
- **Overganger:** `fade` som standard; `view-transition` der elementer flytter seg mellom slides. Slidev bruker overgangen til sliden man forlater, så den står på sliden før
- **Kilder:** URL-er står i talernotatene

## Akt 1: Det finnes allerede (slide 1–5)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 1 | Nais as a Service | 0 | fade | – | «Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav.» |
| 2 | Problemet | 1 | fade | – | «Og den felles plattformen er ikke en idé. Den har vokst siden 2016. Se.» |
| 3 | (klipp) | 0 | fade | – | «(Ingen overgang. La klippet gå, ikke snakk over det.)» |
| 4 | Hva er Nais | 0 | fade | – | «Seks ting Nais skal gi dere. Jeg kommer tilbake til dem underveis. Først: brukes dette faktisk?» |
| 5 | Tenants utenfor Nav kjører allerede 528 apper | 0 | fade | – | «Grunnen til at tallene er så store, kommer på de neste slidene.» |

## Akt 2: Åpne verktøykassa (slide 6–15)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 6 | Ett manifest, ferdig oppsett | 6 | view-transition | Utviklingsfart | «Så skal vi se hva som skjer når de trykker på knappen.» |
| 7 | Fra pull request til produksjon | 3 | view-transition | Utviklingsfart | «Men hva skjer egentlig på plattformsiden?» |
| 8 | Hva skjer på plattformsiden | 2 | fade | Automatisering | «Tusenvis av apper, og hver får den samme hylla. Her er den.» |
| 9 | Verktøykassa | 4 | fade | Automatisering | «Og hva har alt dette betydd for Nav?» |
| 10 | Hva Nais har betydd for Nav | 5 | fade | – | «Hva skjer når noe feiler?» |
| 11 | Fra feil til fiks | 5 | fade | Oversikt | «Og alt dette ser teamet også i Console.» |
| 12 | Console: fra team til app | 3 | view-transition | Oversikt | «Og fordi teamet ser kostnaden, gjør de noe med den.» |
| 13 | Teamet eier kostnaden | 3 | fade | Oversikt | «Og databasen er bare én post på regningen. Resten handler om at containere deler maskiner.» |
| 14 | Ressursutnyttelse | 0 | fade | – | «Og for de som liker terminalen:» |
| 15 | Og fra terminalen | 0 | fade | Oversikt | «Det var utviklerens side. Nå snur vi bildet: alt som må stå for at dagen blir kjedelig.» |

## Akt 3: Og alt det slipper dere å drifte (slide 16–18)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 16 | Hva dere slipper å drifte | 2 | fade | Automatisering | «Og når noe likevel skjer om natta?» |
| 17 | Kl. 03.00 | 3 | fade | – | «Hvem var våkne? Disse femten.» |
| 18 | Nais-teamet | 0 | fade | – | «Teamet bygger også sikkerheten inn i hver leveranse.» |

## Akt 4: Dere beholder kontrollen (slide 19–30)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 19 | Sikkerhet i forsyningskjeden | 9 | view-transition | Sikkerhet | «Og sikkerheten gjelder ikke bare koden. Hvem slipper inn? Innloggingen er bygd inn.» |
| 20 | Innlogging uten egen kode | 9 | fade | Sikkerhet | «Nå snakker jeg til dere som skal signere. Dere er ikke de første som spør om én felles plattform. Se på Europa.» |
| 21 | Hva Europa gjør | 6 | fade | Suveren og autonom | «Og hvor kjører det i dag?» |
| 22 | Hva kjører hvor | 2 | fade | Suveren og autonom | «Nais har flyttet før, fra eget datasenter til Google Cloud. Slik er lagene bygd.» |
| 23 | En plattform med flere lag | 4 | fade | Suveren og autonom | «Og slik henger nettverket sammen.» |
| 24 | Nettverket rundt min-app | 6 | fade | Suveren og autonom | «Og hvis dere vil flytte, er det deres valg.» |
| 25 | Deres data, deres exit | 3 | view-transition | Suveren og autonom | «Og dette tar dere med dere.» |
| 26 | Dette tar dere med dere | 1 | fade | Suveren og autonom | «Men dere lurer sikkert på noe.» |
| 27 | Det dere lurer på | 4 | fade | Suveren og autonom | «Hvem bestemmer så hva som skjer med plattformen?» |
| 28 | Hvem bestemmer | 1 | fade | Et Nais-fellesskap | «Og det vi bygger for én tenant, får alle.» |
| 29 | Bedre sammen | 3 | fade | Et Nais-fellesskap | «Og dere får ikke bare hjelp fra oss. Utviklerne kan det allerede.» |
| 30 | Utviklerne kan det allerede | 2 | fade | Et Nais-fellesskap | «Så hva koster det?» |

## Akt 5: Avtalen (slide 31–34)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 31 | Hva koster det | 0 | fade | – | «Hvem kan så bli med?» |
| 32 | Hvem kan bli med | 0 | fade | – | «Slik kommer dere i gang.» |
| 33 | Veien inn | 4 | view-transition | – | «Og hvis det ikke passer: dere kan gå når som helst, med alt.» |
| 34 | Book en demo eller pilot | 0 | fade | – | «Takk.» |

## Oppsummering

- 34 slides, 91 klikk

### Åpne plassholdere (0)

Ingen. Anslag er merket «anslag» på sliden eller i notatene.

### KI i utviklerhistorien

- Slide 6: utvikleren ber KI-agenten om appen, og agenten skriver manifestet (Nais MCP: get_nais_context, nais://schema)
- Slide 7: PR-en er åpnet av Copilot-agenten; Kari Nordmann reviewer og et menneske merger
- Slide 19: forsyningskjeden viser at agentens kode går gjennom samme løp
- Ikke tatt med: feilsøking med agent på «Fra feil til fiks». Nais MCP-serveren er read-only GraphQL mot Nais API og har ingen verktøy for traces eller logger

### Spørsmål til avklaring

- Avklart: eget datasenter kobles til med VPN eller Cloud Interconnect, per tenant
- Avklart: navnene er Nais Postgres (CloudNativePG) og Nais Buckets, begge «på vei»
- Avklart: «2–10x» beholdes som anslag

### Bevegelse (batch 8)

- En Nais-sekskant reiser mellom slidene (global-top.vue): manifestet (6), verktøykassa (9, 16), innloggingsstjerna (20), «Dette tar dere med dere» (26), «Bedre sammen» (29), «Veien inn» (33) og Norge-kartet på siste slide (34). Mellom ankrene parkerer den nede til venstre. Av i utskrift, hopper uten flyging ved redusert bevegelse
- View transitions (Chrome) fra 6, 7, 12, 19, 25 og 33 (står på sliden man forlater). Gammel slide toner ut før den nye toner inn, så titler ikke ligger oppå hverandre. Navnene settes bare under `:active-view-transition`, så andre nettlesere får vanlig fade
- Nettverksslide (23) er sjekket mot docs.nais.io. Aiven nås over privat lenke / VPC-peering (avklart). Ekstern ingress for innbyggere og intern ingress via naisdevice for ansatte er egne innganger
- Batch 9: forsiden setter sammen Nais-logoen av sekskanter, innvendingene snus som kort, prisen stables med teller, «Hvem kan bli med» sorteres i to baner, og siste slide har stort Norge-kart
- Batch 11: prisen er én slide («Hva koster det», tidligere «Hva selvkost betyr»; prisstabelen er fjernet). Hjerteslag på klippet og siste slide. Terminalen spiller av seg selv. Nettverk og innlogging har rettvinklede linjer. «Dette tar dere med dere» flytter tenanten og teknologien som én pakke. «Hvem kan bli med» åpner med hva Nais passer for

## Lesbarhet ved inngang

Regel: tittel og hovedtekst skal kunne leses innen omtrent 0,6 s. Automatisk spilles bare kort etablerende bevegelse; det som forteller et steg i historien, ligger på klikk. Målt i nettleseren (Playwright), fra slidebytte til tittelen og 80 % av teksten er fullt synlig. «Bare grafikk» betyr at sliden ikke har tekst utenom tittelen ved klikk 0. Klikkanimasjonene har sitt opprinnelige tempo.

| # | Tittel | Automatisk ved inngang | Per klikk | Tittel lesbar | Hovedtekst lesbar |
|---|---|---|---|---|---|
| 1 | Nais as a Service | Sekskanter setter sammen Nais-logoen | 0 | – | bare grafikk |
| 2 | Problemet | Fire stabler med smertepunkter | 1 | 0,3 s | 1,2 s |
| 3 | (klipp) | Klippet spiller, så en bølge fra navet | 0 | 0,0 s | 0,0 s |
| 4 | Hva er Nais | Søylene kommer inn | 0 | 0,3 s | 0,7 s |
| 5 | Tenants utenfor Nav kjører allerede 528 apper | Tellerne teller, søylene vokser | 0 | 0,3 s | 0,4 s |
| 6 | Ett manifest, ferdig oppsett | Agentchatten skrives | 6 | 0,3 s | 1,3 s |
| 7 | Fra pull request til produksjon | PR-kortet og stegene | 3 | 0,1 s | 0,5 s |
| 8 | Hva skjer på plattformsiden | Application og Naiserator | 2 | 0,0 s | bare grafikk |
| 9 | Verktøykassa | Skuffene kommer inn dempet | 4 | 0,3 s | 0,7 s |
| 10 | Hva Nais har betydd for Nav | Kurven tegnes | 5 | 0,3 s | bare grafikk |
| 11 | Fra feil til fiks | Feilraten og flyten tegnes | 5 | 0,3 s | 0,7 s |
| 12 | Console: fra team til app | Console-teamsiden | 3 | 0,3 s | 0,3 s |
| 13 | Teamet eier kostnaden | PR og kostnadskurve | 3 | 0,0 s | 0,3 s |
| 14 | Ressursutnyttelse | Isfjellene og 2–10x | 0 | 0,3 s | 0,7 s |
| 15 | Og fra terminalen | Fem kommandoer skrives (≈ 5 s) | 0 | 0,3 s | bare grafikk |
| 16 | Hva dere slipper å drifte | Verktøykassa dempet | 2 | 0,4 s | 0,7 s |
| 17 | Kl. 03.00 | Kjeden lyser opp | 3 | 0,3 s | 0,7 s |
| 18 | Nais-teamet | Teamet danner logo, hjerte, så vegg med navn (≈ 4 s) | 0 | 0,3 s | 4,3 s |
| 19 | Sikkerhet i forsyningskjeden | Kjeden tegnes | 9 | 0,3 s | bare grafikk |
| 20 | Innlogging uten egen kode | Innloggingsstjerna | 9 | 0,1 s | 1,1 s |
| 21 | Hva Europa gjør | Kartet tegnes | 6 | 0,3 s | bare grafikk |
| 22 | Hva kjører hvor | Boksene kommer inn | 2 | 0,3 s | 1,2 s |
| 23 | En plattform med flere lag | Lagene bygges nedenfra | 4 | 0,3 s | 0,9 s |
| 24 | Nettverket rundt min-app | Grensene tegnes, min-app | 6 | 0,3 s | 0,5 s |
| 25 | Deres data, deres exit | Kartet over tenants | 3 | 0,3 s | 1,2 s |
| 26 | Dette tar dere med dere | Nais koblet til tenanten | 1 | 0,1 s | 1,4 s |
| 27 | Det dere lurer på | Spørsmålskortene | 4 | 0,3 s | 0,5 s |
| 28 | Hvem bestemmer | Ringen tegnes, køen kommer inn | 1 | 0,3 s | 1,0 s |
| 29 | Bedre sammen | Navet og virksomhetene | 3 | 0,3 s | 1,0 s |
| 30 | Utviklerne kan det allerede | Kunnskapen spres 2016–2026 | 2 | 0,3 s | 0,3 s |
| 31 | Hva koster det | Søylene for hvem som betaler | 0 | 0,3 s | 0,6 s |
| 32 | Hvem kan bli med | Åpningslinja og brikkene | 0 | 0,3 s | 1,1 s |
| 33 | Veien inn | Veien tegnes | 4 | 0,3 s | bare grafikk |
| 34 | Book en demo eller pilot | Norge-kartet, så QR | 0 | 0,0 s | 1,8 s |

Over 1 s, beholdt (brukeren avgjør):
- 2 Problemet (1,2 s)
- 6 Ett manifest, ferdig oppsett (1,3 s)
- 18 Nais-teamet (4,3 s)
- 20 Innlogging uten egen kode (1,1 s)
- 22 Hva kjører hvor (1,2 s)
- 25 Deres data, deres exit (1,2 s)
- 26 Dette tar dere med dere (1,4 s)
- 29 Bedre sammen (1,0 s)
- 32 Hvem kan bli med (1,1 s)
- 34 Book en demo eller pilot (1,8 s)
- Nais-teamet: navnene kommer etter logo og hjerte. Alternativ: vise navnene med en gang
- Terminalen skriver kommandoene automatisk, slik det ble bestemt tidligere
