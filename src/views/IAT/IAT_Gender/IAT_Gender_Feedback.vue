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
        <h3 style="line-height: 31px; font-size: 15px"> When you were asked to associate male images with {{ (index + 1) == 4 ? "male toys" : "female toys"}}  and female with  {{(index + 1) == 4 ? "female toys" : "male toys"}}  , your accuracy was {{(data.averageaccuracy).toFixed(2)}}%, and your average response time was {{(data.averagespeed).toFixed(0) }}ms </h3>
        </div>
    </div>
  </div>
  </main>
</template>

<script>
import calcAvgSpeed from "../../../modules/calculateAverageSpeed";
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
      averageSpeed: 0,
      blocks: [],
    };
  },

  mounted() {
    calcAvgSpeed(this, this.$store.state.IAT_Gender);
    // shows 7 blocks
    this.blocks.forEach((data) => {
      this.sum = 0;
      this.accuracy = 0;
      for (let i = 0; i < data.length ; i++) {
        this.sum += data[i].ms;
        this.accuracy += data[i].accuracy;
      }
      this.sum /= data.length ;
      //console.log(this.accuracy)
      this.accuracy /= data.length ;
      data.averageaccuracy = this.accuracy;
      data.averagespeed = this.sum;
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

.btn {
  padding: 21px 34px;
  font-weight: 300;
  margin-bottom: 0px;
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