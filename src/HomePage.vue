<template>
  <div class="app" :class="modeType">
    <HeaderComponent :modeType="modeType" @changeThemeMode="changeThemeMode"/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  name: "HomePage",
  data() {
    return {
      modeType: "light"
    }
  },
  components: {
    HeaderComponent
  },
  methods: {
    changeThemeMode() {
      this.modeType = this.modeType === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab";
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
}

.dark {
  background: #000;
  color: #fff;
}

</style>
