<template>
  <main class="fm-choose-test-main">
    <h3 class="choose-fm">Choose type</h3>
    <section v-if="fmType == ''">
      <main-button
        routeTo="/FM_Choose_Test"
        @click="fmType = 'categorization'"
        >Categorizaton Test</main-button
      >
      <main-button
        routeTo="/FM_Choose_Test"
        @click="fmType = 'identification'"
        >Identification Test
      </main-button>

      <!-- Route back -->
      <router-link
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        class="router-link-back"
        to="/Home"
      >
        Go back
      </router-link>
    </section>

    <section v-if="fmType === 'categorization'">
      <main-button routeTo="FM_Categorization_Black_White"> Black-White Categorization Test </main-button>
      <main-button routeTo=""> Black-Asian Categorization Test </main-button>
      <main-button routeTo=""> Asian-White Categorization Test </main-button>
      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="fmType = ''"
      >
        Go back
      </h3>
    </section>

    <section v-if="fmType === 'identification'">
      <main-button routeTo="FM_Identification_Black_White"> Black-White Identfication Test </main-button>
      <main-button routeTo=""> Black-Asian Identfication Test </main-button>
      <main-button routeTo=""> Asian-White Identfication Test </main-button>

      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="fmType = ''"
      >
        Go back
      </h3>
    </section>
  </main>
</template>
  
  <script setup>
import { ref } from "vue";
import MainButton from "../../components/Buttons/MainButton.vue";

let fmType = ref("");
</script>
  
  <style scoped>
.fm-choose-test-main {
  background: url("../../assets/App_Icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose-fm {
  font-size: 34px;
  font-weight: 600;
  color: #2c3e50;
}

.router-link-back:active {
  color: purple;
}

@media (max-height: 600px) and (max-width: 600px) {
  main {
    height: 100vh;
  }
}
</style>