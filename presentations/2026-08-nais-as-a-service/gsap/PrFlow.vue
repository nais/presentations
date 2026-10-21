<template>
  <div ref="root" class="prflow" data-motion-self>
    <div class="left">
      <PrCard
        title="Legg til søknadsstatus"
        file=".nais/app.yaml"
        :diff="DIFF"
        :checks="CHECKS"
        reviewer="kollega"
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
      <div class="pods"><i v-for="k in 4" :key="k" /></div>
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
  tl.from(q(".pr"), { y: 20, autoAlpha: 0 })
    .from(q(".pipe"), { autoAlpha: 0, x: 20 }, "<0.2")
    .addLabel("s0")
    .to(q(".dotc"), {
      backgroundColor: "#3fb950",
      stagger: 0.35,
      duration: 0.3,
    })
    .to(q(".review"), { autoAlpha: 1, duration: 0.3 })
    .addLabel("s1")
    .set(q(".state.open"), { display: "none" })
    .set(q(".state.merged"), { display: "inline" })
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
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--nais-accent);
}
</style>
