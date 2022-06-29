<template>
  <main>
    <section v-if="notFinishedInstructions">
      <ibt-instructions @finishedInstructions="finishedInstructions">
        There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Dog you should touch the
        smiley face at the bottom of the screen; when you see a Cat, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.
      </ibt-instructions>
    </section>
    <section v-else>
      <div v-if="testNotStarted">
        <h3>Instruction</h3>
        <br />
        <h3
          class="fullinstruction" 
          v-html="irbt_trials[section]?.instruction"
        ></h3>

        <br />
        <h4>Click the right arrow to continue</h4>
        <img
          src="../../../assets/App_Icons/rightArrow.png"
          alt="Right arrow"
          @click="next"
          class="continue"
        />
      </div>
      <div v-else-if="testNotStarted === false">
        <div style="display: flex; flex-direction: column; align-items: center">
          <img
            src="../../../assets/IT_Faces/star.jpg"
            alt="star"
            class="irbt_star"
          />
          <div
            v-for="trial in irbt_trials[section].trials"
            :key="trial.id"
            :style="{ display: trial.visibility }"
          >
            <img :src="getImage(trial.image)" class="trialimg ibt-trial-img" />
          </div>
          <div class="irbt-wrong-wrapper">
            <h3 class="irbt-wrong" style="display: none">
              Incorrect. Try again to progress!
            </h3>
            <img
              src="../../../assets/App_Icons/incorrectImg.png"
              alt="Wrong icon"
              class="irbt-wrong-img"
            />
          </div>
        </div>
        <img
          :src="getFacesPosition()"
          alt="Left face"
          ref="leftFace"
          @click="leftFaceAction"
          :data-mood="this.leftFace"
          class="faceLeft ibt-icon"
        />
        <img
          :src="getFacesPosition2()"
          alt="Right face"
          ref="rightFace"
          @click="rightFaceAction"
          :data-mood="this.rightFace"
          class="faceRight ibt-icon"
        />
      </div>
    </section>
  </main>
</template>

<script>
import IbtInstructions from "../../../components/IbtInstructions.vue";
import { catAndDog } from "../../../modules/generateIbtTrials/generateIbtTrialsCatDog";
import * as irbt from "../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    IbtInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "Gender_Clothing",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      leftFace: "",
      rightFace: "",
      irbt_trials: [
        {
          trials: catAndDog("happy.jpg", "sad.jpg", 2),
          section: "practice",
        },
        {
          trials: catAndDog("happy.jpg", "sad.jpg", 2),
          section: "section_1",
          instruction: `There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Dog you should touch the
        smiley face at the bottom of the screen; when you see a Cat, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.`,
        },
        {
          trials: catAndDog("sad.jpg","happy.jpg", 2),
          section: "section_2",
          instruction: `There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Cat you should touch the
        smiley face at the bottom of the screen; when you see a Dog, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.`,
        },
      ],
    };
  },

  methods: {
    shuffleObjects(array) {
      for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
      }
      return array;
    },

    getFacesPosition() {
      let face = irbt.getFacesPosition(this, "happy.jpg", "sad.jpg");
      return require(`../../../assets/IBT_Faces/${face}`);
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "happy.jpg", "sad.jpg");
      return require(`../../../assets/IBT_Faces/${face}`);
    },

    finishedInstructions() {
      this.notFinishedInstructions = false;
      irbt.startTimer();
    },

    leftFaceAction() {
      irbt.leftFaceAction(this, "face", "IBT_Cat_Dog");
    },
    rightFaceAction() {
      irbt.rightFaceAction(this, "face", "IBT_Cat_Dog");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(this, "IBT_Cat_Dog", "IBT_Cat_Dog");
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return require(`../../../assets/IAT_Cat_Dog/${url}`);
    },

    next() {
         this.testNotStarted = false;
        irbt.startTimer();
    },
  },

  mounted() {
    this.$store.state["IBT_Cat_Dog"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Cat_Dog");
  },
};
</script>

<style scoped>
@import url("../../../styles/IBT.css");
</style>