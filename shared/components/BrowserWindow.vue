<script setup>
  // Generic browser window. Chrome copied from the Console mock in
  // presentations/2026-11-nais-er-fortsatt-nais/gsap/BrowserFrame.vue, without the Console navigation.
  defineProps({
    url: { type: String, required: true },
  })
</script>

<template>
  <div class="browser-window">
    <div class="bw-chrome">
      <i /><i /><i />
      <span class="bw-url"><span class="i-carbon-locked" /> {{ url }}</span>
    </div>
    <div class="bw-body">
      <slot />
    </div>
  </div>
</template>

<style>
  .browser-window {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #334155;
    background: #fff;
    color: #0f172a;
    box-shadow: 0 16px 40px rgb(0 0 0 / 0.25);
  }

  .bw-chrome {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.25rem 0.7rem;
    background: #e2e8f0;
  }

  .bw-chrome i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #f87171;
  }

  .bw-chrome i:nth-child(2) {
    background: #fbbf24;
  }

  .bw-chrome i:nth-child(3) {
    background: #34d399;
  }

  .bw-url {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 0.8rem;
    padding: 0 0.6rem;
    border-radius: 999px;
    background: #fff;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.62rem;
    color: #475569;
  }

  .bw-body {
    flex: 1;
    min-height: 0;
    position: relative;
  }
</style>
