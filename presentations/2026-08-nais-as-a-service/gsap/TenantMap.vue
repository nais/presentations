<template>
  <div ref="root" class="map" data-motion-self>
    <div class="hub">
      <strong>Nais-teamet</strong>
      <span>drifter plattformen</span>
      <em>Faktureringskonto: Nav</em>
    </div>
    <svg
      class="wires"
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path v-for="(t, i) in tenants" :key="t" :d="wire(i)" class="wire" />
    </svg>
    <div class="tenants">
      <div v-for="t in tenants" :key="t" class="org">
        <div class="org-head">GCP-organisasjon</div>
        <strong>{{ t }}</strong>
        <ul v-if="!incoming.includes(t)">
          <li>Clustere</li>
          <li>Data</li>
          <li>Apper</li>
        </ul>
        <p v-else class="incoming">På vei inn</p>
        <div class="owned">Eies av tenanten</div>
      </div>
    </div>
    <p ref="exit" class="exit">{{ exitText }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { STAGGER, useSteps, POP } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

// s0 draws the map, s1 shows ownership, s2 detaches one tenant, s3 shows the exit plan.
const props = defineProps({
  tenants: { type: Array, required: true },
  detach: { type: Number, default: 3 },
  exitText: { type: String, default: "" },
  // Signed tenants without production workloads yet.
  incoming: { type: Array, default: () => [] },
});

const n = props.tenants.length;
const wire = (i) => {
  const x = ((i + 0.5) / n) * 1000;
  return `M500 0 C500 60 ${x} 60 ${x} 120`;
};

const root = ref();
const exit = ref();

useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const wires = q(".wire");
  const orgs = q(".org");
  gsap.set(q(".owned"), { autoAlpha: 0, scale: 0.8 });
  gsap.set(exit.value, { autoAlpha: 0, y: 12 });
  tl.from(q(".hub"), { y: -20, autoAlpha: 0 })
    .from(wires, { drawSVG: "0%", stagger: STAGGER, duration: 0.6 }, "-=0.3")
    .from(orgs, { y: 24, autoAlpha: 0, stagger: STAGGER }, "-=0.4")
    .addLabel("s0")
    .to(q(".owned"), {
      autoAlpha: 1,
      scale: 1,
      stagger: STAGGER,
      ease: POP,
    })
    .addLabel("s1")
    .to(wires[props.detach], {
      drawSVG: "0%",
      duration: 0.5,
      ease: "power2.in",
    })
    .to(orgs[props.detach], {
      y: 18,
      x: 0,
      rotation: 0,
      boxShadow: "0 12px 24px rgb(0 0 0 / 0.12)",
      ease: POP,
    })
    .addLabel("s2")
    .to(exit.value, { autoAlpha: 1, y: 0 })
    .addLabel("s3");
  return tl;
});
</script>

<style scoped>
.map {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.hub {
  width: 260px;
  margin: 0 auto;
  padding: 0.6rem 1rem;
  border-radius: 14px;
  text-align: center;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.hub strong {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
}

.hub span {
  font-size: 0.85rem;
}

.hub em {
  font-style: normal;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.2);
  align-self: center;
}

.wires {
  display: block;
  width: 100%;
  height: 40px;
}

.wire {
  fill: none;
  stroke: var(--nais-accent);
  stroke-width: 3;
  vector-effect: non-scaling-stroke;
}

.tenants {
  display: grid;
  grid-template-columns: repeat(v-bind(n), minmax(0, 1fr));
  gap: 1.3rem;
}

.org {
  position: relative;
  padding: 0.4rem 0.55rem 0.5rem;
  border-radius: 14px;
  border: 2px solid var(--nais-border);
  background: var(--nais-card);
  font-size: 0.9rem;
}

.org-head {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--nais-text-secondary);
}

.org strong {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 0.82rem;
  margin: 0.1rem 0 0.2rem;
  overflow-wrap: anywhere;
}

.org ul {
  margin: 0;
  padding-left: 1rem;
  list-style: disc;
  color: var(--nais-text-secondary);
  font-size: 0.72rem;
}

.incoming {
  margin: 0.2rem 0 0;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--nais-text-secondary);
}

.owned {
  margin-top: 0.5rem;
  display: inline-block;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #6ee7b7;
  background: rgb(16 185 129 / 0.2);
}

.exit {
  margin: 1.4rem 0 0;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
