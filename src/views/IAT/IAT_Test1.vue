<template>
  <main class="iat1">
    <div v-if="notStarted" class="instruction">
      <h3 style="line-height: 37px; margin-top: 4px">
        Click E for Male names/images or I for Female names/images
      </h3>
      <h3>Click the SPACE bar on your computer to start</h3>
      <!-- SPACE BAR -->
      <img
        src="../../assets/app-icons/spacebar.png"
        alt="Space bar"
        class="spacebar"
      />
    </div>

    <div v-else>
      <h3>Click E for Male names/images or I for Female names/images</h3>

      <div v-for="data in testData" :key="data.id">
        <div v-if="data.isImg" class="imagecontainer">
          <img
            class="faceimg"
            loading="eager"
            :style="{ display: data.visibility }"
            :src="getImage(data.image)"
          />
        </div>
        <div v-else :style="{ display: data.visibility }" class="data_name">
          <h3 class="data_name_h3">
            {{ data.name }}
          </h3>
        </div>
      </div>
      <div id="wrong" style="display: none">
        <h3>Incorrect</h3>
        <h4>Try again to progress!</h4>
        <img
          src="../../assets/app-icons/incorrectImg.png"
          alt="Wrong icon"
          style="width: 70px"
        />
      </div>
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
        const randomData = testData_Block1("E", "I", 10);
        this.testData = randomData;
        handleAnswers(
          this,
          this.testData,
          "Block1",
          "/IAT_test/block_2",
          ".iat1"
        );
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

<style src="../../styles/IAT.css">
</style>