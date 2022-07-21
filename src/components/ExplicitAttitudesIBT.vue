<template>
  <h3 style="font-size: 18px">Explicit Attitudes</h3>
  <h4>
    {{userWouldPrefer}} 
  </h4>
  <div class="gender-toy-stereotype-option">
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option1-user">
          <div v-if="leftImgPersonal">
            <img
              :src="getImage(leftImgPersonal)"
              alt="Toy 1"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option1-user"
          name="child-img-survey-user1"
          :value="generateOptionValue(leftImgPersonal)"
          v-model="userData.userWouldPrefer"
        />
      </div>
      <div class="child-img-survey-option-container">
        <label for="child-img-survey-option2-user2">
          <div v-if="rightImgPersonal">
            <img
              :src="getImage(rightImgPersonal)"
              alt="Toy 2"
              class="child-img-survey child-img-survey-option"
            />
          </div>
        </label>
        <input
          type="radio"
          id="child-img-survey-option2-user2"
          name="child-img-survey-user2"
          :value="generateOptionValue(rightImgPersonal)"
          v-model="userData.userWouldPrefer"
        />
      </div>
    </div>  

<!-- The stereotype section is not visible for IAT CAT and DOG -->
  <br v-if="!checkStereotypeVisibility">
  <br v-if="!checkStereotypeVisibility">
  <!-- Stereotype section -->
  <div v-if="checkStereotypeVisibility">
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
          v-model="userData.boyWouldPrefer"
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
          v-model="userData.boyWouldPrefer"
        />
      </div>
    </div>
  </div>

  <div v-if="checkStereotypeVisibility">
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
          v-model="userData.girlWouldPrefer"
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
          v-model="userData.girlWouldPrefer"
        />
      </div>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center">
    <div class="buttons">
      <button
        @click="start_test"
        class="btn btn_basic_survey"
        style="margin-top: 5px; width: 150px; padding: 24px 18px"
      >
        Start Test
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
    userWouldPrefer: String,
    visible: {
      default: true
    }
  },
  emits: ["start_test", "goBackEmit"],
  data() {
    //! cHANGE SLIDER 1 AND SLIDER 2
    return {
      leftImg: "",
      leftImgPersonal: "",
      rightImg: "",
      rightImgPersonal: "",
      leftImg2: "",
      rightImg2: "",
      userData: {
        gender: "",
        chosenethnicity: "",
        userWouldPrefer: "",
        boyWouldPrefer: "",
        girlWouldPrefer: "",
      },
    };
  },

  computed: {
    checkStereotypeVisibility(){
      if(this.visible == "false"){
        return false
      }else {
        return true
      }
    }
  },

  methods: {
    goBack() {
      this.$emit("goBackEmit");
    },

    start_test() {
      this.$emit("start_test");
    },

    generateOptionValue(img) {
      // The suffix for when the user clicks what image the boy/girl/pet would likely choose
      if (this.currentTest === "IBT_Gender_Toy") {
        if (img[2] === "M") {
          return "Male toy";
        } else if (img[2] === "F") {
          return "Female toy";
        }
      }

      if (this.currentTest === "IBT_Gender_Roles") {
        if (img[0] === "H") {
          return "Kitchen appliance";
        } else if (img[0] === "W") {
          return "Office appliance";
        }
      }

      if (this.currentTest === "IBT_Gender_Clothing") {
        if (img[3] === "F") {
          return "Female clothing";
        } else if (img[3] === "M") {
          return "Male clothing";
        }
      }

      if (this.currentTest === "IBT_Gender_Color") {
        if (img[0] === "b") {
          return "Blue color";
        } else if (img[0] === "p") {
          return "Female color";
        }
      }

      if (this.currentTest === "IBT_Gender_Subject") {
        if (img[0] === "M") {
          return "Math image";
        } else if (img[0] === "R") {
          return "Reading image";
        }
      }

      if (this.currentTest === "IBT_Cat_Dog") {
        if (img[0] === "D") {
          return "Dog image";
        } else if (img[0] === "C") {
          return "Cat image";
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

          // USER PERSONAL STEREOTPYE
      randomNo = Math.floor(Math.random() * 2);
      randomNoStereotype2 = Math.floor(
        Math.random() * this.stereotypeImages2.length
      );
      randomNoStereotype1 = Math.floor(
        Math.random() * this.stereotypeImages1.length
      );
      this.leftImgPersonal =
        randomNo === 0
          ? this.stereotypeImages1[randomNoStereotype1]
          : this.stereotypeImages2[randomNoStereotype2];
      this.rightImgPersonal =
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

<style scoped>
.child-img-survey-option-container input{
  margin-left: 0px
}
</style>
