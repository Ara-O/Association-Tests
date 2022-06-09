<template>
  <div class="basic-questions">
    <h3 class="basic-questions_title">Basic questions</h3>
    <img
      src="../assets/app_icons/diverseimg.jpg"
      alt="Image"
      style="width: 273px"
    />
    <h4>How do you identify your gender</h4>
    <div class="ethnicities">
      <select name="gender" id="gender" v-model="userData.gender">
        <option value="none" selected disabled>Choose your gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Female">Non-Binary</option>
        <option value="Other">Other</option>
        <option value="Prefer not to say">Prefer not to say</option>
      </select>
      <h4>Other, please specify</h4>
      <input autocomplete="false"  type="text" class="ethnicity-input" v-model="gender" />
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
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        opinionofboys: "",
        opinionofgirls: "",
      },
    };
  },

  methods: {
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
@media (max-width: 852px) {
  .basic-questions_title {
    font-size: 18px;
    margin: 38px 0px 20px;
  }
}
</style>