import axios from "axios"
import { BASE_URL } from "../../utils/constant"
import { token } from "../../utils/utils"

axios.defaults.baseURL = BASE_URL

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (config.url?.includes("/signUp") || config.url?.includes("/signIn"))
      return config

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }

    console.log("Request sent:", config)
    return config
  },
  (error) => {
    // Do something with request error
    console.error("Request error:", error)
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with successful response
    console.log("Response received:", response)
    return response
  },
  (error) => {
    // Do something with response error
    console.error("Response error:", error)
    return Promise.reject(error)
  },
)

export default axios
