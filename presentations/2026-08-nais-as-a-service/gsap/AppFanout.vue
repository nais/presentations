<template>
  <div ref="root" class="fan" data-motion-self>
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

const root = ref();
// s0: Application and Naiserator. s1: trunk, bus and drops draw, then both groups pop.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".s2, .drop"), { scaleY: 0, transformOrigin: "50% 0%" });
  gsap.set(q(".bus"), { scaleX: 0 });
  gsap.set(q(".group h4, .chip"), { autoAlpha: 0, y: 12 });
  gsap.set(q(".group"), { borderColor: "transparent" });
  tl.from(q(".app"), { autoAlpha: 0, y: -16 })
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
  return tl;
});
</script>

<style scoped>
.fan {
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
</style>
