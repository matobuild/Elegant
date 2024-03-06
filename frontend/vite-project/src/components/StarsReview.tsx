import star from "../../assets/icons/star-icon.svg"

type StarsReviewProps = { stars: number }

const StarsReview = ({ stars }: StarsReviewProps) => {
  return (
    <div className="g-[2px] flex">
      {Array.from({ length: stars }).map((_, index) => (
        <img key={index} src={star} alt="start-icon" />
      ))}
      &nbsp;
    </div>
  )
}

export default StarsReview
