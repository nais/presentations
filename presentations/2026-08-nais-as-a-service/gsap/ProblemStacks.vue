<template>
  <div ref="root" class="problem" data-motion-self>
    <div class="stage">
      <template v-for="(st, i) in STACKS" :key="i">
        <div class="team" :style="{ left: st.cx + '%' }">
          <span v-for="p in st.people" :key="p" class="i-carbon-user" />
        </div>
        <div
          v-for="(l, k) in LAYERS"
          :key="l.name"
          class="layer"
          :class="{ cracked: st.cracked === k, missing: st.missing === k }"
          :data-i="i"
          :style="{
            left: st.cx - st.w / 2 + '%',
            width: st.w + '%',
            top: layerTop(k) + 'px',
            background: st.tone,
          }"
        >
          <span class="nm">{{ l.name }}</span><span v-if="i === 0" class="sub">{{ l.sub }}</span>
          <span
            v-if="st.cracked === k"
            class="warn i-carbon-warning-alt-filled"
          />
        </div>
      </template>
      <div
        v-for="(t, i) in TENANTS"
        :key="t"
        class="tile"
        :class="{ extra: i >= STACKS.length }"
        :style="
          i < STACKS.length
            ? { left: STACKS[i].cx - 9 + '%', width: '18%' }
            : tileSlot(i)
        "
      >
        <span class="generic">Tenant</span><span class="name">{{ t }}</span>
      </div>
      <div ref="band" class="band">Drift og vakt døgnet rundt</div>
      <div ref="scaffold" class="scaffold">
        <div class="dev">
          <span class="i-carbon-user" /> <em>Venter på ops</em>
        </div>
        <div v-for="m in MISSING" :key="m" class="hollow">
          {{ m }} <small>mangler</small>
        </div>
        <div class="landing">Landingssone i skyen</div>
        <p class="scap">
          Mange ender med en landingssone og en wiki. Utviklerne mangler resten.
        </p>
      </div>
      <div ref="years" class="years">
        <b ref="yearsN">0</b> årsverk <small>anslag</small>
      </div>
      <div ref="naisTeam" class="nais-team">
        <span class="i-carbon-user-multiple" /> Nais-teamet
      </div>
      <div class="callout c1">
        <span class="i-carbon-user-favorite" /> Knapp og dyr kompetanse
      </div>
      <div class="callout c2">
        <span class="i-carbon-copy" /> Samme arbeid fire ganger
      </div>
      <div class="callout c3">
        <span class="i-carbon-warning" /> Ujevn sikkerhet
      </div>
    </div>
    <p ref="thesis" class="thesis">
      Plattformen Nav bygde for seg selv er nå en tjeneste for staten.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { EASE, POP, STAGGER, useSteps } from "./motion.js";

// Bottom to top, matching the toolbox groups. Each agency builds the same
// stack a little differently; the merged platform shows the sub-lines.
const LAYERS = [
  { name: "Sky", sub: "Google Cloud og Aiven" },
  { name: "Kjøretid", sub: "Kubernetes, autoskalering" },
  {
    name: "Datatjenester",
    sub: "Postgres, Kafka, Valkey, OpenSearch, BigQuery",
  },
  { name: "Sikkerhet", sub: "skanning, nettverksregler, secrets" },
  { name: "Oversikt", sub: "logger, metrikker, traces, varsler" },
  {
    name: "Innlogging og tilgang",
    sub: "ID-porten, Entra ID, Maskinporten, TokenX",
  },
  { name: "Deploy", sub: "bygg, SBOM, signering, utrulling" },
  { name: "Utviklerverktøy", sub: "Console, Nais CLI, MCP" },
];
// What a half-built platform typically lacks (beat 2): everything above the cloud.
const MISSING = LAYERS.slice(1)
  .map((l) => l.name)
  .reverse();
