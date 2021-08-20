import { Mock, result } from '../mockConfig'
const list = () => {
  let data = Mock.mock({
    'list|7': [{
      id: '@id',
      name: '@cname',
      'age|20-30': 23,
    }]
  })
  return { ...result, data }
}

export default {
  list
}