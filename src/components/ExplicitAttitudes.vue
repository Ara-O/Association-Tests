<template>
  <h4>
    How warm or cold do you feel towards men? Use the slider:
    {{ this.userData.slider1 }}
  </h4>
  <div class="warmness-slider">
    <div class="slider-options">
      <span> <h5>Cold ( 1 )</h5> </span>
      <span> <h5>Neutral ( 50 )</h5> </span>
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
      <span> <h5>Neutral ( 50 )</h5> </span>
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
    {{opinionTitle1}}
    <select v-model="userData.opinionofboys">
      <option :value="opinion1">
        {{ opinion1 }}
      </option>
      <option :value="opinion2">
        {{ opinion2 }}
      </option>
      <option :value="opinion3">
        {{ opinion3 }}
      </option>
    </select>
  </h4>
  <h4 style="margin-top: 0px">
    {{opinionTitle2}}
   <select v-model="userData.opinionofgirls">
      <option :value="opinion4">
        {{ opinion4 }}
      </option>
      <option :value="opinion5">
        {{ opinion5 }}
      </option>
      <option :value="opinion6">
        {{ opinion6 }}
      </option>
    </select>
  </h4>
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
  props: [
    "userDataProp",
    "opinion1",
    "opinion2",
    "opinion3",
    "opinion4",
    "opinion5",
    "opinion6",
    "opinionTitle1",
    "opinionTitle2"
  ],
  emits: ["progress_kb", "progress_ts"],
  data() {
    return {
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
