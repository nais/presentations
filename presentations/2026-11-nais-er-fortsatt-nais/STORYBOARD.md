# Storyboard: Nais er fortsatt Nais

Utkast 3. Bygger på `2026-08-nais-as-a-service`. Kilder for «året som gikk» står i `RESEARCH.md`.

- **Tese:** «Samme løfte, bedre under panseret.»
- **Anledning:** Arbeidstilsynets årlige interne fagdag for teknologi, 30–45 min, Hans Kristian, bokmål
- **Målgruppe:** utviklere og tech leads i Arbeidstilsynet
- **Mål:** inspirere og bekrefte at de valgte riktig. Ikke salg
- **Tall:** bruk eksisterende tall fra NaaS-decket, ingen nye uttrekk
- **Avslutning:** hvordan påvirke (Naisdag, champions, #nais på Slack)
- **Fjernet fra NaaS:** pris, hvem kan bli med, veien inn, book demo, exit-slidene, Europa, «Det dere lurer på», «Bedre sammen», «Utviklerne kan det allerede», «Hva dere slipper»
- **Postgres:** fokus på Nais Postgres (CloudNativePG). Zalando nevnes ikke (få berørt)

## Akt 1: Det dere kjenner (slide 1–4)

| # | Tittel | Fra NaaS | Endring |
|---|---|---|---|
| 1 | Nais er fortsatt Nais | 1 | Ny tittel, samme logo-animasjon |
| 2 | Klippet | 3 | Beholdes |
| 3 | Hva er Nais | 4 | Seks søyler; brukes som kart for resten |
| 4 | Tenants og apper | 5 | Eksisterende tall; Arbeidstilsynet uthevet, med logo og sitat |

## Akt 2: Under panseret (slide 5–20), mer teknisk enn NaaS

| # | Tittel | Fra NaaS | Endring |
|---|---|---|---|
| 5 | Ett manifest | 6 | Viser `nais.io/v1` Postgres og `uses` |
| 6 | Fra PR til produksjon | 7 | nais deploy |
| 7 | Hva skjer på plattformsiden | 8 | Dypere: Nais API, Naiserator, api-reconcilers, liberator-CRD-er |
| 8 | Verktøykassa | 9 | Oppdatert: Nais Postgres, Valkey, OpenSearch, Kafka, Unleash |
| 9 | Hva Nais har betydd for Nav | 10 | Beholdes |
| 10 | Fra feil til fiks | 11 | Mimir, Loki-utforsker i Console |
| 11 | Console: fra team til app | 12 | Beholdes |
| 12 | Teamet eier kostnaden | 13 | Beholdes |
| 13 | Ressursutnyttelse | 14 | Beholdes |
| 14 | Og fra terminalen | 15 | Nye kommandoer: `nais apply`, `nais postgres`, `nais app set` |
| 15 | En plattform med flere lag | 22–23 | GKE, Aiven, selvhostet LGTM |
| 16 | Nettverket rundt min-app | 24 | HAProxy i stedet for nginx |
| 17 | Sikkerhet i forsyningskjeden | 19 | + prioritering av sårbarheter (EPSS/KEV, eksponering) |
| 18 | Innlogging uten egen kode | 20 | + AnsattportenClient, Entra federated credentials |
| 19 | Kl. 03.00 | 17 | Beholdes |
| 20 | Nais-teamet | 18 | Beholdes |

## Akt 3: Året som gikk (slide 22–25)

Nummereringen er forskjøvet med én fordi slide 15 er delt i to («Hva kjører hvor» og «En plattform med flere lag»).

Det som er nytt i Akt 2 har merket «Nytt». Akt 3 tar bare det som trenger egen plass.

| # | Tittel | Bygd som |
|---|---|---|
| 22 | Velkommen, KS Digital og Novari | Logokort for de to nye, logorad for de fire i produksjon. Arbeidslaster ventes i 2027 |
| 23 | Året som gikk | Rutenett med 9 milepæler (des. 2025–nov. 2026, datert etter commits) og dempet stripe «Ryddet bort»: secure logs, KrakenD, Elastic APM, gamle CLI-kommandoer |
| 24 | Nais Postgres | Fem egenskaper (CNPG, branches, point-in-time recovery, personlig DBA-tilgang, Console) og `nais postgres branch`-kommandoer. Merket «Nytt», ikke GA |
| 25 | KI: MCP i Nais CLI | FlowChain: utvikler → agent → `nais alpha mcp serve` → Nais API (bare lesing), med de ekte verktøynavnene |

## Akt 4: Veien videre (slide 26–30)

| # | Tittel | Bygd som |
|---|---|---|
| 26 | Retning for Console | Tre kort: én helhet, teamoversikt først, CLI/Console-paritet |
| 27 | Data og drift videre | Seks fliser med status (På vei, Planlagt, Utredes, Pilot): Nais Buckets, CNPG 1.30, pgaudit, Kafka tiered storage, Grafana-varsler per team, Kafka-kostnad i Console |
| 28 | Handlingsrom | To kolonner: verden rundt oss (Azure-kapasitet, strøm og tomter, NSM, EU CADA) og hva Nais gjør. Kilder i notatene. NSM må sjekkes mot PDF |
| 29 | Hvem bestemmer | Uendret: Nais-teamet + innspill på Naisdag |
| 30 | Hvordan påvirke | Tre kort: Naisdag, champions, #nais på Slack. Avslutter med tesen og «Spørsmål?» |
