<template>
  <section class="page404">
    <h2>Page not found</h2>
    <main-button routeTo="/Home">Go Home</main-button>
  </section>
</template>

<script setup>
import MainButton from "../components/Buttons/MainButton.vue";
</script>

<style scoped>
.page404 {
  background: url("../assets/App_Icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.page404 h2 {
  font-weight: 600;
}
</style>
