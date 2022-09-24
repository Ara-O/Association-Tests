<template>
<router-link :to="routeTo" class="btn" :class="{compressed: buttonType === 'compressed'}"><slot></slot></router-link>
</template>

<script setup>
 const props = defineProps({
    routeTo: {
      type: String,
      requred: false
    },
    buttonType: {
      type: String,
      requred: false,
      default: "normal"
    }
  })
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
  padding: 21px 34px;
  font-weight: 300;
  font-size: 14px;
  height: 20px
}

.compressed{
  height: 15px;
}

.btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}
</style>