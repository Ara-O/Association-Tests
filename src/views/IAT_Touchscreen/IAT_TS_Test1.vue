<template>
  <main class="test1">
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
      <h3 style="font-size: 2.5vh">Incorrect</h3>
     <h4>Try again to progress!</h4>
      <img
        src="../../assets/app-icons/incorrectImg.png"
        alt="Wrong icon"
        style="width: 70px"
      />
    </div>

    <clicker>
      <template #left>Male</template>
      <template #right>Female</template>
    </clicker>
  </main>
</template>

<script>
import { testData_Block1 } from "../../modules/generateTrials";
import handleAnswer_TS from "../../modules/handleAnswers_TS";
export default {
  data() {
    return {
      testData: [],
      arrayIndex: 0,
    };
  },

  methods: {
    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },
  },

  mounted() {
    const randomData = testData_Block1("Left", "Right", 10);
     this.testData = randomData;
    handleAnswer_TS(
      ".test1",
      this,
      this.testData,
      "Block1_TS",
      "/IAT_TS_Test2"
    );
  },
};
</script>

<style scoped>
.faceimg {
  height: 400px;
  border: none;
  padding: 20px 34px 0px;
  background: white;
}

@media (max-width: 595px) {
  .faceimg {
    height: 273px !important;
  } 
  main{
    background: white;
  }
}
</style>