<template>
  <div v-if="!userHasPutInUserID" class="collect-user-id">
    <h3 style="font-size: 18px; font-weight: 500">Before we start!</h3>
    <h3 class="input-user-id-text">
      What is your unique testing ID? ( You will be given this by a lab
      assistant )
    </h3>
    <input type="text" class="user-id" v-model="uid" />
    <button @click="storeUserID" class="btn_basic_survey">next</button>
  </div>
  <div class="basic-questions" v-else>
    <h3 class="basic-questions_title">Basic questions</h3>
    <img
      src="../../assets/app_icons/diverseimg.jpg"
      alt="Image"
      style="width: 273px"
    />
    <h4>How do you identify your gender</h4>
    <div class="ethnicities">
      <select name="gender" id="gender" v-model="userData.gender">
        <option value="none" selected disabled>Choose your gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Non Binary">Non-Binary</option>
        <option value="Other">Other</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <h4>Other, please specify</h4>
      <input
        autocomplete="false"
        type="text"
        class="ethnicity-input"
        v-model="gender"
      />
    </div>
    <h4 style="margin-top: 26px">How would you identify your race/ethnicity</h4>

    <div class="ethnicities">
      <select
        name="ethnicity"
        id="ethnicity"
        v-model="userData.chosenethnicity"
      >
        <option value="none" selected disabled>Choose your ethnicity</option>
        <option value="American Indian/Alaska Native">
          American Indian/Alaska Native
        </option>
        <option value="Asian">Asian</option>
        <option value="Black/African American">Black/African American</option>
        <option value="Hispanic">Hispanic</option>
        <option value="Native Hawaiian or Other Pacific Islander">
          Native Hawaiian or Other Pacific Islander
        </option>
        <option value="White">White</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <h4>Other, please specify</h4>
      <input type="text" class="ethnicity-input" v-model="chosenethnicity" />
    </div>
    <div class="progress">
      <router-link to="/IAT_Choose_Test" class="btn_basic_survey router-link"
        >Back</router-link
      >
      <button @click="next" class="btn_basic_survey">next</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["next"],
  data() {
    return {
      chosenethnicity: "",
      gender: "",
      uid: "",
      userHasPutInUserID: false,
      userData: {
        gender: "",
        chosenethnicity: "",
        userWouldPrefer: "",
        boyWouldPrefer: "",
        girlWouldPrefer: "",
      },
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
.basic-questions_title {
  font-size: 18px;
}
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 852px) {
  .basic-questions_title {
    font-size: 18px;
    margin: 38px 0px 20px;
  }
}
</style>
