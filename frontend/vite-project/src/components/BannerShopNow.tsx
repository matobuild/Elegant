import { Link } from "react-router-dom"
import RightArrowLink from "./RightArrowLink"

type BannerShopNowProps = {
  productType: string
  categoryId: number
}

const BannerShopNow = ({ categoryId, productType }: BannerShopNowProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="heading-5 text-neutral-7 self-stretch">{productType}</h5>
      <Link to={`/shop?categoryId=${categoryId}`}>
        <RightArrowLink name="Shop Now" />
      </Link>
    </div>
  )
}

export default BannerShopNow
