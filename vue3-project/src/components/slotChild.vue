<!--
 * @Author: your name
 * @Date: 2021-08-14 14:31:43
 * @LastEditTime: 2021-08-14 14:50:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\components\slotChild.vue
-->
!<template>
  <div>
    <div>下面是slot子组件的内容</div>
    <slot></slot>
    <slot name="s1" :data="msg1"></slot>
    <slot name="s2" :data="msg2"></slot>
    <div>---------------------------</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg1:'hello slot s1',
        msg2:'hello slot s2'

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>