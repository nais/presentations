<template>
  <div ref="root" class="ice" data-motion-self>
    <div class="col">
      <h4>Virtuelle maskiner</h4>
      <svg viewBox="0 0 200 220" aria-hidden="true">
        <rect x="0" y="60" width="200" height="160" class="sea" />
        <polygon points="70,60 100,20 130,60" class="tip" />
        <polygon points="70,60 130,60 175,205 25,205" class="under vm" />
      </svg>
      <p>Mye kapasitet står ubrukt under vannflaten</p>
    </div>
    <div class="mid">
      <b>2–10x</b><small>forskjell i utnyttelse (anslag)</small>
    </div>
    <div class="col">
      <h4>Containere på Nais</h4>
      <svg viewBox="0 0 200 220" aria-hidden="true">
        <rect x="0" y="60" width="200" height="160" class="sea" />
        <polygon points="70,60 100,20 130,60" class="tip" />
        <polygon points="70,60 130,60 120,100 80,100" class="under ct" />
      </svg>
      <p>Appene deler maskiner og skalerer etter behov</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, useEnter } from "./motion.js";

// The visible tip is what the apps use; the part under water is paid-for
// capacity. Shapes are illustrative; 2–10x is the range from the old deck.
const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(q(".sea"), { autoAlpha: 0, duration: 0.5 })
    .from(q(".tip"), { y: 30, autoAlpha: 0, stagger: 0.1 }, "<0.1")
    .from(q(".under"), {
      scaleY: 0,
      transformOrigin: "50% 0%",
      stagger: 0.25,
      duration: 0.9,
    })
    .from(q(".mid"), { scale: 0.5, autoAlpha: 0, ease: POP })
    .from(q(".col p"), { autoAlpha: 0, y: 10, stagger: 0.1 }, "<");
  return tl;
});
</script>

<style scoped>
.ice {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
}

.col {
  text-align: center;
}

h4 {
  margin: 0 0 0.4rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
}

svg {
  width: 100%;
  max-width: 260px;
}

.sea {
  fill: rgb(92 178 218 / 0.12);
}

.tip {
  fill: #e2e8f0;
}

.under.vm {
  fill: rgb(148 163 184 / 0.45);
}

.under.ct {
  fill: rgb(255 51 119 / 0.45);
}

.col p {
  margin: 0.3rem 0 0;
  font-size: 0.9rem;
  color: var(--nais-text-secondary);
}

.mid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mid b {
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  color: var(--nais-accent);
}

.mid small {
  font-size: 0.85rem;
  color: var(--nais-text-secondary);
}
</style>
