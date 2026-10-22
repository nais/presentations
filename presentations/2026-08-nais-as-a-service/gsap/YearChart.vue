<template>
  <div ref="root" class="years" data-motion-self>
    <div class="head">
      <span class="metric">{{ METRICS[metric].label }}</span>
    </div>
    <div class="bars">
      <div v-for="y in rows" :key="y.year" class="col">
        <span class="val">{{ y.value === null ? "" : fmt(y.value) }}</span>
        <div
          class="bar"
          :class="{ ghost: y.value === null }"
          :style="{ height: y.h + '%' }"
        />
        <span class="yr">{{ y.year }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import gsap from "gsap";
import { useEnter } from "./motion.js";

// Yearly growth. Fill in verified numbers here; null renders a dashed ghost bar.
// 2026: Mimir (Nav, all environments), week ending 2026-10-15.
const METRICS = {
  // Anslag. The shape follows Nav's yearly average deploys per week
  // (2015 ≈10 … 2025 ≈2 700), scaled so 2026 lands on today's ≈21 500 per
  // week across all environments (Mimir, 2026-10-21).
  deploys: {
    label: "Deployer per uke i Nav (anslag, alle miljøer)",
    data: {
      2016: 100,
      2017: 300,
      2018: 1100,
      2019: 4400,
      2020: 8800,
      2021: 9200,
      2022: 12700,
      2023: 14700,
      2024: 18400,
      2025: 19900,
      2026: 21500,
    },
  },
  // Anslag, interpolated between ≈1 300 (2022, Ship It #78) and 5 212 (2026).
  apps: {
    label: "Apper (anslag)",
    data: {
      2016: 120,
      2017: 200,
      2018: 380,
      2019: 770,
      2020: 1080,
      2021: 1110,
      2022: 1300,
      2023: 1840,
      2024: 2600,
      2025: 3680,
      2026: 5212,
    },
  },
  teams: { label: "Team", data: {} },
};

const props = defineProps({
  metric: { type: String, default: "deploys" },
});

const fmt = (v) => v.toLocaleString("nb-NO").replace(/\s/g, "\u00a0");
const rows = computed(() => {
  const d = METRICS[props.metric].data;
  const entries = Object.entries(d);
  const max = Math.max(1, ...Object.values(d).filter((v) => v !== null));
  const known = entries
    .map(([y, v]) => [Number(y), v])
    .filter(([, v]) => v !== null);
  // Ghost bars follow a straight line between known years (low before the
  // first one), so they never suggest more than the real data points.
  const guess = (y) => {
    const after = known.find(([ky]) => ky > y);
    const before = [...known].reverse().find(([ky]) => ky < y);
    if (!before)
      return after ? (after[1] * 0.5 * (y - 2015)) / (after[0] - 2015) : 0;
    if (!after) return before[1];
    return (
      before[1] +
      ((after[1] - before[1]) * (y - before[0])) / (after[0] - before[0])
    );
  };
  return entries.map(([year, value]) => ({
    year,
    value,
    h: Math.max(4, ((value ?? guess(Number(year))) / max) * 100),
  }));
});

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(
    q(".bar"),
    { scaleY: 0, transformOrigin: "50% 100%", stagger: 0.06, duration: 0.6 },
    0.3,
  ).from(q(".val"), { autoAlpha: 0 }, "-=0.3");
  return tl;
});
</script>

<style scoped>
.years {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.metric {
  font-weight: 700;
  font-size: 0.9rem;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 84px;
}

.col {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.bar {
  width: 100%;
  border-radius: 6px 6px 0 0;
  background: linear-gradient(
    180deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.bar.ghost {
  background: transparent;
  border: 2px dashed #64748b;
  border-bottom: none;
}

.val {
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.yr {
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
  margin-top: 0.2rem;
}
</style>
