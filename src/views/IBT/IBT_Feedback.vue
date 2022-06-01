<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="gender-feedback-main" v-else>
    <br />
    <button @click="routeToHome" class="return-to-home-btn">
      Go back to home page
    </button>
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
import * as storeData from "../../modules/storingDataIBT";
import { mapGetters } from "vuex";
export default {
  components: {
    contactExperience,
    groupTest,
  },

  data() {
    return {
      surveyNotComplete: true,
      wasGroupTest: false,
    };
  },

  computed: {
    ...mapGetters(["getUID", "getCurrentTest"]),
  },

  methods: {
    generateFeedbackMessage() {
      if (this.getCurrentTest === "IBT_Gender_Toy") {
        return [
          `
            When you were asked to associate a female toy with a female face, and a male toy with a male face,
            your accuracy was ${this.calculateAccuracy(
              1
            )}, and your speed was  ${this.calculateSpeed(1)}
        `,
          `
           When you were asked to associate a female toy with a male face, and a male toy with a female face
            your accuracy was ${this.calculateAccuracy(
              2
            )}, and your speed was  ${this.calculateSpeed(2)}
        `,
        ];
      } else if (this.getCurrentTest === "IBT_Black_White") {
        return [
          `
            When you were asked to associate images of black people with sad faces, and images of
            white people with happy faces, your accuracy was ${this.calculateAccuracy(
              1
            )}, and your speed was  ${this.calculateSpeed(1)}
        `,
          `
           When you were asked to associate images of black people with sad faces, and images of
            white people with happy faces, your accuracy was ${this.calculateAccuracy(
              2
            )}, and your speed was  ${this.calculateSpeed(2)}
        `,
        ];
      } else {
        return "error";
      }
    },

    calculateAccuracy(trialIndex) {
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trialIndex].forEach((trial) => {
        nsum += trial.accuracy;
      });
      nsum /= this.$store.state[this.getCurrentTest][trialIndex].length;
      return `${nsum}%`;
    },

    calculateSpeed(trialIndex) {
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trialIndex].forEach((trial) => {
        nsum += trial.ms;
      });
      nsum /= this.$store.state[this.getCurrentTest][trialIndex].length;
      return `${nsum}ms`;
    },

    surveyComplete(userData) {
      if (userData !== "opted-out") {
        storeContactExperience(userData, this.getCurrentTest, this);
      }
      this.surveyNotComplete = false;
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
      if (!this.wasGroupTest) {
        storeData.storeIBTIndividualData(this.getCurrentTest, this);
      }
      this.$router.push("/Home");
    },
  },
  mounted() {
    this.wasGroupTest = false;
    // console.log(this.$store.state[this.getCurrentTest]);
  },
};
</script>

<style scoped >
@import url("../../styles/Feedback_Page.css");
</style>