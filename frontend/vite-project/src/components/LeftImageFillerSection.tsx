import { Link } from "react-router-dom"
import { getImageUrl } from "../utils/utils"
import RightArrowLink from "./RightArrowLink"

const LeftImageFillerSection = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <img
        className=" w-full md:w-1/2"
        src={getImageUrl("Home/left-section-image.png")}
        alt="left-home-image"
      />
      <div className=" bg-neutral-2 flex flex-col justify-center gap-6 px-8 py-[58.5px] md:pl-[72px] md:pr-40">
        <div className=" flex flex-col gap-4">
          <h1 className="hairline-1 text-secondary-blue self-stretch">
            SALE UP TO 35% OFF
          </h1>
          <h4 className="md:heading-4-a heading-5 text-neutral-7 self-stretch">
            HUNDREDS of New lower prices!
          </h4>
          <p className="md:body-1-a body-2 text-neutral-7">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
        </div>
        <div>
          <Link to={"/shop"}>
            <RightArrowLink name="Shop Now" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LeftImageFillerSection
