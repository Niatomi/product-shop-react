import axios, { AxiosError } from 'axios'
import { IProduct } from '../models'
import { useEffect, useState } from 'react'
class ProductService {

  constructor(
    private url: string | undefined
  ) { }

  async getProducts(): Promise<IProduct[]> {
    const response = await axios.get<IProduct[]>(`${this.url}/products`)
    return response.data
  }
}

const productService = new ProductService(process.env.REACT_APP_PRODUCT_API_URL)
export function useProducts() {
  const [products, setProducts] = useState<[] | IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const items: IProduct[] = await productService.getProducts()
        setProducts(items)
        setError('')
        setLoading(false)

      } catch (e: unknown) {
        const err = e as AxiosError
        setError(err.message)
      }
    })()
  }, [])

  return { products, loading, error }
}