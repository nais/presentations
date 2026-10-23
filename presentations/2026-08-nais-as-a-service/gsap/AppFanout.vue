<template>
  <div ref="root" class="fan" data-motion-self>
    <div class="fan-body">
      <svg
        class="wires"
        viewBox="0 0 1000 330"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect class="cluster" x="30" y="178" width="420" height="146" rx="14" />
        <path
          v-for="w in WIRES"
          :key="w.id"
          :d="w.d"
          class="w"
          :class="w.kind"
          :data-w="w.id"
        />
      </svg>
      <span class="clabel">Nais-cluster</span>
      <!-- Clients: everything talks to Nais API. -->
      <div
        v-for="c in CLIENTS"
        :key="c.id"
        class="node client"
        :class="['c-' + c.id, { deploy: c.id === 'deploy' }]"
        :style="at(c)"
      >
        <span :class="c.icon" /> {{ c.label }}
        <small v-if="c.sub">{{ c.sub }}</small>
      </div>
      <div class="node api" :style="at(API)">
        <span class="i-carbon-api" /> Nais API
      </div>
      <!-- App branch: nais deploy hands the manifest to Naiserator in the cluster. -->
      <div class="node ctrl" :style="at(NAISERATOR)">
        <span class="i-carbon-settings-adjust" /> Naiserator
      </div>
      <div
        class="group g-k8s"
        :style="{ left: '5%', top: '74%', width: '38%' }"
      >
        <div v-for="k in K8S" :key="k" class="chip">{{ k }}</div>
      </div>
      <section
        v-for="g in GROUPS"
        :key="g.title"
        class="group box"
        :style="g.style"
      >
        <h4>{{ g.title }}</h4>
        <div v-for="k in g.items" :key="k" class="chip">{{ k }}</div>
      </section>
    </div>
    <div ref="galaxy" class="galaxy">
      <svg viewBox="0 0 1000 400" aria-hidden="true">
        <text x="10" y="24" class="env">dev</text>
        <text x="10" y="224" class="env">prod</text>
        <line x1="0" y1="200" x2="1000" y2="200" class="split" />
        <line
          v-for="(l, i) in LINKS"
          :key="'l' + i"
          :x1="l[0].x"
          :y1="l[0].y"
          :x2="l[1].x"
          :y2="l[1].y"
          class="link"
        />
        <g
          v-for="(c, i) in CLUSTERS"
          :key="i"
          class="cl"
          :transform="`translate(${c.x} ${c.y})`"
        >
          <circle
            v-for="k in 3"
            :key="k"
            :cx="Math.cos(k * 2.1) * 17"
            :cy="Math.sin(k * 2.1) * 17"
            r="2.6"
            :fill="c.color"
            opacity="0.7"
          />
          <polygon
            points="0,-11 9.5,-5.5 9.5,5.5 0,11 -9.5,5.5 -9.5,-5.5"
            :fill="c.me ? '#ff3377' : c.color"
          />
        </g>
      </svg>
      <p class="zoom-text">Tusenvis av apper. Ett plattformteam.</p>
      <div class="zoom-badge">
        <span class="i-carbon-user-multiple" /> Nais-teamet
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { POP, STAGGER, useSteps } from "./motion.js";

