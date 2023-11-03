<template>
  <section class="main">
    <!-- Email section -->
    <section v-show="currentStep === Step.AskForEmailAddress">
      <div class="survey-box">
        <h3 style="font-weight: 500">
          Please provide us with your email address/phone number
        </h3>
        <h4 style="font-size: 14px; line-height: 30px; font-weight: 300">
          Note: Your email address/phone number will be used solely for payment purposes for
          taking part in this study and will not be used to identify you
          individually. Your participation in this study will remain anonymous.
        </h4>
        <input type="text" name="user-email" v-model="ld_email" id="email" class="ld-user-email"
          placeholder="Enter email address/phone number here" />
        <br />
        <button @click="finishEmailSection">Next</button>
      </div>
    </section>

    <!-- Test explanation section -->
    <section v-show="currentStep === Step.ExplainTest" class="explain-test-section">
      <div>
        <h3 style="font-weight: 600">Welcome to the test</h3>
      </div>
      <div>
        <img src="../../../assets/LD_IBT/test-introduction-image.png" alt="Test intro image" class="test-intro-image" />
        <h4 class="test-intro-message">
          <span style="font-weight: 600">Instructions: </span>In this study you
          will complete an Implicit Bias Test (IBT) in which you will be asked
          to sort words into groups as fast as you can. In addition, there are
          some standard demographic questions and questions about your beliefs,
          attitudes, and opinions. This study will take around 20 minutes to
          complete, and you will receive your results for the Implicit Bias
          Test, along with an explanation of its meaning, upon completion of all
          questionnaires.
        </h4>
      </div>
      <div class="test-buttons">
        <button @click="currentStep--">Back</button>
        <button @click="currentStep++">Next</button>
      </div>
    </section>

    <!-- Survey section 1 -->
    <section v-show="currentStep === Step.ShowBackgroundFormSurveyOne" class="survey-section">
      <h3 style="font-weight: 500">Background Form</h3>
      <h4 style="font-size: 15px">Please answer the following questions</h4>
      <form @submit.prevent="currentStep++">
        <label for="country">1. From which country/countries did you or your family originally
          arrive in Canada?</label>
        <h4 style="margin-top: 30px">
          Note: List all countries you have lived in before coming to Canada
          starting with the last country you were residing in
        </h4>

        <div class="full centered">
          <label for="province">Province (if applicable): </label>
          <input type="text" id="province" v-model="surveyData.province" placeholder="Province" />
        </div>

        <div class="full centered space-top">
          <label for="city">City: </label>
          <input type="text" id="city" v-model="surveyData.city" placeholder="City" />
        </div>

        <h4>2. When did you or your family come to Canada?</h4>
        <div class="full centered">
          <label for="you">You: </label>
          <input type="text" id="you" v-model="surveyData.whenUserMovedToCanada" placeholder="Year" />
        </div>

        <div class="full centered space-top">
          <label for="spouse-1">Your spouse (if applicable): </label>
          <input type="text" id="spouse-1" placeholder="Year" v-model="surveyData.whenSpouseMovedToCanada" />
        </div>

        <div class="full centered space-top">
          <label for="parents">Your parents (if applicable): </label>
          <input type="text" id="parents" placeholder="Year" v-model="surveyData.whenParentsMovedToCanada" />
        </div>

        <h4>3. How long have you or your family been in Canada?</h4>

        <div class="full centered">
          <label for="you-years-in-canada">You: </label>
          <input type="text" id="you-years-in-canada" v-model="surveyData.howLongUserHasBeenInCanada"
            placeholder="Years" />
        </div>

        <div class="full centered space-top">
          <label for="family-years-in-canada">Your family: </label>
          <input type="text" id="family-years-in-canada" v-model="surveyData.howLongFamilyHasBeenInCanada"
            placeholder="Years" />
        </div>
        <button type="submit" style="margin-top: 30px">Next</button>
      </form>
    </section>

    <!-- SURVEY SECTION 2 -->
    <section v-show="currentStep === Step.ShowBackgroundFormSurveyTwo" class="survey-section">
      <h3>Background Form</h3>
      <h4>Please answer the following questions</h4>
      <div class="form h-full">
        <label for="immigrant-status">4. What is your immigrant status in Canada</label>
        <select id="immigrant-status" v-model="surveyData.immigrantStatus">
          <option value="Canadian Citizen">Canadian Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Refugee">Refugee</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Other">Other</option>
        </select>

        <label for="what-user-considers-themselves">5. Do you consider yourself to be:</label>
        <select id="what-user-considers-themselves" v-model="surveyData.userGeneration">
          <option value="First generation immigrant (that is, you were born outside of Canada)">
            First generation immigrant (that is, you were born outside of
            Canada)
          </option>
          <option
            value="Second generation immigrant  (I was born in Canada and at least one of my parents was born outside Canada) ">
            Second generation immigrant (I was born in Canada and at least one
            of my parents was born outside Canada)
          </option>
          <option value="Third generation immigrant (I and both my parents were born in Canada)">
            Third generation immigrant (I and both my parents were born in
            Canada)
          </option>
        </select>

        <label for="highest-education-level">6. Please select the highest level of education that you have
          attained</label>
        <select id="highest-education-level" v-model="surveyData.usersHighestEducationLevel">
          <option value="Some school">Some school</option>
          <option value="Completed high school diploma and a professional qualification not from a college or university">
            Completed high school diploma and a professional qualification not
            from a college or university.
          </option>
          <option value="Completed a college diploma">
            Completed a college diploma.
          </option>
          <option value="Completed an undergraduate university degree">
            Completed an undergraduate university degree.
          </option>
          <option value="Completed one or more graduate degrees (Masters/or Ph.D.)">
            Completed one or more graduate degrees (Masters/or Ph.D.).
          </option>
          <option value="Other (please specify)">
            Other (please specify)
          </option>
        </select>

        <input type="text" class="mt-3" v-if="surveyData.usersHighestEducationLevel === 'Other (please specify)'"
          placeholder="Specify here" v-model="surveyData.usersHighestEducationLevelOther">

        <label for="spouse-highest-education-level">7. What is your spouse's highest educational level</label>
        <select id="spouse-highest-education-level" v-model="surveyData.spouseHighestEducationLevel">
          <option value="Some school">Some school</option>
          <option value="Completed high school diploma and a professional qualification not from a college or university">
            Completed high school diploma and a professional qualification not
            from a college or university.
          </option>
          <option value="Completed a college diploma">
            Completed a college diploma.
          </option>
          <option value="Completed an undergraduate university degree">
            Completed an undergraduate university degree.
          </option>
          <option value="Completed one or more graduate degrees (Masters/or Ph.D.)">
            Completed one or more graduate degrees (Masters/or Ph.D.).
          </option>
          <option value="Other (please specify)">
            Other (please specify)
          </option>
        </select>
        <input type="text" class="mt-3" v-if="surveyData.spouseHighestEducationLevel === 'Other (please specify)'"
          placeholder="Specify here" v-model="surveyData.spouseHighestEducationLevelOther">


        <div class="full">
          <label for="occupation">
            8. What is your occupation in Canada?
          </label>
          <input type="text" id="occupation" v-model="surveyData.userOccupationInCanada" placeholder="Occupation" />
        </div>

        <div class="full">
          <label for="occupation-2">
            If you are a new
            Canadian and were employed before immigrating to Canada, please
            indicate your occupation in your former country </label>
          <input type="text" id="occupation-2" placeholder="Occupation"
            v-model="surveyData.userOccupationInFormerCountry" />
        </div>
        <div class=" test-buttons" style="margin-top: -10px">
          <button @click="currentStep--">Back</button>
          <button @click="currentStep++">Next</button>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section v-show="currentStep === Step.ShowBackgroundFormSurveyThree" class="survey-section">
      <div class="form">
        <h3>Background Form</h3>
        <h4>Please answer the following questions</h4>
        <div class="full centered">
          <label for="main-language">9. What is the main language you use at home on a daily basis?
          </label>
          <select id="main-language" v-model="surveyData.mainLanguageUsedAtHome">
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Arabic">Arabic</option>
            <option value="Portugese">Portugese</option>
            <option value="Japanese">Japanese</option>
            <option value="Hindi">Hindi</option>
            <option value="Chinese">Chinese</option>
            <option value="Korean">Korean</option>
            <option value="Bengali">Bengali</option>
            <option value="Italian">Italian</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>
        <br />
        <div class="full centered space-top">
          <label for="other-language">10. Do you use any other language/languages besides the home
            language indicated above? If yes, what is/are the additional
            language/languages you use?
          </label>
          <input type="text" id="other-languages" v-model="surveyData.otherLanguagesUsedAtHome">
        </div>
        <br />
        <div class="full centered space-top">
          <label>11. Are you aware of a child/adolescent in your community (for
            example, among relatives, friends, neighbors, own religious or
            ethnic groups that you are currently a part of) who is struggling
            with their studies/learning process at school?
          </label>
          <select v-model="surveyData.userIsAwareOfStrugglingChildInCommunity">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <br />
        <div class="survey-table space-top">
          <table class="border-collapse">
            <tr>
              <td></td>
              <td>Receives support from home</td>
              <td>Receives support from school</td>
              <td>Receives support from community</td>
            </tr>
            <tr>
              <td>Yes</td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
            <tr>
              <td>No</td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
              <td><input type="checkbox" name="" id="" /></td>
            </tr>
          </table>
        </div>
        <br />
        <div class="full centered space-top">
          <label>12. Are you aware of a child/adolescent in your country of origin
            (for example, among relatives, friends, neighbors, own religious or
            ethnic groups that you are currently a part of) who was struggling
            with their studies/learning process at school?
          </label>
          <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label>
            If yes as far as you know, did this child receive any help at home,
            school and/or community?
          </label>
          <div class="survey-table">
            <table>
              <tr>
                <td></td>
                <td>Receives support from home</td>
                <td>Receives support from school</td>
                <td>Receives support from community</td>
              </tr>
              <tr>
                <td>Yes</td>
                <td><input type="checkbox" name="" id="" /></td>
                <td><input type="checkbox" name="" id="" /></td>
                <td><input type="checkbox" name="" id="" /></td>
              </tr>
              <tr>
                <td>No</td>
                <td><input type="checkbox" name="" id="" /></td>
                <td><input type="checkbox" name="" id="" /></td>
                <td><input type="checkbox" name="" id="" /></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="test-buttons" style="margin-top: 10px">
          <button @click="currentStep--">Back</button>
          <button @click="startTest">Start Test</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

