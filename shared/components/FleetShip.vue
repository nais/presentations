<script setup>
  // The nav-fleet logo chevron as a flying ship. Use inside an <svg>; it points up until rotated.
  defineProps({
    x: { type: [Number, String], default: 0 },
    y: { type: [Number, String], default: 0 },
    scale: { type: [Number, String], default: 1 },
    rotate: { type: [Number, String], default: 0 },
    // Number of trail dashes behind the ship. The trail makes it read as an arrow
    trail: { type: [Number, String], default: 0 },
  })
</script>

<template>
  <g class="fleet-ship" :transform="`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`">
    <!-- --i lets a deck stagger the dashes; the trail fades out away from the ship -->
    <line
      v-for="i in Number(trail)"
      :key="i"
      class="fleet-dash"
      x1="0"
      x2="0"
      :y1="i * 11 + 2"
      :y2="i * 11 + 7"
      :stroke-opacity="0.75 * (1 - (i - 1) / trail)"
      :style="{ '--i': i - 1 }"
    />
    <path d="M-9 8l9-16 9 16" />
  </g>
</template>

<style>
  .fleet-ship {
    fill: none;
    stroke: var(--nais-accent, #0067c5);
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .fleet-ship path {
    stroke-width: 5.5;
  }

  .fleet-dash {
    stroke-width: 1.5;
  }
</style>
