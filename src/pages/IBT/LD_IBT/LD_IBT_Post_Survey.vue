<template>
    <section class="flex items-center justify-center h-screen" v-if="currentStep === 1">
        <div class="result-box" style="max-width: 500px">
            <h3 class="font-medium !text-lg">End of the Test</h3>
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
                <a target="_blank"
                    href="https://www.ldao.ca/introduction-to-ldsadhd/articles/about-lds/about-learning-disabilities/">
                    About
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
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center"> 1. On a scale of 1 (immediately)
                    to 5 (waiting to see
                    how Sam
                    performs in the
                    future), how
                    soon do you think
                    Sam’s academic difficulties should be addressed at school?</h3>

                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between w-full ">
                        <span>
                            <input type="radio" value="1" id="1"
                                v-model="surveyData['1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?']" />
                            <label for="1">1</label>
                        </span>
                        <span>
                            <input type="radio" value="2" id="2"
                                v-model="surveyData['1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?']" />
                            <label for="2">2</label>
                        </span>
                        <span>
                            <input type="radio" value="3" id="3"
                                v-model="surveyData['1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?']" />

                            <label for="3">3</label>
                        </span>
                        <span>
                            <input type="radio" value="4" id="4"
                                v-model="surveyData['1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?']" />

                            <label for="4">4</label>
                        </span>
                        <span>
                            <input type="radio" value="5" id="5"
                                v-model="surveyData['1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?']" />

                            <label for="5">5</label>
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <h4 class="text-xs">Immediately</h4>
                        <h4 class="text-xs w-28 text-right">Wait to see how Sam performs in the future</h4>
                    </div>
                </div>

            </div>

            <!-- Question 2 -->
            <h3 class="font-medium"> 2. The following statements are about different things that could be contributing to
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
                        v-model="surveyData['2. The following statements are about different things that could be contributing to Sam’s academic/learning difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least. Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning.']['Sam']">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="people-around">
                    <label for="people-around" class="mr-3">The people around him (teachers, parents etc.)</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        v-model="surveyData['2. The following statements are about different things that could be contributing to Sam’s academic/learning difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least. Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning.']['The people around him (teachers, parents etc.)']">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="systemic-factors">
                    <label for="systemic-factors" class="mr-3">Systemic factors (education system, health system)</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        id="systemic-factors"
                        v-model="surveyData['2. The following statements are about different things that could be contributing to Sam’s academic/learning difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least. Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning.']['Systemic factors (education system, health system)']">
                </span>
                <br>
                <span>
                    <input type="checkbox" name="" id="financial-or-academic">
                    <label for="financial-or-academic" class="mr-3">His financial/academic situation</label>
                    <input type="text" placeholder="Extent (1 - 5)" class="w-20 text-xs text-center py-0.5"
                        id="financial-or-academic"
                        v-model="surveyData['2. The following statements are about different things that could be contributing to Sam’s academic/learning difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least. Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning.']['His financial/academic situation']">
                </span>
                <br>
                <h4 class="text-sm">(As an example: lack of school resources that can support Sam’s learning)
                </h4>
            </div>

            <!-- Question 3 -->
            <h3 class="font-medium mt-10">3. Who or what is more responsible for changing or bringing about an improvement
                in Sam’s situation (Tick all that apply)</h3>

            <label for="sam-himself" class="mr-3">Sam himself</label>
            <input type="checkbox" name="q3" value="Sam himself" id="sam-himself"
                v-model="surveyData['3. Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)']">
            <br>
            <label for="his-teachers" class="mr-3">His teachers</label>
            <input type="checkbox" name="q3" value="His teachers" id="his-teachers"
                v-model="surveyData['3. Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)']">
            <br>
            <label for="parents" class="mr-3">Parents</label>
            <input type="checkbox" name="q3" value="Parents" id="parents"
                v-model="surveyData['3. Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)']">
            <br>
            <label for="situational-changes" class="mr-3">Situational changes</label>
            <input type="checkbox" name="" value="Situational changes" id="situational-changes"
                v-model="surveyData['3. Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)']">
            <br>
            <h3>e.g., providing more school resources and funding to provide better support for students like Sam)
            </h3>

            <!-- Question 4 -->

            <h3 class="font-medium mt-7"> To what extent do you agree with the following statements? (1= completely
                disagree,
                5 =completely agree)
            </h3>

            <!-- <hr class="bg-gray-200 w-96 ml-0 my-8 mb-3 text-white"> -->
            <!-- Sub question 1 -->

            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">1. Sam is struggling because he
                    does not put enough
                    effort into his schoolwork.
                </h3>

                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-struggling-question" value="1" id="q1"
                                v-model="surveyData['1. Sam is struggling because he does not put enough effort into his schoolwork.']" />
                            <label for="q1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggling-question" value="2" id="q2"
                                v-model="surveyData['1. Sam is struggling because he does not put enough effort into his schoolwork.']" />
                            <label for="q2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggling-question" value="3" id="q3"
                                v-model="surveyData['1. Sam is struggling because he does not put enough effort into his schoolwork.']" />
                            <label for="q3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggling-question" value="4" id="q4"
                                v-model="surveyData['1. Sam is struggling because he does not put enough effort into his schoolwork.']" />
                            <label for="q4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggling-question" value="5" id="q5"
                                v-model="surveyData['1. Sam is struggling because he does not put enough effort into his schoolwork.']" />
                            <label for="q5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">

            <!-- Sub question 2 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">2. Sam’s difficulties are due to
                    differences in his
                    brain function (which impact how he learns).</h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-brain-function-question" value="1" id="r1"
                                v-model="surveyData['2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).']" />
                            <label for="r1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-brain-function-question" value="2" id="r2"
                                v-model="surveyData['2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).']" />
                            <label for="r2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-brain-function-question" value="3" id="r3"
                                v-model="surveyData['2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).']" />
                            <label for="r3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-brain-function-question" value="4" id="r4"
                                v-model="surveyData['2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).']" />
                            <label for="r4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-brain-function-question" value="5" id="r5"
                                v-model="surveyData['2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).']" />
                            <label for="r5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>

            <div class="flex gap-5 justify-start">
                <button @click="currentStep--">Back</button>
                <button @click="currentStep++">Next</button>
            </div>
        </div>
    </section>


    <!-- SECTON 3 -->
    <section class="flex items-center justify-center h-screen " v-if="currentStep === 3">
        <div class="result-box-questions" style="width: 1000px !important">
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">3. Sam is struggling because his
                    family lacks the
                    necessary financial and material
                    resources to succeed.
                </h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-financial-struggle-question" value="1" id="s1"
                                v-model="surveyData['3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.']" />
                            <label for="s1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-financial-struggle-question" value="2" id="s2"
                                v-model="surveyData['3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.']" />
                            <label for="s2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-financial-struggle-question" value="3" id="s3"
                                v-model="surveyData['3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.']" />
                            <label for="s3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-financial-struggle-question" value="4" id="s4"
                                v-model="surveyData['3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.']" />
                            <label for="s4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-financial-struggle-question" value="5" id="s5"
                                v-model="surveyData['3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.']" />
                            <label for="s5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">
            <!-- Question 4 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">4. Sam is struggling at school
                    because of the bad deeds
                    he
                    engaged in during his past
                    life which impact him
                    negatively now (bad karma).</h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-bad-deeds-question" value="1" id="t1"
                                v-model="surveyData['4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).']" />
                            <label for="t1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-bad-deeds-question" value="2" id="t2"
                                v-model="surveyData['4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).']" />
                            <label for="t2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-bad-deeds-question" value="3" id="t3"
                                v-model="surveyData['4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).']" />
                            <label for="t3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-bad-deeds-question" value="4" id="t4"
                                v-model="surveyData['4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).']" />
                            <label for="t4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-bad-deeds-question" value="5" id="t5"
                                v-model="surveyData['4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).']" />
                            <label for="t5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">
            <!-- Question 5 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">5. Sam is struggling because his
                    teachers do not give
                    him enough academic support.
                </h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-struggle-teachers-question" value="1" id="u1"
                                v-model="surveyData['5. Sam is struggling because his teachers do not give him enough academic support.']" />
                            <label for="u1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggle-teachers-question" value="2" id="u2"
                                v-model="surveyData['5. Sam is struggling because his teachers do not give him enough academic support.']" />
                            <label for="u2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggle-teachers-question" value="3" id="u3"
                                v-model="surveyData['5. Sam is struggling because his teachers do not give him enough academic support.']" />
                            <label for="u3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggle-teachers-question" value="4" id="u4"
                                v-model="surveyData['5. Sam is struggling because his teachers do not give him enough academic support.']" />
                            <label for="u4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-struggle-teachers-question" value="5" id="u5"
                                v-model="surveyData['5. Sam is struggling because his teachers do not give him enough academic support.']" />
                            <label for="u5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">
            <!-- Question 6 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">6. Sam is struggling because his
                    parents do not give him
                    enough academic support.
                </h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-no-academic-support-question" value="1" id="v1"
                                v-model="surveyData['6. Sam is struggling because his parents do not give him enough academic support.']" />
                            <label for="v1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-no-academic-support-question" value="2" id="v2"
                                v-model="surveyData['6. Sam is struggling because his parents do not give him enough academic support.']" />
                            <label for="v2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-no-academic-support-question" value="3" id="v3"
                                v-model="surveyData['6. Sam is struggling because his parents do not give him enough academic support.']" />
                            <label for="v3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-no-academic-support-question" value="4" id="v4"
                                v-model="surveyData['6. Sam is struggling because his parents do not give him enough academic support.']" />
                            <label for="v4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-no-academic-support-question" value="5" id="v5"
                                v-model="surveyData['6. Sam is struggling because his parents do not give him enough academic support.']" />
                            <label for="v5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">
            <!-- Question 7 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">7. Sam is struggling because his
                    teachers are unable to
                    adapt their teaching style
                    and
                    methods to meet the
                    different learning needs of their students.</h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-unable-to-adapt-question" value="1" id="w1"
                                v-model="surveyData['7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.']" />
                            <label for="w1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-unable-to-adapt-question" value="2" id="w2"
                                v-model="surveyData['7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.']" />
                            <label for="w2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-unable-to-adapt-question" value="3" id="w3"
                                v-model="surveyData['7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.']" />
                            <label for="w3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-unable-to-adapt-question" value="4" id="w4"
                                v-model="surveyData['7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.']" />
                            <label for="w4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-unable-to-adapt-question" value="5" id="w5"
                                v-model="surveyData['7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.']" />
                            <label for="w5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>
            <hr class="h-[1px] border-none bg-gray-400">
            <!-- Question 8 -->
            <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
                <h3 class="font-medium w-auto max-w-xs widen-width h-28 flex items-center">8. All children are not made the
                    same way in terms of
                    their
                    mental abilities and
                    capacity
                    to learn. Sam is struggling because it is the Will of God.</h3>
                <div class="w-[60%] appendix-question-1">
                    <div class="flex items-center justify-between">
                        <span>
                            <input type="radio" name="sam-will-of-god-question" value="1" id="x1"
                                v-model="surveyData['8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.']" />
                            <label for="x1">1</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-will-of-god-question" value="2" id="x2"
                                v-model="surveyData['8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.']" />
                            <label for="x2">2</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-will-of-god-question" value="3" id="x3"
                                v-model="surveyData['8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.']" />
                            <label for="x3">3</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-will-of-god-question" value="4" id="x4"
                                v-model="surveyData['8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.']" />
                            <label for="x4">4</label>
                        </span>
                        <span>
                            <input type="radio" name="sam-will-of-god-question" value="5" id="x5"
                                v-model="surveyData['8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.']" />
                            <label for="x5">5</label>
                        </span>
                    </div>

                    <div class="flex justify-between">
                        <h4 class="text-xs w-16 my-3 leading-5">Completely disagree</h4>
                        <h4 class="text-xs w-16 my-3 leading-5 text-right">Completely agree</h4>
                    </div>
                </div>
            </div>


            <div class="flex gap-5 justify-start">
                <button @click="currentStep--">Back</button>
                <button @click="currentStep++">Next</button>
            </div>
        </div>
    </section>

    <!-- Question section 4 -->
    <section class="flex items-center justify-center h-screen " v-if="currentStep === 4">
        <div class="result-box-questions ">
            <h3 class="font-medium">9. What other reasons might be contributing to Sam’s difficulty in achieving better at
                school in comparison with his peers? </h3>
            <textarea class="h-32 resize-none border border-solid border-gray-400 w-full text-sm box-border p-3" id=""
                cols="30" rows="10"
                v-model="surveyData['9. What other reasons might be contributing to Sam’s difficulty in achieving better at school in comparison with his peers?']"></textarea>
            <h3 class="font-medium">
                10. If Sam’s parents come to you as a friend to ask about what they should do to help their child with his
                academic work what would you advise them?
            </h3>
            <textarea
                v-model="surveyData['10. If Sam’s parents come to you as a friend to ask about what they should do to help their child with his academic work what would you advise them?']"
                class="h-32 border resize-none border-solid border-gray-400 w-full text-sm box-border p-3" id="" cols="30"
                rows="10"></textarea>
            <br>
            <div class="flex gap-5 justify-start">
                <button @click="currentStep--">Back</button>
                <button @click="currentStep++">Next</button>
            </div>
        </div>
    </section>

    <!-- Question 5 - Appendix 4 -->
    <section class="flex items-center justify-center h-screen " v-if="currentStep === 5">
        <div class="result-box-questions ">
            <h3 class="font-medium !text-[16px]">Appendix 4</h3>
            <h4 class="text-[14px]">First Impressions Assessment Scale for Observers</h4>
            <h5 class="leading-7">
                <span class="underline">Task instructions: </span> You will be viewing brief video clips of people talking
                about themselves. You will then
                be asked to give your first impressions of that person on a number of characteristics by giving a rating
                from strongly agree to strongly disagree. Please watch the entire video before giving your ratings, and try
                to respond as quickly and honestly as possible.
            </h5>
            <h5 class="underline">After participants view each video: </h5>
            <h5>Please indicate your rating</h5>
            <table>
                <tr>
                    <td></td>
                    <td>Strongly Agree (1)</td>
                    <td>Agree (2)</td>
                    <td>Disagree (3)</td>
                    <td>Strongly Disagree (4)</td>
                </tr>
                <tr v-for="question in questions">
                    <td class="!w-52 pr-10">{{ question.question }}</td>
                    <td><input type="radio" :name="question.inputName" value="Strongly Agree"
                            v-model="surveyData[question.inputName]"></td>
                    <td><input type="radio" :name="question.inputName" value="Agree"
                            v-model="surveyData[question.inputName]"></td>
                    <td><input type="radio" :name="question.inputName" value="Disagree"
                            v-model="surveyData[question.inputName]"></td>
                    <td><input type="radio" :name="question.inputName" value="Strongly Disagree"
                            v-model="surveyData[question.inputName]"></td>
                </tr>
                <tr></tr>
            </table>
            <div class="flex gap-5 justify-start">
                <button @click="currentStep--">Back</button>
                <button @click="currentStep++">Next</button>
            </div>
        </div>
    </section>

    <!-- Secion 6 -->
    <section class="flex items-center justify-center h-screen " v-if="currentStep === 6">
        <div class="result-box-questions !max-w-[1000px]">
            <h3 class="font-medium !text-[16px]">Appendix 5 Parents and School Survey</h3>
            <h5 class="leading-7">Below are several statements. Please read them and circle the answer that best describes
                how much you agree
                with the statement. It is most helpful if you try to answer honestly and accurately. This information helps
                us plan how to make the program as helpful to parents as possible.</h5>

            <table>
                <tr>
                    <td></td>
                    <td>Strongly Agree (1)</td>
                    <td>Agree (2)</td>
                    <td>Partially Agree/Partially disagree (3)</td>
                    <td>Disagree (4)</td>
                    <td>Strongly Disagree (5)</td>
                </tr>
                <tr v-for="(question, index) in questionsAppendix5">
                    <td class="!w-[32rem] text-left">{{ question.question }}</td>
                    <td> <input type="radio" :name="question.inputName" value="Strongly Agree"
                            v-model="surveyData[question.inputName]">
                        <label :for="question.inputName" class="mt-0">1</label>
                    </td>
                    <td> <input type="radio" value="Agree" :name="question.inputName"
                            v-model="surveyData[question.inputName]">
                        <label :for="i + question.inputName" class="mt-0">2</label>
                    </td>
                    <td> <input type="radio" value="Partially Agree/Partially Disagree" :name="question.inputName"
                            v-model="surveyData[question.inputName]">
                        <label :for="i + question.inputName" class="mt-0">3</label>
                    </td>
                    <td> <input type="radio" value="Disagree" :name="question.inputName"
                            v-model="surveyData[question.inputName]">
                        <label :for="i + question.inputName" class="mt-0">4</label>
                    </td>
                    <td> <input type="radio" value="Strongly Disagree" :name="question.inputName"
                            v-model="surveyData[question.inputName]">
                        <label :for="i + question.inputName" class="mt-0">5</label>
                    </td>
                    <br>
                </tr>
                <tr></tr>
            </table>

            <h5 class="leading-7">Below are several statements. Please read them and circle the answer that best describes
                How difficult do the following issues make involvement with your child’s school?
            </h5>

            <div class="flex justify-start">

                <table>
                    <tr>
                        <td></td>
                        <td>A lot</td>
                        <td>Some</td>
                        <td>Not an Issue</td>
                    </tr>
                    <tr v-for="(question, index) in questionsAppendixFinal">
                        <td class="!w-52">{{ question.question }}</td>
                        <td v-for="i in 3" class="!w-32"> <input type="radio" :id="i + question.inputName"
                                :name="question.inputName" v-model="question.inputName">
                            <label :for="i + question.inputName" class="mt-0">{{ i }}</label>
                        </td>
                    </tr>
                    <tr></tr>
                </table>
            </div>

            <h5>If Other, Please specify</h5>
            <input type="text">
            <!--  -->
            <div class="flex gap-5 justify-center">
                <button @click="currentStep--">Back</button>
                <router-link to="/home"><button>Finish test!</button></router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

