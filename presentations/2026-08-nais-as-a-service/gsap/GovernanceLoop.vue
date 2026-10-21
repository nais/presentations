<template>
  <div ref="root" class="gov" data-motion-self>
    <div class="loop">
      <svg viewBox="0 0 300 300" aria-hidden="true">
        <path ref="ring" class="ring" d="M150 40 A110 110 0 1 1 149.99 40" />
        <circle ref="dot" r="8" class="dot" />
      </svg>
      <div v-for="(s, i) in STEPS" :key="s.label" class="step" :style="pos(i)">
        <span :class="s.icon" />
        <strong>{{ s.label }}</strong>
      </div>
    </div>
    <div class="queue">
      <h3>1–2 nye tenants per år</h3>
      <div class="lane">
        <div v-for="k in 5" :key="k" class="agency">
          <span class="i-carbon-building" />
        </div>
        <div ref="gate" class="gate" />
      </div>
      <p>Vi tar inn så mange som vi kan følge opp skikkelig</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { STAGGER, useEnter, POP } from "./motion.js";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

const STEPS = [
  { label: "Naisdag", icon: "i-carbon-group" },
  { label: "Innspill", icon: "i-carbon-chat" },
  { label: "Nais-teamet", icon: "i-carbon-user-multiple" },
  { label: "Veikart", icon: "i-carbon-map" },
  { label: "Leveranser", icon: "i-carbon-delivery" },
];
// Steps placed clockwise on the ring, starting at the top.
const pos = (i) => {
  const a = (i / STEPS.length) * Math.PI * 2 - Math.PI / 2;
  return {
    left: `${50 + 36.7 * Math.cos(a)}%`,
    top: `${50 + 36.7 * Math.sin(a)}%`,
  };
};

const root = ref();
const ring = ref();
const dot = ref();
const gate = ref();

useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  const agencies = q(".agency");
  tl.fromTo(
    ring.value,
    { drawSVG: "0%" },
    {
      drawSVG: "100%",
      duration: 1.2,
      ease: "power2.inOut",
    },
  )
    .from(
      q(".step"),
      { scale: 0.5, autoAlpha: 0, stagger: STAGGER * 2, ease: POP },
      0.3,
    )
    .from(dot.value, { autoAlpha: 0, duration: 0.2 }, 1)
    .to(
      dot.value,
      {
        motionPath: {
          path: ring.value,
          align: ring.value,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1,
        },
        duration: 3,
        ease: "none",
      },
      1,
    )
    .from(
      q(".queue h3, .queue p"),
      { autoAlpha: 0, y: 12, stagger: STAGGER },
      0.6,
    )
    .from(agencies, { x: -40, autoAlpha: 0, stagger: STAGGER }, 0.8)
    .to(
      gate.value,
      { scaleY: 0, transformOrigin: "50% 0%", duration: 0.3 },
      1.8,
    )
    .to(
      agencies.slice(-2),
      {
        x: 120,
        backgroundColor: "rgba(16,185,129,0.3)",
        stagger: 0.25,
        duration: 0.6,
      },
      2,
    )
    .to(gate.value, { scaleY: 1, duration: 0.3 }, 2.9);
  return tl;
});
</script>

<style scoped>
.gov {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.loop {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.loop svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.ring {
  fill: none;
  stroke: var(--nais-accent);
  stroke-width: 3;
  opacity: 0.6;
}

.dot {
  fill: var(--nais-accent);
}

.step {
  position: absolute;
  translate: -50% -50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.4rem 0.7rem;
  border-radius: 12px;
  background: var(--nais-bg);
  border: 2px solid var(--nais-border);
  white-space: nowrap;
}

.step span {
  font-size: 1.4rem;
  color: var(--nais-accent);
}

.step strong {
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
}

.queue h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  margin: 0 0 1rem;
}

.lane {
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem 6rem 0.6rem 0.6rem;
  border-radius: 14px;
  background: var(--nais-surface);
}

.agency {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-size: 1.4rem;
}

.gate {
  position: absolute;
  right: 5rem;
  top: 0;
  bottom: 0;
  width: 5px;
  border-radius: 3px;
  background: var(--nais-accent);
}

.queue p {
  margin: 0.8rem 0 0;
  font-size: 0.95rem;
  color: var(--nais-text-secondary);
}
</style>
