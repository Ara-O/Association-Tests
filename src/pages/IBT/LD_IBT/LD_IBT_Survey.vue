<template>
  <section class="main" v-show="currentStep !== Step.ShowBackgroundFormSurveyTwo">
    <!-- Email section -->
    <section v-show="currentStep === Step.AskForEmailAddress">
      <div class="survey-box">
        <h3 style="font-weight: 500" class="!text-center">
          Please provide us with your email address
        </h3>
        <h4 style="font-size: 14px; line-height: 30px; font-weight: 300; text-align: center;">
          Note: Your email address will be used solely for payment purposes for
          taking part in this study and will not be used to identify you
          individually. Your participation in this study will remain anonymous.
        </h4>
        <input type="text" name="user-email" v-model="ld_email" id="email" class="ld-user-email"
          style="text-align: center !important;" placeholder="Enter email address" />
        <br />
        <button @click="finishEmailSection">Next</button>
      </div>
    </section>

    <!-- Test explanation section -->
    <section v-show="currentStep === Step.ExplainTest" class="explain-test-section">
      <div>
        <h3 style="font-weight: 600; text-align: center;">Welcome to the test</h3>
      </div>
      <div>
        <img src="../../../assets/LD_IBT/test-introduction-image.png" alt="Test intro image" class="test-intro-image" />
        <h4 class="test-intro-message" style="text-align: center !important;">
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


    <section class="main !mt-40 sm:!mt-10 mb-10" v-show="currentStep === Step.ShowBackgroundFormSurveyOne"
      style="height: auto !important">
      <section class="survey-section" style="padding-right: 45px;">
        <h3 class="font-medium">Background Form</h3>
        <h4 class="font-medium">Note: Green highlighted texts specify the questions. Please answer the following questions
        </h4>
        <form @submit.prevent="currentStep++" class="!max-h-none justify-start">
          <span class="flex flex-wrap items-center gap-3">
            <label for="country" class="block mt-0 mb-0 font-medium bg-green-200">1. From which country/countries did you
              or
              your family
              originally
              arrive in Canada?</label>
            <div class="flex items-start mt-0 mb-0">
              <select id="" class="mt-0" v-model="surveyData.countryOfOrigin">
                <option :value="country" v-for="country in countriesList">{{ country }}</option>
              </select>
            </div>
          </span>

          <h4>
            Note: List all countries you have lived in before coming to Canada
            starting with the last country you were residing in
          </h4>

          <span class="flex flex-wrap items-center gap-3">
            <label for="province" class="mt-0 mb-0 bg-green-200">Province (if applicable): </label>
            <input id="province" class="mt-0 mb-0" v-model="surveyData.province" />
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-5">
            <label for="city" class="mt-0 mb-0 bg-green-200">City: </label>
            <input type="text" id="city" class="mt-0 mb-0" v-model="surveyData.city" placeholder="City" />
          </span>

          <h4 class="font-medium bg-green-200 inline-block !w-fit">2. When did you or your family come to Canada?</h4>
          <span class="flex flex-wrap items-center gap-3">
            <label for="you" class="mb-0 mt-0 bg-green-200">You: </label>
            <input type="text" class="mt-0 mb-0" id="you" v-model="surveyData.yearUsrMovedToCanada" placeholder="Year" />
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-5">
            <label for="spouse-1" class="mb-0 mt-0 bg-green-200">Your spouse (if applicable): </label>
            <input type="text" id="spouse-1" class="mb-0 mt-0" placeholder="Year"
              v-model="surveyData.yearSpouseMovedToCanada" />
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-5">
            <label for="parents" class="mb-0 mt-0 bg-green-200">Your parents (if applicable): </label>
            <input type="text" class="mb-0 mt-0" id="parents" placeholder="Year"
              v-model="surveyData.yearParentsMovedToCanada" />
          </span>

          <h4 class="font-medium bg-green-200 !w-fit">3. How long have you or your family been in Canada?</h4>
          <span class="flex flex-wrap items-center gap-3">
            <label class="mb-0 mt-0 bg-green-200" for="you-years-in-canada">You: </label>
            <input class="mb-0 mt-0" type="text" id="you-years-in-canada" v-model="surveyData.usrDurOfStayInCanada"
              placeholder=" Years" />
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-5">
            <label class="mb-0 mt-0 bg-green-200" for="family-years-in-canada">Your family: </label>
            <input type="text" class="mb-0 mt-0" id="family-years-in-canada" v-model="surveyData.familyDuOfStayInCanada"
              placeholder="Years" />
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-5">
            <label for="immigrant-status" class="mb-0 mt-0 font-medium bg-green-200">4. What is your immigrant status in
              Canada</label>
            <select id="immigrant-status" class="mb-0 mt-0" v-model="surveyData.immigrantStatus">
              <option value="Canadian Citizen">Canadian Citizen</option>
              <option value="Permanent Resident">Permanent Resident</option>
              <option value="Refugee">Refugee</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Other">Other</option>
            </select>
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-6">
            <label for="what-user-considers-themselves" class="font-medium mb-0 mt-0 bg-green-200">5. Do you consider
              yourself to
              be:</label>
            <select id="what-user-considers-themselves" class="mb-0 mt-0" v-model="surveyData.usrGeneration">
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
          </span>

          <span class="flex flex-wrap items-center gap-3 mt-6">
            <label for="highest-education-level" class="font-medium mb-0 mt-0 bg-green-200">6. Please select the highest
              level of
              education that
              you have
              attained</label>
            <select id="highest-education-level" class="mb-0 mt-0" v-model="surveyData.usrsHighestEduLvl">
              <option value="Some school">Some school</option>
              <option
                value="Completed high school diploma and a professional qualification not from a college or university">
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
            <br>
            <input type="text" v-if="surveyData.usrsHighestEduLvl === 'Other (please specify)'" placeholder="Specify here"
              v-model="surveyData.usrsHighestEduLvlOther">
          </span>

          <div class="w-full flex justify-start">
            <button type="submit" style="margin-top: 20px">Next</button>
          </div>
        </form>
      </section>
    </section>
  </section>

  <section class="main mt-10 mb-10" v-show="currentStep === Step.ShowBackgroundFormSurveyTwo"
    style="height: auto !important">
    <!-- SECTION 2 -->
    <section class="survey-section" style="padding-right: 45px;">
      <div class="form !max-w-none !w-full">
        <h3 class="font-medium mb-0 mt-0">Background Form</h3>
        <h4 class="font-medium text-sm">Please answer the following questions</h4>

        <span class="flex flex-wrap items-center gap-3">
          <label for="spouse-highest-education-level" class="font-medium mb-0 mt-0 bg-green-200">7. What is your spouse's
            highest
            educational
            level</label>
          <select id="spouse-highest-education-level" v-model="surveyData.spouseHighestEduLvl" class="mb-0 mt-0">
            <option value="Some school">Some school</option>
            <option
              value="Completed high school diploma and a professional qualification not from a college or university">
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

        </span>

        <div class="full">
          <input type="text" class="mt-3" v-if="surveyData.spouseHighestEduLvl === 'Other (please specify)'"
            placeholder="Specify here" v-model="surveyData.spouseHighestEduLvlOther">
        </div>

        <span class="flex flex-wrap items-center gap-3 mt-5">
          <label for="occupation" class="mb-0 mt-0 font-medium bg-green-200">
            8. What is your occupation in Canada?
          </label>
          <input type="text" id="occupation" class="mb-0 mt-0" v-model="surveyData.usrOccupInCanada"
            placeholder="Occupation" />
        </span>

        <span class="flex flex-wrap items-center gap-3 mt-5">
          <label for="occupation-2" class="font-medium bg-green-200">
            If you are a new
            Canadian and were employed before immigrating to Canada, please
            indicate your occupation in your former country </label>
          <input type="text" id="occupation-2" class="mt-5" placeholder="Occupation"
            v-model="surveyData.usrOccupInFormerCountry" />
        </span>

        <span class="flex flex-wrap items-center gap-3 mt-5">
          <label for="main-language" class="font-medium mt-0 mb-0 bg-green-200">9. What is the main language you use at
            home on a daily
            basis?
          </label>
          <select id="main-language" class="mb-0 mt-0" v-model="surveyData.mainLangUsedAtHome">
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
            <option value="Hindi">Hindi</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Sinhala">Sinhala</option>
            <option value="Tamil">Tamil</option>
            <option value="Urdu">Urdu</option>
          </select>
        </span>
        <br />
        <div class="full centered space-top">
          <label for="other-language" class="font-medium bg-green-200">10. Do you use any other language/languages besides
            the home
            language indicated above? If yes, what is/are the additional
            language/languages you use?
          </label>
          <input type="text" id="other-languages" v-model="surveyData.otherLangsUsedAtHome">
        </div>
        <br />
        <span class="full centered space-top">
          <label class="font-medium bg-green-200">11. Are you aware of a child/adolescent in your community (for
            example, among relatives, friends, neighbors, own religious or
            ethnic groups that you are currently a part of) who is struggling
            with their studies/learning process at school?
          </label>
          <select v-model="surveyData.userIsAwareOfStrugglingChildInCmmnt">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </span>

        <label class="!mt-4 !mb-1 font-medium bg-green-200">
          If yes as far as you know, did this child receive any help at home,
          school and/or community?
        </label>
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
              <td><input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromHome" />
              </td>
              <td><input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromSchool"></td>
              <td><input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromCmmnt" /></td>
            </tr>
            <tr>
              <td>No</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
            </tr>
          </table>
        </div>
        <br />
        <div class="full centered space-top">
          <label class="font-medium bg-green-200">12. Are you aware of a child/adolescent in your country of origin
            (for example, among relatives, friends, neighbors, own religious or
            ethnic groups that you are currently a part of) who was struggling
            with their studies/learning process at school?
          </label>
          <select v-model="surveyData.userIsAwareOfStrugglingChildInCntry">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br>
          <h3 class="!text-sm block mt-0 mb-0 font-medium bg-green-200">
            If yes as far as you know, did this child receive any help at home,
            school and/or community?
          </h3>
          <div class="survey-table ">
            <table>
              <tr>
                <td></td>
                <td>Receives support from home</td>
                <td>Receives support from school</td>
                <td>Receives support from community</td>
              </tr>
              <tr>
                <td>Yes</td>
                <td><input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromHome" /></td>
                <td><input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromSchool" /></td>
                <td><input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromCommunity" /></td>
              </tr>
              <tr>
                <td>No</td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
                <td><input type="checkbox" /></td>
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
import { storeLDPreSurvey } from "../../../modules/storingData/storingDataLD"
import countriesList from "../../../modules/utils/countriesList";

