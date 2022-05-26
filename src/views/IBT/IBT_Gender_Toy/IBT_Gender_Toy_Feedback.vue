<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main v-else>
    <h3>Here is your feedback!</h3>
    <h4>You have finished the game :)</h4>
    <jelly-button whereTo="/Home" style="margin-bottom: -11px" class="feedback-btn"
      >Go Home</jelly-button
    >
    <br />
    <div class="feedbacks">
      <div class="feedback">
        <h3 style="line-height: 26px">
          For block one, where you associated male faces with a male toy and
          female faces with a female toys. Your feedback is:
        </h3>
        <h2 class="data">Average accuracy: {{ totalacc1.toFixed(2) }}%</h2>
        <h2 class="data">Average Speed: {{ totalspeed1.toFixed(2) }} ms</h2>
      </div>
      <div class="feedback">
        <h3 style="line-height: 26px">
          For block one, where you associated female faces with a male toy and
          male faces with a female toys
        </h3>
        <h2 class="data">Average accuracy: {{ totalacc2.toFixed(2) }}%</h2>
        <h2 class="data">Average Speed: {{ totalspeed2.toFixed(2) }} ms</h2>
      </div>
    </div>
  </main>
</template>

<script>
import contactExperience from "../../contact_experience.vue";
import storeContactExperience from "../../../modules/storeContactExperience";
export default {
  components: {
    contactExperience,
  },
  data() {
    return {
      fullData: [],
      totalacc1: 0,
      totalspeed1: 0,
      totalacc2: 0,
      totalspeed2: 0,
      surveyNotComplete: true,
    };
  },

  methods: {
    surveyComplete(userData) {
      if (userData !== "opted-out") {
        storeContactExperience(userData, "IBT_Gender_Toy", this);
      }
      this.surveyNotComplete = false;
    },
  },

  mounted() {
    this.fullData1 = this.$store.state.ibt_data[1];
    this.fullData2 = this.$store.state.ibt_data[2];
    this.fullData1.forEach((data) => {
      this.totalacc1 += data.accuracy;
      this.totalspeed1 += data.ms;
    });
    this.fullData2.forEach((data) => {
      this.totalacc2 += data.accuracy;
      this.totalspeed2 += data.ms;
    });

    this.totalacc1 = this.totalacc1 / this.fullData1.length;
    this.totalacc2 = this.totalacc2 / this.fullData2.length;
    this.totalspeed1 = this.totalspeed1 / this.fullData1.length;
    this.totalspeed2 = this.totalspeed2 / this.fullData2.length;
  },
};
</script>


<style scoped>
@import url("../../../styles/IBT.css");
</style>