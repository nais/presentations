<template>
  <div data-motion-count>
    <StatHighlight :number="display" :label="label" />
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
});

const target = Number(props.number);
const fmt = (v) => Math.round(v).toLocaleString("nb-NO");
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
