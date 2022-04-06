import { defineStore } from 'pinia'
import { getProducts, IProduct } from '@mock/pages/shop'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      all: [] as IProduct[]  // 所有商品列表, as 断言成 IProduct 接口约束的类型
    }
  },
  getters: {},
  actions: {
    async loadAllProducts () {
      const ret = await getProducts()
      this.all = ret
    }
  }
})


