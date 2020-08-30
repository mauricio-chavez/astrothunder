<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: #f0f0f0;
}

.slide-enter {
  transform: translateY(-30px);
  opacity: 0;
}
.slide-enter-active {
  transition: all 1s ease-in-out;
}
.slide-move {
  transition: transform 1s ease-in;
}
</style>
