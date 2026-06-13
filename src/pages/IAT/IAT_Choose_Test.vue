<template>
  <main class="iat-choose-test-main">
    <h3 class="mb-8 choose-iat">Select IAT</h3>
    <section v-if="iatType == ''">
      <main-button routeTo="/IAT_Choose_Test" @click="handleGender">Gender IAT</main-button>
      <main-button routeTo="/IAT_Choose_Test" @click="handleRace">Race IAT</main-button>
      <main-button routeTo="/IAT_Cat_Dog_Survey">Cat-Dog IAT</main-button>

      <!-- Return back -->
      <router-link style="text-decoration: underline; cursor: pointer; font-size: 16px" class="router-link-back"
        to="/Home">
        Go back
      </router-link>
    </section>

    <section v-if="iatType === 'gender'">
      <main-button routeTo="/IAT_Gender_Toy_Survey">
        Gender-Toy IAT
      </main-button>

      <main-button routeTo="/IAT_Gender_Clothing_Survey">
        Gender-Clothing IAT
      </main-button>

      <main-button routeTo="/IAT_Gender_Color_Survey">
        Gender-Color IAT
      </main-button>

      <main-button routeTo="/IAT_Gender_Roles_Survey">
        Gender-Roles IAT
      </main-button>

      <main-button routeTo="/IAT_Gender_Subject_Survey">
        Gender-Subject IAT
      </main-button>

      <main-button routeTo="/IAT_Gender_Occupation_Pre_Survey">
        Occupation Test
      </main-button>

      <h3 style="text-decoration: underline; cursor: pointer; font-size: 16px" @click="iatType = ''">
        Go back
      </h3>
    </section>

    <section v-if="iatType === 'race'">
      <main-button routeTo="/IAT_Black_White_Survey">
        Black-White IAT
      </main-button>
      <main-button routeTo="/"> Black-Asian IAT </main-button>
      <main-button routeTo="/"> Asian-White IAT </main-button>
      <h3 style="text-decoration: underline; cursor: pointer; font-size: 16px" @click="iatType = ''">
        Go back
      </h3>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import MainButton from "../../components/Buttons/MainButton.vue";

let iatType = ref("");

function handleGender() {
  iatType.value = "gender";
}

function handleRace() {
  iatType.value = "race";
}
</script>

<style scoped>
.iat-choose-test-main {
  background: url("../../assets/app_icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.choose-iat {
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
