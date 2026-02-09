# nais Presentations - Design System

Design system for nais Slidev presentations. Covers theming, layouts, components, and conventions.

---

## Theming Architecture

Each presentation defines its own theme via CSS variables in `style.css`. Shared components and layouts reference these variables with fallback values, making them theme-agnostic.

### CSS Variable Contract

Every presentation's `style.css` should define these variables in `:root`:

| Variable                | Purpose                    | Light theme default |
| ----------------------- | -------------------------- | ------------------- |
| `--nais-bg`             | Slide background           | `#FFFFFF`           |
| `--nais-surface`        | Elevated surface / code bg | `#F1F5F9`           |
| `--nais-card`           | Card backgrounds           | `#F8FAFC`           |
| `--nais-text`           | Primary text               | `#0F172A`           |
| `--nais-text-secondary` | Muted text                 | `#64748B`           |
| `--nais-heading`        | Heading text               | `#0F172A`           |
| `--nais-accent`         | Primary accent             | `#E8384F`           |
| `--nais-accent-hover`   | Accent hover state         | `#DC2626`           |
| `--nais-accent-light`   | Accent light bg            | `#FEF2F2`           |
| `--nais-border`         | Border color               | `#E2E8F0`           |
| `--nais-highlight`      | Component title highlights | `#E8384F`           |
| `--nais-gradient-from`  | Gradient start (hexagons)  | `#E8384F`           |
| `--nais-gradient-to`    | Gradient end (hexagons)    | `#DC2626`           |
| `--nais-success`        | Checkmarks, success        | `#10B981`           |

### Creating a Dark Theme

Override the variables:

```css
:root {
  --nais-bg: #0F172A;
  --nais-surface: #1E293B;
  --nais-card: #334155;
  --nais-text: #F8FAFC;
  --nais-text-secondary: #94A3B8;
  --nais-heading: #F8FAFC;
  --nais-border: #475569;
  /* ... accent colors as desired */
}
```

---

## Typography

| Type      | Font Family    | Fallback   |
| --------- | -------------- | ---------- |
| Headings  | Poppins        | sans-serif |
| Body      | Inter          | sans-serif |
| Monospace | JetBrains Mono | monospace  |

### Font Sizes

| Element          | Class / Size          | Weight      |
| ---------------- | --------------------- | ----------- |
| Slide title (h1) | `text-3xl` (1.875rem) | 700 (bold)  |
| Cover title      | `text-5xl` (3rem)     | 900 (black) |
| Subtitle         | `1.2rem`              | 400         |
| Component title  | `1.25rem`             | 700         |
| Body text        | `0.85rem`             | 400         |
| Footer           | `text-sm` (0.875rem)  | 400         |
| Stat numbers     | `3.5rem`              | 700         |

---

## Slide Structure

### Standard Dimensions

| Element           | Value                   |
| ----------------- | ----------------------- |
| Slide padding     | `2rem 3rem 1.5rem 3rem` |
| Header min-height | `5rem`                  |
| Header alignment  | `text-align: center`    |
| Footer height     | `2.5rem`                |
| Footer alignment  | `text-align: center`    |
| Content max-width | `1000-1100px`           |
| Content z-index   | `2`                     |

### Layout Hierarchy

```
┌─────────────────────────────────────┐
│           HEADER (5rem)             │
│         centered, z-index: 2        │
├─────────────────────────────────────┤
│                                     │
│           CONTENT (flex: 1)         │
│         z-index: 2                  │
│                                     │
├─────────────────────────────────────┤
│          FOOTER (2.5rem)            │
│         centered, z-index: 2        │
└─────────────────────────────────────┘
```

### Footer Content
Default: `nais.io` in monospace at small size, 70% opacity.

---

## Available Layouts

| Layout        | Use for                    | Key Slots                                |
| ------------- | -------------------------- | ---------------------------------------- |
| `cover`       | Opening/title slide        | `logo`, `default`, `mascots`, `footer`   |
| `timeline`    | Chronological progressions | `header`, `default`, `footer`            |
| `pillars`     | Core values (typically 3)  | `header`, `default`, `tagline`, `footer` |
| `stats-grid`  | Key metrics                | `header`, `default`, `tagline`, `footer` |
| `two-cols`    | Comparison / dual content  | `header`, `left`, `right`, `footer`      |
| `image-right` | Content + image            | `header`, `default`, `image`, `footer`   |
| `cta`         | Closing / contact          | `header`, `default`, `footer`            |
| `default`     | General purpose            | `header`, `default`, `footer`            |

---

## Components

### `<TimelineNode>`

