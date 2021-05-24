<template>
  <div class='item'>
    <li :class="mouse
        ? 'active'
        : ''
        ">
      <label>
        <input type="checkbox"
               checked="{done===0
               ?
               false
               :
               true}
               onChange={this.handleChange(id)}" />
        <span>{name}</span>
      </label>
      <button class="btn btn-danger"
              :style="{display: mouse ? 'block' : 'none'}"
              @click=''>删除</button>
    </li>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
interface DataProps { }
export default {
  name: 'item',
  data () {
    return {
      mouse: 0
    }
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
.item {
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
  }
}
</style>