<template>
  <div ref="root" class="fan" data-motion-self>
    <div class="fan-body">
      <div class="node app">
        <span class="i-carbon-document" /> Application <small>nais.yaml</small>
      </div>
      <div class="stem s1" />
      <div class="node ctrl">
        <span class="i-carbon-settings-adjust" /> Naiserator
      </div>
      <div class="stem s2" />
      <div class="bus" />
      <div class="groups">
        <section class="group">
          <div class="drop" />
          <h4>Kubernetes-ressurser</h4>
          <div class="grid k8s">
            <div v-for="k in CORE" :key="k" class="chip">{{ k }}</div>
          </div>
        </section>
        <section class="group">
          <div class="drop" />
          <h4>Via operatorer</h4>
          <div class="grid ops">
            <div v-for="k in OPS" :key="k.name" class="chip op">
              <strong>{{ k.name }}</strong>
              <small>{{ k.by }}</small>
            </div>
          </div>
        </section>
      </div>
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
import { POP, STAGGER, useSteps } from "./motion.js";

// Resource kinds Naiserator creates (nais/naiserator pkg/resourcecreator) and
// the operators that act on what it hands over, 2026-10-21.
const CORE = [
  "Deployment",
  "Service",
  "Ingress",
  "NetworkPolicy",
  "ServiceAccount",
  "HorizontalPodAutoscaler",
  "PodDisruptionBudget",
  "PodMonitor",
];
const OPS = [
  { name: "Cloud SQL og buckets", by: "Config Connector" },
  { name: "Kafka-tilgang", by: "aivenator" },
  { name: "Entra ID-app", by: "azurerator" },
  { name: "ID-porten og Maskinporten", by: "digdirator" },
  { name: "TokenX-klient", by: "jwker" },
];

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

const root = ref();
const galaxy = ref();
// s0: Application and Naiserator. s1: trunk, bus and drops draw, then both groups pop.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".s2, .drop"), { scaleY: 0, transformOrigin: "50% 0%" });
  gsap.set(q(".bus"), { scaleX: 0 });
  gsap.set(q(".group h4, .chip"), { autoAlpha: 0, y: 12 });
  gsap.set(q(".group"), { borderColor: "transparent" });
  // The Application node arrives through the view transition, so no entrance.
  tl.to({}, { duration: 0.01 })
    .from(q(".s1"), { scaleY: 0, transformOrigin: "50% 0%", duration: 0.3 })
    .from(q(".ctrl"), { autoAlpha: 0, scale: 0.7, ease: POP })
    .addLabel("s0")
    .to(q(".s2"), { scaleY: 1, duration: 0.25 })
    .to(q(".bus"), { scaleX: 1, duration: 0.4, ease: "power2.inOut" })
    .to(q(".drop"), { scaleY: 1, duration: 0.25 })
    .to(q(".group"), { borderColor: "#263352", duration: 0.3 })
    .to(q(".group h4"), { autoAlpha: 1, y: 0, stagger: 0.1 }, "<")
    .to(
      q(".chip"),
      { autoAlpha: 1, y: 0, stagger: STAGGER / 2, ease: POP },
      "-=0.1",
    )
    .addLabel("s1");
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
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.fan {
  position: relative;
}

.fan-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.node {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.1rem;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
}

.node small {
  font-family: "JetBrains Mono", monospace;
  font-weight: 400;
  font-size: 0.75rem;
  opacity: 0.8;
}

.app {
  view-transition-name: app-hex;
  background: #1e293b;
  border: 1px solid #334155;
}

.ctrl {
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.stem {
  width: 3px;
  height: 14px;
  background: var(--nais-accent);
}

.bus {
  width: 50%;
  height: 3px;
  background: var(--nais-accent);
}

.groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
}

.group {
  position: relative;
  padding: 0.6rem 0.7rem;
  margin-top: 16px;
  border-radius: 14px;
  border: 2px solid #263352;
}

.drop {
  position: absolute;
  left: 50%;
  top: -18px;
  width: 3px;
  height: 16px;
  background: var(--nais-accent);
}

h4 {
  margin: 0 0 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
}

.grid {
  display: grid;
  gap: 0.4rem;
}

.k8s {
  grid-template-columns: 1fr 1fr;
}

.ops {
  grid-template-columns: 1fr 1fr;
}

.ops .chip:last-child {
  grid-column: 1 / -1;
}

.chip {
  padding: 0.3rem 0.5rem;
  border-radius: 9px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  text-align: center;
  background: var(--nais-accent-light);
  border: 1px solid rgb(255 51 119 / 0.4);
}

.chip.op {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 0.25rem 0.5rem;
  text-align: center;
  font-family: "Inter", sans-serif;
  background: var(--nais-surface);
  border-color: var(--nais-border);
}

.chip.op strong {
  font-size: 0.82rem;
  white-space: nowrap;
}

.chip.op small {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
  white-space: nowrap;
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
