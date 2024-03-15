import { USDollar, getImageFromData } from "../utils/utils"
import { CartRowProps } from "./CartRow"

const OrderSummaryRow = ({ item }: CartRowProps) => {
  return (
    <div className="border-neutral-3 flex w-full justify-between border-b border-solid py-6">
      <div className="flex gap-4">
        <img
          className=" h-24 w-20 flex-shrink-0"
          src={getImageFromData(`${item.image_url}`)}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <p className=" caption-1-semi text-neutral-7 self-stretch ">
            {item.name}
          </p>
          <p className=" caption-2 text-neutral-4">Quantity: {item.quantity}</p>
        </div>
      </div>
      <p className=" caption-1-semi text-[#121212]">
        {USDollar.format(Number(item.final_price))}
      </p>
    </div>
  )
}

export default OrderSummaryRow
