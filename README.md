# nais Presentations

Monorepo for nais presentation decks built with [Slidev](https://sli.dev/).

## Presentations

| Name                                                                          | Description                    | Port |
| ----------------------------------------------------------------------------- | ------------------------------ | ---- |
| [2026-02-nais-brukerforum](presentations/2026-02-nais-brukerforum/)           | nais Brukerforum, februar 2026 | 3031 |
| [2026-08-nais-as-a-service](presentations/2026-08-nais-as-a-service/)         | Nais as a Service              | 3032 |
| [2026-11-fart-og-flyt](presentations/2026-11-fart-og-flyt/)                   | Slipp utviklerne fri           | 3032 |
| [2026-11-nais-er-fortsatt-nais](presentations/2026-11-nais-er-fortsatt-nais/) | Nais er fortsatt Nais          | 3032 |

All decks are linked from the splash page at the site root (`public/index.html`).

## Structure

```
/
├── shared/                    # Shared resources (symlinked into presentations)
│   ├── components/            # Vue components (TimelineNode, ValuePillar, etc.)
│   ├── layouts/               # Slidev layouts (cover, timeline, pillars, etc.)
│   └── public/                # Assets (icons, logos, photos)
├── presentations/
│   └── 2026-02-nais-brukerforum/  # Symlinks to shared/
```

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev              # All presentations
pnpm dev:brukerforum  # Brukerforum (port 3031)
pnpm dev:naas         # Nais as a Service (port 3032)
pnpm dev:fart         # Slipp utviklerne fri (port 3032)
pnpm dev:fortsatt     # Nais er fortsatt Nais (port 3032)
```

## Code Quality

```bash
pnpm check      # lint + format check
pnpm lint:fix   # auto-fix lint
pnpm format     # auto-format
```

## Build

```bash
pnpm build
```

## Adding a New Presentation

1. Create a new folder under `presentations/`
2. Add `slides.md`, `style.css`, `uno.config.ts`, `package.json`, `eslint.config.js`
3. Symlink shared resources: `ln -s ../../shared/{components,layouts,public} .`
4. Define CSS variables in `style.css` for your theme
5. Update root `package.json` with a dev script

## Design System

See [agents.md](agents.md) for the complete design system documentation.
