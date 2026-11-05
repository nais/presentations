<template>
  <div ref="root" class="pg" data-motion-self>
    <TerminalFrame title="nais — team-eksempel" class="pg-term">
      <div v-for="(c, i) in CMDS" :key="i" class="cmd">
        <div>
          <span class="ps">$</span> <span class="typed">{{ c.cmd }}</span>
        </div>
        <div class="out">{{ c.out }}</div>
      </div>
    </TerminalFrame>

    <div class="map">
      <div class="node main">
        <span class="i-carbon-data-base" /><b>min-db</b
        ><small>CloudNativePG</small>
      </div>
      <div class="link h">
        <i class="line" /><span class="chip"
          ><span class="i-carbon-time" /> tidspunkt</span
        >
      </div>
      <div class="node branch">
        <span class="i-carbon-branch" /><b>test</b><small>branch</small>
      </div>
      <div class="link v">
        <i class="line" /><span class="chip"
          ><span class="i-carbon-locked" /> proxy</span
        >
      </div>
      <p class="note branch-note">
        Branch fra et tidspunkt. Slik virker også point-in-time recovery.
      </p>
      <div class="node me">
        <span class="i-carbon-user-admin" /><b>Personlig DBA-tilgang</b
        ><small>i eget navn</small>
      </div>
    </div>

    <p class="console">
      <span class="i-carbon-dashboard" /> <b>Postgres i Console:</b> opprett,
      endre, logger og innsikt i spørringer
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import TerminalFrame from "./TerminalFrame.vue";
import { useSteps, POP } from "./motion.js";

// Commands checked against github.com/nais/cli. Output is illustrative.
const CMDS = [
  {
    cmd: "nais postgres branch create min-db",
    out: "✓ Branch test laget fra min-db",
  },
  {
    cmd: "nais postgres proxy min-db",
    out: "✓ Proxy lytter på localhost:5432",
  },
];

const root = ref();

const type = (tl, el) => {
  const typed = el.querySelector(".typed");
  const full = typed.textContent;
  const t = { n: 0 };
  tl.set(el, { autoAlpha: 1 })
    .fromTo(
      t,
      { n: 0 },
      {
        n: full.length,
        duration: full.length * 0.02,
        ease: "none",
        onUpdate: () => (typed.textContent = full.slice(0, Math.round(t.n))),
      },
    )
    .from(el.querySelector(".out"), { autoAlpha: 0, y: 6, duration: 0.3 });
};

// s0: terminal and the database. s1: branch. s2: DBA access via proxy. s3: Console.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const cmds = q(".cmd");
  gsap.set(cmds, { autoAlpha: 0 });
  gsap.set(q(".branch, .h .chip, .branch-note, .me, .v .chip, .console"), {
    autoAlpha: 0,
  });
  gsap.set(q(".h .line"), { scaleX: 0 });
  gsap.set(q(".v .line"), { scaleY: 0 });

  tl.from(q(".pg-term"), { autoAlpha: 0, x: -24, duration: 0.5 }, 0)
    .from(
      q(".main"),
      { autoAlpha: 0, scale: 0.8, ease: POP, duration: 0.5 },
      0.1,
    )
    .addLabel("s0");

  type(tl, cmds[0]);
  tl.to(q(".h .line"), { scaleX: 1, duration: 0.5 })
    .to(q(".h .chip"), { autoAlpha: 1, duration: 0.3 }, "<0.2")
    .fromTo(
      q(".branch"),
      { autoAlpha: 0, scale: 0.8 },
      { autoAlpha: 1, scale: 1, ease: POP, duration: 0.5 },
    )
    .to(q(".branch-note"), { autoAlpha: 1, duration: 0.3 })
    .addLabel("s1");

  tl.to(cmds[0], { opacity: 0.55, duration: 0.25 });
  type(tl, cmds[1]);
  tl.to(q(".v .line"), { scaleY: 1, duration: 0.5 })
    .to(q(".v .chip"), { autoAlpha: 1, duration: 0.3 }, "<0.2")
    .fromTo(
      q(".me"),
      { autoAlpha: 0, scale: 0.8 },
      { autoAlpha: 1, scale: 1, ease: POP, duration: 0.5 },
    )
    .addLabel("s2");

  tl.fromTo(
    q(".console"),
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.4 },
  ).addLabel("s3");
  return tl;
});
</script>

<style scoped>
.pg {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 2.5rem;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.pg-term {
  height: 180px;
}

.cmd + .cmd {
  margin-top: 0.8rem;
}

.ps {
  color: #f472b6;
}

.out {
  padding-left: 1rem;
  color: #34d399;
}

.map {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 4.5rem auto;
  align-items: center;
  justify-items: center;
}

.node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 0.6rem 1rem;
  border-radius: 14px;
  background: var(--nais-card);
  border: 2px solid var(--nais-border);
}

.node > span {
  font-size: 2rem;
  color: var(--nais-accent);
}

.node b {
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
}

.node small {
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

.main {
  border-color: var(--nais-accent);
}

/* min-db shares the column with the wider DBA node; fill it so the branch line touches the box */
.main,
.me {
  justify-self: stretch;
}

.branch {
  border-style: dashed;
}

.link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link.h {
  width: 100%;
  height: 2rem;
}

.link.v {
  height: 100%;
  width: 2rem;
}

.line {
  position: absolute;
  background: var(--nais-accent);
  opacity: 0.6;
}

.h .line {
  inset: 50% 0 auto;
  height: 3px;
  transform-origin: 0 50%;
}

.v .line {
  inset: 0.3rem auto 0.3rem 50%;
  width: 3px;
  transform-origin: 50% 0;
}

.chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--nais-bg);
  border: 1px solid var(--nais-border);
  font-size: 0.75rem;
  white-space: nowrap;
}

.branch-note {
  grid-column: 2 / 4;
  margin: 0;
  padding-left: 1rem;
  font-size: 0.8rem;
  color: var(--nais-text-secondary);
}

.console {
  grid-column: 1 / -1;
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  font-size: 0.9rem;
  color: var(--nais-text-secondary);
}

.console span {
  color: var(--nais-accent);
  font-size: 1.1rem;
}
</style>
