<template>
  <div class="slidev-layout pillars-layout">
    <div class="pillars-header">
      <slot name="header" />
    </div>

    <div class="pillars-content">
      <div class="pillars-items">
        <slot />
      </div>
      <!-- Line positioned through hexagon centers -->
      <div class="pillars-line-container">
        <div class="pillars-line"></div>
      </div>

      <!-- Tagline inside content area -->
      <div class="pillars-tagline">
        <div class="tagline-line"></div>
        <span class="tagline-text"><slot name="tagline">For Engineers, By Engineers.</slot></span>
        <div class="tagline-line"></div>
      </div>
    </div>

    <div class="pillars-footer">
      <slot name="footer">
        <span class="font-mono text-sm opacity-70">nais.io</span>
      </slot>
    </div>
  </div>
</template>

<style>
  .pillars-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 3rem 1.5rem 3rem;
    background: var(--nais-bg, #ffffff);
  }

  .pillars-header {
    text-align: center;
    min-height: 5rem;
    position: relative;
    z-index: 2;
  }

  .pillars-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .pillars-items {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px;
    position: relative;
    z-index: 2;
    gap: 2rem;
  }

  .pillars-line-container {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 700px;
    z-index: 1;
  }

  .pillars-line {
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--nais-border, rgba(226, 232, 240, 0.8)) 10%,
      var(--nais-border, rgba(226, 232, 240, 0.8)) 90%,
      transparent 100%
    );
    border-radius: 2px;
  }

  .pillars-tagline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: auto;
    padding-top: 1rem;
    position: relative;
    z-index: 2;
  }

  .tagline-line {
    width: 120px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--nais-border, rgba(226, 232, 240, 0.5)), transparent);
  }

  .tagline-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-style: italic;
    color: var(--nais-text-secondary, #64748b);
    white-space: nowrap;
  }

  .pillars-footer {
    text-align: center;
    padding-top: 1rem;
    height: 2.5rem;
    position: relative;
    z-index: 2;
  }
</style>
