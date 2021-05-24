// import axios, { AxiosRequestConfig, AxiosRespones } from 'axios'
// const baseURL: string = '/api'
// const api = axios.create({
//  baseURL,
//  timeout: 5000 // 请求延迟
// })

// // 请求拦截
// api.interceptors.request.use((req: AxiosRequestConfig) => {
//  return req
// })
// // 定义接口
// interface IRrespones {
//  code: number,
//  res: any
// }
// // 获取到数据时做处理
// api.interceptors.response.use((res: AxiosRespones) => {
//  const respones: IRrespones = res.data
//  if (respones.code !== 0) {
//   console.warn(respones.msg)
//  }
//  return res
// }, err => console.log(err))

// 创建axios实例
import axios from 'axios'
import {
  ElLoading,
  ElMessage
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

//  创建axios的一个实例
var instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
  timeout: 8000, //设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  }
})




let loading: any
//正在请求的数量
let requestCount = 0
//显示loading
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text: "Loading  ",
      background: 'rgba(0, 0, 0, 0.7)',
      spinner: 'el-icon-loading',
    })
  }
  requestCount++;
}
//隐藏loading
const hideLoading = () => {
  requestCount--
  if (requestCount == 0) {
    loading.close()
  }
}

//请求拦截器 
instance.interceptors.request.use((config) => {
  console.log(config)
  showLoading()
  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
  const token = window.localStorage.getItem('token')
  token && (config.headers.Authorization = token)
  //若请求方式为post，则将data参数转为JSON字符串
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data)
  }
  return config;
}, (error) =>
  // 对请求错误做些什么
  Promise.reject(error));

//响应拦截器
instance.interceptors.response.use((response) => {
  hideLoading()
  //响应成功
  console.log('拦截器响应成功！')
  return response.data
}, (error) => {
  console.log('拦截器响应错误！', error)
  //响应错误
  if (error.response && error.response.status) {
    const status = error.response.status
    let message = ''
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '请求错误'
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
  return Promise.reject(error)
})


export default instance