const STACKS = [
  { cx: 12.5, w: 20, tone: "#475569", people: 3 },
  { cx: 37.5, w: 18, tone: "#64748b", people: 2, missing: 2 },
  { cx: 62.5, w: 21, tone: "#334155", people: 3, cracked: 3 },
  { cx: 87.5, w: 19, tone: "#52627a", people: 2 },
];
const TENANTS = [
  "Nav",
  "SSB",
  "Landbruksdir.",
  "Arbeidstilsynet",
  "KS Digital",
  "Novari",
];
const STEP = 24;
const TOP = 62;
const layerTop = (k) => TOP + (LAYERS.length - 1 - k) * STEP;
const SHARED = { left: 8, width: 76 };
const tileSlot = (i) => ({
  left: SHARED.left + i * (SHARED.width / TENANTS.length) + 1.3 + "%",
  width: SHARED.width / TENANTS.length - 2.6 + "%",
});

const root = ref();
const naisTeam = ref();
const thesis = ref();
const scaffold = ref();
const years = ref();
const yearsN = ref();
const band = ref();

// s0: four fragile stacks with pain callouts. s1: what one of them usually
// turns out to be. s2: they merge into one platform built over ≈150 årsverk.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const layers = q(".layer");
  const tiles = q(".tile:not(.extra)");
  const extra = q(".tile.extra");
  const n = { v: 0 };
  gsap.set(naisTeam.value, { autoAlpha: 0, scale: 0.6 });
  gsap.set(thesis.value, { autoAlpha: 0, y: 12 });
  gsap.set(scaffold.value, { autoAlpha: 0, scale: 0.92 });
  gsap.set(years.value, { autoAlpha: 0, scale: 0.7 });
  gsap.set(band.value, { autoAlpha: 0, x: 16 });
  gsap.set(extra, { autoAlpha: 0, y: -10 });
  gsap.set(q(".tile .name"), { display: "none" });
  gsap.set(q(".layer .sub"), { autoAlpha: 0, display: "none" });
  gsap.set(q(".layer.missing"), { autoAlpha: 0 });
  tl.from(q(".layer:not(.missing)"), {
    y: -30,
    autoAlpha: 0,
    stagger: { each: 0.02, from: "random" },
    duration: 0.5,
  })
    .from(tiles, { y: -16, autoAlpha: 0, stagger: STAGGER }, "-=0.2")
    .from(q(".team"), { y: -16, autoAlpha: 0, stagger: STAGGER }, "<")
    .from(q(".callout"), {
      scale: 0.6,
      autoAlpha: 0,
      stagger: STAGGER * 3,
      ease: POP,
    })
    .addLabel("s0")
    .to(q(".callout"), { autoAlpha: 0, scale: 0.8, duration: 0.3 })
    .to(
      [...layers, ...tiles, ...q(".team")],
      { opacity: 0.12, duration: 0.4 },
      "<",
    )
    .to(scaffold.value, { autoAlpha: 1, scale: 1, duration: 0.5 })
    .from(q(".hollow"), { x: -14, autoAlpha: 0, stagger: STAGGER / 2 }, "<0.2")
    .from(q(".scap"), { autoAlpha: 0, y: 8 })
    .addLabel("s1")
    .to(scaffold.value, { autoAlpha: 0, scale: 0.92, duration: 0.4 })
    .to(
      [...layers, ...tiles, ...q(".team")],
      { opacity: 1, duration: 0.4 },
      "<",
    )
    .to(q(".team"), { left: "50%", autoAlpha: 0, duration: 0.6, ease: EASE })
    .to(naisTeam.value, { autoAlpha: 1, scale: 1, ease: POP }, "-=0.2");
  // Every agency's layer k slides to the shared row k; the first one stays.
  layers.forEach((el) => {
    const i = Number(el.dataset.i);
    tl.to(
      el,
      {
        left: SHARED.left + "%",
        width: SHARED.width + "%",
        autoAlpha: i === 0 ? 1 : 0,
        background: "linear-gradient(90deg, #e8384f, #dc2626)",
        borderStyle: "solid",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "merge",
    );
  });
  tl.to(q(".warn"), { autoAlpha: 0, duration: 0.3 }, "merge")
    .to(
      tiles,
      {
        left: (i) => tileSlot(i).left,
        width: (i) => tileSlot(i).width,
        background: "#1e293b",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "merge",
    )
    .set(q(".tile .generic"), { display: "none" })
    .set(q(".tile .name"), { display: "inline" })
    .set(q(".layer .sub"), { display: "inline" })
    .to(extra, { autoAlpha: 1, y: 0, stagger: 0.1 })
    .to(q(".layer .sub"), { autoAlpha: 1, duration: 0.4 }, "<")
    .to(band.value, { autoAlpha: 1, x: 0 }, "<")
    .to(years.value, { autoAlpha: 1, scale: 1, ease: POP })
    .to(
      n,
      {
        v: 150,
        duration: 1.2,
        onUpdate: () => (yearsN.value.textContent = "≈ " + Math.round(n.v)),
      },
      "<",
    )
    .to(thesis.value, { autoAlpha: 1, y: 0 }, "-=0.4")
    .addLabel("s2");
  return tl;
});
</script>

