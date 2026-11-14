# Storyboard: Slipp utviklerne fri

Utkast 1. Klonet fra `2026-11-nais-er-fortsatt-nais`. Strukturen bygger på Fables storyline-review 2026-11-13.

- **Tittel:** «Slipp utviklerne fri: Slik skapte vi ekstrem fart og flyt i Nav»
- **Tese:** «Lett å gjøre rett», på coveret og i avslutningen
- **Anledning:** konferanse, blandet publikum (ledere og utviklere), 30–45 min, Hans Kristian, bokmål
- **Mål:** vise hvordan plattform og tillit fjerner friksjon, kognitiv last og overleveringer, og hva andre kan lære. Ikke salg
- **Tall:** ≈ 9 000 prodsettinger per uke (Mimir, Nav, prod). Nevn ikke abstractets 4000. 150 utviklingsteam (anslag). ≈ 150 årsverk (anslag) vises én gang. 99,88 % beholdes (målt, ingen SLA)
- **Format:** animert (GSAP), ingen demo
- **Gjenbruk:** komponentene fra fortsatt-decket, men uten «Nytt»-merker, uten «dere» om tenanten og uten uthevet Arbeidstilsynet-logo
- **Hvert grep i Akt 2 ender i en lærdomslinje.** Akt 4 samler dem på én slide

Kolonnen «Kilde» viser sliden eller komponenten som gjenbrukes. «Ut» er overgangen som sies når man forlater sliden.

## Akt 1: Før (≈ 7 min, slide 1–5)

| # | Tittel | Kilde | Innhold | Ut |
|---|---|---|---|---|
| 1 | Slipp utviklerne fri | Cover (CoverLogo) | Tittel, undertittel, nais.io | «Jeg starter med et tall.» |
| 1b | Hvem er jeg | ny (HexagonImage + kort) | Avatar, fem jobbpunkter, «Utenfor jobb»: Varden og NisseKomm. Ikke barnas navn, alder eller skole | «Litt mer om Varden …» |
| 1c | Varden | ny (bilder fra varden.flaatten.org) | Fem evner, teknologi, sitatet «Access control before intelligence» | «Jeg starter med et tall.» |
| 2 | ≈ 9 000 ganger i uka | CountUp (slide 4/10) | ≈ 9 000 prodsettinger per uke, 150 team. Eneste gang tallet teller opp | «Slik var det ikke alltid.» |
| 3 | Veien til produksjon, før | FlowChain (ny bruk) | Én animert kjede: leverandør, bestilling, ticket til drift, CAB, releasevindu. Teller overleveringer og ventetid. Fire store releaser i året | «Hva betydde det for én liten endring?» |
| 4 | En liten endring | ny | Generisk eksempel: en tekstrettelse som ventet måneder på neste releasevindu | «Så snudde Nav.» |
| 5 | Vendepunktet | ny | Insourcing: egne team, og teamene eier veien fra idé til produksjon | «Det krevde at noen ga fra seg kontroll.» |

## Akt 2: Grepene (≈ 18 min, slide 6–13)

| # | Tittel | Kilde | Innhold | Lærdomslinje | Ut |
|---|---|---|---|---|---|
| 6 | Tillit og eierskap | ny | Ledelsen ga fra seg: CAB, releasevinduer, bestilling via drift, detaljstyring. Teamene tok: drift, kostnad, prodsetting | Tillit framfor kontroll | «Eierskap betyr også regningen.» |
| 7 | Teamet eier kostnaden | CostLoop | Kostnad synlig per team i Console | Den som bestemmer, ser prisen | «Og eierskap betyr natta.» |
| 8 | Kl. 03.00 | FlowChain + 99,88 % | Plattformen har vakt, teamet eier appen | Tydelig ansvarsdeling | «Hvordan holder et team alt dette i hodet? Det gjør det ikke.» |
| 9 | Ett manifest, ferdig oppsett | ManifestDeep (færre klikk) | Rammet inn som kognitiv last: det utvikleren slipper å vite | Brolagt sti | «Og når teamet merger?» |
| 10 | Fra pull request til produksjon | PrFlow | Speilet mot slide 3: null overleveringer | Ingen venting | «Men uten bom, hvordan ivaretar vi sikkerheten?» |
| 11 | Sikkerheten er en del av veien | SupplyFix + AuthJourney (slått sammen) | Signering, SBOM, sårbarheter og innlogging bygd inn | Sikkerhet bygd inn, ikke en bom på veien | «Veien er et produkt, med brukere.» |
| 12 | Plattform som produkt | Toolbox (12a) + ConsoleMock (12b) + CliDemo (12c) | Verktøykassa med Console, CLI og MCP, dokumentasjon, champions. Terminalen på egen slide | Plattform som produkt | «Og alt dette er åpent.» |
| 12b | Console | ConsoleMock (tour, 3 klikk) | Teamoversikt for team-eksempel: helse, kostnad, apper med status, én app med sårbarheter | Ett sted å se alt | «Og for dem som liker terminalen.» |
| 13 | Åpenhet | ny (IconCard) | Åpen kildekode, åpen dokumentasjon, #nais, nais.io | Del åpent | «Hva har det gitt?» |

## Akt 3: Effekt og pris (≈ 9 min, slide 14–18)

| # | Tittel | Kilde | Innhold | Ut |
|---|---|---|---|---|
| 14 | Fra fire i året til ≈ 9 000 i uka | YearChart (skaleres om til prod) | Kurven over år. Ingen ny CountUp | «Fart er også å rette feil fort.» |
| 15 | Fra feil til rettet | ObsHunt | Fra varsel til rettelse på minutter | «Ikke alt har gått bra.» |
| 16 | Vi lærer mens vi bygger | IconCard ×3 | Istio til Linkerd, tilgangsstyring bygd fire ganger, hemmelighet nesten i loggene (generisk). Vi bygde, lærte og ryddet | «Hvem står bak?» |
| 17 | Teamet bak | TeamWall | 15 personer holder plattformen for ≈ 150 team, totalt ≈ 150 årsverk (anslag) siden 2016 | «Må man være Nav? Nei.» |
| 18 | Ikke bare Nav | logoer (slide «Dere er ikke alene») | Seks tenants. Ingen pris, ingen CTA | «Hva kan dere ta med hjem?» |

## Akt 4: Lærdom (≈ 4 min, slide 19–20)

| # | Tittel | Kilde | Innhold | Ut |
|---|---|---|---|---|
| 19 | Fire lærdommer | NaisPillars (tilpasset) | Plattform som produkt, brolagt sti, tillit og eierskap, åpenhet. Formulert som noe man kan gjøre uten å være Nav | — |
| 20 | Lett å gjøre rett | Avslutning | Tesen, «Slik slipper du utviklerne fri», «Spørsmål?» | «Takk!» |

## Ut av fortsatt-decket

Klippet, Hva er Nais, Hva skjer på plattformsiden, Hvorfor kostnaden holdes nede, Hva kjører hvor, flere lag, Nettverket, Nais-teamet (blir prisen), KS Digital/Novari, Året som gikk, Nais Postgres, Retning for Console, Data og drift videre, Handlingsrom, Hvem bestemmer, Hvordan påvirke.

Design, layout og animasjon per slide: se `DESIGN-PLAN.md`.
