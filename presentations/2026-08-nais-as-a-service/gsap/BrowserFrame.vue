<template>
  <div class="browser">
    <div class="chrome">
      <i /><i /><i />
      <span class="url"><span class="i-carbon-locked" /> {{ url }}</span>
    </div>
    <div class="topbar">
      <strong><span class="logo" />Console</strong>
      <span v-for="t in TOP" :key="t">{{ t }}</span>
    </div>
    <div class="body">
      <nav>
        <template v-for="(g, gi) in NAV" :key="gi">
          <span
            v-for="n in g"
            :key="n.label"
            :class="{ on: n.label === active }"
            ><i :class="n.icon" /> {{ n.label }}</span
          >
          <hr v-if="gi < NAV.length - 1" />
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
const TOP = ["Cost", "Vulnerabilities"];
// Trimmed to what the stories need; the real Console has more items.
const NAV = [
  [{ label: "Team Overview", icon: "i-carbon-home" }],
  [{ label: "Applications", icon: "i-carbon-cube" }],
  [
    { label: "Cloud SQL", icon: "i-carbon-data-base" },
    { label: "Valkey", icon: "i-carbon-flash" },
    { label: "Kafka Topics", icon: "i-carbon-flow-stream" },
  ],
  [
    { label: "Cost", icon: "i-carbon-currency" },
    { label: "Vulnerabilities", icon: "i-carbon-security" },
  ],
  [{ label: "Members", icon: "i-carbon-user-multiple" }],
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
  background: #1e293b;
  color: #e2e8f0;
  font-size: 0.7rem;
}

.topbar strong {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: #fff;
  margin-right: 0.4rem;
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
  grid-template-columns: 8.6rem 1fr;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.45rem;
  border-right: 1px solid var(--nais-border);
}

nav span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: 0.72rem;
  line-height: 1.4;
  color: #334155;
}

nav span i {
  font-size: 0.85rem;
  color: #64748b;
}

nav span.on {
  background: #dbeafe;
  color: #1e3a8a;
  font-weight: 700;
}

nav span.on i {
  color: #1e3a8a;
}

nav hr {
  width: 100%;
  margin: 0.35rem 0;
  border: none;
  border-top: 1px solid var(--nais-border);
}

main {
  position: relative;
  min-width: 0;
  padding: 0.8rem 1.1rem;
  overflow: hidden;
}

.crumbs {
  font-size: 0.7rem;
  color: #1d4ed8;
  margin-bottom: 0.2rem;
}

.crumbs .cur {
  color: var(--nais-text);
}
</style>
