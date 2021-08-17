<template>
  <div class='Test'>
    <h1>test, hello vite</h1>
    <button @click="getData">get数据</button>

    <el-button type="primary">主要按钮</el-button>
    <div style="width:100px">
      <el-input size="mini"></el-input>
    </div>
    <br>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import { get } from '../../../http/axios'
import { ElButton, ElSelect } from 'element-plus';
interface DataProps { }
export default {
  name: 'Test',
  setup (props) {
    console.log('🚀🚀 ~ file: Test.vue ~ line 22 ~ setup ~ props', props)
    const data: DataProps = reactive({

    })
    onMounted(() => {
    })
    const getData = () => {
      get('/api/list', {}).then(res => {
        console.log(res)
      })
      // get('/api/test', {}).then(res => {
      //   console.log(res)
      // })
    }
    return {
      ...toRefs(data),
      getData,
    }

  }
};
</script>

<style scoped lang='less'>
.Test {
  h1 {
    color: red;
  }
}
</style>
