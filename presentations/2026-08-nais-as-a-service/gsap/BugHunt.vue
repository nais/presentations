<template>
  <div ref="root" class="hunt" data-motion-self>
    <section class="panel chart">
      <header>
        Feilrate <span ref="alert" class="badge bad">Varsel</span><span ref="ok" class="badge good">Fikset</span>
      </header>
      <svg viewBox="0 0 300 140" aria-hidden="true">
        <path class="axis" d="M10 125 H290" />
        <path ref="base" class="line" d="M10 110 L60 108 L100 111 L140 109" />
        <path
          ref="spike"
          class="line hot"
          d="M140 109 L160 40 L190 35 L220 38"
        />
        <path
          ref="fix"
          class="line cool"
          d="M220 38 L240 108 L270 110 L290 109"
        />
      </svg>
    </section>
    <section class="panel trace">
      <header>Trace</header>
      <div
        v-for="s in SPANS"
        :key="s.name"
        class="span"
        :class="{ bad: s.bad }"
      >
        <span class="name">{{ s.name }}</span>
        <div class="track">
          <div
            class="bar"
            :style="{ marginLeft: s.at + '%', width: s.w + '%' }"
          />
        </div>
      </div>
    </section>
    <section class="panel logs">
      <header>Logger for samme trace</header>
      <code v-for="l in LOGS" :key="l.text" :class="{ bad: l.bad }">{{
        l.text
      }}</code>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { POP, RISE, STAGGER, useSteps } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

// Illustration only: no real measurements on this slide.
const SPANS = [
  { name: "GET /soknad", at: 0, w: 100 },
  { name: "auth (TokenX)", at: 4, w: 14 },
  { name: "hent-bruker", at: 20, w: 22 },
  { name: "db: lagre-soknad", at: 44, w: 52, bad: true },
];
const LOGS = [
  { text: "INFO  mottok søknad" },
  { text: "INFO  bruker hentet" },
  { text: "ERROR lagring feilet: timeout mot databasen", bad: true },
];

const root = ref();
const alert = ref();
const ok = ref();
const spike = ref();
const fix = ref();
const base = ref();

// s0 chart, s1 alert, s2 trace, s3 logs, s4 fix deployed.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  gsap.set([spike.value, fix.value], { drawSVG: "0%" });
  gsap.set([alert.value, ok.value], { autoAlpha: 0, scale: 0.6 });
  gsap.set([q(".trace"), q(".logs")], { autoAlpha: 0, y: RISE });
  tl.from(q(".chart"), { autoAlpha: 0, y: RISE })
    .fromTo(
      base.value,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8 },
      "-=0.3",
    )
    .addLabel("s0")
    .to(spike.value, { drawSVG: "100%", duration: 0.6, ease: "power2.in" })
    .to(alert.value, { autoAlpha: 1, scale: 1, ease: POP })
    .addLabel("s1")
    .to(q(".trace"), { autoAlpha: 1, y: 0 })
    .from(
      q(".span .bar"),
      { scaleX: 0, transformOrigin: "0 50%", stagger: STAGGER },
      "<0.2",
    )
    .to(q(".span.bad"), { backgroundColor: "#fef2f2", duration: 0.3 })
    .addLabel("s2")
    .to(q(".logs"), { autoAlpha: 1, y: 0 })
    .from(q(".logs code"), { autoAlpha: 0, x: -10, stagger: STAGGER }, "<0.2")
    .to(q(".logs code.bad"), {
      backgroundColor: "rgba(232,56,79,0.3)",
      duration: 0.3,
    })
    .addLabel("s3")
    .to(fix.value, { drawSVG: "100%", duration: 0.8, ease: "power2.out" })
    .to(alert.value, { autoAlpha: 0, scale: 0.6, duration: 0.3 }, "<")
    .to(ok.value, { autoAlpha: 1, scale: 1, ease: POP }, "<0.3")
    .addLabel("s4");
  return tl;
});
</script>

<style scoped>
.hunt {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.15fr;
  gap: 1rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: start;
}

.panel {
  padding: 0.8rem;
  border-radius: 14px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.badge {
  padding: 0.05rem 0.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #fff;
}

.badge.bad {
  background: var(--nais-accent);
}

.badge.good {
  background: var(--nais-success);
}

svg {
  width: 100%;
}

.axis {
  stroke: var(--nais-border);
  stroke-width: 2;
}

.line {
  fill: none;
  stroke: #64748b;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.line.hot {
  stroke: var(--nais-accent);
}

.line.cool {
  stroke: var(--nais-success);
}

.span {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.3rem;
  border-radius: 6px;
}

.name {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
}

.track {
  height: 12px;
}

.bar {
  height: 100%;
  border-radius: 4px;
  background: #94a3b8;
}

.span.bad .bar {
  background: var(--nais-accent);
}

.span.bad .name {
  color: var(--nais-accent);
  font-weight: 700;
}

.logs code {
  display: block;
  padding: 0.25rem 0.4rem;
  margin-bottom: 0.3rem;
  border-radius: 6px;
  background: #0f172a;
  color: #cbd5e1;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  white-space: normal;
}

.logs code.bad {
  color: #fff;
}
</style>
