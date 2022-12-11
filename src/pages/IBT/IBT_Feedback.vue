<!-- Get data from vuex
loop through the data, if it sees that the section is section1, store
that under congruency data, if the sectrion is section2, store that under incongruency data
now put that all inside an array with the data of the image necessary -->
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
      <button @click="routeToFaceMatching" class="return-to-home-btn">
        Go to Face Matching Tests
      </button>
    </div>
    <img
      src="../../assets/App_Icons/congratulations.png"
      alt="Congratulations image"
      class="left-congratulations"
    />
    <h4 style="font-weight: 400">
      Congratulations! You have finished the test!
    </h4>
    <img
      src="../../assets/App_Icons/congratulations.png"
      alt="Congratulations image"
      class="right-congratulations"
    />
    <!-- <h4>Congratulations! You have finished the test.</h4> -->
    <div class="feedbacks">
      <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <img
            :src="getImg(congruencyTest.matchingImage1)"
            alt="Feedback image"
          />
          <h3 style="margin: 0px">+</h3>
          <img
            :src="getImg(congruencyTest.matchingImage2)"
            alt="Feedback image"
          />
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ congruencyTest.averageAccuracy.toFixed(2) }}%
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ congruencyTest.averageSpeed.toFixed(2) }}ms
          </h3>
        </div>
      </div>

      <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <img
            :src="getImg(incongruencyTest.matchingImage1)"
            alt="Feedback image"
          />
          <h3 style="margin: 0px">+</h3>
          <img
            :src="getImg(incongruencyTest.matchingImage2)"
            alt="Feedback image"
          />
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ incongruencyTest.averageAccuracy.toFixed(2) }}%
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ incongruencyTest.averageSpeed.toFixed(2) }}ms
          </h3>
        </div>
      </div>
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
import * as storeData from "../../modules/storingData/storingDataIBT";
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
      testOrder: "",
      congruencyTest: {},
      incongruencyTest: {},
      IBT_Gender_Toy_Target_0: [
        "Clicker_Images/IAT_Gender_Toy/Male_And_Male_Toy.png",
        "Clicker_Images/IAT_Gender_Toy/Female_And_Female_Toy.png",
      ],
      IBT_Gender_Toy_Target_1: [
        "Clicker_Images/IAT_Gender_Toy/Male_And_Female_Toy.png",
        "Clicker_Images/IAT_Gender_Toy/Female_And_Male_Toy.png",
      ],
      IBT_Gender_Clothing_Target_0: [
        "Clicker_Images/IAT_Gender_Clothing/Male_And_Male_Clothing.png",
        "Clicker_Images/IAT_Gender_Clothing/Female_And_Female_Clothing.png",
      ],
      IBT_Gender_Clothing_Target_1: [
        "Clicker_Images/IAT_Gender_Clothing/Male_And_Female_Clothing.png",
        "Clicker_Images/IAT_Gender_Clothing/Female_And_Male_Clothing.png",
      ],
      IBT_Gender_Subject_Target_0: [
        "Clicker_Images/IAT_Gender_Subject/Male_And_Math.png",
        "Clicker_Images/IAT_Gender_Subject/Female_And_Reading.png",
      ],
      IBT_Gender_Subject_Target_1: [
        "Clicker_Images/IAT_Gender_Subject/Male_And_Reading.png",
        "Clicker_Images/IAT_Gender_Subject/Female_And_Math.png",
      ],
      IBT_Gender_Roles_Target_0: [
        "Clicker_Images/IAT_Gender_Roles/Male_And_Office.png",
        "Clicker_Images/IAT_Gender_Roles/Female_And_Kitchen.png",
      ],
      IBT_Gender_Roles_Target_1: [
        "Clicker_Images/IAT_Gender_Roles/Male_And_Kitchen.png",
        "Clicker_Images/IAT_Gender_Roles/Female_And_Office.png",
      ],
      IBT_Gender_Color_Target_0: [
        "Clicker_Images/IAT_Gender_Color/Male_And_Blue.png",
        "Clicker_Images/IAT_Gender_Color/Female_And_Pink.png",
      ],
      IBT_Gender_Color_Target_1: [
        "Clicker_Images/IAT_Gender_Color/Male_And_Pink.png",
        "Clicker_Images/IAT_Gender_Color/Female_And_Blue.png",
      ],
      IBT_Black_White_Target_0: [
        "Clicker_Images/IAT_Black_White/White_And_Happy_Face.png",
        "Clicker_Images/IAT_Black_White/Black_And_Sad_Face.png",
      ],
      IBT_Black_White_Target_1: [
        "Clicker_Images/IAT_Black_White/White_And_Sad_Face.png",
        "Clicker_Images/IAT_Black_White/Black_And_Happy_Face.png",
      ],
      IBT_Cat_Dog_Target_0: [
        "Clicker_Images/IAT_Cat_Dog/Cat_And_Sad_Face.png",
        "Clicker_Images/IAT_Cat_Dog/Dog_And_Happy_Face.png",
      ],
      IBT_Cat_Dog_Target_1: [
        "Clicker_Images/IAT_Cat_Dog/Cat_And_Happy_Face.png",
        "Clicker_Images/IAT_Cat_Dog/Dog_And_Sad_Face.png",
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
      return this[`${this.getCurrentTest}_Target_${target}`][index];
    },

    calculateAccuracyNew() {
      let ibtDataFromVuex = this.$store.state["ibtDataForFeedbackPage"];
      //If the first test is section 2, this means that the incongruency test went first
      if (ibtDataFromVuex[0].section.includes("2")) {
        this.testOrder = "incongruencyFirst";
      } else {
        this.testOrder = "congruencyFirst";
      }

      //the two main trials
      let mainTrials = [1, 3];

      //Loops through trials 1 and 3 to avoid repeated code
      mainTrials.forEach((trialNumber) => {
        //Gets the current tests from the mainTrials index and gets the accuracy
        let ibtTrialData = this.$store.state[this.getCurrentTest];
        let trialAccuracysum = 0;
        ibtTrialData[trialNumber].forEach((trial) => {
          trialAccuracysum += trial.accuracy;
        });
        trialAccuracysum /= ibtTrialData[trialNumber].length;

        //If the test has incongruencies set first, set the trialaccuracysum to the
        //appropriate data place
        if (this.testOrder === "incongruencyFirst") {
          this.incongruencyTest.averageAccuracy = trialAccuracysum;
          this.incongruencyTest.matchingImage1 = this.getCurrentTestTrimmed(
            1,
            0
          );
          this.incongruencyTest.matchingImage2 = this.getCurrentTestTrimmed(
            1,
            1
          );
        } else if (this.testOrder === "congruencyFirst") {
          this.congruencyTest.averageAccuracy = trialAccuracysum;
          this.congruencyTest.matchingImage1 = this.getCurrentTestTrimmed(0, 0);
          this.congruencyTest.matchingImage2 = this.getCurrentTestTrimmed(0, 1);
        }

        if (this.testOrder == "incongruencyFirst") {
          this.testOrder = "congruencyFirst";
        } else {
          this.testOrder = "incongruencyFirst";
        }
      });
    },

    calculateSpeedNew() {
      let ibtDataFromVuex = this.$store.state["ibtDataForFeedbackPage"];
      if (ibtDataFromVuex[0].section.includes("2")) {
        this.testOrder = "incongruencyFirst";
      } else {
        this.testOrder = "congruencyFirst";
      }

      let mainTrials = [1, 3];
      mainTrials.forEach((trialNumber) => {
        let ibtTrialData = this.$store.state[this.getCurrentTest];
        let trialReactionTimesum = 0;
        ibtTrialData[trialNumber].forEach((trial) => {
          trialReactionTimesum += trial.reactionTime;
        });
        trialReactionTimesum /= ibtTrialData[trialNumber].length;

        //If the test has incongruencies set first, set the trialReactionTimesum to the
        //appropriate data place
        if (this.testOrder === "incongruencyFirst") {
          this.incongruencyTest.averageSpeed = trialReactionTimesum;
        } else if (this.testOrder === "congruencyFirst") {
          this.congruencyTest.averageSpeed = trialReactionTimesum;
        }

        if (this.testOrder == "incongruencyFirst") {
          this.testOrder = "congruencyFirst";
        } else {
          this.testOrder = "incongruencyFirst";
        }
      });
    },

    surveyComplete(userData) {
      this.launchConfetti();
      if (userData !== "opted-out") {
        storeContactExperience(userData, this.getCurrentTest, this);
      }
      this.surveyNotComplete = false;
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

    storeDataWithNewUniqueId(role, individualUid, uid) {
      // console.log(role, individualUid, uid);
      storeData.storeIBTGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        uid
      );

      this.wasGroupTest = true;
    },

    storeDataWithExistingUniqueId(role, individualUid, familyUniqueId) {
      // console.log(role, individualUid, familyUniqueId);
      storeData.storeIBTGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        familyUniqueId
      );

      this.wasGroupTest = true;
    },

    routeToHome() {
      this.$router.push("/Home");
    },

    routeToFaceMatching() {
      this.$router.push("/FM_Choose_Test");
    },
  },
  mounted() {
    this.wasGroupTest = false;
    this.calculateAccuracyNew();
    this.calculateSpeedNew();
    // console.log(this.$store.state[this.getCurrentTest]);
  },
};
</script>

<style scoped>
@import url("../../styles/Feedback_Page.css");
</style>
