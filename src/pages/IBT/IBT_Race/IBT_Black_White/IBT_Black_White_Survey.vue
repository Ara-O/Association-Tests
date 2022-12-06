<template>
  <section
    v-if="notAgreedToConsentForm && !redirectToHome"
    class="consent-form"
  >
    <div class="jumbotron">
      <h3>Pre-Test Consent Form</h3>
    </div>
    <br />
    <img
      src="../../../../assets/app_icons/consent-form.png"
      class="consent-form-image"
      alt="Consent form image"
    />
    <br />
    <div class="arrange-btns">
      <button
        @click="notAgreedToConsentForm = redirectToHome = true"
        class="btn_survey"
      >
        I do not agree
      </button>
      <button @click="next" class="btn_survey">I agree</button>
    </div>
  </section>

  <main v-else-if="!redirectToHome && !notAgreedToConsentForm">
    <div v-if="moveon" class="survey_container">
      <basic-questions
        :userData="userData"
        @next="moveToExplicitAttitudes"
      ></basic-questions>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <explicit-attitudes-ibt-race
        :userDataProp="userData"
        @start_test="goToTest"
        @goBackEmit="moveon = true"
        currentTest="IBT_Black_White"
        currentRace1="Black"
        currentRace2="White"
        :raceImages1="raceImages1"
        :raceImages2="raceImages2"
      >
      </explicit-attitudes-ibt-race>
    </div>
  </main>
  <section v-if="redirectToHome" class="redirectToHome">
    <router-link to="/Home" class="btn_survey"
      >Click here to redirect to home</router-link
    >
  </section>
</template>

<script>
import "../../../../styles/pre-test-survey.css";
import ExplicitAttitudesIbtRace from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudesIBTRace.vue";
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";

export default {
  components: {
    ExplicitAttitudesIbtRace,
    BasicQuestions,
  },

  data() {
    return {
      uid: "",
      redirectToHome: false,
      notAgreedToConsentForm: true,
      moveon: true,
      userData: {},
      raceImages1: ["B_CF01", "B_CF02", "B_CF03", "B_CM01", "B_CM02", "B_CM03"],
      raceImages2: ["W_CF01", "W_CF02", "W_CF03", "W_CM01", "W_CM02", "W_CM03"],
    };
  },

  methods: {
    next() {
      this.notAgreedToConsentForm = false;
    },
    moveToExplicitAttitudes(userData) {
      this.userData = userData;
      this.moveon = false;
    },

    goToTest() {
      this.$store.state.userData = this.userData;
      this.$router.push("/IBT_Black_White");
    },
  },

  mounted() {},
};
</script>
