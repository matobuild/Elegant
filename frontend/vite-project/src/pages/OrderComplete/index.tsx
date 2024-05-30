import CartStatus from "../../components/CartStatus"
import { extractDate, getImageFromData } from "../../utils/utils"
import useGetOrders from "../../customHooks/useGetOrders"
import { Link } from "react-router-dom"

const OrderCompletePage = () => {
  const { ordersList } = useGetOrders()
  return (
    <section className="px-8 py-5 md:py-20 xl:px-[304px]">
      <div className="flex flex-col items-center gap-10 md:gap-20">
        <div className="flex w-full flex-col items-center gap-6 md:gap-10">
          <h1 className="md:heading-3-a heading-4 text-primary-1 ">
            Complete!
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
            <div className="hidden md:block">
              <CartStatus
                title={"Checkout details"}
                borderBottom={true}
                textColor=" text-secondary-green"
                circleColor="bg-secondary-green"
                borderColor="border-secondary-green"
              />
            </div>
            <div>
              <CartStatus
                title={"Order complete"}
                step={3}
                borderBottom={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg bg-[#FFF] p-4 shadow-[0_32px_48px_-25px_rgba(0,0,0,0.3)] md:w-3/4 md:px-[95px] md:py-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h6 className=" md:heading-6-a body-2 text-neutral-4 text-left md:text-center">
                Thank you! 🎉
              </h6>
              <h4 className=" heading-5 md:heading-4-a text-left text-[#23262F] md:text-center">
                Your order has been received
              </h4>
            </div>
            <div className="flex justify-center gap-10">
              {ordersList[0].order_items.map((product) => {
                return (
                  <div className="relative flex h-28 w-24 items-end">
                    <div className=" h-5/6 w-4/5 ">
                      <img
                        src={getImageFromData(`${product.image_url}`)}
                        alt={product.name}
                        className="h-full w-full object-cover "
                      />
                    </div>
                    <div className="bg-neutral-7 absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full">
                      <p className="text-white">{product.quantity}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className=" flex justify-center ">
              <div className=" caption-1-semi flex w-full justify-between md:w-1/2">
                <div className="  text-neutral-4 flex flex-col gap-5">
                  <p>Order code:</p>
                  <p>Date:</p>
                  <p>Total:</p>
                  <p>Payment method:</p>
                </div>
                <div className=" text-neutral-7 flex flex-col gap-5">
                  <p>#{ordersList[0].order_id}</p>
                  <p>{extractDate(ordersList[0].created_at)}</p>
                  <p>{ordersList[0].total_price}</p>
                  <p>Credit Card</p>
                </div>
              </div>
            </div>
            <div className="md:w1/3 flex w-full justify-center">
              <Link to="/account?state=2" className="w-full md:w-auto">
                <button className=" bg-neutral-7 button-s w-full rounded-[80px] px-10 py-3 text-center text-[#FFF] md:w-auto">
                  Purchase history
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OrderCompletePage
