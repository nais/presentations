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
import { useIsSlideActive } from "@slidev/client";
import gsap from "gsap";
import { DUR, EASE, STAGGER, reducedMotion } from "./motion.js";

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
  ["x10an14-nav", "Christian"],
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
let tl;

// Built on each slide enter: positions can only be measured while the slide
// is displayed (neighbouring slides are mounted hidden).
function build() {
  const el = root.value;
  const items = [...el.querySelectorAll(".member")];
  const names = el.querySelectorAll("figcaption");
  // Clean fly-in from off-screen straight into the wall.
  tl = gsap
    .timeline({ paused: true, defaults: { ease: EASE, duration: DUR } })
    .set(names, { autoAlpha: 0 })
    .from(items, {
      x: () => gsap.utils.random(-900, 900),
      y: (i) => (i % 2 ? -1 : 1) * gsap.utils.random(400, 700),
      rotation: () => gsap.utils.random(-60, 60),
      scale: 0.5,
      autoAlpha: 0,
      duration: 1.1,
      stagger: STAGGER / 2,
    })
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
