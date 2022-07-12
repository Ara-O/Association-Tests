<template>
  <main>
    <div v-if="section === 0">
      <img
        :src="getPracticeSource"
        alt="Welcome Instruction"
        style="width: 100vh; box-shadow: -2px 3px 7px #dedede, 2px -2px 0px #fafafa"
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
        :src="getPracticeInstruction"
        alt="Practice instruction"
        style="width: 100vh; box-shadow: -2px 3px 7px #dedede, 2px -2px 0px #fafafa"
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
        section: 0,
        tes: 'welcome_instruction.jpg'
    };
  },

  computed: {
    getPracticeSource(){
      if(this.$store.getters.getCurrentTest !== "IBT_Cat_Dog"){
        return require("../assets/IBT_Faces/welcome_instruction.jpg")
      } else{
        return require("../assets/IBT_Faces/cat_dog_welcome_img.jpg")
      }
    },

    getPracticeInstruction(){
        if(this.$store.getters.getCurrentTest !== "IBT_Cat_Dog"){
        return require("../assets/IBT_Faces/practice_instruction.jpg")
      } else{
        return require("../assets/IBT_Faces/cat_dog_practice_img.jpg")
      }
    }
  },

  watch: {
      section(val){
          if(val === 3){
            this.$emit("finishedInstructions")
          }
      }
  }
};
</script>

<style scoped>
@import url("../styles/IBT.css");
</style>