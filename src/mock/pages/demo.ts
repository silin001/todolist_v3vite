import { Mock, Random, result } from '../mockConfig'
const demoList1 = () => {
  // 1、数据模板定义规范（Data Template Definition，DTD）
  let data = Mock.mock({
    total: 100,
    'rows|2': [{
      'index|+1': 1,
      id: '@id',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
      'info': {
        uuid: '@guid',
        title: '@title',
        city: '@city',
        img: Random.image(),
      }
    }]
  })
  return { ...result, data }
}

const demoList2 = () => {
  let data = []
  // 2、数据占位符定义规范（Data Placeholder Definition，DPD）
  for (let i = 0; i < 20; i++) {
    let newList = { // 详细 规则 参照mockjs官网
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      imgSrc: Random.dataImage('200x160', '这是图片中的文本'), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
      author_name: Random.cname(), // Random.cname() 随机生成中文名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    data.push(newList)
  }
  return { ...result, data }
}
export default {
  demoList1,
  demoList2
}
