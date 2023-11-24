<template>
  <router-view />
  <div v-show="shouldBeVisible">
    <div id="google_translate_element" class="google_translate_element"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch, ref, onMounted } from "vue";
const route = useRoute();
let shouldBeVisible = ref(false);
let visiblePaths = [
  "/Home",
  "/",
  "/IAT_Choose_Test",
  "/IBT_Choose_Test",
  "/IT",
  "/FM_Choose_Test",
  "/LD_IBT_Consent_Form",
  "/LD_IBT_Survey"
];

watch(route, (newval) => {
  if (visiblePaths.includes(newval.fullPath)) {
    shouldBeVisible.value = true;
  } else {
    shouldBeVisible.value = false;
  }
});

onMounted(() => {
  setTimeout(() => {
    google.translate.TranslateElement(
      {
        // layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        pageLanguage: "en",
        includedLanguages: "en,es,fr,ar,zh-CN,bn,hi,kn,ms,mr,ml,ta,ur",
      },
      "google_translate_element"
    );
  }, 1000);
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px !important;
}

.google_translate_element {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
