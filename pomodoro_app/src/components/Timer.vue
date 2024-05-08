<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch } from 'vue'

  const timer_seconds = ref(1500);

  const tick = () => {
    timer_seconds.value--;
  };

  const interval = setInterval(tick, 1000);

</script>

<template>
    <TimeDisplay :seconds="timer_seconds" />

</template>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
