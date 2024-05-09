<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch } from 'vue'

  const timer_seconds = ref(1500);
  const running = ref(false)

  function tick() {
    if (running.value){
      timer_seconds.value--;
    }
  };

  function start() {
    running.value = true;
  };
  
  function reset() {
    timer_seconds.value = 1500;
    running.value = false;
  }

  const interval = setInterval(tick, 1000);

</script>

<template>
  <div class="timer">
    <TimeDisplay :seconds="timer_seconds" />
    <div class="button_row">
      <Button @click="start">Start</button>
      <Button @click="reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button_row {
  display: flex;
  justify-content: space-between;
}
</style>
