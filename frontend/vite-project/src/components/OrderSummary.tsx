import { checkoutCartStore } from "../store/checkoutCartStore"
import { USDollar } from "../utils/utils"
import OrderSummaryRow from "./OrderSummaryRow"

const OrderSummary = () => {
  const { checkoutCart, cartSummary } = checkoutCartStore()
  console.log("cart summary--->", cartSummary)
  console.log("checkoutcart--->", checkoutCart)

  return (
    <div className=" border-neutral-4 flex flex-col gap-4 rounded-md border border-solid bg-[#FFF] px-4 py-6 md:px-6 md:py-4">
      <h6 className=" heading-6 self-stretch text-[#121212]"> Order Summary</h6>
      <div className="flex flex-col gap-6">
        {checkoutCart.map((item) => (
          <OrderSummaryRow key={item.product_id} item={item} />
        ))}
      </div>
      <div className="flex flex-col">
        <div className=" border-b border-solid border-[#EAEAEA] py-[13px] ">
          <div className="text-neutral-7 flex justify-between ">
            <p className=" body-2">Shipping</p>
            <p className=" body-2-semi ">{cartSummary.plan.name}</p>
          </div>
        </div>
        <div className=" border-b border-solid border-[#EAEAEA] py-[13px] ">
          <div className="text-neutral-7 flex justify-between ">
            <p className=" body-2">Subtotal</p>
            <p className=" body-2-semi ">
              {USDollar.format(Number(cartSummary.subtotal))}
            </p>
          </div>
        </div>
        <div className=" border-b border-solid border-[#EAEAEA] py-[13px] ">
          <div className="text-neutral-7 body-1-semi flex justify-between ">
            <p>Total</p>
            <p>{USDollar.format(Number(cartSummary.total))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
