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
    <!-- After the clip: a pulse spreads from the hub, masked to the country's cells. -->
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

/* Hub sits at 39.4 % / 66.1 % of the frame (see the Motion Canvas scene). */
.clip-pulse {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: screen;
  background: radial-gradient(
    circle at 39.4% 66.1%,
    rgba(255, 70, 110, 0.95) 0,
    rgba(255, 70, 110, 0.55) 18%,
    rgba(255, 70, 110, 0) 60%
  );
  mask: var(--mask) center / cover no-repeat luminance;
  animation: clip-pulse 2.4s ease-in-out infinite;
  opacity: 0;
}
@keyframes clip-pulse {
  0%,
  45%,
  100% {
    opacity: 0;
  }
  14% {
    opacity: 0.3;
  }
  26% {
    opacity: 0.08;
  }
  34% {
    opacity: 0.18;
  }
}
@media (prefers-reduced-motion: reduce) {
  .clip-pulse {
    display: none;
  }
}
</style>
