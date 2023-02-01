<template></template>

<script setup>
import { onMounted, defineProps, watch } from "vue";
const props = defineProps({ visible: Boolean });

console.log(props.visible);
watch(props, (newVal) => {
  console.log("e: " + newVal.visible);
});
onMounted(() => {
  console.log("onmounted");

  let newdiv = document.createElement("div");
  newdiv.classList.add("google_translate_element");
  newdiv.setAttribute("id", "google_translate_element");
  document.querySelector("body").appendChild(newdiv);
  new google.translate.TranslateElement(
    {
      // layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      pageLanguage: "en",
      includedLanguages: "en,es,fr,ar,zh-CN",
    },
    "google_translate_element"
  );

  document.querySelector(".skiptranslate").style.display = "none";
});
</script>

<style>
.google_translate_element {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
