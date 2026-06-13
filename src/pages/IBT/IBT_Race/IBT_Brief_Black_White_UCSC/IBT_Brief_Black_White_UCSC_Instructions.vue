<template>
  <main>
    <!-- Section 0: welcome image (touchscreen only — keyboard starts at section 1) -->
    <div v-show="section === 0">
      <img :src="getPracticeSource" alt="Welcome Instruction" class="welcomejpg" />
    </div>

    <!-- Section 1: text instruction (shown for both modes) -->
    <div v-show="section === 1">
      <h3 class="fullinstruction" v-html="instruction"></h3>
    </div>

    <!-- Section 2: practice image (touchscreen only) -->
    <div v-show="section === 2">
      <img :src="getPracticeInstruction" alt="Practice instruction" class="welcomejpg" />
    </div>

    <h3 class="continue-instruction">Click the green arrow below to continue</h3>
    <img
      src="../../../../assets/app_icons/rightArrow.png"
      alt="Right arrow"
      @click="section++"
      class="continue"
    />
  </main>
</template>

<script>
export default {
  emits: ["finishedInstructions"],
  props: ["instruction", "mode"],
  data() {
    return {
      section: 0,
    };
  },

  computed: {
    getPracticeSource() {
      return new URL(
        `../../../../assets/IBT_Faces/welcome_instruction.jpg`,
        import.meta.url,
      ).href;
    },

    getPracticeInstruction() {
      return new URL(
        `../../../../assets/IBT_Faces/practice_instruction.jpg`,
        import.meta.url,
      ).href;
    },
  },

  created() {
    if (this.mode === "keyboard") {
      this.section = 1;
    }
  },

  watch: {
    section(val) {
      const finishAt = this.mode === "keyboard" ? 2 : 3;
      if (val === finishAt) {
        this.$emit("finishedInstructions");
      }
    },
  },
};
</script>

<style scoped>
@import url("../../../../styles/IBT.css");
</style>
