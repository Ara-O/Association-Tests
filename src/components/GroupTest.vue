<template>
  <div>
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
      <h5>Please enter your family's Unique ID</h5>
      <input type="text" name="uid" id="family-uid" v-model="familyUniqueId" />
      <br />
      <label for="role" class="role-label"
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
      <input type="text" v-model="individualUid" />
      <br /><br />
      <button @click="storeDataWithExistingUniqueId">Submit</button>
    </div>

    <!-- Dont have a unique id -->
    <div v-else-if="userHasUniqueId === 'false'">
      <h5>Here is your family unique id</h5>
      <u
        ><h5 style="margin-bottom: 0px">{{ getUID }}</h5></u
      >
      <label for="role" class="role-label"
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
      <input type="text" v-model="individualUid" />
      <button @click="storeDataWithNewUniqueId">Submit</button>
    </div>
  </div>
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
    };
  },

  computed: {
          ...mapGetters(['getUID', 'getIatData'])
  },

  methods: {
      storeDataWithExistingUniqueId(){
          this.$emit("storeDataWithExistingUniqueId", this.role, this.individualUid, this.familyUniqueId)
      },
      storeDataWithNewUniqueId(){
          this.$emit("storeDataWithExistingUniqueId", this.role, this.individualUid, this.getUID)
      },
  }
};
</script>

<style scoped>

.group-test-instructions {
  max-width: 404px;
  width: auto;
  padding: 0px 10px;
  line-height: 25px;
  font-weight: 400;
}

#unique-id-label {
  margin-right: 20px;
}

select {
  font-size: 13px;
}
</style>