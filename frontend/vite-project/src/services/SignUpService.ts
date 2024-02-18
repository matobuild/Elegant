import axios from "../configuration/axios"
import { ISignUpResponse } from "../interface/signUpResponse"
import { handleResponse } from "../utils/handleResponse"

type IPostSignUpResponse = {
  status: number | undefined
  data?: ISignUpResponse
}

export const SignUpService = {
  postSignUp: async (input: object): Promise<IPostSignUpResponse> => {
    try {
      const response = await axios.post("/api/v1/users/", input)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error("the error is ------..>", error)
      return handleResponse.error(error)
    }
  },
}
