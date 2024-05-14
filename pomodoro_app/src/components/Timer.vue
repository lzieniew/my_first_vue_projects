<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch, onUnmounted, onMounted } from 'vue'

  const timer_seconds = ref(1500);
  const running = ref(false);
  const pomodoro_completed = ref(false);
  const button_text = ref("Start");
  const pomodoro_counter = ref(0);
  const status_line = ref("")
  let intervalId = null;

  const audio = new Audio(import.meta.env.BASE_URL + 'pomodoro_completed_sound.wav');
  

  function sendNotification(title, message) {
    new Notification(title, { body: message });
  }

  function tick() {
    if (running.value){
      if (timer_seconds.value > 0) {
        timer_seconds.value--;
      }
      else {
        running.value = false;
        pomodoro_completed.value = true;
        pomodoro_counter.value++;
        clearInterval(intervalId);
        sendNotification('Pomodoro done!', 'Now you can rest.');
        audio.play();
        status_line.value = `Completed pomodoro ${pomodoro_counter.value}`;
      }
    }
  };

  function on_click_reset() {
      running.value = false;
      pomodoro_completed.value = false;
      timer_seconds.value = 1500;
      clearInterval(intervalId);
      status_line.value = `Pomodoro completed: ${pomodoro_counter.value}`;
  };

  function on_click_start() {
      running.value = true;
      timer_seconds.value = 1499;
      intervalId = setInterval(tick, 1000);
      status_line.value = `Running pomodoro ${pomodoro_counter.value + 1}`;
  }

  function on_click_break() {
    timer_seconds.value = 300;
    intervalId = setInterval(tick, 1000);
    running.value = true;
    status_line.value = `On break after pomodoro ${pomodoro_counter.value}`;
  }

  onMounted(() => {
  if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  }
});

 onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
 });


</script>

<template>
  <div class="timer_container">
    <div class="Status"><b>{{ status_line }}</b></div>
    <TimeDisplay :seconds="timer_seconds" />
    <div v-if="!running && pomodoro_completed" class="button_row">
      <Button @click="on_click_reset">Another pomodoro</button>
      <Button @click="on_click_break">Break</button>
    </div>
    <div v-else-if="!running && !pomodoro_completed" class="button_row">
      <Button @click="on_click_start">Start</button>
    </div>
    <div v-else-if="running && pomodoro_completed" class="button_row">
      <Button @click="on_click_reset">End break</button>
    </div>
    <div v-else class="button_row">
      <Button @click="on_click_reset">Reset</button>
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
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  gap: 10px;
}

.p-button {
  flex-grow: 4;
  justify-content: center;
  flex-basis: 1vw;
}
</style>
