<template>
  <div ref="root" class="who" data-motion-self>
    <div class="lane yes">
      <h3><span class="i-carbon-checkmark-filled" /> Passer</h3>
    </div>
    <div class="lane no">
      <h3><span class="i-carbon-close-filled" /> Passer ikke</h3>
    </div>
    <div
      v-for="(c, i) in CHIPS"
      :key="c.t"
      class="chip"
      :class="c.ok ? 'ok' : 'nok'"
      :style="slot(i)"
    >
      {{ c.t }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, useSteps } from "./motion.js";

// s0: all candidates in one mixed pile. s1: they sort into two lanes.
const CHIPS = [
  { t: "Departementer", ok: true },
  { t: "Kommuner", ok: false },
  { t: "Direktorater", ok: true },
  { t: "Etater og tilsyn", ok: true },
  { t: "Statsforetak", ok: false },
  { t: "Forvaltningsbedrifter", ok: true },
  { t: "Private selskaper", ok: false },
  { t: "Forvaltningsorganer med særskilte fullmakter", ok: true },
  { t: "Skjermingsverdig informasjon", ok: false },
  { t: "Statlige ombud", ok: true },
  { t: "Må kjøre i eget datasenter", ok: false },
];
// Lane slots: «passer» on the left, «passer ikke» on the right.
const rank = CHIPS.map(
  (c, i) => CHIPS.slice(0, i).filter((d) => d.ok === c.ok).length,
);
const W = 900; // container width (max-width below; the slide canvas is fixed)
const top = (i) => 54 + rank[i] * 43;
const slot = (i) => ({
  left: CHIPS[i].ok ? "25%" : "75%",
  top: top(i) + "px",
});

const root = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const chips = q(".chip");
  // The pile: chips scattered around the centre, slightly rotated.
  const pile = CHIPS.map((c, i) => ({
    x: (CHIPS[i].ok ? 0.25 : -0.25) * W + ((i % 2) - 0.5) * 300,
    y: 56 + Math.floor(i / 2) * 44 - top(i),
    rotation: ((i * 37) % 7) - 3,
  }));
  gsap.set(q(".lane"), { autoAlpha: 0 });
  gsap.set(chips, { xPercent: -50 });
  tl.fromTo(
    chips,
    {
      x: (i) => pile[i].x,
      y: (i) => pile[i].y - 40,
      rotation: 0,
      autoAlpha: 0,
    },
    {
      x: (i) => pile[i].x,
      y: (i) => pile[i].y,
      rotation: (i) => pile[i].rotation,
      autoAlpha: 1,
      stagger: 0.05,
      ease: POP,
    },
  )
    .addLabel("s0")
    .to(q(".lane"), { autoAlpha: 1, duration: 0.3 })
    // Anticipation: the pile tightens, then each chip flies to its lane.
    .to(chips, { scale: 0.92, duration: 0.12, ease: "power1.in" }, "<")
    .to(chips, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.3)",
      stagger: 0.05,
    })
    .to(q(".chip.nok"), { opacity: 0.75, duration: 0.3 }, "-=0.2")
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.who {
  position: relative;
  width: 900px;
  max-width: 100%;
  height: 340px;
  margin: 0 auto;
}

.lane {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 46%;
  border-radius: 16px;
  border: 1px dashed var(--nais-border);
}

.lane.yes {
  left: 2%;
  border-color: rgb(52 211 153 / 0.5);
}

.lane.no {
  right: 2%;
  border-color: rgb(248 113 113 / 0.5);
}

.lane h3 {
  margin: 0.6rem 0 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
}

.yes h3 span {
  color: var(--nais-success);
}

.no h3 span {
  color: #f87171;
}

.chip {
  position: absolute;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.chip.ok {
  border-color: rgb(52 211 153 / 0.6);
}

.chip.nok {
  border-color: rgb(248 113 113 / 0.6);
}
</style>
