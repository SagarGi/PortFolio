<template>
  <div class="content">
    <div class="my-information">
      <div class="heading">
        <h2>Hello World !!</h2>
        <img v-if="modeType === 'light'" class="hand-wave" src="./assets/images/wave-black.png" alt="wave-hand">
        <img v-else class="hand-wave" src="./assets/images/wve-white.png" alt="wave-hand">
      </div>
      <div class="information" :class="modeType">
        <p>I am sagar gurung,</p>
        <p>programmer | test automation engineer</p>
        <div class="heading-with-image">
          <p>working from</p>
          <img src="./assets/images/nepal.png" alt="nepal">
          <img src="./assets/images/baoudha.png" alt="boudha">
        </div>
      </div>
    </div>
    <div class="robot-image">
    </div>
  </div>
</template>
<script>
 export default {
   props: ['modeType'],
   name: "ContentComponent"
 }
</script>
<style scoped>
.content{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
  margin-top: 15px;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
}

.information {
  padding: 10px 0;
}

.information, p {
  color: #7E7E7E;
  padding: 10px 0;
}

.heading-with-image {
  display: flex;
  justify-content: start;
  align-items: self-start;
}

.heading-with-image img {
  width: 22px;
  height: 22px;
  padding-left: 4px;
  padding-top: 5px;
}

.hand-wave {
  width: 45px;
  height: 40px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}
</style>