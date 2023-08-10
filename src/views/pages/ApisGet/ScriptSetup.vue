<template>
  <div class="ScriptSetup">
    <div>{{ signUpMode }}</div>
    <Foo ref="foo" class="lll" :title="666" @foo-click="handleClick" />
    <button @click="getFoo">ref获取子组件实例</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from "vue";

// 定义接口
// interface userItem {
//   name: string;
//   age: number;
// }

// // 用<>泛型使用接口约束数据
// const list = reactive<userItem[]>([
//   {
//     name: "小李1",
//     age: 12,
//   },
//   {
//     name: "孙悟空",
//   },
// ]);

import Foo from "./components/Foo.vue";
/*
script setip 写法
组件无需注册、变量数据无需return 就可以直接在tempalte使用
*/
const signUpMode = ref("v3 script setup");
const handleClick = (data: string) => {
  console.log("接收子组件事件数据", data);
};
const foo = ref(null);
const getFoo = () => {
  console.log("ref获取foo实例", foo);
};

// const p = () => {
//   return new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       const res = {
//         code: 200,
//         data: [1, 2, 3]
//       }
//       resolve(res)
//     }, 1000)
//   })
// }
// const post = await p()
</script>
<style scoped lang="less">
</style>
