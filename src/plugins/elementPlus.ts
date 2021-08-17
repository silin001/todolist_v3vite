// 以插件形式使用elementPlus, 因为全局配置了按需引入 所以不需要引入css
import { ElButton, ElSelect, ElInput } from 'element-plus';
// import 'element-plus/lib/theme-chalk/el-button.css';
// import 'element-plus/lib/theme-chalk/el-select.css';
// import 'element-plus/lib/theme-chalk/el-input.css';
export default (app: any) => {
  app.use(ElButton)
  app.use(ElSelect)
  app.use(ElInput)
}