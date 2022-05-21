<template>
  <label
    >Were there Black students (i.e. African, Caribbean descent) in your in your
    child’s daycare or preschool? (Circle one)</label
  >
  <input
    type="radio"
    name="presenceOfBlackStudents"
    value="Yes"
    id="yes4"
    v-model="userData.presenceOfBlackStudents"
  />
  <label for="yes4">Yes</label>
  <input
    type="radio"
    name="presenceOfBlackStudents"
    value="No"
    id="no4"
    v-model="userData.presenceOfBlackStudents"
  />
  <label for="no4">No</label>
  <br />
  <label for="percentage2"
    >If yes, approximately what percentage of students were Black?
  </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage2"
    class="input-field"
    v-model="userData.percentageOfBlackStudents"
    :disabled="userData.presenceOfBlackStudents === 'No'"
  />
  <br />
  <label
    >Were there Caucasian students (i.e. European descent) in your in your
    child’s daycare or preschool? (Circle one)</label
  >
  <input
    type="radio"
    name="presenceOfCaucasianStudents"
    value="Yes"
    id="yes5"
    v-model="userData.presenceOfCaucasianStudents"
  />
  <label for="yes5">Yes</label>
  <input
    type="radio"
    name="presenceOfCaucasianStudents"
    value="No"
    id="no5"
    v-model="userData.presenceOfCaucasianStudents"
  />
  <label for="no5">No</label>
  <br />
  <label for="percentage3"
    >If yes, approximately what percentage of students were Caucasian?
  </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage3"
    class="input-field"
    v-model="userData.percentageOfCaucasianStudents"
    :disabled="userData.presenceOfCaucasianStudents === 'No'"
  />
  <br />
  <label
    >Does your child have close friends who are East Asian (i.e. Chinese,
    Japanese, Korean descent)? (Circle one)
  </label>
  <input
    type="radio"
    name="friendsOfEastAsian"
    value="Yes"
    id="yes6"
    v-model="userData.hasCloseFriendsWhoAreEastAsian"
  />
  <label for="yes6">Yes</label>
  <input
    type="radio"
    name="friendsOfEastAsian"
    value="No"
    id="no6"
    v-model="userData.hasCloseFriendsWhoAreEastAsian"
  />
  <label for="no6">No</label>
  <br />
  <label for="percentage4">If yes, approximately how many? </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage4"
    class="input-field"
    v-model="userData.percentageCloseFriendsWhoAreEastAsian"
    :disabled="userData.hasCloseFriendsWhoAreEastAsian === 'No'"
  />
  <br />
  <label>
    Do your child have close friends who are Black (i.e. African, Caribbean
    descent)? (Circle one)
  </label>
  <input
    type="radio"
    name="friendsOfBlack"
    value="Yes"
    id="yes7"
    v-model="userData.hasCloseFriendsWhoAreBlack"
  />
  <label for="yes7">Yes</label>
  <input
    type="radio"
    name="friendsOfBlack"
    value="No"
    id="no7"
    v-model="userData.hasCloseFriendsWhoAreBlack"
  />
  <label for="no7">No</label>
  <br />
  <label for="percentage5">If yes, approximately how many? </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage5"
    class="input-field"
    v-model="userData.percentageCloseFriendsWhoAreBlack"
    :disabled="userData.hasCloseFriendsWhoAreBlack === 'No'"
  />
  <br />
  <label>
    Does your child have close friends who are Caucasian (i.e. European
    descent)? (Circle one)
  </label>
  <input
    type="radio"
    name="closeFriendsWhite"
    value="Yes"
    id="yes8"
    v-model="userData.hasCloseFriendsWhoAreCaucasian"
  />
  <label for="yes8">Yes</label>
  <input
    type="radio"
    name="closeFriendsWhite"
    value="No"
    id="no8"
    v-model="userData.hasCloseFriendsWhoAreCaucasian"
  />
  <label for="no8">No</label>
  <br />
  <label for="percentage6">If yes, approximately how many? </label>
  <br />
  <input
    type="number"
    name="percentage"
    id="percentage6"
    class="input-field"
    v-model="userData.percentageCloseFriendsWhoAreCaucasian"
    :disabled="userData.hasCloseFriendsWhoAreCaucasian === 'No'"
  />
  <br />
      <label for="" style="color: red" v-if="missingField">There is a missing field, please try again</label>
<br />
  <button type="button" @click.prevent="emitData" class="nextbtn">
    Move on
  </button>
</template>

<script>
export default {
  emits: ["emit-data"],
  data(){
    return {
      userData: {
      presenceOfBlackStudents: "",
      percentageOfBlackStudents: 0,
      presenceOfCaucasianStudents: "",
      percentageOfCaucasianStudents: 0,
      hasCloseFriendsWhoAreEastAsian: "",
      percentageCloseFriendsWhoAreEastAsian: 0,
      hasCloseFriendsWhoAreBlack: "",
      percentageCloseFriendsWhoAreBlack: 0,
      hasCloseFriendsWhoAreCaucasian: "",
      percentageCloseFriendsWhoAreCaucasian: 0,
      },
      missingField: false
    }
  },

  methods: {
    emitData() {
      // this.missingField = false;
      // for(let key in this.userData){
      //   if(String(this.userData[key]).trim() == ""){
      //     this.missingField= true;
      //     let that = this;
      //     window.setTimeout(function(){
      //       that.missingField = false;
      //     }, 3000)
      //   }
      // }

      // if(!this.missingField){ 
        this.$emit("emit-data", this.userData);
      // }
    },
  },
};
</script>

<style scoped>
@import url("../../styles/Contact_Experience.css");
</style>