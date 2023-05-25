<template>
  <div id="app" class="modal-vue">
    <div class="overlay" v-if="showModal" @click="showModal"></div>
    <div class="modal" v-if="showModal">
      <button class="close" @click="showModal">x</button>
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["modeType", "showModal"],
  data() {},
};
</script>

<style>
.modal-vue .overlay {
  top: 0;
  position: absolute;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-vue .modal {
  position: relative;
  left: -50%;
  width: 400px;
  z-index: 9999;
  background-color: #fff;
}
</style>
