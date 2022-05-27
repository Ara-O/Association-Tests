<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="gender-feedback-main" v-else>
    <br />
    <button @click="routeToHome">Go back to home page</button>
    <h4>Here's your feedback!</h4>
    <div class="feedbacks">
      <div v-for="(data, index) in blocksAccuracydata" :key="data">
        <div class="feedbacksect" v-if="index + 1 === 4 || index + 1 === 7">
          <h3 style="line-height: 31px; font-size: 15px">
            When you were asked to associate male images with
            {{ index + 1 == 4 ? "male toys" : "female toys" }} and female with
            {{ index + 1 == 4 ? "female toys" : "male toys" }} , your accuracy
            was {{ data.averageaccuracy.toFixed(2) }}%, and your average
            response time was {{ data.averagespeed.toFixed(0) }}ms
          </h3>
        </div>
      </div>
    </div>
    <br />
      <group-test @storeDataWithExistingUniqueId="storeDataWithExistingUniqueId" @storeDataWithNewUniqueId="storeDataWithNewUniqueId"></group-test>
  </main>
</template>

<script>
import calcAvgSpeed from "../../../modules/calculateAverageSpeed";
import contactExperience from "../../../views/contact_experience.vue";
import groupTest from "../../../components/GroupTest.vue";
import storeContactExperience from "../../../modules/storeContactExperience";
import * as storeData from "../../../modules/storingDataIAT"
import  {mapGetters} from 'vuex';
export default {
  components: {
    contactExperience,
    groupTest
  },

  data() {
    return {
      surveyNotComplete: true,
      sum: 0,
      blocksAccuracydata: [],
      gender: "",
      slider1: "",
      slider2: "",
      opinionofmen: "",
      opinionofwomen: "",
      averageSpeed: 0,
      blocks: [],

    };
  },

  computed: {
    ...mapGetters(['getUID', 'getIatData'])
  },

  methods: {
    surveyComplete(userData) {
      if (userData !== "opted-out") {
        storeContactExperience(userData, "IAT_Gender", this);
      }
      this.surveyNotComplete = false;
    },

    storeDataWithNewUniqueId(role, individualUid, uid){
       storeData.storeIATGroupData("IAT_Gender", this, role, individualUid, uid)
    },

    storeDataWithExistingUniqueId(role, individualUid, familyUniqueId){
       storeData.storeIATGroupData("IAT_Gender", this, role, individualUid, familyUniqueId)
    },

    routeToHome(){
        storeData.storeIATIndividualData("IAT_Gender", this)
        this.$router.push("/Home")
    }
  },
  mounted() {
    calcAvgSpeed(this, this.$store.state.IAT_Gender);
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
  width: 469px;
  height: auto;
  display: flex;
  box-shadow: -4px -1px 6px hsl(0deg 0% 93% / 70%),
    2px 1px 3px rgb(218 218 219 / 95%);
  background: white;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32px 41px;
}

.gender-feedback-main{
      display: flex;
    justify-content: start;
    padding: 20px 0px;
    align-items: center;
    flex-direction: column;
    height: auto;

}
  .feedbacks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

.role-label{
    margin-right: 20px;
}


@media(max-height: 600px){
  main {
    height: auto;
    padding: 20px 0px;
}
}
@media (max-width: 595px) {
  main {
    background: white;
  }

  .feedbacksect {
    border: solid 3px #ffffff;
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