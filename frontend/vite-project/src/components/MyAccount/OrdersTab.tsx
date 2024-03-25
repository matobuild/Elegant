import useGetOrders from "../../customHooks/useGetOrders"
import { USDollar, extractDate } from "../../utils/utils"

const OrdersTab = () => {
  const { ordersList } = useGetOrders()
  console.log(ordersList)

  return (
    <div className=" px-[72px]">
      <div className="flex flex-col gap-10">
        <p className="text-primary-1 body-1-semi">Orders History</p>
        <div>
          <div className=" border-neutral-3 caption-1 text-neutral-4 flex items-center justify-between border-b border-solid pb-2">
            <p className="w-1/4">Number ID</p>
            <p className="w-1/4">Dates</p>
            <p className="w-1/4">Status</p>
            <p className="w-1/4">Price</p>
          </div>
          {ordersList.map((order) => {
            return (
              <div className="caption-1 text-neutral-7 flex items-center justify-between border-b border-solid py-6">
                <p className="w-1/4">#{order.order_id}</p>
                <p className="w-1/4">{extractDate(order.created_at)}</p>
                <p className="w-1/4">{order.status}</p>
                <p className="w-1/4">
                  {USDollar.format(Number(order.total_price))}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OrdersTab
