import { getImageUrl } from "../utils/utils"
import Button from "./Button"
import DisclosureBox from "./DisclosureBox"
import QuantityButton from "./QuantityButton"
import StarsReview from "./StarsReview"
import WishlistButton from "./WishlistButton"

const ProductDetailSection = () => {
  return (
    <section className="border-neutral-2 border-t border-solid pb-10">
      <div className="py-4">
        <div className="px-40">
          <div className=" button-xs flex items-center gap-4">
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
            <button className="flex items-center gap-1 text-[#605F5F]">
              <span>Living Room</span>
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
          <div className=" flex-shrink-0">
            <img
              className="h-auto w-full"
              src={getImageUrl("Details/Main description Image.png")}
              alt="Main description "
            />
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
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className=" border-neutral-3 flex flex-col items-start gap-4 border-b border-solid pb-4">
              <div className="flex gap-[10px]">
                <span>
                  <StarsReview stars={5} />
                </span>
                <p className=" caption-2 text-neutral-7">11 Reviews</p>
              </div>
              <h4 className=" heading-4 text-neutral-7">Tray Table</h4>
              <p className=" body-2 text-neutral-4">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>
              <div className="flex items-center gap-3">
                <h6 className=" heading-6 text-black">$199.00</h6>
                <h6 className=" heading-7 text-neutral-4 line-through">
                  $400.00
                </h6>
              </div>
            </div>
            <div className=" py-4">
              <div className="flex flex-col gap-2">
                <p className=" body-2-semi text-neutral-4">Measurements</p>
                <p className=" body-1 text-primary-1">17 1/2x20 5/8 "</p>
              </div>
            </div>
            <div className=" flex flex-col items-start gap-4 py-6 ">
              <div className="flex w-full gap-6">
                <div className="w-1/4">
                  <QuantityButton />
                </div>
                <div className="w-3/4">
                  <WishlistButton />
                </div>
              </div>
              <Button text={"Add to Cart"} buttonType="button-m" />
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div className=" caption-2 flex items-start">
                <p className="text-neutral-4  w-1/4">SKU</p>
                <p className="text-neutral-7 w-3/4">1117</p>
              </div>
              <div className="caption-2 flex items-start">
                <p className=" text-neutral-4 w-1/4">CATEGORY</p>
                <p className=" text-neutral-7 w-3/4">Living Room, Bedroom</p>
              </div>
            </div>
            <div className=" py-2">
              <DisclosureBox title={"Additional Info"} />
              <DisclosureBox title={"Questions"} />

              <DisclosureBox title={"Review (11)"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductDetailSection
