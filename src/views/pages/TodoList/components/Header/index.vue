<template>
  <div class='header'>
    <div class="todo-header">
      <!-- <input type="text"
             placeholder="请输入你的任务名称，按回车键确认"
             onKeyUp={this.handleKeyUp} /> -->
      <input type="text"
             placeholder="请输入你的任务名称，按回车键确认" />
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: 'header',
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
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