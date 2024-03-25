import axios from "../configuration/axios"
import { IOrdersResponse } from "../interface/ordersResponse"
import { handleResponse } from "../utils/handleResponse"
import { token } from "../utils/utils"

type IGetOrdersResponse = {
  status: number | undefined
  data?: IOrdersResponse
}

export const OrdersService = {
  getOrders: async (): Promise<IGetOrdersResponse> => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.get("/api/v1/orders", config)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
