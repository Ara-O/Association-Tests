<template>
  <main>
    <h3 style="margin-bottom: 0px">Welcome!</h3>
    <br />
    <br />
    <iframe
      style="max-width: 560px; width: 100vw; border-radius: 10px"
      height="315"
      src="https://www.youtube.com/embed/NpEaa2P7qZI?controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
      autoplay
      loop
    ></iframe>
    <br />
    <br />
    <main-button routeTo="/consent-form" class="explore-studies"
      >Explore Studies</main-button
    >

    <!-- Change language -->
    <!-- <div class="choose-language-section">
      <img
        src="../assets/app_icons/earth-language-icon.png"
        alt="Earth language icon"
        class="earth-icon"
        title="Choose Language"
      />
      <h4
        class="english"
        :style="{ opacity: selectedLanguage == 'English' ? 1 : 0.5 }"
        @click="selectedLanguage = 'English'"
      >
        English •
      </h4>
      <h4
        class="mandarin"
        :style="{ opacity: selectedLanguage == 'Mandarin' ? 1 : 0.5 }"
        @click="selectedLanguage = 'Mandarin'"
      >
        Mandarin
      </h4>
    </div> -->
    <div id="google_translate_element"></div>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import mainButton from "../components/Buttons/MainButton.vue";
let selectedLanguage = ref("English");
let store = useStore();

onMounted(() => {
  setTimeout(() => {
    google.translate.TranslateElement(
      {
        // layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        pageLanguage: "en",
        includedLanguages: "en,es,fr,zh-TW",
      },
      "google_translate_element"
    );

    document.querySelector(".skiptranslate").style.display = "none";
  }, 1000);
});
</script>

<style scoped>
#google_translate_element {
  /* display: none; */
}

select {
  width: 150px;
}
.explore-studies {
  width: 130px;
}

.earth-icon {
  width: 30px;
}

.choose-language-section {
  position: absolute;
  bottom: 40px;
  right: 30px;
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.choose-language-section h4 {
  cursor: pointer;
}
</style>
