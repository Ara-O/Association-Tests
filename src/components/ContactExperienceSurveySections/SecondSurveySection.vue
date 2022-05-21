<template>
  <label for="ethnicgroup"
    >To which ethnic or cultural group(s) do you consider your child belongs?
    (continued on next page)</label
  >
  <br />
  <select name="Ethnic group" id="ethnicgroup" v-model="userData.childEthnicGroup">
    <option
      v-for="ethnicity in ethnicGroups"
      :value="ethnicity"
      :key="ethnicity"
      v-html="ethnicity"
    ></option>
  </select>

  <br />
  <label for="notlisted">If ancestry is not listed, please specify: </label>
  <br />
  <input type="text" id="notlisted" class="input-field" v-model="userData.childEthnicGroup_notApplicable" :disabled="userData.childEthnicGroup !== ''"/>
  <br />
  <label for="groupmembers"
    >Are both your members of this (these) group(s)? (Circle one)
  </label>
  <input type="radio" name="sameGroup1" value="yes" id="yes" v-model="userData.membersOfGroup"/>
  <label for="yes">yes</label>
  <input type="radio" name="sameGroup1" value="no" id="no" v-model="userData.membersOfGroup"/>
  <label for="no">no</label>
  <br />
  <label for="notlisted2"
    >If not, to which other ethnic group do you belong?</label
  >
  <input type="text" id="notlisted2" class="input-field" v-model="userData.membersOfGroup_notApplicable" :disabled="userData.membersOfGroup == 'yes'" />
  <br />
  <label for="birthplace">In which country did your child grow up? </label>
  <br />
  <input type="text" id="birthplace" class="input-field" v-model="userData.whereChildGrewUp"/>
  <br />
  <label for="duration-years">How long has your child lived in Canada?</label>
  <br />
  <input
    type="number"
    id="duration-years"
    placeholder="Years"
    class="input-field"
    v-model="userData.durationChildLivedInCanadaYear"
  />
  <input
    type="number"
    id="duration-months"
    placeholder="Months"
    class="input-field"
        v-model="userData.durationChildLivedInCanadaMonth"
  />
  <br />
  <label
    >Were there East Asian students (i.e. Chinese, Japanese, Korean descent) in
    your child's daycare or preschool? (Circle one)</label
  >
  <br />
  <input type="radio" id="yes2" name="sameGroup2" value="yes" v-model="userData.presenceOfEastAsianStudents"
/>
  <label for="yes2">yes</label>
  <input type="radio" id="no2" name="sameGroup2" value="no" v-model="userData.presenceOfEastAsianStudents"/>
  <label for="no2">no</label>
  <br />
  <label for="percentage"
    >If yes, approximately what percentage of students were East Asian?
  </label>
  <br />
  <input type="number" name="percentage" id="percentage" class="input-field" v-model="userData.percentageOfEastAsianStudents" :disabled="userData.presenceOfEastAsianStudents === 'no'"/>
  <br />
    <label for="" style="color: red" v-if="missingField">There is a missing field, please try again</label>
  <br>
  <button type="button" @click.prevent="emitData" class="nextbtn">
    Move on
  </button>

</template>


<script>
export default {
  emits: ["emit-data"],
  data() {
    return {
      ethnicGroups: [
          "Unsure",
        "Aboriginal (e.g. Inuit, Métis, First Nations)",
        "Arab/West Asian (e.g., Armenian, Egyptian, Iranian)",
        "Black (e.g., Somalia, Nigeria, Cuba, Jamaica)",
        "East Asian (e.g. Japanese, Chinese, Korean)",
        "Latin American (e.g. Mexican, Colombian)",
        "South Asian (e.g. Indian, Pakistani)",
        "South East Asian (e.g. Thai, Filipino)",
        "White/Caucasian (e.g. British, Italian, Ukrainian)",
      ],
      userData: {
        childEthnicGroup: "",
        childEthnicGroup_notApplicable: "n/a",
        membersOfGroup: "",
        membersOfGroup_notApplicable: "n/a",
        whereChildGrewUp: "",
        durationChildLivedInCanadaYear: "",
        durationChildLivedInCanadaMonth: "",
        presenceOfEastAsianStudents: "",
        percentageOfEastAsianStudents: 0,
      },
      //notApplicable: "",
      missingField: false,
      membersOfGroup_notApplicable: true
    };
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