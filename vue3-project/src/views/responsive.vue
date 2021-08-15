<!--
 * @Author: your name
 * @Date: 2021-08-14 15:14:34
 * @LastEditTime: 2021-08-14 15:21:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\views\responsive.vue
-->
<template>
  <div>
    <div>vue3响应式</div>
    <div v-for="(item,index) in list" :key="index">{{item.name}}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[{
          id:1,
          name:'张三'
        },{
          id:2,
          name:'李四'
        }
        ]
      }
    },
    methods:{
      change(){
        this.list[0] = {id:3,name:"王五"}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>