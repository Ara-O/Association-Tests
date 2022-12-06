<template>
  <main>
    <div style="display: flex; align-items: center; column-gap: 29px">
      <img
        src="../../../../assets/app_icons/congratulations.png"
        alt="Congratulations image"
        class="congratulations-image"
      />
      <h3 class="congratulations-message">
        Congratulations! You have finished the test
      </h3>
      <img
        src="../../../../assets/app_icons/congratulations.png"
        alt="Congratulations image"
        class="congratulations-image"
      />
    </div>
    <main-button routeTo="/Home">Go Home</main-button>
    <button @click="storeBriefIBTDataHere()">test feedback</button>
  </main>
</template>

<script>
import { storeBriefIBTData } from "../../../../modules/storingData/storingDataBriefIBT";
import MainButton from "../../../../components/Buttons/MainButton.vue";
export default {
  components: {
    MainButton,
  },

  methods: {
    storeBriefIBTDataHere() {
      storeBriefIBTData(
        [
          [
            {
              accuracy: 0,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person",
              image: "W_CM01.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 1813,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Happy",
            },
            {
              accuracy: 0,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person",
              image: "B_CM03.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 1929,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Sad",
            },
          ],
          [
            {
              accuracy: 0,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "User clicks a happy face for an image of a white person, and a sad face for an image of a black person",
              image: "B_CF02.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 499,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Sad",
            },
            {
              accuracy: 100,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "User clicks a happy face for an image of a white person, and a sad face for an image of a black person",
              image: "W_CF03.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 267,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Happy",
            },
          ],
          [
            {
              accuracy: 100,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "Practice: User clicks a sad face for an image of a white person, and a happy face for an image of a black person",
              image: "B_CM01.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 227,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Happy",
            },
            {
              accuracy: 100,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "Practice: User clicks a sad face for an image of a white person, and a happy face for an image of a black person",
              image: "W_CM02.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 964,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Sad",
            },
          ],
          [
            {
              accuracy: 100,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "User clicks a sad face for an image of a white person, and a happy face for an image of a black person",
              image: "W_CF02.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 820,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Sad",
            },
            {
              accuracy: 100,
              browser:
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
              dateTaken: "12-3-2022",
              description:
                "User clicks a sad face for an image of a white person, and a happy face for an image of a black person",
              image: "B_CF03.jpg",
              leftClickerFaceEmotion: "Happy",
              reactionTime: 227,
              rightClickerFaceEmotion: "Sad",
              stimulusEmotion: "Happy",
            },
          ],
        ],
        this
      );
    },
  },
};
</script>
<!-- <script setup>
import { storeBriefIBTData } from "../../../../modules/storingData/storingDataBriefIBT";
import MainButton from "../../../../components/Buttons/MainButton.vue";
import * as confetti from "canvas-confetti";
import { onMounted } from "vue";


function launchConfetti() {
  var myCanvas = document.querySelector(".gender-feedback-main");

  var myConfetti = confetti.create(myCanvas, { resize: true });

  // do this for 1 seconds
  var duration = 10 * 100;
  var end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    myConfetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    myConfetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

onMounted(() => {
  launchConfetti();
});
</script> -->

<style scoped>
.congratulations-message {
  font-size: 18px;
  font-weight: 400;
}

.congratulations-image {
  width: 233px;
}

@media (max-width: 1172px) {
  .congratulations-image {
    display: none;
  }
}
</style>
