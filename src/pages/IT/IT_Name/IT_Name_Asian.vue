<template>
  <section
    v-if="notAgreedToConsentForm && !redirectToHome"
    class="consent-form"
  >
    <div class="jumbotron">
      <h3>Pre-Test Consent Form</h3>
    </div>
    <br />
    <img
      src="../../../assets/app_icons/consent-form.png"
      class="consent-form-image"
      alt="Consent form image"
    />
    <br />
    <div class="arrange-btns">
      <button
        @click="notAgreedToConsentForm = redirectToHome = true"
        class="btn_survey"
      >
        I do not agree
      </button>
      <button @click="notAgreedToConsentForm = false" class="btn_survey">
        I agree
      </button>
    </div>
  </section>
  <main v-else-if="!redirectToHome && !notAgreedToConsentForm && !goToTest">
    <div class="survey_container">
      <basic-questions
        :userData="userData"
        @next="startIndividuationTraining"
      ></basic-questions>
    </div>
  </main>
  <main v-if="goToTest">
    <section id="test-border">
    <div v-if="progress === 1" class="midinstructions">
      <h3>Can you remember all the people?</h3>
      <h3>Press the right arrow to get started</h3>
      <img
        src="../../../assets/App_Icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        v-if="progress !== 3 && progress !== 5"
        @click="moveForward"
      />
    </div>

    <!-- ----------------  -->

    <div v-if="progress === 2" class="midinstructions">
      <h3 class="instructions">
        You will need to remember {{ facesNumber }} faces and names. Each face
        will appear in the middle of the screen with a name below it. Memorize
        the face and the name. Once you feel that you memorized the face and
        name, tap on the name. Tap the arrow on the bottom right of the page to
        get started
      </h3>
      <br />
      <img
        src="../../../assets/App_Icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        @click="moveForward"
      />
    </div>

    <!-- -------------------- -->

    <div class="stardiv">
      <img src="../../../assets/IT_Faces/star.jpg" class="star" alt="" />
    </div>

    <div v-if="progress === 3">
      <div
        v-for="data in faceDataToMemorize"
        :key="data.img"
        class="faces_displayed"
      >
        <div>
          <img
            :src="getImg(data.img)"
            alt=""
            :style="{ display: data.visibility }"
            class="face_img"
          />
        </div>
        <div
          :style="{ display: data.visibility }"
          style="font-size: 25px"
          class="number"
          @click="nextFaceToMemorize()"
        >
          {{ data.name }}
        </div>
      </div>
    </div>

    <!-- -------------------- -->

    <div v-if="progress === 4" class="progress4">
      <h3 class="instructions midinstructions" v-html="createInstruction"></h3>
      <img
        src="../../../assets/App_Icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        @click="moveForward"
      />
    </div>

    <!-- -------------------- -->

    <div v-if="progress === 5">
      <div>
        <ul class="faces">
          <!--LOOPING THROUGH THE IMAGE -->

          <div class="faces_flexbox">
            <div class="crossdiv">
              <img
                src="../../../assets/IT_Faces/cross.jpg"
                alt=""
                class="cross"
              />
            </div>
            <div>
              <li v-for="(data, index) in facedata" :key="data.id">
                <!-- :class="facedata[index].id" -->
                <img
                  :src="getImg(data.img)"
                  :style="{ display: facedata[index].visibility }"
                  class="img-of-face"
                />
              </li>
            </div>
            <div class="correctchoice">
              <h3
                @click="proceedAfterIncorrectChoice"
                style="font-size: 21px; font-weight: 600"
              >
                {{ facedata[this.currentlyVisible].name }}
              </h3>
              <h3 style="font-size: 16px; width: 166px">
                Click the name above to continue
              </h3>
            </div>
          </div>

          <!-- All the names -->

          <div class="choices">
            <h3 @click="validateChoice('Lucas')" class="choice-name">Lucas</h3>
            <h3 @click="validateChoice('David')" class="choice-name">David</h3>
            <h3 @click="validateChoice('Mark')" class="choice-name">Mark</h3>
            <h3 @click="validateChoice('Jacob')" class="choice-name">Jacob</h3>
            <h3 @click="validateChoice('Paul')" class="choice-name">Paul</h3>
          </div>
        </ul>
      </div>
    </div>
    </section>
  </main>
  <section v-if="redirectToHome" class="redirectToHome">
    <router-link to="/Home" class="btn_survey"
      >Click here to redirect to home</router-link
    >
  </section>
</template>

<script>
// import IT_Trials from "../../../modules/individuationTrainingTrials";
import { IT_Name_Trials } from "../../../modules/individuationTrainingTrials";
import * as handleIT from "../../../modules/handleAnswers/handleITTrials_Name";
import BasicQuestions from "../../../components/PreTestSurveyQuestions/BasicQuestions.vue";

export default {
  components: {
    BasicQuestions,
  },

  data() {
    return {
      progress: 1,
      facesNumber: 2,
      facedata: [],
      faceDataToMemorize: [],
      facedatashuffled: [],
      currentlyVisible: 0,
      currentFace: "",
      correctChoice: "",
      currentProgression: 2,
      inaccurateTrial: false,
      memorizationTimes: [],
      allMemorizationTimes: {},
      block: 1,
      numberOfTimesToMemorize: 1,
      notAgreedToConsentForm: true,
      redirectToHome: false,
      userData: {},
      goToTest: false,
    };
  },

  computed: {
    createInstruction() {
      if (!this.inaccurateTrial) {
        return (
          `Now we will find out if you remember the ` +
          this.facesNumber +
          ` faces and
        numbers that you were just told to memorize. Look at the center of the
        screen and touch the number that matches the face. <br /><br />
        If you get it right, a red star will appear.
        <br /><br />
        If you get it wrong, you will see a black cross. You will also see the
        correct answer and need to tap it to continue.`
        );
      } else {
        return `You were not able to remember the faces and numbers correctly, click the right arrow to try again`;
      }
    },
  },

  methods: {
    startIndividuationTraining(userData) {
      this.userData = userData;
      this.goToTest = true;
      this.$store.state.userData = this.userData;
    },

    startTimer() {
      handleIT.startTimer();
    },

    stopTimer() {
      handleIT.stopTimer();
    },

    moveForward() {
      handleIT.moveForward(this);
    },

    getImg(img) {
      return new URL(`../../../assets/IT_Name_Faces/${img}`, import.meta.url)
        .href;
    },

    shuffleObjects(array) {
      return handleIT.shuffleObjects(array);
    },

    nextFaceToMemorize() {
      handleIT.nextFaceToMemorize(this, IT_Name_Trials);
    },

    proceedToNextSection() {
      handleIT.proceedToNextSection(this, IT_Name_Trials, "Asian");
    },

    proceedAfterIncorrectChoice() {
      handleIT.proceedAfterIncorrectChoice(this);
    },

    validateChoice(choice) {
      handleIT.validateChoice(choice, this);
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IT_Asian_Name");
    this.facedata = IT_Name_Trials("Asian", 2);
    this.faceDataToMemorize = JSON.parse(JSON.stringify(this.facedata));
    // console.log(this.faceDataToMemorize);
    this.facedatashuffled = JSON.parse(JSON.stringify(this.facedata));
    this.facedatashuffled = this.shuffleObjects(this.facedatashuffled);
    for (let i = 0; i < this.facedatashuffled.length; i++) {
      if (i === 0) {
        this.facedatashuffled[i].visibility = "block";
      } else {
        this.facedatashuffled[i].visibility = "none";
      }
    }

    this.facedata = this.facedatashuffled;
  },
};
</script>
