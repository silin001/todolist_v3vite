<template>
  <div class='MockTest'>
    <h2>hello mock</h2>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import { get } from '../../../http/axios'
interface DataProps { }
export default {
  name: 'MockTest',
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
      get('/demo/demoList1/', {}).then(res => {
        console.log(JSON.parse(JSON.stringify(res.data)))
      })
      get('/demo/demoList2/', {}).then(res => {
        console.log(res)
      })
      get('/user/list/', {}).then(res => {
        console.log('usr:', res)
      })
    })
    return {
      ...toRefs(data),
    }

  }
};
</script>
<style scoped lang='less'>
.MockTest {
}
</style>