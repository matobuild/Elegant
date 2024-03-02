import axios from "../configuration/axios"
import { ICategoriesResponse } from "../interface/categoriesResponse"

import { handleResponse } from "../utils/handleResponse"

type IGetCategoryResponse = {
  status: number | undefined
  data?: ICategoriesResponse
}

export const CategoriesService = {
  getCategories: async (): Promise<IGetCategoryResponse> => {
    try {
      const response = await axios.get("/api/v1/categories")
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
