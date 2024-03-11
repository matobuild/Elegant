export interface ICartResponse {
  status: string
  data: string
}

//
export interface ICheckoutCart {
  cartitem_id: number
  quantity: number
  cart_id: number
  product_id: number
}

export interface ICheckoutCartResponse {
  status: string
  data: ICheckoutCart[]
}
