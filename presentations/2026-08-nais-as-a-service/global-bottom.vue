<template>
  <!-- Persistent background behind every slide: dot grid and nais.io glows. -->
  <div class="deck-bg" />
</template>

<style>
.deck-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: var(--nais-bg);
  background-image:
    radial-gradient(circle, #334155 0.75px, transparent 0.75px),
    radial-gradient(40% 35% at 88% 8%, rgb(98 0 255 / 0.22), transparent 70%),
    radial-gradient(35% 30% at 8% 92%, rgb(92 178 218 / 0.16), transparent 70%),
    radial-gradient(
      30% 30% at 60% 105%,
      rgb(247 104 145 / 0.16),
      transparent 70%
    );
  background-size:
    24px 24px,
    100% 100%,
    100% 100%,
    100% 100%;
  view-transition-name: deck-bg;
}
</style>
