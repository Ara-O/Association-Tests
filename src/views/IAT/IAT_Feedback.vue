<template>
<main>
  <br />
     <jelly-button whereTo="/Home">Go back to home page</jelly-button>
   <br />
  <h4>Here's your feedback!</h4>
  <br />
  <div class="feedbacks">
    <div v-for="(data, index) in blocksAccuracydata" :key="data">
      <div class="feedbacksect" v-if="index + 1 === 4 || index + 1 === 7">
        <h3 style="line-height: 31px"> When you were asked to associate male with career and female with home, your accuracy was {{ data[data.length - 1].slice(-7) }}, and your avergae response time was {{allAverageSpeeds[index].toFixed(0) }}ms </h3>
       </div>
    </div>
  </div>
  </main>
</template>

<script>
import calcAvgSpeed from "../../modules/calculateAverageSpeed";
export default {
  data() {
    return {
      sum: 0,
      blocksAccuracydata: [],
      gender: "",
      slider1: "",
      slider2: "",
      opinionofmen: "",
      opinionofwomen: "",
      speed: [],
      averageSpeed: 0,
      allAverageSpeeds: [],
      blocks: [],
    };
  },

  //!Convert average speeds to seconds and milliseconds
  computed: {
    calculateAverageSpeed() {
      let sec = 0;
      let ms = this.averageSpeed.toFixed(0);
      if (ms > 1000) {
        sec = String(ms)[0];
        ms -= Number(sec) * 1000;
      }
      let fixedms = Number(ms).toFixed(0);
      return `${sec}s ${fixedms} ms`;
    },
  },

  mounted() {
    calcAvgSpeed(this, this.$store.state.IAT_data);

    // shows 7 blocks
    this.blocks.forEach((data) => {
      this.sum = 0;
      for (let i = 0; i < data.length - 1; i++) {
        this.sum += data[i].ms;
      }
      this.sum /= data.length - 1;
      this.allAverageSpeeds.push(this.sum);
    });
  },
};
</script>

<style scoped >
 

.feedbacksect {
  display: flex;
  width: 300px;
  background-color: rgb(232 232 232);
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 29px;
  border-radius: 7px;
}

.feedbacks {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 595px) {
  main{
    background: white;
  }

  .feedbacksect{
   border: solid 3px #a7a7a7
  }

  .feedbacks{
        flex-direction: column;
        flex-wrap: nowrap;
        padding-bottom: 40px;
    
  }

  .btn{
    margin-top: 100px;
  }
}

</style>