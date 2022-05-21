<template>
  <!-- birthday -->
    <label for="" style="color: red" v-if="missingField">There is a missing field, please try again</label>
  <label for="birthday">Please enter your birthday: </label>
  <br />
  <input
    type="date"
    name=""
    id="birthday"
    class="input-field"
    v-model="userData.birthday"
  />

  <!-- gender -->
  <br />
  <label for="gender">Please enter your gender: </label>
  <br />
  <input type="radio" name="gender" value="Male" id="male"  v-model="userData.gender"/>
  <label for="male">Male </label>
  <input type="radio" name="gender" value="Female" id="female" v-model="userData.gender" />
  <label for="female">Female </label>
  <br />
  <input type="radio" name="gender" value="Transgender" id="Transgender" v-model="userData.gender" />
  <label for="Transgender">Transgender </label>
  <input type="radio" name="gender" value="Prefer not to answer" id="none" v-model="userData.gender"/>
  <label for="none">Prefer not to answer </label>
  <br />
  <!-- Ethnic group -->
  <label for="ethnicgroup"
    >To which ethnic group did your ancestors belong? You may choose more than
    one category. 
    (Examples of countries of origin are listed but are not exhaustive)</label
  >
  <br />
  <select name="Ethnic group" id="ethnicgroup" v-model="userData.ancestorsEthnicity">
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
  <input type="text" id="notlisted" class="input-field" v-model="userData.ancestorsEthnicity_notApplicable" :disabled="userData.ancestorsEthnicity !== ''"/>
  <br />
  <br />
  <button type="button" @click.prevent="emitData" class="nextbtn">
    Move on
  </button>
</template>

<style scoped>
@import url("../../styles/Contact_Experience.css");
</style>

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
        birthday: "",
        gender: "",
        ancestorsEthnicity: "",
        ancestorsEthnicity_notApplicable: "n/a"
      },
      missingField: false
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