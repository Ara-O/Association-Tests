<template>
  <main>
    <h3 class="choose-iat">Select IAT</h3>
    <router-link
      to="/IAT_Gender_Survey"
      class="routerlink test_btn"
      tag="button"
    >
      Gender IAT
    </router-link>
    <router-link to="/IAT_Black_White_Survey" class="routerlink test_btn" tag="button">
      Black-White IAT
    </router-link>
    <router-link to="/" class="routerlink test_btn" tag="button">
      Black-Asian IAT
    </router-link>
    <router-link to="/" class="routerlink test_btn" tag="button">
      Asian-White IAT
    </router-link>
  </main>
</template>

<style scoped>
main {
  background: url("../../assets/app-icons/patternbg.jpg");
  background-repeat: repeat;
  background-size: 433px;
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
</style>