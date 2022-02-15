<template>
  <div class="home">
    <choose-test></choose-test>
   </div>
</template>

<script>
// @ is an alias to /src
import ChooseTest from "@/components/ChooseTest.vue";

export default {
  name: "Home",
  components: {
    ChooseTest,
  },
};
</script>
