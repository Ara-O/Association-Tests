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
  </main>
</template>

<script setup>
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
</script>

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
