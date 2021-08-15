<!--
 * @Author: your name
 * @Date: 2021-08-14 14:13:43
 * @LastEditTime: 2021-08-14 14:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\components\child.vue
-->
<template>
  <div>
    我是子组件
    <div>这是来自父组件：{{msg}}</div>
  </div>
</template>

<script>
  export default {
    props:{
      msg:String
    }
  }
</script>

<style lang="scss" scoped>

</style>