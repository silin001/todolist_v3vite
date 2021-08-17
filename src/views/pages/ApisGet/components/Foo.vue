<template inherit-attrs='false'>
  <!-- inheritAttrs  不允许添加任何属性  貌似不生效-->
  <div class="templateBox">
    <h2>foo子组件</h2>
    <div>props:{{title}}</div>
    <button @click="fooClick()">发送事件</button>
  </div>
</template>
<script lang='ts' setup>
import { ref, onMounted, defineProps, defineEmit, useContext } from 'vue'
const test = ref('hello')
// 1、props使用 defineProps函数
// 写法1
// const props = defineProps({
//   title: Number
// })
// 写法2 ts写法  注意这里的类型 是ts写法
const props = defineProps<{ title: number }>()
console.log('🚀🚀 ~ file: foo.vue ~ line 17 ~ props', props)
//2、发送emit 使用 defineEmit
const emit = defineEmit(['foo-click'])
// 3、context 上下文，跟之前 setup第二个参数context一样。 expose方法用于导出实例  
const ctx = useContext()  //----------3.2貌似已经弃用
// 导出给组件具体实例, 不像之前ref获取到所有组件的实例！
ctx.expose({
  test
})
console.log('🚀🚀 ~ file: foo.vue ~ line 23 ~ ctx', ctx)
const fooClick = () => {
  // emit('foo-click', '下班吗？  ')
  ctx.emit('foo-click', '下班吗？  ')
}
onMounted(() => {
})

</script>
<style scoped lang='less'>
.templateBox {
  background: red;
}
</style>