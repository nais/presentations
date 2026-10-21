<template>
  <div
    ref="root"
    class="split"
    data-motion-self
    :style="{
      gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
    }"
  >
    <section v-for="c in columns" :key="c.title" class="col" :class="c.tone">
      <header><span :class="c.icon" /> {{ c.title }}</header>
      <ul>
        <li v-for="it in c.items" :key="it">{{ it }}</li>
      </ul>
      <p v-if="c.note" class="note">{{ c.note }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { RISE, STAGGER, useEnter } from "./motion.js";

// Side-by-side columns. tone: 'good' | 'bad' | '' (neutral).
defineProps({
  columns: { type: Array, required: true },
});

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  q(".col").forEach((col, i) => {
    tl.from(col, { y: RISE, autoAlpha: 0 }, i * 0.15).from(
      col.querySelectorAll("li, .note"),
      { x: -12, autoAlpha: 0, stagger: STAGGER },
      i * 0.15 + 0.2,
    );
  });
  return tl;
});
</script>

<style scoped>
.split {
  display: grid;
  gap: 1.25rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.col {
  border-radius: 16px;
  padding: 1rem 1.1rem;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.col.good {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.col.bad {
  background: #fef2f2;
  border-color: #fecaca;
}

header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}

.good header {
  color: #166534;
}

.bad header {
  color: #991b1b;
}

ul {
  margin: 0;
  padding-left: 1.1rem;
  list-style: disc;
}

li {
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 0.3rem;
}

.note {
  margin: 0.6rem 0 0;
  font-size: 0.8rem;
  color: var(--nais-text-secondary);
}
</style>
