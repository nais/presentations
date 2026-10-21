<template>
  <div ref="root" class="pillars6" data-motion-self>
    <div
      v-for="p in PILLARS"
      :key="p.title"
      class="card"
      :style="{ '--pc': p.color }"
    >
      <div class="icon"><span :class="p.icon" /></div>
      <div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, RISE, STAGGER, useEnter } from "./motion.js";

// The six pillars and colours from nais.io (src/lib/Glances.svelte), shortened.
const PILLARS = [
  {
    title: "Utviklingsfart",
    color: "#FF9100",
    icon: "i-carbon-rocket",
    text: "Fra kode til produksjon, uten nedetid.",
  },
  {
    title: "Automatisering",
    color: "#9b6fd6",
    icon: "i-carbon-settings",
    text: "Du sier hva du trenger, Nais setter det opp.",
  },
  {
    title: "Oversikt",
    color: "#5cb2da",
    icon: "i-carbon-activity",
    text: "Hvordan det oppfører seg og hva det koster.",
  },
  {
    title: "Sikkerhet",
    color: "#34c27a",
    icon: "i-carbon-certificate-check",
    text: "Trygge standardvalg og full sporbarhet.",
  },
  {
    title: "Suveren og autonom",
    color: "#4a9be8",
    icon: "i-carbon-migrate",
    text: "Industristandarder, så alt kan flytte på seg.",
  },
  {
    title: "Et Nais-fellesskap",
    color: "#ff5c6c",
    icon: "i-carbon-partnership",
    text: "Mange bruker og utvikler Nais sammen.",
  },
];

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".card"), { y: RISE, autoAlpha: 0, stagger: STAGGER }).from(
    q(".icon"),
    { scale: 0.5, ease: POP, stagger: STAGGER },
    "<0.1",
  );
  return tl;
});
</script>

<style scoped>
.pillars6 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem 1.5rem;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}

.card {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.7rem 0.7rem;
  border-radius: 16px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.icon {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--pc);
  background: color-mix(in srgb, var(--pc) 18%, transparent);
  box-shadow: 0 6px 18px color-mix(in srgb, var(--pc) 30%, transparent);
}

.pillars6 .card h3 {
  margin: 0 0 0.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.88rem;
  white-space: nowrap;
  color: var(--nais-heading);
}

.pillars6 .card p {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--nais-text-secondary);
}
</style>
