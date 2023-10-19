<template>
  <div class="container">
    <Theader></Theader>
    <TSidebar></TSidebar>
    <router-view></router-view>
  </div>
</template>
<script>
import Theader from "./Layout/Header/Header.vue";
import TSidebar from "./Layout/Sidebar/Sidebar.vue";

export default {
  name: "App",
  components: {
    Theader,
    TSidebar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans", sans-serif;
  flex-shrink: 0;
  flex-grow: 0;
}

.container {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 10vh 90vh;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>