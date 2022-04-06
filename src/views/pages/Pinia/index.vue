<template>
  <div class='pinia'>pinia-state-count、name:</div>
  <br>
  <p>{{count}}</p>
  <p>{{name}}</p>
  <p>{{array}}</p>
  <p>{{fromatCount}}</p>
  <p>{{fromatCount}}</p>
  <p>{{fromatCount}}</p>
  <button @click="handleClick">修改数据</button>
  <br>
  <p>商城数据展示</p>
  <li v-for="item in all"
      :key="item.id">
    {{ item.id }}
    {{item.title}}
    {{item.price}}
    {{item.inventory}}
  </li>
</template>

<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@piniaStore'
import { useProductsStore } from '@piniaStore/products'


const mainStore = useMainStore()
const productsStore = useProductsStore()
const { count, name, array, fromatCount } = storeToRefs(mainStore) // 解构赋值
const { all } = storeToRefs(productsStore) // 解构赋值

// 加载商品数据
productsStore.loadAllProducts()

// 修改数据方法
const handleClick = () => {
  // 方法1
  // mainStore.count++
  // 方法2 使用 $patch  批量更新
  // mainStore.$patch({
  //   count: mainStore.count + 'ms',
  //   name: '啦啦啦'
  // })

  // 方式3 $patch 一个函数 更好的批量更新
  // mainStore.$patch(state => {
  //   state.count++
  //   state.name = '哈喽'
  //   state.array.push('ccc')
  // })

  // 方式4 逻辑比较多可以封装到 actions里
  mainStore.changeState(10)
}
</script>
<style scoped lang='less'>
</style>
