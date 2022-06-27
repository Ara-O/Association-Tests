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
import * as trials from "../../../../modules/generateIatTrialsGender/generateIatTrialsRoles"

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
          data: trials.testData_Block1("E", "I", 2),
        },
        {
          block: "Block2",
          instructions: "Click E for Office Items, and I for Kitchen items",
          data: trials.testData_Block2("E", "I", 6),
        },
        {
          block: "Block3",
          instructions: "Practice: Click E for Male images/Office items, and I for Female images/Kitchen items",
          data:  trials.testData_Block3("E", "I", 2),
        },
        {
          block: "Block4",
          instructions: "Let's Continue: Click E for Male images/Office items, and I for Female images/Kitchen items",
          data:  trials.testData_Block3("E", "I", 2),
        },
        {
          block: "Block5",
          instructions: "The images are reversed now!<br/>Choose I for Male images and E for Female images",
          data: trials.testData_Block1("I", "E", 2),
        },
        {
          block: "Block6",
          instructions: "Practice: Click I for Male images and Kitchen items, and E for Female images and Office items",
          data:  trials.testData_Block4("I", "E", 2),
        },
        {
          block: "Block7",
          instructions: "Let's Continue: Click I for Male images and Kitchen items, and E for Female images and Office items",
          data:  trials.testData_Block4("I", "E", 2),
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
      return require(`../../../../assets/IAT_Gender_Roles/${url}`);
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
          "IAT_Gender_Roles"
        );
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    let that = this;
    this.$store.commit("changeCurrentTest", "IAT_Gender_Roles")
    this.$store.state["IAT_Gender_Roles"] = [];
    window.addEventListener("keyup", that.start);
  },
};
</script>

<style >
@import url("../../../../styles/IAT.css");
</style>