// Simplified (see the notes): clients talk to Nais API; nais deploy hands
// the manifest to Naiserator, which reconciles it into Kubernetes objects;
// the api-reconcilers set up team resources and data services.
// Coordinates in a 1000 x 330 box.
const CLIENTS = [
  {
    id: "deploy",
    label: "nais deploy",
    sub: "GitHub Actions",
    icon: "i-carbon-rocket",
    x: 160,
    y: 32,
  },
  {
    id: "console",
    label: "Console",
    icon: "i-carbon-dashboard",
    x: 390,
    y: 32,
  },
  { id: "cli", label: "Nais CLI", icon: "i-carbon-terminal", x: 610, y: 32 },
  {
    id: "mcp",
    label: "MCP for KI-agenter",
    icon: "i-carbon-bot",
    x: 840,
    y: 32,
  },
];
const API = { x: 600, y: 125 };
const NAISERATOR = { x: 160, y: 222 };
const K8S = ["Deployment", "Service", "NetworkPolicy", "Ingress", "Secrets"];
const GROUPS = [
  {
    title: "Teamressurser",
    items: ["GCP-prosjekt", "GitHub-team", "Entra ID-gruppe"],
    style: { left: "50%", top: "56%", width: "22%" },
  },
  {
    title: "Datatjenester",
    items: ["Postgres", "Buckets", "Kafka", "Valkey", "OpenSearch"],
    style: { left: "76%", top: "56%", width: "22%" },
  },
];
const WIRES = [
  // s2: the clients connect to Nais API (one bus).
  { id: "console", d: "M390 50 V82 H600 V108", kind: "c" },
  { id: "cli", d: "M610 50 V82", kind: "c" },
  { id: "mcp", d: "M840 50 V82 H600", kind: "c" },
  { id: "deploy", d: "M160 56 V82 H600", kind: "c" },
  // s3: the manifest goes to Naiserator; Nais API fans out.
  { id: "manifest", d: "M160 56 V206", kind: "m" },
  { id: "team", d: "M600 142 V164 H610 V185", kind: "f" },
  { id: "data", d: "M600 142 V164 H870 V185", kind: "f" },
];
const at = (p) => ({ left: p.x / 10 + "%", top: (p.y / 330) * 100 + "%" });

// Zoom-out constellation: many app clusters, three team colours, dev and prod.
const TEAMS = ["#5cb2da", "#9b6fd6", "#34c27a"];
const CLUSTERS = [];
for (let row = 0; row < 6; row++)
  for (let col = 0; col < 16; col++) {
    const jx = ((col * 37 + row * 53) % 17) - 8;
    const jy = ((col * 29 + row * 41) % 13) - 6;
    CLUSTERS.push({
      x: 90 + col * 56 + jx,
      y: 35 + row * 60 + (row > 2 ? 20 : 0) + jy,
      color: TEAMS[Math.floor(col / 6) % 3],
      me: row === 4 && col === 8,
    });
  }
const LINKS = [];
CLUSTERS.forEach((c, i) => {
  if (i % 3 === 0 && i % 16 !== 15) LINKS.push([c, CLUSTERS[i + 1]]);
  if (i % 5 === 0 && CLUSTERS[i + 16]) LINKS.push([c, CLUSTERS[i + 16]]);
});

gsap.registerPlugin(DrawSVGPlugin);

