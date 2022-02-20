// 以插件形式使用elementPlus, 因为全局配置了按需引入 所以不需要引入css
import { ElMain, ElContainer, ElHeader, ElAside, ElButton, ElSelect, ElInput, ElCollapse, ElCollapseItem } from 'element-plus'
//ElMain  ElContainer, ElHeader, ElAside,
// import 'element-plus/theme-chalk/el-button.css';
// import 'element-plus/theme-chalk/el-select.css';
// import 'element-plus/theme-chalk/el-input.css';
const components = [
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElButton,
  ElSelect,
  ElInput,
  ElCollapse,
  ElCollapseItem
]
export default (app: any) => {
  components.forEach(component => {
    app.use(component)
  })
  // app.use(ElContainer)
  // app.use(ElButton)
  // app.use(ElSelect)
  // app.use(ElInput)
  // app.use(ElCollapse)
  // app.use(ElCollapseItem)
}