<!--
 * @Author: your name
 * @Date: 2021-08-14 10:56:55
 * @LastEditTime: 2021-08-14 12:44:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\App.vue
-->
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
