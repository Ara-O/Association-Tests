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
        includedLanguages: "en,es,fr,ar,zh-CN",
      },
      "google_translate_element"
    );
    // document.querySelector(".skiptranslate").style.display = "none";
  }, 500);
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
