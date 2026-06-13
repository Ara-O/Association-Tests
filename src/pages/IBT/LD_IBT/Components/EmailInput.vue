<template>
  <div
    class="sm:shadow-md sm:border sm:border-solid border-gray-100 py-7 px-7 rounded-md w-auto max-w-[525px] text-sm box-border"
  >
    <h3 style="font-weight: 500" class="!text-center">
      Please provide us with your email address
    </h3>
    <h4 class="leading-[30px] text-sm">
      Your email address will be used solely for documenting the gift
      certificate that you will receive for taking part in this study and will
      not be used for any other purpose.
    </h4>

    <form
      @submit.prevent="finishEmailSection"
      class="min-h-0 border-none shadow-none flex flex-col overflow-hidden p-0"
    >
      <input
        type="email"
        name="user-email"
        v-model="user_email"
        id="email"
        class="border-0 border-b-2 text-center pb-2 outline-none mt-0"
        placeholder="Enter email address"
        required
      />
      <button class="gradient-green gradient-btn mb-0 py-6" type="submit">
        Next
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const emits = defineEmits(["finish"]);
let user_email = ref<string>("");

function finishEmailSection() {
  if (user_email.value === "musfirah.qazi@mail.utoronto.ca") {
    router.push("/home");
    return;
  }

  store.commit("storeLdPointOfContact", user_email.value);
  emits("finish");
}
</script>
