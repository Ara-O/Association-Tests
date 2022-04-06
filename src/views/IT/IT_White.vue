<template>
  <main>
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
  width: 97px;
  margin-top: 10px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 1px gray);
  transition: all 100ms ease-in;
}

.next:hover {
  filter: drop-shadow(0px 0px 0px gray);
  transform: translate(-4px, -1px);
  transition: all 100ms ease-in;
}

.instructions {
  line-height: 31px;
  width: 700px;
  max-height: 380px;
}

h3.instructions.midinstructions {
  font-size: 16.5px;
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
  width: 537px;
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
    width: 69px;
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

  .star,
  .cross {
    width: 100px;
  }

  .correctchoice h3 {
    font-size: 15px;
  }
}
</style>
