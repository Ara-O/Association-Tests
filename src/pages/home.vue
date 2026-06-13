<template>
  <main class="home">
    <h3 class="choose-test">Choose Test</h3>
    <MainButton routeTo="/IAT_Choose_Test" style="width: 180px">Implicit Association Test</MainButton>
    <MainButton routeTo="/IBT_Choose_Test" style="width: 180px">Implicit Bias Test</MainButton>
    <MainButton routeTo="/IT" style="width: 180px">Individuation Training</MainButton>
  </main>
</template>

<script setup>
import "../styles/home.css";
import MainButton from "../components/Buttons/MainButton.vue";
</script>