<style scoped>
.problem {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}

.stage {
  position: relative;
  height: 302px;
}

.team,
.nais-team {
  position: absolute;
  top: 0;
  translate: -50% 0;
  display: flex;
  gap: 2px;
  font-size: 1.25rem;
  color: var(--nais-text);
}

.nais-team {
  left: 50%;
  gap: 0.4rem;
  align-items: center;
  padding: 0.15rem 0.9rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
}

.tile {
  position: absolute;
  top: 32px;
  padding: 0.12rem 0;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  background: #334155;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.66rem;
  white-space: nowrap;
  overflow: hidden;
}

.layer {
  position: absolute;
  height: 21px;
  border-radius: 6px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: #fff;
  font-weight: 600;
  font-size: 0.68rem;
  white-space: nowrap;
  overflow: hidden;
}

.layer .sub {
  font-weight: 400;
  opacity: 0.9;
}

.layer.cracked {
  border: 2px dashed #fbbf24;
}

.warn {
  color: #fbbf24;
}

.band {
  position: absolute;
  left: 84.8%;
  top: 62px;
  width: 2.2rem;
  height: 189px;
  border-radius: 8px;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.68rem;
  font-weight: 700;
  color: #fff;
  background: #1e293b;
  border: 1px solid #334155;
}

.callout {
  position: absolute;
  top: 264px;
  translate: -50% 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-accent);
  color: var(--nais-text);
  font-weight: 700;
  font-size: 0.82rem;
  white-space: nowrap;
}

.callout span {
  color: var(--nais-accent);
}

.c1 {
  left: 12%;
}

.c2 {
  left: 39%;
}

.c3 {
  left: 64%;
}

.scaffold {
  position: absolute;
  left: 50%;
  top: 0;
  translate: -50% 0;
  width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 3;
}

.dev {
  align-self: center;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.dev em {
  font-style: normal;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.05rem 0.5rem;
  border-radius: 999px;
  color: #fde68a;
  background: rgb(251 191 36 / 0.18);
  border: 1px solid rgb(251 191 36 / 0.5);
}

.hollow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 23px;
  padding: 0 0.7rem;
  border-radius: 7px;
  border: 2px dashed #475569;
  font-size: 0.78rem;
  color: #a3b1c6;
}

.hollow small {
  font-size: 0.68rem;
  font-weight: 700;
  color: #fca5a5;
}

.landing {
  height: 26px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.82rem;
  color: #fff;
  background: #475569;
}

.scap {
  margin: 0.4rem 0 0;
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
}

.years {
  position: absolute;
  left: 50%;
  top: 0;
  translate: calc(-50% - 11rem) 0;
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  white-space: nowrap;
}

.years b {
  font-size: 1.25rem;
  color: var(--nais-accent);
  font-variant-numeric: tabular-nums;
}

.years small {
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--nais-text-secondary);
}

.thesis {
  margin: 0.2rem 0 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
