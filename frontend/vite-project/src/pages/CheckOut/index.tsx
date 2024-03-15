import CartStatus from "../../components/CartStatus"
import CheckoutForm from "../../components/CheckoutForm"
import OrderSummary from "../../components/OrderSummary"

const CheckOutPage = () => {
  return (
    <section className=" px-40 py-20">
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="heading-3 text-primary-1 ">Check Out</h1>
          <div className="flex gap-8">
            <CartStatus
              title={"Shopping cart"}
              borderBottom={true}
              textColor=" text-secondary-green"
              circleColor="bg-secondary-green"
              borderColor="border-secondary-green"
            />
            <CartStatus
              title={"Checkout details"}
              step={2}
              borderBottom={true}
            />

            <CartStatus
              title={"Order complete"}
              step={3}
              textColor={"text-[#B1B5C3]"}
              circleColor={"bg-[#B1B5C3]"}
            />
          </div>
          <div className=" flex w-full gap-16 py-20">
            <div className=" w-2/3">
              <CheckoutForm />
            </div>
            <div className=" w-1/3">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOutPage
