<template>
  <div ref="root" class="obshunt" data-motion-self>
    <div ref="flow" class="flow backdrop"><ObsFlow /></div>
    <div ref="hunt" class="hunt"><BugHunt :offset="1" /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import ObsFlow from "./ObsFlow.vue";
import BugHunt from "./BugHunt.vue";
import { useSteps } from "./motion.js";

// s0: the signal flow on its own. s1: it dims into the background and the bug
// hunt (clicks 1-5, run by BugHunt itself) plays out on top of it.
const root = ref();
const flow = ref();
const hunt = ref();
useSteps((tl) => {
  gsap.set(hunt.value, { autoAlpha: 0, y: 30 });
  tl.addLabel("s0")
    .to(flow.value, {
      opacity: 0.18,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.inOut",
    })
    .to(hunt.value, { autoAlpha: 1, y: 0 }, "-=0.3")
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.obshunt {
  position: relative;
  width: 100%;
  height: 340px;
}

.flow {
  transform-origin: 50% 0;
}

.hunt {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
}
</style>
