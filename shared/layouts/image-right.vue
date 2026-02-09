<template>
  <div class="slidev-layout image-right-layout">
    <div class="content-area">
      <!-- Header -->
      <div class="content-header">
        <slot name="header" />
      </div>

      <!-- Main content -->
      <div class="content-body">
        <slot />
      </div>
    </div>

    <!-- Image area -->
    <div class="image-area">
      <slot name="image" />
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" class="image-right-footer">
      <slot name="footer" />
    </div>
    <div v-else class="image-right-footer">
      <span class="font-mono text-sm opacity-70">nais.io</span>
    </div>
  </div>
</template>

<style>
  .image-right-layout {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-template-rows: 1fr auto;
    height: 100%;
    position: relative;
    padding: 0;
    overflow: visible;
  }

  .content-area {
    display: flex;
    flex-direction: column;
    z-index: 2;
    padding: 1.5rem 2.5rem 1rem 3rem;
    overflow: visible;
  }

  .content-header {
    text-align: center;
    min-height: 4rem;
    overflow: visible;
  }

  .content-body {
    flex: 1;
    overflow: auto;
  }

  .image-area {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0.75rem;
  }

  .image-area :deep(img:only-child) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.8) saturate(0.9);
  }

  .image-right-footer {
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
