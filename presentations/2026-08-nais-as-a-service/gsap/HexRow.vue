<template>
  <div ref="root" class="hex-row" data-motion-self>
    <div class="hex-line" :style="{ left: edge, right: edge }">
      <div ref="line" class="hex-line-fill" />
    </div>
    <div v-for="it in items" :key="it.title" class="hex-item">
      <ValuePillar
        :icon="it.icon"
        :title="it.title"
        :description="it.description"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useIsSlideActive } from "@slidev/client";
import gsap from "gsap";
import ValuePillar from "../components/ValuePillar.vue";
import { DUR, EASE, RISE, STAGGER, reducedMotion } from "./motion.js";

const props = defineProps({
  items: { type: Array, required: true },
});

// Line runs from the first hexagon centre to the last.
const edge = `${50 / props.items.length}%`;
const root = ref();
const line = ref();
const active = useIsSlideActive();
let tl;

onMounted(() => {
  const q = gsap.utils.selector(root.value);
  tl = gsap
    .timeline({ paused: true, defaults: { ease: EASE, duration: DUR } })
    .from(
      line.value,
      {
        scaleX: 0,
        transformOrigin: "0 50%",
        duration: DUR * 2,
        ease: "power2.inOut",
      },
      0.2,
    )
    .from(
      q(".pillar-hex-wrapper"),
      { scale: 0.6, autoAlpha: 0, stagger: STAGGER * 2, ease: "back.out(1.7)" },
      0.2,
    )
    .from(
      q(".pillar-title, .pillar-desc"),
      { y: RISE, autoAlpha: 0, stagger: STAGGER },
      0.45,
    );
  watch(
    active,
    (on) => (on && !reducedMotion() ? tl.restart() : tl.progress(1).pause()),
    { immediate: true },
  );
});

onBeforeUnmount(() => tl?.kill());
</script>

<style scoped>
.hex-row {
  position: relative;
  display: flex;
  width: 100%;
}

.hex-item {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
}

.hex-line {
  position: absolute;
  top: 58px;
  height: 4px;
  z-index: 1;
}

.hex-line-fill {
  height: 100%;
  border-radius: 2px;
  background: var(--nais-border, #e2e8f0);
}
</style>
