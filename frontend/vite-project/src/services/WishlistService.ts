import { cartObject } from "../store/checkoutCartStore"
import { token } from "../utils/utils"
import { IPostCartResponse } from "./CartService"
import axios from "../configuration/axios"
import { handleResponse } from "../utils/handleResponse"

export const WishlistService = {
  postWishlistCart: async (input: cartObject): Promise<IPostCartResponse> => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.post("/api/v1/wishlist", input, config)
      // console.log("the response is ------->", response)

      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },

  deleteWishlistCart: async (productId: number) => {
    try {
      const config = {
        headers: { authorization: `Bearer ${token}` },
      }

      const response = await axios.delete(
        `/api/v1/wishlist/${productId}`,
        config,
      )
      console.log("Delete success", response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
