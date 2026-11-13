import gsap from "gsap";
import { nextTick } from "vue";
import { DUR, EASE, RISE, STAGGER, reducedMotion } from "../gsap/motion.js";

const HEADER =
  ".default-header > *, .pillars-header > *, .stats-header > *, .cta-header > *, .cover-text > *, .main-logo";
const ITEMS = "li, .card-row > *, .anim-item";
// Elements that animate themselves (own component or Slidev v-click).
const SELF = "[data-motion-self], .slidev-vclick-target";

// The running entrance; a new slide kills it so its clearProps never fires late.
let entrance;

function animate(page) {
  const header = [...page.querySelectorAll(HEADER)].filter(
    (el) => !el.closest(SELF),
  );
  const items = [...page.querySelectorAll(ITEMS)].filter(
    (el) =>
      !el.closest(SELF) &&
      !el.parentElement?.closest(".anim-item, .card-row > *"),
  );
  // Elements that morph in a view transition must not also run an entrance.
  const morphs = (el) =>
    globalThis.getComputedStyle(el).viewTransitionName !== "none";
  const all = [...header, ...items].filter((el) => !morphs(el));
  header.splice(0, header.length, ...header.filter((el) => !morphs(el)));
  if (!all.length) return;
  // Kill only the previous entrance, never component timelines (e.g. a
  // later click that hides a quote).
  entrance?.kill();
  const tl = gsap.timeline({
    defaults: { ease: EASE, duration: DUR },
    onComplete: () =>
      gsap.set(all, { clearProps: "transform,opacity,visibility" }),
  });
  if (header.length)
    tl.from(header, { y: RISE, autoAlpha: 0, stagger: STAGGER });
  if (items.length)
    tl.from(
      items,
      { y: RISE, autoAlpha: 0, stagger: STAGGER },
      header.length ? "-=0.45" : 0,
    );
  entrance = tl;
}

// Every component in gsap/ is registered globally under its file name.
const components = import.meta.glob("../gsap/*.vue", {
  eager: true,
  import: "default",
});

export default function setup({ app, router }) {
  for (const [path, component] of Object.entries(components))
    app.component(path.split("/").pop().replace(".vue", ""), component);
  app.component("JourneyPath", components["../gsap/BenefitStory.vue"]);

  // Slides next to the current one are already mounted, so setting the start
  // state here (before Vue shows the slide) avoids a flash of the end state.
  // Only on slide change: clicks also update the route (query), and the
  // header must not re-animate on every click.
  router.afterEach((to, from) => {
    if (to.params.no === from.params.no) return;
    if (reducedMotion() || to.path.includes("print") || "print" in to.query)
      return;
    const no = Number(to.params.no);
    if (!no) return;
    nextTick(() =>
      globalThis.document
        .querySelectorAll(`.slidev-page-${no}`)
        .forEach(animate),
    );
  });
}
