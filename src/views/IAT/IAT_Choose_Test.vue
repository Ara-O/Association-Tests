<template>
  <main>
    <h3 class="choose-iat">Select IAT</h3>
    <section v-if="iattype == ''">
      <btn
        whereTo="/IAT_Choose_Test"
        class="button"
        @click="handleGender"
        >Gender IAT</btn
      >
      <btn whereTo="/IAT_Choose_Test" class="button" @click="handleRace"
        >Race IAT</btn
      >
        <router-link
        style="text-decoration: underline; cursor: pointer; font-size: 16px; "
        class="router-link-back"
        to="/Home"
      >
        Go back
        </router-link>
    </section>

    <section v-if="iattype === 'gender'">
      <router-link
        to="/IAT_Gender_Toy_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Toy IAT
      </router-link>

      <router-link
        to="/IAT_Choose_Test"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Clothing IAT
      </router-link>

      <router-link
        to="/IAT_Choose_Test"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Subject IAT
      </router-link>

      <router-link
        to="/IAT_Choose_Test"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Color IAT
      </router-link>

      <router-link
        to="/IAT_Choose_Test"
        class="routerlink test_btn"
        tag="button"
      >
        Gender-Roles IAT
      </router-link>
      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="iattype = ''"
      >
        Go back
      </h3>
    </section>

    <section v-if="iattype === 'race'">
      <router-link
        to="/IAT_Black_White_Survey"
        class="routerlink test_btn"
        tag="button"
      >
        Black-White IAT
      </router-link>
      <router-link to="/" class="routerlink test_btn" tag="button">
        Black-Asian IAT
      </router-link>
      <router-link to="/" class="routerlink test_btn" tag="button">
        Asian-White IAT
      </router-link>
      <h3
        style="text-decoration: underline; cursor: pointer; font-size: 16px"
        @click="iattype = ''"
      >
        Go back
      </h3>
    </section>
  </main>
</template>

<script>
import btn from "../../components/Jelly_Button.vue";
export default {
  components: {
    btn,
  },

  data() {
    return {
      iattype: "",
    };
  },

  methods: {
    handleGender() {
      this.iattype = "gender";
    },

    handleRace() {
      this.iattype = "race";
    },
  },
};
</script>

<style scoped>
main {
  background: url("../../assets/app-icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
  display: flex;
  justify-content: center;
  align-items: center
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

.router-link-back:active{
color: purple;
}
</style>