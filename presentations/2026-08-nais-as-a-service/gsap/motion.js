// One motion language for the whole deck. Every GSAP animation imports these.
import { onBeforeUnmount, onMounted, watch } from "vue";
import { useIsSlideActive, useSlideContext } from "@slidev/client";
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
export function useSteps(build) {
  const { $clicks } = useSlideContext();
  const active = useIsSlideActive();
  let tl;
  const label = (c) => {
    for (let i = c; i > 0; i--) if (`s${i}` in tl.labels) return `s${i}`;
    return "s0";
  };
  const go = (c) => {
    const l = label(c);
    if (reducedMotion()) return tl.seek(l);
    if (tl.labels[l] < tl.time())
      tl.tweenTo(l, { duration: 0.5, ease: "power2.out" });
    else tl.tweenTo(l);
  };
  onMounted(() => {
    tl = build(
      gsap.timeline({ paused: true, defaults: { ease: EASE, duration: DUR } }),
    );
    watch(
      active,
      (on) => {
        if (!on) return;
        if ($clicks.value > 0) tl.seek(label($clicks.value));
        else {
          tl.seek(0);
          go(0);
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
  let tl;
  onMounted(() => {
    tl = build(
      gsap.timeline({ paused: true, defaults: { ease: EASE, duration: DUR } }),
    );
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
  const pr = parent.getBoundingClientRect();
  const scale = pr.width / parent.offsetWidth || 1;
  const r = el.getBoundingClientRect();
  return {
    x: (r.left + r.width / 2 - pr.left) / scale,
    y: (r.top + r.height / 2 - pr.top) / scale,
  };
};
export function cursorClick(tl, cursor, _root, target) {
  if (reducedMotion()) return tl;
  return tl
    .to(cursor, {
      autoAlpha: 1,
      x: () => offsetIn(target, cursor).x,
      y: () => offsetIn(target, cursor).y,
      duration: 0.7,
      ease: "power2.inOut",
    })
    .fromTo(
      cursor.querySelector(".ripple"),
      { scale: 0, autoAlpha: 0.8 },
      { scale: 1, autoAlpha: 0, duration: 0.4 },
    );
}
