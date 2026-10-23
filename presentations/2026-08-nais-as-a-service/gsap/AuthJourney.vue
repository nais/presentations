<template>
  <div ref="root" class="auth" data-motion-self>
    <!-- Optional overview first: the integration star, then FLIP into the journey. -->
    <div v-if="star" ref="starEl" class="star"><Integrations /></div>
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
        <text class="blabel" x="310" y="116">Nais-cluster</text>
        <rect
          class="bound pod"
          x="214"
          y="128"
          width="330"
          height="112"
          rx="12"
        />
        <text class="blabel" x="226" y="233">pod: min-app</text>
        <rect
          class="bound pod"
          x="640"
          y="128"
          width="200"
          height="112"
          rx="12"
        />
        <text class="blabel" x="772" y="233">pod: api</text>
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
      <div ref="chip" class="chip">
        <div class="chip-head"><span class="i-carbon-password" /> Token</div>
        <code :class="{ add: swapped }"><i>{{ swapped ? "+" : " " }}</i>aud: {{ swapped ? "prod-gcp:team-b:api" : "min-app" }}</code>
        <code v-if="swapped" class="del"><i>-</i>aud: min-app</code>
        <code><i> </i>pid: (innbygger)</code>
        <code><i> </i>idp: {{ swapped ? "TokenX" : "ID-porten" }}</code>
      </div>
      <pre ref="http" class="http"><code>POST ${NAIS_TOKEN_EXCHANGE_ENDPOINT}