enum Step {
  AskForEmailAddress = 1,
  ExplainTest,
  ShowBackgroundFormSurveyOne,
  ShowBackgroundFormSurveyTwo,
  ShowBackgroundFormSurveyThree,
  StartTest,
}

let currentStep = ref<number>(5);

let ld_email = ref<string>("");

let surveyData = ref({
  province: "",
  city: "",
  whenUserMovedToCanada: "",
  whenSpouseMovedToCanada: "",
  whenParentsMovedToCanada: "",
  howLongUserHasBeenInCanada: "",
  howLongFamilyHasBeenInCanada: "",
  // Section 2
  immigrantStatus: "",
  userGeneration: "",
  usersHighestEducationLevel: "",
  usersHighestEducationLevelOther: "",
  spouseHighestEducationLevel: "",
  spouseHighestEducationLevelOther: "",
  userOccupationInCanada: "",
  userOccupationInFormerCountry: "",
  // Sectuin 3
  mainLanguageUsedAtHome: "",
  otherLanguagesUsedAtHome: "",
  userIsAwareOfStrugglingChildInCommunity: ""
})


const store = useStore();
const router = useRouter();

function startTest() {
  router.push("/LD_IBT");
}

function finishEmailSection() {
  store.commit("storeLdPointOfContact", ld_email.value);
  currentStep.value++;
}
</script>

