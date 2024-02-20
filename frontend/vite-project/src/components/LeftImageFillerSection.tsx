import { getImageUrl } from "../utils/utils"
import RightArrowLink from "./RightArrowLink"

const LeftImageFillerSection = () => {
  return (
    <section className="flex">
      <img
        className=" w-1/2"
        src={getImageUrl("Home/left-section-image.png")}
        alt="left-home-image"
      />
      <div className=" flex flex-col justify-center gap-6 pl-[72px] pr-40">
        <div className=" flex flex-col gap-4">
          <h1 className="hairline-1 text-secondary-blue self-stretch">
            SALE UP TO 35% OFF
          </h1>
          <h4 className="heading-4 text-neutral-7 self-stretch">
            HUNDREDS of New lower prices!
          </h4>
          <p className="body-1 text-neutral-7">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
        </div>
        <div>
          <RightArrowLink name="Shop Now" />
        </div>
      </div>
    </section>
  )
}

export default LeftImageFillerSection
