<template>
  <div class="index">
      <el-container class="container">
        <el-aside class="aside">
          <div class="list-group">
            <router-link class="list-group-item" to="/TodoList"
              >TodoList</router-link
            >
            <router-link class="list-group-item" to="/index/Test"
              >test</router-link
            >
            <router-link class="list-group-item" to="/index/routerVuex"
              >vue3使用router&vuex</router-link
            >
            <!-- <router-link class="list-group-item" to="/index/ScriptSetup"
              >script setup语法糖</router-link
            > -->
          </div>
        </el-aside>
        <el-main>
          <div class="rightBox">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
interface DataProps {}
export default {
  name: "index",
  setup() {
    const data: DataProps = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang="less">
.index {
    width: 100%;
    height: 100%;
  // 路由全局配置了 选中添加class

  .active {
    color: red;
  }
  .container {
    width: 70%;
    margin: 5% auto;
    // height: 80%;
    .aside {
      width: 200px;
    }
    .rightBox{
      // border: 1px solid;
    }
  }
}
</style>
