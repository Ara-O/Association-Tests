<template>
  <h3 style="font-size: 18px">Explicit Attitudes</h3>
  <h4>
    <!-- CHANGE THIS FOR THE DIFFERENT TESTS -->
    How much do you like {{ currentRace1 }} children? Use the slider:
    {{ userData.slider1 }}
  </h4>
  <!-- Warmness Slider -->
  <div class="warmness-slider">
    <div class="slider-options">
      <img
        src="../../assets/emotions_range/big-frown.png"
        alt="big frown"
        class="emotion-img"
        style="width: 32px"
        @click="userData.slider1 = 0"
      />
      <img
        src="../../assets/emotions_range/slightly-sad.png"
        alt="slightly sad"
        class="emotion-img"
        style="width: 33px"
        @click="userData.slider1 = 25"
      />
      <img
        src="../../assets/emotions_range/no-preference.png"
        alt="no preference"
        class="emotion-img"
        @click="userData.slider1 = 50"
      />
      <img
        src="../../assets/emotions_range/slightly-happy.png"
        alt="slightly happy"
        class="emotion-img"
        style="width: 32px"
        @click="userData.slider1 = 75"
      />
      <img
        src="../../assets/emotions_range/big-smile.png"
        alt="big smile"
        class="emotion-img"
        @click="userData.slider1 = 100"
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
    How much do you like {{ currentRace2 }} children? Use the slider:
    {{ userData.slider2 }}
  </h4>

  <div class="warmness-slider">
    <div class="slider-options">
      <img
        src="../../assets/emotions_range/big-frown.png"
        alt="big frown"
        class="emotion-img"
        style="width: 32px"
        @click="userData.slider2 = 0"
      />
      <img
        src="../../assets/emotions_range/slightly-sad.png"
        alt="slightly sad"
        class="emotion-img"
        style="width: 33px"
        @click="userData.slider2 = 25"
      />
      <img
        src="../../assets/emotions_range/no-preference.png"
        alt="no preference"
        class="emotion-img"
        @click="userData.slider2 = 50"
      />
      <img
        src="../../assets/emotions_range/slightly-happy.png"
        alt="slightly happy"
        class="emotion-img"
        style="width: 32px"
        @click="userData.slider2 = 75"
      />
      <img
        src="../../assets/emotions_range/big-smile.png"
        alt="big smile"
        class="emotion-img"
        @click="userData.slider2 = 100"
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

  <!-- Stereotype section - which child would you prefer to play with  -->

  <div>
    <h4>Which child would you like to play with</h4>
    <div class="gender-toy-stereotype-option" style="column-gap: 75px">
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option1-2">
          <div v-if="leftImg !== ''">
            <img
              :src="getImage(leftImg)"
              alt="Toy 1"
              class="child-img-survey child-img-survey-option"
              style="width: 100px; height: 100px px; object-fit: contain"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option1-2"
          name="child-img-survey-2"
          :value="generateOptionValue(leftImg)"
          v-model="userData.userWouldPrefer"
        />
      </div>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option2-2">
          <div v-if="rightImg">
            <img
              :src="getImage(rightImg)"
              alt="Toy 2"
              class="child-img-survey child-img-survey-option"
              style="width: 100px; height: 100px px; object-fit: contain"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option2-2"
          name="child-img-survey-2"
          :value="generateOptionValue(rightImg)"
          v-model="userData.userWouldPrefer"
        />
      </div>
    </div>
  </div>

  <br />
  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="buttons">
      <button
        @click="progress_ts"
        class="btn btn_basic_survey"
        style="margin-top: 5px; width: 195px; padding: 24px 18px"
      >
        Touchscreen Version
      </button>
      <button
        @click="progress_kb"
        class="btn btn_basic_survey kb_btn"
        style="margin-top: 5px; width: 150px; padding: 24px 18px"
      >
        Keyboard Version
      </button>
    </div>
    <br />
    <button
      @click="goBack"
      class="btn btn_basic_survey kb_btn"
      style="margin-top: 5px; width: 150px; padding: 24px 18px"
    >
      Back
    </button>
  </div>
</template>

<script>
export default {
  props: [
    "userDataProp",
    "childrenImages1",
    "childrenImages2",
    "currentTest",
    "currentRace1",
    "currentRace2",
  ],
  emits: ["progress_kb", "progress_ts", "goBackEmit"],
  data() {
    return {
      leftImg: "",
      rightImg: "",

      //! Update on storing data IAT
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        userWouldPrefer: "",
      },
    };
  },

  methods: {
    goBack() {
      this.$emit("goBackEmit");
    },
    progress_ts() {
      this.$emit("progress_ts", this.userData);
    },
    progress_kb() {
      this.$emit("progress_kb", this.userData);
    },

    getImage(img) {
      return new URL(`../../assets/Stimulus_Faces/${img}.jpg`, import.meta.url)
        .href;
    },

    generateOptionValue(img) {
      // The suffix for when the user clicks what image the boy/girl/pet would likely choose
      if (this.currentTest === "IAT_Black_White") {
        if (img[0] === "W") {
          return "White child";
        } else if (img[0] === "B") {
          return "Black child";
        }
      }
    },

    generateChildrenOptions() {
      let randomNo = Math.floor(Math.random() * 2);
      //if randomNo is 0, the male will be to the left, else, itll be flipped
      let randomNoChildren1 = Math.floor(
        Math.random() * this.childrenImages1.length
      );
      let randomNoChildren2 = Math.floor(
        Math.random() * this.childrenImages2.length
      );
      this.leftImg =
        randomNo === 0
          ? this.childrenImages1[randomNoChildren1]
          : this.childrenImages2[randomNoChildren2];
      this.rightImg =
        randomNo === 0
          ? this.childrenImages2[randomNoChildren2]
          : this.childrenImages1[randomNoChildren1];
    },
  },

  mounted() {
    this.userData.gender = this.userDataProp.gender;
    // delete this.userData.boyWouldPrefer;
    // delete this.userData.girlWouldPrefer;
    this.userData.chosenethnicity = this.userDataProp.chosenethnicity;
    this.userData.slider1 = this.userDataProp.slider1 || 50;
    this.userData.slider2 = this.userDataProp.slider2 || 50;
    this.generateChildrenOptions();
  },
};
</script>
