import CartStatus from "../../components/CartStatus"
import CartSummary from "../../components/CartSummary"
import CartTable from "../../components/CartTable"

const CartPage = () => {
  return (
    <section className=" px-40 py-20">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-10">
          <h1 className="heading-3 text-primary-1 ">Cart</h1>
          <div className="flex gap-8">
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
          <div className=" flex gap-16 py-20">
            <div className=" w-[643px]">
              <CartTable />
            </div>
            <div className=" w-[365px]">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
