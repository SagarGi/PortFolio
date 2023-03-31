<template>
  <div class="header">
    <nav class="navbar">
      <span class="icon ion-md-list-box"> SagarGi</span>
      <ul class="navitems">
        <li>Ping me</li>
        <li @click="changeTheme">
          <span v-if="!nightMode" class="icon ion-md-moon"></span>
          <span v-else class="icon ion-md-sunny"></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      nightMode: true,
    };
  },
  methods: {
    changeTheme() {
      this.nightMode = !this.nightMode;
    },
  },
};
</script>

<style></style>
