<template>
  <section
    class="shadow-md w-full max-w-[900px] border border-solid border-gray-100 py-7 px-10 rounded-md text-sm box-border"
  >
    <h3 class="font-semibold text-lg">PART A - Background Information</h3>
    <h4 class="font-medium leading-7">Please answer the following questions</h4>
    <form
      @submit.prevent="emits('continue')"
      class="max-h-none max-w-none flex flex-col items-left p-0 items-start justify-start border-none shadow-none"
    >
      <label
        for="country"
        class="block mt-1 mb-0 font-medium bg-green-100 w-auto leading-7"
        >1. List all countries in the order that you have lived in before
        arriving in Canada starting with the first country and ending with the
        last?</label
      >
      <span class="flex flex-wrap items-center gap-3">
        <span class="mt-4 gap-4 overflow-auto flex flex-wrap">
          <input
            class="mt-0 mb-0 ml-0.5 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-40 outline-none text-[12.5px]"
            v-model="props.surveyData.countryOfOrigin1"
            placeholder="Country 1"
          />
          <input
            class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-40 outline-none text-[12.5px]"
            v-model="props.surveyData.countryOfOrigin2"
            placeholder="Country 2"
          />
          <input
            class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-40 outline-none text-[12.5px]"
            v-model="props.surveyData.countryOfOrigin3"
            placeholder="Country 3"
          />
          <input
            class="mt-0 mb-0 rounded-md border border-gray-300 border-solid px-3 py-1 box-border w-40 outline-none text-[12.5px]"
            v-model="props.surveyData.countryOfOrigin4"
            placeholder="Country 4"
          />
        </span>
      </span>

      <!-- QUESTION 2  -->

      <span class="flex flex-wrap items-center gap-3 mt-6">
        <label
          for="spouseCountryOfOrigin"
          class="font-medium bg-green-100 inline-block !w-fit my-0"
        >
          2. What is your spouse's country of origin?
        </label>

        <input
          type="text"
          class="mt-0 mb-0 rounded-md border ml-0.5 border-gray-300 border-solid px-3 py-1 box-border w-48 text-[12.5px]"
          id="spouseCountryOfOrigin"
          v-model="props.surveyData.spouseCountryOfOrigin"
          placeholder="Country of Origin"
        />
      </span>

      <!-- QUESTION 3 -->

      <h4 class="font-medium mt-6 bg-green-100 inline-block !w-fit">
        3. When did you or your family come to Canada?
      </h4>

      <table class="border border-collapse mb-6 border-solid">
        <tr class="h-10">
          <th class="border border-solid w-56 px-4 h-2">You</th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.yearUsrMovedToCanada"
              placeholder="Year"
              required
            />
          </td>
        </tr>
        <tr>
          <th class="border border-solid w-56 py-2 px-4 h-2">
            Your spouse (If applicable)
          </th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              placeholder="Year"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.yearSpouseMovedToCanada"
            />
          </td>
        </tr>
        <tr>
          <th class="border border-solid w-32 py-2 px-4 h-2">
            Your parents (If applicable)
          </th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              placeholder="Year"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.yearParentsMovedToCanada"
            />
          </td>
        </tr>
      </table>

      <h4 class="font-medium mt-0 mb-4 bg-green-100 !w-fit">
        4. How long have you or your family been in Canada?
      </h4>
      <table class="border border-collapse mb-6 border-solid">
        <tr class="h-10">
          <th class="border border-solid w-56 px-4 h-2">You</th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.durationUserHasBeenInCanada"
              required
            />
          </td>
        </tr>
        <tr>
          <th class="border border-solid w-32 py-2 px-4 h-2">
            Your spouse (If applicable)
          </th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.durationSpouseHasBeenInCanada"
            />
          </td>
        </tr>
        <tr>
          <th class="border border-solid w-32 py-2 px-4 h-2">
            Your children (If applicable)
          </th>
          <td class="p-0 border border-solid">
            <input
              type="text"
              class="border-none w-56 outline-none px-5 box-border h-10"
              v-model="props.surveyData.durationChildrenHaveBeenInCanada"
            />
          </td>
        </tr>
      </table>
      <!-- <span class="flex flex-wrap items-center gap-3">
        <label class="mb-0 mt-0 bg-green-100" for="you-years-in-canada"
          >You:
        </label>
        <input
          class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
          type="text"
          id="you-years-in-canada"
          v-model="props.surveyData.usrDurOfStayInCanada"
          placeholder=" Years"
          required
        />
      </span>

      <span class="flex flex-wrap items-center gap-3 mt-5">
        <label class="mb-0 mt-0 bg-green-100" for="family-years-in-canada"
          >Your family:
        </label>
        <input
          type="text"
          class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
          id="family-years-in-canada"
          v-model="props.surveyData.familyDurOfStayInCanada"
          placeholder="Years"
          required
        />
      </span> -->

      <span class="flex flex-wrap items-center gap-3 mt-1">
        <label for="immigrant-status" class="mb-0 mt-0 font-medium bg-green-100"
          >5. What is your immigrant status in Canada</label
        >
        <select
          id="immigrant-status"
          class="mb-0 mt-0 w-48 text-[12.5px]"
          v-model="props.surveyData.immigrantStatus"
          required
        >
          <option value="Canadian Citizen">Canadian Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Refugee">Refugee</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Other (please specify)">Other (please specify)</option>
        </select>
        <br />
        <input
          type="text"
          v-if="props.surveyData.immigrantStatus === 'Other (please specify)'"
          class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
          placeholder="Specify here"
          v-model="props.surveyData.immigrantStatusOther"
        />
      </span>

      <span class="flex flex-wrap items-center gap-3 mt-6 text-[12.5px]">
        <label
          for="what-user-considers-themselves"
          class="font-medium mb-0 mt-0 bg-green-100"
          >6. Do you consider yourself to be:</label
        >
        <select
          id="what-user-considers-themselves"
          class="mb-0 mt-0 w-48 text-[12.5px]"
          v-model="props.surveyData.usrGeneration"
          required
        >
          <option
            value="First generation immigrant (I was born outside of Canada)"
          >
            First generation immigrant (I was born outside of Canada)
          </option>
          <option
            value="Second generation immigrant  (I was born in Canada and at least one of my parents was born outside Canada) "
          >
            Second generation immigrant (I was born in Canada and at least one
            of my parents was born outside Canada)
          </option>
          <option
            value="Third generation immigrant (I and both my parents were born in Canada)"
          >
            Third generation immigrant (I and both my parents were born in
            Canada)
          </option>
        </select>
      </span>

      <span class="flex flex-wrap items-center gap-3 mt-6">
        <label
          for="highest-education-level"
          class="font-medium mb-0 mt-0 bg-green-100"
          >7. Please select the highest level of education that you have
          attained</label
        >
        <select
          id="highest-education-level"
          class="mb-0 mt-0 text-[12.5px] w-48"
          v-model="props.surveyData.usrsHighestEduLvl"
          required
        >
          <!-- <option value="Some school">Some school</option> -->
          <option
            value="Completed high school diploma and a professional qualification not from a college or university"
          >
            Completed high school diploma and a professional qualification not
            from a college or university.
          </option>
          <option value="Completed a college diploma">
            Completed a college diploma.
          </option>
          <option value="Completed an undergraduate university degree">
            Completed an undergraduate university degree.
          </option>
          <option
            value="Completed one or more graduate degrees (Masters/or Ph.D.)"
          >
            Completed one or more graduate degrees (Masters/or Ph.D.).
          </option>
          <option value="Other (please specify)">Other (please specify)</option>
        </select>
        <br />
        <input
          type="text"
          v-if="props.surveyData.usrsHighestEduLvl === 'Other (please specify)'"
          class="mt-0 mb-0 rounded-md border border-gray-300 border-solid pl-3 py-1 box-border w-48 text-[12.5px]"
          placeholder="Specify here"
          v-model="props.surveyData.usrsHighestEduLvlOther"
        />
      </span>

      <div class="w-full flex justify-start gap-5">
        <button
          type="button"
          class="gradient-green py-6 gradient-btn"
          @click="emits('go-back')"
        >
          Back
        </button>
        <button type="submit" class="gradient-green py-6 gradient-btn">
          Next
        </button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { SurveyData } from "../types";
import countriesList from "../../../../modules/utils/countriesList";

const props = defineProps<{
  surveyData: SurveyData;
}>();

const emits = defineEmits(["go-back", "continue"]);
</script>
