<template>
  <main>
    <!-- BASIC QUESTIONS -->
    <div v-if="moveon" class="survey_container">
      <h3>Basic questions</h3>
      <h4>How do you identify your gender</h4>
      <div class="image_examples">
        <img
          src="../../assets/app-icons/diverseimg.jpg"
          alt="Image"
          style="width: 273px"
        />
      </div>
      <div class="image_examples">
        <div class="gender_choice">
          <input
            type="radio"
            value="male"
            name="gender"
            v-model="userData.gender"
            id="male"
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
      <h4 style="margin-top: 35px">
        How would you identify your race/ethnicity
      </h4>

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
        </select>
        <h4>Other, please specify</h4>
        <input type="text" class="ethnicity-input" v-model="chosenethnicity" />
      </div>
      <div class="progress">
        <router-link to="/Home" class="nextbtn btn">Back</router-link>
        <button @click="next" class="btn nextbtn">next</button>
      </div>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <h4>
        How warm or cold do you feel towards men? Use the slider:
        {{ this.userData.slider1 }}
      </h4>
      <input type="range" v-model="userData.slider1" min="1" max="100" />
      <h4>
        How warm or cold do you feel towards women? Use the slider:
        {{ this.userData.slider2 }}
      </h4>
      <input type="range" v-model="userData.slider2" min="1" max="100" />
      <br />
      <h4>
        I consider men to be
        <select v-model="userData.opinionofmen">
          <option value="Much more associated with career than">
            Much more associated with career than
          </option>
          <option value="Somewhat more associated with career than">
            Somewhat more associated with career than
          </option>
          <option value="Less associated with career than">
            Less associated with career than
          </option>
        </select>
        women
      </h4>
      <h4>
        I consider women to be
        <select v-model="userData.opinionofwomen">
          <option value="Much more associated with career than">
            Much more associated with career than
          </option>
          <option value="Somewhat more associated with career than">
            Somewhat more associated with career than
          </option>
          <option value="Less associated with career than">
            Less associated with career than
          </option></select
        >men
      </h4>
      <div class="buttons">
        <button
          @click="progress_ts"
          class="btn nextbtn"
          style="margin-top: 5px"
        >
          Touch Screen Version
        </button>
        <button
          @click="progress_kb"
          class="btn nextbtn kb_btn"
          style="margin-top: 5px"
        >
          Keyboard Version
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      moveon: true,
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        opinionofmen: "",
        opinionofwomen: "",
      },
      chosenethnicity: "",
    };
  },

  methods: {
    next() {
      this.moveon = false;
    },

    progress_ts() {
      this.userData.chosenethnicity =
        this.chosenethnicity || this.userData.chosenethnicity;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White_Touchscreen");
    },

    progress_kb() {
      this.userData.chosenethnicity =
        this.chosenethnicity || this.userData.chosenethnicity;
      this.$store.state.userData = this.userData;
      this.$router.push("IAT_Black_White");
    },
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn {
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
}

.btn:hover {
  box-shadow: 0px 0px #cbcbcb;
  transform: translate(-2px, 2px);
}

.backbtn {
  /* position: absolute; */
  min-height: 46px;
  min-width: 80px;
  margin-top: 33px;
}

.nextbtn {
  min-height: 45px;
  min-width: 45px;
  border: none;
  font-weight: 300;
  margin-top: 33px;
  font-size: 13px;
  padding: 1px 26px;
}

.survey_container {
  min-height: 586px;
  min-width: 471px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 14px 46px;
  justify-content: center;
}

.image_examples {
  display: flex;
}

.gender_img {
  width: 174px;
}

.gender_choice {
  margin-top: 10px;
  margin-left: 23px;
}

.ethnicities {
  display: flex;
  justify-content: center;
  flex-direction: column;
  column-gap: 20px;
}

h4 {
  width: 317px;
  line-height: 27px;
  margin-bottom: 15px;
}

select {
  height: 28px;
  border: solid 1px #d0d0d0;
  border-radius: 7px;
  text-align: center;
  font-weight: 400;
}

.buttons {
  display: flex;
  column-gap: 10px;
}

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

.survey_container h4,
#male,
#female,
label {
  font-weight: 400;
  font-size: 15px;
}

.ethnicity-input {
  height: 28px;
  border: solid 1px #d0d0d0;
  border-radius: 7px;
  text-align: center;
  font-weight: 400;
}

@media (max-width: 450px) {
  .survey_container {
    min-height: 0px;
    min-width: 0px;
    border: none;
    box-shadow: none;
    padding: 4px;
  }

  main {
    background: white;
  }

  .nextbtn {
    font-size: 14px;
  }

  .kb_btn {
    display: none;
  }
}
</style>
