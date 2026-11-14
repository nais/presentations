<template>
  <div ref="root" class="day" data-motion-self>
    <div ref="sky" class="sky">
      <div ref="orb" class="orb" />
      <div class="horizon" />
      <div class="clock">
        <span v-for="s in steps" :key="s.time">{{ s.time }}</span>
      </div>
    </div>
    <div class="phone">
      <div class="island" />
      <div class="head">
        <span class="avatar">V</span>
        <b>Familien</b>
      </div>
      <div ref="screen" class="screen">
        <div ref="list" class="list">
          <template v-for="(s, i) in steps" :key="i">
            <div class="item stamp" :class="`s${i}`">{{ s.time }}</div>
            <div
              v-for="(m, j) in s.msgs"
              :key="j"
              class="item msg"
              :class="[m.kind, `s${i}`]"
            >
              <small v-if="m.to && m.kind !== 'me'">{{ m.to }}</small>
              <span>{{ m.text }}</span>
            </div>
          </template>
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
        to: "Varden",
        text: "God morgen! ☀ 6–8 grader, overskyet. Dagsplan og pakkeliste.",
      },
    ],
  },
  {
    time: "15:00",
    sky: ["#8fbde3", "#e6eef4", "#FFF4D6"],
    msgs: [
      {
        to: "Varden",
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
        to: "Varden",
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
const screen = ref();
const list = ref();

useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const clocks = q(".clock span");
  const groups = steps.map((_, i) => q(`.s${i}`));
  // Scroll so the last item of step i sits at the bottom of the screen.
  const scrollFor = (i) => {
    const last = groups[i].at(-1);
    const pad = 10;
    return -Math.max(
      0,
      last.offsetTop + last.offsetHeight + pad - screen.value.clientHeight,
    );
  };
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
  gsap.set(groups.flat(), { autoAlpha: 0 });
  gsap.set(list.value, { y: scrollFor(0) });

  const show = (i) => {
    if (i > 0) {
      tl.to(sky.value, { ...paint(steps[i]), duration: 1 })
        .to(orb.value, { ...orbStyle(steps[i]), duration: 1 }, "<")
        .to(clocks[i - 1], { autoAlpha: 0, y: -10, duration: 0.3 }, "<")
        // History stays; the thread scrolls up under the header.
        .to(list.value, { y: scrollFor(i), duration: 0.6 }, "<");
    }
    tl.fromTo(
      clocks[i],
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.4 },
      i > 0 ? "<0.3" : 0,
    )
      .fromTo(
        groups[i],
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
.phone {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 330px;
  justify-self: center;
  padding: 10px;
  border-radius: 44px;
  background: #000;
  border: 3px solid #3a3f47;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  overflow: hidden;
}
.island {
  position: absolute;
  top: 16px;
  left: 50%;
  width: 84px;
  height: 22px;
  margin-left: -42px;
  border-radius: 999px;
  background: #000;
  z-index: 3;
}
.head {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 34px 0 6px;
  border-radius: 34px 34px 0 0;
  background: rgba(28, 28, 30, 0.96);
  border-bottom: 1px solid #2c2c2e;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
}
.avatar {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(#8e9aaf, #5b6577);
  font-size: 0.75rem;
}
.screen {
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: 0 0 34px 34px;
  background: #000;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px 12px;
}
.stamp {
  align-self: center;
  margin-top: 6px;
  font-size: 0.62rem;
  font-weight: 600;
  color: #8e8e93;
}
.msg {
  align-self: flex-start;
  max-width: 80%;
  color: #fff;
  font-size: 0.8rem;
  line-height: 1.3;
}
.msg span {
  display: block;
  padding: 0.4rem 0.7rem;
  border-radius: 18px 18px 18px 6px;
  background: #26252a;
}
.msg small {
  display: block;
  margin: 0 0 2px 0.7rem;
  font-size: 0.6rem;
  color: #8e8e93;
}
.msg.me {
  align-self: flex-end;
}
.msg.me span {
  border-radius: 18px 18px 6px 18px;
  background: #2f7cf6;
}
.msg.note {
  align-self: center;
  max-width: 90%;
  text-align: center;
}
.msg.note span {
  padding: 0;
  background: none;
  font-size: 0.65rem;
  color: #8e8e93;
}
</style>
