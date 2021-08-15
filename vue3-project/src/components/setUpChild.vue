<!--
 * @Author: your name
 * @Date: 2021-08-14 17:13:27
 * @LastEditTime: 2021-08-14 17:27:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\components\setUpChild.vue
-->
<template>
  <div>
    <button @click="setMsg">向父组件发送事件</button>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  props:{
    title:String
  },
  setup (props,context) {
    console.log('props',props.title);
    const {title} = toRefs(props)
    console.log('title',title.value);
    function setMsg(){
      context.emit('getMsg',{msg:'我是子组件发送的消息'})
    }
    return {
      setMsg
    }
  }
}
</script>

<style lang="scss" scoped>

</style>