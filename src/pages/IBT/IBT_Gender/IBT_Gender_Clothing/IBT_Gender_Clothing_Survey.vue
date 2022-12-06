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
      <explicit-attitudes-ibt
        :userDataProp="userData"
        @start_test="goToTest"
        @go-back-emit="moveon = true"
        opinionTitle1="Which clothing do you think this boy would prefer to wear?"
        opinionTitle2="Which clothing do you think this girl would prefer to wear?"
        userWouldPrefer="Which clothing would you like to wear?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IBT_Gender_Clothing"
        fileLocation="IAT_Gender_Clothing"
      >
      </explicit-attitudes-ibt>
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
import ExplicitAttitudesIbt from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudesIBT.vue";
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";

export default {
  components: {
    ExplicitAttitudesIbt,
    BasicQuestions,
  },

  data() {
    return {
      uid: "",
      redirectToHome: false,
      notAgreedToConsentForm: true,
      moveon: true,
      stereotypeImages1: ["CL_F01", "CL_F02", "CL_F03", "CL_F04"],
      stereotypeImages2: ["CL_M01", "CL_M02", "CL_M03", "CL_M04"],
      userData: {},
    };
  },

  methods: {
    moveToExplicitAttitudes(userData) {
      this.userData = userData;
      this.moveon = false;
    },
    next() {
      this.notAgreedToConsentForm = false;
    },

    goToTest() {
      this.$store.state.userData = this.userData;
      this.$router.push("/IBT_Gender_Clothing");
    },
  },

  mounted() {},
};
</script>
