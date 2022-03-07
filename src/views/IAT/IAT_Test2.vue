<template>
  <main>
    <div v-if="notStarted" class="instruction">
      <h3>Now switching to Home vs Career</h3>
      <h3>Click I for Home, and E for Career</h3>
      <h4>Press the space bar to start</h4>
      <img
        src="../../assets/app-icons/spacebar.png"
        alt="Space bar icon"
        class="spacebar"
      />
    </div>
    <div v-else>
      <h3>Choose E for Career or I for Home</h3>
      <div v-for="data in testData" :key="data.id">
        <div :style="{ display: data.visibility }" class="data_name">
          <h3 class="data_name_h3">{{ data.name }}</h3>
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
import { testData_Block2 } from "../../modules/generateTrials";
export default {
  data() {
    return {
      notStarted: true,
      testData: [],
      arrayIndex: 0,
    };
  },

  methods: {
    start(e) {
      let that = this;
      if (e.key === " ") {
        this.testData = testData_Block2("I", "E");
        handleAnswers(this, this.testData, "Block2", "/IAT_test/block_3");
        this.notStarted = false;
        window.removeEventListener("keyup", that.start);
      }
    },
  },

  mounted() {
    // I is for home, E is for career
    let that = this;
    window.addEventListener("keyup", that.start);
  },
};
</script>
<style src="../../styles/IAT.css">
</style>