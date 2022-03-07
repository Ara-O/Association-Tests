<template>
  <!-- MALE AND CAREER, FEMALE AND HOME -->

  <main>
    <div v-if="notStarted" class="instruction">
      <h3>LET'S PRACTICE</h3>
      <h3>Now switching to Male and Home vs Female and Career</h3>
      <h4>Click E for Male and Home, and I for Female and Career</h4>
      <h4>Press the space bar to start</h4>
      <img
        src="../../assets/app-icons/spacebar.png"
        alt="Space bar icon"
        class="spacebar"
      />
    </div>
    <div v-else>
      <h4>Click E for Male and Home, and I for Female and Career</h4>
      <div v-for="data in testData" :key="data.id">
        <div v-if="data.isImg" class="imagecontainer">
          <img
            class="faceimg"
            :style="{ display: data.visibility }"
            :src="getImage(data.image)"
          />
        </div>
        <div v-else>
          <div :style="{ display: data.visibility }" class="data_name">
            <h3 class="data_name_h3">{{ data.name }}</h3>
          </div>
        </div>
      </div>
    </div>
            <div id="wrong" style="display: none">
        <!-- <h3></h3> -->
        <h4>Incorrect. Try again to progress!</h4>
        <img
          src="../../assets/app-icons/incorrectImg.png"
          alt="Wrong icon"
          class="wrongicon"
        />
      </div>
  </main>
</template>

<script>
import handleAnswers from "../../modules/handleAnswers";
import { testData_Block4 } from "../../modules/generateTrials";
export default {
  data() {
    return {
      notStarted: true,
      testData: [],
      arrayIndex: 0,
    };
  },

  methods: {
    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },

    start(e) {
      let that = this;
      if (e.key === " ") {
        this.testData = testData_Block4("E", "I", 8);
        handleAnswers(this, this.testData, "Block6", "/IAT_test/block_7");
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    let that = this;
    window.addEventListener("keyup", that.start);
  },
};
</script>
<style>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>