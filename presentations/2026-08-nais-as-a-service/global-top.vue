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
let parkedOn = 0; // slide whose anchor the stage hex last sat on

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

// Where the anchor ends up once its entrance is done: measure with the
// inline transforms (GSAP entrances) on it and its ancestors switched off.
const finalBox = (el) => {
  const page = el.closest(".slidev-page");
  const saved = [];
  for (let e = el; e && e !== page; e = e.parentElement) {
    saved.push([e, e.style.transform, e.style.translate, e.style.scale]);
    e.style.transform = e.style.translate = e.style.scale = "none";
  }
  const b = box(el);
  for (const [e, t, tr, sc] of saved) {
    e.style.transform = t;
    e.style.translate = tr;
    e.style.scale = sc;
  }
  return b;
};

const reveal = () => {
  shown?.classList.remove("hero-hidden");
  shown = null;
};

async function go(no, prev) {
  if (!stage.value) return;
  tween?.kill();
  reveal();
  if (hex.value) gsap.set(hex.value, { autoAlpha: 0 });
  // Let the new slide mount and lay out before measuring.
  await nextTick();
  await new Promise((r) => globalThis.setTimeout(r, 60));
  if (no !== currentSlideNo.value) return;
  const el = anchorOn(no);
  const from = parkedOn;
  parkedOn = el ? no : 0;
  // Fly only from an anchor on the slide we just left; otherwise the
  // slide's own entrance runs untouched.
  if (!el || reducedMotion() || !from || from !== prev) {
    if (el) {
      const b = finalBox(el);
      gsap.set(hex.value, { x: b.x, y: b.y, width: b.w, height: b.h });
    }
    return;
  }
  shown = el;
  el.classList.add("hero-hidden");
  gsap.set(hex.value, { autoAlpha: 1 });
  const start = {
    x: gsap.getProperty(hex.value, "x"),
    y: gsap.getProperty(hex.value, "y"),
    w: hex.value.offsetWidth,
    h: hex.value.offsetHeight,
  };
  const end = finalBox(el);
  const p = { t: 0 };
  const l = (a, z) => a + (z - a) * p.t;
  tween = gsap
    .timeline()
    .to(p, {
      t: 1,
      duration: 0.6,
      ease: "power3.inOut",
      onUpdate: () =>
        gsap.set(hex.value, {
          x: l(start.x, end.x),
          y: l(start.y, end.y),
          width: l(start.w, end.w),
          height: l(start.h, end.h),
        }),
    })
    // Hand over once the slide's hex has grown to its final size (max 1.5 s),
    // in one frame: no gap, no double hex.
    .add(() => {
      const t0 = globalThis.performance.now();
      const check = () => {
        if (shown !== el) return gsap.ticker.remove(check);
        const live = box(el);
        if (live.w >= end.w * 0.97 || globalThis.performance.now() - t0 > 1500) {
          gsap.ticker.remove(check);
          reveal();
          gsap.set(hex.value, { autoAlpha: 0 });
        }
      };
      gsap.ticker.add(check);
    });
}

// The stage hex is visible only in flight; on arrival the slide's own hex
// takes over, so labels and slide animations stay as they are.
watch(currentSlideNo, (no, prev) => go(no, prev), { flush: "post" });
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

.hero-hidden {
  visibility: hidden !important;
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