enum Step {
  AskForEmailAddress = 1,
  ExplainTest,
  ShowBackgroundFormSurveyOne,
  ShowBackgroundFormSurveyTwo,
  StartTest,
}

const canadianProvinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon'
];

let currentStep = ref<number>(Step.AskForEmailAddress);

let ld_email = ref<string>("");

let surveyData = ref({
  province: "",
  countryOfOrigin: "",
  city: "",
  yearUsrMovedToCanada: "",
  yearSpouseMovedToCanada: "",
  yearParentsMovedToCanada: "",
  usrDurOfStayInCanada: "",
  familyDuOfStayInCanada: "",
  immigrantStatus: "",
  usrGeneration: "",
  usrsHighestEduLvl: "",
  usrsHighestEduLvlOther: "",
  spouseHighestEduLvl: "",
  spouseHighestEduLvlOther: "",
  usrOccupInCanada: "",
  usrOccupInFormerCountry: "",
  mainLangUsedAtHome: "",
  otherLangsUsedAtHome: "",
  userIsAwareOfStrugglingChildInCmmnt: "true",
  childInCmmntReceivesSupportFromHome: false,
  childInCmmntReceivesSupportFromSchool: false,
  childInCmmntReceivesSupportFromCmmnt: false,
  userIsAwareOfStrugglingChildInCntry: "false",
  childInCountryReceivesSupportFromHome: false,
  childInCountryReceivesSupportFromSchool: false,
  childInCountryReceivesSupportFromCommunity: false,
})


