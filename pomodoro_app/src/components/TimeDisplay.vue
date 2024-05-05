<script setup>
import { computed } from 'vue';

const { minutes, seconds } = defineProps({
  minutes: {
    type: Number,
    required: true
  },
  seconds: {
    type: Number,
    required: true
  }
})

const formattedMinutes = computed(() => {
  return minutes.toString().padStart(2, '0');
});

const formattedSeconds = computed(() => {
  return seconds.toString().padStart(2, '0');
});

</script>

<template>
  <div class="timer">
    {{formattedMinutes}}:{{formattedSeconds}}
  </div>
</template>

<style>
.timer {
  font-size: 5rem; /* Set a large font size */
  font-family: 'Helvetica', sans-serif; /* Choose a readable font */
  text-align: center; /* Center the text */
  display: block;
  color: #333; /* Set a color for the text */
  overflow: hidden;
}
</style>
