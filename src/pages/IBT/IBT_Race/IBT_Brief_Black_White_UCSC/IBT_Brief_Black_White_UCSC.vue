<template>
  <main style="height: 100vh" v-if="userHasNotFinishedConsentForm">
    <h3 style="font-weight: 600; font-size: 30px">Welcome to the UCSC IBT!</h3>
    <div class="mode-buttons">
      <button
        @click="chooseMode('touchscreen')"
        class="btn_basic_survey mode-btn"
      >
        Start
      </button>
    </div>
  </main>
  <main v-else>
    <section>
      <div v-show="!userHasPutInUserID" class="collect-user-id">
        <h3 style="font-size: 18px; font-weight: 500">Before we start!</h3>
        <h3 class="input-user-id-text">
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
            <implicit-bias-test-instructions
              :instruction="ibt_trials[section].instruction"
              :mode="testMode"
              @finishedInstructions="finishedInstructions"
            >
            </implicit-bias-test-instructions>
          </section>

          <section :class="{ hide: notFinishedInstructions }">
            <div v-show="testNotStarted">
              <h3>Instruction</h3>
              <br />
              <h3
                class="fullinstruction"
                v-html="ibt_trials[section].instruction"
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
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div
                  v-for="trial in ibt_trials[section].trials"
                  :key="trial.id"
                  :style="{ display: trial.visibility }"
                >
                  <img
                    :src="getImage(trial.image)"
                    class="trialimg"
                    style="width: 240px"
                  />
                  <div class="clicker-row">
                    <!-- Left face -->
                    <div class="clicker-wrapper">
                      <span v-if="testMode === 'keyboard'" class="key-label"
                        >E</span
                      >
                      <img
                        :src="
                          getClickerImage(
                            trial.leftClickerFaceEmotion == 'Sad'
                              ? 'sad.jpg'
                              : 'happy.jpg',
                          )
                        "
                        alt="Left face"
                        ref="leftFace"
                        :data-mood="trial.leftClickerFaceEmotion"
                        class="faceLeft ibt-icon"
                      />
                    </div>
                    <!-- Right face -->
                    <div class="clicker-wrapper">
                      <img
                        :src="
                          getClickerImage(
                            trial.rightClickerFaceEmotion == 'Sad'
                              ? 'sad.jpg'
                              : 'happy.jpg',
                          )
                        "
                        alt="Right face"
                        :data-mood="trial.rightClickerFaceEmotion"
                        ref="rightFace"
                        class="faceRight ibt-icon"
                      />
                      <span v-if="testMode === 'keyboard'" class="key-label"
                        >I</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import ConsentForm from "./IBT_Brief_Black_White_UCSC_Consent_Form.vue";
import generateIBTtrialsRace from "./generateIbtUCSCTrials";
import ImplicitBiasTestInstructions from "./IBT_Brief_Black_White_UCSC_Instructions.vue";
import "../../../../styles/pre-test-survey.css";
import "../../../../styles/IBT.css";
import { handleAnswer } from "../../../../modules/handleAnswers/handleIbtBriefAnswers";

