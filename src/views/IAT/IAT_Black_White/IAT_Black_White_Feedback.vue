<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main v-else>
    <br />
    <jelly-button whereTo="/Home">Go back to home page</jelly-button>
    <br />
    <h4>Here's your feedback!</h4>
    <br />
    <div class="feedbacks">
      <div v-for="(data, index) in blocksAccuracydata" :key="data">
        <div class="feedbacksect" v-if="index + 1 === 4 || index + 1 === 7">
          <h3 style="line-height: 31px; font-size: 15px">
            When you were asked to associate images of black people with
            {{ index + 1 == 4 ? "sad faces" : "happy faces" }} and images of
            white people with
            {{ index + 1 == 4 ? "happy faces" : "sad faces" }} , your accuracy
            was {{ data.averageaccuracy.toFixed(2) }}%, and your average
            response time was {{ data.averagespeed.toFixed(0) }}ms
          </h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import calcAvgSpeed from "../../../modules/calculateAverageSpeed";
import contactExperience from "../../../views/contact_experience.vue";
import storeContactExperience from "../../../modules/storeContactExperience"

export default {
  components: {
    contactExperience,
  },
  data() {
    return {
      sum: 0,
      blocksAccuracydata: [],
      gender: "",
      slider1: "",
      slider2: "",
      opinionofmen: "",
      opinionofwomen: "",
      averageSpeed: 0,
      blocks: [],
      surveyNotComplete: true
      };
  },

  methods: {
    surveyComplete(userData) {
       if(userData !== "opted-out"){
        storeContactExperience(userData, "IAT_Gender", this);
      }
        this.surveyNotComplete = false;
      },
  },

  mounted() {
    calcAvgSpeed(this, this.$store.state.IAT_Black_White);
    // shows 7 blocks
    this.blocks.forEach((data) => {
      this.sum = 0;
      this.accuracy = 0;
      for (let i = 0; i < data.length; i++) {
        this.sum += data[i].ms;
        this.accuracy += data[i].accuracy;
      }
      this.sum /= data.length;
      //console.log(this.accuracy)
      this.accuracy /= data.length;
      data.averageaccuracy = this.accuracy;
      data.averagespeed = this.sum;
    });
  },
};
</script>

<style scoped >
.feedbacksect {
  display: flex;
  width: 300px;
  background-color: rgb(232 232 232);
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 29px;
  border-radius: 7px;
}

.feedbacks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
  padding: 21px 34px;
  font-weight: 300;
  margin-bottom: 0px;
}

@media (max-width: 595px) {
  main {
    background: white;
  }
  .feedbacks {
    flex-direction: column;
    flex-wrap: nowrap;
    padding-bottom: 40px;
  }

  .btn {
    margin-top: 100px;
  }
}
</style>