let currentStep = ref(1)
let userSelectedSam = ref(false)

let surveyData = ref({
    "1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?": "",
    "2. The following statements are about different things that could be contributing to Sam’s academic/learning difficulties. Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least. Please tick the option/s that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning.": {
        "Sam": "",
        "Systemic factors (education system, health system)": "",
        "The people around him (teachers, parents etc.)": "",
        "His financial/academic situation": "",
    },
    "3. Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)": [],
    "1. Sam is struggling because he does not put enough effort into his schoolwork.": "",
    "2. Sam’s difficulties are due to differences in his brain function (which impact how he learns).": "",
    "3. Sam is struggling because his family lacks the necessary financial and material resources to succeed.": "",
    "4. Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma).": "",
    "5. Sam is struggling because his teachers do not give him enough academic support.": "",
    "6. Sam is struggling because his parents do not give him enough academic support.": "",
    "7. Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students.": "",
    "8. All children are not made the same way in terms of their mental abilities and capacity to learn. Sam is struggling because it is the Will of God.": "",
    "9. What other reasons might be contributing to Sam’s difficulty in achieving better at school in comparison with his peers?": "",
    "10. If Sam’s parents come to you as a friend to ask about what they should do to help their child with his academic work what would you advise them?": "",

})

let questionsAppendixFinal = ref([
    {
        question: "Lack of Time",
        inputName: "sth"
    },
    {
        question: "Timing of Programs",
        inputName: "sth"
    },
    {
        question: "Small Children",
        inputName: "sth"
    },
    {
        question: "Transportation",
        inputName: "sth"
    },
    {
        question: "Work Schedule",
        inputName: "sth"
    },
    {
        question: "Other",
        inputName: "sth"
    },
])

