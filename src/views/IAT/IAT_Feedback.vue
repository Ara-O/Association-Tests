<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="gender-feedback-main" v-else>
    <br />
    <button @click="routeToHome" class="return-to-home-btn">Go back to home page</button>
    <h4>Here's your feedback!</h4>
    <div class="feedbacks">
      <div
        class="feedbacksect"
        v-for="feedback in generateFeedbackMessage()"
        :key="feedback.id"
      >
        <h3>{{ feedback }}</h3>
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
import * as storeData from "../../modules/storingDataIAT";
import { mapGetters } from "vuex";
export default {
  components: {
    contactExperience,
    groupTest,
  },

  data() {
    return {
      surveyNotComplete: true,
      wasGroupTest: false
    };
  },

  computed: {
    ...mapGetters(["getUID", "getCurrentTest"]),
 
  },

  methods: {
       generateFeedbackMessage() {
      if (
        this.getCurrentTest === "IAT_Gender_Toy" ||
        this.getCurrentTest === "IAT_Gender_Toy_Touchscreen"
      ) {
        return [
          `
            When you were asked to associate male with career, and female with home,
            your accuracy was ${this.calculateAccuracy(
              0
            )}, and your speed was  ${this.calculateSpeed(0)}
        `,
          `
            When you were asked to associate male with home, and female with career
            your accuracy was ${this.calculateAccuracy(
              1
            )}, and your speed was  ${this.calculateSpeed(1)}
        `,
        ];
      } else if (
        this.getCurrentTest === "IAT_Black_White" ||
        this.getCurrentTest === "IAT_Black_White_Touchscreen"
      ) {
        return [
          `
            When you were asked to associate images of black people with sad faces, and images of
            white people with happy faces, your accuracy was ${this.calculateAccuracy(
              0
            )}, and your speed was  ${this.calculateSpeed(0)}
        `,
          `
           When you were asked to associate images of black people with sad faces, and images of
            white people with happy faces, your accuracy was ${this.calculateAccuracy(
              1
            )}, and your speed was  ${this.calculateSpeed(1)}
        `,
        ];
      } else {
        return "error";
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
      return `${nsum}%`;
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
      return `${nsum}ms`;
    },

    surveyComplete(userData) {
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

      this.wasGroupTest = true
    },

    routeToHome() {
      if(!this.wasGroupTest){
        storeData.storeIATIndividualData(this.getCurrentTest, this);
      }
      this.$router.push("/Home");
    },
  },
  mounted() {
    this.wasGroupTest = false
    // console.log(this.$store.state[this.getCurrentTest]);
  },
};
</script>

<style scoped >
@import url("../../styles/Feedback_Page.css")
</style>