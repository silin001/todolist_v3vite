<template>
  <div class='aBox'>
    我是a组件展示传进来的data数据:
    <li>{{propData.name}}</li>
    <li>{{propData.value}}</li>
    <li>{{propData.unit}}</li>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  props: {
    propData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props) {
    // const { propData } = props // 这样解构出来会数去响应式data发生变化不会更新
    const { propData } = toRefs(props) // propData.value
    // console.log('🚀🚀 ~ file: a.vue ~ line 28 ~ setup ~ propData', propData.value)
    // const data: DataProps = reactive({
    //   isShow: false
    // })j
    return {
    }
  }
}
</script>
<style scoped lang='less'>
</style>
