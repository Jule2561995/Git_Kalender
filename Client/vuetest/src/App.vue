<template>
  <div id="app">
    <Interface msg="Geburtstagskalender"/>
  </div>
</template>

<script>
import Interface from './components/Interface.vue'

export default {
  name: 'app',
  components: {
    Interface
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
