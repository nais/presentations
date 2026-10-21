<template>
  <div ref="root" class="years" data-motion-self>
    <div class="head">
      <span class="metric">{{ METRICS[metric].label }}</span>
      <span v-if="hasGaps" class="ph-tag">PLASSHOLDER: årstall fra Nais-teamet</span>
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
  deploys: {
    label: "Deployer per uke i Nav",
    data: {
      2016: null,
      2017: null,
      2018: null,
      2019: null,
      2020: null,
      2021: null,
      2022: null,
      2023: null,
      2024: null,
      2025: null,
      2026: 21500,
    },
  },
  apps: { label: "Apper", data: {} },
  teams: { label: "Team", data: {} },
};

const props = defineProps({
  metric: { type: String, default: "deploys" },
});

const fmt = (v) => v.toLocaleString("nb-NO").replace(/\s/g, " ");
const rows = computed(() => {
  const d = METRICS[props.metric].data;
  const max = Math.max(1, ...Object.values(d).filter((v) => v !== null));
  return Object.entries(d).map(([year, value], i, all) => ({
    year,
    value,
    // Ghost bars show an even rising shape, clearly not data.
    h: value === null ? 15 + (60 * i) / all.length : (value / max) * 100,
  }));
});
const hasGaps = computed(() => rows.value.some((r) => r.value === null));

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(
    q(".bar"),
    { scaleY: 0, transformOrigin: "50% 100%", stagger: 0.06, duration: 0.6 },
    0.3,
  ).from(q(".val, .ph-tag"), { autoAlpha: 0 }, "-=0.3");
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

.ph-tag {
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  border: 2px dashed #d97706;
  background: #fffbeb;
  color: #92400e;
  font-size: 0.72rem;
}

.bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 140px;
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
