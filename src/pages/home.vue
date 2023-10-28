<template>
  <main class="home">
    <h3 class="choose-test">Choose Test</h3>
    <MainButton routeTo="/IAT_Choose_Test" class="w-60">Implicit Association Test</MainButton>
    <MainButton routeTo="/IBT_Choose_Test" class="w-60">Implicit Bias Test</MainButton>
    <MainButton routeTo="/IT" class="w-60">Individuation Training</MainButton>
  </main>
</template>

<script setup>
import "../styles/home.css";
import MainButton from "../components/Buttons/MainButton.vue";
</script>
