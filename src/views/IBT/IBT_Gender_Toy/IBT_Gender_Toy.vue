<template>
    <main>
        <section v-if="notFinishedInstructions">
        <ibt-instructions @finishedInstructions="notFinishedInstructions = false">
        There will be a picture of a Female person or a Male person in the
        middle of screen. When you see a picture of the Female person you should
        touch the smiling face; when you see the Male person, you should touch
        the crying face. Smiling and crying faces will appear at the bottom of
        the screen either on the left or right. Pay attention because the
        smiling and crying faces may change places. Please respond
        <u>quickly and correctly.</u> You can only <u>use one hand</u> to touch
        the screen.
        </ibt-instructions>
    </section>
    <section v-else>
        <h3>hiiii bii</h3>
    </section>
    </main>
</template>

<script>
import IbtInstructions from '../../../components/IbtInstructions.vue'
import {genderAndToy} from "../../../modules/generateIbtTrialsGender"
export default {
    components: {
        IbtInstructions,
    },

    data(){
        return {
            notFinishedInstructions: true, 
        }
    },

    mounted(){
      console.log("Full data:", genderAndToy())
    }
}
</script>

<style scoped>
@import url("../../../styles/IBT.css");
</style>