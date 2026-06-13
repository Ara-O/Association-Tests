<template>
  <main class="test">
    <section id="test-border">
      <div id="wrong" style="display: none">
        <!-- <h3></h3> -->
        <h4>Incorrect. Try again to progress!</h4>
        <img
          src="../../../../assets/app_icons/incorrectImg.png"
          alt="Wrong icon"
          class="wrong-icon"
        />
      </div>
      <section class="instruction" v-if="notStarted">
        <h3 v-html="fullTest[currentBlock]?.instructions"></h3>

        <img
          src="../../../../assets/app_icons/rightArrow.png"
          alt="Right arrow"
          @click="start"
          class="right-arrow"
        />
      </section>
      <div :class="{ hide: notStarted }">
        <div v-for="data in fullTest[currentBlock].data" :key="data.id">
          <div class="imagecontainer">
            <img
              class="face-img"
              loading="eager"
              :style="{ display: data.visibility }"
              :src="getImage(data.image)"
            />
          </div>
        </div>
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
    </section>
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
            "Tap left for images of white children and right for images of black children. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block1("Left", "Right", 16),
          clickerLeft: "White_Face.png",
          clickerRight: "Black_Face.png",
        },
        {
          block: "Block2_TS",
          instructions:
            "Tap left for happy faces, and right for sad faces. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block2("Left", "Right", 16),
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
            "Tap  left for white faces and happy faces, and the right for black faces and sad faces. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block3("Left", "Right", 32),
          clickerLeft: "White_And_Happy_Face.png",
          clickerRight: "Black_And_Sad_Face.png",
        },
        {
          block: "Block5_TS",
          instructions:
            "Click the left for images of black people or the right for images of white people. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block1("Right", "Left", 16),
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
            "Click the right for white faces and sad faces, and the left for black faces and happy faces. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block4("Right", "Left", 32),
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
      return new URL(
        `../../../../assets/Stimulus_Faces/${url}`,
        import.meta.url
      ).href;
    },

    getImageClicker(url) {
      return new URL(
        `../../../../assets/Clicker_Images/IAT_Black_White/${url}`,
        import.meta.url
      ).href;
    },

    start() {
      document.querySelector(".instruction").style.display = "none";
      let that = this;
      setTimeout(function () {
        that.notStarted = false;
        that.arrayIndex = 0;
      }, 500);
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
    this.$store.commit("changeCurrentTest", "IAT_Black_White_Touchscreen");
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
