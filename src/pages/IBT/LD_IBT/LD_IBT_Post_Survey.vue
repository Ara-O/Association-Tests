<template>
  <!-- PART C -->
  <section class="flex items-center justify-center h-screen" v-show="currentStep === 1">
    <div class="result-box-questions result-box-q-1">
      <h3 class="font-semibold !text-[15px]">
        Post-task Survey
      </h3>
      <h3 class="font-semibold !text-[14px]">
        Attributions about Learning Difficulties - PART C
      </h3>

      <h3 class="text-[13px] leading-7 font-medium">
        Scenario: Please read the scenario described below and answer the
        questions that follow. There are no right or wrong answers. Please
        answer based on the first thought that comes to your mind.
      </h3>

      <h3 class="text-[13px] leading-7 font-medium border border-solid box-border border-gray-500 p-4">
        Sam is a 9-year-old boy who is currently in Grade 4 in a Public School
        in suburban Ontario. Up until Grade 3, Sam was scoring slightly below
        average to average in almost all his classes but now his grades are
        slipping. He works slowly on assignments but is a hard worker. His
        teacher asks him to complete shorter assignments than his classmates and
        he gets more time on tests than his classmates. In general, he is unable
        to complete assignments on his own. When the teacher has time to sit
        down with him and talk him through the work, Sam is able to work through
        the task. His reading is slow and labored. Sam’s parents are very
        concerned about their son, especially because he is trying hard to
        achieve but is often frustrated with himself. They often meet Sam’s
        teacher/s to get feedback about his performance in the class.
      </h3>

      <form @submit.prevent="currentStep++"
        class="shadow-none text-left flex flex-col justify-center items-start border-none max-w-none p-0 max-h-none min-h-0 w-auto">
        <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
          <h3 class="font-medium w-auto max-w-xs widen-width flex items-center bg-green-100">
            1. On a scale of 1 (immediately) to 5 (waiting to see how Sam
            performs in the future), how soon do you think Sam’s academic
            difficulties should be addressed at school?
          </h3>

          <div class="w-[60%] appendix-question-1">
            <div class="flex items-center justify-between w-full">
              <span>
                <input type="radio" value="1" id="1" name="q1" v-model="surveyData[
                  'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                ]
                  " required />
                <label for="1">1</label>
              </span>
              <span>
                <input type="radio" value="2" id="2" name="q1" v-model="surveyData[
                  'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                ]
                  " required />
                <label for="2">2</label>
              </span>
              <span>
                <input type="radio" value="3" id="3" name="q1" v-model="surveyData[
                  'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                ]
                  " required />

                <label for="3">3</label>
              </span>
              <span>
                <input type="radio" value="4" id="4" name="q1" v-model="surveyData[
                  'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                ]
                  " required />

                <label for="4">4</label>
              </span>
              <span>
                <input type="radio" value="5" id="5" name="q1" v-model="surveyData[
                  'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                ]
                  " required />

                <label for="5">5</label>
              </span>
            </div>
            <div class="flex justify-between">
              <h4 class="text-xs">Immediately</h4>
              <h4 class="text-xs w-28 text-right">
                Wait to see how Sam performs in the future
              </h4>
            </div>
          </div>
        </div>

        <!-- Question 2 -->
        <h3 class="font-medium mb-0 bg-green-100">
          2. The following statements are about different things that could be
          contributing to Sam’s academic or learning difficulties; Please rate
          each of these possible options with
          <span class="bg-blue-100">1 being-contributing the least</span> to
          <span class="bg-blue-100">4-contributing the most</span>. Please tick
          the option that best match(s) your opinion, and indicate the extent to
          which you feel each factor is contributing to Sam’s difficulties in
          learning
        </h3>


        <table class="border-collapse text-left mt-6">
          <tr class="questions-1-top">
            <td>Questions</td>
            <td class="w-32">1 - Contributes the Least</td>
            <td>2</td>
            <td>3</td>
            <td>4 - Contributes the Most</td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>
              <input type="radio" name="least" value="1" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Sam']
                " required />
            </td>
            <td>
              <input type="radio" value="2" name="second" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Sam']
                " required />
            </td>
            <td>
              <input type="radio" value="3" name="third" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Sam']
                " required />
            </td>
            <td>
              <input type="radio" value="4" name="most" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Sam']
                " required />
            </td>
          </tr>
          <!-- --- -->
          <tr>
            <td>The people around him (teachers, parents etc)</td>
            <td>
              <input type="radio" name="least" value="1" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['The people around him (teachers, parents etc)']
                " required />
            </td>
            <td>
              <input type="radio" value="2" name="second" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['The people around him (teachers, parents etc)']
                " required />
            </td>
            <td>
              <input type="radio" value="3" name="third" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['The people around him (teachers, parents etc)']
                " required />
            </td>
            <td>
              <input type="radio" value="4" name="most" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['The people around him (teachers, parents etc)']
                " required />
            </td>
          </tr>

          <!-- -- -->
          <tr>
            <td>Systemic factors (education system, health system)</td>
            <td>
              <input type="radio" name="least" value="1" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Systemic factors (education system, health system)']
                " required />
            </td>
            <td>
              <input type="radio" value="2" name="second" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Systemic factors (education system, health system)']
                " required />
            </td>
            <td>
              <input type="radio" value="3" name="third" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Systemic factors (education system, health system)']
                " required />
            </td>
            <td>
              <input type="radio" value="4" name="most" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Systemic factors (education system, health system)']
                " required />
            </td>
          </tr>

          <!-- -- -->
          <tr>
            <td>
              His financial or academic situation (As an example: lack of school
              resources that can support Sam's learning)
            </td>
            <td>
              <input type="radio" name="least" value="1" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['His financial or academic situation']
                " required />
            </td>
            <td>
              <input type="radio" value="2" name="second" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['His financial or academic situation']
                " required />
            </td>
            <td>
              <input type="radio" value="3" name="third" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['His financial or academic situation']
                " required />
            </td>
            <td>
              <input type="radio" value="4" name="most" id="systemic-factors" v-model="surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['His financial or academic situation']
                " required />
            </td>
          </tr>
        </table>

        <!-- Question 3 -->
        <h3 class="font-medium mt-10 mb-0 bg-green-100">
          3. Who or what is more responsible for changing or bringing about an
          improvement in Sam’s situation (Tick all that apply)
        </h3>

        <table class="mt-5">
          <tr class="top-row-numbers-3">
            <td>Rank</td>
            <td>1 (Least responsible)</td>
            <td>2</td>
            <td>3</td>
            <td>4 (Most responsible)</td>
          </tr>
          <tr>
            <td>Sam himself</td>
            <td>
              <input type="radio" name="sam-1" value="1" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Sam himself']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-2" value="2" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Sam himself']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-3" value="3" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Sam himself']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-4" value="4" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Sam himself']
                " required />
            </td>
          </tr>
          <tr>
            <td>His teachers</td>
            <td>
              <input type="radio" name="sam-1" value="1" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['His teachers']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-2" value="2" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['His teachers']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-3" value="3" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['His teachers']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-4" value="4" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['His teachers']
                " required />
            </td>
          </tr>
          <tr>
            <td>Parents</td>
            <td>
              <input type="radio" name="sam-1" value="1" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Parents']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-2" value="2" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Parents']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-3" value="3" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Parents']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-4" value="4" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Parents']
                " required />
            </td>
          </tr>
          <tr>
            <td>
              Situational changes (e.g providing more school resources and
              funding to provide better support for students like Sam)
            </td>
            <td>
              <input type="radio" name="sam-1" value="1" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Situational Changes']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-2" value="2" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Situational Changes']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-3" value="3" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Situational Changes']
                " required />
            </td>
            <td>
              <input type="radio" name="sam-4" value="4" v-model="surveyData[
                'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
              ]['Situational Changes']
                " required />
            </td>
          </tr>
        </table>

        <br />

        <div class="flex gap-5 justify-start">
          <button @click="currentStep--" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  </section>

  <!-- NEXT SECTION -->

  <!-- SECTON 3 -->
  <section class="flex items-center justify-center h-screen flex-col" v-show="currentStep === 2">
    <div class="result-box-questions result-box-questions-2 sam-table">
      <h3 class="font-medium mt-7 bg-green-100">
        To what extent do you agree with the following statements? (1= Strongly
        disagree, 5 = Strongly agree)
      </h3>

      <table class="invisible-part-2 !mr-0">
        <tr class="top-row-numbers-3 questions-2-top questions-1-top-fix">
          <td></td>
          <td>Strongly Disagree (1)</td>
          <td>Agree (2)</td>
          <td>Partially Agree/Partially disagree (3)</td>
          <td>Disagree (4)</td>
          <td>Strongly Agree (5)</td>
        </tr>
      </table>
      <form @submit.prevent="currentStep++"
        class="shadow-none text-left flex justify-start border-none max-w-none p-0 max-h-none min-h-0 w-auto">
        <table>
          <tr class="top-row-numbers-3 questions-2-top">
            <td></td>
            <td>Strongly Disagree (1)</td>
            <td>Agree (2)</td>
            <td>Partially Agree/Partially disagree (3)</td>
            <td>Disagree (4)</td>
            <td>Strongly Agree (5)</td>
          </tr>
          <tr>
            <td>
              1. Sam is struggling because he does not put enough effort into
              his schoolwork.
            </td>
            <td>
              <input type="radio" name="sam-struggling-question" value="1" v-model="surveyData[
                'Sam is struggling because he does not put enough effort into his schoolwork'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggling-question" value="2" v-model="surveyData[
                'Sam is struggling because he does not put enough effort into his schoolwork'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggling-question" value="3" v-model="surveyData[
                'Sam is struggling because he does not put enough effort into his schoolwork'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggling-question" value="4" v-model="surveyData[
                'Sam is struggling because he does not put enough effort into his schoolwork'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggling-question" value="5" v-model="surveyData[
                'Sam is struggling because he does not put enough effort into his schoolwork'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              2. Sam’s difficulties are due to differences in his brain function
              (which impact how he learns).
            </td>
            <td>
              <input type="radio" name="sam-brain-function-question" value="1" v-model="surveyData[
                'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-brain-function-question" value="2" v-model="surveyData[
                'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-brain-function-question" value="3" v-model="surveyData[
                'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-brain-function-question" value="4" v-model="surveyData[
                'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-brain-function-question" value="5" v-model="surveyData[
                'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
              ]
                " required />
            </td>
          </tr>
          <tr class="text-xs">
            <td>
              3. Sam is struggling because his family lacks the necessary
              financial and material resources to succeed
            </td>
            <td>
              <input type="radio" name="sam-financial-struggle-question" value="1" v-model="surveyData[
                'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-financial-struggle-question" value="2" v-model="surveyData[
                'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-financial-struggle-question" value="3" v-model="surveyData[
                'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-financial-struggle-question" value="4" v-model="surveyData[
                'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-financial-struggle-question" value="5" v-model="surveyData[
                'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              4. Sam is struggling at school because of the bad deeds he engaged
              in during his past life which impact him negatively now (bad
              karma).
            </td>
            <td>
              <input type="radio" name="sam-bad-deeds-question" value="1" v-model="surveyData[
                'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-bad-deeds-question" value="2" v-model="surveyData[
                'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-bad-deeds-question" value="3" v-model="surveyData[
                'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-bad-deeds-question" value="4" v-model="surveyData[
                'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-bad-deeds-question" value="5" v-model="surveyData[
                'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              5. Sam is struggling because his teachers do not give him enough
              academic support
            </td>
            <td>
              <input type="radio" name="sam-struggle-teachers-question" value="1" v-model="surveyData[
                'Sam is struggling because his teachers do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggle-teachers-question" value="2" v-model="surveyData[
                'Sam is struggling because his teachers do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggle-teachers-question" value="3" v-model="surveyData[
                'Sam is struggling because his teachers do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggle-teachers-question" value="4" v-model="surveyData[
                'Sam is struggling because his teachers do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-struggle-teachers-question" value="5" v-model="surveyData[
                'Sam is struggling because his teachers do not give him enough academic support'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              6. Sam is struggling because his parents do not give him enough
              academic support
            </td>
            <td>
              <input type="radio" name="sam-no-academic-support-question" value="1" v-model="surveyData[
                'Sam is struggling because his parents do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-no-academic-support-question" value="2" v-model="surveyData[
                'Sam is struggling because his parents do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-no-academic-support-question" value="3" v-model="surveyData[
                'Sam is struggling because his parents do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-no-academic-support-question" value="4" v-model="surveyData[
                'Sam is struggling because his parents do not give him enough academic support'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-no-academic-support-question" value="5" v-model="surveyData[
                'Sam is struggling because his parents do not give him enough academic support'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              7. Sam is struggling because his teachers are unable to adapt
              their teaching style and methods to meet the different learning
              needs of their students
            </td>
            <td>
              <input type="radio" name="sam-unable-to-adapt-question" value="1" v-model="surveyData[
                'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-unable-to-adapt-question" value="2" v-model="surveyData[
                'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-unable-to-adapt-question" value="3" v-model="surveyData[
                'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-unable-to-adapt-question" value="4" v-model="surveyData[
                'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-unable-to-adapt-question" value="5" v-model="surveyData[
                'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
              ]
                " required />
            </td>
          </tr>
          <tr>
            <td>
              8. All children are not made the same way in terms of their mental
              abilities and capacity to learn; Sam is struggling because it is
              the Will of God
            </td>
            <td>
              <input type="radio" name="sam-will-of-god-question" value="1" v-model="surveyData[
                'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-will-of-god-question" value="2" v-model="surveyData[
                'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-will-of-god-question" value="3" v-model="surveyData[
                'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-will-of-god-question" value="4" v-model="surveyData[
                'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
              ]
                " required />
            </td>
            <td>
              <input type="radio" name="sam-will-of-god-question" value="5" v-model="surveyData[
                'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
              ]
                " required />
            </td>
          </tr>
        </table>
        <div class="flex gap-5 justify-start">
          <button @click="currentStep--" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  </section>

  <!-- Question section 4 -->
  <section class="flex items-center justify-center h-screen" v-show="currentStep === 3">
    <form @submit.prevent="currentStep++"
      class="shadow-none text-left flex justify-start border-none max-w-none p-0 max-h-none min-h-0 w-auto">
      <div class="result-box-questions">
        <h3 class="font-medium bg-green-100">
          9. What other reasons might be contributing to Sam’s difficulty in
          achieving better at school in comparison with his peers?
        </h3>
        <textarea class="h-32 text-sm resize-none border border-solid border-gray-300 w-full box-border p-3" id=""
          cols="30" rows="10" v-model="surveyData[
            'What other reasons might be contributing to Sam’s difficulty in achieving better at school in comparison with his peers?'
          ]
            " placeholder="Type here" required></textarea>
        <h3 class="font-medium bg-green-100">
          10. If Sam’s parents come to you as a friend to ask about what they
          should do to help their child with his academic work what would you
          advise them?
        </h3>
        <textarea v-model="surveyData[
          'If Sam’s parents come to you as a friend to ask about what they should do to help their child with his academic work what would you advise them?'
        ]
          " class="h-32 border resize-none border-solid border-gray-300 w-full text-sm box-border p-3" id="" cols="30"
          rows="10" placeholder="Type here" required></textarea>
        <br />
        <div class="flex gap-5 justify-start">
          <button @click="currentStep--" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  </section>

  <!-- Question 5 - Appendix 4 -->
  <section class="flex items-center justify-center h-screen" v-show="currentStep === 5">
    <div class="result-box-questions">
      <h3 class="font-semibold !text-[16px]">Appendix 5 - PART E</h3>
      <h4 class="text-[14px]">
        First Impressions Assessment Scale for Observers
      </h4>
      <h5 class="leading-7">
        <span class="underline">Task instructions: </span> Please watch the
        video clip shown below. A set of questions will follow which will ask you to give your first impression of the
        person in the video clip. Please watch the entire video clip before answering the questions and try to respond and
        quickly and honestly as possible."
      </h5>
      <div class="youtube-container">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/0XHsbdHxqgk?si=W_tZ37uhELt97tmj&amp;controls=0" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <h5 class="underline">After participants view each video:</h5>
      <h5 class="bg-green-100">Please indicate your rating</h5>
      <form @submit.prevent="finishTest"
        class="shadow-none text-left flex flex-col items-start justify-start border-none max-w-none p-0 max-h-none min-h-0 w-auto">
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
            <td>
              <input type="radio" :name="question.inputName" value="Strongly Agree"
                v-model="surveyData[question.inputName]" required />
            </td>
            <td>
              <input type="radio" :name="question.inputName" value="Agree" v-model="surveyData[question.inputName]"
                required />
            </td>
            <td>
              <input type="radio" :name="question.inputName" value="Disagree" v-model="surveyData[question.inputName]"
                required />
            </td>
            <td>
              <input type="radio" :name="question.inputName" value="Strongly Disagree"
                v-model="surveyData[question.inputName]" required />
            </td>
          </tr>
        </table>

        <div class="flex gap-5 justify-start">
          <button @click="currentStep--" type="button">Back</button>
          <button type="submit">Finish Survey</button>
        </div>


      </form>
    </div>
  </section>

  <!-- Secion 6 -->
  <section class="flex items-center justify-center h-screen" v-show="currentStep === 4">
    <div class="result-box-questions result-box-questions-last !max-w-[1000px]">
      <h3 class="!text-[16px] font-semibold">
        Appendix 4 Parents and School Survey - PART D
      </h3>
      <h5 class="leading-7 font-bold">
        Imagine Sam is your child and answer the questions given below.
        <br class="mb-2" />
        Below are several statements. Please read them and circle the answer
        that best describes how much you agree with the statement. It is most
        helpful if you try to answer honestly and accurately. This information
        helps us plan how to make the program as helpful to parents as possible.
      </h5>
      <table class="absolute top-10 !border-none mr-[40px]">
        <tr class="top-row-numbers-fixed-top !border-none border-collapse hidden">
          <td class="!w-[27.9rem]"></td>
          <td class="!w-[97.5px]">Strongly Agree (1)</td>
          <td class="!w-[94px]">Agree (2)</td>
          <td class="!w-[98px]">Partially Agree/Partially disagree (3)</td>
          <td class="!w-[98px]">Disagree (4)</td>
          <td class="!w-[99px]">Strongly Disagree (5)</td>
        </tr>
      </table>

      <form @submit.prevent="currentStep++"
        class="shadow-none text-left flex flex-col items-start justify-start border-none max-w-none p-0 max-h-none min-h-0 w-auto">
        <table>
          <tr class="top-row-numbers">
            <td></td>
            <td>Strongly Agree (1)</td>
            <td>Agree (2)</td>
            <td>Partially Agree/Partially disagree (3)</td>
            <td>Disagree (4)</td>
            <td>Strongly Disagree (5)</td>
          </tr>
          <tr v-for="(question, index) in questionsAppendix5">
            <td class="!w-[32rem] text-left">{{ question.question }}</td>
            <td>
              <input type="radio" :name="question.inputName" class="!mr-0" value="Strongly Agree"
                v-model="surveyData[question.inputName]" required />
              <label :for="question.inputName" class="mt-0"></label>
            </td>
            <td>
              <input type="radio" :name="question.inputName" value="Agree" class="!mr-0"
                v-model="surveyData[question.inputName]" required />
              <label class="mt-0"></label>
            </td>
            <td>
              <input type="radio" value="Partially Agree/Partially Disagree" class="!mr-0" :name="question.inputName"
                v-model="surveyData[question.inputName]" required />
              <label class="mt-0"></label>
            </td>
            <td>
              <input type="radio" value="Disagree" :name="question.inputName" class="!mr-0"
                v-model="surveyData[question.inputName]" required />
              <label class="mt-0"></label>
            </td>
            <td>
              <input type="radio" value="Strongly Disagree" :name="question.inputName" class="!mr-0"
                v-model="surveyData[question.inputName]" required />
              <label class="mt-0"></label>
            </td>
            <br />
          </tr>
          <tr></tr>
        </table>

        <h5 class="leading-7 bg-green-100">
          How much do the following issues impact your involvement in your
          child’s academic work at home or in school?
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
              <td class="!w-32">
                <input value="A lot" type="radio" :name="question.inputName" v-model="surveyData[question.inputName]"
                  required />
              </td>
              <td class="!w-32">
                <input value="Some" type="radio" :name="question.inputName" v-model="surveyData[question.inputName]"
                  required />
              </td>
              <td class="!w-32">
                <input value="Not an Issue" type="radio" :name="question.inputName"
                  v-model="surveyData[question.inputName]" required />
              </td>
            </tr>
            <tr></tr>
          </table>
        </div>

        <h5>If Other, Please specify</h5>
        <input type="text" v-model="surveyData['Specified Engagement Issue']" />
        <!--  -->
        <div class="flex gap-5 justify-start">
          <button @click="currentStep--" type="button">Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  </section>

  <section class="flex items-center justify-center h-screen" v-show="currentStep === 6">
    <div class="result-box text-left" style="max-width: 500px">
      <h3 class="font-medium !text-lg">End of the Study!</h3>
      <img src="../../../assets/LD_IBT/happy-children.png" alt="Happy children illustration" class="w-56" />
      <h4 class="font-medium leading-7">
        Congratulations! You have reached the end of the Implicit Bias
        Task.
      </h4>

      <h5 class="leading-7 text-md font-medium">{{ feedbackMessage }}</h5>

      <h3 class="text-sm leading-7">
        Bias is a prejudice or preference towards or against a person, group, thing, idea or belief.
        Implicit bias or unconscious bias impacts our judgement without our awareness.
        Recognizing the biases that we may have is crucial because such biases can perpetuate societal
        inequalities, lead to emotional distress, and hinder the growth of
        inclusive, supportive communities. It is important to foster
        understanding, empathy, and positive attitudes for the well-being and
        success of individuals with or without learning difficulties. Explore the
        following:
        <a target="_blank"
          href="https://www.ldao.ca/introduction-to-ldsadhd/articles/about-lds/about-learning-disabilities/">
          About Learning Disabilities – Learning Disabilities Association of
          Ontario – LDAO</a>
      </h3>

      <button @click="router.push('/home')">Go Home</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeLDPostSurveyData } from "../../../modules/storingData/storingDataLD";
