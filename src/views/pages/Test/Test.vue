<template>
  <div class='Test'>
    <h2>test page</h2>
    <button @click="getData">axios-get请求服务器数据</button>
    <el-button type="primary"
               @click="fetchGetData">fetch请求第三方数据</el-button>
    <br>
    <br>
    <!-- vue3.0  hooks使用   setup函数： 1、逻辑提取！  2、逻辑复用
    抽离逻辑代码到一个函数，这个函数命令约定为useXXX格式（这点同React Hooks）
    -->
    <h2>hooks使用：</h2>
    <p>hooks b.js数据： {{obj1.list}}</p>

    <br>
    <p>test.js数据b: {{b}}</p>
    <button @click="testClick">click test!</button>
    <Acomponent :propData='a' />
  </div>
</template>

<script lang='ts'>
import Acomponent from './components/a.vue'
import TestFun from './use/test'
import { getData1 } from './use/b'
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { get } from '../../../http/axios'
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
  // mounted () {
  //   this.testV2()
  // },
  // methods: {
  //   testV2 () {
  //     console.log('vue3，methods里可以拿到this：', this.num)
  //   }
  // },
  setup (props) {
    // 获取绑定到全局的自定义属性
    const internalInstance = getCurrentInstance()
    const $fetchPostData = internalInstance.appContext.config.globalProperties.$fetchPostData
    // hooks写法， 引入解构出变量和方法 直接return使用
    // 逻辑由 test.js 处理，  这里只负责使用。
    let { a, b, testClick } = TestFun()
    let obj1 = getData1()


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
      obj1,
      getData,
      a,
      b,
      testClick,
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
