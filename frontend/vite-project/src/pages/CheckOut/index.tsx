import CartStatus from "../../components/CartStatus"
import CheckoutForm from "../../components/CheckoutForm"
import OrderSummary from "../../components/OrderSummary"

const CheckOutPage = () => {
  return (
    <section className=" px-8 py-5 md:px-40 md:py-20">
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-2 md:gap-10">
          <h1 className="md:heading-3-a heading-4 text-primary-1 ">
            Check Out
          </h1>
          <div className="flex gap-8">
            <div className="hidden md:block">
              <CartStatus
                title={"Shopping cart"}
                borderBottom={true}
                textColor=" text-secondary-green"
                circleColor="bg-secondary-green"
                borderColor="border-secondary-green"
              />
            </div>
            <div>
              <CartStatus
                title={"Checkout details"}
                step={2}
                borderBottom={true}
              />
            </div>
            <div className="hidden md:block">
              <CartStatus
                title={"Order complete"}
                step={3}
                textColor={"text-[#B1B5C3]"}
                circleColor={"bg-[#B1B5C3]"}
              />
            </div>
          </div>
          <div className=" flex w-full flex-col gap-16 py-10 md:flex-row md:py-20">
            <div className=" w-full md:w-2/3">
              <CheckoutForm />
            </div>
            <div className=" w-full md:w-1/3">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOutPage
