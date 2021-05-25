// 封装请求接口
import axios from "../http/axios"

//get
export const mokeGet = (url: string, params: object) => {
 return axios({
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
export const mokeGet2 = (url: string, params: object) => {
 return axios({
  url,
  method: "gets",
  params,
  config: {
   // headers: {
   //  'Request-Type': 'wechat'
   // },
   // timeout: 5000
  }
 })
}
//post
export const mokePost = (url: string, params: object) => {
 return axios({
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