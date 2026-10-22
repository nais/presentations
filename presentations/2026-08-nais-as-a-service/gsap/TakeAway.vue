<template>
  <div ref="root" class="take" data-motion-self>
    <div class="platform" data-anchor="hex">
      <span class="hexi" />
      <b>Nais</b>
    </div>
    <div ref="card" class="card">
      <small>Tenant</small>
      <b>Din virksomhet</b>
    </div>
    <div v-for="(t, i) in TECH" :key="t.name" class="tech" :style="slot(i)">
      <span :class="t.icon" />
      <small>{{ t.name }}</small>
    </div>
    <ul class="why">
      <li v-for="w in WHY" :key="w">{{ w }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

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
  "Ingen problematisk binding til én leverandør",
  "Gjør det mulig å flytte mellom leverandører",
];
// Logos orbit the platform; after the click they gather around the tenant.
const slot = (i, cx = 30) => {
  const a = (i / TECH.length) * Math.PI * 2 - Math.PI / 2;
  return {
    left: cx + 13 * Math.cos(a) + "%",
    top: 44 + 34 * Math.sin(a) + "%",
  };
};

const root = ref();
const card = ref();
// s0: logos around Nais, tenant card below. s1: the tenant moves out to the
// right and the logos keep orbiting it; the reasons appear on the left.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const techs = q(".tech");
  gsap.set(q(".why li"), { autoAlpha: 0, x: 20 });
  tl.from(q(".platform"), { scale: 0.6, autoAlpha: 0, ease: POP })
    .from(card.value, { autoAlpha: 0, x: -20 }, "<0.2")
    .from(
      techs,
      { scale: 0, autoAlpha: 0, stagger: STAGGER / 2, ease: POP },
      "<0.2",
    )
    .addLabel("s0")
    .to(q(".platform"), { autoAlpha: 0, x: -120, scale: 0.6, duration: 0.6 })
    .to(
      card.value,
      { left: "72%", top: "44%", duration: 1, ease: "power2.inOut" },
      "<",
    )
    .to(
      techs,
      {
        left: (i) => slot(i, 72).left,
        top: (i) => slot(i, 72).top,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.04,
      },
      "<",
    )
    .to(q(".why li"), { autoAlpha: 1, x: 0, stagger: STAGGER * 2 })
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.take {
  position: relative;
  width: 100%;
  max-width: 960px;
  height: 340px;
  margin: 0 auto;
}

.platform,
.card,
.tech {
  position: absolute;
  translate: -50% -50%;
}

.platform {
  left: 30%;
  top: 44%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 126px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
}

.card {
  z-index: 2;
  left: 30%;
  top: 92%;
  padding: 0.4rem 1rem;
  border-radius: 12px;
  border: 2px solid #34d399;
  background: var(--nais-surface);
  text-align: center;
  white-space: nowrap;
}

.card small {
  display: block;
  font-size: 0.7rem;
  color: var(--nais-text-secondary);
}

.tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  width: 5.5rem;
}

.tech span {
  font-size: 1.9rem;
}

.tech small {
  font-size: 0.72rem;
  white-space: nowrap;
}

.why {
  position: absolute;
  left: 6%;
  width: 40%;
  top: 30%;
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.why li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  white-space: normal;
}
</style>
