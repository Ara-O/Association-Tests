<template>
  <main>
    <h3>Welcome!</h3>
    <!-- <video width="500px" height="500px">
    <source src="https://www.youtube.com/watch?v=ScMzIvxBSi4">
</video> -->
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
import btn from "../components/Jelly_Button.vue";
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