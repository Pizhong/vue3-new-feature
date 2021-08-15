<!--
 * @Author: your name
 * @Date: 2021-08-15 17:22:51
 * @LastEditTime: 2021-08-15 17:39:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\views\computed.vue
-->
<template>
  <div>
    <div style="margin-bottom:10px;">
      <input type="text" v-model="name" placeholder="请输入你的名字">
      <input type="text" v-model="phone" placeholder="请输入你的电话">
    </div>

    <div>
      <!-- 计算属性fullName没有set函数 -->
      <input type="text" v-model="fullName">
      <!-- 计算属性fullPhone有set函数 -->
      <input type="text" v-model="fullPhone">
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue"
export default {
  setup () {
    // 定义一个响应式对象
    const state = reactive({
      name:'',
      phone:''
    })
    // 当Computed只有一个回调函数的话，那么该回调函数默认就是Computed中的Getter
    const fullName = computed(()=>{
      return state.name
    })
     // 当Computed的参数为一个对象时，对象中就可以指定setter与getter函数了
    const fullPhone = computed({

      set:(val) => {
        console.log(val);
        state.phone = val
      },
      get:()=>{return state.phone}
    })
    return {
      ...toRefs(state),
      fullName,
      fullPhone
    }
  }
}
</script>

<style lang="scss" scoped>

</style>