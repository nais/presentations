<template>
  <div class="browser">
    <div class="chrome">
      <i /><i /><i />
      <span class="url"><span class="i-carbon-locked" /> {{ url }}</span>
    </div>
    <div class="topbar">
      <strong><span class="logo" />Nais Console</strong>
      <span class="sep">/</span>
      <span class="team">team-eksempel ▾</span>
      <span v-for="t in TOP" :key="t">{{ t }}</span>
      <span class="jump"><i class="i-carbon-search" /> Jump to</span>
    </div>
    <div class="body">
      <nav>
        <template v-for="g in NAV" :key="g.title">
          <small>{{ g.title }}</small>
          <span
            v-for="n in g.items"
            :key="n.label"
            :class="{ on: n.label === active }"
            ><i :class="n.icon" /> {{ n.label }}</span
          >
        </template>
      </nav>
      <main>
        <div v-if="crumbs.length" class="crumbs">
          <template v-for="(c, i) in crumbs" :key="c">
            <span :class="{ cur: i === crumbs.length - 1 }">{{ c }}</span> /
          </template>
        </div>
        <slot />
      </main>
    </div>
    <slot name="overlay" />
  </div>
</template>

<script setup>
// Fictitious Console window, structured like the real Console. No real data.
defineProps({
  url: { type: String, required: true },
  active: { type: String, default: "" },
  crumbs: { type: Array, default: () => [] },
});
const TOP = ["Vulnerabilities", "Cost", "Utilization", "Activity Log"];
// Trimmed to what the stories need; the real Console has more items.
const NAV = [
  {
    title: "Workspace",
    items: [{ label: "Team Overview", icon: "i-carbon-home" }],
  },
  {
    title: "Workloads",
    items: [
      { label: "Applications", icon: "i-carbon-cube" },
      { label: "Jobs", icon: "i-carbon-event-schedule" },
    ],
  },
  {
    title: "Data & Config",
    items: [
      { label: "Secrets", icon: "i-carbon-locked" },
      { label: "Cloud SQL", icon: "i-carbon-data-base" },
      { label: "Postgres", icon: "i-carbon-data-base-alt" },
    ],
  },
  {
    title: "Operations & Security",
    items: [
      { label: "Cost", icon: "i-carbon-wallet" },
      { label: "Utilization", icon: "i-carbon-chart-line" },
      { label: "Vulnerabilities", icon: "i-carbon-debug" },
    ],
  },
  {
    title: "Team Management",
    items: [{ label: "Members", icon: "i-carbon-user-multiple" }],
  },
];
</script>

<style scoped>
.browser {
  position: relative;
  /* Console is light; keep the mock readable inside a dark deck. */
  --nais-bg: #ffffff;
  --nais-surface: #f1f5f9;
  --nais-card: #f8fafc;
  --nais-text: #0f172a;
  --nais-heading: #0f172a;
  --nais-text-secondary: #475569;
  --nais-border: #e2e8f0;
  --nais-accent-light: #fef2f2;
  color: var(--nais-text);
  width: 100%;
  max-width: 740px;
  height: 384px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #334155;
  background: #fff;
  box-shadow: 0 16px 40px rgb(0 0 0 / 0.35);
}

.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.25rem 0.7rem;
  background: #e2e8f0;
}

.chrome i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #f87171;
}

.chrome i:nth-child(2) {
  background: #fbbf24;
}

.chrome i:nth-child(3) {
  background: #34d399;
}

.url {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.8rem;
  padding: 0 0.6rem;
  border-radius: 999px;
  background: #fff;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  color: #475569;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0.8rem;
  background: #fff;
  border-bottom: 1px solid var(--nais-border);
  color: #334155;
  font-size: 0.66rem;
}

.topbar strong {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #0f172a;
}

.logo {
  width: 10px;
  height: 12px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #f76891;
}

.body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 9rem 1fr;
  background: #f8fafc;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 0.45rem 0.45rem;
  border-right: 1px solid var(--nais-border);
}

.topbar .sep {
  margin: 0 -0.6rem;
  color: #94a3b8;
}

.team {
  padding: 0 0.4rem;
  border: 1px solid var(--nais-border);
  border-radius: 6px;
  font-weight: 700;
  color: #0f172a;
}

.jump {
  margin-left: auto;
  padding: 0 0.5rem;
  border: 1px solid var(--nais-border);
  border-radius: 6px;
  color: #64748b;
}

nav small {
  margin: 0.25rem 0 0.05rem 0.3rem;
  font-size: 0.55rem;
  color: #64748b;
}

nav small:first-child {
  margin-top: 0;
}

nav span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.08rem 0.5rem;
  border-radius: 6px;
  font-size: 0.66rem;
  line-height: 1.35;
  color: #334155;
}

nav span i {
  font-size: 0.85rem;
  color: #64748b;
}

nav span.on {
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 700;
}

nav span.on i {
  color: #0f172a;
}

main {
  position: relative;
  min-width: 0;
  padding: 0.8rem 1.1rem;
  overflow: hidden;
}

.crumbs {
  font-size: 0.66rem;
  color: #64748b;
  margin-bottom: 0.2rem;
}

.crumbs .cur {
  color: var(--nais-text);
}
</style>
