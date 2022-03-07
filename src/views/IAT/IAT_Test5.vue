<template>
  <main>
    <div v-if="notStarted" class="instruction">
      <h3>The letters are reversed now!</h3>
      <h3>Choose I for Male names/images or E for Female names/images</h3>
      <h3>Click the space bar to start</h3>
      <img
        src="../../assets/app-icons/spacebar.png"
        alt="Space bar icon"
        class="spacebar"
      />
    </div>
    <div v-else>
      <h3>Choose I for Male names/images or E for Female names/images</h3>
      <div v-for="data in testData" :key="data.id">
        <div v-if="data.isImg" class="imagecontainer">
          <img
            class="faceimg"
            loading="eager"
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
import { testData_Block1 } from "../../modules/generateTrials";

export default {
  data() {
    return {
      notStarted: true,
      arrayIndex: 0,
      testData: [],
    };
  },

  methods: {
    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },

    start(e) {
      let that = this;
      if (e.key === " ") {
        this.testData = testData_Block1("I", "E", 10);
        handleAnswers(this, this.testData, "Block5", "/IAT_test/block_6");
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

.imagecontainer {
  display: flex;
  justify-content: center;
}
</style>