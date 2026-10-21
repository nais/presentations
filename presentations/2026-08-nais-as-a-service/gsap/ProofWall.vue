<template>
  <div ref="root" class="proof" data-motion-self>
    <div class="tiles">
      <div v-for="t in tiles" :key="t.label" class="tile">
        <div class="value">{{ t.value || "—" }}</div>
        <div class="label">{{ t.label }}</div>
        <div v-if="!t.value" class="need">PLASSHOLDER: {{ t.need }}</div>
      </div>
    </div>
    <blockquote class="quote">
      <span class="mark">«</span>
      <p v-if="quote.text">{{ quote.text }}</p>
      <p v-else class="need">PLASSHOLDER: {{ quote.need }}</p>
      <footer>{{ quote.by || "Navn, rolle, etat" }}</footer>
    </blockquote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { RISE, STAGGER, useEnter, POP } from "./motion.js";

// Final layout: fill in value/text and the placeholder notes disappear.
defineProps({
  tiles: { type: Array, required: true },
  quote: { type: Object, required: true },
});

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".tile"), { y: RISE, autoAlpha: 0, stagger: STAGGER * 2 })
    .from(q(".value"), { scale: 0.6, ease: POP, stagger: STAGGER * 2 }, "<0.1")
    .from(q(".quote"), { y: RISE, autoAlpha: 0 }, "-=0.3")
    .from(q(".mark"), { scale: 0, rotation: -30, ease: POP }, "<0.2");
  return tl;
});
</script>

<style scoped>
.proof {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.tile {
  padding: 1rem;
  border-radius: 16px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
  text-align: center;
}

.value {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  color: var(--nais-accent);
}

.label {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;
}

.need {
  margin-top: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 2px dashed #d97706;
  border-radius: 8px;
  background: #fffbeb;
  color: #92400e;
  font-size: 0.75rem;
}

.quote {
  position: relative;
  margin: 0;
  padding: 1rem 1.5rem 1rem 4.5rem;
  border-radius: 16px;
  background: var(--nais-surface);
}

.mark {
  position: absolute;
  left: 1rem;
  top: 0.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  line-height: 1;
  color: var(--nais-accent);
}

.quote p {
  margin: 0;
  font-size: 1.1rem;
}

.quote footer {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--nais-text-secondary);
}
</style>
