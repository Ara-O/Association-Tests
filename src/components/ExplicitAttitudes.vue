<template>
  <h3 style="font-size: 18px">Explicit Attitudes</h3>
  <h4>
    <!-- CHANGE THIS FOR THE DIFFERENT TESTS -->
    How do you feel about boys? Use the slider:
    {{ this.userData.slider1 }}
  </h4>
  <!-- Warmness Slider -->
  <div class="warmness-slider">
    <div class="slider-options">
      <img
        src="../assets/Emotions_Range/big-frown.png"
        alt="big frown"
        class="emotion-img"
        style="width: 32px"
      />
      <img
        src="../assets/Emotions_Range/slightly-sad.png"
        alt="slightly sad"
        class="emotion-img"
        style="width: 33px"
      />
      <img
        src="../assets/Emotions_Range/no-preference.png"
        alt="no preference"
        class="emotion-img"
      />
      <img
        src="../assets/Emotions_Range/slightly-happy.png"
        alt="slightly happy"
        class="emotion-img"
        style="width: 32px"
      />
      <img
        src="../assets/Emotions_Range/big-smile.png"
        alt="big smile"
        class="emotion-img"
      />
    </div>
    <input
      type="range"
      v-model="userData.slider1"
      min="1"
      max="100"
      class="input-range-slider"
    />
  </div>

  <!-- Warmess Slider -->
  <h4>
    How do you feel about girls? Use the slider:
    {{ this.userData.slider2 }}
  </h4>

  <div class="warmness-slider">
    <div class="slider-options">
      <img
        src="../assets/Emotions_Range/big-frown.png"
        alt="big frown"
        class="emotion-img"
        style="width: 32px"
      />
      <img
        src="../assets/Emotions_Range/slightly-sad.png"
        alt="slightly sad"
        class="emotion-img"
        style="width: 33px"
      />
      <img
        src="../assets/Emotions_Range/no-preference.png"
        alt="no preference"
        class="emotion-img"
      />
      <img
        src="../assets/Emotions_Range/slightly-happy.png"
        alt="slightly happy"
        class="emotion-img"
        style="width: 32px"
      />
      <img
        src="../assets/Emotions_Range/big-smile.png"
        alt="big smile"
        class="emotion-img"
      />
    </div>
    <input
      type="range"
      v-model="userData.slider2"
      min="1"
      max="100"
      class="input-range-slider"
    />
  </div>

  <!-- Stereotype section -->
  <div>
    <h4>{{ opinionTitle1 }}</h4>
    <div class="gender-toy-stereotype-option">
      <img
        src="../assets/IAT_Gender_Toy/C_M08.jpg"
        alt="Boy child"
        class="child-img-survey"
      />
      <span>: </span>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option1-2">
          <div v-if="leftImg !== ''">
            <img
              :src="getImage(leftImg)"
              alt="Toy 1"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option1-2"
          name="child-img-survey-2"
          :value="generateOptionValue(leftImg)"
          v-model="userData.boyWouldChooseToPlayWith"
        />
      </div>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option2-2">
          <div v-if="rightImg">
            <img
              :src="getImage(rightImg)"
              alt="Toy 2"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option2-2"
          name="child-img-survey-2"
          :value="generateOptionValue(rightImg)"
          v-model="userData.boyWouldChooseToPlayWith"
        />
      </div>
    </div>
  </div>

  <div>
    <!-- Second stereotype option-->
    <h4>{{ opinionTitle2 }}</h4>
    <div class="gender-toy-stereotype-option" style="margin-bottom: 30px">
      <img
        src="../assets/IAT_Gender_Toy/C_F08.jpg"
        alt="Girl child"
        class="child-img-survey"
      />
      <span>: </span>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option1">
          <div v-if="leftImg2 !== ''">
            <img
              :src="getImage(leftImg2)"
              alt="Toy 1"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option1"
          name="child-img-survey"
          :value="generateOptionValue(leftImg2)"
          v-model="userData.girlWouldChooseToPlayWith"
        />
      </div>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option2">
          <div v-if="rightImg2">
            <img
              :src="getImage(rightImg2)"
              alt="Toy 2"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option2"
          name="child-img-survey"
          :value="generateOptionValue(rightImg2)"
          v-model="userData.girlWouldChooseToPlayWith"
        />
      </div>
    </div>
  </div>

  <div class="buttons">
    <button
      @click="progress_ts"
      class="btn btn_basic_survey"
      style="margin-top: 5px; width: 195px; padding: 24px 18px"
    >
      Touch Screen Version
    </button>
    <button
      @click="progress_kb"
      class="btn btn_basic_survey kb_btn"
      style="margin-top: 5px; width: 150px; padding: 24px 18px"
    >
      Keyboard Version
    </button>
  </div>
