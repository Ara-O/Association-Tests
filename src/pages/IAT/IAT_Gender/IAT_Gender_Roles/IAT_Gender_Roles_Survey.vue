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
    <div
      v-else-if="moveon === false && finishedAllSurvey === false"
      class="survey_container"
    >
      <explicit-attitudes
        :userDataProp="userData"
        @progress_kb="progress_kb"
        @progress_ts="progress_ts"
        @go-back-emit="moveon = true"
        opinionTitle1="Which item do you think this boy would choose to work with?"
        opinionTitle2="Which item do you think this girl would choose to work with?"
        userWouldPrefer="Which item would you like to choose to use?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IAT_Gender_Roles"
        fileLocation="IAT_Gender_Roles"
      >
      </explicit-attitudes>
    </div>
    <section v-if="finishedAllSurvey">
      <router-link to="/IAT_Gender_Roles_Touchscreen" class="btn_survey"
        >Touchscreen Version</router-link
      >
    </section>
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
      finishedAllSurvey: false,
      stereotypeImages1: [
        "H01-cookerhood",
        "H02-cuttingboard",
        "H03-pan",
        "H04-refrigerator",
        "H05-spatula",
        "H06-washingsink",
      ],
      stereotypeImages2: [
        "W01-chair",
        "W02-computer",
        "W03-desk",
        "W04-filecabinet",
        "W05-pen",
        "W06-phone",
      ],
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
      this.finishedAllSurvey = true;

      // this.$router.push("IAT_Gender_Roles_Touchscreen");
    },

    progress_kb() {
      this.$store.state.userData = this.userData;
      this.finishedAllSurvey = true;

      // this.$router.push("IAT_Gender_Roles");
    },
  },

  mounted() {},
};
</script>

<style scoped>
@import url("../../../../styles/pre-test-survey.css");
</style>