identity_provider=tokenx
target=prod-gcp:team-b:api
user_token=eyJra...</code></pre>
      <div ref="ok" class="ok">✓ riktig mottaker, riktig bruker</div>
    </div>
    <div class="cap">
      <span v-for="(c, i) in CAPTIONS" :key="i" class="c">{{ c }}</span>
    </div>
    <pre ref="yaml" class="yaml"><code>{{ YAML }}</code></pre>
    <p ref="contrast" class="contrast">
      Det dere slipper å bygge selv: OIDC-flyt, nøkkelrotasjon,
      token-utveksling, validering.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Integrations from "./Integrations.vue";
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
    y: 190,
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
    label: "min-app",
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
// Orthogonal routes, attached at the middle of node sides; none crosses a
// node or a label (pod labels sit at the bottom of each pod).
const WIRES = [
  { id: "user-ww", d: "M120 190 H250", kind: "a" },
  { id: "ww-idp", d: "M290 172 V50", kind: "a" },
  { id: "ww-a", d: "M330 190 H362", kind: "a" },
  { id: "a-ta", d: "M438 190 H452", kind: "a" },
  { id: "ta-b", d: "M528 190 H662", kind: "b" },
  { id: "b-tb", d: "M738 190 H752", kind: "b" },
  { id: "c-b", d: "M920 208 V268 H700 V208", kind: "c" },
  { id: "ta-mp", d: "M490 172 V110 H560 V50", kind: "d" },
  { id: "ta-ext", d: "M490 172 V110 H860 V50", kind: "d" },
];
const CAPTIONS = [
  "Wonderwall sender innbyggeren til ID-porten. min-app får forespørselen med token, uten egen OIDC-kode.",
  "Tokenet er laget for min-app. Det kan ikke brukes mot andre tjenester.",
  "min-app ber Texas bytte tokenet via TokenX, med API-et som mottaker.",
  "Samme bruker, ny mottaker. Tokenet gjelder bare for dette ene API-et. Lekker det, kan det ikke brukes andre steder.",
  "API-ets Texas sjekker tokenet: riktig mottaker, riktig bruker.",
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

const props = defineProps({
  // Start with the login/token overview (1 click), then fly into the journey.
  star: { type: Boolean, default: false },
});
const root = ref();
const starEl = ref();
const stage = ref();
const packet = ref();
const block = ref();
const yaml = ref();
const contrast = ref();
const chip = ref();
const http = ref();
const ok = ref();
const swapped = ref(false);

// s0: boundaries and nodes. s1: login. s2-s5: the TokenX exchange (token claims,
// call to Texas, new audience, introspection at the API). s6: an app outside
// accessPolicy is blocked. s7: Maskinporten. s8: the manifest lines.
useSteps(
  (tl) => {
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
    // ID-porten, Maskinporten and the external API stay hidden until their
    // step. The star (if shown) fades out as the journey builds.
    const late = q(".n-idp, .n-mp, .n-ext");
    gsap.set(late, { autoAlpha: 0, y: -8 });
    if (props.star) tl.to(starEl.value, { autoAlpha: 0, duration: 0.4 });
    tl.from(
      q(".bound"),
      { drawSVG: "0%", duration: 0.8, stagger: 0.15 },
      props.star ? "<" : 0,
    )
      .from(q(".blabel"), { autoAlpha: 0, stagger: 0.1 }, "-=0.4")
      .from(
        q(".stage .node:not(.n-idp):not(.n-mp):not(.n-ext)"),
        { y: 12, autoAlpha: 0, stagger: 0.04 },
        "-=0.3",
      )
      .addLabel("s0");
    const at = (x, y) => ({ left: x / 10 + "%", top: (y / 320) * 100 + "%" });
    gsap.set([chip.value, http.value, ok.value], { autoAlpha: 0 });
    gsap.set(chip.value, at(400, 226));
    caption(0);
    tl.to(q(".n-idp"), { autoAlpha: 1, y: 0, duration: 0.4 });
    travel([["user-ww"], ["ww-idp"], ["ww-idp", true], ["ww-a"]], "#ff3377");
    tl.to(q(".n-a"), { borderColor: "#34d399", duration: 0.3 }).addLabel("s1");
    // TokenX exchange, step by step (NAIS_TOKEN_EXCHANGE_ENDPOINT, docs.nais.io).
    caption(1);
    tl.to(chip.value, {
      autoAlpha: 1,
      scale: 1,
      ease: POP,
      duration: 0.5,
    }).addLabel("s2");
    caption(2);
    tl.to(wire("a-ta"), { drawSVG: "100%", duration: 0.3 })
      .to(chip.value, { ...at(490, 226), duration: 0.6, ease: "power2.inOut" })
      .to(http.value, { autoAlpha: 1, y: 0, duration: 0.4 })
      .addLabel("s3");
    caption(3);
    // The chip flips at t0; its content switches to the exchanged token there.
    const t0 = tl.duration() + 0.25;
    tl.to(chip.value, { scaleX: 0, duration: 0.25, ease: "power2.in" })
      .to(chip.value, { scaleX: 1, duration: 0.3, ease: "power2.out" })
      .to(http.value, { autoAlpha: 0, duration: 0.3 }, "<")
      .addLabel("s4");
    caption(4);
    tl.to(wire("ta-b"), { drawSVG: "100%", duration: 0.3 })
      .to(chip.value, { ...at(700, 226), duration: 0.7, ease: "power2.inOut" })
      .to(wire("b-tb"), { drawSVG: "100%", duration: 0.2 })
      .to(q(".n-b"), { borderColor: "#34d399", duration: 0.3 })
      .to(chip.value, { autoAlpha: 0, duration: 0.25 })
      .to(ok.value, { autoAlpha: 1, ease: POP })
      .addLabel("s5");
    tl.eventCallback("onUpdate", () => {
      swapped.value = tl.time() >= t0;
    });
    caption(5);
    tl.to([chip.value, ok.value], { autoAlpha: 0, duration: 0.3 }, "<");
    travel([["c-b"]], "#f87171");
    tl.to(block.value, { autoAlpha: 1, ease: POP }).addLabel("s6");
    caption(6);
    tl.to(block.value, { autoAlpha: 0, duration: 0.2 }, "<").to(
      q(".n-mp, .n-ext"),
      { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 },
    );
    travel([["ta-mp"], ["ta-mp", true], ["ta-ext"]], "#fbbf24");
    tl.addLabel("s7");
    caption(7);
    // Final state: the manifest is the hero; the diagram stays readable, dimmed, on the left.
    tl.to(
      stage.value,
      { scale: 0.5, y: 50, opacity: 0.55, duration: 0.7, ease: "power2.inOut" },
      "<",
    )
      .to(yaml.value, { autoAlpha: 1 })
      .to(caps[caps.length - 1], { autoAlpha: 0, duration: 0.2 })
      .to(contrast.value, { autoAlpha: 1 }, "<")
      .addLabel("s8");
    return tl;
  },
  props.star ? 2 : 0,
);
</script>

<style scoped>
.star {
  position: absolute;
  inset: 0;
  z-index: 5;
}

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
  top: 304px;
  height: 24px;
}

.c {
  position: absolute;
  inset: 0;
  text-align: center;
  font-size: 0.9rem;
}

.chip {
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  translate: -50% 0;
  min-width: 13rem;
  padding: 0.2rem 0.45rem;
  border-radius: 10px;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #e6edf3;
}

.chip-head {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.2rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: #f2cc60;
}

.chip code {
  display: block !important;
  padding: 0 0.3rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.6rem;
  line-height: 1.25;
  white-space: pre;
  background: transparent;
  color: #c9d1d9;
}

.chip code i {
  font-style: normal;
  margin-right: 0.3rem;
  color: #8b949e;
}

.chip code.add {
  background: rgb(46 160 67 / 0.2);
  color: #aff5b4;
}

.chip code.del {
  background: rgb(248 81 73 / 0.2);
  color: #ffdcd7;
}

.http {
  position: absolute;
  z-index: 4;
  left: 63%;
  top: 74%;
  margin: 0;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  background: #0b1120;
  border: 1px solid #263352;
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.64rem;
  line-height: 1.45;
  white-space: pre;
}

.ok {
  position: absolute;
  z-index: 4;
  left: 74%;
  top: 75%;
  translate: -50% 0;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: rgb(52 211 153 / 0.2);
  border: 1px solid #34d399;
  color: #a7f3d0;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
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