</template>

<script>
export default {
  props: {
    userDataProp: Object,
    opinionTitle1: String,
    opinionTitle2: String,
    stereotypeImages1: Array,
    stereotypeImages2: Array,
    currentTest: String,
    fileLocation: {
      default: "Stimulus_Faces",
    },
  },
  emits: ["progress_kb", "progress_ts"],
  data() {
    return {
      leftImg: "",
      rightImg: "",
      leftImg2: "",
      rightImg2: "",
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        boyWouldChooseToPlayWith: "",
        girlWouldChooseToPlayWith: "",
      },
    };
  },

  methods: {
    progress_ts() {
      this.$emit("progress_ts");
    },
    progress_kb() {
      this.$emit("progress_kb");
    },

    generateOptionValue(img) {
      if (this.currentTest === "IAT_Gender_Toy") {
        if (img[2] === "M") {
          return "Male toy";
        } else if (img[2] === "F") {
          return "Female toy";
        }
      }

      if (this.currentTest === "IAT_Gender_Roles") {
        if (img[0] === "H") {
          return "Kitchen appliance";
        } else if (img[0] === "W") {
          return "Office appliance";
        }
      }

      if (this.currentTest === "IAT_Gender_Clothing") {
        if (img[3] === "F") {
          return "Female clothing";
        } else if (img[3] === "M") {
          return "Male clothing";
        }
      }

      if (this.currentTest === "IAT_Gender_Color") {
        if (img[0] === "b") {
          return "Blue color";
        } else if (img[0] === "p") {
          return "Female color";
        }
      }

      if (this.currentTest === "IAT_Gender_Subject") {
        if (img[0] === "M") {
          return "Math image";
        } else if (img[0] === "R") {
          return "Reading image";
        }
      }
    },

    getImage(img) {
      return require(`../assets/${this.fileLocation}/${img}.jpg`);
    },

    generateStereotypeOptions() {
      let randomNo = Math.floor(Math.random() * 2);
      //if randomNo is 0, the male will be to the left, else, itll be flipped
      let randomNoStereotype1 = Math.floor(
        Math.random() * this.stereotypeImages1.length
      );
      let randomNoStereotype2 = Math.floor(
        Math.random() * this.stereotypeImages2.length
      );
      this.leftImg =
        randomNo === 0
          ? this.stereotypeImages1[randomNoStereotype1]
          : this.stereotypeImages2[randomNoStereotype2];
      this.rightImg =
        randomNo === 0
          ? this.stereotypeImages2[randomNoStereotype2]
          : this.stereotypeImages1[randomNoStereotype1];

      randomNo = Math.floor(Math.random() * 2);
      randomNoStereotype2 = Math.floor(
        Math.random() * this.stereotypeImages2.length
      );
      randomNoStereotype1 = Math.floor(
        Math.random() * this.stereotypeImages1.length
      );
      this.leftImg2 =
        randomNo === 0
          ? this.stereotypeImages1[randomNoStereotype1]
          : this.stereotypeImages2[randomNoStereotype2];
      this.rightImg2 =
        randomNo === 0
          ? this.stereotypeImages2[randomNoStereotype2]
          : this.stereotypeImages1[randomNoStereotype1];
    },
  },

  mounted() {
    this.userData = this.userDataProp;
    this.generateStereotypeOptions();
  },
};
</script>
