<template>
  <header>
    <h2>
      {{ namePrefix }}<span id="suffix">{{ nameSuffix }}</span>
    </h2>
    <nav>
      <button class="ping-me" @click="$emit('pingMe')" :class="modeType">
        Ping Me
      </button>
      <span
        v-if="modeType === 'light'"
        class="theme-icon"
        @click="$emit('changeThemeMode')"
        ><i class="fa fa-moon-o"></i
      ></span>
      <span v-else class="theme-icon" @click="$emit('changeThemeMode')"
        ><i class="fa fa-sun-o"></i
      ></span>
      <div class="switch-theme-pointer" v-bind:style="{ visibility: modeType === 'light' ? 'inherit' : 'hidden'}">
        <p class="left-arrow"><<</p>
        <p>switch theme</p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["modeType"],
  data() {
    return {
      namePrefix: "<Sagar",
      nameSuffix: "Gi />",
    };
  },
};
</script>

<style>
header {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  width: 85%;
}

nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 225px;
}

.theme-icon:hover {
  cursor: pointer;
}

#suffix {
  color: #ff4539;
}

.ping-me {
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}

.switch-theme-pointer {
  visibility: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 22px;
  background: #ededed;
  border-radius: 5px;
  padding: 1px 5px;
  -moz-animation: bounce 1.5s infinite linear;
  -o-animation: bounce 1.5s infinite linear;
  -webkit-animation: bounce 1.5s infinite linear;
  animation: bounce 1.5s infinite linear;
}

.switch-theme-pointer p {
  font-size: 11px;
  padding-right: 3px;
}

.left-arrow {
  padding-left: 2px;
  padding-right: 7px;
}

.light button {
  background-color: white;
}

.dark button {
  background-color: black;
}

@-webkit-keyframes bounce {
  0% {
    left: 0;
  }
  50% {
    left: -0.2em;
  }
  70% {
    left: -0.3em;
  }
  100% {
    left: 0;
  }
}
@-moz-keyframes bounce {
  0% {
    left: 0;
  }
  50% {
    left: -0.2em;
  }
  70% {
    left: -0.3em;
  }
  100% {
    left: 0;
  }
}
@-o-keyframes bounce {
  0% {
    left: 0;
  }
  50% {
    left: -0.2em;
  }
  70% {
    left: -0.3em;
  }
  100% {
    left: 0;
  }
}
@-ms-keyframes bounce {
  0% {
    left: 0;
  }
  50% {
    left: -0.2em;
  }
  70% {
    left: -0.3em;
  }
  100% {
    left: 0;
  }
}
@keyframes bounce {
  0% {
    left: 0;
  }
  50% {
    left: -0.2em;
  }
  70% {
    left: -0.3em;
  }
  100% {
    left: 0;
  }
}

</style>
