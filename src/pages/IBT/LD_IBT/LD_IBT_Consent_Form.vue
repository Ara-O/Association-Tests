<template>
  <section class="main">
    <section
      class="survey ld-survey-consent rounded-md text-left"
      v-show="userAgreesToConsentForm"
    >
      <!-- Top images -->
      <div class="top-introductory-image !items-start !content-start">
        <img
          src="../../../assets/LD_IBT/ld-lab-image.png"
          alt="LB lab image"
          class="rounded-md !border-none !shadow-none"
        />
        <img
          src="../../../assets/LD_IBT/uni-toronto-image.png"
          alt="University of toronto image"
          class="rounded-md !border-none !shadow-none"
        />
      </div>
      <!-- Information section -->
      <div>
        <h3 class="ld-title">Information and Consent Form</h3>
        <h4 style="font-weight: 600">
          Attributions about Learning Difficulties among South Asian Immigrants
          in Ontario, Canada
        </h4>
        <h4>
          Thank you for your interest in this study, which explores South Asian
          Immigrants’ attitudes towards learning difficulties faced and their
          impact on parental involvement.
        </h4>
        <h4>
          You are invited to participate in a survey consisting of four main
          sets of tests/questionnaires.
        </h4>
        <table class="border border-solid border-black">
          <tr class="font-medium">
            <th>Name</th>
            <th class="w-24">Duration</th>
            <th>Description</th>
          </tr>
          <tr>
            <td class="font-medium">Implicit Association Task</td>
            <td>5 minutes</td>
            <td>
              Measures your implicit attitudes towards learning difficulties.
            </td>
          </tr>
          <tr>
            <td class="font-medium">Attributions Based Questionnaire</td>
            <td>5 minutes</td>
            <td>
              Measures your beliefs about causes of learning difficulties.
            </td>
          </tr>
          <tr>
            <td class="font-medium">Explicit Attitudes Questionnaire</td>
            <td>5 minutes</td>
            <td>Measures your opinion on learning difficulties.</td>
          </tr>
          <tr>
            <td class="font-medium">Parental and School Survey</td>
            <td>5 minutes</td>
            <td>
              Measures your involvement in your child’s academic activities at
              home and school.
            </td>
          </tr>
        </table>
      </div>
      <br />
      <!-- More FAQs -->
      <div>
        <h4>
          <span style="font-weight: bold">
            Potential harms, risks, and discomfort caused by taking part in the
            study
          </span>
          <br />
          There are no potential harms or risks in taking part in the study. You
          have the right to withdraw from the study without explanation or
          penalty if you experience any discomfort at any point.
        </h4>
        <h4 class="mt-6">
          <span style="font-weight: bold">
            The benefits of taking part in the study?
          </span>
          <br />
          Taking part in the survey will allow you to explore your attitudes
          towards learning difficulties and also to make a significant
          contribution to research involving South Asian Immigrant communities.
        </h4>
        <h4 class="mt-6">
          <span style="font-weight: bold">
            Compensation for taking part in the study?
          </span>
          <br />
          You will receive a 20-dollar gift card for taking part in this study.
        </h4>
        <h4 class="mt-6">
          <span style="font-weight: bold"> Confidentiality </span>
          <br />
          No personal information will be retained by the researchers throughout
          the survey. You will be identified only through a code number. All
          data will be strictly secured on a University of Toronto based server
          and a password protected computer. Your data may be shared with other
          researchers outside of the University of Toronto and/or with the
          general public, as part of a journal publication. However, it will not
          contain any information that can be used to identify you individually.
        </h4>
      </div>

      <!-- More info -->
      <h4>
        Participation in this study is completely voluntary. You may choose to
        withdraw at any time without any consequences. If you withdraw during
        the study, you will not need to give any explanation for the decision
        and your survey data will be discarded. If you decide to withdraw your
        data from the study after the survey is completed, please inform the
        principal investigator Tehani Gunawardena (<a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tehani.gunawardena@mail.utoronto.ca"
        >
          tehani.gunawardena@mail.utoronto.ca
        </a>
        ) within one week of completing this survey.
      </h4>

      <!-- Questions -->

      <div class="mt-6">
        <h4 style="font-weight: bold" class="mb-0">
          Questions about the study:
        </h4>
        <ul class="!mt-0">
          <li>
            For study-related inquiries:tehani.gunawardena@mail.utoronto.ca.
          </li>
          <li>
            For questions or concerns about your rights as a
            participant-:Research Oversight and Compliance Office- Human
            Research Ethics Program at
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ethics.review@utoronto.ca"
            >
              ethics.review@utoronto.ca
            </a>
            or 416-946-3273
          </li>
        </ul>
      </div>

      <!-- Final section -->
      <h4>
        If you agree to take part in the study, please click on the “I agree” If
        you do not wish to participate in the study, you can click on the “I do
        not agree” button or exit the browser.
      </h4>

      <!-- Button -->
      <br />
      <div class="buttons-section">
        <router-link to="/LD_IBT_Survey" style="text-decoration: none">
          <button class="green">I agree</button></router-link
        >
        <button class="red" @click="userDoesNotWantToTakeSurvey">
          I do not agree
        </button>
      </div>
    </section>
    <section v-if="!userAgreesToConsentForm" class="survey-feedback">
      <div class="no-survey">
        <h3>You can close out of this page or go home</h3>
        <router-link to="/Home" style="text-decoration: none"
          ><button class="green">Go Home</button></router-link
        >
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

let userAgreesToConsentForm = ref<boolean>(true);

function userDoesNotWantToTakeSurvey() {
  userAgreesToConsentForm.value = false;
}
</script>

<style scoped>
* {
  line-height: 27px;
}

.main {
  margin: 0px 40px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.survey {
  max-width: 775px;
  width: 100%;
  padding: 30px 50px;
  margin-bottom: 50px;
  box-sizing: border-box;
  box-shadow: -2px 2px 2px -1px #cbcbcb;
  border: solid 1px #f2f2f2;
}

.survey-feedback {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-introductory-image {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.top-introductory-image img {
  border: solid rgb(234, 234, 234) 1px;
  width: 300px;
  padding: 0px 15px;
}

.top-introductory-image img:nth-child(1) {
  width: 137px;
}

.ld-survey-consent {
  font-family: "poppins", serif;
  font-size: 13px;
}

.ld-title {
  font-size: 17px;
  margin-top: 40px;
  font-weight: 500;
  margin-bottom: 20px;
}

ol li {
  list-style-type: number;
}

ul li {
  list-style-type: disc;
}

a {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}

h4 {
  line-height: 30px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  border: none;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  padding: 25px 34px;
  font-weight: 300;
  font-size: 13px;
  height: 40px;
}

.green {
  background: linear-gradient(185deg, #7eefbf, #389820);
}

.red {
  background: linear-gradient(185deg, #ef7e7e, #982020);
}

table {
  border-collapse: collapse;
}

td,
th {
  border: solid 1px black;
  padding: 3px 10px;
}

.buttons-section {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.no-survey {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
