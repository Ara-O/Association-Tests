<template>
  <main @click="startTest">
    <div class="style-instruction">
      <h3>Tap left for Male Name/Images</h3>
      <h3>Tap right for Female Name/Images</h3>
      <h3>Tap anywhere to begin!</h3>
    </div>

    <clicker>
      <template #left>Example</template>
      <template #right>Example</template>
    </clicker>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400&display=swap");
h3 {
  font-size: 2.5vh;
}

.style-instruction {
  width: 480px;
  height: 240px;
  display: flex;
  box-shadow: -3px -3px 7px #eeeeeeb2, 4px 4px 5px rgb(218 218 219 / 95%);
  background: white;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.style-instruction h3 {
  margin: 11px 0px;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 595px) {
  main {
    background: white;
  }

  .style-instruction {
    padding: 33px 28px;
    width: 262px;
  }

  .style-instruction h3 {
    font-size: 2vh;
  }
}
</style>

<script>
export default {
  methods: {
    startTest() {
      // console.log('Starting test');
      this.$router.push("IAT_TS_Test1");
    },
  },
};
</script>