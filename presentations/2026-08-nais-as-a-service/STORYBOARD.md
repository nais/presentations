# Storyboard: Nais as a Service

Beskriver decket slik det er nå (`slides.md`, komponenter i `gsap/`).

- **Tese:** «Plattformen Nav bygde for seg selv er nå en tjeneste for det offentlige.»
- **Målgruppe:** teknologiledere (primær), beslutningstakere (sekundær)
- **Oppfordring:** book demo eller pilot (nais@nav.no, QR-kode på siste slide)
- **Pris:** egen infrastruktur og forbruk til selvkost, pluss et administrativt gebyr på 200 000 kr i året. ≈ 150 årsverk (anslag) vises én gang, på Problemet; senere står «det Nav allerede bærer»
- **Overganger:** `fade` som standard; `view-transition` der elementer flytter seg mellom slides
- **Kilder:** URL-er står i talernotatene

## Akt 1: Det finnes allerede (slide 1–6)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 1 | Nais as a Service | 0 | fade | – | «Hei, jeg heter Hans Kristian og jobber i Nais-teamet i Nav.» |
| 2 | Problemet | 1 | fade | – | «Og den felles plattformen er ikke en idé. Den har vokst siden 2016. Se.» |
| 3 | (klipp) | 0 | fade | – | «(Ingen overgang. La klippet gå, ikke snakk over det.)» |
| 4 | Hva er Nais | 0 | fade | – | «Seks ting Nais skal gi dere. Jeg kommer tilbake til dem underveis. Først: brukes dette faktisk?» |
| 5 | Tenants utenfor Nav kjører allerede 528 apper | 0 | fade | – | «Grunnen til at tallene er så store, kommer på neste slides.» |
| 6 | Hva Nais har betydd for Nav | 5 | fade | – | «Og hva er det utviklerne faktisk skriver? Dette.» |

## Akt 2: Åpne verktøykassa (slide 7–14)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 7 | Ett manifest, ferdig oppsett | 6 | fade | Utviklingsfart | «Så skal vi se hva som skjer når de trykker på knappen.» |
| 8 | Fra pull request til produksjon | 3 | view-transition | Utviklingsfart | «Men hva skjer egentlig på plattformsiden?» |
| 9 | Hva skjer på plattformsiden | 2 | view-transition | Automatisering | «Tusenvis av apper, og hver får den samme hylla. Her er den.» |
| 10 | Verktøykassa | 5 | fade | Automatisering | «Hva skjer når noe feiler?» |
| 11 | Fra feil til fiks | 5 | fade | Oversikt | «Og alt dette ser teamet også i Console.» |
| 12 | Console: fra team til app | 3 | fade | Oversikt | «Og fordi teamet ser kostnaden, gjør de noe med den.» |
| 13 | Teamet eier kostnaden | 3 | view-transition | Oversikt | «Og for de som liker terminalen:» |
| 14 | Og fra terminalen | 5 | fade | Oversikt | «Det var utviklerens side. Nå snur vi bildet: alt som må stå for at dagen blir kjedelig.» |

## Akt 3: Og alt det slipper dere å drifte (slide 15–20)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 15 | En plattform med flere lag | 4 | fade | Automatisering | «Og fordi containere deler maskiner, bruker de mindre enn virtuelle maskiner.» |
| 16 | Ressursutnyttelse | 0 | fade | – | «Og alt dette må noen drifte.» |
| 17 | Hva dere slipper å drifte | 2 | fade | Automatisering | «Og når noe likevel skjer om natta?» |
| 18 | Kl. 03.00 | 3 | fade | – | «Hvem var våkne? Disse femten.» |
| 19 | Nais-teamet | 0 | fade | – | «Teamet bygger også sikkerheten inn i hver leveranse.» |
| 20 | Sikkerhet i forsyningskjeden | 9 | fade | Sikkerhet | «Så: hvor kjører dette, og hvem eier det? Nå snakker jeg til dere som skal signere.» |

