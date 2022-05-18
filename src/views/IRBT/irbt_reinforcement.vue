<template>
  <main>
    <img src="../../assets/IRBT_faces/test_instruction.jpg" alt="" />
    <h4>Click the right arrow to continue</h4>
    <img
      src="../../assets/app-icons/rightArrow.png"
      alt="Right arraw"
      @click="next"
      class="continue"
    />
  </main>
</template>

<script>
export default {
  methods: {
    next() {     
        this.$router.push("/IRBT/section_1");
    },
  },
};
</script>

<style scoped>
.continue {
  width: 60px;
  cursor: pointer;
}

@media (max-width: 852px) {
  img {
    width: 82vw;
  }
}
</style>