<template>
  <div class='Test'>
    <h1>test, hello vite</h1>
    <button @click="getData">get服务端数据</button>
    <button @click="fetchGetData">fetch请求数据</button>
    <el-button type="primary">主要按钮</el-button>
    <div style="width:100px">
      <el-input size="mini"></el-input>
    </div>
    <br>
    <!-- vue3.0  setup函数： 1、逻辑提取！  2、逻辑复用
    抽离逻辑代码到一个函数，这个函数命令约定为useXXX格式（这点同React Hooks）
    -->
    {{b}}
    <p>vue3.0 setup函数： 1、逻辑提取！，2、逻辑复用</p>
    <button @click="test">click test!</button>
    <Acomponent :data='a' />
  </div>
</template>

<script lang='ts'>
import Acomponent from './components/a.vue'
import TestFun from './use/test'
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { get } from '../../../http/axios'
import { ElButton, ElSelect } from 'element-plus';
interface DataProps { }
export default {
  name: 'Test',
  components: {
    Acomponent
  },
  data () {
    return {
      num: 100
    }
  },
  mounted () {
    this.testV2()
  },
  methods: {
    testV2 () {
      console.log('vue3，methods里可以拿到this：', this.num)
    }
  },
  setup (props) {
    // 获取全局自定义属性
    const internalInstance = getCurrentInstance()
    const $fetchPostData = internalInstance.appContext.config.globalProperties.$fetchPostData
    // 获取各个组件数据
    let { a, b, test } = TestFun()
    const getData = () => {
      get('/myApi/list', {}).then(res => {
        console.log(res)
      })
      // get('/api/test', {}).then(res => {
      //   console.log(res)
      // })
    }
    // 使用fetch测试第三方接口
    const fetchGetData = () => {
      const platNo = 'GDWISDOM'
      const __u__ = 'gdjg'
      const __s__ = '6cb02d133bea4b02aa2c9c788d673dcf' //  生产
      // const formData = new FormData()
      // formData.append('platNo', platNo)
      //   URLSearchParams替代 FormData， FormData参数错误
      const formData = new URLSearchParams()
      formData.append('platNo', platNo)
      const params = {
        url: '/video/api/open/token/foreignGet',
        data: formData,
        headers: {
          __u__,
          __s__,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
      }
      $fetchPostData(params)
        .then(data => {
          console.log('res====', data); // JSON data parsed by `data.json()` call
        })
    }
    return {
      getData,
      a,
      b,
      test,
      fetchGetData
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
