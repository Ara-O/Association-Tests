<template>
  <main @click="startTest">
    <div  class="style-instruction">
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
h3 {
  font-size: 2.5vh;
}

.style-instruction{
     box-shadow: 0px 0px 5px #a7a7a7;
    background: white;
    box-sizing: border-box;
    padding: 32px 66px;
    border-radius: 4px;
}

@media (max-width: 595px) {
  main{
  background: white;
  }

  .style-instruction{
        padding: 33px 34px;
  }
  .style-instruction h3{
    font-size: 2vh;
  }

}
</style>

<script>
export default {
    methods: {
        startTest(){
            // console.log('Starting test');
            this.$router.push("IAT_TS_Test1")
        }
    }
}
</script>