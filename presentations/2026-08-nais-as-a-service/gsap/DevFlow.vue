<template>
  <div ref="root" class="devflow" data-motion-self>
    <div class="headline">
      <b ref="count">≈&#160;0</b> utviklere har jobbet på Nais
      <small>Anslag</small>
      <span ref="year" class="year">2016</span>
    </div>
    <div class="stage">
      <svg
        class="links"
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          v-for="(n, i) in NODES"
          :key="n.id"
          :d="curve(NAV, n)"
          class="link"
          :class="{ fresh: n.fresh }"
          :data-i="i"
        />
      </svg>
      <div class="node nav" :style="pos(NAV)">Nav</div>
      <div class="cloud" :style="pos(CLOUD)">
        Konsulentmiljøer
        <span class="note">de fleste store konsulentselskapene</span>
      </div>
      <div
        v-for="t in TENANTS"
        :key="t.id"
        class="node tenant"
        :class="{ fresh: t.fresh }"
        :style="pos(t)"
      >
        <img v-if="t.logo" :src="t.logo" :alt="t.name" />
        <span v-else>{{ t.name }}</span>
      </div>
      <div ref="ok" class="ok" :style="pos({ x: NEW.x - 60, y: NEW.y + 38 })">
        ✓ Første deploy dag én
      </div>
      <i v-for="k in DOTS" :key="k" class="dot" />
      <div v-for="b in BADGES" :key="b.text" class="badge" :style="pos(b)">
        <span :class="b.icon" /> {{ b.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";
import ssb from "../assets/logos/ssb.svg";
import ldir from "../assets/logos/ldir.svg";
import atil from "../assets/logos/atil.svg";
import ks from "../assets/logos/ksdigital.png";
import novari from "../assets/logos/novari.svg";

// Coordinates in a 1000 x 300 box. Illustration, not data.
const NAV = { x: 110, y: 150 };
const CLOUD = { x: 470, y: 150 };
const TENANTS = [
  { id: "ssb", name: "SSB", logo: ssb, x: 830, y: 30 },
  { id: "ldir", name: "Landbruksdirektoratet", logo: ldir, x: 830, y: 90 },
  { id: "atil", name: "Arbeidstilsynet", logo: atil, x: 830, y: 150 },
  { id: "ks", name: "KS Digital", logo: ks, x: 830, y: 210 },
  { id: "novari", name: "Novari", logo: novari, x: 830, y: 270 },
  { id: "new", name: "Ny tenant", x: 620, y: 236, fresh: true },
];
const NEW = TENANTS.at(-1);
const NODES = [CLOUD, ...TENANTS];
const BADGES = [
  { text: "docs.nais.io", icon: "i-carbon-document", x: 150, y: 14 },
  { text: "github.com/nais", icon: "i-carbon-logo-github", x: 330, y: 14 },
  {
    text: "Foredrag siden 2016",
    icon: "i-carbon-presentation-file",
    x: 520,
    y: 14,
  },
  {
    text: "KI-assistentene kjenner Nais",
    icon: "i-carbon-bot",
    x: 250,
    y: 285,
  },
];
const DOTS = 24;

const pos = (p) => ({ left: p.x / 10 + "%", top: (p.y / 300) * 100 + "%" });
const curve = (a, b) =>
  `M${a.x} ${a.y} C${(a.x + b.x) / 2} ${a.y} ${(a.x + b.x) / 2} ${b.y} ${b.x} ${b.y}`;

const root = ref();
const count = ref();
const year = ref();
const ok = ref();

// Where a dot rests: beside a node, never on its label.
const rest = (i) => {
  if (i < 10) {
    const a = (i / 10) * Math.PI * 2;
    return { x: CLOUD.x + Math.cos(a) * 175, y: CLOUD.y + Math.sin(a) * 66 };
  }
  const t = TENANTS[(i - 10) % 5];
  return { x: t.x - 105 - ((i - 10) % 2) * 16, y: t.y };
};

// s0: knowledge spreads 2016 -> 2026. s1: a new tenant gets going on day one.
// s2: why they already know Nais.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const dots = q(".dot");
  const n = { v: 0, y: 2016 };
  gsap.set(dots, { left: pos(NAV).left, top: pos(NAV).top, autoAlpha: 0 });
  gsap.set([q(".tenant.fresh"), ok.value, q(".link.fresh")], { autoAlpha: 0 });
  gsap.set(q(".badge"), { autoAlpha: 0, scale: 0.7 });
  tl.from(q(".node.nav, .cloud, .tenant:not(.fresh)"), {
    scale: 0.7,
    autoAlpha: 0,
    stagger: STAGGER / 2,
    ease: POP,
  })
    .from(q(".link:not(.fresh)"), { autoAlpha: 0, duration: 0.4 }, "<0.2")
    .to(
      n,
      {
        v: 2000,
        y: 2026,
        duration: 2.2,
        ease: "none",
        onUpdate: () => {
          count.value.textContent =
            "≈\u00a0" +
            Math.round(n.v).toLocaleString("nb-NO").replace(/\s/g, "\u00a0");
          year.value.textContent = Math.round(n.y);
        },
      },
      "<",
    )
    .to(
      dots.slice(0, 20),
      {
        autoAlpha: 1,
        left: (i) => pos(rest(i)).left,
        top: (i) => pos(rest(i)).top,
        duration: 1.1,
        ease: "power2.inOut",
        stagger: 0.08,
      },
      "<0.2",
    )
    .addLabel("s0")
    .to([q(".tenant.fresh"), q(".link.fresh")], { autoAlpha: 1, duration: 0.4 })
    .to(dots.slice(20), { autoAlpha: 1, duration: 0.1 }, "<")
    .fromTo(
      dots.slice(20),
      {
        left: (i) => pos(i % 2 ? CLOUD : TENANTS[i % 5]).left,
        top: (i) => pos(i % 2 ? CLOUD : TENANTS[i % 5]).top,
      },
      {
        left: (i) => pos({ x: NEW.x - 104 - i * 14, y: NEW.y }).left,
        top: pos(NEW).top,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.08,
      },
      "<",
    )
    .to(ok.value, { autoAlpha: 1, scale: 1, ease: POP })
    .addLabel("s1")
    .to(q(".badge"), {
      autoAlpha: 1,
      scale: 1,
      stagger: STAGGER * 2,
      ease: POP,
    })
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.devflow {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.headline {
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
}

.headline b {
  color: var(--nais-accent);
  font-variant-numeric: tabular-nums;
}

.headline small {
  margin-left: 0.4rem;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  border: 1px solid var(--nais-border);
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--nais-text-secondary);
  vertical-align: middle;
}

.year {
  position: absolute;
  left: 0;
  top: 0.2rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  color: var(--nais-text-secondary);
}

.stage {
  position: relative;
  height: 330px;
  margin-top: 0.8rem;
}

.links {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.link {
  fill: none;
  stroke: #334155;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.link.fresh {
  stroke: #34d399;
  stroke-dasharray: 6 6;
}

.node,
.cloud,
.ok,
.badge,
.dot {
  position: absolute;
  translate: -50% -50%;
}

.node {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 12px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-border);
}

.node.nav {
  padding: 0 1.6rem;
  height: 56px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
  border-color: var(--nais-accent);
}

.tenant {
  width: 11rem;
  padding: 0 0.6rem;
}

.tenant img {
  max-height: 22px;
  max-width: 100%;
}

.tenant.fresh {
  border-style: dashed;
  border-color: #34d399;
  font-weight: 700;
  font-size: 0.9rem;
}

.cloud {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  background: radial-gradient(
    closest-side,
    rgb(98 0 255 / 0.25),
    rgb(98 0 255 / 0.08)
  );
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

.note {
  padding: 0.05rem 0.5rem;
  border-radius: 6px;
  color: var(--nais-text-secondary);
  font-family: "Inter", sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
}

.ok {
  z-index: 2;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6ee7b7;
  white-space: nowrap;
}

.badge {
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge span {
  color: var(--nais-accent);
}

.dot {
  z-index: 1;
  width: 10px;
  height: 11px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: var(--nais-accent);
}
</style>
