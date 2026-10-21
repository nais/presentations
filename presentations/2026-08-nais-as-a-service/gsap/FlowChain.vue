<template>
  <div ref="root" class="chain" data-motion-self>
    <div class="track">
      <div ref="fill" class="fill" />
      <div ref="packet" class="packet" />
    </div>
    <div
      v-for="(n, i) in nodes"
      :key="n.label"
      class="node"
      :class="{ end: i === nodes.length - 1 }"
    >
      <div class="hex"><span :class="n.icon" /></div>
      <h3>{{ n.label }}</h3>
      <p v-if="n.sub">{{ n.sub }}</p>
      <div v-if="n.stat" class="stat">{{ n.stat }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { RISE, useSteps, POP } from "./motion.js";

// Generic left-to-right chain. Click n lights node n and moves the packet there.
const props = defineProps({
  nodes: { type: Array, required: true },
});

const root = ref();
const fill = ref();
const packet = ref();

useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const hexes = q(".hex");
  const texts = q(".node");
  const last = props.nodes.length - 1;
  gsap.set(fill.value, { scaleX: 0, transformOrigin: "0 50%" });
  gsap.set(packet.value, { left: "0%", autoAlpha: 0 });
  gsap.set(hexes, { scale: 0.6, autoAlpha: 0.25, filter: "grayscale(1)" });
  gsap.set(q(".node > :not(.hex)"), { autoAlpha: 0, y: RISE });

  const light = (i) =>
    tl
      .to(hexes[i], {
        scale: 1,
        autoAlpha: 1,
        filter: "grayscale(0)",
        ease: POP,
        duration: 0.5,
      })
      .to(
        texts[i].querySelectorAll(":scope > :not(.hex)"),
        { autoAlpha: 1, y: 0, stagger: 0.06 },
        "<0.1",
      );

  light(0);
  tl.addLabel("s0");
  for (let i = 1; i <= last; i++) {
    tl.set(packet.value, { autoAlpha: 1 })
      .to(fill.value, { scaleX: i / last, duration: 0.8, ease: "power2.inOut" })
      .to(
        packet.value,
        { left: `${(i / last) * 100}%`, duration: 0.8, ease: "power2.inOut" },
        "<",
      );
    light(i);
    if (i === last) tl.to(packet.value, { autoAlpha: 0, duration: 0.3 }, "<");
    tl.addLabel(`s${i}`);
  }
  return tl;
});
</script>

<style scoped>
.chain {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.track {
  position: absolute;
  top: 41px;
  left: calc(50% / v-bind("nodes.length"));
  right: calc(50% / v-bind("nodes.length"));
  height: 4px;
  border-radius: 2px;
  background: var(--nais-border);
}

.fill {
  height: 100%;
  border-radius: 2px;
  background: var(--nais-accent);
}

.packet {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  margin: -8px;
  border-radius: 50%;
  background: var(--nais-accent);
  box-shadow: 0 0 16px 4px rgb(232 56 79 / 0.6);
}

.node {
  position: relative;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0.4rem;
}

.hex {
  width: 72px;
  height: 82px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6rem;
}

.node.end .hex {
  background: var(--nais-success);
}

.hex span {
  font-size: 2rem;
  color: #fff;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.2rem;
}

p {
  font-size: 0.85rem;
  line-height: 1.35;
  color: var(--nais-text-secondary);
  margin: 0;
}

.stat {
  margin-top: 0.4rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--nais-accent);
}
</style>