import { useStore } from "vuex";

let currentStep = ref(1);
const store = useStore();
const router = useRouter();
let otherEngagementIssue = ref("");

onMounted(() => {
  document
    .querySelector(".result-box-questions-last")
    .addEventListener("scroll", () => {
      if (
        document.querySelector(".result-box-questions-last").scrollTop >= 180
      ) {
        document
          .querySelector(".top-row-numbers-fixed-top").classList.add("vis")
        // .classList.add("fixed-top-section");
      } else {
        document.querySelector(".top-row-numbers-fixed-top").classList.remove("vis")
        // document
        //   .querySelector(".top-row-numbers")
        //   .classList.remove("fixed-top-section");
      }
    });

  // questions-1-top-fix
  document
    .querySelector(".result-box-q-1").addEventListener("scroll", () => {
      if (
        document.querySelector(".result-box-q-1").scrollTop >= 690
      ) {
        document
          .querySelector(".questions-1-top")
          .classList.add("questions-1-top-fix");
      } else if (document.querySelector(".result-box-q-1").scrollTop < 640) {
        document
          .querySelector(".questions-1-top")
          .classList.remove("questions-1-top-fix");
      }
    })

  document
    .querySelector(".result-box-questions-2").addEventListener("scroll", () => {

      // console.log(document.querySelector(".result-box-questions-2").scrollTop)
      if (
        document.querySelector(".result-box-questions-2").scrollTop >= 180
      ) {
        // console.log("cris")
        document
          .querySelector(".invisible-part-2")
          .classList.add("vis");
      } else {
        document
          .querySelector(".invisible-part-2")
          .classList.remove("vis");
      }
    })
})

