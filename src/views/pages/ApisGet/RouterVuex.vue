<template>
  <div class='routerVuex'>
    <button @click="goPage">新页面跳转</button>
    <br>
    <button @click="add">获取store数据可以点击:{{$store.state.num}}</button>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted, computed } from 'vue'
// 路由相关
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
// vuex
import { useStore, mapState } from 'vuex'

interface DataProps { }
export default {
  name: 'routerVuex',
  setup () {
    const router = useRouter()//获取路由器实例
    const store = useStore()  // 获取vuex
    const data = reactive({
    })
    // 使用mapState辅助函数获取vuex值
    const num = computed(() => ({
      ...mapState(['num'])
    })).value.num.bind({ $store: store })
    console.log(num())
    onMounted(() => {
      console.log('1useRoute', useRoute)
      console.log('2useRouter', useRouter)
    })
    // 跳转新页面
    const goPage = () => {
      console.log(router)
      let { href } = router.resolve({ path: '/aaaa' }) // 此处没有这个路由所以跳转不成功
      window.open(href, '_blank')
    }
    // 改变store 状态数据
    const add = () => {
      store.dispatch('asyncAddNum', 1)
    }
    return {
      ...toRefs(data),
      goPage,
      add
    }

  }
};
</script>
<style scoped lang='less'>
.routerVuex {
}
</style>