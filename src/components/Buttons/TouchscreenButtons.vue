<template>
  <div class="choice left-choice">
    <slot name="left"></slot>
  </div>
  <div class="choice right-choice">
    <slot name="right"></slot>
  </div>
</template>

<style scoped>
.choice {
  background: #85e9bf;
  height: 16vw;
  width: 28vw;
  max-width: 201px;
  max-height: 190px;
  border-radius: 12%;
  min-height: 200px;
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

@media (max-width: 750px) {
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
    height: 35vw !important;
    width: 38vw !important;
  }
}

@media (max-width: 425px) {
  .choice {
    width: 41vw !important;
  }
}
</style>
