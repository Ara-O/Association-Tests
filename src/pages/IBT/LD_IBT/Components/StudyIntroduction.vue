<template>
  <h3 class="font-semibold text-base mt-0">Welcome to the Study!</h3>
  <img
    :src="TestIntroductionImage"
    alt="Test intro image"
    class="max-w-[400px] w-full my-2"
  />
  <h4 class="text-sm">
    <span class="font-semibold leading-7">Instructions:</span>
    In this study, you will complete five main tasks:
  </h4>
  <h4 class="mt-1 mb-2 text-sm leading-7">Part A - Background Information</h4>
  <h4 class="mt-1 mb-2 text-sm leading-7">Part B - Implicit Bias Task</h4>
  <h4 class="mt-1 mb-2 text-sm leading-7">
    Part C - A questionnaire measuring attibutions about Learning Difficulties
  </h4>
  <h4 class="mt-1 mb-2 text-sm leading-7">
    Part D - A questionnaire measuring parental involvement in their children’s
    learning at home and at school
  </h4>
  <h4 class="mt-1 mb-2 text-sm leading-7">
    Part E - A questionnaire measuring attitudes towards learning difficulties
  </h4>

  <h4 class="text-sm mb-6">
    The whole study will take around 20 minutes to complete.
  </h4>

  <div class="flex gap-6 justify-start mt-7 mb-0">
    <button
      @click="emits('go-back')"
      class="my-0 gradient-btn gradient-green py-6"
    >
      Back
    </button>
    <button
      @click="emits('continue')"
      class="my-0 gradient-btn gradient-green py-6"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import TestIntroductionImage from "../../../../assets/LD_IBT/test-introduction-image-2-cropped.png";
const emits = defineEmits(["go-back", "continue"]);
</script>
