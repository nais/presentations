<template>
  <div class="slidev-layout stats-layout">
    <!-- Header -->
    <div class="stats-header">
      <slot name="header" />
    </div>

    <!-- Stats grid -->
    <div class="stats-content">
      <div class="stats-grid">
        <slot />
      </div>

      <!-- Tagline -->
      <div v-if="$slots.tagline" class="stats-tagline">
        <slot name="tagline" />
      </div>
    </div>

    <!-- Footer -->
    <div class="stats-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .stats-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    position: relative;
  }

  .stats-header {
    text-align: center;
    z-index: 2;
    min-height: 5rem;
  }

  .stats-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .stats-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    max-width: 1100px;
  }

  .stats-tagline {
    margin-top: 2rem;
    text-align: center;
    opacity: 0.7;
    font-size: 0.95rem;
  }

  .stats-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
