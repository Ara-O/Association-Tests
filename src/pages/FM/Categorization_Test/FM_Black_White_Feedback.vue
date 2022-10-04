<template>
    <main>
        <h3>Congratulations! You have finished the test</h3>
        <h3>Feedback page goes here</h3>
        <main-button routeTo="/Home">Go back to home page</main-button>
        <main-button routeTo="">Take IAT test</main-button>
        <main-button routeTo="">Take IBT test</main-button>
    </main>
</template>

<script setup>
    import MainButton from '../../../components/Buttons/MainButton.vue';
    import { useStore } from 'vuex';
import { reactive } from 'vue';


    let trialDataSet = [
        {
            "stimulusImage": "W_M04",
            "accuracy": 100,
            "correctImagePosition": "right",
            "leftImage": "B_M07",
            "rightImage": "W_M07",
            "testType": "Practice",
            "visibility": "none",
            "reactionTime": 984
        },
        {
            "stimulusImage": "B_F01",
            "accuracy": 100,
            "correctImagePosition": "right",
            "rightImage": "B_F08",
            "leftImage": "W_F10",
            "testType": "Practice",
            "visibility": "none",
            "reactionTime": 807
        },
        {
            "stimulusImage": "B_M07",
            "accuracy": 100,
            "correctImagePosition": "left",
            "leftImage": "B_M11",
            "rightImage": "W_M10",
            "testType": "Practice",
            "visibility": "none",
            "reactionTime": 920
        },
        {
            "stimulusImage": "W_F07",
            "accuracy": 100,
            "correctImagePosition": "right",
            "leftImage": "B_F07",
            "rightImage": "W_F04",
            "testType": "Practice",
            "visibility": "none",
            "reactionTime": 1076
        }
    ]

    let speedData = reactive({
        practice: 0,
        test: 0
    })
    let store = useStore();
    let trialData = store.state[store.getters.getCurrentTest];

    trialData.forEach((trialdataloop)=> {
        trialdataloop.trialDataSet.forEach((data, innerindex)=> {
            if(data.testType === "Practice"){
            speedData.practice += data.reactionTime
        }else if(data.testType === "Test"){
            speedData.test+= data.reactionTime
        }

        if(innerindex === trialdataloop.trialDataSet.length - 1){
            if(data.testType === "Practice"){
            speedData.practice /= trialDataSet.length 
        }else if(data.testType === "Test"){
            speedData.test /= trialDataSet.length 
        }
        }
        })
    })
</script>