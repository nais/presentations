import gsap from "gsap";
import { nextTick } from "vue";
import { DUR, EASE, RISE, STAGGER, reducedMotion } from "../gsap/motion.js";
import CountUp from "../gsap/CountUp.vue";
import DeployFlow from "../gsap/DeployFlow.vue";
import HexRow from "../gsap/HexRow.vue";
import ClipSlide from "../gsap/ClipSlide.vue";
import TeamWall from "../gsap/TeamWall.vue";
import BenefitStory from "../gsap/BenefitStory.vue";
import TenantBars from "../gsap/TenantBars.vue";

const HEADER =
  ".default-header > *, .pillars-header > *, .stats-header > *, .cta-header > *, .cover-text > *, .main-logo";
const ITEMS = "li, .card-row > *, .anim-item";
// Elements that animate themselves (own component or Slidev v-click).
const SELF = "[data-motion-self], .slidev-vclick-target";

function animate(page) {
  const header = [...page.querySelectorAll(HEADER)].filter(
    (el) => !el.closest(SELF),
  );
  const items = [...page.querySelectorAll(ITEMS)].filter(
    (el) =>
      !el.closest(SELF) &&
      !el.parentElement?.closest(".anim-item, .card-row > *"),
  );
  const all = [...header, ...items];
  if (!all.length) return;
  gsap.killTweensOf(all);
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
}

export default function setup({ app, router }) {
  app.component("CountUp", CountUp);
  app.component("DeployFlow", DeployFlow);
  app.component("HexRow", HexRow);
  app.component("ClipSlide", ClipSlide);
  app.component("TeamWall", TeamWall);
  app.component("BenefitStory", BenefitStory);
  app.component("TenantBars", TenantBars);

  // Slides next to the current one are already mounted, so setting the start
  // state here (before Vue shows the slide) avoids a flash of the end state.
  router.afterEach((to) => {
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
