<template>
  <section
    v-if="notAgreedToConsentForm && !redirectToHome"
    class="consent-form"
  >
    <div class="jumbotron">
      <h3>Pre-Test Consent Form</h3>
    </div>
    <br />
    <h4 class="consent">
      <b>Here is a quick consent form before you start the test!</b>
      <br /><br />
      <b>Key Information</b>
      <br /><br />
      The following is a short summary of this study to help you decide whether
      or not to be a part of this study. If you choose to participate in this
      study, you will be asked to complete an Implicit Association Test (IAT) in
      which you will pair words representing son and daughter with words
      representing the categories “Good” and “Bad”, and the categories “Money”
      and “Love”.

      <br /><br />
      <b> Why is this research being done?</b>
      <br /><br />
      To understand the association between different social groups (e.g., son
      and daughter) and the categories of “good” or “bad” and “money” or “love”
      using the Implicit Association Test (IAT; Greenwald, McGhee, and Schwartz,
      1998).

      <br /><br />
      <b> How long will the research last and what will I need to do?</b>
      <br /><br />

      We expect that you will be in this research study for 12-14 minutes. You
      will be asked to answer questions and to complete two Implicit Association
      Tests (IATs) in which you will pair words representing son and daughter
      with words representing the categories “Good” and “Bad”, and the
      categories “Money” and “Love”.

      <br /><br />
      <b>Will being in this study help me in any way? </b>
      <br /><br />

      There are no benefits to you from your taking part in this research, and
      we cannot promise any benefits to others from your taking part in this
      research. However, possible benefits to others include understanding your
      own implicit associations. Given the civil unrest in our country, this
      test may provide you with data that will make you think about how much or
      how little you personally are influenced by your society.

      <br /><br />
      <b>Data Collection and Privacy </b>
      <br /><br />

      During the session, your response will be automatically recorded. Data is
      stored securely on local servers. Personal information will be treated in
      compliance with data protection laws.

      <br /><br />
      <b>Use of Data by Study Researchers</b>
      <br /><br />

      Your data may be placed in publicly accessible data repositories in a
      completely anonymized form. Your data may also be used to publish
      summaries of the study results in academic journals or at educational
      meetings. You will not be directly identified in any publication or report
      of the study.

      <br /><br />
      <b>Rights of Research Subjects</b>
      <br /><br />

      Please contact the Committee on the Use of Human Subjects in Research at
      Harvard University, if you have any questions, concerns, suggestions, or
      complaints that have not been or cannot be addressed by the researcher, or
      want to report research-related harm.They can be reached at: 617-496-2847,
      44-R Brattle St, Suite 200, Cambridge, MA 02138. The committee's email is
      cuhs@fas.harvard.edu.

      <br /><br />
      <b>Researcher Contact Information</b>
      <br /><br />

      If you have any questions or concerns about this study, please contact
      research lead Miao Qian at miao_qian@fas.harvard.edu, or the faculty
      supervisor Mahzarin Banaji at mahzarin_banaji@harvard.edu. Feel free take
      a photo or a screenshot of the contact information, in case you would like
      to contact us with any questions or concerns.

      <br />
      Please double click below if you agree to participate in this study.
    </h4>
    <br />
    <div class="arrange-btns">
      <button
        @click="notAgreedToConsentForm = redirectToHome = true"
        class="btn_survey"
      >
        I do not agree
      </button>
      <button @click="notAgreedToConsentForm = false" class="btn_survey">
        I agree
      </button>
    </div>
  </section>
  <main v-else-if="!redirectToHome && !notAgreedToConsentForm">
    <div v-if="progress === 1" class="midinstructions">
      <h3>Can you remember all the people?</h3>
      <h3>Press the right arrow to get started</h3>
      <img
        src="../../../assets/app_icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        v-if="progress !== 3 && progress !== 5"
        @click="moveForward"
      />
    </div>

    <!-- ----------------  -->

    <div v-if="progress === 2" class="midinstructions">
      <h3 class="instructions">
        You will need to remember {{ facesNumber }} faces and names. Each face
        will appear in the middle of the screen with a name below it. Memorize
        the face and the name. Once you feel that you memorized the face and
        name, tap on the name. Tap the arrow on the bottom right of the page to
        get started
      </h3>
      <br />
      <img
        src="../../../assets/app_icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        @click="moveForward"
      />
    </div>

    <!-- -------------------- -->

    <div class="stardiv">
      <img src="../../../assets/IT_faces/star.jpg" class="star" alt="" />
    </div>

    <div v-if="progress === 3">
      <div
        v-for="data in faceDataToMemorize"
        :key="data.img"
        class="faces_displayed"
      >
        <div>
          <img
            :src="getImg(data.img)"
            alt=""
            :style="{ display: data.visibility }"
            class="face_img"
          />
        </div>
        <div
          :style="{ display: data.visibility }"
          style="font-size: 25px"
          class="number"
          @click="nextFaceToMemorize()"
        >
          {{ data.name }}
        </div>
      </div>
    </div>

    <!-- -------------------- -->

    <div v-if="progress === 4" class="progress4">
      <h3 class="instructions midinstructions" v-html="createInstruction"></h3>
      <img
        src="../../../assets/app_icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        @click="moveForward"
      />
    </div>

    <!-- -------------------- -->

    <div v-if="progress === 5">
      <div>
        <ul class="faces">
          <!--LOOPING THROUGH THE IMAGE -->

          <div class="faces_flexbox">
            <div class="crossdiv">
              <img
                src="../../../assets/IT_faces/cross.jpg"
                alt=""
                class="cross"
              />
            </div>
            <div>
              <li v-for="(data, index) in facedata" :key="data.id">
                <!-- :class="facedata[index].id" -->
                <img
                  :src="getImg(data.img)"
                  :style="{ display: facedata[index].visibility }"
                  class="img-of-face"
                />
              </li>
            </div>
            <div class="correctchoice">
              <h3 @click="proceedAfterIncorrectChoice">
                {{ facedata[this.currentlyVisible].name }}
              </h3>
              <h3 style="font-size: 16px; width: 166px">
                Click the name above to continue
              </h3>
            </div>
          </div>

          <!-- All the names -->

          <div class="choices">
            <h3 @click="validateChoice('Lucas')" class="choice-name">Lucas</h3>
            <h3 @click="validateChoice('David')" class="choice-name">David</h3>
            <h3 @click="validateChoice('Mark')" class="choice-name">Mark</h3>
            <h3 @click="validateChoice('Jacob')" class="choice-name">Jacob</h3>
            <h3 @click="validateChoice('Paul')" class="choice-name">Paul</h3>
          </div>
        </ul>
      </div>
    </div>
  </main>
  <section v-if="redirectToHome" class="redirectToHome">
    <router-link to="/Home" class="btn_survey"
      >Click here to redirect to home</router-link
    >
  </section>
