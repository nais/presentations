<template>
  <div ref="root" class="fan" data-motion-self>
    <div class="row top">
      <div class="node app">
        <span class="i-carbon-document" /> Application <small>nais.yaml</small>
      </div>
    </div>
    <svg
      class="wires"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        v-for="(k, i) in CORE"
        :key="k.name"
        :d="wire(i, CORE.length, 26)"
        class="wire core"
      />
      <path
        v-for="(k, i) in OPS"
        :key="k.name"
        :d="wire(i, OPS.length, 40)"
        class="wire ops"
      />
    </svg>
    <div class="row mid">
      <div class="node ctrl">
        <span class="i-carbon-settings-adjust" /> Naiserator
      </div>
    </div>
    <div class="row grid core-row">
      <div v-for="k in CORE" :key="k.name" class="chip">{{ k.name }}</div>
    </div>
    <div class="row grid ops-row">
      <div v-for="k in OPS" :key="k.name" class="chip op">
        <strong>{{ k.name }}</strong>
        <small>{{ k.by }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// Resource kinds Naiserator creates (nais/naiserator pkg/resourcecreator) and
// the operators that act on the resources it hands over, 2026-10-21.
const CORE = [
  { name: "Deployment" },
  { name: "Service" },
  { name: "Ingress" },
  { name: "NetworkPolicy" },
  { name: "ServiceAccount" },
  { name: "HorizontalPodAutoscaler" },
  { name: "PodDisruptionBudget" },
  { name: "PodMonitor" },
];
const OPS = [
  { name: "Cloud SQL og buckets", by: "Config Connector" },
  { name: "Kafka-credentials", by: "aivenator" },
  { name: "Entra ID-app", by: "azurerator" },
  { name: "ID-porten og Maskinporten", by: "digdirator" },
  { name: "TokenX-klient", by: "jwker" },
];
const wire = (i, n, y) => {
  const x = ((i + 0.5) / n) * 100;
  return `M50 0 C50 ${y / 2} ${x} ${y / 2} ${x} ${y}`;
};

const root = ref();
// s0: Application and Naiserator. s1: Kubernetes resources. s2: operators.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".wire"), { opacity: 0 });
  gsap.set(q(".chip"), { autoAlpha: 0, y: 16 });
  tl.from(q(".app"), { autoAlpha: 0, y: -16 })
    .from(q(".ctrl"), { autoAlpha: 0, scale: 0.7, ease: POP }, "-=0.3")
    .addLabel("s0")
    .to(q(".wire.core"), { opacity: 0.6, stagger: 0.04, duration: 0.3 })
    .to(
      q(".core-row .chip"),
      { autoAlpha: 1, y: 0, stagger: STAGGER, ease: POP },
      "<",
    )
    .addLabel("s1")
    .to(q(".wire.ops"), { opacity: 0.6, stagger: 0.04, duration: 0.3 })
    .to(
      q(".ops-row .chip"),
      { autoAlpha: 1, y: 0, stagger: STAGGER, ease: POP },
      "<",
    )
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.fan {
  position: relative;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.row {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.wires {
  position: absolute;
  left: 0;
  right: 0;
  top: 7.2rem;
  height: 8rem;
  width: 100%;
  z-index: 0;
}

.wire {
  fill: none;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.wire.core {
  stroke: var(--nais-accent);
}

.wire.ops {
  stroke: var(--nais-text-secondary);
}

.node {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
}

.node small {
  font-family: "JetBrains Mono", monospace;
  font-weight: 400;
  font-size: 0.8rem;
  opacity: 0.8;
}

.app {
  background: #0f172a;
  color: #fff;
}

.ctrl {
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.grid {
  display: grid;
  gap: 0.4rem;
}

.core-row {
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3.5rem;
}

.ops-row {
  grid-template-columns: repeat(5, 1fr);
  margin-top: 0.6rem;
}

.chip {
  padding: 0.4rem 0.5rem;
  border-radius: 10px;
  text-align: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  background: var(--nais-accent-light);
  border: 1px solid #fecdd3;
}

.chip.op {
  font-family: "Inter", sans-serif;
  background: var(--nais-card);
  border-color: var(--nais-border);
}

.chip.op strong {
  display: block;
  font-size: 0.85rem;
}

.chip.op small {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}
</style>
