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
      <explicit-attitudes
        :userDataProp="userData"
        @progress_kb="progress_kb"
        @progress_ts="progress_ts"
        @go-back-emit="moveon = true"
        opinionTitle1="Which toy do you think this boy would choose to play?"
        opinionTitle2="Which toy do you think this girl would choose to play?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        userWouldPrefer="Which toy would you like to choose to play with?"
        currentTest="IAT_Gender_Toy"
        fileLocation="IAT_Gender_Toy"
      >
      </explicit-attitudes>
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
import ExplicitAttitudes from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudes.vue";
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
export default {
  components: {
    ExplicitAttitudes,
    BasicQuestions,
  },

  data() {
    return {
      notAgreedToConsentForm: true,
      redirectToHome: false,
      moveon: true,
      stereotypeImages1: ["T_F01", "T_F02", "T_F03", "T_F04", "T_F05"],
      stereotypeImages2: ["T_M01", "T_M02", "T_M03", "T_M04", "T_M05"],
      userData: {},
    };
  },

  methods: {
    next(userdata) {
      this.userData = userdata;
      this.moveon = false;
    },

    progress_ts() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Toy_Touchscreen");
    },

    progress_kb() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Toy");
    },
  },
};
</script>

<!-- <style scoped src="../../../../styles/pre-test-survey.css">
</style> -->
