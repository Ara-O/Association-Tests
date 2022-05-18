<template>
  <main>
    <img src="../../assets/IT_faces/star.jpg" alt="star" class="irbt_star" />
    <div
      v-for="trial in irbt_trials"
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
          src="../../assets/app-icons/incorrectImg.png"
          alt="Wrong icon"
          class="irbt-wrong-img"
        />
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
      trials = generateIRBTtrials("happy.jpg", "sad.jpg", 6);
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
  width: 170px;
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

.irbt-wrong-img {
  display: none;
  width: 30px;
}


.irbt-cross-text {
  display: none;
}

.irbt-wrong-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  column-gap: 30px
}

@media (max-width: 852px) {
  main {
    background: white;
  }
  .faceLeft {
    max-width: 120px;
  }
  .faceRight {
    max-width: 120px;
  }

  .trialimg {
    width: 156px;
  }

  .irbt_cross {
    margin-left: 10px;
  }

  
  .irbt-wrong-wrapper {
    column-gap: 6px;
}

.irbt-wrong{
  font-size: 13px
}

.irbt-wrong-img{
  width: 24px
}

.irbt_star{
  width: 101px
}
}
</style>