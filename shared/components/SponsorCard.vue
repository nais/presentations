<template>
  <div class="sponsor-card" :class="tier">
    <slot />
  </div>
</template>

<script setup>
  defineProps({
    tier: {
      type: String,
      default: 'exclusive',
      validator: (value) => ['exclusive', 'standard'].includes(value),
    },
  })
</script>

<style scoped>
  .sponsor-card {
    background: var(--nais-card);
    border: 2px solid var(--nais-purple);
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem 0;
  }

  .sponsor-card.standard {
    border-color: var(--nais-blue);
  }
</style>
