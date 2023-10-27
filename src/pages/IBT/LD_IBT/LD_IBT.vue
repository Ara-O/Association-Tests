<template>
  <section class="main ">
    <section v-show="currentStep === Steps.InstructionOne" class="section-box ">
      <h3 class="text-md font-semibold">Implicit Association Test</h3>
      <h3 class="text-[14px] mt-3"><u>Round One</u></h3>
      <h4 class="text-sm leading-6 mt-4">
        <b>Instructions: </b>On the screen, you will see two
        sets of words: one related to individuals with learning difficulties and
        the other to those without. These two categories and words linked with
        each category are presented in a table as follows:
      </h4>
      <table class="border text-[13px] leading-6 mt-3">
        <tr>
          <th class="font-medium">Category</th>
          <th></th>
        </tr>
        <tr>
          <td>Learning Difficulties</td>
          <td>
            Slow Learner, Academic Challenges, Educational Barriers, Difficulties
            Learning
          </td>
        </tr>
        <tr>
          <td>Without Learning Difficulties</td>
          <td>Typically Developing, Neurotypical, No Diagnosis</td>
        </tr>
      </table>

      <h3 class="mt-5 text-sm leading-6">
        There will be words displayed in the middle of the screen related to
        learning difficulties or without <b>learning difficulties</b>. When the
        screen displays words associated with learning difficulties, select the
        <b>smiley face</b>. When you see words related to <b> without learning difficulties</b>,
        select the<b> sad face</b>. Smiley faces and sad faces will appear at the bottom
        of the screen either on the left or right. Pay attention because the
        smiley face and sad face may change places. Please respond quickly and
        correctly. You can only use one hand to touch the screen.
      </h3>

      <button @click="currentStep++">Next</button>
    </section>

    <!-- SECTION 2 -->
    <section v-show="currentStep === Steps.InstructionTwo" class="section-box">
      <h4 class="font-medium">Remember*</h4>
      <br>
      <table class="w-96 text-sm remember-table leading-6">
        <tr>
          <td class="font-medium">If you see these words</td>
          <td class="font-medium">Press</td>
        </tr>
        <tr>
          <td>Average Learner, Typically Developing, No Diagnosis </td>
          <td>
            <img src="../../../assets/LD_IBT/sad-face.png" class="w-32" />
          </td>
        </tr>
        <tr>
          <td>Learning Difficulties Slow Learner, Academic Challenges, Educational Barriers, Difficulties Learning</td>
          <td>
            <img src="../../../assets/LD_IBT/happy-face.png" class="w-32" />
          </td>
        </tr>
      </table>

      <div class="flex gap-3 items-center justify-center">
        <button @click="currentStep--">Back</button>
        <button @click="currentStep++">Next</button>
      </div>
    </section>

    <!-- TEST 1 -->
    <section v-show="currentStep === Steps.PracticeRound" class="section-box">
      <h3>Practice Round</h3>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { generateLdTrials } from "../../../modules/generateIbtTrials/generatIbtTrialsLD"

let currentStep = ref<number>(1)

enum Steps {
  InstructionOne = 1,
  InstructionTwo,
  PracticeRound,
  ActualRound,
}

onMounted(() => {
  console.log(generateLdTrials("E", "I", 8))
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

tr,
td,
th {
  /* padding: 15px; */
  border: solid 1px black;
}

.remember-table td {
  padding: 15px;
}

.section-box {
  box-shadow: 0px 2px 4px -1px #cbcbcb;
  border: solid 1px rgb(233, 233, 233);
  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
  padding: 30px 40px 40px 40px;
  border-radius: 5px;
  width: auto;
  max-width: 500px;
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
