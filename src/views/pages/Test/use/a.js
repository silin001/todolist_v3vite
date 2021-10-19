// 引入依赖API
import { ref, reactive } from 'vue'
// 定义一些变量  变量要定义在函数外

const obj = reactive({  // 组件内部模块1数据

  list: [1, 2, 3, 4],
  num: 100,

})
let num = ref(0) // 组件内部模块2数据


// 整个js导出
export default function (data) {
  /* 定义一些方法 */

  // 异步获取数据2
  function getNum () {
    setTimeout(() => {
      num = 111
    }, 1500);
  }
  // onMounted(() => {
  //   getNum()
  // })

  return {
    obj,
    getNum
  }
}