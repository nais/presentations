<template>
  <div ref="root" class="iso" data-motion-self>
    <div class="stack">
      <div
        v-for="(l, i) in LAYERS"
        :key="l.name"
        class="layer"
        :style="{ '--i': i, '--c': l.color }"
      >
        <div class="plate" />
        <div class="label">
          <b>{{ l.name }}</b><small>{{ i === 0 ? "" : l.sub }}</small>
          <small v-if="i === 0" class="infra"><span class="old">eget datasenter</span><span class="new">Google Cloud</span></small>
        </div>
      </div>
    </div>
    <div class="zones">
      <h4>Innebygd redundans og skalering</h4>
      <div class="row">
        <div v-for="z in ZONES" :key="z" class="zone" :data-z="z">
          <small>{{ z }}</small>
          <div class="pods">
            <i
              v-for="p in PODS"
              :key="z + p.id"
              class="pod"
              :class="{ extra: p.extra, moved: p.moved }"
              :style="{ background: p.color }"
            >{{ p.app }}</i>
          </div>
        </div>
      </div>
      <p class="region">Én region, tre soner</p>
      <p ref="cap" class="cap">
        <span class="c1">Et datasenter faller ut. Appen merker det ikke.</span><span class="c2">Vi bytter det som ligger under. Appen merker det ikke.</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { POP, STAGGER, useSteps } from "./motion.js";

// Bottom to top.
const LAYERS = [
  { name: "Infrastruktur", sub: "fra skyleverandøren", color: "#334155" },
  { name: "Kubernetes", sub: "kjører containerne", color: "#3b5b8c" },
  {
    name: "Operatorer",
    sub: "hjertet i Nais, det utviklerne møter",
    color: "#9b3b6a",
  },
  { name: "Applikasjon", sub: "teamenes apper", color: "#e8384f" },
];
const ZONES = ["datasenter-a", "datasenter-b", "datasenter-c"];
const PODS = [
  { id: 1, app: "A", color: "#e8384f" },
  { id: 2, app: "B", color: "#5cb2da" },
  { id: 3, app: "C", color: "#9b6fd6" },
  { id: 4, app: "A", color: "#e8384f", extra: true },
  { id: 5, app: "B", color: "#5cb2da", extra: true },
  { id: 6, app: "C", color: "#9b6fd6", extra: true },
  // Spare slots that receive the pods rescheduled from a failed zone.
  { id: 7, app: "A", color: "#e8384f", moved: true },
  { id: 8, app: "B", color: "#5cb2da", moved: true },
  { id: 9, app: "C", color: "#9b6fd6", moved: true },
];

const root = ref();
const cap = ref();
// s0: layers build bottom-up. s1: pods spread over three zones. s2: they scale out.
// s3: zone b fails and its pods are rescheduled. s4: the bottom layer is swapped.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const layers = q(".layer");
  gsap.set(q(".zones"), { autoAlpha: 0, x: 30 });
  gsap.set(q(".pod"), { scale: 0 });
  gsap.set(q(".cap span, .infra .new"), { autoAlpha: 0 });
  const zone = (z) => q(`.zone[data-z="${z}"]`)[0];
  tl.from(layers, {
    y: -60,
    autoAlpha: 0,
    stagger: STAGGER * 3,
    ease: POP,
    duration: 0.6,
  })
    .addLabel("s0")
    .to(q(".stack"), { scale: 0.8, x: -30, duration: 0.6 })
    .to(q(".zones"), { autoAlpha: 1, x: 0 }, "<0.2")
    .to(q(".pod:not(.extra):not(.moved)"), {
      scale: 1,
      ease: POP,
      stagger: 0.05,
      duration: 0.4,
    })
    .addLabel("s1")
    .to(q(".pod.extra"), { scale: 1, ease: POP, stagger: 0.05, duration: 0.4 })
    .addLabel("s2")
    // Zone b fails: it turns red, its pods fade, and spare pods land in a and c.
    .to(zone("datasenter-b"), {
      borderColor: "#f87171",
      backgroundColor: "rgba(127,29,29,0.35)",
      duration: 0.3,
    })
    .to(
      zone("datasenter-b").querySelectorAll(".pod:not(.moved)"),
      { scale: 0.6, autoAlpha: 0, stagger: 0.04, duration: 0.3 },
      "<0.1",
    )
    .to(
      [
        ...zone("datasenter-a").querySelectorAll(".pod.moved"),
        ...zone("datasenter-c").querySelectorAll(".pod.moved"),
      ],
      { scale: 1, ease: "elastic.out(1,0.5)", stagger: 0.06, duration: 0.8 },
    )
    .to(q(".c1"), { autoAlpha: 1, duration: 0.3 }, "<")
    .addLabel("s3")
    // Swap the bottom layer; the operators and apps stay put and glow.
    .to(q(".c1"), { autoAlpha: 0, duration: 0.2 })
    .to(
      layers[0].querySelector(".plate"),
      { x: -220, autoAlpha: 0, duration: 0.5, ease: "power2.in" },
      "<",
    )
    .to(q(".infra .old"), { autoAlpha: 0, duration: 0.2 }, "<")
    .set(layers[0].querySelector(".plate"), {
      x: 220,
      backgroundColor: "#1d4ed8",
    })
    .to(layers[0].querySelector(".plate"), {
      x: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power3.out",
    })
    .to(q(".infra .new"), { autoAlpha: 1, duration: 0.3 }, "<0.2")
    .to(
      [layers[2], layers[3]].map((l) => l.querySelector(".plate")),
      { boxShadow: "0 0 26px 6px rgba(255,51,119,0.55)", duration: 0.5 },
      "<",
    )
    .to(q(".c2"), { autoAlpha: 1, duration: 0.3 }, "<")
    .addLabel("s4");
  return tl;
});
</script>

<style scoped>
.iso {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
}

.stack {
  position: relative;
  height: 320px;
  transform-origin: 30% 50%;
}

.layer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(var(--i) * 62px);
  height: 120px;
}

.plate {
  position: absolute;
  left: 8%;
  width: 54%;
  top: 30px;
  height: 90px;
  border-radius: 14px;
  background: var(--c);
  border: 2px solid rgb(255 255 255 / 0.15);
  transform: rotateX(58deg) rotateZ(-38deg);
  box-shadow: 0 18px 30px rgb(0 0 0 / 0.35);
}

.label {
  position: absolute;
  left: 64%;
  top: 52px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.label b {
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
}

.label small {
  font-size: 0.78rem;
  color: var(--nais-text-secondary);
}

.zones h4 {
  margin: 0 0 0.7rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.zone {
  padding: 0.5rem;
  border-radius: 12px;
  border: 1px dashed #64748b;
}

.zone small {
  display: block;
  margin-bottom: 0.4rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: var(--nais-text-secondary);
}

.pods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;
}

.pod {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 7px;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  color: #fff;
}

.pod.moved {
  outline: 2px solid #fff;
}

.zone .pods .pod.moved {
  grid-column: span 1;
}

.infra {
  position: relative;
  display: inline-grid;
}

.infra span {
  grid-area: 1 / 1;
}

.cap {
  position: relative;
  height: 1.4rem;
  margin: 0.4rem 0 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
}

.cap span {
  position: absolute;
  inset: 0;
}

.region {
  margin: 0.6rem 0 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--nais-text-secondary);
}
</style>
