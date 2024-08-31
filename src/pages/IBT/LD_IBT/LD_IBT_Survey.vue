<template>
  <section
    class="main min-h-screen h-auto flex items-center justify-center"
    v-show="currentStep !== Step.ShowBackgroundFormSurveyTwo"
  >
    <!-- Email section -->
    <section v-show="currentStep === Step.AskForEmailAddress">
      <EmailInput @finish="currentStep++"></EmailInput>
    </section>

    <!-- Test explanation section -->
    <section
      v-show="currentStep === Step.ExplainTest"
      class="w-auto rounded-md py-10 px-12 pb-12 border border-solid border-gray-100 max-w-md shadow-md text-left mt-10 mb-10"
    >
      <StudyIntroduction
        @go-back="currentStep--"
        @continue="currentStep++"
      ></StudyIntroduction>
    </section>

    <!-- Survey section 1 - PART A -->
    <section
      class="my-10 h-auto flex items-center text-left justify-center"
      v-show="currentStep === Step.ShowBackgroundFormSurveyOne"
    >
      <SurveyPartA
        :survey-data="surveyData"
        @go-back="currentStep--"
        @continue="currentStep++"
      ></SurveyPartA>
    </section>
  </section>

  <!-- Survey section 2 - PART B -->
  <section
    class="my-10 h-auto flex items-center text-left justify-center"
    v-show="currentStep === Step.ShowBackgroundFormSurveyTwo"
  >
    <SurveyPartB
      :survey-data="surveyData"
      @go-back="currentStep--"
      @continue="startTest"
    ></SurveyPartB>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { storeLDPreSurvey } from "../../../modules/storingData/storingDataLD";
import EmailInput from "./Components/EmailInput.vue";
import StudyIntroduction from "./Components/StudyIntroduction.vue";
import SurveyPartA from "./Surveys/SurveyPartA.vue";
import SurveyPartB from "./Surveys/SurveyPartB.vue";
import { SurveyData } from "./types";

enum Step {
  AskForEmailAddress = 1,
  ExplainTest,
  ShowBackgroundFormSurveyOne,
  ShowBackgroundFormSurveyTwo,
  StartTest,
}

let currentStep = ref<number>(Step.AskForEmailAddress);

let surveyData = ref<SurveyData>({
  province: "",
  countryOfOrigin1: "",
  countryOfOrigin2: "",
  countryOfOrigin3: "",
  countryOfOrigin4: "",
  city: "",
  durationSpouseHasBeenInCanada: "",
  durationUserHasBeenInCanada: "",
  durationChildrenHaveBeenInCanada: "",
  yearUsrMovedToCanada: "",
  yearSpouseMovedToCanada: "",
  yearParentsMovedToCanada: "",
  // usrDurOfStayInCanada: "",
  // familyDurOfStayInCanada: "",
  immigrantStatus: "",
  immigrantStatusOther: "",
  spouseCountryOfOrigin: "",
  usrGeneration: "",
  usrsHighestEduLvl: "",
  usrsHighestEduLvlOther: "",
  spouseHighestEduLvl: "",
  spouseHighestEduLvlOther: "",
  usrOccupInCanada: "",
  usrOccupInFormerCountry: "",
  mainLangUsedAtHome: "",
  otherLangsUsedAtHome: "",
  userIsAwareOfStrugglingChildInCmmnt: "",
  childInCmmntReceivesSupportFromHome: false,
  childInCmmntReceivesSupportFromSchool: false,
  childInCmmntReceivesSupportFromCmmnt: false,
  userIsAwareOfStrugglingChildInCntry: "",
  childInCountryReceivesSupportFromHome: false,
  childInCountryReceivesSupportFromSchool: false,
  childInCountryReceivesSupportFromCommunity: false,
  usrProficiencyInHomeLngWriting: "",
  usrProficiencyInHomeLngReading: "",
  usrProficiencyInHomeLngSpeaking: "",
  usrProficiencyInEnglishWriting: "",
  otherLangsUsedAtHomeYesOrNo: "",
  usrProficiencyInEnglishReading: "",
  usrProficiencyInEnglishSpeaking: "",
});

watch(currentStep, () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});

const store = useStore();
const router = useRouter();

function startTest() {
  let userId;
  if (String(store.state.uid).length === 0) {
    userId = Math.floor(Math.random() * 10000);
    store.commit("changeUserID", userId);
  } else {
    userId = store.state.uid;
  }

  storeLDPreSurvey(userId, surveyData.value, store);
  store.commit("clearStoredLdData");
  router.push("/LD_IBT");
}
</script>
