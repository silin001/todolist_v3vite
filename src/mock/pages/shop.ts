export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number
}
const _products: IProduct[] = [
  {
    id: 1,
    title: 'ipad 4 mini',
    price: 500,
    inventory: 2
  },
  {
    id: 2,
    title: 'ciese',
    price: 100,
    inventory: 10
  }
]

export const getProducts = async () => {
  await wait(100)
  return _products
}

export const buyProducts = async () => {
  await wait(100)
  return Math.random() > 0.5
}

async function wait (delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

