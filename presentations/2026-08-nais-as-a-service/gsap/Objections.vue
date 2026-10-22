<template>
  <div ref="root" class="obj" data-motion-self>
    <div v-for="(o, i) in ITEMS" :key="o.q" class="pair" :data-i="i">
      <div class="q"><span class="i-carbon-help" /> {{ o.q }}</div>
      <div class="a"><span class="i-carbon-checkmark-outline" /> {{ o.a }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, useSteps } from "./motion.js";

// One objection per click: the question pops in, the answer slides under it.
const ITEMS = [
  {
    q: "GOV.UK PaaS ble lagt ned. Hva om Nais også blir det?",
    a: "Nais bygger på Kubernetes, ikke en egen kjøreplattform. Og Nav er selv den største tenanten, med ≈4 700 av 5 212 apper.",
  },
  {
    q: "Blir vi låst inne?",
    a: "Dere går ut med standarder: Kubernetes, Postgres, Kafka, OpenTelemetry og containere.",
  },
  {
    q: "Blir vi avhengige av Nav?",
    a: "Vakt døgnet rundt med Googles support i ryggen, og vi tar bare inn 1–2 nye tenants per år.",
  },
  {
    q: "Dere har ingen formell SLA?",
    a: "Nei. Vi måler: 99,88 % uten 5xx-feil siste 30 dager i Nav, feil i appene inkludert.",
  },
];

const root = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".q"), { autoAlpha: 0, scale: 0.8 });
  gsap.set(q(".a"), { autoAlpha: 0, x: -20 });
  tl.addLabel("s0");
  ITEMS.forEach((_, i) => {
    tl.to(q(".q")[i], { autoAlpha: 1, scale: 1, ease: POP, duration: 0.5 })
      .to(q(".a")[i], { autoAlpha: 1, x: 0 }, "-=0.1")
      .addLabel(`s${i + 1}`);
  });
  return tl;
});
</script>

<style scoped>
.obj {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 1.8rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.q {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 14px 14px 14px 4px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
}

.q span {
  color: #fbbf24;
  flex: none;
}

.a {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 0 1.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 14px 14px 4px 14px;
  background: var(--nais-accent-light);
  border: 1px solid rgb(255 51 119 / 0.4);
  font-size: 0.85rem;
  line-height: 1.4;
}

.a span {
  color: var(--nais-success);
  flex: none;
  margin-top: 0.15rem;
}
</style>
