<template>
  <main>
    <img src="../../assets/IT_faces/star.jpg" alt="star" class="irbt_star" />
    <div class="irbt-wrong">
    <img src="../../assets/IT_faces/cross.jpg" alt="star" class="irbt_cross" />
    <h3 class="irbt-cross-text">Try again!</h3>
    </div>
    
    <div
      v-for="trial in irbt_trials"
      :key="trial.id"
      :style="{ display: trial.visibility }"
    >
      <img :src="getImage(trial.image)" class="trialimg" />
    </div>
  </main>
  <img
    :src="getFacesPosition()"
    alt="Left face"
    ref="leftFace"
    @click="leftFaceAction"
    :data-mood="this.leftFace"
    class="faceLeft"
  />
  <img
    :src="getFacesPosition2()"
    alt="Right face"
    ref="rightFace"
    @click="rightFaceAction"
    :data-mood="this.rightFace"
    class="faceRight"
  />
</template>

<script>
import generateIRBTtrials from "../../modules/generateIrbtTrials";
import * as irbt from "../../modules/handleIrbtAnswers";
export default {
  data() {
    return {
      irbt_trials: [],
      currentUserTrial: 0,
      leftFace: "",
      rightFace: "",
      surveyNotStarted: true,
      section: "practice",
      picked: [],
    };
  },

  methods: {
    moveOn() {
      document.querySelector(".faceLeft").style.display = "block";
      document.querySelector(".faceRight").style.display = "block";
      this.surveyNotStarted = false;
      let trials;
      //& (Expectedsmiling, Expectedsad, trials)
      

      //! CHANGE TRIALS HERE
      trials = generateIRBTtrials("White", "Black", 6);
      let firstItem = trials[0];
      trials.shift();
      this.shuffleObjects(trials);
      this.irbt_trials = trials;
      this.irbt_trials.unshift(firstItem);
      // console.log(this.irbt_trials);
      irbt.startTimer();
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

    getFacesPosition() {
      let face = irbt.getFacesPosition(this);
      return require(`../../assets/IRBT_faces/${face}`);
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this);
      return require(`../../assets/IRBT_faces/${face}`);
    },

    leftFaceAction() {
      irbt.leftFaceAction(this, "/IRBT/reinforcement");
    },

    rightFaceAction() {
      irbt.rightFaceAction(this, "/IRBT/reinforcement");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(this, "/IRBT/reinforcement");
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },
  },

  mounted() {
    this.moveOn();
  },
};
</script>

<style scoped>
button {
  border-radius: 27px;
  background: darkblue;
  margin-top: 19px;
  color: white;
  cursor: pointer;
  border: solid 0px;
  height: 44px;
  width: 102px;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
}

.trialimg {
  width: 300px;
}

.faceLeft {
  position: absolute;
  bottom: 20px;
  left: 40px;
  display: none;
}
.faceRight {
  display: none;
  position: absolute;
  bottom: 20px;
  right: 40px;
}
.irbt_star {
  display: none;
  width: 130px;
}

.irbt_cross {
  display: none;
  width: 70px;
}

.irbt-cross-text {
  display: none;
}

@media (max-width: 852px) {
  main {
    background: white;
  }
  .faceLeft {
    max-width: 96px;
  }
  .faceRight {
    max-width: 96px;
  }

  .trialimg {
    width: 196px;
  }

  .irbt_cross {
    margin-left: 10px;
  }
}
</style>