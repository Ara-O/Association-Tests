<template>
<main class="test2" @click.once="start2">
    <div v-if="notStarted" class="instruction-iat">
      <h3 style="font-size: 2.5vh">Now switching to Home vs Career</h3>
      <h3 style="font-size: 2.5vh">Click the left for Home, and the right for Career</h3>
    <h3 style="font-size: 2.5vh">Click anywhere to start</h3>
    </div>
    <div v-else>
    <div v-for="data in testData" :key="data.id">
        <div :style="{ display: data.visibility }">
        <h3 style="font-size: 3vh">{{ data.name }}</h3>
        </div>
    </div>
    <div id="wrong" style="display: none">
        <h3 style="font-size: 2vh">Incorrect</h3>
     <h4>Try again to progress!</h4>

        <img
          src="../../assets/app-icons/incorrectImg.png"
          alt="Wrong icon"
          style="width: 70px"
        />
      </div>

      <clicker>
        <template #left>Home</template>
        <template #right>Career</template>
      </clicker>
    </div>
  </main>
</template>

<script>
import { testData_Block2 } from "../../modules/generateTrials";
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
    start2() {
      this.notStarted = false;
      this.testData = testData_Block2("Left", "Right");
      // console.log("start")
      handleAnswer_TS(
        ".test2",
        this,
        this.testData,
        "Block2_TS",
        "/IAT_TS_Test3"
      );
    },
  },
};
</script>

<style scoped>
@import url("../../styles/IAT_TS.css");
</style>