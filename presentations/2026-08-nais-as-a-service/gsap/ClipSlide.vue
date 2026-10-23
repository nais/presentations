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
      @ended="(e) => e.target.classList.add('heartbeat')"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useIsSlideActive, useNav } from "@slidev/client";
import clip from "../assets/naas-growth.mp4";
import poster from "../assets/naas-growth-poster.jpg";
import { reducedMotion } from "./motion.js";

const { isPrintMode } = useNav();
const active = useIsSlideActive();
const video = ref();
// Reduced motion: show the poster instead of autoplaying the clip.
const reduced = reducedMotion();

// Restart from the beginning every time the slide is entered.
watch(
  [active, video],
  ([on, el]) => {
    if (!el) return;
    el.classList.remove("heartbeat");
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
</style>
