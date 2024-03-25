import { useEffect, useState } from "react"
import { IOrders } from "../interface/ordersResponse"
import { OrdersService } from "../services/OrdersService"

const useGetOrders = () => {
  const [ordersList, setOrdersList] = useState<IOrders[]>([
    {
      order_id: NaN,
      total_price: NaN,
      status: "",
      created_at: "",
      user_id: NaN,
      order_items: [
        {
          order_item_id: NaN,
          quantity: NaN,
          name: "",
          description: "",
          price: NaN,
          image_url: "",
          measurements: "",
          details: "",
          packaging: "",
          discount: NaN,
          category_id: NaN,
          order_id: NaN,
          product_id: NaN,
        },
      ],
    },
  ])

  const getOrders = async () => {
    const orders = await OrdersService.getOrders()
    console.log("orders----->", orders)
    if (orders?.data?.data) {
      setOrdersList(orders?.data?.data)
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return { ordersList }
}

export default useGetOrders
