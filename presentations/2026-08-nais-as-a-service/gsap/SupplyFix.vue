<template>
  <div ref="root" class="supply" data-motion-self>
    <div ref="chain" class="chain">
      <FlowChain :nodes="nodes" />
      <p class="evidence">
        «Reduser risiko for målrettet manipulasjon av IKT-produkter i
        leverandørkjeden.»
        <span>NSM Grunnprinsipper for IKT-sikkerhet 2.1.4</span>
        <small class="nis2">NIS2 er på vei inn i norsk rett.</small>
      </p>
    </div>
    <div ref="consoleEl" class="console">
      <ConsoleMock story="vulns" :offset="5" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import FlowChain from "./FlowChain.vue";
import ConsoleMock from "./ConsoleMock.vue";
import { useSteps } from "./motion.js";

// Clicks 1-4: the supply chain (FlowChain). Click 5: Console grows out of the
// last link. Clicks 6-9: the vulnerability fix loop (ConsoleMock, offset 5).
defineProps({
  nodes: { type: Array, required: true },
});

const root = ref();
const chain = ref();
const consoleEl = ref();
useSteps((tl) => {
  gsap.set(consoleEl.value, {
    autoAlpha: 0,
    scale: 0.2,
    transformOrigin: "90% 0%",
  });
  tl.addLabel("s0")
    .addLabel("s4")
    .to(chain.value, { autoAlpha: 0, y: -40, duration: 0.5 })
    .to(
      consoleEl.value,
      { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3",
    )
    .addLabel("s5");
  return tl;
});
</script>

<style scoped>
.supply {
  position: relative;
  width: 100%;
  height: 384px;
}

.chain {
  padding-top: 0.5rem;
}

.nis2 {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.7rem;
  opacity: 0.7;
}

.chain .evidence {
  margin-top: 1rem;
  text-align: center;
}

.console {
  position: absolute;
  inset: 0;
}
</style>