## Akt 4: Dere beholder kontrollen (slide 21–30)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 21 | Hva Europa gjør | 6 | view-transition | Suveren og autonom | «Og hvor kjører det i dag?» |
| 22 | Hva kjører hvor | 2 | fade | Suveren og autonom | «Og slik henger nettverket sammen.» |
| 23 | Nettverket rundt min-app | 6 | fade | Suveren og autonom | «Og hvem slipper inn? Innloggingen er bygd inn.» |
| 24 | Innlogging uten egen kode | 9 | fade | Sikkerhet | «Og hvis dere vil flytte, er det deres valg.» |
| 25 | Deres data, deres exit | 3 | fade | Suveren og autonom | «Og dette tar dere med dere.» |
| 26 | Dette tar dere med dere | 1 | view-transition | Suveren og autonom | «Men dere lurer sikkert på noe.» |
| 27 | Det dere lurer på | 4 | fade | Suveren og autonom | «Hvem bestemmer så hva som skjer med plattformen?» |
| 28 | Hvem bestemmer | 1 | fade | Et Nais-fellesskap | «Når vi sier ja til én tenant, sier vi ja til alle.» |
| 29 | Bedre sammen | 3 | fade | Et Nais-fellesskap | «Og dere får ikke bare hjelp fra oss. Utviklerne kan det allerede.» |
| 30 | Utviklerne kan det allerede | 2 | fade | Et Nais-fellesskap | «Så hva koster det?» |

## Akt 5: Avtalen (slide 31–35)

| # | Tittel | Klikk | Overgang | Søyle | Overgangslinje |
|---|---|---|---|---|---|
| 31 | Hva koster det | 0 | fade | – | «Hva betyr selvkost her?» |
| 32 | Hva selvkost betyr | 0 | view-transition | – | «Hvem kan så bli med?» |
| 33 | Hvem kan bli med | 0 | fade | – | «Slik kommer dere i gang.» |
| 34 | Veien inn | 4 | fade | – | «Og hvis det ikke passer: dere kan gå når som helst, med alt.» |
| 35 | Book en demo eller pilot | 0 | fade | – | «Takk.» |

## Oppsummering

- 35 slides, 97 klikk

### Åpne plassholdere (0)

Ingen. Anslag er merket «anslag» på sliden eller i notatene.

### KI i utviklerhistorien

- Slide 7: utvikleren ber KI-agenten om appen, og agenten skriver manifestet (Nais MCP: get_nais_context, nais://schema)
- Slide 8: PR-en er åpnet av Copilot-agenten; Kari Nordmann reviewer og et menneske merger
- Slide 20: forsyningskjeden viser at agentens kode går gjennom samme løp
- Ikke tatt med: feilsøking med agent på «Fra feil til fiks». Nais MCP-serveren er read-only GraphQL mot Nais API og har ingen verktøy for traces eller logger

### Spørsmål til avklaring

- Avklart: eget datasenter kobles til med VPN eller Cloud Interconnect, per tenant
- Avklart: navnene er Nais Postgres (CloudNativePG) og Nais Buckets, begge «på vei»
- Avklart: «2–10x» beholdes som anslag

### Bevegelse (batch 8)

- En Nais-sekskant reiser mellom slidene (global-top.vue): manifestet (7), verktøykassa (10, 17), innloggingsstjerna (24), «Dette tar dere med dere» (26), «Bedre sammen» (29), «Veien inn» (34) og Norge-kartet på siste slide (35). Av i utskrift, hopper uten flyging ved redusert bevegelse
- View transitions (Chrome) på 8, 9, 13, 21, 26 og 32. Navnene settes bare under `:active-view-transition`, så andre nettlesere får vanlig fade
- Nettverksslide (23) er sjekket mot docs.nais.io. Åpne spørsmål: om Aiven-trafikken går over privat lenke eller internett med TLS (vi viser bare TLS-sertifikat), og om interne ingresser skal vises som egen vei
