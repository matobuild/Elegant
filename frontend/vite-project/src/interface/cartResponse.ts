export interface ICartResponse {
  status: string
  data: string
}

export interface ICheckoutCart {
  cartitem_id: number
  quantity: number
  cart_id: number
  product_id: number
  name?: string
  price?: number
  final_price?: number
  image_url?: string
}

export interface ICheckoutCartResponse {
  status: string
  data: ICheckoutCart[]
}
