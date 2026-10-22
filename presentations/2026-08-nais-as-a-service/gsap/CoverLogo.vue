<template>
  <!-- A field of hexes assembles into the Nais mark, then the real logo takes over. -->
  <div ref="root" class="cover-logo" data-motion-self>
    <i
      v-for="(c, i) in CELLS"
      :key="i"
      class="hx"
      :class="{ part: i < LOGO.length }"
      :style="c"
    />
    <img ref="logo" src="/logos/nais-v2-rosa.svg" alt="nais" class="mark" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { LOGO } from "./logo.js";
import { useEnter } from "./motion.js";

const STEP_X = 30;
const STEP_Y = 26;
// The logo cells, plus decoys that fly through and fade out.
const CELLS = [
  ...LOGO.map(([c, r]) => ({
    left: 90 + c * STEP_X + "px",
    top: 12 + r * STEP_Y + "px",
  })),
  ...Array.from({ length: 21 }, () => ({ left: "90px", top: "90px" })),
];

const root = ref();
const logo = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  const parts = q(".hx.part");
  const decoys = q(".hx:not(.part)");
  const spread = (i) => ({
    x: Math.cos(i * 2.4) * (400 + (i % 5) * 60),
    y: Math.sin(i * 2.4) * (220 + (i % 4) * 40),
  });
  gsap.set(logo.value, { autoAlpha: 0, scale: 0.9 });
  tl.from(parts, {
    x: (i) => spread(i).x,
    y: (i) => spread(i).y,
    rotation: 90,
    autoAlpha: 0,
    duration: 1,
    ease: "power3.out",
    stagger: { each: 0.04, from: "random" },
  })
    .fromTo(
      decoys,
      { x: (i) => spread(i + 15).x, y: (i) => spread(i + 15).y, autoAlpha: 0 },
      {
        x: (i) => spread(i + 15).x * 0.3,
        y: (i) => spread(i + 15).y * 0.3,
        autoAlpha: 0.5,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.02,
      },
      0,
    )
    .to(decoys, { autoAlpha: 0, scale: 0.4, duration: 0.4 }, 1.3)
    // Settle: the cells pulse once, then hand over to the real logo.
    .to(parts, {
      scale: 1.15,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      stagger: 0.01,
    })
    .to(parts, { autoAlpha: 0, duration: 0.4 })
    .to(
      logo.value,
      { autoAlpha: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
      "<",
    );
  return tl;
});
</script>

<style scoped>
.cover-logo {
  position: relative;
  width: 180px;
  height: 180px;
}

.hx {
  position: absolute;
  width: 26px;
  height: 30px;
  translate: -50% -50%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #ff3377;
}

.hx:not(.part) {
  background: #334155;
}

.mark {
  position: absolute;
  inset: 0;
  margin: auto;
  max-height: 180px;
}
</style>
