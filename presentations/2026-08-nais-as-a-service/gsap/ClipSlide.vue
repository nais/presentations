<template>
  <div class="clip-slide" data-motion-self>
    <img
      v-if="isPrintMode || reduced"
      :src="poster"
      alt=""
      class="clip-media"
    />
    <video
      v-else
      ref="video"
      :src="clip"
      :poster="poster"
      class="clip-media"
      muted
      playsinline
      preload="auto"
      @ended="beating = true"
    />
    <!-- After the clip: waves roll out from the hub (the heart) through the
         country's cells to the far north, masked to the cells. -->
    <div
      v-if="beating"
      class="clip-pulse"
      :style="{ '--mask': `url(${mask})` }"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useIsSlideActive, useNav } from "@slidev/client";
import clip from "../assets/naas-growth.mp4";
import poster from "../assets/naas-growth-poster.jpg";
import mask from "../assets/naas-growth-mask.png";
import { reducedMotion } from "./motion.js";

const { isPrintMode } = useNav();
const active = useIsSlideActive();
const video = ref();
const beating = ref(false);
// Reduced motion: show the poster instead of autoplaying the clip.
const reduced = reducedMotion();

// Restart from the beginning every time the slide is entered.
watch(
  [active, video],
  ([on, el]) => {
    if (!el) return;
    beating.value = false;
    if (!on) return el.pause();
    el.currentTime = 0;
    el.play().catch(() => {});
  },
  { immediate: true },
);
</script>

<style scoped>
.clip-slide {
  position: absolute;
  inset: 0;
  background: #000;
}

.clip-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Hub sits at 39.4 % / 66.1 % of the frame (see the Motion Canvas scene).
   A soft ring grows from the hub across the mask, fades, and the next one
   follows: blood rushing out through every vein. It continues the ripple
   the clip used to end with (same accent, ring by ring from the hub). The
   mask's cells are only about 30 % bright, so the visible peak stays faint. */
@property --wave {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
.clip-pulse {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: screen;
  background: radial-gradient(
    circle at 39.4% 66.1%,
    transparent calc(var(--wave) - 12%),
    rgba(232, 56, 79, 0.9) calc(var(--wave) - 4%),
    rgba(255, 110, 140, 1) var(--wave),
    transparent calc(var(--wave) + 5%)
  );
  mask: var(--mask) center / cover no-repeat luminance;
  animation: clip-wave 3.4s linear infinite;
}
@keyframes clip-wave {
  0% {
    --wave: 0%;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.3, 0.1, 0.4, 1);
  }
  6% {
    opacity: 1;
  }
  45% {
    opacity: 0.85;
  }
  60% {
    --wave: 62%;
    opacity: 0;
  }
  100% {
    --wave: 62%;
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .clip-pulse {
    display: none;
  }
}
</style>
