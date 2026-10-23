<template>
  <div ref="root" class="take" data-motion-self>
    <div ref="platform" class="platform" data-anchor="hex">
      <b>Nais</b>
    </div>
    <div ref="link" class="link"><i /></div>
    <!-- The tenant and its technology are one bundle: they leave together. -->
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
    <ul class="why">
      <li v-for="w in WHY" :key="w">{{ w }}</li>
    </ul>
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
// s0: the tenant runs on Nais (a live link), its technology stacked under it.
// s1: the link breaks, Nais steps back, and the tenant leaves to the right
// with all its technology in one piece; the reasons take Nais's place.
// Nothing moves on its own: every move says «you leave, and this comes along».
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".why li"), { autoAlpha: 0, x: -16 });
  tl.from(platform.value, { autoAlpha: 0, y: 16 })
    .from(card.value, { autoAlpha: 0, y: 16 }, "<0.15")
    .from(
      link.value,
      { scaleX: 0, transformOrigin: "0 50%", duration: 0.4 },
      "-=0.2",
    )
    .from(
      q(".tech"),
      { autoAlpha: 0, y: 10, stagger: 0.04, duration: 0.35 },
      "-=0.1",
    )
    .addLabel("s0")
    // The link snaps at the middle, both halves fall away.
    .to(q(".link i"), {
      scaleX: 0,
      transformOrigin: "50% 50%",
      duration: 0.25,
      ease: "power2.in",
    })
    .to(link.value, { autoAlpha: 0, duration: 0.2 })
    .to(platform.value, { autoAlpha: 0.25, scale: 0.85, duration: 0.5 }, "<")
    // Anticipation, then the bundle travels as one.
    .to(bundle.value, { x: -10, duration: 0.15, ease: "power1.in" })
    .to(bundle.value, { x: 190, duration: 0.9, ease: "power3.inOut" })
    .to(platform.value, { autoAlpha: 0, duration: 0.3 }, "-=0.5")
    .to(q(".why li"), { autoAlpha: 1, x: 0, stagger: STAGGER * 2 }, "-=0.2")
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

.platform {
  position: absolute;
  left: 8%;
  top: 82px;
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

.link {
  position: absolute;
  left: calc(8% + 110px);
  top: 144px;
  width: calc(26% - 110px);
  height: 3px;
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
  position: absolute;
  left: 34%;
  top: 70px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.card {
  padding: 0.4rem 1.2rem;
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

.techs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.7rem 0.4rem;
  padding: 0.8rem;
  border-radius: 14px;
  border: 1px dashed rgb(52 211 153 / 0.5);
}

.tech {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  width: 5.2rem;
}

.tech span {
  font-size: 1.7rem;
}

.tech small {
  font-size: 0.7rem;
  white-space: nowrap;
}

.why {
  position: absolute;
  left: 1%;
  width: 46%;
  top: 22%;
  font-size: 0.95rem;
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.why li {
  margin-bottom: 0.35rem;
}
</style>
