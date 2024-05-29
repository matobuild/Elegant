type CartStatusProps = {
  title: string
  step?: number
  textColor?: string
  circleColor?: string
  borderBottom?: true
  borderColor?: string
}

const CartStatus = ({
  textColor,
  circleColor,
  step,
  title,
  borderBottom,
  borderColor,
}: CartStatusProps) => {
  return (
    <div
      className={`pb-[26px] ${borderBottom ? "border-neutral-7 border-b-2 border-solid" : ""} ${borderColor ? borderColor : "border-neutral-7"}`}
    >
      <div className="flex w-64 items-center gap-[17px]">
        <div
          className={`flex h-[42px] w-[42px] items-center justify-center rounded-full ${circleColor ? circleColor : "bg-[#23262F]"}  text-[#FCFCFD]`}
        >
          {step ? (
            step
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12L10 16L18 8"
                stroke="#FCFCFD"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
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
