<template>
  <div class="not-found">
    <img src="../../../../assets/404.gif"
         alt="">
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: 'templateBox',
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
.templateBox {
  .not-found {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .not-found img {
    width: 100%;
    height: 100%;
  }
}
</style>