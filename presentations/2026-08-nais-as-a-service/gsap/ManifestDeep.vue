<template>
  <div ref="root" class="manifest" data-motion-self>
    <pre
      class="code"
    ><code><span class="base">{{ BASE }}</span><span v-for="b in BLOCKS" :key="b.code" class="block">{{ b.code }}</span></code></pre>
    <div class="canvas">
      <svg
        class="wires"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          v-for="r in DOCKS"
          :key="r.label"
          x1="50"
          y1="50"
          :x2="r.x"
          :y2="r.y"
          class="wire"
          :data-step="r.step"
        />
      </svg>
      <div class="app">
        <span class="i-carbon-application" /><strong>min-app</strong>
      </div>
      <div
        v-for="r in DOCKS"
        :key="r.label"
        class="dock"
        :class="{ ext: r.ext }"
        :data-step="r.step"
        :style="{ left: r.x + '%', top: r.y + '%' }"
      >
        <span :class="r.icon" />
        <strong>{{ r.label }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, useSteps } from "./motion.js";

// Field names checked against the Application example in nais/doc
// (docs/workloads/application/reference/example.md), 2026-10-21.
const BASE =
  "apiVersion: nais.io/v1alpha1\nkind: Application\nmetadata: { name: min-app }\nspec:\n  image: ghcr.io/navikt/min-app:1.0.0\n  replicas: { min: 2, max: 4 }\n";
const BLOCKS = [
  { code: "  ingresses: [https://min-app.nav.no]\n" },
  {
    code: "  gcp:\n    sqlInstances: [{ type: POSTGRES_18 }]\n    buckets: [{ name: min-bucket }]\n",
  },
  { code: "  kafka: { pool: nav-prod }\n" },
  {
    code: "  idporten: { enabled: true }\n  azure: { application: { enabled: true } }\n  tokenx: { enabled: true }\n  maskinporten: { enabled: true }\n",
  },
  {
    code: "  accessPolicy:\n    inbound: { rules: [{ application: frontend }] }\n",
  },
  { code: "  observability:\n    autoInstrumentation: { enabled: true }\n" },
];
// Where each resource docks around the app (percent of the canvas).
const DOCKS = [
  { step: 1, x: 50, y: 9, label: "Adresse + TLS", icon: "i-carbon-globe" },
  { step: 2, x: 85, y: 30, label: "Postgres", icon: "i-carbon-data-base" },
  { step: 2, x: 85, y: 68, label: "Bucket", icon: "i-carbon-box" },
  { step: 3, x: 78, y: 91, label: "Kafka", icon: "i-carbon-flow-stream" },
  { step: 4, x: 15, y: 68, label: "Innlogging", icon: "i-carbon-password" },
  {
    step: 5,
    x: 15,
    y: 28,
    label: "frontend",
    icon: "i-carbon-application-web",
    ext: true,
  },
  {
    step: 6,
    x: 30,
    y: 91,
    label: "Logger · metrikker · traces",
    icon: "i-carbon-chart-line",
  },
];

const root = ref();
// s0: minimal manifest and the app. s1..s6: one block is written and its
// resources fly out and dock around the app; the previous block dims.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const blocks = q(".block");
  gsap.set(blocks, { height: 0, autoAlpha: 0 });
  gsap.set(q(".dock"), { autoAlpha: 0, x: -260, scale: 0.5 });
  gsap.set(q(".wire"), { opacity: 0 });
  tl.from(q(".code"), { autoAlpha: 0, x: -24 })
    .from(q(".app"), { scale: 0.5, autoAlpha: 0, ease: POP }, "-=0.3")
    .addLabel("s0");
  blocks.forEach((b, i) => {
    const step = i + 1;
    if (i)
      tl.to(blocks[i - 1], {
        color: "#64748b",
        backgroundColor: "rgba(0,0,0,0)",
        duration: 0.3,
      });
    else tl.to(q(".base"), { color: "#64748b", duration: 0.3 });
    tl.to(
      b,
      {
        height: "auto",
        autoAlpha: 1,
        backgroundColor: "rgba(232,56,79,0.22)",
        duration: 0.5,
      },
      "<",
    )
      .to(
        q(`.dock[data-step="${step}"]`),
        {
          autoAlpha: 1,
          x: 0,
          scale: 1,
          ease: POP,
          duration: 0.7,
          stagger: 0.1,
        },
        "-=0.1",
      )
      .to(
        q(`.wire[data-step="${step}"]`),
        { opacity: 0.6, duration: 0.3 },
        "<0.3",
      )
      .addLabel(`s${step}`);
  });
  return tl;
});
</script>

<style scoped>
.manifest {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
}

.code {
  margin: 0;
  padding: 0.7rem 0.9rem;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  line-height: 1.45;
  white-space: pre;
  overflow: hidden;
}

.base,
.block {
  display: block;
  border-radius: 4px;
  overflow: hidden;
}

.canvas {
  position: relative;
  height: 300px;
}

.wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.wire {
  stroke: var(--nais-accent);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.app,
.dock {
  position: absolute;
  translate: -50% -50%;
}

.app {
  left: 50%;
  top: 50%;
  width: 104px;
  height: 118px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

.app span {
  font-size: 1.8rem;
}

.dock {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: var(--nais-bg);
  border: 2px solid var(--nais-border);
  white-space: nowrap;
  font-size: 0.95rem;
}

.dock span {
  font-size: 1.2rem;
  color: var(--nais-accent);
}

.dock.ext {
  border-style: dashed;
}

.dock.ext span {
  color: var(--nais-text-secondary);
}
</style>
