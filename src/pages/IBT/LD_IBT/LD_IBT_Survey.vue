<template>
  <section class="main">
    <!-- Email section -->
    <section v-if="currentStep === Step.AskForEmailAddress">
      <div class="survey-box">
        <h3>Please provide us with your email address</h3>
        <h4 style="font-size: 14px; line-height: 25px">
          Note: Your email address will be used solely for payment purposes for
          taking part in this study and will not be used to identify you
          individually. Your participation in this study will remain anonymous.
        </h4>
        <input
          type="text"
          name="user-email"
          v-model="ld_email"
          id="email"
          class="ld-user-email"
          placeholder="Enter email address here"
        />
        <br />
        <button @click="startTest">Next</button>
      </div>
    </section>

    <!-- Test explanation section -->
    <section
      v-if="currentStep === Step.ExplainTest"
      class="explain-test-section"
    >
      <div>
        <h3 style="font-weight: 600">Welcome to the test</h3>
      </div>
      <div>
        <img
          src="../../../assets/LD_IBT/test-introduction-image.png"
          alt="Test intro image"
          class="test-intro-image"
        />
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
    <section
      v-if="currentStep === Step.ShowBackgroundFormSurveyOne"
      class="survey-section"
    >
      <h3>Background Form</h3>
      <h4 style="font-size: 15px">Please answer the following questions</h4>
      <form @submit="progressToSecondSectionOfSurvey">
        <label for="country"
          >1. From which country/countries did you or your family originally
          arrive in Canada?</label
        >
        <h4>
          Note: List all countries you have lived in before coming to Canada
          starting with the last country you were residing in
        </h4>

        <label for="province">Province (if applicable): </label>

        <input type="text" id="province" style="display: block" />

        <label for="city">City: </label>
        <input type="text" id="city" />

        <h4>2. When did you or your family come to Canada?</h4>
        <input type="text" id="when-family-came-to-canada" />

        <label for="you">You: </label>
        <input type="text" id="you" />

        <label for="spouse-1">Your spouse (if applicable): Year </label>
        <input type="text" id="spouse-1" />

        <label for="spouse-2">Your spouse (if applicable): Year </label>
        <input type="text" id="spouse-2" />

        <h4>3. How long have you or your family been in Canada?</h4>
        <label for="you-years-in-canada">You: Years:</label>
        <input type="text" id="you-years-in-canada" />
        <label for="family-years-in-canada">Your family: Years:</label>
        <input type="text" id="family-years-in-canada" />

        <label for="immigrant-status"
          >4. What is your immigrant status in Canada</label
        >
        <select id="immigrant-status">
          <option value="Canadian Citizen">Canadian Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Refugee">Refugee</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Other">Other</option>
        </select>

        <label for="what-user-considers-themselves"
          >5. Do you consider yourself to be:</label
        >
        <select id="what-user-considers-themselves">
          <option
            value=" First generation immigrant (that is, you were born outside of Canada)"
          >
            First generation immigrant (that is, you were born outside of
            Canada)
          </option>
          <option
            value="Second generation immigrant  (I was born in Canada and at least one of my parents was born outside Canada) "
          >
            Second generation immigrant (I was born in Canada and at least one
            of my parents was born outside Canada)
          </option>
          <option
            value="Third generation immigrant (I and both my parents were born in Canada)"
          >
            Third generation immigrant (I and both my parents were born in
            Canada)
          </option>
        </select>

        <button type="submit">Next</button>
      </form>
    </section>

    <!-- SURVEY SECTION 2 -->

    <section v-if="currentStep === Step.ShowBackgroundFormSurveyTwo">
      <h3>Background Form</h3>
      <h4>Please answer the following questions</h4>
      <form @submit="progressToSecondSectionOfSurvey">
        <h3>hi</h3>
        <button type="submit">Next</button>
      </form>
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
  StartTest,
}

let currentStep = ref<number>(Step.AskForEmailAddress);

let ld_email = ref<string>("");

const store = useStore();
const router = useRouter();

function startTest() {
  store.commit("storeLdEmail", ld_email.value);
  currentStep.value++;
}

function progressToSecondSectionOfSurvey() {
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
  height: 25px;
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
  font-size: 14px;
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

.test-intro-message {
  margin-top: 0px;
  font-size: 14px;
  line-height: 25px;
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
  padding: 25px 0px;
  /* box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%); */
}

input {
  width: 30px;
}
</style>
