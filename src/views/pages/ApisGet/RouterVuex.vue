<template>
  <div class='routerVuex'
       style="height:1000px;">
    <NavLink to='/'
             :title="123"></NavLink>
    <button @click="goPage">新页面跳转</button>
    <button @click="back">返回页面</button>
    <br>
    <button @click="add">获取store数据可以点击:{{$store.state.num}}</button>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted, computed, watch } from 'vue'
// 路由相关
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
// vuex
import { useStore, mapState } from 'vuex'
import NavLink from './NavLink.vue'
interface DataProps { }
export default {
  name: 'routerVuex',
  components: {
    NavLink

  },
  setup (props) {
    const router = useRouter() //获取路由器实例
    const store = useStore()  // 获取vuex实例
    const data = reactive({
    })
    onMounted(() => {
      console.log('1useRoute', useRoute)
      console.log('2useRouter', useRouter)
    })

    // 一、路由route
    const route = useRoute() //获取响应式route对象，可监控变化
    watch(() => route.query, (query) => {
      console.log(query)
    })
    // 路由守卫-离开之前
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm('确定离开此页面吗？')
      if (!answer) {
        return false
      }
    })
    const back = () => {
      router.push('/')
    }

    // 跳转新页面
    const goPage = () => {
      console.log(router)
      let { href } = router.resolve({ path: '/aaaa' }) // 此处没有这个路由所以跳转不成功
      window.open(href, '_blank')
    }
    // 二、 vuex
    // 使用mapState辅助函数获取vuex值
    const num = computed(() => ({
      ...mapState(['num'])
    })).value.num.bind({ $store: store })
    console.log(num())
    // 改变store 状态数据
    const add = () => {
      store.dispatch('syncaddnum', 1)

    }
    return {
      ...toRefs(data),
      goPage,
      add,
      back
    }

  }
};
</script>
<style scoped lang='less'>
.routerVuex {
}
</style>