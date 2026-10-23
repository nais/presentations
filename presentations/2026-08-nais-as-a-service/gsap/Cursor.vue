<template>
  <div class="cursor" aria-hidden="true">
    <i class="ripple" />
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path d="M3 2 L3 20 L8 15 L11.5 22 L14.5 20.5 L11 13.5 L18 13.5 Z" />
    </svg>
  </div>
</template>

<style scoped>
.cursor {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
}

svg {
  display: block;
  margin: -3px 0 0 -3px;
  filter: drop-shadow(0 2px 3px rgb(0 0 0 / 0.3));
}

path {
  fill: #0f172a;
  stroke: #fff;
  stroke-width: 1.5;
}

.ripple {
  position: absolute;
  left: -16px;
  top: -16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgb(232 56 79 / 0.5);
  opacity: 0;
}
</style>