let surveyData = ref({
  "On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?":
    "",
  "The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning":
  {
    Sam: "",
    "Systemic factors (education system, health system)": "",
    "The people around him (teachers, parents etc)": "",
    "His financial or academic situation": "",
  },
  "Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)":
    {},
  "Sam is struggling because he does not put enough effort into his schoolwork":
    "",
  "Sam’s difficulties are due to differences in his brain function (which impact how he learns)":
    "",
  "Sam is struggling because his family lacks the necessary financial and material resources to succeed":
    "",
  "Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)":
    "",
  "Sam is struggling because his teachers do not give him enough academic support":
    "",
  "Sam is struggling because his parents do not give him enough academic support":
    "",
  "Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students":
    "",
  "All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God":
    "",
  "What other reasons might be contributing to Sam’s difficulty in achieving better at school in comparison with his peers?":
    "",
  "If Sam’s parents come to you as a friend to ask about what they should do to help their child with his academic work what would you advise them?":
    "",
});

let questionsAppendixFinal = ref([
  {
    question: "Lack of Time",
    inputName: "Engagement Issue: Lack of Time",
  },
  {
    question: "Timing of Programs",
    inputName: "Engagement Issue: Timing of Programs",
  },
  {
    question: "Small Children",
    inputName: "Engagement Issue: Small Children",
  },
  {
    question: "Transportation",
    inputName: "Engagement Issue: Transportation",
  },
  {
    question: "Work Schedule",
    inputName: "Engagement Issue: Work Schedule",
  },
  {
    question: "Other",
    inputName: "Engagement Issue: Other",
  },
]);

