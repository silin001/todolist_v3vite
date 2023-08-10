<template>
  <div class='navLink'
       :class="{'active': isActive}">
    展示route名称+props 标题参数： {{route.name}}+ {{title}}
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
import { RouterLink, useLink } from "vue-router"
interface DataProps { }
export default {
  name: 'navLink',
  props: {
    ...RouterLink.props,
    title: String
  },
  setup (props: any) {
    const data: DataProps = reactive({

    })
    // 使用uselink 获取 roterLink内部属性和方法
    const { route, href, isActive, isExactActive, navigate } = useLink(props)
    console.log(route, href, isActive, isExactActive, navigate)
    return {
      ...toRefs(data),
      route,
      isActive,
      navigate
    }

  }
};
</script>
<style scoped lang='less'>
.active {
  // background: red;
}
.navLink {
}
</style>