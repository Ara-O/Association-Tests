<template>
    <section class="flex items-center justify-center h-screen" v-if="currentStep === 1">
        <div class="result-box">
            <h3 class="font-medium">End of the Test</h3>
            <img src="../../../assets/LD_IBT/happy-children.png" alt="Happy children illustration" class="w-56">
            <h4 class="font-medium">Congratulations! You have reached the end of the Implicit Association Test.
            </h4>

            <h5 class="leading-6 text-md font-medium">You view people with learning difficulties in a positive manner
                therefore,
                you have
                more positive bias towards
                individuals with learning difficulties.</h5>

            <h3 class="text-sm leading-7 ">Biases are mental shortcuts formed from our experiences. Implicit bias
                or
                unconscious
                bias
                impacts our judgement
                without our awareness. Recognizing these biases is crucial because they can perpetuate societal
                inequalities,
                lead
                to emotional distress, and hinder the growth of inclusive, supportive communities.
                It is important to foster understanding, empathy, and positive attitudes for the well-being and success of
                individuals with learning difficulties.
                Explore the following:
                <a href="https://www.ldao.ca/introduction-to-ldsadhd/articles/about-lds/about-learning-disabilities/"> About
                    Learning Disabilities – Learning Disabilities Association of Ontario – LDAO</a>
            </h3>

            <button @click="currentStep++">Next</button>
        </div>
    </section>
    <section class="flex items-center justify-center h-screen " v-if="currentStep === 2">
        <div class="result-box-questions ">
            <h3 class="font-medium !text-[15px]"> Attributions about Learning Difficulties
            </h3>

            <h3 class="text-[13px] leading-7">
                Scenario: Please read the scenario described below and answer the questions that follow. There are no right
                or wrong answers. Please answer based on the first thought that comes to your mind.

                Sam is a 9-year-old boy who is currently in Grade 4 in a Public School in suburban Ontario. Up until Grade
                3, Sam was scoring slightly below average to average in almost all his classes but
                now his grades are slipping. He works slowly on assignments but is a hard worker. His teacher asks him to
                complete shorter assignments than his classmates and he gets more time on tests than his classmates. In
                general, he is unable to complete assignments on his own. When the teacher has time to sit down with him and
                talk him through the work, Sam is able to work through the task. His reading is slow and labored. Sam’s
                parents are very concerned about their son, especially because he is trying hard to achieve but is often
                frustrated with himself. They often meet Sam’s teacher/s to get feedback about his performance in the class.
            </h3>

            <!-- First question -->
            <!-- <></div> -->
            <div class="w-[460px] m-auto">
                <h3 class="font-medium"> 1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the
                    future), how
                    soon do you think
                    Sam’s academic difficulties should be addressed at school?</h3>

                <div class="flex items-center justify-between">
                    <span>
                        <input type="radio" value="1" id="1" />
                        <label for="1">1</label>
                    </span>
                    <span>
                        <input type="radio" value="2" id="2" />
                        <label for="2">2</label>
                    </span>
                    <span>
                        <input type="radio" value="3" id="3" />
                        <label for="3">3</label>
                    </span>
                    <span>
                        <input type="radio" value="4" id="4" />
                        <label for="4">4</label>
                    </span>
                    <span>
                        <input type="radio" value="5" id="5" />
                        <label for="5">5</label>
                    </span>
                </div>

                <div class="flex justify-between">
                    <h4 class="text-xs">Immediately</h4>
                    <h4 class="text-xs w-36 text-right">Wait to see how Sam performs in the future</h4>
                </div>
            </div>

            <!-- Question 2 -->
            <h3 class="font-medium"> 2.The following statements are about different things that could be contributing to
                Sam’s academic/learning
                difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-
                contributing the least.
                Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each
                factor is contributing to Sam’s difficulties in learning.
            </h3>

            <div>
                <span>
                    <input type="checkbox" name="" id="sam">
                    <label for="sam" class="mr-3">Sam</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        :disabled="!userSelectedSam">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="people-around">
                    <label for="people-around" class="mr-3">The people around him (teachers, parents etc.)</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="systemic-factors">
                    <label for="systemic-factors" class="mr-3">Systemic factors (education system, health system)</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        id="systemic-factors">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="financial-or-academic">
                    <label for="financial-or-academic" class="mr-3">His financial/academic situation</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        id="financial-or-academic">
                </span>
                <br>
                <h4 class="text-sm">(As an example: lack of school resources that can support Sam’s learning)
                </h4>
            </div>

            <!-- Question 3 -->
            <h3 class="font-medium mt-10">3. Who or what is more responsible for changing or bringing about an improvement
                in Sam’s situation (Tick all that apply)
            </h3>

            <label for="sam-himself" class="mr-3">Sam himself</label>
            <input type="checkbox" name="" id="sam-himself">
            <br>
            <label for="his-teachers" class="mr-3">His teachers</label>
            <input type="checkbox" name="" id="his-teachers">
            <br>
            <label for="parents" class="mr-3">Parents</label>
            <input type="checkbox" name="" id="parents">
            <br>
            <label for="situational-changes" class="mr-3">Situational changes</label>
            <input type="checkbox" name="" id="situational-changes">
            <br>
            <h3>e.g., providing more school resources and funding to provide better support for students like Sam)
            </h3>

            <!-- Question 4 -->

            <h3 class="font-medium mt-7"> To what extent do you agree with the following statements? (1= completely
                disagree,
                5 =completely agree)
            </h3>

            <!-- Sub question 1 -->
            <h3>1. Sam is struggling because he does not put enough effort into his schoolwork.
            </h3>
            <div class="w-[460px] m-auto">
                <div class="flex items-center justify-between">
                    <span>
                        <input type="radio" name="sam-struggling-question" value="1" id="q1" />
                        <label for="q1">1</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-struggling-question" value="2" id="q2" />
                        <label for="q2">2</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-struggling-question" value="3" id="q3" />
                        <label for="q3">3</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-struggling-question" value="4" id="q4" />
                        <label for="q4">4</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-struggling-question" value="5" id="q5" />
                        <label for="q5">5</label>
                    </span>
                </div>

                <div class="flex justify-between">
                    <h4 class="text-xs">Completely disagree</h4>
                    <h4 class="text-xs w-36 text-right">Completely agree</h4>
                </div>
            </div>
            <!-- Sub question 2 -->
            <h3>2. Sam’s difficulties are due to differences in his brain function (which impact how he learns). </h3>
            <div class="w-[460px] m-auto">
                <div class="flex items-center justify-between">
                    <span>
                        <input type="radio" name="sam-brain-function-question" value="1" id="r1" />
                        <label for="r1">1</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-brain-function-question" value="2" id="r2" />
                        <label for="r2">2</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-brain-function-question" value="3" id="r3" />
                        <label for="r3">3</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-brain-function-question" value="4" id="r4" />
                        <label for="r4">4</label>
                    </span>
                    <span>
                        <input type="radio" name="sam-brain-function-question" value="5" id="r5" />
                        <label for="r5">5</label>
                    </span>
                </div>

                <div class="flex justify-between">
                    <h4 class="text-xs">Completely disagree</h4>
                    <h4 class="text-xs w-36 text-right">Completely agree</h4>
                </div>
            </div>


            <button>Next</button>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

let currentStep = ref(1)
let userSelectedSam = ref(false)
</script>

<style scoped>
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

.result-box {
    box-shadow: 0px 2px 4px -1px #cbcbcb;
    border: solid 1px rgb(233, 233, 233);
    padding: 30px 40px 40px 40px;
    border-radius: 5px;
    max-width: 420px;
    width: auto;
}

input {
    margin-left: 0px;
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-right: 8px;
}

h3 {
    line-height: 1.75rem;
    font-size: 13px;
}

.result-box-questions {
    box-shadow: 0px 2px 4px -1px #cbcbcb;
    border: solid 1px rgb(233, 233, 233);
    padding: 30px 40px 40px 40px;
    border-radius: 5px;
    max-width: 500px;
    width: auto;
    max-height: 700px;
    overflow: auto;
}
</style>