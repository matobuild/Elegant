import axios from "../configuration/axios"
import { ISignResponse } from "../interface/signResponse"
import { handleResponse } from "../utils/handleResponse"

type IPostSignResponse = {
  status: number | undefined
  data?: ISignResponse
}

export const SignService = {
  postSignUp: async (input: object): Promise<IPostSignResponse> => {
    try {
      const response = await axios.post("/api/v1/users/", input)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
  postSignIn: async (input: object): Promise<IPostSignResponse> => {
    try {
      const response = await axios.post("/api/v1/users/login", input)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
