<template>
  <div class="icon-card">
    <div class="icon-wrapper" :class="iconColorClass">
      <div :class="icon" class="icon"></div>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'red',
      validator: (val) => ['red', 'yellow', 'blue', 'go-blue'].includes(val),
    },
  })

  const iconColorClass = computed(() => `icon-${props.color}`)
</script>

<style scoped>
  .icon-card {
    text-align: center;
    padding: 1.5rem;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: var(--nais-surface, #f1f5f9);
  }

  .icon {
    font-size: 2rem;
  }

  .icon-red .icon {
    color: var(--nais-accent, #e8384f);
  }

  .icon-yellow .icon {
    color: var(--nais-success, #10b981);
  }

  .icon-blue .icon {
    color: var(--nais-accent, #3b82f6);
  }

  .icon-go-blue .icon {
    color: var(--nais-accent, #06b6d4);
  }

  .card-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--nais-heading, var(--nais-text, #0f172a));
  }

  .card-description {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--nais-text-secondary, #64748b);
  }
</style>
