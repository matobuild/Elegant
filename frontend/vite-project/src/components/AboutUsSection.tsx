import { Link } from "react-router-dom"
import RightArrowLink from "./RightArrowLink"
import { getImageUrl } from "../utils/utils"

const AboutUsSection = () => {
  return (
    <section className="flex">
      <img
        className=" w-1/2"
        src={getImageUrl("Home/left-section-image.png")}
        alt="left-home-image"
      />
      <div className=" bg-neutral-2 flex w-full flex-col justify-center gap-6 pl-[72px] pr-[35px]">
        <div className=" flex flex-col items-start gap-4">
          <h4 className="heading-4 text-neutral-7 self-stretch">About Us</h4>
          <p className="body-2 text-neutral-7 ">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
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

export default AboutUsSection
