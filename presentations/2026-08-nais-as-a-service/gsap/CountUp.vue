<template>
  <!-- The final value (widest digits) sizes the box invisibly; the ticking
       value sits on top, so neighbours never shift while it counts. Poppins
       has no tabular digits, hence the sizer. -->
  <div ref="root" class="count" data-motion-count>
    <StatHighlight
      class="sizer"
      :number="pre + fmt(target).replace(/\d/g, wide)"
      :label="label"
      aria-hidden="true"
    />
    <StatHighlight :number="pre + display" :label="label" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
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
// No-break space as thousands separator, and after a «≈» prefix (deck style «≈ 21 500»).
const fmt = (v) =>
  Math.round(v).toLocaleString("nb-NO").replace(/\s/g, "\u00a0");
// Widest digit in the counter's font, measured once, for the sizer.
const root = ref();
const wide = ref("0");
onMounted(() => {
  const el = root.value?.querySelector(".stat-number");
  if (!el) return;
  const ctx = globalThis.document.createElement("canvas").getContext("2d");
  ctx.font = globalThis.getComputedStyle(el).font;
  wide.value = [..."0123456789"].reduce((a, d) =>
    ctx.measureText(d).width > ctx.measureText(a).width ? d : a,
  );
});
const pre = props.prefix === "≈" ? "≈\u00a0" : props.prefix;
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
.count {
  display: grid;
}

.count > * {
  grid-area: 1 / 1;
}

.sizer {
  visibility: hidden;
}

.count :deep(.stat-number) {
  font-family: "Poppins", sans-serif;
  font-variant-numeric: tabular-nums;
  font-size: 3rem;
}
</style>
