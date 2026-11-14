<template>
  <div ref="root" class="day" data-motion-self>
    <div ref="sky" class="sky">
      <div ref="orb" class="orb" />
      <div class="horizon" />
      <div class="clock">
        <span v-for="s in steps" :key="s.time">{{ s.time }}</span>
      </div>
    </div>
    <div class="chat">
      <div v-for="(s, i) in steps" :key="i" class="msgs">
        <div v-for="(m, j) in s.msgs" :key="j" class="msg" :class="m.kind">
          <small v-if="m.to">{{ m.to }}</small>
          {{ m.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { RISE, useSteps } from "./motion.js";

// Sky colours from the scroll section on varden.flaatten.org/about:
// [top, bottom, orb colour, is moon].
const steps = [
  {
    time: "05:30",
    sky: ["#141c30", "#3a3557", "#e6eef4", true],
    msgs: [
      { kind: "note", text: "Huset sover. Varden lager Morgenrådet." },
      { kind: "note", text: "Radioprogram, 4–7 minutter" },
    ],
  },
  {
    time: "06:15",
    sky: ["#2b3552", "#e39a72", "#FFC48A"],
    msgs: [
      {
        to: "Familiechat",
        text: "God morgen! ☀ 6–8 grader, overskyet. Dagsplan og pakkeliste.",
      },
    ],
  },
  {
    time: "15:00",
    sky: ["#8fbde3", "#e6eef4", "#FFF4D6"],
    msgs: [
      {
        to: "Til foreldrene",
        text: "Fotballen er flyttet fra 16:30 til 17:00 i dag.",
      },
    ],
  },
  {
    time: "17:00",
    sky: ["#a9c6dd", "#f4dcbc", "#FFD9A0"],
    msgs: [
      { kind: "me", to: "Barnet", text: "Kan jeg få mer internett?" },
      {
        to: "Varden",
        text: "Du har 49 minutter igjen, men det må være 30 minutter pause mellom øktene.",
      },
    ],
  },
  {
    time: "20:00",
    sky: ["#3b3f66", "#e08a5c", "#FF9E66"],
    msgs: [
      {
        to: "Til foreldrene",
        text: "I morgen har barnet svømming, så husk håndkle.",
      },
    ],
  },
  {
    time: "23:00",
    sky: ["#0d151d", "#1c2a3a", "#e6eef4", true],
    msgs: [
      {
        kind: "note",
        text: "Varden skriver ned dagens hendelser og avgjørelser.",
      },
    ],
  },
];

// Orb on a half-ellipse: 05:00 at the left horizon, 23:30 at the right.
const arc = (t) => {
  const [h, m] = t.split(":").map(Number);
  const p = (h * 60 + m - 300) / (1410 - 300);
  return { left: `${8 + p * 84}%`, top: `${78 - Math.sin(p * Math.PI) * 62}%` };
};

const root = ref();
const sky = ref();
const orb = ref();

useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const clocks = q(".clock span");
  const groups = q(".msgs");
  const paint = (s) => ({
    "--top": s.sky[0],
    "--bottom": s.sky[1],
  });
  const orbStyle = (s) => ({
    ...arc(s.time),
    backgroundColor: s.sky[2],
    boxShadow: s.sky[3]
      ? "0 0 24px 4px rgba(230,238,244,0.35)"
      : `0 0 60px 18px ${s.sky[2]}`,
    scale: s.sky[3] ? 0.7 : 1,
  });
  gsap.set(sky.value, paint(steps[0]));
  gsap.set(orb.value, { ...orbStyle(steps[0]), xPercent: -50, yPercent: -50 });
  gsap.set(clocks, { autoAlpha: 0 });
  gsap.set(groups, { display: "none" });

  const show = (i) => {
    if (i > 0) {
      tl.to(sky.value, { ...paint(steps[i]), duration: 1 })
        .to(orb.value, { ...orbStyle(steps[i]), duration: 1 }, "<")
        .to(clocks[i - 1], { autoAlpha: 0, y: -10, duration: 0.3 }, "<")
        // Older bubbles fade and shrink; the one before that leaves.
        .to(groups[i - 1], { autoAlpha: 0.4, scale: 0.92, duration: 0.4 }, "<");
      if (i > 1)
        tl.to(groups[i - 2], { autoAlpha: 0, duration: 0.3 }, "<").set(
          groups[i - 2],
          { display: "none" },
        );
    }
    tl.fromTo(
      clocks[i],
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.4 },
      i > 0 ? "<0.3" : 0,
    )
      .set(groups[i], { display: "flex" }, "<")
      .fromTo(
        groups[i].children,
        { autoAlpha: 0, y: RISE },
        { autoAlpha: 1, y: 0, stagger: 0.35 },
        "<",
      )
      .addLabel(`s${i}`);
  };
  steps.forEach((_, i) => show(i));
  return tl;
});
</script>

<style scoped>
.day {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2rem;
  width: 100%;
  max-width: 1050px;
  height: 330px;
  margin: 0 auto;
  align-items: stretch;
}
.sky {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--nais-border);
  border-radius: 16px;
  background: linear-gradient(var(--top), var(--bottom));
}
.orb {
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
.horizon {
  position: absolute;
  inset: auto 0 0;
  height: 22%;
  background: #1a2530;
  opacity: 0.55;
}
.clock {
  position: absolute;
  left: 1.25rem;
  bottom: 0.9rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}
.clock span {
  position: absolute;
  left: 0;
  bottom: 0;
}
.chat {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.9rem;
}
.msgs {
  flex-direction: column;
  gap: 0.5rem;
  transform-origin: 0 100%;
}
.msg {
  max-width: 88%;
  padding: 0.6rem 0.9rem;
  border-radius: 16px 16px 16px 4px;
  background: var(--nais-card);
  border: 1px solid var(--nais-border);
  color: var(--nais-text);
  font-size: 0.95rem;
  line-height: 1.35;
}
.msg small {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--nais-text-secondary);
}
.msg.me {
  align-self: flex-end;
  border-radius: 16px 16px 4px 16px;
  background: #2f7cf6;
  border-color: #2f7cf6;
  color: #fff;
}
.msg.me small {
  color: rgba(255, 255, 255, 0.8);
}
.msg.note {
  align-self: center;
  border-radius: 999px;
  font-style: italic;
  color: var(--nais-text-secondary);
  background: transparent;
  border-style: dashed;
}
</style>