export default {
  components: {
    ImplicitBiasTestInstructions,
    ConsentForm,
  },

  data() {
    return {
      uid: "",
      testMode: null,
      userHasNotFinishedConsentForm: true,
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
    chooseMode(mode) {
      this.testMode = mode;
      this.randomizeTrialCongruency();
      this.userHasNotFinishedConsentForm = false;
    },

    storeUserID() {
      if (this.uid.trim() !== "") {
        this.$store.commit("changeUserID", this.uid);
        this.userHasPutInUserID = true;
      }

      if (this.uid.trim() === "" && this.$store.getters.getUID === "") {
        this.$store.commit(
          "changeUserID",
          String(Math.floor(Math.random() * 10000)),
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
        `../../../../assets/IBT_Race_UCSC/${url}.jpg`,
        import.meta.url,
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
          "IBT_Brief_Black_White_UCSC",
          that.testMode,
        );
        document.querySelector(".faceRight").style.display = "block";
        document.querySelector(".faceLeft").style.display = "block";
      }, 500);
    },

    startTest() {
      let that = this;
      that.testNotStarted = false;
      setTimeout(function () {
        that.paused = false;
        document.querySelector(".faceRight").style.display = "block";
        document.querySelector(".faceLeft").style.display = "block";
        handleAnswer(
          that,
          that.ibt_trials[that.section].trials,
          "IBT_Brief_Black_White_UCSC",
          that.testMode,
        );
      }, 500);
    },

    buildInstruction(whiteEmotion, blackEmotion) {
      if (this.testMode === "keyboard") {
        return `There will be a picture of a <span style="font-weight:bold;color:#e40000">Black person</span> or a <span style="font-weight:bold;color:#e40000">White person</span> in the middle of the screen. Two faces will appear at the bottom. Press <span style="font-weight:bold;color:#e40000">E</span> for the face on the <span style="font-weight:bold;color:#e40000">left</span> and <span style="font-weight:bold;color:#e40000">I</span> for the face on the <span style="font-weight:bold;color:#e40000">right</span>. When you see the <span style="font-weight:bold;color:#e40000">White person</span>, press the key for the <span style="font-weight:bold;color:#e40000">${
          whiteEmotion === "Happy" ? "smiling" : "crying"
        } face</span>. When you see the <span style="font-weight:bold;color:#e40000">Black person</span>, press the key for the <span style="font-weight:bold;color:#e40000">${
          blackEmotion === "Happy" ? "smiling" : "crying"
        } face</span>. Please respond quickly and correctly.`;
      } else {
        return `There will be a picture of a <span style="font-weight:bold;color:#e40000">Black person</span> or a <span style="font-weight:bold;color:#e40000">White person</span> in the middle of the screen. When you see a picture of the <span style="font-weight:bold;color:#e40000">White person</span> you should click the <span style="font-weight:bold;color:#e40000">${
          whiteEmotion === "Happy" ? "smiling" : "crying"
        } face</span>; when you see the <span style="font-weight:bold;color:#e40000">Black person</span>, you should click the <span style="font-weight:bold;color:#e40000">${
          blackEmotion === "Happy" ? "smiling" : "crying"
        } face</span>. The faces may change places. Please respond quickly and correctly.`;
      }
    },

    buildPracticeInstruction(whiteEmotion, blackEmotion) {
      const base = this.buildInstruction(whiteEmotion, blackEmotion);
      return `Practice: ${base}`;
    },

    randomizeTrialCongruency() {
      const allTrials = [
        {
          trials: generateIBTtrialsRace("Happy", "Sad", 8),
          section: "practice_1",
          instruction: this.buildPracticeInstruction("Happy", "Sad"),
        },
        {
          trials: generateIBTtrialsRace("Happy", "Sad", 20),
          section: "section_1",
          instruction: this.buildInstruction("Happy", "Sad"),
        },
        {
          trials: generateIBTtrialsRace("Sad", "Happy", 8),
          section: "practice_2",
          instruction: this.buildPracticeInstruction("Sad", "Happy"),
        },
        {
          trials: generateIBTtrialsRace("Sad", "Happy", 20),
          section: "section_2",
          instruction: this.buildInstruction("Sad", "Happy"),
        },
      ];

      let allTrialsShuffled = [];
      const randomNo = Math.floor(Math.random() * 2);
      if (randomNo === 0) {
        allTrialsShuffled = allTrials;
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            trial.description =
              index === 0
                ? "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person"
                : index === 1
                ? "User clicks a happy face for an image of a white person, and a sad face for an image of a black person"
                : index === 2
                ? "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person"
                : "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person";
          });
        });
      } else {
        allTrialsShuffled.push(
          allTrials[2],
          allTrials[3],
          allTrials[0],
          allTrials[1],
        );
        allTrialsShuffled.forEach((trialArray, index) => {
          trialArray.trials.forEach((trial) => {
            trial.description =
              index === 0
                ? "Practice: User clicks a happy face for an image of a black person, and a sad face for an image of a white person"
                : index === 1
                ? "User clicks a happy face for an image of a black person, and a sad face for an image of a white person"
                : index === 2
                ? "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person"
                : "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
          });
        });
      }

      this.ibt_trials = allTrialsShuffled;
    },
  },

  mounted() {
    this.$store.state["IBT_Brief_Black_White_UCSC"] = [];
    this.$store.commit("changeCurrentTest", "IBT_Brief_Black_White_UCSC");
  },
};
</script>

<style scoped>
.mode-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mode-btn {
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 400;
  height: 65px;
}

.key-hint {
  font-size: 12px;
  font-weight: 300;
  opacity: 0.8;
}

.clicker-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 60px;
  margin-top: 12px;
}

.clicker-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.key-label {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: #f4f4f4;
  border: 2px solid #ccc;
  box-shadow: 0 3px 0 #aaa;
}

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
