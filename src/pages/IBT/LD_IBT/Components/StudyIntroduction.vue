<template>
    <h3 class="font-semibold text-base mt-0">Welcome to the Study!</h3>
    <h4 class="text-sm"><span class="font-semibold">Instructions:</span>
        In this study, you will
        complete four main components:
    </h4>
    <h4 class="mt-1 mb-2 text-sm">1. Demographic Form</h4>
    <h4 class="mt-1 mb-2 text-sm">2. Implicit Bias Task</h4>
    <h4 class="mt-1 mb-2 text-sm">
        3. Case-based questionnaire measuring attributions about learning
        difficulties
    </h4>
    <h4 class="mt-1 mb-2 text-sm">
        4. Questionnaires measuring explicit attitudes towards learning
        difficulties and parental involvement
    </h4>
    <h4 class="text-sm">The whole study will take around 20 minutes to complete</h4>

    <div>
        <img :src="TestIntroductionImage" alt="Test intro image" class=" max-w-[400px] w-full" />
    </div>
    <div class="test-buttons !justify-start !mt-0">
        <button @click="emits('go-back')" class="mt-0 gradient-btn">Back</button>
        <button @click="emits('continue')" class="mt-0 gradient-btn">Next</button>
    </div>
</template>

<script setup>
import TestIntroductionImage from "../../../../assets/LD_IBT/test-introduction-image-2.png"
const emits = defineEmits(["go-back", "continue"])
</script>