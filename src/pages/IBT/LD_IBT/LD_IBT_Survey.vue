<template>
  <section class="main">
    <div class="survey-box">
      <h3>Please provide us with your email address</h3>
      <h4>
        Note: Your email address will be used solely for payment purposes for
        taking part in this study and will not be used to identify you
        individually. Your participation in this study will remain anonymous.
      </h4>
      <input
        type="text"
        name="user-email"
        v-model="ld_email"
        id="email"
        class="ld-user-email"
        placeholder="Enter email address here"
      />
      <br />
      <button @click="startTest">Next</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";

let ld_email = ref<string>("");

const store = useStore();
const router = useRouter();

function startTest() {
  store.commit("storeLdEmail", ld_email.value);
}
</script>

<style scoped>
* {
  font-family: "Times New Roman", Times, serif;
}

.main {
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
}

.survey-box {
  box-shadow: -3px 1px 7px #eeeeeeb2, 2px 3px 5px rgb(218 218 219 / 95%);
  padding: 20px 40px 40px 40px;
  border-radius: 5px;
  width: auto;
  max-width: 500px;
}

.ld-user-email {
  text-align: center;
  font-size: 15px;
  height: 25px;
  border: solid 1px darkgray;
  border-width: 0px 0px 1px 0px;
}

button {
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -1px 3px 3px -1px #cbcbcb;
  cursor: pointer;
  border: none;
  transition: all 250ms ease-in-out;
  color: white;
  font-weight: 300;
  font-size: 14px;
  margin-top: 25px;
  height: 40px;
  width: 100px;
}

h3 {
  font-size: 17px;
}

h4 {
  line-height: 22px;
}
</style>
