<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/the_dollar.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter/>
    <SoundCloudPlayer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SoundCloudPlayer from './components/media-player/players/SoundCloudPlayer.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    SoundCloudPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