let questionsAppendix5 = ref([
  {
    question: "I feel very comfortable visiting my child’s school.",
    inputName: "I feel very comfortable visiting my child’s school",
  },
  {
    question:
      "My child’s schoolwork is always displayed in our home (e.g., hang papers on the refrigerator).",
    inputName:
      "My child’s schoolwork is always displayed in our home (for example, hang papers on the refrigerator)",
  },
  {
    question:
      "If my child misbehaved at school, I would know about it soon afterward.",
    inputName:
      "If my child misbehaved at school, I would know about it soon afterward",
  },
  {
    question:
      "I frequently explain difficult ideas to my child when she/he doesn’t understand.",
    inputName:
      "I frequently explain difficult ideas to my child when she or he doesn’t understand",
  },
  {
    question:
      "Every time my child does something well at school, I compliment him/her.",
    inputName:
      "Every time my child does something well at school, I compliment him or her",
  },
  {
    question: "Talking with my child’s principal makes me uncomfortable.",
    inputName: "Talking with my child’s principal makes me uncomfortable",
  },
  {
    question: "I always know how well my child is doing in school.",
    inputName: "I always know how well my child is doing in school",
  },
  {
    question: "I am confused about my legal rights as a parent.",
    inputName: "I am confused about my legal rights as a parent",
  },
  {
    question:
      "I read to my child every day/I encourage my child to read every day.",
    inputName:
      "I read to my child every day or I encourage my child to read every day",
  },
  {
    question: "I talk with other parents frequently about educational issues.",
    inputName: "I talk with other parents frequently about educational issues",
  },
  {
    question:
      "My child attends community programs (e.g:YMCA, park/rec, community theatre, religious institutes)",
    inputName:
      "My child attends community programs (for example, YMCA, park or rec, community theatre, religious institutes)",
  },
  {
    question:
      "I have visited my child’s classroom several times in the past year",
    inputName:
      "I have visited my child’s classroom several times in the past year",
  },
  {
    question:
      "I have made suggestions to my child’s teachers about how to help my child learn.",
    inputName:
      "I have made suggestions to my child’s teachers about how to help my child learn",
  },
  {
    question: "There are many children’s books in our house.",
    inputName: "There are many children’s books in our house",
  },
  {
    question:
      "In the past 12 months I have attended several times activities at my child’s school (e.g., fun nights performances, awards nights).",
    inputName:
      "In the past 12 months I have attended several times activities at my child’s school (for example, fun nights performances, awards nights)",
  },
  {
    question: "My child misses’ school several days each semester.",
    inputName: "My child misses’ school several days each semester",
  },
  {
    question:
      "Talking with my child’s current teacher makes me somewhat uncomfortable.",
    inputName:
      "Talking with my child’s current teacher makes me somewhat uncomfortable",
  },
  {
    question: "I don’t understand the assignments my child brings home.",
    inputName: "I don’t understand the assignments my child brings home",
  },
  {
    question: "Reading books is a regular activity in our home.",
    inputName: "Reading books is a regular activity in our home",
  },
  {
    question:
      "If my child was having trouble at school, I would not know how to get extra help for him / her.",
    inputName:
      "If my child was having trouble at school, I would not know how to get extra help for him or her",
  },
  {
    question: "I am familiar with the Canadian laws governing schools well.",
    inputName: "I am familiar with the Canadian laws governing schools well",
  },
  {
    question: "In the past 12 months I attended several school board meetings.",
    inputName:
      "In the past 12 months I attended several school board meetings",
  },
  {
    question:
      "In the past 12 months I volunteered at my child’s school at least 3 times.",
    inputName:
      "In the past 12 months I volunteered at my child’s school at least 3 times",
  },
  {
    question:
      "I know about many programs for youth in my community. (As an example, Heritage Language schools)",
    inputName:
      "I know about many programs for youth in my community; (As an example, Heritage Language schools)",
  },
]);

