<template>
  <main>
    <section id="test-border">
      <div v-if="notStarted" class="instruction">
        <h3
          style="line-height: 37px; margin-top: 4px"
          v-html="fullTest[currentBlock].instructions"
        ></h3>
        <h3>
          When you are ready to start, please click the SPACE bar on your
          keyboard to start
        </h3>
        <!-- SPACE BAR -->
        <img
          src="../../../../assets/app_icons/spacebar.png"
          alt="Space bar"
          class="spacebar"
        />
      </div>
      <div :class="{ hide: notStarted }">
        <h3
          v-html="fullTest[currentBlock].instructions"
          class="in-test-instructions"
        ></h3>
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
      <div id="wrong" style="display: none">
        <!-- <h3></h3> -->
        <h4>Incorrect. Try again to progress!</h4>
        <img
          src="../../../../assets/app_icons/incorrectImg.png"
          alt="Wrong icon"
          class="wrong-icon"
        />
      </div>
    </section>
  </main>
</template>

<script>
import handleAnswers from "../../../../modules/handleAnswers/handleAnswers";
import * as trials from "../../../../modules/generateIatTrialsGender/generateIatTrialsOccupation";
import { removeHandleInput } from "../../../../modules/handleAnswers/handleAnswers";

export default {
  data() {
    return {
      notStarted: true,
      arrayIndex: 0,
      currentBlock: 0,
      testData: [],
      fullTest: [
        {
          block: "Block1",
          instructions:
            "Click E for male images and I for female images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block1("E", "I", 8),
        },
        {
          block: "Block2",
          instructions:
            "Click E for doctor images, and I for nurse images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block2("E", "I", 8),
        },
        {
          block: "Block3",
          instructions:
            "Practice: Click E for Male images/Doctor images, and I for Female images/Nurse images",
          data: trials.testData_Block3("E", "I", 8, true),
        },
        {
          block: "Block4",
          instructions:
            "Click E for male images and doctor images, and I for female images and nurse images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block3("E", "I", 20),
        },
        {
          block: "Block5",
          instructions:
            "Click I for male images and E for female images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block1("I", "E", 20),
        },
        {
          block: "Block6",
          instructions:
            "Practice: Click I for Male images and Nurse images, and E for Female images and Doctor images",
          data: trials.testData_Block4("I", "E", 8, true),
        },
        {
          block: "Block7",
          instructions:
            "Click I for male images and nurse images, and E for female images and doctor images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block4("I", "E", 20),
        },
      ],
    };
  },

  watch: {
    currentBlock() {
      this.arrayIndex = 0;
      window.addEventListener("keyup", this.start);
    },
  },

  methods: {
    getImage(url) {
      return new URL(
        `../../../../assets/IAT_Gender_Occupation/${url}`,
        import.meta.url
      ).href;
    },

    testOver() {
      this.$router.push("/IAT_Gender_Occupation_Post_Survey");
    },

    start(e) {
      let that = this;
      if (e.key === " ") {
        window.removeEventListener("keyup", that.start);
        document.querySelector(".instruction").style.display = "none";
        setTimeout(() => {
          handleAnswers(
            this,
            this.fullTest[this.currentBlock].data,
            this.fullTest[this.currentBlock].block,
            "IAT_Gender_Occupation"
          );
          this.notStarted = false;
        }, 500);
      }
    },
  },

  beforeUnmount() {
    let that = this;
    removeHandleInput();
    window.removeEventListener("keyup", that.start);
  },

  mounted() {
    removeHandleInput();
    let that = this;
    this.$store.commit("changeCurrentTest", "IAT_Gender_Occupation");
    this.$store.state["IAT_Gender_Occupation"] = [];
    window.addEventListener("keyup", that.start);
  },
};
</script>

<style>
@import url("../../../../styles/IAT.css");
</style>
