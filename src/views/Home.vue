<template>
  <main class="home">
    <h3 class="choose-test">Choose Test</h3>
    <router-link
      to="/IAT_Choose_Test"
      class="router-link test-btn"
      tag="button"
    >
      Implicit Association Test
    </router-link>
    <router-link
      to="/IBT_Choose_Test"
      class="router-link test-btn"
      tag="button"
    >
      Implicit Bias Test
    </router-link>
    <router-link to="/IT" class="router-link test-btn" tag="button">
      Individuation Training
    </router-link>
  </main>
</template>

  
<style scoped src="../styles/homepage.css">
</style>

<script>
export default {
  name: "Home",
};
</script>

