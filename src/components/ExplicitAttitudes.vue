<template>
  <h4>
    How warm or cold do you feel towards men? Use the slider:
    {{ this.userData.slider1 }}
  </h4>
  <div class="warmness-slider">
    <div class="slider-options">
      <span> <h5>Cold ( 1 )</h5> </span>
      <span> <h5>No Preference ( 50 )</h5> </span>
      <span> <h5>Warm ( 100 )</h5> </span>
    </div>
    <input
      type="range"
      v-model="userData.slider1"
      min="1"
      max="100"
      class="input-range-slider"
    />
  </div>

  <h4>
    How warm or cold do you feel towards women? Use the slider:
    {{ this.userData.slider2 }}
  </h4>

  <div class="warmness-slider">
    <div class="slider-options">
      <span> <h5>Cold ( 1 )</h5> </span>
      <span> <h5>No Preference ( 50 )</h5> </span>
      <span> <h5>Warm ( 100 )</h5> </span>
    </div>
    <input
      type="range"
      v-model="userData.slider2"
      min="1"
      max="100"
      class="input-range-slider"
    />
  </div>
  <h4>
    I consider men to be
    <select v-model="userData.opinionofmen">
      <option value="Much more associated with career than">
        Much more associated with career than women
      </option>
      <option value="Somewhat more associated with career than">
        Somewhat more associated with career than women
      </option>
      <option value="Less associated with career than">
        Less associated with career than women
      </option>
    </select>
  </h4>
  <h4 style="margin-top: 0px">
    I consider women to be
    <select v-model="userData.opinionofwomen">
      <option value="Much more associated with career than">
        Much more associated with career than men
      </option>
      <option value="Somewhat more associated with career than">
        Somewhat more associated with career than men
      </option>
      <option value="Less associated with career than">
        Less associated with career than men
      </option></select
    >
  </h4>
  <div class="buttons">
    <button
      @click="progress_ts"
      class="btn btn_basic_survey"
      style="margin-top: 5px; width: 195px;  padding: 27px 18px"
    >
      Touch Screen Version
    </button>
    <button
      @click="progress_kb"
      class="btn btn_basic_survey kb_btn"
      style="margin-top: 5px; width: 150px; padding: 27px 18px"
    >
      Keyboard Version
    </button>
  </div>
</template>

<script>
export default {
  props: ["userDataProp"],
  emits: ["progress_kb", "progress_ts"],
  data() {
    return {
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
    progress_ts() {
      this.$emit("progress_ts");
    },
    progress_kb() {
      this.$emit("progress_kb");
    },
  },

  mounted() {
    this.userData = this.userDataProp;
  },
};
</script>
