<template>
  <div class="main-body">
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
        <img class="robot" src="./assets/images/robot.gif" alt="robot-head">
      </div>
    </div>
    <div class="thumps-up">
      <p>1099</p>
      <span class="give-like"><i class="fas fa-thumbs-up"></i></span>
<!--      <img v-if="modeType === 'light'" src="./assets/images/like-black.png" alt="thumps-up">-->
<!--      <img v-else src="./assets/images/like-white.png" alt="thumps-up">-->
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
  margin: 10px auto;
    padding-top: 20px;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
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

.robot-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}

.robot {
    width: 250px;
    height: 225px;
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

.thumps-up {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 10vh;
}

.thumps-up, img:hover {
    cursor: pointer;
}

.give-like {
    height: 50px;
    width: 50px;
    background-color: #FF4539;
    border-radius: 35px;
    text-align: center;
    line-height: 45px;
    color: white;
    font-size: 18px;
    margin-left: 10px;
}
span i {
    transition: all 0.3s linear;
}

span:hover i {
    transform: scale(1.5);
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