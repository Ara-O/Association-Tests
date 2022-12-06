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
              <img :src="getImage(trial.image)" class="trialimg" />
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
import generateIBTtrialsRace from "../../../../modules/generateIbtTrials/generateIbtTrialsRace";
import ImplicitBiasTestInstructions from "../../../../components/ImplicitBiasTestInstructions.vue";
import * as irbt from "../../../../modules/handleAnswers/handleIbtAnswers";
export default {
  components: {
    ImplicitBiasTestInstructions,
  },
  data() {
    return {
      section: 0,
      testType: "Black_White",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      paused: true,
      leftFace: "",
      rightFace: "",
      irbt_trials: [
        {
          trials: generateIBTtrialsRace("happy.jpg", "sad.jpg", 8),
          section: "practice",
          practice_instruction: `Practice: There will be a picture of a Black person or a White person in the
        middle of the screen. When you see a picture of the White person you should
        touch the smiling face; when you see the Black person, you should touch
        the crying face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
        quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: generateIBTtrialsRace("happy.jpg", "sad.jpg", 24),
          section: "section_1",
          instruction: `There will be a picture of a Black person or a White person in the
        middle of the screen. When you see a picture of the White person you should
        touch the smiling face; when you see the Black person, you should touch
        the crying face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
        quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: generateIBTtrialsRace("sad.jpg", "happy.jpg", 8),
          section: "practice_1",
          instruction: `Practice: There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      crying face; when you see the Black person, you should touch the smiling
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond quickly and correctly. You
      can only use one hand to touch the screen.`,
        },
        {
          trials: generateIBTtrialsRace("sad.jpg", "happy.jpg", 24),
          section: "section_2",
          instruction: `There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      crying face; when you see the Black person, you should touch the smiling
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond quickly and correctly. You
      can only use one hand to touch the screen.`,
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

    finishedInstructions() {
      let that = this;
      that.notFinishedInstructions = false;
      setTimeout(function () {
        that.testNotStarted = false;
        that.paused = false;
        irbt.startTimer();
      }, 500);
    },

    getFacesPosition() {
      let face = irbt.getFacesPosition(this, "happy.jpg", "sad.jpg");
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url)
        .href;
    },

    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "happy.jpg", "sad.jpg");
      return new URL(`../../../../assets/IBT_Faces/${face}`, import.meta.url)
        .href;
    },

    leftFaceAction() {
      irbt.leftFaceAction(this, "emotion", "IBT_Black_White");
    },

    rightFaceAction() {
      irbt.rightFaceAction(this, "emotion", "IBT_Black_White");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(this, "IBT_Black_White", "IBT_Black_White");
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return new URL(
        `../../../../assets/IBT_Black_White/${url}`,
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
    this.$store.state["IBT_Black_White"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Black_White");
  },
};
</script>

<style scoped>
@import url("../../../../styles/IBT.css");
</style>
