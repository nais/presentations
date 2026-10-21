<template>
  <div ref="root" class="tenants" data-motion-self>
    <div v-for="t in TENANTS" :key="t.name" class="row">
      <span class="name">{{ t.name }}</span>
      <div class="track">
        <div class="bar" :style="{ width: `${width(t.apps)}%` }" />
      </div>
      <span class="value" :data-v="t.apps">{{
        t.apps.toLocaleString("nb-NO")
      }}</span>
    </div>
    <p class="note">Applikasjoner per installasjon (logaritmisk skala)</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useIsSlideActive } from "@slidev/client";
import gsap from "gsap";
import { EASE, STAGGER, reducedMotion } from "./motion.js";

// NaaS-installasjoner, Grafana 2026-10-21. Rediger tallene her.
const TENANTS = [
  {
    name: "nav",
    apps: 4684,
    topics: 1922,
    cloudsql: 1105,
    buckets: 199,
    bigquery: 193,
    jobs: 395,
  },
  {
    name: "ssb",
    apps: 292,
    topics: 4,
    cloudsql: 23,
    buckets: 2,
    bigquery: 0,
    jobs: 24,
  },
  {
    name: "ldir",
    apps: 164,
    topics: 5,
    cloudsql: 121,
    buckets: 51,
    bigquery: 45,
    jobs: 1,
  },
  {
    name: "atil",
    apps: 72,
    topics: 0,
    cloudsql: 21,
    buckets: 12,
    bigquery: 0,
    jobs: 1,
  },
];
// Log scale keeps the small installations visible next to Nav.
const max = Math.log10(Math.max(...TENANTS.map((t) => t.apps)));
const width = (v) => (Math.log10(v) / max) * 100;

const root = ref();
const active = useIsSlideActive();
let tl;

onMounted(() => {
  const q = gsap.utils.selector(root.value);
  const values = q(".value");
  const state = values.map(() => ({ v: 0 }));
  tl = gsap
    .timeline({ paused: true, delay: 0.5 })
    .from(q(".row"), {
      autoAlpha: 0,
      y: 12,
      stagger: STAGGER,
      duration: 0.5,
      ease: EASE,
    })
    .from(
      q(".bar"),
      {
        scaleX: 0,
        transformOrigin: "0 50%",
        stagger: STAGGER * 1.5,
        duration: 1.2,
        ease: EASE,
      },
      0.2,
    )
    .to(
      state,
      {
        v: (i) => Number(values[i].dataset.v),
        stagger: STAGGER * 1.5,
        duration: 1.2,
        ease: EASE,
        onUpdate() {
          state.forEach(
            (s, i) =>
              (values[i].textContent = Math.round(s.v).toLocaleString("nb-NO")),
          );
        },
      },
      0.2,
    )
    .from(q(".note"), { autoAlpha: 0, duration: 0.5 }, "-=0.4");
  watch(
    active,
    (on) =>
      on && !reducedMotion() ? tl.restart(true) : tl.progress(1).pause(),
    { immediate: true },
  );
});

onBeforeUnmount(() => tl?.kill());
</script>

<style scoped>
.tenants {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

.row {
  display: grid;
  grid-template-columns: 3rem 1fr 4rem;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.45rem;
}

.name {
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--nais-text);
}

.track {
  height: 14px;
  border-radius: 7px;
  background: var(--nais-surface);
  overflow: hidden;
}

.bar {
  height: 100%;
  border-radius: 7px;
  background: linear-gradient(
    90deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.value {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9rem;
  text-align: right;
  color: var(--nais-text);
}

.note {
  margin: 0.4rem 0 0;
  font-size: 0.7rem;
  text-align: center;
  color: var(--nais-text-secondary);
}
</style>
