<template>
  <div class='login'>登录</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: 'login',
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
    })
    return {
      ...toRefs(data),
    }

  }
};
</script>
<style scoped lang='less'>
.login {
}
</style>