</template>

<script>
// import IT_Trials from "../../../modules/individuationTrainingTrials";
import { IT_Name_Trials } from "../../../modules/individuationTrainingTrials";
import * as handleIT from "../../../modules/handleAnswers/handleITTrials_Name";

export default {
  data() {
    return {
      progress: 1,
      facesNumber: 2,
      facedata: [],
      faceDataToMemorize: [],
      facedatashuffled: [],
      currentlyVisible: 0,
      currentFace: "",
      correctChoice: "",
      currentProgression: 2,
      inaccurateTrial: false,
      memorizationTimes: [],
      allMemorizationTimes: {},
      block: 1,
      numberOfTimesToMemorize: 1,
      notAgreedToConsentForm: true,
      redirectToHome: false,
    };
  },

  computed: {
    createInstruction() {
      if (!this.inaccurateTrial) {
        return (
          `Now we will find out if you remember the ` +
          this.facesNumber +
          ` faces and
        numbers that you were just told to memorize. Look at the center of the
        screen and touch the number that matches the face. <br /><br />
        If you get it right, a red star will appear.
        <br /><br />
        If you get it wrong, you will see a black cross. You will also see the
        correct answer and need to tap it to continue.`
        );
      } else {
        return `You were not able to remember the faces and numbers correctly, click the right arrow to try again`;
      }
    },
  },

  methods: {
    startTimer() {
      handleIT.startTimer();
    },

    stopTimer() {
      handleIT.stopTimer();
    },

    moveForward() {
      handleIT.moveForward(this);
    },

    getImg(img) {
      return require(`../../../assets/IT_Name_Faces/${img}`);
    },

    shuffleObjects(array) {
      return handleIT.shuffleObjects(array);
    },

    nextFaceToMemorize() {
      handleIT.nextFaceToMemorize(this, IT_Name_Trials);
    },

    proceedToNextSection() {
      handleIT.proceedToNextSection(this, IT_Name_Trials, "Asian");
    },

    proceedAfterIncorrectChoice() {
      handleIT.proceedAfterIncorrectChoice(this);
    },

    validateChoice(choice) {
      handleIT.validateChoice(choice, this);
    },
  },

  mounted() {
    this.$store.commit("changeCurrentTest", "IT_Asian_Name");
    this.facedata = IT_Name_Trials("Asian", 2);
    this.faceDataToMemorize = JSON.parse(JSON.stringify(this.facedata));
    // console.log(this.faceDataToMemorize);
    this.facedatashuffled = JSON.parse(JSON.stringify(this.facedata));
    this.facedatashuffled = this.shuffleObjects(this.facedatashuffled);
    for (let i = 0; i < this.facedatashuffled.length; i++) {
      if (i === 0) {
        this.facedatashuffled[i].visibility = "block";
      } else {
        this.facedatashuffled[i].visibility = "none";
      }
    }

    this.facedata = this.facedatashuffled;
  },
};
</script>

