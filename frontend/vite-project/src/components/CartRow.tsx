import { useState } from "react"
import { ICheckoutCart } from "../interface/cartResponse"
import { USDollar, getImageFromData } from "../utils/utils"
import SmallQuantityButton from "./SmallQuantityButton"

type CartRowProps = {
  item: ICheckoutCart
}

const CartRow = ({ item }: CartRowProps) => {
  const [quantity, setQuantity] = useState(item.quantity)
  console.log("quantity", quantity)

  return (
    <div className="border-neutral-3 flex border-b border-solid py-6">
      <div className="flex w-1/2 items-center gap-4">
        <img
          className=" h-24 w-20 flex-shrink-0"
          src={getImageFromData(`${item.image_url}`)}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <p className=" caption-1-semi text-neutral-7 self-stretch ">
            {item.name}
          </p>
          {/* <p className=" caption-2 text-neutral-4">Color: Black</p> */}
          <button>
            <div className="flex items-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                  fill="#6C7275"
                />
              </svg>
              <p className=" caption-1-semi text-neutral-4">Remove</p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-between">
        <SmallQuantityButton quantity={quantity} setQuantity={setQuantity} />
        <h2 className=" text-18px-regular">
          {USDollar.format(Number(item.price))}
        </h2>
        <h2 className=" text-18px-semibold text-[#121212]">
          {USDollar.format(Number(item.final_price))}
        </h2>
      </div>
    </div>
  )
}

export default CartRow
