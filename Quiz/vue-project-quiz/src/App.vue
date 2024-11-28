<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template> <script>
import Header from "./components/Header.vue";
export default { name: "App", components: { Header } };
</script> 

<style>
/* Глобальные стили приложения */
.container {
  margin: 0;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: 744px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #333;
}
#app {
  text-align: center;
}
</style>