import CartStatus from "../../components/CartStatus"
import CartSummary from "../../components/CartSummary"
import CartTable from "../../components/CartTable"

const CartPage = () => {
  return (
    <section className=" px-8 py-5 md:px-40 md:py-20">
      <div className="flex flex-col">
        <div className="flex w-full flex-col items-center gap-2 md:gap-10">
          <h1 className="md:heading-3-a heading-4 text-primary-1 ">Cart</h1>
          <div className="flex flex-col gap-8 md:flex-row">
            <CartStatus title={"Shopping cart"} step={1} borderBottom={true} />
            <CartStatus
              title={"Checkout details"}
              step={2}
              textColor={"text-[#B1B5C3]"}
              circleColor={"bg-[#B1B5C3]"}
            />
            <CartStatus
              title={"Order complete"}
              step={3}
              textColor={"text-[#B1B5C3]"}
              circleColor={"bg-[#B1B5C3]"}
            />
          </div>
          <div className=" flex w-full flex-col gap-16 py-1 md:flex-row md:py-20">
            <div className=" w-full md:w-2/3">
              <CartTable />
            </div>
            <div className=" w-full md:w-1/3">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
