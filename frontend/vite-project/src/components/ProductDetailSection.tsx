import { Link } from "react-router-dom"
import { IProduct } from "../interface/productsResponse"
import { USDollar, getImageFromData, getImageUrl } from "../utils/utils"
import BlackButton from "./BlackButton"
import DisclosureBox from "./DisclosureBox"
import QuantityButton from "./QuantityButton"
import StarsReview from "./StarsReview"
import WishlistButton from "./WishlistButton"
import { useEffect, useState } from "react"
import usePostCheckoutCart from "../customHooks/usePostCheckoutCart"

type ProductDetailSectionProps = {
  specificProduct: IProduct
}

const ProductDetailSection = ({
  specificProduct,
}: ProductDetailSectionProps) => {
  const [quantity, setQuantity] = useState(1)
  // console.log("quantity", quantity)

  const { postToCheckoutCart } = usePostCheckoutCart({
    product_id: specificProduct.product_id,
    quantity: quantity,
  })

  useEffect(() => {
    setQuantity(1)
  }, [specificProduct])

  return (
    <section className="border-neutral-2 border-t border-solid pb-10">
      <div className="py-4">
        <div className="px-40">
          <div className=" button-xs flex items-center gap-4">
            <Link to="/">
              <button className=" flex items-center gap-1 text-[#605F5F]">
                <span>Home</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4.58423 3L7.58423 6L4.58423 9"
                      stroke="#605F5F"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link to="/shop">
              <button className="flex items-center gap-1 text-[#605F5F]">
                <span>Shop</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4.58423 3L7.58423 6L4.58423 9"
                      stroke="#605F5F"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <button className="flex items-center gap-1 text-[#605F5F]">
              <span>{specificProduct.categories.name}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M4.58423 3L7.58423 6L4.58423 9"
                    stroke="#605F5F"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <button className=" text-[#121212]">
              <span>Product</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[63px] px-40">
        <div className="flex h-full w-full flex-col gap-6">
          <div className="relative w-full ">
            <img
              className="h-auto w-full "
              src={getImageFromData(specificProduct.image_url)}
              alt="Main description "
            />

            <div className=" absolute left-8 top-8 inline-flex flex-col gap-2">
              <div className="text-18px-bold-18px-line-height bg-neutral-1 flex flex-shrink-0 content-center items-center rounded px-[18px] py-2 text-center text-[#121212]">
                NEW
              </div>
              <div className=" bg-secondary-green text-neutral-1 hairline-1 flex flex-shrink-0  content-center items-center rounded px-[18px] py-2 ">
                -{specificProduct.discount}%
              </div>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="flex h-[167px] w-full ">
              <img
                className="h-auto w-full object-cover"
                src={getImageUrl("Details/Main description Image.png")}
                alt="small main detail"
              />
            </div>
            <div className="flex  h-[167px] w-full ">
              <img
                className="h-auto w-full object-cover"
                src={getImageUrl("Details/middle.png")}
                alt="small middle detail"
              />
            </div>
            <div className="flex  h-[167px] w-full ">
              <img
                className="h-auto w-full object-cover"
                src={getImageUrl("Details/bottom right.png")}
                alt="small right detail"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className=" border-neutral-3 flex flex-col items-start gap-4 border-b border-solid pb-4">
            <div className="flex gap-[10px]">
              <span>
                <StarsReview stars={specificProduct.total_stars_review} />
              </span>
              <p className=" caption-2 text-neutral-7">11 Reviews</p>
            </div>
            <h4 className=" heading-4 text-neutral-7">
              {specificProduct.name}
            </h4>
            <p className=" body-2 text-neutral-4">
              {specificProduct.description}
            </p>
            <div className="flex items-center gap-3">
              <h6 className=" heading-6 text-black">
                {USDollar.format(specificProduct.final_price)}
              </h6>
              <h6 className=" heading-7 text-neutral-4 line-through">
                {USDollar.format(specificProduct.price)}
              </h6>
            </div>
          </div>
          <div className=" py-4">
            <div className="flex flex-col gap-2">
              <p className=" body-2-semi text-neutral-4">Measurements</p>
              <p className=" body-1 text-primary-1">
                {specificProduct.measurements}
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start gap-4 py-6 ">
            <div className="flex w-full gap-6">
              <div className="w-1/4">
                <QuantityButton quantity={quantity} setQuantity={setQuantity} />
              </div>
              <div className="w-3/4">
                <WishlistButton id={specificProduct.product_id} />
              </div>
            </div>
            <BlackButton
              text={"Add to Cart"}
              classes="button-m bg-neutral-7 text-neutral-1 hover:bg-neutral-5 w-full rounded-lg px-10 py-[10px]"
              clicking={() => {
                postToCheckoutCart()
              }}
            />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div className=" caption-2 flex items-start">
              <p className="text-neutral-4  w-1/4">SKU</p>
              <p className="text-neutral-7 w-3/4">{specificProduct.stock}</p>
            </div>
            <div className="caption-2 flex items-start">
              <p className=" text-neutral-4 w-1/4">CATEGORY</p>
              <p className=" text-neutral-7 w-3/4">
                {specificProduct.categories.name}
              </p>
            </div>
          </div>
          <div className=" py-2">
            <DisclosureBox
              title={"Additional Info"}
              details={specificProduct.details}
              packaging={specificProduct.packaging}
            />
            <DisclosureBox title={"Questions"} />
            <DisclosureBox title={"Review (11)"} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductDetailSection
