<template>
  <div ref="root" class="team-wall" data-motion-self>
    <div v-for="(row, r) in rows" :key="r" class="team-row">
      <figure v-for="m in row" :key="m.login" class="member">
        <div class="hex"><img :src="m.avatar" :alt="m.name" /></div>
        <figcaption>{{ m.name }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import { useIsSlideActive, useNav, useSlideContext } from "@slidev/client";
import gsap from "gsap";
import { DUR, EASE, STAGGER, reducedMotion } from "./motion.js";
import { LOGO } from "./logo.js";

// GitHub team nais/nais (2026-10-21). Avatars live in assets/team/<login>.png.
const TEAM = [
  ["christeredvartsen", "Christer Edvartsen"],
  ["jhrv", "Johnny Horvi"],
  ["Starefossen", "Hans Kristian Flaatten"],
  ["sechmann", "Vegar Molvig"],
  ["Kyrremann", "Kyrre Havik"],
  ["rbjornstad", "Roger Bjørnstad"],
  ["Muni10", "Sten Røkke"],
  ["tronghn", "Trong Nguyen"],
  ["frodesundby", "Frode Sundby"],
  ["terjesannum", "Terje Sannum"],
  ["tommytroen", "Tommy Trøen"],
  ["ybelMekk", "Youssef Bel Mekki"],
  ["sindrerh2", "Sindre Hansen"],
  ["thokra-nav", "Thomas Krampl"],
  ["x10an14-nav", "Christian Chaves"],
];
const avatars = import.meta.glob("../assets/team/*.png", {
  eager: true,
  import: "default",
});
const members = TEAM.map(([login, name]) => ({
  login,
  name,
  avatar: avatars[`../assets/team/${login}.png`],
}));
const half = Math.ceil(members.length / 2);
const rows = [members.slice(0, half), members.slice(half)];

const root = ref();
const active = useIsSlideActive();
const { currentSlideNo } = useNav();
const { $page } = useSlideContext();
// Set when we arrive from the slide before; its chain hexes become our start.
let fromPrev = false;
watch(currentSlideNo, (now, before) => {
  fromPrev = now === $page.value && before === $page.value - 1;
});
let tl;

// Built on each slide enter: positions can only be measured while the slide
// is displayed (neighbouring slides are mounted hidden).
// Shapes on a pointy-top hex grid: rows alternate whole and half steps, so
// neighbours never overlap. 15 cells each.
// Logo: cells of a 7-row hex lattice whose centre area falls inside the
// Nais mark (shared/public/logos/nais-v2-rosa.svg), sampled with isPointInFill.
const HEART = [
  [-2, 0],
  [-1, 0],
  [1, 0],
  [2, 0],
  [-2.5, 1],
  [-1.5, 1],
  [-0.5, 1],
  [0.5, 1],
  [1.5, 1],
  [2.5, 1],
  [-1, 2],
  [0, 2],
  [1, 2],
  [-0.5, 3],
  [0.5, 3],
];
const SHAPE_SCALE = 0.55;
const STEP_X = 58;
const STEP_Y = 50;

function build() {
  const el = root.value;
  const items = [...el.querySelectorAll(".member")];
  const names = el.querySelectorAll("figcaption");
  const cx = el.offsetWidth / 2;
  const cy = el.offsetHeight / 2;
  // offsetLeft/Top are unscaled layout values, unlike getBoundingClientRect.
  const centre = (m) => [m.offsetLeft + m.offsetWidth / 2, m.offsetTop + 50];
  const place = (shape) => {
    const rows = shape.map((c) => c[1]);
    const my = ((Math.max(...rows) + Math.min(...rows)) * STEP_Y) / 2;
    return items.map((m, i) => {
      const [x, y] = centre(m);
      const [col, row] = shape[i % shape.length];
      return { x: cx + col * STEP_X - x, y: cy + row * STEP_Y - my - y };
    });
  };
  const logo = place(LOGO);
  // FLIP: the first avatars start on the previous slide's chain hexes.
  const k = el.offsetWidth / el.getBoundingClientRect().width || 1;
  const chain = fromPrev
    ? [...el.ownerDocument.querySelectorAll(".chain .hex")].filter(
        (h) => h.getBoundingClientRect().width,
      )
    : [];
  const start = items.map((m, i) => {
    const h = chain[i]?.getBoundingClientRect();
    if (!h) return null;
    const r = m.querySelector(".hex").getBoundingClientRect();
    return {
      x: (h.left + h.width / 2 - (r.left + r.width / 2)) * k,
      y: (h.top + h.height / 2 - (r.top + r.height / 2)) * k,
      scale: h.width / r.width,
    };
  });
  const heart = place(HEART);
  // Fly in, form the Nais logo, then a heart, then settle into the wall.
  tl = gsap
    .timeline({ paused: true, defaults: { ease: EASE, duration: DUR } })
    .set(names, { autoAlpha: 0 })
    .set(items, {
      x: (i) => start[i]?.x ?? logo[i].x + gsap.utils.random(-900, 900),
      y: (i) =>
        start[i]?.y ??
        logo[i].y + (i % 2 ? -1 : 1) * gsap.utils.random(400, 700),
      rotation: (i) => (start[i] ? 0 : gsap.utils.random(-60, 60)),
      scale: (i) => start[i]?.scale ?? SHAPE_SCALE,
      autoAlpha: (i) => (start[i] ? 1 : 0),
    })
    .to(items, {
      x: (i) => logo[i].x,
      y: (i) => logo[i].y,
      rotation: 0,
      scale: SHAPE_SCALE,
      autoAlpha: 1,
      duration: 0.8,
      stagger: STAGGER / 3,
    })
    .to(
      items,
      {
        x: (i) => heart[i].x,
        y: (i) => heart[i].y,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: STAGGER / 5,
      },
      "+=0.35",
    )
    .to(
      items,
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.inOut",
        stagger: STAGGER / 5,
      },
      "+=0.35",
    )
    .to(names, { autoAlpha: 1, stagger: STAGGER / 4, duration: 0.4 }, "-=0.3");

  return tl;
}

watch(
  active,
  async (on) => {
    tl?.progress(1).kill();
    if (!on || reducedMotion()) return;
    await nextTick();
    build().play();
  },
  { immediate: true },
);

onBeforeUnmount(() => tl?.kill());
</script>

<style scoped>
.team-wall {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.team-row {
  display: flex;
  gap: 0.5rem;
}

.team-row + .team-row {
  margin-top: 0.25rem;
}

.member {
  width: 100px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hex {
  width: 88px;
  height: 100px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  padding: 3px;
}

.hex img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: block;
}

figcaption {
  margin-top: 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  color: var(--nais-text);
  min-height: 1.5rem;
}
</style>
