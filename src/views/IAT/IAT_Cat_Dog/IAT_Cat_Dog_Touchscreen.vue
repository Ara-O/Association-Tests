<template>
  <main class="test">
    <section class="instruction" v-if="notStarted">
      <h3 v-html="fullTest[currentBlock]?.instructions"></h3>
      <img
        src="../../../assets/App_Icons/rightArrow.png"
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
        src="../../../assets/App_Icons/incorrectImg.png"
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
} from "../../../modules/generateIatTrialsCatDog";
import handleAnswer_TS from "../../../modules/handleAnswers/handleAnswers_TS";
import { startTimer } from "../../../modules/handleAnswers/handleAnswers_TS";
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
            "Click left for Cat images and right for Dog images",
          data: testData_Block1("Left", "Right", 16),
          clickerLeft: "Cat.png",
          clickerRight: "Dog.png",
        },
        {
          block: "Block2_TS",
          instructions:
            "Click the left for Happy faces, and the right for Sad faces",
          data: testData_Block2("Left", "Right", 16),
          clickerLeft: "Happy.png",
          clickerRight: "Sad.png",
        },
        // {
        //   block: "Block3_TS",
        //   instructions:
        //     "Practice: Click the left box for Dog images/Happy faces, and the right box for Cat images/Sad faces",
        //   data: testData_Block3("Left", "Right", 8, true),
        //   clickerLeft: "Dog_And_Happy_Face.png",
        //   clickerRight: "Cat_And_Sad_Face.png",
        // },
        {
          block: "Block3_TS",
          instructions:
            "Let's Continue: Click the left box for Dog images/Happy faces, and the right box for Cat images/Sad faces",
          data: testData_Block3("Left", "Right", 32),
          clickerLeft: "Dog_And_Happy_Face.png",
          clickerRight: "Cat_And_Sad_Face.png",
        },
        {
          block: "Block4_TS",
          instructions:
            "The images are reversed now!<br/>Choose the right for Cat images and the left for Dog images",
          data: testData_Block1("Right", "Left", 16),
          clickerLeft: "Dog.png",
          clickerRight: "Cat.png",
        },
        // {
        //   block: "Block6_TS",
        //   instructions:
        //     "Practice: Click the right for Dog images/Sad faces, and the left for Female Cat images/Happy faces",
        //   data: testData_Block4("Right", "Left", 8, true),
        //   clickerLeft: "Cat_And_Happy_Face.png",
        //   clickerRight: "Dog_And_Sad_Face.png",
        // },
        {
          block: "Block5_TS",
          instructions:
            "Let's Continue:  Click the right for Dog images/Sad faces, and the left for Female Cat images/Happy faces",
          data: testData_Block4("Right", "Left", 32),
          clickerLeft: "Cat_And_Happy_Face.png",
          clickerRight: "Dog_And_Sad_Face.png",
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
      return require(`../../../assets/IAT_Cat_Dog/${url}`);
    },

    getImageClicker(url) {
      return require(`../../../assets/Clicker_Images/IAT_Cat_Dog/${url}`);
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
        "IAT_Cat_Dog_Touchscreen"
      );
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IAT_Cat_Dog_Touchscreen");
    this.$store.state["IAT_Cat_Dog_Touchscreen"] = [];
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