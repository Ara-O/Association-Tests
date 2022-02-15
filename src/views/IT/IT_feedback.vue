<template>
  <main>
    <h3>The test is over!</h3>
    <router-link to="/" tag="button" class="gohome">Go Home</router-link>
    <!-- CODE for previous feedback page ( not needed ) -->
    <!-- <div
    >
      <h3>Average time spent memorizing face per trial</h3>
      <div class="arrangeFbk">
        <div
          v-for="(time, index) in timeSpentOnMemorization"
          :key="time.id"
          class="trialavg"
        >
          <h3>
            Trial {{ index + 1 }} with {{ index + 2 }} faces:
            {{ time.toFixed(2) }}ms
          </h3>
        </div>
      </div>
      <br />
      <h3>Average time solving trials</h3>

      <div class="arrangeFbk">
        <div
          v-for="(time, index) in timeSpentPerFace"
          :key="time.id"
          class="trialavg"
        >
          <h3>
            Trial {{ index + 1 }} with {{ index + 2 }} faces:
            {{ time.ms.toFixed(2) }}ms
          </h3>
          <h3>Accuracy: {{time.accuracy.toFixed(0)}}%</h3>
          <h3>Trial Attemps: {{ this.blockAttempts[index] }}</h3>
        </div>
      </div> -->
    <!-- </div> -->
  </main>
</template>

<script>
// export default {
//   data() {
//     return {
//       timeSpentOnMemorization: [],
//       timeSpentPerFace: [],
//       blockAttempts: [],
//     };
//   },

//   mounted() {
//     let memorization_times = this.$store.state.memorization_times;
//     let solution_times = this.$store.state.IT_trials;
//     for (let trialno in memorization_times) {
//       let obj = memorization_times[trialno];
//       let sum = 0;
//       let length = 0;
//       for (let val in obj) {
//         sum += obj[val];
//         length++;
//       }
//       this.timeSpentOnMemorization.push(sum / length);
//     }

//     // calculate average time spent by trial and show block attempts
//     for (let key in solution_times) {
//       //Storing the block attempts
//       this.blockAttempts.push(
//         solution_times[key][solution_times[key].length - 1].blockAttempts
//       );

//       //Looping through the data and storing the time spent on face
//       let sum = 0;
//       let accuracy = 0;
//       let length = 0;
//       for (let i = 0; i < solution_times[key].length - 1; i++) {
//         sum += solution_times[key][i].timeSpentOnFace;
//         accuracy += solution_times[key][i].accuracy;
//         length++;
//       }
//       this.timeSpentPerFace.push({ ms: sum / length, accuracy: accuracy/ length });
//     }
//   },
// };
</script>

<style scoped>
.trialavg {
  padding: 16px 38px;
  height: auto;
  display: flex;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  align-items: center;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 3px #d0d0d0;
}

.arrangeFbk {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.gohome {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  font-size: 15px;
  padding: 0px 15px;
  height: 45px;
  width: 100px;
}

.gohome:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}
</style>