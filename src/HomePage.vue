<template>
  <div class="app" :class="modeType">
    <HeaderComponent
      :modeType="modeType"
      @changeThemeMode="changeThemeMode"
      @pingMe="pingMe"
    />
    <ContentComponent :modeType="modeType" />
    <FooterComponent :modeType="modeType" />
    <ContactForm
      v-if="showModal"
      :mode-type="modeType"
      :show-modal="showModal"
    />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import ContentComponent from "./components/ContentComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ContactForm from "./components/utilsComponents/ContactForm.vue";
export default {
  name: "HomePage",
  data() {
    return {
      modeType: "light",
      showModal: false,
    };
  },
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContactForm,
  },
  methods: {
    changeThemeMode() {
      this.modeType = this.modeType === "light" ? "dark" : "light";
    },
    pingMe() {
      this.showModal = true;
    },
  },
};
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

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .app {
    height: auto;
  }
}
</style>
