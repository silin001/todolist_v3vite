// 专门处理 b.vue的
// hooks 写法 2  推荐
import { reactive } from 'vue'
function getData1 () {
  const obj1 = reactive({
    list: []
  })
  setTimeout(() => {
    obj1.list = [1, 2, 3]
  }, 1000)
  return obj1
}
// ....todo

export {
  getData1
}