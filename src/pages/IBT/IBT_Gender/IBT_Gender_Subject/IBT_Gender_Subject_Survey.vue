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
        opinionTitle1="Which item do you think this boy would be better at?"
        opinionTitle2="Which item do you think this girl would be better at?"
        userWouldPrefer="Which subject would you like to choose to study?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IBT_Gender_Subject"
        fileLocation="IAT_Gender_Subject"
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
import ExplicitAttitudesIbt from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudesIBT.vue";
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
import "../../../../styles/pre-test-survey.css";

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
      stereotypeImages1: ["Math_01", "Math_02", "Math_03", "Math_04"],
      stereotypeImages2: [
        "Reading_01",
        "Reading_02",
        "Reading_03",
        "Reading_04",
      ],
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
      this.$router.push("/IBT_Gender_Subject");
    },
  },

  mounted() {},
};
</script>
