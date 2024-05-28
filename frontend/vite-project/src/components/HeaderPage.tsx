import { Link } from "react-router-dom"
import { getImageUrl } from "../utils/utils"

const HeaderSection = () => {
  return (
    <section className="relative px-8 md:px-40 ">
      <img
        className="h-[308px] w-full object-cover md:h-auto"
        src={getImageUrl("Shop/shop page Banner.png")}
        alt="shop-page-banner"
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-6">
        <div className="button-xs flex gap-4 ">
          <div className="flex items-center  gap-1">
            <Link className="text-[#605F5F]" to={"/"}>
              Home
            </Link>
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
          </div>
          <Link to={"/shop"} className="text-[#121212] ">
            Shop
          </Link>
        </div>
        <h3 className="md:heading-3-a heading-4  text-primary-1">Shop Page</h3>
        <p className="md:body-1-a body-2 text-center text-[#121212]">
          Let’s design the place you always imagined.
        </p>
      </div>
    </section>
  )
}

export default HeaderSection
