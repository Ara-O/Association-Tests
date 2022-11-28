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
    <!-- BASIC QUESTIONS -->
    <div v-if="moveon" class="survey_container">
      <basic-questions :userData="userData" @next="next"></basic-questions>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <explicit-attitudes
        :userDataProp="userData"
        @progress_kb="startTest('Keyboard')"
        @progress_ts="startTest('Touchscreen')"
        @go-back-emit="moveon = true"
        opinionTitle1="Which job do you think this boy would prefer?"
        opinionTitle2="Which job do you think this girl would prefer?"
        userWouldPrefer="Which job would you prefer to choose?"
        :stereotypeImages1="stereotypeImages1"
        :stereotypeImages2="stereotypeImages2"
        currentTest="IAT_Gender_Occupation"
        fileLocation="IAT_Gender_Occupation"
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
      notAgreedToConsentForm: false,
      redirectToHome: false,
      surveySection: 0,
      moveon: true,
      stereotypeImages1: ["Doctor1", "Doctor2", "Doctor3", "Doctor4"],
      stereotypeImages2: ["Nurse1", "Nurse2", "Nurse3", "Nurse4"],
      userHasPutInUserID: false,
      uid: "",
      surveyQuestionsParent: [
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
      surveyQuestionsChild: [
        {
          question: "What is your child's birthdate?",
          name: "birthDate",
          inputType: "date",
        },
        {
          question: "Please indicate your child's gender?",
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
          question: "What is your child's ethnicity?",
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
          question: "Is English your child's first language?:",
          name: "englishAsFirstLanguage",
          inputType: "select",
          questionOptions: ["Yes", "No"],
        },
        {
          question: "If not, please state all languages they speak",
          name: "allLanguagesSpoken",
          inputType: "text",
        },
        {
          question:
            "How Likely is it that your child will enjoy playing with a girl gendered toy? (E.g Doll, kitchen playset, makeup, etc.)",
          name: "likelihoodOfChildPlayingWithGirlGenderedToy",
          inputType: "select",
          questionOptions: [
            "Very Unlikely",
            "Unlikely",
            "Neutral",
            "Likely",
            "Very Likely",
          ],
        },
        {
          question:
            "How Likely is it that your child will enjoy playing with a boy gendered toy? (E.g hardware, toy cars, footballs, etc.)",
          name: "likelihoodOfChildPlayingWithBoyGenderedToy",
          inputType: "select",
          questionOptions: [
            "Very Unlikely",
            "Unlikely",
            "Neutral",
            "Likely",
            "Very Likely",
          ],
        },
        {
          question: "Please name three toys your child enjoys to play with: ",
          name: "threeToysChildEnjoys",
          inputType: "text",
        },
      ],
      userDataParents: {},
      userDataChildren: {},
      userData: {},
    };
  },

  methods: {
    next(userdata) {
      this.userData = userdata;
      this.surveySection++;
      let myDiv = document.querySelector(".survey_container");
      myDiv.scrollTo(0, 0);
      this.moveon = false;
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

    startTest(version) {
      this.$store.state.userData = this.userData;
      if (version === "Keyboard") {
        this.$router.push("IAT_Gender_Occupation");
      }
      if (version === "Touchscreen") {
        this.$router.push("IAT_Gender_Occupation_Touchscreen");
      }
    },
  },

  mounted() {},
};
</script>

<style scoped>
@import url("../../../../styles/pre-test-survey.css");
</style>
