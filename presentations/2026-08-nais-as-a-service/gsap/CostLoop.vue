<template>
  <div ref="root" class="cost" data-motion-self>
    <div class="left">
      <PrCard
        :title="pr.title"
        :number="pr.number"
        file=".nais/app.yaml"
        :diff="pr.diff"
        :checks="CHECKS"
        reviewer="Kari Nordmann"
      />
    </div>
    <BrowserFrame
      url="console.nais.io/team/team-eksempel/cost"
      active="Cost"
      :crumbs="['team-eksempel', 'Cost']"
      class="frame"
    >
      <div class="chart">
        <h2>Cost</h2>
        <svg viewBox="0 0 400 170" aria-hidden="true">
          <line
            v-for="y in [30, 70, 110, 150]"
            :key="y"
            x1="34"
            x2="400"
            :y1="y"
            :y2="y"
            class="gl"
          />
          <text
            v-for="(v, i) in ['600', '400', '200', '0']"
            :key="v"
            x="0"
            :y="[33, 73, 113, 153][i]"
            class="tk"
          >
            {{ v }}
          </text>
          <path ref="line1" class="line" :d="PATH1" />
          <path ref="line2" class="line" :d="PATH2" />
          <path ref="line3" class="line" :d="PATH3" />
          <text x="34" y="168" class="tk">1. okt</text>
          <text x="350" y="168" class="tk">31. okt</text>
        </svg>
        <p class="unit">kr per dag, team-eksempel</p>
      </div>
    </BrowserFrame>
    <p ref="take" class="take">
      Teamet eier kostnaden. De ser den, og de endrer den selv.
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import PrCard from "./PrCard.vue";
import BrowserFrame from "./BrowserFrame.vue";
import { useSteps } from "./motion.js";

gsap.registerPlugin(DrawSVGPlugin);

// Field names from the Application spec (gcp.sqlInstances[].tier/diskSize).
// Cost numbers are illustrative.
const UP = [
  "  sqlInstances:",
  "    - type: POSTGRES_18",
  "-     tier: db-custom-1-3840",
  "+     tier: db-custom-4-15360",
  "-     diskSize: 10",
  "+     diskSize: 100",
];
const DOWN = [
  "  sqlInstances:",
  "    - type: POSTGRES_18",
  "-     tier: db-custom-4-15360",
  "+     tier: db-custom-1-3840",
  "-     diskSize: 100",
  "+     diskSize: 20",
];
const CHECKS = ["build", "test", "nais validate"];
// y = 150 - kr/day * 0.2. Before ≈ 300, after scale-up ≈ 480, after right-size ≈ 260.
const PATH1 = "M34 90 L70 89 L106 91 L142 90";
const PATH2 = "M142 90 L160 55 L196 54 L232 55 L268 54";
const PATH3 = "M268 54 L286 98 L322 98 L358 97 L394 98";

const root = ref();
const line1 = ref();
const line2 = ref();
const line3 = ref();
const take = ref();
const second = ref(false);
// The same card stays put; only the title and the changed diff lines change.
const pr = computed(() =>
  second.value
    ? { title: "Riktig størrelse på databasen", number: 64, diff: DOWN }
    : { title: "Større database", number: 61, diff: UP },
);

// s0: PR 1, steady cost. s1: merge, and the cost line spikes. s2: PR 2 in the
// same card, only the changed lines flash. s3: merge, cost drops below the start.
useSteps((tl) => {
  const card = () => root.value.querySelector(".pr");
  const q = (sel) => card().querySelectorAll(sel);
  const reset = () => {
    gsap.set(q(".review, .deployed"), { autoAlpha: 0 });
    gsap.set(q(".dotc"), { backgroundColor: "#d29922" });
    gsap.set(q(".state.open"), { display: "inline" });
    gsap.set(q(".state.merged"), { display: "none" });
  };
  gsap.set([line2.value, line3.value], { drawSVG: "0%" });
  gsap.set(take.value, { autoAlpha: 0, y: 12 });
  reset();
  const merge = () =>
    tl
      .to(q(".dotc"), {
        backgroundColor: "#3fb950",
        stagger: 0.25,
        duration: 0.25,
      })
      .to(q(".review"), { autoAlpha: 1, duration: 0.25 })
      .set(q(".state.open"), { display: "none" })
      .set(q(".state.merged"), { display: "inline" });
  tl.from(card(), { autoAlpha: 0, y: 20 })
    .fromTo(
      line1.value,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 0.8 },
      "<0.2",
    )
    .addLabel("s0");
  merge();
  tl.to(line2.value, { drawSVG: "100%", duration: 1, ease: "none" }).addLabel(
    "s1",
  );
  // Small gap so arriving at s1 never triggers the switch to the second PR.
  tl.to({}, { duration: 0.3 })
    .call(() => globalThis.requestAnimationFrame(reset))
    .to(
      q(".diff code.add, .diff code.del"),
      {
        scale: 1.03,
        transformOrigin: "0 50%",
        yoyo: true,
        repeat: 1,
        stagger: 0.06,
        duration: 0.2,
      },
      "+=0.05",
    )
    .addLabel("s2");
  merge();
  tl.to(line3.value, { drawSVG: "100%", duration: 1, ease: "none" })
    .to(take.value, { autoAlpha: 1, y: 0 })
    .addLabel("s3");
  tl.eventCallback("onUpdate", () => {
    second.value = tl.time() >= tl.labels.s1 + 0.2;
  });
  return tl;
});
</script>

<style scoped>
.cost {
  position: relative;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 1.2rem;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  align-items: start;
}

.left {
  position: relative;
  min-height: 270px;
}

.frame {
  height: 300px !important;
}

.chart h2 {
  margin: 0 0 0.2rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: #0f172a;
}

.chart svg {
  width: 100%;
  height: 170px;
}

.gl {
  stroke: #e2e8f0;
}

.tk {
  font-size: 9px;
  fill: #64748b;
}

.line {
  fill: none;
  stroke: #e8384f;
  stroke-width: 3;
  stroke-linejoin: round;
}

.unit {
  margin: 0.2rem 0 0;
  font-size: 0.65rem;
  color: #64748b;
}

.take {
  grid-column: 1 / -1;
  margin: 0.4rem 0 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
}
</style>
