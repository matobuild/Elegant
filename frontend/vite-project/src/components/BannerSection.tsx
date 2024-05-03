import { getImageUrl } from "../utils/utils"
import BannerShopNow from "./BannerShopNow"

const BannerSection = () => {
  return (
    <>
      <section className="flex h-full w-full flex-col gap-4 px-8 md:flex-row md:gap-6 md:px-40">
        <div className="relative h-full w-full">
          <div className="x- absolute left-8 top-8 z-10 md:left-12 md:top-12">
            <BannerShopNow productType="Living Room" categoryId={1} />
          </div>
          <img
            className="h-full w-full object-cover"
            src={getImageUrl("Home/Living-room-banner.png")}
            alt="Living-room-banner"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-4 md:gap-6">
          <div className="relative h-full w-full">
            <div className="x- absolute bottom-8 left-8 z-10 md:bottom-10 md:left-8">
              <BannerShopNow productType="Bedroom" categoryId={2} />
            </div>
            <img
              className="h-full w-full object-cover"
              src={getImageUrl("Home/Bedroom-banner.png")}
              alt="Bedroom-banner"
            />
          </div>
          <div className="relative h-full w-full">
            <div className="x- absolute bottom-8 left-8 z-10 md:bottom-10 md:left-8">
              <BannerShopNow productType="Kitchen" categoryId={4} />
            </div>

            <img
              className="h-full w-full object-cover"
              src={getImageUrl("Home/Kitchen-banner.png")}
              alt="Kitchen-banner"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerSection
