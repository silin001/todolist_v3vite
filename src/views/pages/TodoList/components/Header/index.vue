<template>
  <div class='header'>
    <div class="todo-header">
      <input type="text"
             placeholder="请输入你的任务名称，按回车键确认"
             v-model="title"
             @keyup.enter="addTodo" />
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, ref } from 'vue'
interface DataProps { }
export default {
  name: 'header',
  props: {
    add: {
      type: Function,
      required: true //  必传
    }
  },
  setup (props) {
    const title = ref('')
    const addTodo = () => {
      // 获取文本框内容
      const text = title.value
      console.log(text)
      if (!text.trim()) return
      // 创建一个todo对象
      const todo = {
        id: Date.now(),
        title: text,
        isCompleted: false
      }
      // 通过setup 参数的props调用父级add方法
      props.add(todo)
      title.value = ''
    }
    return {
      title,
      addTodo,
    }

  }
};
</script>
<style scoped lang='less'>
.header {
  /*header*/
  .todo-header input {
    width: 100%;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    margin-bottom: 10px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(82, 168, 236, 0.6);
  }
}
</style>