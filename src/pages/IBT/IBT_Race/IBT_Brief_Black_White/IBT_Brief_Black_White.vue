<template>
  <main>
    <div v-if="!userHasPutInUserID" class="collect-user-id">
      <h3 style="font-size: 18px; font-weight: 500">Before we start!</h3>
      <h3 class="input-user-id-text">
        What is your unique testing ID? ( You will be given this by a lab
        assistant )
      </h3>
      <input type="text" class="user-id" v-model="uid" />
      <button @click="storeUserID" class="btn_basic_survey">next</button>
    </div>
    <!-- Start test -->
    <div v-else>
      <h3>Starting test</h3>
    </div>
  </main>
</template>

<script>
import "../../../../styles/pre-test-survey.css";
export default {
  data() {
    return {
      uid: "",
      userHasPutInUserID: false,
    };
  },

  methods: {
    storeUserID() {
      if (this.uid.trim() !== "") {
        this.$store.commit("changeUserID", this.uid);
        this.userHasPutInUserID = true;
      }

      //generate random number if they skip
      if (this.uid.trim() === "" && this.$store.getters.getUID === "") {
        this.$store.commit(
          "changeUserID",
          String(Math.floor(Math.random() * 10000))
        );
        this.userHasPutInUserID = true;
      }

      if (this.$store.getters.getUID !== "") {
        this.userHasPutInUserID = true;
      }
    },

    next() {
      if (this.userData.chosenethnicity.trim() === "") {
        this.userData.chosenethnicity = this.chosenethnicity;
      }
      if (this.userData.gender.trim() === "") {
        this.userData.gender = this.gender;
      }
      this.$emit("next", this.userData);
    },
  },
};
</script>

<style scoped>
.input-user-id-text {
  max-width: 400px;
  width: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.user-id {
  border-radius: 6px;
  border: solid 1px solid 1px #c2c2c2;
  margin-top: 15px;
  height: 25px;
  text-align: center;
}

.collect-user-id {
  width: auto;
  max-width: 600px;
  max-height: 600px;
  height: auto;
  overflow: auto;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 21px 35px 35px;
}

@media (max-width: 852px) {
  .basic-questions_title {
    font-size: 18px;
    margin: 38px 0px 20px;
  }
}
</style>