<style scoped>
* {
  /* font-family: "Times New Roman", Times, serif; */
  font-family: "Poppins";
}

.main {
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}

.survey-box {
  box-shadow: 0px 2px 4px -1px #cbcbcb;
  border: solid 1px rgb(233, 233, 233);
  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
  padding: 20px 40px 40px 40px;
  border-radius: 5px;
  width: auto;
  max-width: 500px;
}

.ld-user-email {
  text-align: center;
  font-size: 14px;
  width: 300px;
  font-weight: 300;
  outline: none;
  padding-bottom: 3px;
  height: 40px;
  border: solid 1px darkgray;
  border-width: 0px 0px 1px 0px;
}

button {
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -1px 3px 3px -1px #cbcbcb;
  cursor: pointer;
  border: none;
  transition: all 250ms ease-in-out;
  color: white;
  font-weight: 300;
  font-size: 13px;
  margin-top: 25px;
  height: 45px;
  width: 100px;
}

h3 {
  font-size: 16px;
}

label,
h4 {
  font-size: 14px;
}

h4 {
  line-height: 22px;
}

.test-intro-image {
  width: 100%;
  max-width: 400px;
}

select {
  padding: 0px 20px;
  box-sizing: border-box;
}

.test-intro-message {
  margin-top: 0px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}

.test-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.explain-test-section {
  width: auto;
  border-radius: 5px;
  padding: 40px 45px;
  padding-bottom: 60px;
  border: solid 1px rgb(233, 233, 233);
  max-width: 500px;
  box-shadow: 0px 2px 4px -1px #cbcbcb;

  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
}

form {
  padding-top: 0px;
  box-shadow: none;
}

.survey-section {
  border: solid 1px rgb(233, 233, 233);
  box-shadow: 0px 2px 4px -1px #cbcbcb;
  border-radius: 5px;
  box-sizing: border-box;
  height: 800px;
  overflow: auto;
  width: 100%;
  max-width: 525px;
  padding: 25px 20px;
  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
}

input {
  width: 150px;
  border-radius: 5px;
  text-align: center;
  border: solid 0.5px #6868689c;
  font-weight: 300;
  box-sizing: border-box;
  font-size: 13px;
  padding: 2px 0px;
}

.full {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
  justify-content: center;
}

.full label {
  padding-top: 1px;
}

label {
  margin-top: 0px;
}

.space-top {
  margin-top: 20px;
}

table {
  border: solid 1px;
  border-collapse: collapse;
}

.form {
  min-height: 675px;
  width: 100%;
  max-width: 550px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  padding: 14px 46px;
  justify-content: center;
  overflow: auto;
  flex-flow: wrap;
  /* max-height: 700px; */
}

table td {
  padding: 5px;
  font-size: 13.5px;
  border: solid 1px;
  width: 105px;
}

table input {
  width: 40px;
}

.survey-table {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 564px) {
  .full {
    flex-direction: column;
    align-items: center;
  }
}
</style>
