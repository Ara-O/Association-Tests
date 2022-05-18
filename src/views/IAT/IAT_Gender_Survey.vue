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
      <button @click="notAgreedToConsentForm = false" class="btn_survey">
        I agree
      </button>
      <button
        @click="notAgreedToConsentForm = redirectToHome = true"
        class="btn_survey"
      >
        I do not agree
      </button>
    </div>
  </section>
  <main v-else-if="!redirectToHome && !notAgreedToConsentForm">
    <!-- BASIC QUESTIONS -->
    <div v-if="moveon" class="survey_container">
      <h3>Basic questions</h3>
      <h4>How do you identify your gender</h4>
      <div class="image_examples">
        <img
          src="../../assets/app-icons/diverseimg.jpg"
          alt="Image"
          style="width: 273px"
        />
      </div>
      <div class="image_examples">
        <div class="gender_choice">
          <input
            type="radio"
            value="male"
            name="gender"
            v-model="userData.gender"
            id="male"
          />
          <label for="male">Male</label>
        </div>
        <div class="gender_choice">
          <input
            type="radio"
            value="female"
            name="gender"
            v-model="userData.gender"
            id="female"
          />
          <label for="female">Female</label>
        </div>
        <div class="gender_choice">
          <input
            type="radio"
            value="other"
            name="gender"
            v-model="userData.gender"
            id="other"
          />
          <label for="other">Other</label>
        </div>
      </div>
      <h4 style="margin-top: 35px">
        How would you identify your race/ethnicity
      </h4>

      <div class="ethnicities">
        <select
          name="ethnicity"
          id="ethnicity"
          v-model="userData.chosenethnicity"
        >
          <option value="none" selected disabled>Choose your ethnicity</option>
          <option value="American Indian/Alaska Native">
            American Indian/Alaska Native
          </option>
          <option value="Asian">Asian</option>
          <option value="Black/African American">Black/African American</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Native Hawaiian or Other Pacific Islander">
            Native Hawaiian or Other Pacific Islander
          </option>
          <option value="White">White</option>
        </select>
        <h4>Other, please specify</h4>
        <input type="text" class="ethnicity-input" v-model="chosenethnicity" />
      </div>
      <div class="progress">
        <router-link to="/IAT_Choose_Test" class="btn_basic_survey router-link">Back</router-link>
        <button @click="next" class=" btn_basic_survey">next</button>
      </div>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <h4>
        How warm or cold do you feel towards men? Use the slider:
        {{ this.userData.slider1 }}
      </h4>
      <input type="range" v-model="userData.slider1" min="1" max="100" />
      <h4>
        How warm or cold do you feel towards women? Use the slider:
        {{ this.userData.slider2 }}
      </h4>
      <input type="range" v-model="userData.slider2" min="1" max="100" />
      <br />
      <h4>
        I consider men to be
        <select v-model="userData.opinionofmen">
          <option value="Much more associated with career than">
            Much more associated with career than
          </option>
          <option value="Somewhat more associated with career than">
            Somewhat more associated with career than
          </option>
          <option value="Less associated with career than">
            Less associated with career than
          </option>
        </select>
        women
      </h4>
      <h4>
        I consider women to be
        <select v-model="userData.opinionofwomen">
          <option value="Much more associated with career than">
            Much more associated with career than
          </option>
          <option value="Somewhat more associated with career than">
            Somewhat more associated with career than
          </option>
          <option value="Less associated with career than">
            Less associated with career than
          </option></select
        >men
      </h4>
      <div class="buttons">
        <button
          @click="progress_ts"
          class="btn btn_basic_survey"
          style="margin-top: 5px; width: 195px"
        >
          Touch Screen Version
        </button>
        <br>
        <button
          @click="progress_kb"
          class="btn btn_basic_survey kb_btn"
          style="margin-top: 5px;width: 150px"
        >
          Keyboard Version
        </button>
      </div>
    </div>
  </main>
  <section v-if="redirectToHome" class="redirectToHome">
    <router-link to="/Home" class="btn_survey"
      >Click here to redirect to home</router-link
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
       notAgreedToConsentForm: true,
      redirectToHome: false,
      moveon: true,
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        opinionofmen: "",
        opinionofwomen: "",
      },
      chosenethnicity: "",
    };
  },

  methods: {
    next() {
      this.moveon = false;
    },

    progress_ts() {
      this.userData.chosenethnicity =
        this.chosenethnicity || this.userData.chosenethnicity;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Touchscreen");
    },

    progress_kb() {
      this.userData.chosenethnicity =
        this.chosenethnicity || this.userData.chosenethnicity;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender");
    },
  },
};
</script>

<style scoped>
@import url("../../styles/Pre_Test_Survey.css");
</style>