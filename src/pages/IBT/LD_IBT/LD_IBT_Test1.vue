<template>
    <div v-if="currentStep <= 2">
        <h3 class="text-md font-semibold">Implicit Association Test</h3>
        <h3 class="text-[14px] font-semibold mt-5">{{ section === 0 ? "Practice" : "Round One" }} </h3>
    </div>
    <div v-if="currentStep === 1">
        <h4 class="text-sm leading-6 mt-4">
            <b>Instructions: </b>On the screen, you will see two
            sets of words: one related to individuals with learning difficulties and
            the other to those without. These two categories and words linked with
            each category are presented in a table as follows:
        </h4>

        <table class="border text-[13px] leading-6 mt-3">
            <tr>
                <th class="font-medium">Category</th>
                <th></th>
            </tr>
            <tr>
                <td>Learning Difficulties</td>
                <td>
                    Slow Learner, Academic Challenges, Educational Barriers, Difficulties
                    Learning
                </td>
            </tr>
            <tr>
                <td>Without Learning Difficulties</td>
                <td>Typically Developing, Neurotypical, No Diagnosis</td>
            </tr>
        </table>

        <h3 class="mt-5 text-sm leading-6">
            There will be words displayed in the middle of the screen related to
            learning difficulties or without <b>learning difficulties</b>. When the
            screen displays words associated with learning difficulties, select the
            <b>smiley face</b>. When you see words related to <b> without learning difficulties</b>,
            select the<b> sad face</b>. Smiley faces and sad faces will appear at the bottom
            of the screen either on the left or right. Pay attention because the
            smiley face and sad face may change places. Please respond quickly and
            correctly. You can only use one hand to touch the screen.
        </h3>

        <button @click="currentStep++">Next</button>
    </div>

    <!-- SECTION 2- REMEMBER* -->
    <section v-show="currentStep === 2" class="section-box">
        <h4 class="font-medium mt-4 text-sm">Remember*</h4>
        <br>
        <table class="w-96 text-sm remember-table leading-6">
            <tr>
                <td class="font-medium">If you see these words</td>
                <td class="font-medium">Press</td>
            </tr>
            <tr>
                <td>Average Learner, Typically Developing, Neurotypical, No Diagnosis </td>
                <td>
                    <img src="../../../assets/LD_IBT/sad-face.png" class="w-32" />
                </td>
            </tr>
            <tr>
                <td>Learning Difficulties Slow Learner, Academic Challenges, Educational Barriers, Difficulties Learning
                </td>
                <td>
                    <img src="../../../assets/LD_IBT/happy-face.png" class="w-32" />
                </td>
            </tr>
        </table>

        <div class="flex gap-3 items-center justify-center">
            <button @click="currentStep--">Back</button>
            <button @click="startTest">Start Test</button>
        </div>
    </section>

    <!-- TEST -->
    <section v-if="currentStep === 3">
        <h3 class="underline">{{ ibt_trials[section].section }}</h3>
        <div class="flex justify-center ">
            <img src="../../../assets/IT_faces/star.jpg" alt="star" class="ibt-star" v-show="userGotStimulusRight" />
            <img src="../../../assets/IT_faces/cross.jpg" alt="cross" class="cross mt-5" v-show="userGotStimulusWrong" />
        </div>
        <div class="mt-5">
            <div class="flex-col items-center">
                <div v-for="trial in ibt_trials[section].trials" :key="trial.id" :style="{ display: trial.visibility }">
                    <h3 class="font-semibold text-xl" :class="{ hide: testNotStarted || paused }">{{
                        trial.keyword }}</h3>
                    <img :src="getClickerImage(
                        trial.leftClickerFace == 'Smiley'
                            ? 'happy-face.png'
                            : 'sad-face.png'
                    )
                        " alt="Left face" ref="leftFace" @click="() => handleClick('Left')"
                        class="faceLeft ibt-icon" />
                    <img :src="getClickerImage(
                        trial.rightClickerFace == 'Sad'
                            ? 'sad-face.png'
                            : 'happy-face.png'
                    )
                        " alt="Right face" @click="() => handleClick('Right')" class="faceRight ibt-icon" />
                </div>
            </div>
            <h4 class="mt-4 text-sm">Reminder</h4>
            <table class="w-96 text-sm remember-table leading-6 mt-5">
                <tr>
                    <td class="font-medium">If you see these words</td>
                    <td class="font-medium">Press</td>
                </tr>
                <tr>
                    <td>Average Learner, Typically Developing, Neurotypical, No Diagnosis </td>
                    <td>
                        <img src="../../../assets/LD_IBT/sad-face.png" class="w-32" />
                    </td>
                </tr>
                <tr>
                    <td>Learning Difficulties Slow Learner, Academic Challenges, Educational Barriers, Difficulties Learning
                    </td>
                    <td>
                        <img src="../../../assets/LD_IBT/happy-face.png" class="w-32" />
                    </td>
                </tr>
            </table>
        </div>

        <!-- ACTUAL ROUND -->
        <section v-if="currentStep === 4">
        </section>
    </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { generateLdTrials } from "../../../modules/generateIbtTrials/generatIbtTrialsLD"
import { startTimer, handleAnswer } from "../../../modules/handleAnswers/handleIbtAnswersLd"

let userGotStimulusRight = ref(false)
let userGotStimulusWrong = ref(false)
let paused = ref(false)
let currentTrial = ref(0)
let section = ref(0)
let testNotStarted = ref(true)
let currentStep = ref(2)


let ibt_trials = [
    {
        section: "Practice",
        trials: generateLdTrials("Smiley", "Sad", 4),
    },
    {
        section: "Full test",
        trials: generateLdTrials("Smiley", "Sad", 4),
    },
]

function getClickerImage(url) {
    return new URL(`../../../assets/LD_IBT/${url}`, import.meta.url)
        .href;
}

function startTest() {
    currentStep.value++;
    console.log("start test")
    setTimeout(() => {
        testNotStarted.value = false
        startTimer()
    }, 500);
}

function finishedSection() {
    testNotStarted.value = true
    currentTrial.value = 0
    section.value++
    paused.value = false
    currentStep.value--
}

function handleClick(userClicked) {
    let trial = ibt_trials[section.value].trials[currentTrial.value]
    let userChoice = ''
    if (userClicked === "Left") {
        userChoice = trial.leftClickerFace
    }

    if (userClicked === "Right") {
        userChoice = trial.rightClickerFace
    }
    handleAnswer(userChoice, testNotStarted, ibt_trials[section.value].trials, paused, currentTrial, userGotStimulusRight, userGotStimulusWrong, finishedSection, section)
}

</script>

<style scoped>
tr,
td,
th {
    /* padding: 15px; */
    border: solid 1px black;
}

.remember-table td {
    padding: 15px;
}

button {
    background: linear-gradient(185deg, #7eefbf, #389820);
    border-radius: 47px;
    box-shadow: -1px 3px 3px -1px #cbcbcb;
    cursor: pointer;
    border: none;
    transition: all 250ms ease-in-out;
    color: white;
    font-weight: 300;
    font-size: 13px;
    margin-top: 25px;
    height: 45px;
    width: 100px;
}

.ibt-icon {
    cursor: pointer;
}

.visibilityHidden {
    visibility: hidden;
}

.ibt-star,
.cross {
    width: 80px;
}
</style>