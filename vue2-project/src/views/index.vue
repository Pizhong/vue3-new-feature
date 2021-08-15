<!--
 * @Author: your name
 * @Date: 2021-08-14 12:48:52
 * @LastEditTime: 2021-08-14 15:18:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\views\index.vue
-->
<template>
  <div>
    {{msg}}
    <div class="link">
      <router-link to="/ref">toRef</router-link> | 
      <router-link to="/slot">toSlot</router-link> | 
      <router-link to="/responsive">toResponsive</router-link>
    </div>
    <child msg="来自父组件index的值"></child>
  </div>
</template>

<script>
import child from '../components/child.vue'
  export default {
  components: { child },
    data(){
      return{
        msg:'vue2 project'
      }
    },
    mounted(){
      console.log('子组件',this.$children);
    }
  }
</script>

<style scoped>

.link a {
  font-weight: bold;
  color: #2c3e50;
}

.link a.router-link-exact-active {
  color: #42b983;
}
</style>