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
      :style="{ left: c.x + 'px', top: c.y + 'px' }"
    />
    <span class="tag tnav" :style="tagAt(NAV)">Nav</span>
    <span class="tag tyou" :style="tagAt(YOU)">Dere</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import {
  NORWAY,
  SPACING,
} from "../../../animations/naas-motion-canvas/src/norway.ts";
import { POP, useEnter } from "./motion.js";

// Scale the lattice into a 230 x 270 box (Norway's bounding box, y down).
const xs = NORWAY.map((p) => p[0]);
const ys = NORWAY.map((p) => p[1]);
const K = 270 / (Math.max(...ys) - Math.min(...ys) + SPACING);
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
const tagAt = (i) => ({ left: CELLS[i].x + "px", top: CELLS[i].y + "px" });

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".cell:not(.you)"), {
    scale: 0,
    autoAlpha: 0,
    duration: 0.4,
    stagger: { each: 0.004, from: "end" },
    ease: POP,
  })
    .from(q(".tnav"), { autoAlpha: 0, duration: 0.3 })
    // The «Dere» cell arrives with the travelling hex; it just glows here.
    .to(
      q(".you"),
      { boxShadow: "0 0 16px 4px rgb(255 51 119 / 0.6)", duration: 0.4 },
      "+=0.2",
    )
    .from(q(".tyou"), { autoAlpha: 0, duration: 0.3 }, "<");
  return tl;
});
</script>

<style scoped>
.honey {
  position: relative;
  width: 230px;
  height: 280px;
  flex: none;
}

.cell {
  position: absolute;
  width: 7.8px;
  height: 9px;
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
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
}

.tnav {
  translate: 10px -50%;
  color: #5cb2da;
}

.tyou {
  translate: calc(-100% - 10px) -50%;
  color: #ff3377;
}
</style>
