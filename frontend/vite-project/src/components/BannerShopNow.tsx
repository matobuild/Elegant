import RightArrowLink from "./RightArrowLink"

type BannerShopNowProps = {
  productType: string
}

const BannerShopNow = ({ productType }: BannerShopNowProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="heading-5 text-neutral-7 self-stretch">{productType}</h5>
      <div>
        <RightArrowLink name="Shop Now" />
      </div>
    </div>
  )
}

export default BannerShopNow
