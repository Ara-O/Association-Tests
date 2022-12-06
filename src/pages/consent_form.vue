<template>
  <main class="consent-form-main">
    <div class="jumbotron">
      <h3>Consent Form</h3>
    </div>
    <br />
    <section>
      <div v-if="participating">
        <img
          src="../assets/app_icons/consent-form.png"
          alt="Consent form"
          class="consent-form-image"
        />
        <br />
        <div class="arrange-btns">
          <btn
            class="disagreement"
            routeTo="/consent-form"
            @click="participating = false"
            >No, I do not agree to participate</btn
          >
          <btn class="agreement" routeTo="/Home"
            >Yes, I agree to participate</btn
          >
        </div>
      </div>
      <div v-else>
        <h4>You can close out of this page</h4>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import btn from "../components/Buttons/MainButton.vue";
let participating = ref(true);
</script>

<style scoped>
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
  /* margin-top: 30px; */
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
