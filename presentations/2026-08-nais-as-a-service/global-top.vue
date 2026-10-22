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

// Slides where the hex stays out of the picture entirely.
// The Europe map fills the bottom-left corner, so the park spot is taken there.
const HIDE = ".cover-layout, .clip-slide, .eu";
// Park spot: bottom-left, clear of titles, pillar tags (top-right), the
// centred footer and content. Small, dimmed, breathing slowly.
const PARK_W = 34;
const park = () => ({
  x: 28,
  y: stage.value.offsetHeight - 28 - PARK_W * 1.15,
  w: PARK_W,
  h: PARK_W * 1.15,
});
let breathe;
let known = false; // the hex has a meaningful position (park or an anchor)

const place = (b) =>
  gsap.set(hex.value, { x: b.x, y: b.y, width: b.w, height: b.h });

// Tween the hex from where it is to box b.
const fly = (b, alpha, onDone) => {
  const start = {
    x: gsap.getProperty(hex.value, "x"),
    y: gsap.getProperty(hex.value, "y"),
    w: hex.value.offsetWidth,
    h: hex.value.offsetHeight,
  };
  const p = { t: 0 };
  const l = (a, z) => a + (z - a) * p.t;
  return gsap
    .timeline()
    .to(p, {
      t: 1,
      duration: 0.6,
      ease: "power3.inOut",
      onUpdate: () =>
        place({
          x: l(start.x, b.x),
          y: l(start.y, b.y),
          w: l(start.w, b.w),
          h: l(start.h, b.h),
        }),
    })
    .to(hex.value, { opacity: alpha, duration: 0.6, ease: "power1.inOut" }, 0)
    .add(onDone ?? (() => {}));
};

const parkNow = (animate) => {
  place(park());
  gsap.set(hex.value, { visibility: "inherit" });
  if (animate)
    gsap.fromTo(hex.value, { opacity: 0 }, { opacity: 0.6, duration: 0.3 });
  else gsap.set(hex.value, { opacity: 0.6 });
  startBreathe();
};

const startBreathe = () => {
  breathe?.kill();
  if (reducedMotion()) return;
  breathe = gsap.to(hex.value, {
    scale: 1.04,
    duration: 3,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
};

async function go(no, prev) {
  if (!stage.value) return;
  tween?.kill();
  breathe?.kill();
  reveal();
  // Hide the arriving slide's hex at once if we will fly into it, so it
  // never shows next to the parked hex during the fade.
  const early =
    prev &&
    Math.abs(no - prev) === 1 &&
    known &&
    !reducedMotion() &&
    stage.value.ownerDocument.querySelector(
      `.slidev-page-${no} [data-anchor="hex"]`,
    );
  if (early) {
    shown = early;
    early.classList.add("hero-hidden");
  }
  // Let the new slide mount and lay out before measuring.
  await nextTick();
  await new Promise((r) => globalThis.setTimeout(r, 60));
  if (no !== currentSlideNo.value) return;
  reveal();
  gsap.set(hex.value, { scale: 1 });
  const page = stage.value.ownerDocument.querySelector(`.slidev-page-${no}`);
  const el = anchorOn(no);
  const adjacent = prev && Math.abs(no - prev) === 1;
  if (!page || page.querySelector(HIDE)) {
    gsap.to(hex.value, { autoAlpha: 0, duration: reducedMotion() ? 0 : 0.3 });
    known = false;
    return;
  }
  if (el) {
    const end = finalBox(el);
    // Goto, first load or reduced motion: no flight, the slide hex shows as is.
    if (!adjacent || !known || reducedMotion()) {
      gsap.set(hex.value, { autoAlpha: 0 });
      place(end);
      known = true;
      return;
    }
    shown = el;
    el.classList.add("hero-hidden");
    gsap.set(hex.value, { visibility: "inherit" });
    tween = fly(end, 1, () => {
      // Hand over once the slide's hex has grown to its final size (max
      // 1.5 s), in one frame: no gap, no double hex.
      const t0 = globalThis.performance.now();
      const check = () => {
        if (shown !== el) return gsap.ticker.remove(check);
        if (
          box(el).w >= end.w * 0.97 ||
          globalThis.performance.now() - t0 > 1500
        ) {
          gsap.ticker.remove(check);
          reveal();
          gsap.set(hex.value, { autoAlpha: 0 });
        }
      };
      gsap.ticker.add(check);
    });
    return;
  }
  // No anchor: park. Fly there from the anchor just left, otherwise jump.
  if (adjacent && known && !reducedMotion()) {
    gsap.set(hex.value, { visibility: "inherit" });
    if (gsap.getProperty(hex.value, "opacity") === 0)
      gsap.set(hex.value, { opacity: 1 });
    tween = fly(park(), 0.6, startBreathe);
  } else parkNow(!reducedMotion());
  known = true;
}

// Park and fly: between anchored slides the hex parks small at the bottom
// left; it flies into each anchor on arrival and back out when leaving.
// On arrival the slide's own hex takes over, so slide animations stay as is.
watch(currentSlideNo, (no, prev) => go(no, prev), { flush: "post" });
watch(stage, (s) => s && go(currentSlideNo.value));
onBeforeUnmount(() => {
  tween?.kill();
  breathe?.kill();
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
