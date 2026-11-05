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

## Akt 3: Året som gikk (slide 21–24)

Det som er nytt i Akt 2 får merket «Nytt» (5, 6, 8, 10, 11, 14, 16, 17, 18). Akt 3 tar bare det som trenger egen plass.

| # | Tittel | Innhold |
|---|---|---|
| 21 | Velkommen, KS Digital og Novari | Feiring: to nye tenants signert (offentlig-offentlig samarbeid), arbeidslaster på vei i 2027. Fellesskapet vokser; det vi bygger for én, får alle |
| 22 | Tidslinje 2025–2026 | 8–10 milepæler (TimelineNode). Nederst en dempet stripe «Ryddet bort»: secure logs, KrakenD, gamle CLI-kommandoer (erstatter egen «Verdt å vite»-slide) |
| 23 | Nais Postgres | CloudNativePG, branches, point-in-time recovery, personlig DBA-tilgang, Postgres i Console |
| 24 | KI: MCP i CLI | Nais MCP-server, agenten skriver manifestet |

## Akt 4: Veien videre (slide 25–29)

| # | Tittel | Innhold |
|---|---|---|
| 25 | Retning for Console | Helhetlig redesign, CLI/Console-paritet |
| 26 | Data og drift videre | Nais Buckets, CNPG 1.30, pgaudit, Kafka tiered storage, Grafana-varsler per team (pilot) |
| 27 | Handlingsrom | Høyt nivå: målet er ikke å flytte, men å kunne. Azure med kapasitetsmangel gjennom 2026 (Microsofts finansdirektør), strøm og tomter begrenser nye datasentre i Europa (CBRE, JLL), NSM Risiko 2026 om avhengighet av få amerikanske skyleverandører, forslag til EUs Cloud and AI Development Act. Ikke si «Norge er fullt». Kilder: `RESEARCH-CLOUD.md` |
| 28 | Hvem bestemmer | Nais-teamet + innspill på Naisdag |
| 29 | Hvordan påvirke | Naisdag, champions, Slack-kanalen #nais (felles for alle tenants). Spørsmål |
