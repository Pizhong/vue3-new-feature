<!--
 * @Author: your name
 * @Date: 2021-08-14 16:27:42
 * @LastEditTime: 2021-08-14 17:03:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\views\compsitionApi.vue
-->
<template>
  <div>
    <h2>Ref响应式</h2>
    <div>{{num}}</div>
    <button @click="addNum">num++</button>

    <p>------------------------------------</p>
    <h2>Reative响应式</h2>
    <div>carName:{{car.name}}</div>
    <div>carPrice:{{car.price}}</div>
    <div>
      carOwner:
      <span v-for="(item,index) in car.owner" :key="index" style="margin-right:10px;">{{item}}</span>
    </div>
    <button @click="addPrice">price++</button> | 
    <button @click="changeName">changeName</button>
  </div>
</template>

<script>
import {reactive, ref} from "vue"
export default {
  setup () {
    // 使用ref定义响应式数据 简单类型数据
    const num = ref(1)

    // 注意：对ref响应式数据进行修改，需要对其value属性进行修改
    function addNum(){
      num.value++
    }
    // 使用reative定义复杂类型数据
    const car = reactive({
      name:"宝马",
      price:1000000,
      owner:['李四','张三']
    })
    // 注意：对reative响应式数据进行修改，不需要对其value属性进行修改
    function addPrice(){
      car.price++
    }
    function changeName(){
      car.name = "大众"
    }

    // 将变量、函数return出去
    return {
      num,
      addNum,
      car,
      addPrice,
      changeName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>