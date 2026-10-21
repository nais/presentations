<template>
  <div ref="root" class="problem" data-motion-self>
    <section class="side alone">
      <h3>Hver etat for seg</h3>
      <div class="many">
        <div v-for="a in 4" :key="a" class="mini">
          <div class="agency">Etat</div>
          <div v-for="l in LAYERS" :key="l" class="layer">{{ l }}</div>
        </div>
      </div>
      <ul class="costs">
        <li v-for="c in COSTS" :key="c">{{ c }}</li>
      </ul>
    </section>
    <section ref="shared" class="side together">
      <h3>Én felles plattform</h3>
      <div class="agencies">
        <div v-for="a in 4" :key="a" class="agency">Etat</div>
      </div>
      <div class="one">
        <div v-for="l in LAYERS" :key="l" class="layer wide">{{ l }}</div>
      </div>
      <p class="gain">Bygd én gang, driftet av ett team</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { RISE, STAGGER, useSteps } from "./motion.js";

const LAYERS = ["Utrulling", "Sikkerhet", "Data", "Kubernetes", "Sky"];
const COSTS = [
  "Knapp og dyr kompetanse",
  "Samme arbeid gjort fire ganger",
  "Ujevn sikkerhet",
];

const root = ref();
const shared = ref();

// s0: four agencies build the same stack. s1: the cost. s2: one shared platform.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".costs li"), { autoAlpha: 0, x: -12 });
  gsap.set(shared.value, { autoAlpha: 0, x: 30 });
  tl.from(q(".mini"), { autoAlpha: 0, stagger: STAGGER, duration: 0.3 })
    .from(
      q(".mini .layer"),
      {
        y: -20,
        autoAlpha: 0,
        stagger: { each: 0.03, from: "end" },
        duration: 0.4,
      },
      "<",
    )
    .addLabel("s0")
    .to(q(".costs li"), { autoAlpha: 1, x: 0, stagger: STAGGER * 2 })
    .addLabel("s1")
    .to(q(".alone"), { opacity: 0.45, duration: 0.5 })
    .to(shared.value, { autoAlpha: 1, x: 0 }, "<")
    .from(q(".one .layer"), { y: RISE, autoAlpha: 0, stagger: STAGGER }, "<0.2")
    .from(
      q(".together .agency"),
      { y: -RISE, autoAlpha: 0, stagger: STAGGER },
      "<0.3",
    )
    .from(q(".gain"), { autoAlpha: 0 }, "-=0.2")
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.problem {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  margin: 0 0 0.6rem;
  text-align: center;
}

.many {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.mini,
.one {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.agency {
  padding: 0.25rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #fff;
  background: var(--nais-text-secondary);
}

.layer {
  padding: 0.2rem;
  border-radius: 6px;
  text-align: center;
  font-size: 0.75rem;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
}

.layer.wide {
  font-size: 0.95rem;
  padding: 0.3rem;
  color: #fff;
  border: none;
  background: linear-gradient(
    90deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.agencies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.4rem;
  margin-bottom: 6px;
}

.costs {
  margin: 0.8rem 0 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.costs li {
  font-size: 1rem;
  font-weight: 600;
  color: #991b1b;
  margin-bottom: 0.2rem;
}

.gain {
  margin: 0.8rem 0 0;
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: #166534;
}
</style>
