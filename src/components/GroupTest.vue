<template>
  <div class="group-test-container" v-if="!submitted">
    <h4>Group Test</h4>
    <h5 class="group-test-instructions">
      If you're taking your test with a family member, please look below. If
      not, ignore this section
    </h5>
    <label for="unique-id" id="unique-id-label"
      >Do you have your family's Unique ID?</label
    >
    <select name="" id="unique-id" v-model="userHasUniqueId">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>

    <!-- Already have a unique id -->
    <div v-if="userHasUniqueId === 'true'">
      <h5 class="group-test-instructions">Please enter your family's Unique ID</h5>
      <input type="text" name="uid" id="family-uid" v-model="familyUniqueId" autocomplete="false"/>
      <br />
      <label for="role" class="group-test-instructions"
        >What is your role in the family?</label
      >
      <select name="role" id="role" v-model="role">
        <option value="child">Child</option>
        <option value="parent">Parent</option>
      </select>
      <br />
      <h5 class="group-test-instructions">
        Before you submit, enter a unique individual id ( it can be a name, or a
        random number ), but it should be unique to each family member
      </h5>
      <input type="text" v-model="individualUid" class="group-test-input-field"/>
      <br /><br />
      <button @click="storeDataWithExistingUniqueId" class="submit-btn">Submit</button>
    </div>

    <!-- Dont have a unique id -->
    <div v-else-if="userHasUniqueId === 'false'">
      <h5 class="group-test-instructions"><b>Here is your family unique id</b></h5>
      <u
        ><h5 style="margin-bottom: 0px">{{ getUID }}</h5></u
      >
      <label for="role" class="group-test-instructions"
        >What is your role in the family?</label
      >
      <select name="role" id="role" v-model="role">
        <option value="child">Child</option>
        <option value="parent">Parent</option>
      </select>
      <br />
      <h5 class="group-test-instructions">
        Before you submit, enter a unique individual id ( it can be a name, or a
        random number ), but it should be unique to each family member
      </h5>
      <input type="text" v-model="individualUid" class="group-test-input-field" autocomplete="false"/>
      <br> <br>
      <button @click="storeDataWithNewUniqueId" class="submit-btn">Submit</button>
    </div>
  </div>
    <h5 class="group-test-instructions" v-else>Your test has been recorded. <router-link to="/Home">Click here to return to home</router-link></h5>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  emits: ["storeDataWithExistingUniqueId", "storeDataWithNewUniqueId"],
  data() {
    return {
      userHasUniqueId: "",
      individualUid: "",
      role: "",
      familyUniqueId: "",
      submitted: false
    };
  },

  computed: {
          ...mapGetters(['getUID'])
  },

  methods: {
      storeDataWithExistingUniqueId(){
          this.$emit("storeDataWithExistingUniqueId", this.role, this.individualUid, this.familyUniqueId);
          this.submitted = true
      },
      storeDataWithNewUniqueId(){
          this.$emit("storeDataWithExistingUniqueId", this.role, this.individualUid, this.getUID);
          this.submitted = true;
      },
  }
};
</script>

<style scoped>
.group-test-container {
 box-shadow: 0 0 2px #d3d3d3;
    border: solid 1px #e5e5e5;
    padding: 51px 23px;
    box-sizing: border-box;
    border-radius: 10px;
}

.group-test-container h4:nth-child(1){
  margin-top: 0px;
}
.group-test-instructions {
  max-width: 404px;
  width: auto;
  padding: 0px 10px;
  font-size: 14px;
  line-height: 25px;
  font-weight: 400;
}

.group-test-input-field{
    border: solid 1px #8c8c8c;
    text-align: center;
    border-radius: 6px;
}

#unique-id-label {
  margin-top: 0px
}

select {
  font-size: 13px;
  margin-left: 15px
}

.submit-btn{
   background: linear-gradient(185deg, #7eefbf, #389820);
  border-radius: 47px;
  box-shadow: -2px 4px 4px -1px #cbcbcb;
  cursor: pointer;
  font-weight: 300;
  transition: all 250ms ease-in-out;
  color: white;
  text-decoration: none;
  padding: 13px 34px;
  font-size: 14px;
  border: none;
}
</style>