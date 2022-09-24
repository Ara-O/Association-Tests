<template>
  <main>
    <section v-if="notFinishedInstructions">
      <implicit-bias-test-instructions @finishedInstructions="finishedInstructions">
        {{ irbt_trials[section].practice_instruction }}
      </implicit-bias-test-instructions>
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
          src="../../../../assets/App_Icons/rightArrow.png"
          alt="Right arrow"
          @click="next"
          class="continue"
        />
      </div>
      <div v-else-if="testNotStarted === false">
        <div style="display: flex; flex-direction: column; align-items: center">
          <img
            src="../../../../assets/IT_Faces/star.jpg"
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
              src="../../../../assets/App_Icons/incorrectImg.png"
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
import ImplicitBiasTestInstructions from "../../../../components/ImplicitBiasTestInstructions.vue";
import { genderAndClothing } from "../../../../modules/generateIbtTrials/generateIbtTrialsGender";
import * as irbt from "../../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "IBT_Gender_Clothing",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      leftFace: "",
      rightFace: "",
      irbt_trials: [
        {
          trials: genderAndClothing("male.jpg", "female.jpg", 8),
          section: "practice",
          practice_instruction: `Practice: There will be a picture of a Female clothing or a Male clothing in the
        middle of screen. When you see a picture of the Female clothing you
        should touch the female face at the bottom of the screen; when you see a
        Male clothing, you should touch the Male face. Male faces and Female
        faces will appear at the bottom of the screen either on the left or
        right. Pay attention because the male and female faces may change
        places. Please respond quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndClothing("male.jpg", "female.jpg", 24),
          section: "section_1",
          instruction: `There will be a picture of a Female clothing or a Male clothing in the
        middle of the screen. When you see a picture of the Female clothing you should
        touch the female face at the bottom of the screen; when you see a Male clothing, you should touch
        the Male face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndClothing("female.jpg", "male.jpg", 8),
          section: "practice_2",
          instruction: `Practice: There will be a picture of a Female clothing or a Male clothing in the
        middle of screen. When you see a picture of the Female clothing you
        should touch the male face at the bottom of the screen; when you see a
        Male clothing, you should touch the Female face. Male faces and Female
        faces will appear at the bottom of the screen either on the left or
        right. Pay attention because the male and female faces may change
        places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndClothing("female.jpg", "male.jpg", 24),
          section: "section_2",
          instruction: `There will be a picture of a Female clothing or a Male clothing in the
        middle of the screen. When you see a picture of the Female clothing you should
        touch the male face at the bottom of the screen; when you see a Male clothing, you should touch
        the female face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
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
      let face = irbt.getFacesPosition(this, "male.jpg", "female.jpg");
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url).href;
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "male.jpg", "female.jpg");
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url).href;
    },

    finishedInstructions() {
      this.notFinishedInstructions = false;
      irbt.startTimer();
    },

    leftFaceAction() {
      irbt.leftFaceAction(this, "gender", "IBT_Gender_Clothing");
    },
    rightFaceAction() {
      irbt.rightFaceAction(this, "gender", "IBT_Gender_Clothing");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(
        this,
        "IBT_Gender_Clothing",
        "IBT_Gender_Clothing"
      );
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return new URL(`../../../../assets/IAT_Gender_Clothing/${url}`, import.meta.url).href;
    },

    next() {
      this.testNotStarted = false;
      irbt.startTimer();
    },
  },

  mounted() {
    this.$store.state["IBT_Gender_Clothing"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Gender_Clothing");
  },
};
</script>

<style scoped>
@import url("../../../../styles/IBT.css");
</style>