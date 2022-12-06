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
        opinionTitle1="Which pet do you think this boy would prefer to play with?"
        opinionTitle2="Which pet do you think this girl would prefer to play with?"
        userWouldPrefer="Which pet would you like to play with?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IBT_Cat_Dog"
        fileLocation="IAT_Cat_Dog"
        visible="false"
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
import "../../../styles/pre-test-survey.css";

import ExplicitAttitudesIbt from "../../../components/PreTestSurveyQuestions/ExplicitAttitudesIBT.vue";
import BasicQuestions from "../../../components/PreTestSurveyQuestions/BasicQuestions.vue";

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
      stereotypeImages1: ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5"],
      stereotypeImages2: ["Dog1", "Dog2", "Dog3", "Dog4", "Dog5"],

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
      this.$router.push("/IBT_Cat_Dog");
    },
  },

  mounted() {},
};
</script>
