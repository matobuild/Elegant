import useWishListCartList from "../customHooks/useWishListCartList"

type WishlistButtonProps = {
  id: number
}

const WishlistButton = ({ id }: WishlistButtonProps) => {
  const { handleWishItem, wishListCartsIds } = useWishListCartList(id)

  return (
    <button
      type="submit"
      onClick={handleWishItem}
      className={`border-neutral-7 hover:bg-neutral-2 text-neutral-7 flex w-full items-center justify-center rounded-lg border border-solid px-10 py-[10px] ${wishListCartsIds.includes(id) ? "bg-secondary-red border-secondary-red" : "border-neutral-7"}`}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1924 6.91706C12.8055 7.28838 12.1945 7.28838 11.8076 6.91706L11.1152 6.2526C10.3048 5.47487 9.20994 5 8 5C5.51472 5 3.5 7.01472 3.5 9.5C3.5 11.8826 4.78979 13.8501 6.65176 15.4666C8.51532 17.0844 10.7434 18.1574 12.0746 18.7051C12.353 18.8196 12.647 18.8196 12.9254 18.7051C14.2566 18.1574 16.4847 17.0844 18.3482 15.4666C20.2102 13.85 21.5 11.8826 21.5 9.5C21.5 7.01472 19.4853 5 17 5C15.7901 5 14.6952 5.47487 13.8848 6.2526L13.1924 6.91706ZM12.5 4.80957C11.3321 3.6888 9.74649 3 8 3C4.41015 3 1.5 5.91015 1.5 9.5C1.5 15.8683 8.47034 19.385 11.3138 20.5547C12.0796 20.8697 12.9204 20.8697 13.6862 20.5547C16.5297 19.385 23.5 15.8682 23.5 9.5C23.5 5.91015 20.5899 3 17 3C15.2535 3 13.6679 3.6888 12.5 4.80957Z"
            fill="#141718"
          />
        </svg>
        <p className="button-m  text-center">
          {wishListCartsIds.includes(id) ? "Wishlist Added" : "Wishlist"}
        </p>
      </div>
    </button>
  )
}

export default WishlistButton
