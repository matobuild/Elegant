import star from "../../assets/icons/star-icon.svg"
import { getImageUrl } from "../utils/utils"

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <img src={getImageUrl("Home/sofa.png")} alt="" />
      <div className="flex flex-col">
        <div className="g-[2px] flex">
          <img src={star} alt="start-icon" />
          <img src={star} alt="start-icon" />
          <img src={star} alt="start-icon" />
          <img src={star} alt="start-icon" />
        </div>
        {/* NEED TO FINISH THE REST */}
      </div>
    </div>
  )
}

export default ProductCard
