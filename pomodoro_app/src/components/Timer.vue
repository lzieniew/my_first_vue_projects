<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import {ref} from 'vue'

  const timer_seconds = ref(Number(1500))

  const tick = () => {
    timer_seconds--;
  }
</script>

<template>

    <TimeDisplay seconds=timer_seconds.value />

</template>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
}</style>
