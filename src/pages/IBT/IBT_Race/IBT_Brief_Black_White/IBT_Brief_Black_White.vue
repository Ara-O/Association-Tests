<template>
  <main>
    <div v-show="!userHasPutInUserID" class="collect-user-id  pt-4">
      <h3 style="font-size: 18px; font-weight: 500" class="">Before we start!</h3>
      <h3 class="input-user-id-text ">
        What is your unique testing ID? ( You will be given this by a lab
        assistant )
      </h3>
      <input type="text" class="user-id" v-model="uid" />
      <button @click="storeUserID" class="btn_basic_survey">next</button>
    </div>
    <!-- Start test -->
    <div v-show="userHasPutInUserID">
      <section id="test-border">
        <section v-if="notFinishedInstructions">
          <implicit-bias-test-instructions @finishedInstructions="finishedInstructions">
            {{ ibt_trials[section].practice_instruction }}
          </implicit-bias-test-instructions>
        </section>

        <section :class="{ hide: notFinishedInstructions }">
          <div v-show="testNotStarted">
            <h3>Instruction</h3>
            <br />
            <h3 class="fullinstruction" v-html="ibt_trials[section]?.instruction ||
              ibt_trials[section]?.practice_instruction
              "></h3>

            <br />
            <h4>Click the right arrow to continue</h4>
            <img src="../../../../assets/app_icons/rightArrow.png" alt="Right arrow" @click="startTest"
              class="continue" />
          </div>
          <img src="../../../../assets/IT_faces/star.jpg" alt="star" class="ibt-star" v-show="userGotStimulusRight" />
          <img src="../../../../assets/IT_faces/cross.jpg" alt="cross" class="ibt-cross" v-show="userGotStimulusWrong" />
          <div :class="{ hide: testNotStarted || paused }">
            <div style="display: flex; flex-direction: column; align-items: center">
              <div v-for="trial in ibt_trials[section].trials" :key="trial.id" :style="{ display: trial.visibility }">
                <img :src="getImage(trial.image)" class="trialimg" />
                <img :src="getClickerImage(
                  trial.leftClickerFaceEmotion == 'Sad'
                    ? 'sad.jpg'
                    : 'happy.jpg'
                )
                  " alt="Left face" ref="leftFace" :data-mood="trial.leftClickerFaceEmotion"
                  class="faceLeft ibt-icon" />
                <img :src="getClickerImage(
                  trial.rightClickerFaceEmotion == 'Sad'
                    ? 'sad.jpg'
                    : 'happy.jpg'
                )
                  " alt="Right face" :data-mood="trial.rightClickerFaceEmotion" ref="rightFace"
                  class="faceRight ibt-icon" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import generateIBTtrialsRace from "../../../../modules/generateIbtTrials/generateIbtBriefTrialsRace";
import ImplicitBiasTestInstructions from "../../../../components/ImplicitBiasTestInstructions.vue";
import "../../../../styles/pre-test-survey.css";
import "../../../../styles/IBT.css";
import { handleAnswer } from "../../../../modules/handleAnswers/handleIbtBriefAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
  },
  data() {
    return {
      uid: "",
      userHasPutInUserID: false,
      section: 0,
      currentTrial: 0,
      paused: true,
      userGotStimulusRight: false,
      userGotStimulusWrong: false,
      notFinishedInstructions: true,
      testNotStarted: true,
      ibt_trials: [],
      ibtData: [],
    };
  },

  methods: {
    storeUserID() {
      if (this.uid.trim() !== "") {
        this.$store.commit("changeUserID", this.uid);
        this.userHasPutInUserID = true;
      }

      //generate random number if they skip
      if (this.uid.trim() === "" && this.$store.getters.getUID === "") {
        this.$store.commit(
          "changeUserID",
          String(Math.floor(Math.random() * 10000))
        );
        this.userHasPutInUserID = true;
      }

      if (this.$store.getters.getUID !== "") {
        this.userHasPutInUserID = true;
      }
    },

    shuffleObjects(array) {
      for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
      }
      return array;
    },

    getImage(url) {
      return new URL(
        `../../../../assets/IBT_Black_White/${url}`,
        import.meta.url
      ).href;
    },

    getClickerImage(url) {
      return new URL(`../../../../assets/IBT_Faces/${url}`, import.meta.url)
        .href;
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
          "IBT_Brief_Black_White",
          "/IBT_Brief_Black_White_Feedback"
        );
        document.querySelector(".faceRight").style.display = "block";
        document.querySelector(".faceLeft").style.display = "block";
      }, 500);
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
          "IBT_Brief_Black_White",
          "/IBT_Brief_Black_White_Feedback"
        );
        document.querySelector(".faceRight").style.display = "block";
        document.querySelector(".faceLeft").style.display = "block";
      }, 500);
    },
    randomizeTrialCongruency() {
      let allTrialsShuffled = [];
      let allTrials = [
        {
          trials: generateIBTtrialsRace("Happy", "Sad", 8),
          section: "practice_1",
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
          trials: generateIBTtrialsRace("Happy", "Sad", 20),
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
          trials: generateIBTtrialsRace("Sad", "Happy", 8),
          section: "practice_2",
          practice_instruction: `Practice: There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      crying face; when you see the Black person, you should touch the smiling
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond quickly and correctly. You
      can only use one hand to touch the screen.`,
        },
        {
          trials: generateIBTtrialsRace("Sad", "Happy", 20),
          section: "section_2",
          instruction: `There will be a picture of a Black person or a White person in the middle
      of screen. When you see a picture of the White person you should touch the
      crying face; when you see the Black person, you should touch the smiling
      face. Smiling and crying faces will appear at the bottom of the screen
      either on the left or right. Pay attention because the smiling and crying
      faces may change places. Please respond quickly and correctly. You
      can only use one hand to touch the screen.`,
        },
      ];
      let randomNo = Math.floor(Math.random() * 2);
      if (randomNo === 0) {
        //Starting with congruency test, so updating the descriptions
        allTrialsShuffled = allTrials;
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            }
            if (index === 1) {
              trial.description =
                "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person";
            }
            if (index === 3) {
              trial.description =
                "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person";
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

        //Setting the updated description for the allTrialsShuffled - for incongruent tests
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            if (index === 0) {
              trial.description =
                "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person";
            }
            if (index === 1) {
              trial.description =
                "User clicks a happy face for an image of a black person, and a sad face for an image of a white person";
            }
            if (index === 2) {
              trial.description =
                "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            }
            if (index === 3) {
              trial.description =
                "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            }
          });
        });
      }

      this.ibt_trials = allTrialsShuffled;
    },
  },

  //Make sure that the IBT trial congruency tests are randomized
  created() {
    this.randomizeTrialCongruency();
  },
  mounted() {
    this.$store.state["IBT_Brief_Black_White"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Brief_Black_White");
  },
};
</script>

<style scoped>
.input-user-id-text {
  max-width: 400px;
  width: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.ibt-star,
.ibt-cross {
  display: block;
  width: 110px;
}

.user-id {
  border-radius: 6px;
  border: solid 1px #f7f7f7;
  margin-top: 15px;
  width: 250px;
  height: 30px;
  text-align: center;
}

.collect-user-id {
  width: auto;
  max-width: 600px;
  max-height: 600px;
  height: auto;
  overflow: auto;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 21px 35px 35px;
}

@media (max-width: 852px) {
  .basic-questions_title {
    font-size: 18px;
    margin: 38px 0px 20px;
  }
}
</style>
