<template>
  <section class="main ">
    <section v-if="testToStart === 0">
      <section v-show="currentStep === Steps.TestOne" class="section-box">
        <TestOne :position="1" @finished="currentStep++"></TestOne>
      </section>
      <section v-show="currentStep === Steps.TestTwo" class="section-box">
        <TestTwo :position="2"></TestTwo>
      </section>
    </section>

    <section v-if="testToStart === 1">
      <section v-show="currentStep === Steps.TestOne" class="section-box">
        <TestTwo :position="1" @finished="currentStep++"></TestTwo>
      </section>
      <section v-show="currentStep === Steps.TestTwo" class="section-box">
        <TestOne :position="2"></TestOne>
      </section>
    </section>
  </section>
</template>

<script  setup>
import { ref } from "vue"
import TestOne from "./LD_IBT_Test1.vue"
import TestTwo from "./LD_IBT_Test2.vue"

let currentStep = ref(1)

// Uncomment for random test starting
// let testToStart = Math.floor(Math.random() * 2)
let testToStart = 0

const Steps = Object.freeze({
  TestOne: 1,
  TestTwo: 2
})

const Rounds = Object.freeze({
  PracticeRound: 0,
  ActualRound: 1

})
</script>

<style scoped>
.bold {
  font-weight: bold;
}

.main {
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}

b {
  font-weight: 500;
}


.section-box {
  box-shadow: 0px 2px 4px -1px #cbcbcb;
  border: solid 1px rgb(233, 233, 233);
  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
  padding: 30px 40px 40px 40px;
  border-radius: 5px;
  width: auto;
  /* max-width: 420px; */
}

button {
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -1px 3px 3px -1px #cbcbcb;
  cursor: pointer;
  border: none;
  transition: all 250ms ease-in-out;
  color: white;
  font-weight: 300;
  font-size: 13px;
  margin-top: 25px;
  height: 45px;
  width: 100px;
}
</style>
