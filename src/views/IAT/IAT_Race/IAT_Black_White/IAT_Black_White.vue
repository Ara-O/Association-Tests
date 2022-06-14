<template>
  <main>
    <div v-if="notStarted" class="instruction">
      <h3
        style="line-height: 37px; margin-top: 4px"
        v-html="fullTest[currentBlock].instructions"
      ></h3>
      <h3>Click the SPACE bar on your computer to start</h3>
      <!-- SPACE BAR -->
      <img
        src="../../../../assets/App_Icons/spacebar.png"
        alt="Space bar"
        class="spacebar"
      />
    </div>
    <div v-else>
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
            style="height: 250px"
            :src="getImage(data.image)"
          />
        </div>
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
  </main>
</template>

 <script>
import handleAnswers from "../../../../modules/handleAnswers/handleAnswers";
import {
  testData_Block1,
  testData_Block2,
  testData_Block3,
  testData_Block4,
} from "../../../../modules/generateIatTrialsRace";

export default {
  data() {
    return {
      notStarted: true,
      arrayIndex: 0,
      currentBlock: 0,
      testData: [],
      //!Test making black and happy goign first - swtch block 3/4 with 6/7
      fullTest: [
        {
          block: "Block1",
          instructions: "Click E for White faces and I for Black faces",
          data: testData_Block1("E", "I", 2),
        },
        {
          block: "Block2",
          instructions: "Click E for Happy faces and I for Sad faces",
          data: testData_Block2("E", "I", 6),
        },
        {
          block: "Block3",
          instructions:
            "Practice: Click E for White faces/Happy faces, and I for Black faces/Sad faces",
          data: testData_Block3("E", "I", 2),
        },
        {
          block: "Block4",
          instructions:
            "Let's Continue:  Click E for White faces/Happy faces, and I for Black faces/Sad faces",
          data: testData_Block3("E", "I", 2),
        },
        {
          block: "Block5",
          instructions:
            "The images are reversed now!<br/>Click I for Black faces/Sad faces and E for White faces/Sad faces",
          data: testData_Block1("I", "E", 2),
        },
        {
          block: "Block6",
          instructions:
            "Practice: Click E for Black faces/Happy faces, and I for White faces/Sad faces",
          data: testData_Block4("I", "E", 2),
        },
        {
          block: "Block7",
          instructions:
            "Let's Continue: Click E for Black faces/Happy faces, and I for White faces/Sad faces",
          data: testData_Block4("I", "E", 2),
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
      return require(`../../../../assets/Stimulus_Faces/${url}`);
    },

    testOver() {
      this.$router.push("/IAT_Feedback");
    },

    start(e) {
      let that = this;
      if (e.key === " ") {
        handleAnswers(
          this,
          this.fullTest[this.currentBlock].data,
          this.fullTest[this.currentBlock].block,
          "IAT_Black_White"
        );
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    let that = this;
    this.$store.commit("changeCurrentTest", "IAT_Black_White");
    this.$store.state["IAT_Black_White"] = [];

    window.addEventListener("keyup", that.start);
  },
};
</script>

