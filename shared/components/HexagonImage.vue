<template>
  <div class="hexagon-container" :style="{ width: size, height: size }">
    <img :src="src" :alt="alt" class="hexagon" />
  </div>
</template>

<script setup>
  defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '200px',
    },
  })
</script>

<style scoped>
  .hexagon-container {
    display: inline-block;
    overflow: hidden;
  }

  .hexagon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  }
</style>
