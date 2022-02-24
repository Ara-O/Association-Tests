<template>
  <main>
    <h3 class="choosetest">Choose Test</h3>
    <!-- //-------- -->
    <router-link
      to="/IAT"
      class="routerlink test_btn"
      tabindex="0"
      tag="button"
    >
      Implicit Association Test
    </router-link>
    <router-link to="/IRBT" class="routerlink test_btn" tag="button">
      Implicit Racial Bias Test
    </router-link>
    <router-link to="/IT" class="routerlink test_btn" tag="button">
      Individuation Training
    </router-link>
    <!-- //-------------  -->
    <!-- <div class="container">
  <img src="../assets/app-icons/jellybeanbtn.png" alt="Jelly bean" style="width:34%;">
   <router-link to="/IAT" class="centered" tabindex="0" tag="button">
        Implicit Association Test
      </router-link> 
    </div> -->
    <!-- //  -->
  </main>
</template>

<script>
export default {
  name: "ChooseTest",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-image: url("../assets/app-icons/patternbg.jpg");
  height: 100vh;
  background-repeat: repeat;
  background-size: 433px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h3 {
  margin: 40px 0 0;
}

.choosetest {
  margin-bottom: 50px;
  font-size: 49px;
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
}

.test_btn:hover {
  box-shadow: 0px 0px 0px #b9b9b9;
  transition: all 250ms ease-in-out;
  transform: translate(-2px, 2px);
}

a.routerlink {
  text-decoration: none;
  color: white;
  font-size: 15px;
}

/* .container {
  position: relative;
  text-align: center;
  color: white;
} */

/* Centered text */
/* .centered {
  position: absolute;
  top: 50%;
  text-align: center;
  width: 106px;
  color: white;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  text-shadow: 1px 1px 1px #bebebe;
} */
</style>
