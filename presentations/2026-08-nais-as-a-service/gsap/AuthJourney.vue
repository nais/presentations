<template>
  <div ref="root" class="auth" data-motion-self>
    <div ref="stage" class="stage">
      <svg
        class="wires"
        viewBox="0 0 1000 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <!-- Trust boundaries: the cluster, the team namespace, and each pod. -->
        <rect
          class="bound cluster"
          x="190"
          y="96"
          width="790"
          height="214"
          rx="16"
        />
        <text class="blabel" x="204" y="116">Nais-cluster</text>
        <rect
          class="bound pod"
          x="214"
          y="128"
          width="330"
          height="96"
          rx="12"
        />
        <text class="blabel" x="226" y="146">pod: appen</text>
        <rect
          class="bound pod"
          x="640"
          y="128"
          width="200"
          height="96"
          rx="12"
        />
        <text class="blabel" x="652" y="146">pod: api</text>
        <path
          v-for="w in WIRES"
          :id="'aw-' + w.id"
          :key="w.id"
          :d="w.d"
          class="wire"
          :class="w.kind"
          :data-w="w.id"
        />
      </svg>
      <div
        v-for="n in NODES"
        :key="n.id"
        class="node"
        :class="[n.kind, 'n-' + n.id]"
        :style="{ left: n.x / 10 + '%', top: (n.y / 320) * 100 + '%' }"
      >
        <span :class="n.icon" />
        <b>{{ n.label }}</b>
      </div>
      <div ref="packet" class="packet" />
      <div ref="block" class="block">✕ ikke i accessPolicy</div>
    </div>
    <div class="cap">
      <span v-for="(c, i) in CAPTIONS" :key="i" class="c">{{ c }}</span>
    </div>
    <pre ref="yaml" class="yaml"><code>{{ YAML }}</code></pre>
    <p ref="contrast" class="contrast">
      Det dere ellers bygger selv: OIDC-flyt, nøkkelrotasjon, token-utveksling,
      validering.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { POP, useSteps } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

// Behaviour checked against docs.nais.io (auth explanations, ID-porten login,
// TokenX, Entra ID OBO, Maskinporten), 2026-10-22: Wonderwall logs the user in
// and adds the Authorization header but does not validate tokens; apps validate
// and exchange tokens through Texas (NAIS_TOKEN_INTROSPECTION_ENDPOINT,
// NAIS_TOKEN_EXCHANGE_ENDPOINT, NAIS_TOKEN_ENDPOINT).
// Coordinates in a 1000 x 320 box.
const NODES = [
  {
    id: "user",
    label: "Innbygger",
    icon: "i-carbon-user",
    x: 80,
    y: 176,
    kind: "ext",
  },
  {
    id: "ww",
    label: "Wonderwall",
    icon: "i-carbon-login",
    x: 290,
    y: 190,
    kind: "side",
  },
  {
    id: "a",
    label: "Appen",
    icon: "i-carbon-application",
    x: 400,
    y: 190,
    kind: "app",
  },
  {
    id: "ta",
    label: "Texas",
    icon: "i-carbon-password",
    x: 490,
    y: 190,
    kind: "side",
  },
  { id: "b", label: "API", icon: "i-carbon-api", x: 700, y: 190, kind: "app" },
  {
    id: "tb",
    label: "Texas",
    icon: "i-carbon-password",
    x: 790,
    y: 190,
    kind: "side",
  },
  {
    id: "c",
    label: "Annen app",
    icon: "i-carbon-application",
    x: 920,
    y: 190,
    kind: "bad",
  },
  {
    id: "idp",
    label: "ID-porten",
    icon: "i-carbon-user-identification",
    x: 290,
    y: 30,
    kind: "ext",
  },
  {
    id: "mp",
    label: "Maskinporten",
    icon: "i-carbon-api",
    x: 560,
    y: 30,
    kind: "ext",
  },
  {
    id: "ext",
    label: "Eksternt API",
    icon: "i-carbon-globe",
    x: 860,
    y: 30,
    kind: "ext",
  },
];
const WIRES = [
  { id: "user-ww", d: "M120 182 L250 190", kind: "a" },
  { id: "ww-idp", d: "M290 172 L290 50", kind: "a" },
  { id: "ww-a", d: "M330 190 L362 190", kind: "a" },
  { id: "a-ta", d: "M438 190 L452 190", kind: "a" },
  { id: "ta-b", d: "M528 190 L662 190", kind: "b" },
  { id: "b-tb", d: "M738 190 L752 190", kind: "b" },
  { id: "c-b", d: "M880 210 C840 270 760 270 720 212", kind: "c" },
  { id: "ta-mp", d: "M490 172 L560 50", kind: "d" },
  { id: "ta-ext", d: "M510 172 C620 110 760 70 840 48", kind: "d" },
];
const CAPTIONS = [
  "Wonderwall sender innbyggeren til ID-porten. Appen får forespørselen med token, uten egen OIDC-kode.",
  "Appen ber Texas bytte tokenet (TokenX for innbyggere, Entra ID for ansatte) og kaller et annet teams API.",
  "API-et validerer tokenet via Texas. accessPolicy slipper bare inn appen som har lov.",
  "Maskin til maskin: Texas henter et Maskinporten-token for et eksternt API.",
  "Alt dette er noen få linjer i manifestet.",
];
const YAML = `idporten:
  enabled: true
  sidecar: { enabled: true }
tokenx: { enabled: true }
maskinporten: { enabled: true }
accessPolicy:
  outbound:
    rules:
      - application: api
        namespace: team-b`;

