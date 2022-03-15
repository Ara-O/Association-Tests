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
    };
  },

  mounted() {
    //& (Expectedsmiling, Expectedsad, trials)

    //!CHANGE TRIALS HERE
    const trials = generateIRBTtrials("White", "Black", 8);
    this.irbt_trials = trials;
  },

  methods: {
    getFacesPosition() {
      let face = irbt.getFacesPosition(this);
      return require(`../../assets/IRBT_faces/${face}`);
    },

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this);
      return require(`../../assets/IRBT_faces/${face}`);
    },

    handleCorrectAnswer() {
      let that = this;
      that.irbt_trials[that.currentUserTrial].visibility = "none";
      document.querySelector(".irbt_star").style.display = "block";
      document.querySelector(".irbt_cross").style.display = "none";
      document.querySelector(".irbt-cross-text").style.display = "none";
      document.querySelector(".faceLeft").style.display = "none";
      document.querySelector(".faceRight").style.display = "none";

      setTimeout(function () {
        document.querySelector(".irbt_star").style.display = "none";
        document.querySelector(".faceLeft").style.display = "block";
        document.querySelector(".faceRight").style.display = "block";
        // !Store speed and accuracy
        that.currentUserTrial++;
        if (that.currentUserTrial !== that.irbt_trials.length) {
          that.irbt_trials[that.currentUserTrial].visibility = "block";
        } else {
          // console.log("end");
          that.$router.push("/IRBT/reinforcement");
        }
      }, 1000);
    },

    leftFaceAction() {
      let that = this;
      //!return and reset timer here
      const faceBeingShown = that.irbt_trials[that.currentUserTrial].emotion;
      // console.log(faceBeingShown, " ", that.leftFace);
      if (faceBeingShown === that.leftFace) {
        // console.log("left is answer");
        this.handleCorrectAnswer(that);
      } else {
        this.handleIncorrectAnswer(that);
      }
    },

    rightFaceAction() {
      let that = this;
      //! return and reset timer here
      const faceBeingShown = that.irbt_trials[that.currentUserTrial].emotion;
      // console.log(faceBeingShown, " ", that.rightFace);
      if (faceBeingShown === that.rightFace) {
        // console.log("right is answer");
        this.handleCorrectAnswer(that);
      } else {
        this.handleIncorrectAnswer(that);
      }
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },
  },
};
</script>

<style scoped>
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
  max-width: 461px;
  left: 40px;
}
.faceRight {
  position: absolute;
  bottom: 20px;
  max-width: 461px;
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

.irbt-wrong{
      display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.irbt-cross-text{
  display: none;
}

@media (max-width: 852px) {
  main{
    background: white;
  }
  .faceLeft{
    max-width: 104px;
  }
  .faceRight{
    max-width: 104px;
  }

  .trialimg{
    width:196px
  }
}
</style>