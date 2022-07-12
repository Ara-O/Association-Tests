<template>
  <label>
    Are there East Asian (i.e. Chinese, Japanese, Korean descent) in your
    community (Circle one)
  </label>
  <input
    type="radio"
    name="communityEastAsian"
    value="Yes"
    id="yes9"
    v-model="userData.presenceOfEastAsianInCommunity"
  />
  <label for="yes9">Yes</label>
  <input
    type="radio"
    name="communityEastAsian"
    value="No"
    id="no9"
    v-model="userData.presenceOfEastAsianInCommunity"
  />
  <label for="no9">No</label>
  <br />
  <label for="percentage7"
    >If yes, approximately what percentage of people are East Asian?
  </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage7"
    class="input-field"
    v-model="userData.percentageOfEastAsianInCommunity"
    :disabled="userData.presenceOfEastAsianInCommunity === 'No'"
  />
  <br />
  <label>
    Were there Black students (i.e. African, Caribbean descent) in your
    community? (Circle one)
  </label>
  <input
    type="radio"
    name="communityBlack"
    value="Yes"
    id="yes10"
    v-model="userData.presenceOfBlackInCommunity"
  />
  <label for="yes10">Yes</label>
  <input
    type="radio"
    name="communityBlack"
    value="No"
    id="no10"
    v-model="userData.presenceOfBlackInCommunity"
  />
  <label for="no10">No</label>
  <br />
  <label for="percentage8">
    If yes, approximately what percentage of people are Black?
  </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage8"
    class="input-field"
    v-model="userData.percentageOfBlackInCommunity"
    :disabled="userData.presenceOfBlackInCommunity === 'No'"
  />
  <br />
  <br />
  <label>
    Were there Caucasian students (i.e. European descent) in your community?
    (Circle one)
  </label>
  <input
    type="radio"
    name="communityCaucasian"
    value="Yes"
    id="yes11"
    v-model="userData.presenceOfCaucasianInCommunity"
  />
  <label for="yes11">Yes</label>
  <input
    type="radio"
    name="communityCaucasian"
    value="No"
    id="no11"
    v-model="userData.presenceOfCaucasianInCommunity"
  />
  <label for="no11">No</label>
  <br />
  <label for="percentage9">
    If yes, approximately what percentage of people are Caucasians?
  </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage9"
    class="input-field"
    v-model="userData.percentageOfCaucasianInCommunity"
    :disabled="userData.presenceOfCaucasianInCommunity === 'No'"
  />
  <br />
  <label for="" style="color: red" v-if="missingField"
    >There is a missing field, please try again</label
  >
  <br />
  <button type="button" @click.prevent="emitData" class="next-contact-experience">
    Move on
  </button>
</template>
<script>
export default {
  emits: ["emit-data"],
  data() {
    return {
      userData: {
        presenceOfEastAsianInCommunity: "",
        percentageOfEastAsianInCommunity: 0,
        presenceOfBlackInCommunity: "",
        percentageOfBlackInCommunity: 0,
        presenceOfCaucasianInCommunity: "",
        percentageOfCaucasianInCommunity: 0,
      },
      missingField: false,
    };
  },

  methods: {
    emitData() {
      // this.missingField = false;
      // for (let key in this.userData) {
      //   if (String(this.userData[key]).trim() == "") {
      //     this.missingField = true;
      //     let that = this;
      //     window.setTimeout(function () {
      //       that.missingField = false;
      //     }, 3000);
      //   }
      // }

      // if (!this.missingField) {
        this.$emit("emit-data", this.userData);
      // }
    },
  },
};
</script>

<style scoped>
@import url("../../styles/Contact_Experience.css");
</style>