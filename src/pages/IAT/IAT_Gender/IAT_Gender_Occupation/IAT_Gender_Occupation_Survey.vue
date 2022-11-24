<template>
  <section
    v-if="notAgreedToConsentForm && !redirectToHome"
    class="consent-form"
  >
    <div class="jumbotron">
      <h3>Pre-Test Consent Form</h3>
    </div>
    <br />

    <object
      data="https://azure-alfi-90.tiiny.site/"
      type="application/pdf"
      height="860px"
      width="750px"
    >
      <div>No online PDF viewer installed</div>
    </object>
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

  <!-- SURVEY SECTION -->
  <main v-else-if="!redirectToHome && !notAgreedToConsentForm">
    <div v-if="!userHasPutInUserID" class="collect-user-id">
      <h3 style="font-size: 18px; font-weight: 500">Before we start!</h3>
      <h3 class="input-user-id-text">
        What is your unique testing ID? ( You will be given this by a lab
        assistant )
      </h3>
      <input type="text" class="user-id" v-model="uid" />
      <button @click="storeUserID" class="btn_basic_survey">next</button>
    </div>

    <!-- SURVEY CONTAINER -->
    <div class="survey_container" v-else>
      <div class="basic-questions" v-if="surveySection == 0">
        <img
          src="../../../../assets/App_Icons/diverseimg.jpg"
          alt="Image"
          style="width: 273px"
        />
        <h3 id="introduction-title">
          Dear Parents, Please complete the questionnaire below about you and
          your child's demographic information. Your answers to the questions
          will help us explore you and your child's perspective on different
          gendered domains (e.g., toys, occupations, subjects). The
          questionnaire below should take you anywhere between 10-15 minutes.
          Thank you for participating!
        </h3>
        <h4><b>Demographic Questionnaire</b></h4>
        <h4>
          <i
            ><em><strong>Parent Section</strong></em></i
          >
        </h4>

        <!-- SECTION -->
        <div v-for="question in surveyQuestions" :key="question.name">
          <label :for="question.name">{{ question.question }}</label>
          <br />
          <input
            v-if="question.inputType == 'date'"
            :type="question.inputType"
            :id="question.name"
            v-model="userDataParents[question.name]"
            class="input-form"
          />
          <input
            v-if="question.inputType == 'number'"
            :type="question.inputType"
            :id="question.name"
            v-model="userDataParents[question.name]"
            class="input-form"
          />
          <input
            v-if="question.inputType == 'text'"
            :type="question.inputType"
            :id="question.name"
            v-model="userDataParents[question.name]"
            class="input-form"
          />
          <select
            v-if="question.inputType == 'select'"
            :id="question.name"
            v-model="userDataParents[question.name]"
            class="input-select"
          >
            <option
              v-for="questionOption in question.questionOptions"
              :value="questionOption"
            >
              {{ questionOption }}
            </option>
          </select>
          <br />
          <input
            type="text"
            v-if="
              userDataParents[question.name] == 'Other' ||
              userDataParents[question.name] == 'Other religion/denomination'
            "
            placeholder="Please enter"
            v-model="userDataParents[question.name + '-other']"
            class="input-form input-form-other"
          />
        </div>
        <!-- CONTINUE -->
        <div class="progress">
          <!-- <router-link
            to="/IAT_Choose_Test"
            class="btn_basic_survey router-link"
            >Back</router-link
          > -->
          <button @click="next" class="btn_basic_survey">next</button>
        </div>
      </div>
      <div class="basic-questions" v-if="surveySection == 1">
        <h3>Basic questions</h3>
        <img
          src="../../../../assets/App_Icons/diverseimg.jpg"
          alt="Image"
          style="width: 273px"
        />
        <h4>Childrens</h4>
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
import ExplicitAttitudes from "../../../../components/PreTestSurveyQuestions/ExplicitAttitudes.vue";
import BasicQuestions from "../../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
export default {
  components: {
    ExplicitAttitudes,
    BasicQuestions,
  },

  data() {
    return {
      // !Change
      notAgreedToConsentForm: false,
      redirectToHome: false,
      surveySection: 0,
      // stereotypeImages1: ["blue1", "blue2", "blue3", "blue4"],
      // stereotypeImages2: ["pink1", "pink2", "pink3", "pink4"],
      userHasPutInUserID: false,
      uid: "",
      surveyQuestions: [
        {
          question: "What is your birthdate?",
          name: "birthDate",
          inputType: "date",
        },
        {
          question: "Please indicate your gender?",
          name: "gender",
          inputType: "select",
          questionOptions: [
            "Male",
            "Female",
            "Transgender",
            "Prefer not to say",
          ],
        },
        {
          question: "What is your ethnicity?",
          name: "ethnicity",
          inputType: "select",
          questionOptions: [
            "Aboriginal (Inuit, Métis, North American Indian)",
            "Arab/West Asian (e.g. Armenian, Egyptian, Iranian, Lebanese, Moroccan, etc.)",
            "Black (e.g., African, Haitian, Jamaican, Somali, etc.)",
            "East Asian (e.g. Japanese, Chinese, Korean, etc.)",
            "Latin American",
            "South Asian (e.g. India, Pakistan)",
            "South East Asian (e.g. Thailand, Singapore, etc.)",
            "White/Caucasian",
            "Other",
          ],
        },
        {
          question: "What is your total household annual income?",
          name: "annualIncome",
          inputType: "select",
          questionOptions: [
            "Less than $15,000",
            "$15,000 - $50k",
            "$50k - $100k",
            "Over $100k",
            "Prefer not to say",
          ],
        },
        {
          question:
            "What is your religion, if any? (You do not have to be practicing)",
          name: "religion",
          inputType: "select",
          questionOptions: [
            "Non-religious (including Agnostic, Atheist)",
            "Christian",
            "Jewish",
            "Muslim/Islam",
            "Buddhist",
            "Hindu",
            "Sikh",
            "Other religion/denomination",
            "Prefer not to say",
          ],
        },
        {
          question: "What is the highest education level you have obtained",
          name: "educationLevel",
          inputType: "select",
          questionOptions: [
            "Less than high school",
            "Completed high school",
            "Completed some of a college diploma or bachelor's degree",
            "Completed college diploma",
            "Completed bachelor's degree",
            "Completed professional degree (medical, law, etc.)",
            "Completed master's degree or PhD",
          ],
        },
        {
          question:
            "What was/is your profession? (If you are currently a university student, please write 'student')",
          name: "profession",
          inputType: "text",
        },
        {
          question:
            "What city or town do you live in? (Needed for urban, rural and suburban comparisons, Eg., Michigan, Detroit, Dearborn)",
          name: "cityOfResidence",
          inputType: "text",
        },
        {
          question: "Please indicate your Zip code: ",
          name: "zipCode",
          inputType: "text",
        },
        {
          question:
            "How many years have you lived in the United States for? (If you have lived here your whole life, this should match your age)",
          name: "yearsLivedInUnitedStates",
          inputType: "number",
        },
        {
          question: "Months:",
          name: "monthsLivedInUnitedStates",
          inputType: "number",
        },
        {
          question: "Is English your first language?:",
          name: "englishAsFirstLanguage",
          inputType: "select",
          questionOptions: ["Yes", "No"],
        },
        {
          question: "If not, please state all languages you speak",
          name: "allLanguagesSpoken",
          inputType: "text",
        },
      ],
      userDataParents: {},
      userDataChildren: {},
    };
  },

  methods: {
    next() {
      this.surveySection++;
    },

    storeUserID() {
      if (this.uid.trim() !== "") {
        this.$store.commit("changeUserID", this.uid);
        this.userHasPutInUserID = true;
      }

      //generate random number if they skip
      if (this.uid.trim() === "" && this.$store.getters.getUID === "") {
        this.$store.commit(
          "changeUserID",
          String(Math.floor(Math.random() * 10000))
        );
        this.userHasPutInUserID = true;
      }

      if (this.$store.getters.getUID !== "") {
        this.userHasPutInUserID = true;
      }
    },

    progress_ts() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Color_Touchscreen");
    },

    progress_kb() {
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Gender_Color");
    },
  },

  mounted() {},
};
</script>

<style scoped>
@import url("../../../../styles/pre-test-survey.css");
.collect-user-id {
  width: auto;
  max-width: 600px;
  max-height: 600px;
  height: auto;
  overflow: auto;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 21px 35px 35px;
}

.basic-questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-user-id-text {
  max-width: 400px;
  width: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

#introduction-title {
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
}

.input-select {
  max-width: 300px;
  width: auto;
  box-sizing: border-box;
  padding: 0px 20px;
}
.survey_container {
  padding: 45px;
}

.input-form {
  border-radius: 6px;
  margin-top: 15px;
  height: 25px;
  border: solid 1px #d0d0d0;
  text-align: center;
  /* box-shadow: -1px 1px 2px #eeeeeeb2, 0px 1px 2px rgb(164 164 164 / 95%); */
}

.input-form-other {
}

@media (max-width: 852px) {
  .basic-questions_title {
    font-size: 18px;
    margin: 38px 0px 20px;
  }
}
</style>
