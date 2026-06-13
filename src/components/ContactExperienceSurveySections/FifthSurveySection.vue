<template>
  <label for="" style="color: red" v-if="missingField"
    >There is a missing field, please try again</label
  >
  <label for=""
    >In general, how would you rate your child’s amount of contact with East
    Asian people?</label
  >
  <input
    type="radio"
    name="contactWithEastAsian"
    value="1"
    id="1"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="1">1</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="2"
    id="2"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="2">2</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="3"
    id="3"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="3">3</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="4"
    id="4"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="4">4</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="5"
    id="5"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="5">5</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="6"
    id="6"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="6">6</label>
  <input
    type="radio"
    name="contactWithEastAsian"
    value="7"
    id="7"
    v-model="userData.contactWithEastAsianPeople"
  />
  <label for="7">7</label>
  <div>
    <h4 for="" class="not-extensive">1 = very little</h4>
    <h4 for="" class="extensive">7 = very extensive</h4>
  </div>
  <label for=""
    >In general, how would you rate your child’s amount of contact with Black
    people?</label
  >
  <input
    type="radio"
    name="contactWithBlack"
    value="1"
    id="1b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="1b">1</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="2"
    id="2b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="2b">2</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="3"
    id="3b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="3b">3</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="4"
    id="4b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="4b">4</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="5"
    id="5b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="5b">5</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="6"
    id="6b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="6b">6</label>
  <input
    type="radio"
    name="contactWithBlack"
    value="7"
    id="7b"
    v-model="userData.contactWithBlackPeople"
  />
  <label for="7b">7</label>
  <div>
    <h4 for="" class="not-extensive">1 = very little</h4>
    <h4 for="" class="extensive">7 = very extensive</h4>
  </div>
  <label for=""
    >In general, how would you rate your child’s amount of contact with
    Caucasian people?</label
  >
  <input
    type="radio"
    name="contactWithCaucasian"
    value="1"
    id="1c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="1c">1</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="2"
    id="2c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="2c">2</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="3"
    id="3c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="3c">3</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="4"
    id="4c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="4c">4</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="5"
    id="5c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="5c">5</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="6"
    id="6c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="6c">6</label>
  <input
    type="radio"
    name="contactWithCaucasian"
    value="7"
    id="7c"
    v-model="userData.contactWithCaucasianPeople"
  />
  <label for="7c">7</label>
  <div>
    <h4 for="" class="not-extensive">1 = very little</h4>
    <h4 for="" class="extensive">7 = very extensive</h4>
  </div>
  <br /><br />
  <hr />
  <br />

  <div>
    <label style="max-width: 100%">
      Using the scale below, please rate how you feel about White Americans.
    </label>
    <br />
    <br />
    <div
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <!-- <h5>{{ explicitAttitudeOption.left }}</h5> -->
      <span v-for="i in 7" :key="i">
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}`"
          style="margin-left: 21px"
          :value="i"
          :name="explicitAttitudeOption.right"
          v-model="
            userData.opinionofwhiteamericans[
              `${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`
            ]
          "
        />
        <label
          :for="`${explicitAttitudeOption.left}-${i}`"
          class="explicit-attitudes-label"
          >{{ i }}</label
        >
      </span>
      <!-- <h5 style="margin-left: 21px">{{ explicitAttitudeOption.right }}</h5> -->
      <div style="display: flex; column-gap: 145px">
        <h4 for="" class="not-extensive">
          1 = {{ explicitAttitudeOption.left }}
        </h4>
        <h4 for="" class="extensive">7 = {{ explicitAttitudeOption.right }}</h4>
      </div>
    </div>
  </div>

  <!-- Opinion on black americans  -->

  <div>
    <label style="max-width: 100%">
      Using the scale below, please rate how you feel about Black Americans.
    </label>
    <br />
    <br />
    <div
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <span v-for="i in 7" :key="i">
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}-2`"
          style="margin-left: 21px"
          :value="i"
          :name="`${explicitAttitudeOption.right}-2`"
          v-model="
            userData.opinionofblackamericans[
              `${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`
            ]
          "
        />
        <label
          :for="`${explicitAttitudeOption.left}-${i}-2`"
          class="explicit-attitudes-label"
          >{{ i }}</label
        >
      </span>
      <div style="display: flex; column-gap: 145px">
        <h4 for="" class="not-extensive">
          1 = {{ explicitAttitudeOption.left }}
        </h4>
        <h4 for="" class="extensive">7 = {{ explicitAttitudeOption.right }}</h4>
      </div>
    </div>
  </div>

  <!-- Users opinion of asian americans  -->

  <div>
    <label style="max-width: 100%">
      Using the scale below, please rate how you feel about Asian Americans.
    </label>
    <br />
    <br />
    <div
      v-for="explicitAttitudeOption in explicitAttitudeOptions"
      :key="explicitAttitudeOption.id"
    >
      <span v-for="i in 7" :key="i">
        <input
          type="radio"
          :id="`${explicitAttitudeOption.left}-${i}-3`"
          style="margin-left: 21px"
          :value="i"
          :name="`${explicitAttitudeOption.right}-3`"
          v-model="
            userData.opinionofasianamericans[
              `${explicitAttitudeOption.left}_${explicitAttitudeOption.right}`
            ]
          "
        />
        <label
          :for="`${explicitAttitudeOption.left}-${i}-3`"
          class="explicit-attitudes-label"
          >{{ i }}</label
        >
      </span>     
      <!-- <h5 style="margin-left: 21px">{{ explicitAttitudeOption.right }}</h5> -->
      <div style="display: flex; column-gap: 145px">
        <h4 for="" class="not-extensive">
          1 = {{ explicitAttitudeOption.left }}
        </h4>
        <h4 for="" class="extensive">7 = {{ explicitAttitudeOption.right }}</h4>
      </div>
    </div>
  </div>

  <button
    type="button"
    @click.prevent="emitData"
    class="next-contact-experience"
  >
    Move on
  </button>
</template>

<script>
import "../../styles/Contact_Experience.css";
export default {
  emits: ["emit-data"],
  data() {
    return {
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
      userData: {
        contactWithEastAsianPeople: "",
        contactWithBlackPeople: "",
        contactWithCaucasianPeople: "",
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
      missingField: false,
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

