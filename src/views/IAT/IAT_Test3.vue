<template>
  <!-- MALE AND CAREER, FEMALE AND HOME -->
  <main>
    <div v-if="notStarted" class="instruction">
      <h3>LET'S PRACTICE</h3>
      <h3>Male and Career vs Female and Home</h3>
      <h4>Click E for Male and Career, and I for Female and Home</h4>
      <h4>Press the space bar to start</h4>
      <img
        src="../../assets/app-icons/spacebar.png"
        alt="Space bar icon"
        class="spacebar"
      />
    </div>
    <div v-else>
      <h4>Click E for Male and Career, and I for Female and Home</h4>
      <div v-for="data in testData" :key="data.id">
        <div v-if="data.isImg" class="imagecontainer">
          <img
            class="faceimg"
            :style="{ display: data.visibility }"
            :src="getImage(data.image)"
          />
        </div>
        <div v-else :style="{ display: data.visibility }" class="data_name">
          <h3 class="data_name_h3">{{ data.name }}</h3>
        </div>
      </div>
    </div>
    <div id="wrong" style="display: none">
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
import { testData_Block3 } from "../../modules/generateTrials";
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
        this.testData = testData_Block3("E", "I", 8);
        handleAnswers(this, this.testData, "Block3", "/IAT_test/block_4");
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