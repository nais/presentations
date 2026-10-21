<template>
  <BrowserFrame
    url="console.nais.io/team/team-eksempel/vulnerabilities"
    active="Sårbarheter"
  >
    <div ref="root" class="vulns" data-motion-self>
      <section class="chart">
        <h4>Sårbarheter over tid</h4>
        <svg viewBox="0 0 300 120" aria-hidden="true">
          <path class="low" d="M0 120 L0 70 L300 70 L300 120 Z" />
          <path class="mid" d="M0 70 L0 55 L300 55 L300 70 Z" />
          <path class="high" d="M0 55 L0 47 L300 47 L300 55 Z" />
          <path ref="crit" class="crit" :d="CALM" />
        </svg>
        <div class="legend">
          <i class="crit" />Kritisk <i class="high" />Høy
          <i class="mid" />Middels <i class="low" />Lav
        </div>
      </section>
      <section class="tiles">
        <div class="tile">
          <b ref="sbom">0 %</b><span>av workloads har SBOM</span>
        </div>
        <div class="tile">
          <b ref="critN">1</b><span>kritiske sårbarheter</span>
        </div>
        <div class="tile"><b ref="risk">120</b><span>risikoscore</span></div>
      </section>
      <section class="rows">
        <div v-for="w in WORKLOADS" :key="w" class="row">
          <span>{{ w }}</span><em>OK</em>
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
import { useSteps } from "./motion.js";

// Illustrative numbers only. Critical band: calm, then a spike at the end.
const CALM = "M0 47 L0 44 L100 44 L200 44 L240 44 L270 44 L300 44 L300 47 Z";
const SPIKE = "M0 47 L0 44 L100 44 L200 44 L240 30 L270 12 L300 10 L300 47 Z";
const FIXED = "M0 47 L0 44 L100 44 L200 44 L240 30 L270 40 L300 44 L300 47 Z";
const WORKLOADS = ["api-soknad", "frontend", "worker"];

const root = ref();
const crit = ref();
const sbom = ref();
const critN = ref();
const risk = ref();

const count = (el, to, suffix = "") => {
  const s = { v: Number.parseFloat(el.textContent) };
  return gsap.to(s, {
    v: to,
    duration: 0.9,
    onUpdate: () => (el.textContent = Math.round(s.v) + suffix),
  });
};

// s1: every build has an SBOM. s2: a new CVE lands. s3: dependency bumped and redeployed.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const row = q(".row")[0];
  const tag = row.querySelector("em");
  tl.from(q("section"), { autoAlpha: 0, y: 16, stagger: 0.08 })
    .addLabel("s0")
    .add(count(sbom.value, 100, " %"))
    .addLabel("s1")
    .to(crit.value, { attr: { d: SPIKE }, duration: 0.8 })
    .add(count(critN.value, 4), "<")
    .add(count(risk.value, 310), "<")
    .to(
      row,
      { backgroundColor: "#fef2f2", borderColor: "#fca5a5", duration: 0.3 },
      "<0.3",
    )
    .call(() => (tag.textContent = tl.reversed() ? "OK" : "Kritisk"), null, "<")
    .to(tag, { backgroundColor: "#e8384f", duration: 0.3 }, "<")
    .addLabel("s2")
    .to(crit.value, { attr: { d: FIXED }, duration: 0.8 })
    .add(count(critN.value, 1), "<")
    .add(count(risk.value, 125), "<")
    .to(
      row,
      { backgroundColor: "#f0fdf4", borderColor: "#86efac", duration: 0.3 },
      "<0.3",
    )
    .call(
      () => (tag.textContent = tl.reversed() ? "Kritisk" : "Oppdatert"),
      null,
      "<",
    )
    .to(tag, { backgroundColor: "#10b981", duration: 0.3 }, "<")
    .addLabel("s3");
  return tl;
});
</script>

<style scoped>
.vulns {
  position: relative;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.6rem 1rem;
}

h4 {
  margin: 0 0 0.3rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
}

svg {
  width: 100%;
  height: 120px;
}

.low {
  fill: #cbd5e1;
}
.mid {
  fill: #fde68a;
}
.high {
  fill: #fca5a5;
}
.crit {
  fill: #e8384f;
}

.legend {
  display: flex;
  gap: 0.6rem;
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

.legend i {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  margin-right: -0.3rem;
}

.legend i.low {
  background: #cbd5e1;
}
.legend i.mid {
  background: #fde68a;
}
.legend i.high {
  background: #fca5a5;
}
.legend i.crit {
  background: #e8384f;
}

.tiles {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.tile {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.35rem 0.6rem;
  border-radius: 10px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.tile b {
  min-width: 4.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-variant-numeric: tabular-nums;
  color: var(--nais-accent);
}

.tile span {
  font-size: 0.8rem;
}

.rows {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--nais-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
}

.row em {
  font-style: normal;
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: #10b981;
}

.note {
  position: absolute;
  right: 0;
  bottom: -1.4rem;
  margin: 0;
  font-size: 0.7rem;
  color: var(--nais-text-secondary);
}
</style>
