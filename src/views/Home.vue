<template>
  <div class='templateBox'>
    <h1>hello</h1>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: '',
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
.templateBox {
  h1 {
    color: red;
  }
}
</style>
