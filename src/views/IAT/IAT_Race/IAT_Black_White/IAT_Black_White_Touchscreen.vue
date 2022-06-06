<template>
  <main class="test">
    <section class="instruction" v-if="notStarted">
      <h3 v-html="fullTest[currentBlock]?.instructions"></h3>

      <img
        src="../../../../assets/app_icons/rightArrow.png"
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
        src="../../../../assets/app_icons/incorrectImg.png"
        alt="Wrong icon"
        class="wrong-icon"
      />
    </div>
    <clicker>
      <template #left>
        <img
          :src="getImageClicker(fullTest[currentBlock].clickerLeft)"
          alt="Clicker left"
          class="clickerImage left"
          :class="calculateClass"
        />
      </template>
      <template #right>
        <img
          :src="getImageClicker(fullTest[currentBlock].clickerRight)"
          alt="Clicker left"
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
} from "../../../../modules/generateIatTrialsRace";
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
            "Click left for images of white children and right for images of black children",
          data: testData_Block1("Left", "Right", 10),
          clickerLeft: "White_Face.png",
          clickerRight: "Black_Face.png",
        },
        {
          block: "Block2_TS",
          instructions: "Click left for happy faces, and right for sad faces",
          data: testData_Block2("Left", "Right", 10),
          clickerLeft: "Happy_Face.jpg",
          clickerRight: "Sad_Face.jpg",
        },
        {
          block: "Block3_TS",
          instructions:
            "Practice: Click the left for White faces/Happy faces, and the right for Black faces/Sad faces",
          data: testData_Block3("Left", "Right", 10),
          clickerLeft: "White_And_Happy_Face.png",
          clickerRight: "Black_And_Sad_Face.png",
        },
        {
          block: "Block4_TS",
          instructions:
            "Let's Continue: Click the left for white faces/Happy faces, and the right for Black faces/Sad faces",
          data: testData_Block3("Left", "Right", 10),
          clickerLeft: "White_And_Happy_Face.png",
          clickerRight: "Black_And_Sad_Face.png",
        },
        {
          block: "Block5_TS",
          instructions:
            "The images are reversed now!<br/>Choose the left for images of black people or the right for images of white people",
          data: testData_Block1("Right", "Left", 10),
          clickerLeft: "Black_Face.png",
          clickerRight: "White_Face.png",
        },
        {
          block: "Block6_TS",
          instructions:
            "Practice: Click the left for Black faces/Happy faces  and the left for White faces/Sad faces",
          data: testData_Block4("Right", "Left", 10),
          clickerLeft: "Black_And_Happy_Face.png",
          clickerRight: "White_And_Sad_Face.png",
        },
        {
          block: "Block7_TS",
          instructions:
            "Let's continue: Click the right for White faces/Sad faces, and the left for Black faces/Happy faces",
          data: testData_Block4("Right", "Left", 10),
          clickerLeft: "Black_And_Happy_Face.png",
          clickerRight: "White_And_Sad_Face.png",
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
        "IAT_Black_White_Touchscreen"
      );
    },
  },

  computed: {
    calculateClass() {
      if (this.currentBlock == 1) {
        return "clickerImage";
      } else if (
        this.currentBlock == 2 ||
        this.currentBlock == 3 ||
        this.currentBlock == 5 ||
        this.currentBlock == 6
      ) {
        return "clickerImageCombined_Race";
      } else {
        return "";
      }
    },
  },

  mounted() {
        this.$store.commit("changeCurrentTest", "IAT_Black_White_Touchscreen")
    this.$store.state["IAT_Black_White_Touchscreen"] = [];
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