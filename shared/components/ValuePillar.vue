<template>
  <div class="pillar">
    <div class="pillar-hex-wrapper">
      <div class="pillar-hex-border">
        <div class="pillar-icon">
          <img v-if="image" :src="image" :alt="title" class="pillar-image" />
          <span v-else :class="icon"></span>
        </div>
      </div>
    </div>
    <h3 class="pillar-title">{{ title }}</h3>
    <p class="pillar-desc">{{ description }}</p>
  </div>
</template>

<script setup>
  defineProps({
    icon: { type: String, default: '' },
    image: { type: String, default: '' },
    title: { type: String, required: true },
    description: { type: String, required: true },
  })
</script>

<style scoped>
  .pillar {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
    max-width: 300px;
    position: relative;
    z-index: 2;
  }

  .pillar-hex-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .pillar-hex-border {
    width: 120px;
    height: 120px;
    background: var(--nais-accent-light, rgba(232, 56, 79, 0.15));
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }

  .pillar-icon {
    width: 110px;
    height: 110px;
    background: linear-gradient(135deg, var(--nais-gradient-from, #e8384f) 0%, var(--nais-gradient-to, #dc2626) 100%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pillar-icon span {
    font-size: 2.75rem;
    color: #ffffff;
  }

  .pillar-image {
    height: 90px;
    width: auto;
    object-fit: contain;
  }

  .pillar-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--nais-highlight, var(--nais-accent, #e8384f));
    margin: 0 0 0.75rem 0;
  }

  .pillar-desc {
    font-size: 0.85rem;
    line-height: 1.55;
    color: var(--nais-text-secondary, #64748b);
    margin: 0;
    max-width: 260px;
  }
</style>
