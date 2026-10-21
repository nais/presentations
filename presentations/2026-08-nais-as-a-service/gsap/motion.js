// One motion language for the whole deck. Every GSAP animation imports these.
export const EASE = "power3.out";
export const DUR = 0.7;
export const STAGGER = 0.08;
export const RISE = 24;

export const reducedMotion = () =>
  globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