let questions = ref([
  {
    question: "This person is socially awkward",
    inputName: "thisPersonIsSociallyAwkward",
  },
  {
    question: "This person is attractive",
    inputName: "thisPersonIsAttractive",
  },
  {
    question: "This person is trustworthy/honest",
    inputName: "thisPersonIsHonest",
  },
  {
    question: "This person is assertive",
    inputName: "thisPersonIsAssertive",
  },
  {
    question: "This person is likeable",
    inputName: "thisPersonIsLikeable",
  },
  {
    question: "This person is intelligent",
    inputName: "thisPersonIsIntelligent",
  },
  {
    question: "I would hang out with this person in my free time",
    inputName: "userWouldHangOutWithPersonInFreeTime",
  },
  {
    question: "I wouldn’t like it if I had to live near this person",
    inputName: "userWouldNotLikeToLiveNearThisPerson",
  },
  {
    question: "I would be uncomfortable sitting next to this person",
    inputName: "userIsComfortableSittingNextToThisPerson",
  },
  {
    question: "I would start a conversation with this person",
    inputName: "userWouldStartAConversation",
  },
]);

function finishTest() {
  let userId;
  if (String(store.state.uid).length === 0) {
    userId = Math.floor(Math.random() * 10000);
    store.commit("changeUserID", userId);
  } else {
    userId = store.state.uid;
  }

  storeLDPostSurveyData(store, userId, surveyData.value);
  currentStep.value++
}

