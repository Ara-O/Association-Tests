<template >
  <main>
    <div v-if="section === 0">
      <img
        src="../../assets/IRBT_faces/welcome_instruction.jpg"
        alt="Welcome Instruction"
        style="width: 100vh"
        class="welcomejpg"
      />
    </div>
    <div v-else-if="section === 1">
      <h3 class="fullinstruction">
        There will be a picture of a Black person or a White person in the
        middle of screen. When you see a picture of the White person you should
        touch the smiling face; when you see the Black person, you should touch
        the crying face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.
      </h3>
    </div>
    <div v-else-if="section === 2">
      <img
        src="../../assets/IRBT_faces/practice_instruction.jpg"
        alt="Practice instruction"
        style="width: 100vh"
        class="welcomejpg"
      />
    </div>
    <h3 class="continue-instruction">Click green arrow below to continue</h3>
    <img
      src="../../assets/app-icons/rightArrow.png"
      alt="Right arraw"
      @click="section++"
      class="continue"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.continue {
  width: 60px;
  cursor: pointer;
}

.fullinstruction {
  width: 600px;
  line-height: 28px;
  /* border: solid 1px #b9b9b9; */
  padding: 30px;
  background: white;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: -3px 1px 7px #e2e2e2b2, 2px 3px 5px rgb(218 218 219 / 95%);
}

.continue-instruction {
  font-size: 16px;
}

@media (max-width: 852px) {
  main {
    background: white;
  }

  .fullinstruction {
    width: auto;
    font-size: 14px;
  }
}

@media (max-width: 582px) {
.welcomejpg{
  width: 41vh !important
}

.continue-instruction{
font-size: 15px;
}
}
</style>

<script>
export default {
  data() {
    return {
      section: 0,
    };
  },

  watch: {
    section() {
      if (this.section === 3) {
        this.$router.push("/IRBT/Practice");
      }
    },
  },
};
</script>