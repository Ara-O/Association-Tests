<template>
  <main class="test">
    <section class="instruction" v-if="notStarted">
      <h3 v-html="fullTest[currentBlock]?.instructions"></h3>
      <img
        src="../../../../assets/App_Icons/rightArrow.png"
        alt="Right arrow"
        @click="start"
        class="right-arrow"
      />
    </section>
    <div v-for="data in fullTest[currentBlock].data" :key="data.id" v-else>
      <div class="imagecontainer">
        <img
          class="face-img"
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
        src="../../../../assets/App_Icons/incorrectImg.png"
        alt="Wrong icon"
        class="wrong-icon"
      />
    </div>
    <clicker
      :rightColor="fullTest[currentBlock]?.colorRight"
      :leftColor="fullTest[currentBlock]?.colorLeft"
    >
      <template #left>
        <img
          :src="getImageClicker(fullTest[currentBlock].clickerLeft)"
          alt="Clicker image"
          class="clickerImage left"
        />
      </template>
      <template #right>
        <img
          :src="getImageClicker(fullTest[currentBlock].clickerRight)"
          alt="Clicker image"
          class="clickerImage right"
        />
      </template>
    </clicker>
  </main>
</template>

<script>
import {
  testData_Block1,
  testData_Block2,
  testData_Block3,
  testData_Block4,
} from "../../../../modules/generateIatTrialsGender/generateIatTrialsClothing";
import handleAnswer_TS from "../../../../modules/handleAnswers/handleAnswers_TS";
import { startTimer } from "../../../../modules/handleAnswers/handleAnswers_TS";
export default {
  data() {
    return {
      testData: [],
      arrayIndex: 0,
      currentBlock: 0,
      notStarted: true,
      fullTest: [
        {
          block: "Block1_TS",
          instructions:
            "Click left for Male images and right for Female images",
          data: testData_Block1("Left", "Right", 16),
          clickerLeft: "Male.png",
          clickerRight: "Female.png",
        },
        {
          block: "Block2_TS",
          instructions:
            "Click the left for Male clothing, and the right for Female clothing",
          data: testData_Block2("Left", "Right", 16),
          clickerLeft: "Male_Clothing.png",
          clickerRight: "Female_Clothing.png",
        },
        // {
        //   block: "Block3_TS",
        //   instructions:
        //     "Practice: Click the left box for Male images/Male clothing, and the right box for Female images/Female clothing",
        //   data: testData_Block3("Left", "Right", 8, true),
        //   clickerLeft: "Male_And_Male_Clothing.png",
        //   clickerRight: "Female_And_Female_Clothing.png",
        // },
        {
          block: "Block3_TS",
          instructions:
            "Click the left box for Male images/Male clothing, and the right box for Female images/Female clothing",
          data: testData_Block3("Left", "Right", 32),
          clickerLeft: "Male_And_Male_Clothing.png",
          clickerRight: "Female_And_Female_Clothing.png",
        },
        {
          block: "Block4_TS",
          instructions:
            "The images are reversed now!<br/>Choose the right for Male images or the left for Female images",
          data: testData_Block1("Right", "Left", 16),
          clickerLeft: "Female.png",
          clickerRight: "Male.png",
        },
        // {
        //   block: "Block6_TS",
        //   instructions:
        //     "Practice: Click the right for Male images/Female clothing, and the left for Female images/Male clothing",
        //   data: testData_Block4("Right", "Left", 8, true),
        //   clickerLeft: "Female_And_Male_Clothing.png",
        //   clickerRight: "Male_And_Female_Clothing.png",
        // },
        {
          block: "Block5_TS",
          instructions:
            "Click the right for Male images/Female clothing, and the left for Female images/Male clothing",
          data: testData_Block4("Right", "Left", 32),
          clickerLeft: "Female_And_Male_Clothing.png",
          clickerRight: "Male_And_Female_Clothing.png",
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
        this.$router.push("/IAT_Feedback");
      }
    },

    notStarted() {
      if (this.notStarted === false) {
        startTimer();
      }
    },
  },

  computed: {
    calculateClass() {
      if (this.currentBlock == 1) {
        return "clickerImageToy";
      } else if (
        this.currentBlock == 2 ||
        this.currentBlock == 3 ||
        this.currentBlock == 5 ||
        this.currentBlock == 6
      ) {
        return "clickerImageCombined";
      } else {
        return "";
      }
    },
  },

  methods: {
    getImage(url) {
      return require(`../../../../assets/IAT_Gender_Clothing/${url}`);
    },

    getImageClicker(url) {
      return require(`../../../../assets/Clicker_Images/IAT_Gender_Clothing/${url}`);
    },

    start() {
      this.notStarted = false;
      this.arrayIndex = 0;
    },

    handleAnswer(e) {
      handleAnswer_TS(
        e.target,
        this,
        this.fullTest[this.currentBlock].data,
        this.fullTest[this.currentBlock].block,
        "IAT_Gender_Clothing_Touchscreen"
      );
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IAT_Gender_Clothing_Touchscreen");
    this.$store.state["IAT_Gender_Clothing_Touchscreen"] = [];
    let that = this;
    document
      .querySelector(".test")
      .addEventListener("click", that.handleAnswer);
  },
};
</script>

<style scoped>
@import url("../../../../styles/IAT_TS.css");
</style>