import axios from "../configuration/axios"
import { IOrdersResponse } from "../interface/ordersResponse"
import { handleResponse } from "../utils/handleResponse"

type IGetOrdersResponse = {
  status: number | undefined
  data?: IOrdersResponse
}

export const OrdersService = {
  getOrders: async (): Promise<IGetOrdersResponse> => {
    try {
      const response = await axios.get("/api/v1/orders")
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
