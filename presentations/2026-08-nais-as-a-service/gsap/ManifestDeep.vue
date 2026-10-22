<template>
  <div ref="root" class="manifest" data-motion-self>
    <div ref="left" class="left">
      <div ref="chat" class="chat">
        <p class="me">
          <b>Utvikler</b> Lag en Nais-app med Postgres og innlogging med
          ID-porten
        </p>
        <p class="bot">
          <b>KI-agent</b> <span class="tool">get_nais_context</span><span class="tool">nais://schema</span> Skriver nais.yaml …
        </p>
      </div>
      <pre
        class="code"
      ><code><span class="base">{{ BASE }}</span><span v-for="b in BLOCKS" :key="b.code" class="block">{{ b.code }}</span></code></pre>
    </div>
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
      <div class="app" data-anchor="hex">
        <span class="i-carbon-application" /><strong>min-app</strong>
      </div>
      <div
        v-for="r in DOCKS"
        :key="r.label"
        class="dock"
        :class="[{ ext: r.ext }, 'a-' + r.a]"
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
  "apiVersion: nais.io/v1alpha1\nkind: Application\nmetadata: { name: min-app, namespace: team-eksempel }\nspec:\n  image: ghcr.io/team-eksempel/min-app:1.0.0\n  replicas: { min: 2, max: 4 }\n";
const BLOCKS = [
  { code: "  ingresses: [https://min-app.eksempel.no]\n" },
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
// Fixed slots around the app, reserved from the start so nothing moves.
// Inbound on the left and top, data on the right, observability at the bottom.
// a: anchor (l = chip starts at x, r = chip ends at x, c = centred).
// Even radial slots around the app hexagon (canvas ≈ 446 x 300 px): top and
// bottom centred, three on the right, two on the left, each at least ~60 px
// from the hexagon so every connector stays visible.
const DOCKS = [
  {
    step: 1,
    x: 50,
    y: 12,
    a: "c",
    label: "Adresse og TLS",
    icon: "i-carbon-globe",
  },
  {
    step: 2,
    x: 72,
    y: 28,
    a: "l",
    label: "Postgres",
    icon: "i-carbon-data-base",
  },
  { step: 2, x: 77, y: 50, a: "l", label: "Bucket", icon: "i-carbon-box" },
  {
    step: 3,
    x: 72,
    y: 72,
    a: "l",
    label: "Kafka",
    icon: "i-carbon-flow-stream",
  },
  {
    step: 4,
    x: 28,
    y: 72,
    a: "r",
    label: "Tilgang",
    icon: "i-carbon-password",
  },
  {
    step: 5,
    x: 28,
    y: 28,
    a: "r",
    label: "frontend",
    icon: "i-carbon-application-web",
    ext: true,
  },
  {
    step: 6,
    x: 50,
    y: 88,
    a: "c",
    label: "Logger · metrikker · traces",
    icon: "i-carbon-chart-line",
  },
];

const root = ref();
const chat = ref();
const left = ref();

// s0: minimal manifest and the app. s1..s6: one block is written and its
// resources dock around the app; the previous block dims.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const blocks = q(".block");
  gsap.set(blocks, { height: 0, autoAlpha: 0 });
  gsap.set(q(".dock"), { autoAlpha: 0, scale: 0.4 });
  gsap.set(q(".wire"), { opacity: 0 });
  // The agent request comes first; the manifest is what the agent writes.
  tl.from(chat.value, { autoAlpha: 0, y: -12 })
    .from(q(".code"), { autoAlpha: 0, x: -24 }, "+=0.3")
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
        { autoAlpha: 1, scale: 1, ease: POP, duration: 0.6, stagger: 0.1 },
        "-=0.1",
      )
      .to(
        q(`.wire[data-step="${step}"]`),
        { opacity: 0.6, duration: 0.3 },
        "<0.2",
      )
      .addLabel(`s${step}`);
  });

  return tl;
});
</script>

<style scoped>
.manifest {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
}

.chat {
  margin-bottom: 0.3rem;
  padding: 0.25rem 0.6rem;
  border-radius: 10px;
  background: #0d1117;
  border: 1px solid #30363d;
  font-size: 0.68rem;
  line-height: 1.4;
}

.chat p {
  margin: 0;
}

.chat b {
  margin-right: 0.4rem;
  color: #8b949e;
}

.chat .bot b {
  color: #c297ff;
}

.tool {
  margin-right: 0.3rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: #1f2937;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.6rem;
  color: #a5b4fc;
}

.code {
  margin: 0;
  padding: 0.5rem 0.9rem;
  border-radius: 14px;
  background: #0f172a;
  border: 1px solid #263352;
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  line-height: 1.32;
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

.dock.a-l {
  translate: 0 -50%;
}

.dock.a-r {
  translate: -100% -50%;
}

.app {
  view-transition-name: app-hex;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 96px;
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
  font-size: 0.85rem;
}

.app span {
  font-size: 1.5rem;
}

.dock {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-border);
  white-space: nowrap;
  font-size: 0.85rem;
}

.dock span {
  font-size: 1.1rem;
  color: var(--nais-accent);
}

.dock.ext {
  border-style: dashed;
}

.dock.ext span {
  color: var(--nais-text-secondary);
}
</style>
