interface Order_items_type {
  order_item_id: number
  quantity: number
  name: string
  description: string
  price: number
  image_url: string
  measurements: string
  details: string
  packaging: string
  discount: number
  category_id: number
  order_id: number
  product_id: number
}

export interface IOrders {
  order_id: number
  total_price: number
  status: string
  created_at: string
  user_id: number
  order_items: Order_items_type[]
}

export interface IOrdersResponse {
  status: string
  data: IOrders[]
}
