<template>
  <contact-experience
    v-if="surveyNotComplete"
    @surveyDone="surveyComplete"
  ></contact-experience>
  <main v-else>
    <h3>The test is over!</h3>
    <router-link to="/Home" tag="button" class="gohome">Go Home</router-link>
  </main>
</template>

<script>
import contactExperience from "../contact_experience.vue";
import storeContactExperience from "../../modules/storeContactExperience";
export default {
  components: {
    contactExperience,
  },
  data() {
    return{
      surveyNotComplete: true,
    }
  },

  methods: {
    surveyComplete(userData) {
      if (userData !== "opted-out") {
        storeContactExperience(userData, "IT-Contact-Experience", this);
      }
      this.surveyNotComplete = false;
    },
  },
};
</script>
<style scoped>
.gohome {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  margin-bottom: 25px;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  font-size: 15px;
  padding: 7px 24px;
  font-weight: 300;
  margin-bottom: 20px;
  height: 45px;
  width: 100px;
}

.gohome:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}
</style>