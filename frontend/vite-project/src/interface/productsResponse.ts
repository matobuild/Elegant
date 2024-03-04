export interface IProduct {
  product_id: number
  name: string
  description: string
  price: number
  final_price: number
  image_url: string
  measurements: string
  details: string
  packaging: string
  stock: number
  total_stars_review: number
  discount: number
  category_id: number
}

export interface IProductsResponse {
  status: string
  data: IProduct[]
}
