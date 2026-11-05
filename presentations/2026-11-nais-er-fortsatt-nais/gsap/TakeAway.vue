<template>
  <div ref="root" class="take" data-motion-self>
    <!-- Left: Nais, linked to the tenant. After the click the reasons take
         its place. -->
    <div class="left">
      <div ref="platform" class="platform" data-anchor="hex">
        <b>Nais</b>
      </div>
      <ul class="why">
        <li v-for="w in WHY" :key="w">{{ w }}</li>
      </ul>
    </div>
    <div ref="link" class="link"><i /></div>
    <!-- The tenant card heads the box: what you take with you belongs to it. -->
    <div ref="bundle" class="bundle">
      <div ref="card" class="card">
        <small>Tenant</small>
        <b>Din virksomhet</b>
      </div>
      <div class="techs">
        <div v-for="t in TECH" :key="t.name" class="tech">
          <span :class="t.icon" />
          <small>{{ t.name }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { STAGGER, useSteps } from "./motion.js";

// Open technologies a tenant keeps if it leaves. All are documented on
// docs.nais.io. Postgres and buckets are moving to Nais-owned, portable
// building blocks (Nais Postgres on CloudNativePG and Nais Buckets); work in progress.
const TECH = [
  { name: "Kubernetes", icon: "i-simple-icons-kubernetes" },
  { name: "Containere", icon: "i-simple-icons-docker" },
  { name: "Postgres", icon: "i-simple-icons-postgresql" },
  { name: "Kafka", icon: "i-simple-icons-apachekafka" },
  { name: "OpenSearch", icon: "i-simple-icons-opensearch" },
  { name: "Valkey", icon: "i-carbon-flash" },
  { name: "OpenTelemetry", icon: "i-simple-icons-opentelemetry" },
  { name: "Prometheus", icon: "i-simple-icons-prometheus" },
  { name: "Grafana", icon: "i-simple-icons-grafana" },
  { name: "GitHub Actions", icon: "i-simple-icons-githubactions" },
];
const WHY = [
  "Utprøvd teknologi som utviklere kjenner",
  "Postgres og Docker topper Stack Overflow Developer Survey",
  "Ingen innlåsing hos én leverandør",
  "Dere kan flytte mellom leverandører",
];
const root = ref();
const platform = ref();
const link = ref();
const bundle = ref();
const card = ref();
// s0: the tenant runs on Nais (a live link to its box of technology).
// s1: the link breaks, Nais steps back and makes room for the reasons; the
// tenant and everything it uses stay where they are.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".why li"), { autoAlpha: 0, x: -16 });
  tl.from(platform.value, { autoAlpha: 0, y: 16 })
    .from(card.value, { autoAlpha: 0, y: 16 }, "<0.15")
    .from(q(".techs"), { autoAlpha: 0, duration: 0.3 }, "<0.1")
    .from(
      link.value,
      { scaleX: 0, transformOrigin: "0 50%", duration: 0.4 },
      "-=0.1",
    )
    .from(
      q(".tech"),
      { autoAlpha: 0, y: 10, stagger: 0.04, duration: 0.35 },
      "-=0.2",
    )
    .addLabel("s0")
    // The link snaps in the middle, then Nais steps back.
    .to(q(".link i"), {
      scaleX: 0,
      transformOrigin: "50% 50%",
      duration: 0.3,
      ease: "power2.in",
    })
    .to(link.value, { autoAlpha: 0, duration: 0.2 })
    .to(
      platform.value,
      { autoAlpha: 0, scale: 0.8, x: -30, duration: 0.5 },
      "<",
    )
    .to(q(".why li"), { autoAlpha: 1, x: 0, stagger: STAGGER * 2 }, "-=0.1")
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.take {
  display: grid;
  grid-template-columns: 30% 8% 1fr;
  align-items: center;
  width: 100%;
  max-width: 980px;
  min-height: 360px;
  margin: 0 auto;
}

.left {
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
}

.left > * {
  grid-area: 1 / 1;
}

.platform {
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 150px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
}

.why {
  justify-self: start;
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
  font-size: 0.95rem;
}

.why li {
  margin-bottom: 0.45rem;
}

.link {
  height: 3px;
  align-self: center;
}

.link i {
  display: block;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    #ff3377 0 8px,
    transparent 8px 13px
  );
}

.bundle {
  border: 2px solid #34d399;
  border-radius: 16px;
  overflow: hidden;
}

.card {
  padding: 0.5rem 1rem;
  background: #0f2a22;
  border-bottom: 1px solid rgb(52 211 153 / 0.5);
  text-align: center;
}

.card small {
  display: block;
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

.card b {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
}

.techs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem 0.4rem;
  padding: 1.1rem 0.8rem;
  background: var(--nais-surface);
}

.tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.tech span {
  font-size: 2.3rem;
}

.tech small {
  font-size: 0.8rem;
  white-space: nowrap;
}
</style>
