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
      src="../../../assets/app_icons/consent-form.png"
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
        opinionTitle1="Which pet do you think this boy would prefer to play with?"
        opinionTitle2="Which pet do you think this girl would prefer to play with?"
        userWouldPrefer="Which pet would you like to play with?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IAT_Cat_Dog"
        fileLocation="IAT_Cat_Dog"
        visible="false"
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
import ExplicitAttitudes from "../../../components/PreTestSurveyQuestions/ExplicitAttitudes.vue";
import BasicQuestions from "../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
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
      stereotypeImages1: ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5"],
      stereotypeImages2: ["Dog1", "Dog2", "Dog3", "Dog4", "Dog5"],

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
      this.$router.push("IAT_Cat_Dog_Touchscreen");
    },

    progress_kb() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Cat_Dog");
    },
  },
};
</script>

<style scoped>
@import url("../../../styles/pre-test-survey.css");
</style>
