<template>
  <!-- Travelling hero hex: flies between elements marked data-anchor="hex". -->
  <div v-if="!isPrintMode" ref="stage" class="hero-stage" aria-hidden="true">
    <div ref="hex" class="hero-hex" />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import { useNav } from "@slidev/client";
import gsap from "gsap";
import { reducedMotion } from "./gsap/motion.js";

const { currentSlideNo, isPrintMode } = useNav();
const stage = ref();
const hex = ref();
let shown; // the anchor currently hidden behind the stage hex
let tween;
let parked = false; // the stage hex has a last known anchor position

const anchorOn = (no) =>
  [
    ...(stage.value?.ownerDocument.querySelectorAll(
      `.slidev-page-${no} [data-anchor="hex"]`,
    ) ?? []),
  ].find((el) => el.getBoundingClientRect().width);

// Anchor rect in unscaled stage coordinates.
const box = (el) => {
  const s = stage.value.getBoundingClientRect();
  const k = stage.value.offsetWidth / s.width || 1;
  const r = el.getBoundingClientRect();
  return {
    x: (r.left - s.left) * k,
    y: (r.top - s.top) * k,
    w: r.width * k,
    h: r.height * k,
  };
};

const reveal = () => {
  if (shown) gsap.set(shown, { visibility: "visible" });
  shown = null;
};

async function go(no) {
  if (!stage.value) return;
  tween?.kill();
  reveal();
  if (hex.value) gsap.set(hex.value, { autoAlpha: 0 });
  // Let the new slide mount and lay out before measuring.
  await nextTick();
  await new Promise((r) => globalThis.setTimeout(r, 60));
  if (no !== currentSlideNo.value) return;
  const el = anchorOn(no);
  // No anchor: nothing shows; the hex keeps its last spot for the next flight.
  if (!el) return;
  if (reducedMotion() || !parked) {
    // Nothing to travel from: the slide's own hex shows as normal.
    const b = box(el);
    gsap.set(hex.value, {
      autoAlpha: 0,
      x: b.x,
      y: b.y,
      width: b.w,
      height: b.h,
    });
    parked = true;
    return;
  }
  shown = el;
  gsap.set(el, { visibility: "hidden" });
  gsap.set(hex.value, { autoAlpha: 1 });
  const from = {
    x: gsap.getProperty(hex.value, "x"),
    y: gsap.getProperty(hex.value, "y"),
    w: hex.value.offsetWidth,
    h: hex.value.offsetHeight,
  };
  const p = { t: 0 };
  // Track the anchor every frame, so it lands where the anchor ends up.
  tween = gsap.to(p, {
    t: 1,
    duration: 0.6,
    ease: "power3.inOut",
    onUpdate: () => {
      const b = box(el);
      const l = (a, z) => a + (z - a) * p.t;
      gsap.set(hex.value, {
        x: l(from.x, b.x),
        y: l(from.y, b.y),
        width: l(from.w, b.w),
        height: l(from.h, b.h),
      });
    },
    onComplete: () => {
      reveal();
      gsap.set(hex.value, { autoAlpha: 0 });
    },
  });
}

// The stage hex is visible only in flight; on arrival the slide's own hex
// takes over, so labels and slide animations stay as they are.
watch(currentSlideNo, (no) => go(no), { flush: "post" });
watch(stage, (s) => s && go(currentSlideNo.value));
onBeforeUnmount(() => {
  tween?.kill();
  reveal();
});
</script>

<style>
.hero-stage {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}

:active-view-transition .hero-stage {
  view-transition-name: hero-stage;
}

::view-transition-group(hero-stage) {
  z-index: 100;
  animation: none;
}

::view-transition-new(hero-stage) {
  animation: none;
}

::view-transition-old(hero-stage) {
  display: none;
}

.hero-hex {
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(135deg, #ff3377, #e8384f);
}
</style>
