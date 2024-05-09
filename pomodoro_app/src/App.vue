<script setup>
import Timer from './components/Timer.vue'

</script>

<template> <Timer/>
</template>

<style scoped>
header {
  line-height: 2.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

  header {
    display: flex;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

#main-container {
  max-width: fit-content;
  margin-inline: auto;
}</style>
