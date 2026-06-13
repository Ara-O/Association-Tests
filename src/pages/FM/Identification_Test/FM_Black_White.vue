<template class="fm-black-white">
  <main>
    <section id="test-border">
      <section v-if="!testHasStarted" class="instruction">
        <h4>{{ trials[currentTest].instruction }}</h4>
        <img
          src="../../../assets/app_icons/rightArrow.png"
          alt="Right arrow"
          @click="startTest"
          class="right-arrow"
        />
      </section>
      <section :class="{ hide: !testHasStarted }">
        <section v-show="!paused">
          <img
            src="../../../assets/IT_faces/star.jpg"
            alt="star"
            class="star star-fm"
            v-show="userChoseCorrectly"
          />
          <img
            src="../../../assets/IT_faces/cross.jpg"
            alt="cross"
            class="cross"
            v-show="userChoseIncorrectly"
          />
          <!-- trial images -->
          <div v-show="!userChoseCorrectly && !userChoseIncorrectly">
            <div
              v-for="trial in trials[currentTest].trialDataSet"
              :key="trial.id"
            >
              <img
                :src="getImage(trial.stimulusImage)"
                :style="{ display: trial.visibility }"
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
            v-show="!userChoseCorrectly && !userChoseIncorrectly"
            class="left-fm"
          />
          <img
            v-show="!userChoseCorrectly && !userChoseIncorrectly"
            :src="
              getImage(
                trials[currentTest].trialDataSet[currentTrial].rightImage
              )
            "
            alt="Right image"
            @click="handleUserChoice('right')"
            class="right-fm"
          />
        </section>
      </section>
    </section>
  </main>
</template>

<script setup>
import "../../../styles/FM.css";
import { ref, onMounted } from "vue";
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
let paused = ref(false);
let userChoseIncorrectly = ref(false);
let testHasStarted = ref(false);
let fullData = [];
let trials = [
  {
    instruction:
      "This is the practice test. Match the categories as fast as possible. When you are ready, please click the green arrow below to start.",
    trialDataSet: generatePracticeTrials(8, true),
  },
  {
    instruction:
      "Practice over, Match the categories as fast as possible. When you are ready, please click the green arrow below to start.",
    trialDataSet: generatePracticeTrials(40, false),
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
    paused,
    "/FM_Identification_Black_White_Feedback",
    store,
    fullData
  );
}

onMounted(() => {
  store.commit("changeCurrentTest", "FM_Identification_Black_White");
});

function getImage(img) {
  return new URL(`../../../assets/Stimulus_Faces/${img}.jpg`, import.meta.url)
    .href;
}

function startTest() {
  testHasStarted.value = true;
  paused.value = true;
  setTimeout(function () {
    paused.value = false;
    startFaceMatching();
  }, 500);
}
</script>
