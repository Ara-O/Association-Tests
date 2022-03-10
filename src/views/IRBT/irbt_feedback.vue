<template>
  <main>
    <h3>Here is your feedback!</h3>
    <jelly-button whereTo="/IRBT/end" style="margin-bottom: -11px"
      >Continue!</jelly-button
    >
    <br />
    <div class="feedbacks">
    <div class="feedback">
      <h3 style="line-height: 26px">For block one, where you associated white faces with a smiley face and black faces with a frowney face. Your feedback is:</h3>
    <h2 class="data">Average accuracy: {{ totalacc1.toFixed(2) }}%</h2>
    <h2 class="data">Average Speed: {{ totalspeed1.toFixed(2) }} ms</h2>
    </div>
    <div class="feedback">
            <h3 style="line-height: 26px">For block two, where you associated black faces with a smiley face and white faces with a frowney face. Your feedback is:</h3>
    <h2 class="data">Average accuracy: {{ totalacc2.toFixed(2) }}%</h2>
    <h2 class="data">Average Speed: {{ totalspeed2.toFixed(2) }} ms</h2>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fullData: [],
      totalacc1: 0,
      totalspeed1: 0,
      totalacc2: 0,
      totalspeed2: 0,
    };
  },

  mounted() {
    this.fullData1 = this.$store.state.irbt_data.section_1;
    this.fullData2 = this.$store.state.irbt_data.section_2;
    this.fullData1.forEach((data) => {
      this.totalacc1 += data.accuracy;
      this.totalspeed1 += data.ms;
    });
    this.fullData2.forEach((data) => {
      this.totalacc2 += data.accuracy;
      this.totalspeed2 += data.ms;
    });

    this.totalacc1 = this.totalacc1 / this.fullData1.length;
    this.totalacc2 = this.totalacc2 / this.fullData2.length;
    this.totalspeed1 = this.totalspeed1 / this.fullData1.length;
    this.totalspeed2 = this.totalspeed2 / this.fullData2.length;
  },
};
</script>

<style scoped>
.data {
  font-size: 17px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feedbacks{
  display: flex;
  justify-content: center;
  column-gap: 30px;
  margin-top: 30px;
}

.feedback{
 background: rgb(237 237 237);
    width: 330px;
    box-sizing: border-box;
    padding: 23px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #b9b9b9;
}

.feedback h3, .feedback h2{
  font-size: 15px
}

.btn{
    padding: 21px 34px;
  font-weight: 300;
  margin-bottom: 0px;
}

@media (max-width: 852px) {
  main{
    background: white;
    height:  auto
  }

.feedbacks{
      display: flex;
    justify-content: center;
    row-gap: 34px;
    flex-direction: column;
    margin-top: 30px;
}
}
</style>