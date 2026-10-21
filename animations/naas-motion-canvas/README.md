# naas-motion-canvas

A [Motion Canvas](https://motioncanvas.io) animation for the "Nais as a Service" deck: "Fra 150 team til 2000 apper".
It renders at 1920x1080, 60 fps, about 10 s long. The scene lives in `src/scenes/growth.tsx`.
The colours come from `presentations/2026-08-nais-as-a-service/style.css`.

This project is not part of the pnpm workspace. Install it on its own:

```sh
pnpm install --ignore-workspace
pnpm exec playwright install chromium   # only needed for headless rendering
```

## Preview

```sh
pnpm start   # opens the Motion Canvas editor at http://localhost:9000
```

## Render

Headless (Vite plus Playwright clicks the editor's Render button, then copies the video into the deck):

```sh
pnpm render
# -> ../../presentations/2026-08-nais-as-a-service/assets/naas-growth.mp4
```

Chromium starts with Metal GPU flags. Without a GPU (SwiftShader), each frame takes several seconds.

Manual: run `pnpm start`, open **Video Settings**, click **Render**, then copy `output/project.mp4` to the deck's `assets/naas-growth.mp4`.

`pnpm render` also writes a poster frame (`assets/naas-growth-poster.jpg`, used in PDF export) when `ffmpeg` is installed.

## Embed in Slidev

The deck plays it on the slide after Nøkkeltall via `gsap/ClipSlide.vue`, which imports the file so Vite bundles it (the deck's `public/` is shared with other decks, so the clip does not live there).
