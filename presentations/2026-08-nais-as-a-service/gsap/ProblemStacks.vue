<template>
  <div ref="root" class="problem" data-motion-self>
    <div class="stage">
      <template v-for="(st, i) in STACKS" :key="i">
        <div class="team" :style="{ left: st.cx + '%' }">
          <span v-for="p in st.people" :key="p" class="i-carbon-user" />
        </div>
        <div
          class="tile"
          :data-i="i"
          :style="{ left: st.cx - 9 + '%', width: '18%' }"
        >
          Etat
        </div>
        <div
          v-for="(l, k) in LAYERS"
          :key="l"
          class="layer"
          :class="{ cracked: st.cracked === k, missing: st.missing === k }"
          :data-i="i"
          :data-k="k"
          :style="{
            left: st.cx - st.w / 2 + '%',
            width: st.w + '%',
            top: layerTop(k) + 'px',
            background: st.tone,
          }"
        >
          {{ l }}
          <span
            v-if="st.cracked === k"
            class="warn i-carbon-warning-alt-filled"
          />
        </div>
      </template>
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

// Bottom to top. Each agency builds the same stack a little differently.
const LAYERS = ["Sky", "Kubernetes", "Data", "Sikkerhet", "Utrulling"];
const STACKS = [
  { cx: 12.5, w: 19, tone: "#475569", people: 3 },
  { cx: 37.5, w: 17, tone: "#64748b", people: 2, missing: 2 },
  { cx: 62.5, w: 20, tone: "#334155", people: 3, cracked: 3 },
  { cx: 87.5, w: 18, tone: "#52627a", people: 2 },
];
const layerTop = (k) => 254 - (k + 1) * 34;
const SHARED = { left: 15, width: 70 };

const root = ref();
const naisTeam = ref();
const thesis = ref();

// s0: four fragile stacks with pain callouts. s1: they merge into one platform.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const layers = q(".layer");
  const tiles = q(".tile");
  gsap.set(naisTeam.value, { autoAlpha: 0, scale: 0.6 });
  gsap.set(thesis.value, { autoAlpha: 0, y: 12 });
  gsap.set(q(".layer.missing"), { autoAlpha: 0 });
  tl.from(q(".layer:not(.missing)"), {
    y: -30,
    autoAlpha: 0,
    stagger: { each: 0.03, from: "random" },
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
      q(".team"),
      { left: "50%", autoAlpha: 0, duration: 0.6, ease: EASE },
      "<",
    )
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
  tl.to(q(".warn"), { autoAlpha: 0, duration: 0.3 }, "merge").to(
    tiles,
    {
      left: (i) => SHARED.left + i * (SHARED.width / 4) + 1.3 + "%",
      width: SHARED.width / 4 - 2.6 + "%",
      background: "#1e293b",
      duration: 0.8,
      ease: "power2.inOut",
    },
    "merge",
  );
  tl.to(thesis.value, { autoAlpha: 1, y: 0 }).addLabel("s1");
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
  height: 310px;
}

.team,
.nais-team {
  position: absolute;
  top: 8px;
  translate: -50% 0;
  display: flex;
  gap: 2px;
  font-size: 1.4rem;
  color: var(--nais-text);
}

.nais-team {
  left: 50%;
  gap: 0.4rem;
  align-items: center;
  padding: 0.2rem 0.9rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(
    135deg,
    var(--nais-gradient-from),
    var(--nais-gradient-to)
  );
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1rem;
}

.tile {
  position: absolute;
  top: 44px;
  padding: 0.2rem 0;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  background: #334155;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
}

.layer {
  position: absolute;
  height: 30px;
  border-radius: 7px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
}

.layer.cracked {
  border: 2px dashed #fbbf24;
}

.warn {
  color: #fbbf24;
}

.callout {
  position: absolute;
  top: 268px;
  translate: -50% 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-accent);
  color: var(--nais-text);
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgb(0 0 0 / 0.08);
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

.thesis {
  margin: -2.4rem 0 0;
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.3rem;
}
</style>
