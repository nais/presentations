<template>
  <div ref="root" class="integ" data-motion-self>
    <svg
      class="lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        v-for="n in NODES"
        :key="n.label"
        x1="50"
        y1="50"
        :x2="n.x"
        :y2="n.y"
        :class="n.kind"
      />
    </svg>
    <div class="core"><b>min-app</b><small>på Nais</small></div>
    <div
      v-for="n in NODES"
      :key="n.label"
      class="node"
      :class="n.kind"
      :style="{ left: n.x + '%', top: n.y + '%' }"
    >
      <span :class="n.icon" />
      <div>
        <b>{{ n.label }}</b><small>{{ n.sub }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// Checked against docs.nais.io (auth, access policies), 2026-10-22.
// built-in: login and tokens. out: outbound traffic, allowed per host in accessPolicy.
const NODES = [
  {
    label: "ID-porten",
    sub: "innlogging for innbyggere",
    icon: "i-carbon-user-identification",
    x: 14,
    y: 16,
    kind: "auth",
  },
  {
    label: "Maskinporten",
    sub: "maskin-til-maskin mot andre virksomheter",
    icon: "i-carbon-api",
    x: 50,
    y: 6,
    kind: "auth",
  },
  {
    label: "Entra ID",
    sub: "innlogging for ansatte",
    icon: "i-carbon-enterprise",
    x: 86,
    y: 16,
    kind: "auth",
  },
  {
    label: "TokenX og Texas",
    sub: "tokens mellom tjenester",
    icon: "i-carbon-password",
    x: 88,
    y: 56,
    kind: "auth",
  },
  {
    label: "Eksterne API-er",
    sub: "tillates per vertsnavn i manifestet",
    icon: "i-carbon-globe",
    x: 12,
    y: 58,
    kind: "out",
  },
  {
    label: "Egne systemer",
    sub: "eget datasenter via VPN eller Cloud Interconnect",
    icon: "i-carbon-data-center",
    x: 30,
    y: 92,
    kind: "out",
  },
  {
    label: "Tredjeparter",
    sub: "SaaS og leverandører",
    icon: "i-carbon-partnership",
    x: 70,
    y: 92,
    kind: "out",
  },
];

const root = ref();
// s0: built-in login and tokens. s1: links to the outside world.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set(q(".node.out, line.out"), { autoAlpha: 0 });
  tl.from(q(".core"), { scale: 0.5, autoAlpha: 0, ease: POP })
    .from(
      q("line.auth"),
      { attr: { x2: 50, y2: 50 }, stagger: STAGGER, duration: 0.5 },
      "-=0.2",
    )
    .from(
      q(".node.auth"),
      { scale: 0.7, autoAlpha: 0, stagger: STAGGER, ease: POP },
      "<0.1",
    )
    .addLabel("s0");
  // The network side (outbound, own data centre, third parties) now has its
  // own topology slide; this star only shows login and tokens.
  return tl;
});
</script>

<style scoped>
.integ {
  position: relative;
  width: 100%;
  max-width: 960px;
  height: 380px;
  margin: 0 auto;
}

.lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

line {
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

line.auth {
  stroke: var(--nais-accent);
}

line.out {
  stroke: #5cb2da;
  stroke-dasharray: 6 6;
}

.core,
.node {
  position: absolute;
  translate: -50% -50%;
}

.core {
  left: 50%;
  top: 50%;
  width: 110px;
  height: 126px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

.node {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  background: var(--nais-surface);
  border: 1px solid var(--nais-border);
  white-space: nowrap;
}

.node span {
  font-size: 1.4rem;
  color: var(--nais-accent);
}

.node.out span {
  color: #5cb2da;
}

.node b {
  display: block;
  font-size: 0.95rem;
}

.node small {
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
}
</style>
