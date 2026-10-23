<template>
  <div ref="root" class="obj" data-motion-self>
    <div v-for="(o, i) in ITEMS" :key="o.q" class="pair" :data-i="i">
      <div class="card">
        <div class="q"><span class="i-carbon-help" /> {{ o.q }}</div>
        <div class="a">
          <span class="i-carbon-checkmark-outline" />
          <p>
            <small>{{ o.q }}</small
            >{{ o.a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, useSteps } from "./motion.js";

// All questions show first. Each click flips one card over to its answer.
const ITEMS = [
  {
    q: "GOV.UK PaaS ble lagt ned. Hva om Nais også blir det?",
    a: "Nais bygger på Kubernetes, ikke en egen kjøreplattform. Og Nav er selv den største tenanten, med ≈\u00a04\u00a0700 av 5 212 apper.",
  },
  {
    q: "Blir vi låst inne?",
    a: "Dere går ut med standarder: Kubernetes, Postgres, Kafka, OpenTelemetry og containere.",
  },
  {
    q: "Blir vi avhengige av Nav?",
    a: "Vakt døgnet rundt for plattformen, med Googles support i ryggen, og vi tar bare inn 1–2 nye tenants per år.",
  },
  {
    q: "Dere har ingen formell SLA?",
    a: "Nei. Vi måler: 99,88 % uten 5xx-feil siste 30 dager i Nav, feil i appene inkludert.",
  },
];

const root = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const cards = q(".card");
  gsap.set(q(".a"), { rotationY: 180 });
  tl.from(cards, {
    y: 30,
    autoAlpha: 0,
    rotation: (i) => (i % 2 ? 3 : -3),
    stagger: 0.1,
    ease: POP,
  }).addLabel("s0");
  cards.forEach((c, i) => {
    // Anticipation: a small dip, then the flip lands with a slight overshoot.
    tl.to(c, { scale: 0.95, duration: 0.12, ease: "power1.in" })
      .to(c, { rotationY: 180, scale: 1, duration: 0.7, ease: "back.out(1.4)" })
      .to(
        c,
        { boxShadow: "0 0 0 2px rgb(52 211 153 / 0.6)", duration: 0.25 },
        "-=0.2",
      )
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

.pair {
  perspective: 900px;
}

.card {
  position: relative;
  display: grid;
  min-height: 6.2rem;
  border-radius: 14px;
  transform-style: preserve-3d;
}

.q,
.a {
  grid-area: 1 / 1;
  backface-visibility: hidden;
}

.q {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 14px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
}

.q span {
  color: #fbbf24;
  flex: none;
}

.a {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border-radius: 14px;
  background: #2a1424;
  border: 1px solid rgb(255 51 119 / 0.4);
  font-size: 0.85rem;
  line-height: 1.4;
}

.a span {
  color: var(--nais-success);
  flex: none;
  margin-top: 0.15rem;
}

.a p {
  margin: 0;
}

.a small {
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fbbf24;
}
</style>
