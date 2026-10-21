<template>
  <div ref="root" class="manifest" data-motion-self>
    <pre
      class="code"
    ><code><span v-for="(b, i) in BLOCKS" :key="i" class="block" :class="{ plain: !b.res }">{{ b.code }}</span></code></pre>
    <div class="results">
      <div v-for="(b, i) in withRes" :key="i" class="res">
        <span :class="b.icon" />
        <div>
          <strong>{{ b.res }}</strong>
          <small>{{ b.sub }}</small>
        </div>
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
const BLOCKS = [
  {
    code: "apiVersion: nais.io/v1alpha1\nkind: Application\nmetadata: { name: min-app }\nspec:\n",
  },
  {
    code: "  image: ghcr.io/navikt/min-app:1.0.0\n  replicas: { min: 2, max: 4 }\n",
    res: "Deployment og autoskalering",
    sub: "Pods, HPA, PodDisruptionBudget",
    icon: "i-carbon-container-software",
  },
  {
    code: "  ingresses: [https://min-app.nav.no]\n",
    res: "Ingress med TLS",
    sub: "Adresse og sertifikat",
    icon: "i-carbon-globe",
  },
  {
    code: "  gcp:\n    sqlInstances: [{ type: POSTGRES_18 }]\n    buckets: [{ name: min-bucket }]\n",
    res: "Postgres og bucket",
    sub: "Cloud SQL og Cloud Storage, med tilgang",
    icon: "i-carbon-data-base",
  },
  {
    code: "  kafka: { pool: nav-prod }\n",
    res: "Kafka-tilgang",
    sub: "Credentials som secret",
    icon: "i-carbon-flow-stream",
  },
  {
    code: "  idporten: { enabled: true }\n  azure: { application: { enabled: true } }\n  tokenx: { enabled: true }\n  maskinporten: { enabled: true }\n",
    res: "Innlogging og tokens",
    sub: "ID-porten, Entra ID, TokenX, Maskinporten",
    icon: "i-carbon-password",
  },
  {
    code: "  accessPolicy:\n    inbound: { rules: [{ application: frontend }] }\n",
    res: "Nettverkspolicy",
    sub: "Bare det du har sagt ja til",
    icon: "i-carbon-security",
  },
  {
    code: "  observability:\n    autoInstrumentation: { enabled: true }\n",
    res: "Logger, metrikker og traces",
    sub: "Rett inn i Grafana",
    icon: "i-carbon-chart-line",
  },
];
const withRes = BLOCKS.filter((b) => b.res);

const root = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const blocks = q(".block:not(.plain)");
  const res = q(".res");
  gsap.set(res, { autoAlpha: 0, x: 24 });
  tl.from(q(".code"), { autoAlpha: 0, x: -24 }).addLabel("s0");
  blocks.forEach((b, i) => {
    if (i)
      tl.to(blocks[i - 1], {
        backgroundColor: "rgba(232,56,79,0)",
        color: "#cbd5e1",
        duration: 0.3,
      });
    tl.to(
      b,
      { backgroundColor: "rgba(232,56,79,0.25)", color: "#fff", duration: 0.3 },
      i ? "<" : ">",
    )
      .to(res[i], { autoAlpha: 1, x: 0, ease: POP, duration: 0.5 }, "<")
      .addLabel(`s${i + 1}`);
  });
  return tl;
});
</script>

<style scoped>
.manifest {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  align-items: start;
}

.code {
  margin: 0;
  padding: 0.8rem 1rem;
  border-radius: 14px;
  background: #0f172a;
  color: #cbd5e1;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  line-height: 1.55;
  white-space: pre;
  overflow: hidden;
}

.block {
  display: block;
  border-radius: 4px;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.res {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.res > span {
  font-size: 1.25rem;
  color: var(--nais-accent);
}

.res strong {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  line-height: 1.25;
}

.res small {
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}
</style>
