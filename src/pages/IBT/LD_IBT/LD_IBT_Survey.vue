<template>
  <section class="main">
    <section class="survey" v-if="userAgreesToTakeSurvey">
      <!-- Top images -->
      <div class="top-introductory-image">
        <img
          src="../../../assets/LD_IBT_Survey/ld-lab-image.png"
          alt="LB lab image"
        />
        <img
          src="../../../assets/LD_IBT_Survey/uni-toronto-image.png"
          alt="University of toronto image"
        />
      </div>
      <!-- Information section -->
      <br />
      <div>
        <h3 class="ld-title">Information and Consent Form</h3>
        <h4 style="font-weight: 600">
          Attributions about Learning Difficulties among South Asian Immigrants
          in Ontario, Canada
        </h4>
        <h4>
          Thank you for your interest in this study, which aims to explore South
          Asian Immigrants’ attitudes towards learning difficulties faced by
          children and teenagers and their impact on parental involvement.
        </h4>
        <h4>
          You are invited to participate in a survey consisting of four main
          sets of tests/questionnaires.
        </h4>
        <ol>
          <li>
            <span style="font-weight: bold">Implicit Association Test</span> (5
            minutes) - Measures your implicit attitudes towards learning
            difficulties.
          </li>
          <br />
          <li>
            <span style="font-weight: bold"
              >Attributions Based Questionnaire
            </span>
            (5 minutes) - Measures your beliefs about causes of learning
            difficulties.
          </li>
          <br />
          <li>
            <span style="font-weight: bold"
              >Explicit Attitudes Questionnaire
            </span>
            (5 minutes) - Measures your opinions on learning difficulties.
          </li>
          <br />
          <li>
            <span style="font-weight: bold">Parental and School Survey </span>
            (5 minutes) - Measures your involvement in your child’s academic
            activities at home and school.
          </li>
        </ol>
      </div>
      <br />
      <!-- More FAQs -->
      <div>
        <h4>
          <span style="font-weight: bold">
            Are there any potential harms, risks, and discomfort caused by
            taking part in the study?
          </span>
          There are no potential harms or risks in taking part in the study. You
          have the right to withdraw from the study without explanation or
          penalty if you experience any discomfort at any point.
        </h4>
        <h4>
          <span style="font-weight: bold">
            What are the benefits of taking part in the study?
          </span>
          Taking part in the survey will allow you to explore your attitudes
          towards learning difficulties. Additionally, it offers the opportunity
          to make a significant contribution to research involving South Asian
          Immigrant communities, helping inform interventional support for
          children and families.
        </h4>
        <h4>
          <span style="font-weight: bold">
            Will there be any compensation for taking part in the study?
          </span>
          You will receive a 20-dollar gift card for taking part in this study.
        </h4>
        <h4>
          <span style="font-weight: bold">
            How will confidentiality be maintained?
          </span>
          No personal information will be retained by the researchers throughout
          the survey. You will be identified only through a code number. All
          data will be strictly secured on a University of Toronto based server
          and a password protected computer. Your data may be shared with other
          researchers outside of the University of Toronto and/or with the
          general public, as part of a journal publication. It will not contain
          any information that can be used to identify you individually.
        </h4>
      </div>

      <!-- More info -->
      <h4>
        Participation in this study is completely voluntary. You may choose to
        withdraw at any time during the interview without any consequences. If
        you withdraw during the study, you will not need to give any explanation
        for the decision and your survey data will be discarded. If you decide
        to withdraw your data from the study after the survey is completed,
        please inform the principal investigator Tehani Gunawardena (<a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tehani.gunawardena@mail.utoronto.ca"
        >
          tehani.gunawardena@mail.utoronto.ca
        </a>
        ) one week after the completion of the survey. Your data will thereafter
        be removed from the study.
      </h4>

      <!-- Questions -->

      <div>
        <h4 style="font-weight: bold">Questions about the study:</h4>
        <ul>
          <li>
            For study-related inquiries, contact the principal investigator at
            Tehani.gunawardena@mail.utoronto.ca.
          </li>
          <li>
            For questions or concerns about your rights as a participant,
            contact the Research Oversight and Compliance Office- Human Research
            Ethics Program at
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
        If you agree to take part in the study, please click on the “I agree”
        button at the bottom of the screen. If you do not wish to participate in
        the study, you can click on the “I do not agree” button or exit the
        browser.
      </h4>

      <!-- Button -->
      <br />
      <div class="buttons-section">
        <router-link
          to="/LD_IBT_Supplementary_Survey"
          style="text-decoration: none"
        >
          <button class="green">I agree</button></router-link
        >
        <button class="red" @click="userDoesNotWantToTakeSurvey">
          I do not agree
        </button>
      </div>
    </section>
    <section v-if="!userAgreesToTakeSurvey" class="survey-feedback">
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

let userAgreesToTakeSurvey = ref<boolean>(true);

function userDoesNotWantToTakeSurvey() {
  userAgreesToTakeSurvey.value = false;
}
</script>

<style scoped>
* {
  line-height: 22px;
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
  box-shadow: -2px 4px 4px -1px #cbcbcb;
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
  align-items: center;
  justify-content: center;
}

.top-introductory-image img {
  border: solid rgb(234, 234, 234) 1px;
  width: 300px;
  padding: 0px 15px;
}

.top-introductory-image img:nth-child(1) {
  width: 137px;
}

* {
  font-family: "Times New Roman", Times, serif;
}
.ld-title {
  font-size: 22px;
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
  font-size: 15px;
  height: 40px;
}

.green {
  background: linear-gradient(185deg, #7eefbf, #389820);
}

.red {
  background: linear-gradient(185deg, #ef7e7e, #982020);
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
