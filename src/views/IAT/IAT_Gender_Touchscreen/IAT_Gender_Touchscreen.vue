<template>
  <main class="test">
    <section class="instruction" v-if="notStarted">
      <h3 v-html="genderTest[currentBlock]?.instructions"></h3>

      <img
        src="../../../assets/app-icons/rightArrow.png"
        alt="Right arrow"
        @click="start"
        class="right-arrow"
      />
    </section>
    <div v-for="data in genderTest[currentBlock].data" :key="data.id" v-else>
      <div class="imagecontainer">
        <img
          class="faceimg"
          loading="eager"
          :style="{ display: data.visibility }"
          :src="getImage(data.image)"
        />
      </div>
    </div>
    <div id="wrong" style="display: none">
      <!-- <h3></h3> -->
      <h4>Incorrect. Try again to progress!</h4>
      <img
        src="../../../assets/app-icons/incorrectImg.png"
        alt="Wrong icon"
        class="wrongicon"
      />
    </div>
    <clicker>
      <template #left>{{ genderTest[currentBlock].clickerLeft }}</template>
      <template #right>{{ genderTest[currentBlock].clickerRight }}</template>
    </clicker>
  </main>
</template>

<script>
import {
  testData_Block1,
  testData_Block2,
  testData_Block3,
  testData_Block4,
} from "../../../modules/generateTrials";
import handleAnswer_TS from "../../../modules/handleAnswers_TS";
import {startTimer} from "../../../modules/handleAnswers_TS";
export default {
  data() {
    return {
      testData: [],
      arrayIndex: 0,
      currentBlock: 0,
      notStarted: true,
      genderTest: [
        {
          block: "Block1_TS",
          instructions:
            "Click left for Male images and right for Female images",
          data: testData_Block1("Left", "Right", 20),
          clickerLeft: "Male",
          clickerRight: "Female",
        },
        {
          block: "Block2_TS",
          instructions: "Click left for Male toys, and right for Female toys",
          data: testData_Block2("Left", "Right"),
          clickerLeft: "Male toy",
          clickerRight: "Female toy",
        },
        {
          block: "Block3_TS",
          instructions:
          "Practice: Click the left for Male images/Male toys, and the right for Female images/Female toys",
          data: testData_Block3("Left", "Right", 10),
          clickerLeft: "Male/Male toy",
          clickerRight: "Female/Female toy",
        },
        {
          block: "Block4_TS",
          instructions:
            "Let's Continue: Click the left for Male images/Male toys, and the right for Female images/Female toys",
          data: testData_Block3("Left", "Right", 20),
          clickerLeft: "Male/Male toy",
          clickerRight: "Female/Female toy",
        },
        {
          block: "Block5_TS",
          instructions:
            "The letters are reversed now!<br/>Choose the right for Male images or the left for Female images",
          data: testData_Block1("Right", "Left", 20),
          clickerLeft: "Female",
          clickerRight: "Male",
        },
        {
          block: "Block6_TS",
          instructions:
            "Practice: Click the right for Male images/Female toys, and the left for Female images/Male toys",
          data: testData_Block4("Right", "Left", 10),
          clickerLeft: "Female/Male toy",
          clickerRight: "Male/Female toy",
        },
        {
          block: "Block7_TS",
          instructions:
            "Let's Continue: Click the right for Male and Home, and the left for Female and Career",
          data: testData_Block4("Right", "Left", 20),
          clickerLeft: "Female/Male toy",
          clickerRight: "Male/Female toy",
        },
      ],
      testOver: false,
    };
  },

  watch: {
    testOver() {
      if (this.testOver === true) {
        document
          .querySelector(".test")
          .removeEventListener("click", this.handleAnswer);
        this.$router.push("/IAT_Gender_Touchscreen_Feedback");
      }
    },

    notStarted(){
      if(this.notStarted === false ){
            startTimer();
      }
    }
  },

  methods: {
    getImage(url) {
      return require(`../../../assets/stimulus_faces/${url}`);
    },

    start() {
      this.notStarted = false;
      this.arrayIndex = 0;
    },

    handleAnswer(e) {
      handleAnswer_TS(
        e.target,
        this,
        this.genderTest[this.currentBlock].data,
        this.genderTest[this.currentBlock].block,
        "IAT_Gender_Touchscreen"
      );
    },
  },

  mounted() {
    let that = this;
    document
      .querySelector(".test")
      .addEventListener("click", that.handleAnswer);
  },
};
</script>

<style scoped>
@import url("../../../styles/IAT_TS.css");
</style>