import {
  ICartResponse,
  ICheckoutCartResponse,
} from "./../interface/cartResponse"
import axios from "../configuration/axios"
import { handleResponse } from "../utils/handleResponse"
import { cartObject, checkoutCartRow } from "../store/checkoutCartStore"

export type IPostCartResponse = {
  status: number | undefined
  data?: ICartResponse
}

export type IGetCheckoutCartResponse = {
  status: number | undefined
  data?: ICheckoutCartResponse
}

export const CartService = {
  postCheckoutCart: async (input: cartObject): Promise<IPostCartResponse> => {
    try {
      const response = await axios.post("/api/v1/cart", input)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  getCheckoutCart: async (): Promise<IGetCheckoutCartResponse> => {
    try {
      const response = await axios.get("/api/v1/cart")
      // console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  deleteCheckoutCart: async (cartitemId: number) => {
    try {
      const response = await axios.delete(`/api/v1/cart/${cartitemId}`)
      console.log("Delete success", response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  editCheckoutCart: async (
    input: checkoutCartRow,
  ): Promise<IPostCartResponse> => {
    try {
      const response = await axios.patch("/api/v1/cart", input)
      // console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
