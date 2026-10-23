# Nais as a Service

Presentasjon om Nais as a Service, laget med Slidev og GSAP.

## Kjør lokalt

```sh
pnpm install
pnpm --filter @nais/2026-08-nais-as-a-service dev
```

Åpne <http://localhost:3032>.

## Presenter

Presenter fra Chrome (View Transitions). Noen slides bruker View Transitions
for å flytte elementer mellom slides. Andre nettlesere viser vanlige overganger.

## Bygg og eksporter

```sh
pnpm --filter @nais/2026-08-nais-as-a-service build
pnpm --filter @nais/2026-08-nais-as-a-service export
```

Klippet i `assets/naas-growth.mp4` lages i `animations/naas-motion-canvas` med `pnpm render`.
