<script setup>
  defineProps({
    hideFooter: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div class="slidev-layout cta-layout">
    <div class="cta-header">
      <slot name="header" />
    </div>

    <div class="cta-content">
      <slot />
    </div>

    <div v-if="!hideFooter" class="cta-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .cta-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    position: relative;
  }

  .cta-header {
    min-height: 5rem;
    position: relative;
    z-index: 2;
  }

  .cta-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .cta-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
