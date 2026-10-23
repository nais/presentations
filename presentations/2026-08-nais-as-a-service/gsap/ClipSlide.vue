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
   follows: blood rushing out through every vein. The mask's cells are
   only about 30 % bright, so the visible peak stays near 0.3. */
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
    transparent calc(var(--wave) - 9%),
    rgba(255, 70, 110, 0.9) calc(var(--wave) - 2%),
    rgba(92, 178, 218, 0.7) var(--wave),
    transparent calc(var(--wave) + 6%)
  );
  mask: var(--mask) center / cover no-repeat luminance;
  animation: clip-wave 3.6s cubic-bezier(0.3, 0.1, 0.4, 1) infinite;
}
@keyframes clip-wave {
  0% {
    --wave: 0%;
    opacity: 0;
  }
  10% {
    opacity: 0.95;
  }
  75% {
    opacity: 0.7;
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
