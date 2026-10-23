<template>
  <div ref="root" class="share" data-motion-self>
    <svg
      class="lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        v-for="(a, i) in list"
        :key="a"
        x1="50"
        y1="50"
        :x2="pos(i).x"
        :y2="pos(i).y"
      />
    </svg>
    <div class="core" data-anchor="hex"><strong>Nais</strong></div>
    <div
      v-for="(a, i) in list"
      :key="a"
      class="agency"
      :style="{ left: pos(i).x + '%', top: pos(i).y + '%' }"
    >
      {{ a }}
    </div>
    <div
      v-for="(sp, i) in support"
      :key="'s' + sp.title"
      class="agency sup"
      :style="{ left: pos(i).x + '%', top: pos(i).y + '%' }"
    >
      <span :class="sp.icon" /> <b>{{ sp.title }}</b
      ><small>{{ sp.text }}</small>
    </div>
    <div ref="pulse" class="pulse" />
    <div
      v-for="(a, i) in list"
      :key="'b' + a"
      class="beam"
      :style="{ left: pos(i).x + '%', top: pos(i).y + '%' }"
    />
    <p ref="captionEl" class="caption">{{ caption }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// Visible nodes: first maxVisible names, plus «+N» when there are more.
const list = computed(() => {
  const v = props.agencies.slice(0, props.maxVisible);
  const rest = props.agencies.length - v.length;
  return rest > 0 ? [...v, `+${rest}`] : v;
});

// s0: agencies around Nais. s1: one agency's need travels to Nais.
// s2: the improvement reaches every agency.
const props = defineProps({
  agencies: { type: Array, required: true },
  // Show at most this many; the rest collapse into one «+N» node.
  maxVisible: { type: Number, default: 4 },
  caption: { type: String, default: "" },
  // Optional extra click: the agencies exit and support channels take their
  // places around the same hub. Use as many items as visible nodes.
  support: { type: Array, default: () => [] },
});
const pos = (i) => {
  const a = ((-90 + (i * 360) / list.value.length) * Math.PI) / 180;
  return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
};

const root = ref();
const pulse = ref();
const captionEl = ref();
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const beams = q(".beam");
  const agencies = q(".agency:not(.sup)");
  const from = pos(1);
  gsap.set(pulse.value, {
    left: `${from.x}%`,
    top: `${from.y}%`,
    autoAlpha: 0,
  });
  gsap.set(beams, { autoAlpha: 0, left: "50%", top: "50%" });
  gsap.set(captionEl.value, { autoAlpha: 0, y: 12 });
  const sup = q(".sup");
  gsap.set(sup, { autoAlpha: 0, scale: 0.6 });
  tl.from(q(".core"), { scale: 0.5, autoAlpha: 0, ease: POP })
    .from(
      q(".lines line"),
      { attr: { x2: 50, y2: 50 }, stagger: STAGGER, duration: 0.5 },
      "-=0.2",
    )
    .from(
      agencies,
      { scale: 0.7, autoAlpha: 0, stagger: STAGGER, ease: POP },
      "<0.2",
    )
    .addLabel("s0")
    .to(agencies[1], { scale: 1.12, borderColor: "#e8384f", duration: 0.3 })
    .to(pulse.value, { autoAlpha: 1, duration: 0.2 })
    .to(pulse.value, {
      left: "50%",
      top: "50%",
      duration: 0.8,
      ease: "power2.inOut",
    })
    .to(pulse.value, { autoAlpha: 0, duration: 0.2 })
    .to(agencies[1], { scale: 1, duration: 0.3 }, "<")
    .addLabel("s1")
    .to(beams, { autoAlpha: 1, duration: 0.1 })
    .to(beams, {
      left: (i) => `${pos(i).x}%`,
      top: (i) => `${pos(i).y}%`,
      duration: 0.8,
      ease: "power2.inOut",
    })
    .to(beams, { autoAlpha: 0, duration: 0.2 })
    .to(
      agencies,
      {
        backgroundColor: "#0f3d30",
        borderColor: "#34d399",
        stagger: 0.05,
        duration: 0.3,
      },
      "<",
    )
    .to(captionEl.value, { autoAlpha: 1, y: 0 })
    .addLabel("s2");
  if (sup.length) {
    // The hub stays; agencies fly out radially and support channels land.
    const quotes =
      root.value.closest(".slidev-layout")?.querySelectorAll(".evidence") ?? [];
    tl.to([captionEl.value, ...quotes], { autoAlpha: 0, duration: 0.3 })
      .to(
        agencies,
        {
          x: (i) => (pos(i).x - 50) * 4,
          y: (i) => (pos(i).y - 50) * 3,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.in",
          stagger: 0.04,
        },
        "<",
      )
      .to(q(".core"), { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1 })
      .to(sup, { autoAlpha: 1, scale: 1, ease: POP, stagger: STAGGER }, "<0.1")
      .addLabel("s3");
  }
  return tl;
});
</script>

<style scoped>
.share {
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 230px;
  margin: 0 auto;
}

.lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.lines line {
  stroke: var(--nais-border);
  stroke-width: 3;
  vector-effect: non-scaling-stroke;
}

.core,
.agency,
.pulse,
.beam {
  position: absolute;
  translate: -50% -50%;
}

.core {
  left: 50%;
  top: 50%;
  width: 96px;
  height: 108px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
}

.agency {
  z-index: 2;
  padding: 0.5rem 0.9rem;
  border-radius: 12px;
  background: var(--nais-bg);
  border: 2px solid var(--nais-border);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  white-space: nowrap;
}

.pulse,
.beam {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--nais-accent);
  box-shadow: 0 0 14px 4px rgb(232 56 79 / 0.5);
}

.beam {
  background: var(--nais-success);
  box-shadow: 0 0 14px 4px rgb(16 185 129 / 0.5);
}

.caption {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.6rem);
  margin: 0;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 600;
}

.agency.sup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.05rem;
  min-width: 9.5rem;
  padding: 0.3rem 0.7rem;
  white-space: nowrap;
}

.sup span {
  color: var(--nais-accent);
}

.sup small {
  font-size: 0.66rem;
  color: var(--nais-text-secondary);
}
</style>
