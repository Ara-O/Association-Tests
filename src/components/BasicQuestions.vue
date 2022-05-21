<template>
<div>
  <h3>Basic questions</h3>
    <img
      src="../assets/app-icons/diverseimg.jpg"
      alt="Image"
      style="width: 273px"
    />
  <div class="image_examples">
  </div>
  <h4>How do you identify your gender</h4>
  <div class="image_examples">
    <div class="gender_choice">
      <input
        type="radio"
        value="male"
        name="gender"
        v-model="userData.gender"
        id="male"
        style="    margin-left: 46px;"
      />
      <label for="male">Male</label>
    </div>
    <div class="gender_choice">
      <input
        type="radio"
        value="female"
        name="gender"
        v-model="userData.gender"
        id="female"
      />
      <label for="female">Female</label>
    </div>
    <div class="gender_choice">
      <input
        type="radio"
        value="other"
        name="gender"
        v-model="userData.gender"
        id="other"
      />
      <label for="other">Other</label>
    </div>
  </div>
  <h4 style="margin-top: 35px">How would you identify your race/ethnicity</h4>

  <div class="ethnicities">
    <select name="ethnicity" id="ethnicity" v-model="userData.chosenethnicity">
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
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        opinionofmen: "",
        opinionofwomen: "",
      },
    };
  },

  methods: {
    next() {
        console.log(this.userData.chosenethnicity.trim())
        if(this.userData.chosenethnicity.trim() === ""){this.userData.chosenethnicity = this.chosenethnicity}
      this.$emit("next", this.userData);
    },
  },
};
</script>