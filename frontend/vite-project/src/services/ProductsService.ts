import axios from "../configuration/axios"
import { IProductsResponse } from "../interface/productsResponse"
import { handleResponse } from "../utils/handleResponse"

type IGetProductsResponse = {
  status: number | undefined
  data?: IProductsResponse
}

export const ProductsService = {
  getProducts: async (): Promise<IGetProductsResponse> => {
    try {
      const response = await axios.get("/api/v1/products")
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
