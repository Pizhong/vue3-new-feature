<!--
 * @Author: your name
 * @Date: 2021-08-14 14:34:05
 * @LastEditTime: 2021-08-14 14:49:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\views\slot.vue
-->
<template>
  <div>
    <h1>父组件</h1>
    <slot-child>
      <h2>匿名插槽</h2>
    </slot-child>

    <slot-child>
      <template slot="s1" slot-scope="scope">
        <h2>具名插槽s1</h2>
        <h3>{{scope.data}}</h3>
      </template>
    </slot-child>

     <slot-child>
      <template v-slot:s2="scope">
        <h2>具名插槽s2</h2>
        <h3>{{scope.data}}</h3>
      </template>
    </slot-child>
  </div>
</template>

<script>
import SlotChild from '../components/slotChild.vue'
  export default {
  components: { SlotChild },
    
  }
</script>

<style lang="scss" scoped>

</style>