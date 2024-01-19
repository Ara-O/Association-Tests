<template>
  <section class="h-auto min-h-full">
    <div v-if="currentStep <= 2" class="text-left">
      <h3 class="text-lg font-semibold">Implicit Association Task 2</h3>
      <h3 class="text-base font-semibold mt-5">
        {{ section === 0 ? "Round 2: Practice " : "Round " + position }}
      </h3>
    </div>
    <div v-if="currentStep === 1" class="max-w-[500px] text-left">
      <h4 class="text-sm text-left leading-7 mt-4">
        <b>Instructions: </b>On the screen, you will see two sets of words: one
        related to individuals with learning difficulties and the other to those
        without. These two categories and words linked with each category are
        presented in a table as follows:
      </h4>

      <table
        class="border text-[13px] leading-7 text-left box-border mt-3 border-collapse"
      >
        <tr>
          <th class="font-medium">Category</th>
          <th></th>
        </tr>
        <tr>
          <td>Learning Difficulties</td>
          <td>Slow Learner, Academically Challenged, Difficulties Learning</td>
        </tr>
        <tr>
          <td>Without Learning Difficulties</td>
          <td>Typically Developing, Neurotypical, No Diagnosis</td>
        </tr>
      </table>

      <h3 class="mt-5 text-sm text-left leading-7">
        There will be words displayed in the middle of the screen. When the
        screen displays words associated<b class="font-semibold">
          with learning difficulties </b
        >, select the <b class="font-semibold">happy face</b>. When you see
        words related to
        <b class="font-semibold"> without learning difficulties</b>, select
        the<b class="font-semibold"> sad face</b>. Happy faces and sad faces
        will appear at the bottom of the screen either on the left or right. Pay
        attention because the happy face and sad face may change places. Please
        respond quickly and correctly. You can only use one hand to touch the
        screen.
      </h3>
      <h3 class="text-sm leading-7 mb-0">
        <b class="font-semibold text-sm">Disclaimer:</b> If you are using
        touchscreen, you can only use hand to touch the screen
      </h3>
      <button
        @click="currentStep++"
        class="gradient-green gradient-btn py-6 mb-0"
      >
        Next
      </button>
    </div>
  </section>

  <!-- SECTION 2- REMEMBER* -->
  <section v-show="currentStep === 2" class="section-box">
    <h4 class="font-medium mt-4 text-sm">Remember*</h4>
    <table class="w-96 text-sm remember-table leading-6 border-collapse">
      <tr>
        <td class="font-medium">If you see these words</td>
        <td class="font-medium">Press</td>
      </tr>
      <tr>
        <td class="leading-7">
          Typically Developing, Neurotypical, No Diagnosis
        </td>
        <td>
          <img src="../../../assets/LD_IBT/sad-face.png" class="w-32" />
        </td>
      </tr>
      <tr>
        <td class="leading-7">
          Learning Difficulties Slow Learner, Academically Challenged,
          Difficulties Learning
        </td>
        <td>
          <img src="../../../assets/LD_IBT/happy-face.png" class="w-32" />
        </td>
      </tr>
    </table>

    <div class="flex gap-3 items-start justify-start">
      <button
        @click="currentStep--"
        class="gradient-green gradient-btn py-6 mb-0"
        v-if="section === 0"
      >
        Back
      </button>
      <button @click="startTest" class="gradient-green gradient-btn py-6 mb-0">
        Start Test
      </button>
    </div>
  </section>

  <!-- TASK -->
  <section v-if="currentStep === 3" class="text-center">
    <h3 class="underline mb-0">{{ ibt_trials[section].section }}</h3>
    <section
      class="flex flex-wrap-reverse items-center flex-col justify-center gap-0"
    >
      <div class="mt-7 w-56 min-h-[83px] flex items-center justify-center">
        <!-- Stars and Crosses -->
        <div class="flex justify-center">
          <img
            src="../../../assets/LD_IBT/check-mark.png"
            alt="star"
            v-show="userGotStimulusRight"
            class="ibt-star h-20"
          />
          <img
            src="../../../assets/IT_faces/cross.jpg"
            alt="cross"
            class="cross"
            v-show="userGotStimulusWrong"
          />
        </div>

        <div
          class="flex-col items-center"
          :class="{ hide: testNotStarted || paused }"
        >
          <div
            v-for="trial in ibt_trials[section].trials"
            :key="trial.id"
            :style="{ display: trial.visibility }"
            class="h-auto"
          >
            <!-- Keyword -->
            <h3 class="font-semibold text-xl my-0 leading-10">
              {{ trial.keyword }}
            </h3>

            <!-- Clickers -->
            <img
              :src="
                getClickerImage(
                  trial.leftClickerFace == 'Happy'
                    ? 'happy-face.png'
                    : 'sad-face.png'
                )
              "
              alt="Left face"
              ref="leftFace"
              @click="() => handleClick('Left')"
              class="faceLeft ibt-icon"
            />
            <img
              :src="
                getClickerImage(
                  trial.rightClickerFace == 'Sad'
                    ? 'sad-face.png'
                    : 'happy-face.png'
                )
              "
              alt="Right face"
              @click="() => handleClick('Right')"
              class="faceRight ibt-icon"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { generateLdTrials } from "../../../modules/generateIbtTrials/generatIbtTrialsLD";
