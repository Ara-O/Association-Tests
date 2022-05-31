<template>
  <main>
    <section v-if="notFinishedInstructions">
      <ibt-instructions @finishedInstructions="finishedInstructions"
        >There will be a picture of a Black person or a White person in the
        middle of screen. When you see a picture of the White person you should
        touch the smiling face; when you see the Black person, you should touch
        the crying face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
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
          src="../../../../assets/app-icons/rightArrow.png"
          alt="Right arrow"
          @click="next"
          class="continue"
        />
      </div>
      <div v-else-if="testNotStarted === false">
        <div style="display: flex; flex-direction: column; align-items: center">
          <img
            src="../../../../assets/IT_faces/star.jpg"
            alt="star"
            class="irbt_star"
          />
          <div
            v-for="trial in irbt_trials[section].trials"
            :key="trial.id"
            :style="{ display: trial.visibility }"
          >
            <img :src="getImage(trial.image)" class="trialimg" />
          </div>
          <div class="irbt-wrong-wrapper">
            <h3 class="irbt-wrong" style="display: none">
              Incorrect. Try again to progress!
            </h3>
            <img
              src="../../../../assets/app-icons/incorrectImg.png"
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
import generateIBTtrialsRace from "../../../../modules/generateIbtTrialsRace";
import IbtInstructions from "../../../../components/IbtInstructions.vue";
import * as irbt from "../../../../modules/handleIbtAnswers";
export default {
  components: {
    IbtInstructions,
  },
  data() {
    return {
      section: 0,
      testType: "Black_White",
      routeTo: "/IBT_Feedback",
      testNotStarted: false,
      notFinishedInstructions: true,
      currentUserTrial: 0,
      leftFace: "",
      rightFace: "",
      irbt_trials: [
        {
          trials: generateIBTtrialsRace("happy.jpg", "sad.jpg", 2),
          section: "practice",
        },
        {
          trials: generateIBTtrialsRace("happy.jpg", "sad.jpg", 2),
          section: "section_1",
          instruction: `There will be a picture of a Black person or a White person in the
        middle of screen. When you see a picture of the White person you should
        touch the crying face; when you see the Black person, you should touch
        the smiling face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.`,
        },
        {
          trials: generateIBTtrialsRace("sad.jpg", "happy.jpg", 2),
          section: "section_2",
          instruction: `There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      crying face; when you see the Black person, you should touch the smiling
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond <u>quickly and correctly.</u> You
      can only <u>use one hand</u> to touch the screen.`,
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
      this.notFinishedInstructions = false;
      irbt.startTimer();
    },

    getFacesPosition() {
      let face = irbt.getFacesPosition(this, "happy.jpg", "sad.jpg");
      return require(`../../../../assets/IRBT_faces/${face}`);
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this, "happy.jpg", "sad.jpg");
      return require(`../../../../assets/IRBT_faces/${face}`);
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
      return require(`../../../../assets/stimulus_faces/${url}`);
    },

    next() {
      this.testNotStarted = false;
      irbt.startTimer();
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
