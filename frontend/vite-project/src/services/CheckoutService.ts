import { FormData } from "../components/CheckoutForm"
import axios from "../configuration/axios"
import { handleResponse } from "../utils/handleResponse"
import { token } from "../utils/utils"
import { IPostCartResponse } from "./CartService"

export const CheckoutService = {
  postCheckout: async (input: FormData): Promise<IPostCartResponse> => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.post("/api/v1/checkout", input, config)
      console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
