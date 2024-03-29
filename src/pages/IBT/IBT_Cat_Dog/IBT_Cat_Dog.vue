<template>
  <main>
    <section id="test-border">
      <!-- Section for if the user has not finished the three instructions with the images -->
      <section v-if="notFinishedInstructions">
        <implicit-bias-test-instructions
          @finishedInstructions="finishedInstructions"
        >
          {{ ibt_trials[section].practice_instruction }}
        </implicit-bias-test-instructions>
      </section>

      <!-- Once the user has finished those instructions, doesnt show up for practice trials-->
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
            src="../../../assets/app_icons/rightArrow.png"
            alt="Right arrow"
            @click="startTest"
            class="continue"
          />
        </div>
        <img
          src="../../../assets/IT_faces/star.jpg"
          alt="star"
          class="ibt-star"
          v-show="userGotStimulusRight"
        />
        <img
          src="../../../assets/IT_faces/cross.jpg"
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
                    trial.leftClickerFaceEmotion == 'Sad'
                      ? 'sad.jpg'
                      : 'happy.jpg'
                  )
                "
                alt="Left face"
                ref="leftFace"
                :data-mood="trial.leftClickerFaceEmotion"
                class="faceLeft ibt-icon"
              />
              <img
                :src="
                  getClickerImage(
                    trial.rightClickerFaceEmotion == 'Sad'
                      ? 'sad.jpg'
                      : 'happy.jpg'
                  )
                "
                alt="Right face"
                :data-mood="trial.rightClickerFaceEmotion"
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
import ImplicitBiasTestInstructions from "../../../components/ImplicitBiasTestInstructions.vue";
import { catAndDog } from "../../../modules/generateIbtTrials/generateIbtTrialsCatDog";
import { handleAnswer } from "../../../modules/handleAnswers/handleIbtAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },

  data() {
    return {
      section: 0,
      testType: "IBT_Cat_Dog",
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

    randomizeTrialCongruency() {
      let allTrialsShuffled = [];
      let allTrials = [
        {
          trials: catAndDog("Happy", "Sad", 8),
          section: "practice_1",
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
          trials: catAndDog("Happy", "Sad", 24),
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
          trials: catAndDog("Sad", "Happy", 8),
          section: "practice_2",
          practice_instruction: `Practice: There will be a picture of a Cat or a Dog in the middle of
        screen. When you see a picture of the Cat you should touch the
        smiley face at the bottom of the screen; when you see a Dog, you
        should touch the sad face. Smiley faces and Sad faces will appear at
        the bottom of the screen either on the left or right. Pay attention
        because the smile and sad faces may change places. Please respond
        quickly and correctly. You can only use one hand to touch
        the screen.`,
        },
        {
          trials: catAndDog("Sad", "Happy", 24),
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
      ];

      let randomNo = Math.floor(Math.random() * 2);
      if (randomNo === 0) {
        allTrialsShuffled = allTrials;
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks the happy face for an image of a dog, and the sad face for an image of a cat";
            }
            if (index === 1) {
              trial.description =
                "User clicks the happy face for an image of a dog, and the sad face for an image of a cat";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks the sad face for an image of a dog, and the happy face for an image of a cat";
            }
            if (index === 3) {
              trial.description =
                "User clicks the sad face for an image of a dog, and the happy face for an image of a cat";
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
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks the sad face for an image of a dog, and the happy face for an image of a cat";
            }
            if (index === 1) {
              trial.description =
                "User clicks the sad face for an image of a dog, and the happy face for an image of a cat";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks the happy face for an image of a dog, and the sad face for an image of a cat";
            }
            if (index === 3) {
              trial.description =
                " User clicks the happy face for an image of a dog, and the sad face for an image of a cat";
            }
          });
        });
      }
      this.ibt_trials = allTrialsShuffled;
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
          "IBT_Cat_Dog",
          "IBT_Feedback",
          "stimulusEmotion"
        );
      }, 500);
      document.querySelector(".faceRight").style.display = "block";
      document.querySelector(".faceLeft").style.display = "block";
    },

    getClickerImage(url) {
      return new URL(`../../../assets/IBT_Faces/${url}`, import.meta.url).href;
    },

    getImage(url) {
      return new URL(`../../../assets/IAT_Cat_Dog/${url}`, import.meta.url)
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
          "IBT_Cat_Dog",
          "IBT_Feedback",
          "stimulusEmotion"
        );
      }, 500);
      document.querySelector(".faceRight").style.display = "block";
      document.querySelector(".faceLeft").style.display = "block";
    },
  },

  //Make sure that the IBT trial congruency tests are randomized
  created() {
    this.randomizeTrialCongruency();
  },

  mounted() {
    this.$store.state["IBT_Cat_Dog"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Cat_Dog");
  },
};
</script>

<style scoped>
@import url("../../../styles/IBT.css");
.ibt-star,
.ibt-cross {
  display: block;
  width: 110px;
}
</style>
