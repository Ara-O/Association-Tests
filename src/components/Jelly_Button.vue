<template>
  <router-link :to="whereTo" class="btn"><slot></slot></router-link>
</template>

<script>
export default {
  props: ["whereTo"],
};
</script>

<style scoped>
.btn {
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
  padding: 18px 37px;
}

.btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}
</style>