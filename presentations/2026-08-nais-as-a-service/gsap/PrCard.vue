<template>
  <div class="pr" :class="{ compact }">
    <div class="head">
      <span class="i-carbon-pull-request icon" />
      <div>
        <b>{{ title }}</b>
        <small>{{ repo }} · #{{ number }}</small>
      </div>
      <span class="state open">Open</span>
      <span class="state merged">Merged</span>
    </div>
    <div v-if="diff.length" class="diff">
      <div class="file">{{ file }}</div>
      <code
        v-for="(d, i) in diff"
        :key="i"
        :class="d[0] === '+' ? 'add' : d[0] === '-' ? 'del' : ''"
      >{{ d }}</code>
    </div>
    <div class="checks">
      <div v-for="c in rows" :key="c.name" class="check">
        <i class="dotc" />
        <span class="cname">{{ c.name }}</span>
        <span v-if="c.required" class="req">Required</span>
        <span class="ctime">{{ c.time }}</span>
      </div>
    </div>
    <div v-if="copilot" class="review">
      <span class="avatar copilot"><i class="i-simple-icons-githubcopilot" /></span>
      GitHub Copilot <b class="neutral">Reviewed</b>
    </div>
    <div v-if="reviewer" class="review">
      <span class="avatar">{{ reviewer[0] }}</span> {{ reviewer }}
      <b>Approved</b>
    </div>
    <div class="deployed">
      <span class="i-carbon-rocket" /> Deployed to {{ env }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
// Fictitious GitHub pull request card, dark theme. The parent animates the
// classes .check, .review, .merged, .open and .deployed.
const props = defineProps({
  title: { type: String, required: true },
  repo: { type: String, default: "team-eksempel/api-soknad" },
  number: { type: Number, default: 42 },
  file: { type: String, default: "" },
  diff: { type: Array, default: () => [] },
  checks: { type: Array, default: () => ["build", "test"] },
  reviewer: { type: String, default: "" },
  env: { type: String, default: "prod-gcp" },
  // Show GitHub Copilot code review as a second reviewer.
  copilot: { type: Boolean, default: false },
  compact: { type: Boolean, default: false },
});
// Checks as rows like GitHub's: strings or { name, time, required }.
const rows = computed(() =>
  props.checks.map((c, i) =>
    typeof c === "string"
      ? { name: c, time: ["1m 12s", "2m 40s", "8s"][i % 3], required: true }
      : c,
  ),
);
</script>

<style scoped>
.pr {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border-radius: 12px;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #e6edf3;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.35);
}

.head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.2rem;
  color: #3fb950;
}

.head b {
  display: block;
  font-size: 0.95rem;
}

.head small {
  color: #8b949e;
  font-size: 0.7rem;
}

.state {
  margin-left: auto;
  padding: 0.05rem 0.6rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.72rem;
  color: #fff;
}

.state.open {
  background: #238636;
}

.state.merged {
  display: none;
  background: #8957e5;
}

.diff {
  margin-top: 0.5rem;
  border-radius: 6px;
  border: 1px solid #30363d;
  overflow: hidden;
}

.file {
  padding: 0.2rem 0.5rem;
  background: #161b22;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.68rem;
  color: #8b949e;
}

.pr .diff code {
  display: block;
  background: #0d1117 !important;
  color: #8b949e !important;
  border-radius: 0;
  margin: 0;
  padding: 0 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  white-space: pre;
}

.pr .diff code.add {
  background: rgb(46 160 67 / 0.15) !important;
  color: #aff5b4 !important;
}

.pr .diff code.del {
  background: rgb(248 81 73 / 0.15) !important;
  color: #ffdcd7 !important;
}

.checks {
  margin-top: 0.5rem;
  border: 1px solid #30363d;
  border-radius: 6px;
  overflow: hidden;
}

.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.18rem 0.5rem;
  font-size: 0.72rem;
  border-top: 1px solid #21262d;
}

.check:first-child {
  border-top: none;
}

.cname {
  font-family: "JetBrains Mono", monospace;
}

.req {
  padding: 0 0.35rem;
  border-radius: 999px;
  border: 1px solid #30363d;
  font-size: 0.6rem;
  color: #8b949e;
}

.ctime {
  margin-left: auto;
  color: #8b949e;
}

.neutral {
  color: #8b949e !important;
}

.copilot {
  background: #30363d !important;
}

.dotc {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d29922;
}

.review,
.deployed {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.45rem;
  font-size: 0.75rem;
}

.review b {
  color: #3fb950;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #8957e5;
  font-size: 0.65rem;
  font-weight: 700;
}

.deployed {
  color: #79c0ff;
}

.compact .head b {
  font-size: 0.8rem;
}
</style>
