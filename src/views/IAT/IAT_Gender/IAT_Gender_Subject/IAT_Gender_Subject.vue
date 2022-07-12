<template>
  <main>
    <div v-if="notStarted" class="instruction">
      <h3
        style="line-height: 37px; margin-top: 4px"
        v-html="fullTest[currentBlock].instructions"
      ></h3>
      <h3>Click the SPACE bar on your keyboard to start</h3>
      <!-- SPACE BAR -->
      <img
        src="../../../../assets/App_Icons/spacebar.png"
        alt="Space bar"
        class="spacebar"
      />
    </div>
    <div v-else>
      <h3 v-html="fullTest[currentBlock].instructions" class="in-test-instructions"></h3>
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
        src="../../../../assets/App_Icons/incorrectImg.png"
        alt="Wrong icon"
        class="wrong-icon"
      />
    </div>
  </main>
</template>

<script>
import handleAnswers from "../../../../modules/handleAnswers/handleAnswers";
import * as trials from "../../../../modules/generateIatTrialsGender/generateIatTrialsSubject"

export default {
  data() {
    return {
      notStarted: true,
      arrayIndex: 0,
      currentBlock: 0,
      testData: [],
      fullTest:[
        {
          block: "Block1",
          instructions: "Click E for Male images and I for Female images",
          data: trials.testData_Block1("E", "I", 16),
        },
        {
          block: "Block2",
          instructions: "Click E for Math images, and I for Reading images",
          data: trials.testData_Block2("E", "I", 16),
        },
        // {
        //   block: "Block3",
        //   instructions: "Practice: Click E for Male images/Math images, and I for Female images/Reading images",
        //   data:  trials.testData_Block3("E", "I", 8, true),
        // },
        {
          block: "Block3",
          instructions: "Let's Continue: Click E for Male images/Math images, and I for Female images/Reading images",
          data:  trials.testData_Block3("E", "I", 32),
        },
        {
          block: "Block4",
          instructions: "The images are reversed now!<br/>Choose I for Male images and E for Female images",
          data: trials.testData_Block1("I", "E", 16),
        },
        // {
        //   block: "Block6",
        //   instructions: "Practice: Click I for Male images and Reading images, and E for Female images and Math images",
        //   data:  trials.testData_Block4("I", "E", 8, true),
        // },
        {
          block: "Block5",
          instructions: "Let's Continue: Click I for Male images and Reading images, and E for Female images and Math images",
          data:  trials.testData_Block4("I", "E", 32),
        }
      ]
    };
  },

  watch: {
    currentBlock(){
      this.arrayIndex = 0;
        window.addEventListener("keyup", this.start);
    }
  },

  methods: {
    getImage(url) {
      return require(`../../../../assets/IAT_Gender_Subject/${url}`);
    },

    testOver(){
      this.$router.push("/IAT_Feedback")
    },

    start(e) {
      let that = this;
      if (e.key === " ") {
        handleAnswers(
          this,
          this.fullTest[this.currentBlock].data,
          this.fullTest[this.currentBlock].block,
          "IAT_Gender_Subject"
        );
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    let that = this;
    this.$store.commit("changeCurrentTest", "IAT_Gender_Subject")
    this.$store.state["IAT_Gender_Subject"] = [];
    window.addEventListener("keyup", that.start);
  },
};
</script>

<style >
@import url("../../../../styles/IAT.css");
</style>

