<template>
  <main>
    <jelly-button whereTo="/Home">Go back to main page</jelly-button>
    <h3 style="margin-top: 20px">You have finished the game :D</h3>
  </main>
</template>

<script>
import { getDatabase, ref, set } from "firebase/database";

export default {
  mounted() {
    let test = this;
    let data = this.$store.state.irbt_data;
    let dataclone =this.$store.state.irbt_data_text;

    for (let trial in data) {
      data[trial].forEach((data) => {
        delete data.randomNo;
        delete data.visibility;
      });
    }

    // let currentDate = new Date();
    // let cDay = currentDate.getDate();
    // let cMonth = currentDate.getMonth() + 1;
    // let cYear = currentDate.getFullYear();

   // console.log(dataclone);

    const db = getDatabase();


    set(ref(db, `IRBT/User-${test.$store.state.uid}`), {
      data: dataclone
    });
  },
};
</script>

<style scoped>
  .btn{
    padding: 21px 34px;
  font-weight: 300;
  margin-bottom: 0px;
}

</style>