<template>
  <main style="height: auto">
    <section v-show="!exploreStudies" class="consent-form-main" style="flex-direction: column; height: 100vh">
      <h3 style="margin-bottom: 0px">Welcome!</h3>

      <iframe class="mt-10" style="max-width: 560px; width: 100vw; border-radius: 10px" height="315"
        src="https://www.youtube.com/embed/NpEaa2P7qZI?controls=0" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop" autoplay
        loop></iframe>

      <main-button routeTo="/" @click="routeToExploreStudies" class="explore-studies mt-10 ">Explore
        Studies</main-button>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import mainButton from "../components/Buttons/MainButton.vue";
import { useRouter } from "vue-router";

let router = useRouter();
// let participating = ref(true);

let exploreStudies = ref(false);

function routeToExploreStudies() {
  router.push("/consent-form");
}
</script>

<style scoped>
#google_translate_element {
  /* display: none; */
}

select {
  width: 150px;
}

.explore-studies {
  width: 150px;
}

/* 
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
} */

.consent-form-main {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jumbotron {
  background: linear-gradient(144deg, #4bac32, #389820);
  width: auto;
  padding: 0px 24px;
  border-radius: 1px;
  color: white;
  box-shadow: 0px 0px 4px lightgray;
  margin-top: 45px;
}

.jumbotron h3 {
  font-size: 16px;
  font-weight: 300;
}

.consent-form-image {
  max-width: 665px;
  box-shadow: 0px 0px 4px lightgrey;
  padding: 28px 6px;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 0px;
  max-height: 1011px;
  height: 100%;
}

.consent {
  width: auto;
  min-height: 618px;
  height: 92vh;
  max-width: 668px;
  padding: 47px 48px;
  background: white;
  overflow: auto;
  font-size: 14px;
  line-height: 35px;
  box-sizing: border-box;
  border: solid 1px #e5e5e5;
  font-weight: 300;
  border-radius: 3px;
  box-shadow: 0px 0px 2px lightgrey;
}

.agreement,
.disagreement {
  width: 190px;
  font-weight: 300;
  height: 26px;
}

.arrange-btns {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  flex-wrap: wrap;
}
</style>
