import axios from "../configuration/axios"
import { IProductsResponse } from "../interface/productsResponse"
import { handleResponse } from "../utils/handleResponse"

type IGetProductsResponse = {
  status: number | undefined
  data?: IProductsResponse
}

export interface KeyValue {
  [key: string]: string | number
}

export const ProductsService = {
  getProducts: async (param?: KeyValue): Promise<IGetProductsResponse> => {
    try {
      if (param) {
        const response = await axios.get("/api/v1/products", {
          params: param,
        })
        return handleResponse.success(response)
      } else {
        const response = await axios.get("/api/v1/products")
        return handleResponse.success(response)
      }
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
