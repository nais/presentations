<template>
  <div ref="root" class="prflow" data-motion-self>
    <div class="left">
      <PrCard
        title="Legg til søknadsstatus"
        file=".nais/app.yaml"
        :diff="DIFF"
        :checks="CHECKS"
        reviewer="Kari Nordmann"
        author="opened by Copilot agent"
        copilot
      />
    </div>
    <div class="pipe">
      <div class="ann">GitHub Actions</div>
      <div
        v-for="s in STEPS"
        :key="s.label"
        class="step"
        :class="{ live: s.live }"
      >
        <span :class="s.icon" />
        <div>
          <b>{{ s.label }}</b>
          <small>{{ s.sub }}</small>
        </div>
      </div>
      <div class="pods">
        <i v-for="k in 4" :key="k">pod</i><small>Nye pods starter i Kubernetes</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import PrCard from "./PrCard.vue";
import { POP, STAGGER, useSteps } from "./motion.js";

// Workflow as in docs.nais.io «Build and deploy» (2026-10-21): nais/docker-build-push
// builds, signs and pushes with an SBOM; nais/setup and «nais apply» deploy.
const DIFF = [
  "  replicas:",
  "-   min: 2",
  "+   min: 3",
  "  env:",
  "+   - name: STATUS_ENABLED",
  '+     value: "true"',
];
const CHECKS = ["build", "test", "nais validate"];
const STEPS = [
  {
    label: "nais/docker-build-push",
    sub: "bygg, SBOM, signering",
    icon: "i-carbon-build-tool",
  },
  { label: "nais apply", sub: "deploy til prod", icon: "i-carbon-rocket" },
  {
    label: "Kubernetes",
    sub: "nye pods starter",
    icon: "i-carbon-container-software",
  },
  {
    label: "Live",
    sub: "uten nedetid",
    icon: "i-carbon-checkmark",
    live: true,
  },
];

const root = ref();
// s0: the pull request. s1: checks pass and a reviewer approves.
// s2: merge, then the workflow deploys. s3: the PR shows the deployment.
useSteps((tl) => {
  const q = gsap.utils.selector(root.value);
  const steps = q(".step");
  gsap.set(q(".review, .deployed"), { autoAlpha: 0 });
  gsap.set(steps, { opacity: 0.3 });
  gsap.set(q(".pods i"), { scale: 0 });
  gsap.set(q(".pods small"), { autoAlpha: 0 });
  tl.from(q(".pr"), { y: 20, autoAlpha: 0 })
    .from(q(".pipe"), { autoAlpha: 0, x: 20 }, "<0.2")
    .addLabel("s0")
    // Each check turns green with a small pop, then the reviews slide in.
    .to(q(".dotc"), {
      backgroundColor: "#3fb950",
      scale: 1.8,
      stagger: 0.35,
      duration: 0.2,
    })
    .to(
      q(".dotc"),
      { scale: 1, duration: 0.25, stagger: 0.35, ease: POP },
      "<0.2",
    )
    .fromTo(
      q(".review"),
      { autoAlpha: 0, x: -16 },
      { autoAlpha: 1, x: 0, duration: 0.35, stagger: 0.15 },
    )
    .addLabel("s1")
    // Merge belongs to click 2: keep it clear of the s1 label.
    .set(q(".state.open"), { display: "none" }, "+=0.05")
    .set(q(".state.merged"), { display: "inline" }, "<")
    .to(steps, {
      opacity: 1,
      borderColor: "#ff3377",
      stagger: 0.45,
      duration: 0.3,
    })
    .to(
      q(".pods i"),
      { scale: 1, ease: POP, stagger: STAGGER, duration: 0.4 },
      "-=0.9",
    )
    .to(q(".pods small"), { autoAlpha: 1, duration: 0.3 })
    .addLabel("s2")
    .to(q(".deployed"), { autoAlpha: 1, duration: 0.3 })
    .addLabel("s3");
  return tl;
});
</script>

<style scoped>
.prflow {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  align-items: center;
}

.pipe {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ann {
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

.step {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.45rem 0.8rem;
  border-radius: 12px;
  background: var(--nais-surface);
  border: 2px solid var(--nais-border);
}

.step > span {
  font-size: 1.4rem;
  color: var(--nais-accent);
}

.step.live > span {
  color: var(--nais-success);
}

.step b {
  display: block;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
}

.step small {
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

.pods {
  display: flex;
  gap: 6px;
  padding-left: 3rem;
}

.pods i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 22px;
  border-radius: 6px;
  background: var(--nais-accent);
  font-style: normal;
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
}

.pods small {
  align-self: center;
  margin-left: 0.4rem;
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
}
</style>
