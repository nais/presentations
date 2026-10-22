<template>
  <div ref="root" class="story" data-motion-self>
    <svg viewBox="0 0 900 300" class="story-svg" aria-hidden="true">
      <path :d="d" class="track" />
      <path ref="line" :d="d" class="flow" />
    </svg>
    <div
      v-for="(it, i) in items"
      :key="it.title"
      class="step"
      :class="{ up: i % 2 }"
      :style="{
        left: `${(pts[i][0] / 900) * 100}%`,
        top: `${(pts[i][1] / 300) * 100}%`,
      }"
    >
      <div class="node"><i class="lit" /><span :class="it.icon" /></div>
      <div class="text">
        <h3>{{ it.title }}</h3>
        <p :class="{ ph: it.placeholder }">{{ it.description }}</p>
      </div>
    </div>
    <div
      v-if="burst"
      ref="burstEl"
      class="burst"
      :style="{
        left: `${(pts.at(-1)[0] / 900) * 100}%`,
        top: `${(pts.at(-1)[1] / 300) * 100}%`,
      }"
    >
      <i v-for="k in 28" :key="k" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useIsSlideActive, useSlideContext } from "@slidev/client";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { DUR, EASE, RISE, reducedMotion, POP } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

const props = defineProps({
  items: { type: Array, required: true },
  burst: { type: Boolean, default: true },
});

const n = props.items.length;
const pts = props.items.map((_, i) => [
  110 + (i * 680) / (n - 1),
  i % 2 ? 110 : 190,
]);
const d = pts.reduce((acc, [x, y], i) => {
  if (!i) return `M${x} ${y}`;
  const [px, py] = pts[i - 1];
  const h = (x - px) / 2;
  return `${acc} C${px + h} ${py} ${x - h} ${y} ${x} ${y}`;
}, "");

const { $clicks } = useSlideContext();
const active = useIsSlideActive();
const root = ref();
const line = ref();
const burstEl = ref();
let tl;

function go(c) {
  const label = `s${Math.min(c, n)}`;
  if (reducedMotion()) return tl.seek(label);
  if (tl.labels[label] < tl.time())
    tl.tweenTo(label, { duration: 0.5, ease: "power2.out" });
  else tl.tweenTo(label);
}

onMounted(() => {
  const q = gsap.utils.selector(root.value);
  const nodes = q(".node");
  const texts = q(".text");
  const bits = q(".burst i");
  const colors = ["#e8384f", "#f76890", "#dc2626", "#fbbf24", "#10b981"];

  gsap.set(line.value, { drawSVG: "0%" });
  gsap.set(texts, { autoAlpha: 0, y: RISE });
  gsap.set(bits, {
    autoAlpha: 0,
    backgroundColor: (i) => colors[i % colors.length],
  });

  tl = gsap
    .timeline({ paused: true, defaults: { ease: EASE, duration: DUR } })
    .addLabel("s0");
  for (let i = 0; i < n; i++) {
    if (i)
      tl.to(line.value, {
        drawSVG: `${(i / (n - 1)) * 100}%`,
        duration: 0.8,
        ease: "power2.inOut",
      });
    tl.to(
      nodes[i],
      {
        scale: 1.25,
        duration: 0.5,
        ease: POP,
      },
      i ? "-=0.15" : 0,
    )
      // Inactive hexes stay opaque (they cover the track); only the colour fades in.
      .to(nodes[i].querySelector(".lit"), { opacity: 1, duration: 0.5 }, "<")
      .to(nodes[i].querySelector("span"), { color: "#fff", duration: 0.5 }, "<")
      .to(texts[i], { autoAlpha: 1, y: 0 }, "<0.1");
    if (i === n - 1 && props.burst) {
      tl.fromTo(
        bits,
        { x: 0, y: 0, autoAlpha: 1, rotation: 0, scale: 1 },
        {
          x: () =>
            (n - 1) % 2
              ? gsap.utils.random(-30, 150)
              : gsap.utils.random(-220, 220),
          // Fly away from the text: down when the last label sits above the node.
          y: () =>
            (n - 1) % 2
              ? gsap.utils.random(30, 150)
              : gsap.utils.random(-230, -40),
          rotation: () => gsap.utils.random(-360, 360),
          scale: 0.4,
          duration: 1.4,
          ease: "power2.out",
          stagger: { amount: 0.15 },
          immediateRender: false,
        },
        "<",
      ).to(bits, { autoAlpha: 0, duration: 0.5 }, "-=0.5");
    }
    tl.addLabel(`s${i + 1}`);
  }

  watch(
    active,
    (on) => {
      if (!on) return;
      tl.seek($clicks.value > 0 ? `s${Math.min($clicks.value, n)}` : 0);
    },
    { immediate: true },
  );
});

watch($clicks, (c) => tl && go(c));
onBeforeUnmount(() => tl?.kill());
</script>

<style scoped>
.story {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 1;
  margin-bottom: 2rem;
}

.story-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.track,
.flow {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
}

.track {
  stroke: var(--nais-border);
  stroke-dasharray: 2 10;
}

.flow {
  stroke: var(--nais-accent);
}

.step {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node {
  width: 64px;
  height: 72px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
  z-index: 1;
  background: #1c2740;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lit {
  position: absolute;
  inset: 0;
  opacity: 0;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.node span {
  position: relative;
  font-size: 1.9rem;
  color: #94a3b8;
}

.text {
  position: absolute;
  top: 90px;
  width: 200px;
  text-align: center;
}

.step.up .text {
  top: auto;
  bottom: 90px;
}

.text h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--nais-accent);
  margin: 0 0 0.2rem;
}

.text p.ph {
  border: 2px dashed #d97706;
  background: #fffbeb;
  color: #92400e;
  border-radius: 6px;
  padding: 0.15rem 0.3rem;
}

.text p {
  font-size: 0.85rem;
  line-height: 1.35;
  color: var(--nais-text-secondary);
  margin: 0;
}

.burst {
  position: absolute;
  z-index: 3;
  width: 0;
  height: 0;
}

.burst i {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin: -5px;
}
</style>
