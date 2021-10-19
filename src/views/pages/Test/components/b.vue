<template>
  <div class='b'></div>
  <h2>我是b组件</h2>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  setup () {
    const data: DataProps = reactive({
    })
    onMounted(() => {

    })
    return {
      ...toRefs(data),
    }
  }
}
</script>
<style scoped lang='less'>
</style>
