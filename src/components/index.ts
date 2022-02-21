
import styles from './css/index.less'
import { fetchPostData } from './fetch/index'
// import http from './http/axios'
import '../mock/index'
export default {
  install: (app) => {
    console.log(app)
    app.use(styles)
    // app.use(http)
    app.config.globalProperties.$fetchPostData = fetchPostData
  }
}

