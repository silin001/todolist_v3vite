<template>
  <div class="rootBox full">
    <router-view></router-view>
  </div>

  <!-- keep-alive写法  目前vite好像无法运行 -->
  <!-- <router-view v-slot='{Component}'>
    <keep-alive>
      <component :is='Compinent'></component>
    </keep-alive>
  </router-view> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
</style>
