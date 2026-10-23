<template>
  <div ref="root" class="net" data-motion-self>
    <div ref="stage" class="stage">
      <svg viewBox="0 0 1000 330" preserveAspectRatio="none" aria-hidden="true">
        <!-- Boundaries: tenant GCP organisation, cluster, team namespace. -->
        <rect class="b org" x="150" y="20" width="560" height="300" rx="18" />
        <rect class="b cl" x="170" y="62" width="380" height="244" rx="14" />
        <rect class="b ns" x="190" y="95" width="250" height="105" rx="10" />
        <path
          v-for="w in WIRES"
          :key="w.id"
          :d="w.d"
          class="w"
          :class="w.kind"
          :data-w="w.id"
        />
      </svg>
      <span class="bl" style="left: 16%; top: 9%"
        >GCP-organisasjon: din virksomhet</span
      >
      <span class="bl" style="left: 26%; top: 86%">Nais-cluster (VPC)</span>
      <span class="bl" style="left: 27%; top: 29.5%"
        >namespace: team-eksempel</span
      >
      <div
        v-for="n in NODES"
        :key="n.id"
        class="n"
        :class="[n.kind, 'n-' + n.id]"
        :style="{ left: n.x / 10 + '%', top: (n.y / 330) * 100 + '%' }"
      >
        <span :class="n.icon" />
        <b>{{ n.label }}</b>
        <small v-if="n.sub">{{ n.sub }}</small>
      </div>
      <div ref="packet" class="packet" />
      <div ref="block" class="block">✕ ikke i accessPolicy</div>
    </div>
    <div ref="other" class="other">
      <div class="org2">
        <small>GCP-organisasjon</small><b>Annen tenant</b
        ><i>eget cluster, eget nettverk</i>
      </div>
    </div>
    <div class="cap">
      <span v-for="(c, i) in CAPTIONS" :key="i" class="c">{{ c }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { POP, useSteps } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

// Checked against docs.nais.io, 2026-10-22: accessPolicy (deny by default,
// outbound.external hosts), fixed outbound IPs per environment
// (workloads/reference/environments), Cloud SQL with private IP
// (persistence/cloudsql), Aiven over private link / VPC peering (confirmed by
// the Nais team), internet vs internal ingress (naisdevice). VPN or Cloud Interconnect to the tenant's own
// data centre is per tenant (confirmed by the Nais team).
// Coordinates in a 1000 x 330 box.
const NODES = [
  {
    id: "app",
    label: "min-app",
    icon: "i-carbon-application",
    x: 250,
    y: 160,
    kind: "app",
  },
  {
    id: "api",
    label: "api",
    sub: "tillatt",
    icon: "i-carbon-api",
    x: 370,
    y: 160,
    kind: "app",
  },
  {
    id: "x",
    label: "annen app",
    sub: "ikke tillatt",
    icon: "i-carbon-application",
    x: 440,
    y: 268,
    kind: "bad",
  },
  {
    id: "ip",
    label: "Fast utgående IP",
    icon: "i-carbon-ibm-cloud-direct-link-2-connect",
    x: 520,
    y: 66,
    kind: "gw",
  },
  {
    id: "partner",
    label: "partner-api.no",
    sub: "outbound.external",
    icon: "i-carbon-globe",
    x: 870,
    y: 66,
    kind: "ext",
  },
  {
    id: "sql",
    label: "Cloud SQL",
    sub: "privat IP",
    icon: "i-carbon-data-base",
    x: 630,
    y: 140,
    kind: "svc",
  },
  {
    id: "aiven",
    label: "Kafka",
    sub: "Aiven",
    icon: "i-carbon-flow-stream",
    x: 870,
    y: 170,
    kind: "svc",
  },
  {
    id: "dc",
    label: "Eget datasenter",
    sub: "VPN eller Interconnect",
    icon: "i-carbon-data-center",
    x: 630,
    y: 268,
    kind: "svc",
  },
  {
    id: "cit",
    label: "Innbygger",
    sub: "internett",
    icon: "i-carbon-user",
    x: 60,
    y: 45,
    kind: "ext",
  },
  {
    id: "ingx",
    label: "Ekstern ingress",
    sub: "TLS",
    icon: "i-carbon-load-balancer-global",
    x: 60,
    y: 125,
    kind: "gw",
  },
  {
    id: "emp",
    label: "Ansatt",
    sub: "naisdevice",
    icon: "i-carbon-laptop",
    x: 60,
    y: 205,
    kind: "ext",
  },
  {
    id: "ingi",
    label: "Intern ingress",
    icon: "i-carbon-load-balancer-local",
    x: 60,
    y: 285,
    kind: "gw",
  },
];
// Orthogonal routes between node centres (the opaque nodes hide the ends).
// Each line leaves min-app at its own x, and no segment runs under another
// node or a boundary label.
const WIRES = [
  { id: "app-api", d: "M250 160 H370", kind: "ok" },
  { id: "app-x", d: "M250 160 V268 H440", kind: "bad" },
  { id: "app-ip", d: "M235 160 V66 H520", kind: "out" },
  { id: "ip-partner", d: "M520 66 H870", kind: "out" },
  { id: "app-sql", d: "M265 160 V122 H630 V140", kind: "svc" },
  { id: "app-aiven", d: "M275 160 V212 H820 V170 H870", kind: "svc" },
  { id: "app-dc", d: "M240 160 V312 H630 V268", kind: "svc" },
  { id: "cit-ingx", d: "M60 45 V125", kind: "in" },
  { id: "ingx-app", d: "M60 125 H185 V160 H250", kind: "in" },
  { id: "emp-ingi", d: "M60 205 V285", kind: "int" },
  { id: "ingi-app", d: "M60 285 H200 V172 H250", kind: "int" },
];
const CAPTIONS = [
  "min-app kjører i et Nais-cluster i deres egen GCP-organisasjon.",
  "Alt er stengt som standard. accessPolicy åpner bare for det appen har sagt ja til.",
  "Trafikk ut går bare til vertsnavn i manifestet, fra faste IP-er som partnere kan åpne for.",
  "Databasen og Aiven-tjenestene nås over private forbindelser, ikke over internett.",
  "Eget datasenter kobles til med VPN eller Cloud Interconnect, per tenant.",
  "Innbyggere kommer inn via ekstern ingress med TLS. Ansatte når interne apper via naisdevice.",
  "Hver tenant har sin egen organisasjon og sitt eget nettverk.",
];

const root = ref();
const stage = ref();
const packet = ref();
const block = ref();
const other = ref();

// s0 boundaries and min-app. s1 network policy. s2 egress. s3 managed services.
// s4 own data centre. s5 ingress. s6 zoom out: a second tenant, fully separate.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const caps = q(".cap .c");
  const w = (id) => root.value.querySelector(`[data-w="${id}"]`);
  const n = (ids) => ids.map((id) => q(`.n-${id}`)[0]);
  gsap.set(q(".w"), { drawSVG: "0%" });
  gsap.set([packet.value, block.value, other.value, ...caps], { autoAlpha: 0 });
  gsap.set(q(".n:not(.n-app)"), { autoAlpha: 0, scale: 0.7 });
  const send = (id, color, back) => {
    tl.to(w(id), { drawSVG: "100%", duration: 0.3 })
      .set(packet.value, { autoAlpha: 1, backgroundColor: color })
      .to(packet.value, {
        motionPath: {
          path: w(id),
          align: w(id),
          alignOrigin: [0.5, 0.5],
          start: back ? 1 : 0,
          end: back ? 0 : 1,
        },
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to(packet.value, { autoAlpha: 0, duration: 0.15 });
  };
  const show = (ids) =>
    tl.to(n(ids), {
      autoAlpha: 1,
      scale: 1,
      ease: POP,
      stagger: 0.08,
      duration: 0.45,
    });
  const caption = (i) => {
    if (i) tl.to(caps[i - 1], { autoAlpha: 0, duration: 0.2 });
    tl.to(caps[i], { autoAlpha: 1, duration: 0.3 }, i ? "<" : ">");
  };
  tl.from(q(".b"), { drawSVG: "0%", duration: 0.8, stagger: 0.2 })
    .from(q(".bl"), { autoAlpha: 0, stagger: 0.15 }, "-=0.5")
    .from(q(".n-app"), { scale: 0.5, autoAlpha: 0, ease: POP }, "-=0.3");
  caption(0);
  tl.addLabel("s0");
  caption(1);
  show(["api", "x"]);
  send("app-api", "#34d399");
  send("app-x", "#f87171");
  tl.to(block.value, { autoAlpha: 1, ease: POP }).addLabel("s1");
  caption(2);
  tl.to(block.value, { autoAlpha: 0, duration: 0.2 }, "<");
  show(["ip", "partner"]);
  send("app-ip", "#fbbf24");
  send("ip-partner", "#fbbf24");
  tl.addLabel("s2");
  caption(3);
  show(["sql", "aiven"]);
  send("app-sql", "#5cb2da");
  send("app-aiven", "#9b6fd6");
  tl.addLabel("s3");
  caption(4);
  show(["dc"]);
  send("app-dc", "#5cb2da");
  tl.addLabel("s4");
  caption(5);
  show(["cit", "ingx", "emp", "ingi"]);
  send("cit-ingx", "#ff3377");
  send("ingx-app", "#ff3377");
  send("emp-ingi", "#5cb2da");
  send("ingi-app", "#5cb2da");
  tl.addLabel("s5");
  caption(6);
  tl.to(
    stage.value,
    { scale: 0.6, x: "-18%", duration: 0.8, ease: "power2.inOut" },
    "<",
  )
    .to(other.value, { autoAlpha: 1, x: 0, duration: 0.5 })
    .addLabel("s6");
  return tl;
});
</script>

<style scoped>
.net {
  position: relative;
  width: 100%;
  max-width: 980px;
  height: 360px;
  margin: 0 auto;
}

.stage {
  position: absolute;
  inset: 0 0 36px 0;
  transform-origin: 50% 50%;
}

svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.b {
  fill: none;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.b.org {
  stroke: #4a9be8;
}

.b.cl {
  stroke: #475569;
}

.b.ns {
  stroke: #64748b;
}

.bl {
  position: absolute;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.66rem;
  color: #a3b1c6;
}

.w {
  fill: none;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
}

.w.ok {
  stroke: #34d399;
}

.w.bad {
  stroke: #f87171;
  stroke-dasharray: 5 5;
}

.w.out {
  stroke: #fbbf24;
}

.w.svc {
  stroke: #5cb2da;
}

.w.ext {
  stroke: #9b6fd6;
  stroke-dasharray: 6 5;
}

.w.int {
  stroke: #5cb2da;
  stroke-dasharray: 6 4;
}

.w.in {
  stroke: #ff3377;
}

.n,
.packet,
.block {
  position: absolute;
  translate: -50% -50%;
}

.n {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0.55rem;
  border-radius: 10px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-border);
  white-space: nowrap;
}

.n span {
  font-size: 1.05rem;
  color: var(--nais-accent);
}

.n b {
  font-size: 0.76rem;
}

.n small {
  font-size: 0.6rem;
  color: var(--nais-text-secondary);
}

.n.app {
  border-color: #34d399;
}

.n.bad span {
  color: #f87171;
}

.n.gw {
  border-style: dashed;
}

.packet {
  z-index: 3;
  left: 0;
  top: 0;
  translate: none;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  box-shadow: 0 0 12px 3px rgb(255 51 119 / 0.45);
}

.block {
  z-index: 3;
  left: 44%;
  top: 69%;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: #7f1d1d;
  color: #fecaca;
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
}

.other {
  position: absolute;
  right: 0;
  top: 22%;
  width: 30%;
}

.org2 {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.2rem 1rem;
  border-radius: 16px;
  border: 2px solid #4a9be8;
  text-align: center;
}

.org2 small {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.66rem;
  color: #a3b1c6;
}

.org2 b {
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
}

.org2 i {
  font-style: normal;
  font-size: 0.8rem;
  color: var(--nais-text-secondary);
}

.cap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 28px;
}

.c {
  position: absolute;
  inset: 0;
  text-align: center;
  font-size: 0.9rem;
}
</style>
