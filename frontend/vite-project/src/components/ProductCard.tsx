import { Link } from "react-router-dom"
import { USDollar, getImageFromData } from "../utils/utils"
import StarsReview from "./StarsReview"

type ProductCardProps = {
  img: string
  title: string
  price: number
  discount: number
  finalPrice: number
  stars: number
  id: number
}

const ProductCard = ({
  img,
  title,
  price,
  discount,
  finalPrice,
  stars,
  id,
}: ProductCardProps) => {
  return (
    <Link to={`/product/${title}`} state={{ id: id }}>
      <div className=" hover:border-neutral-3 group  flex w-full cursor-pointer flex-col gap-3 border border-transparent">
        <div className="relative w-full">
          <img
            className="h-auto w-full"
            src={getImageFromData(img)}
            alt={img}
          />
          <div className=" absolute left-4 top-4 inline-flex flex-col gap-2">
            <div className="hairline-1  bg-neutral-1 text-neutral-7  flex content-center items-center rounded px-[14px] py-1 text-center">
              NEW
            </div>
            <div className=" bg-secondary-green text-neutral-1 hairline-1 flex content-center items-center rounded px-[14px] py-1 ">
              -{discount}%
            </div>
          </div>
          <div className="bg-neutral-1 absolute right-4 top-4 hidden rounded-[32px] p-[6px] shadow-[0_8px_16px_-8px_rgba(15,15,15,0.12)] group-hover:block">
            <svg
              className="flex-1 self-stretch"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z"
                fill="#6C7275"
              />
            </svg>
          </div>
          <button className=" bg-neutral-7 text-neutral-1 button-s hover:bg-neutral-5 absolute bottom-4 left-4 right-4 hidden rounded-lg px-6 py-2 text-center shadow-[0_8px_16px_0px_rgba(0,0,0,0.04)] group-hover:block">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col">
          <StarsReview stars={stars} />
          <p className=" text-neutral-7 body-2-semi self-stretch">{title}</p>
          <div className="flex gap-3">
            <p className=" caption-1-semi text-neutral-7">
              {USDollar.format(finalPrice)}
            </p>
            <p className=" text-neutral-4 caption-1 line-through">
              {USDollar.format(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
