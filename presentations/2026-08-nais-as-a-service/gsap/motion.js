// One motion language for the whole deck. Every GSAP animation imports these.
import { onBeforeUnmount, onMounted, watch } from "vue";
import { useIsSlideActive, useSlideContext } from "@slidev/client";
import gsap from "gsap";

export const EASE = "power3.out";
export const DUR = 0.7;
export const STAGGER = 0.08;
export const RISE = 24;

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
