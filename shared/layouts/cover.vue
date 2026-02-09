<template>
  <div class="slidev-layout cover-layout">
    <div class="cover-content">
      <!-- Logo slot -->
      <div class="logo-container">
        <slot name="logo">
          <img src="/logos/nais-v2-rosa.svg" alt="nais" class="main-logo" />
        </slot>
      </div>

      <!-- Main content -->
      <div class="cover-text">
        <slot />
      </div>

      <!-- Mascot row -->
      <div class="mascot-row" v-if="$slots.mascots">
        <slot name="mascots" />
      </div>
    </div>

    <!-- Footer -->
    <div class="cover-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .cover-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    position: relative;
  }

  .cover-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .logo-container {
    display: flex;
    justify-content: center;
  }

  .main-logo {
    max-height: 180px;
    width: auto;
  }

  .cover-text {
    text-align: center;
  }

  .mascot-row {
    display: flex;
    align-items: flex-end;
    margin-top: 1rem;
  }

  .cover-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
