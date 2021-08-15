<!--
 * @Author: your name
 * @Date: 2021-08-15 17:22:51
 * @LastEditTime: 2021-08-15 18:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\views\computed.vue
-->
<template>
  <div>
    <div style="margin-bottom:10px;">
      <input type="text" v-model="firstName" placeholder="请输入你的姓氏">
      <input type="text" v-model="lastName" placeholder="请输入你的名字">
    </div>

    <div>
      <input type="text" v-model="fullName1">
      <input type="text" v-model="fullName2">
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect } from "vue"
export default {
  setup () {
    // let fullName1, fullName2 = ref();
    let fullName1 = ref()
    let fullName2 = ref()
    const state = reactive({
      firstName:'李',
      lastName:'大嘴'
    })

    /**
     * 演示第一个Watch
     * 三个参数：
     * 参数1：监听的对象
     * 参数2：回调函数
     * 参数3：立即监听与深度监听的参数对象
     */
    watch(state,(val)=>{
      console.log('watch for state:',val);
      const {firstName, lastName} = val;
      fullName1.value = firstName + '_' + lastName;
    },
    {
      immediate:true,
      deep:true
    }
    )

    /**
     * 下面的写法主要是对比上面的watch监听
     * watch中监听的对象也就是第一个参数，分为两种情况：
     *  - 1. 监听的对象是被ref或者reactive包裹的响应式对象，则可以在第一个参数中直接写出对象
     *  - 2. 监听的对象不是一个响应式的对象，则不能直接作为第一个参数值，而是应该使用回调函数的形式，如下代码
     */
    watch(()=>state.firstName,(val)=>{
      console.log('watch for first:',val);
    })
    /**
     * Watch与WatchEffect的几点对比如下：
     * 1. WatchEffect不需要指定监听的对象，而是在回调函数中任何响应对象的改变都会触发回调函数的重新计算，这应该是最大的不同
     * 2. WatchEffect无法拿到变化对象的新值、旧值，Watch的回调函数中新、旧值以参数的形式展现
     * 3. WatchEffect在页面加载时默认会进行加载一次（这与computed计算属性相似），而Watch需要手动开启immediate为true
     */
    watchEffect(()=>{
      const {firstName,lastName} = state
      fullName2.value = firstName+'-'+lastName
    })
    /**
     * watch：同时监听多个属性
     * 这种方式第二个参数的构造函数中，也要传递一个数组，数组中的值序号对应着监听属性的序号（这话说的有点绕，但是你应该知道的）
     * 这种方式的特点：
     *  - 1. 少写几个watch监听
     *  - 2. 但只能将相关功能的watch放在一起，否则，当完全不相干的属性监听放在一个watch之后，任何一个数据的变化都会引起整个回调函数（包含了N多个业务）重新计算
     */
    watch([() => state.firstName, () => state.lastName], ([firstName, lastName]) => {
            // 这里就直接打印测试了
            console.log(firstName, lastName);
    });
    return {
      ...toRefs(state),
      fullName1,
      fullName2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>