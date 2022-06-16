<template>
  <main>
    <h3 style="font-size: 35px; margin-bottom: 36px; font-weight: 600">
      Choose type
    </h3>
    <section class="it-section" v-if="version === ''">
      <button class="it-btn" @click="version = 'Number'">Number Version</button>
      <button class="it-btn" @click="version = 'Name'">Name Version</button>

      <h3 style="text-decoration: underline; cursor: pointer; font-size: 16px; margin-top: 0px" @click="goToHome">
        Go back
      </h3>
    </section>
    <section v-if="version === 'Number'">
      <jelly-button whereTo="/IT_Number_White" class="test-btn"
        >White</jelly-button
      >
      <jelly-button whereTo="/IT_Number_Black" class="test-btn"
        >Black</jelly-button
      >
      <jelly-button whereTo="/IT_Number_EastAsian" class="test-btn"
        >East Asian</jelly-button
      >
      <h4 @click="version = ''" class="go-back">Go back</h4>
    </section>
    <section v-if="version === 'Name'">
      <jelly-button whereTo="/IT_Name_White" class="test-btn"
        >White</jelly-button
      >
      <jelly-button whereTo="/IT_Name_Black" class="test-btn"
        >Black</jelly-button
      >
      <jelly-button whereTo="/IT_Name_EastAsian" class="test-btn">
        East Asian</jelly-button
      >
      <h4 @click="version = ''" class="go-back">Go back</h4>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      version: "",
    };
  },

  methods: {
    goToHome(){
      this.$router.push("/Home")
    }
  }
};
</script>

<style scoped >
main {
  background: url("../../assets/App_Icons/patternbg.jpg");
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
  display: block;
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  padding: 23px 34px;
  font-size: 14px;
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