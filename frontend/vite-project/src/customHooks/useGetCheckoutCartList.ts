import { checkoutCartStore } from "../store/checkoutCartStore"
import { useEffect } from "react"
import { CartService } from "../services/CartService"
import { IProduct } from "../interface/productsResponse"
import { ProductsService } from "../services/ProductsService"

const useGetCheckoutCartList = () => {
  const { checkoutCart, updateCheckoutCart } = checkoutCartStore()

  const fetchData = async (productIds: number[]) => {
    const checkoutCartList = await CartService.getCheckoutCart()
    if (!checkoutCartList || !checkoutCartList.data) {
      return
    }
    const checkoutResult = checkoutCartList.data.data
    // console.log("productIds--->", productIds)
    const result: IProduct[] = []
    for (const id of productIds) {
      const data = await ProductsService.getSpecificProduct(id)
      if (data.data?.data) {
        result.push(data.data?.data)
      }
    }

    // console.log("result--->", result)
    const a = result.map((e) => ({
      name: e?.name,
      price: e?.price,
      final_price: e?.final_price,
      image_url: e.image_url,
    }))

    const newData = checkoutResult.map((item, index) => ({
      ...item,
      ...a[index],
    }))
    console.log("newData=--->>", newData)
    newData.forEach((e) => {
      e.subtotal_price = e.final_price * e.quantity
    })

    updateCheckoutCart(newData)
  }

  const getCheckoutCartList = async () => {
    const checkoutCartList = await CartService.getCheckoutCart()
    // console.log("the checkoutCartList is ------->", checkoutCartList.data?.data)

    if (checkoutCartList && checkoutCartList.data) {
      fetchData(checkoutCartList.data.data.map((e) => e.product_id))
    }
  }

  useEffect(() => {
    getCheckoutCartList()
  }, [])

  return { checkoutCart, getCheckoutCartList }
}

export default useGetCheckoutCartList
