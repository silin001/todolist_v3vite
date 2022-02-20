
import styles from './css/index.less'
import { fetchDataFun } from './fetch/index'
// import http from './http/axios'
import '../mock/index'
export default {
  install: (app) => {
    console.log(app)
    app.use(styles)
    // app.use(http)
    app.config.globalProperties.$fetchDataFun = fetchDataFun
  }
}

// export default {
//   install: (app, option) => {
//     app.use(http, option.http)
//     app.config.globalProperties.$util = util
//   }
// }
