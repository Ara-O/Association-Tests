<template>
  <main>
    <h3 class="choose-iat">Select IBT</h3>
    <section v-if="ibt == ''">
      <btn whereTo="/IBT_Choose_Test" class="button" @click="handleGender"
        >Gender IBT</btn
      >
      <btn whereTo="/IBT_Choose_Test" class="button" @click="handleRace"
        >Race IBT</btn
      >
      <btn whereTo="/IBT_Cat_Dog_Survey" class="button"
        >Cat-Dog IBT</btn
      >
      <router-link
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        class="router-link-back"
        to="/Home"
      >
        Go back
      </router-link>
    </section>

    <!-- Second section -->

    <section v-if="ibt === 'gender'">
      <router-link
        to="/IBT_Gender_Toy_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Toy IBT
      </router-link>


      <router-link
        to="/IBT_Gender_Clothing_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Clothing IBT
      </router-link>

      <router-link
        to="/IBT_Gender_Subject_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Subject IBT
      </router-link>

      <router-link
        to="/IBT_Gender_Color_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Color IBT
      </router-link>

      <router-link
        to="/IBT_Gender_Roles_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Roles IBT
      </router-link>
      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="ibt = ''"
      >
        Go back
      </h3>
    </section>

    <section v-if="ibt === 'race'">
      <router-link
        to="/IBT_Black_White_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Black-White IBT
      </router-link>
      <router-link to="/IBT_Choose_Test" class="routerlink test_btn" tag="button">
        Black-Asian IBT
      </router-link>
      <router-link to="/IBT_Choose_Test" class="routerlink test_btn" tag="button">
        Asian-White IBT
      </router-link>
      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="ibt = ''"
      >
        Go back
      </h3>
    </section>
  </main>
</template>


<script>
import btn from "../../components/MainBtn.vue"
export default {
  components: {
    btn,
  },

  data() {
    return {
      ibt: "",
    };
  },

  methods: {
    handleGender() {
      this.ibt = "gender";
    },

    handleRace() {
      this.ibt = "race";
    },
  },
};
</script>

<style scoped>
main {
  background: url("../../assets/App_Icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
}

.button {
  font-weight: 300;
  width: 117px;
}

.test_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(185deg, #7eefbf, #389820);
  min-height: 60px;
  border-radius: 47px;
  width: 243px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  /* padding: 9px 34px; */
  font-size: 14px;
}

.test_btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}

a.routerlink {
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 300;
}

.choose-iat {
  font-size: 34px;
  font-weight: 600;
  color: #2c3e50;
}

.router-link-back:active {
  color: purple;
}
</style>