<template>
  <main>
    <section id="test-border">
      <section v-if="notFinishedInstructions">
        <implicit-bias-test-instructions
          @finishedInstructions="finishedInstructions"
        >
          {{ irbt_trials[section].practice_instruction }}
        </implicit-bias-test-instructions>
      </section>
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
            src="../../../../assets/App_Icons/rightArrow.png"
            alt="Right arrow"
            @click="next"
            class="continue"
          />
        </div>
        <div :class="{ hide: testNotStarted || paused }">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="../../../../assets/IT_Faces/star.jpg"
              alt="star"
              class="irbt_star"
            />
            <img
              src="../../../../assets/IT_Faces/cross.jpg"
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
import ImplicitBiasTestInstructions from "../../../../components/ImplicitBiasTestInstructions.vue";
import { genderAndToy } from "../../../../modules/generateIbtTrials/generateIbtTrialsGender";
import * as irbt from "../../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "IBT_Gender_Toy",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      leftFace: "",
      paused: true,
      rightFace: "",
      irbt_trials: [
        {
          trials: genderAndToy("male.jpg", "female.jpg", 8),
          section: "practice",
          practice_instruction: `There will be a picture of a Female toy or a Male toy in the
        middle of the screen. When you see a picture of the Female toy you should
        touch the female face at the bottom of the screen; when you see a Male toy, you should touch
        the Male face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndToy("male.jpg", "female.jpg", 24),
          section: "section_1",
          instruction: `There will be a picture of a Female toy or a Male toy in the
        middle of the screen. When you see a picture of the Female toy you should
        touch the female face at the bottom of the screen; when you see a Male toy, you should touch
        the Male face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndToy("female.jpg", "male.jpg", 8),
          section: "section_2",
          instruction: `Practice: There will be a picture of a Female toy or a Male toy in the
        middle of the screen. When you see a picture of the Female toy you should
        touch the male face at the bottom of the screen; when you see a Male toy, you should touch
        the female face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndToy("female.jpg", "male.jpg", 24),
          section: "section_2",
          instruction: `There will be a picture of a Female toy or a Male toy in the
        middle of the screen. When you see a picture of the Female toy you should
        touch the male face at the bottom of the screen; when you see a Male toy, you should touch
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
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url)
        .href;
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "male.jpg", "female.jpg");
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url)
        .href;
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
      irbt.leftFaceAction(this, "gender", "IBT_Gender_Toy");
    },
    rightFaceAction() {
      irbt.rightFaceAction(this, "gender", "IBT_Gender_Toy");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(this, "IBT_Gender_Toy", "IBT_Gender_Toy");
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return new URL(
        `../../../../assets/IAT_Gender_Toy/${url}`,
        import.meta.url
      ).href;
    },

    next() {
      // console.log("starting real test");
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
    this.$store.state["IBT_Gender_Toy"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Gender_Toy");
  },
};
</script>

<style scoped>
@import url("../../../../styles/IBT.css");
</style>
