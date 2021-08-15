<!--
 * @Author: your name
 * @Date: 2021-08-14 12:43:47
 * @LastEditTime: 2021-08-14 13:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\views\ref.vue
-->
<template>
  <div>
    <div v-for="(item,index) in list" :key="index" :ref="setItemRef">{{item}}</div>
    <button @click="getItem">getItem</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[],
        itemRefs:[]
      }
    },
    mounted(){
      this.list = [1,2,3,4,5,6]
    },
    methods:{
      setItemRef(el) {
        if (el) {
          this.itemRefs.push(el)
        }
      },
      getItem(){
        console.log(this.itemRefs);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>