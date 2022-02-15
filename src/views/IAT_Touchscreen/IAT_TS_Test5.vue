<template>
  <main class="test5" @click.once="start5">
    <div v-if="notStarted" class="instruction-iat">
      <h3 style="font-size: 2.5vh">The positions are reversed now!</h3>
      <h3 style="font-size: 2.5vh">Click the right for Male names/images </h3>
      <h3 style="font-size: 2.5vh">Click the left for Female names/images</h3>
       <h3 style="font-size: 2.5vh">Click anywhere to start</h3>
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
        <h3 style="font-size: 2.5vh">Incorrect</h3>
             <h4>Try again to progress!</h4>

        <img
          src="../../assets/app-icons/incorrectImg.png"
          alt="Wrong icon"
          style="width: 70px"
        />
      </div>

      <clicker>
        <template #left
          >Female  
          </template
        >
        <template #right
          >Male 
          </template
        >
      </clicker>
    </div>
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
      notStarted: true,
    };
  },

  methods: {
    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },

    start5() {
      this.notStarted = false;
     this.testData = testData_Block1('Right', 'Left', 10); 
       handleAnswer_TS(
        ".test5",
        this,
        this.testData,
        "Block5_TS",
        "/IAT_TS_Test6"
      );
    },
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
 .instruction-iat{
    box-shadow: 0px 0px 4px #c6c6c6;
    background: white;
    padding: 30px 30px;
    border-radius: 7px;
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