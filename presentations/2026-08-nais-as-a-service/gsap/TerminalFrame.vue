<template>
  <div class="term">
    <div class="bar">
      <i /><i /><i /><span>{{ title }}</span>
    </div>
    <div class="screen"><slot /></div>
  </div>
</template>

<script setup>
// Fictitious terminal window around a mock.
defineProps({
  title: { type: String, default: "Terminal" },
});
</script>

<style scoped>
.term {
  width: 100%;
  max-width: 760px;
  height: 372px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #0b1120;
  border: 1px solid #1e293b;
  box-shadow: 0 16px 40px rgb(0 0 0 / 0.3);
}

.bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.4rem 0.7rem;
  background: #111a2e;
}

.bar i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f87171;
}

.bar i:nth-child(2) {
  background: #fbbf24;
}

.bar i:nth-child(3) {
  background: #34d399;
}

.bar span {
  margin-left: auto;
  margin-right: auto;
  font-size: 0.75rem;
  color: #94a3b8;
}

.screen {
  padding: 0.8rem 1rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #e2e8f0;
}
</style>
