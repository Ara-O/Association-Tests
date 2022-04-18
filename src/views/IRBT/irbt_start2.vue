<template>
  <main>
    <h3>Instruction</h3>
    <br />
    <h3 class="fullinstruction">
      There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      smiling face; when you see the Black person, you should touch the crying
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond <u>quickly and correctly.</u> You
      can only <u>use one hand</u> to touch the screen.
    </h3>

    <br />
    <h4>Click the right arrow to continue</h4>
      <img
      src="../../assets/app-icons/rightArrow.png"
      alt="Right arraw"
      @click="next"
      class="continue"
    />
  </main>
</template>

<style scoped >
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

@media (max-width: 595px) {
  main {
    background: white;
    padding: 39px 0px;
  }

  .fullinstruction {
    width: auto;
    font-size: 14px;
  }
}
</style>

<script>
export default {
  methods: {
    next() {
      let that = this;
      that.$router.push("/IRBT/section_2");
    },
  },
};
</script>