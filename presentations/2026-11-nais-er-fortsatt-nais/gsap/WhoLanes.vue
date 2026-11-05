<template>
  <div ref="root" class="who" data-motion-self>
    <p class="lead">
      Nais har tydelige meninger om hvordan apper bygges og driftes. Det passer
      for virksomheter som vil levere raskt og ha selvstendige produktteam.
    </p>
    <div class="chips">
      <span
        v-for="c in CHIPS"
        :key="c.t"
        class="chip"
        :class="c.ok ? 'ok' : 'nok'"
      >
        <span
          :class="c.ok ? 'i-carbon-checkmark-filled' : 'i-carbon-close-filled'"
        />
        {{ c.t }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useEnter } from "./motion.js";

// Who can join: green fits, red does not. The colour carries the grouping.
const CHIPS = [
  { t: "Departementer", ok: true },
  { t: "Direktorater", ok: true },
  { t: "Etater og tilsyn", ok: true },
  { t: "Forvaltningsbedrifter", ok: true },
  { t: "Forvaltningsorganer med særskilte fullmakter", ok: true },
  { t: "Statlige ombud", ok: true },
  { t: "Statsforetak", ok: false },
  { t: "Private selskaper", ok: false },
  { t: "Må kjøre i eget datasenter", ok: false },
];

const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".lead"), { autoAlpha: 0, y: 16, duration: 0.4 })
    .from(
      q(".chip.ok"),
      { autoAlpha: 0, y: 12, stagger: 0.04, duration: 0.3 },
      0.15,
    )
    .from(
      q(".chip.nok"),
      { autoAlpha: 0, y: 12, stagger: 0.04, duration: 0.3 },
      "+=0.1",
    );
  return tl;
});
</script>

<style scoped>
.who {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.lead {
  margin: 0 auto 2rem;
  max-width: 760px;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
}

.chip.ok {
  border-color: rgb(52 211 153 / 0.7);
}

.chip.ok span {
  color: var(--nais-success);
}

.chip.nok {
  border-color: rgb(248 113 113 / 0.7);
  opacity: 0.85;
}

.chip.nok span {
  color: #f87171;
}
</style>
