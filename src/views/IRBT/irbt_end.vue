<template>
<main>
    <jelly-button whereTo="/">Go back to main page</jelly-button>
    <h3>You have finished the game :D</h3>
    </main>
</template>

<script>
import { getDatabase, ref, set } from "firebase/database"

export default {
    mounted(){
        // console.log(this.$store.state.irbt_data);
        let test =this;
        let data = this.$store.state.irbt_data;
      for (let trial in data) {
          data[trial].forEach((data) => {
              delete data.randomNo;
              delete data.visibility;
            });
          }

              //  console.log(data)
         const db = getDatabase();
              set(ref(db, `User-${test.$store.state.uid}-IRBT`), {
                data: data,
                 browserInfo: navigator["userAgent"],
              });
    }
}
</script>