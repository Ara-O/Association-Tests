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
          src="../../../assets/app_icons/rightArrow.png"
          alt="Right Arrow"
          class="next"
          v-if="progress !== 3 && progress !== 5"
          @click="moveForward"
        />
      </div>

      <!-- ----------------  -->

      <div v-if="progress === 2" class="midinstructions">
        <h3 class="instructions">
          You will need to remember {{ facesNumber }} faces and numbers. Each
          face will appear in the middle of the screen with a number below it.
          Memorize the face and the number. Once you feel that you memorized the
          face and number, tap on the number. Tap the arrow on the bottom right
          of the page to get started
        </h3>
        <br />
        <img
          src="../../../assets/app_icons/rightArrow.png"
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
          v-for="data in facedataclone"
          :key="data.id"
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
          <img
            :src="getImg(data.cN)"
            alt=""
            :style="{ display: data.visibility }"
            class="number"
            @click="nextFaceToMemorize()"
          />
          <!-- <img src="../../../assets/IT_Faces/White/White_1.jpg" alt=""> -->
        </div>
      </div>

      <!-- -------------------- -->

      <div v-if="progress === 4" class="progress4">
        <h3
          class="instructions midinstructions"
          v-html="createInstruction"
        ></h3>
        <img
          src="../../../assets/app_icons/rightArrow.png"
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
                  <img
                    :src="getImg(data.img)"
                    :style="{ display: facedata[index].visibility }"
                    :class="facedata[index].id"
                    class="img-of-face"
                  />
                </li>
              </div>
              <div class="correctchoice">
                <img
                  src="../../../assets/IT_Faces/N2.jpg"
                  alt="correct choice"
                  class="correctchoice-img"
                  @click="proceedAfterIncorrectChoice"
                />
                <h3 style="width: 164px">Click the number above to continue</h3>
              </div>
            </div>

            <!-- NUMBER 1 to 5 -->

            <div class="choices">
              <li v-for="choice in choiceImages" :key="choice.id">
                <img
                  :src="getImg(choice)"
                  alt=""
                  @click="validateChoice(choice)"
                />
              </li>
            </div>
          </ul>

          <!-- <img v-for="i in 5" src="" alt="">  -->
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
import IT_Trials from "../../../modules/individuationTrainingTrials";
import * as handleIT from "../../../modules/handleAnswers/handleITTrials";
import BasicQuestions from "../../../components/PreTestSurveyQuestions/BasicQuestions.vue";
import "../../../styles/IT.css";
export default {
  components: {
    BasicQuestions,
  },
  data() {
    return {
      progress: 1,
      facesNumber: 2,
      facedata: [],
      facedataclone: [],
      facedatashuffled: [],
      currentlyVisible: 0,
      choiceImages: ["N1.jpg", "N2.jpg", "N3.jpg", "N4.jpg", "N5.jpg"],
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
      return new URL(`../../../assets/IT_faces/${img}`, import.meta.url).href;
    },

    shuffleObjects(array) {
      return handleIT.shuffleObjects(array);
    },

    nextFaceToMemorize() {
      handleIT.nextFaceToMemorize(this, IT_Trials);
    },

    proceedToNextSection() {
      handleIT.proceedToNextSection(this, IT_Trials, "White");
    },

    proceedAfterIncorrectChoice() {
      handleIT.proceedAfterIncorrectChoice(this);
    },

    validateChoice(choice) {
      handleIT.validateChoice(choice, this, IT_Trials);
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IT_White_Number");
    this.facedata = IT_Trials("White", 2);
    this.facedataclone = JSON.parse(JSON.stringify(this.facedata));
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
