<template>
  <main>
    <h3 style="font-size: 35px; margin-bottom: 36px; font-weight: 600">Choose test</h3>
    <jelly-button whereTo="/IT/White" class="test-btn">White</jelly-button>
    <jelly-button whereTo="/IT/Black" class="test-btn">Black</jelly-button>
    <jelly-button whereTo="/IT/EastAsian" class="test-btn">East Asian</jelly-button>
  </main>
</template>

<style scoped >
main {
  background: url("../../assets/app-icons/patternbg.jpg");
    background-size: 433px;
background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.test-btn{
  padding: 15px 34px;
  font-weight: 300;
  margin-bottom: 20px;
}
</style>