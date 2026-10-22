<template>
  <div ref="root" class="eu" data-motion-self>
    <svg viewBox="0 0 600 520" class="map" aria-hidden="true">
      <path
        v-for="(d, k) in EUROPE"
        :key="k"
        :d="d"
        class="land"
        :class="{ hot: HOT.includes(k), no: k === 'NO' }"
        :data-c="k"
      />
      <g
        v-for="p in STOPS"
        :key="p.id"
        class="pin"
        :data-p="p.id"
        :transform="`translate(${PINS[p.c][0]} ${PINS[p.c][1]})`"
      >
        <circle r="9" />
        <circle r="18" class="ring" />
      </g>
      <g class="nais" :transform="`translate(${PINS.NO[0]} ${PINS.NO[1]})`">
        <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" />
      </g>
    </svg>
    <div class="cards">
      <div v-for="p in STOPS" :key="p.id" class="card" :data-p="p.id">
        <header>
          <span class="flag">{{ p.flag }}</span> {{ p.title }}
        </header>
        <p>{{ p.fact }}</p>
        <b>{{ p.msg }}</b>
      </div>
      <div class="card wave" data-p="wave">
        <header>Bølgen av åpen kildekode</header>
        <div class="chips">
          <span>Schleswig-Holstein: ≈80 % LibreOffice, sparer >15 mill. euro i
            året</span>
          <span>openDesk: 100 000 arbeidsplasser</span>
          <span>La Suite: over 500 000 brukere (DINUM)</span>
        </div>
        <b>Europa flytter seg mot åpen kildekode og egen drift.</b>
      </div>
      <div class="card final" data-p="no">
        <header><span class="flag">🇳🇴</span> Nais</header>
        <b>Vi har gjort det i ti år, og driver det for andre.</b>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { EUROPE, PINS } from "./europe.js";
import { POP, useSteps } from "./motion.js";

// Facts only from the verified research file (sources in the speaker notes).
const STOPS = [
  {
    id: "uk",
    c: "GB",
    flag: "🇬🇧",
    title: "GOV.UK PaaS",
    fact: "60+ virksomheter og 3 200 apper. Lagt ned fordi den egne plattformen vokste for lite.",
    msg: "En delt plattform må vokse.",
  },
  {
    id: "nl",
    c: "NL",
    flag: "🇳🇱",
    title: "Haven",
    fact: "Felles Kubernetes-standard for kommunene, men hver kommune drifter selv.",
    msg: "Nais er steget videre: standarden, driftet for dere.",
  },
  {
    id: "fr",
    c: "FR",
    flag: "🇫🇷",
    title: "Cloud π Native",
    fact: "Åpen Kubernetes-basert DevSecOps-plattform, driftet for alle departementer.",
    msg: "Den nærmeste parallellen til Nais.",
  },
  {
    id: "se",
    c: "SE",
    flag: "🇸🇪",
    title: "SFS 2024:1005",
    fact: "Försäkringskassan, Lantmäteriet, Skatteverket og Trafikverket drifter IT for andre etater, etter forskrift.",
    msg: "Store etater drifter for andre.",
  },
];
const HOT = ["GB", "NL", "FR", "SE", "DE"];

const root = ref();
// s1-s4: one pin and card per click. s5: the open-source wave. s6: Norway lights up.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const card = (id) => q(`.card[data-p="${id}"]`);
  gsap.set(q(".pin, .nais"), { scale: 0, transformOrigin: "50% 50%" });
  gsap.set(q(".card"), { autoAlpha: 0, x: 20 });
  tl.from(q(".land"), { autoAlpha: 0, duration: 0.6 }).addLabel("s0");
  STOPS.forEach((p, i) => {
    if (i)
      tl.to(card(STOPS[i - 1].id), { autoAlpha: 0, x: -20, duration: 0.3 });
    tl.to(
      q(`.land[data-c="${p.c}"]`),
      { fill: "rgba(255,51,119,0.35)", duration: 0.4 },
      i ? "<" : ">",
    )
      .to(
        q(`.pin[data-p="${p.id}"]`),
        { scale: 1, ease: POP, duration: 0.5 },
        "<",
      )
      .to(card(p.id), { autoAlpha: 1, x: 0 }, "<0.2")
      .addLabel(`s${i + 1}`);
  });
  tl.to(card("se"), { autoAlpha: 0, x: -20, duration: 0.3 })
    .to(
      q(`.land[data-c="DE"]`),
      { fill: "rgba(255,51,119,0.35)", duration: 0.4 },
      "<",
    )
    .to(card("wave"), { autoAlpha: 1, x: 0 }, "<0.2")
    .addLabel("s5")
    .to(card("wave"), { autoAlpha: 0, x: -20, duration: 0.3 })
    .to(q(".land.hot"), { fill: "rgba(148,163,184,0.25)", duration: 0.4 }, "<")
    .to(q(".pin"), { opacity: 0.35, duration: 0.4 }, "<")
    .to(q(".land.no"), { fill: "rgba(255,51,119,0.6)", duration: 0.5 })
    .to(q(".nais"), { scale: 1, ease: POP })
    .to(card("no"), { autoAlpha: 1, x: 0 }, "<0.2")
    .addLabel("s6");
  return tl;
});
</script>

<style scoped>
.eu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  height: 340px;
  margin: 0 auto;
  align-items: center;
}

.map {
  width: 100%;
  height: 340px;
}

.land {
  fill: rgb(148 163 184 / 0.18);
  stroke: #334155;
  stroke-width: 1;
}

.pin circle {
  fill: var(--nais-accent);
}

.pin .ring {
  fill: none;
  stroke: var(--nais-accent);
  stroke-width: 2;
  opacity: 0.5;
}

.nais polygon {
  fill: #fff;
  stroke: var(--nais-accent);
  stroke-width: 3;
}

.cards {
  position: relative;
  height: 260px;
}

.card {
  position: absolute;
  inset: 0;
  height: max-content;
  margin: auto 0;
  padding: 1rem 1.2rem;
  border-radius: 16px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.card p {
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--nais-text-secondary);
}

.card b {
  font-size: 1rem;
}

.chips {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.6rem;
}

.chips span {
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-size: 0.82rem;
}

.final {
  border-color: rgb(255 51 119 / 0.6);
}
</style>
