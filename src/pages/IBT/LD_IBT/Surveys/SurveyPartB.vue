<template>
  <section
    class="shadow-md w-full max-w-[1100px] mb-32 border border-solid border-gray-100 py-7 px-10 rounded-md text-sm box-border">
    <h3 class="font-semibold text-lg">PART B - Background Form</h3>
    <h4 class="font-medium text-sm">Please answer the following questions</h4>
    <form @submit.prevent="emits('continue')"
      class="max-h-none max-w-none flex flex-col items-left p-0 items-start justify-start border-none shadow-none">
      <span class="flex flex-wrap items-center gap-3">
        <label for="spouse-highest-education-level" class="font-medium mb-0 mt-0 bg-green-100">8. What is your spouse's
          highest educational level</label>
        <select id="spouse-highest-education-level" v-model="surveyData.spouseHighestEduLvl"
          class="mt-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]" required>
          <!-- <option value="Some school">Some school</option> -->
          <option
            value="Completed high school diploma and a professional qualification not from a college or university">
            Completed high school diploma and a professional qualification not
            from a college or university.
          </option>
          <option value="Completed a college diploma">
            Completed a college diploma.
          </option>
          <option value="Completed an undergraduate university degree">
            Completed an undergraduate university degree.
          </option>
          <option value="Completed one or more graduate degrees (Masters/or Ph.D.)">
            Completed one or more graduate degrees (Masters/or Ph.D.).
          </option>
          <option value="Other (please specify)">Other (please specify)</option>
        </select>
      </span>

      <input type="text"
        class="rounded-md border mt-4 border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
        v-if="surveyData.spouseHighestEduLvl === 'Other (please specify)'" placeholder="Specify here"
        v-model="surveyData.spouseHighestEduLvlOther" />

      <span class="mt-5 flex flex-wrap items-center gap-3">
        <label for="occupation" class="mb-0 mt-0 font-medium bg-green-100">
          9. What is your occupation in Canada?
        </label>
        <input type="text" id="occupation"
          class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
          v-model="surveyData.usrOccupInCanada" placeholder="Enter Occupation" required />
      </span>

      <div class="flex flex-wrap items-center gap-3 mt-5">
        <label for="occupation-2" class="font-medium bg-green-100 mt-0">
          If you are a new Canadian and were employed before immigrating to
          Canada, please indicate your occupation in your former country
        </label>
        <input type="text" id="occupation-2"
          class="mt-7 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
          placeholder="Enter Occupation" v-model="surveyData.usrOccupInFormerCountry" />
      </div>

      <span class="flex flex-wrap items-center gap-3 mt-5 mb-1.5">
        <label for="main-language" class="font-medium mt-0 mb-0 bg-green-100">10. What is/are the main languages you use
          at home on a daily basis?
        </label>
        <input id="main-language" list="languages"
          class="rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
          v-model="surveyData.mainLangUsedAtHome" required />
        <datalist id="languages">
          <option value="Chinese (Mandarin)"></option>
          <option value="Spanish"></option>
          <option value="English"></option>
          <option value="Hindi"></option>
          <option value="Arabic"></option>
          <option value="Bengali"></option>
          <option value="Portuguese"></option>
          <option value="Punjabi"></option>
          <option value="Odia"></option>
          <option value="Javanese"></option>
          <option value="German"></option>
          <option value="Russian"></option>
          <option value="Korean"></option>
          <option value="French"></option>
          <option value="Vietnamese"></option>
          <option value="Turkish"></option>
          <option value="Italian"></option>
          <option value="Thai"></option>
          <option value="Tamil"></option>
          <option value="Polish"></option>
          <option value="Ukrainian"></option>
          <option value="Romanian"></option>
          <option value="Greek"></option>
          <option value="Hebrew"></option>
          <option value="Urdu"></option>
          <option value="Malay"></option>
          <option value="Swahili"></option>
          <option value="Hungarian"></option>
          <option value="Czech"></option>
          <option value="Finnish"></option>
          <option value="Danish"></option>
          <option value="Norwegian"></option>
          <option value="Swedish"></option>
          <option value="Lithuanian"></option>
          <option value="Latvian"></option>
          <option value="Estonian"></option>
          <option value="Slovak"></option>
          <option value="Slovenian"></option>
          <option value="Bulgarian"></option>
          <option value="Serbian"></option>
          <option value="Croatian"></option>
          <option value="Macedonian"></option>
          <option value="Albanian"></option>
          <option value="Mongolian"></option>
          <option value="Nepali"></option>
          <option value="Sinhalese"></option>
          <option value="Burmese"></option>
          <option value="Lao"></option>
        </datalist>

        <!-- <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Sinhala">Sinhala</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Urdu">Urdu</option> -->
      </span>

      <div>
        <label for="other-language-yes-no" class="font-medium mr-3 bg-green-100">11. Do you use any other
          language/languages besides the home language
          indicated above?
        </label>
        <select v-model="surveyData.otherLangsUsedAtHomeYesOrNo" required class="w-48 ml-0">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <label for="other-language" class="font-medium mr-3 bg-green-100">If yes, what is/are the additional
          language/languages you use?
        </label>
        <input list="languages" type="text" id="other-languages"
          :disabled="surveyData.otherLangsUsedAtHomeYesOrNo === 'No'" v-model="surveyData.otherLangsUsedAtHome"
          placeholder="Enter language/s"
          class="mt-5 mb-0 rounded-md border ml-0 border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
          required />
      </div>

      <span class="flex-col">
        <label class="mt-4 mb-1 font-medium bg-green-100">
          12. What is your competency level in using:
        </label>
        <div class="survey-table !mt-0 space-top">
          <h5 class="my-3 bg-green-100 text-sm">a. Your home language:</h5>

          <table class="border-collapse text-center">
            <tr>
              <td></td>
              <td>Beginner</td>
              <td>Intermediate</td>
              <td>Proficient</td>
            </tr>
            <tr>
              <td>Writing</td>
              <td>
                <input type="radio" name="writing-home-language" value="Beginner"
                  v-model="surveyData.usrProficiencyInHomeLngWriting" required />
              </td>
              <td>
                <input type="radio" name="writing-home-language" value="Intermediate"
                  v-model="surveyData.usrProficiencyInHomeLngWriting" required />
              </td>
              <td>
                <input type="radio" name="writing-home-language" value="Proficient"
                  v-model="surveyData.usrProficiencyInHomeLngWriting" required />
              </td>
            </tr>
            <tr>
              <td>Speaking</td>
              <td>
                <input type="radio" name="speaking-home-language" value="Beginner"
                  v-model="surveyData.usrProficiencyInHomeLngSpeaking" required />
              </td>
              <td>
                <input type="radio" name="speaking-home-language" value="Intermediate"
                  v-model="surveyData.usrProficiencyInHomeLngSpeaking" required />
              </td>
              <td>
                <input type="radio" name="speaking-home-language" value="Proficient"
                  v-model="surveyData.usrProficiencyInHomeLngSpeaking" required />
              </td>
            </tr>
            <tr>
              <td>Reading</td>
              <td>
                <input type="radio" name="reading-home-language" value="Beginner"
                  v-model="surveyData.usrProficiencyInHomeLngReading" required />
              </td>
              <td>
                <input type="radio" name="reading-home-language" value="Intermediate"
                  v-model="surveyData.usrProficiencyInHomeLngReading" required />
              </td>
              <td>
                <input type="radio" name="reading-home-language" value="Proficient"
                  v-model="surveyData.usrProficiencyInHomeLngReading" required />
              </td>
            </tr>
          </table>
        </div>
        <div class="survey-table !mt-0 space-top">
          <h5 class="my-3 bg-green-100 text-sm">b. English:</h5>
          <table class="border-collapse text-center">
            <tr>
              <td></td>
              <td>Beginner</td>
              <td>Intermediate</td>
              <td>Proficient</td>
            </tr>
            <tr>
              <td>Writing</td>
              <td>
                <input type="radio" value="Beginner" name="writing-english"
                  v-model="surveyData.usrProficiencyInEnglishWriting" required />
              </td>
              <td>
                <input type="radio" value="Intermediate" name="writing-english"
                  v-model="surveyData.usrProficiencyInEnglishWriting" required />
              </td>
              <td>
                <input type="radio" value="Proficient" name="writing-english"
                  v-model="surveyData.usrProficiencyInEnglishWriting" required />
              </td>
            </tr>
            <tr>
              <td>Speaking</td>
              <td>
                <input type="radio" value="Beginner" name="speaking-english"
                  v-model="surveyData.usrProficiencyInEnglishSpeaking" required />
              </td>
              <td>
                <input type="radio" value="Intermediate" name="speaking-english"
                  v-model="surveyData.usrProficiencyInEnglishSpeaking" required />
              </td>
              <td>
                <input type="radio" name="speaking-english" value="Proficient"
                  v-model="surveyData.usrProficiencyInEnglishSpeaking" required />
              </td>
            </tr>
            <tr>
              <td>Reading</td>
              <td>
                <input type="radio" value="Beginner" name="reading-english"
                  v-model="surveyData.usrProficiencyInEnglishReading" required />
              </td>
              <td>
                <input type="radio" value="Intermediate" name="reading-english"
                  v-model="surveyData.usrProficiencyInEnglishReading" required />
              </td>
              <td>
                <input type="radio" value="Proficient" name="reading-english"
                  v-model="surveyData.usrProficiencyInEnglishReading" required />
              </td>
            </tr>
          </table>
        </div>
      </span>
      <span>
        <label class="font-medium mt-5 mb-3 bg-green-100">
          13. Please rate each of the following statements using the scale
          below:
        </label>
        <h4 class="my-2 bg-green-100">
          Strongly Disagree = 1, Disagree = 2, Agree = 3, Strongly Agree = 4
        </h4>
      </span>

      <table class="border-collapse text-center">
        <tr>
          <td></td>
          <td>1 - Strongly Disagree</td>
          <td>2 - Disagree</td>
          <td>3 - Agree</td>
          <td>4 - Strongly Agree</td>
        </tr>
        <tr>
          <td class="!w-full !text-left">
            1. I often participate in Canadian cultural traditions (e.g: Canada
            Day, St Patrick’s Day, Thanksgiving)
          </td>
          <td>
            <input v-model="surveyData.usrParticipatesInCanadianTraditions" type="radio" value="1" name="13a"
              id="rating_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrParticipatesInCanadianTraditions" type="radio" name="13a" value="2"
              id="rating_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrParticipatesInCanadianTraditions" type="radio" value="3" name="13a"
              id="rating_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrParticipatesInCanadianTraditions" type="radio" name="13a" id="rating_4"
              value="4" class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">
            2. I enjoy engaging in social activities with people who are
            originally from Canada
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysEngagingInSocialActivitiesWithCanadians
              " type="radio" value="1" name="13b" id="13b_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysEngagingInSocialActivitiesWithCanadians
              " type="radio" value="2" name="13b" id="13b_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysEngagingInSocialActivitiesWithCanadians
              " type="radio" value="3" name="13b" id="13b_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysEngagingInSocialActivitiesWithCanadians
              " type="radio" value="4" name="13b" id="13b_4" class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">3. I am comfortable working with Canadians</td>
          <td>
            <input v-model="surveyData.howComfortableUsrIsWhenWorkingWithCanadians" type="radio" value="1" name="13c"
              id="13c_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.howComfortableUsrIsWhenWorkingWithCanadians" type="radio" value="2" name="13c"
              id="13c_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.howComfortableUsrIsWhenWorkingWithCanadians" type="radio" value="3" name="13c"
              id="13c_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.howComfortableUsrIsWhenWorkingWithCanadians" type="radio" value="4" name="13c"
              id="13c_4" class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">4. I enjoy Canadian entertainment</td>
          <td>
            <input v-model="surveyData.usrEnjoysCanadianEntertainment" type="radio" value="1" name="13d" id="13d_1"
              class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysCanadianEntertainment" type="radio" value="2" name="13d" id="13d_2"
              class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysCanadianEntertainment" type="radio" value="3" name="13d" id="13d_3"
              class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrEnjoysCanadianEntertainment" type="radio" value="4" name="13d" id="13d_4"
              class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">
            5. I am interested in having Canadian friends
          </td>
          <td>
            <input v-model="surveyData.usrIsInterestedInHavingCanadianFriends" type="radio" value="1" name="13e"
              id="13e_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrIsInterestedInHavingCanadianFriends" type="radio" value="2" name="13e"
              id="13e_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrIsInterestedInHavingCanadianFriends" type="radio" value="3" name="13e"
              id="13e_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrIsInterestedInHavingCanadianFriends" type="radio" value="4" name="13e"
              id="13e_4" class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">
            6. After school and during holidays, my children play with children
            from different countries
          </td>
          <td>
            <input v-model="surveyData.usrsChildPlaysWithChildrenFromDifferentCountries
              " type="radio" value="1" name="13f" id="13f_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrsChildPlaysWithChildrenFromDifferentCountries
              " type="radio" value="2" name="13f" id="13f_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrsChildPlaysWithChildrenFromDifferentCountries
              " type="radio" value="3" name="13f" id="13f_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.usrsChildPlaysWithChildrenFromDifferentCountries
              " type="radio" value="4" name="13f" id="13f_4" class="my-0" />
          </td>
        </tr>
        <tr>
          <td class="!text-left">
            7. My child’s teacher discusses about my culture of origin related
            holidays at school
          </td>
          <td>
            <input v-model="surveyData.childsTeacherDiscussesCultureOfOriginRelatedHolidays
              " type="radio" value="1" name="13g" id="13g_1" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.childsTeacherDiscussesCultureOfOriginRelatedHolidays
              " type="radio" value="2" name="13g" id="13g_2" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.childsTeacherDiscussesCultureOfOriginRelatedHolidays
              " type="radio" value="3" name="13g" id="13g_3" class="my-0" />
          </td>
          <td>
            <input v-model="surveyData.childsTeacherDiscussesCultureOfOriginRelatedHolidays
              " type="radio" value="4" name="13g" id="13g_4" class="my-0" />
          </td>
        </tr>
      </table>

      <span>
        <label class="font-medium mt-5 mb-3 bg-green-100">14. Are you aware of a child/adolescent in your community (for
          example, among relatives, friends, neighbors, religious or ethnic
          groups that you are currently a part of) who is struggling with their
          studies/learning process at school?
        </label>
        <select v-model="surveyData.userIsAwareOfStrugglingChildInCmmnt" required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </span>

      <label class="my-5 font-medium bg-green-100">
        If yes, as far as you know, does this child receive any help at home,
        school and/or from the community?
      </label>
      <div class="survey-table space-top">
        <table class="border-collapse text-center">
          <tr>
            <td>Receives support at home</td>
            <td>Receives support at school</td>
            <td>Receives support from community</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportAtHome" />
            </td>
            <td>
              <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportAtSchool" />
            </td>
            <td>
              <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromCmmnt" />
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div class="my-3">
        <label class="font-medium bg-green-100">15. Are you aware of a child/adolescent in your country of origin
          (for example, among relatives, friends, neighbors, religious or ethnic
          groups that you are currently a part of) who was struggling with their
          studies/learning process at school?
        </label>
        <select class="w-48 my-5" v-model="surveyData.userIsAwareOfStrugglingChildInCntry" required>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <h3 class="text-sm block mt-0 mb-5 font-medium bg-green-100">
          As far as you know, did this child receive any help at home, at school
          and/or from the community?
        </h3>
        <div class="survey-table">
          <table class="text-center">
            <tr>
              <td>Receives support at home</td>
              <td>Receives support at school</td>
              <td>Receives support from community</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromHome" />
              </td>
              <td>
                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromSchool" />
              </td>
              <td>
                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromCommunity
                  " />
              </td>
            </tr>
            <!-- <tr>
                            <td>No</td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                        </tr> -->
          </table>
        </div>

        <div class="mt-4 flex flex-wrap gap-x-5">
          <label class="font-medium mb-3 bg-green-100">
            16. Does your child struggle with their school work?
          </label>
          <span class="inline-flex gap-2 flex-wrap">
            <input v-model="surveyData.childStrugglesWithSchoolWork" type="radio" class="my-auto" value="Yes" name="16a"
              id="16a_yes" />
            <label for="16a_yes" class="mr-3 my-auto">Yes</label>
            <input v-model="surveyData.childStrugglesWithSchoolWork" type="radio" name="16a" class="my-auto" value="No"
              id="16a_no" />
            <label for="16a_no" class="mr-3 my-auto">No</label>
          </span>
        </div>

        <div class="mt-0 flex flex-wrap gap-x-5">
          <label class="font-medium mb-3 bg-green-100">If yes, to what extent does your child struggle with school
            work?</label>
          <span class="inline-flex gap-2 flex-wrap">
            <input v-model="surveyData.extentChildStrugglesWithSchoolWork" type="radio" value="A litle" name="16b"
              class="my-auto" id="16b_1" />
            <label for="16b_1" class="mr-3 my-auto">A little</label>
            <input v-model="surveyData.extentChildStrugglesWithSchoolWork" type="radio" class="my-auto" name="16b"
              value="Moderately" id="16b_2" />
            <label for="16b_2" class="mr-3 my-auto">Moderately</label>
            <input v-model="surveyData.extentChildStrugglesWithSchoolWork" type="radio" class="my-auto" name="16b"
              value="A lot" id="16b_3" />
            <label for="16b_3" class="mr-3 my-auto">A lot</label>
          </span>
        </div>
        <div class="mt-0 flex flex-wrap gap-x-5">
          <label class="font-medium mb-3 bg-green-100">What academic activities do they find difficult?</label>
          <span class="inline-flex gap-2 gap-y-4 flex-wrap">
            <input v-model="surveyData.usrsChildFindsReadingDifficult" type="checkbox" value="A litle" name="16c"
              class="my-auto" id="16c_1" />
            <label for="16c_1" class="mr-3 my-auto">Reading</label>
            <input v-model="surveyData.usrsChildFindsWritingDifficult" type="checkbox" class="my-auto" name="16c"
              value="Moderately" id="16c_2" />
            <label for="16c_2" class="mr-3 my-auto">Writing</label>
            <input v-model="surveyData.usrsChildFindsMathematicsDifficult" type="checkbox" class="my-auto" name="16c"
              value="A lot" id="16c_3" />
            <label for="16c_3" class="mr-3 my-auto">Mathematics</label>
            <input v-model="otherAcademicActivitiesSelected" type="checkbox" class="my-auto" name="16c" id="16c_4" />
            <label for="16c_4" class="mr-3 my-auto">Other</label>
          </span>
        </div>
        <input type="text" v-if="otherAcademicActivitiesSelected"
          v-model="surveyData.otherAcademicActivitiesUsrsChildFindsDifficult" placeholder="Other"
          class="my-auto rounded-md border mt-2 border-gray-300 border-solid py-1 px-3 box-border w-48 text-[12.5px]" />
      </div>
      <div class="mt-2 flex gap-8">
        <button class="gradient-btn gradient-green" type="button" @click="emits('go-back')">
          Back
        </button>
        <button class="gradient-btn gradient-green" type="submit">
          Start Implicit Bias Task
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SurveyData } from "../types";

let otherAcademicActivitiesSelected = ref(false);

defineProps<{
  surveyData: SurveyData;
}>();

const emits = defineEmits(["go-back", "continue"]);
</script>

<style scoped>
input {
  outline: none;
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

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: white;
}

table input {
  width: 40px;
}

.survey-table {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

input[type="radio"] {
  margin-left: 0px;
}
</style>
