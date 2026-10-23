<template>
  <TerminalFrame title="nais — team-eksempel">
    <div ref="root" class="cli" data-motion-self>
      <div v-for="(c, i) in STEPS" :key="i" class="step">
        <div class="cmd">
          <span class="ps">$</span> <span class="typed">{{ c.cmd }}</span><i class="caret" />
        </div>
        <div
          v-for="o in c.out"
          :key="o"
          class="out"
          :class="{ ok: o.startsWith('✓') }"
        >
          {{ o }}
        </div>
      </div>
    </div>
  </TerminalFrame>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import TerminalFrame from "./TerminalFrame.vue";
import { useEnter } from "./motion.js";

// Command names checked against github.com/nais/cli (internal/*/command), 2026-10-21.
// Output is illustrative.
const STEPS = [
  { cmd: "nais login", out: ["✓ Logged in as utvikler@direktorat.no"] },
  {
    cmd: "nais app status min-app",
    out: ["min-app-7f9c-x2   Running", "min-app-7f9c-k8   Running"],
  },
  {
    cmd: "nais app log min-app",
    out: ["INFO  received application", "INFO  application stored"],
  },
  {
    cmd: "nais cloudsql proxy min-app",
    out: ["✓ Proxy listening on localhost:5432"],
  },
  {
    cmd: "nais vulnerability summary",
    out: ["Known exploited: 1   Critical: 1   High: 0"],
  },
];

const root = ref();
// Plays on slide enter: each command is typed, its output appears, earlier
// ones dim. Reduced motion and print show the end state.
useEnter((tl) => {
  const q = gsap.utils.selector(root.value);
  const steps = q(".step");
  gsap.set(steps, { display: "none" });
  steps.forEach((st, i) => {
    const typed = st.querySelector(".typed");
    const full = typed.textContent;
    const t = { n: 0 };
    // Earlier commands step back so the new one has the focus.
    if (i) tl.to(steps.slice(0, i), { opacity: 0.4, duration: 0.25 });
    tl.set(st, { display: "block" })
      .fromTo(
        t,
        { n: 0 },
        {
          n: full.length,
          duration: full.length * 0.018,
          ease: "none",
          onUpdate: () => (typed.textContent = full.slice(0, Math.round(t.n))),
        },
      )
      .from(st.querySelectorAll(".out"), {
        autoAlpha: 0,
        y: 6,
        stagger: 0.1,
        duration: 0.3,
      })
      .to({}, { duration: 0.25 });
  });
  return tl;
});
</script>

<style scoped>
.cli {
  min-height: 15rem;
}

.step + .step {
  margin-top: 0.4rem;
}

.ps {
  color: #f472b6;
}

.caret {
  display: inline-block;
  width: 0.5em;
  height: 1em;
  margin-left: 2px;
  vertical-align: -2px;
  background: #e2e8f0;
  opacity: 0.6;
}

.step:not(:last-child) .caret {
  display: none;
}

.out {
  color: #94a3b8;
  padding-left: 1rem;
}

.out.ok {
  color: #34d399;
}
</style>
