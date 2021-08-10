import { Mock, mockGetRequest, mockUrlFun } from './mockConfig'
import demoApi from './demo'
import userApi from './user'
// 设置200-2000毫秒延时请求数据
Mock.setup({
 timeout: '200-1000'
})
// 是否开启mock
const startMock = false
// api-use
// demo相关
mockGetRequest(startMock, mockUrlFun('demo', 'demoList1'), demoApi.demoList1)
mockGetRequest(startMock, mockUrlFun('demo', 'demoList2'), demoApi.demoList2)
// user
mockGetRequest(startMock, mockUrlFun('user', 'list'), userApi.list)

