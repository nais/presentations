<template>
  <div ref="root" class="devflow" data-motion-self>
    <div class="headline">
      <b ref="count">≈ 0</b> utviklere har jobbet på Nais <small>Anslag</small>
    </div>
    <div class="stage">
      <div class="org nav" style="left: 10%; top: 50%">Nav</div>
      <div
        v-for="(c, i) in FIRMS"
        :key="c"
        class="org firm"
        :style="{ left: '46%', top: 18 + i * 32 + '%' }"
      >
        {{ c }}
      </div>
      <div
        v-for="(t, i) in TENANTS"
        :key="t"
        class="org tenant"
        :class="{ fresh: i === TENANTS.length - 1 }"
        :style="{ left: '84%', top: 14 + i * 40 + 'px' }"
      >
        {{ t }}
      </div>
      <div class="ok" style="left: 84%; top: 196px">✓ første deploy dag én</div>
      <div v-for="k in 14" :key="k" class="dev">
        <span class="i-carbon-user" /><i />
      </div>
    </div>
    <div class="tiles">
      <div class="tile ph-tile">
        <b>PLASSHOLDER</b><span>Konsulentselskaper med Nais-erfaring</span>
      </div>
      <div class="tile">
        <b>Åpent fra dag én</b><span>docs.nais.io og koden på github.com/nais er åpne, og vi har holdt
          mange foredrag.</span>
      </div>
      <div class="tile">
        <b>KI-assistentene kan det også</b><span>Dokumentasjonen og koden er åpen, så også kodeassistentene kjenner
          Nais.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// Illustration: developers carry Nais experience between Nav, consultancies and tenants.
const FIRMS = ["Konsulentselskap", "Konsulentselskap", "Konsulentselskap"];
const TENANTS = [
  "SSB",
  "Landbruksdir.",
  "Arbeidstilsynet",
  "KS Digital",
  "Ny tenant",
];

const root = ref();
const count = ref();

// s0: estimate and the map. s1: developers move out from Nav.
// s2: a new tenant gets going on day one. s3: two more reasons.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const devs = q(".dev");
  const target = (i) => {
    if (i % 2 === 0)
      return {
        left: 33 + ((i / 2) % 2) * 2.5 + "%",
        top: 18 + (Math.floor(i / 2) % 3) * 32 + "%",
      };
    const t = Math.floor(i / 2) % 5;
    return {
      left: 73.5 + (i % 4 === 1 ? 0 : 2.5) + "%",
      top: 14 + t * 40 + "px",
    };
  };
  const n = { v: 0 };
  gsap.set(devs, { left: "10%", top: "50%", autoAlpha: 0 });
  gsap.set(q(".ok"), { autoAlpha: 0, scale: 0.7 });
  gsap.set(q(".tile:not(.ph-tile)"), { autoAlpha: 0, y: 14 });
  tl.from(q(".org"), {
    scale: 0.7,
    autoAlpha: 0,
    stagger: STAGGER / 2,
    ease: POP,
  })
    .to(
      n,
      {
        v: 2000,
        duration: 1.2,
        onUpdate: () =>
          (count.value.textContent =
            "≈ " + Math.round(n.v).toLocaleString("nb-NO").replace(/\s/g, " ")),
      },
      "<",
    )
    .from(q(".ph-tile"), { autoAlpha: 0, y: 14 }, "-=0.4")
    .addLabel("s0")
    .to(devs, { autoAlpha: 1, duration: 0.2, stagger: 0.05 })
    .to(
      devs,
      {
        left: (i) => target(i).left,
        top: (i) => target(i).top,
        duration: 1.1,
        ease: "power2.inOut",
        stagger: 0.07,
      },
      "<",
    )
    .addLabel("s1")
    .to(q(".tenant.fresh"), {
      borderColor: "#34d399",
      backgroundColor: "rgba(52,211,153,0.15)",
      duration: 0.4,
    })
    .to(q(".ok"), { autoAlpha: 1, scale: 1, ease: POP })
    .addLabel("s2")
    .to(q(".tile:not(.ph-tile)"), { autoAlpha: 1, y: 0, stagger: STAGGER * 2 })
    .addLabel("s3");
  return tl;
});
</script>

<style scoped>
.devflow {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}

.headline {
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

.stage {
  position: relative;
  height: 212px;
  margin: 0.5rem 0 0.8rem;
}

.org,
.dev {
  position: absolute;
  translate: -50% -50%;
}

.org {
  padding: 0.25rem 0.7rem;
  border-radius: 10px;
  border: 2px solid var(--nais-border);
  background: var(--nais-surface);
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
}

.org.nav {
  padding: 0.6rem 1.4rem;
  font-size: 1.1rem;
  border-color: var(--nais-accent);
}

.org.tenant {
  font-size: 0.78rem;
  padding: 0.15rem 0.6rem;
}

.ok {
  position: absolute;
  translate: -50% -50%;
  white-space: nowrap;
  font-size: 0.72rem;
  color: #6ee7b7;
}

.dev {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: var(--nais-text);
}

.dev i {
  width: 9px;
  height: 10px;
  margin-left: -3px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: var(--nais-accent);
}

.tiles {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.tile {
  padding: 0.6rem 0.8rem;
  border-radius: 14px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
}

.tile b {
  display: block;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.tile span {
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--nais-text-secondary);
}

.ph-tile {
  border: 2px dashed #d97706;
  background: rgb(217 119 6 / 0.08);
}

.ph-tile b {
  color: #fbbf24;
}
</style>
