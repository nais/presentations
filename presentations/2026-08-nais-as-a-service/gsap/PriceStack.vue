<template>
  <div ref="root" class="price stack" data-motion-self>
    <div class="price-card fee">
      <span class="i-carbon-receipt" />
      <b><i ref="kr">0</i> 000 kr i året</b>
      <small
        >Administrativt gebyr: en liten del av Nais-teamet, administrasjon og
        videre utvikling</small
      >
    </div>
    <div class="plus">+</div>
    <div class="price-card use">
      <span class="i-carbon-cloud" />
      <b>Egen infrastruktur og forbruk</b>
      <small>Til selvkost, uten påslag. Teamene ser kostnaden i Console.</small>
    </div>
    <p ref="note" class="note">
      Plattformen er allerede bygd. Det Nav allerede bærer, betaler dere ikke
      for.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useSteps } from "./motion.js";

const root = ref();
const kr = ref();
const note = ref();
// s0: usage at cost lands. s1: the fee drops onto it and its counter ticks up.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set([q(".fee"), q(".plus"), note.value], { autoAlpha: 0 });
  tl.from(q(".use"), {
    y: -80,
    autoAlpha: 0,
    duration: 0.8,
    ease: "bounce.out",
  })
    .addLabel("s0")
    .to(q(".plus"), { autoAlpha: 1, rotation: 180, duration: 0.4 })
    .fromTo(
      q(".fee"),
      { y: -120, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.7, ease: "bounce.out" },
    )
    // The lower block gives a little as the fee lands on it.
    .to(
      q(".use"),
      {
        scaleY: 0.96,
        transformOrigin: "50% 100%",
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      },
      "-=0.45",
    )
    // Thousands tick up; textContent (not onUpdate) so print shows it too.
    .to(
      kr.value,
      {
        textContent: 200,
        snap: { textContent: 1 },
        duration: 1,
        ease: "power2.out",
      },
      "<",
    )
    .to(note.value, { autoAlpha: 1, duration: 0.4 })
    .addLabel("s1");
  return tl;
});
</script>

<style scoped>
.stack {
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.stack .price-card {
  width: 560px;
}

.price-card i {
  font-style: normal;
  font-variant-numeric: tabular-nums;
}

.stack .plus {
  font-size: 1.6rem;
  line-height: 1;
}

.note {
  margin: 0.8rem 0 0;
  text-align: center;
}
</style>
