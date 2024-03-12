import { checkoutCartStore } from "../store/checkoutCartStore"
import { useEffect } from "react"
import { CartService } from "../services/CartService"

const useGetCheckoutCartList = () => {
  const { checkoutCart, updateCheckoutCart } = checkoutCartStore()

  const getCheckoutCartList = async () => {
    const checkoutCartList = await CartService.getCheckoutCart()
    console.log("the checkoutCartList is ------->", checkoutCartList.data?.data)

    if (checkoutCartList && checkoutCartList.data) {
      updateCheckoutCart(checkoutCartList.data.data)
    }
  }

  useEffect(() => {
    getCheckoutCartList()
  }, [])

  return { checkoutCart, getCheckoutCartList }
}

export default useGetCheckoutCartList
