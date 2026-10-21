<template>
  <div ref="root" class="stack" data-motion-self>
    <div ref="appEl" class="layer app">
      <span class="i-carbon-application" /> {{ app }}
    </div>
    <div ref="below" class="below">
      <div v-for="l in layers" :key="l.name" class="layer">
        <strong>{{ l.name }}</strong>
        <span class="parts">{{ l.parts }}</span>
      </div>
      <div ref="badgeEl" class="badge">{{ badge }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { STAGGER, useSteps, POP } from "./motion.js";

// Layers listed top to bottom. s0 builds the stack, s1 lands the app, s2 dims the rest.
defineProps({
  layers: { type: Array, required: true },
  app: { type: String, default: "Appen deres" },
  badge: { type: String, default: "Dette drifter Nais-teamet" },
});

const root = ref();
const appEl = ref();
const below = ref();
const badgeEl = ref();

useSteps((tl) => {
  const layers = [...below.value.querySelectorAll(".layer")].reverse();
  gsap.set(layers, { y: -60, autoAlpha: 0 });
  gsap.set(appEl.value, { y: -120, autoAlpha: 0 });
  gsap.set(badgeEl.value, { autoAlpha: 0, scale: 0.8 });
  tl.to(layers, {
    y: 0,
    autoAlpha: 1,
    stagger: STAGGER * 1.5,
    ease: POP,
  })
    .addLabel("s0")
    .to(appEl.value, { y: 0, autoAlpha: 1, ease: POP, duration: 0.9 })
    .addLabel("s1")
    .to(layers, {
      opacity: 0.35,
      filter: "grayscale(1)",
      stagger: STAGGER / 2,
      duration: 0.5,
    })
    .to(badgeEl.value, { autoAlpha: 1, scale: 1, ease: POP }, "<0.2")
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.stack {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.below {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.layer {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.3rem 0.9rem;
  border-radius: 10px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
  font-size: 1rem;
}

.layer strong {
  font-family: "Poppins", sans-serif;
  min-width: 15rem;
}

.parts {
  color: var(--nais-text-secondary);
  font-size: 0.85rem;
}

.layer.app {
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
  border: none;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.badge {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--nais-accent);
  border-radius: 999px;
  background: var(--nais-bg);
  color: var(--nais-accent);
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.08);
}
</style>
