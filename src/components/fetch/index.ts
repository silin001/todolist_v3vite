// fetch请求封装

// 定义接口 写法规范 I+名称（名称首字母大写）
// interface IParams {
//   url: string,
//   method: string,
//   data: object,
//   headers: {}
// }


/* 函数参数-解构赋值写法
  这种写法在传入多个形参时可以不按顺序写入，会方便很多.
  js：fun({a,b}){}
  ts： fun({a,b}:{a:string,b:string}){}
*/
export async function fetchDataFun ({ method = 'POST', url = '', data = {}, headers }: { method: string, url: string, data: object, headers: object }) {
  console.log(method, url, data, headers)
  // Default options are marked with *
  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    // headers,
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      ...headers
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response.json() // parses JSON response into native JavaScript objects
}