const root = ref();
const galaxy = ref();
// s0: Nais API, and the deploy chip arriving from the PR slide.
// s1: the other clients. s2: they connect to Nais API. s3: nais deploy hands
// the manifest to Naiserator in the cluster, and Nais API fans out.
// s4: zoom out to thousands of apps.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const w = (id) => root.value.querySelector(`[data-w="${id}"]`);
  gsap.set(q(".w"), { drawSVG: "0%" });
  gsap.set(q(".client:not(.deploy), .ctrl, .cluster, .clabel, .group, .chip"), {
    autoAlpha: 0,
  });
  // The deploy chip arrives through the view transition, so no entrance.
  tl.from(q(".api"), { autoAlpha: 0, scale: 0.7, ease: POP })
    .addLabel("s0")
    .to(q(".client:not(.deploy)"), {
      autoAlpha: 1,
      stagger: 0.12,
      duration: 0.4,
    })
    .addLabel("s1")
    .to(["console", "cli", "mcp", "deploy"].map(w), {
      drawSVG: "100%",
      duration: 0.6,
      stagger: 0.12,
    })
    .to(q(".api"), {
      boxShadow: "0 0 22px rgb(255 51 119 / 0.55)",
      duration: 0.3,
    })
    .addLabel("s2")
    .to(q(".cluster, .clabel"), { autoAlpha: 1, duration: 0.3 })
    .to(w("manifest"), { drawSVG: "100%", duration: 0.5 })
    .to(q(".ctrl"), { autoAlpha: 1, scale: 1, ease: POP })
    .to(q(".g-k8s, .g-k8s .chip"), {
      autoAlpha: 1,
      stagger: STAGGER / 2,
      ease: POP,
    })
    .to([w("team"), w("data")], { drawSVG: "100%", duration: 0.5 }, "<")
    .to(
      q(".box, .box .chip"),
      { autoAlpha: 1, stagger: STAGGER / 2, ease: POP },
      "-=0.2",
    )
    .addLabel("s3");
  // s2: zoom out from one app to the whole environment.
  const g = gsap.utils.selector(galaxy.value);
  gsap.set(galaxy.value, { autoAlpha: 0 });
  gsap.set(g(".zoom-text, .zoom-badge"), { autoAlpha: 0, y: 16 });
  tl.to(q(".fan-body"), {
    scale: 0.15,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power2.inOut",
  })
    .to(galaxy.value, { autoAlpha: 1, duration: 0.4 }, "-=0.5")
    .from(
      g(".cl"),
      {
        scale: 0,
        transformOrigin: "50% 50%",
        stagger: { each: 0.008, from: "center" },
        duration: 0.4,
      },
      "<",
    )
    .from(g(".link, .split, .env"), { autoAlpha: 0, duration: 0.5 }, "-=0.2")
    .to(g(".zoom-text"), { autoAlpha: 1, y: 0 })
    .to(g(".zoom-badge"), { autoAlpha: 1, y: 0, ease: POP }, "-=0.3")
    .addLabel("s4");
  return tl;
});
</script>

<style scoped>
.fan {
  position: relative;
}

.fan-body {
  position: relative;
  width: 100%;
  max-width: 960px;
  height: 340px;
  margin: 0 auto;
}

.wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.w {
  fill: none;
  stroke: var(--nais-accent);
  stroke-width: 3;
  vector-effect: non-scaling-stroke;
}

.w.m {
  stroke: #34d399;
}

.cluster {
  fill: none;
  stroke: #475569;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.clabel {
  position: absolute;
  left: 4%;
  top: 55.5%;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.66rem;
  color: var(--nais-text-secondary);
}

.node {
  position: absolute;
  translate: -50% -50%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.9rem;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #fff;
  white-space: nowrap;
}

.node small {
  font-family: "JetBrains Mono", monospace;
  font-weight: 400;
  font-size: 0.7rem;
  opacity: 0.85;
}

.client {
  background: #1e293b;
  border: 1px solid #334155;
}

.api,
.ctrl {
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.api {
  font-size: 1.15rem;
  padding: 0.5rem 1.2rem;
}

.group {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35rem;
}

.group.box {
  padding: 0.5rem 0.6rem;
  border-radius: 14px;
  border: 2px solid #263352;
}

h4 {
  width: 100%;
  margin: 0 0 0.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  text-align: center;
}

.chip {
  padding: 0.25rem 0.5rem;
  border-radius: 9px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  text-align: center;
  background: var(--nais-accent-light);
  border: 1px solid rgb(255 51 119 / 0.4);
}

.galaxy {
  will-change: transform, opacity;
  position: absolute;
  inset: 0;
  z-index: 3;
}

.galaxy svg {
  width: 100%;
  height: 100%;
}

.link {
  stroke: #475569;
  stroke-width: 1.5;
}

.split {
  stroke: #334155;
  stroke-dasharray: 6 6;
}

.env {
  fill: #a3b1c6;
  font-size: 18px;
  font-family: "JetBrains Mono", monospace;
}

.zoom-text {
  position: absolute;
  left: 50%;
  top: 40%;
  translate: -50% -50%;
  margin: 0;
  padding: 0.5rem 1.2rem;
  border-radius: 14px;
  background: rgb(11 17 32 / 0.88);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  white-space: nowrap;
}

.zoom-badge {
  position: absolute;
  left: 50%;
  bottom: 0;
  translate: -50% 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}
</style>
