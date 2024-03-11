import { useEffect } from "react"
import { checkoutCartStore } from "../store/checkoutCartStore"
import CartRow from "./CartRow"

const CartTable = () => {
  // const { checkoutCart } = checkoutCartStore()

  // useEffect(() => {
  //   console.log("the checkoutCart is ------->", checkoutCart)

  //   const productsIdArray = checkoutCart.map((item) => item.product_id)
  //   console.log("productsIdArray", productsIdArray)

  // search for the products in the database using  productsIdArray and return the products

  // need to create new array of displayCartProducts
  // const displayCartProducts = {
  //   cartitem_id: 83,
  //   product_id: 1,
  //   quantity: 2,
  //   product: "product name",
  //   price: 20,
  //   total_price: 40,
  // }
  // }, [])

  return (
    <div className="flex w-full flex-col">
      <div className=" border-neutral-4 border-b border-solid pb-6">
        <div className="body-2-semi flex text-[#121212]">
          <div className="w-1/2">Product</div>
          <div className=" flex w-1/2 justify-between">
            <h2>Quantity</h2>
            <h2>Price</h2>
            <h2>Subtotal</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <CartRow />
        <CartRow />
        <CartRow />
      </div>
    </div>
  )
}

export default CartTable
