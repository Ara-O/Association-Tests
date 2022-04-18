<template>
  <div class="choice left-choice">
    <slot name="left"></slot>
  </div>
  <div class="choice right-choice">
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {

}
</script>

 <style scoped>
.choice {
  background: #85e9bf; 
  height: 28vw;
  width: 28vw;
    max-width: 257px;
    max-height: 240px;
  border-radius: 12%;
  position: absolute;
  bottom: 20px;
  box-shadow: -2px 3px 4px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

.choice:active {
  box-shadow: none;
  transform: translate(-2px, 2px);
}

.left-choice {
  left: 50px;
  font-size: 2.4vh;
}
.right-choice {
  right: 50px;
  font-size: 2.4vh;
}

@media (max-width: 595px) {
  .left,
  .right {
    font-size: 2.5vh;
    line-height: 33px;
  }

  .left-choice {
    left: 15px;
    font-size: 2.4vh;
  }

  .right-choice {
    right: 15px;
    font-size: 2.4vh;
  }

  .choice {
    height: 35vw;
    width: 38vw;
  }
}
</style>