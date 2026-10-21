<template>
  <div ref="root" class="obs" data-motion-self>
    <svg
      viewBox="0 0 900 300"
      aria-label="Logger, metrikker og traces flyter fra appen til Grafana"
    >
      <path
        v-for="p in PATHS"
        :key="p.id"
        :id="`obs-${p.id}`"
        :d="p.d"
        class="path"
        :style="{ stroke: p.color }"
      />
      <g v-for="p in PATHS.filter((x) => x.dots)" :key="'d' + p.id">
        <circle
          v-for="k in 4"
          :key="k"
          r="7"
          class="dot"
          :data-path="p.id"
          :style="{ fill: p.color }"
        />
      </g>
      <g
        v-for="n in NODES"
        :key="n.label"
        class="node"
        :transform="`translate(${n.x} ${n.y})`"
      >
        <rect
          :x="-n.w / 2"
          y="-28"
          :width="n.w"
          height="56"
          rx="12"
          :class="n.kind"
        />
        <text y="-2" class="label">{{ n.label }}</text>
        <text y="18" class="sub">{{ n.sub }}</text>
      </g>
    </svg>
    <div class="legend">
      <span><i style="background: #e0a43a" /> Logger</span>
      <span><i style="background: #e8384f" /> Metrikker</span>
      <span><i style="background: #3fb8a8" /> Traces</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { POP, STAGGER, useEnter } from "./motion.js";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

// Pipeline as described in nais/doc docs/observability/apm/explanations/how-nais-apm-works.md:
// stdout -> fluentbit -> Loki; OpenTelemetry collector -> Tempo and Mimir.
const NODES = [
  {
    x: 105,
    y: 150,
    w: 200,
    label: "Appen deres",
    sub: "autoInstrumentation",
    kind: "app",
  },
  { x: 330, y: 70, w: 150, label: "fluentbit", sub: "stdout", kind: "mid" },
  {
    x: 330,
    y: 220,
    w: 190,
    label: "OTel collector",
    sub: "OpenTelemetry",
    kind: "mid",
  },
  { x: 575, y: 45, w: 130, label: "Loki", sub: "logger", kind: "store" },
  { x: 575, y: 150, w: 130, label: "Mimir", sub: "metrikker", kind: "store" },
  { x: 575, y: 255, w: 130, label: "Tempo", sub: "traces", kind: "store" },
  {
    x: 805,
    y: 150,
    w: 150,
    label: "Grafana",
    sub: "alt på ett sted",
    kind: "app",
  },
];
const PATHS = [
  {
    id: "logs",
    color: "#e0a43a",
    d: "M205 140 C220 100 230 70 255 70 L405 70 C450 70 470 45 510 45",
    dots: true,
  },
  {
    id: "metrics",
    color: "#e8384f",
    d: "M205 160 C220 200 220 220 235 220 L425 220 C470 220 480 150 510 150",
    dots: true,
  },
  {
    id: "traces",
    color: "#3fb8a8",
    d: "M205 165 C215 215 225 228 235 228 L425 228 C470 228 480 255 510 255",
    dots: true,
  },
  { id: "g1", color: "#94a3b8", d: "M640 45 C690 45 690 140 730 145" },
  { id: "g2", color: "#94a3b8", d: "M640 150 L730 150" },
  { id: "g3", color: "#94a3b8", d: "M640 255 C690 255 690 160 730 155" },
];

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".dot"), { autoAlpha: 0 });
  tl.from(q(".node"), {
    scale: 0.6,
    autoAlpha: 0,
    transformOrigin: "50% 50%",
    stagger: STAGGER,
    ease: POP,
  })
    .fromTo(
      q(".path"),
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        stagger: STAGGER,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.3",
    )
    .from(
      q(".legend span"),
      { autoAlpha: 0, y: 10, stagger: STAGGER },
      "-=0.4",
    );
  q(".dot").forEach((dot, i) => {
    const path = root.value.querySelector(`#obs-${dot.dataset.path}`);
    tl.fromTo(
      dot,
      { autoAlpha: 1 },
      {
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
        duration: 1.6,
        ease: "none",
        repeat: 3,
        onComplete: () => gsap.set(dot, { autoAlpha: 0 }),
      },
      1.4 + (i % 4) * 0.4,
    );
  });
  return tl;
});
</script>

<style scoped>
.obs {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

svg {
  width: 100%;
  overflow: visible;
}

.path {
  fill: none;
  stroke-width: 3;
  opacity: 0.7;
}

rect {
  stroke-width: 2;
}

rect.app {
  fill: #1e293b;
  stroke: #475569;
}

rect.mid {
  fill: #131d33;
  stroke: #334155;
}

rect.store {
  fill: rgb(255 51 119 / 0.14);
  stroke: rgb(255 51 119 / 0.5);
}

.label {
  text-anchor: middle;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 18px;
  fill: #f1f5f9;
}

.sub {
  text-anchor: middle;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  fill: #64748b;
}

.node:has(.app) .label,
.node:has(.app) .sub {
  fill: #fff;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.6rem;
  font-size: 1rem;
  font-weight: 600;
}

.legend i {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.4rem;
}
</style>
