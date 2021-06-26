<template>
  <div class='templateBox'>
    <h1>test, hello vite</h1>
		<button @click="getData">get数据</button>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import {get} from '../../../http/axios'
interface DataProps { }
export default {
  name: '',
  setup () {
    const data: DataProps = reactive({

    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
		const getData = ()=>{
			get('/api/list', {}).then(res => {
				console.log(res)
			})
			get('/api/test', {}).then(res => {
				console.log(res)
			})
		}
    return {
      ...toRefs(data),
			getData
    }

  }
};
</script>

<style scoped lang='less'>
.templateBox {
  h1 {
    color: red;
  }
}
</style>
