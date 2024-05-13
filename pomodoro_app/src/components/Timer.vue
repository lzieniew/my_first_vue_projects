<script setup>
  import TimeDisplay from './TimeDisplay.vue'
  import { ref, watch, onUnmounted, onMounted } from 'vue'

  const timer_seconds = ref(1500);
  const running = ref(false);
  const button_text = ref("Start");
  let intervalId = null;

  const audio = new Audio('/pomodoro_completed_sound.wav');

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
        clearInterval(intervalId)
        sendNotification('Pomodoro done!', 'Now you can rest.')
        audio.play();
      }
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
