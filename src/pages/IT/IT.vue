<template>
  <main>
    <h3 style="font-size: 35px; margin-bottom: 36px; font-weight: 600">
      Choose type
    </h3>
    <section class="it-section" v-if="version === ''">
      <button class="it-btn" @click="version = 'Number'">Number Version</button>
      <button class="it-btn" @click="version = 'Name'">Name Version</button>

      <h3
        style="
          text-decoration: underline;
          cursor: pointer;
          font-size: 16px;
          margin-top: 0px;
        "
        @click="goToHome"
      >
        Go back
      </h3>
    </section>
    <section v-if="version === 'Number'">
      <main-button routeTo="/IT_Number_White">White</main-button>
      <main-button routeTo="/IT_Number_Black">Black</main-button>
      <main-button routeTo="/IT_Number_EastAsian">East Asian</main-button>
      <h4 @click="version = ''" class="go-back">Go back</h4>
    </section>
    <section v-if="version === 'Name'">
      <main-button routeTo="/IT_Name_White">White</main-button>
      <main-button routeTo="/IT_Name_Black">Black</main-button>
      <main-button routeTo="/IT_Name_EastAsian"> East Asian</main-button>
      <h4 @click="version = ''" class="go-back">Go back</h4>
    </section>
  </main>
</template>

<script>
import MainButton from "../../components/Buttons/MainButton.vue";
export default {
  components: {
    "main-button": MainButton,
  },
  data() {
    return {
      version: "",
    };
  },

  methods: {
    goToHome() {
      this.$router.push("/Home");
    },
  },
};
</script>

<style scoped>
main {
  background: url("../../assets/app_icons/patternbg.jpg");
  background-size: 433px;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.test-btn {
  padding: 20px 36px;
  font-weight: 300;
  margin-bottom: 20px;
}
.it-btn {
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  padding: 23px 34px;
  height: 60px;
  display: flex;
  font-size: 14px;
  align-items: center;
  border: none;
  font-weight: 300;
}

.it-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.it-btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}

.go-back {
  color: purple;
  text-decoration: underline;
  cursor: pointer;
}
</style>
