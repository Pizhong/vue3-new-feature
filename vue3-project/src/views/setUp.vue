<!--
 * @Author: your name
 * @Date: 2021-08-14 17:12:30
 * @LastEditTime: 2021-08-14 17:32:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\views\setUp.vue
-->
<template>
  <div>
    <set-up-child :title="title" @getMsg="fn"></set-up-child>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import SetUpChild from '../components/setUpChild.vue'
import { ref } from "vue"
export default {
  components:{SetUpChild},
  setup () {
    console.log('set up');
    const title = ref('set up')
    const msg = ref()
    function fn(e){
      console.log('子组件发送过来的消息',e);
      msg.value = e.msg
    }
    return {
      title,
      msg,
      fn
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('create');

  }
}
</script>

<style lang="scss" scoped>

</style>