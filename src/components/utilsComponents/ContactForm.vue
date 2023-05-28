<template>
  <div id="popup" class="popup-modal" :class="modeType">
    <div class="overlay" @click="$emit('closePingMeForm')"></div>
      <div class="content">
        <div class="close-btn" @click="$emit('closePingMeForm')">&times;</div>
        <div class="contact-form">
          <h2>Message Me</h2>
          <form>
            <input type="text" id="name" name="firstname" placeholder="Your name..">
            <input type="text" id="email" name="firstname" placeholder="Your email..">
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Send Message">
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["modeType"],
};
</script>

<style>

.popup-modal .overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 1;
}

.popup-modal .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  width: 450px;
  z-index: 2;
  box-sizing: border-box;
  padding: 18px 40px;
}

.popup-modal .close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
  background: #222;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
}
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 0.1px solid #9b9b9b;
  box-sizing: border-box;
  margin-top: 3px;
  margin-bottom: 16px;
  resize: vertical;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

h2 {
  margin-bottom: 15px;
  font-size: 22px;
  text-align: center;
}

textarea {
  height: 120px;
}

input[type=submit] {
  background-color: #ff4539;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 13px;
}
input[type=text]:focus {
  border: 1px solid #ff4539;
}

textarea:focus {
  border: 0.1px solid #ff4539;
}

.contact-form {
  border-radius: 5px;
  padding: 20px;
}
input[type=submit]:hover {
  background-color: #000000;
}

.dark .content  {
    background-color: #000;
}

.dark input[type=submit]:hover {
  background-color: #ffffff;
  color: black;
}

</style>
