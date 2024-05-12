<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch, onUnmounted } from 'vue'

  const timer_seconds = ref(1500);
  const running = ref(false);
  const button_text = ref("Start");
  let intervalId = null;

  function tick() {
    if (running.value){
      timer_seconds.value--;
    }
  };

  function on_click() {
    if (!running.value) {
      running.value = true;
      button_text.value = "Reset";
      timer_seconds.value = 1499;
      intervalId = setInterval(tick, 1000);
    }
    else {
      button_text.value = "Start";
      running.value = false;
      timer_seconds.value = 1500;
      clearInterval(intervalId);
    }
  };

 onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
 });


</script>

<template>
  <div class="timer_container">
    <TimeDisplay :seconds="timer_seconds" />
    <div class="button_row">
      <Button @click="on_click">{{ button_text }}</button>
    </div>
  </div>
</template>

<style scoped>
.timer_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
}

.button_row {
  display: flex;
  justify-content: center;
  width: 100%;
}

.p-button {
  flex-grow: 2;
  justify-content: center;
}
</style>
