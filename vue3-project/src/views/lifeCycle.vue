<!--
 * @Author: your name
 * @Date: 2021-08-14 17:39:31
 * @LastEditTime: 2021-08-14 17:42:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\views\lifeCycle.vue
-->
!<template>
  <div>

  </div>
</template>

<script>
import {onMounted} from "vue"
export default {
  setup () {
    // mounted
    onMounted(() => {
      console.log('Component is mounted!')
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>