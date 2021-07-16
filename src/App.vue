<template>
  <login-header />
</template>

<script>
import LoginHeader from "./components/LoginHeader.vue";
export default {
  name: "App",
  components: {
    "login-header": LoginHeader,
  },
  setup() {},
};
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
