# Storyboard: Nais er fortsatt Nais

Utkast 4. Bygger på `2026-08-nais-as-a-service`. Kilder for «året som gikk» står i `RESEARCH.md`.

- **Tese:** «Samme løfte, bedre under panseret.»
- **Anledning:** Arbeidstilsynets årlige interne fagdag for teknologi, 30–45 min, Hans Kristian, bokmål
- **Målgruppe:** utviklere og tech leads i Arbeidstilsynet
- **Mål:** inspirere og bekrefte at de valgte riktig. Ikke salg
- **Tall:** bruk eksisterende tall fra NaaS-decket, ingen nye uttrekk
- **Avslutning:** hvordan påvirke (Naisdag, champions, #nais på Slack), så de seks søylene igjen med det som er nytt, og «Spørsmål?»
- **Fjernet fra NaaS:** pris, hvem kan bli med, veien inn, book demo, exit-slidene, Europa, «Det dere lurer på», «Bedre sammen», «Utviklerne kan det allerede», «Hva dere slipper»
- **Postgres:** fokus på Nais Postgres (CloudNativePG). Zalando nevnes ikke (få berørt)

Kolonnen «Ut» er overgangen som sies når man forlater sliden (står i notatene). «Overgang» er Slidev-overgangen til neste slide; tom betyr standard (slide-left). «Klikk» er fra frontmatter.

## Akt 1: Det dere kjenner (slide 1–4)

| # | Tittel | Klikk | Overgang | Ut |
|---|---|---|---|---|
| 1 | Nais er fortsatt Nais | 0 | fade | «… I dag viser jeg hva som har skjedd under panseret.» |
| 2 | Klippet | 0 | fade | (ingen, la klippet gå) |
| 3 | Hva er Nais (seks søyler, kart) | 0 | fade | «… Først: hvem dere deler plattformen med.» |
| 4 | Dere er ikke alene på plattformen | 0 | | «… Så: hva skjer egentlig når dere deployer?» |

## Akt 2: Under panseret (slide 5–22)

| # | Tittel | Klikk | Overgang | Ut |
|---|---|---|---|---|
| 5 | Ett manifest, ferdig oppsett | 6 | view-transition (manifest-code) | «Så skal vi se hva som skjer når dere merger.» |
| 6 | Fra pull request til produksjon | 3 | | «Hvem skrev manifestet og åpnet PR-en? En agent. Slik spør den Nais.» |
| 7 | KI: MCP i Nais CLI (flyttet fra Akt 3) | 3 | | «Agenten leser, nais apply leverer. La oss åpne panseret …» |
| 8 | Hva skjer på plattformsiden | 4 | | «Hver app får den samme hylla. Her er den …» |
| 9 | Verktøykassa | 4 | | «Hva har dette gitt i praksis? Nav har kjørt lengst.» |
| 10 | Hva Nais har gitt Nav (≈ 9 000, nøytral) | 0 | | «Mange prodsettinger betyr at noe av og til feiler …» |
| 11 | Fra feil til fiks | 5 | | «Og alt dette ser teamet også i Console.» |
| 12 | Nytt i Console (liste, ikke omvisning) | 0 | | «Console viser også hva appene koster …» |
| 13 | Teamet eier kostnaden | 3 | | «Databasen er én post på regningen. Resten avgjøres av hvordan maskinene deles.» |
| 14 | Hvorfor kostnaden holdes nede (delte clustere) | 0 | | «Og for dere som liker terminalen.» |
| 15 | Og fra terminalen | 0 | | «Det var det dere ser. Nå det dere ikke skal trenge å tenke på.» |
| 16 | Hva kjører hvor | 2 | | «Slik er lagene bygd.» |
| 17 | En plattform med flere lag | 4 | | «Og slik henger nettverket sammen.» |
| 18 | Nettverket rundt min-app | 6 | | «Nettverket er stengt som standard …» |
| 19 | Sikkerhet i forsyningskjeden | 9 | view-transition (tittel) | «… Innloggingen er bygd inn.» |
| 20 | Innlogging uten egen kode | 9 | | «Og når noe likevel går galt om natta?» |
| 21 | Kl. 03.00 | 3 | | «Hvem var våkne? Disse femten.» |
| 22 | Nais-teamet | 0 | | «Og de femten har fått flere å bygge for.» |

## Akt 3: Året som gikk (slide 23–25)

| # | Tittel | Klikk | Overgang | Ut |
|---|---|---|---|---|
| 23 | Velkommen, KS Digital og Novari (hex-anker) | 0 | | «Mye av det nye har dere sett på veien. Her er året samlet.» |
| 24 | Året som gikk | 0 | | «Én av dem fortjener egen plass: databasen.» |
| 25 | Nais Postgres | 0 | | «Det var året som gikk. Nå: hvor vi er på vei.» |

## Akt 4: Veien videre (slide 26–31)

| # | Tittel | Klikk | Overgang | Ut |
|---|---|---|---|---|
| 26 | Retning for Console | 0 | | «Under Console skjer det også mye med data.» |
| 27 | Data og drift videre | 0 | | «Og så det store bildet. Mange spør om skyen.» |
| 28 | Handlingsrom (Norway East via digi.no, NSM Risiko 2026 s. 35) | 0 | | «Hvem bestemmer egentlig hva som bygges?» |
| 29 | Hvem bestemmer | 1 | | «Så hvordan kan dere påvirke?» |
| 30 | Hvordan påvirke | 0 | | «Til slutt samler jeg trådene: de seks søylene fra starten.» |
| 31 | Samme løfte, bedre under panseret (søylene med «Nytt», hex-anker, «Spørsmål?») | 0 | | «Takk! Spørsmål?» |

Hex-ankere (data-anchor): 5, 9 (Toolbox), 20 (Integrations), 23 og 31.
