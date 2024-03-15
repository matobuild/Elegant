import CartStatus from "../../components/CartStatus"

const OrderCompletePage = () => {
  return (
    <section className=" px-[304px] py-20">
      <div className="flex flex-col items-center gap-20">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="heading-3 text-primary-1 ">Complete!</h1>
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
              borderBottom={true}
              textColor=" text-secondary-green"
              circleColor="bg-secondary-green"
              borderColor="border-secondary-green"
            />
            <CartStatus title={"Order complete"} step={3} borderBottom={true} />
          </div>
        </div>
        <div className=" w-3/4 rounded-lg bg-[#FFF] px-[95px] py-20 shadow-[0_32px_48px_-25px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h6 className=" heading-6 text-neutral-4 text-center">
                Thank you! 🎉
              </h6>
              <h4 className=" heading-4 text-center text-[#23262F]">
                Your order has been received
              </h4>
            </div>
            <div className="flex gap-10">3 images</div>
            <div className=" flex justify-center ">
              <div className=" caption-1-semi flex w-1/2 justify-between">
                <div className="  text-neutral-4 flex flex-col gap-5">
                  <p>Order code:</p>
                  <p>Date:</p>
                  <p>Total:</p>
                  <p>Payment method:</p>
                </div>
                <div className=" text-neutral-7 flex flex-col gap-5">
                  <p>#0123_45678</p>
                  <p>October 19, 2023</p>
                  <p>$1,345.00</p>
                  <p>Credit Card</p>
                </div>
              </div>
            </div>
            <div className="w1/3 flex justify-center">
              <button className=" bg-neutral-7 button-s rounded-[80px] px-10 py-3 text-center text-[#FFF]">
                Purchase history
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OrderCompletePage
