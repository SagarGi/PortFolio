<template>
  <div class="main">
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "./others/HeaderComponent.vue";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
* {
  font-family: monospace;
}
</style>
