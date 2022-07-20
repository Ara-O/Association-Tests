<template>
  <section
    v-if="notAgreedToConsentForm && !redirectToHome"
    class="consent-form"
  >
    <div class="jumbotron">
      <h3>Pre-Test Consent Form</h3>
    </div>
    <br />
    <h4 class="consent">
      <b>Here is a quick consent form before you start the test!</b>
      <br /><br />
      <b>Key Information</b>
      <br /><br />
      The following is a short summary of this study to help you decide whether
      or not to be a part of this study. If you choose to participate in this
      study, you will be asked to complete an Implicit Association Test (IAT) in
      which you will pair words representing son and daughter with words
      representing the categories “Good” and “Bad”, and the categories “Money”
      and “Love”.

      <br /><br />
      <b> Why is this research being done?</b>
      <br /><br />
      To understand the association between different social groups (e.g., son
      and daughter) and the categories of “good” or “bad” and “money” or “love”
      using the Implicit Association Test (IAT; Greenwald, McGhee, and Schwartz,
      1998).

      <br /><br />
      <b> How long will the research last and what will I need to do?</b>
      <br /><br />

      We expect that you will be in this research study for 12-14 minutes. You
      will be asked to answer questions and to complete two Implicit Association
      Tests (IATs) in which you will pair words representing son and daughter
      with words representing the categories “Good” and “Bad”, and the
      categories “Money” and “Love”.

      <br /><br />
      <b>Will being in this study help me in any way? </b>
      <br /><br />

      There are no benefits to you from your taking part in this research, and
      we cannot promise any benefits to others from your taking part in this
      research. However, possible benefits to others include understanding your
      own implicit associations. Given the civil unrest in our country, this
      test may provide you with data that will make you think about how much or
      how little you personally are influenced by your society.

      <br /><br />
      <b>Data Collection and Privacy </b>
      <br /><br />

      During the session, your response will be automatically recorded. Data is
      stored securely on local servers. Personal information will be treated in
      compliance with data protection laws.

      <br /><br />
      <b>Use of Data by Study Researchers</b>
      <br /><br />

      Your data may be placed in publicly accessible data repositories in a
      completely anonymized form. Your data may also be used to publish
      summaries of the study results in academic journals or at educational
      meetings. You will not be directly identified in any publication or report
      of the study.

      <br /><br />
      <b>Rights of Research Subjects</b>
      <br /><br />

      Please contact the Committee on the Use of Human Subjects in Research at
      Harvard University, if you have any questions, concerns, suggestions, or
      complaints that have not been or cannot be addressed by the researcher, or
      want to report research-related harm.They can be reached at: 617-496-2847,
      44-R Brattle St, Suite 200, Cambridge, MA 02138. The committee's email is
      cuhs@fas.harvard.edu.

      <br /><br />
      <b>Researcher Contact Information</b>
      <br /><br />

      If you have any questions or concerns about this study, please contact
      research lead Miao Qian at miao_qian@fas.harvard.edu, or the faculty
      supervisor Mahzarin Banaji at mahzarin_banaji@harvard.edu. Feel free take
      a photo or a screenshot of the contact information, in case you would like
      to contact us with any questions or concerns.

      <br />
      Please double click below if you agree to participate in this study.
    </h4>
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
import BasicQuestions from "../../../../components/BasicQuestions.vue";
import ExplicitAttitudesRace from "../../../../components/ExplicitAttitudesRace.vue";
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
      childrenImages1: ["B_CF01", "B_CF02", "B_CF03", "B_CM01", "B_CM02", "B_CM03"],
      childrenImages2: ["W_CF01", "W_CF02", "W_CF03", "W_CM01", "W_CM02", "W_CM03"]
    };
  },

  methods: {
    next(userdata) {
      this.userData = userdata;
      this.moveon = false;
    },

    progress_ts(userData) {
      this.userData = userData
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White_Touchscreen");
    },

    progress_kb(userData) {
      this.userData=userData;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White");
    },
  },
};
</script>

<style scoped>
@import url("../../../../styles/Pre_Test_Survey.css");
</style>
