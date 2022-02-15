<template>
  <main>

    <!-- BASIC QUESTIONS -->
    <div v-if="moveon" class="survey_container">
      <h3 style="margin-top: 53px">Basic questions</h3>
      <h4>How do you identify your gender</h4>
      <div class="image_examples">
        <img
          src="../../assets/app-icons/diverseimg.jpg"
          alt="Image"
          style="width: 350px"
        />
      </div>
      <div class="image_examples">
        <div class="gender_choice">
          <input
            type="radio"
            value="male"
            for="male"
            name="gender"
            v-model="userData.gender"
          />
          <label id="male">Male</label>
        </div>
        <div class="gender_choice">
          <input
            type="radio"
            value="female"
            for="female"
            name="gender"
            v-model="userData.gender"
          />
          <label id="female">Female</label>
        </div>
      </div>
      <h4 style="margin-top: 35px">
        How would you identify your race/ethnicity
      </h4>
      <div class="ethnicities">
        <div v-for="ethnicity in ethnicities" :key="ethnicity.id">
          <input
            type="checkbox"
            :value="ethnicity.name"
            v-model="userData.chosenethnicity"
          />
          <label>{{ ethnicity.name }}</label>
        </div>
      </div>
      <div class="progress">
     <router-link to="/" class="nextbtn btn">Back</router-link>
      <button @click="next" class="btn nextbtn">next</button>
</div>
    </div>

    <!-- EXPLICIT ATTITUDES -->
    <div v-else class="survey_container">
      <h3>Explicit attitudes</h3>
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
        <button @click="progress_ts" class="btn nextbtn">
          Touch Screen Version
        </button>
        <button @click="progress_kb" class="btn nextbtn kb_btn">
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
      ethnicities: [{ name: "White" }, { name: "Black" }],
      moveon: true,
      userData: {
        gender: "",
        chosenethnicity: [],
        slider1: 50,
        slider2: 50,
        opinionofmen: "",
        opinionofwomen: "",
      },
    };
  },

  methods: {
    next() {
      this.moveon = false;
    },

    progress_ts() {
      this.$store.state.IAT_TS_data = this.userData;
      this.$router.push("IAT_TS_Instruction");
    },

    progress_kb() {
      this.$store.state.IAT_data = this.userData;
      this.$router.push("/IAT_Test");
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
  min-width: 85px;
  border: none;
  margin-top: 33px;
}

.survey_container {
  border: solid 1px #c9c9c9;
  min-height: 586px;
  min-width: 471px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-shadow: 0px 1px 10px #b3b3b3;
  box-sizing: border-box;
  padding: 4px 46px;
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
  column-gap: 20px;
}

h4 {
  width: 317px;
  line-height: 27px;
  margin-bottom: 15px;
}

h3 {
  margin-top: 51px;
}

select {
  height: 28px;
  border: solid 1px gray;
  border-radius: 16px;
  text-align: center;
}

.buttons {
  display: flex;
  column-gap: 10px;
}

.progress{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

@media(max-width: 450px){
.survey_container{
  min-height: 0px;
    min-width: 0px;
    border: none;
    box-shadow: none;
    padding: 4px;
}

main{
  background: white;
}

.nextbtn{
  font-size: 14px;
}

.kb_btn{
  display: none;
}
}
</style>
