<template>
  <main class="test">
    <section id="test-border">
      <div id="wrong" style="display: none">
        <!-- <h3></h3> -->
        <h4>Incorrect. Try again to progress!</h4>
        <img
          src="../../../../assets/App_Icons/incorrectImg.png"
          alt="Wrong icon"
          class="wrong-icon"
        />
      </div>
      <section class="instruction" v-if="notStarted">
        <h3 v-html="fullTest[currentBlock]?.instructions"></h3>
        <img
          src="../../../../assets/App_Icons/rightArrow.png"
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
            alt="Clicker image"
            class="left"
            :class="calculateClass"
          />
        </template>
        <template #right>
          <img
            :src="getImageClicker(fullTest[currentBlock].clickerRight)"
            alt="Clicker image"
            class="right"
            :class="calculateClass"
          />
        </template>
      </clicker>
    </section>
  </main>
</template>

<script>
import "../../../../styles/IAT.css";
import "../../../../styles/IAT_TS.css";
import {
  testData_Block1,
  testData_Block2,
  testData_Block3,
  testData_Block4,
} from "../../../../modules/generateIatTrialsGender/generateIatTrialsOccupation.js";
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
            "Tap left for male images and right for female images. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block1("Left", "Right", 8),
          clickerLeft: "Male.png",
          clickerRight: "Female.png",
        },
        {
          block: "Block2_TS",
          instructions:
            "Tap left for images of doctors, and right for images of nurses. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block2("Left", "Right", 8),
          clickerLeft: "Doctor1.png",
          clickerRight: "Nurse1.png",
        },
        {
          block: "Block3_TS",
          instructions:
            "Practice: Click the left box for Male images/Doctor images, and the right box for Female images/Nurse images",
          data: testData_Block3("Left", "Right", 8, true),
          clickerLeft: "Male_And_Doctor.png",
          clickerRight: "Female_And_Nurse.png",
        },
        {
          block: "Block4_TS",
          instructions:
            "Tap left for male images and doctor images, and right for female images and nurse images. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block3("Left", "Right", 8),
          clickerLeft: "Male_And_Doctor.png",
          clickerRight: "Female_And_Nurse.png",
        },
        {
          block: "Block5_TS",
          instructions:
            "Tap right for male images and left for female images. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block1("Right", "Left", 8),
          clickerLeft: "Female.png",
          clickerRight: "Male.png",
        },
        {
          block: "Block6_TS",
          instructions:
            "Practice: Click the right for Male images/Nurse images, and the left for Female images/Doctor images",
          data: testData_Block4("Right", "Left", 8, true),
          clickerLeft: "Female_And_Doctor.png",
          clickerRight: "Male_And_Nurse.png",
        },
        {
          block: "Block7_TS",
          instructions:
            "Tap right for male images and nurse images, and left for female images and doctor images. When you are ready, please tap the below green arrow to start. Remember, you should tap as fast as you can!",
          data: testData_Block4("Right", "Left", 8),
          clickerLeft: "Female_And_Doctor.png",
          clickerRight: "Male_And_Nurse.png",
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
      if (
        this.currentBlock == 0 ||
        this.currentBlock == 1 ||
        this.currentBlock == 4
      ) {
        return "clickerImage";
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
      return new URL(
        `../../../../assets/IAT_Gender_Occupation/${url}`,
        import.meta.url
      ).href;
    },

    getImageClicker(url) {
      return new URL(
        `../../../../assets/Clicker_Images/IAT_Gender_Occupation/${url}`,
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
        "IAT_Gender_Occupation_Touchscreen"
      );
    },
  },

  mounted() {
    this.$store.commit(
      "changeCurrentTest",
      "IAT_Gender_Occupation_Touchscreen"
    );
    this.$store.state["IAT_Gender_Occupation_Touchscreen"] = [];
    let that = this;
    document
      .querySelector(".test")
      .addEventListener("click", that.handleAnswer);
  },
};
</script>
