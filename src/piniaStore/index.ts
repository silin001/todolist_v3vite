import { defineStore } from 'pinia'

// 1、定义并且导出容器
// 参数1：容器id必须唯一，将来pinia会把所有容器都挂载到根容器
// 参数2： 选项对象
// 返回值是一个函数 调用返回实例
export const useMainStore = defineStore('main', {
  // 类似组件的data
  /*
    1.必须是函数，为了在服务端渲染时避免交叉请求导致数据状态污染
    2.必须箭头函数，为了更好的TS类型推断
  */
  state: () => {
    return {
      count: 100,
      name: "Becker",
      array: [1, 2]
    }
  },
  // 类似组件的 计算属性
  getters: {
    // 接收可选参数:state 状态对象
    fromatCount (state) {
      console.log('调用了getters')
      return state.count + 100
    }
    // 如果在getters中使用的this, 则必须手动指定返回值的类型,否则类型推导不出来
    // fromatCount (): number {
    //   console.log('调用了getters')
    //   return this.count + 100
    // }
  },
  // 类似组件的 methods
  actions: {
    // 不能使用箭头函数定义actions , 因为箭头函数绑定外边this
    changeState (num: number) {
      // 可以使用this 访问状态
      this.count += num
      this.name = "Elza"
      this.array.push('3')
      // this.$patch({
      // ...todo
      // })

      //this.$patch(state=>{
      // ...todo
      // })
    }
  }
})

// 2.使用容器的state

// 3.修改state

// 4.容器中action的使用