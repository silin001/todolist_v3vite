<template>
  <div class='templateBox'>
    <h1>我是a组件</h1>
    <li v-if="isShow">{{data.name}}</li>
    <li>{{data.value}}</li>
    <li>{{data.unit}}</li>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props) {
    const data: DataProps = reactive({
      isShow: false
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
