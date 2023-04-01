<template>
  <header>
    <h2>{{namePrefix}}<span id="suffix">{{nameSuffix}}</span></h2>
    <nav>
      <button class="ping-me" :class="modeType">Ping Me</button>
      <span v-if="modeType === 'light'" class="theme-icon" @click="$emit('changeThemeMode')"><i class="fa fa-moon-o"></i></span>
      <span v-else class="theme-icon" @click="$emit('changeThemeMode')"><i class="fa fa-sun-o"></i></span>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "HeaderComponent",
    props: ['modeType'],
    data() {
      return {
        namePrefix: "<Sagar",
        nameSuffix: "Gi />"
      }
    }
  }
</script>

<style>

header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 15vh;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 100px;
}

.theme-icon:hover {
  cursor: pointer;
}

#suffix {
  color: #FF4539;
}

.ping-me {
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

.light button{
  background-color: white;
}

.dark button{
  background-color: black;
}
</style>