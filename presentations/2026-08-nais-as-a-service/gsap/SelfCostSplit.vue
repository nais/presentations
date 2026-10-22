<template>
  <div ref="root" class="split" data-motion-self>
    <div class="bar">
      <div class="seg pay">
        <b>Dere betaler</b>
        <span>Egen infrastruktur og forbruk til selvkost, pluss 200 000 kr i
          året</span>
      </div>
      <div class="seg nav">
        <b>Nav bærer</b>
        <span>Det Nav allerede bærer: utviklingen av plattformen og det meste av
          Nais-teamet</span>
      </div>
    </div>
    <p class="cap">
      Dere betaler det dere bruker og et fast gebyr. Det meste er allerede
      betalt.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useEnter } from "./motion.js";

// Two parts of the platform's cost: what a tenant pays and what Nav carries.
// Widths are illustrative; there are no numbers behind the split.
const root = ref();
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  tl.from(
    q(".pay"),
    { scaleX: 0, transformOrigin: "0 50%", duration: 0.8 },
    0.3,
  )
    .from(q(".nav"), { scaleX: 0, transformOrigin: "0 50%", duration: 1 })
    .from(q(".seg > *"), { autoAlpha: 0, stagger: 0.1 }, "-=0.4")
    .from(q(".cap"), { autoAlpha: 0, y: 12 });
  return tl;
});
</script>

<style scoped>
.split {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.bar {
  display: flex;
  gap: 6px;
  height: 140px;
}

.seg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  padding: 0 1.2rem;
  border-radius: 14px;
}

.seg b {
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
}

.seg span {
  font-size: 0.95rem;
  line-height: 1.35;
}

.pay {
  flex: 1;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
}

.nav {
  flex: 2;
  background: var(--nais-surface);
  border: 2px dashed #64748b;
}

.cap {
  margin: 1rem 0 0;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
}
</style>
