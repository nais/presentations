<script setup>
  defineProps({
    hideFooter: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div class="slidev-layout default-layout">
    <div class="default-header">
      <slot name="header" />
    </div>

    <div class="default-content">
      <slot />
    </div>

    <div v-if="!hideFooter" class="default-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .default-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    position: relative;
  }

  .default-header {
    text-align: center;
    min-height: 5rem;
    position: relative;
    z-index: 2;
  }

  .default-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }

  .default-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
