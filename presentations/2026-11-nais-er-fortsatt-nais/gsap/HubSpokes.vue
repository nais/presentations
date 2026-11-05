<template>
  <div ref="root" class="hub-wrap" data-motion-self>
    <svg
      class="spokes"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        v-for="(s, i) in spokes"
        :key="s.title"
        x1="50"
        y1="50"
        :x2="pos(i).x"
        :y2="pos(i).y"
      />
    </svg>
    <div class="center" :style="{ left: '50%', top: '50%' }">
      <span :class="centerIcon" />
      <strong>{{ center }}</strong>
    </div>
    <div
      v-for="(s, i) in spokes"
      :key="s.title"
      class="spoke"
      :style="{ left: pos(i).x + '%', top: pos(i).y + '%' }"
    >
      <header><span :class="s.icon" /> {{ s.title }}</header>
      <p v-if="s.text">{{ s.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useEnter } from "./motion.js";

// A centre with satellites on an ellipse. Used for "Hva er Nais" and support.
const props = defineProps({
  center: { type: String, required: true },
  centerIcon: { type: String, default: "" },
  spokes: { type: Array, required: true },
  start: { type: Number, default: -90 },
});

const pos = (i) => {
  const a = ((props.start + (i * 360) / props.spokes.length) * Math.PI) / 180;
  return { x: 50 + 36 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
};

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".center"), { scale: 0.5, autoAlpha: 0, ease: POP })
    .from(
      q(".spokes line"),
      { attr: { x2: 50, y2: 50 }, stagger: STAGGER, duration: 0.5 },
      "-=0.2",
    )
    .from(
      q(".spoke"),
      { scale: 0.7, autoAlpha: 0, stagger: STAGGER * 1.5, ease: POP },
      "<0.2",
    );
  return tl;
});
</script>

<style scoped>
.hub-wrap {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 330px;
  margin: 0 auto;
}

.spokes {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.spokes line {
  stroke: var(--nais-accent);
  stroke-width: 2;
  opacity: 0.5;
  vector-effect: non-scaling-stroke;
}

.center,
.spoke {
  position: absolute;
  translate: -50% -50%;
}

.center {
  width: 120px;
  height: 136px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center span {
  font-size: 2rem;
}

.center strong {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
}

.spoke {
  width: 15rem;
  padding: 0.6rem 0.8rem;
  border-radius: 14px;
  background: var(--nais-bg);
  border: 2px solid var(--nais-border);
  text-align: center;
}

.spoke header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
}

.spoke header span {
  color: var(--nais-accent);
}

.spoke p {
  margin: 0.2rem 0 0;
  font-size: 0.85rem;
  line-height: 1.35;
  color: var(--nais-text-secondary);
}
</style>
