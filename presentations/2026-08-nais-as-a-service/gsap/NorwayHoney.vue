<template>
  <!-- Norway as a honeycomb (cells from the Motion Canvas clip). Nav sits at
       Oslo; the new tenant's cell lands next to it. -->
  <div ref="root" class="honey" data-motion-self aria-hidden="true">
    <i
      v-for="(c, i) in CELLS"
      :key="i"
      class="cell"
      :class="{ nav: i === NAV, you: i === YOU }"
      :data-anchor="i === YOU ? 'hex' : null"
      :style="{ left: c.x + 'px', top: c.y + 'px', '--d': c.d }"
    />
    <span class="tag tnav" :style="tagAt(NAV)">Nav</span>
    <span class="tag tyou" :style="tagAt(YOU)">Dere</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { NORWAY, SPACING } from "./norway.ts";
import { POP, reducedMotion, useEnter } from "./motion.js";

// Scale the lattice into a 328 x 380 box (Norway's bounding box, y down).
const xs = NORWAY.map((p) => p[0]);
const ys = NORWAY.map((p) => p[1]);
const K = 380 / (Math.max(...ys) - Math.min(...ys) + SPACING);
const CELLS = NORWAY.map(([x, y]) => ({
  x: (x - Math.min(...xs)) * K,
  y: (y - Math.min(...ys)) * K,
}));
const near = (x, y) =>
  NORWAY.reduce(
    (b, p, i) =>
      Math.hypot(p[0] - x, p[1] - y) <
      Math.hypot(NORWAY[b][0] - x, NORWAY[b][1] - y)
        ? i
        : b,
    0,
  );
const NAV = near(0, 0); // Oslo
const YOU = near(-SPACING, 0); // the neighbour cell to the west
// Distance from Nav (0..1), so a wave can travel out from the hub.
const DMAX = Math.max(
  ...CELLS.map((c) => Math.hypot(c.x - CELLS[NAV].x, c.y - CELLS[NAV].y)),
);
CELLS.forEach(
  (c) =>
    (c.d = (Math.hypot(c.x - CELLS[NAV].x, c.y - CELLS[NAV].y) / DMAX).toFixed(
      3,
    )),
);
const tagAt = (i) => ({ left: CELLS[i].x + "px", top: CELLS[i].y + "px" });

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.call(() => root.value.classList.remove("beat"));
  tl.from(q(".cell:not(.you)"), {
    scale: 0,
    autoAlpha: 0,
    duration: 0.3,
    stagger: { each: 0.0025, from: "end" },
    ease: POP,
  })
    .from(q(".tnav"), { autoAlpha: 0, duration: 0.3 })
    // The «Dere» cell arrives with the travelling hex; it just glows here.
    .to(
      q(".you"),
      { boxShadow: "0 0 16px 4px rgb(255 51 119 / 0.6)", duration: 0.4 },
      "+=0.2",
    )
    .from(q(".tyou"), { autoAlpha: 0, duration: 0.3 }, "<")
    // Once everything is in, the map beats softly. Print jumps to the end with
    // events suppressed, so the beat never starts there.
    .call(() => {
      if (!reducedMotion()) root.value.classList.add("beat");
    });
  return tl;
});
</script>

<style scoped>
.honey {
  position: relative;
  width: 328px;
  height: 390px;
  flex: none;
}

.cell {
  position: absolute;
  width: 11px;
  height: 12.7px;
  translate: -50% -50%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #334155;
}

.cell.nav {
  background: #5cb2da;
}

.cell.you {
  background: #ff3377;
}

.tag {
  position: absolute;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background: rgb(15 23 42 / 0.85);
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  white-space: nowrap;
}

.tnav {
  translate: 16px -120%;
  color: #5cb2da;
}

.tyou {
  translate: 16px 70%;
  color: #ff3377;
}

/* Waves roll out from Nav through the cells to the far north: each cell
   lights briefly, delayed by its distance from the hub. No scaling. */
.honey.beat .cell:not(.you):not(.nav) {
  animation: honey-wave 3.6s ease-in-out infinite;
  animation-delay: calc(var(--d) * 2.6s);
}
@keyframes honey-wave {
  0%,
  22%,
  100% {
    background: #334155;
  }
  8% {
    background: #7a3a5c;
  }
}
@media (prefers-reduced-motion: reduce) {
  .honey.beat .cell {
    animation: none;
  }
}
</style>
