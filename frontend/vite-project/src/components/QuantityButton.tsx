type QuantityButtonProps = {
  quantity: number
  setQuantity: (value: number) => void
}

const QuantityButton = ({ quantity, setQuantity }: QuantityButtonProps) => {
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="text-16px-semibold flex content-center items-center justify-center gap-6 self-stretch rounded-lg bg-[#F5F5F5] px-4 py-3 text-center text-[#121212]">
      <button
        className=" hover:bg-neutral-1"
        onClick={() => {
          decreaseQuantity()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.03662 10H15.7033"
            stroke="#121212"
            strokeWidth="0.9375"
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
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4687 4.16699C10.4687 3.90811 10.2588 3.69824 9.99994 3.69824C9.74106 3.69824 9.53119 3.90811 9.53119 4.16699V9.5316H4.1665C3.90762 9.5316 3.69775 9.74147 3.69775 10.0004C3.69775 10.2592 3.90762 10.4691 4.1665 10.4691H9.53119V15.8337C9.53119 16.0925 9.74106 16.3024 9.99994 16.3024C10.2588 16.3024 10.4687 16.0925 10.4687 15.8337V10.4691H15.8332C16.0921 10.4691 16.3019 10.2592 16.3019 10.0004C16.3019 9.74147 16.0921 9.5316 15.8332 9.5316H10.4687V4.16699Z"
            fill="#121212"
          />
        </svg>
      </button>
    </div>
  )
}

export default QuantityButton
