<template>
  <main>
    <section id="test-border">
      <section v-if="notFinishedInstructions">
        <implicit-bias-test-instructions
          @finishedInstructions="finishedInstructions"
        >
          {{ ibt_trials[section].practice_instruction }}
        </implicit-bias-test-instructions>
      </section>
      <section :class="{ hide: notFinishedInstructions }">
        <div v-if="testNotStarted">
          <h3>Instruction</h3>
          <br />
          <h3
            class="fullinstruction"
            v-html="
              ibt_trials[section]?.instruction ||
              ibt_trials[section]?.practice_instruction
            "
          ></h3>

          <br />
          <h4>Click the right arrow to continue</h4>
          <img
            src="../../../../assets/app_icons/rightArrow.png"
            alt="Right arrow"
            @click="startTest"
            class="continue"
          />
        </div>
        <img
          src="../../../../assets/IT_faces/star.jpg"
          alt="star"
          class="ibt-star"
          v-show="userGotStimulusRight"
        />
        <img
          src="../../../../assets/IT_faces/cross.jpg"
          alt="cross"
          class="ibt-cross"
          v-show="userGotStimulusWrong"
        />
        <div :class="{ hide: testNotStarted || paused }">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <div
              v-for="trial in ibt_trials[section].trials"
              :key="trial.id"
              :style="{ display: trial.visibility }"
            >
              <img
                :src="getImage(trial.image)"
                class="trialimg ibt-trial-img"
              />
              <img
                :src="
                  getClickerImage(
                    trial.leftClickerGender == 'Male'
                      ? 'male.jpg'
                      : 'female.jpg'
                  )
                "
                alt="Left face"
                ref="leftFace"
                :data-mood="trial.leftClickerGender"
                class="faceLeft ibt-icon"
              />
              <img
                :src="
                  getClickerImage(
                    trial.rightClickerGender == 'Male'
                      ? 'male.jpg'
                      : 'female.jpg'
                  )
                "
                alt="Right face"
                :data-mood="trial.rightClickerGender"
                ref="rightFace"
                class="faceRight ibt-icon"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import ImplicitBiasTestInstructions from "../../../../components/ImplicitBiasTestInstructions.vue";
import { genderAndToy } from "../../../../modules/generateIbtTrials/generateIbtTrialsGender";
import { handleAnswer } from "../../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "IBT_Gender_Toy",
      routeTo: "/IBT_Feedback",
      testNotStarted: true,
      notFinishedInstructions: true,
      currentTrial: 0,
      paused: true,
      userGotStimulusRight: false,
      userGotStimulusWrong: false,
      ibt_trials: [],
      ibtData: [],
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
      that.testNotStarted = false;
      that.notFinishedInstructions = false;
      setTimeout(function () {
        that.paused = false;
        handleAnswer(
          that,
          that.ibt_trials[that.section].trials,
          "IBT_Gender_Toy",
          "IBT_Feedback",
          "stimulusGender"
        );
      }, 500);
      document.querySelector(".faceRight").style.display = "block";
      document.querySelector(".faceLeft").style.display = "block";
    },

    getClickerImage(url) {
      return new URL(`../../../../assets/IBT_Faces/${url}`, import.meta.url)
        .href;
    },

    getImage(url) {
      return new URL(`../../../../assets/Gender_Toy/${url}`, import.meta.url)
        .href;
    },

    startTest() {
      // console.log("starting real test");
      let that = this;
      that.testNotStarted = false;
      setTimeout(function () {
        that.paused = false;
        handleAnswer(
          that,
          that.ibt_trials[that.section].trials,
          "IBT_Gender_Toy",
          "IBT_Feedback",
          "stimulusGender"
        );
      }, 500);
      document.querySelector(".faceRight").style.display = "block";
      document.querySelector(".faceLeft").style.display = "block";
    },

    randomizeTrialCongruency() {
      let allTrialsShuffled = [];
      let allTrials = [
        {
          trials: genderAndToy("Male", "Female", 8),
          section: "practice_1",
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
          trials: genderAndToy("Male", "Female", 24),
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
          trials: genderAndToy("Female", "Male", 8),
          section: "practice_2",
          practice_instruction: `Practice: There will be a picture of a Female toy or a Male toy in the
        middle of the screen. When you see a picture of the Female toy you should
        touch the male face at the bottom of the screen; when you see a Male toy, you should touch
        the female face. Male faces and Female faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        male and female faces may change places. Please respond
      quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: genderAndToy("Female", "Male", 24),
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
      ];
      let randomNo = Math.floor(Math.random() * 2);
      if (randomNo === 0) {
        //For congruency test first
        allTrialsShuffled = allTrials;
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            }
            if (index === 1) {
              trial.description =
                "User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
            if (index === 3) {
              trial.description =
                "User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
          });
        });
      } else {
        allTrialsShuffled.push(
          allTrials[2],
          allTrials[3],
          allTrials[0],
          allTrials[1]
        );

        //Incongruency test first
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
            if (index === 1) {
              trial.description =
                "User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            }
            if (index === 3) {
              trial.description =
                "User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            }
          });
        });
      }

      this.ibt_trials = allTrialsShuffled;
    },
  },
  created() {
    this.randomizeTrialCongruency();
  },
  mounted() {
    this.$store.state["IBT_Gender_Toy"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Gender_Toy");
  },
};
</script>

<style scoped>
@import url("../../../../styles/IBT.css");
.ibt-star,
.ibt-cross {
  display: block;
  width: 110px;
}
</style>
