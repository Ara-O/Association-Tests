<template>
  <main>
    <h3>Congratulations! You have finished the test</h3>
    <div style="display: flex; column-gap: 20px">
      <main-button routeTo="/Home" @click="storeFMData">Go back to home page</main-button>
      <main-button routeTo="">Take IAT test</main-button>
      <main-button routeTo="">Take IBT test</main-button>
    </div>

    <div class="feedbacks">
      <div class="feedback-wrapper">
        <h3 style="font-weight: 400;">Practice: </h3>
        <!-- image here -->
        <div class="image-wrapper"></div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ accuracyData.practice }}%
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ speedData.practice }}ms
          </h3>
        </div>
      </div>
      <div class="feedback-wrapper">
        <h3 style="font-weight: 400;">Test: </h3>
        <!-- image here -->
        <div class="image-wrapper"></div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">Accuracy: {{ accuracyData.test }}%</h3>
          <h3 class="feedback-message">
            Speed:
            {{ speedData.test }}ms
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import "../../../styles/Feedback_Page.css";
import MainButton from "../../../components/Buttons/MainButton.vue";
import { useStore } from "vuex";
import { reactive } from "vue";

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
  console.log("trial data loop - ", trialdataloop);
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

function storeFMData(){
  console.log(store.state[store.getters.getCurrentTest])
}
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
</style>