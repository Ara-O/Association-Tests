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
      alt="Consent form"
      class="consent-form-image"
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
        opinionTitle1="Which item do you think this boy would choose to wear?"
        opinionTitle2="Which item do you think this girl would choose to wear?"
        userWouldPrefer="Which clothing would you like to choose to wear?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IAT_Gender_Clothing"
        fileLocation="IAT_Gender_Clothing"
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
      stereotypeImages1: ["CL_F01", "CL_F02", "CL_F03", "CL_F04"],
      stereotypeImages2: ["CL_M01", "CL_M02", "CL_M03", "CL_M04"],
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
      this.$router.push("IAT_Gender_Clothing_Touchscreen");
    },

    progress_kb() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Clothing");
    },
  },

  mounted() {},
};
</script>

<style scoped>
@import url("../../../../styles/pre-test-survey.css");
</style>
