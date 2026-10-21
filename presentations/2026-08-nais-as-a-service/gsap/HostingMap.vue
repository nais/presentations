<template>
  <div ref="root" class="hosting" data-motion-self>
    <div class="onprem">
      <span class="i-carbon-bare-metal-server" />
      <strong>Eget datasenter</strong>
      <small>Nais startet her i 2016</small>
    </div>
    <svg class="move" viewBox="0 0 120 60" aria-hidden="true">
      <defs>
        <marker
          id="hm-head"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto"
          overflow="visible"
        >
          <path d="M0 0 L10 5 L0 10 Z" class="tip" />
        </marker>
      </defs>
      <path ref="arrow" d="M5 34 C40 8 76 8 100 30" />
    </svg>
    <div class="zones">
      <section v-for="z in ZONES" :key="z.name" class="zone" :class="z.tone">
        <header><span :class="z.icon" /> {{ z.name }}</header>
        <div class="chips">
          <span v-for="c in z.items" :key="c" class="chip">{{ c }}</span>
        </div>
      </section>
    </div>
    <p ref="caption" class="caption">
      Flyttet til Google Cloud. Plattformen har flyttet før.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { STAGGER, useSteps, POP } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

const ZONES = [
  {
    name: "Google Cloud",
    icon: "i-carbon-cloud",
    tone: "gcp",
    items: ["GKE", "Cloud SQL", "Buckets", "BigQuery"],
  },
  {
    name: "Aiven",
    icon: "i-carbon-data-base",
    tone: "aiven",
    items: ["Kafka", "OpenSearch", "Valkey"],
  },
  {
    name: "Nais drifter selv",
    icon: "i-carbon-chart-line",
    tone: "self",
    items: ["Grafana", "Mimir", "Loki", "Tempo"],
  },
];

const root = ref();
const arrow = ref();
const caption = ref();

// s0: zones and chips appear. s1: the on-prem to cloud move is drawn.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(arrow.value, { drawSVG: "0%" });
  gsap.set(caption.value, { autoAlpha: 0, y: 12 });
  tl.from(q(".zone"), { scale: 0.9, autoAlpha: 0, stagger: STAGGER * 2 })
    .from(
      q(".chip"),
      {
        scale: 0.6,
        autoAlpha: 0,
        stagger: STAGGER / 2,
        ease: POP,
        duration: 0.4,
      },
      "-=0.4",
    )
    .from(q(".onprem"), { autoAlpha: 0, x: -20 }, "-=0.2")
    .addLabel("s0")
    .to(arrow.value, { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" })
    // Arrowhead only once the line has arrived, so it is never drawn half-way.
    .set(arrow.value, { attr: { "marker-end": "url(#hm-head)" } })
    .to(
      q(".onprem"),
      { opacity: 0.45, filter: "grayscale(1)", duration: 0.5 },
      "<",
    )
    .to(
      q(".zone.gcp"),
      { boxShadow: "0 0 0 4px rgb(232 56 79 / 0.35)", duration: 0.4 },
      "<",
    )
    .to(caption.value, { autoAlpha: 1, y: 0 })
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.hosting {
  display: grid;
  grid-template-columns: 7.5rem 4.5rem 1fr;
  align-items: center;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  row-gap: 1rem;
}

.onprem {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.8rem 0.5rem;
  border: 2px dashed var(--nais-text-secondary);
  border-radius: 14px;
}

.onprem span {
  font-size: 2rem;
}

.onprem strong {
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
}

.onprem small {
  font-size: 0.8rem;
  color: var(--nais-text-secondary);
}

.move {
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: visible;
}

.move .tip {
  fill: var(--nais-accent);
  stroke: none;
}

.move > path {
  fill: none;
  stroke: var(--nais-accent);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zones {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.1fr;
  gap: 0.8rem;
}

.zone {
  border-radius: 18px;
  padding: 0.9rem;
  min-height: 9.5rem;
  border: 2px solid var(--nais-border);
}

.zone.gcp {
  background: rgb(92 178 218 / 0.12);
  border-color: rgb(92 178 218 / 0.45);
}

.zone.aiven {
  background: rgb(255 145 0 / 0.12);
  border-color: rgb(255 145 0 / 0.45);
}

.zone.self {
  background: rgb(255 51 119 / 0.12);
  border-color: rgb(255 51 119 / 0.45);
}

header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.7rem;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-size: 0.9rem;
  font-weight: 600;
}

.caption {
  grid-column: 1 / -1;
  margin: 0;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
}
</style>