const root = ref();
const stage = ref();
const packet = ref();
const block = ref();
const yaml = ref();
const contrast = ref();

// s0: boundaries and nodes. s1-s4: one leg of the request per click, the packet
// travels along the drawn wires. s5: the manifest lines.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const wire = (id) => root.value.querySelector(`[data-w="${id}"]`);
  const caps = q(".cap .c");
  gsap.set(q(".wire"), { drawSVG: "0%" });
  gsap.set([packet.value, block.value, yaml.value, contrast.value, ...caps], {
    autoAlpha: 0,
  });
  // Draws the wire, then sends the packet along it (reverse: back the other way).
  const travel = (ids, color) => {
    ids.forEach(([id, back]) => {
      const w = wire(id);
      tl.to(w, { drawSVG: "100%", duration: 0.3 })
        .set(packet.value, { autoAlpha: 1, backgroundColor: color })
        .to(packet.value, {
          motionPath: {
            path: w,
            align: w,
            alignOrigin: [0.5, 0.5],
            start: back ? 1 : 0,
            end: back ? 0 : 1,
          },
          duration: 0.45,
          ease: "power1.inOut",
        });
    });
    tl.to(packet.value, { autoAlpha: 0, duration: 0.15 });
  };
  const caption = (i) => {
    if (i) tl.to(caps[i - 1], { autoAlpha: 0, duration: 0.2 });
    tl.to(caps[i], { autoAlpha: 1, duration: 0.3 }, i ? "<" : ">");
  };
  tl.from(q(".bound"), { drawSVG: "0%", duration: 0.8, stagger: 0.15 })
    .from(q(".blabel"), { autoAlpha: 0, stagger: 0.1 }, "-=0.4")
    .from(
      q(".node"),
      { scale: 0.6, autoAlpha: 0, stagger: 0.04, ease: POP },
      "-=0.3",
    )
    .addLabel("s0");
  caption(0);
  travel([["user-ww"], ["ww-idp"], ["ww-idp", true], ["ww-a"]], "#ff3377");
  tl.to(q(".n-a"), { borderColor: "#34d399", duration: 0.3 }).addLabel("s1");
  caption(1);
  travel([["a-ta"], ["ta-b"], ["b-tb"]], "#5cb2da");
  tl.to(q(".n-b"), { borderColor: "#34d399", duration: 0.3 }).addLabel("s2");
  caption(2);
  travel([["c-b"]], "#f87171");
  tl.to(block.value, { autoAlpha: 1, ease: POP }).addLabel("s3");
  caption(3);
  tl.to(block.value, { autoAlpha: 0, duration: 0.2 }, "<");
  travel([["ta-mp"], ["ta-mp", true], ["ta-ext"]], "#fbbf24");
  tl.addLabel("s4");
  caption(4);
  // Final state: the manifest is the hero; the diagram stays readable, dimmed, on the left.
  tl.to(
    stage.value,
    { scale: 0.5, y: 50, opacity: 0.55, duration: 0.7, ease: "power2.inOut" },
    "<",
  )
    .to(yaml.value, { autoAlpha: 1 })
    .to(contrast.value, { autoAlpha: 1 })
    .addLabel("s5");
  return tl;
});
</script>

<style scoped>
.auth {
  position: relative;
  width: 100%;
  max-width: 980px;
  height: 340px;
  margin: 0 auto;
}

.stage {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 280px;
  transform-origin: 0 0;
}

.wires {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.bound {
  fill: none;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.bound.cluster {
  stroke: #475569;
}

.bound.pod {
  stroke: #64748b;
}

.blabel {
  fill: #a3b1c6;
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
}

.wire {
  fill: none;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
}

.wire.a {
  stroke: #ff3377;
}

.wire.b {
  stroke: #5cb2da;
}

.wire.c {
  stroke: #f87171;
  stroke-dasharray: 5 5;
}

.wire.d {
  stroke: #fbbf24;
}

.node,
.packet,
.block {
  position: absolute;
  translate: -50% -50%;
}

.node {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-border);
  white-space: nowrap;
}

.node span {
  font-size: 1.1rem;
  color: var(--nais-accent);
}

.node b {
  font-size: 0.78rem;
}

.node.side {
  border-style: dashed;
}

.node.bad span {
  color: #f87171;
}

.packet {
  z-index: 3;
  left: 0;
  top: 0;
  translate: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: 0 0 14px 4px rgb(255 51 119 / 0.5);
}

.block {
  z-index: 3;
  left: 82%;
  top: 92%;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: #7f1d1d;
  color: #fecaca;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
}

.cap {
  position: absolute;
  left: 0;
  right: 0;
  top: 290px;
  height: 24px;
}

.c {
  position: absolute;
  inset: 0;
  text-align: center;
  font-size: 0.9rem;
}

.yaml {
  position: absolute;
  right: 0;
  top: 10px;
  width: 50%;
  margin: 0;
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  background: #0f172a;
  border: 1px solid #263352;
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.92rem;
  line-height: 1.55;
  white-space: pre;
  overflow: hidden;
  box-shadow: 0 16px 40px rgb(0 0 0 / 0.35);
}

.contrast {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
}
</style>