let feedbackMessage = ref("");

onMounted(() => {
  let data = store.state.ld_data;

  if (data.length === 0) {
    // TODO: Uncomment here
    router.push("/LD_IBT_Consent_Form");
  } else {
    // Happy + without learning difficulty
    let congruent = data[1];
    // Happy + with learning difficulty
    let incongruent = data[3];

    if (congruent.length === 0 || incongruent.length === 0) {
      alert(
        "There was an error with your test, please try again. Note: Your test data has already been stored"
      );
      router.push("/LD_IBT_Survey");
    }

    let congruentAccuracy = 0;
    let congruentSpeed = 0;

    congruent.forEach((data) => {
      congruentAccuracy += data?.accuracy || 0;
      congruentSpeed += data?.reactionTime || 0;
    });

    let incongruentAccuracy = 0;
    let incongruentSpeed = 0;
    incongruent.forEach((data) => {
      incongruentAccuracy += data?.accuracy || 0;
      incongruentSpeed += data?.reactionTime || 0;
    });

    congruentAccuracy /= congruent.length;
    congruentSpeed /= congruent.length;
    incongruentAccuracy /= incongruent.length;
    incongruentSpeed /= incongruent.length;

    // console.log("ACC, SPEED", congruentAccuracy, congruentSpeed)
    // console.log("ACC, SPEED", incongruentAccuracy, incongruentSpeed)

    // Measuring results based on accuracy
    if (congruentAccuracy > incongruentAccuracy) {
      feedbackMessage.value = `You view people without learning difficulties in a positive manner
                therefore, you have more positive bias towards individuals without learning difficulties.`;
    } else if (congruentAccuracy < incongruentAccuracy) {
      feedbackMessage.value = `You view people with learning difficulties in a positive manner
                therefore, you have more positive bias towards individuals with learning difficulties.`;
    } else {
      feedbackMessage.value = `You view people without learning difficulties in an equal manner as you view people with learning difficulties. You do not have any biases towards either group.`;
    }
  }
});
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

