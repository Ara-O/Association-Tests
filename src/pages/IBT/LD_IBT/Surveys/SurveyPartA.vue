<template>
    <section
        class="shadow-md w-full max-w-[900px] border border-solid border-gray-100 py-7 px-10 rounded-md text-sm box-border">
        <h3 class="font-semibold text-lg">Demographic Form - PART A</h3>
        <h4 class="font-medium leading-7">
            Note: Green highlighted texts specify the questions. Please answer the
            following questions
        </h4>
        <form @submit.prevent="emits('continue')"
            class="max-h-none max-w-none flex flex-col items-left p-0 items-start justify-start border-none shadow-none">
            <span class="flex flex-wrap items-center gap-3">
                <label for="country" class="block mt-0 mb-0 font-medium bg-green-100 leading-7">1. From which
                    country/countries did
                    you or your family originally arrive in Canada?</label>
                <select class="mt-0 w-48" v-model="surveyData.countryOfOrigin" required>
                    <option :value="country" v-for="country in countriesList">
                        {{ country }}
                    </option>
                </select>
            </span>

            <h4 class="leading-7">
                Note: List all countries you have lived in before coming to Canada
                starting with the last country you were residing in
            </h4>

            <span class="flex flex-wrap items-center gap-3">
                <label for="province" class="mt-0 mb-0 bg-green-100">Province (if applicable):
                </label>
                <input id="province"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    v-model="surveyData.province" />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label for="city" class="mt-0 mb-0 bg-green-100">City: </label>
                <input type="text" id="city"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    v-model="surveyData.city" placeholder="City" required />
            </span>

            <h4 class="font-medium bg-green-100 inline-block !w-fit">
                2. When did you or your family come to Canada?
            </h4>

            <span class="flex flex-wrap items-center gap-3">
                <label for="you" class="mb-0 mt-0 bg-green-100">You: </label>
                <input type="text"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
                    id="you" v-model="surveyData.yearUsrMovedToCanada" placeholder="Year" required />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label for="spouse-1" class="mb-0 mt-0 bg-green-100">Your spouse (if applicable):
                </label>
                <input type="text" id="spouse-1"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    placeholder="Year" v-model="surveyData.yearSpouseMovedToCanada" />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label for="parents" class="mb-0 mt-0 bg-green-100">Your parents (if applicable):
                </label>
                <input type="text"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    id="parents" placeholder="Year" v-model="surveyData.yearParentsMovedToCanada" />
            </span>

            <h4 class="font-medium bg-green-100 !w-fit">
                3. How long have you or your family been in Canada?
            </h4>
            <span class="flex flex-wrap items-center gap-3">
                <label class="mb-0 mt-0 bg-green-100" for="you-years-in-canada">You:
                </label>
                <input
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    type="text" id="you-years-in-canada" v-model="surveyData.usrDurOfStayInCanada" placeholder=" Years"
                    required />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label class="mb-0 mt-0 bg-green-100" for="family-years-in-canada">Your family:
                </label>
                <input type="text"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    id="family-years-in-canada" v-model="surveyData.familyDurOfStayInCanada" placeholder="Years" required />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-5">
                <label for="immigrant-status" class="mb-0 mt-0 font-medium bg-green-100">4. What is your immigrant status in
                    Canada</label>
                <select id="immigrant-status" class="mb-0 mt-0 w-48 text-[12.5px]" v-model="surveyData.immigrantStatus"
                    required>
                    <option value="Canadian Citizen">Canadian Citizen</option>
                    <option value="Permanent Resident">Permanent Resident</option>
                    <option value="Refugee">Refugee</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Other (please specify)">Other (please specify)</option>
                </select>
                <br>
                <input type="text" v-if="surveyData.immigrantStatus === 'Other (please specify)'"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    placeholder="Specify here" v-model="surveyData.immigrantStatusOther" />
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-6 text-[12.5px]">
                <label for="what-user-considers-themselves" class="font-medium mb-0 mt-0 bg-green-100">5. Do you consider
                    yourself to be:</label>
                <select id="what-user-considers-themselves" class="mb-0 mt-0 w-48 text-[12.5px]"
                    v-model="surveyData.usrGeneration" required>
                    <option value="First generation immigrant (I was born outside of Canada)">
                        First generation immigrant (I was born outside of Canada)
                    </option>
                    <option
                        value="Second generation immigrant  (I was born in Canada and at least one of my parents was born outside Canada) ">
                        Second generation immigrant (I was born in Canada and at least
                        one of my parents was born outside Canada)
                    </option>
                    <option value="Third generation immigrant (I and both my parents were born in Canada)">
                        Third generation immigrant (I and both my parents were born in
                        Canada)
                    </option>
                </select>
            </span>

            <span class="flex flex-wrap items-center gap-3 mt-6">
                <label for="highest-education-level" class="font-medium mb-0 mt-0 bg-green-100">6. Please select the highest
                    level of education that you have
                    attained</label>
                <select id="highest-education-level" class="mb-0 mt-0 text-[12.5px] w-48"
                    v-model="surveyData.usrsHighestEduLvl" required>
                    <!-- <option value="Some school">Some school</option> -->
                    <option
                        value="Completed high school diploma and a professional qualification not from a college or university">
                        Completed high school diploma and a professional qualification
                        not from a college or university.
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
                <br />
                <input type="text" v-if="surveyData.usrsHighestEduLvl === 'Other (please specify)'"
                    class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
                    placeholder="Specify here" v-model="surveyData.usrsHighestEduLvlOther" />
            </span>

            <div class="w-full flex justify-start gap-5">
                <button type="button" class="gradient-green py-6 gradient-btn" @click="emits('go-back')">Back</button>
                <button type="submit" class="gradient-green py-6 gradient-btn">Next</button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { SurveyData } from "../types"
import countriesList from "../../../../modules/utils/countriesList";

const props = defineProps<{
    surveyData: SurveyData
}>()

const emits = defineEmits(["go-back", "continue"])
</script>