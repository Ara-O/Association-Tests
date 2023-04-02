<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="gender-feedback-main" v-else>
    <br />
    <div style="display: flex; column-gap: 20px">
      <button @click="routeToHome" class="return-to-home-btn">
        Go back to home page
      </button>
      <!-- Going to face matching -->
      <button @click="routeToFaceMatching" class="return-to-home-btn">
        Go To Face Matching Tests
      </button>
    </div>
    <img
      src="../../assets/App_Icons/congratulations.png"
      alt="Congratulations image"
      class="left-congratulations"
    />
    <h4 style="font-weight: 400">
      Congratulations! You have finished the test! This is your occupation test
      feedback!
    </h4>
    <img
      src="../../assets/App_Icons/congratulations.png"
      alt="Congratulations image"
      class="right-congratulations"
    />
    <div class="feedbacks">
      <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <div v-for="(n, index) in 2" :key="n">
            <img
              :src="getImg(getCurrentTestTrimmed(0, index))"
              alt="Feedback image"
            />
            <h3 v-if="index === 0" style="margin: 0px">+</h3>
          </div>
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ this.calculateAccuracy(0) }}
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ this.calculateSpeed(0) }}
          </h3>
        </div>
      </div>
      <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <div v-for="(n, index) in 2" :key="n">
            <img
              :src="getImg(getCurrentTestTrimmed(1, index))"
              alt="Feedback image"
            />
            <h3 v-if="index === 0" style="margin: 0px">+</h3>
          </div>
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ this.calculateAccuracy(1) }}
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ this.calculateSpeed(1) }}
          </h3>
        </div>
      </div>
    </div>
    <br />
    <div
      v-if="
        getCurrentTest === 'IAT_Cat_Dog' ||
        getCurrentTest === 'IAT_Cat_Dog_Touchscreen'
      "
      class="iat-cat-dog-feedback-text"
    >
      <h3 v-if="this.calculateSpeed(0) < this.calculateSpeed(1)">
        Your results suggest that you were faster at associating cat with sad
        face and dog with happy face. That might indicate a preference for dogs
        over cats!”
      </h3>
      <h3 v-if="this.calculateSpeed(0) > this.calculateSpeed(1)">
        Your results suggest that you were faster at associating dog with sad
        face and cat with happy face. That might indicate a preference for cats
        over dogs!”
      </h3>
      <h3 v-if="this.calculateSpeed(0) === this.calculateSpeed(1)">
        Your results suggest that you had a similar at associating dog with sad
        face and cat with happy face. That might indicate a preference for cats
        over dogs!”
      </h3>
    </div>
    <br />
    <group-test
      @storeDataWithExistingUniqueId="storeDataWithExistingUniqueId"
      @storeDataWithNewUniqueId="storeDataWithNewUniqueId"
    ></group-test>
  </main>
</template>

<script>
import contactExperience from "../contact_experience.vue";
import groupTest from "../../components/GroupTest.vue";
import storeContactExperience from "../../modules/storeContactExperience";
import * as storeData from "../../modules/storingData/storingDataOccupationIAT";
import { mapGetters } from "vuex";
import * as confetti from "canvas-confetti";
export default {
  components: {
    contactExperience,
    groupTest,
  },

  data() {
    return {
      surveyNotComplete: true,
      wasGroupTest: false,
      IAT_Gender_Occupation_Target_0: [
        "Clicker_Images/IAT_Gender_Occupation/Male_And_Doctor.png",
        "Clicker_Images/IAT_Gender_Occupation/Female_And_Nurse.png",
      ],
      IAT_Gender_Occupation_Target_1: [
        "Clicker_Images/IAT_Gender_Occupation/Male_And_Nurse.png",
        "Clicker_Images/IAT_Gender_Occupation/Female_And_Doctor.png",
      ],
    };
  },

  computed: {
    ...mapGetters(["getUID", "getCurrentTest"]),
  },

  methods: {
    getImg(img) {
      return new URL(`../../assets/${img}`, import.meta.url).href;
    },

    getCurrentTestTrimmed(target, index) {
      if (this.getCurrentTest.includes("_Touchscreen")) {
        let currentTest = this.getCurrentTest.replace("_Touchscreen", "");
        return this[`${currentTest}_Target_${target}`][index];
      } else {
        return this[`${this.getCurrentTest}_Target_${target}`][index];
      }
    },

    calculateAccuracy(trialIndex) {
      let trials = [3, 6];
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trials[trialIndex]].forEach(
        (trial) => {
          nsum += trial.accuracy;
        }
      );
      nsum /= this.$store.state[this.getCurrentTest][trials[trialIndex]].length;
      return `${nsum.toFixed(2)}%`;
    },

    calculateSpeed(trialIndex) {
      let trials = [3, 6];
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trials[trialIndex]].forEach(
        (trial) => {
          nsum += trial.ms;
        }
      );
      nsum /= this.$store.state[this.getCurrentTest][trials[trialIndex]].length;
      return `${nsum.toFixed(2)}ms`;
    },

    launchConfetti() {
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
    },

    surveyComplete(userData) {
      this.launchConfetti();
      if (userData !== "opted-out") {
        storeContactExperience(userData, this.getCurrentTest, this);
      }
      this.surveyNotComplete = false;
    },

    storeDataWithNewUniqueId(role, individualUid, uid) {
      storeData.storeIATGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        uid
      );

      this.wasGroupTest = true;
    },

    storeDataWithExistingUniqueId(role, individualUid, familyUniqueId) {
      storeData.storeIATGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        familyUniqueId
      );

      this.wasGroupTest = true;
    },

    routeToHome() {
      // if (!this.wasGroupTest) {
      //   // storeData.storeIATIndividualData(this.getCurrentTest, this);
      // }
      this.$router.push("/Home");
    },

    routeToFaceMatching() {
      // storeData.storeIATIndividualData(this.getCurrentTest, this);
      this.$router.push("/FM_Choose_Test");
    },
  },
  mounted() {
    //Storing questionnaire data
    storeData.storeQuestionnaireData(this);
    this.wasGroupTest = false;
  },
};
</script>

<style scoped>
@import url("../../styles/Feedback_Page.css");
</style>
