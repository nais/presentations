# Designplan: Slipp utviklerne fri

Fra Fables design-, layout- og animasjonsreview 2026-11-13, basert på kildekoden (decket er ikke kjørt). S = `slides.md`, G = `gsap/`, C = `style.css`. Klikk i hakeparentes.

## Per slide

| # | Valg | Komponent | Endring |
|---|---|---|---|
| 1 | tilpass | cover + CoverLogo | Ny tittel, undertittel, byline. Fade til 2 [0] |
| 2 | tilpass | CountUp | `number="9000" prefix="≈"`. 150 team som statisk StatHighlight. Ingen view-transition inn (CountUp bruker useIsSlideActive) [0] |
| 3 | tilpass | FlowChain, 5 noder | `stat` per node for ventetid. Ny «før»-tone (siste node ikke grønn). Tellelinje: «5 overleveringer · måneder» [4] |
| 4 | ny | HTML | Én diff-linje i `.pg-code` og en datert logg i `.night`. Ventestolpe fylles på klikk. Ikke PrCard (GitHub-look passer ikke «før») [1] |
| 5 | ny | two-cols + `.anchor-hex` | Venstre dempet «leverandør bygger, drift prodsetter», høyre «teamet eier veien». Første landing for hero-hex, merket «Team» [1] |
| 6 | ny | `.hr-scale` | «Ledelsen ga fra seg» (4), pil, «Teamene tok» (3) [2] |
| 7 | tilpass | CostLoop | `.take` erstattes av lærdomslinja. h1 til 3xl [1] |
| 8 | tilpass | FlowChain + 99,88 % | Fjern `.night`-loggen. Behold kjede og tall [3] |
| 9 | tilpass | ManifestDeep | 6 blokker til 3 (inn / data / innsikt). Fjern `atil-prod`, «Postgres (preview)» blir «Database», fjern PG-fil og KI-chat. Behold view-transition til PrFlow [3] |
| 10 | tilpass | PrFlow | Tittel, diff og forfatter som props. Samme endring som slide 4. Tellelinje «0 overleveringer · minutter» på samme sted som slide 3 [3] |
| 11 | tilpass | FlowChain | Bygg, SBOM, Signering, Sårbarheter, og en chip-rad for innlogging. Ikke SupplyFix eller AuthJourney (9+9 klikk) [4] |
| 12 | tilpass | Toolbox `mode="open"` | MCP, CLI og Console ligger allerede i skuffen. Legg til «Dokumentasjon · Champions». Behold «Ingenting å bestille». Gi nytt navn til «Nais Postgres» [2–4] |
| 13 | ny | IconCard ×4 | Kildekode, dokumentasjon, #nais, nais.io. Rolig slide [0] |
| 14 | tilpass | YearChart + `prod`-serie | Se funn under [0] |
| 15 | tilpass | BugHunt direkte | Hopper over ObsFlow (Fluent Bit og OTel er for dypt) [4] |
| 16 | ny | IconCard ×3 | Løft «Ryddet bort» fra fotnote til kort, eller bruk GitHub-funnene (se åpne spørsmål) [0] |
| 17 | tilpass | TeamWall + «≈ 150 årsverk (anslag)» | FLIP faller tilbake til innflyging, det virker [0] |
| 18 | tilpass | logorad | Fjern `tenant-highlight`. «Virksomheter», ikke «tenants». Valgfri `.anchor-hex` «Nais» [0] |
| 19 | tilpass | NaisPillars + `items`-prop, 2×2 | Fire kort i lærdomsfargene, med lærdomslinjene fra Akt 2 som undertekst [0] |
| 20 | tilpass | cover + CoverLogo | «Lett å gjøre rett», nais.io, «Spørsmål?» [0] |

## Gjennomgående

- **Tre speilpar:** 2 og 14 (tallet), 3 og 10 (tellelinja), 4 og 10 (samme endring).
- **Lærdomslinje:** én global `.lesson`-klasse i `::footer::` på slide 6–13. Den vises på slidens siste klikk og erstatter `.take`, `.caption`, `.contrast` og `.evidence`.
- **Farger:** fem lærdomsfarger (`--pc`) erstatter de seks søyletaggene. 6–8 tillit, 9–11 brolagt sti, 12 produkt, 13 åpenhet, 13a–d åpne standarder (`#34c27a`). Slide 19 samler dem.
- **Hero-hex** betyr teamet eller appen: 5, 9, 12, og eventuelt 18.
- **Klikk:** ca. 30 totalt. Tung strekning er 8–12 (17 klikk). Rolige slides: 2, 4–5, 13, 16, 18, 20.
- **FlowChain** brukes på 3, 8 og 11, ikke en fjerde gang.
- **Strip:** alle `pillar-tag` og `new-badge`, døde view-transition-par (apply-chip, console-browser), «dere» og Arbeidstilsynet i notatene.
- **Slett ubrukt:** ClipSlide, AppFanout, HostingMap, IsoLayers, NetTopology, PgStory, GovernanceLoop, BenefitStory, ResourceIcebergs, `assets/naas-growth.*`.

## Ny kode (minst mulig)

`.lesson` og tellelinje i C, `tone`-prop i FlowChain, props i PrFlow, `items` i NaisPillars, `prod`-serie og `height` i YearChart. Ingen nye komponentfiler.

## Funn

- **YearChart passer ikke som den er.** Dataene er et anslag for alle miljøer (2016: 100 til 2026: 21 500), og grafen er en sparkline på 84 px. «4 i året» blir usynlig på lineær akse. Løsningen er en `prod`-serie skalert til 9 000 og merket anslag, høyere graf og «4 i året» som tekstmarkør.
- **DeployChart** har ekte Mimir-data for 11 uker (aug.–okt. 2026), prod 7 160–10 081. Den viser ingen vekst og brukes som skjult reserve.

## Risiko

- Kurven på 14 er et anslag vist på konferanse og må merkes tydelig.
- TeamWall danner et hjerte under tittelen «Prisen» og viser 15 navngitte ansikter.
- Å endre blokkene i ManifestDeep kan forskyve dokkene. Det må sjekkes visuelt.

## Avgjort 2026-11-13

- Slide 12 blir to: 12a Toolbox, 12b terminal (CliDemo, uten `nais postgres proxy`). Decket får 21 slides.
- Tesen «Lett å gjøre rett» står på coveret som undertittel og gjentas på 20.
- TeamWall beholdes som den er (navn, ansikter, hjerte).
- KS Digital og Novari merkes «på vei inn» på 18.
- KI-tråden beholdes: chat i ManifestDeep og Copilot som PR-forfatter.
- Slide 14: prodserie merket anslag, skalert til ≈ 9 000/uke, «4 i året» som markør.
- Slide 16: Istio til Linkerd (nais/blog, 2021-05-04) og tilgangsstyring bygd fire ganger (named, terje, tobac, rbac-sync, arkivert). Kafkarator-postmortemen (2024-11-13) fortelles generisk: en hemmelighet havnet nesten i loggene, og vi meldte avvik.
