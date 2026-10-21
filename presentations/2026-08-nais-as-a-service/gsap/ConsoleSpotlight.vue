<template>
  <div ref="root" class="spot" data-motion-self>
    <div class="frame">
      <img :src="src" :alt="alt" />
      <div v-for="(r, i) in regions" :key="i" class="ring" :style="box(r)" />
    </div>
    <ol class="notes">
      <li v-for="(r, i) in regions" :key="i">
        <b>{{ i + 1 }}</b> {{ r.label }}
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useSteps } from "./motion.js";

// Screenshot with one spotlight per click. Regions in percent of the image.
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
  regions: { type: Array, required: true },
});
const box = (r) => ({
  left: `${r.x}%`,
  top: `${r.y}%`,
  width: `${r.w}%`,
  height: `${r.h}%`,
});

const root = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const rings = q(".ring");
  const notes = q(".notes li");
  gsap.set(rings, { autoAlpha: 0, scale: 1.15 });
  gsap.set(notes, { opacity: 0.35 });
  tl.from(q(".frame"), { autoAlpha: 0, y: 20 }).addLabel("s0");
  props.regions.forEach((_, i) => {
    if (i)
      tl.to(rings[i - 1], { autoAlpha: 0, duration: 0.3 }).to(
        notes[i - 1],
        { opacity: 0.35, duration: 0.3 },
        "<",
      );
    tl.to(rings[i], { autoAlpha: 1, scale: 1, duration: 0.5 }, i ? "<" : ">")
      .to(notes[i], { opacity: 1, duration: 0.3 }, "<")
      .addLabel(`s${i + 1}`);
  });
  return tl;
});
</script>

<style scoped>
.spot {
  display: grid;
  grid-template-columns: 1.9fr 1fr;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.frame {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--nais-border);
  box-shadow: 0 12px 30px rgb(0 0 0 / 0.08);
}

.frame img {
  display: block;
  width: 100%;
}

.ring {
  position: absolute;
  border: 3px solid var(--nais-accent);
  border-radius: 10px;
  box-shadow: 0 0 0 9999px rgb(15 23 42 / 0.35);
}

.notes {
  margin: 0;
  padding: 0;
  list-style: none;
}

.notes li {
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
  margin-bottom: 0.7rem;
  font-size: 1.05rem;
  line-height: 1.35;
}

.notes b {
  flex: none;
  display: inline-flex;
  justify-content: center;
  width: 1.6rem;
  border-radius: 999px;
  color: #fff;
  background: var(--nais-accent);
  font-size: 0.9rem;
}
</style>
