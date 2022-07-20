<template>
  <main>
    <div v-if="notStarted" class="instruction">
      <h3
        style="line-height: 37px; margin-top: 4px"
        v-html="fullTest[currentBlock].instructions"
      ></h3>
      <h3>When you are ready, click the SPACE bar on your keyboard to start</h3>
      <!-- SPACE BAR -->
      <img
        src="../../../assets/App_Icons/spacebar.png"
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
        src="../../../assets/App_Icons/incorrectImg.png"
        alt="Wrong icon"
        class="wrong-icon"
      />
    </div>
  </main>
</template>

<script>
import handleAnswers from "../../../modules/handleAnswers/handleAnswers";
import * as trials from "../../../modules/generateIatTrialsCatDog"

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
          instructions: "Click E for cat images and I for dog images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block1("E", "I", 16),
        },
        {
          block: "Block2",
          instructions: "Click E for happy faces, and I for sad faces. Remember, you should tap as fast as you can!",
          data: trials.testData_Block2("E", "I", 16),
        },
        // {
        //   block: "Block3",
        //   instructions: "Practice: Click E for Sad faces/Cat images, and I for Dog images/Happy faces",
        //   data:  trials.testData_Block3("I", "E", 8),
        // },
        {
          block: "Block3",
          instructions: "Let's Continue: Click E for sad faces and cat images, and I for dog images and happy faces. Remember, you should tap as fast as you can!",
          data:  trials.testData_Block3("I", "E", 32),
        },
        {
          block: "Block4",
          instructions: "The images are reversed now!<br/>Choose I for Cat images and E for Dog images. Remember, you should tap as fast as you can!",
          data: trials.testData_Block1("I", "E", 16),
        },
        // {
        //   block: "Block6",
        //   instructions: "Practice: Click I for Sad faces/Dog images, and E for Cat images/Happy faces",
        //   data:  trials.testData_Block4("I", "E", 8, true),
        // },
        {
          block: "Block5",
          instructions: "Let's Continue: Click I for Sad faces/Dog images, and E for Cat images/Happy faces.  Remember, you should tap as fast as you can!",
          data:  trials.testData_Block4("I", "E", 16),
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
      return require(`../../../assets/IAT_Cat_Dog/${url}`);
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
          "IAT_Cat_Dog"
        );
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    let that = this;
    this.$store.commit("changeCurrentTest", "IAT_Cat_Dog")
    this.$store.state["IAT_Cat_Dog"] = [];
    window.addEventListener("keyup", that.start);
  },
};
</script>

<style >
@import url("../../../styles/IAT.css");
</style>

