<template>
  <section class="m-0 mx-0 sm:mx-10 flex justify-center mt-12">
    <section
      class="max-w-[775px] w-full p-6 sm:p-10 mb-12 sm:border-solid box-border shadow-md sm:border sm:border-gray-100 text-[13px] sm:rounded-md text-left"
      v-show="userAgreesToConsentForm"
    >
      <!-- Top images -->
      <div class="flex gap-8 flex-wrap items-center content-start">
        <img
          :src="LabLogo"
          alt="LB lab image"
          class="rounded-md !border-none shadow-none border border-gray-300 w-36 px-4"
        />
        <img
          :src="UniTorontoImage"
          alt="University of toronto image"
          class="rounded-md !border-none shadow-none border border-gray-300 w-40 sm:w-72 px-4"
        />
      </div>
      <!-- Information section -->
      <div>
        <h3 class="text-base mt-8 font-medium mb-5">
          Information and Consent Form
        </h3>
        <h4 class="font-semibold">
          Attributions about Learning Difficulties among South Asian Immigrants
          in Ontario, Canada
        </h4>
        <h4>
          Thank you for your interest in this study, which explores South Asian
          Immigrants’ attitudes towards learning difficulties and the impact of
          these attitudes on parental involvement.
        </h4>
        <h4>
          You are invited to participate in a survey consisting of four tasks.
        </h4>
        <table class="border border-solid border-black">
          <tr class="font-medium">
            <th>Name of Task</th>
            <th>Description</th>
            <th class="w-24">Duration</th>
          </tr>
          <tr>
            <td class="font-medium">Implicit Bias Task</td>
            <td>
              Measures your implicit attitudes towards learning difficulties.
            </td>
            <td>5 minutes</td>
          </tr>
          <tr>
            <td class="font-medium">Questionnaire about attributions</td>
            <td>
              Measures your beliefs about causes of learning difficulties.
            </td>
            <td>5 minutes</td>
          </tr>
          <tr>
            <td class="font-medium">Explicit Attitudes Questionnaire</td>
            <td>Measures your opinion on learning difficulties.</td>
            <td>5 minutes</td>
          </tr>
          <tr>
            <td class="font-medium">Parental and School Survey</td>
            <td>
              Measures your involvement in your child’s academic activities at
              home and at school.
            </td>
            <td>5 minutes</td>
          </tr>
        </table>
      </div>
      <br />
      <!-- More FAQs -->
      <div>
        <h4>
          <span class="font-semibold">
            Potential harms, risks, and discomfort caused by taking part in the
            study
          </span>
          <br />
          There are no potential harms or risks in taking part in the study. You
          have the right to withdraw from the study without explanation or
          penalty if you experience any discomfort at any point.
        </h4>
        <h4 class="mt-6">
          <span class="font-semibold">
            The benefits of taking part in the study
          </span>
          <br />
          Taking part in the survey will allow you to explore your attitudes
          towards learning difficulties and also to make a significant
          contribution to research involving South Asian Immigrant communities.
        </h4>
        <h4 class="mt-6">
          <span class="font-semibold">
            Compensation for taking part in the study
          </span>
          <br />
          You will receive 30 dollars for taking part in this study.
        </h4>
        <h4 class="mt-6">
          <span class="font-semibold"> Confidentiality </span>
          <br />
          No personal information will be retained by the researchers throughout
          the survey. You will be identified through a code number. All data
          will be strictly secured on a University of Toronto based server and a
          password protected computer. Your data may be shared with other
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
        <h4 class="mb-0 font-semibold">Questions about the study:</h4>
        <ul class="!mt-0">
          <li>
            For study-related inquiries, contact<a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tehani.gunawardena@mail.utoronto.ca"
            >
              tehani.gunawardena@mail.utoronto.ca
            </a>
          </li>
          <li>
            For questions or concerns about your rights as a participant,
            contact Research Oversight and Compliance Office - Human Research
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
        If you agree to take part in the study, please click the “I agree”
        button below. If you do not wish to participate in the study, you can
        click on the “I do not agree” button or exit the browser.
      </h4>

      <!-- Buttons -->
      <br />
      <div class="flex sm:gap-8 gap-4 justify-start">
        <router-link to="/LD_IBT_Survey" class="!no-underline">
          <button
            class="gradient-green no-underline flex justify-center items-center rounded-full shadow-md cursor-pointer border-0 mb-6 transition-all duration-200 ease-in-out text-white px-7 py-[25px] font-normal text-[13px] h-10"
          >
            I agree
          </button></router-link
        >
        <button
          class="gradient-red no-underline flex justify-center items-center rounded-full shadow-md cursor-pointer border-0 mb-6 transition-all duration-200 ease-in-out text-white px-7 py-[25px] font-normal text-[13px] h-10"
          @click="userAgreesToConsentForm = false"
        >
          I do not agree
        </button>
      </div>
    </section>
    <section v-if="!userAgreesToConsentForm" class="survey-feedback">
      <div class="flex items-center flex-col">
        <h3 class="text-md font-medium">
          You can close out of this page or go home
        </h3>
        <router-link to="/Home" class="!no-underline"
          ><button
            class="gradient-green no-underline flex justify-center items-center rounded-full shadow-md cursor-pointer border-0 mb-6 transition-all duration-200 ease-in-out text-white px-7 py-6 font-normal text-[13px] h-10"
          >
            Go Home
          </button>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-expect-error
import LabLogo from "../../../assets/LD_IBT/ld-lab-image.png";
// @ts-expect-error
import UniTorontoImage from "../../../assets/LD_IBT/uni-toronto-image.png";

let userAgreesToConsentForm = ref<boolean>(true);
</script>

<style scoped>
* {
  line-height: 27px;
}

h4 {
  line-height: 30px;
}

.survey-feedback {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

table {
  border-collapse: collapse;
}

td,
th {
  border: solid 1px black;
  padding: 3px 10px;
}
</style>
