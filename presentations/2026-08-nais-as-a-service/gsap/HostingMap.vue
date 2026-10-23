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
          <span v-for="c in z.items" :key="c" class="chip" :data-chip="c">{{
            c
          }}</span>
          <template v-if="z.tone === 'self'">
            <span v-for="c in COMING" :key="c" class="chip coming"
              >{{ c }} <em>på vei</em></span
            >
          </template>
        </div>
      </section>
    </div>
    <p ref="caption" class="caption">
      Flyttet til Google Cloud. Plattformen har flyttet før. Eget datasenter
      kobles til med VPN eller Cloud Interconnect.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { STAGGER, useSteps, POP } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

// Work in progress: Nais Postgres (CloudNativePG) and Nais Buckets
// bucket abstraction replace Cloud SQL and Cloud Storage over time.
const COMING = ["Nais Postgres", "Nais Buckets"];
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
    items: [
      "Console og API",
      "Ingress",
      "naisdevice",
      "Grafana",
      "Mimir",
      "Loki",
      "Tempo",
    ],
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
      q(".chip:not(.coming)"),
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
      { opacity: 0.65, filter: "grayscale(1)", duration: 0.5 },
      "<",
    )
    .to(
      q(".zone.gcp"),
      { boxShadow: "0 0 0 4px rgb(232 56 79 / 0.35)", duration: 0.4 },
      "<",
    )
    .to(caption.value, { autoAlpha: 1, y: 0 })
    .addLabel("s1")
    .to(q('[data-chip="Cloud SQL"], [data-chip="Buckets"]'), {
      opacity: 0.4,
      borderStyle: "dashed",
      duration: 0.4,
    })
    .fromTo(
      q(".chip.coming"),
      { autoAlpha: 0, x: -40 },
      { autoAlpha: 1, x: 0, stagger: 0.15, ease: POP },
      "<0.2",
    )
    .addLabel("s2");
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
  grid-template-columns: 1.1fr 0.9fr 1.3fr;
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

.chip.coming {
  border-style: dashed;
  border-color: #ff3377;
}

.chip.coming em {
  font-style: normal;
  font-size: 0.72rem;
  color: #fca5c0;
}

.caption {
  grid-column: 1 / -1;
  margin: 0;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
}
</style>
