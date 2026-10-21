<template>
  <BrowserFrame url="console.nais.io/team/team-eksempel/cost" active="Kostnad">
    <div ref="root" class="data" data-motion-self>
      <section class="apps">
        <h4>Apper</h4>
        <div v-for="a in APPS" :key="a.name" class="app"><i />{{ a.name }}</div>
      </section>
      <section class="services">
        <h4>Datatjenester</h4>
        <div v-for="s in SERVICES" :key="s.name" class="svc">
          <span :class="s.icon" /><strong>{{ s.name }}</strong><small>{{ s.used }}</small>
        </div>
      </section>
      <section class="cost">
        <h4>Kostnad per app</h4>
        <div v-for="a in APPS" :key="a.name" class="bar-row">
          <span>{{ a.name }}</span>
          <div class="track">
            <div class="bar" :style="{ width: (a.cost / max) * 100 + '%' }" />
          </div>
          <b>{{ fmt(a.cost) }} kr</b>
        </div>
      </section>
      <p class="note">Illustrasjon</p>
    </div>
  </BrowserFrame>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import BrowserFrame from "./BrowserFrame.vue";
import { STAGGER, useSteps } from "./motion.js";

// Illustrative numbers only.
const APPS = [
  { name: "api-soknad", cost: 2400 },
  { name: "frontend", cost: 900 },
  { name: "worker", cost: 1500 },
];
const SERVICES = [
  { name: "Postgres", icon: "i-carbon-data-base", used: "api-soknad, worker" },
  { name: "Valkey", icon: "i-carbon-flash", used: "frontend" },
  { name: "OpenSearch", icon: "i-carbon-search", used: "api-soknad" },
];
const fmt = (v) => v.toLocaleString("nb-NO").replace(/\s/g, "\u202f");
const max = Math.max(...APPS.map((a) => a.cost));

const root = ref();
// s0: apps. s1: their data services. s2: cost per app.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".services, .cost"), { autoAlpha: 0, y: 16 });
  tl.from(q(".apps"), { autoAlpha: 0, y: 16 })
    .addLabel("s0")
    .to(q(".services"), { autoAlpha: 1, y: 0 })
    .from(q(".svc"), { x: -16, autoAlpha: 0, stagger: STAGGER }, "<0.1")
    .addLabel("s1")
    .to(q(".cost"), { autoAlpha: 1, y: 0 })
    .from(
      q(".bar"),
      { scaleX: 0, transformOrigin: "0 50%", stagger: STAGGER, duration: 0.8 },
      "<0.1",
    )
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.data {
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 0.7rem 1rem;
}

h4 {
  margin: 0 0 0.35rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
}

.app {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.5rem;
  margin-bottom: 0.3rem;
  border-radius: 8px;
  border: 1px solid var(--nais-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
}

.app i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--nais-success);
}

.svc {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.5rem;
  margin-bottom: 0.3rem;
  border-radius: 8px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
  font-size: 0.85rem;
}

.svc span {
  color: var(--nais-accent);
}

.svc small {
  margin-left: auto;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
}

.cost {
  grid-column: 1 / -1;
}

.bar-row {
  display: grid;
  grid-template-columns: 7rem 1fr 5rem;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
}

.bar-row span {
  font-family: "JetBrains Mono", monospace;
}

.track {
  height: 12px;
  border-radius: 6px;
  background: var(--nais-surface);
}

.bar {
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.bar-row b {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.note {
  position: absolute;
  right: 0;
  bottom: -1.3rem;
  margin: 0;
  font-size: 0.7rem;
  color: var(--nais-text-secondary);
}
</style>
