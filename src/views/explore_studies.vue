<template>
  <main>
    <h3 class="explore-studies_welcome">Welcome!</h3>
    <iframe
      style="max-width: 560px; width: 100vw"
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
    <btn whereTo="/consent-form" class="explore-studies">Explore Studies</btn>
  </main>
</template>

<script>
import btn from "../components/MainBtn.vue"
export default {
  components: {
    btn,
  },
};
</script>

<style scoped>
.explore-studies {
  width: 130px;
  font-weight: 400;
}
</style>