const store = useStore();
const router = useRouter();

function startTest() {
  let userId;
  if (!store.state.uid) {
    userId = Math.floor(Math.random() * 10000)
    store.commit("changeUserID", userId)
  } else {
    userId = store.state.uid
  }

  storeLDPreSurvey(userId, surveyData.value, store)
  store.commit("clearStoredLdData")
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
  border-radius: 0px;
  border: solid 1px darkgray;
  border-width: 0px 0px 1px 0px;
}

span {
  width: 100%;
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

label {
  font-size: 14.5px !important;
}


h4 {
  line-height: 22px;
  text-align: left;
  width: 100%;
}

.test-intro-image {
  width: 100%;
  max-width: 400px;
}

select {
  padding: 0px 20px;
  box-sizing: border-box;
}


input,
select {
  text-align: left !important;
  box-sizing: border-box;
  padding-left: 20px !important;
  outline: none;
  padding-right: 20px !important;
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

.bg-green-200 {
  background: #dcffe8
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
  max-width: 1000px;
  padding-top: 0px;
  box-shadow: none;
}

.survey-section {
  border: solid 1px rgb(233, 233, 233);
  box-shadow: 0px 2px 4px -1px #cbcbcb;
  border-radius: 5px;
  /* box-sizing: border-box; */
  /* height: 800px; */
  overflow: auto;
  width: 100%;
  max-width: 1000px;
  padding-top: 25px;
  padding-bottom: 45px;
  padding-left: 45px;
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

}

form {
  text-align: left;
  align-items: flex-start !important;
  padding: 0px;
}

.full label {
  padding-top: 1px;
}

label {
  text-align: left;
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
  max-height: initial;
  background: white;
  display: flex;
  justify-content: flex-start !important;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 14px 0px;
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

h3 {
  text-align: left;
}

@media (max-width: 564px) {
  .full {
    flex-direction: column;
  }
}
</style>
