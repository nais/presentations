<template>
  <div class="slidev-layout tl-layout">
    <div class="tl-header">
      <slot name="header" />
    </div>

    <div class="tl-content">
      <div class="tl-line"></div>
      <div class="tl-nodes">
        <slot />
      </div>
    </div>

    <div class="tl-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .tl-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    background: var(--nais-bg, #ffffff);
  }

  .tl-header {
    text-align: center;
    min-height: 5rem;
    position: relative;
    z-index: 2;
  }

  .tl-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .tl-line {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 50%;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--nais-border, rgba(226, 232, 240, 0.8)) 10%,
      var(--nais-border, rgba(226, 232, 240, 0.8)) 90%,
      transparent 100%
    );
    transform: translateY(-50%);
    z-index: 1;
  }

  .tl-nodes {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    position: relative;
    z-index: 2;
    gap: 2rem;
  }

  .tl-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
