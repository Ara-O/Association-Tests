<template>
  <section class="flex items-center justify-center min-h-screen">
    <section v-show="currentStep === Steps.TestOne"
      class="w-auto max-w-[600px] rounded-md py-10 px-12 pb-12 border border-solid border-gray-100 shadow-md text-left mt-10 mb-10">
      <TestOne :position="1" @finished="currentStep++"></TestOne>
    </section>
    <section v-show="currentStep === Steps.TestTwo"
      class="w-auto max-w-[600px] rounded-md py-10 px-12 pb-12 border border-solid border-gray-100 shadow-md text-left mt-10 mb-10">
      <TestTwo :position="2"></TestTwo>
    </section>
  </section>
</template>

<script  setup>
import { ref } from "vue"
import TestOne from "./LD_IBT_Test1.vue"
import TestTwo from "./LD_IBT_Test2.vue"

let currentStep = ref(1)

const Steps = Object.freeze({
  TestOne: 1,
  TestTwo: 2
})
</script>
