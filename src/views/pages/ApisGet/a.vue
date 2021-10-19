<template>
  <div class='test'>
    <h2>{{data.title}}</h2>
  </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, onMounted } from 'vue'
const data = reactive({
  title: '啦啦啦'
})
onMounted(() => {

})
</script>
<style scoped lang='less'>
</style>
