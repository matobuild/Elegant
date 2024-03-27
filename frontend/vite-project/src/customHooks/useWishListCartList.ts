import { useEffect } from "react"
import { WishlistService } from "../services/WishlistService"
import { wishListCartStore } from "../store/wishListCartStore"

const useWishListCartList = (id: number) => {
  const { wishListCartsIds, updateWishListCartsIds } = wishListCartStore()

  async function handleWishItem(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.stopPropagation()
    e.preventDefault()

    if (wishListCartsIds.includes(id)) {
      // If item is already in wish list, remove it
      updateWishListCartsIds(
        wishListCartsIds.filter((idNumber) => idNumber !== id),
      )
      await WishlistService.deleteWishlistCart(id)
    } else {
      // If item is not in wish list, add it
      updateWishListCartsIds([...wishListCartsIds, id])

      const product = { product_id: id, quantity: 1 }
      await WishlistService.postWishlistCart(product)
    }
  }
  // console.log(wishListCartsIds)

  const getWishlist = async () => {
    const wishlistCartList = await WishlistService.getWishlistCart()
    // console.log("the wishlistCartList is ------->", wishlistCartList.data?.data)
    if (wishlistCartList && wishlistCartList.data) {
      const fetchData = wishlistCartList.data.data.map((e) => e.product_id)
      console.log("fetchData", fetchData)
      updateWishListCartsIds(fetchData)
    }
  }

  useEffect(() => {
    getWishlist()
  }, [])

  return { handleWishItem, wishListCartsIds }
}
export default useWishListCartList
