<template>
  <div class='AdminProject'
       @click="goAdmin">admin后台管理系统</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
interface DataProps { }
export default {
  name: 'AdminProject',
  setup () {
    const data: DataProps = reactive({

    })
    // 获取路由器实例
    const router = useRouter()
    const goAdmin = () => {
      console.log(router)
      let { href } = router.resolve({ path: '/adminLogin' })
      window.open(href, '_blank')
    }
    onMounted(() => {
    })
    return {
      ...toRefs(data),
      goAdmin
    }

  }
};
</script>
<style scoped lang='less'>
.AdminProject {
}
</style>