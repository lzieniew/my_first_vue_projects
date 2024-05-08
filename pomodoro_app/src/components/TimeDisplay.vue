<script setup>
import { computed } from 'vue';

const { seconds } = defineProps({
  seconds: {
    type: Number,
    required: true
  }
})

const formatted_time = computed(() => {
  // Calculate the minutes and seconds from the total seconds
  console.log(seconds)
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  console.log(minutes)

  // Format minutes and seconds to have two digits
  let formattedMinutes = minutes.toString().padStart(2, '0');
  let formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  // Return the formatted time
  return `${formattedMinutes}:${formattedSeconds}`;
});

</script>

<template>
  <div class="timer">
    {{formatted_time}}
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