import {
  startTimer,
  handleAnswer,
} from "../../../modules/handleAnswers/handleIbtAnswersLd";
import router from "../../../router";
import { useStore } from "vuex";

let userGotStimulusRight = ref(false);
let userGotStimulusWrong = ref(false);
let paused = ref(false);
let currentTrial = ref(0);
let section = ref(0);
let testNotStarted = ref(true);
let currentStep = ref(1);

const store = useStore();
const props = defineProps(["position"]);
const emits = defineEmits(["finished"]);

let ibt_trials = [
  {
    section: "Practice",
    trials: generateLdTrials("Happy", "Sad", 6),
  },
  {
    section: "Main Round",
    trials: generateLdTrials("Happy", "Sad", 12),
  },
];

function getClickerImage(url) {
  return new URL(`../../../assets/LD_IBT/${url}`, import.meta.url).href;
}

function startTest() {
  currentStep.value++;
  setTimeout(() => {
    testNotStarted.value = false;
    startTimer();
  }, 500);
}

function finishedSection(fullyDone) {
  if (!fullyDone) {
    store.commit("storeLd", ibt_trials[0].trials);
  }

  if (fullyDone) {
    store.commit("storeLd", ibt_trials[1].trials);
    if (props.position === 1) {
      emits("finished");
      return;
    } else {
      router.push("/LD_IBT_Post_Survey");
    }
  }
  testNotStarted.value = true;
  currentTrial.value = 0;
  section.value++;
  paused.value = false;
  currentStep.value--;
}

function handleClick(userClicked) {
  let trial = ibt_trials[section.value].trials[currentTrial.value];
  let userChoice = "";
  if (userClicked === "Left") {
    userChoice = trial.leftClickerFace;
  }

  if (userClicked === "Right") {
    userChoice = trial.rightClickerFace;
  }

  handleAnswer(
    userChoice,
    testNotStarted,
    ibt_trials[section.value].trials,
    paused,
    currentTrial,
    userGotStimulusRight,
    userGotStimulusWrong,
    finishedSection,
    section,
    store
  );
}
</script>

<style scoped>
tr,
td,
th {
  /* padding: 15px; */
  border: solid 1px black;
  padding: 0px 10px;
}

.remember-table td {
  padding: 15px;
}

.ibt-icon {
  cursor: pointer;
}

.visibilityHidden {
  visibility: hidden;
}

.ibt-star,
.cross {
  width: 80px;
}
</style>
