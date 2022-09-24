<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="it-feedback-main" v-else>
    <h4>Congratulations! You have finished the test</h4>
    <button @click="routeToHome" tag="button" class="gohome">Go Home</button>
    <br />
    <group-test
      @storeDataWithExistingUniqueId="storeDataWithExistingUniqueId"
      @storeDataWithNewUniqueId="storeDataWithNewUniqueId"
    ></group-test>
  </main>
</template>

<script>
import contactExperience from "../contact_experience.vue";
import storeContactExperience from "../../modules/storeContactExperience";
import groupTest from "../../components/GroupTest.vue";
import * as storeData from "../../modules/storingData/storingDataIT";
import { mapGetters } from "vuex";
import * as confetti from "canvas-confetti";

export default {
  components: {
    contactExperience,
    groupTest,
  },

  data() {
    return {
      surveyNotComplete: true,
      wasGroupTest: false,
    };
  },

  computed: {
    ...mapGetters(["getUID", "getCurrentTest"]),
  },

  methods: {
    surveyComplete(userData) {
      this.launchConfetti()
      if (userData !== "opted-out") {
        storeContactExperience(userData, "IT", this);
      }
      this.surveyNotComplete = false;
    },

    storeDataWithNewUniqueId(role, individualUid, uid) {
      // console.log(role, individualUid, uid);
      storeData.storeITGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        uid
      );

      this.wasGroupTest = true;
    },

    storeDataWithExistingUniqueId(role, individualUid, familyUniqueId) {
      // console.log(role, individualUid, familyUniqueId);
      storeData.storeITGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        familyUniqueId
      );

      this.wasGroupTest = true;
    },

    routeToHome() {
      if(!this.wasGroupTest){
        storeData.storeITIndividualData(this.getCurrentTest, this);
      }
      this.$router.push("/Home");
    },

    
    launchConfetti() {
      var myCanvas = document.querySelector(".it-feedback-main");

      var myConfetti = confetti.create(myCanvas, { resize: true });

      // do this for 1 seconds
      var duration = 10 * 100;
      var end = Date.now() + duration;

      (function frame() {
        // launch a few confetti from the left edge
        myConfetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        // and launch a few from the right edge
        myConfetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });

        // keep going until we are out of time
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    },

  },

};
</script>
<style scoped>
.gohome {
      display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(185deg, #7eefbf, #389820);
    border-radius: 47px;
    box-shadow: -2px 4px 4px -1px #cbcbcb;
    cursor: pointer;
    margin-bottom: 25px;
    transition: all 250ms ease-in-out;
    color: white;
    text-decoration: none;
    font-size: 15px;
    padding: 9px 24px;
    font-weight: 300;
    margin-bottom: 20px;
    height: 54px;
    width: 170px;
    border: none;
}

.gohome:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}
</style>