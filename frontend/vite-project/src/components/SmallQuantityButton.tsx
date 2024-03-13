type SmallQuantityButtonProps = {
  quantity: number
  setQuantity: (value: number) => void
}

const SmallQuantityButton = ({
  quantity,
  setQuantity,
}: SmallQuantityButtonProps) => {
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className="border-neutral-4 caption-2-semi flex h-8 items-center gap-3 rounded border border-solid px-2 py-3 text-center text-[#121212]  ">
      <button
        className=" hover:bg-neutral-1"
        onClick={() => {
          decreaseQuantity()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M3.22925 8.5H12.5626"
            stroke="#121212"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {quantity}
      <button
        className=" hover:bg-neutral-1"
        onClick={() => increaseQuantity()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.375 3.83398C8.375 3.62688 8.20711 3.45898 8 3.45898C7.79289 3.45898 7.625 3.62688 7.625 3.83398V8.12567H3.33325C3.12615 8.12567 2.95825 8.29356 2.95825 8.50067C2.95825 8.70778 3.12615 8.87567 3.33325 8.87567H7.625V13.1673C7.625 13.3744 7.79289 13.5423 8 13.5423C8.20711 13.5423 8.375 13.3744 8.375 13.1673V8.87567H12.6666C12.8737 8.87567 13.0416 8.70778 13.0416 8.50067C13.0416 8.29356 12.8737 8.12567 12.6666 8.12567H8.375V3.83398Z"
            fill="#121212"
          />
        </svg>
      </button>
    </div>
  )
}

export default SmallQuantityButton
