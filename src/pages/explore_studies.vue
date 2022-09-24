<template>
  <main>
    <h3 style="margin-bottom: 0px">Welcome!</h3>
    <br>
    <br>
    <iframe
      style="max-width: 560px; width: 100vw; border-radius: 10px;"
      height="315"
      src="https://www.youtube.com/embed/NpEaa2P7qZI?controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
      autoplay
      loop
    ></iframe>
    <br />
    <br />
    <main-button routeTo="/consent-form" class="explore-studies">Explore Studies</main-button>
  </main>
</template>

<script setup>
import mainButton from "../components/Buttons/MainButton.vue"
</script>

<style scoped>
.explore-studies {
  width: 130px;
}
</style>