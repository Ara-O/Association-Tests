<template>
  <main>
    <div v-show="section === 0">
      <img
        :src="getPracticeSource"
        alt="Welcome Instruction"
        class="welcomejpg"
      />
    </div>
    <div v-show="section === 1">
      <h3 class="fullinstruction">
        <slot></slot>
      </h3>
    </div>
    <div v-show="section === 2">
      <img
        :src="getPracticeInstruction"
        alt="Practice instruction"
        class="welcomejpg"
      />
    </div>
    <h3 class="continue-instruction">
      Click the green arrow below to continue
    </h3>
    <img
      src="../assets/App_Icons/rightArrow.png"
      alt="Right arraw"
      @click="section++"
      class="continue"
    />
  </main>
</template>

<script>
export default {
  emits: ["finishedInstructions"],
  data() {
    return {
      section: 0,
      tes: "welcome_instruction.jpg",
    };
  },

  computed: {
    getPracticeSource() {
      if (this.$store.getters.getCurrentTest !== "IBT_Cat_Dog") {
        return new URL(
          `../assets/IBT_Faces/welcome_instruction.jpg`,
          import.meta.url
        ).href;
      } else {
        return new URL(
          `../assets/IBT_Faces/cat_dog_welcome_img.jpg`,
          import.meta.url
        ).href;
      }
    },

    getPracticeInstruction() {
      if (this.$store.getters.getCurrentTest !== "IBT_Cat_Dog") {
        return new URL(
          `../assets/IBT_Faces/practice_instruction.jpg`,
          import.meta.url
        ).href;
      } else {
        return new URL(
          "../assets/IBT_Faces/cat_dog_practice_img.jpg",
          import.meta.url
        ).href;
      }
    },
  },

  watch: {
    section(val) {
      if (val === 3) {
        this.$emit("finishedInstructions");
      }
    },
  },
};
</script>

<style scoped>
@import url("../styles/IBT.css");
</style>
