<template>
  <main>
    <section v-if="!userDecided" class="userDecided">
      <h3>You have finished the test! Do you want to take a quick contact experience survey before you receive your feedback?</h3>
      <button class="btn" @click="userDecided = true">Yes</button>
      <button class="btn" @click="routeToFeedback">No</button>
    </section>
    <form v-else>
      <h3 style="font-size: 22px">Contact Experience</h3>
      <h5 style="margin-top: 7px; margin-bottom: 0px">
        You have made it to the end of the test! We will ask you a few questions
        before you receive your results
      </h5>
      <div>
        <br>
         <h5 style="display: inline; font-weight: 400">Progress Bar:  </h5>
        <progress max="100" :value="20 * progress"></progress>
      </div>
      <!-- emit-data is called when the user has finished the current section -->
      <div v-if="progress === 1">
        <first-survey-section
          @emit-data="retrieveSurveyData"
        ></first-survey-section>
      </div>
      <div v-if="progress === 2">
        <second-survey-section
          @emit-data="retrieveSurveyData"
        ></second-survey-section>
      </div>
      <div v-if="progress === 3">
        <third-survey-section @emit-data="retrieveSurveyData">
        </third-survey-section>
      </div>
      <div v-if="progress === 4">
        <fourth-survey-section @emit-data="retrieveSurveyData">
        </fourth-survey-section>
      </div>
      <div v-if="progress === 5">
        <fifth-survey-section @emit-data="retrieveSurveyData">
        </fifth-survey-section>
      </div>
    </form>
  </main>
</template>

<script>
import firstSurveySection from "../components/ContactExperienceSurveySections/FirstSurveySection.vue";
import secondSurveySection from "../components/ContactExperienceSurveySections/SecondSurveySection.vue";
import thirdSurveySection from "../components/ContactExperienceSurveySections/ThirdSurveySection.vue";
import fourthSurveySection from "../components/ContactExperienceSurveySections/FourthSurveySection.vue";
import fifthSurveySection from "../components/ContactExperienceSurveySections/FifthSurveySection.vue";
export default {
  emits: ["surveyDone"],
  components: {
    firstSurveySection,
    secondSurveySection,
    thirdSurveySection,
    fourthSurveySection,
    fifthSurveySection,
  },
 
  data() {
    return {
      progress: 1,
      userDecided: false,
      ethnicGroups: [
        "Aboriginal (e.g. Inuit, Métis, First Nations)",
        "Arab/West Asian (e.g., Armenian, Egyptian, Iranian)",
        "Black (e.g., Somalia, Nigeria, Cuba, Jamaica)",
        "East Asian (e.g. Japanese, Chinese, Korean)",
        "Latin American (e.g. Mexican, Colombian)",
        "South Asian (e.g. Indian, Pakistani)",
        "South East Asian (e.g. Thai, Filipino)",
        "White/Caucasian (e.g. British, Italian, Ukrainian)",
      ],
      userData: [],
    };
  },

  methods: {
    retrieveSurveyData(userData) {
      this.userData.push(userData);
      this.userData = [this.userData.reduce(((r, c) => Object.assign(r, c)), {})];
      if (this.progress === 5) {
        this.$emit("surveyDone", this.userData);
      }else {
        this.progress++;
      }
    },

    routeToFeedback(){
      this.$emit("surveyDone", "opted-out")
    }


  },
};
</script>

<style scoped>
.btn {
  justify-content: center;
  align-items: center;
  background: linear-gradient(185deg, #7eefbf, #389820);
  border: none;
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  height: 51px;
  text-decoration: none;
  font-weight: 300;
  padding: 9px 34px;
  font-size: 14px;
}

.btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}

.userDecided{
  display: flex;
  justify-content: center;
  flex-direction: column;
   box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 35px 46px;
  align-items: center;
  border-radius: 5px;
}

.userDecided h3{
      font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 600px
}

</style>