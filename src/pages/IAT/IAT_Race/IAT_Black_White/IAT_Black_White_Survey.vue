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
      <button @click="notAgreedToConsentForm = false" class="btn_survey">
        I agree
      </button>
    </div>
  </section>
  <main v-else-if="!redirectToHome && !notAgreedToConsentForm">
    <!-- BASIC QUESTIONS -->
    <div v-if="moveon" class="survey_container">
      <basic-questions :userData="userData" @next="next"></basic-questions>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <explicit-attitudes-race
        :userDataProp="userData"
        @progress_kb="progress_kb"
        @progress_ts="progress_ts"
        @goBackEmit="moveon = true"
        currentTest="IAT_Black_White"
        currentRace1="Black"
        currentRace2="White"
        :childrenImages1="childrenImages1"
        :childrenImages2="childrenImages2"
      >
      </explicit-attitudes-race>
    </div>
  </main>
  <section v-if="redirectToHome" class="redirectToHome">
    <router-link to="/Home" class="btn_survey"
      >Click here to redirect to home</router-link
    >
  </section>
</template>

<script>
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
import ExplicitAttitudesRace from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudesRace.vue";
export default {
  components: {
    BasicQuestions,
    ExplicitAttitudesRace,
  },
  data() {
    return {
      notAgreedToConsentForm: true,
      redirectToHome: false,
      moveon: true,
      userData: {},
      childrenImages1: [
        "B_CF01",
        "B_CF02",
        "B_CF03",
        "B_CM01",
        "B_CM02",
        "B_CM03",
      ],
      childrenImages2: [
        "W_CF01",
        "W_CF02",
        "W_CF03",
        "W_CM01",
        "W_CM02",
        "W_CM03",
      ],
    };
  },

  methods: {
    next(userdata) {
      this.userData = userdata;
      this.moveon = false;
    },

    progress_ts(userData) {
      this.userData = userData;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White_Touchscreen");
    },

    progress_kb(userData) {
      this.userData = userData;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White");
    },
  },
};
</script>

<style scoped>
@import url("../../../../styles/pre-test-survey.css");
</style>