let questionsAppendix5 = ref([
    {
        question: "I feel very comfortable visiting my child’s school.",
        inputName: "I feel very comfortable visiting my child’s school."
    },
    {
        question: "My child’s schoolwork is always displayed in our home (e.g., hang papers on the refrigerator).",
        inputName: "My child’s schoolwork is always displayed in our home (e.g., hang papers on the refrigerator)."
    },
    {
        question: "If my child misbehaved at school, I would know about it soon afterward.",
        inputName: "If my child misbehaved at school, I would know about it soon afterward."
    },
    {
        question: "I frequently explain difficult ideas to my child when she/he doesn’t understand.",
        inputName: "I frequently explain difficult ideas to my child when she/he doesn’t understand."
    },
    {
        question: "Every time my child does something well at school, I compliment him/her.",
        inputName: "Every time my child does something well at school, I compliment him/her."
    },
    {
        question: "Talking with my child’s principal makes me uncomfortable.",
        inputName: "Talking with my child’s principal makes me uncomfortable."
    },
    {
        question: "I always know how well my child is doing in school.",
        inputName: "I always know how well my child is doing in school."
    },
    {
        question: "I am confused about my legal rights as a parent.",
        inputName: "I am confused about my legal rights as a parent."
    },
    {
        question: "I read to my child every day/I encourage my child to read every day.",
        inputName: "I read to my child every day/I encourage my child to read every day."
    },
    {
        question: "I talk with other parents frequently about educational issues.",
        inputName: "I talk with other parents frequently about educational issues."
    },
    {
        question: "My child attends community programs (e.g:YMCA, park/rec, community theatre, religious institutes)",
        inputName: "My child attends community programs (e.g:YMCA, park/rec, community theatre, religious institutes)"
    },
    {
        question: "I have visited my child’s classroom several times in the past year",
        inputName: "I have visited my child’s classroom several times in the past year"
    },
    {
        question: "I have made suggestions to my child’s teachers about how to help my child learn.",
        inputName: "I have made suggestions to my child’s teachers about how to help my child learn."
    },
    {
        question: "There are many children’s books in our house.",
        inputName: "There are many children’s books in our house."
    },
    {
        question: "In the past 12 months I have attended several times activities at my child’s school (e.g., fun nights performances, awards nights).",
        inputName: "In the past 12 months I have attended several times activities at my child’s school (e.g., fun nights performances, awards nights)."
    },
    {
        question: "My child misses’ school several days each semester.",
        inputName: "My child misses’ school several days each semester."
    },
    {
        question: "Talking with my child’s current teacher makes me somewhat uncomfortable.",
        inputName: "Talking with my child’s current teacher makes me somewhat uncomfortable."
    },
    {
        question: "I don’t understand the assignments my child brings home.",
        inputName: "I don’t understand the assignments my child brings home."
    },
    {
        question: "Reading books is a regular activity in our home.  ",
        inputName: "Reading books is a regular activity in our home.  "
    },
    {
        question: "If my child was having trouble at school, I would not know how to get extra help for him / her.",
        inputName: "If my child was having trouble at school, I would not know how to get extra help for him / her."
    },
    {
        question: "I am familiar with the Canadian laws governing schools well.",
        inputName: "I am familiar with the Canadian laws governing schools well."
    },
    {
        question: "In the past 12 months I attended several school board meetings.",
        inputName: "In the past 12 months I attended several school board meetings."
    },
    {
        question: "In the past 12 months I volunteered at my child’s school at least 3 times.",
        inputName: "In the past 12 months I volunteered at my child’s school at least 3 times."
    },
    {
        question: "I know about many programs for youth in my community. (As an example, Heritage Language schools)",
        inputName: "I know about many programs for youth in my community. (As an example, Heritage Language schools)"
    },
])

