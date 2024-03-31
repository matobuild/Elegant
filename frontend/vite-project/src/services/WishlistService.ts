import { cartObject } from "../store/checkoutCartStore"
import { IGetCheckoutCartResponse, IPostCartResponse } from "./CartService"
import axios from "../configuration/axios"
import { handleResponse } from "../utils/handleResponse"

export const WishlistService = {
  postWishlistCart: async (input: cartObject): Promise<IPostCartResponse> => {
    try {
      const response = await axios.post("/api/v1/wishlist", input)
      // console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  getWishlistCart: async (): Promise<IGetCheckoutCartResponse> => {
    try {
      const response = await axios.get("/api/v1/wishlist")
      // console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  deleteWishlistCart: async (productId: number) => {
    try {
      const response = await axios.delete(`/api/v1/wishlist/${productId}`)
      console.log("Delete success", response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
