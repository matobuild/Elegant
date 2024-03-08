import Button from "./Button"
import MyRadioGroup from "./MyRadioGroup"

const CartSummary = () => {
  return (
    <div className="border-neutral-4 flex h-full w-full flex-col items-start gap-4  rounded-md border border-solid bg-[#FFF] p-6">
      <h1 className=" heading-7 text-neutral-7">Cart summary</h1>
      <div className="flex w-full flex-col">
        <div className="flex flex-col pb-8">
          <MyRadioGroup />
          <div className=" border-b border-solid border-[#EAEAEA] py-[13px] ">
            <div className="text-neutral-7 flex justify-between ">
              <p className=" body-2">Subtotal</p>
              <p className=" body-2-semi ">$1234.00</p>
            </div>
          </div>
          <div className=" py-[13px] ">
            <div className="text-neutral-7 body-1-semi flex justify-between ">
              <p>Subtotal</p>
              <p>$1234.00</p>
            </div>
          </div>
        </div>
        <div>
          <Button text="Checkout" buttonType="button-m" paddingX="px-[26px]" />
        </div>
      </div>
    </div>
  )
}

export default CartSummary