let questions = ref([
    {
        question: "This person is socially awkward",
        inputName: "thisPersonIsSociallyAwkward"
    },
    {
        question: "This person is attractive",
        inputName: "thisPersonIsAttractive"
    },
    {
        question: "This person is trustworthy/honest",
        inputName: "thisPersonIsHonest"
    },
    {
        question: "This person is assertive",
        inputName: "thisPersonIsAssertive"
    },
    {
        question: "This person is likeable",
        inputName: "thisPersonIsLikeable"
    },
    {
        question: "This person is intelligent",
        inputName: "thisPersonIsIntelligent"
    },
    {
        question: "I would hang out with this person in my free time",
        inputName: "userWouldHangOutWithPersonInFreeTime"
    },
    {
        question: "I wouldn’t like it if I had to live near this person",
        inputName: "userWouldNotLikeToLiveNearThisPerson"
    },
    {
        question: "I would be uncomfortable sitting next to this person",
        inputName: "userIsComfortableSittingNextToThisPerson"
    },
    {
        question: "I would start a conversation with this person",
        inputName: "userWouldStartAConversation"
    },
])
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
    max-width: 800px;
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

td {
    font-size: 13px;
    height: 36px;
    width: 90px;
    line-height: 24px;
}

.result-box-questions {
    box-shadow: 0px 2px 4px -1px #cbcbcb;
    border: solid 1px rgb(233, 233, 233);
    padding: 30px 40px 40px 40px;
    border-radius: 5px;
    max-width: 1000px;
    width: auto;
    max-height: 700px;
    text-align: left;
    overflow: auto;
}

table {
    border: solid 1px #cfcfcf;
    border-radius: 5px;
}

/* Alternate row colors */
tr:nth-child(even) {
    background-color: #f2f2f2;
}

td:not(:nth-child(1)) {
    max-width: 200px;
    width: 10%;
    text-align: center;
}

/* Hover effect on rows */
tr:hover {
    background-color: #ddd;
}

@media (max-width:1015px) {
    .appendix-question-1 {
        width: 50%
    }


}

@media (max-width:801px) {
    .widen-width {
        width: 100%;
        max-width: none;
    }

    .appendix-question-1 {
        width: 100%
    }
}
</style>