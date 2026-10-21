<template>
  <div ref="root" class="chart" data-motion-self>
    <div class="bars">
      <div v-for="w in WEEKS" :key="w.week" class="col">
        <div class="stack" :style="{ height: `${(w.all / max) * 100}%` }">
          <div class="other" :style="{ flexGrow: w.all - w.prod }" />
          <div class="prod" :style="{ flexGrow: w.prod }" />
        </div>
        <span class="x">{{ w.week.slice(8, 10) }}.{{ w.week.slice(5, 7) }}</span>
      </div>
    </div>
    <div class="legend">
      <i class="prod" /> prod <i class="other" /> dev og andre miljøer ·
      vellykkede deployer per uke i Nav
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useEnter } from "./motion.js";

// Mimir (Nav), sum(increase(deployment_hookd_state_transition{deployment_state="success"}[1w])),
// by cluster, hentet 2026-10-21. prod = prod + prod-fss, all = alle clustere.
const WEEKS = [
  { week: "2026-08-06", prod: 7160, all: 16444 },
  { week: "2026-08-13", prod: 8862, all: 21797 },
  { week: "2026-08-20", prod: 9640, all: 23867 },
  { week: "2026-08-27", prod: 9889, all: 23768 },
  { week: "2026-09-03", prod: 9996, all: 24341 },
  { week: "2026-09-10", prod: 10081, all: 24457 },
  { week: "2026-09-17", prod: 9275, all: 23027 },
  { week: "2026-09-24", prod: 9880, all: 24583 },
  { week: "2026-10-01", prod: 9570, all: 23333 },
  { week: "2026-10-08", prod: 9055, all: 21485 },
  { week: "2026-10-15", prod: 9004, all: 21517 },
];
const max = Math.max(...WEEKS.map((w) => w.all));

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(
    q(".stack"),
    { scaleY: 0, transformOrigin: "50% 100%", stagger: 0.06, duration: 0.8 },
    0.4,
  ).from(q(".legend"), { autoAlpha: 0 }, "-=0.3");
  return tl;
});
</script>

<style scoped>
.chart {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 120px;
}

.col {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.stack {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
}

.prod {
  background: var(--nais-accent);
}

.other {
  background: #fda4af;
}

.x {
  font-size: 0.6rem;
  color: var(--nais-text-secondary);
  margin-top: 0.2rem;
}

.legend {
  margin-top: 0.4rem;
  text-align: center;
  font-size: 0.7rem;
  color: var(--nais-text-secondary);
}

.legend i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  margin: 0 0.2rem 0 0.6rem;
  vertical-align: -1px;
}
</style>
