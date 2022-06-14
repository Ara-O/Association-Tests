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

  <!-- Stereotype section - how do you feel about white americans, black americans, asian americans -->

  <div>
      <!-- <button @click="test">clickity clack</button> -->
    <h4>
      Using the scale below, please rate how you feel about White Americans.
    </h4>
    <div
      class="explicit-attitudes-div"
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <h5>{{ explicitAttitudeOption.left }}</h5>
      <span v-for="i in 7" :key="i" class="explicit-attitudes-scale">
        <label :for=" `${explicitAttitudeOption.left}-${i}`" class="explicit-attitudes-label">{{ i }}</label>
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}`"
          style="margin-left: 21px"
          :value="i"
          :name="explicitAttitudeOption.right"
          v-model="userData.opinionofwhiteamericans[`${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`]"
        />
      </span>
      <h5 style="margin-left: 21px">{{ explicitAttitudeOption.right }}</h5>
    </div>
  </div>

  <!-- Opinion on black americans  -->

  <div>
    <h4>
      Using the scale below, please rate how you feel about Black Americans.
    </h4>
    <div
      class="explicit-attitudes-div"
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <h5>{{ explicitAttitudeOption.left }}</h5>
      <span v-for="i in 7" :key="i" class="explicit-attitudes-scale">
        <label :for=" `${explicitAttitudeOption.left}-${i}-2`" class="explicit-attitudes-label">{{ i }}</label>
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}-2`"
          style="margin-left: 21px"
          :value="i"
          :name="`${explicitAttitudeOption.right}-2`"
          v-model="userData.opinionofblackamericans[`${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`]"
        />
      </span>
      <h5 style="margin-left: 21px">{{ explicitAttitudeOption.right }}</h5>
    </div>
  </div>

  <!-- Users opinion of asian americans  -->

  <div>
    <h4>
      Using the scale below, please rate how you feel about Asian Americans.
    </h4>
    <div
      class="explicit-attitudes-div"
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <h5>{{ explicitAttitudeOption.left }}</h5>
      <span v-for="i in 7" :key="i" class="explicit-attitudes-scale">
        <label :for=" `${explicitAttitudeOption.left}-${i}-3`" class="explicit-attitudes-label">{{ i }}</label>
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}-3`"
          style="margin-left: 21px"
          :value="i"
          :name="`${explicitAttitudeOption.right}-3`"
          v-model="userData.opinionofasianamericans[`${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`]"
        />
      </span>
      <h5 style="margin-left: 21px">{{ explicitAttitudeOption.right }}</h5>
    </div>
  </div>

    <br>
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
  props: ["userDataProp", "opinionTitle1", "opinionTitle2", "currentTest"],
  emits: ["progress_kb", "progress_ts"],
  data() {
    return {
      leftImg: "",
      rightImg: "",
      leftImg2: "",
      rightImg2: "",
      explicitAttitudeOptions: [
        { left: "Unlikeable", right: "Likeable" },
        { left: "Mean", right: "Kind" },
        { left: "Unsuccessful", right: "Successful" },
        { left: "Unattractive", right: "Attractive" },
        { left: "Selfish", right: "Altruistic" },
        { left: "Dishonest", right: "Honest" },
        { left: "Untrustworthy", right: "Trustworthy" },
        { left: "Lazy", right: "Hardworking" },
      ],
      //! Update on storing data IAT
      userData: {
        gender: "",
        chosenethnicity: "",
        slider1: 50,
        slider2: 50,
        opinionofblackamericans: {
          Unlikeable_Likeable: "Not provided",
          Mean_Kind: "Not provided",
          Unsuccessful_Successful: "Not provided",
          Selfish_Altruistic: "Not provided",
          Unattractive_Attractive: "Not provided",
          Dishonest_Honest: "Not provided",
          Untrustworthy_Trustworthy: "Not provided",
          Lazy_Hardworking: "Not provided",
        },
        opinionofwhiteamericans: {
          Unlikeable_Likeable: "Not provided",
          Mean_Kind: "Not provided",
          Unsuccessful_Successful: "Not provided",
          Selfish_Altruistic: "Not provided",
          Unattractive_Attractive: "Not provided",
          Dishonest_Honest: "Not provided",
          Untrustworthy_Trustworthy: "Not provided",
          Lazy_Hardworking: "Not provided",
        },
        opinionofasianamericans: {
          Unlikeable_Likeable: "Not provided",
          Mean_Kind: "Not provided",
          Unsuccessful_Successful: "Not provided",
          Selfish_Altruistic: "Not provided",
          Unattractive_Attractive: "Not provided",
          Dishonest_Honest: "Not provided",
          Untrustworthy_Trustworthy: "Not provided",
          Lazy_Hardworking: "Not provided",
        },
      },
    };
  },

  methods: {
      test(){
          // console.log(this.userData)
      },
    progress_ts() {
      this.$emit("progress_ts",this.userData);
    },
    progress_kb() {
      this.$emit("progress_kb", this.userData);
    },

    getImage(img) {
      return require(`../assets/Stimulus_Faces/${img}.jpg`);
    },
  },

  mounted() {
    this.userData.gender = this.userDataProp.gender;
    this.userData.chosenethnicity = this.userDataProp.chosenethnicity;
    this.userData.slider1 = this.userDataProp.slider1;
    this.userData.slider2 = this.userDataProp.slider2;
  },
};
</script>
