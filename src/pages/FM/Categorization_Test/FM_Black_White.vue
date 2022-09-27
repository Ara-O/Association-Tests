<template>
    <section v-if="!testHasStarted">
        <h4>{{trials[currentTest].instruction}}</h4>
        <button @click="startTest">Start test</button>
    </section>
    <section v-else>
        <h3>Yay, test has started</h3>
        <div v-for="trialData in trials[currentTest].trialDataSet">
            <img :src="getImage(trialData.stimulusImage)" alt="" :style="{display: trialData.visibility}">
        </div>
        <img :src="getImage(trials[currentTest].trialDataSet[currentTrial].leftImage)" alt="Left image" @click="handleUserChoice('left')"> 
        <img :src="getImage(trials[currentTest].trialDataSet[currentTrial].rightImage)" alt="Right image" @click="handleUserChoice('right')"> 
    </section>
    <button @click="currentTrial++">oi</button>
</template>

<script setup>
import { ref, watch } from "vue";
import {generatePracticeTrials} from "../../../modules/generateFaceMatchingTrials/generateBlackWhiteTrials"
import {startFaceMatching, handleUserSelection} from "../../../modules/handleAnswers/handleFM"

let currentTest = ref(0);
let currentTrial = ref(0)
let testHasStarted = ref(false);
let trials = [
    {
        instruction: "This is the practice test",
        trialDataSet: generatePracticeTrials(20, true),
    },
    {
        instruction: "This is the actual test",
        trialDataSet: generatePracticeTrials(20, true),

    }
]

function handleUserChoice(direction){
    //handling the user selection
    handleUserSelection(directon, currentTrial)
}

function getImage(img){
return new URL(`../../../assets/stimulus_faces/${img}.jpg`, import.meta.url).href;
}
function startTest(){
    testHasStarted.value = true;
    startFaceMatching();
    console.log(ref.prototype)
}

console.log(generatePracticeTrials(20, true))
</script>