<template>
  <div class="browser">
    <div class="chrome">
      <i /><i /><i />
      <span class="tab">Nais Console</span>
      <span class="url"><span class="i-carbon-locked" /> {{ url }}</span>
    </div>
    <div class="body">
      <nav>
        <span v-for="n in NAV" :key="n" :class="{ on: n === active }">{{
          n
        }}</span>
      </nav>
      <main><slot /></main>
    </div>
  </div>
</template>

<script setup>
// Fictitious Console window around a mock. Nothing here is real data.
defineProps({
  url: { type: String, required: true },
  active: { type: String, default: "" },
});
const NAV = [
  "Oversikt",
  "Apper",
  "Jobber",
  "Postgres",
  "Valkey",
  "OpenSearch",
  "Sårbarheter",
  "Kostnad",
  "Hemmeligheter",
  "Unleash",
];
</script>

<style scoped>
.browser {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--nais-border);
  background: #fff;
  box-shadow: 0 16px 40px rgb(15 23 42 / 0.1);
}

.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.35rem 0.7rem;
  background: var(--nais-surface);
  border-bottom: 1px solid var(--nais-border);
}

.chrome i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f87171;
}

.chrome i:nth-child(2) {
  background: #fbbf24;
}

.chrome i:nth-child(3) {
  background: #34d399;
}

.tab {
  margin-left: 0.6rem;
  padding: 0.1rem 0.7rem;
  border-radius: 6px 6px 0 0;
  background: #fff;
  font-size: 0.75rem;
  font-weight: 600;
}

.url {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.6rem;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--nais-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--nais-text-secondary);
}

.body {
  display: grid;
  grid-template-columns: 8.5rem 1fr;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0.5rem 0.4rem;
  background: #f8fafc;
  border-right: 1px solid var(--nais-border);
}

nav span {
  padding: 0.12rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--nais-text-secondary);
}

nav span.on {
  background: var(--nais-accent-light);
  color: var(--nais-accent);
  font-weight: 700;
}

main {
  padding: 0.7rem 0.9rem;
}
</style>
