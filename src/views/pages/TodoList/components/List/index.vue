<template>
  <div class='list'>
    <ul className="todo-main">
      <Item v-for="(item,index) of todos"
            :key="item.id"
            :todo='item'
            :index='index'
            :del='del'
            :updateTodo='updateTodo' />
    </ul>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import Item from '../Item/index.vue'
interface DataProps { }
export default {
  name: '',
  props: {
    todos: {
      type: Array,
      default: () => {
        return []
      }
    },
    del: {
      type: Function,
      required: true //  必传
    },
    updateTodo: {
      type: Function,
      required: true //  必传
    },
  },
  components: {
    Item
  },
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
.list {
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
}
</style>