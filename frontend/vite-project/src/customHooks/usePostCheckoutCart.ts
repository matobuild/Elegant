import { CartService } from "../services/CartService"
import { cartObject } from "../store/checkoutCartStore"
import useGetCheckoutCartList from "./useGetCheckoutCartList"

const usePostCheckoutCart = (product: cartObject) => {
  const { getCheckoutCartList } = useGetCheckoutCartList()

  const postToCheckoutCart = async () => {
    await CartService.postCheckoutCart(product)
    getCheckoutCartList()
  }
  return { postToCheckoutCart }
}

export default usePostCheckoutCart
