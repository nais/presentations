<template>
  <div class="count" data-motion-count>
    <StatHighlight :number="prefix + display" :label="label" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useIsSlideActive } from "@slidev/client";
import gsap from "gsap";
import StatHighlight from "../components/StatHighlight.vue";
import { reducedMotion } from "./motion.js";

const props = defineProps({
  number: { type: [String, Number], required: true },
  label: { type: String, required: true },
  delay: { type: Number, default: 0 },
  prefix: { type: String, default: "" },
});

const target = Number(props.number);
// Narrow no-break space as thousands separator; reads tighter than nb-NO default.
const fmt = (v) =>
  Math.round(v).toLocaleString("nb-NO").replace(/\s/g, "\u202f");
const display = ref(fmt(target));
const state = { v: target };
const active = useIsSlideActive();

watch(
  active,
  (on) => {
    gsap.killTweensOf(state);
    if (!on || reducedMotion()) return (display.value = fmt(target));
    state.v = 0;
    display.value = fmt(0);
    gsap.to(state, {
      v: target,
      duration: 1.6,
      delay: 0.3 + props.delay,
      ease: "power2.out",
      onUpdate: () => (display.value = fmt(state.v)),
    });
  },
  { immediate: true },
);
</script>

<style scoped>
.count :deep(.stat-number) {
  font-family: "Poppins", sans-serif;
  font-variant-numeric: tabular-nums;
  font-size: 3rem;
}
</style>
