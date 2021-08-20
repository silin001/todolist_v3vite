import { Mock, mockGetRequest, mockUrlFun } from './mockConfig'
import demoApi from './pages/demo'
import userApi from './pages/user'
// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: '200-1000'
})
// 是否开启mock
const startMock = true

// api-use
// demo相关
mockGetRequest(startMock, mockUrlFun('demo', 'demoList1'), demoApi.demoList1)
mockGetRequest(startMock, mockUrlFun('demo', 'demoList2'), demoApi.demoList2)
// user
mockGetRequest(startMock, mockUrlFun('user', 'list'), userApi.list)

