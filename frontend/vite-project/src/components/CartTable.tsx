import { checkoutCartStore } from "../store/checkoutCartStore"
import CartRow from "./CartRow"

const CartTable = () => {
  const { checkoutCart } = checkoutCartStore()

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
        {checkoutCart.map((item) => (
          <CartRow key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CartTable
