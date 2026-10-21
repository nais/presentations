<template>
  <div ref="root" class="meter" data-motion-self>
    <div class="bar">
      <div
        v-for="(p, i) in parts"
        :key="p.label"
        class="seg"
        :style="{ flexGrow: p.value, background: shades[i % shades.length] }"
      >
        <span>{{ fmt(p.value) }}</span>
      </div>
    </div>
    <div class="legend">
      <div v-for="(p, i) in parts" :key="p.label">
        <i :style="{ background: shades[i % shades.length] }" />{{ p.label }}
      </div>
    </div>
    <div class="total">
      <span ref="total">{{ fmt(sum) }}</span> {{ unit }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { STAGGER, useEnter } from "./motion.js";

const props = defineProps({
  parts: { type: Array, required: true },
  unit: { type: String, default: "kr/mnd" },
});

const shades = ["#9f1239", "#e8384f", "#be123c", "#f43f5e"];
const fmt = (v) => Math.round(v).toLocaleString("nb-NO").replace(/\s/g, " ");
const sum = props.parts.reduce((a, p) => a + p.value, 0);
const root = ref();
const total = ref();

useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  const t = { v: 0 };
  tl.from(q(".seg"), {
    scaleX: 0,
    transformOrigin: "0 50%",
    stagger: STAGGER * 4,
    duration: 0.6,
  })
    .from(q(".legend > div"), { autoAlpha: 0, y: 10, stagger: STAGGER }, 0.2)
    .to(
      t,
      {
        v: sum,
        duration: 1.2,
        onUpdate: () => (total.value.textContent = fmt(t.v)),
      },
      0.2,
    );
  return tl;
});
</script>

<style scoped>
.meter {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.bar {
  display: flex;
  gap: 4px;
  height: 54px;
}

.seg {
  flex-basis: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.25rem;
  margin-top: 0.7rem;
  font-size: 0.8rem;
}

.legend i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  margin-right: 0.4rem;
}

.total {
  margin-top: 1rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
}

.total span {
  font-size: 2.6rem;
  color: var(--nais-accent);
  font-variant-numeric: tabular-nums;
}
</style>
