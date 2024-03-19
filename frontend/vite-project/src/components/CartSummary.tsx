import { useEffect, useState } from "react"
import BlackButton from "./BlackButton"
import MyRadioGroup from "./MyRadioGroup"
import { checkoutCartStore } from "../store/checkoutCartStore"
import { USDollar } from "../utils/utils"
import { Link } from "react-router-dom"

const plans = [
  { id: 1, name: "Free shipping", price: "$0.00", amount: 0 },
  { id: 2, name: "Express shipping", price: "+$15.00", amount: 15 },
  { id: 3, name: "Super Express shipping", price: "+$50.00", amount: 50 },
]

const CartSummary = () => {
  const { checkoutCart, cartSummary, updateCartSummary } = checkoutCartStore()
  const [plan, setPlan] = useState(plans[0])

  function refreshCartSummary() {
    const subtotal = checkoutCart.reduce(
      (acc, item) => acc + item.subtotal_price,
      0,
    )
    const total = subtotal + plan.amount
    updateCartSummary({ subtotal, total, plan })
  }

  useEffect(() => {
    refreshCartSummary()
  }, [plan, checkoutCart])

  return (
    <div className="border-neutral-4 flex h-full w-full flex-col items-start gap-4  rounded-md border border-solid bg-[#FFF] p-6">
      <h1 className=" heading-7 text-neutral-7">Cart summary</h1>
      <div className="flex w-full flex-col">
        <div className="flex flex-col pb-8">
          <MyRadioGroup plan={plan} setPlan={setPlan} plans={plans} />
          <div className=" border-b border-solid border-[#EAEAEA] py-[13px] ">
            <div className="text-neutral-7 flex justify-between ">
              <p className=" body-2">Subtotal</p>
              <p className=" body-2-semi ">
                {USDollar.format(Number(cartSummary.subtotal))}
              </p>
            </div>
          </div>
          <div className=" py-[13px] ">
            <div className="text-neutral-7 body-1-semi flex justify-between ">
              <p>Total</p>
              <p>{USDollar.format(Number(cartSummary.total))}</p>
            </div>
          </div>
        </div>
        <div>
          <Link to={"/checkout"}>
            <BlackButton
              text="Checkout"
              classes="button-m bg-neutral-7 text-neutral-1 hover:bg-neutral-5 w-full rounded-lg px-[26px] py-[10px]"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
