<template>
  <main>
    <div v-if="section === 0">
      <img
        src="../assets/IBT_Faces/welcome_instruction.jpg"
        alt="Welcome Instruction"
        style="width: 100vh"
        class="welcomejpg"
      />
    </div>
    <div v-else-if="section === 1">
      <h3 class="fullinstruction">
       <slot></slot>
      </h3>
    </div>
    <div v-else-if="section === 2">
      <img
        src="../assets/IBT_Faces/practice_instruction.jpg"
        alt="Practice instruction"
        style="width: 100vh"
        class="welcomejpg"
      />
    </div>
    <h3 class="continue-instruction">Click green arrow below to continue</h3>
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
        section: 0
    };
  },

  watch: {
      section(val){
          if(val === 3){
            //   this.$router.push("/IBT_Black_White")
            //   this.$router.push(this.routeTo)
            this.$emit("finishedInstructions")
          }
      }
  }
};
</script>

<style scoped>
@import url("../styles/IBT.css");
</style>