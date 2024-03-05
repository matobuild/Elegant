import { getImageUrl } from "../utils/utils"

const ProductDetailSection = () => {
  return (
    <section className="border-neutral-2 border-t border-solid  ">
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
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
      <div className="flex gap-[63px] px-40">
        <div className="flex flex-col gap-6">
          <div className=" flex-shrink-0">
            <img
              src={getImageUrl("Details/Main description Image.png")}
              alt="Main description "
            />
          </div>
          <div className="flex gap-6">
            <div className="flex h-[167px] w-[167px] content-center items-center ">
              <img
                className=""
                src={getImageUrl("Details/Main description Image.png")}
                alt="small main detail"
              />
            </div>
            <div className="flex h-[167px] w-[167px] content-center items-center">
              <img
                src={getImageUrl("Details/middle.png")}
                alt="small middle detail"
              />
            </div>
            <div className="flex h-[167px] w-[167px] content-center items-center">
              <img
                src={getImageUrl("Details/bottom right.png")}
                alt="small right detail"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </section>
  )
}
export default ProductDetailSection
