<template>
  <div class='todolist'>
    <p @click="testGet">testGet</p>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :add='add' />
        <List :todos='todos'
              :del='del'
              :updateTodo='updateTodo' />
        <Footer :todos='todos'
                :checkAll='checkAll'
                :clearAllCompletedTodos='clearAllCompletedTodos' />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted, watch } from 'vue'
// import { mokeGet } from "@/api"
import { mokeGet, mokeGet2 } from '../../../api'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import List from './components/List/index.vue'
import { Todo } from '../../../types/todo'
import { saveTodos, readTodos } from '../../../utils/localStorageUtils'
export default {
  name: '',
  components: {
    Header,
    List,
    Footer
  },
  setup () {
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     { id: 1, title: '测试1', isCompleted: false },
    //     { id: 2, title: '敲代码', isCompleted: true },
    //     { id: 3, title: '打游戏', isCompleted: false }
    //   ]
    // })
    const state = reactive<{ todos: Todo[] }>({
      todos: []
    })
    // 初始化读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })
    // add
    const add = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除
    const del = (index: number) => {
      state.todos.splice(index, 1)
    }
    // 修改状态
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted
      console.log(todo)
    }
    // 全选方法
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted
      })
    }
    // 清除所有已完成
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(item => !item.isCompleted)
    }
    //监听todos数据变化
    // watch(() => state.todos, (value) => {
    //   saveTodos(value)
    // }, { deep: true })
    //监听todos数据变化-优化写法
    watch(() => state.todos, saveTodos, { deep: true })

    // 接口测试
    const testGet = () => {
      // mokeGet('/api/test', {}).then(res => {
      //   console.log(res)
      // })
      mokeGet2('/api/test', {}).then(res => {
        console.log(res)
      })
    }
    return {
      ...toRefs(state),
      testGet,
      add,
      del,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    }

  }
};
</script>
<style scoped lang='less'>
.todolist {
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>