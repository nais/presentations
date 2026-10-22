// One motion language for the whole deck. Every GSAP animation imports these.
import { onBeforeUnmount, onMounted, watch } from "vue";
import { useIsSlideActive, useNav, useSlideContext } from "@slidev/client";
import gsap from "gsap";

export const EASE = "power3.out";
export const DUR = 0.7;
export const STAGGER = 0.08;
export const RISE = 24;
// Accent ease for things that pop in (nodes, hexes, badges). Same everywhere.
export const POP = "back.out(1.7)";

export const reducedMotion = () =>
  globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

// Click-driven timeline: build(tl) adds labels s0..sN; click n plays to sN.
// s0 is the intro that plays on slide enter. Going back rewinds quickly.
// offset: the slide click at which this timeline's s0 is reached, so two
// click-driven components can share one slide (the second starts later).
export function useSteps(build, offset = 0) {
  const { $clicks } = useSlideContext();
  const active = useIsSlideActive();
  let tl;
  const label = (c) => {
    for (let i = c; i > 0; i--) if (`s${i}` in tl.labels) return `s${i}`;
    return "s0";
  };
  const go = (c) => {
    const k = c - offset;
    if (k < 0) return tl.pause(0);
    const l = label(k);
    if (reducedMotion()) return tl.seek(l);
    if (tl.labels[l] < tl.time())
      tl.tweenTo(l, { duration: 0.5, ease: "power2.out" });
    else tl.tweenTo(l);
  };
  const { isPrintMode } = useNav();
  onMounted(() => {
    tl = build(
      gsap.timeline({ paused: true, defaults: { ease: EASE, duration: DUR } }),
    );
    // Print/PDF export: jump straight to the state for the current click.
    if (isPrintMode.value) {
      tl.seek(label(Math.max(0, $clicks.value - offset)));
      return;
    }
    watch(
      active,
      (on) => {
        if (!on) return;
        const k = $clicks.value - offset;
        if (k > 0) tl.seek(label(k));
        else {
          tl.seek(0);
          if (k === 0) go($clicks.value);
        }
      },
      { immediate: true },
    );
  });
  watch($clicks, (c) => tl && go(c));
  onBeforeUnmount(() => tl?.kill());
}

// Autoplay timeline: restarts on every slide enter.
export function useEnter(build) {
  const active = useIsSlideActive();
  const { isPrintMode } = useNav();
  let tl;
  onMounted(() => {
    tl = build(
      gsap.timeline({ paused: true, defaults: { ease: EASE, duration: DUR } }),
    );
    if (isPrintMode.value) return tl.progress(1).pause();
    watch(
      active,
      (on) =>
        on && !reducedMotion() ? tl.restart(true) : tl.progress(1).pause(),
      { immediate: true },
    );
  });
  onBeforeUnmount(() => tl?.kill());
}

// Fake mouse for UI mocks: glide to an element, then click. Positions are
// measured when the tween starts, relative to the cursor's positioned parent,
// and corrected for Slidev's slide scaling.
const offsetIn = (el, cursor) => {
  const parent = cursor.offsetParent;
  if (!el || !parent) return { x: 0, y: 0 };
  const pr = parent.getBoundingClientRect();
  const scale = pr.width / parent.offsetWidth || 1;
  const r = el.getBoundingClientRect();
  return {
    x: (r.left + r.width / 2 - pr.left) / scale,
    y: (r.top + r.height / 2 - pr.top) / scale,
  };
};
// target may be an element or a function returning one; it is resolved when
// the tween starts, so it is safe to pass selectors for views not yet shown.
export function cursorClick(tl, cursor, _root, target) {
  if (reducedMotion()) return tl;
  const el = () => (typeof target === "function" ? target() : target);
  return tl
    .to(cursor, {
      autoAlpha: 1,
      x: () => offsetIn(el(), cursor).x,
      y: () => offsetIn(el(), cursor).y,
      duration: 0.7,
      ease: "power2.inOut",
    })
    .fromTo(
      cursor.querySelector(".ripple"),
      { scale: 0, autoAlpha: 0.8 },
      { scale: 1, autoAlpha: 0, duration: 0.4 },
    );
}
