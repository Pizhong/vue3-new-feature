<!--
 * @Author: your name
 * @Date: 2021-08-14 12:48:52
 * @LastEditTime: 2021-08-15 17:51:51
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
      <router-link to="/responsive">toResponsive</router-link> | 
      <router-link to="/compositionApi">toCompositionApi</router-link> | 
      <router-link to="/setUp">toSetUp</router-link> | 
      <router-link to="/lifeCycle">toLifeCycle</router-link> |
      <router-link to="/computed">toComputed</router-link> | 
      <router-link to="/watch">toWatch</router-link>

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
        msg:'vue3 project'
      }
    },
    mounted(){
      // console.log(this.$children);
      // 官方推荐
      console.log(this.$refs.cd);
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