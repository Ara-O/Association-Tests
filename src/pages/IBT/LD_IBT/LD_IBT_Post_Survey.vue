<template>
  <section
    class="flex items-center justify-center h-screen"
    v-show="currentStep === 1"
  >
    <div class="result-box" style="max-width: 500px">
      <h3 class="font-medium !text-lg">End of the Study!</h3>
      <img
        src="../../../assets/LD_IBT/happy-children.png"
        alt="Happy children illustration"
        class="w-56"
      />
      <h4 class="font-medium">
        Congratulations! You have reached the end of the Implicit Association
        Test.
      </h4>

      <h5 class="leading-6 text-md font-medium">{{ feedbackMessage }}</h5>

      <h3 class="text-sm leading-7">
        Biases are mental shortcuts formed from our experiences. Implicit bias
        or unconscious bias impacts our judgement without our awareness.
        Recognizing these biases is crucial because they can perpetuate societal
        inequalities, lead to emotional distress, and hinder the growth of
        inclusive, supportive communities. It is important to foster
        understanding, empathy, and positive attitudes for the well-being and
        success of individuals with learning difficulties. Explore the
        following:
        <a
          target="_blank"
          href="https://www.ldao.ca/introduction-to-ldsadhd/articles/about-lds/about-learning-disabilities/"
        >
          About Learning Disabilities – Learning Disabilities Association of
          Ontario – LDAO</a
        >
      </h3>

      <button @click="currentStep++">Next</button>
    </div>
  </section>
  <section
    class="flex items-center justify-center h-screen"
    v-show="currentStep === 2"
  >
    <div class="result-box-questions">
      <h3 class="font-medium !text-[15px]">
        Attributions about Learning Difficulties
      </h3>

      <h3 class="text-[13px] leading-7">
        Scenario: Please read the scenario described below and answer the
        questions that follow. There are no right or wrong answers. Please
        answer based on the first thought that comes to your mind.
      </h3>

      <h3
        class="text-[13px] leading-7 border border-solid box-border border-gray-500 p-4"
      >
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

      <!-- First question -->
      <!-- <></div> -->
      <div class="flex ml-0 w-full m-auto gap-x-10 flex-wrap items-center">
        <h3
          class="font-medium w-auto max-w-xs widen-width h-28 flex items-center"
        >
          1. On a scale of 1 (immediately) to 5 (waiting to see how Sam performs
          in the future), how soon do you think Sam’s academic difficulties
          should be addressed at school?
        </h3>

        <div class="w-[60%] appendix-question-1">
          <div class="flex items-center justify-between w-full">
            <span>
              <input
                type="radio"
                value="1"
                id="1"
                v-model="
                  surveyData[
                    'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                  ]
                "
              />
              <label for="1">1</label>
            </span>
            <span>
              <input
                type="radio"
                value="2"
                id="2"
                v-model="
                  surveyData[
                    'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                  ]
                "
              />
              <label for="2">2</label>
            </span>
            <span>
              <input
                type="radio"
                value="3"
                id="3"
                v-model="
                  surveyData[
                    'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                  ]
                "
              />

              <label for="3">3</label>
            </span>
            <span>
              <input
                type="radio"
                value="4"
                id="4"
                v-model="
                  surveyData[
                    'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                  ]
                "
              />

              <label for="4">4</label>
            </span>
            <span>
              <input
                type="radio"
                value="5"
                id="5"
                v-model="
                  surveyData[
                    'On a scale of 1 (immediately) to 5 (waiting to see how Sam performs in the future), how soon do you think Sam’s academic difficulties should be addressed at school?'
                  ]
                "
              />

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
      <h3 class="font-medium">
        2. The following statements are about different things that could be
        contributing to Sam’s academic or learning difficulties; Please rate
        each of these possible options with 1 being-contributing the most to 4-
        contributing the least. Please tick the option that best match(s) your
        opinion, and indicate the extent to which you feel each factor is
        contributing to Sam’s difficulties in learning
      </h3>

      <div>
        <span>
          <input type="checkbox" name="" id="sam" />
          <label for="sam" class="mr-3">Sam</label>
          <input
            type="text"
            placeholder="Extent (1 - 5)"
            class="w-20 text-xs text-center py-0.5"
            v-model="
              surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Sam']
            "
          />
        </span>
        <br />
        <span>
          <input type="checkbox" name="" id="people-around" />
          <label for="people-around" class="mr-3"
            >The people around him (teachers, parents etc)</label
          >
          <input
            type="text"
            placeholder="Extent (1 - 5)"
            class="w-20 text-xs text-center py-0.5"
            v-model="
              surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['The people around him (teachers, parents etc)']
            "
          />
        </span>
        <br />
        <span>
          <input type="checkbox" name="" id="systemic-factors" />
          <label for="systemic-factors" class="mr-3"
            >Systemic factors (education system, health system)</label
          >
          <input
            type="text"
            placeholder="Extent (1 - 5)"
            class="w-20 text-xs text-center py-0.5"
            id="systemic-factors"
            v-model="
              surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['Systemic factors (education system, health system)']
            "
          />
        </span>
        <br />
        <span>
          <input type="checkbox" name="" id="financial-or-academic" />
          <label for="financial-or-academic" class="mr-3"
            >His financial or academic situation</label
          >
          <input
            type="text"
            placeholder="Extent (1 - 5)"
            class="w-20 text-xs text-center py-0.5"
            id="financial-or-academic"
            v-model="
              surveyData[
                'The following statements are about different things that could be contributing to Sam’s academic or learning difficulties; Please rate each of these possible options with 1 being-contributing the most to 4-contributing the least; Please tick the option that best match(s) your opinion, and indicate the extent to which you feel each factor is contributing to Sam’s difficulties in learning'
              ]['His financial or academic situation']
            "
          />
        </span>
        <br />
        <h4 class="text-sm">
          (As an example: lack of school resources that can support Sam’s
          learning)
        </h4>
      </div>

      <!-- Question 3 -->
      <h3 class="font-medium mt-10">
        3. Who or what is more responsible for changing or bringing about an
        improvement in Sam’s situation (Tick all that apply)
      </h3>

      <label for="sam-himself" class="mr-3">Sam himself</label>
      <input
        type="checkbox"
        name="q3"
        value="Sam himself"
        id="sam-himself"
        v-model="
          surveyData[
            'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
          ]
        "
      />
      <br />
      <label for="his-teachers" class="mr-3">His teachers</label>
      <input
        type="checkbox"
        name="q3"
        value="His teachers"
        id="his-teachers"
        v-model="
          surveyData[
            'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
          ]
        "
      />
      <br />
      <label for="parents" class="mr-3">Parents</label>
      <input
        type="checkbox"
        name="q3"
        value="Parents"
        id="parents"
        v-model="
          surveyData[
            'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
          ]
        "
      />
      <br />
      <label for="situational-changes" class="mr-3">Situational changes</label>
      <input
        type="checkbox"
        name=""
        value="Situational changes"
        id="situational-changes"
        v-model="
          surveyData[
            'Who or what is more responsible for changing or bringing about an improvement in Sam’s situation (Tick all that apply)'
          ]
        "
      />
      <br />
      <h3>
        e.g., providing more school resources and funding to provide better
        support for students like Sam)
      </h3>

      <div class="flex gap-5 justify-start">
        <button @click="currentStep--">Back</button>
        <button @click="currentStep++">Next</button>
      </div>
    </div>
  </section>

  <!-- SECTON 3 -->
  <section
    class="flex items-center justify-center h-screen flex-col"
    v-show="currentStep === 3"
  >
    <div class="result-box-questions" style="width: 1000px !important">
      <h3 class="font-medium mt-7">
        To what extent do you agree with the following statements? (1= Strongly
        disagree, 5 = Strongly agree)
      </h3>

      <table>
        <tr class="top-row-numbers-3">
          <td></td>
          <td>Strongly Disagree (1)</td>
          <td>Agree (2)</td>
          <td>Partially Agree/Partially disagree (3)</td>
          <td>Disagree (4)</td>
          <td>Strongly Agree (5)</td>
        </tr>
        <tr>
          <td>
            1. Sam is struggling because he does not put enough effort into his
            schoolwork.
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggling-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling because he does not put enough effort into his schoolwork'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggling-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling because he does not put enough effort into his schoolwork'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggling-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling because he does not put enough effort into his schoolwork'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggling-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling because he does not put enough effort into his schoolwork'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggling-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling because he does not put enough effort into his schoolwork'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            2. Sam’s difficulties are due to differences in his brain function
            (which impact how he learns).
          </td>
          <td>
            <input
              type="radio"
              name="sam-brain-function-question"
              value="1"
              v-model="
                surveyData[
                  'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-brain-function-question"
              value="2"
              v-model="
                surveyData[
                  'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-brain-function-question"
              value="3"
              v-model="
                surveyData[
                  'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-brain-function-question"
              value="4"
              v-model="
                surveyData[
                  'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-brain-function-question"
              value="5"
              v-model="
                surveyData[
                  'Sam’s difficulties are due to differences in his brain function (which impact how he learns)'
                ]
              "
            />
          </td>
        </tr>
        <tr class="text-xs">
          <td>
            3. Sam is struggling because his family lacks the necessary
            financial and material resources to succeed
          </td>
          <td>
            <input
              type="radio"
              name="sam-financial-struggle-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-financial-struggle-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-financial-struggle-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-financial-struggle-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-financial-struggle-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling because his family lacks the necessary financial and material resources to succeed'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            4. Sam is struggling at school because of the bad deeds he engaged
            in during his past life which impact him negatively now (bad karma).
          </td>
          <td>
            <input
              type="radio"
              name="sam-bad-deeds-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-bad-deeds-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-bad-deeds-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-bad-deeds-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-bad-deeds-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling at school because of the bad deeds he engaged in during his past life which impact him negatively now (bad karma)'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            5. Sam is struggling because his teachers do not give him enough
            academic support
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggle-teachers-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggle-teachers-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggle-teachers-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggle-teachers-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-struggle-teachers-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers do not give him enough academic support'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            6. Sam is struggling because his parents do not give him enough
            academic support
          </td>
          <td>
            <input
              type="radio"
              name="sam-no-academic-support-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling because his parents do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-no-academic-support-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling because his parents do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-no-academic-support-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling because his parents do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-no-academic-support-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling because his parents do not give him enough academic support'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-no-academic-support-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling because his parents do not give him enough academic support'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            7. Sam is struggling because his teachers are unable to adapt their
            teaching style and methods to meet the different learning needs of
            their students
          </td>
          <td>
            <input
              type="radio"
              name="sam-unable-to-adapt-question"
              value="1"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-unable-to-adapt-question"
              value="2"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-unable-to-adapt-question"
              value="3"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-unable-to-adapt-question"
              value="4"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-unable-to-adapt-question"
              value="5"
              v-model="
                surveyData[
                  'Sam is struggling because his teachers are unable to adapt their teaching style and methods to meet the different learning needs of their students'
                ]
              "
            />
          </td>
        </tr>
        <tr>
          <td>
            8. All children are not made the same way in terms of their mental
            abilities and capacity to learn; Sam is struggling because it is the
            Will of God
          </td>
          <td>
            <input
              type="radio"
              name="sam-will-of-god-question"
              value="1"
              v-model="
                surveyData[
                  'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-will-of-god-question"
              value="2"
              v-model="
                surveyData[
                  'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-will-of-god-question"
              value="3"
              v-model="
                surveyData[
                  'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-will-of-god-question"
              value="4"
              v-model="
                surveyData[
                  'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
                ]
              "
            />
          </td>
          <td>
            <input
              type="radio"
              name="sam-will-of-god-question"
              value="5"
              v-model="
                surveyData[
                  'All children are not made the same way in terms of their mental abilities and capacity to learn; Sam is struggling because it is the Will of God'
                ]
              "
            />
          </td>
        </tr>
      </table>
      <div class="flex gap-5 justify-start">
        <button @click="currentStep--">Back</button>
        <button @click="currentStep++">Next</button>
      </div>
    </div>
  </section>

  <!-- Question section 4 -->
  <section
    class="flex items-center justify-center h-screen"
    v-show="currentStep === 4"
  >
    <div class="result-box-questions">
      <h3 class="font-medium">
        9. What other reasons might be contributing to Sam’s difficulty in
        achieving better at school in comparison with his peers?
      </h3>
      <textarea
        class="h-32 resize-none border border-solid border-gray-400 w-full text-sm box-border p-3"
        id=""
        cols="30"
        rows="10"
        v-model="
          surveyData[
            '9. What other reasons might be contributing to Sam’s difficulty in achieving better at school in comparison with his peers?'
          ]
        "
      ></textarea>
      <h3 class="font-medium">
        10. If Sam’s parents come to you as a friend to ask about what they
        should do to help their child with his academic work what would you
        advise them?
      </h3>
      <textarea
        v-model="
          surveyData[
            'If Sam’s parents come to you as a friend to ask about what they should do to help their child with his academic work what would you advise them?'
          ]
        "
        class="h-32 border resize-none border-solid border-gray-400 w-full text-sm box-border p-3"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <div class="flex gap-5 justify-start">
        <button @click="currentStep--">Back</button>
        <button @click="currentStep++">Next</button>
      </div>
    </div>
  </section>

  <!-- Question 5 - Appendix 4 -->
  <section
    class="flex items-center justify-center h-screen"
    v-show="currentStep === 5"
  >
    <div class="result-box-questions">
      <h3 class="font-medium !text-[16px]">Appendix 4</h3>
      <h4 class="text-[14px]">
        First Impressions Assessment Scale for Observers
      </h4>
      <h5 class="leading-7">
        <span class="underline">Task instructions: </span> You will be viewing
        brief video clips of people talking about themselves. You will then be
        asked to give your first impressions of that person on a number of
        characteristics by giving a rating from strongly agree to strongly
        disagree. Please watch the entire video before giving your ratings, and
        try to respond as quickly and honestly as possible.
      </h5>
      <h5 class="underline">After participants view each video:</h5>
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
          <td>
            <input
              type="radio"
              :name="question.inputName"
              value="Strongly Agree"
              v-model="surveyData[question.inputName]"
            />
          </td>
          <td>
            <input
              type="radio"
              :name="question.inputName"
              value="Agree"
              v-model="surveyData[question.inputName]"
            />
          </td>
          <td>
            <input
              type="radio"
              :name="question.inputName"
              value="Disagree"
              v-model="surveyData[question.inputName]"
            />
          </td>
          <td>
            <input
              type="radio"
              :name="question.inputName"
              value="Strongly Disagree"
              v-model="surveyData[question.inputName]"
            />
          </td>
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
  <section
    class="flex items-center justify-center h-screen"
    v-show="currentStep === 6"
  >
    <div class="result-box-questions result-box-questions-last !max-w-[1000px]">
      <h3 class="font-medium !text-[16px]">
        Appendix 5 Parents and School Survey
      </h3>
      <h5 class="leading-7">
        Below are several statements. Please read them and circle the answer
        that best describes how much you agree with the statement. It is most
        helpful if you try to answer honestly and accurately. This information
        helps us plan how to make the program as helpful to parents as possible.
      </h5>

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
            <input
              type="radio"
              :name="question.inputName"
              class="!mr-0"
              value="Strongly Agree"
              v-model="surveyData[question.inputName]"
            />
            <label :for="question.inputName" class="mt-0"></label>
          </td>
          <td>
            <input
              type="radio"
              :name="question.inputName"
              value="Agree"
              class="!mr-0"
              v-model="surveyData[question.inputName]"
            />
            <label class="mt-0"></label>
          </td>
          <td>
            <input
              type="radio"
              value="Partially Agree/Partially Disagree"
              class="!mr-0"
              :name="question.inputName"
              v-model="surveyData[question.inputName]"
            />
            <label class="mt-0"></label>
          </td>
          <td>
            <input
              type="radio"
              value="Disagree"
              :name="question.inputName"
              class="!mr-0"
              v-model="surveyData[question.inputName]"
            />
            <label class="mt-0"></label>
          </td>
          <td>
            <input
              type="radio"
              value="Strongly Disagree"
              :name="question.inputName"
              class="!mr-0"
              v-model="surveyData[question.inputName]"
            />
            <label class="mt-0"></label>
          </td>
          <br />
        </tr>
        <tr></tr>
      </table>

      <h5 class="leading-7">
        How much do the following issues impact your involvement in your child’s
        academic work at home or in school?
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
              <input
                value="A lot"
                type="radio"
                :name="question.inputName"
                v-model="surveyData[question.inputName]"
              />
            </td>
            <td class="!w-32">
              <input
                value="Some"
                type="radio"
                :name="question.inputName"
                v-model="surveyData[question.inputName]"
              />
            </td>
            <td class="!w-32">
              <input
                value="Not an Issue"
                type="radio"
                :name="question.inputName"
                v-model="surveyData[question.inputName]"
              />
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>

      <h5>If Other, Please specify</h5>
      <input type="text" v-model="surveyData['Specified Engagement Issue']" />
      <!--  -->
      <div class="flex gap-5 justify-start">
        <button @click="currentStep--">Back</button>
        <button @click="finishTest">Finish test!</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
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
          .querySelector(".top-row-numbers")
          .classList.add("fixed-top-section");
      } else {
        document
          .querySelector(".top-row-numbers")
          .classList.remove("fixed-top-section");
      }
    });
});

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
    [],
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
    inputName: "Engagement Issue: Timing of Programs ",
  },
  {
    question: "Small Children",
    inputName: "Engagement Issue: Lack of Time",
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
    inputName: "I feel very comfortable visiting my child’s school.",
  },
  {
    question:
      "My child’s schoolwork is always displayed in our home (e.g., hang papers on the refrigerator).",
    inputName:
      "My child’s schoolwork is always displayed in our home (e.g., hang papers on the refrigerator).",
  },
  {
    question:
      "If my child misbehaved at school, I would know about it soon afterward.",
    inputName:
      "If my child misbehaved at school, I would know about it soon afterward.",
  },
  {
    question:
      "I frequently explain difficult ideas to my child when she/he doesn’t understand.",
    inputName:
      "I frequently explain difficult ideas to my child when she/he doesn’t understand.",
  },
  {
    question:
      "Every time my child does something well at school, I compliment him/her.",
    inputName:
      "Every time my child does something well at school, I compliment him/her.",
  },
  {
    question: "Talking with my child’s principal makes me uncomfortable.",
    inputName: "Talking with my child’s principal makes me uncomfortable.",
  },
  {
    question: "I always know how well my child is doing in school.",
    inputName: "I always know how well my child is doing in school.",
  },
  {
    question: "I am confused about my legal rights as a parent.",
    inputName: "I am confused about my legal rights as a parent.",
  },
  {
    question:
      "I read to my child every day/I encourage my child to read every day.",
    inputName:
      "I read to my child every day/I encourage my child to read every day.",
  },
  {
    question: "I talk with other parents frequently about educational issues.",
    inputName: "I talk with other parents frequently about educational issues.",
  },
  {
    question:
      "My child attends community programs (e.g:YMCA, park/rec, community theatre, religious institutes)",
    inputName:
      "My child attends community programs (e.g:YMCA, park/rec, community theatre, religious institutes)",
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
      "I have made suggestions to my child’s teachers about how to help my child learn.",
  },
  {
    question: "There are many children’s books in our house.",
    inputName: "There are many children’s books in our house.",
  },
  {
    question:
      "In the past 12 months I have attended several times activities at my child’s school (e.g., fun nights performances, awards nights).",
    inputName:
      "In the past 12 months I have attended several times activities at my child’s school (e.g., fun nights performances, awards nights).",
  },
  {
    question: "My child misses’ school several days each semester.",
    inputName: "My child misses’ school several days each semester.",
  },
  {
    question:
      "Talking with my child’s current teacher makes me somewhat uncomfortable.",
    inputName:
      "Talking with my child’s current teacher makes me somewhat uncomfortable.",
  },
  {
    question: "I don’t understand the assignments my child brings home.",
    inputName: "I don’t understand the assignments my child brings home.",
  },
  {
    question: "Reading books is a regular activity in our home.  ",
    inputName: "Reading books is a regular activity in our home.  ",
  },
  {
    question:
      "If my child was having trouble at school, I would not know how to get extra help for him / her.",
    inputName:
      "If my child was having trouble at school, I would not know how to get extra help for him / her.",
  },
  {
    question: "I am familiar with the Canadian laws governing schools well.",
    inputName: "I am familiar with the Canadian laws governing schools well.",
  },
  {
    question: "In the past 12 months I attended several school board meetings.",
    inputName:
      "In the past 12 months I attended several school board meetings.",
  },
  {
    question:
      "In the past 12 months I volunteered at my child’s school at least 3 times.",
    inputName:
      "In the past 12 months I volunteered at my child’s school at least 3 times.",
  },
  {
    question:
      "I know about many programs for youth in my community. (As an example, Heritage Language schools)",
    inputName:
      "I know about many programs for youth in my community. (As an example, Heritage Language schools)",
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
  if (!store.state.uid) {
    userId = Math.floor(Math.random() * 10000);
    store.commit("changeUserID", userId);
  } else {
    userId = store.state.uid;
  }

  storeLDPostSurveyData(store, userId, surveyData.value);
  router.push("/home");
}

let feedbackMessage = ref("");
onMounted(() => {
  let data = store.state.ld_data;
  console.log(data);

  if (data.length === 0) {
    router.push("/LD_IBT_Survey");
  } else {
    // Smiley + without learning difficulty
    let congruent = data[1];
    // Smiley + with learning difficulty
    let incongruent = data[3];

    let congruentAccuracy = 0;
    let congruentSpeed = 0;

    console.log("Congruend data", congruent);
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

td {
  font-size: 13px;
  height: 36px;
  width: 90px;
  line-height: 24px;
  padding: 3px 4px;
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

.fixed-top-section {
  position: fixed;
  top: 49px;
  left: 51%;
  transform: translate(-50%, -50%);
  width: 68%;
  max-width: 943px;
  text-align: center;
  min-width: 944px;
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

@media (max-width: 801px) {
  .widen-width {
    width: 100%;
    max-width: none;
  }

  .appendix-question-1 {
    width: 100%;
  }
}
</style>
