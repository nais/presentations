<template>
  <div ref="root" class="deploy-flow" data-motion-self>
    <h2 ref="headline" class="headline">Og så: git push</h2>
    <svg
      viewBox="0 0 900 300"
      class="diagram"
      role="img"
      aria-label="git push, bygg, Nais deploy, Kubernetes, appen er live"
    >
      <defs>
        <filter id="df-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        v-for="(d, i) in segments"
        :key="d"
        :ref="(el) => (lines[i] = el)"
        :d="d"
        class="line"
      />

      <g
        v-for="(n, i) in nodes"
        :key="n.label"
        :ref="(el) => (nodeEls[i] = el)"
        :transform="`translate(${n.x} ${n.y})`"
      >
        <g class="node-inner">
          <rect
            v-if="n.cluster"
            x="-90"
            y="-62"
            width="180"
            height="124"
            rx="18"
            class="node-box cluster"
          />
          <circle v-else r="38" :class="['node-box', { live: n.live }]" />
          <text v-if="!n.cluster" class="icon" y="9">{{ n.icon }}</text>
          <text class="label" :y="n.cluster ? 88 : 64">{{ n.label }}</text>
        </g>
      </g>

      <g transform="translate(680 150)">
        <rect
          v-for="(p, i) in pods"
          :key="i"
          :ref="(el) => (podEls[i] = el)"
          :x="p[0] - 18"
          :y="p[1] - 18"
          width="36"
          height="36"
          rx="8"
          class="pod"
        />
      </g>

      <circle ref="packet" r="9" class="packet" filter="url(#df-glow)" />
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useIsSlideActive, useSlideContext } from "@slidev/client";
import { DUR, EASE, STAGGER, reducedMotion, POP } from "./motion.js";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin, SplitText);

const nodes = [
  { x: 70, y: 150, icon: "⎇", label: "git push" },
  { x: 250, y: 150, icon: "⚙\uFE0E", label: "GitHub Actions" },
  { x: 430, y: 150, icon: "▲", label: "Nais deploy" },
  { x: 680, y: 150, cluster: true, label: "Kubernetes" },
  { x: 850, y: 150, icon: "✓", label: "Live", live: true },
];
const segments = [
  "M108 150 C150 110 170 110 212 150",
  "M288 150 C330 190 350 190 392 150",
  "M468 150 C520 110 560 110 590 150",
  "M770 150 L812 150",
];
const pods = [
  [-48, -20],
  [0, -20],
  [48, -20],
  [-24, 22],
  [24, 22],
];

const { $clicks } = useSlideContext();
const active = useIsSlideActive();
const root = ref();
const headline = ref();
const packet = ref();
const lines = [];
const nodeEls = [];
const podEls = [];
let tl;
let split;
let ctx;

const inner = (i) => nodeEls[i].querySelector(".node-inner");
const hop = (i) => ({
  motionPath: { path: lines[i], align: lines[i], alignOrigin: [0.5, 0.5] },
  duration: 0.9,
  ease: "power2.inOut",
});

function go(label) {
  if (reducedMotion()) tl.seek(label);
  // backwards: rewind quickly instead of replaying the whole reverse
  else if (tl.labels[label] < tl.time())
    tl.tweenTo(label, { duration: 0.5, ease: "power2.out" });
  else tl.tweenTo(label);
}

onMounted(() => {
  ctx = gsap.context(() => {
    split = SplitText.create(headline.value, { type: "words,chars" });
    gsap.set(lines, { drawSVG: "0%" });
    gsap.set(
      nodeEls.map((_, i) => inner(i)),
      { scale: 0, transformOrigin: "50% 50%" },
    );
    gsap.set(podEls, { scale: 0, transformOrigin: "50% 50%" });
    gsap.set(packet.value, { autoAlpha: 0 });

    tl = gsap.timeline({ paused: true });
    tl.from(split.chars, {
      yPercent: 100,
      autoAlpha: 0,
      stagger: STAGGER / 3,
      duration: DUR,
      ease: EASE,
    })
      .to(inner(0), { scale: 1, duration: 0.6, ease: POP }, "-=0.3")
      .addLabel("s0");

    for (let i = 0; i < 4; i++) {
      tl.set(packet.value, { autoAlpha: 1 }, "+=0.01")
        .to(lines[i], { drawSVG: "100%", duration: 0.9, ease: "power2.inOut" })
        .to(packet.value, hop(i), "<")
        .to(inner(i + 1), { scale: 1, duration: 0.6, ease: POP }, "-=0.25");
      if (i === 2) {
        tl.to(podEls, {
          scale: 1,
          duration: 0.4,
          ease: POP,
          stagger: 0.08,
        });
      }
      if (i === 3) {
        tl.to(packet.value, { autoAlpha: 0, duration: 0.3 }).to(inner(4), {
          scale: 1.15,
          duration: 0.25,
          yoyo: true,
          repeat: 1,
        });
      }
      tl.addLabel(`s${i + 1}`);
    }
  }, root.value);

  // Replay the intro each time the slide is entered; jump straight to the
  // current step when arriving mid-slide (e.g. navigating backwards).
  watch(
    active,
    (on) => {
      if (!on) return tl.pause(0);
      if ($clicks.value > 0) tl.seek(`s${Math.min($clicks.value, 4)}`);
      else go("s0");
    },
    { immediate: true },
  );
});

watch($clicks, (c) => tl && go(`s${Math.min(c, 4)}`));

onBeforeUnmount(() => {
  tl?.kill();
  split?.revert();
  ctx?.revert();
});
</script>

<style scoped>
.deploy-flow {
  width: 100%;
}

.headline {
  font-family: "Poppins", sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  overflow: hidden;
}

.diagram {
  width: 100%;
  height: auto;
  overflow: visible;
}

.line {
  fill: none;
  stroke: var(--nais-accent, #e8384f);
  stroke-width: 4;
  stroke-linecap: round;
}

.node-box {
  fill: var(--nais-card, #f8fafc);
  stroke: var(--nais-text, #0f172a);
  stroke-width: 3;
}

.node-box.cluster {
  stroke-dasharray: 8 6;
  stroke: var(--nais-text-secondary, #64748b);
}

.node-box.live {
  fill: var(--nais-success, #10b981);
  stroke: var(--nais-success, #10b981);
}

.icon {
  font-size: 26px;
  text-anchor: middle;
  fill: var(--nais-text, #0f172a);
}

.node-box.live + .icon {
  fill: #fff;
}

.label {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-anchor: middle;
  fill: var(--nais-text, #0f172a);
}

.pod {
  fill: var(--nais-accent, #e8384f);
}

.packet {
  fill: var(--nais-accent, #e8384f);
}
</style>
