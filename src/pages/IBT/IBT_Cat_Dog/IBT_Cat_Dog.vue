<template>
  <main>
    <section id="test-border">
      <!-- Section for if the user has not finished the three instructions with the images -->
      <section v-if="notFinishedInstructions">
        <implicit-bias-test-instructions
          @finishedInstructions="finishedInstructions"
        >
          {{ irbt_trials[section].practice_instruction }}
        </implicit-bias-test-instructions>
      </section>

      <!-- Once the user has finished those instructions, doesnt show up for practice trials-->
      <section :class="{ hide: notFinishedInstructions }">
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

        <!-- Hide this section -->
        <div :class="{ hide: testNotStarted || paused }">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="../../../assets/IT_Faces/star.jpg"
              alt="star"
              class="irbt_star"
            />
            <img
              src="../../../assets/IT_Faces/cross.jpg"
              alt="cross"
              class="ibt-cross"
            />
            <div
              v-for="trial in irbt_trials[section].trials"
              :key="trial.id"
              :style="{ display: trial.visibility }"
            >
              <img
                :src="getImage(trial.image)"
                class="trialimg ibt-trial-img"
              />
            </div>
            <!-- <div class="irbt-wrong-wrapper" id="wrong-ibt">
            <h3 class="irbt-wrong" style="display: none">
              Incorrect. Try again to progress!
            </h3>
            <img
              src="../../../assets/App_Icons/incorrectImg.png"
              alt="Wrong icon"
              class="irbt-wrong-img"
            />
          </div> -->
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
    </section>
  </main>
</template>

<script>
import ImplicitBiasTestInstructions from "../../../components/ImplicitBiasTestInstructions.vue";
import { catAndDog } from "../../../modules/generateIbtTrials/generateIbtTrialsCatDog";
import * as irbt from "../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "IBT_Cat_Dog",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      paused: true,
      leftFace: "",
      rightFace: "",
      irbt_trials: [
        {
          trials: catAndDog("happy.jpg", "sad.jpg", 4),
          section: "practice",
          practice_instruction: `There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Dog you should touch the
        smiley face at the bottom of the screen; when you see a Cat, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        quickly and correctly. You can only use one hand to touch
        the screen.`,
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
        quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: catAndDog("sad.jpg", "happy.jpg", 4),
          section: "practice_2",
          instruction: `Practice: There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Cat you should touch the
        smiley face at the bottom of the screen; when you see a Dog, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: catAndDog("sad.jpg", "happy.jpg", 4),
          section: "section_2",
          instruction: `There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Cat you should touch the
        smiley face at the bottom of the screen; when you see a Dog, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
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
      let face = irbt.getFacesPosition(this, "happy.jpg", "sad.jpg");
      return new URL(`../../../assets/IBT_Faces/${face}`, import.meta.url).href;
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "happy.jpg", "sad.jpg");
      return new URL(`../../../assets/IBT_Faces/${face}`, import.meta.url).href;
    },

    finishedInstructions() {
      let that = this;
      that.notFinishedInstructions = false;
      setTimeout(function () {
        that.testNotStarted = false;
        that.paused = false;
        irbt.startTimer();
      }, 500);
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
      return new URL(`../../../assets/IAT_Cat_Dog/${url}`, import.meta.url)
        .href;
    },

    next() {
      let that = this;
      that.testNotStarted = false;
      setTimeout(function () {
        that.paused = false;
        document.querySelector(".faceRight").style.display = "block";
        document.querySelector(".faceLeft").style.display = "block";
        irbt.startTimer();
      }, 500);
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
