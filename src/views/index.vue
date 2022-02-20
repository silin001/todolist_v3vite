
<template>
  <div class="index full">
    <el-container class="full">
      <el-header class="text-center">
        <h2>viteDemos</h2>
      </el-header>
      <el-container class="container full">
        <el-aside class="aside">
          <div class="list-group">
            <router-link class="list-group-item"
                         to="/index/Test">test</router-link>
            <router-link class="list-group-item"
                         to="/index/TodoList">TodoList</router-link>
            <router-link class="list-group-item"
                         to="/index/MockTest">mockjs</router-link>
            <router-link class="list-group-item"
                         to="/index/ScriptSetup">script setup语法糖</router-link>
            <router-link class="list-group-item"
                         to="/index/routerVuex">router&vuex</router-link>
            <router-link class="list-group-item"
                         to="/index/pinia">pinia</router-link>
            <router-link class="list-group-item"
                         to="/index/httpTest">接口相关测试</router-link>

          </div>
        </el-aside>
        <el-main>
          <div class="rightBox full">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>

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
      // console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }

  }
};
</script>
<style scoped lang='less'>
.index {
  // 路由全局配置了 选中添加class
  .active {
    color: red;
  }
  .container {
    height: calc(100% - 60px);
    .aside {
      width: 200px;
    }
  }
}
</style>