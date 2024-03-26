import { wishListCartStore } from "../store/wishListCartStore"

const useWishListCartList = (id: number) => {
  const { wishListCartsIds, updateWishListCartsIds } = wishListCartStore()

  function handleWishItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    e.preventDefault()

    if (wishListCartsIds.includes(id)) {
      // If item is already in wish list, remove it
      updateWishListCartsIds(
        wishListCartsIds.filter((idNumber) => idNumber !== id),
      )
    } else {
      // If item is not in wish list, add it
      updateWishListCartsIds([...wishListCartsIds, id])
    }
  }

  console.log(wishListCartsIds)

  return { handleWishItem, wishListCartsIds }
}
export default useWishListCartList
