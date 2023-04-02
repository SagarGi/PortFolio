<template>
  <div class="app" :class="modeType">
    <HeaderComponent :modeType="modeType" @changeThemeMode="changeThemeMode"/>
    <ContentComponent :modeType="modeType"/>
    <FooterComponent :modeType="modeType"/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import ContentComponent from "./components/ContentComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"
export default {
  name: "HomePage",
  data() {
    return {
      modeType: "light"
    }
  },
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
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
  color: #ffffff;
}

</style>
