<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch } from 'vue'

  const timer_seconds = ref(1500);

  const tick = () => {
    timer_seconds.value--;
    forceUpdate();
  };

  const interval = setInterval(tick, 1000);

  const forceUpdate = useForceUpdate();

  watch(timer_seconds, (newVal) => {
    console.log('timer_seconds changed:', newVal);
  });
</script>

<template>
    Raw seconds: {{ timer_seconds.value }}
    <TimeDisplay :seconds="timer_seconds.value" />

</template>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
