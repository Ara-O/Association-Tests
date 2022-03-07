<template>
  <main class="test4" @click.once="start4">
    <div v-if="notStarted" class="instruction-iat">
      <h3 style="font-size: 2.3vh">Practice Over! Let's do it again</h3>
      <h3 style="font-size: 2.3vh">
        Click the right for Female and Home, and the left for Male and Career
      </h3>
      <h3 style="font-size: 2.3vh">Click anywhere to start</h3>
    </div>
    <div v-else>
      <div v-for="data in testData" :key="data.id">
        <div v-if="data.isImg" class="imagecontainer">
          <img
            class="faceimg"
            loading="eager"
            :style="{ display: data.visibility }"
            :src="getImage(data.image)"
          />
        </div>

        <div v-else :style="{ display: data.visibility }">
          <h3 style="font-size: 3vh">
            {{ data.name }}
          </h3>
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
      <clicker>
        <template #left
          >Male <br />
          Career</template
        >
        <template #right
          >Female <br />
          Home</template
        >
      </clicker>
    </div>
  </main>
</template>



<script>
import { testData_Block3 } from "../../modules/generateTrials";
import handleAnswer_TS from "../../modules/handleAnswers_TS";
export default {
  data() {
    return {
      testData: [],
      arrayIndex: 0,
      notStarted: true,
    };
  },

  methods: {
    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },

    start4() {
      this.notStarted = false;
      this.testData = testData_Block3("Left", "Right", 10);
      handleAnswer_TS(
        ".test4",
        this,
        this.testData,
        "Block4_TS",
        "/IAT_TS_Test5"
      );
    },
  },
};
</script>

 

<style scoped>
@import url("../../styles/IAT_TS.css");
</style>