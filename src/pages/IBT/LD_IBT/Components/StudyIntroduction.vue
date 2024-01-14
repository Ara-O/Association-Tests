<template>
    <h3 class="font-semibold text-base mt-0">Welcome to the Study!</h3>
    <img :src="TestIntroductionImage" alt="Test intro image" class=" max-w-[400px] w-full my-2" />
    <h4 class="text-sm"><span class="font-semibold leading-7">Instructions:</span>
        In this study, you will
        complete four main components:
    </h4>
    <h4 class="mt-1 mb-2 text-sm leading-7">1. Demographic Form</h4>
    <h4 class="mt-1 mb-2 text-sm leading-7">2. Implicit Bias Task</h4>
    <h4 class="mt-1 mb-2 text-sm leading-7">
        3. Case-based questionnaire measuring attributions about learning
        difficulties
    </h4>
    <h4 class="mt-1 mb-2 text-sm leading-7">
        4. Questionnaires measuring explicit attitudes towards learning
        difficulties and parental involvement
    </h4>
    <h4 class="text-sm mb-6">The whole study will take around 20 minutes to complete</h4>

    <div class="flex gap-6 justify-start mt-7 mb-0">
        <button @click="emits('go-back')" class="my-0 gradient-btn gradient-green py-5">Back</button>
        <button @click="emits('continue')" class="my-0 gradient-btn gradient-green py-5">Next</button>
    </div>
</template>

<script setup>
import TestIntroductionImage from "../../../../assets/LD_IBT/test-introduction-image-2-cropped.png"
const emits = defineEmits(["go-back", "continue"])
</script>