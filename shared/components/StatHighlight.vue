<template>
  <div class="stat-highlight">
    <div class="stat-number">{{ number }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<script setup>
  defineProps({
    number: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
  .stat-highlight {
    text-align: center;
    padding: 1rem 0.5rem;
  }

  .stat-number {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--nais-accent, #e8384f);
    font-family: 'JetBrains Mono', monospace;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1rem;
    font-weight: 500;
    color: var(--nais-text, #0f172a);
  }
</style>
