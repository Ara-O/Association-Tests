<template>
  <main>
    <img
      src="../../assets/app-icons/rightArrow.png"
      alt="Right Arrow"
      class="next"
      v-if="progress !== 3 && progress !== 5"
      @click="moveForward"
    />
    <div v-if="progress === 1" class="midinstructions">
      <h3>Can you remember all the people?</h3>
      <h3>Press the right arrow to get started</h3>
    </div>

    <!-- ----------------  -->

    <div v-if="progress === 2">
      <h3 class="instructions midinstructions">
        You will need to remember {{ facesNumber }} faces and numbers. Each face
        will appear in the middle of the screen with a number below it. Memorize
        the face and the number. Once you feel that you memorized the face and
        number, tap on the number.
      </h3>
      <br />
      <h3>Tap the arrow at the upper right to get started.</h3>
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
      </div>
    </div>
  </main>
</template>

<script>
import IT_Trials from "../../modules/individuationTrainingTrials";
import { getDatabase, ref, set } from "firebase/database";

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
      ms: 0,
      sec: 0,
      timerActive: 0,
      startTime: 0,
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
        correct answer and need to tap it to continue.
        <br /><br />
        Tap the arrow at the right hand corner to get started`
        );
      } else {
        return `You were not able to remember the faces and numbers correctly, click the right arrow to try again`;
      }
    },
  },

  methods: {
    startTimer() {
      this.ms = 0;
      this.startTime = new Date();
    },

    stopTimer() {
      const endTime = new Date();
      this.ms = endTime - this.startTime;
    },

    moveForward() {
      this.progress++;
      if (this.progress === 3) {
        this.startTimer();
      }

      if (this.progress === 5) {
        this.inaccurateTrial = false;
        this.startTimer();
      }
    },

    getImg(img) {
      return require(`../../assets/IT_faces/${img}`);
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

    nextFaceToMemorize() {
      //This is for the faces to memorize, making them visible and not visible
      //It uses the currently Visible, to set the visiblity of the first item to none, and then continues

      //Stops timer
      this.stopTimer();
      this.memorizationTimes.push(this.ms);

      //Starts timer - how long It takes to memorize
      this.startTimer();

      if (this.currentlyVisible < this.facedataclone.length - 1) {
        this.facedataclone[this.currentlyVisible].visibility = "none";
        this.currentlyVisible++;
        this.facedataclone[this.currentlyVisible].visibility = "block";
      } else {
        // End of one cycle
        // Storing all the memorization times
        this.currentlyVisible = 0;
        this.progress++;
        this.allMemorizationTimes[`${this.block + 1}-faces-trials`] =
        this.memorizationTimes;
        this.memorizationTimes = [];
        this.block++;
        this.$store.state.memorization_times = this.allMemorizationTimes;
      }
    },

    proceedToNextSection() {
      if (this.inaccurateTrial === false) {
        if (this.currentProgression < 5) {
          this.currentlyVisible = 0;
          this.progress = 2;
          this.facesNumber++;
          this.$router.push("");
          this.facedata = IT_Trials("Asian", ++this.currentProgression);
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
        } else {
          // !End of test
          let data = this.$store.state.IT_trials;
          for (let trial in data) {
            data[trial].forEach((data) => {
              delete data.visibility;
              delete data.id;
            });
          }

          this.$router.push("/IT/Feedback");
          const db = getDatabase();
          set(ref(db, `User-${this.$store.state.uid}-IT_EastAsian`), {
            IT_EastAsian: {
              trials: this.$store.state.IT_trials,
              time_spent_on_memorization: this.$store.state.memorization_times,
              browserInfo: navigator["userAgent"],
            },
          });
          // console.log("THE TEST HAS ENDED")
        }
      } else {
        //There has been an inaccurate trial
        this.progress = 4;
        this.numberOfTimesToMemorize++;
        this.currentlyVisible = 0;
        for (let i = 0; i < this.facedatashuffled.length; i++) {
          if (i === 0) {
            this.facedatashuffled[i].visibility = "block";
          } else {
            this.facedatashuffled[i].visibility = "none";
          }
        }
      }
    },

    proceedAfterIncorrectChoice() {
      //After the user clicks the correct number from an incorrect choice
      if (this.currentlyVisible !== this.facedata.length - 1) {
        this.facedata[this.currentlyVisible].visibility = "none";
        this.currentlyVisible++;
        this.facedata[this.currentlyVisible].visibility = "block";
        document.querySelector(".cross").style.display = "none";
        document.querySelector(".correctchoice").style.display = "none";
        document.querySelector(".choices").style.display = "flex";
        this.inaccurateTrial = true;
      } else {
        // when the user gets the face wrong at the end of the test
        this.inaccurateTrial = true;
        this.proceedToNextSection();
      }
    },

    validateChoice(choice) {
      // Sets the current face to the first value of the face data
      this.currentFace = this.facedata[this.currentlyVisible].cN;

      // Checks to make sure the value used to go over the array is less than the array length
      if (this.currentlyVisible !== this.facedata.length) {
        //If the user got the face right
        if (choice == this.currentFace) {
          //Stop timer
          this.stopTimer();
          this.facedata[this.currentlyVisible].timeSpentOnFace = this.ms;
          this.startTimer();

          document.querySelector(`.${choice.slice(0, 2)}`).style.display ="none";
          document.querySelector(".choices").style.display = "none";
          this.facedata[this.currentlyVisible].visibility = "none";
          document.querySelector(".star").style.display = "block";

          // Setting the inaccurate trial to true if there has been one
          if (this.inaccurateTrial == true) {
            this.inaccurateTrial = true;
          } else {
            this.inaccurateTrial = false;
          }

          let that = this;

          window.setTimeout(function () {
            if (that.currentlyVisible !== that.facedata.length - 1) {
              that.currentlyVisible++;
              document.querySelector(".star").style.display = "none";
              document.querySelector(`.${choice.slice(0, 2)}`).style.display = "none";
              that.facedata[that.currentlyVisible].visibility = "block";
              document.querySelector(".choices").style.display = "flex";
            } else {
              // The faces cycle has reached the end, store current timing
              // Only store the time it took when user gets both sides right
              document.querySelector(".star").style.display = "none";
              that.numberOfTimesToMemorize = 1;
              that.proceedToNextSection();
            }
          }, 1000);

          //If the user gets on wrong
        } else {
          // Store how many times it took user to memorize
          this.facedata[this.currentlyVisible].accuracy = 0;
          document.querySelector(".cross").style.display = "block";
          document.querySelector(".correctchoice").style.display = "block";
          document.querySelector(".correctchoice-img").src = `${this.getImg(
            this.currentFace
          )}`;
          document.querySelector(".choices").style.display = "none";
        }

        //REGARDLESS OF CHOICE
        this.$store.state.IT_trials[`${this.block}-faces-trials`] = JSON.parse(
          JSON.stringify(this.facedata)
        );
        this.$store.state.IT_trials[`${this.block}-faces-trials`].push({
          blockAttempts: this.numberOfTimesToMemorize,
        });
      }
    },
  },

  mounted() {
    this.facedata = IT_Trials("Asian", 2);
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

<style>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.instructions {
  width: 700px;
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
  width: 150px;
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
  width: 150px;
  display: none;
}

.correctchoice {
  display: none;
}

.face_img {
  width: 537px;
}

.instructionsforincorrectchoice {
  display: none;
}

@media (max-width: 852px) {
  main {
    background: white;
  }
  .instructions {
    width: auto !important;
    font-size: 15px;
    max-height: 326px;
    overflow: auto;
  }

  .next {
    bottom: 18px;
    right: 43px;
    width: 86px;
  }

  .face_img {
    bottom: 18px;
    right: 43px;
    width: 337px;
  }

  .img-of-face {
    width: 337px;
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
}
</style>
