<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main class="gender-feedback-main" v-else>
    <br />
    <button @click="routeToHome" class="return-to-home-btn">
      Go back to home page
    </button>
    <h4>Here's your feedback!</h4>
    <div class="feedbacks">
       <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <div v-for="(n, index) in 2" :key="n">
            <img
              :src="getImg(getCurrentTestTrimmed(0, index))"
              alt="Feedback image"
            />
            <h3 v-if="index === 0" style="margin: 0px">+</h3>
          </div>
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ this.calculateAccuracy(0) }}
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ this.calculateSpeed(0) }}
          </h3>
        </div>
      </div>
       <div class="feedback-wrapper">
        <!-- image here -->
        <div class="image-wrapper">
          <div v-for="(n, index) in 2" :key="n">
            <img
              :src="getImg(getCurrentTestTrimmed(1, index))"
              alt="Feedback image"
            />
            <h3 v-if="index === 0" style="margin: 0px">+</h3>
          </div>
        </div>
        <div class="feedback-message-wrapper">
          <h3 class="feedback-message">
            Accuracy: {{ this.calculateAccuracy(1) }}
          </h3>
          <h3 class="feedback-message">
            Speed:
            {{ this.calculateSpeed(1)}}
          </h3>
        </div>
      </div>
    </div>
    <br />
    <group-test
      @storeDataWithExistingUniqueId="storeDataWithExistingUniqueId"
      @storeDataWithNewUniqueId="storeDataWithNewUniqueId"
    ></group-test>
  </main>
</template>

<script>
import contactExperience from "../contact_experience.vue";
import groupTest from "../../components/GroupTest.vue";
import storeContactExperience from "../../modules/storeContactExperience";
import * as storeData from "../../modules/storingData/storingDataIBT";
import { mapGetters } from "vuex";
export default {
  components: {
    contactExperience,
    groupTest,
  },

  data() {
    return {
      surveyNotComplete: true,
      wasGroupTest: false,
       IBT_Gender_Toy_Target_0: [
        "Clicker_Images/IAT_Gender_Toy/Male_And_Male_Toy.png",
        "Clicker_Images/IAT_Gender_Toy/Female_And_Female_Toy.png",
      ],
      IBT_Gender_Toy_Target_1: [
        "Clicker_Images/IAT_Gender_Toy/Male_And_Female_Toy.png",
        "Clicker_Images/IAT_Gender_Toy/Female_And_Male_Toy.png",
      ],
      IBT_Gender_Clothing_Target_0: [
        "Clicker_Images/IAT_Gender_Clothing/Male_And_Male_Clothing.png",
        "Clicker_Images/IAT_Gender_Clothing/Female_And_Female_Clothing.png",
      ],
      IBT_Gender_Clothing_Target_1: [
        "Clicker_Images/IAT_Gender_Clothing/Male_And_Female_Clothing.png",
        "Clicker_Images/IAT_Gender_Clothing/Female_And_Male_Clothing.png",
      ],
      IBT_Gender_Subject_Target_0: [
        "Clicker_Images/IAT_Gender_Subject/Male_And_Math.png",
        "Clicker_Images/IAT_Gender_Subject/Female_And_Reading.png",
      ],
      IBT_Gender_Subject_Target_1: [
        "Clicker_Images/IAT_Gender_Subject/Male_And_Reading.png",
        "Clicker_Images/IAT_Gender_Subject/Female_And_Math.png",
      ],
      IBT_Gender_Roles_Target_0: [
        "Clicker_Images/IAT_Gender_Roles/Male_And_Office.png",
        "Clicker_Images/IAT_Gender_Roles/Female_And_Kitchen.png",
      ],
      IBT_Gender_Roles_Target_1: [
        "Clicker_Images/IAT_Gender_Roles/Male_And_Kitchen.png",
        "Clicker_Images/IAT_Gender_Roles/Female_And_Office.png",
      ],
      IBT_Gender_Color_Target_0: [
        "Clicker_Images/IAT_Gender_Color/Male_And_Blue.png",
        "Clicker_Images/IAT_Gender_Color/Female_And_Pink.png",
      ],
      IBT_Gender_Color_Target_1: [
        "Clicker_Images/IAT_Gender_Color/Male_And_Pink.png",
        "Clicker_Images/IAT_Gender_Color/Female_And_Blue.png",
      ],
      IBT_Black_White_Target_0: [
        "Clicker_Images/IAT_Black_White/White_And_Happy_Face.png",
        "Clicker_Images/IAT_Black_White/Black_And_Sad_Face.png",
      ],
      IBT_Black_White_Target_1: [
        "Clicker_Images/IAT_Black_White/White_And_Sad_Face.png",
        "Clicker_Images/IAT_Black_White/Black_And_Happy_Face.png",
      ],
    };
  },

  computed: {
    ...mapGetters(["getUID", "getCurrentTest"]),
  },

  methods: {
    getImg(img) {
      return require(`../../assets/${img}`);
    },

    getCurrentTestTrimmed(target, index) {
        return this[`${this.getCurrentTest}_Target_${target}`][index];
    },

    calculateAccuracy(trialIndex) {
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trialIndex].forEach((trial) => {
        nsum += trial.accuracy;
      });
      nsum /= this.$store.state[this.getCurrentTest][trialIndex].length;
      return `${nsum.toFixed(2)}%`;
    },

    calculateSpeed(trialIndex) {
      let nsum = 0;
      this.$store.state[this.getCurrentTest][trialIndex].forEach((trial) => {
        nsum += trial.ms;
      });
      nsum /= this.$store.state[this.getCurrentTest][trialIndex].length;
      return `${nsum.toFixed(2)}ms`;
    },

    surveyComplete(userData) {
      if (userData !== "opted-out") {
        storeContactExperience(userData, this.getCurrentTest, this);
      }
      this.surveyNotComplete = false;
    },

    storeDataWithNewUniqueId(role, individualUid, uid) {
      // console.log(role, individualUid, uid);
      storeData.storeIBTGroupData(
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
      storeData.storeIBTGroupData(
        this.getCurrentTest,
        this,
        role,
        individualUid,
        familyUniqueId
      );

      this.wasGroupTest = true;
    },

    routeToHome() {
      if (!this.wasGroupTest) {
        storeData.storeIBTIndividualData(this.getCurrentTest, this);
      }
      this.$router.push("/Home");
    },
  },
  mounted() {
    this.wasGroupTest = false;
    // console.log(this.$store.state[this.getCurrentTest]);
  },
};
</script>

<style scoped >
@import url("../../styles/Feedback_Page.css");
</style>