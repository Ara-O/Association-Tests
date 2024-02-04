<template>
    <section
        class="shadow-md w-full max-w-[1100px] border border-solid border-gray-100 py-7 px-10 rounded-md text-sm box-border">
        <h3 class="font-semibold text-lg">Background Form - PART B</h3>
        <h4 class="font-medium text-sm">
            Please answer the following questions
        </h4>
        <form @submit.prevent="emits('continue')"
            class="max-h-none max-w-none flex flex-col items-left p-0 items-start justify-start border-none shadow-none">
            <span class="flex flex-wrap items-center gap-3">
                <label for="spouse-highest-education-level" class="font-medium mb-0 mt-0 bg-green-100">7. What is your
                    spouse's highest educational level</label>
                <select id="spouse-highest-education-level" v-model="surveyData.spouseHighestEduLvl"
                    class="mt-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    required>
                    <option value="Some school">Some school</option>
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
                    <option value="Other (please specify)">
                        Other (please specify)
                    </option>
                </select>
            </span>

            <input type="text"
                class="rounded-md border mt-4 border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                v-if="surveyData.spouseHighestEduLvl === 'Other (please specify)'" placeholder="Specify here"
                v-model="surveyData.spouseHighestEduLvlOther" />

            <span class="mt-5 flex flex-wrap items-center gap-3">
                <label for="occupation" class="mb-0 mt-0 font-medium bg-green-100">
                    8. What is your occupation in Canada?
                </label>
                <input type="text" id="occupation"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    v-model="surveyData.usrOccupInCanada" placeholder="Enter Occupation" required />
            </span>

            <div class="flex flex-wrap items-center gap-3 mt-5 ">
                <label for="occupation-2" class="font-medium bg-green-100 mt-0">
                    If you are a new Canadian and were employed before immigrating to
                    Canada, please indicate your occupation in your former country
                </label>
                <input type="text" id="occupation-2"
                    class="mt-7 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    placeholder="Enter Occupation" v-model="surveyData.usrOccupInFormerCountry" required />
            </div>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label for="main-language" class="font-medium mt-0 mb-0 bg-green-100">9. What is the main language you use
                    at home on a daily basis?
                </label>
                <select id="main-language" class="mb-0 mt-0 w-48" v-model="surveyData.mainLangUsedAtHome" required>
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Sinhala">Sinhala</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </span>

            <div>
                <label for="other-language-yes-no" class="font-medium bg-green-100">10. Do you use any other
                    language/languages
                    besides the home language indicated above?
                </label>
                <!-- ?ANCHOR  -->
                <select v-model="surveyData.otherLangsUsedAtHomeYesOrNo" required class="w-48 ml-3">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div>
                <label for="other-language" class="font-medium bg-green-100">If yes, what is/are the additional
                    language/languages you
                    use?
                </label>
                <input type="text" id="other-languages" :disabled="surveyData.otherLangsUsedAtHomeYesOrNo === 'No'"
                    v-model="surveyData.otherLangsUsedAtHome" placeholder="Enter language/s"
                    class="mt-5 mb-0 rounded-md border ml-3 border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    required />
            </div>

            <span class="flex-col">
                <label class="mt-4 mb-1 font-medium bg-green-100">
                    11. What is your competency level in using:
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
                <label class="font-medium mt-5 mb-3 bg-green-100">12. Are you aware of a child/adolescent in your community
                    (for example, among relatives, friends, neighbors, religious or
                    ethnic groups that you are currently a part of) who is struggling
                    with their studies/learning process at school?
                </label>
                <select v-model="surveyData.userIsAwareOfStrugglingChildInCmmnt" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </span>

            <label class="my-5 font-medium bg-green-100">
                If yes as far as you know, did this child receive any help at home,
                school and/or community?
            </label>
            <div class="survey-table space-top">
                <table class="border-collapse text-center">
                    <tr>
                        <td></td>
                        <td>Receives support from home</td>
                        <td>Receives support from school</td>
                        <td>Receives support from community</td>
                    </tr>
                    <tr>
                        <td>Yes</td>
                        <td>
                            <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromHome" />
                        </td>
                        <td>
                            <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromSchool" />
                        </td>
                        <td>
                            <input type="checkbox" v-model="surveyData.childInCmmntReceivesSupportFromCmmnt" />
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
            <br />
            <div class="my-3">
                <label class="font-medium bg-green-100">13. Are you aware of a child/adolescent in your country of origin
                    (for example, among relatives, friends, neighbors, religious or
                    ethnic groups that you are currently a part of) who was struggling
                    with their studies/learning process at school?
                </label>
                <select class="w-48 my-5" v-model="surveyData.userIsAwareOfStrugglingChildInCntry" required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />
                <h3 class="text-sm block mt-0 mb-5 font-medium bg-green-100">
                    If yes, as far as you know, did this child receive any help at home,
                    school and/or community?
                </h3>
                <div class="survey-table">
                    <table class="text-center">
                        <tr>
                            <td></td>
                            <td>Receives support from home</td>
                            <td>Receives support from school</td>
                            <td>Receives support from community</td>
                        </tr>
                        <tr>
                            <td>Yes</td>
                            <td>
                                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromHome" />
                            </td>
                            <td>
                                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromSchool" />
                            </td>
                            <td>
                                <input type="checkbox" v-model="surveyData.childInCountryReceivesSupportFromCommunity" />
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
            </div>
            <div class="mt-2 flex gap-8">
                <button class="gradient-btn gradient-green" type="button" @click="emits('go-back')">Back</button>
                <button class="gradient-btn gradient-green" type="submit">Start Practice Task</button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { SurveyData } from "../types"

defineProps<{
    surveyData: SurveyData
}>()

const emits = defineEmits(["go-back", "continue"])
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