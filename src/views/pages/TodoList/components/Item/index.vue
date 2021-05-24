<template>
  <div class='item todo-main'>
    <li @mouseenter="onMouseHandler(true)"
        @mouseleave="onMouseHandler(false)"
        :class="{active:isActive}">
      <label>
        <input type="checkbox"
               v-model="isCompleted" />
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger"
              :style="{display: isActive ? 'block' : 'none'}"
              @click='delTodo'>删除</button>
    </li>
  </div>
</template>

<script lang='ts'>
import { ref, toRefs, onMounted, computed } from 'vue'
import { Todo } from '../../../../../types/todo'
export default {
  name: 'item',
  props: {
    todo: {
      type: Object as () => Todo, //函数返回的是Todo类型
      required: true //  必传
    },
    del: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }

  },
  data () {
    return {
      mouse: 0
    }
  },
  setup (props) {
    const { del, index } = props
    let isActive = ref(false)
    const onMouseHandler = (flag: boolean) => {
      isActive.value = flag
    }
    const delTodo = () => {
      if (window.confirm('确定删除吗？')) {
        del(index)
      }
    }
    // 计算属性 实现获取 设置多选框
    const isCompleted = computed({
      get () {
        return props.todo.isCompleted
      },
      set (val) {
        props.updateTodo(props.todo, val)
      }
    })
    return {
      isActive,
      onMouseHandler,
      delTodo,
      isCompleted
    }
  }
};
</script>
<style scoped lang='less'>
/*item*/
.todo-main li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

/* .todo-main li label {
  float: left;
  cursor: pointer;
} */

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

.todo-main li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.active {
  background: #ddd;
  color: red;
}
</style>