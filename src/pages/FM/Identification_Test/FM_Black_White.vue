<template class="fm-black-white">
  <main>
    <section id="test-border">
      <section v-if="!testHasStarted" class="instruction">
        <h4>{{ trials[currentTest].instruction }}</h4>
        <img
          src="../../../assets/App_Icons/rightArrow.png"
          alt="Right arrow"
          @click="startTest"
          class="right-arrow"
        />
      </section>
      <section v-else>
        <!-- <h3 class="in-test-instructions">
          {{ trials[currentTest].instruction }}
        </h3> -->
        <img
          src="../../../assets/IT_Faces/star.jpg"
          alt="star"
          class="star"
          v-show="userChoseCorrectly"
        />
        <div v-show="!userChoseCorrectly">
          <div  v-for="trial in trials[currentTest].trialDataSet">
            <img           
            :src="getImage(trial.stimulusImage)"
            :style="{display: trial.visibility}"
            class="stimulus-img"
          />
        </div>
        </div>
        <img
          :src="
            getImage(trials[currentTest].trialDataSet[currentTrial].leftImage)
          "
          alt="Left image"
          @click="handleUserChoice('left')"
          v-show="!userChoseCorrectly"
          class="left"
        />
        <img
          v-show="!userChoseCorrectly"
          :src="
            getImage(trials[currentTest].trialDataSet[currentTrial].rightImage)
          "
          alt="Right image"
          @click="handleUserChoice('right')"
          class="right"
        />
        <h4 v-if="userChoseIncorrectly">Incorrect, Please try again!</h4>
      </section>
    </section>
  </main>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { generatePracticeTrials } from "../../../modules/generateFaceMatchingTrials/IDT/generateBlackWhiteTrials";
import {
  startFaceMatching,
  handleUserSelection,
} from "../../../modules/handleAnswers/handleFM";

let store = useStore();
let router = useRouter();
let currentTest = ref(0);
let currentTrial = ref(0);
let userChoseCorrectly = ref(false);
let userChoseIncorrectly = ref(false);
let testHasStarted = ref(false);
let trials = [
  {
    instruction:
      "This is the practice test. Match the categories as fast as possible. When you are ready, please click the green arrow below to start.",
    trialDataSet: generatePracticeTrials(2, true),
  },
  {
    instruction:
      "Practice over, Match the categories as fast as possible. When you are ready, please click the green arrow below to start.",
    trialDataSet: generatePracticeTrials(4, false),
  },
];

function handleUserChoice(direction) {
  //handling the user selection
  handleUserSelection(
    testHasStarted,
    direction,
    trials,
    currentTest,
    currentTrial,
    userChoseCorrectly,
    userChoseIncorrectly,
    router,
    store,
    "FM_Identification_Black_White_Feedback"
  );
}

onMounted(()=> {
  store.commit("changeCurrentTest", "FM_Identification_Black_White")
})

function getImage(img) {
  return new URL(`../../../assets/stimulus_faces/${img}.jpg`, import.meta.url)
    .href;
}
function startTest() {
  testHasStarted.value = true;
  startFaceMatching();
}
</script>
  
  <style scoped>
.instruction {
  width: 469px;
  height: auto;
  display: flex;
  box-shadow: -3px -3px 7px #eeeeeeb2, 4px 4px 5px rgb(218 218 219 / 95%);
  background: white;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 41px;
}

.in-test-instructions {
  line-height: 32px;
  font-weight: 400;
  width: 560px;
  font-size: 16px;
}

.left,
.right {
  position: absolute;
    width: 200px;
    height: 218px;
    object-fit: scale-down;  /* aspect-ratio: 1/1.2; */
}

.left {
  bottom: 20px;
  left: 40px;
}

.right {
  bottom: 20px;
  right: 40px;
}

.star {
  width: 130px;
  display: block;
  margin: auto;
}

.right-arrow {
  width: 67px;
  margin-top: 10px;
  cursor: pointer;
}

.instruction h4 {
  line-height: 31.4px;
  font-weight: 400;
}
.stimulus-img {
  width: 200px;
}

@media (max-width: 950px) {
  .stimulus-img {
    margin-top: -235px;
  }
}

@media (max-width: 715px) {
  .left,
  .right {
    width: 150px;
  }
}

@media (max-width: 695px) {
  .instruction{
    width: 360px;
    margin-bottom: 70px;
  }
}
</style>