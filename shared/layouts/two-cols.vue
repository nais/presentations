<template>
  <div class="slidev-layout two-cols-layout">
    <!-- Header spanning full width -->
    <div class="two-cols-header">
      <slot name="header" />
    </div>

    <!-- Two column content -->
    <div class="two-cols-content">
      <div class="col-left">
        <slot name="left" />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>

    <!-- Default slot for additional content -->
    <div class="two-cols-extra" v-if="$slots.default">
      <slot />
    </div>

    <!-- Footer -->
    <div class="two-cols-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .two-cols-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    position: relative;
  }

  .two-cols-header {
    text-align: center;
    z-index: 2;
    min-height: 5rem;
  }

  .two-cols-content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    z-index: 2;
  }

  .col-left,
  .col-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .two-cols-extra {
    margin-top: 1.5rem;
    z-index: 2;
  }

  .two-cols-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
