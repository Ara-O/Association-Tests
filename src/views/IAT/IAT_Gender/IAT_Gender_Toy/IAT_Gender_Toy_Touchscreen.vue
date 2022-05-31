<template>
  <main class="test">
    <section class="instruction" v-if="notStarted">
      <h3 v-html="fullTest[currentBlock]?.instructions"></h3>
      <img
        src="../../../../assets/app-icons/rightArrow.png"
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
        src="../../../../assets/app-icons/incorrectImg.png"
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
          :class="calculateClass"
        />
      </template>
      <template #right>
        <img
          :src="getImageClicker(fullTest[currentBlock].clickerRight)"
          alt="Clicker image"
          class="clickerImage right"
          :class="calculateClass"
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
} from "../../../../modules/generateIatTrialsGender";
import handleAnswer_TS from "../../../../modules/handleAnswers_TS";
import { startTimer } from "../../../../modules/handleAnswers_TS";
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
          data: testData_Block1("Left", "Right", 2),
          clickerLeft: "Male.png",
          clickerRight: "Female.png",
        },
        {
          block: "Block2_TS",
          instructions:
            "Click the left for Male toys, and the right for Female toys",
          data: testData_Block2("Left", "Right"),
          clickerLeft: "Male_Toy.png",
          clickerRight: "Female_Toy.png",
        },
        {
          block: "Block3_TS",
          instructions:
            "Practice: Click the left and blue box for Male images/Male toys, and the right and pink box for Female images/Female toys",
          data: testData_Block3("Left", "Right", 2),
          clickerLeft: "Male_And_Male_Toy.png",
          clickerRight: "Female_And_Female_Toy.png",
        },
        {
          block: "Block4_TS",
          instructions:
            "Let's Continue: Click the left box for Male images/Male toys, and the right box for Female images/Female toys",
          data: testData_Block3("Left", "Right", 2),
          clickerLeft: "Male_And_Male_Toy.png",
          clickerRight: "Female_And_Female_Toy.png",
        },
        {
          block: "Block5_TS",
          instructions:
            "The images are reversed now!<br/>Choose the right for Male images or the left for Female images",
          data: testData_Block1("Right", "Left", 2),
          clickerLeft: "Female.png",
          clickerRight: "Male.png",
        },
        {
          block: "Block6_TS",
          instructions:
            "Practice: Click the right for Male images/Female toys, and the left for Female images/Male toys",
          data: testData_Block4("Right", "Left", 2),
          clickerLeft: "Female_And_Male_Toy.png",
          clickerRight: "Male_And_Female_Toy.png",
        },
        {
          block: "Block7_TS",
          instructions:
            "Let's Continue: Click the right for Male and Home, and the left for Female and Career",
          data: testData_Block4("Right", "Left", 2),
          clickerLeft: "Female_And_Male_Toy.png",
          clickerRight: "Male_And_Female_Toy.png",
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
      return require(`../../../../assets/stimulus_faces/${url}`);
    },

    getImageClicker(url) {
      return require(`../../../../assets/clicker_images/${url}`);
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
        "IAT_Gender_Toy_Touchscreen"
      );
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IAT_Gender_Toy_Touchscreen");
    this.$store.state["IAT_Gender_Toy_Touchscreen"] = [];
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