<template>
  <div ref="root" class="toolbox" :class="`mode-${mode}`" data-motion-self>
    <div class="col">
      <div v-for="g in GROUPS.slice(0, 4)" :key="g.title" class="drawer">
        <header><span :class="g.icon" /> {{ g.title }}</header>
        <p>{{ g.items.join(" · ") }}</p>
      </div>
    </div>
    <div class="centre">
      <div ref="ring" class="ring" />
      <div class="app" data-anchor="hex">
        <span class="i-carbon-application" /><strong>min-app</strong>
      </div>
      <p ref="mine" class="mine">
        Teamene: appen, dataene og oppdateringene av appen
      </p>
    </div>
    <div class="col">
      <div v-for="g in GROUPS.slice(4)" :key="g.title" class="drawer">
        <header><span :class="g.icon" /> {{ g.title }}</header>
        <p>{{ g.items.join(" · ") }}</p>
      </div>
      <p v-if="mode === 'open'" ref="caption" class="caption">
        Alt i nais.yaml eller Console. Ingenting å bestille.
      </p>
    </div>
    <div v-if="mode === 'ops'" ref="ops" class="ops">
      <strong>Nais drifter:</strong>
      <span v-for="o in OPS" :key="o" class="op">{{ o }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// mode "open": one wave of drawers per click, then the caption (clicks: 4).
// mode "ops": the same grid dimmed as a callback, then the ops layer and the
// line between the agency's part and Nais' part (clicks: 2).
const props = defineProps({
  mode: { type: String, default: "open" },
});

// Checked against the Nais toolbox inventory (2026-10-21); deprecated items left out.
const GROUPS = [
  {
    title: "Kjøretid",
    icon: "i-carbon-container-software",
    items: ["Apper", "Naisjob og cron", "Autoskalering"],
  },
  {
    title: "Data",
    icon: "i-carbon-data-base",
    items: ["Postgres", "BigQuery", "Buckets", "OpenSearch", "Valkey"],
  },
  { title: "Meldinger", icon: "i-carbon-flow-stream", items: ["Kafka"] },
  {
    title: "Innlogging og tilgang",
    icon: "i-carbon-password",
    items: ["ID-porten", "Maskinporten", "Entra ID", "TokenX", "Texas"],
  },
  {
    title: "Oversikt",
    icon: "i-carbon-chart-line",
    items: ["Logger", "Metrikker", "Traces", "Varsler", "Grafana"],
  },
  {
    title: "Sikkerhet og funksjonsflagg",
    icon: "i-carbon-security",
    items: [
      "SBOM",
      "Signering",
      "Sårbarheter",
      "Nettverksregler",
      "Secrets",
      "Unleash",
    ],
  },
  {
    title: "Verktøy",
    icon: "i-carbon-tool-box",
    items: ["Console", "Nais CLI", "MCP for kodeagenter", "Kostnad per team"],
  },
];
const OPS = [
  "Plattformoppgraderinger",
  "Sikkerhetsoppdateringer",
  "Sertifikater",
  "Kafka-cluster",
  "Grafana-stakken",
  "Nettverksregler",
  "Vakt for plattformen",
];

const root = ref();
const ring = ref();
const mine = ref();
const caption = ref();
const ops = ref();

useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const drawers = q(".drawer");
  gsap.set([ring.value, mine.value], { autoAlpha: 0, scale: 0.8 });
  // The app hexagon arrives through the view transition, so no entrance here.
  tl.to({}, { duration: 0.01 });
  if (props.mode === "open") {
    // clip-path instead of height:auto: no layout work while it animates.
    gsap.set(q(".drawer p"), { clipPath: "inset(0 0 100% 0)", autoAlpha: 0 });
    gsap.set(drawers, { opacity: 0.4 });
    gsap.set(caption.value, { autoAlpha: 0, y: 12 });
    tl.from(drawers, { autoAlpha: 0, stagger: 0.05 }, "<").addLabel("s0");
    // Four waves: row by row, left and right drawer together.
    // Three waves, row by row; the short left column's last drawer joins
    // the third, so no click opens just one drawer.
    const waves = [
      [0, 4],
      [1, 5],
      [2, 6, 3],
    ].map((ix) => ix.map((i) => drawers[i]).filter(Boolean));
    waves.forEach((wave, w) => {
      wave.forEach((d, j) => {
        const side = drawers.indexOf(d) < 4 ? 1 : -1;
        tl.fromTo(
          d,
          { x: 40 * side },
          {
            x: 0,
            opacity: 1,
            borderColor: "#e8384f",
            duration: 0.4,
            ease: "power3.out",
          },
          j ? "<0.1" : "+=0",
        ).to(
          d.querySelector("p"),
          { clipPath: "inset(0 0 0% 0)", autoAlpha: 1, duration: 0.5 },
          "<",
        );
      });
      tl.to(
        q(".app"),
        { scale: 1.08, duration: 0.15, yoyo: true, repeat: 1 },
        "<",
      ).addLabel(`s${w + 1}`);
    });
    tl.to(drawers, {
      borderColor: "rgba(255,51,119,0.5)",
      backgroundColor: "rgba(255,51,119,0.12)",
      stagger: 0.03,
      duration: 0.3,
    })
      .to(caption.value, { autoAlpha: 1, y: 0 })
      .addLabel(`s${waves.length + 1}`);
  } else {
    gsap.set(drawers, { opacity: 0.45 });
    gsap.set(ops.value, { autoAlpha: 0, y: 16 });
    tl.from(drawers, { autoAlpha: 0, stagger: 0.04 }, "<")
      .addLabel("s0")
      .to(ops.value, { autoAlpha: 1, y: 0 })
      .from(
        q(".op"),
        { scale: 0.7, autoAlpha: 0, stagger: STAGGER, ease: POP },
        "<0.1",
      )
      .addLabel("s1")
      .to(ring.value, { autoAlpha: 1, scale: 1, ease: POP })
      .to(mine.value, { autoAlpha: 1, scale: 1 }, "<0.2")
      .to([...drawers, ops.value], { opacity: 1, duration: 0.4 }, "<")
      .addLabel("s2");
  }
  return tl;
});
</script>

<style scoped>
.toolbox {
  display: grid;
  grid-template-columns: 1fr 10rem 1fr;
  gap: 0.6rem 1rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.drawer {
  padding: 0.35rem 0.7rem;
  border-radius: 12px;
  border: 2px solid var(--nais-border);
  background: var(--nais-bg);
  overflow: hidden;
}

header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

header span {
  color: var(--nais-accent);
}

.drawer p {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  line-height: 1.35;
  overflow: hidden;
}

.centre {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app {
  view-transition-name: app-hex;
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

.app span {
  font-size: 1.8rem;
}

.ring {
  position: absolute;
  top: -14px;
  width: 154px;
  height: 154px;
  border-radius: 50%;
  border: 3px dashed var(--nais-text);
}

.mine {
  margin: 1.2rem 0 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.85rem;
}

.caption {
  margin: 0.3rem 0 0;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

.ops {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 12px;
  background: #1e293b;
  color: #fff;
}

.ops strong {
  font-family: "Poppins", sans-serif;
  margin-right: 0.3rem;
}

.op {
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.12);
  font-size: 0.85rem;
}
</style>
