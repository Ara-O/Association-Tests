<template>
  <main>
    <h3>Congratulations! You have finished the test</h3>
    <div style="display: flex; column-gap: 20px">
      <main-button routeTo="/Home" @click="storeFMData"
        >Go back to home page</main-button
      >
    </div>

    <div class="feedbacks">
      <div class="feedback-wrapper">
        <h3 style="font-weight: 400">Practice:</h3>
        <!-- image here -->
        <div class="image-wrapper"></div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ accuracyData.practice.toFixed(2) }}%
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ speedData.practice.toFixed(2) }}ms
          </h3>
        </div>
      </div>
      <div class="feedback-wrapper">
        <h3 style="font-weight: 400">Test:</h3>
        <!-- image here -->
        <div class="image-wrapper"></div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ accuracyData.test.toFixed(2) }}%
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ speedData.test.toFixed(2) }}ms
          </h3>
        </div>
      </div>
    </div>
    <br />
  </main>
</template>

<script setup>
import "../../../styles/Feedback_Page.css";
import MainButton from "../../../components/Buttons/MainButton.vue";
import { useStore } from "vuex";
import { onMounted, reactive } from "vue";
import storingDataFm from "../../../modules/storingData/storingDataFM";
import * as confetti from "canvas-confetti";

let speedData = reactive({
  practice: 0,
  test: 0,
});
let accuracyData = reactive({
  practice: 0,
  test: 0,
});

let store = useStore();
let trialData = store.state[store.getters.getCurrentTest];

trialData.forEach((trialdataloop) => {
  // console.log("trial data loop - ", trialdataloop);
  trialdataloop.trialDataSet.forEach((data, innerindex) => {
    if (data.testType === "Practice") {
      speedData.practice += data.reactionTime;
      accuracyData.practice += data.accuracy;
    } else if (data.testType === "Test") {
      speedData.test += data.reactionTime;
      accuracyData.test += data.accuracy;
    }

    if (innerindex === trialdataloop.trialDataSet.length - 1) {
      if (data.testType === "Practice") {
        speedData.practice /= trialdataloop.trialDataSet.length;
        accuracyData.practice /= trialdataloop.trialDataSet.length;
      } else if (data.testType === "Test") {
        speedData.test /= trialdataloop.trialDataSet.length;
        accuracyData.test /= trialdataloop.trialDataSet.length;
      }
    }
  });
});

function launchConfetti() {
  var myCanvas = document.querySelector(".gender-feedback-main");

  var myConfetti = confetti.create(myCanvas, { resize: true });

  // do this for 1 seconds
  var duration = 10 * 100;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    myConfetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    myConfetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function storeFMData() {
  let testData = store.state[store.getters.getCurrentTest];
  storingDataFm(testData, store, "Face_Matching_Categorization_Black_White");
}

onMounted(() => {
  launchConfetti();
});
</script>

<style scoped>
.feedbacksect {
  width: auto;
  max-width: 469px;
  height: auto;
  display: flex;
  box-shadow: -4px -1px 6px hsl(0deg 0% 93% / 70%),
    2px 1px 3px rgb(218 218 219 / 95%);
  background: white;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 41px;
}

.feedback-wrapper {
  border-radius: 5px;
  box-shadow: -2px 4px 4px -1px #cbcbcb87, 0px 0px 4px #e4e4e48a;
}
</style>