```vue
<TimelineNode version="v1.0" year="2024" title="Title" description="..." icon="i-carbon-rocket" />
```

| Prop          | Type   | Required | Default           |
| ------------- | ------ | -------- | ----------------- |
| `version`     | String | Yes      | -                 |
| `year`        | String | Yes      | -                 |
| `title`       | String | Yes      | -                 |
| `description` | String | Yes      | -                 |
| `icon`        | String | No       | `i-carbon-rocket` |
| `image`       | String | No       | `''`              |

### `<ValuePillar>`

```vue
<ValuePillar icon="i-carbon-code" title="Title" description="..." />
```

| Prop          | Type   | Required | Default |
| ------------- | ------ | -------- | ------- |
| `icon`        | String | No       | `''`    |
| `image`       | String | No       | `''`    |
| `title`       | String | Yes      | -       |
| `description` | String | Yes      | -       |

### `<StatHighlight>`

```vue
<StatHighlight number="500" label="Users" />
```

| Prop     | Type          | Required |
| -------- | ------------- | -------- |
| `number` | String/Number | Yes      |
| `label`  | String        | Yes      |

### `<AddOnCard>`

```vue
<AddOnCard title="Feature" :exclusive="true" price="NOK 50k" :benefits="['A', 'B']" />
```

| Prop        | Type    | Required | Default |
| ----------- | ------- | -------- | ------- |
| `title`     | String  | Yes      | -       |
| `exclusive` | Boolean | No       | `false` |
| `price`     | String  | No       | `''`    |
| `benefits`  | Array   | No       | `[]`    |

### `<IconCard>`

```vue
<IconCard icon="i-carbon-terminal" title="Title" description="..." color="red" />
```

| Prop          | Type   | Required | Default |
| ------------- | ------ | -------- | ------- |
| `icon`        | String | Yes      | -       |
| `title`       | String | Yes      | -       |
| `description` | String | Yes      | -       |
| `color`       | String | No       | `red`   |

---

## Icons

Carbon Icons via UnoCSS: `i-carbon-{icon-name}`

Common: `rocket`, `code`, `group`, `globe`, `email`, `calendar`, `checkmark-filled`, `logo-github`, `terminal`, `growth`, `favorite-filled`

---

## Background System

Defined per-presentation in `style.css`. The default nais.io light theme uses a subtle dot grid:

```css
.slidev-layout::before {
  background-image: radial-gradient(circle, #cbd5e1 0.75px, transparent 0.75px);
  background-size: 24px 24px;
  opacity: 0.35;
}
```

---

## Spacing

| Context          | Value                   |
| ---------------- | ----------------------- |
| Slide padding    | `2rem 3rem 1.5rem 3rem` |
| Between sections | `2rem`                  |
| Card padding     | `1.25-2rem`             |
| Grid gap         | `1-2rem`                |
| Column gap       | `3rem`                  |

---

## File Structure

```
/
├── package.json              # Root workspace config
├── pnpm-workspace.yaml       # Workspace definition
├── agents.md                 # This design system doc
├── shared/
│   ├── components/           # Shared Vue components
│   ├── layouts/              # Shared Slidev layouts
│   └── public/               # Shared assets (icons, logos)
├── presentations/
│   └── 2026-02-nais-brukerforum/
│       ├── slides.md         # Presentation content
│       ├── style.css         # Theme (CSS variables)
│       ├── uno.config.ts     # UnoCSS config
│       ├── package.json      # Dependencies
│       ├── eslint.config.js  # Linting config
│       ├── components/ → ../../shared/components
│       ├── layouts/   → ../../shared/layouts
│       └── public/    → ../../shared/public
```

Presentations use symlinks to `shared/` for components, layouts, and public assets.

---

## Development

```bash
pnpm install
pnpm dev              # All presentations
pnpm dev:brukerforum  # Specific presentation
```

### Code Quality

```bash
pnpm check            # lint + format check
pnpm lint:fix         # auto-fix lint
pnpm format           # auto-format
```

---

## Quick Reference: New Slide

```markdown
---
layout: [layout-name]
---

::header::
<h1 class="text-3xl font-bold">Title</h1>
<p class="subtitle">Subtitle</p>

::default::
<!-- Content -->
```

## Adding a New Presentation

1. Create folder under `presentations/`
2. Add `slides.md`, `style.css`, `uno.config.ts`, `package.json`, `eslint.config.js`
3. Symlink shared resources: `ln -s ../../shared/{components,layouts,public} .`
4. Define CSS variables in `style.css` for your theme
5. Update root `package.json` with dev script
