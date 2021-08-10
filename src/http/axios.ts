//引入axios实例，
import axiosInstance from "./index"

// 创建封装axios的请求方式函数
/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url
 * @param {Object} params    请求的参数
 * @param {Object} config  请求头的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
const requestModeFun = ({
 method,
 url,
 params,
 config
}: any): Promise<any> => {
 method = method.toLowerCase()
 if (method === 'post') {
  return axiosInstance.post(url, params, { ...config })
 } else if (method === 'get') {
  return axiosInstance.get(url, {
   params,
   ...config
  })
 } else if (method === 'delete') {
  return axiosInstance.delete(url, {
   params,
   ...config
  })
 } else if (method === 'put') {
  return axiosInstance.put(url, params, { ...config })
 } else {
  // console.error('未知的method' + method)
  // 需要返回一个promise！！！
  return Promise.reject('未知的请求方式' + method)
 }
}
// 暴露请求方式
// get请求
export const get = (url: string, params: object) => {
 return requestModeFun({
  url,
  method: "get",
  params,
  config: {
   // headers: {
   //  'Request-Type': 'wechat'
   // },
   // timeout: 5000
  }
 })
}

//post请求
export const post = (url: string, params: object) => {
 return requestModeFun({
  url,
  method: "post",
  params,
  config: {
   // headers: {
   //  'Request-Type': 'wechat'
   // },
   // timeout: 5000
  }
 })
}