.ytp-cued-thumbnail-overlay-image {
  display: none;
}

.youtube-container {
  overflow: hidden;
  width: 100%;
  /* Keep it the right aspect-ratio */
  aspect-ratio: 16/9;
  /* No clicking/hover effects */
  pointer-events: none;
}

.youtube-container iframe {
  pointer-events: all;
  /* Extend it beyond the viewport... */
  width: 300%;
  height: 100%;
  /* ...and bring it back again */
  margin-left: -100%;
}

td {
  font-size: 13px;
  height: 36px;
  width: 90px;
  line-height: 24px;
  padding: 3px 4px;
}

.sam-table {
  width: 1000px !important
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
  text-align: center;
}

/* Alternate row colors */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: white;
}

td:nth-child(1) {
  width: 250px;
}

td {
  width: 50%;
  /* width: 100px; */
}

/* Hover effect on rows */
tr:hover {
  background-color: #ddd;
}

.invisible-part-2 {
  display: none;
  margin-left: -1px
}

.fixed-top-section {
  position: fixed;
  top: 49px;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 68%;
  max-width: 943px;
  text-align: center;
  min-width: 944px;
}

.top-row-numbers.fixed-top-section td {
  border: none;
}

.vis {
  display: block;
}

.questions-1-top-fix {
  position: fixed;
  top: 3.7%;
  margin-right: 40px;
  max-width: 1000px;

}

@media (max-width: 1052px) {
  .fixed-top-section {
    min-width: 86%;
  }
}

@media (max-width: 1015px) {
  .appendix-question-1 {
    width: 50%;
  }
}

@media (max-width: 1100px) {
  .result-box-questions-2 {
    width: auto !important;
    overflow: auto;
  }
}

@media (max-width: 801px) {
  .widen-width {
    width: 100%;
    max-width: none;
  }

  .appendix-question-1 {
    width: 100%;
  }


}

table {
  border: solid 1px;
  border-collapse: collapse;
}

table td {
  padding: 5px;
  font-size: 13.5px;
  border: solid 1px;
  width: 105px;
}
</style>
