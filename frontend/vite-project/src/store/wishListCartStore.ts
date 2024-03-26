import { create } from "zustand"

type wishListCartStoreType = {
  wishListCartsIds: number[]
  updateWishListCartsIds: (value: number[]) => void
}

export const wishListCartStore = create<wishListCartStoreType>((set) => ({
  wishListCartsIds: [],
  updateWishListCartsIds: (value: number[]) => {
    set({ wishListCartsIds: value })
  },
}))
