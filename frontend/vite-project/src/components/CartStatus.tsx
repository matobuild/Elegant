type CartStatusProps = {
  title: string
  step: number
  textColor?: string
  circleColor?: string
  borderBottom?: true
}

const CartStatus = ({
  textColor,
  circleColor,
  step,
  title,
  borderBottom,
}: CartStatusProps) => {
  return (
    <div
      className={` pb-[26px] ${borderBottom ? "border-neutral-7 border-b-2 border-solid" : ""}`}
    >
      <div className="flex w-64 items-center gap-[17px]">
        <div
          className={`flex h-[42px] w-[42px] items-center justify-center rounded-full ${circleColor ? circleColor : "bg-[#23262F]"}  text-[#FCFCFD]`}
        >
          {step}
        </div>
        <p
          className={`body-2-semi ${textColor ? textColor : "text-[#23262F]"} `}
        >
          {title}
        </p>
      </div>
    </div>
  )
}

export default CartStatus
