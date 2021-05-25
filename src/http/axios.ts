// 封装axios的请求方式
import instance from "./index"
/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} params    请求的参数
 * @param {Object} config  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */

const axios = ({
 method,
 url,
 params,
 config
}: any): Promise<any> => {
 method = method.toLowerCase()
 if (method == 'post') {
  return instance.post(url, params, { ...config })
 } else if (method == 'get') {
  return instance.get(url, {
   params,
   ...config
  })
 } else if (method == 'delete') {
  return instance.delete(url, {
   params,
   ...config
  })
 } else if (method == 'put') {
  return instance.put(url, params, { ...config })
 } else {
  // console.error('未知的method' + method)
  return Promise.reject('未知的method')
  // return
 }
}
export default axios