// 引入依赖API
import { ref, reactive, toRefs, onMounted } from 'vue'
// 定义一些变量  变量要定义在函数外
let data = reactive({
  a: {
    name: 'aaa',
    value: '1000',
    unit: ''
  },
  b: {
    name: 'bbb',
    value: '2000',
    unit: ''
  }
})

/* ⭐ ps:
导出当前js为一个函数  在使用的地方 解构出对应的内容进行且return出去再使用！！！！！！！
*/
export default function () {
  /* 定义一些方法 */
  onMounted(() => {
    initData()
  })
  const initData = () => {
    setTimeout(() => {
      const data = [
        {
          name: '改变后的值aaa',
          value: 10,
          unit: '个'
        },
        {
          name: '改变后的值bbb',
          value: 20,
          unit: '个'
        }
      ]
      getAData(data[0])
      getBData(data[1])
    }, 2000);
  }
  function getAData (res) {
    console.log(res)
    data.a = res
  }
  const getBData = (res) => data.b = res
  const testClick = () => {
    alert('我是test.js的test方法')
  }

  return {
    ...toRefs(data),
    testClick
  }
}