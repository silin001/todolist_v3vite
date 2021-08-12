<!--
 * @Author: your name
 * @Date: 2021-08-12 21:59:07
 * @LastEditTime: 2021-08-12 22:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeServere:\web-kf\my-Demos\todolist_v3vite\src\views\index.vue
-->
<template>
  <div class="index">
    <h1>viteDemos</h1>
    <div class="row">
      <div class="col-xs-8">
        <!-- <Header data={{ a: '666' }} /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-xs-3">
        <div class="list-group">
          <router-link class="list-group-item"
                       to="/index/Test">test</router-link>
          <router-link class="list-group-item"
                       to="/index/TodoList">TodoList</router-link>
          <router-link class="list-group-item"
                       to="/index/MockTest">mockjs</router-link>
          <router-link class="list-group-item"
                       to="/index/AdminProject">element-plus后台管理</router-link>
        </div>
      </div>
      <div class="col-xs-9">
        <div class="panel">
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: 'index',
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }

  }
};
</script>
<style scoped lang='less'>
.index {
}
</style>