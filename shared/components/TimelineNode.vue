<template>
  <div class="tl-node">
    <div class="tl-label">
      <span class="tl-version">{{ version }}</span>
      <span class="tl-year">({{ year }})</span>
    </div>
    <div class="tl-title">{{ title }}</div>
    <div class="tl-marker">
      <img v-if="image" :src="imageUrl" :alt="title" class="tl-image" />
      <span v-else :class="icon" class="tl-icon"></span>
    </div>
    <p class="tl-desc">{{ description }}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    version: { type: String, required: true },
    year: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: 'i-carbon-rocket' },
    image: { type: String, default: '' },
  })

  const imageUrl = computed(() => {
    if (!props.image) return ''
    // Prepend base URL for production builds
    const base = import.meta.env.BASE_URL || '/'
    // If image already includes the base or is external, return as-is
    if (props.image.startsWith('http') || props.image.startsWith(base)) {
      return props.image
    }
    // Remove leading slash and prepend base
    const cleanPath = props.image.startsWith('/') ? props.image.slice(1) : props.image
    return base + cleanPath
  })
</script>

<style scoped>
  .tl-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    max-width: 280px;
    position: relative;
    z-index: 2;
  }

  .tl-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--nais-highlight, var(--nais-accent, #e8384f));
    margin-bottom: 0.25rem;
  }

  .tl-version {
    margin-right: 0.25rem;
  }

  .tl-year {
    opacity: 0.8;
  }

  .tl-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--nais-heading, var(--nais-text, #0f172a));
    margin-bottom: 0.75rem;
  }

  .tl-marker {
    width: 110px;
    height: 110px;
    background: linear-gradient(135deg, var(--nais-gradient-from, #e8384f) 0%, var(--nais-gradient-to, #dc2626) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
    box-shadow: 0 4px 20px rgba(232, 56, 79, 0.3);
    border: 3px solid var(--nais-border, #e2e8f0);
  }

  .tl-icon {
    font-size: 3rem;
    color: #ffffff;
  }

  .tl-image {
    height: 88px;
    width: auto;
    object-fit: contain;
  }

  .tl-desc {
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--nais-text-secondary, #64748b);
    margin: 0;
    max-width: 220px;
  }
</style>