<style >
.next {
  /* position: absolute;
  bottom: 58px;
  right: 58px; */
  width: 67px;
  margin-top: 10px;
  cursor: pointer;
}

.instructions {
  line-height: 31px;
  width: 700px;
  max-height: 380px;
}

h3.instructions.midinstructions {
  font-size: 15.5px;
  font-weight: 400;
}

.faces_displayed {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.number {
  cursor: pointer;
}

.choices {
  display: flex;
  column-gap: 20px;
  justify-content: center;
}

li {
  list-style: none;
}

li img {
  cursor: pointer;
}

.star {
  width: 130px;
  display: none;
}

.centerstar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.stardiv {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}

.faces_flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.choice-name {
  height: 50px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 101px;
  box-shadow: inset 0px 0px 2px #b2b2b2;
  border-radius: 2px;
  background: white;
}

.cross {
  width: 130px;
  display: none;
}

.correctchoice {
  display: none;
}

.instructionsforincorrectchoice {
  display: none;
}

.midinstructions {
  background: white;
  padding: 48px;
  border-radius: 14px;
  color: black;
  box-shadow: -3px -3px 7px #eeeeeeb2, 4px 4px 5px rgb(218 218 219 / 95%);
}

.midinstructions h3 {
  font-size: 16.5px;
  font-weight: 400;
}

.face_img {
  width: 480px;
}

.faces_flexbox div:nth-of-type(2) img {
  width: 450px;
}

@media (max-width: 852px) {
  main {
    background: white;
  }
  .instructions {
    width: auto !important;
    font-size: 15px;
    overflow: auto;
  }

  .next {
    bottom: 19px;
    right: 19px;
    width: 55px;
  }

  .face_img {
    bottom: 18px;
    right: 43px;
    width: 300px;
  }

  .img-of-face {
    width: 300px;
  }

  .choices {
    flex-wrap: wrap;
    justify-content: center;
  }

  .faces {
    margin-left: -23px;
  }

  .faces_flexbox {
    flex-direction: column;
    row-gap: 13px;
  }

  li img {
    width: 90px;
  }

  .star {
    width: 100px;
  }

  .cross {
    width: 65px;
    margin-bottom: 40px;
  }

  .correctchoice h3 {
    font-size: 15px;
  }
}
</style>
