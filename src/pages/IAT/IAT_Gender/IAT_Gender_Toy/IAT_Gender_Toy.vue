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
import "../../../../styles/IAT.css";
import handleAnswers from "../../../../modules/handleAnswers/handleAnswers";
import { removeHandleInput } from "../../../../modules/handleAnswers/handleAnswers";
import {
  testData_Block1,
  testData_Block2,
  testData_Block3,
  testData_Block4,
} from "../../../../modules/generateIatTrialsGender/generateIatTrialsToy";

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
          data: testData_Block1("E", "I", 16),
        },
        {
          block: "Block2",
          instructions:
            "Click E for male toys, and I for female toys. Remember, you should tap as fast as you can!",
          data: testData_Block2("E", "I", 16),
        },
        {
          block: "Block3",
          instructions:
            "Practice: Click E for Male images/Male toys, and I for Female images/Female toys",
          data: testData_Block3("E", "I", 8, true),
        },
        {
          block: "Block4",
          instructions:
            "Click E for male images and male toys, and I for female images and female toys. Remember, you should tap as fast as you can!",
          data: testData_Block3("E", "I", 32),
        },
        {
          block: "Block5",
          instructions:
            "Click I for male images and E for female images. Remember, you should tap as fast as you can!",
          data: testData_Block1("I", "E", 16),
        },
        {
          block: "Block6",
          instructions:
            "Practice: Click I for Male images and Female Toys, and E for Female images and Male toys",
          data: testData_Block4("I", "E", 8, true),
        },
        {
          block: "Block7",
          instructions:
            "Click I for male images and female Toys, and E for female images and male toys. Remember, you should tap as fast as you can!",
          data: testData_Block4("I", "E", 32),
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
        `../../../../assets/IAT_Gender_Toy/${url}`,
        import.meta.url
      ).href;
    },

    testOver() {
      this.$router.push("/IAT_Feedback");
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
            "IAT_Gender_Toy"
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
    this.$store.commit("changeCurrentTest", "IAT_Gender_Toy");
    this.$store.state["IAT_Gender_Toy"] = [];
    window.addEventListener("keyup", that.start);
  },
};
</script>
<!-- 
<style src="../../../../styles/IAT.css" scoped >
</style> -->
