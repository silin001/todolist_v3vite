<template>
  <div class='todolist'>
    <h1 @click="get">get</h1>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
// import { mokeGet } from "@/api"
import { mokeGet } from '../../../api'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
// import Item from './components/Item/index.vue'
import List from './components/List/index.vue'
interface DataProps { }
export default {
  name: '',
  components: {
    Header,
    List,
    Footer
  },
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    const get = () => {
      mokeGet('/api/test', {}).then(res => {
        console.log(res)
      })
    }
    return {
      ...toRefs(data),
      get
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