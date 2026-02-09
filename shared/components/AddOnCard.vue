<template>
  <div class="addon-card" :class="{ exclusive }">
    <span class="exclusive-ribbon" v-if="exclusive">Exclusive</span>
    <div class="card-header">
      <div class="title-group">
        <h4 class="addon-title">{{ title }}</h4>
        <!-- <span v-if="subtitle" class="addon-subtitle">{{ subtitle }}</span> -->
      </div>
      <span v-if="price" class="addon-price">{{ price }}</span>
    </div>
    <ul class="benefits-list">
      <li v-for="(benefit, index) in benefits" :key="index">
        <span class="i-carbon-checkmark-filled check-icon"></span>
        <span v-html="benefit"></span>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    exclusive: {
      type: Boolean,
      default: false,
    },
    benefits: {
      type: Array,
      default: () => [],
    },
    price: {
      type: String,
      default: '',
    },
  })
</script>

<style scoped>
  .addon-card {
    background: var(--nais-card, #f8fafc);
    border: 2px solid var(--nais-border, #e2e8f0);
    border-radius: 1rem;
    padding: 1.25rem;
    transition: border-color 0.2s ease;
    position: relative;
    overflow: hidden;
  }

  .addon-card.exclusive {
    border-color: var(--nais-accent, #e8384f);
  }

  .exclusive-ribbon {
    position: absolute;
    top: 12px;
    right: -35px;
    background: var(--nais-accent, #e8384f);
    color: #ffffff;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 2.5rem;
    transform: rotate(45deg);
    letter-spacing: 0.05em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .addon-price {
    margin-left: auto;
    margin-right: 2.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--nais-success, #10b981);
    white-space: nowrap;
  }

  .addon-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--nais-heading, var(--nais-text, #0f172a));
    margin: 0;
  }

  .addon-subtitle {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--nais-accent, #e8384f);
    opacity: 0.9;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .benefits-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.4;
    color: var(--nais-text, #0f172a);
    opacity: 0.9;
    margin-bottom: 0.4rem;
  }

  .check-icon {
    color: var(--nais-success, #10b981);
    flex-shrink: 0;
    margin-top: 2px;
  }
</style>
