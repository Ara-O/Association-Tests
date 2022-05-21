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
        src="../../assets/app-icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        v-if="progress !== 3 && progress !== 5"
        @click="moveForward"
      />
    </div>

    <!-- ----------------  -->

    <div v-if="progress === 2" class="midinstructions">
      <h3 class="instructions">
        You will need to remember {{ facesNumber }} faces and numbers. Each face
        will appear in the middle of the screen with a number below it. Memorize
        the face and the number. Once you feel that you memorized the face and
        number, tap on the number. Tap the arrow on the bottom right of the page
        to get started
      </h3>
      <br />
      <img
        src="../../assets/app-icons/rightArrow.png"
        alt="Right Arrow"
        class="next"
        @click="moveForward"
      />
    </div>

    <!-- -------------------- -->

    <div class="stardiv">
      <img src="../../assets/IT_faces/star.jpg" class="star" alt="" />
    </div>

    <div v-if="progress === 3">
      <div v-for="data in facedataclone" :key="data.id" class="faces_displayed">
        <div>
          <img
            :src="getImg(data.img)"
            alt=""
            :style="{ display: data.visibility }"
            class="face_img"
          />
        </div>
        <img
          :src="getImg(data.cN)"
          alt=""
          :style="{ display: data.visibility }"
          class="number"
          @click="nextFaceToMemorize()"
        />
        <!-- <img src="../../assets/IT_faces/White/White_1.jpg" alt=""> -->
      </div>
    </div>

    <!-- -------------------- -->

    <div v-if="progress === 4" class="progress4">
      <h3 class="instructions midinstructions" v-html="createInstruction"></h3>
      <img
        src="../../assets/app-icons/rightArrow.png"
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
              <img src="../../assets/IT_faces/cross.jpg" alt="" class="cross" />
            </div>
            <div>
              <li v-for="(data, index) in facedata" :key="data.id">
                <img
                  :src="getImg(data.img)"
                  :style="{ display: facedata[index].visibility }"
                  :class="facedata[index].id"
                  class="img-of-face"
                />
              </li>
            </div>
            <div class="correctchoice">
              <img
                src="../../assets/IT_faces/N2.jpg"
                alt="correct choice"
                class="correctchoice-img"
                @click="proceedAfterIncorrectChoice"
              />
              <h3 style="width: 164px">Click the number above to continue</h3>
            </div>
          </div>

          <!-- NUMBER 1 to 5 -->

          <div class="choices">
            <li v-for="choice in choiceImages" :key="choice.id">
              <img
                :src="getImg(choice)"
                alt=""
                @click="validateChoice(choice)"
              />
            </li>
          </div>
        </ul>

        <!-- <img v-for="i in 5" src="" alt="">  -->
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
import IT_Trials from "../../modules/individuationTrainingTrials";
import * as handleIT from "../../modules/handleITTrials";

export default {
  data() {
    return {
      progress: 1,
      facesNumber: 2,
      facedata: [],
      facedataclone: [],
      facedatashuffled: [],
      currentlyVisible: 0,
      choiceImages: ["N1.jpg", "N2.jpg", "N3.jpg", "N4.jpg", "N5.jpg"],
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
      return require(`../../assets/IT_faces/${img}`);
    },

    shuffleObjects(array) {
      return handleIT.shuffleObjects(array);
    },

    nextFaceToMemorize() {
      handleIT.nextFaceToMemorize(this, IT_Trials);
    },

    proceedToNextSection() {
      handleIT.proceedToNextSection(this, IT_Trials, "White");
    },

    proceedAfterIncorrectChoice() {
      handleIT.proceedAfterIncorrectChoice(this);
    },

    validateChoice(choice) {
      handleIT.validateChoice(choice, this, IT_Trials);
    },
  },

  mounted() {
    this.facedata = IT_Trials("White", 2);
    this.facedataclone = JSON.parse(JSON.stringify(this.facedata));
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
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
}

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

.faces_flexbox div:nth-of-type(2) img{
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
