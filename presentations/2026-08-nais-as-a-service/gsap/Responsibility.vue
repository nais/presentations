<template>
  <div ref="root" class="resp" data-motion-self>
    <section
      v-for="(side, k) in sides"
      :key="side.title"
      class="side"
      :class="k ? 'nais' : 'agency'"
    >
      <header><span :class="side.icon" /> {{ side.title }}</header>
      <ul>
        <li v-for="it in side.items" :key="it">
          <span class="i-carbon-checkmark" /> {{ it }}
        </li>
      </ul>
    </section>
    <div ref="line" class="divider" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { STAGGER, useSteps } from "./motion.js";

// s0: both headers. s1: the agency side fills. s2: the Nais side fills.
defineProps({
  sides: { type: Array, required: true },
});

const root = ref();
const line = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const [left, right] = q(".side");
  gsap.set(q("li"), { autoAlpha: 0 });
  gsap.set(left.querySelectorAll("li"), { x: -24 });
  gsap.set(right.querySelectorAll("li"), { x: 24 });
  tl.from(line.value, { scaleY: 0, transformOrigin: "50% 0%" })
    .from(q("header"), { autoAlpha: 0, y: -16, stagger: STAGGER }, "<0.2")
    .addLabel("s0")
    .to(left.querySelectorAll("li"), { autoAlpha: 1, x: 0, stagger: STAGGER })
    .addLabel("s1")
    .to(right.querySelectorAll("li"), { autoAlpha: 1, x: 0, stagger: STAGGER })
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.resp {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
}

.divider {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 2px;
  background: var(--nais-border);
}

header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.nais header {
  color: var(--nais-accent);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.8rem;
  margin-bottom: 0.45rem;
  border-radius: 10px;
  font-size: 1.1rem;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.nais li {
  background: var(--nais-accent-light);
  border-color: #fecdd3;
}

li span {
  color: var(--nais-success);
}

.nais li span {
  color: var(--nais-accent);
}
</style>
