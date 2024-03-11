import {
  ICartResponse,
  ICheckoutCartResponse,
} from "./../interface/cartResponse"
import axios from "../configuration/axios"
import { handleResponse } from "../utils/handleResponse"
import { token } from "../utils/utils"
import { cartObject } from "../store/checkoutCartStore"

type IPostCartResponse = {
  status: number | undefined
  data?: ICartResponse
}

type IGetCheckoutCartResponse = {
  status: number | undefined
  data?: ICheckoutCartResponse
}

export const CartService = {
  postCheckoutCart: async (input: cartObject): Promise<IPostCartResponse> => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.post("/api/v1/cart", input, config)
      console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  getCheckoutCart: async (): Promise<IGetCheckoutCartResponse> => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.get("/api/v1/cart", config)
      console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
