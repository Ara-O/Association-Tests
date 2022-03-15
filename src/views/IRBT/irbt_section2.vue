<template>
  <main>
    <div style="display: flex; flex-direction: column; align-items: center">
      <img src="../../assets/IT_faces/star.jpg" alt="star" class="irbt_star" />
      <div class="irbt-wrong">
        <img
          src="../../assets/IT_faces/cross.jpg"
          alt="star"
          class="irbt_cross"
        />
        <h3 class="irbt-cross-text">Try again!</h3>
      </div>
      <div
        v-for="trial in irbt_trials"
        :key="trial.id"
        :style="{ display: trial.visibility }"
      >
      <img :src="getImage(trial.image)" class="trialimg" />
      </div>
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
      section: "section_2",
    };
  },

  methods: {
    getFacesPosition() {
      let face = irbt.getFacesPosition(this);
      return require(`../../assets/IRBT_faces/${face}`);
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

    //does the reverse of the first method for the second image
    getFacesPosition2() {
      let face = irbt.getFacesPosition2(this);
      return require(`../../assets/IRBT_faces/${face}`);
    },

    leftFaceAction() {
      irbt.leftFaceAction(this, "/IRBT/feedback");
    },

    rightFaceAction() {
      irbt.rightFaceAction(this, "/IRBT/feedback");
    },

    handleCorrectAnswer() {
      irbt.handleCorrectAnswer(this, "/IRBT/feedback");
    },

    handleIncorrectAnswer() {
      irbt.handleIncorrectAnswer(this);
    },

    getImage(url) {
      return require(`../../assets/stimulus_faces/${url}`);
    },
  },

  mounted() {
    //! CHANGE TRIALS HERE
    let trials = generateIRBTtrials("Black", "White", 6);
    let firstItem = trials[0];
    trials.shift();
    this.shuffleObjects(trials);
    this.irbt_trials = trials;
    this.irbt_trials.unshift(firstItem);
    // console.log(this.irbt_trials);
    irbt.startTimer();
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.trialimg {
  width: 300px;
}

.faceLeft {
  position: absolute;
  bottom: 20px;
  left: 40px;
  max-width: 461px;
}
.faceRight {
  position: absolute;
  bottom: 20px;
  right: 40px;
  max-width: 461px;
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

.irbt-wrong{
      display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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