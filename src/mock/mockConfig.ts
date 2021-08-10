import Mock from 'mockjs'
const Random = Mock.Random
const result = {
 code: 200,
 msg: 'mock数据请求成功！！！'
}
// mock http
export const mockGetRequest = (startMock: boolean, apiUrl: string, method: Function) => {
 if (!startMock) return
 Mock.mock(apiUrl, 'get', method)
}
export const mockPostRequest = (apiUrl: string, method: string) => {
 Mock.mock(apiUrl, 'post', method)
}
// mock url
export const mockUrlFun = (interfaceModule: string, interfaceName: string) => {
 // const proxyKey = startMock ? '' : '/api'
 // const url = `${proxyKey}/${interfaceModule}/${interfaceName}/`
 // const proxyKey = startMock ? '' : '/api'
 const url = `/${interfaceModule}/${interfaceName}/`
 console.log(url)
 return url
}
export {
 Mock,
 Random,
 result
}
