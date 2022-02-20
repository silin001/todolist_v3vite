import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'


import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
// 1普通方式使用饿了么ui 因为全局配置了按需引入 所以不需要在这里引入css
// import { ElButton, ElSelect } from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// app.use(ElButton)
// app.use(ElSelect)
// 2\插件形式使用
// import elementPlus from './plugins/elementPlus'
// console.log('🚀🚀 ~ file: main.ts ~ line 18 ~ elementPlus', elementPlus)
// app.use(elementPlus)
app.use(pinia).use(components)
app.use(router).use(store)
app.mount('#app')
